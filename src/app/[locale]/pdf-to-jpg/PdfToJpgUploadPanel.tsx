"use client";

import { useEffect, useId, useMemo, useRef, useState, type ChangeEvent } from "react";
import type { Session } from "@supabase/supabase-js";

import { getOrCreateGuestId } from "@/lib/guestId";
import { getSupabaseBrowserClient } from "@/lib/supabaseClient";

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

type InspectResponse = {
  ok?: boolean;
  error?: string;
  message?: string;
  filename?: string;
  contentType?: string;
  size?: number;
  pageCount?: number;
  withinFreeLimit?: boolean;
};

type InspectionResult = {
  filename: string;
  size: number;
  pageCount: number;
  withinFreeLimit: boolean;
  message: string;
};

type UsageResponse = {
  ok: boolean;
  usageCount: number;
  dailyLimit: number;
  remaining: number;
  isLimitReached: boolean;
  identityType: "guest" | "verified_user" | "unverified_user";
  error?: string;
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

function readDownloadFilename(contentDisposition: string | null, fallbackFilename: string) {
  if (!contentDisposition) {
    return fallbackFilename;
  }

  const utf8Match = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
  if (utf8Match?.[1]) {
    return decodeURIComponent(utf8Match[1]);
  }

  const basicMatch = contentDisposition.match(/filename="?([^";]+)"?/i);
  if (basicMatch?.[1]) {
    return basicMatch[1];
  }

  return fallbackFilename;
}

export function PdfToJpgUploadPanel({ t }: PdfToJpgUploadPanelProps) {
  const supabase = useMemo(() => getSupabaseBrowserClient(), []);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [isConverting, setIsConverting] = useState(false);
  const [currentStage, setCurrentStage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [inspectionResult, setInspectionResult] = useState<InspectionResult | null>(null);
  const [isInspecting, setIsInspecting] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [usage, setUsage] = useState<UsageResponse | null>(null);
  const [isUsageLoading, setIsUsageLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function initializeAuthAndUsage() {
      const guestId = getOrCreateGuestId();
      const { data: sessionData } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      const nextSession = sessionData.session ?? null;
      setSession(nextSession);
      await loadUsage(nextSession, guestId);
    }

    void initializeAuthAndUsage();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      const guestId = getOrCreateGuestId();
      void loadUsage(nextSession, guestId);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const clearSelection = () => {
    setSelectedFile(null);
    setIsConverting(false);
    setCurrentStage(null);
    setStatusMessage("");
    setInspectionResult(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const resetSelection = () => {
    setError("");
    clearSelection();
  };

  const loadUsage = async (currentSession: Session | null, guestId: string) => {
    setIsUsageLoading(true);

    try {
      const headers: Record<string, string> = {
        "x-guest-id": guestId,
      };

      if (currentSession?.access_token) {
        headers.Authorization = `Bearer ${currentSession.access_token}`;
      }

      const response = await fetch("/api/usage/daily", {
        method: "GET",
        headers,
      });

      const payload = (await response.json().catch(() => null)) as UsageResponse | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? "Failed to load usage limits.");
      }

      setUsage(payload);
    } catch (usageError) {
      const message = usageError instanceof Error ? usageError.message : "Failed to load usage limits.";
      setError(message);
    } finally {
      setIsUsageLoading(false);
    }
  };

  const handleConvert = async () => {
    if (
      !selectedFile ||
      isConverting ||
      isInspecting ||
      !inspectionResult?.withinFreeLimit ||
      !usage ||
      usage.isLimitReached
    ) {
      return;
    }

    setError("");
    setIsConverting(true);
    setCurrentStage(t.convertingPages);
    setStatusMessage(t.convertingPages);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile, selectedFile.name);

      const response = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { ok?: boolean; error?: string; message?: string }
          | null;

        throw new Error(payload?.error ?? payload?.message ?? t.conversionFailed);
      }

      const blob = await response.blob();
      const fallbackName = `${selectedFile.name.replace(/\.pdf$/i, "") || "converted"}-jpg.zip`;
      const downloadFilename = readDownloadFilename(
        response.headers.get("content-disposition"),
        fallbackName,
      );

      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = downloadFilename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(objectUrl);

      const guestId = getOrCreateGuestId();
      const usageHeaders: Record<string, string> = {
        "x-guest-id": guestId,
      };

      if (session?.access_token) {
        usageHeaders.Authorization = `Bearer ${session.access_token}`;
      }

      const usageResponse = await fetch("/api/usage/daily", {
        method: "POST",
        headers: usageHeaders,
      });

      const usagePayload = (await usageResponse.json().catch(() => null)) as UsageResponse | null;

      if (!usageResponse.ok || !usagePayload?.ok) {
        throw new Error(usagePayload?.error ?? "Conversion succeeded but usage update failed.");
      }

      setUsage(usagePayload);
      setCurrentStage(t.conversionComplete);
      setStatusMessage(t.resultReady);
    } catch (convertError) {
      const message = convertError instanceof Error ? convertError.message : t.conversionFailed;
      setError(`${t.conversionFailed}: ${message}`);
      setCurrentStage(null);
      setStatusMessage("");
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
    setCurrentStage(null);
    setStatusMessage("");
    setInspectionResult(null);
    setError("");

    void inspectSelectedPdf(file);
  };

  const inspectSelectedPdf = async (file: File) => {
    setIsInspecting(true);
    setCurrentStage("Inspecting PDF...");
    setStatusMessage("Checking page count and free plan limit...");
    setInspectionResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/inspect", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json().catch(() => null)) as InspectResponse | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? payload?.message ?? "Failed to inspect this PDF.");
      }

      if (
        typeof payload.pageCount !== "number" ||
        typeof payload.withinFreeLimit !== "boolean" ||
        typeof payload.size !== "number"
      ) {
        throw new Error("Inspection response is missing required fields.");
      }

      const nextInspectionResult: InspectionResult = {
        filename: payload.filename ?? file.name,
        size: payload.size,
        pageCount: payload.pageCount,
        withinFreeLimit: payload.withinFreeLimit,
        message:
          payload.message ??
          (payload.withinFreeLimit
            ? "PDF is within the free plan limit."
            : "PDF exceeds the free plan limit of 20 pages."),
      };

      setInspectionResult(nextInspectionResult);
      setCurrentStage(payload.withinFreeLimit ? "Ready for conversion." : "Conversion blocked.");
      setStatusMessage(nextInspectionResult.message);
    } catch (inspectionError) {
      const message =
        inspectionError instanceof Error
          ? inspectionError.message
          : "Inspection failed. Please try again.";
      setError(`Inspection failed: ${message}`);
      setCurrentStage(null);
      setStatusMessage("");
      setInspectionResult(null);
    } finally {
      setIsInspecting(false);
    }
  };

  const isConvertDisabled =
    !selectedFile || !inspectionResult?.withinFreeLimit || isConverting || isInspecting || usage?.isLimitReached;

  const usageMessage = usage
    ? `Remaining today: ${usage.remaining} / ${usage.dailyLimit}`
    : "Loading daily usage...";
  const limitPrompt =
    usage?.isLimitReached && usage.identityType !== "verified_user"
      ? "Daily limit reached. Sign up and confirm your email to unlock 10 conversions per day."
      : usage?.isLimitReached
        ? "You have reached your daily conversion limit. Please try again tomorrow."
        : "";

  return (
    <div className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">{t.uploadTitle}</h2>

      <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
        <p className="font-medium text-slate-900">{isUsageLoading ? "Loading daily usage..." : usageMessage}</p>
        {limitPrompt ? <p className="mt-1 text-amber-700">{limitPrompt}</p> : null}
      </div>

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

            {inspectionResult ? (
              <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <p>
                  {t.selectedFile}: {inspectionResult.filename}
                </p>
                <p>
                  {t.fileSize}: {formatFileSize(inspectionResult.size)}
                </p>
                <p>
                  {t.pageCount}: {inspectionResult.pageCount}
                </p>
                <p
                  className={`font-medium ${
                    inspectionResult.withinFreeLimit ? "text-emerald-700" : "text-red-600"
                  }`}
                >
                  {inspectionResult.message}
                </p>
              </div>
            ) : null}
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
          onClick={handleConvert}
          disabled={Boolean(isConvertDisabled)}
          className={`w-full rounded-md px-5 py-2.5 text-sm font-semibold transition ${
            isConvertDisabled
              ? "pointer-events-none cursor-not-allowed bg-slate-300 text-slate-600"
              : "cursor-pointer bg-emerald-700 text-white hover:bg-emerald-600"
          }`}
        >
          {isInspecting ? "Inspecting PDF..." : "Convert to JPG ZIP"}
        </button>

        {currentStage ? <p className="text-center text-sm font-medium text-slate-700">{currentStage}</p> : null}

        <p className="text-center text-sm text-slate-600">{statusMessage || t.conversionNotConnectedYet}</p>
      </div>
    </div>
  );
}
