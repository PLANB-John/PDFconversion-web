import { NextResponse } from "next/server";

type BlobPut = (
  pathname: string,
  body: File,
  options: {
    access: "private";
    addRandomSuffix: false;
    contentType: string;
    token: string;
  },
) => Promise<{ pathname: string; url?: string }>;

async function loadBlobPut(): Promise<BlobPut> {
  try {
    const dynamicImport = new Function(
      "moduleName",
      "return import(moduleName)",
    ) as (moduleName: string) => Promise<{ put?: BlobPut }>;

    const blobModule = await dynamicImport("@vercel/blob");

    if (typeof blobModule.put !== "function") {
      throw new Error("@vercel/blob did not expose put().");
    }

    return blobModule.put;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? `@vercel/blob is unavailable: ${error.message}`
        : "@vercel/blob is unavailable.",
    );
  }
}

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024;

function buildUniqueUploadPath(originalFilename: string) {
  const timestamp = Date.now();
  const uuid = crypto.randomUUID();
  const safeFilename = originalFilename
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  const finalFilename = safeFilename || "upload.pdf";

  return `uploads/pdf/${timestamp}-${uuid}-${finalFilename}`;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          ok: false,
          error: "File is required.",
        },
        { status: 400 },
      );
    }

    const isPdfType =
      file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

    if (!isPdfType) {
      return NextResponse.json(
        {
          ok: false,
          error: "Only PDF files are allowed.",
        },
        { status: 400 },
      );
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        {
          ok: false,
          error: "File size must be 15MB or less.",
        },
        { status: 400 },
      );
    }

    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!token) {
      return NextResponse.json(
        {
          ok: false,
          error: "Blob storage token is missing.",
        },
        { status: 500 },
      );
    }

    const pathname = buildUniqueUploadPath(file.name);

    try {
      const put = await loadBlobPut();

      const blob = await put(pathname, file, {
        access: "private",
        addRandomSuffix: false,
        contentType: file.type || "application/pdf",
        token,
      });

      return NextResponse.json({
        ok: true,
        filename: file.name,
        size: file.size,
        pathname: blob.pathname,
        url: blob.url ?? null,
        message: "Upload stored successfully. Conversion backend is not connected yet.",
      });
    } catch (blobError) {
      console.error("Blob upload failed", blobError);

      return NextResponse.json(
        {
          ok: false,
          error:
            blobError instanceof Error
              ? `Failed to upload PDF to storage: ${blobError.message}`
              : "Failed to upload PDF to storage.",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Upload route failed", error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Server validation error.",
      },
      { status: 500 },
    );
  }
}
