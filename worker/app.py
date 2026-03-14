from io import BytesIO

from fastapi import FastAPI, File, HTTPException, UploadFile
from pypdf import PdfReader

FREE_PLAN_PAGE_LIMIT = 20

app = FastAPI(title="pdfconversion-worker")


@app.get("/health")
def health_check() -> dict[str, bool | str]:
    return {"ok": True, "service": "pdfconversion-worker"}


@app.post("/inspect")
async def inspect_pdf(file: UploadFile | None = File(default=None)) -> dict[str, bool | str | int]:
    if file is None:
        raise HTTPException(
            status_code=400,
            detail="No file uploaded. Please send one PDF file in the 'file' field.",
        )

    filename = file.filename or "uploaded.pdf"
    is_pdf_content_type = file.content_type == "application/pdf"
    is_pdf_filename = filename.lower().endswith(".pdf")
    if not (is_pdf_content_type or is_pdf_filename):
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a PDF file.")

    content = await file.read()

    try:
        page_count = len(PdfReader(BytesIO(content)).pages)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Could not read PDF page count. Please upload a valid PDF file.",
        )

    within_free_limit = page_count <= FREE_PLAN_PAGE_LIMIT
    message = (
        "PDF is within the free plan limit."
        if within_free_limit
        else f"PDF exceeds the free plan limit of {FREE_PLAN_PAGE_LIMIT} pages."
    )

    return {
        "ok": True,
        "filename": filename,
        "contentType": file.content_type,
        "size": len(content),
        "pageCount": page_count,
        "withinFreeLimit": within_free_limit,
        "message": message,
    }
