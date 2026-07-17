---
brand: Snowflake
brand_ko: 스노우플레이크
slug: snowflake
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#29B5E8"
primary_color_name: "Snowflake Cyan"
mood:
  - 데이터
  - 청결
  - 엔터프라이즈

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2014
last_major_revision: 2025
signature_keyword: "눈송이 로고 + 라이트 시안 + 가상 웨어하우스 그리드의 데이터 클라우드"

card_tokens: |
  {
    "light": { "bg": "#F4F7F9", "surface": "#FFFFFF", "border": "#DDE5EB", "fg": "#11181C", "fg_muted": "#6B7785", "accent": "#29B5E8" },
    "dark":  { "bg": "#11181C", "surface": "#1A2127", "border": "#2D3640", "fg": "#FFFFFF", "fg_muted": "#C0CAD3", "accent": "#29B5E8" }
  }

hero_html: |
  <div style="font-family:'Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:26px;height:26px;background:var(--card-accent);display:grid;place-items:center;color:#fff;font:900 16px/1 sans-serif;border-radius:6px;">❄</div>
      <strong style="font-size:14px;font-weight:600;">PROD_DB / ANALYTICS</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">Warehouse: COMPUTE_WH</span>
    </div>
    <div style="padding:10px 12px;font:400 12px/1.6 'JetBrains Mono','SF Mono',monospace;background:var(--card-surface);color:var(--card-fg);overflow:hidden;">
      <div><span style="color:var(--card-accent);">SELECT</span> region, <span style="color:var(--card-accent);">COUNT</span>(*) AS users</div>
      <div><span style="color:var(--card-accent);">FROM</span> ANALYTICS.PUBLIC.USERS</div>
      <div><span style="color:var(--card-accent);">WHERE</span> created_at &gt; <span style="color:#5BAA46;">'2026-01-01'</span></div>
      <div><span style="color:var(--card-accent);">GROUP BY</span> region;</div>
      <div style="margin-top:6px;background:#E8F7FC;padding:6px 10px;border-radius:4px;border-left:3px solid var(--card-accent);color:var(--card-fg);font:500 11px/1.4 'Inter',sans-serif;">✓ 12 rows · 0.42s · XS</div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <div style="background:var(--card-accent);color:#fff;border-radius:6px;padding:7px 16px;font:600 12px/1 inherit;">▶ Run</div>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">Credits 0.001</span>
    </div>
  </div>

sources:
  - https://www.snowflake.com/
  - https://docs.snowflake.com/
---

### ① 브랜드 DNA
- **브랜드명**: Snowflake
- **한 줄 정체성**: 클라우드 데이터 플랫폼 — 컴퓨트와 스토리지를 분리한 멀티클러스터 웨어하우스
- **공식 디자인 철학**: "Mobilize your data" — 청결한 데이터 도구 톤, 시안 단일 강조
- **시그니처 요소 1개**: 눈송이(❄) 로고 + Snowflake Cyan(#29B5E8) + Warehouse(XS/S/M/L) 사이즈 라벨 칩 + SQL 워크시트의 시안 키워드 하이라이트. Databricks의 빨강·BigQuery의 블루와 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 데이터, 청결, 엔터프라이즈
- **무드 설명**: 흰 배경 + 옅은 회청색 보더. 색은 시안 단일 강조, 결과 패널의 그린/옐로 인디케이터. 헤더는 짙은 네이비(#11181C), 본문은 #F4F7F9.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~8px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Snowflake Cyan */
  --color-primary-50:  #E8F7FC;
  --color-primary-100: #BCE8F7;
  --color-primary-200: #8FD8F2;
  --color-primary-300: #62C8ED;
  --color-primary-400: #45BFEB;
  --color-primary-500: #29B5E8;   /* Snowflake Cyan */
  --color-primary-600: #1E96C2;
  --color-primary-700: #157496;
  --color-primary-800: #0D526A;
  --color-primary-900: #073142;

  /* Secondary - Navy */
  --color-secondary-500: #11181C;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F7F9;
  --color-neutral-100:  #ECF1F4;
  --color-neutral-200:  #DDE5EB;
  --color-neutral-300:  #C0CAD3;
  --color-neutral-500:  #8A95A0;
  --color-neutral-700:  #6B7785;
  --color-neutral-800:  #3D444D;
  --color-neutral-900:  #1F252B;
  --color-neutral-1000: #11181C;

  /* Semantic */
  --color-success-bg: #E1F4EA;
  --color-success-fg: #1E854A;
  --color-warning-bg: #FFF3DA;
  --color-warning-fg: #A67000;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #C53030;
  --color-info-bg:    #E8F7FC;
  --color-info-fg:    #29B5E8;

  /* Surface */
  --bg-base:     #F4F7F9;
  --bg-subtle:   #ECF1F4;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(17,24,28,0.50);

  /* Text */
  --text-primary:    #11181C;
  --text-secondary:  #3D444D;
  --text-tertiary:   #6B7785;
  --text-on-primary: #FFFFFF;
  --text-link:       #1E96C2;
  --text-disabled:   #C0CAD3;

  /* Border */
  --border-default: #DDE5EB;
  --border-subtle:  #ECF1F4;
  --border-strong:  #C0CAD3;
  --border-focus:   #29B5E8;
}

[data-theme="dark"] {
  --bg-base:     #11181C;
  --bg-subtle:   #1A2127;
  --bg-elevated: #232B33;
  --text-primary:    #FFFFFF;
  --text-secondary:  #DDE5EB;
  --border-default:  #2D3640;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / Helvetica Neue / system-ui
  - SQL: **JetBrains Mono** / SF Mono / Source Code Pro
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 700 / 1.2
  - H1: 24px / 700 / 1.25
  - H2: 19px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 15px / 400 / 1.55
  - Body: 14px / 400 / 1.5
  - Body Small: 12px / 500 / 1.4
  - Code: 13px / 400 / 1.6 mono
  - Caption: 11px / 500 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```

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
--shadow-sm: 0 1px 2px rgba(17,24,28,0.06);
--shadow-md: 0 4px 12px rgba(17,24,28,0.08);
--shadow-lg: 0 12px 32px rgba(17,24,28,0.14);
```

### ⑧ Iconography
- **스타일**: Outline (2px) — 자체 + Phosphor
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, sans-serif; border-radius: 6px; padding: 8px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-run { background: var(--color-primary-500); color: #fff; padding: 9px 18px; display: inline-flex; align-items: center; gap: 6px; font-weight: 700; }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-600); }
```

**Input / SQL Editor**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 7px 10px; font: 400 13px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(41,181,232,0.18); }
.sql-editor { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 12px 14px; font: 400 14px/1.65 'JetBrains Mono', monospace; color: var(--text-primary); min-height: 200px; }
.sql-editor .kw  { color: var(--color-primary-500); font-weight: 600; }
.sql-editor .str { color: #5BAA46; }
.sql-editor .num { color: #B58400; }
.sql-editor .cmt { color: var(--text-tertiary); font-style: italic; }
```

**Card (Worksheet / Result)**
```css
.worksheet { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; box-shadow: var(--shadow-sm); }
.worksheet .head { padding: 10px 14px; border-bottom: 1px solid var(--border-default); display: flex; align-items: center; gap: 10px; font: 600 13px/1.3 inherit; }
.result { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 12px 14px; }
.result-banner { background: var(--color-info-bg); border-left: 3px solid var(--color-primary-500); padding: 8px 12px; border-radius: 4px; font: 500 12px/1.4 inherit; color: var(--text-primary); }
```

**Badge / Tag**
```css
.badge-wh { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 4px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
.badge-wh-xs { } .badge-wh-s { background: #FFF3DA; color: #A67000; } .badge-wh-m { background: #FFEAD6; color: #8C4500; }
.tag-db { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-default); border-radius: 4px; padding: 2px 8px; font: 600 12px/1.3 'JetBrains Mono', monospace; }
.tag-status-ok { background: var(--color-success-bg); color: var(--color-success-fg); border-radius: 9999px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--color-neutral-1000); color: #fff; width: 240px; padding: 14px 0; }
.sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 18px 18px; }
.sidebar .brand .logo { width: 30px; height: 30px; background: var(--color-primary-500); border-radius: 6px; display: grid; place-items: center; font: 900 16px/1 inherit; }
.sidebar .item { display: flex; align-items: center; gap: 12px; padding: 9px 18px; font: 500 14px/1 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
.sidebar .item:hover { background: rgba(255,255,255,0.06); color: #fff; }
.sidebar .item.active { background: rgba(41,181,232,0.18); color: var(--color-primary-300); border-left: 3px solid var(--color-primary-500); padding-left: 15px; font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 짙은 네이비 단색 강조 금지 — 시안(#29B5E8)이 액션 컬러
2. 워크시트를 단순 텍스트 에디터로 표현 금지 — SQL 키워드 시안 하이라이트 필수
3. Warehouse 사이즈를 텍스트로만 표기 금지 — 색 칩(XS/S/M/L/XL...) 사용
4. 카드 모서리 12px 이상 금지 — 6~8px Soft
5. 그라데이션 풀배경 금지 — 흰 캔버스 위 보더 톤 유지

### ⑫ 시그니처 적용 예시 (Snowflake Snowsight 워크시트)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; color: #11181C; background: #F4F7F9; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: #11181C; color: #fff; padding: 14px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 18px 18px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .sidebar .brand .logo { width: 30px; height: 30px; background: #29B5E8; border-radius: 6px; display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
  .sidebar .brand .name { font: 700 16px/1 inherit; }
  .sidebar .brand .sub  { font: 500 11px/1 inherit; color: rgba(255,255,255,0.55); margin-top: 3px; }
  .sidebar .section { padding: 14px 18px 4px; font: 700 11px/1.4 inherit; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
  .sidebar .item { display: flex; align-items: center; gap: 12px; padding: 9px 18px; font: 500 14px/1 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
  .sidebar .item:hover { background: rgba(255,255,255,0.06); }
  .sidebar .item.active { background: rgba(41,181,232,0.18); color: #BCE8F7; border-left: 3px solid #29B5E8; padding-left: 15px; font-weight: 700; }
  main { padding: 24px 28px; display: grid; gap: 14px; }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h1 { margin: 0; font: 700 22px/1.2 inherit; }
  .head .db { background: #fff; border: 1px solid #DDE5EB; border-radius: 4px; padding: 4px 10px; font: 600 12px/1.3 'JetBrains Mono', monospace; }
  .head .wh { background: #E8F7FC; color: #157496; border-radius: 4px; padding: 4px 10px; font: 700 12px/1.3 inherit; }
  .head .right { margin-left: auto; display: flex; gap: 8px; align-items: center; }
  .wh-chip { display: inline-flex; gap: 4px; }
  .wh-chip .size { background: #F4F7F9; border: 1px solid #DDE5EB; padding: 4px 10px; font: 700 11px/1.3 inherit; color: #6B7785; border-radius: 4px; cursor: pointer; }
  .wh-chip .size.active { background: #29B5E8; color: #fff; border-color: #29B5E8; }
  .btn-run { background: #29B5E8; color: #fff; border: 0; padding: 9px 18px; border-radius: 6px; font: 700 14px/1 inherit; cursor: pointer; }
  .ws { background: #fff; border: 1px solid #DDE5EB; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(17,24,28,0.04); }
  .ws .tab-bar { display: flex; padding: 0 12px; border-bottom: 1px solid #DDE5EB; }
  .ws .tab { padding: 10px 14px; font: 600 13px/1.3 inherit; color: #6B7785; cursor: pointer; border-bottom: 2px solid transparent; }
  .ws .tab.active { color: #11181C; border-bottom-color: #29B5E8; }
  .ws .sql { padding: 14px 16px; font: 400 14px/1.65 'JetBrains Mono', Consolas, monospace; color: #11181C; }
  .kw  { color: #29B5E8; font-weight: 700; }
  .str { color: #5BAA46; }
  .num { color: #B58400; }
  .cmt { color: #6B7785; font-style: italic; }
  .banner { background: #E8F7FC; border-left: 3px solid #29B5E8; padding: 10px 14px; font: 600 13px/1.4 inherit; color: #11181C; display: flex; align-items: center; gap: 12px; }
  .banner .pill { background: #fff; border: 1px solid #BCE8F7; color: #157496; border-radius: 9999px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
  .grid { background: #fff; border: 1px solid #DDE5EB; border-radius: 8px; overflow: hidden; }
  .grid .head-row { display: grid; grid-template-columns: 1fr 1fr 1fr; padding: 10px 14px; font: 700 11px/1.3 inherit; color: #6B7785; text-transform: uppercase; letter-spacing: 0.04em; background: #F4F7F9; border-bottom: 1px solid #DDE5EB; }
  .grid .row { display: grid; grid-template-columns: 1fr 1fr 1fr; padding: 11px 14px; font: 500 13px/1.3 inherit; color: #11181C; border-bottom: 1px solid #ECF1F4; }
  .grid .row:last-child { border-bottom: 0; }
  .grid .row:hover { background: #F4F7F9; }
  .grid .num { color: #11181C; font: 600 13px/1 'JetBrains Mono', monospace; text-align: right; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">❄</div><div><div class="name">Snowflake</div><div class="sub">Snowsight</div></div></div>
    <div class="section">Worksheets</div>
    <div class="item active">📝 Untitled — analytics</div>
    <div class="item">📝 Daily KPI</div>
    <div class="section">Data</div>
    <div class="item">🗄 Databases</div>
    <div class="item">🚰 Streams</div>
    <div class="item">🔗 Stages</div>
    <div class="section">Admin</div>
    <div class="item">🏭 Warehouses</div>
    <div class="item">👥 Users &amp; Roles</div>
  </aside>
  <main>
    <div class="head">
      <h1>Untitled Worksheet</h1>
      <span class="db">PROD_DB.ANALYTICS</span>
      <span class="wh">COMPUTE_WH</span>
      <div class="right">
        <div class="wh-chip">
          <span class="size">XS</span><span class="size active">S</span><span class="size">M</span><span class="size">L</span><span class="size">XL</span>
        </div>
        <button class="btn-run">▶ Run</button>
      </div>
    </div>
    <section class="ws">
      <div class="tab-bar">
        <div class="tab active">SQL</div>
        <div class="tab">Python</div>
        <div class="tab">Chart</div>
      </div>
      <div class="sql">
<span class="cmt">-- 지역별 신규 가입자 집계</span>
<span class="kw">SELECT</span> region, <span class="kw">COUNT</span>(*) <span class="kw">AS</span> users, <span class="kw">AVG</span>(age) <span class="kw">AS</span> avg_age
<span class="kw">FROM</span> ANALYTICS.PUBLIC.USERS
<span class="kw">WHERE</span> created_at &gt; <span class="str">'2026-01-01'</span>
  <span class="kw">AND</span> region <span class="kw">IS NOT NULL</span>
<span class="kw">GROUP BY</span> region
<span class="kw">ORDER BY</span> users <span class="kw">DESC</span>
<span class="kw">LIMIT</span> <span class="num">10</span>;
      </div>
    </section>
    <div class="banner">
      <span>✓ Query completed</span>
      <span class="pill">12 rows</span>
      <span class="pill">0.42s</span>
      <span class="pill">XS · 0.001 credits</span>
      <span style="margin-left:auto;color:#6B7785;font:500 12px/1 inherit;">Cached</span>
    </div>
    <section class="grid">
      <div class="head-row"><span>REGION</span><span>USERS</span><span>AVG_AGE</span></div>
      <div class="row"><span>us-east-1</span><span class="num">12,408</span><span class="num">27.4</span></div>
      <div class="row"><span>ap-northeast-2</span><span class="num">9,128</span><span class="num">29.1</span></div>
      <div class="row"><span>eu-west-1</span><span class="num">7,624</span><span class="num">31.8</span></div>
      <div class="row"><span>ap-south-1</span><span class="num">4,310</span><span class="num">26.0</span></div>
    </section>
  </main>
</div>
```
