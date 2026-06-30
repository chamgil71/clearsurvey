@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0web"
echo ============================================
echo  Survey Dashboard -- Vite Dev Server
echo  URL: http://localhost:5173/
echo ============================================
echo.

if not exist "node_modules" (
    echo [1/2] node_modules not found. Running npm install...
    npm install
    if errorlevel 1 (
        echo [ERROR] npm install failed. Please check if Node.js is installed.
        pause
        exit /b 1
    )
) else (
    echo [1/2] node_modules found.
)

echo [2/2] Starting Vite Dev Server...
echo.
npm run dev
pause
