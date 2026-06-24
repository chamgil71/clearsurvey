# Survey Engine GUI — 구현 계획

> 상태: 미구현 선택 계획.
> 현재 실사용 UI는 Excel Config 라운드트립과 `web/` 정적 대시보드를 우선합니다.
> 오프라인 단일 실행 파일이나 로컬 GUI 요구가 확정될 때 이 문서를 기준으로 착수합니다.

## 개요

Survey Engine v2의 기능을 설치 없이 바로 사용할 수 있는 데스크탑 GUI로 구현합니다.

**목표**: 비개발자(정책 담당자, 행정 직원)가 xlsx를 업로드하고 설정을 시각적으로 조정하여 결과물을 받을 수 있도록 합니다.

---

## 기술 스택 비교 및 선택

| 옵션 | 장점 | 단점 | 적합성 |
|------|------|------|--------|
| **Gradio** | Python만으로 웹 UI 생성, 빠른 프로토타입 | 세밀한 레이아웃 제어 어려움 | ★★★★ (1차 프로토타입) |
| **CustomTkinter** | 네이티브 앱, 설치 쉬움, Python 내장 기반 | 복잡한 테이블 편집 제한 | ★★★ (2차 배포판) |
| **PyQt6 / PySide6** | 완전한 네이티브 UI, 테이블 위젯 강력 | 학습 곡선, 라이선스 주의 | ★★★ (완성판) |
| **Electron + Python** | 웹 기술로 UI, 크로스플랫폼 | 설치 복잡, 번들 크기 큼 | ★★ |

**선택 전략**:
1. **1단계**: Gradio — 2~3일 만에 동작하는 프로토타입
2. **2단계**: CustomTkinter — 오프라인 실행 가능한 데스크탑 앱
3. **3단계**: PyQt6 — 테이블 편집·드래그앤드롭이 필요하면 마이그레이션

---

## Phase 1 — Gradio 프로토타입

### 왜 Gradio인가

- `pip install gradio` 하나로 설치
- Python 함수를 그대로 UI 컴포넌트로 노출
- 브라우저 기반이므로 Windows/Mac 동일하게 동작
- 로컬 실행 + 필요 시 `share=True`로 즉시 URL 공유

### 화면 구성 (Gradio Blocks)

```
┌─────────────────────────────────────────────────────────┐
│  Survey Engine v2                                       │
├──────────────┬──────────────────────────────────────────┤
│ [1] 파일 업로드│ [2] 설정 편집     [3] 실행 & 결과        │
└──────────────┴──────────────────────────────────────────┘

탭 1 — 파일 & 분석
  ┌─────────────────────────────────┐
  │ 원본 파일:  [파일 선택]          │
  │ 시트 이름:  [all responses    ]  │
  │ 헤더 행:   [2]  데이터 시작: [3] │
  │ [분석 실행]                      │
  │ ─────────────────────────────── │
  │ 감지 결과:                       │
  │  시트: all responses            │
  │  헤더: 행2 (점수: 1.0)          │
  │  컬럼: 31개                      │
  └─────────────────────────────────┘

탭 2 — 설정 편집
  ┌─────────────────────────────────┐
  │ 프로젝트:  [gpu_2026          ]  │
  │ 설정 파일: [projects/gpu_2026/  │
  │            config.yaml     ▼]   │
  │  또는 YAML 직접 편집:           │
  │ ┌─────────────────────────────┐ │
  │ │ columns:                   │ │
  │ │   - output_col: "답변ID"   │ │
  │ │     source_col: 2          │ │
  │ │     transform: copy        │ │
  │ └─────────────────────────────┘ │
  └─────────────────────────────────┘

탭 3 — 실행
  ┌─────────────────────────────────┐
  │ [실행하기]                       │
  │ ─────────────────────────────── │
  │ ✓ 원본 행수: 146               │
  │ ✓ 전처리 후: 146               │
  │ ✓ Cleaned: 146행 / 24컬럼      │
  │ ✓ Summary: 6섹션               │
  │ ─────────────────────────────── │
  │ 결과 파일: [다운로드]            │
  │  gpu_2026_cleaned.xlsx         │
  └─────────────────────────────────┘
```

### 구현 코드 골격 (gui/gradio_app.py)

```python
import gradio as gr
from pathlib import Path
import yaml
from engine.config import SurveyConfig
from engine.pipeline import SurveyPipeline
from engine.analyzer import ExcelAnalyzer

def analyze_file(file, sheet_name):
    if file is None:
        return "파일을 선택하세요"
    result = ExcelAnalyzer(file.name).analyze(sheet_name or None)
    return (
        f"헤더 행: {result['header_row']} (점수: {result['header_score']})\n"
        f"데이터 시작: {result['data_start_row']}\n"
        f"컬럼 수: {result['column_count']}\n"
        f"샘플: {', '.join(result['sample_headers'][:5])}"
    )

def run_pipeline(input_file, config_yaml_text):
    cfg = SurveyConfig.model_validate(yaml.safe_load(config_yaml_text))
    pipeline = SurveyPipeline(cfg)
    out_path = pipeline.run(input_path=input_file.name)
    return str(out_path), str(out_path)   # log, file

with gr.Blocks(title="Survey Engine v2") as demo:
    gr.Markdown("# Survey Engine v2")

    with gr.Tab("파일 & 분석"):
        file_input = gr.File(label="원본 xlsx 파일", file_types=[".xlsx"])
        sheet_input = gr.Textbox(label="시트 이름 (빈칸=첫번째 시트)")
        analyze_btn = gr.Button("분석 실행", variant="primary")
        analyze_output = gr.Textbox(label="분석 결과", lines=6)
        analyze_btn.click(analyze_file, [file_input, sheet_input], analyze_output)

    with gr.Tab("설정 편집"):
        config_text = gr.Code(label="config.yaml", language="yaml", lines=30)

    with gr.Tab("실행"):
        run_btn = gr.Button("실행하기", variant="primary")
        log_output = gr.Textbox(label="실행 로그", lines=8)
        result_file = gr.File(label="결과 파일 다운로드")
        run_btn.click(run_pipeline, [file_input, config_text], [log_output, result_file])

demo.launch()
```

---

## Phase 2 — CustomTkinter 데스크탑 앱

### 특징

- 인터넷 없이 완전 오프라인 실행
- `pyinstaller` 로 단일 `.exe` 배포
- Windows 11 기본 UI 스타일과 조화로운 디자인

### 화면 레이아웃

```
┌────────────────────────────────────────────────────────────┐
│ Survey Engine v2                               [─][□][×]   │
├────────┬───────────────────────────────────────────────────┤
│        │                                                   │
│ 프로젝트│  ┌── 파일 설정 ──────────────────────────────┐   │
│        │  │ 원본 파일: [________________] [찾아보기]   │   │
│ gpu_   │  │ 출력 폴더: [output/       ] [찾아보기]   │   │
│  2026  │  └────────────────────────────────────────────┘  │
│        │                                                   │
│ budget │  ┌── 컬럼 정의 ──────────────────────────────┐   │
│  2026  │  │ ┌──┬────────────┬──────┬────────────┬──┐  │   │
│        │  │ │ #│ output_col │ 소스  │ transform  │삭│  │   │
│ [+새로  │  │ ├──┼────────────┼──────┼────────────┼──┤  │   │
│  만들기]│  │ │ 1│ 답변ID     │  2   │ copy       │✕│  │   │
│        │  │ │ 2│ 소속기관   │  5   │ copy       │✕│  │   │
│        │  │ │ 3│ 소재지_시도│ 11   │ address_sido│✕│  │   │
│        │  │ └──┴────────────┴──────┴────────────┴──┘  │   │
│        │  │                              [+ 행 추가]   │   │
│        │  └────────────────────────────────────────────┘  │
│        │                                                   │
│        │  [분석]  [미리보기]  [▶ 실행]  [결과 폴더 열기]   │
│        │                                                   │
│        │  상태: ✓ 완료 — 146행 처리 → gpu_2026_cleaned.xlsx│
└────────┴───────────────────────────────────────────────────┘
```

### 핵심 컴포넌트

| 컴포넌트 | 역할 |
|----------|------|
| `ProjectPanel` | 프로젝트 목록 사이드바, 선택/생성 |
| `FilePanel` | 원본 파일·출력 폴더 경로 선택 |
| `ColumnEditor` | 컬럼 정의 인터랙티브 테이블 (CTkScrollableFrame) |
| `PreprocessPanel` | fill_down / row_filter 설정 폼 |
| `RunPanel` | 실행 버튼, 로그 출력, 결과 파일 열기 |
| `ConfigSyncService` | GUI 상태 ↔ config.yaml 자동 동기화 |

### 파일 구조

```
gui/
├── ctk_app.py           # 진입점 (CustomTkinter main window)
├── panels/
│   ├── project_panel.py
│   ├── file_panel.py
│   ├── column_editor.py
│   ├── preprocess_panel.py
│   └── run_panel.py
├── services/
│   ├── config_service.py   # GUI 상태 ↔ SurveyConfig 변환
│   └── pipeline_thread.py  # 백그라운드 스레드로 파이프라인 실행
└── assets/
    └── icon.ico
```

---

## Phase 3 — PyQt6 완성판 (선택적)

CustomTkinter로 한계가 생기는 경우에만 진행:

- 대형 테이블 편집 (1000행+)
- 드래그앤드롭으로 컬럼 순서 변경
- 고급 필터/정렬 UI
- 멀티 탭 (여러 프로젝트 동시 열기)

**주요 라이브러리**:
- `PyQt6` + `PyQt6-Qt6` — UI 프레임워크
- `QTableView` + `QAbstractTableModel` — 컬럼 정의 테이블
- `QThread` + `QRunnable` — 파이프라인 비동기 실행

---

## 배포 패키징

### Windows (.exe)

```bash
pip install pyinstaller
pyinstaller --onefile --windowed --icon gui/assets/icon.ico gui/ctk_app.py
# → dist/survey_engine.exe
```

### Mac (.app)

```bash
pyinstaller --onefile --windowed --icon gui/assets/icon.icns gui/ctk_app.py
# → dist/survey_engine.app
```

---

## 구현 로드맵

### 1단계 — Gradio 프로토타입 (3~5일)

- [ ] `gui/gradio_app.py` 생성
- [ ] 탭 1: 파일 업로드 + ExcelAnalyzer 연동
- [ ] 탭 2: YAML 코드 편집기 + 프로젝트 드롭다운
- [ ] 탭 3: 실행 + 로그 출력 + 결과 파일 다운로드
- [ ] `python gui/gradio_app.py` 로 실행 확인

### 2단계 — CustomTkinter 앱 (2~3주)

- [ ] `pip install customtkinter` + 프로젝트 구조 생성
- [ ] ProjectPanel: 프로젝트 목록 사이드바
- [ ] FilePanel: 파일 경로 선택
- [ ] ColumnEditor: 컬럼 정의 테이블 (추가/삭제/편집)
- [ ] PreprocessPanel: fill_down / row_filter 폼
- [ ] RunPanel: 실행 버튼 + 스레드 로그
- [ ] ConfigSyncService: GUI ↔ SurveyConfig 동기화
- [ ] pyinstaller 빌드 테스트

### 3단계 — 고급 기능 (필요 시)

- [ ] 컬럼 드래그앤드롭 순서 변경
- [ ] 미리보기 테이블 (처음 20행 인라인 표시)
- [ ] 다중 프로젝트 탭
- [ ] 자동 업데이트 체크

---

## 고려사항

| 항목 | 내용 |
|------|------|
| 비동기 실행 | 파이프라인은 별도 스레드에서 실행, UI 블로킹 방지 |
| 대용량 파일 | 50MB+ 파일 처리 시 진행 표시줄 필요 |
| 오류 처리 | ValidationError, PermissionError 등을 사용자 친화적 메시지로 표시 |
| 한글 폰트 | Windows: 맑은 고딕, Mac: Apple SD 고딕 Neo 자동 감지 |
| 설정 저장 | 마지막 사용 파일 경로, 창 크기 등 `%APPDATA%/survey_engine/settings.json` 저장 |
