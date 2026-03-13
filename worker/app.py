from fastapi import FastAPI

app = FastAPI(title="pdfconversion-worker")


@app.get("/health")
def health_check() -> dict[str, bool | str]:
    return {"ok": True, "service": "pdfconversion-worker"}
