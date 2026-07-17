---
brand: Linear
brand_ko: 리니어
slug: linear
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - productivity
  - dev-tools

color_tone: cool
primary_color_hex: "#5E6AD2"
primary_color_name: "Linear Indigo"
mood:
  - 정밀
  - 묵직
  - 키보드 친화

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2019
last_major_revision: 2024
signature_keyword: "정밀한 다크 톤과 좁은 letter-spacing의 묵직함"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F9F8F9", "border": "#E6E4E9", "fg": "#1A1B1F", "fg_muted": "#6B6F76", "accent": "#5E6AD2" },
    "dark":  { "bg": "#08090A", "surface": "#1A1B1E", "border": "#232428", "fg": "#F7F8F8", "fg_muted": "#B4BBC8", "accent": "#7B8AFF" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;letter-spacing:-0.01em;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="padding:10px 14px;border-bottom:1px solid var(--card-surface);display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:3px;background:linear-gradient(135deg,#9BA6FF,#7B8AFF);"></span>
      <strong style="font-size:13px;font-weight:600;letter-spacing:-0.02em;">Linear</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">Active issues · 12</span>
    </div>
    <div style="padding:0;display:grid;gap:1px;background:var(--card-surface);">
      <div style="background:var(--card-bg);padding:10px 14px;display:grid;grid-template-columns:12px 1fr auto;gap:10px;align-items:center;">
        <span style="width:10px;height:10px;border-radius:50%;background:#7B8AFF;"></span>
        <span style="font-size:12px;color:var(--card-fg);">Improve onboarding flow</span>
        <span style="font-size:10px;color:#7B8AFF;background:var(--card-surface);padding:2px 6px;border-radius:3px;">In progress</span>
      </div>
      <div style="background:var(--card-bg);padding:10px 14px;display:grid;grid-template-columns:12px 1fr auto;gap:10px;align-items:center;">
        <span style="width:10px;height:10px;border-radius:50%;background:#4CB782;"></span>
        <span style="font-size:12px;color:var(--card-fg);">Cycle automation: archive</span>
        <span style="font-size:10px;color:#4CB782;background:var(--card-surface);padding:2px 6px;border-radius:3px;">Done</span>
      </div>
      <div style="background:var(--card-bg);padding:10px 14px;display:grid;grid-template-columns:12px 1fr auto;gap:10px;align-items:center;">
        <span style="width:10px;height:10px;border-radius:50%;background:#F2777A;"></span>
        <span style="font-size:12px;color:var(--card-fg);">Roadmap timeline regression</span>
        <span style="font-size:10px;color:#F2777A;background:var(--card-surface);padding:2px 6px;border-radius:3px;">Blocked</span>
      </div>
      <div style="background:var(--card-bg);padding:10px 14px;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:11px;color:var(--card-fg-muted);">Press <span style="font-family:ui-monospace,monospace;border:1px solid var(--card-border);border-radius:3px;padding:1px 4px;">C</span> to create</span>
        <button style="background:var(--card-accent);color:#fff;border:0;border-radius:6px;padding:5px 10px;font-size:11px;font-weight:500;font-family:inherit;letter-spacing:-0.01em;">+ New issue</button>
      </div>
    </div>
  </div>

sources:
  - https://linear.app/
  - https://linear.app/method
  - https://linear.app/brand
---

### ① 브랜드 DNA
- **브랜드명**: Linear
- **한 줄 정체성**: 빠른 키보드 워크플로우와 정밀한 다크 톤이 만드는 차세대 이슈 트래커
- **공식 디자인 철학**: "Built for those who craft software — precision, opinionated, fast"
- **시그니처 요소 1개**: 정밀한 명도 단계와 묵직한 다크 톤 + Inter 폰트의 좁은 letter-spacing + Linear Indigo (#5E6AD2) 단일 액센트

### ② 톤 & 무드
- **핵심 키워드 3개**: 정밀, 묵직, 키보드 친화
- **무드 설명**: 다크 캔버스가 기본. 색은 거의 없고, gray ramp의 정확한 단계로 위계를 그린다. 강조는 한 점의 인디고로 응축.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 이슈 리스트, 키보드 단축키 우선
- **모서리 성향**: Soft (6~8px)
- **평면성**: Subtle — 1단계 그림자 + border 위주

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Linear Indigo (다크 캔버스 대비 위해 라이트니스 상향) */
  --color-primary-50:  #16182A;
  --color-primary-100: #1E2140;
  --color-primary-200: #2C3160;
  --color-primary-300: #404A95;
  --color-primary-400: #5E6AD2;  /* Linear brand */
  --color-primary-500: #7B8AFF;  /* 다크에서 더 밝게 (액센트) */
  --color-primary-600: #94A1FF;  /* hover */
  --color-primary-700: #AEB8FF;
  --color-primary-800: #C9CFFF;
  --color-primary-900: #E5E8FF;

  /* Secondary - Linear Coral (cycle highlight) */
  --color-secondary-500: #F2777A;

  /* Neutral - Linear의 정밀한 gray ramp (다크용 반전) */
  --color-neutral-0:    #08090A;  /* Linear black */
  --color-neutral-50:   #1A1B1E;  /* dark surface */
  --color-neutral-100:  #232428;
  --color-neutral-200:  #2E2F33;
  --color-neutral-300:  #3A3C42;
  --color-neutral-500:  #6B6F76;
  --color-neutral-700:  #8A8F98;
  --color-neutral-800:  #B4BBC8;
  --color-neutral-900:  #DDE1E8;
  --color-neutral-1000: #F7F8F8;  /* Linear off-white */

  /* Semantic */
  --color-success-bg: #16271E;
  --color-success-fg: #6FD49B;
  --color-warning-bg: #2A1F12;
  --color-warning-fg: #F5B266;
  --color-error-bg:   #2A1517;
  --color-error-fg:   #F2777A;
  --color-info-bg:    #1A1F3A;
  --color-info-fg:    #7B8AFF;

  /* Surface (Linear Dark — 시그니처 다크) */
  --bg-base:     #08090A;            /* main canvas */
  --bg-subtle:   #1A1B1E;            /* sidebar / card */
  --bg-elevated: #232428;            /* hovered */
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #F7F8F8;
  --text-secondary:  #B4BBC8;
  --text-tertiary:   #8A8F98;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A5E66;

  /* Border */
  --border-default: #232428;
  --border-subtle:  #1A1B1E;
  --border-strong:  #34363C;
  --border-focus:   #7B8AFF;
}

[data-theme="light"] {
  /* Primary - Linear Indigo */
  --color-primary-50:  #EEEFFC;
  --color-primary-100: #DEDFFA;
  --color-primary-200: #BCC0F4;
  --color-primary-300: #9BA0EE;
  --color-primary-400: #7A81E8;
  --color-primary-500: #5E6AD2;  /* Linear brand */
  --color-primary-600: #4F58B0;  /* hover */
  --color-primary-700: #3F4790;
  --color-primary-800: #2F3570;
  --color-primary-900: #1F2350;

  /* Secondary - Linear Coral (cycle highlight) */
  --color-secondary-500: #EB5757;

  /* Neutral - Linear의 정밀한 gray ramp */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9F8F9;  /* light surface */
  --color-neutral-100:  #F4F2F4;
  --color-neutral-200:  #E6E4E9;
  --color-neutral-300:  #D4D2D9;
  --color-neutral-500:  #8A8F98;
  --color-neutral-700:  #6B6F76;
  --color-neutral-800:  #4D5158;
  --color-neutral-900:  #2E2E36;
  --color-neutral-1000: #08090A;  /* Linear black */

  /* Semantic */
  --color-success-bg: #DCF7E3;
  --color-success-fg: #4CB782;
  --color-warning-bg: #FFEDD5;
  --color-warning-fg: #F2994A;
  --color-error-bg:   #FCE8E6;
  --color-error-fg:   #EB5757;
  --color-info-bg:    #DEDFFA;
  --color-info-fg:    #5E6AD2;

  /* Surface (Linear Light) */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F9F8F9;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(8,9,10,0.40);

  /* Text */
  --text-primary:    #1A1B1F;
  --text-secondary:  #6B6F76;
  --text-tertiary:   #8A8F98;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B8BBC0;

  /* Border */
  --border-default: #E6E4E9;
  --border-subtle:  #F0EFF1;
  --border-strong:  #B8BBC0;
  --border-focus:   #5E6AD2;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter Var (OFL) — Linear 마케팅/앱 모두
  - 한글: Pretendard (OFL) / Inter Var의 Korean 폴백
  - 모노: ui-monospace, "JetBrains Mono", Consolas
- **위계** (Linear의 좁은 letter-spacing 시그니처):
  - Display: 56px / 600 / 1.05 / -0.04em
  - H1: 40px / 600 / 1.1 / -0.025em
  - H2: 28px / 600 / 1.2 / -0.02em
  - H3: 20px / 600 / 1.3 / -0.015em
  - Body Large: 16px / 400 / 1.5 / -0.01em
  - Body: 14px / 400 / 1.5 / -0.01em
  - Body Small: 13px / 400 / 1.43 / -0.005em
  - Caption: 12px / 500 / 1.33 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;     /* Linear는 12px도 자주 */
  --space-lg: 20px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1200px (앱), 1100px (마케팅), 좌우 패딩 16px (mobile) / 24px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;     /* 컨트롤 기본 */
--radius-lg: 8px;     /* 카드 */
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 0 0 1px rgba(0,0,0,0.40), 0 1px 2px rgba(0,0,0,0.50);
--shadow-md: 0 4px 12px rgba(0,0,0,0.45);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.55);
--shadow-xl: 0 24px 48px rgba(0,0,0,0.65);
```

### ⑧ Iconography
- **스타일**: Outline (Linear는 매우 정밀한 1.5px outline)
- **Stroke 굵기**: 1.5px (16px 사이즈 기준)
- **모서리 처리**: Round + Square 혼합 (정밀)
- **추천 라이브러리**: Linear 앱은 자체 + Lucide / Phosphor 호환

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 13px/1 "Inter", "Pretendard", sans-serif;
  letter-spacing: -0.01em;
  border-radius: var(--radius-md);
  padding: 0 12px;
  height: 28px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 80ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-elevated); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-subtle);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 0 8px;
  height: 28px;
  font-size: 13px;
  color: var(--text-primary);
}
.input:hover { border-color: var(--border-default); }
.input:focus {
  outline: none;
  background: var(--bg-base);
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(123,138,255,0.25);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 3px rgba(242,119,122,0.25); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge / Status**
```css
.status { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 500; line-height: 16px; display: inline-flex; align-items: center; gap: 6px; }
.status::before { content:""; width: 8px; height: 8px; border-radius: 50%; background: currentColor; }
.status-solid   { background: var(--color-primary-500); color: #fff; }
.status-subtle  { background: var(--bg-subtle); color: var(--text-secondary); }
.status-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.status-progress { color: #7B8AFF; }
.status-done { color: #4CB782; }
.status-blocked { color: #F2777A; }
```

**Navigation (Sidebar)**
```css
.sidenav { width: 240px; background: var(--bg-subtle); padding: 8px; border-right: 1px solid var(--border-subtle); height: 100vh; }
.sidenav .item { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: var(--radius-sm); color: var(--text-secondary); font-size: 13px; font-weight: 500; cursor: pointer; }
.sidenav .item:hover { background: var(--bg-elevated); color: var(--text-primary); }
.sidenav .item.active { background: var(--color-primary-50); color: var(--color-primary-600); }
.sidenav .kbd { margin-left: auto; font-family: ui-monospace, monospace; font-size: 11px; color: var(--text-tertiary); padding: 1px 4px; border: 1px solid var(--border-default); border-radius: 3px; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 150ms;
--duration-slow: 250ms;
--ease-out: cubic-bezier(0.2, 0.8, 0.4, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑩.1 Linear의 부드러운 spring
```css
--ease-spring: linear(0, 0.005, 0.020, 0.044, 0.077, 0.117, 0.165, 0.220, 0.279, 0.341, 0.405, 0.469, 0.532, 0.594, 0.654, 0.711, 0.766, 0.817, 0.864, 0.907, 0.946, 0.978, 1);
```

### ⑪ Anti-patterns
1. 채도 높은 원색을 본문 텍스트나 큰 면적에 사용 금지 — Linear의 모노 정밀함이 깨진다
2. 라운드 12px 이상 카드 사용 금지 — 8px가 시그니처
3. 다크 모드에서 #FFF 풀화이트 텍스트 금지 — #F7F8F8까지만
4. 키보드 단축키를 마우스 hover로만 노출 금지 — kbd 라벨로 항상 표기
5. 그라데이션 배경 금지 (마케팅 hero 외) — Linear의 차분함 위배

### ⑫ 시그니처 적용 예시 (다크 앱 인터페이스)

```html
<style data-theme="dark">
  body { margin: 0; font-family: "Inter", "Pretendard", sans-serif; letter-spacing: -0.01em; color: #F7F8F8; background: #08090A; }
  .layout { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidenav { width: 240px; background: #1A1B1E; padding: 8px; border-right: 1px solid #232428; }
  .sidenav .item { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 4px; color: #B4BBC8; font-size: 13px; font-weight: 500; cursor: pointer; }
  .sidenav .item:hover { background: #232428; color: #F7F8F8; }
  .sidenav .item.active { background: #232428; color: #F7F8F8; }
  .sidenav .kbd { margin-left: auto; font-family: ui-monospace, monospace; font-size: 11px; color: #6B6F76; padding: 1px 4px; border: 1px solid #2E2F33; border-radius: 3px; }
  .main { padding: 24px 32px; }
  .h-row { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  .h-row h1 { font-size: 20px; font-weight: 600; letter-spacing: -0.02em; margin: 0; }
  .features { display: grid; grid-template-columns: 1fr; gap: 1px; background: #232428; border: 1px solid #232428; border-radius: 8px; overflow: hidden; }
  .feature-card { background: #08090A; padding: 14px 16px; display: grid; grid-template-columns: 24px 1fr auto auto; gap: 12px; align-items: center; }
  .feature-card:hover { background: #1A1B1E; }
  .feature-card .ic { width: 12px; height: 12px; border-radius: 50%; }
  .feature-card h3 { margin: 0; font-size: 13px; font-weight: 500; color: #F7F8F8; letter-spacing: -0.01em; }
  .feature-card .id { color: #6B6F76; font-size: 12px; font-family: ui-monospace, monospace; }
  .status-pill { padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 500; background: #232428; color: #B4BBC8; }
  .progress { color: #7B8AFF; }
  .done { color: #4CB782; }
</style>

<body data-theme="dark">
<div class="layout">
  <aside class="sidenav">
    <div class="item active">▭ Inbox <span class="kbd">⌘1</span></div>
    <div class="item">▢ My Issues <span class="kbd">⌘2</span></div>
    <div class="item">⚡ Active <span class="kbd">⌘3</span></div>
    <div class="item">🗒 Drafts</div>
    <div class="item" style="margin-top:16px; color:#6B6F76; font-size:11px; text-transform:uppercase; letter-spacing:0.06em">Workspace</div>
    <div class="item">🔭 Roadmap</div>
    <div class="item">⏱ Cycles</div>
    <div class="item">🏷 Labels</div>
  </aside>
  <main class="main">
    <div class="h-row">
      <h1>Active issues</h1>
      <span class="status-pill">12</span>
      <button class="btn btn-secondary" style="margin-left:auto; background:#1A1B1E; border-color:#232428; color:#F7F8F8">+ New issue</button>
    </div>
    <div class="features">
      <div class="feature-card"><span class="ic" style="background:#7B8AFF"></span><h3>Improve onboarding flow for new teams</h3><span class="id">ENG-128</span><span class="status-pill progress">In progress</span></div>
      <div class="feature-card"><span class="ic" style="background:#4CB782"></span><h3>Cycle automation: archive completed issues</h3><span class="id">ENG-129</span><span class="status-pill done">Done</span></div>
      <div class="feature-card"><span class="ic" style="background:#F2994A"></span><h3>Sub-issue rollup math regression</h3><span class="id">ENG-130</span><span class="status-pill" style="color:#F2994A">Todo</span></div>
      <div class="feature-card"><span class="ic" style="background:#EB5757"></span><h3>Roadmap timeline drag handles drop</h3><span class="id">ENG-131</span><span class="status-pill" style="color:#EB5757">Blocked</span></div>
    </div>
  </main>
</div>
</body>
```
