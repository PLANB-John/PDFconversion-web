import { NextResponse } from "next/server";

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024;

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

    return NextResponse.json({
      ok: true,
      filename: file.name,
      size: file.size,
      message: "Upload received. Conversion backend is not connected yet.",
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
