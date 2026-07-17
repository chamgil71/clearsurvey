# 🎨 테마 시스템 기획서 (테마 팩 + 런타임 적용 + 하드코딩 제거)

세 가지를 함께 다룬다.

- **Part A** — `new-beginnings`의 디자인 시스템 가이드(350개)를 이 프로젝트의 `styles.css` 포맷으로 변환해
  `frontend/src/theme/{name}.css` 10종으로 저장한다. **`theme/toss.css` → `styles.css`로 덮으면 바로
  적용**되는 드롭인 형태.
- **Part B** — 현재 **죽어 있는** 테마 설정 UI(`cfg.theme`)를 살려 어드민에서 프로젝트별 테마를 고를 수
  있게 한다. 동작하지 않던 필드도 전부 구현한다.
- **Part C** — 코드 전반의 **하드코딩된 색상 276건 + 원시 hex 15건**을 테마 토큰으로 치환한다.
  Part B가 성립하려면 반드시 선행돼야 한다 — 하드코딩이 남아 있으면 테마를 바꿔도 그 부분은 안 바뀐다.

### 결정 사항 (2026-07-17)

| 쟁점 | 결정 |
|---|---|
| `ink`/`forest` 프리셋 | **현 상태로 진행** — 찾지 못했고, 기존 5종(`indigo`/`blue`/`emerald`/`rose`/`slate`)도 이름뿐이라 폐기. 테마 팩 10종으로 대체 |
| 런타임 방식 | **프리셋 클래스(①)** — 단 **기존 방식에 얽매이지 않고 확장성 우선** |
| 동작 안 하던 필드 | **구현해서 정리** — 제거가 아니라 실제로 동작시킴 |
| 색상·디자인 규격 | **테마 토큰으로 일원화. 하드코딩 금지, 설정 변경만으로 제어** |
| 타입 | **확장성 고려해 한 벌로 통일** |

> **작성일**: 2026-07-17  
> **대상 범위**: `frontend/` 전용 (백엔드 수정 없음)  
> **관련**: [complete/design-migration-plan.md](complete/design-migration-plan.md)(현 토큰 체계의 출처),
> [complete/chart_export_plan.md](complete/chart_export_plan.md)(PDF의 oklch 이슈 — Part A의 hex 전환과 직결)

---

## 목차

1. [현황 — 무엇이 죽어 있나](#1-현황--무엇이-죽어-있나)
2. [Part A — 테마 팩 10종](#2-part-a--테마-팩-10종)
3. [hex 전환](#3-hex-전환)
4. [Part B — 런타임 테마 적용](#4-part-b--런타임-테마-적용)
5. [변경 파일 목록](#5-변경-파일-목록)
6. [검증 계획](#6-검증-계획)
7. [Open Questions](#7-open-questions)

---

## 1. 현황 — 무엇이 죽어 있나

조사 결과, 테마 관련 코드가 **세 겹으로 죽어 있다**.

| 대상 | 상태 |
|---|---|
| `DashboardThemeCard.tsx` | 어디서도 import 안 함 — **죽은 컴포넌트** |
| `Step2_ConfigEditor.tsx::updateTheme()` | 정의만 있고 넘기는 곳 없음 — **죽은 함수** |
| `cfg.theme` | 런타임에서 읽는 곳 **0곳** — 저장돼도 무시됨 |
| 실데이터 | 6개 프로젝트 `dashboard.json` 전부 `theme` 값 **없음** |

이는 [remaining_improvements.md §3](complete/remaining_improvements.md)이 이미 지적한 문제다. 그때
`layout`(가로 배열 개수)만 `ChartConfigCard`에 연결해 살렸고 `theme`은 남겨뒀다.

### 1-A. 타입이 두 벌로 갈라져 있다

```ts
// types/dashboard.ts — DashboardTheme
preset?, mode?, primaryColor?, borderRadius?, brandTitle?, logoText?, chartPalette?

// DashboardThemeCard.tsx — ThemeConfig (로컬 정의, 위와 불일치)
mode?, primaryColor?, brandTitle?, logoText?
```

`preset`/`borderRadius`/`chartPalette`는 타입에만 있고 UI엔 없다. 반대로 UI의 `primaryColor` 옵션
(`indigo`/`blue`/`emerald`/`rose`/`slate`)은 **이름만 있고 실제 색 값이 코드 어디에도 없다.**
→ Part B에서 타입을 한 벌로 통합한다.

### 1-B. 실제로 테마를 결정하는 곳

`frontend/src/styles.css` 하나뿐이다.

| 줄 | 역할 |
|---|---|
| `@theme inline` (20~61) | CSS 변수 → Tailwind 유틸(`bg-primary` 등) 연결 |
| `:root` (63~97) | 라이트 토큰 |
| `.dark` (99~132) | 다크 토큰 |

차트 색은 `ChartCard.tsx`의 `PALETTE`가 `var(--chart-1)`~`var(--chart-5)`를 순환 참조하므로,
`--chart-N`만 바꾸면 차트·범례·요약 탭이 함께 따라온다.

---

## 2. Part A — 테마 팩 10종

### 2-A. 원본 vs 목표 포맷

| | 원본 (design_system_guides) | 목표 (styles.css) |
|---|---|---|
| 토큰 어휘 | `--bg-base`, `--text-primary`, `--color-primary-500`, `--border-default` | shadcn 규격: `--background`, `--foreground`, `--primary`, `--border` … |
| 색 표기 | hex | (현재) oklch → **hex로 전환**([§3](#3-hex-전환)) |
| 다크 전환 | `[data-theme="dark"]` | **`.dark` 클래스** |
| Tailwind 연결 | 없음 | `@theme inline` 필수 |

> **주의**: `[data-theme]`은 design-migration에서 **의도적으로 걷어낸** 방식이다(`.dark`만 사용).
> 원본을 그대로 옮기면 다크모드가 동작하지 않는다.

### 2-B. 라이트/다크 소스 결정

`toss.md`와 `toss.dark.md`는 한 쌍이 아니라 **각각 독립된 테마**다 — 전자는 `:root`=라이트,
후자는 `:root`=다크(+`[data-theme="light"]` 역오버라이드). `toss.md` 안의 `[data-theme="dark"]`
블록은 6줄짜리 축약본이라 빈약하다.

→ **`{name}.md`의 `:root` → `:root`(라이트)**, **`{name}.dark.md`의 `:root` → `.dark`(다크)** 로 합친다.
양쪽 모두 완전한 토큰셋을 얻는다. 라이트/다크 쌍이 모두 있는 가이드는 **124개**.

### 2-C. 토큰 매핑표

```
목표 토큰                   ← 원본 토큰
────────────────────────────────────────────────
--background               ← --bg-base
--foreground               ← --text-primary
--card                     ← --bg-elevated
--card-foreground          ← --text-primary
--popover                  ← --bg-elevated
--popover-foreground       ← --text-primary
--primary                  ← --color-primary-500
--primary-foreground       ← --text-on-primary
--secondary                ← --bg-subtle
--secondary-foreground     ← --text-primary
--muted                    ← --bg-subtle
--muted-foreground         ← --text-tertiary
--accent                   ← --bg-subtle
--accent-foreground        ← --text-primary
--destructive              ← --color-error-fg
--destructive-foreground   ← --text-on-primary
--border                   ← --border-default
--input                    ← --border-default
--ring                     ← --border-focus
--radius                   ← ⑥ Border Radius 의 --radius-md
--chart-1 ~ --chart-5      ← ⚠ 원본에 없음 — 수작업 도출(2-D)
--sidebar-*  (8개)         ← ⚠ 원본에 없음 — bg/text 토큰에서 파생(2-E)
```

### 2-D. 차트 팔레트 — 수작업 도출

**이 프로젝트의 핵심이 차트인데 원본 가이드 350개 중 차트 팔레트가 있는 건 `datadog`·`binance`
정도뿐이다.** 나머지는 브랜드 색에서 5색을 만들어야 한다.

원칙(수작업 시 지킬 기준):
1. **구분 가능성 우선** — 5색의 색상(hue)이 충분히 벌어질 것. 도넛 조각이 붙어 있어도 구별돼야 한다.
2. **1번은 브랜드 주색** — `--chart-1` = `--color-primary-500`.
3. **error 계열 회피** — 빨강은 "위험" 신호라 중립 카테고리에 쓰면 오독된다.
4. **라이트/다크 각각 조정** — 다크에서는 명도를 올려 대비 확보(원본 `.dark.md`의 톤을 따름).
5. 그 외는 브랜드의 secondary/semantic/뉴트럴에서 톤이 맞는 색을 고른다.

> 기계적 도출(primary/success/warning/error/secondary 그대로)은 규칙은 명확하나 빨강이 섞이고
> 브랜드 톤이 깨져 채택하지 않는다. 단색 그라데이션(primary 램프)은 브랜드 일관성은 최고지만
> 도넛 7조각에서 범례 구분이 불가능해 채택하지 않는다.

### 2-E. 사이드바 토큰

원본에 대응 개념이 없다. 현재 코드도 사이드바를 쓰지 않지만 shadcn 규격이라 채워둔다.

```
--sidebar                  ← --bg-subtle
--sidebar-foreground       ← --text-primary
--sidebar-primary          ← --color-primary-500
--sidebar-primary-foreground ← --text-on-primary
--sidebar-accent           ← --bg-base
--sidebar-accent-foreground← --text-primary
--sidebar-border           ← --border-default
--sidebar-ring             ← --border-focus
```

### 2-F. 대상 15종 (활성) + 나머지 백업

**활성 15종** — 카탈로그에서 이 15개만 UI에 노출한다. 나머지 335개는 생성해 두되 백업.

| 구분 | 테마 |
|---|---|
| 가이드 파생 11 | `toss` · `apple-hig` · `anthropic` · `claude` · `linear` · `vercel` · `duolingo` · `datadog` · `kakao` · `github-primer` · `airbnb` |
| 수작업 이관 2 | `ink`(다크·로즈·샤프) · `forest`(그린) — new-beginnings `themes.json` 출처 |
| 기본 2 | `light` · `dark` (현행 `styles.css` 값) |

> **`toss` 슬러그 충돌**: `themes.json`의 수작업 toss(`#3182f6`)와 가이드 파생 toss(`#0064FF`)가
> 겹친다. **가이드 파생이 이긴다** — 공식 Toss Blue이고 전체 토큰셋을 갖췄다. 수작업 toss는 버린다.
> (new-beginnings도 카탈로그가 레거시를 덮는 순서다.)

### 2-G. new-beginnings 카탈로그 스크립트 이식

`new-beginnings/scripts/build-design-catalog.mjs`(269줄)를 가져와 이 프로젝트 포맷으로 적응시킨다.
350개를 이미 변환해 본 검증된 로직을 재발명하지 않는다.

> **원본 가이드도 이 저장소로 복사했다** — `docs/design/design_system_guides/`(350개, 6.5MB).
> 처음에는 `../../new-beginnings/...` 를 직접 참조했으나, 옆 저장소가 없으면 테마를 재생성할 수
> 없어 자립시켰다. 복사 후 재빌드해 카탈로그가 `generated_at` 한 줄을 빼고 바이트 단위로
> 동일함을 확인했다.

**가져오는 것**
- 섹션 ③⑤⑥⑦⑩(색·spacing·radius·shadow·motion) 파싱
- **frontmatter 활용** (`brand_ko`·`industry`·`mood`·`primary_color_hex`) — 레지스트리 라벨/설명에 그대로 쓴다
- `\r\r\n` 등 비표준 개행 정규화 같은 실전 처리

**바꾸는 것**

| | new-beginnings | 여기 |
|---|---|---|
| 출력 색 | hex | **oklch로 변환**([§3](#3-색-표기--oklch-유지-hex-전환-폐기)) |
| 출력 형태 | JSON only | JSON(런타임) **+ CSS 드롭인**(`theme/{id}.css`) |
| 차트 팔레트 | `synthesizePalette()` 기계 도출 | **골격만 자동, 15종은 수작업 오버라이드**(아래) |
| 노출 | 350개 전부 | **15개만**, 나머지 백업 |

> **`synthesizePalette`를 그대로 쓰지 않는 이유**: 후보에 `error.fg`(빨강)가 들어 있다.
> 중립 카테고리 차트에 빨강이 섞이면 "위험/이상치"로 오독된다([§2-D](#2-d-차트-팔레트--수작업-도출)의
> 원칙 3). 자동 생성값은 **초안**으로 두고, 활성 15종은 `overrides/{id}.json`에서 손으로 확정한다.
> 나머지 335개는 자동값 그대로 둔다(백업이므로).

### 2-G. 산출물 형태

`frontend/src/theme/{name}.css` — 각 파일은 **현재 `styles.css`와 100% 같은 구조**의 완전한 독립
파일이다(`@import "tailwindcss"` + `@theme inline` + `:root` + `.dark` + `@layer base`).

```
cp src/theme/toss.css src/styles.css   # 이러면 즉시 토스 테마
```

각 파일 상단에 출처·브랜드 DNA·수작업으로 정한 차트 팔레트 근거를 주석으로 남긴다.

---

## 3. 색 표기 — oklch 유지 (hex 전환 폐기)

> **2026-07-17 결정 번복.** 초안은 "전부 hex로 통일"이었으나 **폐기**한다. 다행히 A-1을 실행하기
> 전이라 되돌릴 것은 없다 — `styles.css`는 지금도 oklch 76건 / hex 0건이다.

### 왜 번복했나

hex의 근거로 "html2canvas가 oklch를 못 읽어 PDF가 깨진다"를 들었으나, 그 문제는
**`pdfColorFix.ts`가 이미 해결하고 검증까지 끝낸 상태**다([chart_export_plan §10](complete/chart_export_plan.md)).
**이미 값을 치른 문제를 새 결정의 근거로 삼은 것**이 오류였다. hex로 가도 `pdfColorFix`는
`color-mix`(oklab) 잔여 때문에 어차피 남는다 — 즉 hex의 이득은 거의 없다.

반면 oklch를 버리는 비용은 크다:

| | |
|---|---|
| **Tailwind v4** | 기본 팔레트가 oklch. 우리만 hex면 `bg-slate-100`과 `bg-muted`가 다른 색공간이 된다 |
| **shadcn 관례** | 생성기·문서·커뮤니티 예제가 전부 oklch. hex면 붙여넣기가 안 맞는다 |
| **지각 균일성** | 명도(L)를 같게 유지한 채 색상만 바꾸는 등, 테마 파생 작업이 oklch에서만 정확하다 |

### 카탈로그는 빌드 시 oklch로 변환

원본 가이드는 hex다. **빌드 타임에 1회 oklch로 변환**해 저장한다(런타임 비용 0, 색상 변화 없음 —
같은 색의 다른 표기). 이로써 기본 테마와 테마 팩의 표기가 통일된다.

---

## 4. Part B — 런타임 테마 적용

### 4-A. 문제

Part A는 **빌드 타임·앱 전체** 테마다(파일을 갈아끼움). `cfg.theme`은 **런타임·프로젝트별**이다.
둘은 성격이 달라 같은 파일을 쓸 수 없다 — 프로젝트마다 다른 테마를 쓰려면 여러 테마가 동시에
런타임에 존재해야 한다.

### 4-B. 방식 후보

| 안 | 방법 | 평가 |
|---|---|---|
| **① 프리셋 클래스** (권장) | 10종 토큰을 `[data-theme="toss"]` 스코프 블록으로 한 파일에 모으고, `cfg.theme.preset`에 따라 `<html data-theme="toss">` 설정 | 완전한 테마 전환. 다크는 `[data-theme="toss"].dark`로 조합. CSS 용량 증가(테마당 ~40토큰 × 2) |
| ② primary만 주입 | `cfg.theme.primaryColor`를 JS로 인라인 CSS 변수 주입 | 가볍지만 "테마"가 아니라 강조색 하나만 바뀜. 지금 UI가 약속하는 수준 |
| ③ 빌드 타임만 | Part A만 하고 `cfg.theme`·죽은 UI를 **삭제** | 가장 정직. 프로젝트별 테마를 포기 |

> ①은 design-migration이 걷어낸 `data-theme`을 되살리는 셈이라 주의가 필요하다. 다만 그때 없앤
> 이유는 **`.dark`와 중복**이었기 때문이고, 이번엔 `.dark`(명암)와 `data-theme`(브랜드)이 서로
> 다른 축을 담당하므로 중복이 아니다. 이 구분을 주석으로 명시한다.

### 4-C. 권장안 (①)

```
frontend/src/theme/
├── toss.css          ← 드롭인 (styles.css 교체용, :root + .dark)
├── apple-hig.css
├── … (10종)
└── presets.css       ← 런타임용: [data-theme="toss"] { … } 블록 10종 모음
```

- 두 형태는 **같은 토큰 값을 공유**한다. 생성 스크립트 하나로 두 산출물을 만들어 값이 갈라지지 않게 한다.
- `styles.css`는 기본 테마(현행)를 유지하고 `presets.css`를 import.
- `cfg.theme.preset`이 없으면 기본 테마 — 기존 프로젝트 무영향(하위 호환).

### 4-D. 타입 통합

`DashboardThemeCard.tsx`의 로컬 `ThemeConfig`를 지우고 `types/dashboard.ts`의 `DashboardTheme`으로
일원화한다. 실제 동작하지 않는 필드(`brandTitle`/`logoText`/`borderRadius`)는 **UI에서 제거하거나
실제로 구현**한다 — 둘 중 하나. 동작하지 않는 입력란을 남겨두면 안 된다([§7](#7-open-questions)).

---

## 4-E. 확장성 설계 — 350종으로 늘어나도 견디게

"기존 방식에 얽매이지 말 것"에 대한 답. 지금 10종이지만 원본이 350종이고, 언제든 늘어난다.
그래서 **테마를 코드가 아니라 데이터로 취급**한다.

### 원칙 1 — 테마 목록은 코드에 박지 않는다

프리셋 드롭다운을 `<option value="toss">` 식으로 하드코딩하면 테마 추가할 때마다 UI를 고쳐야 한다.
→ **`theme/registry.ts` 한 곳**에서 목록·라벨·설명을 내보내고, UI는 그것을 `map()` 한다.

```ts
// theme/registry.ts — 테마 추가 시 여기만 건드린다
export interface ThemePreset {
  id: string;          // "toss"  — data-theme 값이자 파일명
  label: string;       // "토스"
  description: string; // "파랑, 플랫, 라운드"
  source: string;      // 출처 가이드 경로 (추적용)
}
export const THEME_PRESETS: ThemePreset[] = [ … ];
export const DEFAULT_THEME_ID = "clearsurvey";
```

`DashboardTheme["preset"]`은 `string`으로 두되 런타임에 registry로 검증한다(모르는 값이면 기본 테마).
유니온 타입으로 좁히면 테마 추가가 타입 변경이 되어 확장을 막는다.

### 원칙 2 — 토큰 세트를 한 곳에서 정의한다

토큰 이름이 `styles.css`·`theme/*.css`·`@theme inline`·매핑표 네 군데에 흩어지면 하나 추가할 때
전부 손봐야 하고, 빠뜨리면 조용히 깨진다.
→ **`theme/tokens.ts`에 토큰 이름 목록을 두고**, 변환 스크립트와 검증 테스트가 이를 공유한다.
테마 파일이 토큰을 하나라도 빠뜨리면 **테스트가 잡는다**(§6).

### 원칙 3 — 생성물과 손질을 분리한다

`scripts/build-themes.mjs`가 가이드 md → css 골격을 뽑고, **차트 팔레트만 사람이 정한다**(2-D).
수작업 값은 스크립트가 덮어쓰지 않도록 `theme/overrides/{id}.json`에 분리 보관한다.

```
가이드 md ──(스크립트)──▶ 골격 토큰 ──┐
                                    ├──▶ theme/{id}.css + presets.css
theme/overrides/{id}.json ──────────┘   (차트 팔레트 등 수작업)
```

→ 350종으로 늘려도 스크립트를 다시 돌리면 되고, 손으로 정한 값은 보존된다.

### 원칙 4 — 두 산출물은 한 소스에서

`theme/{id}.css`(드롭인)와 `presets.css`(런타임)는 **같은 토큰 값**을 써야 한다. 손으로 두 번 쓰면
반드시 갈라진다. → 스크립트가 둘을 동시에 생성하고, 값 일치를 테스트로 고정한다.

---

## 4-F. 동작하지 않던 필드 구현

| 필드 | 현재 | 구현 방안 |
|---|---|---|
| `preset` | 타입에만 존재 | **신규 핵심** — `<html data-theme>` 반영 |
| `primaryColor` | 이름만(`indigo` 등), 색 값 없음 | **폐기** — 테마 프리셋이 대체한다. 프리셋 안에서 primary가 정해지므로 별도 강조색은 개념 충돌 |
| `mode` | 미반영 | 프로젝트 기본 명암(라이트/다크). 사용자의 로컬 토글(`localStorage`)이 있으면 그쪽 우선 |
| `logoText` | 미반영 | 헤더의 "ClearSurvey" 텍스트를 대체 |
| `brandTitle` | 미반영 | 헤더 로고 옆 보조 텍스트 + `<title>` |
| `borderRadius` | 미반영 | `--radius` 오버라이드(테마 기본값을 덮음) |
| `chartPalette` | 미반영 | **폐기** — 차트 색은 테마의 `--chart-1~5`가 담당. 별도 지정은 테마와 충돌 |

> `primaryColor`·`chartPalette` 폐기는 "구현해서 정리"의 일부다 — 테마 프리셋과 **개념이 겹치는**
> 필드를 남기면 둘 중 뭐가 이기는지 모호해진다. 색은 테마 한 곳에서만 결정한다(원칙: 단일 출처).

---

## 4-G. Part C — 하드코딩 제거

### 실측 (2026-07-17)

```
Tailwind 팔레트 클래스 (bg-slate-800, text-amber-500 …)   276건 / 9개 파일
원시 hex (#fef08a, #2563eb …)                              15건
인라인 rgba(0,0,0,.05)                                      4건
```

| 파일 | 건수 | 비고 |
|---|---|---|
| `manager/config/ChartConfigCard.tsx` | 98 | design-migration이 안 건드린 파일 |
| `manager/config/ColumnConfigTab.tsx` | 67 | 〃 |
| `dashboard/GuideDrawer.tsx` | 40 | |
| `manager/Step2_ConfigEditor.tsx` | 31 | |
| `manager/Step3_RunDeploy.tsx` | 17 | |
| `routes/admin.tsx` | 14 | |
| `routes/login.tsx` | 6 | |
| 기타 | 3 | |

**공개 대시보드(`ChartCard`·`SummaryTab`·`DataTable`·`KpiRow`·`FilterBar`)는 이미 0건**으로 깨끗하다
— design-migration Phase 2의 성과다. 남은 건 **어드민/매니저 쪽**이며, 그쪽은 Phase 1이
`admin.tsx`·`GuideDrawer`만 다루고 `config/*` 카드들은 손대지 않은 채 끝났다.

### 치환 규칙

```
bg-white          → bg-card          (또는 bg-background)
bg-slate-50/100   → bg-muted
text-slate-800/900→ text-foreground
text-slate-400/500→ text-muted-foreground
border-slate-100/200 → border-border
text-blue-600     → text-primary
text-red-400/600  → text-destructive
bg-red-50         → bg-destructive/10
text-amber-500    → text-primary  (아이콘 강조 — 테마 주색을 따르게)
rgba(0,0,0,.05)   → var(--border)  (차트 그리드 stroke)
```

### 판단이 필요한 예외

- **`DataTable`의 검색 하이라이트** (`#fef08a`/`#1e293b`): 형광펜 노랑은 "강조" 관용색이라 테마마다
  바뀌면 오히려 어색할 수 있다. → **토큰 신설**(`--highlight`/`--highlight-foreground`)로 테마가
  정할 수 있게 하되, 기본값은 현재 색을 유지한다.
- **`DetailPanel`의 PDF 인라인 스타일** (`#ffffff`/`#111`/`#2563eb`): 이건 **화면이 아니라 인쇄물**이다.
  PDF는 항상 흰 배경·검은 글씨여야 읽히므로(다크 테마를 그대로 인쇄하면 안 됨) **의도적 하드코딩**이다.
  → 유지하되 "인쇄용 고정값"이라는 주석을 남긴다.

---

## 5. 변경 파일 목록

### Part A — 테마 팩 (신규)

| 파일 | 내용 |
|---|---|
| `frontend/scripts/build-themes.mjs` | new-beginnings 스크립트 이식 — 가이드 md 350개 → 카탈로그 + 드롭인 CSS. hex→oklch 변환 포함 |
| `frontend/src/theme/catalog.json` | 350종 전체 (생성물, 활성 15 + 백업 335) |
| `frontend/src/theme/{15종}.css` | 활성 테마 드롭인 (`:root` + `.dark`) |
| `frontend/src/theme/presets.css` | 런타임용 `[data-theme="{id}"]` 블록 (활성 15종만) |
| `frontend/src/theme/registry.ts` | 활성 목록·라벨·설명 (**테마 추가 시 유일한 수정 지점**). frontmatter의 `brand_ko`·`mood` 활용 |
| `frontend/src/theme/tokens.ts` | 토큰 이름 단일 정의 (스크립트·테스트 공유) |
| `frontend/src/theme/overrides/{id}.json` | 차트 팔레트 수작업 값 — 스크립트가 덮지 않음 |
| `frontend/src/theme/README.md` | 사용법, 토큰 매핑표, 차트 팔레트 근거, 출처 |
| `frontend/src/theme/__tests__/theme.test.ts` | 토큰 누락·두 산출물 값 불일치·oklch 형식 검증 |

### Part B — 런타임 (수정)

| 파일 | 내용 |
|---|---|
| `frontend/src/types/dashboard.ts` | `DashboardTheme` 통일 — `primaryColor`·`chartPalette` 폐기, `preset` 추가 |
| `frontend/src/routes/index.tsx` | `cfg.theme` → `<html data-theme>`·`.dark`·`--radius`·로고/타이틀 반영 |
| `frontend/src/components/manager/config/DashboardThemeCard.tsx` | 로컬 `ThemeConfig` 제거, registry 기반 프리셋 UI |
| `frontend/src/components/manager/Step2_ConfigEditor.tsx` | `updateTheme` 연결(현재 죽어 있음) |
| `frontend/src/lib/dashboardConfig.ts` | 구 `primaryColor`/`chartPalette` 마이그레이션(무시하고 버림) |

### Part C — 하드코딩 제거 (수정)

| 파일 | 건수 |
|---|---|
| `manager/config/ChartConfigCard.tsx` | 98 |
| `manager/config/ColumnConfigTab.tsx` | 67 |
| `dashboard/GuideDrawer.tsx` | 40 |
| `manager/Step2_ConfigEditor.tsx` | 31 |
| `manager/Step3_RunDeploy.tsx` | 17 |
| `routes/admin.tsx` · `routes/login.tsx` · 기타 | 23 |
| `dashboard/DataTable.tsx` | `--highlight` 토큰 신설 |
| `dashboard/ChartCard.tsx` | `rgba(0,0,0,.05)` → `var(--border)` |

---

## 6. 검증 계획

### 자동
```bash
cd frontend
bun run --bun tsc --noEmit
bun x vitest run          # 기준선 173개
bun run build
```

### 테마 무결성 테스트 (신규 — 확장성의 핵심)

테마가 10종→350종으로 늘어도 사람이 눈으로 검사할 수 없다. **기계가 잡게 한다.**

- 모든 테마 파일이 `tokens.ts`의 토큰을 **하나도 빠뜨리지 않았는지**(빠지면 그 색만 조용히 기본값으로
  떨어져 발견이 어렵다).
- `theme/{id}.css`와 `presets.css`의 **같은 토큰 값이 일치**하는지(두 산출물이 갈라지는 것 방지).
- `registry.ts`의 id ↔ 실제 파일 존재 **양방향 일치**.
- 모든 색이 **hex 형식**인지(oklch 혼입 방지 — PDF 이슈 재발 차단).
- `--chart-1~5`가 **서로 다른 값**인지(복붙 실수 차단).

### 수동 (Playwright)

- **하드코딩 제거(C)**: 치환 전후 스크린샷 비교 — **시각적으로 동일해야 한다.** 달라지면 매핑 오류.
- **테마 팩 드롭인(A)**: `cp theme/toss.css styles.css` → 브랜드 색이 실제로 바뀌는지.
  10종 각각 스크린샷 확인(색이 안 바뀌면 매핑 누락).
- **차트 팔레트**: 도넛 5조각 이상 차트에서 5색이 구분되는지, 범례 색이 조각과 일치하는지.
- **다크모드**: 각 테마에서 `.dark` 토글 시 대비 확보 여부.
- **PDF**: hex 전환 후에도 정상인지(`%PDF-`, 색 깨짐 없음) — `pdfColorFix`가 hex 환경에서
  `color-mix` 잔여를 처리하는지 확인.
- **Part B**: 어드민에서 프리셋 변경 → 공개 대시보드 반영. ⚠ 환경 제약은 [§8](#8-남은-확인-사항) 참조.

---

## 7. 진행 순서

Part C → A → B 순으로 간다. **하드코딩이 남아 있으면 테마를 바꿔도 안 바뀌는 부분이 생기므로
Part C가 선행**해야 하고, 런타임 전환(B)은 테마 팩(A)이 있어야 고를 대상이 생긴다.

| 단계 | 내용 | 상태 |
|---|---|---|
| **C-1** | 하드코딩 276건 → 토큰 치환 (어드민 6개 파일) | ✅ `66e0c3d` |
| **C-2** | `--success`/`--warning`/`--highlight` 신설, `rgba` → `var(--border)` | ✅ `717c4d8` |
| ~~**A-1**~~ | ~~`styles.css` oklch → hex~~ | ❌ **폐기**([§3](#3-색-표기--oklch-유지-hex-전환-폐기)) |
| **A-2** | 카탈로그 스크립트 이식 + `tokens.ts`·`registry.ts` + hex→oklch 변환 | 예정 |
| **A-3** | 15종 확정(차트 팔레트 수작업 오버라이드) + 드롭인 CSS + 검증 테스트 | 예정 |
| **B-1** | 타입 통일 + `cfg.theme` 런타임 반영 | 예정 |
| **B-2** | registry 기반 설정 UI 연결 | 예정 |

C-1·C-2 결과: 하드코딩 **276 → 33건**. 남은 33건은 의도적 유지다 —
`GuideDrawer.GROUP_COLORS` 28건(범주형 배지 7색)과 `Step3` 터미널 로그 5건
(`bg-black` 고정 배경이라 테마 토큰을 쓰면 라이트 테마에서 대비가 사라진다).

각 단계마다 [§6 검증](#6-검증-계획)의 자동 검증을 통과시킨다. C는 **시각적 무변화**가 목표다
(토큰 치환이 색을 바꾸면 매핑이 틀린 것).

---

## 8. 남은 확인 사항

> [!NOTE]
> **`ink`/`forest`는 찾지 못해 현 상태로 진행한다**(결정됨). 기존 5종
> (`indigo`/`blue`/`emerald`/`rose`/`slate`)은 이름만 있고 색 값이 없어 **폐기**하고 테마 팩 10종으로
> 대체한다. 나중에 실물이 나타나면 `theme/overrides/`에 추가하면 된다.

> [!WARNING]
> **어드민 설정 UI는 이 환경에서 육안 검증이 불가능하다.** `storage/projects/`에 원본이 없어
> `/api/projects/{name}/config`가 404를 반환한다(이번 작업과 무관한 환경 제약). Part B는 테스트로
> 계약을 고정하고, 육안 확인은 프로젝트 원본이 있는 환경에서 별도로 해야 한다.

> [!WARNING]
> **`data-theme` 재도입은 design-migration이 걷어낸 것을 되살리는 셈이다.** 그때 없앤 이유는
> `.dark`와 **중복**이었기 때문이고, 이번엔 `.dark`(명암)와 `data-theme`(브랜드)이 서로 다른 축을
> 담당하므로 중복이 아니다. 이 구분을 `styles.css`와 `index.tsx` 주석에 명시해 다음 사람이 다시
> 걷어내지 않게 한다.
