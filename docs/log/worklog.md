# 📋 ClearSurvey 작업 개발 로그 (WORKLOG)

본 문서는 **ClearSurvey (클리어서베이)** 프로젝트의 최초 분석 및 설계 단계부터 3단계 프리미엄 설정 매니저 마법사 및 관심사 분리 아키텍처 수립까지의 작업 개발 이력을 일목요연하게 기록한 작업 진행 로그입니다.

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
