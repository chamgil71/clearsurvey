# ClearSurvey — 1단계: 파이썬 데이터 정제 엔진 가이드 (Python Engine)

본 문서는 **ClearSurvey**의 심장부인 파이썬 정제 코어 엔진(`engine/` 및 `transforms/`)의 기능, CLI 명령어, 그리고 정합성 검증 transform 룰 명세를 기술한 정밀 가이드입니다.

---

## 1. 정제 엔진의 설계 및 구동 메커니즘

파이썬 엔진은 대규모의 설문/행정 데이터에 대하여 **구조 검증 ➡️ 전처리 ➡️ 변환(Transforms) ➡️ 요약(Summary) ➡️ 엑셀 주입(Writing/Formatting)** 과정을 단일 파이프라인으로 처리합니다.

```
[설문 원본 엑셀]
       │
       ▼ (Preprocessor)
[필터링 및 Fill-Down 전처리]
       │
       ▼ (TransformRegistry)
[20여종 정합성 검증 & 마스킹 변환]
       │
       ▼ (SummarySheetWriter & Stylers)
[Cleaned & Summary & 원본 시트 결합 및 셀 서식/슬라이서 주입]
       │
       ▼
[최종 결과물.xlsx]
```

* **관심사 분리**: 
  - `engine/config.py`: Pydantic 모델을 통한 무결성 설정 검증.
  - `engine/pipeline.py`: 정제 단계를 총괄 조율하는 오케스트레이터.
  - `transforms/`: 가변적인 정제 알고리즘 플러그인 레지스트리.

---

## 2. CLI 명령어 가이드

서버 터미널 및 CMD 환경에서 파이썬 정제 코어를 직접 구동하는 주요 CLI 명령어 일람입니다.

### ① 설문지 엑셀 분석 및 설정 초안(Draft) 생성
원본 Excel의 데이터 영역과 헤더 영역을 자동 검출하여 설정 시트와 프로젝트 템플릿을 생성합니다.
```bash
python main.py analyze storage/raw_survey.xlsx --project "my_project" --save-project
```

### ② 데이터 정제 파이프라인 실행
지정한 프로젝트의 `config.yaml` 명세에 따라 클렌징을 구동하고 최종 정제 엑셀 파일을 생성합니다.
```bash
# 기본 실행
python main.py run projects/my_project/config.yaml --input storage/raw_survey.xlsx

# [권장] 실제 파일 저장 없이 로직 정합성만 빠르게 확인 (시뮬레이션 모드)
python main.py run projects/my_project/config.yaml --input storage/raw_survey.xlsx --dry-run
```

### ③ 웹 대시보드 연동 데이터 JSON 내보내기
정제 완료된 엑셀 결과를 프론트엔드가 즉각 파싱할 수 있는 최적화된 대시보드 용 JSON 데이터(`web/public/data/`)로 배포합니다.
```bash
python main.py export projects/my_project/config.yaml
```

---

## 3. 정합성 및 변환(Transform) 룰 상세 일람

`config.yaml` 또는 웹 매니저 Step 2에서 설정할 수 있는 대표 정합성 검증 규칙 리스트입니다:

* **`copy`**: 원본 값 그대로 복사합니다.
* **`exclude`**: 대상 컬럼을 결과 파일에서 즉시 배제합니다.
* **`norm_text`**: 공백 및 줄바꿈을 정리하여 정규화합니다.
* **`norm_num` / `to_numeric`**: 다양한 형태의 숫자 표현(콤마, 한글 단위 등)을 파싱하여 숫자형으로 변환합니다.
* **`norm_date`**: 다양한 날짜 형식을 표준 날짜 포맷(`YYYY-MM-DD`)으로 정규화합니다.
* **`norm_date_parts`**: 단일 날짜 컬럼을 읽어 정규화하고 연/월/일 파생열 3개를 자동으로 확장 분리합니다.
* **`norm_phone`**: 국내 전화번호 형식을 표준 하이픈 기입 형식으로 변환합니다.
* **`norm_company`**: 회사명에서 법인 형태 표기(주식회사, ㈜ 등)를 제거하거나 약어로 정리합니다.
* **`norm_position`**: 사내 직급/직책 명칭을 사전에 등록된 표준 명칭으로 변환합니다.
* **`val_email` / `val_url` / `val_brn`**: 이메일, URL, 사업자등록번호의 형식을 검증하고 표준화합니다.
* **`mask_name`**: 실명을 비식별화 처리(예: 홍*동)합니다.
* **`mask_rrn`**: 주민등록번호 뒷자리를 마스킹합니다.
* **`to_binary`**: 특정 키워드(`flag_keyword` 필요)가 포함되어 있으면 1, 없으면 0을 반환합니다.
* **`to_pct`**: 퍼센트 문자열을 실수(float)로 변환합니다.
* **`addr_split`**: 주소열을 파싱하여 `_시도`, `_시군구`, `_상세`로 자동 분할합니다.
* **`group_sum`**: 지정한 복수 원본 열(`source_cols`)의 숫자를 합산합니다.

