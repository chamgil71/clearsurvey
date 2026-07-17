@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0backend"

REM C:\ai 아래 프로젝트들은 공용 가상환경 C:\ai\.venv314 를 함께 쓴다.
REM 다른 경로를 쓰려면 CLEARSURVEY_PYTHON 에 python.exe 경로를 지정한다.
if not defined CLEARSURVEY_PYTHON set "CLEARSURVEY_PYTHON=C:\ai\.venv314\Scripts\python.exe"

if not exist "%CLEARSURVEY_PYTHON%" (
    echo [ERROR] Python not found: %CLEARSURVEY_PYTHON%
    echo         Set CLEARSURVEY_PYTHON to your python.exe path, e.g.
    echo         set CLEARSURVEY_PYTHON=C:\path\to\venv\Scripts\python.exe
    echo.
    pause
    exit /b 1
)

echo ============================================
echo  Survey Engine -- FastAPI Backend Server
echo  API:  http://localhost:8000
echo  Docs: http://localhost:8000/docs
echo  Env:  %CLEARSURVEY_PYTHON%
echo ============================================
echo.
echo * Please use with start_web.bat.
echo * To terminate: Ctrl+C
echo.
"%CLEARSURVEY_PYTHON%" -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
pause
