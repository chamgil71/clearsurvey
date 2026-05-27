# config.yaml 및 Excel Config 시트 작성 가이드

> `config.yaml`은 전처리·컬럼·변환·요약 섹션을 정의하는 메인 설정 파일입니다.
> `python main.py analyze <xlsx>` 또는 `init` 명령어로 자동 생성되며, 헤더 및 데이터 행 감지 및 컬럼명 기반 transform 자동 추천 기능이 포함되어 있습니다.
> 컬럼 정의 및 transform 수정만 필요한 경우, 결과 엑셀(`*_cleaned.xlsx`) 내의 **Config 시트**를 엑셀에서 직접 편집한 뒤 재실행할 수 있습니다.
> 단, 전처리(`preprocess`) 및 복잡한 `summary` 설정 등은 `config.yaml` 텍스트 설정 파일에서만 지원됩니다.

---

## 1. Excel Config 시트 구조 (10열 축소 개편)

엑셀을 통한 손쉬운 설정을 위해 Config 시트의 컬럼 정의가 **10개 열**로 대폭 정리되었습니다.

| 열 번호 | 열 헤더명 | 설명 |
|---|---|---|
| 1 | `#` | 순번 |
| 2 | **구분 (include/exclude)** | `include`(기본) 또는 `exclude` 선택. `exclude` 선택 시 해당 열은 결과에서 제외되며 시트 상에 회색으로 유지됩니다. |
| 3 | **output_col** | cleaned 시트에 표시될 최종 출력 헤더명 (자유롭게 변경 가능) |
| 4 | **source_col_name** | 원본 파일의 원본 컬럼명 (참조용 회색 배경, 수정할 필요 없음) |
| 5 | **source_col** | 원본 파일에서의 열 번호 (A열=1, B열=2, C열=3 ... 드롭다운 제공) |
| 6 | **transform** | 적용할 데이터 정제 규칙 (단축된 신규 명칭 제공, 드롭다운 선택) |
| 7 | **include_in_slicer** | `TRUE` 시 해당 컬럼을 슬라이서 필터로 자동 등록 |
| 8 | **source_cols** | `group_sum` 전용. 합산할 복수 열 번호 목록 (예: `3,5,7` 또는 `3-7`) |
| 9 | **flag_keyword** | `to_binary` 전용. 셀 내에 포함 여부를 판단할 키워드 |
| 10 | **backup_col** | 기본 열(`source_col`)이 비어 있을 경우 대체하여 읽을 원본 열 번호 |

> [!NOTE]
> **YAML 전용 속성**: 기존에 엑셀 시트에 노출되던 스타일/세부 설정 속성들(`width`, `align`, `number_format`, `source_label`, `year_col`)은 Config 시트를 단순화하기 위해 **YAML 파일 전용** 속성으로 이관되었습니다.

---

## 2. transform 자동 추천 매핑

프로젝트 분석(`analyze` 또는 `init`) 시, 아래와 같은 원본 컬럼명 키워드를 분석해 최적의 transform을 자동으로 추천하여 채워줍니다:

| 컬럼명 키워드 | 자동 추천 transform | 비고 |
|---|---|---|
| 이메일, email, e-mail, 메일 | `val_email` | 이메일 형식 검증 및 소문자 정규화 |
| url, 홈페이지, 웹사이트, 링크 | `val_url` | URL 형식 검증 및 정규화 |
| 일시, 날짜, date, time, 등록일, 신청일 등 | `norm_date` | YYYY-MM-DD 날짜 표준화 |
| 연락처, 전화, phone, tel, 휴대폰, 핸드폰, mobile | `norm_phone` | 하이픈(-) 포함 국내 번호 표준화 |
| 기관명, 회사명, 법인명, 업체명 | `norm_company` | 주식회사/(주)/㈜ 등 법인형태 제거 |
| 성명, 담당자명 | `mask_name` | 이름 중간 글자 별표 마스킹 |
| 직급, 직책, 직함, position | `norm_position` | 공통 패턴 사전에 따른 직책 표준화 |
| 그 외 | `copy` | 원본 값 그대로 복사 |

설정을 실행하기 전에 transform 이름, 참조 관계 등을 검사하려면 아래 검증 명령을 실행합니다:
```bash
python main.py validate projects/my_survey/config.yaml --input data.xlsx
```

---

## 3. transform 종류 (단축 명칭 중심)

모든 transform은 **새 단축 이름**을 기본으로 사용하며, 기존의 긴 명칭(alias) 역시 완벽하게 하위 호환됩니다.

### Built-in / 공통 정제

| 기본 transform명 | 설명 | alias (동일 동작) | 추가 파라미터 (YAML 전용) |
|---|---|---|---|
| `copy` | 원본 값 그대로 복사 | - | - |
| `norm_text` | 공백·줄바꿈 정리, 연속 공백 단일화, 빈 값 None 처리 | `normalize_text` | `strip_chars` (추가 제거 문자) |
| `norm_num` | 텍스트 숫자 파싱. 콤마, 범위(최댓값), 퍼센트 및 한글 단위(억/만/천) 파싱 지원 | `normalize_number`, `to_numeric` | `as_int` (정수 강제 여부) |
| `norm_date` | 다양한 날짜 포맷을 `YYYY-MM-DD` 형태로 정규화 | `normalize_date` | - |
| `norm_phone` | 국내 전화번호 형식을 `010-XXXX-XXXX` 형태로 표준화 | `normalize_phone` | `phone_patterns` |
| `norm_company` | 회사명에서 법인 형태 표기를 정리 및 통일 | `normalize_company` | `keep_corp_type` (약어 표기 유지 여부) |
| `norm_position` | 직급/직책을 표준화 사전에 따라 변환 | `normalize_title` | `position_map` |
| `val_email` | 이메일 형식 검증 (유효하지 않으면 빈값) | `validate_email` | - |
| `val_url` | URL 형식 검증 및 scheme 보완 | `validate_url` | - |
| `val_brn` | 사업자등록번호 10자리 체크섬 검증 및 포맷(`XXX-XX-XXXXX`) 통일 | `validate_brn` | `brn_patterns` |
| `mask_name` | 이름 중간 글자 마스킹 (`홍길동` → `홍*동`) | `name_blind` | - |
| `mask_rrn` | 주민등록번호 뒷자리 마스킹 (`123456-1234567` → `123456-*******`) | - | - |
| `to_binary` | 특정 키워드가 포함되어 있으면 1, 없으면 0 반환 | `o_binary` | `flag_keyword` (판단할 키워드) |
| `to_pct` | 퍼센트 문자열을 실수(float)로 변환 (`92.77%` → `92.77`) | `pct_format` | - |
| `group_sum` | 지정한 복수 원본 열(`source_cols`)의 숫자 합산 | - | `source_cols` (대상 열 번호 목록) |

---

## 4. 파생열 다중 확장 패턴 (Special Transforms)

Survey Engine v2는 하나의 열 정의에서 여러 개의 정제된 파생 열들을 자동으로 확장 생성하는 지능형 패턴을 지원합니다.

### ① 날짜 연/월/일 일괄 분리 — `norm_date_parts`
`norm_date_parts`를 지정하면, 엑셀 출력 및 웹 데이터로 내보낼 때 `output_col`로 지정한 열 외에 **자동으로 3개의 파생열이 추가 생성**됩니다:
* `output_col` (예: `신청일`) → `YYYY-MM-DD` 표준 날짜 문자열
* `output_col_년` (예: `신청일_년`) → 연도 (int)
* `output_col_월` (예: `신청일_월`) → 월 (int)
* `output_col_일` (예: `신청일_일`) → 일 (int)

> [!TIP]
> 개별적으로 연, 월, 일 하나씩만 분리해내고 싶을 때는 단축 형식이 아닌 기존 개별 transform인 `date_year`, `date_month`, `date_day`를 컬럼 정의에 각각 할당하여 수동으로 구성할 수도 있습니다.

### ② 주소 계층 일괄 분리 — `addr_split`
주소가 작성된 원본 열에 `addr_split`을 지정하면, `patterns.yaml`의 `address_parsing` 설정(사전 구축 필요)을 기반으로 **자동으로 3개의 계층 파생열이 추가 생성**됩니다:
* `output_col` (예: `주소`) → 원본 주소 텍스트 유지
* `output_col_시도` (예: `주소_시도`) → 파싱된 시/도 (예: `서울특별시`, `경기도` 등)
* `output_col_시군구` (예: `주소_시군구`) → 파싱된 시/군/구 (예: `강남구`, `수원시 장안구` 등)
* `output_col_상세` (예: `주소_상세`) → 나머지 상세 주소

> [!CAUTION]
> `addr_split` 또는 개별 주소 파싱(`address_sido`, `address_sigungu`)을 사용하기 위해서는 `config/patterns.yaml` 내에 `address_parsing` 설정 및 정규식 사전이 반드시 정의되어 있어야 합니다. 그렇지 않으면 validator에서 예외가 발생합니다.

---

### Domain: gpu_survey (GPU 설문 전용)

| transform | 설명 |
|---|---|
| `gpu_usage_type` | "사용중" / "미사용" |
| `gpu_usage_detail` | "자체서버" / "외부임차" / "자체서버+외부임차" |
| `n_jang` | H100 환산 텍스트 → 숫자 |
| `jang` | GPU 장수 텍스트 → 숫자 (backup_col 지원) |
| `clean_ac` | 이용량 증가율 텍스트 정제 |
| `o_binary` | 복수응답 키워드 포함 여부 → 0/1 |

### Domain: budget (예산 집행 전용)

| transform | 설명 |
|---|---|
| `budget_level` | 예산코드 → 계층 레벨 감지 (3~7). `"26-01-A-02"` → 3, `"001"` → 7 |
| `map_category` | 예산코드 → 카테고리 (`인건비` / `물건비` / `이전지출` 등) |
| `map_division` | 수행부서명 → 본부명 (`AI전략팀` → `AI본부`). 매핑 없으면 원본 반환 |
| `pct_format` | 퍼센트 문자열 → float (`"92.77%"` → `92.77`) |

---

## 5. summary 섹션 type 종류

| type | 설명 | 필수 필드 |
|---|---|---|
| `totals` | 고정 항목 카운트 | `items` |
| `unique_count` | 고유값 자동 목록 + COUNTIF | `col_ref` |
| `binary_sum` | 0/1 이진 컬럼 합산 | `columns` |
| `gpu_demand` | 합계/건수/건당평균 | `columns` |
| `countif_contains` | 와일드카드 키워드 집계 | `col_ref`, `keywords` |

---

## 6. preprocess 섹션

`run` 실행 시 **원본 데이터를 읽은 직후**, 컬럼 변환 전에 적용됩니다.
실행 순서: `fill_down` → `row_filter` (순서 고정)

> **주의**: preprocess 설정은 `config.yaml`에만 저장됩니다.
> cleaned.xlsx의 Config 시트로는 이 설정을 읽거나 쓸 수 없습니다.

### fill_down — 상위 행 값을 하위 행으로 채워 새 컬럼 생성

```yaml
preprocess:
  fill_down:
    - source_col: 1           # 원본 컬럼 번호 (A열=1)
      output_label: "사업코드" # 생성할 컬럼명 (columns에서 source_label로 참조)
      mode: on_trigger         # always | on_trigger
      trigger_col: 3           # [on_trigger 전용] 기준 컬럼 번호
      trigger_value: 3         # [on_trigger 전용] 이 값일 때 source_col 값 캡처
```

| mode | 동작 |
|---|---|
| `always` | 빈 셀이면 위 행 값으로 채우기 (단순 fill-down) |
| `on_trigger` | trigger_col == trigger_value 인 행에서 source_col 값을 캡처하여 이후 행에 채움 |

output_col에서 참조:
```yaml
columns:
  - output_col: "사업코드"
    source_label: "사업코드"   # fill_down output_label과 동일
    transform: copy
```

### row_filter — 행 필터링

```yaml
preprocess:
  row_filter:
    include:                    # 하나라도 충족하면 포함 (OR)
      - col: 3
        values: [7]             # 레벨 7만 포함
    exclude:                    # 하나라도 충족하면 제외 (OR)
      - col: 3
        is_empty: true          # C열 비어있는 행 제외
      - col: 2
        equals: "합계"          # B열 = "합계" 제외
```

#### 조건 타입

| 조건 | 설명 | 예시 |
|---|---|---|
| `values` | 값 목록 중 하나와 일치 | `values: [3, 4, 5]` |
| `equals` | 정확 일치 | `equals: "합계"` |
| `is_empty` | null 또는 빈값 | `is_empty: true` |

#### 논리 규칙

- **include 규칙들**: 하나라도 충족하면 포함 (**OR**)
- **exclude 규칙들**: 하나라도 충족하면 제외 (**OR**)
- include + exclude 병행: include 통과 후 exclude 제거

---

## 7. domain 플러그인 자동 로딩

`transforms/domain/` 아래의 모든 모듈은 파이프라인 실행 시 자동 로딩됩니다.
별도 설정 없이 `budget_level`, `map_division` 등을 바로 사용할 수 있습니다.

커스텀 transform을 추가하려면 `transforms/domain/` 아래에 새 파일을 만들고
`_TRANSFORMS` dict에 등록하면 됩니다:

```python
# transforms/domain/my_custom.py
def my_transform(val, **kw):
    return str(val).upper()

_TRANSFORMS = {"my_transform": my_transform}
```

---

## 8. config.yaml vs Config 시트 — 수정 위치 선택 기준

| 수정 항목 | 권장 위치 | 비고 |
|-----------|-----------|---|
| 전처리 (fill_down, row_filter) | `config.yaml` | 엑셀 라운드트립 미지원 |
| 컬럼 추가·삭제·이름 변경 | Config 시트 (또는 config.yaml) | 컬럼 제외는 `구분` = `exclude` 선택 |
| transform 변경 | Config 시트 (빠른 검증) | 확정 후 config.yaml에 반영 권장 |
| summary 섹션 추가 (unique_count) | Config 시트 | 간단 요약의 경우 엑셀에서 바로 행 추가 가능 |
| summary 세부항목 (binary_sum items 등) | `config.yaml` | 세부 집계 대상 설정 등 |
| 스타일 (색상, 폰트) | `style.yaml` | - |
