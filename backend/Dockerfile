FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy manifest first so dependency layer is cached independently of source changes
COPY pyproject.toml ./

# Copy project source files (pip install -e 가 패키지를 찾으려면 소스가 먼저 있어야 한다)
COPY main.py ./
COPY app/ ./app/
COPY engine/ ./engine/
COPY transforms/ ./transforms/
COPY config/ ./config/

# Install python dependencies (로컬·CI와 동일한 방식 — pyproject.toml 기준)
RUN pip install --no-cache-dir -e ".[dev]"

# Expose port and run FastAPI
EXPOSE 8000
CMD ["python", "-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
