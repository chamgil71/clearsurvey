@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0backend"

REM Projects under C:\ai share one venv: C:\ai\.venv314
REM To use another interpreter, set CLEARSURVEY_PYTHON to its python.exe path.
REM
REM NOTE: keep this file ASCII-only. cmd.exe reads a .bat line by line using the
REM code page active at that moment, so `chcp 65001` above changes it mid-parse and
REM garbles any multi-byte (Korean) line that follows -- the fragments then get run
REM as commands ("'i' is not recognized ..."). The echo strings below are English
REM for the same reason.
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
