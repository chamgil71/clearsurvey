# Survey Engine v2 — Q&A

> 운영 과정에서 나온 질문과 답변을 정리합니다.
> 각 Q&A에는 관련 코드 변경 내용도 함께 기록합니다.

---

## 세션 1 — 파이프라인 검증 (2026-05-14)

---

### Q1. 두 개의 더미 데이터 파일은 어디에 있고, 실제로 테스트해봤나?

**A.**
더미 데이터는 `storage/` 폴더에 있습니다:
- `storage/dummy_gpu_survey.xlsx` — GPU 설문 400행
- `storage/dummy_budget.xlsx` — 예산 집행 현황 (레벨3~7 계층 구조, 213행)

`python scripts/gen_dummy.py` 로 재생성할 수 있습니다.

**검증 결과:**
| 파이프라인 | 입력 행 | 전처리 후 | 결과 |
|---|---|---|---|
| gpu_2026 | 400행 | 400행 (필터 없음) | 정상 |
| budget_2026 | 213행 | 81행 (레벨7만) | 수정 후 정상 |

budget_2026 파이프라인 초기 실행 시 **전처리 후 0행** 문제가 있었습니다.

**원인 및 수정 (`engine/preprocessor.py`):**
```python
# 수정 전 (버그): AND 시맨틱스 → 항상 False
inc_mask = pd.Series([False] * len(df), index=df.index)
inc_mask = inc_mask & row_mask   # False & True = 항상 False

# 수정 후: OR 시맨틱스 → 하나라도 충족하면 통과
inc_mask = inc_mask | row_mask
```

**추가 수정 (`transforms/domain/budget.py`):**
더미 데이터의 실제 부서명(`AI인프라확충팀`, `클라우드팀`)이 `map_division` 매핑에 없어 원본 그대로 반환되었습니다.
`_DEFAULT_DIVISION_MAP`에 두 항목을 추가했습니다.

---

### Q2. 분석(analyze) 결과가 xlsx로 떨어지나 yaml로 떨어지나?

**A.**
기존에는 `analyze` 명령이 JSON을 터미널에만 출력하고 파일을 만들지 않았습니다.

**추가된 기능:**
`--draft` 옵션을 추가하여 **Excel에서 바로 수정 가능한 Config xlsx**를 생성합니다.
원본 컬럼명이 자동으로 `output_col`에 채워지고, `transform`만 수정하면 바로 실행 가능합니다.

```bash
# 분석 결과를 Excel Config 파일로 저장
python main.py analyze storage/my_data.xlsx \
    --draft storage/draft_config.xlsx \
    --project my_project
```

**`engine/analyzer.py`에 추가된 메서드:**
- `all_headers()` — 헤더 행의 모든 셀 반환
- `generate_draft_xlsx()` — 헤더 기반 Config xlsx 생성

---

### Q3. config.yaml과 xlsx Config 시트는 어떤 관계인가? 둘 다 run 가능한가?

**A.**
`run` 명령의 첫 번째 인자는 **yaml 파일** 또는 **Config 시트가 포함된 xlsx** 모두 가능합니다.
두 형식은 동시에 생성되는 것이 아니라 **완전한 대체 관계**입니다.

```bash
python main.py run projects/budget_2026/config.yaml --input data.xlsx    # yaml 방식
python main.py run storage/draft_config.xlsx --input data.xlsx            # xlsx 방식
python main.py run output/budget_2026_cleaned.xlsx --input data.xlsx      # 라운드트립
```

**세 번째 경우(라운드트립)의 주의:**
cleaned.xlsx를 config로 사용하면 Config 시트에 저장된 **컬럼 정의·transform**만 적용되며,
`preprocess` (fill_down, row_filter) 는 Config 시트에 저장되지 않아 적용되지 않습니다.

**수정된 버그 (`main.py`):**
xlsx를 config로 쓸 때 output 경로가 `output/output/` 서브폴더로 밀리는 문제.
`output` 폴더 안의 xlsx인 경우 부모의 부모를 project root로 사용하도록 수정:
```python
proj_root = config.parent.parent if config.parent.name.lower() == "output" else config.parent
```

**수정된 버그 (`engine/config_excel.py`):**
`summary_layout_cols=1`일 때 레이아웃 객체를 생성하지 않아 summary 시트 위치 계산이 None이 되는 문제:
```python
# 수정 전: cols > 1 일 때만 생성
if ly_cols is not None and ly_cols > 1:

# 수정 후: cols=1 포함 항상 생성
if ly_cols is not None:
```

---

## 세션 2 — 워크플로우 질의 (2026-05-14)

---

### Q4. 기존 파일을 업데이트할 때 기존 설정을 재사용하려면?

**A.**
`config.yaml`이 있으면 `--input`만 바꿔 그대로 실행합니다.

```bash
# 설정 그대로, 데이터만 교체
python main.py run projects/budget_2026/config.yaml --input storage/새파일.xlsx
python main.py export projects/budget_2026/config.yaml
```

`fill_down`, `row_filter` 등 모든 전처리 설정이 그대로 적용됩니다.

`config.yaml`이 없고 `cleaned.xlsx`만 있는 경우:
```bash
python main.py run projects/budget_2026/output/budget_2026_cleaned.xlsx --input 새파일.xlsx
```
단, **전처리는 빠집니다**. 컬럼·transform만 재적용됩니다.

---

### Q5. 프로젝트 폴더(`projects/<name>/`)는 언제 생성되나?

**A.**
`run` 명령만으로는 `projects/<name>/` 폴더가 생성되지 않습니다.
명시적인 생성 명령이 필요합니다.

| 명령 | 생성 결과 |
|---|---|
| `python main.py new-project <name>` | 폴더 + `config.yaml` 템플릿 + `output/` |
| `python main.py analyze <xlsx> --project <name> --save-project` | 폴더 + `draft_config.xlsx` + `output/` |
| `python main.py run config.yaml` | `output/` 서브폴더만 (없으면 자동 생성) |

**추가된 기능 (`main.py`):**
`analyze` 명령에 `--save-project` 옵션 추가.
분석과 동시에 `projects/<name>/` 구조를 생성하고 `draft_config.xlsx`를 그 안에 저장합니다:

```bash
python main.py analyze storage/data.xlsx --project my_survey --save-project
# → projects/my_survey/draft_config.xlsx
# → projects/my_survey/output/
```

---

### Q6. 특정 프로젝트만 웹서비스로 분리하려면?

**A.**
세 가지 방법이 있습니다.

**방법 1 — URL 파라미터 (가장 간단)**
```
http://localhost:5173/?data=budget_2026_data.json
```
해당 프로젝트 데이터를 바로 로드합니다. 프로젝트 선택 드롭다운에는 전체 목록이 표시됩니다.

**방법 2 — deploy 명령 (완전 독립 패키지, 권장)**
```bash
python main.py deploy projects/budget_2026/config.yaml --dest dist/budget_2026
python -m http.server 8080 --directory dist/budget_2026
```
`dist/budget_2026/`에 해당 프로젝트만 담긴 독립 웹 패키지가 생성됩니다.
`data/projects.json`에 해당 프로젝트 항목만 포함되어 다른 프로젝트로 전환하는 UI가 나타나지 않습니다.

**방법 3 — projects.json 수동 편집**
`web/data/projects.json`에서 원하지 않는 항목을 삭제합니다.

**추가된 기능 (`main.py`):**
`deploy` 명령 신규 추가.
`web/` 폴더의 정적 파일(index.html, js/, css/)과 해당 프로젝트 JSON만 복사하여 독립 배포 패키지를 생성합니다.

```
dist/<name>/
├── index.html
├── js/
├── css/
└── data/
    ├── <name>_data.json    ← 해당 프로젝트만
    └── projects.json        ← 해당 프로젝트만 (1개)
```

---

## 코드 변경 이력 요약

| 파일 | 변경 내용 |
|------|----------|
| `engine/preprocessor.py` | include 필터 `&` → `\|` (OR 시맨틱스, 0행 버그 해결) |
| `engine/config_excel.py` | `summary_layout_cols=1`일 때도 레이아웃 객체 생성 (라운드트립 summary 버그 해결) |
| `engine/analyzer.py` | `all_headers()`, `generate_draft_xlsx()` 메서드 추가 |
| `engine/writer.py` | `cleaned_col_vals` 수집 후 반환 (3-tuple 반환으로 변경) |
| `engine/pipeline.py` | `writer.write()` 3-tuple 언팩, `cleaned_col_vals`를 summarizer에 전달 |
| `engine/summarizer.py` | `cleaned_col_vals` 파라미터 추가, `_unique_vals_from_df` 수정 |
| `transforms/domain/budget.py` | `AI인프라확충팀`, `클라우드팀` 매핑 추가 |
| `scripts/gen_dummy.py` | `_pct()` 함수 double-% 버그 수정 |
| `main.py` | `analyze --draft`, `analyze --save-project`, `deploy` 명령 추가; xlsx config 경로 해결 로직 수정 |


## 추가질의 26-05-20 09:00 

- 1차 엑셀에서 분석한 후 나오는 엑셀파일에  원본 시트도 포함되어 있는데 누락되어 있다. 
- 또 clean 시트로 넘기는 내용 중 몇가지가 구현이 안되어 있다.  날짜클렌징 및 년도열 추가, 여러컬럼 그룹핑,  주소를 시도, 시군구 분할
- 1차 수정 엑셀의 config 시트 하단의 주소 맵핑 부분 내용이 꺠져 있음
- 원본xls 컬럼 중 제외 컬럼 설정 
- 웹서비스를 위한 json에서 상단에 설정되는 내용을 어디서 정리하는지 차트로 표시할 내용을 어디서 조정하는지 검토
- 이외 오류사항을 해결해줘. 미완료 사항도. 

### 답변 26-05-20

- 원본 컬럼 제외는 Config 시트 `[컬럼 정의]`의 `transform` 칸에서 `exclude`를 선택하는 방식으로 구현한다. 기존 `copy`가 들어가던 드롭다운에 `exclude`를 추가하고, 재실행 시 해당 컬럼은 `cleaned` 시트에 출력하지 않는다.
- Config 시트의 각 컬럼 선택성을 높이기 위해 `source_col`, `backup_col`, `year_col`, `transform`, `align`, `include_in_slicer`에 드롭다운을 제공한다. `source_cols`는 `1,2,3` 또는 `1-3,7`처럼 직접 입력한다.
- Config 시트 라운드트립 오기/오류를 수정한다. 기존에는 `output_col\n(출력컬럼명)` 같은 표시 헤더를 읽기 로직이 `output_col`로 인식하지 못할 수 있어, 표시용 줄바꿈/괄호 설명을 제거한 키로 읽도록 정리한다.
- Excel Guide 시트의 transform 목록에 실제 동작하는 `exclude`를 추가하고, 오래된/동작하지 않는 드롭다운 항목은 제거한다.
- `source_cols`, `year_col`, `number_format`, `align`도 Config 시트에서 저장/재읽기 되도록 확장한다.
- README, GUIDE, `docs/config_guide.md`의 Config 시트 편집 가능 항목도 실제 구현 기준으로 정리한다.


## 추가질의 26-05-20 17:00 

전체 흐름은 맞는 것 같은데 범용적으로 사용하기에는 설정이 너무 까다롭다. 

config 시트 설정 변경 [컬럼정의필드]
 - 구분 : 별도열 포함(초기 include)할건지 안할건지(exclude)만 선택(clean시트에 생성여부)
 - transform은 그대로 할건지(copy), 클렌징을 어떻게 할건지 구분
 - number_format, align 필드 삭제
 - 
 
config 시트 설정 변경 [transform]

 - 정렬이나 number_format은 삭제해도 될 것(변환규칙에 따라 날짜면 날짜, 숫자면 숫자로만)
 - source_cols, source_label 구분만 다시 점검 바람
 - transform 이름 규칙에서 
   - exclude 제외 (별도 구분열로)
   - date_year, date_month, data_day 통합 > 가칭, normalize_date_date(이름은 새로 부) 이걸 선택하면 normalize_date한후 3개열을 추가해서 year, month, day 열 생성 
   - 전체 명명이름 변경 normalize, vaildate, address 는 축약
   - normalize_title는 제목으로 혼돈할 수 있으니 직책을 나타내는 용어로 바꾸고 map설정방법을 확인하고 추가할 것
   - to_numeric, normalize_number는 숫자로 변환하는거니 통합 
   - 전체 이름 순서도 재정렬, 기본, 클렌징(노말), 검증, 마스킹, 기타
   - pct_format 도 숫자변환으로 그룹화 (카피로 하면 %로 나오겠지? 반대인가?) 
   - 특이 사항 group_sum, o_binary포함키워드 사용방법 재작성
   - splite_url 관련 내용은 삭제(설정 코드는 살려놓되 현재는 제외)
   - address_sido , sigungu 역시 해당 컬럼 선택후 address_split을 하면 기존 열은 두고 sido, sigungu 열을 추가생성하는 방법으로. (sido, sigungu 설정 기준은 별도 config파일이 있으니 안내) 
   - group_sum 의 경우 여려컬럼을 한개이름으로 통합하는 형태라 통합이름을 지정할 수 있어야함.
   - C열에 관련 설정파일 경로도 명기, 가령 시군구 분리는 어떤 설정파일에서 조정하는지 등
   - 한개더 가령 년-월-일 을 구분하면 년 / 월 / 일 로 하면 컬럼간 계층구조가 생긴다 해당 부분 대응이 되나? (본부 - 팀 이런 경우)
 
 - [슬라이서] 
   = col 은 텍스트를 입력하는거지? 
   - 슬라이서도 기본 3줄정도 반영
 
 - [요약섹션] 마찬가지로 type을 드롭다운을 기본 3줄정도 반영
 
 [guide 시트 내용]
 아래 내용은 변동 없나?
 """
 # 파일/폴더 분석 후 프로젝트 생성 (대화형)
python main.py init storage/data.xlsx

# 자동으로 신규 프로젝트 생성 (대화 없음)
python main.py init storage/data.xlsx --auto

# 폴더 내 모든 xlsx 병합 프로젝트 생성
python main.py init storage/folder/ -p my_project

# config.yaml 로 실행 (원본 파일 지정)
python main.py run projects/my_project/config.yaml --input data.xlsx

# 출력 Excel의 Config 시트 수정 후 재실행 (config.yaml 불필요)
python main.py run output/my_project_cleaned.xlsx

# 파일 구조만 빠르게 분석 (JSON 출력, dry-run)
python main.py analyze storage/data.xlsx

# 웹 대시보드용 JSON 내보내기
python main.py export projects/my_project/config.yaml

"""

[ 파이썬 실행 옵션 관련 ]
기본이 드래프트파일명이 없어도 자동 생성. 원본파일과 동일한 폴더에,  dry-run을 실행하면 화면출력만. 
아래 내용 오류도 확인 요망, 상단 내용을 수정하면 자동 점검 될 것 같기도 함. validate 내용 점검 포함

'''
[draft 생성] draft_선정기업.xlsx
  1. Excel에서 draft_선정기업.xlsx 열기 → Config 시트 수정 (transform, output_col 등)
  2. python main.py run draft_선정기업.xlsx --input storage\지원사업선정기업.xlsx
  3. 결과 확인 후 output/*_cleaned.xlsx 의 Config 시트 수정 → 재실행
(.venv) PS C:\coding\msshin\survey2> python main.py run draft_선정기업.xlsx --input storage\지원사업선정기업.xlsx
C:\coding\.venv\Lib\site-packages\openpyxl\worksheet\_reader.py:329: UserWarning: Data Validation extension is not supported and will be removed
  warn(msg)
[프로젝트] projects/지원사업선정기업/ 폴더에 결과를 저장합니다.
[정보] 원본 컬럼 수: 5
[오류] columns[4](사업장소재지).transform이 등록되어 있지 않습니다: address_sido
[오류] 설정 검증 실패. 수정 후 다시 실행하거나 --skip-validate 옵션으로 우회하세요.
(.venv) PS C:\coding\msshin\survey2> 
'''

### 답변 26-05-20

---

#### 1. [컬럼정의필드] 구조 변경 계획

현재 14개 열을 다음과 같이 정리한다.

**삭제:** `align`, `number_format` (변환규칙에 따라 날짜/숫자 서식은 엔진이 자동 결정)

**신설:** `구분` 열 — `include` / `exclude` 드롭다운 (기본 include). 이 열이 `exclude`이면 해당 행은 cleaned 시트에 생성하지 않는다. 기존 transform에서 `exclude`를 쓰던 방식을 이 열로 분리한다.

**결과 열 순서 (10열):**

| # | 열명 | 설명 |
|---|------|------|
| 1 | # | 순번 (자동) |
| 2 | 구분 | include / exclude 드롭다운 |
| 3 | output_col | 출력 컬럼명 (수정 가능) |
| 4 | source_col_name | 원본 컬럼명 (참조용, 회색) |
| 5 | source_col | 원본 열 번호 (드롭다운) |
| 6 | transform | 변환규칙 (드롭다운) |
| 7 | include_in_slicer | TRUE/FALSE 드롭다운 |
| 8 | source_cols | group_sum 전용: 합산 열 목록 (예: 3,5,7 또는 3-7) |
| 9 | flag_keyword | to_binary 전용: 포함 검색 키워드 |
| 10 | backup_col | 기본 열 비었을 때 대체 열 번호 (드롭다운) |

`source_label`(fill_down 파생열)과 `year_col`(date_year 전용)은 사용 빈도가 낮으므로 Guide 시트 설명으로 이동하고 열은 제거한다. 필요 시 config.yaml에서 직접 설정.

---

#### 2. source_col / source_cols / source_label 구분 정리

| 필드 | 사용 시점 | 예시 |
|------|----------|------|
| `source_col` | 단일 원본 열 참조 (대부분의 transform) | `3` (C열) |
| `source_cols` | 여러 열 합산 (`group_sum` 전용) | `3,5,7` 또는 `3-7` |
| `source_label` | 전처리(fill_down)에서 만든 파생열 참조 — config.yaml에서만 설정 가능 | `부서명_filled` |

`source_col`과 `source_cols`는 병용 불가. `source_label`은 드물어 열에서 제거하고 yaml 전용으로 처리.

---

#### 3. Transform 명명 체계 개편

현재 이름 → 새 이름으로 변경. 기존 yaml config의 이전 이름도 동작하도록 alias 처리 예정.

**기본**
| 새 이름 | 설명 |
|---------|------|
| `copy` | 원본 값 그대로 복사 (기본값) |

**클렌징 (norm_)**
| 새 이름 | 기존 이름 | 설명 |
|---------|----------|------|
| `norm_date` | `normalize_date` | 날짜 → YYYY-MM-DD 표준화 |
| `norm_date_parts` | `date_year`+`date_month`+`date_day` 통합 | 날짜 정규화 + 연/월/일 파생열 3개 자동 생성 (아래 참조) |
| `norm_phone` | `normalize_phone` | 전화번호 표준화 |
| `norm_company` | `normalize_company` | 법인형태 정규화 |
| `norm_text` | `normalize_text` | 공백·줄바꿈 정리 |
| `norm_num` | `normalize_number` + `to_numeric` 통합 | 숫자 텍스트 → 숫자 (1,234 / 3.5만 / 1억2천 등) |
| `norm_position` | `normalize_title` | 직책 정규화 (설정: `patterns.yaml` > `title_map`, 아래 참조) |

**검증 (val_)**
| 새 이름 | 기존 이름 | 설명 |
|---------|----------|------|
| `val_email` | `validate_email` | 이메일 형식 검증 |
| `val_url` | `validate_url` | URL 형식 검증 |
| `val_brn` | `validate_brn` | 사업자등록번호 검증 |

**마스킹 (mask_)**
| 새 이름 | 기존 이름 | 설명 |
|---------|----------|------|
| `mask_name` | `name_blind` | 이름 마스킹 (홍길동 → 홍*동) |
| `mask_rrn` | `mask_rrn` | 주민번호 뒷자리 마스킹 |

**주소**
| 새 이름 | 기존 이름 | 설명 |
|---------|----------|------|
| `addr_split` | `address_sido` + `address_sigungu` 통합 | 주소 열 선택 후 적용 → 원본 열 유지 + `_시도`, `_시군구` 파생열 자동 추가. 설정: `patterns.yaml` > `address_parsing` |

**집계·변환**
| 새 이름 | 기존 이름 | 설명 |
|---------|----------|------|
| `group_sum` | `group_sum` | 여러 열 합산. `source_cols`에 열 번호 목록, `output_col`이 합산 결과 이름 |
| `to_binary` | `o_binary` | `flag_keyword` 포함 여부 → 1/0 |
| `to_pct` | `pct_format` | % 문자열 → float (예: `92.77%` → `92.77`). copy로 두면 `%` 문자열 그대로 출력 |

**도메인 전용** (예산 설문)
| 이름 | 설명 |
|------|------|
| `budget_level` | 예산코드 계층 레벨 감지 |
| `map_category` | 예산코드 → 카테고리 |
| `map_division` | 수행부서 → 본부명 |

**제거** (드롭다운에서 제거, 코드는 유지)
- `split_url_domain`, `split_url_path` — 현재 미사용, 코드 유지

---

#### 4. norm_date_parts — 파생열 자동 생성 방식

`norm_date_parts` 선택 시:
- 원본 열 (`source_col`) → `output_col` 에 YYYY-MM-DD 정규화 값 출력
- 이후 자동으로 `output_col_년`, `output_col_월`, `output_col_일` 파생열 3개를 바로 옆에 생성

예: `output_col="신청일"` → cleaned 시트에 `신청일`, `신청일_년`, `신청일_월`, `신청일_일` 4열 생성.

**계층 구조(본부-팀) 대응:**
`본부-팀` 같은 계층은 `norm_date_parts`와 별개로, `preprocess.fill_down`이 상위행 값을 하위행에 채우는 방식(`source_label` 참조)으로 지원한다. 이는 Excel의 병합 셀로 계층을 표현한 데이터에 해당한다. 슬라이서나 요약 섹션에서 `본부명` 컬럼을 `col_ref`로 지정하면 계층별 집계가 가능하다.

---

#### 5. group_sum 통합이름 지정

`output_col`이 곧 통합 이름이다. 여러 열(`source_cols`)을 합산한 결과를 `output_col`에 지정한 이름으로 출력한다.

```
output_col = "총계"
source_cols = "3,5,7"    ← 3열 + 5열 + 7열 합산 → "총계" 열에 출력
```

---

#### 6. norm_position (직책 정규화) 설정 방법

`config/patterns.yaml` 파일의 `position_patterns` 섹션에 리스트 형태로 추가한다.

```yaml
position_patterns:
  - [회장,     [회장, 명예회장]]           # 리스트 순서 = 직급 우선순위 (0=최고위)
  - [대표이사, [대표이사, 대표, CEO, 사장]]
  - [수석연구원, [수석연구원, 수석]]
  - [사원,     [사원, 팀원, 직원]]
```

- 리스트 순서가 직급 우선순위(소팅 rank)가 된다 (0번 = 최고위).
- 두 번째 항목의 리스트: 정확 일치 우선, 이후 부분 일치로 표준명 반환.
- 매핑 없는 값은 원본 그대로 반환.
- `normalize_title`은 `norm_position`의 하위 호환 alias로 유지 (기존 config.yaml 재작업 불필요).

**구현 완료 (26-05-20):**
- `transforms/domain/cleansing.py` — 함수명 `normalize_title` → `norm_position`, 파라미터 `title_map` → `position_map`. `_TRANSFORMS`에 두 이름 모두 등록.
- `config/patterns.yaml` — `position_patterns` 섹션으로 재구성 (리스트 형태, 19개 직급).
- `engine/patterns.py` — `PatternConfig.position_patterns` 필드 추가. `_build_lookup_and_rank()`로 `position_map`(조회용 dict) + `position_rank`(소팅용 dict) 분리 생성 후 inject.
- `engine/config_excel.py` — 드롭다운 목록에서 `normalize_title` → `norm_position` 변경, Guide 시트 설명 업데이트.

---

#### 7. C열(관련 설정 파일 경로) 안내

Guide 시트에 각 transform별 설정 파일 위치를 추가할 것:

| transform | 관련 설정 파일 |
|-----------|--------------|
| `addr_split` | `patterns.yaml` > `address_parsing` 섹션 |
| `norm_position` | `patterns.yaml` > `title_map` 섹션 |
| `map_category` | `transforms/domain/budget.py` > `_DEFAULT_CATEGORY_MAP` |
| `map_division` | `config/patterns.yaml` > `division_patterns` 섹션 (본부명: [팀이름들] 리스트, 순서=본부 우선순위) |
| `group_sum` | Config 시트 `source_cols` 열에 직접 입력 |
| `to_binary` | Config 시트 `flag_keyword` 열에 키워드 직접 입력 |

---

#### 8. [슬라이서] col 입력 방식 및 기본 줄

- `col`은 `[컬럼 정의]`의 `output_col` 값을 그대로 텍스트로 입력한다 (드롭다운 아님, 정확히 일치해야 함).
- `caption`은 비워두면 `col` 값이 그대로 표시명으로 쓰인다.
- 초기 생성 시 `include_in_slicer=TRUE`인 컬럼 중 최대 3개를 자동으로 채워 넣도록 변경한다. 데이터가 없으면 예시 주석 행 3개를 표시한다.

---

#### 9. [요약섹션] type 드롭다운 및 기본 줄

- `type` 열에 드롭다운 추가: `unique_count`, `totals`, `binary_sum`, `countif_contains`, `gpu_demand`
- 초기 생성 시 `unique_count` 타입으로 placeholder 행 3개를 기본 제공한다 (title, type 입력 후 재실행만 하면 동작).

---

#### 10. Guide 시트 CLI 내용 — 수정 필요

현재 Guide 시트의 `init` 명령은 **미구현**이다. 실제 동작하는 명령으로 교체해야 한다.

**현재 → 수정 후:**

```bash
# [수정] init은 아직 없음 → analyze로 draft 생성
python main.py analyze storage/data.xlsx
# → 원본 파일과 동일한 폴더에 draft_data.xlsx 자동 생성 (원본파일명 앞에 draft_ 접두사)

# Config 시트 수정 후 실행
python main.py run draft_data.xlsx --input storage/data.xlsx

# 출력 Config 시트 수정 후 재실행 (--input 생략 가능, 이전 경로 기억)
python main.py run output/data_cleaned.xlsx

# dry-run: 화면 출력만, 파일 생성 없음
python main.py run draft_data.xlsx --input storage/data.xlsx --dry-run

# config.yaml로 실행
python main.py run projects/my_project/config.yaml --input data.xlsx

# 웹 대시보드용 JSON 내보내기
python main.py export projects/my_project/config.yaml
```

`analyze` 기본 동작을 드래프트 파일 자동 생성으로 변경한다 (현재는 JSON 화면 출력만). `--dry-run` 옵션은 파이프라인 실행 시 검증만 수행하고 파일을 쓰지 않도록 추가한다.

---

#### 11. address_sido 오류 원인 및 해결

```
[오류] columns[4](사업장소재지).transform이 등록되어 있지 않습니다: address_sido
```

**원인:** `address_sido` / `address_sigungu` transform은 `cfg.address_parsing`(시도/시군구 패턴 설정)이 있을 때만 레지스트리에 등록된다. draft xlsx에서 이 transform을 선택해도 Config 시트에 `[주소 파싱 YAML]` 섹션이 없으면 등록되지 않는다.

**해결 방향 (addr_split 전환 후):**
1. transform 이름을 `addr_split`으로 통합하면서, `patterns.yaml`의 `address_parsing` 섹션이 없을 때 validator에서 명확한 안내 메시지를 출력하도록 수정한다:
   ```
   [오류] addr_split transform 사용 시 patterns.yaml에 address_parsing 설정이 필요합니다.
          → patterns.yaml의 address_parsing.col 에 주소 원본 열 번호를 입력하세요.
   ```
2. `patterns.yaml`이 없으면 기본 패턴 파일(`transforms/common/address_patterns.yaml`)을 자동 로드하도록 fallback 추가.
3. **임시 우회:** `--skip-validate` 옵션으로 검증 건너뛰기. 단, `address_parsing` 미설정 시 런타임에도 오류 발생하므로 근본 해결 필요.

---

#### 12. 구현 우선순위 정리

| 우선순위 | 항목 | 작업 파일 |
|---------|------|---------|
| 1 | `구분` 열 추가, `align`/`number_format` 제거 | `engine/config_excel.py` |
| 1 | transform 이름 alias 처리 (구 이름도 동작) | `transforms/registry.py` |
| 1 | `address_sido` 오류 → 친절한 안내 메시지 | `engine/validator.py` |
| 2 | `norm_date_parts` 구현 (파생열 자동 생성) | `transforms/common/date.py`, `engine/writer.py` |
| 2 | `addr_split` 구현 (원본 유지 + 파생열 추가) | `transforms/common/address.py`, `engine/writer.py` |
| 2 | 슬라이서/요약 기본 3줄, type 드롭다운 | `engine/config_excel.py` |
| 3 | `analyze` 기본 동작 → draft 자동 생성 | `main.py` |
| 3 | `--dry-run` 옵션 추가 | `main.py`, `engine/pipeline.py` |
| 3 | Guide 시트 CLI 내용 수정 | `engine/config_excel.py` |

---

## 진행 현황 검토 및 파이프라인 개선 제안 (2026-05-22)

### 현재 상태 요약

#### 완료된 핵심 작업
| 항목 | 상태 |
|------|------|
| CLI 파이프라인 (run/analyze/export/deploy/validate) | ✓ 완료 |
| Config 시트 라운드트립 (xlsx ↔ SurveyConfig) | ✓ 완료 |
| TransformRegistry + domain 자동 로드 | ✓ 완료 |
| 범용 cleansing transforms (10종) | ✓ 완료 |
| norm_position + position_patterns 재구성 | ✓ 완료 |
| 웹 대시보드 (필터·차트·테이블·admin) | ✓ 완료 |
| Summary 레이아웃 자동 배치 | ✓ 완료 |
| dashboard.json Git 관리 흐름 | ✓ 완료 |
| pytest 82개 통과 | ✓ 완료 |

#### 미완료 (todo.md 기준)
| 우선순위 | 항목 | 현황 |
|---------|------|------|
| P1 | Config 시트 구조 개편 (`구분` 열, `align`/`number_format` 제거, 14→10열) | ❌ 미구현 |
| P1 | transform 새 이름 alias 등록 (norm_date, norm_num 등) + 드롭다운 반영 | ❌ 미구현 — 드롭다운에 여전히 구 이름(normalize_date, o_binary 등) |
| P1 | `address_sido` 오류 시 친절한 안내 메시지 | ❌ 미구현 |
| P2 | `norm_date_parts` (파생열 3개 자동 생성) | ❌ 미구현 |
| P2 | `addr_split` (시도·시군구 파생열 자동 추가) | ❌ 미구현 |
| P2 | 슬라이서/요약 기본 3줄, type 드롭다운 | ❌ 미구현 |
| P3 | `analyze` → draft 자동 생성 기본값 | ❌ 미구현 (현재 JSON 터미널 출력) |
| P3 | `run --dry-run` 옵션 | ❌ 미구현 |
| P3 | Guide 시트 CLI 내용 수정 | ❌ 미구현 (`init` 명령 여전히 잔존) |

---

### 파이프라인 개선 제안

#### 1. 즉시 수정 가능한 불일치 — Config 시트 드롭다운

`engine/config_excel.py` `_TRANSFORM_OPTIONS` 리스트가 구 이름 그대로:
- `normalize_date` → `norm_date` (alias 등록 후 드롭다운도 교체)
- `to_numeric` / `normalize_number` 두 개 → `norm_num` 하나로 통합
- `o_binary` → `to_binary`
- `pct_format` → `to_pct`
- `address_sido` / `address_sigungu` → `addr_split` 하나로 통합
- `name_blind` → `mask_name`
- `mask_rrn` 유지 (이름 변경 없음)

#### 2. writer.py 파생열 확장 패턴 — norm_date_parts / addr_split 공통 기반

`norm_date_parts`와 `addr_split` 모두 "1 입력 컬럼 → 여러 출력 컬럼" 패턴이 필요하다.  
현재 `CleanedSheetWriter`는 컬럼 1:1 매핑만 지원한다.

**권장 설계:**
```python
# transforms 반환값이 dict이면 파생열로 확장
# norm_date_parts → {"": "2026-05-15", "_년": 2026, "_월": 5, "_일": 15}
# addr_split      → {"": "서울특별시 강남구", "_시도": "서울특별시", "_시군구": "강남구"}
```
`writer.py`에서 `isinstance(result, dict)` 분기를 추가하면 두 transform이 공통 패턴으로 동작.

#### 3. address_sido 오류 메시지 개선 — validator.py 1줄 수정

현재: `"transform이 등록되어 있지 않습니다: address_sido"`  
수정 위치: `engine/validator.py` L169 이후 분기 추가:
```python
if col.transform in ("address_sido", "address_sigungu", "addr_split"):
    report.error(
        f"{prefix}.transform '{col.transform}' 사용 시 "
        "config/patterns.yaml 의 address_parsing 섹션이 필요합니다."
    )
```

#### 4. analyze 기본 동작 변경 — UX 핵심

현재 `python main.py analyze storage/data.xlsx` 는 JSON만 출력한다.  
`draft_{파일명}.xlsx` 자동 생성이 기본값이 되면 워크플로우가 대폭 단순화된다:
```
python main.py analyze storage/data.xlsx
→ storage/draft_data.xlsx 생성 + 화면에 컬럼 목록 요약
```
`--dry-run` 플래그로 파일 생성 없이 현재 동작 유지.

#### 5. WORKLOG.md vs todo.md 동기화 갭

WORKLOG 세션 7 이후 세션 기록이 없다. 2026-05-20 세션에서 상당한 작업(norm_position, patterns 재구성, 테스트 82개)이 진행됐는데 WORKLOG에 미반영.  
다음 세션 시작 시 WORKLOG에 세션 8 추가 권장.

---

### 작업 권장 순서

```
1단계 (P1, 1~2시간)
  - transform alias 등록: cleansing.py _TRANSFORMS 에 norm_date, norm_num 등 추가
  - 드롭다운 교체: config_excel.py _TRANSFORM_OPTIONS 새 이름으로 갱신
  - address_sido 오류 메시지: validator.py 분기 추가 (5줄)

2단계 (P1-P2, 2~3시간)
  - Config 시트 구조 개편: 구분 열 추가, align/number_format 제거 (config_excel.py)
  - read_config_from_excel 에서 구분=exclude 행 skip 처리

3단계 (P2, 2~3시간)
  - writer.py 파생열 확장 패턴 (dict 반환 분기)
  - norm_date_parts 구현
  - addr_split 구현

4단계 (P3, 1시간)
  - analyze 기본 동작 변경 (main.py)
  - Guide 시트 CLI 내용 수정 (config_excel.py)
  - WORKLOG 세션 8 추가
```


## 추가 질의 및 검토 의견 
- 1. writer.py 확장 패턴은 좋다. 단 addr_split 는 주소를 3개 구분 시도/시군구/상세주소 3단계로 나눈다. 
- 2. draft 자동 생성을 기본값으로 json은 드라이런으로 해달라고 했었다. 
- 3. 또 json 파일 생성시 웹용 json에는 KPI(상단 박스 통계용 3~5개) 정의, 검색어 검색 포함 필드 정의, 차트로 구성할 항목추가(차트종류포함) 부분을 설정해서 데이터를 웹상에서 분석할 수 있도록 해줘.
- 4. json이 최초 draft.json(가칭) -> draft.xlsx의 config 수정후 clean.xlsx와 config.json 생성하도록 되어 있는지 보고. 해당 config.json과 clean.xlsx 에서 웹용  data.json을 구성되는지 보자. 로직이 이상하면 수정해도 좋다. 
- 5. 미완료 작업 진행하고 worklog.md를 작성한다.

- 6. 향후 web(로컬)에서  config설정, 검색필트추가, 차트추가 등을 웹UI를 통해 조절할 수 있도록 구상중이다

### 답변 2026-05-22

---

#### Q1. addr_split — 3단계 분리

**구현 완료.** `transforms/common/address.py`:

- `AddressParser.parse()` 반환 타입을 `(sido, sigungu, detail)` 3-tuple로 변경
- `addr_split()` 함수가 아래 dict 반환 → `engine/writer.py`의 `_DERIVED_SUFFIXES`가 **4열로 자동 확장**

| 출력 컬럼 | 내용 |
|-----------|------|
| `output_col` | 원본 주소 전체 |
| `output_col_시도` | 시/도 (예: 서울특별시) |
| `output_col_시군구` | 시/군/구 (예: 강남구) |
| `output_col_상세` | 이하 상세주소 |

설정 필요: `config/patterns.yaml`의 `address_parsing.sido_patterns` 섹션.

---

#### Q2. analyze 기본 동작 변경 + --dry-run

**구현 완료.** `main.py`:

```bash
# 기본: 원본 파일 폴더에 draft_{파일명}.xlsx 자동 생성
python main.py analyze storage/data.xlsx
# → storage/draft_data.xlsx

# 화면 출력(JSON)만, 파일 생성 없음
python main.py analyze storage/data.xlsx --dry-run

# 프로젝트 폴더 구조로 저장
python main.py analyze storage/data.xlsx --project my_survey --save-project
# → projects/my_survey/draft_data.xlsx
```

---

#### Q3. 웹용 JSON — KPI / 검색 필드 / 차트 자동 구성

**구현 완료.** `engine/exporter.py`에 `_auto_web_config()` 추가. `export` 실행 시 컬럼 타입을 분석하여 자동 감지:

| 항목 | 자동 감지 규칙 |
|------|--------------|
| **KPI** (최대 5개) | 전체 건수 + 고유값 수 적은 카테고리 컬럼 3개 + 숫자 합계 1개 |
| **search_fields** | 텍스트 컬럼 최대 5개 (없으면 카테고리 컬럼) |
| **charts** (최대 6개) | 카테고리 컬럼 순서대로 — unique ≤5 → donut / ≤15 → bar / 그 이상 → hbar |

출력 JSON 구조:
```json
{
  "config": {
    "kpi": [
      {"label": "전체 건수", "field": null, "agg": "count"},
      {"label": "지역", "field": "지역", "agg": "unique_count"},
      ...
    ],
    "search_fields": ["기업명", "사업내용"],
    "charts": [
      {"field": "지역", "type": "bar", "title": "지역"},
      {"field": "업종", "type": "donut", "title": "업종"},
      ...
    ]
  }
}
```

이 값은 웹 대시보드(`js/config.js`)의 기본 설정으로 사용되며, admin.html에서 덮어쓴 값이 우선 적용된다.

---

#### Q4. 전체 흐름 확인

실제 파이프라인 흐름 (코드 기준):

```
1. analyze storage/data.xlsx
   → storage/draft_data.xlsx  (Config 시트 포함, 컬럼 자동 감지)

2. Excel에서 draft_data.xlsx 열기 → Config 시트 수정
   (output_col, transform, 구분 등)

3. python main.py run storage/draft_data.xlsx --input storage/data.xlsx
   → projects/{project}/output/{project}_cleaned.xlsx
      (Cleaned + Summary + Config + Guide 시트)
   → projects/{project}/{project}_config.json
      (SurveyConfig 전체 설정 JSON dump)

4. python main.py export projects/{project}/output/{project}_cleaned.xlsx \
       --xlsx projects/{project}/output/{project}_cleaned.xlsx
   → web/data/{project}_data.json
      (rows + aggregates + meta + config[KPI/charts/search])
```

**참고**: `run` 실행 시 `projects/{project}/` 폴더가 자동 생성됨.
`export` 시 `--xlsx` 옵션을 명시하거나, config.yaml이 있으면 yaml 경로로 호출 가능.

`config.json`은 SurveyConfig 설정 dump (백업/디버깅용).  
웹용 config(KPI/차트/검색)는 `export` 단계에서 자동 생성되어 `data.json["config"]`에 포함된다.

---

#### Q5. 미완료 작업 진행 + WORKLOG.md

**세션 8에서 완료한 항목:**

| 항목 | 상태 |
|------|------|
| addr_split 3단계 (시도/시군구/상세) | ✓ |
| norm_date_parts (파생열 4개 자동 생성) | ✓ |
| writer.py 파생열 확장 패턴 | ✓ |
| Transform 이름 체계 개편 + alias | ✓ |
| mask_rrn, to_binary, to_pct 추가 | ✓ |
| analyze 기본값 → draft 자동생성 | ✓ |
| analyze --dry-run | ✓ |
| 웹 JSON KPI/검색/차트 auto config | ✓ |
| validator.py address 오류 안내 | ✓ |
| Config 시트 10열 재편 (구분 열 추가) | ✓ |
| read_config_from_excel 구분열 처리 | ✓ |
| Guide 시트 CLI 내용 현행화 | ✓ |
| WORKLOG.md 세션 8 추가 | ✓ |

---

#### Q6. 향후 웹 UI에서 config 조절 (구상 메모)

현재 `admin.html`에서 KPI·차트·목록 설정을 수정하고 `dashboard.json`으로 내려받는 흐름이 구현되어 있다.

**향후 확장 방향 (구상):**

| 기능 | 설명 |
|------|------|
| 검색 필드 추가/제거 | admin에서 search_fields 체크박스 편집 |
| 차트 추가/타입 변경 | admin에서 charts 배열 편집 |
| Config 시트 편집 | 웹에서 output_col·transform 수정 후 config.yaml 내려받기 |
| run/export 웹 트리거 | 브라우저에서 파이프라인 실행 (FastAPI 백엔드 필요) |

현재는 `dashboard.json` → Git → export 흐름으로 설정 공유. 웹 UI Config 편집은 FastAPI 백엔드 추가 후 단계적 구현 예정.
