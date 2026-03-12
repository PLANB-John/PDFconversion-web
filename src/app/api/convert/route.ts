import { NextResponse } from "next/server";
import { head, put } from "@vercel/blob";
import JSZip from "jszip";
import { createCanvas, type Canvas } from "@napi-rs/canvas";
import { randomUUID } from "node:crypto";
import { join } from "node:path";
import { existsSync } from "node:fs";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf.mjs";

export const runtime = "nodejs";

const MAX_FREE_PLAN_PAGES = 20;
const JPG_DPI = 150;
const JPG_QUALITY = 0.9;

type PdfJsWorkerResolution = {
  workerPath: string;
};

let pdfjsWorkerResolution: PdfJsWorkerResolution | null = null;

function ensurePdfJsWorkerConfigured() {
  if (pdfjsWorkerResolution) {
    return pdfjsWorkerResolution;
  }

  const appRoot = process.cwd();

  if (typeof appRoot !== "string" || appRoot.length === 0) {
    throw new Error("Unable to resolve application root from process.cwd().");
  }

  const workerPath = join(
    appRoot,
    "node_modules",
    "pdfjs-dist",
    "legacy",
    "build",
    "pdf.worker.mjs",
  );

  if (!existsSync(workerPath)) {
    throw new Error(
      `PDF.js worker file was not found at expected path: ${workerPath}.`,
    );
  }

  GlobalWorkerOptions.workerSrc = workerPath;

  pdfjsWorkerResolution = { workerPath };

  return pdfjsWorkerResolution;
}

type ConvertRequestBody = {
  jobId?: string;
  pathname?: string;
  filename?: string;
};

class PrivateBlobLoadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PrivateBlobLoadError";
  }
}

class PageLimitExceededError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PageLimitExceededError";
  }
}

async function readPrivateBlob(pathname: string, token: string) {
  try {
    const metadata = await head(pathname, { token });
    const response = await fetch(metadata.url, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new PrivateBlobLoadError(
        `Storage request failed with status ${response.status}.`,
      );
    }

    return Buffer.from(await response.arrayBuffer());
  } catch (error) {
    if (error instanceof PrivateBlobLoadError) {
      throw error;
    }

    throw new PrivateBlobLoadError(
      "Failed to load uploaded PDF from private blob storage.",
    );
  }
}

function createConvertJobId() {
  return `convert_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

type RenderedJpg = {
  filename: string;
  buffer: Buffer;
};

async function encodeCanvasToJpgBuffer(canvas: Canvas) {
  if (typeof canvas.encode === "function") {
    const encoded = await canvas.encode("jpeg", JPG_QUALITY * 100);
    return Buffer.from(encoded);
  }

  if (typeof canvas.toBuffer === "function") {
    return canvas.toBuffer("image/jpeg", JPG_QUALITY);
  }

  throw new Error("Canvas backend does not support JPEG encoding.");
}

async function renderPdfToJpgBuffers(pdfBuffer: Buffer) {
  const workerResolution = ensurePdfJsWorkerConfigured();

  // This API route executes in Node.js and points PDF.js to the real worker file
  // within the installed package to avoid route-relative fallback resolution.
  const loadingTask = getDocument({
    data: new Uint8Array(pdfBuffer),
    useSystemFonts: true,
    isEvalSupported: false,
  });

  let pdfDocument;
  try {
    pdfDocument = await loadingTask.promise;
  } catch (error) {
    console.error("Failed to initialize PDF.js document in Node runtime", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      pdfBufferBytes: pdfBuffer.byteLength,
      configuredWorkerSrc: GlobalWorkerOptions.workerSrc,
      resolvedWorkerPath: workerResolution.workerPath,
      resolvedWorkerExists: existsSync(workerResolution.workerPath),
    });
    throw error;
  }

  if (pdfDocument.numPages > MAX_FREE_PLAN_PAGES) {
    await pdfDocument.destroy();
    throw new PageLimitExceededError(
      `Free plan allows up to ${MAX_FREE_PLAN_PAGES} pages. This PDF has ${pdfDocument.numPages} pages.`,
    );
  }

  const scale = JPG_DPI / 72;
  const renderedPages: RenderedJpg[] = [];

  try {
    for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
      const page = await pdfDocument.getPage(pageNumber);
      const viewport = page.getViewport({ scale });

      const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
      const context = canvas.getContext("2d");
      // Server-side compatibility cast: pdfjs-dist expects a DOM-like 2D context type,
      // while @napi-rs/canvas provides SKRSContext2D with runtime-compatible methods.
      const pdfjsCanvasContext = context as unknown as CanvasRenderingContext2D;

      await page.render({
        canvasContext: pdfjsCanvasContext,
        viewport,
      }).promise;

      renderedPages.push({
        filename: `page-${pageNumber}.jpg`,
        buffer: await encodeCanvasToJpgBuffer(canvas),
      });

      page.cleanup();
    }
  } finally {
    await pdfDocument.destroy();
  }

  if (renderedPages.length === 0) {
    throw new Error("No JPG files were generated during PDF rendering.");
  }

  return {
    pageCount: renderedPages.length,
    renderedPages,
  };
}

async function createZipFromRenderedPages(renderedPages: RenderedJpg[]) {
  const zip = new JSZip();

  for (const page of renderedPages) {
    zip.file(page.filename, page.buffer);
  }

  return zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  });
}

export async function POST(request: Request) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json(
        { ok: false, error: "Blob storage token is missing." },
        { status: 500 },
      );
    }

    const body = (await request.json().catch(() => null)) as ConvertRequestBody | null;
    const jobId = body?.jobId?.trim();
    const pathname = body?.pathname?.trim();
    const filename = body?.filename?.trim();

    if (!jobId || !pathname || !filename) {
      return NextResponse.json(
        { ok: false, error: "jobId, pathname, and filename are required." },
        { status: 400 },
      );
    }

    const pdfBuffer = await readPrivateBlob(pathname, token);
    const { pageCount, renderedPages } = await renderPdfToJpgBuffers(pdfBuffer);

    const zipBuffer = await createZipFromRenderedPages(renderedPages);
    const safeFilename = filename.replace(/\.pdf$/i, "") || "converted";
    const zipPathname = `results/jpg/${Date.now()}-${randomUUID()}-${safeFilename}.zip`;

    const zipBlob = await put(zipPathname, zipBuffer, {
      access: "private",
      addRandomSuffix: false,
      contentType: "application/zip",
      token,
    });

    const completedAt = new Date().toISOString();

    return NextResponse.json({
      ok: true,
      message: "Conversion complete.",
      convertJob: {
        id: createConvertJobId(),
        sourceJobId: jobId,
        sourcePathname: pathname,
        filename,
        pageCount,
        zipPathname: zipBlob.pathname,
        completedAt,
      },
    });
  } catch (error) {
    if (error instanceof PrivateBlobLoadError) {
      console.error("Failed to load source PDF from private blob", {
        message: error.message,
      });

      return NextResponse.json(
        {
          ok: false,
          error: "Failed to load uploaded PDF from private storage.",
        },
        { status: 500 },
      );
    }

    if (error instanceof PageLimitExceededError) {
      return NextResponse.json(
        {
          ok: false,
          error: error.message,
        },
        { status: 400 },
      );
    }

    console.error("PDF conversion failed", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? `Conversion failed: ${error.message}`
            : "Conversion failed due to an unexpected server error.",
      },
      { status: 500 },
    );
  }
}
