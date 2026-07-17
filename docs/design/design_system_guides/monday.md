---
brand: Monday.com
brand_ko: 먼데이닷컴
slug: monday
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - productivity
  - enterprise

color_tone: mixed
primary_color_hex: "#0085FF"
primary_color_name: "Monday Bright Blue"
mood:
  - 활기참
  - 컬러풀
  - 직관적

font_category: sans-serif
font_primary: Figtree
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2014
last_major_revision: 2024
signature_keyword: "행과 열의 컬러풀 status pill로 진행을 한눈에 보여주는 워크 OS"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F6F7FB", "border": "#E6E9EF", "fg": "#323338", "fg_muted": "#676879", "accent": "#0085FF" },
    "dark":  { "bg": "#181B34", "surface": "#323553", "border": "#3D4163", "fg": "#FFFFFF", "fg_muted": "#9699A6", "accent": "#2790FF" }
  }

hero_html: |
  <div style="font-family:Figtree,Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <span style="width:24px;height:24px;background:#FF158A;border-radius:6px;display:grid;place-items:center;color:#fff;font-weight:700;font-size:12px;">m</span>
      <strong style="font-size:14px;">monday.com</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">Sprint 24</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:1px;background:var(--card-border);">
      <div style="display:grid;grid-template-columns:1fr 70px 70px;gap:1px;background:var(--card-border);font-size:10px;font-weight:700;text-transform:uppercase;color:var(--card-fg-muted);letter-spacing:0.04em;">
        <div style="background:var(--card-bg);padding:6px 10px;">Item</div>
        <div style="background:var(--card-bg);padding:6px 10px;text-align:center;">Status</div>
        <div style="background:var(--card-bg);padding:6px 10px;text-align:center;">Priority</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 70px 70px;gap:1px;background:var(--card-border);border-left:6px solid #00C875;font-size:11px;">
        <div style="background:var(--card-bg);padding:8px 10px;">디자인 v2</div>
        <div style="background:#00C875;color:#fff;padding:8px 4px;text-align:center;font-weight:700;font-size:10px;">Done</div>
        <div style="background:#FF7575;color:#fff;padding:8px 4px;text-align:center;font-weight:700;font-size:10px;">High</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 70px 70px;gap:1px;background:var(--card-border);border-left:6px solid #FDAB3D;font-size:11px;">
        <div style="background:var(--card-bg);padding:8px 10px;">스펙 검토</div>
        <div style="background:#FDAB3D;color:#fff;padding:8px 4px;text-align:center;font-weight:700;font-size:10px;">Working</div>
        <div style="background:#579BFC;color:#fff;padding:8px 4px;text-align:center;font-weight:700;font-size:10px;">Mid</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 70px 70px;gap:1px;background:var(--card-border);border-left:6px solid #C4C4C4;font-size:11px;">
        <div style="background:var(--card-bg);padding:8px 10px;">QA 일정</div>
        <div style="background:#C4C4C4;color:#fff;padding:8px 4px;text-align:center;font-weight:700;font-size:10px;">Stuck</div>
        <div style="background:#A25DDC;color:#fff;padding:8px 4px;text-align:center;font-weight:700;font-size:10px;">Low</div>
      </div>
      <button style="background:var(--card-accent);color:#fff;border:0;border-radius:8px;padding:8px 12px;font-size:11px;font-weight:600;font-family:inherit;align-self:flex-start;margin-top:6px;">+ Add item</button>
    </div>
  </div>

sources:
  - https://monday.com/
  - https://monday.com/brand
  - https://style.monday.com/
---

### ① 브랜드 DNA
- **브랜드명**: Monday.com
- **한 줄 정체성**: 직관적인 컬러 status로 팀의 진행을 한눈에 보여주는 Work OS
- **공식 디자인 철학**: "Run all your work in one place — colorful, customizable, transparent"
- **시그니처 요소 1개**: 행을 색으로 구분하는 컬러풀 status pill (그린/오렌지/레드/그레이 등) + Pink Monday 마스코트

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기참, 컬러풀, 직관적
- **무드 설명**: 흰 캔버스에 표 형식 행이 색으로 분류된다. status가 셀 전체를 칠해 진행 상태가 즉시 보이는 것이 핵심.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 표 위주
- **모서리 성향**: Soft (6~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Monday Bright Blue */
  --color-primary-50:  #E6F3FF;
  --color-primary-100: #C2E1FF;
  --color-primary-200: #80C0FF;
  --color-primary-300: #4DA3FF;
  --color-primary-400: #2790FF;
  --color-primary-500: #0085FF;  /* Monday primary */
  --color-primary-600: #0073DB;
  --color-primary-700: #005AA8;
  --color-primary-800: #004482;
  --color-primary-900: #002E5A;

  /* Secondary - Monday Pink (brand mascot) */
  --color-secondary-500: #FF158A;

  /* Status (시그니처 셀 컬러) */
  --status-done:    #00C875;
  --status-working: #FDAB3D;
  --status-stuck:   #E2445C;
  --status-blank:   #C4C4C4;
  --status-purple:  #A25DDC;
  --status-blue:    #579BFC;
  --status-pink:    #FF158A;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F6F7FB;
  --color-neutral-100:  #EBEDF1;
  --color-neutral-200:  #E6E9EF;
  --color-neutral-300:  #C5C7D0;
  --color-neutral-500:  #9699A6;
  --color-neutral-700:  #676879;
  --color-neutral-800:  #494B5C;
  --color-neutral-900:  #323338;
  --color-neutral-1000: #181B34;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #00C875;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #FDAB3D;
  --color-error-bg:   #FCE4E8;
  --color-error-fg:   #E2445C;
  --color-info-bg:    #E6F3FF;
  --color-info-fg:    #0085FF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F6F7FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(24,27,52,0.40);

  /* Text */
  --text-primary:    #323338;
  --text-secondary:  #676879;
  --text-tertiary:   #9699A6;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C5C7D0;

  /* Border */
  --border-default: #E6E9EF;
  --border-subtle:  #EBEDF1;
  --border-strong:  #C5C7D0;
  --border-focus:   #0085FF;
}

[data-theme="dark"] {
  --bg-base: #181B34;
  --bg-subtle: #292B43;
  --bg-elevated: #323553;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Figtree (OFL) — Monday는 Figtree 기반 (이전 Roboto 대체)
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 700 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 10px / 700 / 1.27 / 0.04em (uppercase)

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
- **Container**: max-width 1440px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
--shadow-xl: 0 16px 40px rgba(0,0,0,0.20);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (Monday는 둘 다 사용)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 Figtree, Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 6px 10px;
  height: 32px;
  font-size: 13px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(0,133,255,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Status pill (시그니처)**
```css
.status { padding: 4px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 700; line-height: 14px; color: #fff; display: inline-flex; align-items: center; justify-content: center; min-width: 88px; text-align: center; }
.status-done    { background: var(--status-done); }
.status-working { background: var(--status-working); }
.status-stuck   { background: var(--status-stuck); }
.status-blank   { background: var(--status-blank); }

.tag { padding: 0 8px; height: 22px; border-radius: var(--radius-full); font-size: 11px; font-weight: 600; line-height: 22px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top + Side)**
```css
.topbar { height: 48px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); display: flex; align-items: center; padding: 0 16px; gap: 12px; }
.sidebar { width: 220px; background: var(--bg-subtle); padding: 12px; border-right: 1px solid var(--border-subtle); }
.sidebar .item { padding: 6px 10px; border-radius: var(--radius-md); font-size: 13px; cursor: pointer; }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; }
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
1. status pill 색을 임의 매핑 금지 — Done/Working/Stuck/Blank 의미 보존
2. 같은 셀에 두 개의 status 동시 표시 금지 — 진행 상태 모호
3. Pink Monday 마스코트를 임의 색으로 변경 금지
4. 표 row 높이를 32px 미만으로 압축 금지 — 14px 폰트 가독성
5. 그라데이션 배경 위에 status cell 직접 배치 금지

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: Figtree, Inter, 'Pretendard', sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .topbar { height: 48px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); display: flex; align-items: center; padding: 0 16px; gap: 12px; }
  .topbar .logo { width: 28px; height: 28px; background: #FF158A; border-radius: 8px; display: grid; place-items: center; color: #fff; font-weight: 800; }
  .layout { display: grid; grid-template-columns: 220px 1fr; }
  .sidebar { background: var(--bg-subtle); padding: 16px 12px; border-right: 1px solid var(--border-subtle); height: calc(100vh - 48px); }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: var(--radius-md); font-size: 13px; cursor: pointer; }
  .sidebar .item:hover { background: var(--bg-elevated); }
  .sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; }
  .main { padding: 24px 32px; }
  .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .head h1 { margin: 0; font-size: 22px; font-weight: 700; }
  .table { border-radius: 8px; overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border-default); }
  .row-head, .row { display: grid; grid-template-columns: 36px 1fr 110px 110px 110px 110px; gap: 0; }
  .row-head > div { background: var(--bg-subtle); padding: 8px 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); border-bottom: 1px solid var(--border-default); }
  .row { border-bottom: 1px solid var(--border-default); }
  .row > div { padding: 10px 12px; font-size: 13px; display: flex; align-items: center; }
  .row .left-bar { padding: 0; }
  .left-bar.done { background: var(--status-done); }
  .left-bar.working { background: var(--status-working); }
  .left-bar.stuck { background: var(--status-stuck); }
  .left-bar.blank { background: var(--status-blank); }
  .cell-status { padding: 0; }
  .cell-status .status { width: 100%; padding: 12px 8px; border-radius: 0; min-width: 0; }
</style>

<header class="topbar">
  <div class="logo">m</div>
  <strong>monday.com</strong>
  <input class="input" placeholder="검색..." style="flex:1; max-width:280px"/>
  <button class="btn btn-primary">+ 새 보드</button>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="item active">▦ Sprint 24</div>
    <div class="item">▣ Q3 Roadmap</div>
    <div class="item">⚡ Bug tracker</div>
    <div class="item">🎯 OKR Tracker</div>
  </aside>
  <main class="main">
    <div class="head">
      <h1>Sprint 24 · Engineering</h1>
      <button class="btn btn-primary">+ Add item</button>
    </div>
    <div class="table">
      <div class="row-head">
        <div></div><div>Item</div><div>Owner</div><div>Status</div><div>Priority</div><div>Due</div>
      </div>
      <div class="row">
        <div class="left-bar done"></div>
        <div>디자인 시스템 v2 정리</div>
        <div><span class="tag tag-subtle">Mina</span></div>
        <div class="cell-status"><span class="status status-done">Done</span></div>
        <div class="cell-status"><span class="status" style="background:#E2445C">High</span></div>
        <div>5/7</div>
      </div>
      <div class="row">
        <div class="left-bar working"></div>
        <div>Onboarding 흐름 개선</div>
        <div><span class="tag tag-subtle">Joon</span></div>
        <div class="cell-status"><span class="status status-working">Working on it</span></div>
        <div class="cell-status"><span class="status" style="background:#579BFC">Mid</span></div>
        <div>5/12</div>
      </div>
      <div class="row">
        <div class="left-bar stuck"></div>
        <div>Roadmap timeline regression</div>
        <div><span class="tag tag-subtle">Dave</span></div>
        <div class="cell-status"><span class="status status-stuck">Stuck</span></div>
        <div class="cell-status"><span class="status" style="background:#E2445C">High</span></div>
        <div>5/9</div>
      </div>
      <div class="row">
        <div class="left-bar blank"></div>
        <div>QA 일정 잡기</div>
        <div><span class="tag tag-subtle">—</span></div>
        <div class="cell-status"><span class="status status-blank">—</span></div>
        <div class="cell-status"><span class="status" style="background:#A25DDC">Low</span></div>
        <div>5/15</div>
      </div>
    </div>
  </main>
</div>
```
