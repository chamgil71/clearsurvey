# Survey Engine v2 — 사용 가이드

## 목차

1. [분석 설계 흐름](#1-분석-설계-흐름)
2. [Phase 0 — 입력 분석 및 설정 구성](#2-phase-0--입력-분석-및-설정-구성)
3. [Phase 1 — 전처리](#3-phase-1--전처리)
4. [Phase 2 — 정제 시트 생성](#4-phase-2--정제-시트-생성)
5. [Phase 3 — 요약 시트 생성](#5-phase-3--요약-시트-생성)
6. [Phase 4 — 출력 및 라운드트립](#6-phase-4--출력-및-라운드트립)
7. [Phase 5 — 웹 대시보드](#7-phase-5--웹-대시보드)
8. [Config 파일 레퍼런스](#8-config-파일-레퍼런스)
9. [Transform 레퍼런스](#9-transform-레퍼런스)
10. [다중 소스 병합](#10-다중-소스-병합)
11. [새 Transform 추가](#11-새-transform-추가)

---

## 1. 분석 설계 흐름

```
원본 xlsx
    │
    ▼
[Phase 0] ExcelAnalyzer
    • 시트 목록 확인
    • 헤더 행 자동 감지 (점수 기반)
    • 컬럼 수·샘플 헤더 출력
    • → config.yaml 초안 작성 기반 제공
    │
    ▼
[Phase 1] Preprocessor  ← config.preprocess 적용
    • fill_down  : 계층·merged cell 값 아래로 채우기
    • row_filter : include(AND) / exclude(OR) 행 필터링
    • → pandas DataFrame (원본 + fill_down 컬럼 추가)
    │
    ▼
[Phase 2] CleanedSheetWriter  ← config.columns 적용
    • 컬럼별 TransformRegistry.apply() 호출
    • Row 1: SUBTOTAL 집계 행
    • Row 2: 헤더 (output_col 이름)
    • Row 3+: 정제된 데이터
    • Excel Table + 슬라이서 삽입
    │
    ▼
[Phase 3] SummarySheetWriter  ← config.summary 적용
    • layout 기반 섹션 위치 자동 계산 (layout_col → start_row/col 결정)
    • 섹션별 COUNTIF / SUMIF / AVERAGEIF 수식 삽입
    • total_cell 자동 계산 (totals 섹션 위치 기반)
    │
    ▼
[Phase 4] 출력
    • Config 시트 (설정 표, 편집 가능)
    • Guide 시트 (사용법·레퍼런스)
    • ZIP 패치 → 슬라이서 삽입
    • → 최종 xlsx 저장
    │
    ▼
[라운드트립] 수정 후 재실행
    • Config 시트 컬럼 정의·요약 섹션 수정
    • python main.py run output.xlsx --input new_data.xlsx
    │
    ▼
[Phase 5] 웹 대시보드
    • python main.py export → web/data/*.json
    • 브라우저에서 필터·차트·목록 확인
    • admin.html 에서 KPI·차트 구성 조정
```

---

## 2. Phase 0 — 입력 분석 및 설정 구성

### 2-1. Excel 파일 구조 분석

```bash
python main.py analyze data.xlsx
python main.py analyze data.xlsx --sheet "응답 데이터"
```

출력 예시:
```json
{
  "file": "data.xlsx",
  "sheets": ["summary", "all responses", "cleaned"],
  "sheet": "all responses",
  "header_row": 3,
  "header_score": 1.0,
  "data_start_row": 4,
  "column_count": 31,
  "sample_headers": ["응답ID", "기관명", "..."]
}
```

헤더 감지 알고리즘 (최대 5행 탐색):
```
score = (비어있지않은비율 × 0.4) + (문자열비율 × 0.4) + (숫자없음보너스 × 0.2)
```

### 2-2. 새 프로젝트 생성

```bash
python main.py new-project budget_2026
# → projects/budget_2026/config.yaml (템플릿)
# → projects/budget_2026/style.yaml
# → projects/budget_2026/output/
```

### 2-3. config.yaml 기본 구조

```yaml
project: "my_survey"
style_file: "style.yaml"

source:
  sheet: "all responses"    # null = 첫 번째 시트
  header_row: 3             # 1-indexed, analyze로 확인
  data_start_row: 4         # 보통 header_row + 1

paths:
  output_dir:  "output"
  output_file: "my_survey_cleaned.xlsx"

sheets:
  cleaned: "cleaned"
  summary: "summary"
```

---

## 3. Phase 1 — 전처리

### 3-1. fill_down — 계층 데이터 채우기

**mode: always** — 빈 셀을 직전 비어있지 않은 값으로 채움

```yaml
preprocess:
  fill_down:
    - source_col: 1          # A열 (1-indexed)
      output_label: "사업코드"
      mode: always
```

**mode: on_trigger** — 특정 조건이 맞을 때의 값을 아래로 전파

```yaml
preprocess:
  fill_down:
    - source_col: 1
      output_label: "사업코드"
      mode: on_trigger
      trigger_col: 3         # C열
      trigger_value: 3       # C열 값이 3일 때 A열 값을 캡처하여 전파
```

fill_down으로 생성된 컬럼은 `source_label`로 참조:

```yaml
columns:
  - output_col: "사업코드"
    source_label: "사업코드"  # fill_down output_label 참조
    transform: copy
```

### 3-2. row_filter — 행 필터링

```yaml
preprocess:
  row_filter:
    include:                  # AND 조건 — 모두 만족하는 행만 포함
      - col: 3
        values: [7]           # C열 값이 7인 행만
    exclude:                  # OR 조건 — 하나라도 해당하면 제외
      - col: 3
        is_empty: true        # C열이 비어 있는 행 제외
      - col: 2
        equals: "합계"        # B열이 "합계"인 행 제외
```

필터 규칙 타입:

| 필드 | 동작 |
|------|------|
| `values: [v1, v2]` | 값이 목록 중 하나와 일치 |
| `equals: "값"` | 값이 정확히 일치 |
| `is_empty: true` | 셀이 비어 있음 |

---

## 4. Phase 2 — 정제 시트 생성

### 4-1. 컬럼 정의

```yaml
columns:
  - output_col: "기관명"        # 출력 헤더 이름 (자유롭게)
    source_col: 6              # 원본 F열 (1-indexed)
    transform: copy
    width: 22

  - output_col: "소재지_시도"
    source_col: 11             # 원본 K열 주소 텍스트
    transform: address_sido
    width: 8

  - output_col: "H100_장수"
    source_col: 18             # 원본 R열
    transform: jang
    backup_col: 23             # R열 비어있을 때 W열 참조
    width: 10

  - output_col: "O_학습"       # 0/1 이진 플래그
    source_col: 15
    transform: o_binary
    flag_keyword: "대규모 AI 모델 학습"
    width: 7
    include_in_slicer: true    # 슬라이서 목록에 포함
```

### 4-2. 출력 시트 구조

```
행 1: SUBTOTAL 집계 행 (수치형: SUM, 텍스트형: COUNTA)
행 2: 헤더 (output_col 이름, 진한 파란색)
행 3+: 정제된 데이터
```

---

## 5. Phase 3 — 요약 시트 생성

### 5-0. 요약 시트의 수식 방식

> **요약 시트의 모든 수치는 Excel 수식으로 작성됩니다. 값이 하드코딩되지 않습니다.**

cleaned 시트를 참조하는 크로스 시트 수식이 삽입되므로,  
**cleaned 시트 데이터가 바뀌면 summary 시트 값이 자동으로 갱신**됩니다.

| 섹션 타입 | 삽입되는 수식 | 의미 |
|-----------|-------------|------|
| `totals → count_all` | `=COUNTA('cleaned'!A3:A10000)` | 전체 응답수 |
| `totals → countif_exact` | `=COUNTIF('cleaned'!E3:E10000,"사용중")` | 특정 값 개수 |
| `unique_count` | `=COUNTIF('cleaned'!E3:E10000,"서울")` | 고유값별 응답수 |
| `binary_sum` | `=IFERROR(SUM('cleaned'!L3:L10000),0)` | 0/1 컬럼 합산 |
| `gpu_demand` | `=SUMIF(...)`, `=COUNTIF(...)`, `=AVERAGEIF(...)` | 합계·건수·평균 |
| `countif_contains` | `=COUNTIF('cleaned'!Z3:Z10000,"*즉시*")` | 와일드카드 포함 검색 |
| 비율 (%) | `=IFERROR(ROUND(B5/$B$3*100,1),"")` | total_cell 대비 비율 |

`$B$3` (total_cell)은 layout 사용 시 totals 섹션의 count_all 셀 위치에서 **자동 계산**됩니다.

### 5-1. 레이아웃 자동 배치

`layout` 설정을 사용하면 `start_row`/`start_col`을 하드코딩할 필요가 없습니다.  
각 섹션의 `layout_col`만 지정하면 항목 수에 따라 다음 섹션 위치가 자동으로 계산됩니다.

```yaml
summary:
  sheet_name: "summary"

  layout:
    cols:      2   # 단 수 (1 = 단일 단, 2 = 좌/우 2단)
    start_row: 1   # 모든 단의 시작 행
    col_span:  4   # 단 하나가 차지하는 Excel 열 수
    gap_cols:  1   # 단 사이 빈 Excel 열 수
    gap_rows:  2   # 같은 단 내 섹션 사이 빈 행 수

  sections:
    - id: totals
      title: "▶ 1. 전체 현황"
      type: totals
      layout_col: 1        # 왼쪽 단, 맨 위에 배치
      items: [...]

    - id: by_org
      title: "▶ 2. 기관유형별"
      type: unique_count
      layout_col: 1        # totals 아래에 자동 배치
      col_ref: "소속기관유형"

    - id: by_region
      title: "▶ 3. 지역별"
      type: unique_count
      layout_col: 2        # 오른쪽 단 시작
      col_ref: "소재지_시도"
```

섹션 높이 자동 계산 기준:

| 타입 | 높이 = |
|------|--------|
| `totals` | 2 + items 수 |
| `unique_count` | 2 + 실제 고유값 수 (실행 시 결정) |
| `binary_sum` | 2 + columns 수 |
| `gpu_demand` | 2 + columns 수 |
| `countif_contains` | 2 + keywords 수 |

> **강제 배치** — 특정 위치를 고정하려면 `start_row`와 `start_col`을 함께 지정합니다.  
> 둘 다 있으면 layout 자동 계산을 무시합니다.

### 5-2. 섹션 타입별 설정

**totals** — 고정 항목별 카운트 (전체 현황 요약에 적합)

```yaml
- id: overview
  title: "▶ 전체 현황"
  type: totals
  layout_col: 1
  items:
    - label: "총 응답자"
      type: count_all          # 비어있지 않은 행 수
      col_ref: "답변ID"
    - label: "사용중"
      type: countif_exact      # 정확히 일치하는 행 수
      col_ref: "GPU사용구분"
      value: "사용중"
```

**unique_count** — 고유값별 자동 집계 (가장 범용적)

```yaml
- id: by_org
  title: "▶ 기관유형별"
  type: unique_count
  layout_col: 1
  col_ref: "소속기관유형"    # 이 컬럼의 고유값을 Python에서 자동 추출
  sort: true                 # 값 기준 정렬
```

**binary_sum** — 0/1 이진 컬럼 합산 (복수응답 집계)

```yaml
- id: purpose
  title: "▶ 활용목적별"
  type: binary_sum
  layout_col: 1
  columns:
    - col_ref: "O_학습"
      label: "대규모AI모델학습"
    - col_ref: "O_추론"
      label: "추론서비스운영"
```

**gpu_demand** — 합계 + 건수 + 건당평균 (수량 집계에 적합)

```yaml
- id: gpu_count
  title: "▶ GPU 소요장수"
  type: gpu_demand
  layout_col: 2
  columns:
    - col_ref: "H100_장수"
      label: "H100"
    - col_ref: "H200_장수"
      label: "H200"
```

**countif_contains** — 키워드 와일드카드 집계 (자유 응답 텍스트)

```yaml
- id: timing
  title: "▶ 지원 필요시기"
  type: countif_contains
  layout_col: 1
  col_ref: "GPU지원시작"
  keywords:
    - keyword: "즉시"
      label: "즉시(현재 필요)"
    - keyword: "상반기"
      label: "'26년 상반기"
    - keyword: "하반기"
      label: "'26년 하반기"
```

---

## 6. Phase 4 — 출력 및 라운드트립

### 6-1. 출력 파일 시트 구성

| 시트 | 내용 | 비고 |
|------|------|------|
| `summary` | 요약 대시보드 | Excel 수식 기반, 첫 번째 탭 |
| `cleaned` | 정제 데이터 | Excel Table + 슬라이서 |
| `Config` | 설정 표 | 편집 후 재실행 가능 |
| `Guide` | 사용법 · 레퍼런스 | 읽기 전용 참조용 |

### 6-2. Config 시트 편집 가능 항목

| 섹션 | 수정 가능 내용 |
|------|--------------|
| `[기본 설정]` | project명, source 시트, 헤더 행, 출력 파일명, **summary_layout_*** |
| `[jang 추출 설정]` | range_strategy, dae_multiplier |
| `[컬럼 정의]` | output_col, source_col, source_cols, transform, flag_keyword, backup_col, year_col, width, number_format, align |
| `[슬라이서]` | col 추가/제거, caption 변경 |
| `[요약 섹션]` | layout_col, col_ref, type, sort, 행 추가/삭제로 섹션 추가/제거 |
| `[주소 파싱 YAML]` | sido_patterns, seoul_gu 패턴 |

`[기본 설정]`의 레이아웃 관련 키:

| 키 | 의미 |
|----|------|
| `summary_layout_cols` | 단 수 (1=단일, 2=좌우 2단) |
| `summary_layout_start_row` | 첫 섹션 시작 행 |
| `summary_layout_col_span` | 단 하나의 Excel 열 수 |
| `summary_layout_gap_cols` | 단 사이 빈 열 수 |
| `summary_layout_gap_rows` | 섹션 사이 빈 행 수 |

> **제한** `totals`, `binary_sum`, `gpu_demand`, `countif_contains`의  
> 세부 `items`/`columns`/`keywords` 항목은 Config 시트에서 편집할 수 없습니다.  
> 이 항목은 `config.yaml`에서만 수정 가능합니다.

> 원본 컬럼을 출력에서 제외하려면 `[컬럼 정의]`의 `transform` 드롭다운에서 `exclude`를 선택합니다.

### 6-3. 재실행 방법

```bash
# Config 시트 수정 후 재실행 (설정은 xlsx에서, 데이터는 원본)
python main.py run projects/my_survey/output/my_survey_cleaned.xlsx --input data.xlsx

# 새 데이터 파일로 교체
python main.py run projects/my_survey/output/my_survey_cleaned.xlsx --input new_data.xlsx
```

---

## 7. Phase 5 — 웹 대시보드

### 7-1. JSON 내보내기

```bash
python main.py export projects/my_survey/config.yaml
# 또는
python main.py export projects/my_survey/output/my_survey_cleaned.xlsx
```

생성 파일:
- `web/data/my_survey_data.json` — 전체 정제 데이터 + 집계 + 메타
- `web/data/projects.json` — 프로젝트 목록 (자동 갱신)

### 7-2. 웹 서버 실행

```bash
cd web
python -m http.server 8000      # Python 내장
# 또는
npx serve .                     # Node.js
```

브라우저에서 `http://localhost:8000` 접속.

### 7-3. 웹 대시보드 기능

| 기능 | 위치 |
|------|------|
| KPI 카드 (총 응답수 등) | 상단 |
| 전체 검색 | 필터 바 (항상 표시) |
| 카테고리 필터 드롭다운 | 필터 바 (항상 표시) |
| 차트 탭 (도넛·막대·multibar) | 대시보드 탭 |
| 목록·정렬·페이지 | 목록 탭 |
| CSV 내보내기 | 목록 탭 |
| 프로젝트 전환 | 헤더 드롭다운 |
| KPI·차트·컬럼 설정 | ⚙ 설정 버튼 → admin.html |

### 7-4. 관리자 설정 (admin.html)

- **KPI 카드**: 추가/삭제, 타입(전체행수/값카운트/합계) 변경
- **차트**: 추가/삭제/순서 변경(드래그), 타입 변경(donut/bar/hbar/multibar)
- **목록 컬럼**: 표시할 컬럼 체크박스 선택
- **필터 컬럼**: 드롭다운 필터로 사용할 컬럼 선택

설정은 브라우저 `localStorage`에 프로젝트별로 저장됩니다.

### 7-5. GitHub Pages 배포

순수 HTML/JS/CSS 구조이므로 GitHub Pages에서 바로 동작합니다.

```bash
# web/.gitignore 에서 data/ 줄 제거 또는:
git add -f web/data/
git commit -m "add data files"
git push
```

---

## 8. Config 파일 레퍼런스

### 전체 구조

```yaml
project: str                 # 프로젝트 이름
style_file: str | null       # style.yaml 경로

source:
  sheet: str | null          # 시트 이름 (null = 첫 번째)
  file: str | null           # 입력 파일 경로 (--input 우선)
  header_row: int            # 헤더 행 (default: 1)
  data_start_row: int | null # 데이터 시작 행 (default: header_row+1)

paths:
  output_dir: str
  output_file: str

sheets:
  cleaned: str
  summary: str

preprocess:
  fill_down: [FillDownRule]
  row_filter:
    include: [RowFilterRule]
    exclude: [RowFilterRule]

columns: [ColumnDef]

slicers:
  - col: str                 # output_col 이름
    caption: str | null

summary:
  sheet_name: str
  layout:                    # 생략 시 start_row/start_col 직접 지정 필요
    cols: int                # 단 수
    start_row: int           # 시작 행
    col_span: int            # 단당 열 수
    gap_cols: int            # 단 사이 빈 열
    gap_rows: int            # 섹션 사이 빈 행
  sections: [SummarySection]

jang_extraction:
  range_strategy: max|min
  dae_multiplier: int
  prefer_jang_over_dae: bool

address_parsing:
  sido_patterns: [...]
  seoul_gu: [...]

transform_kwargs: {}

merge:                       # 다중 소스 병합 (선택)
  sources: [MergeSource]
  dedup: DedupConfig
  output: MergeOutputConfig
```

---

## 9. Transform 레퍼런스

### 9-1. 범용 클렌징 (transforms/domain/cleansing.py)

컬럼 분석 후 각 컬럼에 아래 transform을 지정합니다.

| transform | 입력 예시 | 출력 예시 | 설명 |
|-----------|----------|----------|------|
| `copy` | `"홍길동"` | `"홍길동"` | 원본 그대로 복사 |
| `exclude` | - | - | 해당 컬럼을 cleaned 출력에서 제외 |
| `normalize_text` | `"  ABC  "`, `"a\nb"` | `"ABC"`, `"a b"` | 공백 정리, 줄바꿈 제거 |
| `normalize_number` | `"1,234"`, `"3.5만"`, `"1억2천만"`, `"100~200"` | `1234`, `35000`, `120000000`, `200` | 숫자 정규화 (한국어 단위·콤마·범위 지원) |
| `normalize_date` | `"2026년 1월 15일"`, `"2026.01.15"`, `"20260115"` | `"2026-01-15"` | 날짜 → YYYY-MM-DD |
| `normalize_phone` | `"01012345678"`, `"+821012345678"`, `"02-1234-567"` | `"010-1234-5678"` | 전화번호 표준화 |
| `normalize_company` | `"주식회사 카카오"`, `"카카오(주)"`, `"㈜카카오"` | `"카카오"` | 법인형태 제거 후 순수 회사명 |
| `name_blind` | `"홍길동"`, `"신도홍석"`, `"홍길"` | `"홍*동"`, `"신**석"`, `"홍*"` | 이름 중간 마스킹 |
| `validate_brn` | `"120-81-00434"`, 잘못된 번호 | `"120-81-00434"`, `None` | 사업자등록번호 검증+정규화 |

**normalize_number 상세 지원 형식**:
- 콤마 구분: `"1,234,567"` → `1234567`
- 한국어 단위: `"3.5만"` → `35000`, `"1억 2천만"` → `120000000`, `"5백만"` → `5000000`
- 범위: `"100~200"` → `200` (최댓값)
- 퍼센트: `"12.5%"` → `12.5`

**normalize_phone 지원 형식**:
- 10/11자리 숫자: `01012345678`, `0212345678`
- 국제번호 제거: `+821012345678` → `010-1234-5678`
- 지역번호 자동 인식: 02(서울), 031~064(지방), 010~019(이동통신), 070(인터넷)

**normalize_company 옵션**:
```yaml
- output_col: "회사명_정규화"
  source_col: 3
  transform: normalize_company
  keep_corp_type: true    # true → "(주) 카카오", false(기본) → "카카오"
```

### 9-2. GPU 도메인 전용 (transforms/domain/gpu_survey.py)

| transform | 설명 | 추가 필드 |
|-----------|------|----------|
| `address_sido` | 주소 → 시/도 코드 | `address_parsing` 설정 필요 |
| `address_sigungu` | 주소 → 시/군/구 | `address_parsing` 설정 필요 |
| `gpu_usage_type` | GPU 사용현황 → 사용중/미사용 | — |
| `gpu_usage_detail` | GPU 사용현황 → 자체서버/외부임차 | — |
| `n_jang` | H100 환산 텍스트 → 숫자 (없음·미보유 → 0) | — |
| `o_binary` | 키워드 포함 여부 → 1/0 | `flag_keyword` |
| `jang` | GPU 장수 텍스트 → 숫자 | `backup_col`, `jang_extraction` |
| `clean_ac` | 이용량 증가율 텍스트 정제 → 숫자+% | — |

### 9-3. 분석 → 설정 → 클렌징 워크플로우

```bash
# 1. 엑셀 파일 구조 분석 (헤더 자동 감지, 샘플 값 확인)
python main.py analyze data.xlsx

# 2. config.yaml에서 컬럼별 transform 지정
#    analyze 출력을 참고하여 각 컬럼 타입에 맞는 transform 선택

# 3. 실행 → cleaned 시트 생성
python main.py run projects/my_project/config.yaml --input data.xlsx

# 4. 웹 대시보드로 내보내기
python main.py export projects/my_project/config.yaml
```

**컬럼 타입별 권장 transform**:

| 데이터 유형 | 권장 transform | 비고 |
|------------|---------------|------|
| 텍스트 (단순) | `copy` 또는 `normalize_text` | 공백/줄바꿈 정리 필요 시 normalize_text |
| 숫자·금액 | `normalize_number` | 단위 혼재·콤마 있을 때 |
| 날짜 | `normalize_date` | 다양한 포맷 자동 인식 |
| 전화번호 | `normalize_phone` | 형식 통일 |
| 회사명 | `normalize_company` | 법인형태 제거 |
| 이름 | `name_blind` | 개인정보 마스킹 |
| 사업자번호 | `validate_brn` | 체크섬 검증 포함 |
| 주소 | `address_sido` / `address_sigungu` | address_parsing 설정 필요 |
| 다중선택 키워드 | `o_binary` | flag_keyword 지정 → 1/0 |

---

## 10. 다중 소스 병합

```yaml
merge:
  sources:
    - path: "data/2025/"      # 폴더: *.xlsx 전체 읽기
      sheet: null
      header_row: 1
      column_mapping:
        "기관 이름": "기관명"   # 헤더명 통일
    - path: "data/extra.xlsx"
      header_row: 2
  dedup:
    strategy: first           # first | last | none
    key_cols: ["답변ID"]
  output:
    add_source_col: true
    source_col_name: "_출처파일"
```

```bash
python main.py merge projects/multi/config.yaml --output merged.xlsx
python main.py run projects/multi/config.yaml   # merge 후 pipeline 자동 실행
```

---

## 11. 새 Transform 추가

`transforms/domain/` 에 모듈을 추가하면 자동 로드됩니다.

```python
# transforms/domain/my_transforms.py

def my_custom_fn(val, **kw):
    return str(val).upper() if val else None

_TRANSFORMS = {
    "my_upper": my_custom_fn,
}
```

재시작 없이 즉시 사용 가능:

```yaml
columns:
  - output_col: "항목_대문자"
    source_col: 5
    transform: my_upper
```
