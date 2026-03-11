"use client";

import { useEffect, useId, useRef, useState, type ChangeEvent } from "react";

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
};

type PdfToJpgUploadPanelProps = {
  t: PdfToJpgCopy;
};

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024;
const SIMULATED_STAGES = ["Preparing", "Uploading", "Converting", "Completed"] as const;
const STAGE_DURATION_MS = 900;

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
  const [isProcessing, setIsProcessing] = useState(false);
  const [stageIndex, setStageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isProcessing || stageIndex === null) {
      return;
    }

    if (stageIndex >= SIMULATED_STAGES.length - 1) {
      const completeTimeout = window.setTimeout(() => {
        setIsProcessing(false);
      }, STAGE_DURATION_MS);

      return () => window.clearTimeout(completeTimeout);
    }

    const nextStageTimeout = window.setTimeout(() => {
      setStageIndex((previousStageIndex) => {
        if (previousStageIndex === null) {
          return 0;
        }

        return Math.min(previousStageIndex + 1, SIMULATED_STAGES.length - 1);
      });
    }, STAGE_DURATION_MS);

    return () => window.clearTimeout(nextStageTimeout);
  }, [isProcessing, stageIndex]);

  const resetProgress = () => {
    setIsProcessing(false);
    setStageIndex(null);
  };

  const resetSelection = () => {
    setSelectedFile(null);
    resetProgress();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleConvert = () => {
    if (!selectedFile || Boolean(error) || isProcessing) {
      return;
    }

    setIsProcessing(true);
    setStageIndex(0);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const isPdfType = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

    if (!isPdfType) {
      setError(t.invalidFileType);
      resetSelection();
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`${t.fileTooLarge} ${t.maxSizeIs15Mb}`);
      resetSelection();
      return;
    }

    setSelectedFile(file);
    resetProgress();
    setError("");
  };

  const isConvertDisabled = !selectedFile || Boolean(error) || isProcessing;
  const currentStage = stageIndex === null ? null : SIMULATED_STAGES[stageIndex];

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
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <button
          type="button"
          onClick={handleConvert}
          disabled={isConvertDisabled}
          className={`w-full rounded-md px-5 py-2.5 text-sm font-semibold transition ${
            isConvertDisabled
              ? "pointer-events-none cursor-not-allowed bg-slate-300 text-slate-600"
              : "cursor-pointer bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          Convert
        </button>
        {currentStage ? (
          <p className="mt-2 text-center text-sm font-medium text-slate-700">{currentStage}</p>
        ) : null}
        <p className="mt-2 text-center text-sm text-slate-600">{t.conversionNotConnectedYet}</p>
      </div>
    </div>
  );
}
