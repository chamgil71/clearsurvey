# 📋 ClearSurvey 작업 개발 로그 (WORKLOG)

본 문서는 **ClearSurvey (클리어서베이)** 프로젝트의 최초 분석 및 설계 단계부터 3단계 프리미엄 설정 매니저 마법사 및 관심사 분리 아키텍처 수립까지의 작업 개발 이력을 일목요연하게 기록한 작업 진행 로그입니다.

---

## 🗒️ 기술 결정 노트 (ADR)

### [ADR-001] Step3 로그 스트리밍 방식 — 폴링 vs SSE vs WebSocket

#### 방식별 비교

| | 폴링 (현재) | SSE | WebSocket |
|--|-------------|-----|-----------|
| 방향 | 클라이언트 주도 요청 반복 | 서버→클라이언트 단방향 | 양방향 |
| 프로토콜 | HTTP | HTTP | ws:// (별도) |
| 연결 | 매번 새 요청 | 1회 연결 유지 | 1회 연결 유지 |
| 실시간성 | 낮음 (뭉쳐서 옴) | 높음 (즉시 한 줄씩) | 높음 |
| 재연결 | 자동 | 브라우저 자동 | 직접 구현 필요 |
| 방화벽 | 무난 | 무난 | 일부 차단 가능 |
| 구현 복잡도 | 낮음 | 보통 | 높음 |
| FastAPI 지원 | ✅ | ✅ `StreamingResponse` | ✅ `WebSocket` |

#### 각 방식이 유리한 상황

- **폴링**: 완료 여부만 확인, 빈도가 낮을 때
- **SSE**: 서버→클라이언트 단방향 스트리밍 (파이프라인 로그, 진행상황)
- **WebSocket**: 사용자가 실행 중 **취소** 전송, 다수 클라이언트 브로드캐스트, 양방향 인터랙션

#### FastAPI 구현 스케치

```python
# SSE
from fastapi.responses import StreamingResponse

@app.post("/api/projects/{name}/run-stream")
async def run_stream(name: str):
    async def generate():
        async for line in run_pipeline_stream(name):
            yield f"data: {line}\n\n"
    return StreamingResponse(generate(), media_type="text/event-stream")

# WebSocket
from fastapi import WebSocket

@app.websocket("/ws/projects/{name}/run")
async def run_ws(websocket: WebSocket, name: str):
    await websocket.accept()
    async for line in run_pipeline_stream(name):
        await websocket.send_json({"type": "log", "message": line})
    await websocket.send_json({"type": "done"})
    await websocket.close()
```

#### 결정

현재 Step3는 **실행 → 로그 출력 → 완료** 단방향 흐름이므로 **SSE 적용이 적합**.
WebSocket은 파이프라인 **취소 버튼** 기능 추가 시점에 재검토.

---

## 📅 주요 개발 일지 및 마일스톤

### 2026-05-18 ~ 2026-05-20: [Phase 1] 요구사항 식별 및 파이썬 정제 코어 구축
* **파이썬 정제 엔진 설계**:
  - `engine/config.py`의 Pydantic 설정 모델 수립.
  - 전처리기 및 `transforms/` 알고리즘 레지스트리 아키텍처 완성.
  - openpyxl 및 슬라이서 패치 모듈(`engine/slicer.py`) 통합 테스트 통과.
* **CLI 인터페이스 제공**: `main.py`에 `analyze`, `run`, `export` 3대 커맨드 탑재 및 검증 완료.

### 2026-05-21 ~ 2026-05-23: [Phase 2] FastAPI 백엔드 구축 및 REST API 연동
* **FastAPI 엔드포인트 설계**:
  - `app/main.py` 내 프로젝트 CRUD, 엑셀 파일 원격 업로드, yaml/json 병합 저장, 파이프라인 트리거(run), 대시보드 내보내기(export) 엔드포인트 완비.
  - uvicorn 및 CORS 미들웨어를 활용해 프론트엔드 연동을 위한 초석 마련.

### 2026-05-24 ~ 2026-05-25: [Phase 3] P3 편의성 고도화 및 엔진 무결성 검증
* **CLI 보강 및 dry-run**:
  - `run` 커맨드 내 디스크 쓰기를 생략하는 `--dry-run` 시뮬레이션 모드 안전 설계.
* **단위 테스트(Unit Tests) 확충**:
  - `tests/test_summarizer.py`를 신설하여 요약 시트 2단 그리드 배치 알고리즘 검증 및 수식 렌더링 무결성 확인.
  - `pytest` 가동을 통해 총 85개 전체 테스트의 무결한 100% 통과 달성.

### 2026-05-28: [Phase 5] 로컬 통합 안정화 — 버그 수정·gitignore·문서 현행화

#### 백엔드 서버 가동 문제 해결
- `uvicorn` 미설치 확인 후 `pip install uvicorn` 완료
- FastAPI 백엔드 `http://127.0.0.1:8000` 정상 가동, `/api/health` 응답 확인
- 프론트엔드(`http://localhost:8081`)와 동시 구동 체계 확립

#### Admin Step2 크래시 버그 수정
- **원인**: `GET /api/projects/{name}/config` 가 `dashboard: {}` (빈 객체) 반환 시
  `Step2_ConfigEditor`에서 `localDashboard.kpi.map()` 호출 → `kpi`가 `undefined`라 TypeError 발생
  → TanStack Router ErrorComponent("This page didn't load") 표시
- **수정 ①** `app/main.py`: `dashboard_data = {}` → `None` 으로 변경 (dashboard.json 없을 때 null 반환)
- **수정 ②** `Step2_ConfigEditor.tsx`: `normDashboard()` 헬퍼 추가 — `null`/`undefined`/빈 객체 모두
  `{ version:1, kpi:[], charts:[], list:{...} }` 로 정규화

#### source.file 경로 오류 수정
- `projects/수의계약정보/config.yaml` 의 `source.file` 이 `storage\raw\...` (프로젝트 루트 기준)로 되어 있어
  파이프라인이 `projects/수의계약정보/storage/raw/...` 로 잘못 해석
- `../../storage/raw/수의계약정보.xlsx` (config.yaml 위치 기준 상대경로) 로 수정 → 정제 실행 성공

#### gitignore 정책 보완
- `projects/*/output/` 추가: cleaned.xlsx 는 빌드 아티팩트이므로 GitHub에 올리지 않음
  (웹 대시보드는 `web/public/data/*.json` 만으로 동작)
- 기존 추적 중이던 `projects/project_budget/output/project_budget_cleaned.xlsx` git cache 제거

#### 도움말 가이드(GuideDrawer) 전면 현행화
- 구버전의 존재하지 않는 transform 규칙 제거:
  `address_split`, `val_range`, `val_in`, `val_regex`, `to_string`, `to_numeric`, `to_category`, `mask_email`, `mask_phone`
- 실제 엔진 18개 규칙으로 교체, 그룹별(기본/정규화/검증/마스킹/변환/주소/집계) 색상 뱃지 적용
- CLI 탭: `analyze` 옵션 수정(`--name` → `--project --save-project`), `validate` 명령 추가,
  export 경로 `web/public/data/` 로 수정, 프론트엔드 서버 명령 추가

#### cleaned.xlsx 원본 시트 포함 확인
- `engine/pipeline.py` 의 `_write_raw_sheet()` 가 이미 구현되어 있음
- cleaned.xlsx 시트 구성: `cleaned → 원본 → _ConfigLists → Config → Guide` (정상 동작)

#### 데이터 흐름 및 gitignore 정책 정리
```
[로컬 전용 — gitignored]        [GitHub 커밋]
storage/raw/*.xlsx        →  ❌
projects/*/output/*.xlsx  →  ❌  (신규 추가)
                               ✅ projects/*/config.yaml
                               ✅ projects/*/dashboard.json
                               ✅ web/public/data/*.json
```

#### 클라우드 배포 방향 논의 (향후 과제)
- Railway 배포 시 Ephemeral Filesystem 문제: 업로드된 xlsx 파일이 재시작 시 소실
- 단계별 권장 경로: Railway Persistent Volume → Cloudflare R2 / Supabase Storage
- 로컬 안정화 완료 후 진행 예정

#### 메타태그·다크모드·컬럼 순서 버그 수정 (commit ad63319)
- `__root.tsx` 메타 정보 전면 교체: `"Lovable App"` → `"ClearSurvey"` (title/description/author/og/twitter)
- 다크모드 이중 선택자 동기화 수정:
  - 기존: `dataset.theme = "dark"` 만 적용 → legacy CSS만 반응
  - 수정: `.dark` 클래스 토글 동시 추가 → shadcn 컴포넌트도 정상 반응
- Step2_ConfigEditor 컬럼 순서 변경(▲▼) 기능 추가

#### html2pdf CDN → npm 패키지 교체 및 PDF 전체 캡처 수정 (commit ee3277a)
- **CDN 제거**: `__root.tsx` `<body>` 내 cloudflare CDN 스크립트 태그 삭제
- **npm 설치**: `html2pdf.js` 패키지로 교체, 동적 import 방식 적용
- **PDF 내용 잘림 버그 수정**:
  - 원인: `#detail-pdf-content` 가 `height:flex(1) + overflow-y:auto` 구조라 html2canvas가 뷰포트 표시 영역만 캡처
  - 해결: 오프스크린 컨테이너(`position:fixed; left:-9999px; width:760px`) 생성 후 전체 내용 빌드 → 캡처 → 제거
  - `dl + CSS grid` → `<table>` 구조로 변경 (html2canvas grid 렌더링 호환성 개선)
  - `try/finally` 로 컨테이너 정리 보장, 저장 중 버튼 비활성화 추가

#### 오늘 전체 커밋 이력 (2026-05-28)
| 커밋 | 내용 |
|------|------|
| fcd0ace | Admin Step2 크래시·경로·gitignore·가이드 현행화 |
| ad63319 | 메타태그·다크모드·컬럼순서 버그 3종 수정 |
| ee3277a | html2pdf CDN→npm 교체, PDF 전체 내용 캡처 수정 |

---

### 2026-05-26: [Phase 4] P4 프리미엄 웹 아키텍처 및 3단계 설정 매니저 완성 (최종 완료)
* **3계층 관심사 분리 설계 구현**:
  - **구조(JSX)**, **디자인(CSS)**, **로직(Hooks/API)**의 완전한 이탈 격리 수립.
  - `useManagerApi.ts` 커텀 훅을 설계하여 백엔드 생존 감지 및 데모 모드 우아한 비활성화 대응 완비.
* **3단계 설정 마법사 컴포넌트화**:
  - `Step1_ProjectUpload`: 파일 업로드 및 분석.
  - `Step2_ConfigEditor`: 10열 드롭다운 매핑 제어 및 비주얼 KPI/차트 빌더.
  - `Step3_RunDeploy`: 런타임 로그 실시간 스트리밍 콘솔 및 결과 다운로드.
* **도움말 가이드 드로어 (`GuideDrawer.tsx`)**:
  - 대시보드 및 설정 화면 전역에 탑재되어 슬라이딩되는 정합성 룰 요약 가이드 패널 신설.
* **문서 아키텍처 재구조화**:
  - 기존 핵심 파일 백업(`.bak`) 조치 후 `docs/`에 3대 영역 가이드 및 통합 연계본 신설.
  - `docs/plan/` 하위에 기초 구현계획 및 재현성이 담긴 단위별 상세설계서 재정렬 완료.
  - 가칭 `survey2`에서 정밀 정제 데이터 솔루션의 고품격 가치를 드러내는 **`ClearSurvey`** 프로젝트 브랜딩 및 갱신 완료.

### 2026-06-04: 웹 설정 매니저 정합성 개선 및 백엔드/엔진 4대 개선계획 실질 구현 완료

#### ① 웹 설정 매니저 버그 수정 및 연동 개선
- **대시보드 비주얼 레이아웃 설정 정책 충돌 수정**:
  - `web/src/lib/dashboardConfig.ts`의 `loadConfig` 함수를 수정하여, 백엔드 서버로부터 전달받은 설정 스키마(`base`)가 존재하는 경우 브라우저 `localStorage` 캐시보다 최우선시하여 대시보드 렌더링에 반영하도록 정책을 일원화했습니다. 이로써 팀원 간에 서로 다른 차트 화면이 렌더링되는 정합성 문제를 완벽히 해결했습니다.
- **성공 로그 경로 표기 정정**:
  - `web/src/hooks/useManagerApi.ts`의 대시보드 JSON 저장 성공 시 출력되는 예전 static 자산 경로(`web/data/...`)를 마이그레이션된 최신 물리 경로인 `web/public/data/...`로 출력되도록 수정하여 정확한 경로 인지를 도왔습니다.
- **문서 및 리소스 현행화**:
  - `config/dashboard_defaults.yaml` 주석 템플릿 내 대시보드 레이아웃 설정 로드 우선순위 설명 주석을 변경된 서버 우선 순위(`projects/{project}/dashboard.json > localStorage`)에 맞게 현행화하였습니다.
  - `web/docs/MIGRATION_AND_USAGE.md` 가이드 내 대시보드 설정 저장 메커니즘을 `localStorage` 단독 영속화에서 서버 `dashboard.json` 우선 저장 및 모든 사용자 동기화 흐름으로 갱신하였습니다.
- **웹 빌드 검증**:
  - `web/` 경로에서 TypeScript 타입 체커(`npx tsc --noEmit`)를 통과하여 프론트엔드 코드의 안정성을 재확인하였습니다.

#### ② 백엔드 API & 엔진 핵심 개선계획 실질 구현 (코드 수정 완료)
- **미구현 검증 룰 실질 추가**:
  - `transforms/domain/cleansing.py`에 누락되었던 세 가지 검증 룰인 `validate_range` (`val_range`), `validate_in` (`val_in`), `validate_regex` (`val_regex`)를 실질적으로 구현하고 `_TRANSFORMS` 레지스트리 사전에 매핑하여 등록을 완료했습니다.
- **`projects.json` 목록 매니페스트 동기화 및 자동 갱신**:
  - `app/main.py`에 `_update_projects_manifest` 헬퍼 함수를 신설하고, 프로젝트 드래프트 생성(`create_project`) 및 JSON 내보내기(`export_project_json`) 성공 시점에 자동으로 호출하여 `web/public/data/projects.json` 파일에 추가 및 갱신해 주도록 연동을 완료했습니다. (신규 프로젝트가 목록에서 누락되던 결함 제거)
- **FastAPI SSE(Server-Sent Events) 실시간 로깅 스트리밍 구현**:
  - 표준 출력 리다이렉트 객체(`LogStream`)를 구현하여 백그라운드 스레드 가동 시 발생하는 파이프라인 엔진 가공 로그들을 전역 버퍼 `_project_logs[name]`에 적재하고, `/api/projects/{name}/logs/stream` 엔드포인트를 개설하여 실시간 SSE 스트리밍을 제공합니다.
  - 프론트엔드 `useManagerApi.ts`에 `getLogsStreamUrl` API 메소드를 추가하고, `admin.tsx` 내에서 파이프라인 실행 시 즉시 `EventSource` 커넥션을 맺어 엔진 가공 로그를 실시간으로 터미널 UI 화면에 전송 및 렌더링되도록 연동하였습니다. (단방향 단순 상태 폴링의 UX 한계 해결)
- **CLI `deploy` 명령어의 React/Vite 빌드 자산 복사 개편**:
  - 루트 `main.py` 내의 `deploy` CLI 커맨드에서 복사하는 정적 소스를 Vanilla HTML/JS 자산에서 React/Vite 컴파일 산출물(`web/dist/`) 전체 자산으로 개편하여 단독 서비스 패키징 기능을 활성화하였습니다.

#### ③ 전체 흐름 Mermaid 다이어그램 문서 현행화 완료
- **[README.md](file:///C:/ai/clearsurvey/README.md)** 및 **[GUIDE.md](file:///C:/ai/clearsurvey/GUIDE.md)** 상에 전체 시스템의 3단계 데이터 라이프사이클 흐름을 도식화하는 플로우차트와 웹 마법사 ↔ 백엔드 간 SSE 실시간 정제 시퀀스를 묘사하는 Mermaid 순서 흐름도 다이어그램을 신규 추가하여 설명서의 가독성과 현행화 수준을 높였습니다.

#### ④ docs/plan/ 하위 계획 문서 미완료 사항 점검 결과
- **웹 서비스 구축 계획 (`web_plan.md`, `react_migration_plan.md`)**:
  - **FastAPI 백엔드 및 React/Vite 마이그레이션**: 완료되어 웹 설정 매니저와 대시보드 연계 기능이 완수되었습니다.
  - **구조 최적화**: 단일 뷰 통합 마법사(`/admin`) 및 백엔드 단일 라우트(`app/main.py`)로 아키텍처가 최적화되었습니다.
  - **Phase 3 배포 단계 (Docker, Nginx, HTTPS 등)**: 현재 로컬 서버 가동 상태로 프로젝트가 정상 운영 중이며, 실서비스 클라우드 배포 필요성 발생 전까지는 **보류/대기(Pending)** 상태로 분류됩니다.
- **데스크탑 GUI 앱 개발 계획 (`gui_plan.md`)**:
  - Gradio/CustomTkinter/PyQt6 기반 데스크탑 앱 구축은 문서의 상태(미구현 선택 계획)대로 **"옵션 사항(Optional/Pending)"**으로, 현재는 웹 대시보드 우선 정책에 따라 착수하지 않은 예비 로드맵 상태입니다.

---

### 2026-06-05: [Phase 6] Supabase 인증·어드민 대시보드 재설계·CI/CD·E2E 테스트

#### ① 현재완료(Present Perfect) 검증 — 신규 transform 단위 테스트 (test_transforms.py)
- `validate_range` (`val_range`): min/max 경계 10개 케이스
- `validate_in` (`val_in`): 리스트/CSV 허용값, 한글 값 10개 케이스
- `validate_regex` (`val_regex`): 전화번호·한글·이메일 패턴 9개 케이스
- SSE 로그 스트리밍 API (`/api/projects/{name}/logs/stream`) 4개 케이스
- **테스트 총계**: 178 → 211개 (33개 추가), 전체 통과

#### ② GitHub Actions CI 설정 (`.github/workflows/ci.yml`)
- `python-tests` 잡: Python 3.11 + pytest, pyproject.toml dev extras 활용
- `typescript-check` 잡: Node 20 + `npx tsc --noEmit`
- pyproject.toml dev extras에 fastapi/uvicorn/httpx 추가 (API 테스트 의존성 누락 수정)

#### ③ Supabase 인증 + /admin 어드민 대시보드 재설계
- **`web/src/lib/supabase.ts`**: `createClient()` 초기화 (환경변수 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
- **`web/src/routes/login.tsx`**: 이메일/비밀번호 로그인 + GitHub OAuth 로그인 페이지 신설
- **`web/src/routes/admin.tsx`** 전면 재설계:
  - Supabase `getSession()` + `onAuthStateChange`로 클라이언트 인증 게이트 구현
  - 미인증 시 `/login?redirect=/admin` 으로 즉시 리다이렉트
  - `AdminDashboard`: 좌측 사이드바 + 프로젝트 목록 테이블 (발행 토글 스위치 포함)
- **`app/main.py`**: `PATCH /api/projects/{name}/publish` 엔드포인트 추가 (발행 상태 토글)
- **공개 대시보드**: `published !== false` 필터 적용, 어드민 링크 제거
- **`web/.env.local`** (gitignored): Supabase URL/Key 로컬 환경변수 파일

#### ④ Playwright E2E 테스트 (20개 케이스, 전체 통과)
| 파일 | 케이스 수 | 내용 |
|------|-----------|------|
| `web/tests/e2e/dashboard.spec.ts` | 9 | 공개 대시보드 — 헤더·드롭다운·탭·차트·다크모드·가이드·어드민링크없음 |
| `web/tests/e2e/login.spec.ts` | 8 | 로그인 페이지 — 타이틀·폼 요소·OAuth 버튼·리다이렉트 링크 |
| `web/tests/e2e/admin.spec.ts` | 3 | 미인증 /admin → /login 리다이렉트, redirect 파라미터 포함 여부 |

- `web/playwright.config.ts` 신설: `docs/logs/` 에 HTML/JSON/test-results 출력
- CI (`playwright-e2e` 잡) 추가: `npx playwright install --with-deps chromium` + artifact 업로드

#### 오늘 주요 커밋
| 내용 |
|------|
| 현재완료 검증 — transform·SSE 단위 테스트 33개 추가 |
| GitHub Actions CI 설정 (Python pytest + TypeScript tsc) |
| Supabase 인증 + /admin 재설계 + /login 신설 + 발행 토글 API |
| Playwright E2E 20개 케이스 신설 + CI 연동 |


