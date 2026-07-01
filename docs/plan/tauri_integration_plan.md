# ClearSurvey 데스크톱 독립 실행 앱(Tauri) 구현 계획서 (A안 격리 구조 확정본)

본 문서는 현재 가동 중인 ClearSurvey의 기존 웹 코드베이스(frontend/backend)에 어떠한 영향도 미치지 않고 완벽하게 격리된 환경에서 **Tauri + Python Sidecar** 데스크톱 패키징을 완료하기 위한 상세 기술 명세 및 폴더 격리 개발 계획서입니다.

---

## 1. 폴더 격리 설계 (Isolation Architecture)

기존 프로젝트의 소스 코드를 안전하게 보존하고 데스크톱 빌드 설정을 격리하기 위해, 프로젝트 루트 기점에 **`desktop/`** 이라는 별도 폴더를 생성하고 모든 Tauri 및 패키징 에셋을 집중시킵니다.

```
c:\ai\clearsurvey\
├── backend/                # [기존] 순정 Python FastAPI 백엔드 (수정 없음)
├── frontend/               # [기존] 순정 Vite/TanStack Start 프론트엔드 (수정 없음)
│
└── desktop/                # [신규] 데스크톱 패키징 전용 격리 폴더
    ├── src-tauri/          # Rust 기반 Tauri 빌더 및 OS 연동 코어
    │   ├── src/main.rs     # Sidecar 프로세스(백엔드) 생명주기 제어 Rust 소스
    │   └── tauri.conf.json # Tauri 빌드 및 사이드카 설정 파일
    │
    ├── frontend-dist/      # 기존 frontend의 정적 컴파일본 임시 수집소 (Vite SPA Output)
    │
    ├── binaries/           # uvicorn/FastAPI를 바이너리로 컴파일한 Sidecar 적재 공간
    │   └── clearsurvey-backend-x86_64-pc-windows-msvc.exe
    │
    ├── package.json        # Tauri CLI 구동용 독립 패키지 설정
    └── build_desktop.bat   # 원클릭 자동 릴리즈 컴파일 헬퍼 스크립트
```

### 💡 격리 설계의 이점
* **무오염성**: 기존 `frontend`와 `backend` 디렉토리 내에 Tauri 및 Rust 관련 컴파일러 환경 찌꺼기가 1도 유입되지 않습니다.
* **유지보수 분리**: 데스크톱 패키징 과정에서 문제가 발생하더라도 기존의 로컬 서버 가동 배치 파일(`start_all.bat` 등)과 웹 컴파일은 100% 정상 작동이 영구 보증됩니다.

---

## 2. 세부 구현 기술 명세 (Technical Spec)

### ① uvicorn/FastAPI 백엔드 Sidecar 패키징 명세
백엔드 엔진을 빌드할 때, 상대적으로 탐색 환경이 변하는 문제를 방지하기 위해 단독 바이너리로 컴파일합니다.
* **도구**: `PyInstaller` (GPL 예외 조항 활용)
* **컴파일 대상**: `backend/app/main.py`
* **바이너리 빌드 구문 (`desktop/` 기점 실행)**:
  ```bash
  # backend 소스를 binaries 폴더 아래로 단독 바이너리 컴파일
  pyinstaller --clean --workpath ./build --distpath ./binaries --name clearsurvey-backend --onedir ../backend/app/main.py
  ```
* **Tauri 외부 바이너리 규격 적용**:
  * Tauri는 보안을 위해 Sidecar 파일명에 타겟 아키텍처 트리플(예: `-x86_64-pc-windows-msvc`)을 강제 접미사로 붙이도록 규정합니다.
  * 컴파일 완료된 `clearsurvey-backend.exe`를 `binaries/clearsurvey-backend-x86_64-pc-windows-msvc.exe`로 이름 변경하여 Tauri의 Sidecar 탐색 규격에 바인딩합니다.

### ② Tauri 코어 프로세스 자동 제어 명세 (Rust)
사용자가 앱을 종료했을 때 백그라운드의 Python API 서버도 확실히 함께 파괴(Kill)되도록 `desktop/src-tauri/src/main.rs` 에 프로세스 수명 주기 제어 루프를 이식합니다.

```rust
// desktop/src-tauri/src/main.rs
use tauri::api::process::{Command, CommandEvent};
use tauri::Manager;

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // 1. Tauri Sidecar에 등록된 백엔드 바이너리 자동 Spawn
      let (mut rx, child) = Command::new_sidecar("clearsurvey-backend")
        .expect("Failed to create sidecar command")
        .spawn()
        .expect("Failed to spawn sidecar process");

      // 2. 백엔드 uvicorn 로그를 실시간 수신하여 Tauri 디버그 콘솔에 파이핑
      tauri::async_runtime::spawn(async move {
        while let Some(event) = rx.recv().await {
          if let CommandEvent::Stdout(line) = event {
            println!("[Backend Out] {}", line);
          }
        }
      });

      // 3. 앱 종료 이벤트 바인딩 - 백엔드 프로세스 강제 Kill 처리
      let app_handle = app.handle();
      app.listen_global("tauri://destroyed", move |_| {
        child.kill().expect("Failed to kill backend sidecar process");
      });

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### ③ `tauri.conf.json` Sidecar 설정 명세
`desktop/src-tauri/tauri.conf.json` 에 외부 빌드 타겟 경로와 사이드카 이름을 셋팅합니다.
```json
{
  "build": {
    "distDir": "../frontend-dist",
    "devPath": "http://localhost:8080"
  },
  "tauri": {
    "bundle": {
      "active": true,
      "targets": "all",
      "externalBin": [
        "binaries/clearsurvey-backend"
      ]
    },
    "allowlist": {
      "all": true
    }
  }
}
```

---

## 3. 원클릭 빌드 자동화 파이프라인 (`desktop/build_desktop.bat`)

앱을 릴리즈 형태로 빌드할 때 매번 수동으로 파일을 복사하는 번거로움을 방지하기 위해, 다음 빌드 시퀀스를 전담하는 원클릭 자동 빌드 뱃지 스크립트를 `desktop/build_desktop.bat` 에 구현하여 이식성을 완성합니다.

```batch
@echo off
setlocal
cd /d "%~dp0"

echo ====================================================
echo  ClearSurvey Desktop Release Auto-Builder
echo ====================================================
echo.

echo [Step 1/4] Cleaning existing packaging directories...
if exist "frontend-dist" rd /s /q "frontend-dist"
if exist "binaries" rd /s /q "binaries"
if exist "build" rd /s /q "build"
mkdir frontend-dist
mkdir binaries
echo Cleanup complete.
echo.

echo [Step 2/4] Compiling Frontend to Static Assets...
cd ../frontend
call npm run build
xcopy /E /I /Y "dist\client" "..\desktop\frontend-dist"
cd ../desktop
echo Frontend compiled and copied to desktop/frontend-dist.
echo.

echo [Step 3/4] Packaging Python Backend as Standalone Binary...
call pyinstaller --clean --workpath ./build --distpath ./binaries --name clearsurvey-backend --onedir ../backend/app/main.py
rename "binaries\clearsurvey-backend\clearsurvey-backend.exe" "clearsurvey-backend-x86_64-pc-windows-msvc.exe"
echo Python Backend packed and renamed inside desktop/binaries.
echo.

echo [Step 4/4] Executing Tauri Native Packaging...
call npm run tauri build
echo.
echo ====================================================
echo  Desktop App build finished successfully!
echo  Installer Path: desktop/src-tauri/target/release/bundle/msi/
echo ====================================================
pause
```

---

## 4. 향후 실행 마일스톤

1. **`desktop/` 격리 폴더 생성 및 초기화**: `npm init` 및 `npm install @tauri-apps/cli` 실행.
2. **`desktop/build_desktop.bat` 스크립트 작성**: 빌드 자동화 스크립트 배치.
3. **Tauri Config & Rust Runner 작성**: 사이드카 생명주기 루틴 세팅.
4. **테스트 빌드 및 MSI 설치 패키지 생성**: `build_desktop.bat`을 더블 클릭해 최종 릴리즈 패키지 추출 검증.
