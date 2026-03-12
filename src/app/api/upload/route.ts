import { NextResponse } from "next/server";

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024;
const BLOB_API_ENDPOINT = "https://blob.vercel-storage.com";

type BlobUploadResponse = {
  pathname?: string;
  url?: string;
};

function buildUniqueUploadPath(originalFilename: string) {
  const timestamp = Date.now();
  const uuid = crypto.randomUUID();
  const safeFilename = originalFilename.toLowerCase().replace(/[^a-z0-9.-]/g, "-");

  return `uploads/pdf/${timestamp}-${uuid}-${safeFilename}`;
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

    const blobResponse = await fetch(`${BLOB_API_ENDPOINT}/${pathname}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": file.type || "application/pdf",
        "x-access": "private",
      },
      body: await file.arrayBuffer(),
    });

    if (!blobResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Failed to upload PDF to storage.",
        },
        { status: 500 },
      );
    }

    const blob = (await blobResponse.json().catch(() => ({}))) as BlobUploadResponse;

    return NextResponse.json({
      ok: true,
      filename: file.name,
      size: file.size,
      pathname: blob.pathname ?? pathname,
      url: blob.url ?? null,
      message: "Upload stored successfully. Conversion backend is not connected yet.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Server validation error.",
      },
      { status: 500 },
    );
  }
}
