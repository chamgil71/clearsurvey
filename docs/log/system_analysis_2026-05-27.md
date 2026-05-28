# 시스템 분석 보고서 — ClearSurvey

> 작성일: 2026-05-27  
> 분석 대상: Python 엔진 / FastAPI 백엔드 / React 프론트엔드  
> 참조 프로젝트: `c:\ai\new-beginnings` (웹 UI 원본)

---

## 목차

1. [시스템 구조 개요](#1-시스템-구조-개요)
2. [new-beginnings vs clearsurvey 비교](#2-new-beginnings-vs-clearsurvey-비교)
3. [1단계 핵심 플로우 점검 — 엑셀생성→설정→정제→웹구현](#3-1단계-핵심-플로우-점검)
4. [2단계 웹 편집 기능 점검](#4-2단계-웹-편집-기능-점검)
5. [컴포넌트별 상세 문제점](#5-컴포넌트별-상세-문제점)
6. [개선 우선순위 로드맵](#6-개선-우선순위-로드맵)

---

## 1. 시스템 구조 개요

```
[원본 xlsx]
    │
    ├─ [1단계] CLI 플로우 ──────────────────────────────────────────
    │   python main.py analyze → init → run → export
    │                                          │
    │                                   web/data/*.json
    │                                          │
    │                                   [Vite dev] npm run dev
    │                                          │
    │                                   브라우저 대시보드 (index.tsx)
    │
    └─ [2단계] 웹 마법사 플로우 ─────────────────────────────────────
        브라우저 (admin.tsx) ←→ FastAPI (app/main.py) ←→ Python 엔진
        Step1: 파일업로드                               analyze
        Step2: 설정편집                                 config 저장
        Step3: 파이프라인실행                           run + export
```

---

## 2. new-beginnings vs clearsurvey 비교

### 2.1 구조 비교

| 항목 | new-beginnings | clearsurvey/web |
|------|---------------|-----------------|
| **대시보드 UI** | `src/` (React/TypeScript) | `web/src/` (복사됨) |
| **레거시 JS 대시보드** | `web/js/app.js`, `web/admin.html` ✅ | ❌ 없음 |
| **빌드 타겟** | Cloudflare Workers (vite.config.ts) | 동일 (vite.config.js) |
| **admin 페이지** | localStorage만 저장, 단순 설정 | 백엔드 API 연동 3단계 마법사 |
| **GuideDrawer** | ❌ 없음 | ✅ 추가됨 |
| **DataTable** | `search` prop 없음 | `search` prop 추가됨 |
| **백엔드 API 연동** | ❌ 없음 | `useManagerApi.ts` 추가됨 |

### 2.2 new-beginnings web/ 폴더의 역할

```
new-beginnings/
├── src/          ← React 소스 (TanStack Router, Recharts, Shadcn)
└── web/          ← 바닐라 JS 독립 대시보드 (빌드 불필요)
    ├── admin.html
    ├── js/
    │   ├── app.js
    │   ├── charts.js
    │   └── config.js
    └── data/
        ├── projects.json
        └── *.json
```

- `new-beginnings/web/`은 Python `http.server`로 바로 서빙 가능한 **독립 완성 대시보드**
- `clearsurvey`는 이를 차용하되 React 소스(`src/`)를 `web/src/`로 이동하고 바닐라 JS 버전은 삭제

**⚠️ 결과적 문제:** `clearsurvey/start_web.bat`이 `python -m http.server`로 `web/`을 서빙하지만, `web/src/*.tsx`는 TypeScript 소스이므로 브라우저에서 직접 실행 불가. **Vite dev 서버(`npm run dev`) 없이는 프론트엔드가 동작하지 않는다.**

### 2.3 JSON 데이터 구조 비교

**new-beginnings `data.json` (검증된 정상 구조):**
```json
{
  "meta": {
    "project": "dummy_gpu_survey",
    "generated_at": "2026-05-19T18:06:54",
    "total_rows": 400,
    "columns": [
      { "key": "컬럼명", "label": "컬럼명", "type": "category",
        "unique_count": 7, "unique_values": ["값1", "값2"] },
      { "key": "숫자컬럼", "label": "숫자컬럼", "type": "numeric",
        "min": 1.0, "max": 400.0, "sum": 80200.0 }
    ]
  },
  "rows": [ {...}, {...} ],
  "aggregates": { "컬럼명": { "값1": 120, "값2": 80 } },
  "dashboard": null
}
```

**clearsurvey `exporter.py` 생성 구조 (실제):**
```json
{
  "meta": { ... },          ✅ 동일 (key, label, type, unique_values 포함)
  "config": {               ⚠️ 추가 필드 — React 프론트가 읽지 않음 (dead code)
    "kpi":    [{"label": "전체 건수", "field": null, "agg": "count"}],
    "charts": [{"field": "컬럼명", "type": "donut", "title": "..."}]
  },
  "rows": [ {...} ],        ✅ 동일
  "aggregates": { ... },    ✅ 동일
  "numeric_totals": { ... } ⚠️ 추가 필드 — React 프론트가 읽지 않음
}
```

**핵심 발견: `exporter.py`의 `config` 키 문제**

| 항목 | exporter.py `config` 필드 | React `DashboardConfig` 타입 |
|------|--------------------------|------------------------------|
| KPI 필드명 | `field`, `agg` | `col`, `type` |
| 차트 필드명 | `field` | `col` |
| React에서 사용? | ❌ `data.dashboard`만 읽음 | ✅ |

- `exporter.py`의 `_auto_web_config()` 함수가 생성하는 `config` 키는 **React 프론트엔드가 전혀 읽지 않는 dead code**
- React는 `data.dashboard` (from `dashboard.json`)를 읽거나, 없으면 `buildDefaultConfig(meta)`를 사용
- `_auto_web_config()`는 별도로 제거하거나 `DashboardConfig` 형식으로 교체해야 함

---

## 3. 1단계 핵심 플로우 점검

### 플로우: 엑셀업로드 → 분석/설정 → 정제엑셀생성 → 웹구현(data.json)

```
[xlsx 파일]
    │
    ├─ ① python main.py analyze data.xlsx         → 구조 분석 출력
    ├─ ② python main.py init data.xlsx            → projects/proj/config.yaml 생성
    ├─ ③ [config.yaml 수동 편집]
    ├─ ④ python main.py run projects/proj/config.yaml --input data.xlsx
    │                                               → projects/proj/output/proj_cleaned.xlsx
    ├─ ⑤ python main.py export projects/proj/config.yaml
    │                                               → web/data/proj_data.json
    │                                               → web/data/projects.json 갱신
    └─ ⑥ cd web && npm run dev                    → 브라우저 http://localhost:5173
```

### 3.1 단계별 상태 점검

| 단계 | 상태 | 판정 | 설명 |
|------|------|------|------|
| ① `analyze` | ✅ | 정상 | 헤더 자동 감지, JSON 출력 |
| ② `init` | ✅ | 정상 | config.yaml + output/ 폴더 생성 |
| ③ config.yaml 편집 | ✅ | 정상 | YAML 직접 편집 |
| ④ `run` | ✅ | 정상 | cleaned.xlsx, Config/Guide 시트 생성 |
| ⑤ `export` | ⚠️ | 주의 | JSON 생성은 되지만 구조 이슈 있음 (아래 상세) |
| ⑥ 웹 실행 | ❌ | 오류 | `start_web.bat` 이 Python HTTP 서버라 React 앱 실행 불가 |

---

### 3.2 ⑤ export — JSON 구조 상세 검증

**React 프론트가 실제로 읽는 필드:**
```typescript
// useDashboardData.ts
const d = await fetchJson<ProjectData>(target);

// index.tsx
const saved = loadConfig(data.meta.project, data.dashboard || null);
const cfg = saved || buildDefaultConfig(data.meta);
// → data.meta.columns (type, unique_values 등) 을 사용해 자동 구성
```

**exporter.py → React 호환성 체크:**

| 필드 | exporter 생성 여부 | React 사용 여부 | 판정 |
|------|-------------------|----------------|------|
| `meta.project` | ✅ | ✅ | OK |
| `meta.total_rows` | ✅ | ✅ | OK |
| `meta.generated_at` | ✅ | ✅ | OK |
| `meta.columns[].key` | ✅ | ✅ | OK |
| `meta.columns[].label` | ✅ | ✅ | OK |
| `meta.columns[].type` | ✅ (`category`/`numeric`/`text`) | ✅ | OK |
| `meta.columns[].unique_values` | ✅ (category일 때) | ✅ buildDefaultConfig에서 사용 | OK |
| `meta.columns[].unique_count` | ✅ | ✅ buildDefaultConfig에서 사용 | OK |
| `rows` | ✅ | ✅ | OK |
| `aggregates` | ✅ `{col: {val: count}}` | ✅ FilterBar에서 사용 | OK |
| `dashboard` | ⚠️ `dashboard.json` 있어야 포함 | ✅ null이면 buildDefaultConfig | **조건부 OK** |
| `config` (auto) | ✅ 생성 | ❌ React가 읽지 않음 | **Dead code** |
| `numeric_totals` | ✅ 생성 | ❌ React가 읽지 않음 | **Dead code** |
| `meta.source_file` | ✅ 생성 | ❌ | 무해 |

**결론: 1단계 JSON 플로우는 `dashboard` 키 없이도 작동 가능**
- `data.dashboard`가 없으면 `buildDefaultConfig(data.meta)` 자동 실행
- `meta.columns`의 타입/unique_values 정보가 있으면 차트·필터 자동 구성
- Phase 1 핵심 플로우는 **데이터 구조 상 문제없음**

---

### 3.3 ⑥ 웹 실행 — 구조적 문제

**현재 (작동 안 함):**
```bat
:: start_web.bat
python -m http.server 8080 --bind 127.0.0.1
```

| 서빙 대상 | `web/` 폴더 (`.tsx` 파일들) |
| 브라우저 요청 | `src/routes/index.tsx` 등 TypeScript 파일 |
| 결과 | ❌ 브라우저는 `.tsx`를 실행할 수 없음 |

**올바른 실행 방법 (현재 미문서화):**
```bash
# 1. 웹 대시보드 (Vite dev server)
cd web
npm install        # 최초 1회
npm run dev        # http://localhost:5173

# 2. 백엔드 API (admin 마법사 사용 시)
uvicorn app.main:app --reload --port 8000

# 3. 전체 CLI 플로우 (백엔드 없이)
python main.py export projects/myproject/config.yaml
# → web/data/myproject_data.json 생성 후 npm run dev로 확인
```

**Vite 경로 설정 검증 (data.json 파일 서빙):**
```
export 명령:     web/data/myproject_data.json 에 저장
Vite 서버:       web/ 폴더를 public root로 서빙
브라우저 요청:   /data/myproject_data.json
→ 경로 일치 ✅ (정상 서빙됨)
```

---

### 3.4 1단계 플로우 최종 판정

```
✅ 정상: python main.py analyze → init → run → export
✅ 정상: export가 생성하는 JSON 구조 (meta, rows, aggregates)
✅ 정상: React buildDefaultConfig 자동 대시보드 구성
❌ 오류: start_web.bat (Python HTTP server → React 실행 불가)
❌ 미문서화: npm run dev, uvicorn 실행 방법
⚠️ Dead code: exporter.py의 _auto_web_config() / config 키 / numeric_totals
```

---

## 4. 2단계 웹 편집 기능 점검

### 4.1 Admin 마법사 플로우

```
[브라우저 /admin]
    │
    ├─ Step 1: 프로젝트 업로드
    │   POST /api/projects/create (파일 + 이름)
    │   → storage/ 에 원본 저장
    │   → projects/{name}/config.yaml 생성
    │   → projects/{name}/draft_*.xlsx 생성
    │
    ├─ Step 2: 설정 편집 (컬럼 정의 + 대시보드 레이아웃)
    │   GET  /api/projects/{name}/config  → config.yaml + dashboard.json 로드
    │   POST /api/projects/{name}/config  → 설정 저장
    │
    └─ Step 3: 실행 및 내보내기
        POST /api/projects/{name}/run     → cleaned.xlsx 생성
        POST /api/projects/{name}/export  → data.json 생성
        GET  /api/projects/{name}/download → xlsx 다운로드
```

### 4.2 Step 2 — 핵심 스키마 불일치 (치명적)

**문제의 핵심:** Step2에서 편집하는 컬럼 구조가 엔진의 `SurveyConfig.columns` 구조와 다름

**프론트엔드가 보내는 컬럼 구조 (Step2_ConfigEditor.tsx):**
```typescript
// useManagerApi.ts ProjectConfig
columns: [{
  name: string,          // 문항명 (= output_col 역할?)
  type: string,          // "category" | "numeric" | "text" | "datetime"
  source_col: number,    // 원본 열 번호
  target_name?: string,  // 결과 열이름
  transforms?: [{ rule: string, args?: {} }],  // 배열 형태
  include_in_slicer?: boolean
}]
```

**엔진이 기대하는 컬럼 구조 (engine/config.py ColumnDef):**
```python
class ColumnDef(BaseModel):
    output_col: str        # 출력 헤더 (≠ name)
    source_col: int | None
    transform: str | None  # 단순 문자열! 배열 아님
    flag_keyword: str | None
    backup_col: int | None
    width: float | None
    include_in_slicer: bool
    # type 필드 없음!
```

**transform 이름 불일치:**

| Step2 UI에서 선택 가능 | 실제 엔진 transform | 엔진 존재 여부 |
|----------------------|-------------------|--------------|
| `norm_date_parts` | `normalize_date` | ❌ 다른 이름 |
| `address_split` | `addr_split` | ❌ 다른 이름 |
| `to_string` | `normalize_text` | ❌ 다른 이름 |
| `to_numeric` | `normalize_number` | ❌ 다른 이름 |
| `mask_email` | — | ❌ 존재하지 않음 |
| `mask_phone` | `normalize_phone` | ❌ 다른 이름 |
| `mask_name` | `name_blind` | ❌ 다른 이름 |
| `val_range` | — | ❌ 존재하지 않음 |
| `val_in` | — | ❌ 존재하지 않음 |
| `val_regex` | — | ❌ 존재하지 않음 |
| — | `copy` | ✅ UI에 없음 |
| — | `validate_brn` | ✅ UI에 없음 |
| — | `o_binary` | ✅ UI에 없음 |
| — | `jang`, `n_jang` | ✅ UI에 없음 |
| — | `address_sido`, `address_sigungu` | ✅ UI에 없음 |
| — | `normalize_company`, `name_blind` | ✅ UI에 없음 |

**결과:** Step2에서 설정을 저장하면 백엔드 `SurveyConfig.model_validate(config_data)`가 실패하거나, 설정이 저장되어도 파이프라인 실행 시 transform이 무시됨.

---

### 4.3 new-beginnings admin.tsx와의 비교

**new-beginnings admin.tsx (단순, 작동함):**
```typescript
// localStorage 기반, 백엔드 불필요
const saveAndGo = () => {
  saveConfig(project, cfg);          // localStorage 저장
  navigate({ to: "/" });
};
const downloadConfig = () => {
  // dashboard.json 파일 다운로드
};
```
- 대시보드 레이아웃(KPI, 차트, 컬럼 표시) 설정만 담당
- `data.meta.columns`에서 이미 알려진 컬럼을 참조하여 설정
- **transform 편집 없음** — Python 엔진 설정(config.yaml)과 완전히 분리

**clearsurvey admin.tsx (복잡, 스키마 불일치):**
```typescript
// 백엔드 API 연동
const handleSaveConfig = async (config, dashboard) => {
  await api.saveProjectConfig(selectedProject, config, dashboard);
  // config = Python 엔진 config.yaml 구조 (불일치)
  // dashboard = DashboardConfig 구조
};
```
- Python 엔진 config.yaml 편집까지 담당하려 시도
- 하지만 Python 엔진 스키마를 정확히 반영하지 못함

---

### 4.4 2단계 플로우 최종 판정

| 기능 | 상태 | 판정 |
|------|------|------|
| Step1: 파일 업로드 | ⚠️ | 파일명 검증 없는 보안 취약점 |
| Step2: 대시보드 레이아웃 편집 (KPI, 차트) | ✅ | `dashboard.json` 구조 자체는 OK |
| Step2: 컬럼 정의 편집 (transform) | ❌ | 스키마 불일치로 실질적으로 동작 안 함 |
| Step3: 파이프라인 실행 | ⚠️ | 동기 실행, transform 불일치로 오류 가능 |
| Step3: export/download | ✅ | 구현 자체는 OK |
| Admin 설정 저장 후 대시보드 반영 | ⚠️ | `dashboard.json` 저장은 되지만 로드 우선순위 불명확 |

---

## 5. 컴포넌트별 상세 문제점

### 5.1 Python 엔진

#### 🔴 P1 — exporter.py `_auto_web_config()` Dead Code

```python
def _auto_web_config(columns):
    # "field", "agg" 키를 사용 → React DashboardConfig와 불일치
    kpi = [{"label": "전체 건수", "field": None, "agg": "count"}]
    charts = [{"field": col["key"], "type": chart_type, ...}]
    return {"kpi": kpi, "search_fields": [...], "charts": charts}

result["config"] = _auto_web_config(columns)  # React가 읽지 않음
```

**영향:** 실질적 기능 오류는 없지만 혼란을 유발. React는 `data.dashboard`를 읽으며, `data.config`는 무시됨.

**개선안:**
```python
# 방법 A: _auto_web_config() 제거하고 React buildDefaultConfig에 맡김 (권장)
# 방법 B: DashboardConfig 호환 형식으로 교체
result["dashboard"] = {
    "version": 1,
    "kpi": [{"label": "총 응답수", "type": "total_rows"}],
    "charts": [{"col": col["key"], "type": "donut", "title": col["label"]}
               for col in cat_cols[:4]],
    "list": {
        "visible_cols": [c["key"] for c in columns[:8]],
        "filter_cols": [c["key"] for c in cat_cols[:3]]
    }
}
```

---

#### 🔴 P2 — TransformRegistry 전역 싱글턴 (동시성 문제)

```python
from transforms.registry import registry   # 전역 단일 인스턴스
def _build_registry(cfg):
    registry.register("copy", ...)         # 매 요청마다 전역 상태 변경
    registry.auto_load_domain(...)         # 동시 요청 시 충돌
```

FastAPI가 동시 요청을 처리하면 다른 프로젝트의 address_parser가 덮어씌워질 수 있음.

**개선안:** 요청마다 새 레지스트리 인스턴스 생성.

---

#### 🟡 P3 — 테스트 부족

| 모듈 | 테스트 | 우선순위 |
|------|--------|---------|
| `engine/pipeline.py` | ❌ | 높음 |
| `engine/writer.py` | ❌ | 높음 |
| `engine/exporter.py` | ❌ | 높음 |
| `engine/merger.py` | ❌ | 중간 |
| `engine/slicer.py` | ❌ | 중간 |
| `app/main.py` API | ❌ | 높음 |

---

#### 🟡 P4 — gpu_2026 도메인 하드코딩

```python
# app/main.py:125
gpu_style = PROJECT_ROOT / "projects" / "gpu_2026" / "style.yaml"
if gpu_style.exists():
    shutil.copy2(gpu_style, proj_dir / "style.yaml")
```
→ 신규 환경에서 `gpu_2026` 폴더 없으면 빈 style.yaml 생성됨.

---

### 5.2 FastAPI 백엔드

#### 🔴 P1 — 보안 취약점 (즉시 수정)

```python
# app/main.py:89-90
raw_file_path = storage_dir / file.filename  # 경로 순회 공격 가능
proj_dir = PROJECT_ROOT / "projects" / name  # name에 "../" 포함 가능
```

**즉시 수정:**
```python
import re
# 파일명 sanitize
safe_name = re.sub(r"[^\w\-.]", "_", Path(file.filename).name)
raw_file_path = storage_dir / safe_name

# 프로젝트명 검증
if not re.match(r"^[a-zA-Z0-9_\-가-힣]{1,64}$", name):
    raise HTTPException(400, "프로젝트 이름에 허용되지 않는 문자가 포함되어 있습니다.")
```

---

#### 🔴 P2 — 파이프라인 동기 실행

```python
# app/main.py:241
save_path = pipeline.run()  # 동기! 대용량 파일 시 타임아웃
return {"status": "success", ...}
```
- 프론트 "실시간 로그" UI와 실제 동기 호출 사이의 불일치
- 대용량(10만 행+) 파일 처리 시 HTTP 타임아웃 위험

---

#### 🔴 P3 — 백엔드 시작 방법 미문서화

```bat
:: start_web.bat — Python HTTP server만 시작
python -m http.server 8080
:: FastAPI 서버 시작 방법 없음
```

**필요한 파일 추가:**
```bat
:: start_backend.bat
uvicorn app.main:app --reload --port 8000
```

---

#### 🟡 P4 — CORS 전체 허용

```python
allow_origins=["*"]  # 개발용 → 프로덕션 위험
```

---

### 5.3 React 프론트엔드

#### 🔴 P1 — 웹 실행 방법 오류

```bat
:: start_web.bat (현재)
python -m http.server 8080   ← TypeScript 파일 서빙 불가
```

**올바른 방법:**
```bash
cd web && npm run dev        # 5173 포트
```

`start_web.bat` 수정 또는 `start_dev.bat` 추가 필요.

---

#### 🔴 P2 — Transform 스키마 불일치 (2단계 전용)

Step2_ConfigEditor의 `TRANSFORM_RULES`와 실제 엔진 transform 이름 불일치.
→ 웹에서 편집 후 저장해도 파이프라인이 해당 transform을 인식하지 못함.

---

#### 🔴 P3 — 컬럼 설정 데이터 구조 불일치 (2단계 전용)

```typescript
// 프론트 저장: {name, type, transforms:[{rule}]}
// 엔진 기대: {output_col, transform: str}
```
→ `SurveyConfig.model_validate(config_data)` 실패 가능.

---

#### 🟡 P4 — 하드코딩된 API URL

```typescript
const API_BASE = "http://localhost:8000";  // 환경변수 불가
```

**개선:** `.env.local`로 관리
```typescript
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
```

---

#### 🟡 P5 — alert() 사용

```typescript
alert("프로젝트 설정이 영구 저장되었습니다!");  // UI 일관성 깨짐
```
→ Sonner toast로 교체 (이미 의존성에 포함됨).

---

#### 🟡 P6 — TypeScript any 남용

```typescript
const [localConfig, setLocalConfig] = useState<any>(...);
const [loadedConfig, setLoadedConfig] = useState<any>(null);
```
→ `SurveyConfig`, `DashboardConfig` 타입을 공유 타입 파일로 정의.

---

#### 🟡 P7 — "실시간 로그" UX 허위 표시

```typescript
// 실제로는 동기 HTTP 호출 후 결과 표시인데
// UI에는 "실시간 모니터링" 이라고 표시됨
```

---

#### 🟢 P8 — 대시보드 설정 저장 이중화

- localStorage (`loadConfig`)와 서버 `dashboard.json` 두 곳에 저장
- 우선순위: `localStorage` > `dashboard.json` > `buildDefaultConfig`
- 다른 기기에서 접속 시 localStorage 설정이 없어 다른 화면 표시

---

#### 🟢 P9 — 웹에서 설정 불가한 기능 (2단계 한계)

| 설정 | 웹 편집 | 비고 |
|------|--------|------|
| fill_down (계층 데이터) | ❌ | config.yaml 직접 편집 |
| row_filter (행 필터링) | ❌ | config.yaml 직접 편집 |
| summary 섹션 | ❌ | config.yaml 직접 편집 |
| slicers | ❌ | config.yaml 직접 편집 |
| merge 설정 | ❌ | config.yaml 직접 편집 |
| 주소 파싱 패턴 | ❌ | config.yaml 직접 편집 |

---

## 6. 개선 우선순위 로드맵

### Phase 1 — 핵심 플로우 즉시 수정 (1주일 내)

**목표:** CLI 기반 전체 플로우가 끊김없이 동작하도록 보장

#### 1-1. 웹 실행 환경 정상화

```bat
:: start_web.bat 수정 또는 교체
cd /d "%~dp0web"
npm install
npm run dev
```

또는 `README.md`에 명확히 문서화:
```
# 실행 방법
# 1. 웹 대시보드만 (CLI export 후)
cd web && npm run dev

# 2. 백엔드 API 포함 (admin 마법사)
uvicorn app.main:app --reload --port 8000  # 터미널 1
cd web && npm run dev                       # 터미널 2
```

#### 1-2. exporter.py `config` 키 정리

```python
# 현재 (dead code)
result["config"] = _auto_web_config(columns)   # 삭제
result["numeric_totals"] = numeric_totals       # 삭제 또는 유지

# 대신 dashboard 기본값 삽입 (dashboard.json 없을 때)
if not dash_cfg:
    dash_cfg = _build_default_dashboard_config(columns)

# _build_default_dashboard_config는 DashboardConfig 형식을 반환
# (React의 buildDefaultConfig와 동일한 로직)
```

#### 1-3. 보안 취약점 패치

```python
# app/main.py
import re
safe_name = re.sub(r"[^\w\-.]", "_", Path(file.filename).name)
if not re.match(r"^[a-zA-Z0-9_\-가-힣]{1,64}$", name):
    raise HTTPException(400, "...")
```

#### 1-4. 백엔드 시작 스크립트 추가

```bat
:: start_backend.bat (신규)
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

---

### Phase 2 — 웹 편집 기능 실질화 (2~4주)

**목표:** Step2 ConfigEditor가 실제 파이프라인과 연동되도록 스키마 통일

#### 2-1. Transform 이름 통일 (Step2_ConfigEditor.tsx)

```typescript
// 현재 (엔진과 불일치)
const TRANSFORM_RULES = [
  { value: "norm_date_parts", label: "..." },  // → normalize_date
  { value: "to_numeric", label: "..." },        // → normalize_number
  ...
];

// 수정 후 (엔진과 일치)
const TRANSFORM_RULES = [
  { value: "",                  label: "정제 없음 (통과)" },
  { value: "copy",              label: "copy (원본 그대로)" },
  { value: "normalize_text",    label: "normalize_text (공백 정리)" },
  { value: "normalize_number",  label: "normalize_number (숫자 정규화)" },
  { value: "normalize_date",    label: "normalize_date (날짜 표준화)" },
  { value: "normalize_phone",   label: "normalize_phone (전화번호 표준화)" },
  { value: "normalize_company", label: "normalize_company (회사명 정제)" },
  { value: "name_blind",        label: "name_blind (이름 마스킹)" },
  { value: "validate_brn",      label: "validate_brn (사업자번호 검증)" },
  { value: "address_sido",      label: "address_sido (시/도 추출)" },
  { value: "o_binary",          label: "o_binary (키워드 → 0/1)" },
  { value: "exclude",           label: "exclude (출력 제외)" },
];
```

#### 2-2. 컬럼 구조 변환 레이어 추가

```typescript
// 프론트 → 백엔드 변환 함수
function toSurveyConfigColumn(frontCol: FrontColumnDef): EngineColumnDef {
  return {
    output_col: frontCol.target_name || frontCol.name,
    source_col: frontCol.source_col,
    transform: frontCol.transforms?.[0]?.rule || null,
    include_in_slicer: frontCol.include_in_slicer || false,
    width: 16,
  };
}
```

또는 백엔드에서 변환:
```python
# app/main.py — config 저장 전 변환
def _normalize_column_def(col: dict) -> dict:
    return {
        "output_col": col.get("target_name") or col.get("name"),
        "source_col": col.get("source_col"),
        "transform": col.get("transforms", [{}])[0].get("rule") if col.get("transforms") else None,
        "include_in_slicer": col.get("include_in_slicer", False),
        "width": 16,
    }
```

#### 2-3. API URL 환경변수화

```typescript
// useManagerApi.ts
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
```

```bash
# web/.env.local
VITE_API_BASE_URL=http://localhost:8000
```

#### 2-4. alert() → toast 교체

```typescript
import { toast } from "sonner";
// alert("저장 완료") → toast.success("프로젝트 설정이 저장되었습니다")
// alert(`에러: ${err.message}`) → toast.error(err.message)
```

#### 2-5. 파이프라인 비동기 처리 (선택적)

```python
# 간단한 방법: 타임아웃 연장
# 근본적인 방법: BackgroundTask + SSE 로그 스트리밍
from fastapi import BackgroundTasks

@app.post("/api/projects/{name}/run")
async def run_project_pipeline(name: str, background_tasks: BackgroundTasks):
    job_id = str(uuid4())
    background_tasks.add_task(run_pipeline_task, name, job_id)
    return {"status": "queued", "job_id": job_id}
```

---

### Phase 3 — 품질 및 확장성 (1~2개월)

| 작업 | 내용 |
|------|------|
| 통합 테스트 추가 | pipeline, exporter, API 엔드투엔드 테스트 |
| TransformRegistry 인스턴스화 | 전역 싱글턴 → 요청별 인스턴스 |
| 웹 편집 기능 확장 | fill_down, row_filter 웹 편집 UI |
| 대시보드 설정 동기화 | localStorage vs 서버 dashboard.json 정책 명확화 |
| TypeScript 타입 강화 | `any` 제거, 공유 타입 정의 |
| Python 버전 명시 | `pyproject.toml` 또는 `.python-version` |
| storage/ 정책 | 원본 데이터, 더미 데이터, 백업 분리 |

---

## 부록 A — 즉시 실행 검증 체크리스트

```bash
# Phase 1 검증 — CLI 플로우 전체 테스트
python main.py analyze storage/dummy_gpu_survey.xlsx
python main.py init storage/dummy_gpu_survey.xlsx --project test_survey --auto
python main.py run projects/test_survey/config.yaml --input storage/dummy_gpu_survey.xlsx
python main.py export projects/test_survey/config.yaml

# 웹 확인
cd web && npm run dev
# → http://localhost:5173 에서 test_survey 데이터 확인

# Phase 2 검증 — 백엔드 API + 마법사
uvicorn app.main:app --port 8000           # 터미널 1
cd web && npm run dev                       # 터미널 2
# → http://localhost:5173/admin 에서 3단계 마법사 동작 확인
```

---

## 부록 B — JSON 데이터 구조 표준 (목표 상태)

```typescript
// 최종 export JSON이 만족해야 할 타입 (TypeScript 관점)
interface ProjectData {
  meta: {
    project: string;
    generated_at: string;
    total_rows: number;
    source_file?: string;
    columns: Array<{
      key: string;
      label: string;
      type: "category" | "numeric" | "text";
      unique_values?: string[];   // category만
      unique_count?: number;      // category만
      min?: number;               // numeric만
      max?: number;               // numeric만
      sum?: number;               // numeric만
    }>;
  };
  rows: Record<string, string | number | null>[];
  aggregates: Record<string, Record<string, number>>;
  dashboard?: DashboardConfig | null;  // DashboardConfig 형식으로 통일
  // config, numeric_totals → 제거 권장
}
```

---

*분석 기준: 코드 정적 분석 + 데이터 구조 비교 (2026-05-27)*  
*참조: `c:\ai\new-beginnings` (원본 웹 UI), `c:\ai\clearsurvey` (현재 구현)*
