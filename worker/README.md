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

The endpoint now validates PDF input, reads the real page count, and applies the free-plan rule (20 pages max).

### Example success response (within free plan)

```json
{
  "ok": true,
  "filename": "sample.pdf",
  "contentType": "application/pdf",
  "size": 12345,
  "pageCount": 12,
  "withinFreeLimit": true,
  "message": "PDF is within the free plan limit."
}
```

### Example response (over free plan)

```json
{
  "ok": true,
  "filename": "large.pdf",
  "contentType": "application/pdf",
  "size": 987654,
  "pageCount": 34,
  "withinFreeLimit": false,
  "message": "PDF exceeds the free plan limit of 20 pages."
}
```

### Example error responses

No file:

```json
{
  "detail": "No file uploaded. Please send one PDF file in the 'file' field."
}
```

Invalid file type:

```json
{
  "detail": "Invalid file type. Please upload a PDF file."
}
```

Unreadable PDF:

```json
{
  "detail": "Could not read PDF page count. Please upload a valid PDF file."
}
```
