# ClearSurvey 시스템 분석 및 개선 구현 완료 보고서

본 문서는 ClearSurvey 프로젝트의 파이썬 정제 코어, FastAPI 백엔드, React 웹 프론트엔드 전체 시스템을 다차원 분석하고, 기존에 제기되었던 4대 개선 방안(미구현 검증 룰 보강, projects.json 동동기화, SSE 기반 실시간 로그 스트리밍, CLI deploy 명령어 개편)을 실질적으로 모두 구현 완료한 내역을 상세히 정리한 최종 시스템 분석 보고서입니다.

---

## 1. 구현 완료 현황 (Implemented Status)

ClearSurvey 프로젝트에 설계 및 개선 구현이 100% 완료되어 성공적으로 작동 중인 기능들의 현황입니다.

### ① 파이썬 정제 엔진 CLI 코어 (`engine/`, `transforms/`)
* **구조 분석 및 Draft 생성 (`analyze`)**: 원본 엑셀을 업로드하거나 분석할 때 데이터 영역, 헤더 행 번호, 빈 컬럼 등을 자동 검출하여 설정 스냅샷 시트가 내장된 `draft_*.xlsx`를 생성합니다.
* **[개선 완수] 미구현 정제 검증 룰 실질 추가**:
  - 기존 가이드에 명세되었으나 실제 엔진에 누락되어 사용 시 Key Error를 일으키던 `val_range`(수치 범위 검증), `val_in`(목록 내 존재 검증), `val_regex`(정규표현식 매칭 검증)를 `transforms/domain/cleansing.py`에 직접 구현 완료하고 `_TRANSFORMS` 레지스트리에 매핑을 완료하였습니다.
* **파이프라인 실행 (`run`)**: 전처리(`Preprocess` 내 `fill_down`, `row_filter`)를 먼저 수행한 후, `TransformRegistry`에 등록된 20여 종의 클렌징 룰을 컬럼별로 적용하여 정제 시트(`Cleaned`)와 수식 집계 시트(`Summary`), `Config` 시트가 포함된 최종 결과 엑셀을 안전하게 생성합니다.
* **다중 소스 병합 (`merge`)**: 설정된 폴더 또는 파일 목록 내 모든 엑셀 데이터를 병합하고 중복 제거(`dedup`) 및 출처 파일 기록 기능을 지원합니다.
* **독립 대시보드 내보내기 및 배포 (`export`, `deploy`)**: 가공된 최종 엑셀을 대시보드 뷰어용 JSON으로 변환하고, 특정 프로젝트만 독립적으로 배포할 수 있는 정적 웹 팩 생성 기능을 포함합니다.
* **[개선 완수] CLI `deploy` 자산 복사 경로 개편**:
  - 루트 `main.py` 내의 `deploy` 명령이 구형 Vanilla HTML/JS 자산을 복사하던 문제점을 개선하여, 최신 React/Vite 번들 산출물 폴더인 `web/dist/`의 전체 빌드 자산들을 복사하도록 수정함으로써 단독 대시보드 서빙 기능을 정상화하였습니다.

### ② FastAPI 백엔드 서버 (`app/main.py`)
* **비동기 백그라운드 구동**: 정제 및 분석 시간이 길어질 수 있으므로 FastAPI의 `BackgroundTasks`와 상태 저장소(`_pipeline_jobs`)를 활용하여 HTTP 타임아웃을 예방하고 실행 상태를 관리합니다.
* **[개선 완수] `projects.json` 자동 동기화**:
  - `_update_projects_manifest` 헬퍼 함수를 신설하여 신규 프로젝트 업로드/생성 및 대시보드 데이터 내보내기 성공 완료 시점에 `web/public/data/projects.json` 정적 매니페스트 파일을 자동 갱신하도록 처리했습니다. 이를 통해 새 프로젝트 추가 시 메인 대시보드 드롭다운 리스트에 실시간 반영되지 않던 결함을 완벽히 해결했습니다.
* **[개선 완수] 실시간 로그 수집 및 SSE(Server-Sent Events) API 도입**:
  - 파이썬 표준 출력(`sys.stdout`) 가로채기 객체(`LogStream`)를 구현하여 백그라운드 구동 스레드(`_run_pipeline_background`)의 상세 진척 `print` 로그들을 `_project_logs[name]` 전역 버퍼에 실시간 적재합니다.
  - FastAPI 비동기 스트리밍 응답을 활용하여 `/api/projects/{name}/logs/stream` 엔드포인트를 개설하고, 수집된 상세 엔진 로그를 EventSource(SSE) 포맷으로 1줄씩 실시간 스트리밍합니다.
* **우회 저장(Fallback) 처리**: 결과 엑셀 파일이 사용자 로컬에서 이미 열려 있어 쓰기 권한이 잠겨 있는 경우, 프로세스를 중단하는 대신 타임스탬프(`_HHMMSS`)가 주입된 임시 파일명으로 우회 저장하여 시스템 안정성을 확보했습니다.

### ③ React/Vite 웹 대시보드 및 설정 매니저 (`web/`)
* **Vite 7 및 React 19 SPA**: 고성능 프론트엔드 구동 환경을 제공하며, `@tanstack/react-router` 기반의 파일 기반 라우팅을 채택했습니다.
* **인터랙티브 뷰어**: Recharts 기반의 반응형 시각화 차트와 다크 모드, 우측 Drawer 상세 패널, A4 오피스 규격 PDF/CSV 내보내기 및 인쇄 기능이 통합되어 있습니다.
* **3단계 설정 매니저 마법사 & SSE 로깅 연동**:
  - **[개선 완수]**: `Step3_RunDeploy` 화면 진입 후 정제 실행 시, 프론트엔드가 백엔드 SSE API `/api/projects/{name}/logs/stream` 커넥션을 즉시 수립하여, 파이썬 엔진이 뿜어내는 가독성 높은 실시간 가공 상세 로그들을 검은색 터미널 UI에 실시간 렌더링하도록 완성하였습니다.
* **[개선 완수] 대시보드 레이아웃 설정 정책 충돌 해소**:
  - `web/src/lib/dashboardConfig.ts`의 `loadConfig` 함수를 수정하여, 백엔드로부터 전달받은 신뢰 원천(Single Source of Truth) 설정 정보인 `base`가 존재하는 경우 브라우저 `localStorage` 캐시보다 우선 적용하도록 하여 이중 저장소 정합성 이슈를 완벽하게 해소했습니다.

---

## 2. 검증: 정적 데이터 경로 전환의 기술적 배경 (`web/data` ➡️ `web/public/data`)

Vite 마이그레이션 과정에서 데이터 생성 폴더가 `web/data`에서 `web/public/data`로 변경된 이유와 그 타당성에 대한 정밀 검증입니다.

### ① 왜 변경되었는가? (Vite의 `publicDir` 격리 메커니즘)
* **Vanilla JS 시절 (Pre-migration)**: 
  - 과거에는 `web` 폴더 자체가 단순 웹 서버의 정적 루트(Document Root)로 지정되어 동작했습니다.
  - `python -m http.server 8080 --directory web` 명령어로 서빙할 경우, 브라우저가 `http://localhost:8080/data/projects.json`을 요청하면 웹 서버는 물리 경로 `web/data/projects.json`을 그대로 찾아 반환했습니다.
* **React/Vite 도입 이후**:
  - Vite 프로젝트 구조에서는 프로젝트 루트(`web/`) 아래에 컴파일되지 않은 TypeScript 코드(`src/`), 설정 파일(`package.json`, `tsconfig.json`, `vite.config.ts`), 의존성 모듈(`node_modules/`)이 함께 혼재되어 있습니다.
  - Vite의 기본 개발 서버(`npm run dev`)는 **`public/` 디렉토리에 있는 자산들만 빌드 가공 없이 브라우저에 직접 정적 파일(Static Assets)로 서빙**하도록 강제 설계되어 있습니다.
  - 따라서, `/data/projects.json`에 대한 브라우저 fetch 요청을 처리하려면, 파일이 물리적으로 `web/public/data/projects.json` 위치에 있어야만 Vite 서버가 이를 매핑하여 정상 반환(200 OK)합니다. 만약 `web/data/projects.json`에 있다면 404 Not Found가 발생합니다.

### ② "그냥 `web/data`로 두고 설정만 바꾸면 안 되는가?"
* **Vite 설정의 제약성**:
  - `vite.config.ts`에서 `publicDir` 설정을 변경하여 정적 루트를 바꿀 수 있으나, 만약 이를 프로젝트 루트인 `web`으로 넓히게 되면 `src/` 소스 코드나 민감한 구성 파일이 외부로 직접 노출되어 **심각한 보안 취약성**이 발생합니다.
  - Vite는 기본적으로 단일 `publicDir`만을 지정할 수 있으므로, 소스 코드와 설정 파일이 있는 프로젝트 루트에서 정적 JSON 데이터 폴더만 안전하게 노출하려면 독립된 `public/` 디렉토리 내에 격리하는 것이 표준 관례(Standard Convention)에 부합합니다.
* **빌드 산출물(`dist/`)의 자립성**:
  - `npm run build`를 실행하여 배포판을 생성할 때, Vite는 `public/` 폴더 안의 내용만을 빌드 결과물 디렉토리인 `dist/`에 그대로 복사합니다.
  - 만약 데이터를 `web/data/`에 둔다면 빌드 시 누락되므로 배포 결과물(`dist/`)만 단독으로 서버에 올렸을 때 정적 JSON 데이터가 없어 대시보드가 구동되지 않고 빈 화면이 노출됩니다.
  - 파이썬 CLI의 `deploy` 명령어 역시 최종 컴파일된 `dist/`를 통째로 복제하는 방식이므로, `public/data/`에 데이터가 들어있어야 독립적인 웹 대시보드 패키징이 올바르게 동작합니다.

### ③ 소결론
* 따라서 데이터 디렉토리를 `web/public/data/`로 정비한 것은 Vite의 리소스 격리 및 정적 자산 번들링 구조상 **기술적으로 타당하며 필수적인 조치**였습니다. 
* 다만, 백엔드와 CLI 코드는 실제 `web/public/data/`에 쓰고 있었음에도 불구하고, 도움말이나 이전 설명서 문서가 Vanilla JS 시절의 `web/data/` 경로를 가리키고 있었던 괴리가 존재하여 이번 문서 현행화 작업을 통해 불일치를 전면 바로잡았습니다.

---

## 3. 해결 완료된 설계 및 기능 결함 내역 (Resolved Architectural Issues)

* **변환 규칙(Transforms)의 스키마 괴리**: 누락되었던 세 가지 검증 룰(`val_range`, `val_in`, `val_regex`)을 `cleansing.py`에 추가 구현하고 등록을 완료하여 규칙 사용 시 크래시 문제를 해소하였습니다.
* **projects.json 목록 갱신 누락**: 백엔드 내보내기 및 생성 성공 시 매니페스트 JSON을 자동 업데이트하여 메인 대시보드 프로젝트 목록에 100% 동기화되도록 수정 완료하였습니다.
* **실시간 런타임 로그의 허구적 UX**: 단순 상태 폴링에서 탈피하여, `stdout` 리다이렉트 캡처 스트림 및 FastAPI SSE 스트리밍 라우트를 통해 실제 파이프라인 엔진 가공 로그들을 브라우저 터미널 화면에 실시간으로 전송 및 바인딩 완료하였습니다.
* **CLI `deploy` 명령어와 React/Vite 구조의 충돌**: 구형 Vanilla html/js 복사 경로에서 React/Vite 빌드 폴더(`web/dist/`) 번들 산출물을 통째로 복사하도록 명령어를 전면 보완하여 단독 서비스 패키징 기능을 정상화하였습니다.

---

## 4. 향후 유지보수 로드맵 (Maintenance Roadmap)

### ① 스키마 컴파일러 연동
* **Pydantic-TS 동기화**: `pyproject.toml` 또는 빌드 스크립트에 `pydantic2ts` 명령을 바인딩하여, 파이썬 스키마 변경 시 자동으로 프론트엔드의 `types/` 하위 타입 파일이 재생성되도록 빌드를 파이프라인화합니다.

### ② 단위 테스트 및 리그레션 방지
* **단위 테스트 커버리지 보강**:
  - `tests/` 폴더 내에 `pytest` 테스트 모듈을 실행해 이번에 추가한 `validate_range`, `validate_in`, `validate_regex` 등의 핵심 정제 변환 함수가 다양한 엣지 케이스(None값 입력, 오포맷, 한국어 억/만 단위 등)에 대해 기대한 대로 완벽하게 작동하는지 검증하는 테스트 커버리지를 보강합니다.
