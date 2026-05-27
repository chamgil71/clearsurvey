@echo off
setlocal
cd /d "%~dp0"
echo ============================================
echo  Survey Engine -- FastAPI 백엔드 서버
echo  API:  http://localhost:8000
echo  Docs: http://localhost:8000/docs
echo ============================================
echo.
echo * 웹 대시보드(start_web.bat)와 함께 사용하세요.
echo * 종료: Ctrl+C
echo.
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
pause
