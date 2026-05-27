@echo off
setlocal
cd /d "%~dp0web"
echo Survey dashboard server
echo URL: http://127.0.0.1:8080/
echo.
python -m http.server 8080 --bind 127.0.0.1
pause
