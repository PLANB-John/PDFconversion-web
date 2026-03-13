# PDF Conversion Worker (FastAPI)

This folder contains a minimal Python worker service skeleton built with FastAPI.

## Install dependencies

From the repository root:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r worker/requirements.txt
```

## Run locally

From the repository root:

```bash
uvicorn worker.app:app --host 0.0.0.0 --port 8000 --reload
```

Then open `http://localhost:8000/health`.

## Test `POST /inspect`

Use a multipart file upload with the `file` field:

```bash
curl -X POST "http://localhost:8000/inspect" \
  -F "file=@/path/to/sample.pdf;type=application/pdf"
```

Example success response:

```json
{
  "ok": true,
  "filename": "sample.pdf",
  "contentType": "application/pdf",
  "size": 12345
}
```

Example error response for a non-PDF file:

```json
{
  "detail": "Invalid file type. Please upload a PDF file."
}
```
