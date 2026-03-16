from io import BytesIO
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

import pypdfium2 as pdfium
from fastapi import FastAPI, File, HTTPException, Request, UploadFile
from fastapi.responses import JSONResponse, Response
from pypdf import PdfReader

FREE_PLAN_PAGE_LIMIT = 20
PDF_MAGIC_HEADER = b"%PDF"

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
    content_type = file.content_type or "application/octet-stream"
    is_pdf_content_type = content_type == "application/pdf"
    is_pdf_filename = filename.lower().endswith(".pdf")
    content = await file.read()
    await file.close()
    is_pdf_header = content.startswith(PDF_MAGIC_HEADER)

    if not (is_pdf_content_type or is_pdf_filename or is_pdf_header):
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a PDF file.")

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
        "contentType": content_type,
        "size": len(content),
        "pageCount": page_count,
        "withinFreeLimit": within_free_limit,
        "message": message,
    }


@app.post("/convert")
async def convert_pdf(request: Request) -> Response:
    form = await request.form()
    uploaded_files = [value for value in form.values() if isinstance(value, UploadFile)]

    if len(uploaded_files) != 1:
        raise HTTPException(
            status_code=400,
            detail="Exactly one PDF file must be uploaded in multipart/form-data.",
        )

    file = uploaded_files[0]
    filename = file.filename or "uploaded.pdf"
    content_type = file.content_type or "application/octet-stream"
    is_pdf_content_type = content_type == "application/pdf"
    is_pdf_filename = filename.lower().endswith(".pdf")
    content = await file.read()
    await file.close()
    is_pdf_header = content.startswith(PDF_MAGIC_HEADER)

    if not (is_pdf_content_type or is_pdf_filename or is_pdf_header):
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a PDF file.")

    try:
        page_count = len(PdfReader(BytesIO(content)).pages)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Could not read PDF page count. Please upload a valid PDF file.",
        )

    if page_count > FREE_PLAN_PAGE_LIMIT:
        return JSONResponse(
            status_code=400,
            content={
                "ok": False,
                "message": f"PDF exceeds the free plan limit of {FREE_PLAN_PAGE_LIMIT} pages.",
            },
        )

    base_name = Path(filename).stem or "converted"
    zip_filename = f"{base_name}-jpg.zip"
    zip_bytes = BytesIO()

    pdf = pdfium.PdfDocument(content)

    with ZipFile(zip_bytes, mode="w", compression=ZIP_DEFLATED) as zip_file:
        for page_index in range(len(pdf)):
            page = pdf[page_index]
            rendered_page = page.render(scale=2)
            pil_image = rendered_page.to_pil()

            jpg_bytes = BytesIO()
            pil_image.save(jpg_bytes, format="JPEG", quality=90)
            zip_file.writestr(f"page-{page_index + 1}.jpg", jpg_bytes.getvalue())

            pil_image.close()

    pdf.close()

    return Response(
        content=zip_bytes.getvalue(),
        media_type="application/zip",
        headers={
            "Content-Disposition": f'attachment; filename="{zip_filename}"',
            "X-Converted-Page-Count": str(page_count),
        },
    )
