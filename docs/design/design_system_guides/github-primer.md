---
brand: GitHub Primer
brand_ko: 깃허브 프라이머
slug: github-primer
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - dev-tools

color_tone: neutral
primary_color_hex: "#0969DA"
primary_color_name: "Primer Blue 5"
mood:
  - 정밀
  - 기능적
  - 코드 친화적

font_category: sans-serif
font_primary: -apple-system stack
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2024
signature_keyword: "라이트/다크/dimmed 6테마와 functional scale의 코드 친화 시스템"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F6F8FA", "border": "#D0D7DE", "fg": "#1F2328", "fg_muted": "#656D76", "accent": "#0969DA" },
    "dark":  { "bg": "#0D1117", "surface": "#161B22", "border": "#30363D", "fg": "#E6EDF3", "fg_muted": "#7D8590", "accent": "#2F81F7" }
  }

hero_html: |
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:#24292F;color:#fff;padding:8px 14px;font-size:13px;display:flex;align-items:center;gap:10px;">
      <span style="font-weight:700;">GitHub</span>
      <span style="opacity:0.7;font-size:12px;">Pull requests</span>
    </div>
    <div style="padding:14px 16px;">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;font-size:14px;">
        <span style="font-size:16px;">📁</span>
        <span style="color:var(--card-fg-muted);">shopify /</span>
        <strong>polaris</strong>
        <span style="margin-left:auto;background:#DDF4FF;color:var(--card-accent);padding:0 7px;height:18px;line-height:18px;border-radius:9999px;font-size:11px;font-weight:500;">Public</span>
      </div>
      <div style="border:1px solid var(--card-border);border-radius:6px;overflow:hidden;font-size:12px;">
        <div style="background:var(--card-surface);padding:6px 12px;border-bottom:1px solid var(--card-border);font-weight:600;display:flex;align-items:center;gap:6px;">📄 README.md</div>
        <div style="padding:10px 12px;font-family:ui-monospace,'SF Mono',Menlo,monospace;color:var(--card-fg-muted);line-height:1.5;font-size:11px;">## Polaris<br/>Shopify's design system.</div>
      </div>
    </div>
    <button style="background:#1F883D;color:#fff;border:1px solid rgba(31,35,40,0.15);border-radius:6px;padding:5px 12px;font-size:13px;font-weight:500;font-family:inherit;align-self:flex-start;margin:0 16px 14px;box-shadow:0 1px 0 rgba(31,35,40,0.10),inset 0 1px 0 rgba(255,255,255,0.20);">Code ▾</button>
  </div>

sources:
  - https://primer.style/
  - https://primer.style/foundations/color/overview
  - https://primer.style/foundations/typography
---

### ① 브랜드 DNA
- **브랜드명**: GitHub Primer Design System
- **한 줄 정체성**: 개발자가 코드 옆에서 매일 살아내는, 정밀한 다크/라이트 어드민 시스템
- **공식 디자인 철학**: "Designed for GitHub — fast, accessible, native to the developer's workflow"
- **시그니처 요소 1개**: 6단계 다크 테마(dark default/dimmed/high-contrast 등) + 8단계 functional scale 기반의 정교한 토큰 구조

### ② 톤 & 무드
- **핵심 키워드 3개**: 정밀, 기능적, 코드 친화적
- **무드 설명**: 거의 grayscale에 GitHub 시그니처 그린/블루가 점처럼 박힌다. 데이터 밀도가 높고 모노스페이스 코드와 함께 살아도 어색하지 않다.
- **비주얼 스타일**: 모던 미니멀 (정보 위계 우선)
- **밀도(Density)**: Compact — 이슈, 코드뷰, 액션 등 정보량이 많은 화면
- **모서리 성향**: Soft (6px 기본)
- **평면성**: Flat — 거의 그림자 없음, border와 배경 톤 차이로 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Primer Blue (accent) */
  --color-primary-50:  #DDF4FF;  /* blue-0 */
  --color-primary-100: #B6E3FF;  /* blue-1 */
  --color-primary-200: #80CCFF;  /* blue-2 */
  --color-primary-300: #54AEFF;  /* blue-3 */
  --color-primary-400: #218BFF;  /* blue-4 */
  --color-primary-500: #0969DA;  /* blue-5 — accent */
  --color-primary-600: #0550AE;  /* blue-6 */
  --color-primary-700: #033D8B;
  --color-primary-800: #0A3069;
  --color-primary-900: #002155;

  /* Secondary - GitHub Green */
  --color-secondary-500: #1A7F37;  /* success bold */

  /* Neutral - Primer scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F6F8FA;  /* canvas-subtle */
  --color-neutral-100:  #EAEEF2;  /* border default */
  --color-neutral-200:  #D0D7DE;  /* border muted */
  --color-neutral-300:  #AFB8C1;
  --color-neutral-500:  #6E7781;  /* fg muted */
  --color-neutral-700:  #424A53;
  --color-neutral-800:  #32383F;
  --color-neutral-900:  #24292F;  /* fg default */
  --color-neutral-1000: #1F2328;

  /* Semantic */
  --color-success-bg: #DAFBE1;
  --color-success-fg: #1A7F37;
  --color-warning-bg: #FFF8C5;
  --color-warning-fg: #9A6700;
  --color-error-bg:   #FFEBE9;
  --color-error-fg:   #CF222E;
  --color-info-bg:    #DDF4FF;
  --color-info-fg:    #0969DA;

  /* Surface */
  --bg-base:     #FFFFFF;        /* canvas-default */
  --bg-subtle:   #F6F8FA;        /* canvas-subtle */
  --bg-elevated: #FFFFFF;        /* overlay */
  --bg-overlay:  #FFFFFF;

  /* Text */
  --text-primary:    #1F2328;    /* fg-default */
  --text-secondary:  #656D76;    /* fg-muted */
  --text-tertiary:   #6E7781;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #8C959F;

  /* Border */
  --border-default: #D0D7DE;     /* border-default */
  --border-subtle:  #EAEEF2;
  --border-strong:  #AFB8C1;
  --border-focus:   #0969DA;
}

[data-theme="dark"] {
  /* Dark default */
  --bg-base: #0D1117;
  --bg-subtle: #161B22;
  --bg-elevated: #21262D;
  --text-primary: #E6EDF3;
  --text-secondary: #7D8590;
  --border-default: #30363D;
  --color-primary-500: #2F81F7;
}

[data-theme="dark-dimmed"] {
  --bg-base: #22272E;
  --bg-subtle: #2D333B;
  --text-primary: #ADBAC7;
  --color-primary-500: #539BF5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: -apple-system / "Segoe UI" / "Helvetica Neue" 시스템 스택. GitHub 마케팅은 Mona Sans (OFL) 사용
  - 한글: -apple-system 폴백 → "Apple SD Gothic Neo" / "Malgun Gothic"
  - 모노스페이스: ui-monospace, "SF Mono", "Menlo", Consolas
- **위계** (Primer text):
  - Display: 40px / 600 / 1.2 / -0.02em
  - H1: 32px / 600 / 1.25 / 0
  - H2: 24px / 600 / 1.25 / 0
  - H3: 20px / 600 / 1.25 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 12px / 400 / 1.33 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1280px (xl), 1012px (lg), 좌우 패딩 16px (mobile) / 24px (tablet+)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 6px;     /* 기본 — 버튼, 입력, 카드 */
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(31,35,40,0.04);                      /* button resting */
--shadow-md: 0 3px 6px rgba(140,149,159,0.15);                 /* dropdown */
--shadow-lg: 0 8px 24px rgba(140,149,159,0.20);                /* modal */
--shadow-xl: 0 12px 28px rgba(140,149,159,0.30);
```

### ⑧ Iconography
- **스타일**: Outline (Octicons는 12/16/24px outline, 모든 사이즈에서 픽셀 정렬)
- **Stroke 굵기**: 1px (단일 weight, 사이즈별로 별도 그려짐)
- **모서리 처리**: Square + Round 혼합
- **추천 라이브러리**: @primer/octicons (MIT, 250+)

### ⑨ 컴포넌트 가이드

**Button** (Primer는 default/primary/danger/invisible 4종)
```css
.btn {
  font: 500 14px/1.43 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  border-radius: var(--radius-md);
  padding: 5px 16px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid var(--border-default);
  background: var(--bg-elevated);
  color: var(--text-primary);
  box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.25);
  transition: background 80ms cubic-bezier(0.65, 0, 0.35, 1), border-color 80ms;
}
.btn:hover { background: #F3F4F6; border-color: #BABFC4; }
.btn:active { background: #EBECF0; }
.btn:disabled { color: var(--text-disabled); background: var(--bg-subtle); }

.btn-primary { background: var(--color-success-fg); border-color: rgba(31,35,40,0.15); color: #fff; box-shadow: 0 1px 0 rgba(31,35,40,0.10), inset 0 1px 0 rgba(255,255,255,0.20); }
.btn-primary:hover { background: #1F883D; }
.btn-primary:active { background: #197935; }
.btn-secondary { /* default 위 동일 */ }
.btn-ghost { background: transparent; border-color: transparent; color: var(--color-primary-500); box-shadow: none; }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--bg-elevated); color: var(--color-error-fg); border-color: var(--border-default); }
.btn-danger:hover { background: var(--color-error-fg); color: #fff; border-color: var(--color-error-fg); }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 5px 12px;
  height: 32px;
  font-size: 14px;
  box-shadow: inset 0 1px 0 rgba(225,228,232,0.20);
}
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(9,105,218,0.30);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 3px rgba(207,34,46,0.30); }
```

**Card (Box)**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge / Label**
```css
.label { padding: 0 7px; height: 20px; border-radius: var(--radius-full); font-size: 12px; font-weight: 500; line-height: 18px; display: inline-flex; align-items: center; }
.label-solid   { background: var(--color-primary-500); color: #fff; }
.label-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.label-outline { border: 1px solid var(--border-default); color: var(--text-primary); background: transparent; }
```

**Navigation (Header)**
```css
.gh-header { height: 64px; background: #24292F; color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 16px; }
.gh-header a { color: #fff; font-size: 14px; font-weight: 600; padding: 8px 12px; border-radius: var(--radius-md); }
.gh-header a:hover { background: rgba(255,255,255,0.10); }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 본문에 라이트/다크 양쪽에서 같은 hex 사용 금지 — `var(--text-primary)` 토큰을 거쳐야 자동 적응
2. 라벨(Label)에 4단계 이상 색 동시 사용 금지 — 이슈 라벨 가독성 저하
3. 모노스페이스를 본문 단락에 사용 금지 — 코드 인라인에 한정
4. 그라데이션 배경 위에 코드 블록 배치 금지 — 가독성 파괴
5. focus ring (3px 외곽 box-shadow) 제거 금지 — 키보드 접근성 핵심

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .gh-header { /* 위 정의 */ }
  .container { max-width: 1280px; margin: 0 auto; padding: 32px 24px; }
  .repo-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
  .repo-header h1 { font-size: 20px; font-weight: 400; margin: 0; }
  .repo-header h1 strong { font-weight: 600; }
  .repo-header .label-subtle { margin-left: 8px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
  .file-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); overflow: hidden; }
  .file-card .head { background: var(--bg-subtle); padding: 8px 16px; border-bottom: 1px solid var(--border-default); font: 600 14px/1 -apple-system, sans-serif; display: flex; align-items: center; gap: 8px; }
  .file-card .body { padding: 16px; font: 12px ui-monospace, "SF Mono", Menlo, monospace; line-height: 1.5; color: var(--text-secondary); white-space: pre-wrap; }
</style>

<header class="gh-header">
  <span style="font-weight:700">GitHub</span>
  <a href="#">Pull requests</a>
  <a href="#">Issues</a>
  <a href="#">Marketplace</a>
</header>

<div class="container">
  <div class="repo-header">
    <span style="font-size:18px">📁</span>
    <h1>shopify / <strong>polaris</strong></h1>
    <span class="label label-subtle">Public</span>
    <button class="btn" style="margin-left:auto">⭐ Star <span class="label label-subtle">14.2k</span></button>
    <button class="btn btn-primary">Code ▾</button>
  </div>
  <div class="grid">
    <div class="file-card"><div class="head">📄 README.md</div><div class="body">## Polaris
Shopify's design system, used by hundreds of merchants daily.</div></div>
    <div class="file-card"><div class="head">📄 package.json</div><div class="body">{
  "name": "@shopify/polaris",
  "version": "12.27.0"
}</div></div>
    <div class="file-card"><div class="head">📁 src/components</div><div class="body">Button/
Card/
TextField/
…(82 more)</div></div>
  </div>
</div>
```
