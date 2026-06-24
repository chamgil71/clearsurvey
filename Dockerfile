FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install uv for fast dependency management
RUN pip install --no-cache-dir uv

# Copy manifest files
COPY pyproject.toml uv.lock ./

# Install python dependencies using uv
RUN uv sync --extra dev

# Copy project source files
COPY main.py ./
COPY app/ ./app/
COPY engine/ ./engine/
COPY transforms/ ./transforms/
COPY config/ ./config/

# Expose port and run FastAPI
EXPOSE 8000
CMD ["uv", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
