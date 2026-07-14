# 정제 규칙(Transform) 테스트 커버리지 보강 계획

`docs/plan/remaining_improvements.md` 7번 항목("정제 규칙 자동 테스트 커버리지 공백")의 후속 계획서입니다.
`agents.md` §4(단위 테스트 무결성 정책)가 "모든 정제 규칙(transforms)에 tests/ 디렉토리에 전용 단위
테스트를 100% 기입"하도록 강제하고 있는데, 실제로는 실사용 중인 규칙 중 일부가 이 규칙을 지키지
못하고 있어 이를 메우기 위한 계획입니다.

---

## 0. 이전 조사 결과 정정

이전 대화에서 "7개 규칙이 전부 테스트 없음"이라고 보고했는데, `tests/test_transforms.py`를 클래스 단위로
직접 다시 훑어보니 **부정확한 부분**이 있어 바로잡습니다.

* **`norm_position`(=`normalize_title`)는 이미 테스트되어 있었습니다.** 제가 처음 확인할 때 `grep`으로
  `norm_position`이라는 이름만 찾았는데, 테스트 파일이 `norm_position as normalize_title`로 **별칭
  import**하고 모든 테스트는 `normalize_title(...)`로 호출하고 있어서 놓쳤습니다. `TestCase05_NormalizeTitle`에
  정확 매칭/부분 매칭/커스텀 맵/미매칭 통과/None 처리까지 5개 케이스가 이미 있습니다. → **이번 계획에서 제외**.
* **`addr_split`은 "완전히 미검증"이 아니라 "부분적으로만 검증"**입니다. 실제 주소 파싱 엔진인
  `AddressParser.parse()`는 `TestCase04_AddressSplit`에서 이미 테스트되고 있습니다(서울/경기 케이스,
  빈 값 처리). 다만 `engine/pipeline.py`의 `_build_registry()`가 만드는 **`_addr_split` 클로저**
  (딕셔너리 반환 → `output_col_시도`/`_시군구`/`_상세` 파생열로 확장되는 통합 지점)는 별도 테스트가 없습니다.
  → **범위를 "파서 자체"가 아니라 "파생열 딕셔너리 shape"로 좁혀서 계획에 포함**.

정정 후 실제 공백 목록(5개 + 통합지점 1개):

| 함수 | config.yaml 별칭 | 사용 프로젝트 | 현재 커버리지 |
|---|---|---|---|
| `normalize_date` | `norm_date`, `normalize_date` | cli_gpu_test, survey, mumhwa | 없음 |
| `name_blind` | `mask_name` | cli_gpu_test, gpu_3, gpu_test, survey | 없음 (import조차 안 됨) |
| `normalize_company` | `norm_company`, `normalize_company` | cli_gpu_test, gpu_3, gpu_test, mumhwa | 없음 (import만 됨) |
| `normalize_phone` | `norm_phone`, `normalize_phone` | cli_gpu_test, mumhwa | 없음 (import만 됨) |
| `norm_date_parts` | `norm_date_parts` | mumhwa, 수의계약정보 | 없음 |
| `_addr_split` 클로저 (딕셔너리 shape) | `addr_split` | mumhwa | 부분적 (파서 엔진만 커버) |

---

## 1. 우선순위

1. **`name_blind`** — 개인정보(성명) 마스킹. 회귀 시 개인정보가 그대로 노출될 수 있어 파급력이 가장 큼. ✅ **완료**(`TestCase19_NameBlind`, 7케이스, 2.1절 표 전체 반영).
2. **`_addr_split` 클로저 / `norm_date_parts`** — 이번 대화 중 실제로 "값이 전부 비어 보인다"는 제보가
   들어왔던 파생열 계열. 파서 자체는 검증돼 있지만 다중 컬럼 확장 지점(`writer.py`의 `_DERIVED_SUFFIXES`
   처리)과 맞물리는 부분이라 회귀 위험이 상대적으로 높음.
3. **`normalize_company` / `normalize_phone` / `normalize_date`** — 사용 빈도가 높고 `patterns.yaml`
   기반 동적 정규식 조립 로직(`_build_company_regexes` 등)이 있어 패턴 파일 변경 시 깨지기 쉬움.

---

## 2. 함수별 구체 테스트 케이스 (코드 실동작 기준으로 도출)

### 2.1 `name_blind` (`transforms/domain/cleansing.py:359`)
함수 docstring에 이미 예시가 있어 그대로 회귀 케이스로 사용:

| 입력 | 기대값 | 비고 |
|---|---|---|
| `"홍길동"` | `"홍*동"` | 3자 |
| `"신도홍석"` | `"신**석"` | 4자 (가운데 전부 마스킹) |
| `"홍길"` | `"홍*"` | 2자 |
| `"홍"` | `"홍"` | 1자, 마스킹 불가 |
| `None` | `None` | |
| `""` | `None` | `if not val` 분기 |
| `"  홍길동  "` | `"홍*동"` | 앞뒤 공백 strip 확인 |

### 2.2 `normalize_company` (`cleansing.py:296`)
`company_patterns` 미지정 시 `_DEFAULT_CORP_FORMS`/`_DEFAULT_BRACKET_FORMS` 폴백 경로,
지정 시 `_build_company_regexes` 동적 조립 경로 둘 다 커버:

| 입력 | 기대값 | 비고 |
|---|---|---|
| `"주식회사 카카오"` | `"카카오"` (prefix 제거) | 기본 폴백 패턴 |
| `"카카오 주식회사"` | `"카카오"` (suffix 제거) | |
| `"(주)카카오"` | `"카카오"` | bracket 패턴 |
| `"㈜카카오"` | `"카카오"` | symbol 패턴 |
| `"(재)서산문화재단"` | `"서산문화재단"` | mumhwa 실데이터로 이미 수동 확인됨 |
| `"사단법인 장수한우랑사과랑축제추진위원회"` | `"장수한우랑사과랑축제추진위원회"` | mumhwa 실데이터 |
| `None` | `None` | |
| `""` | `None` | |
| `"카카오"` (법인형태 표기 없음) | `"카카오"` (원본 유지) | |
| `keep_corp_type=True` 인 경우 | 약어가 앞에 붙어야 함 (예: `"(주)카카오"`) | `_DEFAULT_ABBREVS` 매핑 확인 |

### 2.3 `normalize_phone` (`cleansing.py:212`)
지역번호 자리수(2/3/4자리) 분기와 특번(`parts == 0`) 분기를 모두 커버:

| 입력 | 기대값 | 비고 |
|---|---|---|
| `"02-1234-5678"` | `"02-1234-5678"` | 서울 2자리 지역번호, 8자리 국번 |
| `"021234567"` (하이픈 없음) | `"02-123-4567"` | 서울, 7자리 국번 |
| `"010-1234-5678"` | `"010-1234-5678"` | 휴대폰 3자리 |
| `"063-430-2392"` | `"063-430-2392"` | mumhwa 실데이터 |
| `"+82-10-1234-5678"` | `"010-1234-5678"` | 국제번호 프리픽스 제거 |
| `None` | `None` | |
| `""` | `None` | |
| `"abc"` (숫자 없음) | `None` | |
| 매칭 안 되는 자리수 (예: `"1234"`) | `None` | |

### 2.4 `normalize_date` (`cleansing.py:158`)
`_DATE_PATTERNS` 5종 각각 최소 1케이스:

| 입력 | 기대값 | 매칭 패턴 |
|---|---|---|
| `"2026-05-15"` | `"2026-05-15"` | `YYYY-MM-DD` |
| `"2026.5.15"` | `"2026-05-15"` | 점 구분, 1자리 월/일 |
| `"2026/05/15"` | `"2026-05-15"` | 슬래시 구분 |
| `"2026년 5월 15일"` | `"2026-05-15"` | 한글 표기 |
| `"2026년 5월"` | `"2026-05-01"` | 일자 없이 연월만 → 1일로 |
| `"26.5.15"` | `"2026-05-15"` | 2자리 연도 → 20XX 보정 |
| `"20260515"` | `"2026-05-15"` | 8자리 숫자 |
| `datetime(2026, 5, 15)` 객체 | `"2026-05-15"` | `hasattr(val, "year")` 분기 |
| `None` | `None` | |
| `"의미없는 문자열"` | `None` | 패턴 불일치 |
| `"2026-13-45"` (존재하지 않는 날짜) | `None` | `date()` 생성자 검증 실패 |

### 2.5 `norm_date_parts` (`cleansing.py:558`)
내부적으로 `normalize_date`를 호출하는 딕셔너리 wrapper이므로, 2.4가 통과하는 것을 전제로
"딕셔너리 shape"만 검증:

| 입력 | 기대값 |
|---|---|
| `"2026-05-15"` | `{"": "2026-05-15", "_년": 2026, "_월": 5, "_일": 15}` |
| `None` | `None` |
| `"파싱불가"` | `None` (내부 `normalize_date`가 None → 그대로 None 반환) |

### 2.6 `_addr_split` 통합 지점 (`engine/pipeline.py` `_build_registry` 내부 클로저)
현재 이 클로저는 `_build_registry(cfg)`가 반환하는 레지스트리를 통해서만 접근 가능해
직접 import가 안 됩니다. 두 가지 방식 중 택 1:

* **(A, 권장)** `_build_registry`가 클로저를 만들 때 사용하는 실제 dict-shape 조립 로직을
  `transforms/common/address.py`에 `build_addr_split_dict(val, parser) -> dict | None` 같은
  이름의 순수 함수로 뽑아내고, `pipeline.py`의 클로저는 이 함수를 얇게 감싸기만 하도록 리팩터링.
  → 이러면 `test_transforms.py`에서 직접 import해 테스트 가능해지고, 실제 코드 경로와 테스트 경로가
  일치함(현재처럼 "로직은 안 옮기고 클로저 안에서만 조립"하는 구조는 애초에 단위 테스트가 어려운 설계임).
* **(B, 최소 변경)** `_build_registry(cfg)`를 호출해 얻은 registry에서 `"addr_split"`을 꺼내 호출하는
  통합 테스트로 대체. 리팩터링 없이 바로 가능하지만, `SurveyConfig` 객체를 통째로 구성해야 해서
  단위 테스트라기보다는 소형 통합 테스트에 가까움.

| 입력 (주소) | 기대 `_시도`/`_시군구` | 비고 |
|---|---|---|
| `"경상북도 구미시 원평동 124-23"` | `"경북"` / `"구미시"` | mumhwa 실데이터, 이미 수동 확인됨 |
| `"서울특별시 강동구 올림픽로 875 (암사동)"` | `"서울"` / `"강동구"` | |
| `None` | `""` / `""` (또는 `_addr_split` 자체는 `None` 반환 — 실제 클로저 코드의 `if not val: return None` 분기 확인 필요) | |

---

## 3. 구현 방식

* 위치: 기존 `tests/test_transforms.py`에 `TestCase19_NameBlind`, `TestCase20_NormalizeCompany`,
  `TestCase21_NormalizePhone`, `TestCase22_NormalizeDate`, `TestCase23_NormDateParts`,
  `TestCase24_AddrSplitIntegration` 순서로 이어서 추가 (기존 넘버링/네이밍 컨벤션 그대로 따름).
* 2.6(주소 통합 지점)은 먼저 A안(리팩터링) 여부를 결정해야 순서가 정해짐 — 이 부분만 별도 확인 필요.

## 4. 완료 기준 (`agents.md` §4 기준)

* `uv run --extra dev pytest` 전체 스위트가 100% 통과.
* 최초 베이스라인: 217개 통과 (본 계획 작성 시점).
* 진행 상황: `name_blind` 7케이스 추가 후 **234개 전부 통과** 확인 (2026-07-14). 나머지 항목(`normalize_company`/`normalize_phone`/`normalize_date`/`norm_date_parts`/`_addr_split` 통합 지점)은 아직 미착수.

---

**진행 중 — 우선순위 1(`name_blind`)만 구현 완료. 나머지 항목은 여전히 계획 단계이며 코드 작성/실행 전입니다.**
