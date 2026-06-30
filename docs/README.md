# ClearSurvey — 문서 인덱스 (Documentation Directory Index)

본 인덱스는 ClearSurvey 솔루션의 설계, 운영 매뉴얼, 작업 기록을 체계적으로 분류한 문서 색인 보관소입니다. 모든 문서는 카테고리별 세부 폴더로 구조화되어 있습니다.

---

## 1. 📂 설계 및 기획서 (`docs/plan/`)
프로젝트의 제품 요구사항 사양서(PRD) 및 설계/기획 로드맵 문서가 위치하는 폴더입니다.

* **[prd.md](plan/prd.md) (신규)**: ClearSurvey 서비스의 제품 정의, 핵심 기능 스코프, 기술 아키텍처를 정의한 **제품 요구사항 정의서(PRD)**.
* **[feature_plan.md](plan/feature_plan.md)**: 연도 추출, 복수 선택 분리(`split_binary`), 정렬, 수치 다중 합산(`group_sum`), 자동 구동 UX 등 기능 개선 계획서.
* **[plan/excel_chart_plan.md](plan/excel_chart_plan.md)**: 엑셀 내 차트 삽입에 관한 구현 기획안.
* **[plan/pending/gui_plan.md](plan/pending/gui_plan.md)**: 대화형 설정 에디터 초기 기획서.

---

## 2. 📂 운영 및 사용자 가이드 (`docs/guides/`)
설문 정제 매뉴얼, 컬럼 매핑 가이드 등 실무 운영을 위한 문서들이 위치하는 폴더입니다.

* **[guides/integrated_guide.md](guides/integrated_guide.md)**: 백엔드 API, 프론트엔드 연동, 전체 정제 정산 워크플로우를 포괄하는 **시스템 통합 가이드**.
* **[guides/project_config_guide.md](guides/project_config_guide.md)**: 정제 폴더 구조 정의 및 config.yaml 매뉴얼 가이드.
* **[guides/config_guide.md](guides/config_guide.md)**: Excel Config 규칙(10열) 상세 정의서.

---

## 3. 📂 개발 이력 및 테스트 검증 보고서 (`docs/logs/`)
운영 이력, 테스트 리포트, 플레이라이트 테스트 등 로그 데이터 보관소입니다.

* **[logs/test_report.md](logs/test_report.md)**: pytest 214개 단위 테스트 패스 결과 및 `NaN` 방어 설계 등이 명기된 **종합 검증 테스트 보고서**.
* **[logs/worklog.md](logs/worklog.md)**: 마일스톤별 개발 누적 작업 로그.
* **[logs/qna.md](logs/qna.md)**: 실무 운영 질문 및 아키텍처 설계 합의 이력.
* **[logs/playwright-results.json](logs/playwright-results.json)**: E2E 브라우저 테스트 이력 데이터.

---

## 4. 📂 레거시 및 백업 보관소 (`docs/archive/`)
통합 가이드 문서에 포함되어 중복되었거나, 프로젝트 개편으로 사용하지 않는 구버전 문서의 보관 폴더입니다.

* **[archive/react_migration_plan.md](archive/react_migration_plan.md)**: React 이전 설계서.
* **[archive/implementation_plan.md](archive/archive/implementation_plan.md)**: 초기 구현 설계서.
* **[archive/backend_guide.md](archive/backend_guide.md)**: 통합 가이드에 수록된 레거시 백엔드 가이드.
* **[archive/frontend_guide.md](archive/frontend_guide.md)**: 통합 가이드에 수록된 레거시 프론트엔드 가이드.
* **[archive/python_guide.md](archive/python_guide.md)**: 통합 가이드에 수록된 레거시 파이썬 가이드.
* **[archive/workflow_guide.md](archive/workflow_guide.md)**: 통합 가이드에 수록된 레거시 워크플로우 가이드.
* **[archive/project_budget.md](archive/project_budget.md)**: budget 임시 테스트용 데이터 명세서.
