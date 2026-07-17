---
brand: SAP Fiori
brand_ko: SAP 피오리
slug: sap-fiori
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - enterprise

color_tone: cool
primary_color_hex: "#0070F2"
primary_color_name: "SAP Brand Indigo"
mood:
  - 정돈
  - 엔터프라이즈
  - 신뢰

font_category: sans-serif
font_primary: 72
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2013
last_major_revision: 2024
signature_keyword: "LaunchPad 타일 그리드와 역할 기반의 ERP 풍경"

card_tokens: |
  {
    "light": { "bg": "#F5F6F7", "surface": "#FFFFFF", "border": "#EAECEE", "fg": "#131E29", "fg_muted": "#475E75", "accent": "#0070F2" },
    "dark":  { "bg": "#1D232A", "surface": "#29313A", "border": "#2C343C", "fg": "#EAECEE", "fg_muted": "#B5BBC1", "accent": "#4F99FF" }
  }

hero_html: |
  <div style="font-family:'72','72full',Arial,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#0B1722;color:#EAECEE;padding:8px 14px;font-size:13px;display:flex;align-items:center;gap:8px;">
      <strong>SAP</strong><span style="font-weight:400;opacity:0.85;">| Fiori Launchpad</span>
    </div>
    <div style="padding:12px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:10px;display:flex;flex-direction:column;justify-content:space-between;">
        <div style="color:var(--card-accent);font-size:14px;">$</div>
        <div>
          <div style="font-size:11px;font-weight:600;">Sales Orders</div>
          <div style="font-size:24px;font-weight:300;line-height:1;">128</div>
          <div style="font-size:9px;color:var(--card-fg-muted);">Open</div>
        </div>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:10px;display:flex;flex-direction:column;justify-content:space-between;">
        <div style="color:var(--card-accent);font-size:14px;">📊</div>
        <div>
          <div style="font-size:11px;font-weight:600;">Revenue Q3</div>
          <div style="font-size:24px;font-weight:300;line-height:1;">$2.4M</div>
          <div style="font-size:9px;color:#5DCB47;font-weight:600;">▲ 12% YoY</div>
        </div>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:10px;display:flex;flex-direction:column;justify-content:space-between;">
        <div style="color:var(--card-accent);font-size:14px;">⚡</div>
        <div>
          <div style="font-size:11px;font-weight:600;">Approvals</div>
          <div style="font-size:24px;font-weight:300;line-height:1;">12</div>
          <div style="font-size:9px;color:#F0A04B;font-weight:600;">⚠ 3 overdue</div>
        </div>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:10px;display:flex;flex-direction:column;justify-content:space-between;">
        <div style="color:var(--card-accent);font-size:14px;">👥</div>
        <div>
          <div style="font-size:11px;font-weight:600;">Headcount</div>
          <div style="font-size:24px;font-weight:300;line-height:1;">3,412</div>
          <div style="font-size:9px;color:var(--card-fg-muted);">Active</div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://experience.sap.com/fiori-design-web/
  - https://experience.sap.com/fiori-design-web/colors/
  - https://www.sap.com/72icons
---

### ① 브랜드 DNA
- **브랜드명**: SAP Fiori Design (Fiori 3 / Horizon)
- **한 줄 정체성**: ERP 데이터의 광활한 풍경을 한 화면에 정돈하는 엔터프라이즈 시스템
- **공식 디자인 철학**: "Role-based, delightful, simple, coherent, adaptive"
- **시그니처 요소 1개**: SAP Brand Indigo(#0070F2) + 72 Sans 폰트 + LaunchPad의 카드 타일 그리드

### ② 톤 & 무드
- **핵심 키워드 3개**: 정돈, 엔터프라이즈, 신뢰
- **무드 설명**: 흰 캔버스 위 정확한 격자, 절제된 인디고 강조, 차분한 회색. 거대 ERP 데이터를 사용자 역할별로 정리해 보여준다.
- **비주얼 스타일**: 모던 미니멀 (정보 위계 우선)
- **밀도(Density)**: Compact — Fiori 3 Cozy/Compact 두 모드 지원
- **모서리 성향**: Soft (4~8px, Horizon에서 8px 강화)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - SAP Brand Indigo / Horizon Blue (dark surface 대비용으로 한 단계 밝게) */
  --color-primary-50:  #0A2A52;  /* deepest blue tint on dark */
  --color-primary-100: #0D386E;
  --color-primary-200: #114B92;
  --color-primary-300: #1A66C9;
  --color-primary-400: #0070F2;  /* Brand Color (light 기본) */
  --color-primary-500: #4F99FF;  /* dark 기본 accent */
  --color-primary-600: #79B2FF;  /* hover (밝아짐) */
  --color-primary-700: #A6CCFF;
  --color-primary-800: #D3E5FF;
  --color-primary-900: #E8F2FF;

  /* Secondary - Mango (positive accent) */
  --color-secondary-500: #FF8C42;

  /* Neutral - Horizon (dark ramp: 0 = 가장 어두움 → 1000 = 가장 밝음) */
  --color-neutral-0:    #0E141A;  /* darkest canvas */
  --color-neutral-50:   #1D232A;  /* Background */
  --color-neutral-100:  #29313A;  /* subtle surface */
  --color-neutral-200:  #2C343C;  /* border */
  --color-neutral-300:  #3A444E;
  --color-neutral-500:  #6B7A89;  /* Text Tertiary */
  --color-neutral-700:  #B5BBC1;  /* Text Secondary */
  --color-neutral-800:  #D5DADD;
  --color-neutral-900:  #EAECEE;  /* Text Primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic (dark surface 위 가독) */
  --color-success-bg: #15291A;
  --color-success-fg: #5DCB47;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #F0A04B;
  --color-error-bg:   #2E1416;
  --color-error-fg:   #FF5C66;
  --color-info-bg:    #102A4D;
  --color-info-fg:    #4F99FF;

  /* Surface */
  --bg-base:     #1D232A;        /* Group Background */
  --bg-subtle:   #29313A;
  --bg-elevated: #2C343C;
  --bg-overlay:  #2C343C;

  /* Text */
  --text-primary:    #EAECEE;
  --text-secondary:  #B5BBC1;
  --text-tertiary:   #8A95A1;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5B6776;

  /* Border */
  --border-default: #2C343C;
  --border-subtle:  #242B33;
  --border-strong:  #4A5662;
  --border-focus:   #4F99FF;
}

[data-theme="light"] {
  /* Primary - SAP Brand Indigo / Horizon Blue */
  --color-primary-50:  #E8F2FF;
  --color-primary-100: #D3E5FF;
  --color-primary-200: #A6CCFF;
  --color-primary-300: #79B2FF;
  --color-primary-400: #4F99FF;
  --color-primary-500: #0070F2;  /* Brand Color */
  --color-primary-600: #0064D9;  /* hover */
  --color-primary-700: #0054AF;
  --color-primary-800: #00408A;
  --color-primary-900: #002B5C;

  /* Secondary - Mango (positive accent) */
  --color-secondary-500: #E76500;

  /* Neutral - Horizon */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F6F7;  /* Background */
  --color-neutral-100:  #EAECEE;
  --color-neutral-200:  #D5DADD;
  --color-neutral-300:  #B5BBC1;
  --color-neutral-500:  #5B738B;  /* Text Tertiary */
  --color-neutral-700:  #475E75;  /* Text Secondary */
  --color-neutral-800:  #223548;
  --color-neutral-900:  #131E29;  /* Text Primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E5F5E0;
  --color-success-fg: #36A41D;
  --color-warning-bg: #FEF1B5;
  --color-warning-fg: #B25400;
  --color-error-bg:   #FFE5E6;
  --color-error-fg:   #BB0000;
  --color-info-bg:    #E8F2FF;
  --color-info-fg:    #0070F2;

  /* Surface */
  --bg-base:     #F5F6F7;        /* Group Background */
  --bg-subtle:   #EAECEE;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  #FFFFFF;

  /* Text */
  --text-primary:    #131E29;
  --text-secondary:  #475E75;
  --text-tertiary:   #5B738B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B5BBC1;

  /* Border */
  --border-default: #D5DADD;
  --border-subtle:  #EAECEE;
  --border-strong:  #8C8C8C;
  --border-focus:   #0070F2;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: 72 (SAP의 자체 폰트, SAP 라이선스, 폴백 Arial)
  - 한글: Apple SD Gothic Neo / Malgun Gothic 폴백
- **위계**:
  - Display: 36px / 300 / 1.22 / 0
  - H1: 28px / 400 / 1.29 / 0
  - H2: 22px / 400 / 1.36 / 0
  - H3: 18px / 600 / 1.33 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 700 / 1.27 / 0.04em (uppercase)

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
- **Container**: max-width 1248px (16열), 좌우 패딩 16px (mobile) / 32px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;     /* Horizon 카드 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 2px 4px rgba(0,0,0,0.50);
--shadow-lg: 0 4px 8px rgba(0,0,0,0.60);
--shadow-xl: 0 8px 16px rgba(0,0,0,0.70);
```

### ⑧ Iconography
- **스타일**: Outline (SAP Icon Font, 700+ 글리프)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: SAP Icon Font (SAP 라이선스, Fiori 표준) / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 400 14px/1 "72", "72full", Arial, sans-serif;
  border-radius: var(--radius-md);
  padding: 0 12px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid var(--border-default);
  background: var(--bg-elevated);
  color: var(--color-primary-500);
  transition: background 100ms ease;
}
.btn:hover { background: var(--bg-subtle); }
.btn-primary { background: var(--color-primary-500); border-color: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); border-color: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }

.btn-secondary { /* default */ }
.btn-ghost { background: transparent; border-color: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); border-color: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 8px;
  height: 32px;
  font-size: 14px;
}
.input:hover { border-color: var(--border-strong); }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 1px var(--border-focus); }
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card** (Fiori Card)
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
.card-head { padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 8px; font-weight: 600; }
.card-body { padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge / Object Status**
```css
.status { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; }
.status-positive { color: var(--color-success-fg); }
.status-critical { color: var(--color-warning-fg); }
.status-negative { color: var(--color-error-fg); }
.status-information { color: var(--color-primary-500); }

.tag { padding: 0 8px; height: 18px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 600; line-height: 18px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Shell Header)**
```css
.shell-header { height: 44px; background: #0B1722; color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 12px; }
.shell-header .product { font-weight: 600; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
```

### ⑪ Anti-patterns
1. Object Status 색을 임의 컬러로 대체 금지 — positive/critical/negative 의미 토큰 보존
2. LaunchPad 타일 크기를 임의 변경 금지 — 1x1 / 2x1 / 2x2 표준 외 금지
3. 한 화면에 모달 + dialog + popover 동시 노출 금지 — 사용자 경로 추적 불가
4. 데이터 테이블에 4단계 이상 row coloring 금지 — zebra만 권장
5. Brand Color(#0070F2)를 destructive 액션에 사용 금지

### ⑫ 시그니처 적용 예시 (Fiori Launchpad)

```html
<style>
  body { margin: 0; font-family: "72", "72full", Arial, "Apple SD Gothic Neo", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .shell-header { /* 위 정의 */ }
  .home { padding: 32px; max-width: 1248px; margin: 0 auto; }
  .group-title { font-size: 14px; font-weight: 600; color: var(--text-secondary); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
  .tiles { display: grid; grid-template-columns: repeat(auto-fill, 176px); gap: 8px; margin-bottom: 32px; }
  .tile { background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px; height: 176px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm); transition: box-shadow 200ms ease, transform 200ms ease; cursor: pointer; }
  .tile:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .tile .icon-tile { width: 24px; height: 24px; color: var(--color-primary-500); font-size: 18px; }
  .tile .body { display: flex; flex-direction: column; gap: 2px; }
  .tile .num { font-size: 36px; font-weight: 300; line-height: 1; color: var(--text-primary); }
  .tile .unit { font-size: 12px; color: var(--text-secondary); }
  .tile .title { font-size: 14px; font-weight: 600; }
  .tile .subtitle { font-size: 12px; color: var(--text-secondary); }
</style>

<header class="shell-header">
  <span style="font-weight:700">SAP</span>
  <span class="product">| Fiori Launchpad</span>
</header>

<main class="home">
  <div class="group-title">My Home</div>
  <div class="tiles">
    <div class="tile">
      <div class="icon-tile">$</div>
      <div class="body"><div class="title">Sales Orders</div><div class="num">128</div><div class="unit">Open</div></div>
      <div class="subtitle">Last 30 days</div>
    </div>
    <div class="tile">
      <div class="icon-tile">⚡</div>
      <div class="body"><div class="title">Approvals</div><div class="num">12</div><div class="unit">Pending</div></div>
      <span class="status status-critical">⚠ 3 overdue</span>
    </div>
    <div class="tile">
      <div class="icon-tile">📊</div>
      <div class="body"><div class="title">Revenue Q3</div><div class="num">$2.4M</div></div>
      <span class="status status-positive">▲ 12% YoY</span>
    </div>
    <div class="tile">
      <div class="icon-tile">👥</div>
      <div class="body"><div class="title">Headcount</div><div class="num">3,412</div></div>
      <div class="subtitle">Active employees</div>
    </div>
  </div>
</main>
```
