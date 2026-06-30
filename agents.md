# AI Agent Guidelines & System Rules — ClearSurvey

본 문서는 ClearSurvey 프로젝트의 소스코드를 유지보수, 기어, 리팩토링하는 모든 AI 코딩 에이전트(`Antigravity` 등)가 준수해야 하는 강제적인 스타일 가이드 및 동작 규칙 지침서입니다.

---

## 1. 경로 설정 및 파일시스템 주입 규칙 (Path & Directory Rules)
* **하드코딩 금지**: 드라이브명(`C:`, `D:`)이나 절대 경로를 코드에 직접 주입하지 마십시오.
* **상대 경로 갱신**: Windows 와 Linux 환경의 경로 대소문자 구분을 방어하기 위해 `Path.relative_to` 대신 항상 **`os.path.relpath`** 를 사용해 상대 경로(`../../raw/파일명.xlsx`)를 정교하게 계산 조립하십시오.
* **스토리지 디렉토리**:
  * 설문 원본은 반드시 `storage/raw/` 기점에 존재해야 합니다.
  * 프로젝트 설정과 매니페스트는 `storage/projects/{projectName}/`에 저장되어야 합니다.
  * 프론트엔드가 실시간으로 스크리닝하는 정적 JSON은 `frontend/public/data/` 에 저장되어야 합니다.

---

## 2. 결측치 `NaN` 방어 및 직렬화 안전 지침 (JSON Serialization & NaN Safety)
* **이유**: Pandas 및 openpyxl 이 비어있는 수치 셀을 가공할 때 발생하는 `NaN` (Not a Number) 부동소수점 형이 JSON 에 문자열 그대로 주입되면, 프론트엔드 SSR 엔진이 파싱 도중 크래시를 내고 `Something went wrong on our end` 500 오류를 냅니다.
* **조치**:
  * 파이썬 데이터셋 직렬화단(예: `exporter.py` 의 `_clean` 등)이나 백엔드 API Response 핸들러에서는 `math.isnan` 과 `numpy.isnan` 을 사용하여 모든 NaN 값을 사전에 검출해 **`None` (JSON `null` 로 직렬화됨)** 으로 완벽히 치환해야 합니다.

---

## 3. 프론트엔드 시각화 및 UX 개발 규칙
* **가상 파생 열 가동성**: `split_binary`, `norm_date_parts` 등 정제 과정에서 가상으로 추가될 파생 열 명칭들을 프론트엔드 설정 뷰어(`Step2_ConfigEditor.tsx` 의 `allAvailableChartCols`) 단에서 동적 수집하여, 차트 및 합산 드롭다운에서 사용자가 즉시 선택할 수 있게 바인딩을 보존하십시오.
* **화면 찌그러짐(Layout Crushing) 방지**: 차트 카드 제목 `Input` 이나 `select` 박스들이 한 줄에 너무 많이 몰려 뭉개지지 않도록 줄바꿈 구조 및 그리드 너비 비율을 넉넉히 제공하십시오.
* **자동 실행(Auto-Run) 가이드**: 정제 및 대시보드 설정을 저장하는 시점에 정제 엔진 파이프라인(`runPipeline`)을 백그라운드로 자동 1회 기동 연동하여 갱신 지연 없는 쾌적한 UX 흐름을 유지하십시오.

---

## 4. 단위 테스트 무결성 정책 (Test Suite Policy)
* 모든 신규 정제 규칙(`transforms`) 또는 가공 파이프라인 확장 시에는 **`tests/` 디렉토리에 전용 단위 테스트를 100% 기입**하십시오.
* 변경 사항 반영 후, 반드시 `uv run --extra dev pytest` 를 수행하여 전체 **214개 이상의 테스트 스위트가 100% 통과(Pass)** 함을 자가 증명해야만 최종 배포 승인을 Propose 할 수 있습니다.
