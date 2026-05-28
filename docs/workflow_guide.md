# Survey Engine v2 — 전체 운영 가이드

> 처음 시작부터 웹 대시보드 확인까지의 전체 절차를 설명합니다.

---

## 목차

1. [시스템 구조](#1-시스템-구조)
2. [프로젝트란 무엇인가](#2-프로젝트란-무엇인가)
3. [프로젝트 폴더 생성 시점](#3-프로젝트-폴더-생성-시점)
4. [프로젝트 웹 등록 시점](#4-프로젝트-웹-등록-시점)
5. [config 파일 형식 — yaml vs xlsx](#5-config-파일-형식--yaml-vs-xlsx)
6. [전체 워크플로우 — 처음부터 끝까지](#6-전체-워크플로우--처음부터-끝까지)
7. [기존 설정 재사용 (데이터 업데이트)](#7-기존-설정-재사용-데이터-업데이트)
8. [두 프로젝트 실행 예시](#8-두-프로젝트-실행-예시)
9. [웹 대시보드 실행](#9-웹-대시보드-실행)
10. [특정 프로젝트 단독 웹서비스 배포](#10-특정-프로젝트-단독-웹서비스-배포)
11. [자주 묻는 질문](#11-자주-묻는-질문)
12. [명령어 치트시트](#12-명령어-치트시트)

---

## 1. 시스템 구조

```
survey2/
├── main.py                        ← CLI 진입점
│                                    (init / run / export / deploy)
├── projects/
│   ├── gpu_2026/
│   │   ├── config.yaml            ← 프로젝트 설정 (전처리 포함 전체 설정)
│   │   ├── style.yaml             ← Excel 스타일 설정 (선택)
│   │   └── output/
│   │       └── gpu_2026_cleaned.xlsx   ← 파이프라인 산출물 (Config 시트 내장)
│   └── budget_2026/
│       ├── config.yaml
│       └── output/
│           └── budget_2026_cleaned.xlsx
├── storage/
│   ├── dummy_gpu_survey.xlsx      ← 원본 데이터 (입력)
│   └── dummy_budget.xlsx          ← 원본 데이터 (입력)
├── web/
│   └── src/
│       ├── routes/index.tsx       ← 대시보드 (사용자용, /  )
│       ├── routes/admin.tsx       ← 3단계 설정 마법사 (/admin)
│       └── data/
│       ├── projects.json          ← 프로젝트 목록 (export 시 자동 갱신)
│       ├── gpu_2026_data.json
│       └── budget_2026_data.json
├── engine/                        ← 파이프라인 엔진
├── transforms/                    ← 데이터 변환 함수
└── config/
    └── patterns.yaml              ← 주소·회사·전화 공통 패턴
```

### 데이터 흐름

```
원본 xlsx
    │
    ▼  python main.py run <config> --input <xlsx>
    │  ← config는 .yaml 또는 Config 시트 포함 .xlsx 모두 가능
    │
    ├─ Preprocessor      : fill_down / row_filter
    ├─ TransformRegistry : 컬럼별 변환 적용
    ├─ CleanedSheetWriter: cleaned 시트 기록
    └─ SummarySheetWriter: summary 시트 기록
    │
    ▼
projects/<name>/output/<name>_cleaned.xlsx
    │  (cleaned / summary / Config / Guide 시트 포함)
    │
    ▼  python main.py export <config.yaml>
    │
    ├─ Cleaned 시트 → JSON 직렬화
    ├─ 컬럼 타입 자동 감지 (category / numeric / text)
    ├─ 집계값 계산
    └─ web/data/projects.json 갱신  ← 이 시점에 웹 대시보드에 등록
    │
    ▼
web/data/<name>_data.json  +  web/data/projects.json
    │
    ▼  npm run dev  (start_web.bat)
통합 웹 대시보드  (모든 프로젝트 표시)

    또는

    ▼  python main.py deploy <config.yaml> --dest dist/<name>
단독 웹서비스  (해당 프로젝트만 표시)
```

---

## 2. 프로젝트란 무엇인가

`projects/` 아래의 폴더 하나 = 프로젝트 하나입니다.

| 구성 요소 | 위치 | 역할 |
|-----------|------|------|
| `config.yaml` | `projects/<name>/config.yaml` | 전처리·컬럼·변환·요약 전체 설정 |
| `style.yaml` | `projects/<name>/style.yaml` (선택) | Excel 출력 스타일 |
| `output/` | `projects/<name>/output/` | 파이프라인 결과물 |
| `dashboard.json` | `projects/<name>/dashboard.json` (선택) | 웹 대시보드 KPI·차트 커스텀 설정 |

`config.yaml`의 `project` 키가 프로젝트 ID입니다:

```yaml
project: "budget_2026"   # → JSON 파일명, 대시보드 ID로 사용
```

---

## 3. 프로젝트 폴더 생성 시점

**`projects/<name>/` 폴더**는 `init` 명령으로만 만들어집니다.
`run` 만으로는 폴더가 생성되지 않습니다.

| 명령 | 생성되는 것 |
|------|------------|
| `python main.py init <xlsx>` | 대화형: 분석 → 프로젝트명 입력 → `projects/<name>/config.yaml` + `output/` |
| `python main.py init <xlsx> --auto` | 비대화형: 파일명을 프로젝트명으로 자동 사용 |
| `python main.py init <folder>` | 폴더 내 xlsx 파일 전체 병합 프로젝트 생성 |
| `python main.py run config.yaml` | `output/` 서브폴더만 (없으면 자동 생성) |

**처음 시작 권장 흐름:**

```bash
# 분석 + 프로젝트 폴더 생성 (대화형)
python main.py init storage/my_data.xlsx

# 출력 예시:
# 파일: my_data.xlsx | 헤더행: 2 | 데이터시작: 3 | 컬럼수: 31
# 기존 프로젝트: [없음]
# 프로젝트명 (Enter=my_data): my_survey_2026
# → projects/my_survey_2026/config.yaml  (편집 후 run)
# → projects/my_survey_2026/output/

# 또는 자동 (파일명 = 프로젝트명)
python main.py init storage/my_data.xlsx --auto
```

---

## 4. 프로젝트 웹 등록 시점

**웹 대시보드에 프로젝트가 표시되는 시점은 `export` 명령 실행 시점입니다.**

```
python main.py run    →  cleaned.xlsx 생성  (로컬에만 존재, 대시보드 미등록)
python main.py export →  JSON 생성 + projects.json 갱신  ← 이때 등록
```

`export` 실행 후 `web/data/projects.json`:

```json
[
  { "id": "gpu_2026",    "name": "gpu_2026",    "file": "gpu_2026_data.json",    "updated": "2026-05-14 13:24" },
  { "id": "budget_2026", "name": "budget_2026", "file": "budget_2026_data.json", "updated": "2026-05-14 18:22" }
]
```

---

## 5. config 파일 형식 — yaml vs xlsx

`run` 명령의 첫 번째 인자는 **yaml 파일** 또는 **Config 시트가 있는 xlsx 파일** 모두 가능합니다.
둘은 동시에 생성되지 않으며 완전한 대체 관계입니다.

| 형식 | 설정 위치 | 특징 |
|------|-----------|------|
| `config.yaml` | 텍스트 파일 | 전처리(fill_down, row_filter), 복잡한 summary 섹션 지원. `init` 명령으로 자동 생성 |
| `*_cleaned.xlsx` | Config 시트 | run 결과물에 항상 포함, 수정 후 바로 재실행 가능 |

**두 가지 실행 패턴:**

```bash
# ① yaml 방식 — 전처리 포함 전체 설정 (기본)
python main.py run projects/budget_2026/config.yaml --input data.xlsx
# 출력: projects/budget_2026/output/budget_2026_cleaned.xlsx

# ② cleaned xlsx 라운드트립 — 결과 보고 즉시 수정 후 재실행
python main.py run projects/budget_2026/output/budget_2026_cleaned.xlsx --input data.xlsx
# 출력: 동일 output/ 폴더에 덮어씀
# ※ 단, 전처리(fill_down, row_filter)는 Config 시트에 저장 안 됨
```

**Config 시트에 저장되는 것 vs 저장 안 되는 것:**

| 저장됨 (xlsx 라운드트립 가능) | 저장 안 됨 (yaml만 가능) |
|---|---|
| 컬럼 정의 (output_col, source_col, transform, width) | `preprocess` (fill_down, row_filter) |
| 기본 설정 (header_row, data_start_row, 파일명) | `binary_sum` / `gpu_demand` / `countif_contains` 세부 항목 |
| 요약 섹션 (id, title, type, col_ref) | `address_parsing` 패턴 |

---

## 6. 전체 워크플로우 — 처음부터 끝까지

### Step 0. 환경 준비 (최초 1회)

```bash
pip install -r requirements.txt   # Python 의존성

cd web && npm install && cd ..    # 웹 대시보드 의존성
```

---

### Step 1. 분석 + 프로젝트 폴더 생성

```bash
python main.py init storage/my_data.xlsx
```

출력:
```
파일: my_data.xlsx | 헤더행: 2 | 데이터시작: 3 | 컬럼수: 31
샘플 헤더: 응답ID, 기관명, 소재지, ...

기존 프로젝트: [없음]
프로젝트명 (Enter=my_data): my_survey_2026

→ 생성: projects/my_survey_2026/config.yaml
→ 생성: projects/my_survey_2026/output/

다음 단계:
  1. config.yaml 편집 (transform·summary 조정)
  2. python main.py run projects/my_survey_2026/config.yaml --input storage/my_data.xlsx
  3. python main.py export projects/my_survey_2026/config.yaml
```

`--auto` 플래그를 붙이면 프로젝트명 입력 없이 파일명으로 자동 생성됩니다.
폴더를 지정하면 폴더 내 모든 xlsx를 병합하는 merge config를 생성합니다.

```bash
# 폴더 통째로 분석 (병합 프로젝트)
python main.py init storage/survey_files/ --project merged_2026
```

---

### Step 2. config.yaml 수정

`init`이 생성한 `config.yaml`에는 헤더 자동 감지값과 모든 컬럼이 채워져 있습니다.
transform이 자동 추천되어 있으므로 확인 후 조정합니다:

| 섹션 | 주요 수정 항목 |
|------|--------------|
| `source` | `header_row`, `data_start_row` 확인 |
| `columns` | `output_col` 이름 변경, `transform` 조정, 불필요 컬럼 삭제 |
| `summary` | 집계 섹션 추가 (`unique_count`, `binary_sum` 등) |
| `preprocess` | `fill_down`, `row_filter` 전처리 설정 (필요 시) |

```yaml
columns:
  - output_col: "소재지"
    source_col: 12
    transform: address_sido    # ← 자동 추천된 값 확인·조정
    width: 18
  - output_col: "이메일"
    source_col: 7
    transform: validate_email  # ← 이메일 컬럼 자동 감지
    width: 24
```

전처리(fill_down, row_filter)가 필요하면 `preprocess` 섹션을 추가합니다.
자세한 설정은 `docs/config_guide.md`를 참조하세요.

run 이후에는 결과물의 **Config 시트**를 Excel에서 수정하고 재실행할 수도 있습니다.

---

### Step 3. 파이프라인 실행

```bash
# draft xlsx로 실행 (빠른 검증)
python main.py run projects/my_survey_2026/draft_config.xlsx --input storage/my_data.xlsx

# 또는 config.yaml로 실행 (전처리 포함)
python main.py run projects/my_survey_2026/config.yaml --input storage/my_data.xlsx
```

출력:
```
원본 행수: 400
전처리 후 행수: 81
Cleaned 시트 기록: 81행
저장: projects/my_survey_2026/output/my_survey_2026_cleaned.xlsx
```

결과물 시트 구성:
- **cleaned** — 정제 데이터 (Excel Table, SUBTOTAL 집계행, 필터)
- **summary** — COUNTIF 기반 집계
- **Config** — 현재 설정 스냅샷 (수정 후 재실행 가능)
- **Guide** — transform 사용법 참조

---

### Step 4. 수정 → 재실행 루프

결과가 마음에 안 들면 cleaned.xlsx의 Config 시트를 수정하고 재실행합니다:

```
cleaned.xlsx 열기
  → Config 시트에서 transform 변경 / 컬럼 추가·삭제
  → 저장 후 닫기
  → python main.py run output/my_survey_2026_cleaned.xlsx --input my_data.xlsx
  → 결과 확인 → 반복
```

---

### Step 5. 웹 대시보드 등록

```bash
python main.py export projects/my_survey_2026/config.yaml
```

```
내보내기 완료: web/data/my_survey_2026_data.json (81행, 10컬럼)
프로젝트 목록 갱신: web/data/projects.json
```

---

### Step 6. 웹 대시보드 확인

```bash
# 방법 1: 배치 파일 (자동으로 npm install 포함)
start_web.bat

# 방법 2: 직접 실행
cd web && npm run dev
# → http://localhost:5173
```

---

## 7. 기존 설정 재사용 (데이터 업데이트)

### config.yaml이 있을 때 — `--input`만 교체

```bash
# 설정 그대로, 원본 파일만 교체
python main.py run projects/budget_2026/config.yaml --input storage/새파일.xlsx
python main.py export projects/budget_2026/config.yaml
```

`fill_down`, `row_filter` 등 모든 설정이 그대로 적용됩니다. config.yaml을 건드릴 필요 없습니다.

### config.yaml 없이 cleaned.xlsx만 있을 때

```bash
python main.py run projects/budget_2026/output/budget_2026_cleaned.xlsx --input storage/새파일.xlsx
```

컬럼 정의·transform은 재적용되지만 **전처리(fill_down, row_filter)는 빠집니다.**

### 동일 파일 내용 업데이트 후 재실행

```bash
python scripts/gen_dummy.py    # 또는 실제 파일 교체

python main.py run projects/budget_2026/config.yaml --input storage/dummy_budget.xlsx
python main.py export projects/budget_2026/config.yaml
# → cleaned.xlsx, JSON 모두 덮어씌워짐. 브라우저 새로고침으로 반영.
```

### 컬럼·변환 규칙만 바꾸고 재실행

```bash
# cleaned.xlsx Config 시트 수정 후
python main.py run projects/budget_2026/output/budget_2026_cleaned.xlsx \
    --input storage/dummy_budget.xlsx
python main.py export projects/budget_2026/config.yaml
```

---

## 8. 두 프로젝트 실행 예시

### GPU 설문 (gpu_2026)

```bash
python scripts/gen_dummy.py
python main.py run projects/gpu_2026/config.yaml --input storage/dummy_gpu_survey.xlsx
python main.py export projects/gpu_2026/config.yaml
```

### 예산 집행 현황 (budget_2026)

```bash
python main.py run projects/budget_2026/config.yaml --input storage/dummy_budget.xlsx
python main.py export projects/budget_2026/config.yaml
```

### 두 프로젝트 한번에 갱신 (PowerShell)

```powershell
@{
    "gpu_2026"    = "storage/dummy_gpu_survey.xlsx"
    "budget_2026" = "storage/dummy_budget.xlsx"
}.GetEnumerator() | ForEach-Object {
    python main.py run "projects/$($_.Key)/config.yaml" --input $_.Value
    python main.py export "projects/$($_.Key)/config.yaml"
}
```

---

## 9. 웹 대시보드 실행

### 개발 서버 (Vite)
```bash
# 방법 1: 배치 파일 (node_modules 자동 설치)
start_web.bat

# 방법 2: 직접 실행
cd web && npm run dev
# → http://localhost:5173
```

> ⚠️ `python -m http.server`로는 React/TypeScript 소스(.tsx)를 실행할 수 없습니다.
> Vite 개발 서버(`npm run dev`) 또는 빌드 후 정적 서빙만 가능합니다.

### 백엔드 API 포함 실행 (Admin 마법사 사용 시)
```bash
# 터미널 1
start_backend.bat   # → http://localhost:8000

# 터미널 2
start_web.bat       # → http://localhost:5173

# Admin 마법사: http://localhost:5173/admin
```

### 특정 프로젝트 직접 열기 (URL 파라미터)
```
http://localhost:5173/?data=budget_2026_data.json
```

### 화면 구성

| URL | 역할 |
|-----|------|
| `http://localhost:5173/` | 대시보드 (KPI·차트·데이터 테이블) |
| `http://localhost:5173/admin` | 3단계 설정 마법사 (백엔드 필요) |

---

## 10. 특정 프로젝트 단독 웹서비스 배포

통합 대시보드(`web/`) 대신 특정 프로젝트만 담은 **독립 웹 패키지**를 만들 때 사용합니다.

```bash
python main.py deploy projects/budget_2026/config.yaml --dest dist/budget_2026
```

출력:
```
배포 완료: C:\...\dist\budget_2026
  접속 URL: index.html?data=budget_2026_data.json
  서버 실행: python -m http.server 8080 --directory dist\budget_2026
  브라우저: http://localhost:8080/index.html?data=budget_2026_data.json
```

`dist/budget_2026/` 구조:
```
dist/budget_2026/
├── index.html
├── js/
├── css/
└── data/
    ├── budget_2026_data.json   ← 해당 프로젝트만
    └── projects.json           ← 해당 프로젝트만 (1개)
```

이 폴더만 Nginx / Apache / S3 등 HTTP 서버에 올리면 됩니다.
GPU 설문 데이터는 포함되지 않으며, 다른 프로젝트로 전환하는 셀렉터도 나타나지 않습니다.

---

## 11. 자주 묻는 질문

### Q. 파일이 열려 있어서 저장 오류가 납니다
Excel에서 해당 파일을 닫고 재실행하세요. 자동으로 타임스탬프가 붙은 임시 파일로 저장됩니다.

### Q. export 후 대시보드에 새 프로젝트가 안 보입니다
브라우저 강력 새로고침(`Ctrl+Shift+R`)을 시도하거나 `web/data/projects.json`을 확인하세요.

### Q. 프로젝트를 대시보드에서 제거하려면?
`web/data/projects.json`에서 해당 항목 삭제 + `web/data/<name>_data.json` 파일 삭제.

### Q. 실제 데이터와 더미 데이터는 어떻게 구분합니까?
파이프라인 입장에서 차이 없습니다. `--input` 파라미터에 실제 파일 경로만 지정하면 됩니다.

### Q. cleaned.xlsx로 재실행하면 행 수가 달라집니다
`fill_down`, `row_filter` 전처리는 Config 시트에 저장되지 않기 때문입니다.
전처리를 포함한 재실행은 반드시 `config.yaml`을 사용하세요.

---

## 12. 명령어 치트시트

```bash
# ── 프로젝트 초기화 (분석 + 폴더 생성) ───────────────────────────
# 대화형: 분석 결과 표시 → 프로젝트명 입력 → config.yaml 생성
python main.py init <xlsx>

# 비대화형: 파일명을 프로젝트명으로 자동 사용 (CI/배치 환경)
python main.py init <xlsx> --auto

# 프로젝트명 직접 지정
python main.py init <xlsx> --project <name>

# 폴더 전체 병합 프로젝트 생성
python main.py init <folder> --project <name>

# 분석 결과만 확인 (프로젝트 생성 안 함)
python main.py analyze <xlsx>

# ── 실행 ──────────────────────────────────────────────────────────
# yaml 방식 (전처리 포함, 기본)
python main.py run projects/<name>/config.yaml --input <xlsx>

# cleaned xlsx 라운드트립 방식 (Config 시트 수정 후 재실행)
python main.py run projects/<name>/output/<name>_cleaned.xlsx --input <xlsx>

# ── 등록 / 배포 ───────────────────────────────────────────────────
# 통합 대시보드에 등록
python main.py export projects/<name>/config.yaml

# 단독 웹서비스 패키징
python main.py deploy projects/<name>/config.yaml --dest dist/<name>

# ── 기타 ──────────────────────────────────────────────────────────
python scripts/gen_dummy.py              # 더미 데이터 재생성
cd web && npm run dev                    # 통합 대시보드 실행
python -m http.server 8080 --directory dist/<name>   # 단독 서비스 실행

# ── 수정 → 재실행 루프 ────────────────────────────────────────────
# 1. output/<name>_cleaned.xlsx 열기 → Config 시트 수정 → 저장
# 2. python main.py run output/<name>_cleaned.xlsx --input <xlsx>
# 3. 결과 확인 → 1 반복
```
