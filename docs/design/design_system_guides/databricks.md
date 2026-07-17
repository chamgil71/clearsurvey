---
brand: Databricks
brand_ko: 데이터브릭스
slug: databricks
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - ai

color_tone: warm
primary_color_hex: "#FF3621"
primary_color_name: "Databricks Red"
mood:
  - 데이터+AI
  - 강렬
  - 레이크하우스

font_category: sans-serif
font_primary: DM Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2013
last_major_revision: 2025
signature_keyword: "강렬한 레드 + 노트북 셀 그리드 + Spark/MLflow 통합의 레이크하우스"

card_tokens: |
  {
    "light": { "bg": "#F9F7F4", "surface": "#FFFFFF", "border": "#E4DDD3", "fg": "#1B3139", "fg_muted": "#5F7682", "accent": "#FF3621" },
    "dark":  { "bg": "#0E2025", "surface": "#1B3139", "border": "#2D444E", "fg": "#FFFFFF", "fg_muted": "#8A8377", "accent": "#FF4731" }
  }

hero_html: |
  <div style="font-family:'DM Sans','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:26px;height:26px;background:var(--card-accent);border-radius:6px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">▲</div>
      <strong style="font-size:14px;font-weight:600;">analytics.ipynb</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">DBR 15.4 · ML</span>
    </div>
    <div style="padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:hidden;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;overflow:hidden;">
        <div style="background:var(--card-bg);padding:4px 10px;font:600 10px/1.4 inherit;color:var(--card-fg-muted);letter-spacing:0.04em;text-transform:uppercase;border-bottom:1px solid var(--card-border);">Cmd 1 · Python</div>
        <div style="padding:8px 10px;font:400 12px/1.55 'JetBrains Mono','SF Mono',monospace;">
          <div><span style="color:#A626A4;">df</span> = spark.read.<span style="color:#0184BC;">parquet</span>(<span style="color:#50A14F;">"s3://lake/users"</span>)</div>
          <div><span style="color:#A626A4;">df</span>.<span style="color:#0184BC;">groupBy</span>(<span style="color:#50A14F;">"region"</span>).<span style="color:#0184BC;">count</span>().show()</div>
        </div>
        <div style="background:var(--card-bg);padding:4px 10px;font:500 10px/1.4 inherit;color:var(--card-fg);border-top:1px solid var(--card-border);">✓ 0.8s · 4M rows · 6 partitions</div>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;overflow:hidden;">
        <div style="background:var(--card-bg);padding:4px 10px;font:600 10px/1.4 inherit;color:var(--card-fg-muted);letter-spacing:0.04em;text-transform:uppercase;border-bottom:1px solid var(--card-border);">Cmd 2 · SQL</div>
        <div style="padding:8px 10px;font:400 12px/1.55 'JetBrains Mono',monospace;"><span style="color:#A626A4;">SELECT</span> * <span style="color:#A626A4;">FROM</span> users <span style="color:#A626A4;">LIMIT</span> 10</div>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <div style="background:var(--card-accent);color:#fff;border-radius:4px;padding:7px 16px;font:600 12px/1 inherit;">▶ Run all</div>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">Cluster: ml-prod (i3.xlarge)</span>
    </div>
  </div>

sources:
  - https://www.databricks.com/
  - https://docs.databricks.com/
---

### ① 브랜드 DNA
- **브랜드명**: Databricks
- **한 줄 정체성**: 데이터 + AI 레이크하우스 — Spark 창시자가 만든 통합 분석 플랫폼
- **공식 디자인 철학**: "Lakehouse" — 데이터 웨어하우스 + 데이터 레이크의 통합, 인텔리전스 우선
- **시그니처 요소 1개**: 빨강 삼각형(▲) 모노그램 + Databricks Red(#FF3621) + 베이지(#F9F7F4) 캔버스 + 노트북 셀 단위 카드(Cmd N · 언어 · 실행 상태) UI. Snowflake의 시안과 정반대의 따뜻한 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 데이터+AI, 강렬, 레이크하우스
- **무드 설명**: 베이지/따뜻한 회색 베이스 + 짙은 네이비(#1B3139) 텍스트. 강조는 빨강 한 가지. 노트북 셀별 인풋/아웃풋 박스가 뚜렷.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Databricks Red */
  --color-primary-50:  #FFE7E3;
  --color-primary-100: #FFB8AD;
  --color-primary-200: #FF8B79;
  --color-primary-300: #FF6047;
  --color-primary-400: #FF4731;
  --color-primary-500: #FF3621;   /* Databricks Red */
  --color-primary-600: #DB2210;
  --color-primary-700: #AA1A0B;
  --color-primary-800: #771308;
  --color-primary-900: #4A0B04;

  /* Secondary - Lakehouse Navy */
  --color-secondary-500: #1B3139;
  --color-secondary-600: #0E2025;

  /* Neutral - Warm gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9F7F4;     /* canvas bg */
  --color-neutral-100:  #F2EFE9;
  --color-neutral-200:  #E4DDD3;
  --color-neutral-300:  #C6BDAF;
  --color-neutral-500:  #8A8377;
  --color-neutral-700:  #5F7682;
  --color-neutral-800:  #2D444E;
  --color-neutral-900:  #1B3139;     /* text primary */
  --color-neutral-1000: #0E2025;

  /* Semantic */
  --color-success-bg: #E1F4EA;
  --color-success-fg: #00A972;
  --color-warning-bg: #FFF1D5;
  --color-warning-fg: #B07A00;
  --color-error-bg:   #FFE0D8;
  --color-error-fg:   #DB2210;
  --color-info-bg:    #DAEBFF;
  --color-info-fg:    #0073E6;

  /* Code highlight */
  --code-fn:    #0184BC;
  --code-kw:    #A626A4;
  --code-str:   #50A14F;
  --code-num:   #986801;
  --code-cmt:   #8A8377;

  /* Surface */
  --bg-base:     #F9F7F4;
  --bg-subtle:   #F2EFE9;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(27,49,57,0.50);

  /* Text */
  --text-primary:    #1B3139;
  --text-secondary:  #2D444E;
  --text-tertiary:   #5F7682;
  --text-on-primary: #FFFFFF;
  --text-link:       #DB2210;
  --text-disabled:   #C6BDAF;

  /* Border */
  --border-default: #E4DDD3;
  --border-subtle:  #F2EFE9;
  --border-strong:  #C6BDAF;
  --border-focus:   #FF3621;
}

[data-theme="dark"] {
  --bg-base:     #0E2025;
  --bg-subtle:   #142B33;
  --bg-elevated: #1B3139;
  --text-primary:    #FFFFFF;
  --text-secondary:  #E4DDD3;
  --border-default:  #2D444E;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **DM Sans** / Inter / system-ui
  - 코드: **JetBrains Mono** / SF Mono
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 700 / 1.2
  - H1: 26px / 700 / 1.25
  - H2: 20px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 16px / 400 / 1.55
  - Body: 14px / 400 / 1.5
  - Body Small: 12px / 500 / 1.4
  - Code: 13px / 400 / 1.55 mono
  - Caption: 11px / 600 / 1.3

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
--radius-sm: 3px;
--radius-md: 4px;
--radius-lg: 6px;     /* 노트북 셀 */
--radius-xl: 10px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(27,49,57,0.06);
--shadow-md: 0 4px 12px rgba(27,49,57,0.08);
--shadow-lg: 0 12px 32px rgba(27,49,57,0.14);
```

### ⑧ Iconography
- **스타일**: Outline (2px) + Filled 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 'DM Sans', Inter, sans-serif; border-radius: 4px; padding: 8px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-run { background: var(--color-primary-500); color: #fff; padding: 8px 14px; font-weight: 700; }
.btn-cluster { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); padding: 6px 12px; font: 600 12px/1 inherit; }
```

**Input / Cell**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 7px 10px; font: 400 13px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(255,54,33,0.18); }
.cell { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; overflow: hidden; }
.cell:focus-within { border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(255,54,33,0.10); }
.cell .head { padding: 5px 12px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); font: 700 11px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 10px; }
.cell .head .lang { padding: 1px 6px; border-radius: 3px; background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); font-size: 10px; }
.cell .src { padding: 10px 12px; font: 400 13px/1.55 'JetBrains Mono', monospace; color: var(--text-primary); }
.cell .out { padding: 8px 12px; background: var(--bg-base); border-top: 1px solid var(--border-default); font: 500 12px/1.5 inherit; color: var(--text-primary); }
```

**Card (Cluster / Job status)**
```css
.cluster-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 14px 16px; display: grid; grid-template-columns: 12px 1fr auto auto; gap: 12px; align-items: center; }
.cluster-card .dot { width: 10px; height: 10px; border-radius: 9999px; background: var(--color-success-fg); }
.cluster-card .name { font: 700 14px/1.3 inherit; }
.cluster-card .meta { font: 500 12px/1.4 inherit; color: var(--text-tertiary); margin-top: 3px; }
```

**Badge / Tag**
```css
.badge-running { background: var(--color-success-bg); color: var(--color-success-fg); border-radius: 4px; padding: 3px 10px; font: 700 11px/1.3 inherit; }
.badge-failed  { background: var(--color-error-bg); color: var(--color-error-fg); border-radius: 4px; padding: 3px 10px; font: 700 11px/1.3 inherit; }
.tag-python    { background: rgba(1,132,188,0.12); color: var(--code-fn); border-radius: 3px; padding: 1px 7px; font: 700 11px/1.3 inherit; }
.tag-sql       { background: rgba(166,38,164,0.12); color: var(--code-kw); border-radius: 3px; padding: 1px 7px; font: 700 11px/1.3 inherit; }
.tag-mlflow    { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 3px; padding: 1px 7px; font: 700 11px/1.3 inherit; }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--color-secondary-500); color: #fff; width: 240px; padding: 14px 0; }
.sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 18px 18px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.sidebar .brand .logo { width: 32px; height: 32px; background: var(--color-primary-500); border-radius: 6px; display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
.sidebar .item { display: flex; align-items: center; gap: 12px; padding: 9px 18px; font: 500 14px/1 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
.sidebar .item:hover { background: rgba(255,255,255,0.07); color: #fff; }
.sidebar .item.active { background: rgba(255,54,33,0.16); color: #FFB8AD; border-left: 3px solid var(--color-primary-500); padding-left: 15px; font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 빨강 외 강조색 추가 금지 — Databricks Red 단일 강조
2. 노트북 셀 경계를 흰 배경 흐림 없이 무경계로 표시 금지 — 셀별 보더 + Cmd N 라벨 패턴 유지
3. 캔버스를 순백색(#FFFFFF)으로 만들기 금지 — 베이지 #F9F7F4 따뜻한 톤 고수
4. Snowflake식 짙은 사이드바와 차별 없는 톤 사용 금지 — Lakehouse Navy(#1B3139) + 빨강 액세스
5. 인풋/아웃풋 패널 합치기 금지 — 셀 안에서 .head/.src/.out 3단 분리

### ⑫ 시그니처 적용 예시 (Databricks 노트북)

```html
<style>
  body { margin: 0; font-family: 'DM Sans', Inter, Pretendard, -apple-system, sans-serif; color: #1B3139; background: #F9F7F4; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: #1B3139; color: #fff; padding: 14px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 18px 18px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .sidebar .brand .logo { width: 32px; height: 32px; background: #FF3621; border-radius: 6px; display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
  .sidebar .brand .name { font: 700 16px/1 inherit; }
  .sidebar .section { padding: 14px 18px 4px; font: 700 11px/1.4 inherit; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
  .sidebar .item { display: flex; align-items: center; gap: 12px; padding: 9px 18px; font: 500 14px/1 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
  .sidebar .item:hover { background: rgba(255,255,255,0.07); }
  .sidebar .item.active { background: rgba(255,54,33,0.16); color: #FFB8AD; border-left: 3px solid #FF3621; padding-left: 15px; font-weight: 700; }
  main { padding: 24px 28px; display: grid; gap: 14px; }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h1 { margin: 0; font: 700 22px/1.2 inherit; }
  .head .meta { font: 600 12px/1.3 inherit; color: #5F7682; background: #fff; border: 1px solid #E4DDD3; border-radius: 4px; padding: 4px 10px; }
  .head .right { margin-left: auto; display: flex; gap: 8px; align-items: center; }
  .btn-run { background: #FF3621; color: #fff; border: 0; padding: 9px 18px; border-radius: 4px; font: 700 13px/1 inherit; cursor: pointer; }
  .btn-cluster { background: #fff; color: #1B3139; border: 1px solid #C6BDAF; border-radius: 4px; padding: 7px 12px; font: 600 12px/1 inherit; display: inline-flex; align-items: center; gap: 6px; }
  .btn-cluster .dot { width: 8px; height: 8px; background: #00A972; border-radius: 9999px; }
  .cells { display: grid; gap: 10px; }
  .cell { background: #fff; border: 1px solid #E4DDD3; border-radius: 6px; overflow: hidden; }
  .cell:focus-within, .cell.active { border-color: #FF3621; box-shadow: 0 0 0 3px rgba(255,54,33,0.10); }
  .cell .head-bar { padding: 5px 12px; background: #F9F7F4; border-bottom: 1px solid #E4DDD3; font: 700 11px/1.4 inherit; color: #5F7682; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 10px; }
  .cell .head-bar .lang { padding: 1px 7px; border-radius: 3px; background: #fff; color: #1B3139; border: 1px solid #E4DDD3; font-size: 10px; text-transform: none; letter-spacing: 0; }
  .cell .src { padding: 10px 14px; font: 400 13px/1.6 'JetBrains Mono', SFMono-Regular, monospace; color: #1B3139; }
  .cell .out { padding: 8px 14px; background: #F9F7F4; border-top: 1px solid #E4DDD3; font: 500 12px/1.5 inherit; color: #1B3139; display: flex; gap: 10px; align-items: center; }
  .cell .out .pill { background: #E1F4EA; color: #00A972; border-radius: 9999px; padding: 2px 8px; font: 700 10px/1.3 inherit; }
  .kw  { color: #A626A4; }
  .fn  { color: #0184BC; }
  .str { color: #50A14F; }
  .cmt { color: #8A8377; font-style: italic; }
  .num { color: #986801; }
  .var { color: #1B3139; }
  .grid-out { background: #fff; border-radius: 4px; border: 1px solid #E4DDD3; overflow: hidden; margin-top: 6px; width: 100%; max-width: 400px; }
  .grid-out .row { display: grid; grid-template-columns: 1fr 1fr; padding: 6px 12px; font: 500 12px/1.3 inherit; border-bottom: 1px solid #F2EFE9; }
  .grid-out .row:last-child { border-bottom: 0; }
  .grid-out .row.head { background: #F9F7F4; color: #5F7682; font-weight: 700; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">▲</div><div class="name">Databricks</div></div>
    <div class="section">Workspace</div>
    <div class="item active">📓 analytics.ipynb</div>
    <div class="item">📁 Notebooks</div>
    <div class="item">🗂 Repos</div>
    <div class="section">Data</div>
    <div class="item">🪣 Catalog (Unity)</div>
    <div class="item">🧊 Delta Live Tables</div>
    <div class="section">ML</div>
    <div class="item">🧪 MLflow Experiments</div>
    <div class="item">🤖 Model Serving</div>
    <div class="section">Compute</div>
    <div class="item">⚙ Clusters</div>
    <div class="item">⏰ Jobs</div>
  </aside>
  <main>
    <div class="head">
      <h1>analytics.ipynb</h1>
      <span class="meta">DBR 15.4 · ML · Photon</span>
      <span class="meta">@minji · 5분 전 저장</span>
      <div class="right">
        <button class="btn-cluster"><span class="dot"></span>ml-prod (i3.xlarge · 4 workers)</button>
        <button class="btn-run">▶ Run all</button>
      </div>
    </div>
    <section class="cells">
      <div class="cell active">
        <div class="head-bar"><span>Cmd 1</span><span class="lang">Python</span><span style="margin-left:auto;font-weight:500;color:#5F7682;">@minji · ⏱ 0.8s</span></div>
        <div class="src">
<span class="cmt"># s3 lake에서 parquet 읽어 region별 카운트</span>
<span class="var">df</span> = spark.<span class="fn">read</span>.<span class="fn">parquet</span>(<span class="str">"s3://lake/users"</span>)
<span class="var">df</span>.<span class="fn">groupBy</span>(<span class="str">"region"</span>).<span class="fn">count</span>().<span class="fn">orderBy</span>(<span class="str">"count"</span>, ascending=<span class="kw">False</span>).<span class="fn">show</span>(<span class="num">5</span>)
        </div>
        <div class="out">
          <span class="pill">✓ 0.8s</span>
          <span>4,127,082 rows · 6 partitions</span>
          <div class="grid-out">
            <div class="row head"><span>region</span><span>count</span></div>
            <div class="row"><span>us-east-1</span><span>1,402,118</span></div>
            <div class="row"><span>ap-northeast-2</span><span>987,401</span></div>
            <div class="row"><span>eu-west-1</span><span>823,776</span></div>
          </div>
        </div>
      </div>
      <div class="cell">
        <div class="head-bar"><span>Cmd 2</span><span class="lang">SQL</span></div>
        <div class="src">
<span class="kw">SELECT</span> region, <span class="kw">AVG</span>(age) <span class="kw">AS</span> avg_age
<span class="kw">FROM</span> main.analytics.users
<span class="kw">WHERE</span> created_at &gt; <span class="str">'2026-01-01'</span>
<span class="kw">GROUP BY</span> region <span class="kw">ORDER BY</span> avg_age <span class="kw">DESC</span> <span class="kw">LIMIT</span> <span class="num">10</span>;
        </div>
      </div>
      <div class="cell">
        <div class="head-bar"><span>Cmd 3</span><span class="lang">Python</span></div>
        <div class="src">
<span class="kw">import</span> mlflow
mlflow.<span class="fn">set_experiment</span>(<span class="str">"/Shared/region-churn"</span>)
<span class="kw">with</span> mlflow.<span class="fn">start_run</span>(): mlflow.<span class="fn">log_metric</span>(<span class="str">"auc"</span>, <span class="num">0.92</span>)
        </div>
      </div>
    </section>
  </main>
</div>
```
