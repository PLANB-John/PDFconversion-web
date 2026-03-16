const WORKER_FILE_FIELD = "file";

export function getWorkerBaseUrl() {
  const workerBaseUrl = process.env.PDF_WORKER_BASE_URL?.trim();

  if (!workerBaseUrl) {
    throw new Error("PDF_WORKER_BASE_URL is not configured.");
  }

  return workerBaseUrl.replace(/\/+$/, "");
}

export async function getSingleUploadedFile(request: Request): Promise<File | null> {
  const formData = await request.formData();
  const uploadedFile = formData.get(WORKER_FILE_FIELD);

  if (!(uploadedFile instanceof File)) {
    return null;
  }

  return uploadedFile;
}

export function buildSingleFileFormData(file: File): FormData {
  const upstreamFormData = new FormData();
  upstreamFormData.append(WORKER_FILE_FIELD, file, file.name);
  return upstreamFormData;
}

