"use client";

import { useId, useRef, useState, type ChangeEvent } from "react";

type PdfToJpgCopy = {
  uploadTitle: string;
  dragAndDrop: string;
  chooseFile: string;
  supportedFormat: string;
  limits: string;
  freePlanNote: string;
  selectedFile: string;
  fileSize: string;
  invalidFileType: string;
  fileTooLarge: string;
  maxSizeIs15Mb: string;
  removeFile: string;
  conversionNotConnectedYet: string;
  chooseAnotherFile: string;
  uploaded: string;
  uploadSuccess: string;
  uploadFailed: string;
  serverValidationError: string;
  uploadConnectedNotReady: string;
  uploadStoredSuccessfully: string;
  storedFile: string;
  storageUploadComplete: string;
  uploadJob: string;
  jobId: string;
  storedPathname: string;
  uploadedTime: string;
  convertingPages: string;
  pageCount: string;
  freePlanAllowsUpTo20Pages: string;
  conversionComplete: string;
  conversionFailed: string;
  resultZip: string;
  resultReady: string;
  convertJob: string;
  completedTime: string;
};

type PdfToJpgUploadPanelProps = {
  t: PdfToJpgCopy;
};

type UploadJob = {
  id: string;
  filename: string;
  size: number;
  pathname: string;
  uploadedAt: string;
};

type ConvertJob = {
  id: string;
  sourceJobId: string;
  sourcePathname: string;
  filename: string;
  pageCount: number;
  zipPathname: string;
  completedAt: string;
};

type UploadResponse = {
  ok?: boolean;
  error?: string;
  message?: string;
  job?: UploadJob;
};

type ConvertResponse = {
  ok?: boolean;
  error?: string;
  message?: string;
  convertJob?: ConvertJob;
};

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024;

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const units = ["KB", "MB", "GB"];
  let size = bytes / 1024;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

export function PdfToJpgUploadPanel({ t }: PdfToJpgUploadPanelProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [currentStage, setCurrentStage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [uploadedJob, setUploadedJob] = useState<UploadJob | null>(null);
  const [convertJob, setConvertJob] = useState<ConvertJob | null>(null);

  const resetProgress = () => {
    setIsUploading(false);
    setIsConverting(false);
    setCurrentStage(null);
    setStatusMessage("");
    setUploadedJob(null);
    setConvertJob(null);
  };

  const clearSelection = () => {
    setSelectedFile(null);
    resetProgress();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const resetSelection = () => {
    setError("");
    clearSelection();
  };

  const handleUpload = async () => {
    if (!selectedFile || Boolean(error) || isUploading || isConverting) {
      return;
    }

    setError("");
    setStatusMessage("");
    setUploadedJob(null);
    setConvertJob(null);
    setIsUploading(true);

    try {
      setCurrentStage("Uploading");

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json().catch(() => null)) as UploadResponse | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? t.serverValidationError);
      }

      if (!payload.job) {
        throw new Error(t.serverValidationError);
      }

      setCurrentStage(t.uploaded);
      setUploadedJob(payload.job);
      setStatusMessage(payload.message ?? `${t.uploadStoredSuccessfully} ${t.storageUploadComplete}`);
    } catch (uploadError) {
      const message = uploadError instanceof Error ? uploadError.message : t.serverValidationError;
      setError(`${t.uploadFailed} ${message}`);
      setCurrentStage(null);
      setUploadedJob(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleConvert = async () => {
    if (!uploadedJob || isUploading || isConverting) {
      return;
    }

    setError("");
    setIsConverting(true);
    setCurrentStage(t.convertingPages);
    setStatusMessage(t.convertingPages);
    setConvertJob(null);

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: uploadedJob.id,
          pathname: uploadedJob.pathname,
          filename: uploadedJob.filename,
        }),
      });

      const payload = (await response.json().catch(() => null)) as ConvertResponse | null;

      if (!response.ok || !payload?.ok || !payload.convertJob) {
        throw new Error(payload?.error ?? t.conversionFailed);
      }

      setConvertJob(payload.convertJob);
      setCurrentStage(t.conversionComplete);
      setStatusMessage(payload.message ?? t.resultReady);
    } catch (convertError) {
      const message = convertError instanceof Error ? convertError.message : t.conversionFailed;
      setError(`${t.conversionFailed}: ${message}`);
      setCurrentStage(null);
      setConvertJob(null);
    } finally {
      setIsConverting(false);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const isPdfType = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

    if (!isPdfType) {
      setError(t.invalidFileType);
      clearSelection();
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`${t.fileTooLarge} ${t.maxSizeIs15Mb}`);
      clearSelection();
      return;
    }

    setSelectedFile(file);
    resetProgress();
    setError("");
  };

  const isUploadDisabled = !selectedFile || Boolean(error) || isUploading || isConverting;
  const isConvertDisabled = !uploadedJob || isUploading || isConverting;

  return (
    <div className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">{t.uploadTitle}</h2>

      <div className="flex min-h-72 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <p className="mb-4 text-base text-slate-700">{t.dragAndDrop}</p>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept=".pdf,application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor={inputId}
          className="cursor-pointer rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {selectedFile ? t.chooseAnotherFile : t.chooseFile}
        </label>

        {error ? <p className="mt-4 text-sm font-medium text-red-600">{error}</p> : null}

        {selectedFile ? (
          <div className="mt-4 w-full max-w-md rounded-lg border border-slate-200 bg-white p-4 text-left">
            <p className="text-sm font-medium text-slate-900">
              {t.selectedFile}: {selectedFile.name}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {t.fileSize}: {formatFileSize(selectedFile.size)}
            </p>
            <button
              type="button"
              className="mt-3 text-sm font-medium text-slate-700 underline hover:text-slate-900"
              onClick={resetSelection}
            >
              {t.removeFile}
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-5 space-y-1.5 text-sm text-slate-600">
        <p>{t.supportedFormat}</p>
        <p>{t.limits}</p>
        <p>{t.freePlanNote}</p>
        <p>{t.freePlanAllowsUpTo20Pages}</p>
      </div>

      <div className="mt-6 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <button
          type="button"
          onClick={handleUpload}
          disabled={isUploadDisabled}
          className={`w-full rounded-md px-5 py-2.5 text-sm font-semibold transition ${
            isUploadDisabled
              ? "pointer-events-none cursor-not-allowed bg-slate-300 text-slate-600"
              : "cursor-pointer bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {t.uploadTitle}
        </button>

        <button
          type="button"
          onClick={handleConvert}
          disabled={isConvertDisabled}
          className={`w-full rounded-md px-5 py-2.5 text-sm font-semibold transition ${
            isConvertDisabled
              ? "pointer-events-none cursor-not-allowed bg-slate-300 text-slate-600"
              : "cursor-pointer bg-emerald-700 text-white hover:bg-emerald-600"
          }`}
        >
          Convert to JPG ZIP
        </button>

        {currentStage ? <p className="text-center text-sm font-medium text-slate-700">{currentStage}</p> : null}

        {uploadedJob ? (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-left text-sm text-emerald-900">
            <p className="font-semibold">{t.uploadJob}</p>
            <p className="mt-1">
              {t.jobId}: {uploadedJob.id}
            </p>
            <p>
              {t.selectedFile}: {uploadedJob.filename}
            </p>
            <p>
              {t.fileSize}: {formatFileSize(uploadedJob.size)}
            </p>
            <p>
              {t.storedPathname}: {uploadedJob.pathname}
            </p>
            <p>
              {t.uploadedTime}: {new Date(uploadedJob.uploadedAt).toLocaleString()}
            </p>
          </div>
        ) : null}

        {convertJob ? (
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-left text-sm text-sky-900">
            <p className="font-semibold">{t.convertJob}</p>
            <p className="mt-1">
              {t.jobId}: {convertJob.id}
            </p>
            <p>
              {t.pageCount}: {convertJob.pageCount}
            </p>
            <p>
              {t.resultZip}: {convertJob.zipPathname}
            </p>
            <p>
              {t.completedTime}: {new Date(convertJob.completedAt).toLocaleString()}
            </p>
          </div>
        ) : null}

        <p className="text-center text-sm text-slate-600">{statusMessage || t.conversionNotConnectedYet}</p>
      </div>
    </div>
  );
}
