@echo off
setlocal
cd /d "%~dp0"

echo ====================================================
echo  ClearSurvey Dev Server Launcher
echo ====================================================
echo.
echo [1/3] Cleaning up build caches and Vite compiler cache...
if exist "frontend\.tanstack" rd /s /q "frontend\.tanstack"
if exist "frontend\.wrangler" rd /s /q "frontend\.wrangler"
if exist "frontend\dist" rd /s /q "frontend\dist"
if exist "frontend\node_modules\.vite" rd /s /q "frontend\node_modules\.vite"
echo Caches cleaned successfully.
echo.

echo [2/3] Starting FastAPI Backend...
start "ClearSurvey Backend" cmd /c "start_backend.bat"
timeout /t 5 >nul

echo [3/3] Starting Vite Frontend...
start "ClearSurvey Frontend" cmd /c "start_web.bat"

echo.
echo Both servers have been launched successfully!
echo.
timeout /t 5
