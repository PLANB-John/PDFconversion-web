from fastapi import FastAPI, File, HTTPException, UploadFile

app = FastAPI(title="pdfconversion-worker")


@app.get("/health")
def health_check() -> dict[str, bool | str]:
    return {"ok": True, "service": "pdfconversion-worker"}


@app.post("/inspect")
async def inspect_pdf(file: UploadFile | None = File(default=None)) -> dict[str, bool | str | int]:
    if file is None:
        raise HTTPException(status_code=400, detail="No file uploaded. Please send one PDF file in the 'file' field.")

    is_pdf_content_type = file.content_type == "application/pdf"
    is_pdf_filename = file.filename.lower().endswith(".pdf") if file.filename else False
    if not (is_pdf_content_type or is_pdf_filename):
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a PDF file.")

    content = await file.read()

    return {
        "ok": True,
        "filename": file.filename,
        "contentType": file.content_type,
        "size": len(content),
    }
