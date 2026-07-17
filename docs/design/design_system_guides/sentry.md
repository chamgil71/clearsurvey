---
brand: Sentry
brand_ko: 센트리
slug: sentry
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#362D59"
primary_color_name: "Sentry Rich Black"
mood:
  - 정밀
  - 디버깅 우선
  - 다크

font_category: sans-serif
font_primary: Rubik
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2008
last_major_revision: 2024
signature_keyword: "Rich Black 보라와 Pink/Orange 액센트의 에러 모니터링 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F4F2F8", "border": "#E1DEEC", "fg": "#0E0F11", "fg_muted": "#5C5664", "accent": "#362D59" },
    "dark":  { "bg": "#0E0B18", "surface": "#181428", "border": "#221C38", "fg": "#FFFFFF", "fg_muted": "#C0B7D9", "accent": "#9A8FBF" }
  }

hero_html: |
  <div style="font-family:Rubik,Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#362D59;color:#fff;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:#fff;border-radius:50%;position:relative;"><span style="position:absolute;inset:3px;background:#362D59;border-radius:50%;"></span></span>
      <strong style="font-size:13px;">Sentry</strong>
      <span style="margin-left:auto;font-size:11px;opacity:0.85;">acme/web</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
        <span style="background:#FCE4E4;color:#DC2626;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;">⚠ Unresolved</span>
        <span style="background:#FFE5DD;color:#FF7E47;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;">42 events</span>
        <span style="background:var(--card-surface);color:var(--card-fg-muted);padding:2px 8px;border-radius:4px;font-size:10px;font-weight:500;">prod</span>
      </div>
      <div style="font-size:14px;font-weight:600;line-height:1.3;color:var(--card-fg);">TypeError: Cannot read property 'map' of undefined</div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:10px;font-family:ui-monospace,monospace;font-size:10px;line-height:1.6;color:var(--card-fg-muted);">
        <span style="color:#E1567C;">at</span> <span style="color:var(--card-fg);">renderUserList</span> <span style="color:var(--card-fg-muted);">(UserList.tsx:42)</span><br/>
        <span style="color:#E1567C;">at</span> <span style="color:var(--card-fg);">App</span> <span style="color:var(--card-fg-muted);">(App.tsx:18)</span>
      </div>
      <div style="display:flex;gap:6px;">
        <button style="background:var(--card-accent);color:#fff;border:0;border-radius:6px;padding:6px 12px;font-size:11px;font-weight:600;font-family:inherit;">Resolve</button>
        <button style="background:transparent;color:var(--card-accent);border:1px solid var(--card-border);border-radius:6px;padding:6px 12px;font-size:11px;font-weight:600;font-family:inherit;">Assign</button>
      </div>
    </div>
  </div>

sources:
  - https://sentry.io/
  - https://sentry.io/welcome/
  - https://docs.sentry.io/
---

### ① 브랜드 DNA
- **브랜드명**: Sentry
- **한 줄 정체성**: 프로덕션 에러를 실시간으로 잡아내는 개발자 우선의 에러 모니터링 플랫폼
- **공식 디자인 철학**: "Code that breaks deserves software that cares — fix it before users notice"
- **시그니처 요소 1개**: Rich Black 보라(#362D59) + Pink(#E1567C) 액센트 + 에러 stack trace의 정밀한 데이터 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 정밀, 디버깅 우선, 다크
- **무드 설명**: 흰 캔버스 위에 짙은 보라 헤더와 핑크/오렌지 액센트가 emergency 신호처럼 배치된다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 에러/이벤트 데이터 위주
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Sentry Rich Black Purple */
  --color-primary-50:  #F4F2F8;
  --color-primary-100: #E1DEEC;
  --color-primary-200: #C0B7D9;
  --color-primary-300: #9A8FBF;
  --color-primary-400: #6E5EA0;
  --color-primary-500: #362D59;  /* Sentry Rich Black */
  --color-primary-600: #2C2548;
  --color-primary-700: #221C38;
  --color-primary-800: #181428;
  --color-primary-900: #0E0B18;

  /* Secondary - Sentry Pink */
  --color-secondary-500: #E1567C;

  /* Accent - Pinata Orange */
  --color-accent: #FF7E47;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFC;
  --color-neutral-100:  #F1F2F4;
  --color-neutral-200:  #E1E2E8;
  --color-neutral-300:  #C5C7D0;
  --color-neutral-500:  #8E8E92;
  --color-neutral-700:  #5C5664;
  --color-neutral-800:  #3A3744;
  --color-neutral-900:  #0E0F11;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFE5DD;
  --color-warning-fg: #FF7E47;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2D7FF9;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFC;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,15,17,0.50);

  /* Text */
  --text-primary:    #0E0F11;
  --text-secondary:  #5C5664;
  --text-tertiary:   #8E8E92;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C5C7D0;

  /* Border */
  --border-default: #E1E2E8;
  --border-subtle:  #F1F2F4;
  --border-strong:  #C5C7D0;
  --border-focus:   #362D59;
}

[data-theme="dark"] {
  --bg-base: #0E0B18;
  --bg-subtle: #181428;
  --bg-elevated: #221C38;
  --text-primary: #FFFFFF;
  --text-secondary: #C0B7D9;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Rubik (OFL) — Sentry 마케팅/앱 모두
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono"
- **위계**:
  - Display: 64px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 40px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(14,15,17,0.06);
--shadow-md: 0 4px 12px rgba(14,15,17,0.10);
--shadow-lg: 0 8px 24px rgba(54,45,89,0.16);
--shadow-xl: 0 16px 32px rgba(54,45,89,0.24);
```

### ⑧ Iconography
- **스타일**: Outline (Sentry 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 13px/1 Rubik, Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 6px 10px; height: 32px; font-size: 13px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(54,45,89,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Issue level**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-600); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-error   { background: var(--color-error-bg); color: var(--color-error-fg); }
.tag-warning { background: var(--color-warning-bg); color: var(--color-warning-fg); }
```

**Navigation (Top + Side)**
```css
.topnav { height: 48px; background: var(--color-primary-500); color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 12px; }
.sidebar { width: 220px; background: var(--bg-subtle); border-right: 1px solid var(--border-default); padding: 12px; height: 100vh; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. Pink 액센트를 brand 액션 외 분산 사용 금지 — 강조 신호 흐림
2. error level 색을 임의 매핑 금지 (fatal/error/warning/info의 의미 보존)
3. stack trace에 sans-serif 폰트 사용 금지 — 모노 필수
4. 다크 보라 헤더 위 채도 높은 노랑 사용 금지 — 가독성 저하
5. Sentry 마스코트(픽시 모자)를 임의 색 변경 금지

### ⑫ 시그니처 적용 예시 (Issues view)

```html
<style>
  body { margin: 0; font-family: Rubik, Inter, 'Pretendard', -apple-system, sans-serif; color: #0E0F11; background: #fff; }
  .topnav { height: 48px; background: #362D59; color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 12px; }
  .topnav .logo { width: 22px; height: 22px; background: #fff; border-radius: 50%; position: relative; }
  .topnav .logo::after { content:""; position: absolute; inset: 4px; background: #362D59; border-radius: 50%; }
  .layout { display: grid; grid-template-columns: 220px 1fr; min-height: calc(100vh - 48px); }
  .sidebar { background: #FAFAFC; border-right: 1px solid #E1E2E8; padding: 16px 12px; }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 6px; font-size: 13px; cursor: pointer; }
  .sidebar .item:hover { background: #fff; }
  .sidebar .item.active { background: #F4F2F8; color: #362D59; font-weight: 600; }
  .main { padding: 24px 32px; }
  .head h1 { margin: 0 0 16px; font-size: 22px; font-weight: 700; }
  .issue { background: #fff; border: 1px solid #E1E2E8; border-radius: 8px; padding: 14px 16px; margin-bottom: 8px; cursor: pointer; }
  .issue:hover { background: #FAFAFC; }
  .issue.unresolved { border-left: 4px solid #DC2626; padding-left: 14px; }
  .issue .row1 { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; margin-bottom: 6px; }
  .issue .title { font-size: 14px; font-weight: 600; line-height: 1.3; margin-bottom: 4px; }
  .issue .meta { font-size: 11px; color: #5C5664; font-family: ui-monospace, monospace; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Sentry</strong>
  <span style="opacity:0.85; font-size:13px;">/ acme/web</span>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="item active">⚠ Issues <span style="margin-left:auto;background:#DC2626;color:#fff;padding:0 6px;border-radius:9999px;font-size:10px;font-weight:700;">12</span></div>
    <div class="item">🔍 Discover</div>
    <div class="item">📊 Performance</div>
    <div class="item">▶ Replays</div>
    <div class="item">🔔 Alerts</div>
    <div class="item">⚙ Settings</div>
  </aside>
  <main class="main">
    <h1>Issues</h1>
    <div class="issue unresolved">
      <div class="row1">
        <span class="tag tag-error">⚠ Unresolved</span>
        <span class="tag tag-warning">42 events</span>
        <span class="tag" style="background:#F4F2F8;color:#5C5664;">prod</span>
        <span style="margin-left:auto;font-size:11px;color:#5C5664;">2 min ago</span>
      </div>
      <div class="title">TypeError: Cannot read property 'map' of undefined</div>
      <div class="meta">UserList.tsx:42 · web-app · Mina · 8 users affected</div>
    </div>
    <div class="issue unresolved">
      <div class="row1">
        <span class="tag tag-error">⚠ Unresolved</span>
        <span class="tag tag-warning">28 events</span>
        <span class="tag" style="background:#F4F2F8;color:#5C5664;">prod</span>
        <span style="margin-left:auto;font-size:11px;color:#5C5664;">14 min ago</span>
      </div>
      <div class="title">FetchError: Network request failed (auth/refresh)</div>
      <div class="meta">api/auth.ts:128 · web-app · Joon · 3 users affected</div>
    </div>
    <div class="issue">
      <div class="row1">
        <span class="tag" style="background:#DCF7E5;color:#1AAD5C;">✓ Resolved</span>
        <span class="tag" style="background:#F4F2F8;color:#5C5664;">prod</span>
        <span style="margin-left:auto;font-size:11px;color:#5C5664;">1h ago</span>
      </div>
      <div class="title">Sentry.captureException: profile sync failure</div>
      <div class="meta">profile.ts:84 · resolved by Dave</div>
    </div>
  </main>
</div>
```
