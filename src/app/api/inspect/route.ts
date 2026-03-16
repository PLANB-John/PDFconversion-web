import { NextResponse } from "next/server";

import { buildSingleFileFormData, getSingleUploadedFile, getWorkerBaseUrl } from "../_workerProxy";

const INSPECT_ENDPOINT_PATH = "/inspect";

export async function POST(request: Request) {
  try {
    const file = await getSingleUploadedFile(request);

    if (!file) {
      return NextResponse.json(
        {
          ok: false,
          error: "File is required.",
        },
        { status: 400 },
      );
    }

    const response = await fetch(`${getWorkerBaseUrl()}${INSPECT_ENDPOINT_PATH}`, {
      method: "POST",
      body: buildSingleFileFormData(file),
      cache: "no-store",
    });

    const payload = (await response.json().catch(() => null)) as
      | Record<string, unknown>
      | { detail?: string }
      | null;

    if (!response.ok) {
      const detail =
        (payload && "detail" in payload && typeof payload.detail === "string" && payload.detail) ||
        "Inspection failed in worker service.";

      return NextResponse.json(
        {
          ok: false,
          error: detail,
        },
        { status: response.status },
      );
    }

    return NextResponse.json(payload ?? { ok: false, error: "Invalid worker response." });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? `Inspection service is unavailable: ${error.message}`
            : "Inspection service is unavailable.",
      },
      { status: 503 },
    );
  }
}
