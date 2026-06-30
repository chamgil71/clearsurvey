@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
echo ============================================
echo  Survey Engine -- FastAPI Backend Server
echo  API:  http://localhost:8000
echo  Docs: http://localhost:8000/docs
echo ============================================
echo.
echo * Please use with start_web.bat.
echo * To terminate: Ctrl+C
echo.
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
pause
