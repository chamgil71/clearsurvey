# ClearSurvey 운영 가이드 (Operations Guide)

> 이 폴더는 **ClearSurvey를 실제로 운영·유지보수할 때 필요한 절차 문서**만 모아둡니다.
> "어떤 필드가 있는지", "어떤 파일이 왜 생기는지" 같은 스펙/이론 자료는
> [`docs/reference/`](../reference/README.md)에 따로 있습니다. 전체 문서 지도는
> [docs/INDEX.md](../INDEX.md), 처음 시작할 때는 루트의 [`GUIDE.md`](../../GUIDE.md)를 보세요.

## 상황별로 찾기

| 하려는 일 | 문서 |
|---|---|
| 전체 그림을 먼저 훑고 싶다 | [system_flow_diagram.md](system_flow_diagram.md) |
| CLI로 갈지 웹 마법사로 갈지 정해야 한다 | [cli_vs_web_guide.md](cli_vs_web_guide.md) |
| 관리자 로그인을 켜거나(또는 왜 꺼져 있는지) 확인해야 한다 | [admin_auth_guide.md](admin_auth_guide.md) |
| 정적 대시보드를 Vercel에 배포해야 한다 | [vercel_deploy_guide.md](vercel_deploy_guide.md) |
| 여러 PC에서 이 프로젝트를 오간다 | [multi_pc_data_sync.md](multi_pc_data_sync.md) |
| 발행된 대시보드에서 값을 직접 고치거나 되돌려야 한다 | [dashboard_edit_operations.md](dashboard_edit_operations.md) |

## 문서 목록

| 문서 | 내용 |
|---|---|
| [system_flow_diagram.md](system_flow_diagram.md) | 업로드 → 정제 → 대시보드 기능 → 다운로드/내보내기 → 재사용 전체 흐름도 (Mermaid) |
| [cli_vs_web_guide.md](cli_vs_web_guide.md) | CLI(`main.py`)와 웹 관리자 마법사, 두 워크플로우의 차이와 선택 기준 |
| [admin_auth_guide.md](admin_auth_guide.md) | `/admin` 인증 아키텍처, 실서버(Supabase)/로컬 우회 2모드 동작 방식, 클라우드 배포 시 유의사항 |
| [vercel_deploy_guide.md](vercel_deploy_guide.md) | GitHub 비공개 저장소를 유지한 채 정적 대시보드만 Vercel에 배포하는 절차 |
| [multi_pc_data_sync.md](multi_pc_data_sync.md) | `storage/` gitignore로 인한 멀티 PC 데이터 미표시·Vercel 덮어쓰기 충돌 원인과 안전 운영 규칙 |
| [dashboard_edit_operations.md](dashboard_edit_operations.md) | 대시보드에서 값 직접 수정 → 엑셀 왕복 → 발행까지의 실제 조작 절차와 가드 |

## 이 폴더에 새 문서를 추가할 때

- **운영 절차 문서**(무엇을 어떻게 하라)만 여기에 둡니다. "왜 이렇게 설계했는가"는
  [`docs/plan/`](../plan/ROADMAP.md), "스펙이 무엇인가"는 [`docs/reference/`](../reference/README.md)로
  보내세요.
- 코드가 바뀌면 반드시 같이 갱신합니다 — 이 폴더는 살아있는 문서이며 과거 시점 기록(`docs/logs/`)이
  아닙니다.
- 더 이상 현재 아키텍처와 맞지 않게 되면 삭제하지 말고 [`docs/archive/`](../archive/)로 옮기고
  이 README와 [docs/INDEX.md](../INDEX.md)에서 링크를 제거하세요.
