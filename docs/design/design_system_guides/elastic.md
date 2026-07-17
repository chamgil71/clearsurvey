---
brand: Elastic
brand_ko: 엘라스틱
slug: elastic
generated: 2026-05-14
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#1BA9F5"
primary_color_name: "Elastic Sky"
mood:
  - 검색
  - 분석
  - 관측성

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

released_year: 2010
last_major_revision: 2025
signature_keyword: "EUI 시스템 + ELK 4색(스카이/티얼/핑크/옐로) + Kibana 대시보드"

card_tokens: |
  {
    "light": { "bg": "#F1F4FA", "surface": "#FFFFFF", "border": "#D3DAE6", "fg": "#1A1C21", "fg_muted": "#69707D", "accent": "#1BA9F5" },
    "dark":  { "bg": "#1A1C21", "surface": "#25272E", "border": "#343741", "fg": "#DFE5EF", "fg_muted": "#B8BFCD", "accent": "#3DACF2" }
  }

hero_html: |
  <div style="font-family:'Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:26px;height:26px;background:var(--card-accent);border-radius:6px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">⊞</div>
      <strong style="font-size:14px;font-weight:600;">Kibana / Discover</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">logs-* · 24h</span>
    </div>
    <div style="padding:10px 12px;display:flex;flex-direction:column;gap:6px;overflow:hidden;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:8px 10px;font:500 11px/1.4 inherit;display:flex;gap:6px;align-items:center;">
        <span style="background:#E6F1FA;color:#0077CC;border-radius:3px;padding:1px 6px;font-weight:700;">status</span>
        <span style="color:var(--card-fg-muted);">:</span>
        <span style="color:var(--card-fg);font-weight:600;">500</span>
        <span style="margin-left:auto;background:var(--card-accent);color:#fff;border-radius:3px;padding:2px 8px;font-weight:700;">12 hits</span>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:8px 10px;font:400 11px/1.45 inherit;display:grid;grid-template-columns:48px 1fr;gap:6px;">
        <div style="color:var(--card-fg-muted);font:600 10px/1.4 'JetBrains Mono',monospace;">09:42</div>
        <div><span style="color:#017D73;">GET /api/users</span> <span style="color:#BD271E;font-weight:700;">500</span> <span style="color:var(--card-fg-muted);">12ms</span></div>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:8px 10px;font:400 11px/1.45 inherit;display:grid;grid-template-columns:48px 1fr;gap:6px;">
        <div style="color:var(--card-fg-muted);font:600 10px/1.4 'JetBrains Mono',monospace;">09:41</div>
        <div><span style="color:#017D73;">POST /auth/login</span> <span style="color:#017D73;font-weight:700;">200</span> <span style="color:var(--card-fg-muted);">82ms</span></div>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <div style="background:var(--card-accent);color:#fff;border-radius:4px;padding:7px 14px;font:600 12px/1 inherit;">Refresh</div>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">Auto · 30s</span>
    </div>
  </div>

sources:
  - https://elastic.co/
  - https://eui.elastic.co/
---

### ① 브랜드 DNA
- **브랜드명**: Elastic (Elasticsearch · Kibana · Logstash · Beats)
- **한 줄 정체성**: 검색 기반 데이터 플랫폼 — 로그·메트릭·APM·시큐리티 관측성을 하나로
- **공식 디자인 철학**: EUI(Elastic UI Framework) — 데이터 밀도가 높은 분석 대시보드 우선
- **시그니처 요소 1개**: 4색 ELK 잎(블루·티얼·핑크·옐로) 로고 + Elastic Sky(#1BA9F5) + KQL 검색바 + 디스커버의 시간 히스토그램 카드. Datadog 보라·Grafana 오렌지와 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 검색, 분석, 관측성
- **무드 설명**: 라이트 베이스(#F1F4FA), 흰 카드, 1px 보더로 패널 구분. 색은 시각화 차트와 액션에. 텍스트는 짙은 회색(#1A1C21).
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Elastic Sky */
  --color-primary-50:  #E6F4FD;
  --color-primary-100: #B8DFF9;
  --color-primary-200: #8ACAF5;
  --color-primary-300: #5BB6F1;
  --color-primary-400: #3DACF2;
  --color-primary-500: #1BA9F5;   /* Elastic Sky */
  --color-primary-600: #0077CC;
  --color-primary-700: #0058A0;
  --color-primary-800: #003A6E;
  --color-primary-900: #00203D;

  /* ELK 4색 (시각화 시그니처) */
  --color-elk-blue:  #1BA9F5;
  --color-elk-teal:  #017D73;
  --color-elk-pink:  #F990C0;
  --color-elk-yellow:#FEC514;

  /* Neutral - EUI grays */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F7FA;
  --color-neutral-100:  #F1F4FA;     /* page bg */
  --color-neutral-200:  #D3DAE6;     /* border */
  --color-neutral-300:  #98A2B3;
  --color-neutral-500:  #69707D;
  --color-neutral-700:  #535966;
  --color-neutral-800:  #343741;
  --color-neutral-900:  #1A1C21;
  --color-neutral-1000: #07090F;

  /* Semantic */
  --color-success-bg: #E0F3EC;
  --color-success-fg: #017D73;
  --color-warning-bg: #FFF1D4;
  --color-warning-fg: #BD8108;
  --color-error-bg:   #FCDFDD;
  --color-error-fg:   #BD271E;
  --color-info-bg:    #E6F4FD;
  --color-info-fg:    #0077CC;

  /* Surface */
  --bg-base:     #F1F4FA;
  --bg-subtle:   #F5F7FA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,28,33,0.50);

  /* Text */
  --text-primary:    #1A1C21;
  --text-secondary:  #343741;
  --text-tertiary:   #69707D;
  --text-on-primary: #FFFFFF;
  --text-link:       #0077CC;
  --text-disabled:   #98A2B3;

  /* Border */
  --border-default: #D3DAE6;
  --border-subtle:  #E6EAF1;
  --border-strong:  #98A2B3;
  --border-focus:   #1BA9F5;
}

[data-theme="dark"] {
  --bg-base:     #1A1C21;
  --bg-subtle:   #25272E;
  --bg-elevated: #25272E;
  --text-primary:    #DFE5EF;
  --text-secondary:  #B8BFCD;
  --border-default:  #343741;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** (EUI 기본) / system-ui
  - 코드: **Roboto Mono** / SF Mono / Consolas
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 700 / 1.2
  - H1: 24px / 700 / 1.25
  - H2: 18px / 700 / 1.3
  - H3: 16px / 700 / 1.35
  - Body Large: 14px / 400 / 1.5
  - Body: 14px / 400 / 1.5
  - Body Small: 12px / 400 / 1.5
  - Code: 12px / 400 / 1.55 mono
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
--radius-lg: 6px;
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 0.7px 1.4px rgba(0,0,0,0.08), 0 2.3px 2px rgba(0,0,0,0.04);   /* EUI */
--shadow-md: 0 4px 8px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.16);
```

### ⑧ Iconography
- **스타일**: EUI Icons (Outline 1.5px)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: EUI Icons / Phosphor Regular

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, sans-serif; border-radius: 4px; padding: 7px 14px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: rgba(27,169,245,0.10); color: var(--color-primary-700); border: 0; }
.btn-empty { background: transparent; color: var(--color-primary-600); padding: 6px 10px; }
.btn-warn { background: var(--color-warning-fg); color: #fff; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input (KQL bar)**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 7px 10px; font: 400 13px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(27,169,245,0.18); }
.kql { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 7px 10px; font: 500 13px/1.4 'Roboto Mono', monospace; color: var(--text-primary); display: flex; align-items: center; gap: 6px; }
.kql .pill { background: var(--color-info-bg); color: var(--color-info-fg); border-radius: 3px; padding: 1px 6px; font-weight: 700; font-size: 11px; }
```

**Card (Panel / Visualization)**
```css
.panel { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 14px 16px; box-shadow: var(--shadow-sm); }
.panel .head { display: flex; align-items: center; gap: 10px; font: 700 14px/1.3 inherit; margin-bottom: 10px; }
.panel .meta { color: var(--text-tertiary); font: 500 11px/1 inherit; margin-left: auto; }
.kpi { display: flex; flex-direction: column; gap: 4px; padding: 12px 16px; background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; }
.kpi .num { font: 700 26px/1 inherit; color: var(--text-primary); }
.kpi .label { font: 600 11px/1.3 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
```

**Badge / Tag**
```css
.badge-status-ok    { background: var(--color-success-bg); color: var(--color-success-fg); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 inherit; }
.badge-status-warn  { background: var(--color-warning-bg); color: var(--color-warning-fg); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 inherit; }
.badge-status-err   { background: var(--color-error-bg); color: var(--color-error-fg); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 inherit; }
.tag-field { background: var(--color-info-bg); color: var(--color-info-fg); border-radius: 3px; padding: 1px 6px; font: 700 11px/1.3 'Roboto Mono', monospace; }
.tag-kibana-app { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); border-radius: 4px; padding: 2px 8px; font: 600 11px/1.3 inherit; }
```

**Navigation (Top + Side)**
```css
.topbar { background: var(--bg-elevated); border-bottom: 1px solid var(--border-default); padding: 8px 14px; display: flex; align-items: center; gap: 12px; }
.topbar .logo-leaves { display: flex; gap: 2px; }
.topbar .logo-leaves span { width: 8px; height: 14px; border-radius: 9999px 9999px 0 0; }
.sidebar { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 240px; }
.sidebar .head { padding: 12px 16px 6px; font: 700 11px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
.sidebar .item { display: flex; align-items: center; gap: 10px; padding: 7px 16px; font: 500 13px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item.active { background: var(--color-info-bg); color: var(--color-info-fg); border-left: 3px solid var(--color-primary-500); padding-left: 13px; font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 90ms;
--duration-base: 180ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.34, 1.61, 0.7, 1);
```

### ⑪ Anti-patterns
1. ELK 4색 외 추가 시각화 컬러 남용 금지 — 블루/티얼/핑크/옐로 4색이 KPI 팔레트
2. 카드 모서리 12px 이상 금지 — 4~6px Soft가 EUI 시그니처
3. KQL 검색바를 일반 input 모양으로 표기 금지 — 모노스페이스 + 토큰 칩 패턴
4. 짙은 배경의 단일 컬러 대시보드 금지 — 라이트 베이스 + 차트별 컬러 분리
5. 본문에 모노스페이스 폰트 사용 금지 — Inter, 코드/필드명만 Roboto Mono

### ⑫ 시그니처 적용 예시 (Kibana Discover)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; color: #1A1C21; background: #F1F4FA; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: #fff; border-right: 1px solid #D3DAE6; padding: 12px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 8px; padding: 0 16px 14px; border-bottom: 1px solid #E6EAF1; }
  .sidebar .brand .leaves { display: flex; gap: 1px; }
  .sidebar .brand .leaves span { width: 6px; height: 16px; border-radius: 9999px 9999px 0 0; }
  .sidebar .brand .name { font: 700 16px/1 inherit; }
  .sidebar .head { padding: 12px 16px 6px; font: 700 11px/1.4 inherit; color: #69707D; text-transform: uppercase; letter-spacing: 0.05em; }
  .sidebar .item { display: flex; align-items: center; gap: 10px; padding: 7px 16px; font: 500 13px/1 inherit; color: #535966; cursor: pointer; }
  .sidebar .item:hover { background: #F5F7FA; }
  .sidebar .item.active { background: #E6F4FD; color: #0077CC; border-left: 3px solid #1BA9F5; padding-left: 13px; font-weight: 700; }
  main { padding: 18px 22px; display: grid; gap: 12px; }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h1 { margin: 0; font: 700 20px/1.2 inherit; }
  .head .right { margin-left: auto; display: flex; gap: 8px; align-items: center; }
  .pill-time { background: #fff; border: 1px solid #D3DAE6; border-radius: 4px; padding: 5px 10px; font: 600 12px/1.3 inherit; display: inline-flex; gap: 6px; align-items: center; }
  .btn-refresh { background: #1BA9F5; color: #fff; border: 0; padding: 6px 14px; border-radius: 4px; font: 600 12px/1 inherit; cursor: pointer; }
  .kql { background: #fff; border: 1px solid #98A2B3; border-radius: 4px; padding: 9px 12px; font: 500 13px/1 'Roboto Mono', Consolas, monospace; color: #1A1C21; display: flex; align-items: center; gap: 6px; }
  .kql .field { background: #E6F4FD; color: #0077CC; border-radius: 3px; padding: 1px 6px; font-weight: 700; }
  .kql .op { color: #69707D; }
  .kql .val { font-weight: 600; }
  .kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .kpi { background: #fff; border: 1px solid #D3DAE6; border-radius: 6px; padding: 12px 14px; box-shadow: 0 0.7px 1.4px rgba(0,0,0,0.08), 0 2.3px 2px rgba(0,0,0,0.04); }
  .kpi .num { font: 700 24px/1 inherit; color: #1A1C21; }
  .kpi .num.bad { color: #BD271E; }
  .kpi .label { font: 700 11px/1.4 inherit; color: #69707D; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; }
  .panel { background: #fff; border: 1px solid #D3DAE6; border-radius: 6px; padding: 14px 16px; box-shadow: 0 0.7px 1.4px rgba(0,0,0,0.08), 0 2.3px 2px rgba(0,0,0,0.04); }
  .panel .head-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .panel h3 { margin: 0; font: 700 14px/1.3 inherit; }
  .panel .meta { font: 500 11px/1 inherit; color: #69707D; margin-left: auto; }
  .bars { display: flex; align-items: flex-end; gap: 4px; height: 90px; }
  .bar { flex: 1; background: #1BA9F5; border-radius: 2px 2px 0 0; }
  .bar.err { background: #BD271E; }
  .table { background: #fff; border: 1px solid #D3DAE6; border-radius: 6px; overflow: hidden; box-shadow: 0 0.7px 1.4px rgba(0,0,0,0.08), 0 2.3px 2px rgba(0,0,0,0.04); }
  .table .row { display: grid; grid-template-columns: 80px 80px 1fr 90px; padding: 8px 14px; font: 500 12px/1.4 inherit; border-bottom: 1px solid #E6EAF1; }
  .table .row.head { font-weight: 700; color: #69707D; text-transform: uppercase; letter-spacing: 0.04em; font-size: 11px; background: #F5F7FA; }
  .table .row .time { color: #69707D; font: 600 11px/1.4 'Roboto Mono', monospace; }
  .table .row .stat-ok  { color: #017D73; font-weight: 700; }
  .table .row .stat-bad { color: #BD271E; font-weight: 700; }
  .table .row .path { color: #1A1C21; font: 500 12px/1.4 'Roboto Mono', monospace; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="leaves"><span style="background:#1BA9F5"></span><span style="background:#017D73"></span><span style="background:#F990C0"></span><span style="background:#FEC514"></span></div><div class="name">Elastic</div></div>
    <div class="head">Observability</div>
    <div class="item active">🔍 Discover</div>
    <div class="item">📊 Dashboards</div>
    <div class="item">📈 Logs</div>
    <div class="item">🚨 Alerts</div>
    <div class="head">Analytics</div>
    <div class="item">🧠 Lens</div>
    <div class="item">🗺 Maps</div>
    <div class="head">Security</div>
    <div class="item">🛡 SIEM</div>
  </aside>
  <main>
    <div class="head">
      <h1>Discover · logs-*</h1>
      <div class="right">
        <span class="pill-time">⏱ 마지막 24h</span>
        <button class="btn-refresh">⟳ Refresh</button>
      </div>
    </div>
    <div class="kql">
      <span class="field">status</span><span class="op">:</span><span class="val">500</span> <span class="op">AND</span>
      <span class="field">env</span><span class="op">:</span><span class="val">"prod"</span>
    </div>
    <section class="kpis">
      <div class="kpi"><div class="num">12,408</div><div class="label">Hits</div></div>
      <div class="kpi"><div class="num">4,210</div><div class="label">Unique users</div></div>
      <div class="kpi"><div class="num bad">182</div><div class="label">5xx errors</div></div>
      <div class="kpi"><div class="num">0.92%</div><div class="label">Error rate</div></div>
    </section>
    <section class="panel">
      <div class="head-row"><h3>Logs over time</h3><span class="meta">24h · 1m interval</span></div>
      <div class="bars">
        <div class="bar" style="height:24%;"></div><div class="bar" style="height:38%;"></div>
        <div class="bar err" style="height:18%;"></div><div class="bar" style="height:60%;"></div>
        <div class="bar" style="height:72%;"></div><div class="bar" style="height:55%;"></div>
        <div class="bar err" style="height:30%;"></div><div class="bar" style="height:48%;"></div>
        <div class="bar" style="height:82%;"></div><div class="bar" style="height:65%;"></div>
        <div class="bar" style="height:90%;"></div><div class="bar err" style="height:42%;"></div>
        <div class="bar" style="height:70%;"></div><div class="bar" style="height:58%;"></div>
      </div>
    </section>
    <section class="table">
      <div class="row head"><span>Time</span><span>Status</span><span>Path</span><span>Latency</span></div>
      <div class="row"><span class="time">09:42:18</span><span class="stat-bad">500</span><span class="path">GET /api/users/1024</span><span>12 ms</span></div>
      <div class="row"><span class="time">09:41:55</span><span class="stat-ok">200</span><span class="path">POST /auth/login</span><span>82 ms</span></div>
      <div class="row"><span class="time">09:41:42</span><span class="stat-ok">200</span><span class="path">GET /products</span><span>34 ms</span></div>
      <div class="row"><span class="time">09:41:18</span><span class="stat-bad">500</span><span class="path">GET /api/users/9821</span><span>9 ms</span></div>
    </section>
  </main>
</div>
```
