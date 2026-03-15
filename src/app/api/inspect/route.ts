import { NextResponse } from "next/server";

const INSPECT_ENDPOINT_PATH = "/inspect";

function getWorkerBaseUrl() {
  const workerBaseUrl = process.env.PDF_WORKER_BASE_URL?.trim();

  if (!workerBaseUrl) {
    throw new Error("PDF_WORKER_BASE_URL is not configured.");
  }

  return workerBaseUrl.replace(/\/+$/, "");
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

    const upstreamFormData = new FormData();
    upstreamFormData.append("file", file, file.name);

    const response = await fetch(`${getWorkerBaseUrl()}${INSPECT_ENDPOINT_PATH}`, {
      method: "POST",
      body: upstreamFormData,
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
