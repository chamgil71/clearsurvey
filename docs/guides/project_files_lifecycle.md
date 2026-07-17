# ClearSurvey — 프로젝트 폴더 파일 구성 및 생성 시점 가이드

`storage/projects/<project_name>/` 아래 실제로 어떤 파일이 왜 생기고, 언제 만들어지고,
누가 읽고 쓰는지를 정리한 문서입니다. 예시는 `storage/projects/mumhwa/`를 기준으로 합니다.

```
storage/projects/mumhwa/
├── config.yaml                          # 파이프라인 설정 (SurveyConfig)
├── dashboard.json                       # 웹 대시보드 + 엑셀 요약/차트 설정
├── style.yaml                           # 엑셀 서식 정의 (선택적, 기본 미연결)
├── draft_전국문화축제표준데이터-20260708.xlsx  # 최초 분석 스냅샷 (레거시/폴백용)
├── mumhwa_config.json                   # 마지막 실행에 쓰인 설정 스냅샷 (감사용)
├── mumhwa_data.json                     # 웹 대시보드용 최종 JSON (로컬 사본)
├── projects.json                        # exporter.py 부산물 — 실제로는 안 씀 (아래 4.7 참고)
└── output/
    └── mumhwa_cleaned.xlsx              # 최종 정제 결과 엑셀 (다운로드되는 파일)
```

`config.yaml`의 스키마 자체(어떤 필드가 있는지)는 [project_config_guide.md](project_config_guide.md)를
참고하세요. 이 문서는 "폴더 안의 파일들이 어떤 순서로, 어떤 트리거로 생성되는가"에 집중합니다.

---

## 1. 파일 한눈에 보기

| 파일 | 생성 시점 | 생성 주체 | 읽는 주체 |
|---|---|---|---|
| `config.yaml` | 프로젝트 생성 시 자동 생성, 이후 설정 저장 시 갱신 | `POST /api/projects/create` → `ExcelAnalyzer.generate_config_yaml()` / `POST /api/projects/{name}/config` | 파이프라인 실행(`/run`), 설정 화면 로드(`/config` GET), 미리보기(`/preview`) |
| `dashboard.json` | 설정 저장 시 생성/갱신 (Step2에서 "저장"할 때) | `POST /api/projects/{name}/config` | 웹 대시보드(`FilterBar`/`ChartCard` 등), `/run` 시 엑셀 차트 자동 배치, `/export` 시 대시보드 JSON에 임베드 |
| `style.yaml` | 프로젝트 생성 시 1회 복사 | `POST /api/projects/create` (backend `config/default_style.yaml` 복사) | `config.yaml`의 `style_file`이 이 경로를 **명시적으로 가리켜야만** `engine/styler.py`가 읽음 |
| `draft_*.xlsx` | 프로젝트 생성 시 1회 생성 | `ExcelAnalyzer.generate_draft_xlsx()` | `config.yaml`이 없을 때만 `/config` GET의 폴백 소스로 읽음 (평소엔 안 읽힘) |
| `{name}_config.json` | 파이프라인 실행(`/run`)이 끝날 때마다 갱신 | `pipeline.py` (`SurveyPipeline.run()` 마지막 단계) | 없음 — 순수 감사/디버그용 스냅샷 |
| `overrides.json` | 대시보드에서 값을 직접 수정할 때 생성/갱신 | `PATCH /api/projects/{name}/rows/{row_id}` → `engine/overrides.py` | 파이프라인 실행(`/run`)이 매번 읽어 transform 결과 위에 덮어씀 (아래 4.9 참고) |
| `{name}_data.json` | 내보내기(`/export`) 시 생성/갱신 | `export_to_json()` (`engine/exporter.py`) | `frontend/public/data/`로 복사된 사본을 웹 대시보드가 실제로 읽음 (아래 4.6 참고) |
| `projects.json` (프로젝트 폴더 내부) | 내보내기(`/export`) 시 부수적으로 생성 | `exporter.py`의 `_update_manifest()` | **아무도 안 읽음** — 알려진 부산물 (아래 4.7 참고) |
| `output/{name}_cleaned.xlsx` | 파이프라인 실행(`/run`) 시 생성/갱신 | `pipeline.py` + `slicer.py` | `/download`, `/export`, `/preview`, "엑셀 다운로드" 버튼 |

원본 업로드 파일 자체는 프로젝트 폴더 안이 아니라 **`storage/raw/`에 별도 보관**되며,
`config.yaml`의 `source.file`이 그 경로를 상대경로로 가리킵니다.

---

## 2. 생성 순서 (프로젝트 생성 → 정제 → 배포)

```
① 새 프로젝트 (엑셀 업로드)
   POST /api/projects/create
   ├─ storage/raw/<원본파일명>.xlsx        저장 (원본 그대로 보관)
   ├─ storage/projects/<name>/config.yaml  자동 생성 (헤더 행 자동 감지)
   ├─ storage/projects/<name>/draft_*.xlsx 생성 (레거시 CLI용 스냅샷, 평소엔 안 쓰임)
   ├─ storage/projects/<name>/style.yaml   기본 서식 복사
   └─ frontend/public/data/projects.json   프로젝트 목록에 등록 (published=false)

② 설정 편집 (Step2 화면에서 "저장" 클릭)
   POST /api/projects/{name}/config
   ├─ config.yaml      덮어쓰기 (컬럼 매핑, 슬라이서 등)
   └─ dashboard.json    덮어쓰기 (KPI/차트/필터 목록)

③ 정제 실행 ("정제 엔진 1-Click 실행")
   POST /api/projects/{name}/run   (백그라운드 실행, SSE로 로그 스트리밍)
   ├─ config.yaml + storage/raw/*.xlsx 를 읽어 정제
   ├─ dashboard.json의 charts를 보고, config.yaml에 summary.sections가
   │  비어 있으면 자동으로 생성 (엑셀에 차트를 그릴 자리를 만들어줌)
   ├─ output/<name>_cleaned.xlsx  생성 (Cleaned/Summary/원본/Config/Guide 시트)
   ├─ (슬라이서 있으면) 같은 파일에 슬라이서 XML 후처리 주입
   └─ <name>_config.json  이번 실행에 쓰인 설정 스냅샷 저장

④ 대시보드 내보내기 (③ 완료 직후 프런트가 자동 호출)
   POST /api/projects/{name}/export
   ├─ output/<name>_cleaned.xlsx 를 읽어 JSON으로 변환
   ├─ storage/projects/<name>/<name>_data.json      저장 (로컬 사본)
   ├─ storage/projects/<name>/projects.json         부수적으로 생성 (안 쓰임)
   ├─ frontend/public/data/<name>_data.json         복사 (★ 웹이 실제로 읽는 파일)
   └─ frontend/public/data/projects.json            갱신 (published=true 로 전환)
```

---

## 3. 왜 같은 역할처럼 보이는 파일이 두 벌인가

### `{name}_data.json`이 두 곳에 있는 이유
`storage/projects/{name}/{name}_data.json`은 "이 프로젝트가 마지막으로 내보낸 결과"를
프로젝트 폴더 안에도 보관해두기 위한 사본입니다. 실제로 브라우저가 대시보드를 그릴 때
fetch하는 파일은 **`frontend/public/data/{name}_data.json`** 쪽입니다 (Vite/정적 서빙 경로).
두 파일은 `/export` 시점에 항상 동일한 내용으로 동기화됩니다.

### `dashboard.json`이 두 가지 역할을 겸함
원래는 "웹 대시보드 화면 구성(KPI 카드, 차트, 필터 열)" 설정 파일이지만,
현재는 **엑셀 파일 안의 Summary 시트/차트를 어디에 그릴지 결정하는 데도 함께 쓰입니다**
(`/run` 시 `config.yaml`의 `summary.sections`가 비어 있으면 `dashboard.json`의 `charts`를
근거로 자동 생성). 즉 웹 대시보드 설정과 엑셀 차트 설정이 이 파일 하나로 연결되어 있습니다.

---

## 4. 파일별 상세

### 4.1 `config.yaml`
파이프라인 전체를 관장하는 유일한 필수 설정 파일 (`SurveyConfig` Pydantic 모델).
컬럼 매핑, 정제 규칙(`transform`), 슬라이서 대상, 요약 시트 레이아웃 등을 담습니다.
스키마 상세는 [project_config_guide.md](project_config_guide.md) 참고.

### 4.2 `dashboard.json`
웹 대시보드 KPI/차트/필터 목록(`list.filter_cols` 등)을 담는 JSON.
Step2 화면에서 저장할 때마다 통째로 덮어써집니다. 없으면(신규 프로젝트 직후 등)
`config/dashboard_defaults.yaml`(조직 공통 기본값) → 그것도 없으면 컬럼 메타 기반
자동 생성 기본값 순으로 대체됩니다.

### 4.3 `style.yaml`
Summary/Cleaned 시트의 헤더 채우기 색, 폰트, 하이라이트 색 등을 정의하는 서식 파일.
프로젝트 생성 시 `backend/config/default_style.yaml`에서 자동 복사되지만,
**`config.yaml`의 최상위 `style_file` 필드는 기본값이 `null`이라 자동으로 연결되지
않습니다.** 실제로 적용하려면 `config.yaml`에 `style_file: style.yaml`을 명시해야 합니다
(현재 웹 Step2 화면에는 이 필드를 편집하는 UI가 없어, 켜려면 파일을 직접 수정해야 함).

### 4.4 `draft_*.xlsx`
프로젝트 생성 직후 `ExcelAnalyzer`가 원본 파일의 헤더 행/컬럼을 자동 감지해서 만드는
"Config/Guide 시트가 포함된 엑셀" 스냅샷입니다. 원래는 CLI 워크플로우(엑셀에서 직접
Config 시트를 고쳐서 재실행)를 위한 것이고, 웹 UI 흐름에서는 `config.yaml`이 항상
바로 생성되기 때문에 **`config.yaml`이 사라지거나 없을 때만 폴백으로 읽힙니다.**
평소에는 그냥 남아있는 참고용 파일입니다.

### 4.5 `{name}_config.json`
매 `/run` 실행이 끝날 때 `cfg.model_dump(exclude_none=True)`로 그 시점의 전체 설정을
JSON으로 떠서 저장하는 감사(audit) 로그성 파일입니다. 파이프라인이나 API 어디에서도
다시 읽어 들이지 않는 **일방향 기록**입니다. "이 결과 엑셀이 정확히 어떤 설정으로
만들어졌는지" 추적하고 싶을 때 참고하는 용도입니다.

### 4.6 `{name}_data.json`
`/export`가 `output/{name}_cleaned.xlsx`를 읽어 만드는 웹 대시보드용 JSON
(행 데이터 `rows`, 필터 옵션 `aggregates`, 컬럼 메타 `meta.columns`, 임베드된
`dashboard` 설정 포함). 프로젝트 폴더에 먼저 쓰고, 그대로 `frontend/public/data/`에
복사합니다 — **실제 대시보드가 fetch하는 건 복사된 쪽**입니다.

### 4.7 `projects.json` (프로젝트 폴더 안쪽) — 알려진 부산물
`export_to_json()` 내부의 `_update_manifest()`가 "출력 경로 옆에 항상 manifest를
갱신"하도록 짜여 있어서, `output_path`를 프로젝트 폴더로 주고 호출할 때마다
`storage/projects/{name}/projects.json`이 같이 생성됩니다. 실제 프로젝트 목록/게시
상태를 관리하는 진짜 manifest는 `frontend/public/data/projects.json` 하나뿐이며
(`main.py`의 `_update_projects_manifest()`가 별도로 관리), 프로젝트 폴더 안의
이 파일은 **아무 코드에서도 다시 읽지 않는 부산물**입니다. 지워도 기능에 영향 없습니다.

### 4.8 `output/{name}_cleaned.xlsx`
사용자가 최종적으로 다운로드하는 결과물. `/run` 시 다음 순서로 만들어집니다:
1. `CleanedSheetWriter` — "Cleaned" 시트 (정제된 원본 데이터 + 파생 컬럼)
2. `SummarySheetWriter` — "Summary" 시트 (요약 통계 + 차트), `summary.sections`가
   있을 때만 생성됨 (없으면 이 시트 자체가 안 생김)
3. 원본(raw) 시트, `Config`/`Guide` 참고 시트 (`config_excel.py`)
4. 슬라이서가 설정돼 있으면 `slicer.py`가 저장된 파일을 다시 열어 zip 레벨에서
   슬라이서 XML을 후처리 주입 (openpyxl이 슬라이서를 직접 지원하지 않기 때문)

### 4.9 `overrides.json` — 대시보드에서 손으로 고친 값

공개 대시보드의 **목록 탭 → 행 클릭 → 우측 드로어**에서 값을 수정하면 여기 쌓입니다.

**왜 별도 파일인가**: `output/{name}_cleaned.xlsx` 는 원본이 아니라 `storage/raw` + `config.yaml`
에서 파이프라인이 **매번 새로 만드는 파생물**입니다(위 4.8). 대시보드에서 고친 값을 거기 직접
쓰면 **다음 `/run` 이 원본에서 전부 다시 만들면서 조용히 지워집니다.** 그래서 편집만 따로 모아
두고, 파이프라인이 transform 을 끝낸 **직후·시트에 쓰기 직전**에 덮어씌웁니다.
정제 규칙과 손 편집이 부딪히면 **손 편집이 이깁니다.**

```
raw.xlsx ──transform──> 값 ──[overrides.json 이 덮어씀]──> Cleaned 시트
```

- **이 파일이 편집의 진실**입니다. `cleaned.xlsx` 와 `{name}_data.json` 은 둘 다 여기서 파생됩니다.
- 행은 `__row_id`(Cleaned 시트 맨 끝 **숨김 열**, 원본 엑셀 행번호)로 지목합니다 — 순번이 아니라
  원본 기준이라 빈 행·행 필터·정렬과 무관합니다. **엑셀에서 이 열을 지우면** 수정본을 되돌려
  올릴 때 거부됩니다.
- `git` 에 올라가지 않습니다(`/storage/*` 규칙). 편집값이 곧 응답 내용이라 개인정보이기 때문입니다.
  → **편집은 PC 를 따라가지 않습니다.** 다른 PC 에서 발행하면 편집 없는 상태가 올라갑니다.
- 되돌리기: 드로어 옆 `편집 N건` 배지 → 검토 패널 → 개별·전체 되돌리기.

상세: [../plan/pending/dashboard_edit_plan.md](../plan/pending/dashboard_edit_plan.md) §3

---

## 5. 참고

- 컬럼 매핑/`transform` 규칙 상세: [project_config_guide.md](project_config_guide.md), [config_guide.md](config_guide.md)
- API 엔드포인트 및 프런트 연동 전체 흐름: [integrated_guide.md](integrated_guide.md)
