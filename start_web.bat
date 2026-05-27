@echo off
setlocal
cd /d "%~dp0web"
echo ============================================
echo  Survey Dashboard -- Vite 개발 서버
echo  URL: http://localhost:5173/
echo ============================================
echo.

if not exist "node_modules" (
    echo [1/2] node_modules 없음 -- npm install 실행 중...
    npm install
    if errorlevel 1 (
        echo [오류] npm install 실패. Node.js 설치 여부를 확인하세요.
        pause
        exit /b 1
    )
) else (
    echo [1/2] node_modules 확인 완료
)

echo [2/2] Vite 개발 서버 시작...
echo.
npm run dev
pause
