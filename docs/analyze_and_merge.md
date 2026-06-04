# 사전 분석 & 데이터 통합 설계서

작성일: 2026-05-14

---

## 1. 개요 — 왜 필요한가

설문 데이터는 다음 이유로 처리 전 반드시 구조를 파악해야 한다.

| 문제 | 예시 |
|---|---|
| 시트가 여러 개 | "all responses", "Summary", "메타" 중 어느 시트? |
| 헤더 행이 다름 | 어떤 설문은 1행, 어떤 설문은 3행에 컬럼명 |
| 데이터 시작 행이 다름 | 헤더 바로 다음 vs. 병합셀/빈행 이후 |
| 여러 파일 분산 수집 | 월별/기관별로 나뉜 xlsx를 하나로 합쳐야 함 |

---

## 2. 처리 흐름 (전체)

```
[Step 0] 엑셀 파일(들) 입력
          ↓
[Step 1] analyze — 구조 자동 탐지 + 사용자 확인
          ↓
[Step 2] init — 확인 결과로 config.yaml 초안 자동 생성
          ↓
[Step 3] (선택) merge — 여러 파일/폴더 → 단일 데이터셋
          ↓
[Step 4] run — 클렌징 + 집계 + 스타일 + 슬라이서
```

---

## 3. Step 1: analyze 명령어

### 3-1. 실행

```bash
python main.py analyze ./storage/raw_data.xlsx
python main.py analyze ./storage/raw_data.xlsx --sheet "all responses"  # 시트 지정
python main.py analyze ./storage/raw_data.xlsx --project gpu_2026 --save-project  # 프로젝트 폴더 생성 및 draft 저장
```

### 3-2. 자동 탐지 로직 (`engine/analyzer.py`)

```
ExcelAnalyzer.analyze(file_path, sheet_name=None)
  │
  ├─ [1] 시트 목록 수집
  │     - 모든 시트명 + 행/열 수 파악
  │     - 단일 시트면 자동 선택, 다중이면 후보 제시
  │
  ├─ [2] 헤더 행 탐지 (detect_header_row)
  │     - 각 행을 스캔하여 "헤더 점수" 계산
  │       score = (비어있지 않은 셀 비율) × (문자열 셀 비율)
  │     - 점수가 높은 첫 번째 행을 헤더 후보로 선택
  │     - 단, 첫 행부터 3행 이내에서만 탐색 (일반적 패턴)
  │     - 멀티레벨 헤더 감지: 연속된 2~3 고점수 행 → 병합 헤더 경고
  │
  ├─ [3] 데이터 시작 행 탐지 (detect_data_start_row)
  │     - header_row 이후 첫 비어있지 않은 행
  │     - 빈 행이 1개 이하면 header_row + 1
  │
  └─ [4] 컬럼 샘플 수집
        - 탐지된 헤더 행의 컬럼명 목록 (열 번호 + 컬럼명)
        - 데이터 행 첫 3~5개 미리보기
```

### 3-3. 출력 예시 (터미널)

```
──────────────────────────────────────────────
 📋 파일 분석: 20260508_all_data.xlsx
──────────────────────────────────────────────
 시트 목록:
  [1] all responses  (141행 × 35열)  ← 데이터 후보
  [2] Summary         (20행 × 10열)
  [3] 메타             (5행 × 3열)

 선택된 시트: all responses

 구조 탐지 결과:
  헤더 행:      3행  (신뢰도: 92%)
  데이터 시작:  4행
  총 데이터:    138행 (141 - 3 헤더행)
  컬럼 수:      35개

 컬럼 미리보기 (앞 10개):
  A(1)  [빈 컬럼]
  B(2)  응답ID
  C(3)  응답일시
  D(4)  [빈 컬럼]
  E(5)  소속기관유형
  F(6)  기관명
  G(7)  담당자명
  H(8)  직급
  I(9)  전화번호
  J(10) 이메일

 데이터 미리보기 (4~6행):
  B: [1001, 1002, 1003]
  E: [대학교, 연구소, 기업]
  F: [한국대학교, AI연구원, 테크컴퍼니]
──────────────────────────────────────────────
 위 내용이 맞나요? [Y/n] (또는 직접 수정):
  시트명 [all responses]: _
  헤더 행 번호 [3]: _
  데이터 시작 행 [4]: _
──────────────────────────────────────────────
 ✅ 확인 완료. source.yaml에 저장했습니다.
```

### 3-4. 출력 파일: `source.yaml`

```yaml
# survey analyze 로 자동 생성됨 — 검토 후 사용
# 생성일: 2026-05-14 10:30:22

source:
  file: "20260508_all_data.xlsx"
  sheet_name: "all responses"
  header_row: 3          # 헤더(컬럼명)가 있는 행
  data_start_row: 4      # 실제 데이터가 시작되는 행
  total_rows: 138        # 참고용

# 탐지된 컬럼 목록 (source_col → 헤더명)
detected_columns:
  - { col: 1,  name: "",          type: "empty" }
  - { col: 2,  name: "응답ID",    type: "text"  }
  - { col: 3,  name: "응답일시",  type: "datetime" }
  - { col: 4,  name: "",          type: "empty" }
  - { col: 5,  name: "소속기관유형", type: "text" }
  - { col: 6,  name: "기관명",    type: "text"  }
  - { col: 10, name: "이메일",    type: "text"  }
  - { col: 11, name: "주소",      type: "text"  }
  # ... (전체 컬럼)
```

---

## 4. Step 2: init 명령어

### 4-1. 실행

```bash
python main.py init ./storage/raw_data.xlsx --project gpu_2026
```

### 4-2. 처리

1. analyze 수행 (또는 source.yaml 로드)
2. 사용자 확인
3. `projects/{project}/config.yaml` 초안 자동 생성

### 4-3. 생성되는 config.yaml 초안

```yaml
# ⚠️ 자동 생성된 초안입니다. transform/summary 섹션을 검토·수정하세요.
# 생성: survey init gpu_2026  /  2026-05-14

project:
  name: gpu_2026
  transform_modules: []   # 도메인 플러그인 필요 시 추가

paths:
  input:  "../../storage/20260508_all_data.xlsx"
  output: "../../storage/gpu_2026_result.xlsx"

style_file: "./style.yaml"

source:
  sheet_name: "all responses"
  data_start_row: 4

output_sheets:
  cleaned: "cleaned"
  summary: "summary"

# ── 아래는 탐지된 컬럼 기반 초안입니다 ──────────────────
# transform을 copy에서 적합한 값으로 변경하세요
# 불필요한 컬럼은 삭제하세요
output_columns:
  # [col=1] 빈 컬럼 → 자동 제외됨
  - label_row1: "응답ID"        # col=2
    source_col: 2
    width: 16
    transform: copy             # ← 검토 필요

  - label_row1: "응답일시"      # col=3
    source_col: 3
    width: 18
    transform: copy             # ← clean_date 로 변경 권장

  - label_row1: "소속기관유형"  # col=5
    source_col: 5
    width: 22
    transform: copy

  - label_row1: "기관명"        # col=6
    source_col: 6
    width: 22
    transform: copy             # ← clean_company 로 변경 권장

  # ... (전체 비어있지 않은 컬럼)

slicers: []                     # 슬라이서 추가 시 col_ref 기입

summary:
  title: "gpu_2026 설문 결과"
  total_cell: "$B$3"
  sections: []                  # 섹션 추가 필요
```

---

## 5. Step 3: merge 명령어 (선택)

### 5-1. 실행

```bash
# merge 섹션이 포함된 config.yaml을 사용하여 병합 실행
python main.py merge projects/gpu_2026/config.yaml --output storage/merged.xlsx
```

### 5-2. merge 설정 (`config.yaml`의 `merge` 섹션)

```yaml
merge:
  # ── 소스 정의 ──────────────────────────────────────────
  sources:
    # 방식 1: 폴더 내 glob 패턴
    - type: folder
      path: "../../storage/raw/"
      pattern: "*.xlsx"
      sheet_name: "all responses"   # 모든 파일에서 이 시트 사용
      data_start_row: 4             # 공통 설정 (개별 override 가능)
    
    # 방식 2: 개별 파일 (구조가 다를 경우)
    - type: file
      path: "../../storage/extra_data.xlsx"
      sheet_name: "응답"
      data_start_row: 2
      # 이 파일만 다른 헤더명 → column_mapping 적용
    
  # ── 컬럼명 불일치 매핑 ─────────────────────────────────
  # 소스마다 컬럼명이 다를 때: {소스 컬럼명: 통합 컬럼명}
  column_mapping:
    "기관명칭":    "기관명"
    "연락처(HP)": "이메일"
    "지역":       "주소"
  
  # ── 중복 제거 ───────────────────────────────────────────
  dedup:
    enabled: true
    key_columns: ["응답ID"]         # 이 컬럼 조합으로 중복 판단
    strategy: keep_last             # keep_first | keep_last | error | flag
    # strategy: flag → 중복 행에 "중복_여부" 컬럼 추가 (제거 안 함)
  
  # ── 파일 출처 추적 ──────────────────────────────────────
  add_source_column:
    enabled: true
    column_name: "_출처파일"         # 원본 파일명을 기록하는 컬럼 추가
  
  # ── 출력 ────────────────────────────────────────────────
  output:
    path: "../../storage/merged.xlsx"
    sheet_name: "all responses"
    # 이 파일이 run 명령어의 input으로 사용됨
```

### 5-3. merge 실행 출력 예시

```
──────────────────────────────────────────────
 🔀 데이터 통합: gpu_2026
──────────────────────────────────────────────
 소스 파일:
  [1] raw/20260101_batch1.xlsx  → 시트: all responses  → 48행
  [2] raw/20260301_batch2.xlsx  → 시트: all responses  → 52행
  [3] raw/20260501_batch3.xlsx  → 시트: all responses  → 41행
  [4] extra_data.xlsx           → 시트: 응답           → 15행
      컬럼 매핑 적용: 기관명칭→기관명, 지역→주소

 통합 결과:
  합산 행수: 156행
  중복 제거: 3행 (key: 응답ID)
  최종 행수: 153행
  _출처파일 컬럼 추가됨

 저장: storage/merged.xlsx (시트: all responses)
──────────────────────────────────────────────
 ✅ 통합 완료. 다음 단계: survey run gpu_2026
```

---

## 6. 헤더 행 탐지 알고리즘 상세

### 6-1. 점수 계산 로직

```python
def _score_row_as_header(self, ws, row_idx: int) -> float:
    """
    행이 헤더일 가능성 점수 (0.0 ~ 1.0)
    
    기준:
    1. 비어있지 않은 셀 비율 (weight: 0.4)
    2. 문자열 셀 비율 (weight: 0.4)
    3. 숫자/날짜 셀 없음 (weight: 0.2)
    """
    cells = [ws.cell(row_idx, c).value for c in range(1, ws.max_column + 1)]
    non_empty = [v for v in cells if v is not None and str(v).strip()]
    if not non_empty:
        return 0.0
    
    fill_ratio   = len(non_empty) / len(cells)
    str_ratio    = sum(1 for v in non_empty if isinstance(v, str)) / len(non_empty)
    no_num_bonus = 0.2 if all(isinstance(v, str) for v in non_empty) else 0.0
    
    return fill_ratio * 0.4 + str_ratio * 0.4 + no_num_bonus

def detect_header_row(self, ws, search_up_to: int = 5) -> int:
    """상위 N행 중 헤더 점수 최대인 행 반환"""
    scores = {r: self._score_row_as_header(ws, r) for r in range(1, search_up_to + 1)}
    return max(scores, key=scores.get)
```

### 6-2. 멀티레벨 헤더 감지

```python
def detect_multilevel_header(self, ws, header_row: int) -> bool:
    """
    연속 2행이 모두 헤더 점수 > 0.7이면 멀티레벨 헤더 경고
    예: 행2=대분류, 행3=세부항목
    """
    if header_row <= 1:
        return False
    prev_score = self._score_row_as_header(ws, header_row - 1)
    curr_score = self._score_row_as_header(ws, header_row)
    return prev_score > 0.7 and curr_score > 0.7
```

### 6-3. 빈 컬럼 탐지

```python
def detect_empty_columns(self, ws, data_start_row: int, sample_rows: int = 10) -> list[int]:
    """
    데이터 행 기준으로 값이 전혀 없는 열 번호 목록 반환
    → init 시 output_columns에서 자동 제외
    """
```

---

## 7. 모듈 구조 추가

```
engine/
  ├── analyzer.py      # ExcelAnalyzer: 구조 탐지 + source.yaml 생성
  └── merger.py        # DataMerger: 다중 파일 통합
```

### analyzer.py 인터페이스

```python
class AnalysisResult(BaseModel):
    file_path: Path
    sheets: list[SheetInfo]
    selected_sheet: str
    header_row: int
    data_start_row: int
    total_data_rows: int
    columns: list[ColumnInfo]      # col_num, name, detected_type
    has_multilevel_header: bool
    empty_columns: list[int]
    confidence: float              # 탐지 신뢰도 (0~1)

class ExcelAnalyzer:
    def analyze(self, file_path, sheet_name=None) -> AnalysisResult: ...
    def to_source_yaml(self, result: AnalysisResult) -> str: ...
    def to_config_draft(self, result: AnalysisResult, project_name: str) -> str: ...
```

### merger.py 인터페이스

```python
class MergeResult(BaseModel):
    source_files: list[Path]
    total_input_rows: int
    duplicate_removed: int
    final_rows: int
    output_path: Path
    warnings: list[str]

class DataMerger:
    def __init__(self, merge_config: MergeConfig): ...
    def merge(self, dry_run: bool = False) -> MergeResult: ...
    def _load_source(self, src: MergeSource) -> pd.DataFrame: ...
    def _apply_column_mapping(self, df: pd.DataFrame) -> pd.DataFrame: ...
    def _deduplicate(self, df: pd.DataFrame) -> pd.DataFrame: ...
```

---

## 8. 업데이트된 CLI 전체 명령어

```bash
# ── 분석 단계 ────────────────────────────────────────────────
python main.py analyze ./data.xlsx                          # 구조 분석 및 draft 엑셀 자동 생성
python main.py analyze ./data.xlsx --sheet "응답"           # 시트 직접 지정
python main.py analyze ./data.xlsx --project test_proj --save-project  # 프로젝트 폴더 내 draft 생성

# ── 프로젝트 초기화 ──────────────────────────────────────────
python main.py init ./data.xlsx --project gpu_2026          # 분석 + config.yaml 초안 생성
python main.py init ./data.xlsx --auto                      # 대화 없이 파일명으로 프로젝트 자동 생성

# ── 데이터 통합 ──────────────────────────────────────────────
python main.py merge projects/gpu_2026/config.yaml --output merged_result.xlsx  # config의 merge 설정 실행

# ── 메인 처리 ────────────────────────────────────────────────
python main.py validate projects/gpu_2026/config.yaml --input ./data.xlsx  # 설정 검증
python main.py run projects/gpu_2026/config.yaml --input ./data.xlsx       # 처리 실행

# ── 관리 및 기타 ─────────────────────────────────────────────
python main.py new-project gpu_2027                         # 빈 프로젝트 폴더 및 config 템플릿 생성
python main.py export projects/gpu_2026/config.yaml         # 웹 대시보드 데이터 JSON 내보내기
python main.py deploy projects/gpu_2026/config.yaml --dest dist/gpu_2026  # 단독 웹서비스 배포
```

---

## 9. source.yaml vs config.yaml 역할 분리

| 파일 | 역할 | 생성 시점 |
|---|---|---|
| `source.yaml` | 원본 파일의 물리적 구조 정보 (시트/헤더/컬럼 목록) | `analyze` 명령어 자동 생성 |
| `config.yaml` | 처리 규칙 (transforms, summary, slicers) | `init`으로 초안 생성, 사람이 편집 |
| `style.yaml` | 시각 요소 (색상, 폰트, 테이블 스타일) | `init`으로 기본값 생성 |
| `merge.yaml` (선택) | 다중 파일 통합 규칙 | 수동 작성 또는 config.yaml 내 merge 섹션 |

> `source.yaml`은 `config.yaml`이 자동 import하거나,  
> `init`이 `source.yaml` 내용을 `config.yaml`에 인라인으로 포함하는 방식 중 선택 가능.  
> **권장**: `config.yaml` 단일 파일로 통합 (init이 source 내용을 config에 삽입)

---

## 10. 전체 파이프라인 흐름도

```
엑셀 파일(들)
    │
    ▼
[analyze]
  ExcelAnalyzer
  - 시트 탐지
  - 헤더 행 탐지 (scoring)
  - 컬럼 목록 추출
  - 빈 컬럼 제외
    │
    ▼ (사용자 확인)
    │
[init]
  config.yaml 초안 생성
  - source: sheet/header/data_start
  - output_columns: 탐지 컬럼 → transform: copy 기본값
  - summary, slicers: 비어있는 템플릿
    │
    ▼ (사용자 편집: transform 지정, summary 섹션 추가)
    │
[merge] (선택)
  DataMerger
  - 폴더/파일 목록 로드
  - column_mapping 적용
  - 세로 합치기 (pd.concat)
  - 중복 제거 (dedup)
  - 출처 컬럼 추가
  → merged.xlsx 저장
    │
    ▼
[run]
  SurveyPipeline
  - SurveyConfig (Pydantic) 검증
  - TransformRegistry 로드
  - CleanedSheetWriter
  - SummarySheetWriter
  - StyleApplier
  - SlicerInjector
  → result.xlsx 저장
```
