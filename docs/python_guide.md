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
python main.py analyze storage/raw_survey.xlsx --name "my_project"
```

### ② 데이터 정제 파이프라인 실행
지정한 프로젝트의 `config.yaml` 명세에 따라 클렌징을 구동하고 최종 정제 엑셀 파일을 생성합니다.
```bash
# 기본 실행
python main.py run projects/my_project/config.yaml

# [권장] 실제 파일 저장 없이 로직 정합성만 빠르게 확인 (시뮬레이션 모드)
python main.py run projects/my_project/config.yaml --dry-run
```

### ③ 웹 대시보드 연동 데이터 JSON 내보내기
정제 완료된 엑셀 결과를 프론트엔드가 즉각 파싱할 수 있는 최적화된 대시보드 용 JSON 데이터로 배포합니다.
```bash
python main.py export projects/my_project/config.yaml
```

---

## 3. 정합성 및 변환(Transform) 룰 상세 일람

`config.yaml` 또는 웹 매니저 Step 2에서 설정할 수 있는 대표 정합성 검증 규칙 리스트입니다:

* **`exclude`**: 대상 컬럼을 결과 파일에서 즉시 배제합니다.
* **`norm_date_parts`**: 연/월/일로 쪼개진 컬럼들을 단일 날짜 포맷(`YYYY-MM-DD`)으로 합병합니다.
* **`address_split`**: 주소열을 파싱하여 `_시도`, `_시군구`, `_상세`로 자동 분할합니다.
* **`val_range`**: 수치 데이터의 상하한 범위를 제한하고 유효성을 검증합니다. (인수: `min: 1, max: 5`)
* **`val_in`**: 허용된 항목 목록 내에 응답이 속하는지 검증합니다. (인수: `allowed_values: [M, F]`)
* **`to_numeric`**: 문자열을 수치형 데이터로 변환하고, 누락되거나 비어 있는 값은 `0`으로 스마트 변환합니다.
* **`mask_email` / `mask_phone` / `mask_name`**: 개인 정보 유출을 완벽 차단하기 위해 이메일, 전화번호, 실명을 비식별화 처리(예: 홍*동)합니다.
