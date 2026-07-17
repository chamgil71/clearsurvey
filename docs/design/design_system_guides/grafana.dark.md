---
brand: Grafana
brand_ko: 그라파나
slug: grafana
generated: 2026-05-14
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - infra

color_tone: warm
primary_color_hex: "#F46800"
primary_color_name: "Grafana Orange"
mood:
  - 관측성
  - 다크대시
  - 시계열

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - dark
  - light

released_year: 2014
last_major_revision: 2025
signature_keyword: "오렌지 횃불 로고 + 다크 대시보드 + 시계열 라인 차트의 관측성 표준"

card_tokens: |
  {
    "light": { "bg": "#F4F5F5", "surface": "#FFFFFF", "border": "#DEE0E2", "fg": "#181B1F", "fg_muted": "#44464D", "accent": "#F46800" },
    "dark":  { "bg": "#111217", "surface": "#181B1F", "border": "#2C3137", "fg": "#FFFFFF", "fg_muted": "#8E9097", "accent": "#F46800" }
  }

hero_html: |
  <div style="font-family:'Inter','Roboto',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg-muted);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.002em;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:24px;height:24px;background:var(--card-accent);border-radius:9999px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">🔥</div>
      <strong style="font-size:13px;font-weight:600;color:var(--card-fg);">prod-api · last 1h</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">Prometheus</span>
    </div>
    <div style="padding:10px 12px;display:grid;grid-template-columns:1fr 1fr;gap:8px;overflow:hidden;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:4px;padding:8px 10px;">
        <div style="font:600 10px/1 inherit;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">REQ/s</div>
        <div style="font:700 22px/1 inherit;color:var(--card-fg);">1.2K</div>
        <svg viewBox="0 0 100 30" style="display:block;margin-top:4px;width:100%;height:30px;"><polyline points="0,22 12,18 24,20 36,12 48,15 60,8 72,11 84,6 96,9" fill="none" stroke="#F46800" stroke-width="2"/></svg>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:4px;padding:8px 10px;">
        <div style="font:600 10px/1 inherit;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">p99 ms</div>
        <div style="font:700 22px/1 inherit;color:#F2495C;">182</div>
        <svg viewBox="0 0 100 30" style="display:block;margin-top:4px;width:100%;height:30px;"><polyline points="0,18 12,20 24,16 36,22 48,14 60,18 72,10 84,8 96,6" fill="none" stroke="#73BF69" stroke-width="2"/></svg>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:4px;padding:8px 10px;grid-column:1/3;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;"><span style="font:600 10px/1 inherit;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.05em;">CPU</span><span style="background:rgba(244,104,0,0.15);color:var(--card-accent);border-radius:3px;padding:1px 6px;font:700 9px/1.3 inherit;">A</span></div>
        <svg viewBox="0 0 200 50" style="width:100%;height:50px;"><polyline points="0,42 20,38 40,40 60,28 80,32 100,22 120,18 140,26 160,14 180,18 200,10" fill="none" stroke="#F46800" stroke-width="2"/><polyline points="0,44 20,42 40,38 60,40 80,34 100,30 120,32 140,24 160,28 180,22 200,18" fill="none" stroke="#5794F2" stroke-width="2"/></svg>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <div style="background:var(--card-accent);color:#fff;border-radius:3px;padding:6px 14px;font:700 12px/1 inherit;">▶ Run query</div>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">Auto · 30s</span>
    </div>
  </div>

sources:
  - https://grafana.com/
  - https://grafana.com/developers/saga/
---

### ① 브랜드 DNA
- **브랜드명**: Grafana Labs
- **한 줄 정체성**: 오픈소스 관측성 대시보드 — Prometheus·Loki·Tempo 등 다중 데이터 소스 통합
- **공식 디자인 철학**: Saga Design System — 데이터 가시성 우선, 다크 우선 시계열 톤
- **시그니처 요소 1개**: 오렌지 횃불 로고 + Grafana Orange(#F46800) 강조 + 짙은 차콜(#111217) 다크 캔버스 + 시계열 라인 차트 다색 팔레트(오렌지/그린/블루). Datadog 보라·Kibana 라이트와 정반대

### ② 톤 & 무드
- **핵심 키워드 3개**: 관측성, 다크대시, 시계열
- **무드 설명**: 거의 항상 다크 모드. 패널 보더는 짙은 회색, 차트 색은 시리즈별로 분리(A=오렌지, B=블루, C=그린). 모서리 3~4px Soft.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 한 화면 다중 패널
- **모서리 성향**: Soft (3~4px)
- **평면성**: Subtle — 1px 보더 + 미세 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Grafana Orange */
  --color-primary-50:  #FFEEDB;
  --color-primary-100: #FFCC93;
  --color-primary-200: #FFAB55;
  --color-primary-300: #FF8B1E;
  --color-primary-400: #FA7818;
  --color-primary-500: #F46800;   /* Grafana Orange */
  --color-primary-600: #C95400;
  --color-primary-700: #9A4000;
  --color-primary-800: #6C2C00;
  --color-primary-900: #421A00;

  /* Series colors (시각화 팔레트) */
  --series-1: #F46800;   /* Orange */
  --series-2: #5794F2;   /* Blue */
  --series-3: #73BF69;   /* Green */
  --series-4: #F2CC0C;   /* Yellow */
  --series-5: #B877D9;   /* Purple */
  --series-6: #FF780A;
  --series-7: #37872D;
  --series-8: #C4162A;

  /* Neutral - Grafana dark grays (다크 우선: 0 = 캔버스, 1000 = 최상위 텍스트) */
  --color-neutral-0:    #0E0F12;
  --color-neutral-50:   #111217;
  --color-neutral-100:  #181B1F;
  --color-neutral-200:  #22252B;
  --color-neutral-300:  #2C3137;
  --color-neutral-500:  #5A5C63;
  --color-neutral-700:  #8E9097;
  --color-neutral-800:  #CCCCDC;
  --color-neutral-900:  #E6E6F0;
  --color-neutral-1000: #FFFFFF;

  /* Semantic (다크 배경 위 가독) */
  --color-success-bg: #1E3322;
  --color-success-fg: #73BF69;
  --color-warning-bg: #3D2D0A;
  --color-warning-fg: #FF9830;
  --color-error-bg:   #3D1A1F;
  --color-error-fg:   #F2495C;
  --color-info-bg:    #1E2A40;
  --color-info-fg:    #5794F2;

  /* Surface */
  --bg-base:     #111217;   /* page */
  --bg-subtle:   #0E0F12;
  --bg-elevated: #181B1F;   /* panel */
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #CCCCDC;
  --text-tertiary:   #8E9097;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A5C63;

  /* Border */
  --border-default: #2C3137;
  --border-subtle:  #181B1F;
  --border-strong:  #44464D;
  --border-focus:   #F46800;
}

[data-theme="light"] {
  /* Primary 램프는 동일 — 라이트에서도 Grafana Orange 강조 유지 */

  /* Neutral - 라이트 모드 정방향 램프 (0 = 흰색 표면, 1000 = 짙은 텍스트) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F5F5;
  --color-neutral-100:  #DEE0E2;
  --color-neutral-200:  #CCCCDC;
  --color-neutral-300:  #8E9097;
  --color-neutral-500:  #5A5C63;
  --color-neutral-700:  #44464D;
  --color-neutral-800:  #2C3137;
  --color-neutral-900:  #181B1F;
  --color-neutral-1000: #111217;

  /* Semantic (라이트 배경 위 가독) */
  --color-success-bg: #E5F3E8;
  --color-success-fg: #3C7A33;
  --color-warning-bg: #FCF0DC;
  --color-warning-fg: #B5670B;
  --color-error-bg:   #FBE4E7;
  --color-error-fg:   #C4162A;
  --color-info-bg:    #E3ECFB;
  --color-info-fg:    #3360B5;

  /* Surface */
  --bg-base:     #F4F5F5;
  --bg-subtle:   #FFFFFF;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(36,41,46,0.40);

  /* Text */
  --text-primary:    #181B1F;
  --text-secondary:  #44464D;
  --text-tertiary:   #6E7077;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B0B3BA;

  /* Border */
  --border-default: #DEE0E2;
  --border-subtle:  #ECEDEE;
  --border-strong:  #CCCCDC;
  --border-focus:   #F46800;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / Roboto / system-ui
  - 코드/쿼리: **Roboto Mono** / SF Mono / Consolas
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 28px / 700 / 1.2
  - H1: 22px / 600 / 1.25
  - H2: 18px / 600 / 1.3
  - H3: 15px / 600 / 1.35
  - Body Large: 14px / 400 / 1.5
  - Body: 13px / 400 / 1.5
  - Body Small: 12px / 400 / 1.4
  - KPI Number: 28px / 700 / 1
  - Code: 12px / 400 / 1.55 mono
  - Caption: 10px / 600 / 1.3 (uppercase + tracking)

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 10px;
  --space-lg: 14px;
  --space-xl: 20px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;     /* 패널 시그니처 */
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.50);
--shadow-md: 0 4px 12px rgba(0,0,0,0.65);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.75);
```

### ⑧ Iconography
- **스타일**: Saga / IconStrips — Outline 1.5px
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / 자체

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 Inter, sans-serif; border-radius: 3px; padding: 7px 14px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--color-neutral-300); }
.btn-destructive { background: var(--color-error-fg); color: #fff; }
.btn-run { background: var(--color-primary-500); color: #fff; padding: 6px 12px; font: 700 12px/1 inherit; }
```

**Input (Query bar)**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: 3px; padding: 7px 10px; font: 500 13px/1.4 'Roboto Mono', monospace; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 0; }
.query-row { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 4px; padding: 10px 12px; display: flex; gap: 8px; align-items: center; }
.query-row .ds { background: rgba(244,104,0,0.15); color: var(--color-primary-500); padding: 3px 8px; border-radius: 3px; font: 700 11px/1.3 inherit; }
```

**Card (Panel)**
```css
.panel { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 4px; padding: 8px 10px 10px; }
.panel .head { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.panel h3 { margin: 0; font: 600 13px/1.3 inherit; color: var(--text-primary); }
.panel .meta { font: 500 10px/1 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; margin-left: auto; }
.stat .num { font: 700 28px/1 inherit; color: var(--text-primary); margin: 4px 0; }
.stat.warn .num { color: var(--color-warning-fg); }
.stat.err  .num { color: var(--color-error-fg); }
.legend { display: flex; gap: 12px; font: 500 11px/1 inherit; color: var(--text-tertiary); margin-top: 6px; flex-wrap: wrap; }
.legend .item { display: inline-flex; align-items: center; gap: 5px; }
.legend .swatch { width: 8px; height: 8px; border-radius: 1px; }
```

**Badge / Tag**
```css
.badge-state-up    { background: var(--color-success-bg); color: var(--color-success-fg); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.05em; }
.badge-state-down  { background: var(--color-error-bg); color: var(--color-error-fg); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.05em; }
.tag-ds-prom { background: rgba(244,104,0,0.15); color: var(--color-primary-500); border-radius: 3px; padding: 1px 6px; font: 700 11px/1.3 inherit; }
.tag-ds-loki { background: rgba(115,191,105,0.15); color: var(--series-3); border-radius: 3px; padding: 1px 6px; font: 700 11px/1.3 inherit; }
.tag-ds-tempo{ background: rgba(184,119,217,0.15); color: var(--series-5); border-radius: 3px; padding: 1px 6px; font: 700 11px/1.3 inherit; }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--color-neutral-0); border-right: 1px solid var(--border-default); width: 56px; display: flex; flex-direction: column; align-items: center; padding-top: 8px; gap: 6px; }
.sidebar .logo { width: 36px; height: 36px; background: var(--color-primary-500); border-radius: 9999px; display: grid; place-items: center; color: #fff; font: 900 18px/1 inherit; }
.sidebar .item { width: 40px; height: 40px; display: grid; place-items: center; color: var(--text-tertiary); font-size: 18px; cursor: pointer; border-radius: 3px; }
.sidebar .item:hover { background: var(--bg-elevated); color: var(--text-primary); }
.sidebar .item.active { color: var(--color-primary-500); background: var(--bg-elevated); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 라이트 모드를 기본으로 두기 금지 — Grafana는 다크 우선이 정체성
2. 시계열 라인을 단색으로 그리기 금지 — 시리즈별 색 분리 (A=오렌지, B=블루...)
3. 패널 모서리 8px 이상 금지 — 3~4px Soft
4. 본문 강조를 빨강으로 사용 금지 — 빨강은 오류·임계치에만, 강조는 오렌지
5. 오렌지 외 다른 브랜드 컬러 추가 금지 — Grafana Orange 단일 강조

### ⑫ 시그니처 적용 예시 (Grafana 대시보드)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; color: #CCCCDC; background: #111217; letter-spacing: -0.002em; }
  .app { display: grid; grid-template-columns: 56px 1fr; min-height: 100vh; }
  .sidebar { background: #0E0F12; border-right: 1px solid #2C3137; display: flex; flex-direction: column; align-items: center; padding-top: 10px; gap: 8px; }
  .sidebar .logo { width: 36px; height: 36px; background: #F46800; border-radius: 9999px; display: grid; place-items: center; color: #fff; font: 900 18px/1 inherit; box-shadow: 0 4px 12px rgba(244,104,0,0.40); }
  .sidebar .ic { width: 40px; height: 40px; display: grid; place-items: center; color: #8E9097; font-size: 18px; cursor: pointer; border-radius: 3px; }
  .sidebar .ic.active { color: #F46800; background: #181B1F; }
  main { padding: 14px 16px; display: grid; gap: 10px; }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h1 { margin: 0; font: 700 18px/1.2 inherit; color: #fff; }
  .head .badge { background: #181B1F; border: 1px solid #2C3137; border-radius: 3px; padding: 4px 8px; font: 600 11px/1.3 inherit; color: #CCCCDC; }
  .head .right { margin-left: auto; display: flex; gap: 8px; align-items: center; }
  .timepicker { background: #181B1F; border: 1px solid #2C3137; border-radius: 3px; padding: 5px 10px; font: 600 12px/1.3 inherit; color: #CCCCDC; }
  .refresh { background: #F46800; color: #fff; border: 0; padding: 6px 12px; border-radius: 3px; font: 700 12px/1 inherit; cursor: pointer; }
  .row { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 8px; }
  .row.wide { grid-template-columns: 2fr 1fr; }
  .panel { background: #181B1F; border: 1px solid #2C3137; border-radius: 4px; padding: 10px 12px; }
  .panel .head-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .panel h3 { margin: 0; font: 600 12px/1.3 inherit; color: #fff; }
  .panel .ds { font: 700 10px/1.3 inherit; padding: 1px 6px; border-radius: 3px; }
  .panel .ds.prom { background: rgba(244,104,0,0.15); color: #F46800; }
  .panel .ds.loki { background: rgba(115,191,105,0.15); color: #73BF69; }
  .panel .num { font: 700 28px/1 inherit; margin: 4px 0; color: #fff; }
  .panel .num.err  { color: #F2495C; }
  .panel .num.ok   { color: #73BF69; }
  .panel .label { font: 600 10px/1.3 inherit; color: #8E9097; text-transform: uppercase; letter-spacing: 0.05em; }
  svg { width: 100%; display: block; }
  .legend { display: flex; gap: 12px; font: 500 11px/1 inherit; color: #8E9097; margin-top: 6px; flex-wrap: wrap; }
  .legend .item { display: inline-flex; align-items: center; gap: 5px; }
  .legend .swatch { width: 10px; height: 10px; border-radius: 1px; }
  .logs { background: #181B1F; border: 1px solid #2C3137; border-radius: 4px; padding: 6px; font: 400 12px/1.55 'Roboto Mono', SFMono-Regular, monospace; }
  .logs .ln { padding: 2px 8px; border-radius: 2px; color: #CCCCDC; display: grid; grid-template-columns: 70px 60px 1fr; gap: 8px; }
  .logs .ln .t { color: #8E9097; }
  .logs .ln.err { background: rgba(242,73,92,0.08); }
  .logs .ln.err .lvl { color: #F2495C; font-weight: 700; }
  .logs .ln.ok  .lvl { color: #73BF69; font-weight: 700; }
  .logs .ln.warn .lvl { color: #FF9830; font-weight: 700; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="logo">🔥</div>
    <div class="ic active">📊</div>
    <div class="ic">🔍</div>
    <div class="ic">🚨</div>
    <div class="ic">📂</div>
    <div class="ic">🧩</div>
    <div class="ic">⚙</div>
  </aside>
  <main>
    <div class="head">
      <h1>prod-api · 1h overview</h1>
      <span class="badge">⭐ Starred</span>
      <span class="badge">v 12</span>
      <div class="right">
        <span class="timepicker">⏱ Last 1 hour</span>
        <button class="refresh">⟳ 30s</button>
      </div>
    </div>
    <section class="row">
      <div class="panel"><div class="head-row"><h3>Requests / sec</h3><span class="ds prom">Prometheus</span></div><div class="num">1,204</div><div class="label">+8% vs 1h ago</div><svg viewBox="0 0 100 28"><polyline points="0,22 12,18 24,20 36,12 48,15 60,8 72,11 84,6 96,9" fill="none" stroke="#F46800" stroke-width="2"/></svg></div>
      <div class="panel"><div class="head-row"><h3>p99 latency</h3><span class="ds prom">Prometheus</span></div><div class="num err">182 ms</div><div class="label">↑ over SLO 100ms</div><svg viewBox="0 0 100 28"><polyline points="0,12 12,16 24,18 36,8 48,14 60,20 72,15 84,22 96,24" fill="none" stroke="#F2495C" stroke-width="2"/></svg></div>
      <div class="panel"><div class="head-row"><h3>5xx rate</h3><span class="ds prom">Prometheus</span></div><div class="num">0.92%</div><div class="label">+0.3pp vs 1h</div><svg viewBox="0 0 100 28"><polyline points="0,24 12,20 24,18 36,22 48,14 60,16 72,10 84,12 96,8" fill="none" stroke="#FF9830" stroke-width="2"/></svg></div>
      <div class="panel"><div class="head-row"><h3>Up targets</h3><span class="ds prom">Prometheus</span></div><div class="num ok">14/14</div><div class="label">All healthy</div></div>
    </section>
    <section class="row wide">
      <div class="panel">
        <div class="head-row"><h3>CPU · per pod</h3><span class="ds prom">Prometheus</span><span class="label" style="margin-left:auto;">avg / max</span></div>
        <svg viewBox="0 0 400 100">
          <polyline points="0,80 30,72 60,65 90,60 120,52 150,58 180,40 210,46 240,32 270,38 300,22 330,28 360,18 400,12" fill="none" stroke="#F46800" stroke-width="2"/>
          <polyline points="0,86 30,82 60,75 90,72 120,68 150,72 180,60 210,64 240,50 270,55 300,42 330,46 360,38 400,32" fill="none" stroke="#5794F2" stroke-width="2"/>
          <polyline points="0,90 30,88 60,82 90,78 120,76 150,80 180,72 210,75 240,66 270,70 300,58 330,62 360,52 400,46" fill="none" stroke="#73BF69" stroke-width="2"/>
        </svg>
        <div class="legend">
          <span class="item"><span class="swatch" style="background:#F46800"></span>api-prod-01</span>
          <span class="item"><span class="swatch" style="background:#5794F2"></span>api-prod-02</span>
          <span class="item"><span class="swatch" style="background:#73BF69"></span>api-prod-03</span>
        </div>
      </div>
      <div class="logs">
        <div class="ln err"><span class="t">09:42:18</span><span class="lvl">ERR</span><span>GET /api/users/1024 → 500 (db timeout)</span></div>
        <div class="ln ok"><span class="t">09:41:55</span><span class="lvl">INF</span><span>POST /auth/login → 200 (82ms)</span></div>
        <div class="ln warn"><span class="t">09:41:42</span><span class="lvl">WRN</span><span>cache miss user:1024</span></div>
        <div class="ln err"><span class="t">09:41:18</span><span class="lvl">ERR</span><span>GET /api/users/9821 → 500</span></div>
        <div class="ln ok"><span class="t">09:40:52</span><span class="lvl">INF</span><span>GET /products → 200 (34ms)</span></div>
      </div>
    </section>
  </main>
</div>
```
