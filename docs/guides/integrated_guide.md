# ClearSurvey — 통합 가이드: 전체 프로젝트 연계 및 데이터 플로우 (Integrated Guide)

본 문서는 **ClearSurvey**의 3대 독립 영역(Python 데이터 정제 엔진, FastAPI 백엔드, React 웹 프론트엔드)이 로컬 및 분리 배포 환경에서 어떻게 유기적으로 맞물려 전체 설문 프로젝트 수명 주기를 제어하는지 연계 데이터 흐름(Data Lifecycle)을 다루는 통합 가이드입니다.

---

## 1. ClearSurvey 전체 라이프사이클 (Project Lifecycle)

설문지를 업로드하고 대시보드를 배포하기까지의 일관된 3단계 프로세스 데이터 연계도입니다:

```
[React 프론트엔드]                        [FastAPI 백엔드]                     [Python 코어 엔진]
        │                                       │                                     │
        ├─────── 1. Excel 업로드 & 분석 ───────▶│                                     │
        │        (Step 1: File Upload)          ├─────── 2. Excel 구조 자동 분석 ────▶│
        │                                       │        (draft_*.xlsx 및 config)     │
        │◀────── 3. 분석 결과 & Draft 응답 ─────┤                                     │
        │                                       │                                     │
        ├─────── 4. 설정 & 빌더 저장 ──────────▶│                                     │
        │        (Step 2: 10열 드롭다운 편집)   ├─────── 5. Pydantic 정합성 검증 ─────┤
        │                                       │        (config.yaml & json 저장)    │
        │                                       │                                     │
        ├─────── 6. 파이프라인 정제 실행 ──────▶│                                     │
        │        (Step 3: 1-Click Trigger)      ├─────── 7. 정제 프로세스 구동 ──────▶│
        │                                       │        (Excel Cleansing, Slicer)    │
        │◀────── 8. 실시간 런타임 로그 스트림 ──┤                                     │
        │                                       │                                     │
        ├─────── 9. 대시보드 데이터 내보내기 ──▶│                                     │
        │        (Export Trigger)               ├─────── 10. Dashboard JSON 추출 ────▶│
        │                                       │        (web/public/data/project_data.json) │
        │                                       │                                     │
        ▼                                       ▼                                     ▼
[100% 최신 정제 대시보드 렌더링 완료]    [최종 결과물.xlsx & 데이터 공급]      [백엔드-정적 하이브리드 대시보드 배포]
```

---

## 2. 세부 단계별 데이터 연계 흐름

### ① [Step 1] 프로젝트 생성 및 설문지 업로드
1. **프론트엔드**: 사용자가 웹 화면에서 새 프로젝트 이름을 입력하고 raw excel 파일을 drag-and-drop 하면, `FormData` 객체에 실어 백엔드의 `POST /api/projects/create`로 보냅니다.
2. **백엔드 & 파이썬 엔진**:
   - 업로드된 엑셀 파일을 Git 제외 폴더인 `storage/`에 격리 저장합니다.
   - `ExcelAnalyzer` 코어를 가동하여 첫 번째 데이터 행, 헤더 행, 총 문항(컬럼) 개수 등을 자동 검출합니다.
   - 프로젝트 고유 디렉토리인 `projects/<project_name>/`을 생성하고, 정밀 정제 정의 시트가 탑재된 설정용 엑셀인 `draft_*.xlsx`와 기본 설정 파일인 `config.yaml`을 원격 자동 주조하여 저장합니다.

### ② [Step 2] 10열 드롭다운 컬럼 정의 및 대시보드 레이아웃 저장
1. **프론트엔드**: 백엔드로부터 draft 명세를 로드해 Step 2의 10열 매핑 화면과 요약/차트 비주얼 빌더 화면을 렌더링합니다. 
   - 문항별 정제 규칙(Transforms)과 원본 열 번호를 타이핑 없이 드롭다운으로 정교하게 클릭하여 제어합니다.
2. **백엔드 & 파이썬 엔진**:
   - `POST /api/projects/<project_name>/config`로 수신한 설정을 `SurveyConfig` Pydantic 모델을 통해 문법 검증을 거칩니다.
   - 검증이 완료되면 `config.yaml` 및 `dashboard.json`을 프로젝트 폴더에 덮어씌워 영구 기록합니다.

### ③ [Step 3] 정제 엔진 1-Click 실행 및 대시보드 내보내기
1. **프론트엔드**: [정제 엔진 1-Click 실행] 버튼을 클릭해 `POST /api/projects/<project_name>/run`을 날립니다.
2. **백엔드 & 파이썬 엔진**:
   - 파이썬 엔진의 `SurveyPipeline`을 생성해 구동합니다.
   - 전처리(Preprocess) 필터를 타며, 20여 종의 Transform 레지스트리 규칙을 통해 결측치 치환, 마스킹, 주소 분할을 단번에 클렌징하고 `projects/<project_name>/output/` 폴더 하위에 고품질 엑셀 결과를 생성합니다.
   - 완료 후 백엔드의 `export` API를 자동으로 연계 가동하여 `web/public/data/<project_name>_data.json` 파일을 최종 빌드 배포합니다.
3. **프론트엔드**: 갱신된 JSON 경로를 파라미터로 안고 메인 대시보드로 원클릭 랜딩하며 100% 최신의 정밀 정제 대시보드 화면을 화면에 렌더링합니다.
