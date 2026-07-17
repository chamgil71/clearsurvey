@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0frontend"
echo ============================================
echo  Survey Dashboard -- Vite Dev Server
echo  URL: http://localhost:5173/
echo ============================================
echo.

REM Keep this file ASCII-only -- see the note in start_backend.bat for why.
REM
REM Package manager is bun: bun.lock is the source of truth (see frontend/.gitignore).
REM `npm install` would resolve its own tree and defeat that pin.
if not exist "node_modules" (
    echo [1/2] node_modules not found. Running bun install...
    bun install
    if errorlevel 1 (
        echo [ERROR] bun install failed. Is bun installed?  https://bun.sh
        pause
        exit /b 1
    )
) else (
    echo [1/2] node_modules found.
)

echo [2/2] Starting Vite Dev Server...
echo.
REM No --force here on purpose. It throws away node_modules/.vite (~25MB of
REM pre-bundled deps) and rebuilds it on EVERY start -- measured at ~5.4s extra
REM before the first page responds (14.1s vs 8.7s). It is a troubleshooting flag,
REM not a routine one. If deps ever go stale, run once by hand:
REM     bun run dev -- --port 5173 --force
bun run dev -- --port 5173
pause
