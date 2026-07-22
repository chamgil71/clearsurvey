# ClearSurvey 프로젝트 프로필 (.claude/reference/PROJECT_PROFILE.md)

> [!IMPORTANT]
> `.claude/` 폴더(reference/orchestration.md, reference/profiles/, rules/, skills/)는 이 워크스페이스의
> **여러 프로젝트가 공유하는 범용 AI 거버넌스 프레임워크**입니다. `reference/profiles/standard.md`·
> `reference/profiles/enterprise.md`에 `invest-platform`, `myassets`, `mymap`, `kis-trading` 등 다른
> 프로젝트가 예시로 명시되어 있는 데서 알 수 있듯, RAG/벡터DB/LLM 토큰비용/SQL 레포지토리 등을
> 전제로 설계되어 있습니다. ClearSurvey는 **DB도 RAG/LLM 파이프라인도 없는** 결정론적 데이터
> 정제 도구이므로, 프레임워크 원본을 이 프로젝트에 맞춰 직접 뜯어고치지 않고 이 어댑터 문서로
> "무엇을 적용하고 무엇을 건너뛸지"만 규정합니다. 원본 파일은 다른 프로젝트와의 재사용성을 위해
> 그대로 둡니다.

---

## 1. 적용 프로필: **Standard** (`.claude/reference/profiles/standard.md`)

**근거**: `frontend/` + `backend/` + `docs/` + `storage/` 4계층 구조를 이미 갖춘 정식 프로젝트.
`prototype`(단일 HTML/스크립트 수준)도, `enterprise`(실거래·금융 리스크)도 해당하지 않음.

---

## 2. 이 프로젝트에는 없는 것 — 스킵할 단계·지식 문서

| 프레임워크가 가정하는 것 | ClearSurvey 현실 | 처리 |
|---|---|---|
| RAG 파이프라인(청킹/임베딩/벡터DB) | 없음 — pandas/openpyxl 기반 결정론적 정제 엔진 | `.claude/reference/orchestration.md`의 개발 단계(RAG 파트), `quality-gate` 스킬의 Eval(정확도/환각률 측정) 단계 전체 스킵 |
| LLM API 호출·토큰 비용 | 없음 — 이 코드베이스는 LLM API를 전혀 호출하지 않음 | `ai-governance` 스킬의 토큰 비용 계산식·Rate Limiter 섹션 스킵. `.claude/skills/llm-pipeline/SKILL.md` 전체 미사용 |
| SQL 데이터베이스 / SQLAlchemy ORM | 없음 — `config.yaml`(YAML) + `dashboard.json`(JSON) + `output/*.xlsx` 파일 기반 저장만 존재 | `.claude/skills/architecture-design/layer-patterns.md`의 `Router→Service→Repository→Database`는 이 프로젝트에서 `app/main.py → engine/pipeline.py → transforms/ → 파일시스템`으로 치환해서 읽을 것. `.claude/rules/database_tuning.md` 전체 미사용 |
| `storage/{data,logs,artifacts,cache,exports}` 5분류 | `storage/raw/`(원본 엑셀) + `storage/projects/{name}/{config.yaml, dashboard.json, output/}` | `.claude/rules/storage.md`의 5분류 대신 `AGENTS.md` §1의 실제 경로 규칙을 따를 것 |
| `docs/spec.md` 단일 SSOT + `docs/worklog.md` | `docs/plan/*.md`(설계 의도, `prd.md` 포함) + `docs/guides/*.md`(운영 가이드) + `docs/logs/worklog.md`(마일스톤 로그) + `docs/CHANGELOG.md`(변경 이력) — `docs/INDEX.md`가 전체 색인 | `.claude/reference/orchestration.md` §0의 SSOT 규정, `requirements`/`release` 스킬이 참조하는 `docs/spec.md`·`docs/worklog.md` 경로는 위 구조로 치환해서 읽을 것 |

---

## 3. 이 프로젝트에 그대로 적용되는 것

- `.claude/rules/development_style.md`의 Python 스타일(PEP8, `pathlib.Path`, Pydantic v2, `snake_case`/`PascalCase`) — 이미 준수 중
- `.claude/rules/backend_fastapi.md`의 `Depends` 기반 DI, `async def` 엔드포인트 — 적용됨
- `.claude/rules/frontend_react.md`의 함수형 컴포넌트·Hooks 원칙 — 적용됨
- `.claude/skills/quality-gate/testing-patterns.md` §1 pytest AAA 패턴 (§2 "LLM 비결정적 출력 semantic assertion"은 해당 없음 — 이 프로젝트 테스트는 전부 결정론적 값 assertion)
- `release` 스킬의 4대 게이트 중 **Gate 1(테스트)**·**Gate 3(비밀값/라이선스 스캔)** 은 그대로 적용. **Gate 2**(`import-linter`/`madge` 순환참조 검사)는 이 규모에서 미도입. **Gate 4**(문서 동기화)는 `docs/spec.md` 대신 `docs/CHANGELOG.md` + 관련 `docs/plan/*.md` 갱신 여부로 대체

---

## 4. ClearSurvey 실측 기준 예외 규칙

- **200라인 파일 길이 제한** (`.claude/reference/profiles/standard.md`, `.claude/rules/development_style.md`): 신규 파일 작성 시 권장 지침으로만 적용. `backend/app/main.py`(~1200줄) 등 이미 동작 중인 기존 대형 파일을 이 규칙 때문에 소급 분할하지 않는다 — 정상 동작하는 레거시 코드를 규칙 준수 목적만으로 리팩토링하지 말 것.
- **release 스킬의 릴리즈 게이트**: 이 프로젝트는 아직 SemVer 태깅이나 스테이징 배포 파이프라인이 없음(로컬 실행 + 수동 `git push` 기반, Vercel 자동배포만 존재). "4대 게이트"는 PR/머지 전 자가 점검 체크리스트 정도로만 참고하고, `deploy_ready` JSON 필드 등 형식적 보고는 강제하지 않는다.
- **strategy 스킬의 PERT/CPM 일정 리스크 산출**: 1인 사이드 프로젝트 규모에서는 과도한 형식주의 — 실제로 요구되면 사용, 아니면 생략 가능.

---

## 5. 진짜 권위 있는 문서 (Authoritative Source)

`.claude/` 프레임워크의 일반론과 이 프로젝트의 실제 규칙이 충돌하면 **아래 문서가 항상 우선**한다.

1. **`AGENTS.md`**(루트, §0~§6) — ClearSurvey 전용 강제 규칙(경로 규칙, NaN 직렬화 방어, 프론트엔드 컴포넌트 설계, 단위 테스트 정책 등). `.claude/` 프레임워크보다 항상 우선.
2. **`docs/INDEX.md`** — 문서 체계 전체 색인 (plan/guides/logs/archive 분류 기준).
3. **`docs/CHANGELOG.md`** — 최신 변경 이력. `.claude/reference/orchestration.md`가 말하는 "worklog" 갱신 요구사항의 실질적 대체재(2026-07 이후 실제 관행).
