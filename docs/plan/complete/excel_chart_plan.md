# [ClearSurvey] dashboard.json 기반 동적 Excel 차트 삽입 구현 계획

본 문서는 사용자가 웹 설정 매니저(Step 2)에서 기획한 시각화 레이아웃 정보(`dashboard.json`)를 연계하여, 결과 엑셀의 요약 시트(`Summary`) 우측 영역에 엑셀 네이티브 차트를 동적으로 렌더링하고 주입하기 위한 세부 구현 계획서입니다.

---

## 1. 아키텍처 및 연동 흐름

```
[사용자 대시보드 기획 (웹 UI)]
            │
            ▼ (dashboard.json 저장)
[projects/{project_name}/dashboard.json]
            │
            ▼ (정제 실행 시 로드)
[SummarySheetWriter (engine/summarizer.py)]
  - config.yaml의 요약 섹션 및 dashboard.json 파일 동시 로드
  - 집계 테이블 배치 좌표(scol, srow, height) 역산
  - 설정된 차트 타입(bar, pie, line)에 따라 openpyxl.chart 객체 생성
  - 카테고리(Reference) 및 데이터(Reference) 범위 바인딩
  - Summary 시트 우측 영역(G열)에 일정한 세로 간격으로 차트 오버레이 삽입
```

---

## 2. 세부 구현 설계

### ① dashboard.json 파일 감지 및 로드
- `SummarySheetWriter.write` 메서드 내부에서 프로젝트 루트 경로를 찾아 `projects/{project}/dashboard.json`을 안전하게 읽어들입니다.
- 파일이 없거나 차트 기획 목록(`charts`)이 존재하지 않으면 차트 생성 로직을 무시하고 기존 요약 시트 작성 프로세스만 수행합니다.

### ② 데이터 바인딩 주소 역산 알고리즘
- `dashboard.json` 내 개별 차트의 `colRef`를 돌면서, `config.yaml`에 사전 정의되어 요약 테이블로 렌더링된 섹션(`sec`)을 순회하며 매칭합니다.
- **매칭 대상 섹션**:
  - `sec.type == "unique_count"` 이며 `sec.col_ref == colRef` 인 경우
  - `sec.type == "totals"` 이며 `sec.items` 중 하나라도 `item.col_ref == colRef` 인 경우
  - `sec.type == "binary_sum"` 이며 `sec.columns` 중 하나라도 `col.col_ref == colRef` 인 경우
- **좌표 계산**:
  - `n_rows` = 섹션 데이터 행수 (타이틀/헤더 제외)
  - `scol` = `sec.start_col`
  - `srow` = `sec.start_row`
  - **카테고리 범위**: `min_col=scol, min_row=srow + 2, max_row=srow + 2 + n_rows - 1`
  - **데이터 범위**: `min_col=scol + 1, min_row=srow + 1, max_row=srow + 2 + n_rows - 1` (헤더 행 포함하여 차트 계열 타이틀 획득)

### ③ 엑셀 차트 생성 및 속성 정의
- **막대 차트 (bar)**: `openpyxl.chart.BarChart()` 객체를 생성하고 `chart.type = "col"`로 지정하여 세로 막대로 렌더링합니다.
- **원형 차트 (pie / donut)**: `openpyxl.chart.PieChart()` 객체를 생성합니다.
- **꺾은선 차트 (line)**: `openpyxl.chart.LineChart()` 객체를 생성합니다.
- 공통 속성:
  - `chart.title`: 사용자가 지정한 차트 타이틀 또는 기본 컬럼명 설정.
  - `chart.width = 16`, `chart.height = 10` 크기 조정.

### ④ 차트 우측 오버레이 배치
- 요약 테이블이 보통 `A`~`D`열 내에 2단 그리드로 세로 배치되는 점을 감안하여, 차트는 우측인 **`G`열** 부근에 첫 행 `G2` 셀부터 시작하여 세로 방향으로 일정 간격(`offset = 15 rows`)씩 띄우며 오버레이 배치합니다.
- 배치 셀: `G2`, `G17`, `G32`...

---

## 3. 검증 및 테스트 계획

### 자동화 테스트
- `pytest tests/test_summarizer.py` 등을 가동하여 요약 시트 렌더링 코드 변경 시 크래시가 나지 않는지 회귀 테스트를 진행합니다.

### 수동 기능 검증
1. 로컬 백엔드를 켜고 임시 프로젝트를 생성해 웹 Step 2에서 차트 종류(Bar, Pie 등)를 다수 지정하고 저장합니다.
2. Step 3에서 정제 실행 및 내보내기를 완수한 후 생성된 결과 엑셀(`_cleaned.xlsx`)을 열어 요약 시트 우측에 네이티브 엑셀 차트가 정상적으로 삽입되었는지 시각적으로 검증합니다.
