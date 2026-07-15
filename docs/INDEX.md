# ClearSurvey — 문서 인덱스 (Documentation Directory Index)

본 인덱스는 ClearSurvey 솔루션의 설계, 운영 매뉴얼, 작업 기록을 체계적으로 분류한 문서 색인 보관소입니다.

> 시작점은 프로젝트 루트의 [`GUIDE.md`](../GUIDE.md)(빠른 시작·CLI·Config 레퍼런스)입니다. 이 인덱스는 그보다 더 깊은 개별 주제 문서를 찾을 때 사용하세요.

**분류 기준**
- **`plan/`** — 앞으로 할 일 또는 "왜 이렇게 만들었는지"를 설명하는 설계/기획 문서. 구현 완료 여부와 무관하게 기획 의도를 남기기 위해 보관합니다. 착수하지 않은 항목은 `plan/pending/`에 둡니다.
- **`guides/`** — 지금 이 순간의 운영/사용 방법을 설명하는 살아있는 참조 문서. 코드가 바뀌면 같이 갱신되어야 합니다.
- **`logs/`** — 과거 시점의 작업 이력·테스트 결과 기록. 사후에 고치지 않는 append-only 기록입니다.
- **`archive/`** — 더 이상 현재 아키텍처와 맞지 않거나 다른 문서에 흡수되어 참고용으로만 남긴 구버전 문서.

---

## 1. 📂 설계 및 기획서 (`docs/plan/`)

프로젝트의 제품 요구사항 사양서(PRD) 및 설계/기획 로드맵 문서입니다. 완료된 기획도 "왜 이렇게 설계했는가"를 남기기 위해 archive로 옮기지 않고 여기 둡니다.

* **[plan/prd.md](plan/prd.md)**: ClearSurvey 서비스의 제품 정의, 핵심 기능 스코프, 기술 아키텍처를 정의한 제품 요구사항 정의서(PRD).
* **[plan/feature_plan.md](plan/feature_plan.md)** — ✅ 완료: 연도 추출(`date_year`), 복수 선택 분리(`split_binary`), 정렬, 수치 다중 합산(`group_sum`) 등 기능 개선 계획서.
* **[plan/excel_chart_plan.md](plan/excel_chart_plan.md)** — ✅ 완료: 엑셀 요약 시트에 네이티브 차트(Bar/Pie/Line)를 삽입하는 구현 기획안 (`engine/summarizer.py`).
* **[plan/design-migration-plan.md](plan/design-migration-plan.md)** — ✅ 완료: legacy-dashboard.css → Tailwind v4 + shadcn/ui 전환 계획 (Admin/Index 전체).
* **[plan/chart_grid_spanning_plan.md](plan/chart_grid_spanning_plan.md)** — ✅ 완료: 차트 카드 2D 그리드 레이아웃 확장(`layout: 1x1/2x1/2x2/0.5x1/full`) 계획.
* **[plan/remaining_improvements.md](plan/remaining_improvements.md)** — ✅ 5개 항목 전부 완료(2026-07-15): 1.다중 엑셀 병합 웹 UI·2.번들 최적화·3.차트 그리드 auto-fit/가로 4열+설정 UI(브라우저 시각검증 보류)·4."정제 규칙 최신 반영 여부" 배지(브라우저 시각검증 보류)·5.transform 테스트 공백(→ transform_test_plan.md, ✅ 완료). 클라우드 스토리지 연동 및 Supabase 세션 개선(완료)은 [plan/pending/cloud_storage_plan.md](plan/pending/cloud_storage_plan.md)로 분리 이관.
* **[plan/transform_test_plan.md](plan/transform_test_plan.md)** — ✅ 완료(2026-07-15): 정제 규칙(transform) 함수별 단위테스트 커버리지 공백 및 보강 계획서. 전체 282개 테스트 통과.

### 착수하지 않은 계획 (`docs/plan/pending/`)

확정되지 않았거나 우선순위가 낮아 보류 중인 계획입니다. 실제 요구가 확정되면 이 문서를 기준으로 착수합니다.

* **[plan/pending/cloud_storage_plan.md](plan/pending/cloud_storage_plan.md)**: 클라우드 스토리지 연동(Supabase Storage, `StorageEngine` 추상화) 계획. (참고: Supabase 세션 토큰 개선 항목은 이미 구현 완료 상태로 §4에 기록됨). 상태: 검토 중(미착수).
* **[plan/pending/gui_plan.md](plan/pending/gui_plan.md)**: 오프라인 데스크탑 GUI(Gradio → CustomTkinter → PyQt6) 구현 계획.
* **[plan/pending/map_plan.md](plan/pending/map_plan.md)**: 지도(Leaflet + GeoJSON) 탭 확장 계획. ⚠️ React 전환 이전의 vanilla-JS 구조를 전제로 작성되어 재검토 필요.
* **[plan/pending/railway_migration_plan.md](plan/pending/railway_migration_plan.md)**: 어드민 API 서버(FastAPI)를 Railway로 이전하는 계획. 상태: 검토 중.
* **[plan/pending/tauri_integration_plan.md](plan/pending/tauri_integration_plan.md)**: Tauri + Python Sidecar 기반 데스크톱 독립 실행 앱 패키징 계획. 상태: 미착수(`desktop/` 폴더 없음).

---

## 2. 📂 운영 및 사용자 가이드 (`docs/guides/`)

설문 정제 매뉴얼, 컬럼 매핑 가이드 등 실무 운영을 위한 살아있는 참조 문서입니다.

* **[guides/integrated_guide.md](guides/integrated_guide.md)**: 백엔드 API, 프론트엔드 연동, 전체 정제 정산 워크플로우를 포괄하는 시스템 통합 가이드.
* **[guides/project_config_guide.md](guides/project_config_guide.md)**: 정제 폴더 구조 정의 및 config.yaml 매뉴얼 가이드.
* **[guides/config_guide.md](guides/config_guide.md)**: Excel Config 규칙(10열) 상세 정의서.
* **[guides/project_files_lifecycle.md](guides/project_files_lifecycle.md)**: 프로젝트 폴더 내 각 파일(config.yaml/dashboard.json/style.yaml/draft·output xlsx/*_data.json 등)의 역할, 생성 시점, 생성 주체를 정리한 가이드.
* **[guides/admin_auth_guide.md](guides/admin_auth_guide.md)**: Admin 화면 Supabase 인증(JWT) 동작 방식 가이드.
* **[guides/cli_vs_web_guide.md](guides/cli_vs_web_guide.md)**: CLI 모드와 웹 마법사 모드의 차이·선택 기준 가이드.
* **[guides/design-system-guide.md](guides/design-system-guide.md)**: legacy CSS → Tailwind v4 + shadcn/ui 마이그레이션 경험을 바탕으로 한 디자인시스템 가이드.
* **[guides/vercel_deploy_guide.md](guides/vercel_deploy_guide.md)**: GitHub 비공개 저장소를 유지한 채 정적 대시보드를 Vercel에 배포하는 가이드. Vercel은 **git push된 `frontend/public/data/`만** 반영한다는 점(로컬 저장/실행만으로는 갱신 안 됨)이 핵심.
* **[guides/multi_pc_data_sync.md](guides/multi_pc_data_sync.md)**: 여러 PC에서 작업 시 `storage/` gitignore로 인한 프로젝트 미표시·Vercel 덮어쓰기 충돌 원인과 안전 운영 방법(작성 PC 지정·레시피 화이트리스트·클라우드 동기화).

---

## 3. 📂 개발 이력 및 테스트 검증 보고서 (`docs/logs/`)

운영 이력, 테스트 리포트, Playwright 테스트 등 로그 데이터 보관소입니다. 과거 시점 기록이므로 사후에 고치지 않습니다.

* **[logs/test_report.md](logs/test_report.md)**: pytest 단위 테스트 패스 결과 및 `NaN` 방어 설계 등이 명기된 검증 테스트 보고서.
* **[logs/worklog.md](logs/worklog.md)**: 마일스톤별 개발 누적 작업 로그.
* **[logs/qna.md](logs/qna.md)**: 실무 운영 질문 및 아키텍처 설계 합의 이력.
* **[logs/playwright-results.json](logs/playwright-results.json)**, **[logs/playwright-report/](logs/playwright-report/)**, **[logs/test-results/](logs/test-results/)**: E2E 브라우저 테스트 산출물 (gitignore됨, 로컬 실행 시마다 갱신).

---

## 4. 📂 레거시 및 백업 보관소 (`docs/archive/`)

통합 가이드 문서에 흡수되어 중복되었거나, 프로젝트 개편(예: `web/` → `frontend/` 리네임, React 마이그레이션)으로 현재 아키텍처와 맞지 않게 된 구버전 문서 보관 폴더입니다. 참고용으로만 남기며 최신 상태를 반영하지 않습니다.

* **[archive/react_migration_plan.md](archive/react_migration_plan.md)**: React 이전 설계서.
* **[archive/basic_implementation_plan.md](archive/basic_implementation_plan.md)**, **[archive/implementation_plan.md](archive/implementation_plan.md)**: 초기 구현 설계서.
* **[archive/backend_guide.md](archive/backend_guide.md)**, **[archive/frontend_guide.md](archive/frontend_guide.md)**, **[archive/python_guide.md](archive/python_guide.md)**, **[archive/workflow_guide.md](archive/workflow_guide.md)**: 통합 가이드(`guides/integrated_guide.md`)에 흡수된 레거시 개별 가이드.
* **[archive/analyze_and_merge.md](archive/analyze_and_merge.md)**: 분석·병합 상세 설계(구버전).
* **[archive/system_analysis_2026-05-27.md](archive/system_analysis_2026-05-27.md)**: 2026-05-27 시점 시스템 분석 보고서.
* **[archive/unit_detailed_design.md](archive/unit_detailed_design.md)**, **[archive/web_plan.md](archive/web_plan.md)**, **[archive/improvements.md](archive/improvements.md)**: 구버전 상세 설계·개선 메모.
* **[archive/project_budget.md](archive/project_budget.md)**: budget 임시 테스트용 데이터 명세서.
* **[archive/frontend_migration_and_usage.md](archive/frontend_migration_and_usage.md)** ⚠️: 프론트엔드 대시보드를 **별도 백엔드 레포로 이식**하는 시나리오를 전제로 작성된 구버전 문서(`frontend/docs/`에서 이동). `legacy-dashboard.css`, `web/src` 등 삭제된 경로를 참조하고 있어 현재 모노레포 구조와 맞지 않음 — KPI/차트/필터 설정 방법 등 여전히 유효한 내용은 `guides/project_config_guide.md`·`guides/integrated_guide.md`로 이관이 필요.

---

## 5. 📄 `docs/` 루트

* **[CHANGELOG.md](CHANGELOG.md)**: 주요 변경 이력.
