# project_budget — 파이프라인 실행 가이드

> 원본 파일: `storage/budget.xlsx`  
> 프로젝트명: `project_budget`  
> 데이터: 정부 예산집행 현황, 44,985행 × 11열 (→ 정제 후 8열)

---

## 원본 데이터 구조

| 열 | 컬럼명 | 타입 | 비고 |
|----|--------|------|------|
| 1 | 회계연도 | 숫자 | 2022, 2023 등 |
| 2 | 소관명 | 텍스트/범주 | 부처·기관명 |
| 3 | 통합소관명 | 텍스트/범주 | 소관명과 중복 → **제외** |
| 4 | 회계구분 | 범주 | 일반회계 등 → **제외** |
| 5 | 회계명 | 범주 | 회계구분과 중복 → **제외** |
| 6 | 분야명 | 범주 | 일반·지방행정 등 |
| 7 | 부문명 | 범주 | 일반행정 등 |
| 8 | 프로그램명 | 텍스트 | |
| 9 | 단위사업명 | 텍스트 | |
| 10 | 세부사업명 | 텍스트 | |
| 11 | 예산액 | 숫자 | 단위: 백만원 |

헤더 행: 2 / 데이터 시작: 3행

---

## 전체 파이프라인 흐름

```
storage/budget.xlsx
    │
    ▼ [Step 1] analyze
storage/draft_budget.xlsx  (Config 시트 자동 생성)
    │
    ▼ [Config 시트 수정] transform, 구분, 슬라이서, 요약 섹션 설정
    │
    ▼ [Step 2] validate
검증 통과 (오류 없음)
    │
    ▼ [Step 3] run
projects/project_budget/output/project_budget_cleaned.xlsx  ← 정제 Excel (8열)
projects/project_budget/project_budget_config.json          ← 설정 JSON 백업
    │
    ▼ [Step 4] export
web/data/project_budget_data.json  ← 웹 대시보드 데이터
web/data/projects.json             ← 프로젝트 목록
    │
    ▼ [Step 5] serve
http://localhost:8080/?data=project_budget_data.json
```

---

## Step 1 — analyze: 원본 분석 + draft 생성

```bash
python main.py analyze storage/budget.xlsx --project project_budget
```

**출력물**

| 파일 | 설명 |
|------|------|
| `storage/draft_budget.xlsx` | Config 시트가 포함된 초안 Excel |

**출력 내용 (터미널)**
```
[draft 생성] storage\draft_budget.xlsx
  컬럼 수: 11  /  헤더 행: 2
  헤더 샘플: 회계연도, 소관명, 통합소관명, 회계구분, 회계명
```

**선택 옵션**

| 옵션 | 동작 |
|------|------|
| `--dry-run` | 파일 생성 없이 JSON만 화면 출력 |
| `--save-project` | `projects/project_budget/` 폴더에 저장 |
| `--draft <경로>` | 저장 경로 직접 지정 |

---

## Step 2 — Config 시트 수정

`storage/draft_budget.xlsx`를 Excel로 열고 **Config 시트**의 `[컬럼 정의]` 섹션을 수정합니다.

### 적용한 설정

| # | output_col | 구분 | transform | include_in_slicer |
|---|------------|------|-----------|-------------------|
| 1 | 회계연도 | include | copy | TRUE |
| 2 | 소관명 | include | norm_text | TRUE |
| 3 | 통합소관명 | **exclude** | — | — |
| 4 | 회계구분 | **exclude** | — | — |
| 5 | 회계명 | **exclude** | — | — |
| 6 | 분야명 | include | norm_text | TRUE |
| 7 | 부문명 | include | norm_text | TRUE |
| 8 | 프로그램명 | include | norm_text | — |
| 9 | 단위사업명 | include | norm_text | — |
| 10 | 세부사업명 | include | norm_text | — |
| 11 | 예산액 | include | norm_num | — |

### 슬라이서 설정

| col | caption |
|-----|---------|
| 회계연도 | 연도 |
| 분야명 | 분야 |
| 부문명 | 부문 |

### 요약 섹션 설정

| id | title | type | col_ref |
|----|-------|------|---------|
| by_year | 연도별 예산 | unique_count | 회계연도 |
| by_field | 분야별 예산 | unique_count | 분야명 |
| by_sector | 부문별 예산 | unique_count | 부문명 |

---

## Step 3 — validate: 설정 검증

```bash
python main.py validate storage/draft_budget.xlsx --input storage/budget.xlsx
```

**결과**
```
[정보] 원본 컬럼 수: 11
[정보] columns[3](통합소관명)은 transform=exclude로 출력에서 제외됩니다.
[정보] columns[4](회계구분)은 transform=exclude로 출력에서 제외됩니다.
[정보] columns[5](회계명)은 transform=exclude로 출력에서 제외됩니다.
[정보] 설정 참조 검증을 통과했습니다.
검증 완료
```

**--input 생략 시**: source_col 범위 검사는 건너뜁니다 (경고 표시).

---

## Step 4 — run: 데이터 정제

```bash
python main.py run storage/draft_budget.xlsx --input storage/budget.xlsx
```

**출력물**

| 파일 | 크기 | 설명 |
|------|------|------|
| `projects/project_budget/output/project_budget_cleaned.xlsx` | ~5.6 MB | 정제 Excel (Cleaned + Summary + Config + Guide 시트, 슬라이서 3개) |
| `projects/project_budget/project_budget_config.json` | 5 KB | SurveyConfig JSON 백업 |

**처리 시간**: 44,985행 기준 약 2~3분

**출력 내용 (터미널)**
```
변환중: 44,985/44,985행 (100%) 완료
Cleaned 시트 행수: 44985건
저장: projects\project_budget\output\project_budget_cleaned.xlsx
슬라이서 3개 삽입 완료
설정 JSON: projects\project_budget\project_budget_config.json
완료: 44985건 → project_budget_cleaned.xlsx
```

**생성된 시트 구성**
- **Cleaned**: 8열 × 44,985행, SUBTOTAL 수식, Excel 테이블
- **Summary**: 3개 섹션 (연도별/분야별/부문별 고유값 집계)
- **Config**: 설정 라운드트립용 (수정 후 재실행 가능)
- **Guide**: CLI 명령 및 transform 레퍼런스

---

## Step 5 — export: 웹용 JSON 생성

```bash
# config.json 경유 (권장 — cleaned.xlsx 슬라이서 XML 파싱 우회)
python -c "
import json
from pathlib import Path
from engine.config import SurveyConfig
from engine.exporter import export_to_json

with open('projects/project_budget/project_budget_config.json', encoding='utf-8') as f:
    raw = json.load(f)
cfg = SurveyConfig.model_validate(raw)
export_to_json(
    Path('projects/project_budget/output/project_budget_cleaned.xlsx'),
    cfg,
    output_path=Path('web/data/project_budget_data.json'),
    project_dir=Path('projects/project_budget'),
)
"
```

> **참고**: `python main.py export ...` 를 직접 사용할 경우 슬라이서가 삽입된
> cleaned.xlsx의 XML 파싱 오류(`unbound prefix`)가 발생할 수 있습니다.
> config.json을 경유하는 방법 또는 아래 배포 명령을 사용하세요.

**출력물**

| 파일 | 크기 | 설명 |
|------|------|------|
| `web/data/project_budget_data.json` | ~30 MB | 웹 대시보드 데이터 |
| `web/data/projects.json` | 1 KB | 프로젝트 목록 (manifest) |

**자동 생성된 웹 config (data.json 내 `config` 키)**

| 항목 | 자동 감지 결과 |
|------|--------------|
| KPI | 전체 건수 / 분야명 고유값 수 / 회계연도 합계 |
| search_fields | 소관명, 부문명, 프로그램명, 단위사업명, 세부사업명 |
| charts | 분야명 (hbar) |

---

## Step 6 — 웹 서버 실행

```bash
python -m http.server 8080 --directory web
# 브라우저: http://localhost:8080/?data=project_budget_data.json
```

---

## Step 7 — deploy: 독립 패키지 배포 (선택)

```bash
# config.yaml 없이 config.json만 있는 경우: cleaned.xlsx를 직접 넘김
python main.py deploy projects/project_budget/output/project_budget_cleaned.xlsx \
    --dest dist/project_budget
python -m http.server 8080 --directory dist/project_budget
# 브라우저: http://localhost:8080/index.html?data=project_budget_data.json
```

---

## 재실행 방법 (데이터 업데이트)

새 `budget.xlsx`가 생기면 아래 두 명령만 실행합니다.

```bash
# 1. 정제 재실행 (Config 설정 그대로, 원본 파일만 교체)
python main.py run storage/draft_budget.xlsx --input storage/새파일.xlsx

# 2. 웹 JSON 재생성
python -c "
import json; from pathlib import Path; from engine.config import SurveyConfig; from engine.exporter import export_to_json
cfg = SurveyConfig.model_validate(json.load(open('projects/project_budget/project_budget_config.json', encoding='utf-8')))
export_to_json(Path('projects/project_budget/output/project_budget_cleaned.xlsx'), cfg, output_path=Path('web/data/project_budget_data.json'), project_dir=Path('projects/project_budget'))
"
```

---

## Config 시트 수정 시 변화 대조표

| 수정 항목 | 변화 내용 | 영향받는 출력물 |
|-----------|-----------|----------------|
| `구분` → exclude | 해당 컬럼이 Cleaned 시트에서 제거됨 | cleaned.xlsx, data.json |
| `transform` 변경 | 해당 컬럼 값이 새 규칙으로 변환됨 | cleaned.xlsx, data.json |
| `output_col` 수정 | Cleaned 헤더명 변경 | cleaned.xlsx, data.json, dashboard 설정 재확인 필요 |
| `include_in_slicer=TRUE` 추가 | 슬라이서 자동 등록 | cleaned.xlsx |
| 슬라이서 행 추가/삭제 | 필터 바 항목 변경 | cleaned.xlsx |
| 요약 섹션 행 추가 | Summary 시트에 집계 섹션 추가 | cleaned.xlsx |
| `summary_layout_cols` 변경 | Summary 시트 단(column) 배치 변경 | cleaned.xlsx |

**재실행 필요**: Config 시트 수정 후 반드시 `run` → `export` 순서로 재실행.

---

## 알려진 이슈 및 해결책

### 1. export 명령 XML 파싱 오류

```
xml.etree.ElementTree.ParseError: unbound prefix
```

**원인**: 슬라이서 삽입(ZIP 패치) 시 `<drawing>` 요소에 `xmlns:r` 선언이 누락됨.  
**해결**: `engine/slicer.py` L214 수정 (이미 반영됨):
```python
drawing_el = f'<drawing xmlns:r="{_NS_R}" r:id="{ws_drw_rid}"/>'
```
기존 파일 일괄 패치:
```bash
python scripts/fix_slicer_ns.py <path_to_cleaned.xlsx>
```

### 2. export CLI가 config.yaml 없이 동작하지 않는 경우

`projects/{name}/` 폴더에 `config.yaml`이 없고 `config.json`만 있는 경우,  
`export` CLI 대신 Step 5의 직접 호출 방식을 사용합니다.

### 3. 대용량 파일 메모리 사용

44K행 × 8열 기준 **run** 처리에 약 2~3분 소요.  
10만 행 이상에서는 pandas 메모리 이슈 가능성 있음 (미검증).

---

## 산출물 구조 및 파일 위치

```
C:\coding\msshin\survey2\
│
├── storage/
│   ├── budget.xlsx                    2.5 MB   ← 원본 (건드리지 않음)
│   └── draft_budget.xlsx             14 KB    ← Step 1 analyze 산출물 (Config 초안)
│
├── projects/
│   └── project_budget/
│       ├── project_budget_config.json  5 KB   ← Step 3 run 산출물 (설정 JSON 백업)
│       └── output/
│           └── project_budget_cleaned.xlsx
│                                      5.6 MB  ← Step 3 run 산출물 (정제 Excel)
│
├── web/
│   └── data/
│       ├── project_budget_data.json   16 MB   ← Step 4 export 산출물 (웹 데이터)
│       └── projects.json              0.4 KB  ← export 시 자동 갱신 (프로젝트 목록)
│
├── docs/
│   └── project/
│       └── project_budget.md         10 KB   ← 파이프라인 가이드 문서 (이 파일)
│
└── scripts/
    └── fix_slicer_ns.py               1 KB   ← 슬라이서 XML 패치 유틸
```

### 각 파일 역할 요약

| 파일 | 생성 단계 | 역할 |
|------|-----------|------|
| `storage/draft_budget.xlsx` | Step 1 `analyze` | Config 시트 수정의 작업 대상 |
| `project_budget_config.json` | Step 3 `run` | export 명령이 config를 읽는 데 사용, 설정 백업 |
| `project_budget_cleaned.xlsx` | Step 3 `run` | 정제 결과 Excel 직접 확인 / 슬라이서 포함 / Config 라운드트립 |
| `project_budget_data.json` | Step 4 `export` | 웹 대시보드가 실제로 읽는 데이터 파일 |
| `projects.json` | Step 4 `export`마다 갱신 | 웹 상단 프로젝트 선택 드롭다운 목록 |
