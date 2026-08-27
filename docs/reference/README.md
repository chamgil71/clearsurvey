# ClearSurvey 참고 자료 (Reference)

> 이 폴더는 **스펙·필드·이론 참고 자료**를 모아둡니다. "지금 무엇을 어떻게 해야 하는가"는
> [`docs/guides/`](../guides/README.md)의 운영 절차 문서를 보세요. 이 폴더는 필요할 때
> 찾아보는 사전(dictionary)에 가깝습니다 — 코드가 바뀌면 갱신은 되지만, 순서를 따라
> 실행하는 문서는 아닙니다.

## 문서 목록

| 문서 | 내용 |
|---|---|
| [config_guide.md](config_guide.md) | `config.yaml` 전체 필드 스키마 + Excel Config 시트 10열 정의 + `transform` 전체 목록 |
| [project_files_lifecycle.md](project_files_lifecycle.md) | `storage/projects/{name}/` 아래 각 파일이 언제·왜 생기고 누가 읽고 쓰는지 |
| [design-system-guide.md](design-system-guide.md) | Tailwind v4 + shadcn/ui 디자인시스템 이론과 `legacy-dashboard.css` 마이그레이션 경험, AI 프롬프트 템플릿 |

## 관련 참고 폴더

- [`docs/design/`](../design/README.md) — 브랜드 350종 디자인 시스템 가이드(테마 팩 원본 데이터)도
  같은 성격의 참고 자료이지만, 규모가 커서 별도 폴더로 유지합니다.
- [`docs/plan/`](../plan/ROADMAP.md) — "왜 이렇게 설계했는가"는 스펙이 아니라 기획 문서라 여기가 아니라
  `plan/`에 있습니다.
