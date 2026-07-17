# 디자인 시스템 가이드

`design_system_guides/` 는 브랜드 350종의 디자인 시스템을 정리한 참조 문서다.
**테마 팩의 원본**이며, [`frontend/scripts/build-themes.mjs`](../../frontend/scripts/build-themes.mjs)
가 이를 읽어 [`frontend/src/theme/`](../../frontend/src/theme) 의 카탈로그와 CSS 를 만든다.

```
docs/design/design_system_guides/{id}.md        ← 라이트 우선 (:root = 라이트)
docs/design/design_system_guides/{id}.dark.md   ← 다크 우선  (:root = 다크)
                    │
                    ▼  bun scripts/build-themes.mjs
frontend/src/theme/catalog.json   (230종: 활성 15 + 백업 215)
frontend/src/theme/{id}.css       (활성 15 — styles.css 교체용 드롭인)
frontend/src/theme/presets.css    (활성 15 — 런타임 [data-theme] 블록)
```

## 출처

`C:\ai\new-beginnings\design\design_system_guides` 에서 가져왔다(2026-07-17).
처음에는 그 경로를 직접 참조했으나, 옆 저장소가 없으면 테마를 재생성할 수 없어
**이 저장소로 복사해 자립시켰다.** 복사 후 재빌드해 카탈로그가 `generated_at` 한 줄을 빼고
바이트 단위로 동일함을 확인했다.

## 파일 구조

각 가이드는 12개 절로 이루어진다. 빌드가 쓰는 것은 **③ 컬러 시스템**과 **⑥ Border Radius**,
그리고 frontmatter(`brand_ko`·`signature_keyword`·`mood`)뿐이다. 나머지(타이포그래피·컴포넌트
가이드·Anti-patterns 등)는 사람이 읽는 참조 자료다.

```yaml
---
brand: Toss
brand_ko: 토스              # → 테마 라벨
slug: toss
signature_keyword: ...      # → 테마 설명
---
### ③ 컬러 시스템 (CSS 변수)   ← 빌드가 파싱
### ⑥ Border Radius            ← 빌드가 파싱 (--radius-md)
```

> 가이드의 토큰 어휘(`--bg-base`/`--text-primary`/`--color-primary-500`)는 이 프로젝트의
> shadcn 토큰과 다르다. 매핑은 [`frontend/src/theme/README.md`](../../frontend/src/theme/README.md) 참조.

## 새 테마를 노출하려면

1. `frontend/scripts/build-themes.mjs` 의 `ACTIVE` 배열에 id 추가
2. `bun scripts/build-themes.mjs`
3. 차트 팔레트가 어색하면 `frontend/src/theme/overrides/{id}.json` 으로 확정
   (자동 도출은 초안이다 — 근거는 theme README 참조)
