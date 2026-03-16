import { NextResponse } from "next/server";

import { buildSingleFileFormData, getSingleUploadedFile, getWorkerBaseUrl } from "../_workerProxy";

const CONVERT_ENDPOINT_PATH = "/convert";

export async function POST(request: Request) {
  try {
    const uploadedFile = await getSingleUploadedFile(request);

    if (!uploadedFile) {
      return NextResponse.json(
        {
          ok: false,
          error: "A multipart/form-data request with exactly one PDF file is required.",
        },
        { status: 400 },
      );
    }

    const response = await fetch(`${getWorkerBaseUrl()}${CONVERT_ENDPOINT_PATH}`, {
      method: "POST",
      body: buildSingleFileFormData(uploadedFile),
      cache: "no-store",
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as
        | { detail?: string; message?: string }
        | null;

      const errorMessage =
        payload?.message ?? payload?.detail ?? "Conversion failed in worker service.";

      return NextResponse.json(
        {
          ok: false,
          error: errorMessage,
        },
        { status: response.status },
      );
    }

    const contentDisposition =
      response.headers.get("content-disposition") ??
      'attachment; filename="converted-jpg.zip"';
    const convertedPageCount = response.headers.get("x-converted-page-count");

    const headers = new Headers({
      "Content-Type": "application/zip",
      "Content-Disposition": contentDisposition,
      "Cache-Control": "no-store",
    });

    if (convertedPageCount) {
      headers.set("X-Converted-Page-Count", convertedPageCount);
    }

    return new Response(response.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? `Conversion service is unavailable: ${error.message}`
            : "Conversion service is unavailable.",
      },
      { status: 503 },
    );
  }
}
