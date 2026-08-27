# ClearSurvey — 기본 프로젝트 구성 및 설정 가이드 (Project Configuration Guide)

> ⚠️ **아카이브됨 (2026-08-27)**: 이 문서는 [`docs/reference/config_guide.md`](../reference/config_guide.md)
> (config.yaml 전체 스키마 + Excel Config 시트 10열)와
> [`docs/reference/project_files_lifecycle.md`](../reference/project_files_lifecycle.md)
> (프로젝트 폴더 파일 구성)로 대체되었습니다. 이 문서의 최상위 필드(`project`/`style_file`/
> `patterns_file`) 내용은 `config_guide.md` §0으로 옮겨졌습니다. 더 상세하고 최신인 두 문서를
> 참고하세요 — 이 파일은 과거 참고용으로만 보존합니다.

본 문서는 **ClearSurvey** 파이프라인 엔진의 기초가 되는 프로젝트 설정 및 `config.yaml` 작성 표준 가이드입니다. 설문 구조 기획 및 정제 흐름을 설계하는 차세대 개발자를 위해 상세하게 명세합니다.

---

## 1. 프로젝트 폴더 격리 구성

새로운 프로젝트를 수동으로 셋업하거나 매니저를 통해 자동 생성하면, `projects/<project_name>/` 하위에 다음과 같은 최소 요소가 정돈되어야 합니다:

1. **`config.yaml`**: 파이프라인 전체를 관장하는 엑셀 전처리, 컬럼 매핑, 슬라이서, 요약 빌드 설계서.
2. **`dashboard.json`**: 웹 시각화 대시보드 KPI 카드 및 차트 형식을 구성하는 비주얼 기획서.
3. **`style.yaml`**: 요약 시트 및 데이터 행의 테마 색상(헤더 채우기, 폰트명, 하이라이트 HSL 컬러 등)을 규정하는 서식 정의서 (옵션).

---

## 2. `config.yaml` 상세 스키마 매뉴얼

`config.yaml` 파일은 Pydantic 유효성 모델인 `SurveyConfig` 규격에 맞춰 엄격히 빌드되어야 합니다. 주요 탑재 노드는 다음과 같습니다:

### ① 프로젝트 공통 설정 (Top-Level)
* **`project`**: 프로젝트의 영문 고유 식별자명. (예: `customer_satisfaction_2026`)
* **`style_file`**: 적용할 `style.yaml`의 상대/절대 경로.
* **`patterns_file`**: 주소, 전화번호, 사업자번호 등 공통 마스킹/분할 규칙이 들어 있는 YAML 파일 링크. (기본값: `config/patterns.yaml`)

### ② 원본 엑셀 정보 (`source`)
* **`file`**: 분석할 설문 Raw 엑셀 파일의 경로 (storage/ 원본 등).
* **`sheet`**: 읽어들일 시트명 (공백 시 첫 번째 시트 자동 파싱).
* **`header_row`**: 문항 헤더 문자열이 위치한 1-based 행 번호.
* **`data_start_row`**: 실제 데이터 레코드가 시작되는 행 번호.

### ③ 전처리 (`preprocess`)
* **`fill_down`**: 병합 해제된 셀이나 누락된 상위 행 데이터를 아래로 긁어 복사하는 규칙 체인.
* **`row_filter`**: 특정 값을 만족하거나 비어 있는 행을 결과에서 원천 배제/포함하는 필터 규칙.

### ④ 10열 컬럼 규격 정의 (`columns`)
각 문항(컬럼)별 10열 정밀 정제 맵입니다:
* **`output_col`**: 결과 시트에 쓰여질 최종 한글/영문 문항명.
* **`source_col`**: 원본 엑셀에서의 1-based 열 번호. (예: `3`열)
* **`transform`**: 적용할 정합성 변환 룰명 (예: `norm_phone`, `norm_num`, `addr_split`).
* **`include_in_slicer`**: 대시보드 및 엑셀 슬라이서 연동 여부 (`true / false`).

### ⑤ 요약 시트 빌더 (`summary`)
결과 엑셀의 두 번째 시트인 "Summary" 공간에 통계 그리드를 동적 그리기 위한 배치 명세입니다:
* **`layout`**: 2단(cols: 2) 그리드 여백 및 간격 옵션.
* **`sections`**: 요약 카드 명세.
  - `type`: `unique_count` (그룹별 카운트), `totals` (전체 카운트), `binary_sum` (0/1 바이너리 합계).
  - `col_ref`: 요약 대상 컬럼 속성.

---

## 3. 10열 컬럼 설정 작성 예시

아래는 대표적인 `config.yaml` 파일 내 `columns` 부분의 선언 템플릿입니다:

```yaml
columns:
  - output_col: "응답ID"
    source_col: 1
    transform: "norm_num"
  - output_col: "고객성명"
    source_col: 2
    transform: "mask_name" # 개인정보 마스킹 (홍*동)
  - output_col: "연락처"
    source_col: 3
    transform: "norm_phone" # 010-XXXX-XXXX 전화번호 정규화
  - output_col: "거주지역"
    source_col: 4
    transform: "addr_split" # 시도/시군구로 자동 3개 분할컬럼 파생 생성
    include_in_slicer: true
  - output_col: "종합만족도"
    source_col: 5
    transform: "norm_num"
```