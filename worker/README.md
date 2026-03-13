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
