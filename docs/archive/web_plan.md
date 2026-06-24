# Survey Engine Web — 구현 계획

> 상태: **구현 예정 (2026-05-22 확정)**
> 대상: 팀/부서 내 공유 (10명 이하)
> 관련 문서: `docs/plan/react_migration_plan.md` (web/ React 전환 상세)

## 개요

Excel 파일을 서버에 올리고, 웹 UI에서 설정을 수정한 뒤 결과 xlsx를 다운로드하거나 웹 대시보드로 바로 확인한다.

**사용자 흐름**:
```
xlsx 업로드 → 파일 분석 → 설정값 수정 → 집계 실행 → xlsx 다운로드
                                                    ↘ 웹 대시보드 확인
```

---

## 기술 스택

| 레이어 | 기술 | 이유 |
|--------|------|------|
| Backend API | FastAPI | 비동기, 파일 업로드, OpenAPI 자동 생성 |
| 데이터 처리 | 기존 `engine/` 모듈 그대로 재사용 | 코드 변경 없음 |
| Frontend | React 19 + Vite + TypeScript | `c:\ai\new-beginnings` 기반 이식 |
| UI 컴포넌트 | shadcn/ui (Radix UI + Tailwind CSS v4) | 이미 완성된 컴포넌트 세트 |
| 차트 | recharts | new-beginnings 대시보드 컴포넌트 재사용 |
| 라우팅 | TanStack Router (SPA, SSR 없음) | new-beginnings에서 SSR 레이어만 제거 |
| 상태 관리 | React Query (`@tanstack/react-query`) | 서버 상태 캐싱 |
| 파일 전송 | fetch (multipart upload + blob download) | 외부 의존 최소화 |
| 배포 | **Hetzner VPS CX11 (€3.9/월) + Docker Compose** | FastAPI + Nginx 단일 서버 |

---

## 아키텍처

```
┌─────────────────────────────────────────────────────┐
│  Hetzner VPS CX11  (€3.9/월)                        │
│                                                     │
│  [Nginx :80/443]                                    │
│    /         → React SPA (dist/)                    │
│    /api/*    → FastAPI :8000                        │
│                   ↕                                 │
│              engine/ (기존 Python 코드)              │
│                   ↕                                 │
│  uploads/  outputs/  projects/  (서버 파일 저장)    │
└─────────────────────────────────────────────────────┘
        ↑
   Browser
     ① xlsx 업로드
     ③ 설정 편집
     ⑤ xlsx 다운로드 / 웹 대시보드 확인
```

**FastAPI 엔드포인트**
```
POST /api/analyze        ② 파일 분석 → 헤더·시트 정보 반환
POST /api/preview        ④a 설정 미리보기 → 정제 데이터 JSON
POST /api/run            ④b 전체 실행 → xlsx 생성 + 대시보드 JSON
GET  /api/download/{id}  ⑤ xlsx 파일 다운로드
GET  /api/projects             프로젝트 목록
GET  /api/projects/{name}/config  설정 반환
PUT  /api/projects/{name}/config  설정 저장

Storage (서버 내)
  uploads/   업로드된 원본 파일 (세션별 임시, 24h 후 삭제)
  outputs/   생성된 결과 파일 (세션별)
  projects/  프로젝트 설정 영속 저장 (config.yaml 기반)
```

---

## API 명세

### POST /api/analyze
파일 구조 분석 → 헤더 감지 결과 반환

**Request**: `multipart/form-data`
```
file: xlsx (binary)
sheet: str (optional)
```

**Response**:
```json
{
  "session_id": "uuid",
  "file_name": "data.xlsx",
  "sheets": ["summary", "all responses"],
  "header_row": 2,
  "header_score": 1.0,
  "data_start_row": 3,
  "column_count": 31,
  "sample_headers": ["응답ID", "기관명", "..."]
}
```

---

### POST /api/preview
설정을 적용하여 처음 N행 미리보기 반환

**Request**: `application/json`
```json
{
  "session_id": "uuid",
  "config": { ... SurveyConfig JSON ... },
  "preview_rows": 20
}
```

**Response**:
```json
{
  "headers": ["답변ID", "기관명", "소재지_시도"],
  "rows": [["R001", "한국대학교", "서울"], ["R002", ...]]
}
```

---

### POST /api/run
전체 파이프라인 실행 → 결과 파일 ID 반환

**Request**: `application/json`
```json
{
  "session_id": "uuid",
  "config": { ... SurveyConfig JSON ... }
}
```

**Response**:
```json
{
  "result_id": "uuid",
  "row_count": 146,
  "sheet_names": ["summary", "cleaned", "Config", "Guide"],
  "download_url": "/api/download/uuid"
}
```

---

### GET /api/download/{result_id}
결과 xlsx 다운로드

**Response**: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

---

## 프론트엔드 화면 구성

### 화면 1 — 파일 업로드 & 분석

```
┌─────────────────────────────────────────────────┐
│  Survey Engine                          [프로젝트▼] │
├─────────────────────────────────────────────────┤
│                                                 │
│    [xlsx 파일을 여기로 드래그하거나 클릭]           │
│                                                 │
│    시트 선택: [all responses ▼]                 │
│    헤더 행:   [2]   데이터 시작: [3]             │
│                                                 │
│    [분석 시작] ──────────────────────────────── │
│                                                 │
│  감지된 컬럼 (31개):                             │
│  ┌──┬──────────────┬──────┐                    │
│  │ # │ 헤더 이름    │ 샘플 │                    │
│  ├──┼──────────────┼──────┤                    │
│  │ 1 │ 응답ID       │ R001 │                    │
│  │ 2 │ 기관명       │ 한국대 │                   │
│  └──┴──────────────┴──────┘                    │
└─────────────────────────────────────────────────┘
```

---

### 화면 2 — 설정 편집

탭 구조:

```
[기본설정] [컬럼정의] [전처리] [슬라이서] [요약섹션]
```

**컬럼 정의 탭** — 인터랙티브 테이블

```
┌──┬──────────────┬─────────┬────────────────┬──────────────┬──────┬──────┐
│ # │ output_col   │ src_col │ transform      │ flag_keyword │ width│ 슬라이서│
├──┼──────────────┼─────────┼────────────────┼──────────────┼──────┼──────┤
│ 1 │ 답변ID       │  2      │ [copy     ▼]   │              │  16  │  □   │
│ 2 │ 소속기관유형  │  5      │ [copy     ▼]   │              │  22  │  ☑  │
│ 3 │ 소재지_시도  │ 11      │ [address_sido▼]│              │   8  │  ☑  │
│ 4 │ GPU_학습용   │ 15      │ [o_binary ▼]   │ 대규모AI모델  │   7  │  □   │
│ + 행 추가                                                              │
└──┴──────────────┴─────────┴────────────────┴──────────────┴──────┴──────┘
```

**전처리 탭**

```
fill_down 규칙:
  [+ 추가]
  ┌──────────┬──────────┬────────────┬─────────────┬──────────────┐
  │ 소스 열  │ 레이블   │ 모드       │ trigger_col │ trigger_value │
  ├──────────┼──────────┼────────────┼─────────────┼──────────────┤
  │    1     │ 사업코드 │[on_trigger]│      3      │      3       │
  └──────────┴──────────┴────────────┴─────────────┴──────────────┘

row_filter include 규칙:
  [+ 추가]
  ┌──────┬────────┬────────────┐
  │ 열   │ 조건   │ 값         │
  ├──────┼────────┼────────────┤
  │  3   │ values │ 7          │
  └──────┴────────┴────────────┘
```

---

### 화면 3 — 실행 & 미리보기

```
┌─────────────────────────────────────────────────┐
│  [미리보기 (20행)]        [전체 실행]            │
├─────────────────────────────────────────────────┤
│  ✓ 전처리: 1,234행 → 856행                      │
│  ✓ 컬럼 변환: 24개                              │
│  ✓ 요약 섹션: 6개                               │
│                                                 │
│  미리보기 (처음 20행):                           │
│  ┌────────┬────────────┬──────────┬────────┐   │
│  │ 답변ID │ 소속기관유형│ 소재지_시도│ GPU사용│   │
│  ├────────┼────────────┼──────────┼────────┤   │
│  │ R001   │ 대학        │ 서울      │ 사용중  │   │
│  └────────┴────────────┴──────────┴────────┘   │
│                                                 │
│  [xlsx 다운로드 ↓] gpu_2026_cleaned.xlsx        │
└─────────────────────────────────────────────────┘
```

---

## 프로젝트 관리 (서버 측)

서버에 프로젝트를 저장하여 팀 공유:

```
GET  /api/projects                → 프로젝트 목록
POST /api/projects                → 새 프로젝트 생성
GET  /api/projects/{name}/config  → config.yaml 내용 반환
PUT  /api/projects/{name}/config  → config 저장
DELETE /api/projects/{name}       → 프로젝트 삭제
```

---

## 구현 단계

### 선행 조건 (백엔드 기능 안정화)

웹 전환 전 `docs/todo.md` P1 항목 완료 권장:
- Config 시트 구조 개편
- transform 새 이름 alias 등록

---

### Phase 1 — FastAPI 백엔드 (1주)

- [ ] FastAPI 앱 골격 (`app/main.py`, `app/routers/`, `app/models/`)
- [ ] 세션 관리: UUID 기반 임시 파일 저장 (`uploads/`, `outputs/`)
- [ ] `/api/analyze` 구현 → `engine/analyzer.py` 연동
- [ ] `/api/run` 구현 → `engine/pipeline.py` 연동 + 대시보드 JSON export 포함
- [ ] `/api/preview` 구현 → DataFrame 앞 N행 JSON 직렬화
- [ ] `/api/download/{id}` 구현 → `FileResponse`
- [ ] 프로젝트 CRUD API (`/api/projects`)
- [ ] 임시 파일 자동 정리 (24시간 후 삭제)
- [ ] export JSON에 `aggregates` + `dashboard: null` 추가 (React 대시보드 연동 필수)

### Phase 2 — React 프론트엔드 (1주)

> 기반: `c:\ai\new-beginnings` — 대시보드 컴포넌트 이식, SSR 제거
> 상세: `docs/plan/react_migration_plan.md` 참조

- [ ] `web/` React + Vite SPA 초기화 (new-beginnings 이식)
- [ ] 화면 0: 대시보드 뷰 (new-beginnings 그대로 — 기존 정적 웹 대체)
- [ ] 화면 1: xlsx 드래그앤드롭 업로드 + 분석 결과 표시 (`/upload` 라우트)
- [ ] 화면 2: 컬럼 정의 편집 테이블 (`/config` 라우트, TanStack Table)
- [ ] 화면 2: 전처리 / 슬라이서 / 요약섹션 탭
- [ ] 화면 3: 실행 + 미리보기 + 다운로드 (`/result` 라우트)
- [ ] 프로젝트 셀렉터 (서버 프로젝트 목록 연동)

### Phase 3 — 배포 (2~3일)

- [ ] `Dockerfile` (FastAPI), `docker-compose.yml` (FastAPI + Nginx)
- [ ] Nginx: `/` → React dist, `/api/` → FastAPI proxy
- [ ] Hetzner VPS CX11 프로비저닝 + Docker 설치
- [ ] HTTPS 설정 (Let's Encrypt or 내부망이면 HTTP만)
- [ ] 파일 크기 제한 설정 (기본 50MB, Nginx + FastAPI 양쪽)
- [ ] IP 기반 접근 제한 (사내망 or VPN 대역만 허용)
- [ ] 에러 처리 (잘못된 xlsx, 설정 오류, 세션 만료)

---

## 디렉토리 구조 (계획)

```
survey2/
├── app/                        # FastAPI 백엔드 (신규)
│   ├── main.py
│   ├── routers/
│   │   ├── analyze.py          # POST /api/analyze
│   │   ├── pipeline.py         # POST /api/run, preview, download
│   │   └── projects.py         # GET/PUT /api/projects
│   ├── models/                 # Pydantic request/response 모델
│   ├── services/               # engine/ 모듈 래퍼
│   └── storage/                # 세션 파일 관리 (uploads/, outputs/)
│
├── web/                        # React SPA (new-beginnings 이식)
│   ├── public/data/            # 정적 JSON (기존 web/data/ 이동)
│   ├── src/
│   │   ├── routes/
│   │   │   ├── index.tsx       # 대시보드 (기존 기능 유지)
│   │   │   ├── admin.tsx       # 대시보드 설정 (기존 기능 유지)
│   │   │   ├── upload.tsx      # 화면1: 파일 업로드 + 분석 (신규)
│   │   │   ├── config.tsx      # 화면2: 설정 편집 (신규)
│   │   │   └── result.tsx      # 화면3: 실행 + 다운로드 (신규)
│   │   ├── components/
│   │   │   ├── ui/             # shadcn/ui (new-beginnings 그대로)
│   │   │   ├── dashboard/      # KpiRow, FilterBar 등 (new-beginnings 그대로)
│   │   │   └── editor/         # ColumnTable, PreprocessForm 등 (신규)
│   │   └── api/                # FastAPI 클라이언트 (신규)
│   └── package.json
│
├── engine/                     # 기존 엔진 (변경 없음)
├── transforms/                 # 기존 transforms (변경 없음)
├── docker-compose.yml          # FastAPI + Nginx
└── nginx.conf
```

---

## 고려사항

| 항목 | 내용 |
|------|------|
| 파일 크기 | 기본 50MB 제한, Nginx + FastAPI 양쪽 설정 |
| 동시 사용자 | 10명 이하 → FastAPI 비동기로 충분, Celery 불필요 |
| 보안 | xlsx 파일 타입 검증, 경로 순회 방지, 사내 IP 접근 제한 |
| 상태 관리 | 세션 만료(24h) 후 uploads/outputs 자동 정리 |
| 슬라이서 | ZIP 패치는 서버에서 동일하게 동작 |
| 인증 | IP 제한으로 충분 (10명 이하 사내용), 필요 시 HTTP Basic Auth 추가 |
