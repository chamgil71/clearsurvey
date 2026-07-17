# 테마 시스템

이 폴더는 **생성물**이다. `{id}.css` / `presets.css` / `catalog.json` 을 직접 수정하지 말 것 —
다음 빌드에서 덮어써진다. 손으로 정할 값은 [`overrides/`](#차트-팔레트-수작업-오버라이드)에 둔다.

계획: [`docs/plan/theme_system_plan.md`](../../../docs/plan/theme_system_plan.md)

## 테마 바꾸기

```bash
cp src/theme/toss.css src/styles.css   # 앱 전체가 토스 테마로
```

`{id}.css` 는 현행 `styles.css` 와 **같은 구조의 완전한 독립 파일**이다
(`@import "tailwindcss"` + `@theme inline` + `:root` + `.dark` + `@layer base`).
되돌리려면 `cp src/theme/light.css src/styles.css`.

## 다시 생성하기

```bash
bun scripts/build-themes.mjs
```

원본 가이드는 **이 저장소 안**에 있다 — [`docs/design/design_system_guides/`](../../../docs/design/design_system_guides)
(350개). 다른 저장소에 의존하지 않으므로 어디서든 재생성된다.

> `catalog.json`(약 720KB)은 생성물이지만 **커밋한다.** `registry.ts` 가 import 하므로 앱 빌드에
> 필요하고, 커밋해 두면 CI·Vercel 이 테마 빌드를 먼저 돌리지 않아도 된다.
> 가이드를 고쳤다면 스크립트를 다시 돌려 생성물을 함께 커밋할 것.

## 구성

| 파일 | 역할 |
|---|---|
| `catalog.json` | 230종 전체. 활성 15 + 백업 215. **단일 출처** |
| `{id}.css` × 15 | 드롭인 (`styles.css` 교체용) |
| `presets.css` | 런타임용 `[data-theme="{id}"]` 블록. `.dark` 조합은 `[data-theme="{id}"].dark` |
| `tokens.ts` | 토큰 이름 단일 정의 — 스크립트·테스트가 공유 |
| `registry.ts` | 활성 목록·라벨 (UI 가 참조) |
| `overrides/{id}.json` | 차트 팔레트 수작업 값 |

## 활성 15종

| id | 출처 |
|---|---|
| `light` · `dark` | 현행 `styles.css` (기본) |
| `toss` · `apple-hig` · `anthropic` · `claude` · `linear` · `vercel` · `duolingo` · `datadog` · `kakao` · `github-primer` · `airbnb` | 디자인 가이드 파생 |
| `ink` · `forest` | `new-beginnings/public/data/themes.json` 수작업 이관 |

나머지 215종은 `catalog.json` 에만 있다. 노출하려면 `scripts/build-themes.mjs` 의 `ACTIVE` 에 추가.

## 원본 → 이 프로젝트 매핑

원본 가이드는 토큰 어휘가 다르다(`--bg-base`/`--text-primary`/`--color-primary-500`).
`build-themes.mjs::mapToShadcn()` 이 shadcn 토큰으로 옮긴다.

```
--background  ← --bg-base          --primary     ← --color-primary-500
--foreground  ← --text-primary     --destructive ← --color-error-fg
--card        ← --bg-elevated      --success     ← --color-success-fg
--muted       ← --bg-subtle        --warning     ← --color-warning-fg
--border      ← --border-default   --ring        ← --border-focus
--radius      ← --radius-md
```

라이트는 `{id}.md` 의 `:root`, 다크는 **`{id}.dark.md` 의 `:root`** 를 쓴다.
두 파일은 한 쌍이 아니라 각각 독립 테마(라이트 우선 / 다크 우선)이며, `{id}.md` 안의
`[data-theme="dark"]` 블록은 6줄짜리 축약본이라 쓰지 않는다.

색은 원본이 hex, 여기는 **oklch** 다(Tailwind v4 / shadcn 관례). 빌드 시 1회 변환한다 —
같은 색의 다른 표기이므로 색상 변화는 없다. 변환기는 `scripts/lib/color.mjs`,
왕복 검증은 `scripts/__tests__/color.test.ts`.

## 차트 팔레트 (수작업 오버라이드)

**자동 도출값은 초안이다.** 브랜드 팔레트에서 기계적으로 5색을 뽑으면 차트에 부적합한 색이 섞인다.
실제로 토스 초안은 `--chart-4` 로 `#191F28`(본문 텍스트용 네이비)을 골라 도넛 조각이 검게 나왔고,
`--chart-5` 는 `--chart-1` 과 같은 파랑 계열이라 구분이 되지 않았다.

활성 15종은 `overrides/{id}.json` 으로 확정한다:

```json
{
  "chart": {
    "light": ["#0064FF", "#00A85A", "#FF9500", "#8B5CF6", "#00C2D1"],
    "dark":  ["#2D82FF", "#22C55E", "#FBBF24", "#A78BFA", "#22D3EE"]
  }
}
```

hex 로 적으면 빌드가 oklch 로 변환한다. `dark` 를 생략하면 `light` 를 쓴다.

### 고를 때 지키는 기준

1. **구분 가능성 우선** — 5색의 색상(hue)이 충분히 벌어질 것. 붙어 있는 도넛 조각도 구별돼야 한다.
2. **1번은 브랜드 주색** — `--chart-1` = 그 브랜드의 primary.
3. **빨강 회피** — "위험/이상치" 신호라 중립 카테고리에 쓰면 오독된다.
4. **텍스트/배경용 색 회피** — 네이비·회색은 조각으로 쓰면 죽는다(위 토스 사례).
5. **다크는 명도를 올린다** — 어두운 배경 위 대비 확보.
