import { NextResponse } from "next/server";
import { head, put } from "@vercel/blob";
import sharp from "sharp";
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { spawn } from "node:child_process";

const MAX_FREE_PLAN_PAGES = 20;
const JPG_DPI = 150;

type ConvertRequestBody = {
  jobId?: string;
  pathname?: string;
  filename?: string;
};

function createConvertJobId() {
  return `convert_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getPdfPageCount(buffer: Buffer) {
  const content = buffer.toString("latin1");
  const matches = content.match(/\/Type\s*\/Page(?!s)\b/g);
  return matches ? matches.length : 0;
}

function runZip(directory: string, zipFilePath: string) {
  return readdir(directory).then((entries) => {
    const files = entries.filter((file) => file.endsWith(".jpg")).sort();

    if (files.length === 0) {
      throw new Error("No JPG files were generated for ZIP creation.");
    }

    return new Promise<void>((resolve, reject) => {
      const zipProcess = spawn("zip", [
        "-q",
        "-j",
        zipFilePath,
        ...files.map((file) => join(directory, file)),
      ]);

      zipProcess.on("exit", (code) => {
        if (code === 0) {
          resolve();
          return;
        }

        reject(new Error(`zip command failed with code ${code ?? "unknown"}`));
      });

      zipProcess.on("error", reject);
    });
  });
}

export async function POST(request: Request) {
  let workDir = "";

  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json({ ok: false, error: "Blob storage token is missing." }, { status: 500 });
    }

    const body = (await request.json().catch(() => null)) as ConvertRequestBody | null;
    const jobId = body?.jobId?.trim();
    const pathname = body?.pathname?.trim();
    const filename = body?.filename?.trim();

    if (!jobId || !pathname || !filename) {
      return NextResponse.json({ ok: false, error: "jobId, pathname, and filename are required." }, { status: 400 });
    }

    const metadata = await head(pathname, { token });
    const pdfResponse = await fetch(metadata.downloadUrl, { cache: "no-store" });

    if (!pdfResponse.ok) {
      return NextResponse.json({ ok: false, error: "Failed to download uploaded PDF from storage." }, { status: 500 });
    }

    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());
    const pageCount = getPdfPageCount(pdfBuffer);

    if (pageCount <= 0) {
      return NextResponse.json({ ok: false, error: "Could not determine PDF page count." }, { status: 400 });
    }

    if (pageCount > MAX_FREE_PLAN_PAGES) {
      return NextResponse.json(
        {
          ok: false,
          error: `Free plan allows up to ${MAX_FREE_PLAN_PAGES} pages. This PDF has ${pageCount} pages.`,
        },
        { status: 400 },
      );
    }

    if (!sharp.format.pdf.input.file && !sharp.format.pdf.input.buffer) {
      return NextResponse.json(
        {
          ok: false,
          error: "This deployment does not include PDF rendering support. Enable PDF support in the server image pipeline.",
        },
        { status: 500 },
      );
    }

    workDir = await mkdtemp(join(tmpdir(), "pdf-to-jpg-"));

    for (let page = 1; page <= pageCount; page += 1) {
      const outputPath = join(workDir, `page-${page}.jpg`);
      await sharp(pdfBuffer, { density: JPG_DPI, page: page - 1 }).jpeg({ quality: 90 }).toFile(outputPath);
    }

    const zipFilePath = join(workDir, `${randomUUID()}.zip`);
    await runZip(workDir, zipFilePath);

    const zipBuffer = await readFile(zipFilePath);
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
    console.error("Convert route failed", error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Conversion failed.",
      },
      { status: 500 },
    );
  } finally {
    if (workDir) {
      await rm(workDir, { recursive: true, force: true }).catch((cleanupError) => {
        console.error("Failed to cleanup conversion temp directory", cleanupError);
      });
    }
  }
}
