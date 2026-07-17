---
brand: Binance
brand_ko: 바이낸스
slug: binance
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - fintech
  - consumer

color_tone: warm
primary_color_hex: "#F0B90B"
primary_color_name: "Binance Yellow"
mood:
  - 캔들차트
  - 옐로블랙
  - 트레이딩

font_category: sans-serif
font_primary: BinancePlex
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark
  - light

released_year: 2017
last_major_revision: 2024
signature_keyword: "옐로(#F0B90B) + 검정 캔버스 + 캔들차트(상승 그린·하락 레드)의 글로벌 거래소"

card_tokens: |
  {
    "light": { "bg": "#0B0E11", "surface": "#1E2329", "border": "#1E2329", "fg": "#FFFFFF", "fg_muted": "#848E9C", "accent": "#F0B90B" },
    "dark":  { "bg": "#000000", "surface": "#14171C", "border": "#2A3038", "fg": "#F5F5F5", "fg_muted": "#848E9C", "accent": "#F0B90B" }
  }

hero_html: |
  <div style="font-family:BinancePlex,Inter,'Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid var(--card-border);">
      <span style="display:inline-block;width:14px;height:14px;background:var(--card-accent);transform:rotate(45deg);"></span>
      <strong style="font-size:13px;font-weight:700;letter-spacing:-0.01em;">BINANCE</strong>
    </div>
    <div style="padding:8px 12px;display:flex;flex-direction:column;gap:4px;">
      <div style="font-size:9px;color:var(--card-fg-muted);font-weight:600;">BTC/USDT · 24h</div>
      <div style="display:flex;align-items:baseline;gap:6px;">
        <strong style="font-size:14px;font-weight:700;font-variant-numeric:tabular-nums;color:#0ECB81;">68,420.50</strong>
        <span style="font-size:9px;color:#0ECB81;font-weight:600;font-variant-numeric:tabular-nums;">+2.40%</span>
      </div>
      <div style="display:flex;align-items:flex-end;gap:2px;height:48px;margin-top:4px;">
        <span style="width:3px;background:#0ECB81;height:60%;"></span>
        <span style="width:3px;background:#0ECB81;height:75%;"></span>
        <span style="width:3px;background:#F6465D;height:50%;"></span>
        <span style="width:3px;background:#0ECB81;height:85%;"></span>
        <span style="width:3px;background:#0ECB81;height:90%;"></span>
        <span style="width:3px;background:#F6465D;height:65%;"></span>
        <span style="width:3px;background:#0ECB81;height:80%;"></span>
        <span style="width:3px;background:#0ECB81;height:95%;"></span>
        <span style="width:3px;background:#F6465D;height:55%;"></span>
        <span style="width:3px;background:#0ECB81;height:88%;"></span>
        <span style="width:3px;background:#0ECB81;height:92%;"></span>
        <span style="width:3px;background:#0ECB81;height:98%;"></span>
      </div>
    </div>
    <div style="background:var(--card-surface);padding:6px 12px;display:flex;align-items:center;gap:6px;">
      <span style="background:#0ECB81;color:#0B0E11;font-size:9px;font-weight:700;padding:4px 10px;border-radius:4px;">매수</span>
      <span style="background:#F6465D;color:#fff;font-size:9px;font-weight:700;padding:4px 10px;border-radius:4px;">매도</span>
      <span style="font-size:9px;color:var(--card-accent);font-weight:700;margin-left:auto;">P2P</span>
    </div>
  </div>

sources:
  - https://www.binance.com/
  - https://www.binance.com/en/brand
---

### ① 브랜드 DNA
- **브랜드명**: Binance
- **한 줄 정체성**: 글로벌 최대 암호화폐 거래소 — 현물·선물·P2P·Earn 등 풀스택 트레이딩
- **공식 디자인 철학**: "Money exchanged in seconds" — 옐로·검정의 강한 식별성과 캔들차트 우선
- **시그니처 요소 1개**: Binance Yellow(#F0B90B) 다이아 로고 + 검정 캔버스 + 상승 그린(#0ECB81)·하락 레드(#F6465D) 캔들차트. 거래소 톤의 글로벌 표준

### ② 톤 & 무드
- **핵심 키워드 3개**: 캔들차트, 옐로블랙, 트레이딩
- **무드 설명**: 검정 캔버스(#0B0E11) + 옐로 액센트. 가격·차트는 그린/레드 듀얼톤. 폰트는 모두 tabular-nums. 정보 밀도가 매우 높다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Binance Yellow */
  --color-primary-50:  #FFF8DD;
  --color-primary-100: #FDEFB0;
  --color-primary-200: #FBE17A;
  --color-primary-300: #F8D34D;
  --color-primary-400: #F5C622;
  --color-primary-500: #F0B90B;   /* Binance Yellow */
  --color-primary-600: #D1A100;
  --color-primary-700: #A37D00;
  --color-primary-800: #735800;
  --color-primary-900: #443400;

  /* Secondary - Trading green / red */
  --color-up-500:   #0ECB81;
  --color-down-500: #F6465D;

  /* Neutral - dark trading scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #EAECEF;
  --color-neutral-200:  #B7BDC6;
  --color-neutral-300:  #848E9C;
  --color-neutral-500:  #5E6673;
  --color-neutral-700:  #2B3139;
  --color-neutral-800:  #1E2329;
  --color-neutral-900:  #181A20;
  --color-neutral-1000: #0B0E11;     /* canvas */

  /* Semantic */
  --color-success-bg: #0A2A1F;
  --color-success-fg: #0ECB81;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #F0B90B;
  --color-error-bg:   #2A0F15;
  --color-error-fg:   #F6465D;
  --color-info-bg:    #1A2A3A;
  --color-info-fg:    #4FA8FF;

  /* Surface */
  --bg-base:     #0B0E11;
  --bg-subtle:   #181A20;
  --bg-elevated: #1E2329;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #EAECEF;
  --text-secondary:  #B7BDC6;
  --text-tertiary:   #848E9C;
  --text-on-primary: #0B0E11;       /* Yellow 위 검정 */
  --text-disabled:   #5E6673;

  /* Border */
  --border-default: #2B3139;
  --border-subtle:  #1E2329;
  --border-strong:  #5E6673;
  --border-focus:   #F0B90B;
}

[data-theme="light"] {
  --bg-base: #FFFFFF;
  --bg-subtle: #F5F5F5;
  --bg-elevated: #FFFFFF;
  --text-primary: #181A20;
  --text-secondary: #474D57;
  --text-tertiary: #848E9C;
  --border-default: #EAECEF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: BinancePlex (자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 숫자: tabular-nums 강제 적용
- **위계**:
  - Display: 36px / 700 / 1.15 / -0.01em
  - H1: 24px / 700 / 1.2 / -0.005em
  - H2: 18px / 700 / 1.3 / 0
  - H3: 14px / 600 / 1.35 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.02em
  - Price: 16px / 600 tabular-nums (시그니처)

### ⑤ 스페이싱
- **Base unit**: 4px (Compact)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 20px;
  --space-xl: 28px;
  --space-2xl: 44px;
  --space-3xl: 64px;
  ```
- **Container**: full-width 그리드, 좌우 패딩 12px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.40);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.50);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square
- **추천 라이브러리**: Phosphor / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 BinancePlex, Inter, sans-serif; border-radius: 4px; padding: 10px 18px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { border-color: var(--color-primary-500); color: var(--color-primary-500); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-buy   { background: var(--color-up-500); color: var(--text-on-primary); }     /* 매수 */
.btn-sell  { background: var(--color-down-500); color: #fff; }                     /* 매도 */
.btn-icon  { width: 32px; height: 32px; padding: 0; border-radius: 4px; background: var(--bg-elevated); color: var(--text-primary); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid transparent; border-radius: 4px; padding: 10px 12px; color: var(--text-primary); font: 400 13px/1.3 inherit; font-variant-numeric: tabular-nums; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); }
```

**Card (Ticker / Orderbook row)**
```css
.ticker { display: grid; grid-template-columns: 60px 1fr auto auto; gap: 14px; padding: 10px 14px; align-items: center; cursor: pointer; transition: background 150ms ease; }
.ticker:hover { background: var(--bg-subtle); }
.ticker .sym { font: 700 13px/1.2 inherit; }
.ticker .sub { font: 500 11px/1.2 inherit; color: var(--text-tertiary); margin-top: 2px; }
.ticker .price { font: 700 14px/1 inherit; font-variant-numeric: tabular-nums; }
.ticker .price.up { color: var(--color-up-500); }
.ticker .price.down { color: var(--color-down-500); }
.ticker .delta { font: 600 12px/1 inherit; font-variant-numeric: tabular-nums; padding: 4px 6px; border-radius: 4px; }
.ticker .delta.up { background: rgba(14,203,129,0.16); color: var(--color-up-500); }
.ticker .delta.down { background: rgba(246,70,93,0.16); color: var(--color-down-500); }
.orderbook .row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; padding: 3px 10px; font: 500 12px/1.4 inherit; font-variant-numeric: tabular-nums; position: relative; }
.orderbook .row .bg { position: absolute; right: 0; top: 0; bottom: 0; opacity: 0.15; }
.orderbook .row.ask .bg { background: var(--color-down-500); }
.orderbook .row.bid .bg { background: var(--color-up-500); }
.orderbook .row.ask .price { color: var(--color-down-500); }
.orderbook .row.bid .price { color: var(--color-up-500); }
.card { background: var(--bg-elevated); border-radius: 6px; padding: 16px; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 4px; font: 700 11px/1.4 inherit; letter-spacing: 0.02em; }
.tag-vip       { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-spot      { background: rgba(240,185,11,0.16); color: var(--color-primary-500); }
.tag-futures   { background: rgba(246,70,93,0.16); color: var(--color-down-500); }
.tag-launchpool{ background: rgba(14,203,129,0.16); color: var(--color-up-500); }
.tag-stablecoin{ background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
```

**Navigation (Top bar)**
```css
.topbar { background: var(--bg-base); padding: 10px 18px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid var(--border-default); }
.topbar .brand { display: flex; align-items: center; gap: 8px; font: 700 18px/1 inherit; }
.topbar .brand .dia { width: 16px; height: 16px; background: var(--color-primary-500); transform: rotate(45deg); }
.topbar .nav { display: flex; gap: 22px; font: 500 13px/1 inherit; color: var(--text-secondary); }
.topbar .nav .a:hover { color: var(--color-primary-500); }
.topbar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; font: 500 12px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 180ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. 상승·하락 색을 옐로/블루 등으로 변경 금지 — 그린(#0ECB81)·레드(#F6465D)가 트레이딩 정체성
2. 가격·수량 표기에 비례폰트 사용 금지 — tabular-nums
3. 라이트 모드를 기본 캔버스로 사용 금지
4. 옐로 위에 흰 텍스트 사용 금지 — 검정만
5. 캔들차트 생략 금지 — 거래소 정체성

### ⑫ 시그니처 적용 예시 (Trading view)
```html
<style>
  body { margin: 0; font-family: BinancePlex, Inter, 'Pretendard', sans-serif; background: #0B0E11; color: #EAECEF; min-height: 100vh; }
  .topbar { padding: 12px 18px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid #2B3139; }
  .topbar .brand { display: flex; align-items: center; gap: 8px; font: 700 20px/1 inherit; }
  .topbar .brand .dia { width: 18px; height: 18px; background: #F0B90B; transform: rotate(45deg); }
  .topbar .nav { display: flex; gap: 22px; font: 500 13px/1 inherit; color: #B7BDC6; }
  .topbar .nav .a:hover, .topbar .nav .a.active { color: #F0B90B; }
  .topbar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; font: 500 12px/1 inherit; }
  .topbar .deposit { background: #F0B90B; color: #0B0E11; font-weight: 700; padding: 8px 14px; border-radius: 4px; cursor: pointer; }
  .ticker-row { background: #181A20; padding: 14px 18px; display: flex; align-items: center; gap: 26px; border-bottom: 1px solid #2B3139; }
  .ticker-row .pair { font: 700 18px/1.2 inherit; }
  .ticker-row .pair .sub { font: 500 11px/1.2 inherit; color: #848E9C; font-weight: 500; margin-top: 2px; display: block; }
  .ticker-row .price { font: 700 24px/1 inherit; font-variant-numeric: tabular-nums; color: #0ECB81; }
  .ticker-row .stat { display: flex; flex-direction: column; gap: 2px; font: 500 11px/1.2 inherit; color: #848E9C; }
  .ticker-row .stat .v { font: 700 13px/1.2 inherit; color: #EAECEF; font-variant-numeric: tabular-nums; }
  .ticker-row .stat .v.up { color: #0ECB81; }
  .ticker-row .stat .v.down { color: #F6465D; }
  .grid { display: grid; grid-template-columns: 1fr 320px; gap: 12px; padding: 12px; min-height: calc(100vh - 200px); }
  .chart { background: #181A20; border-radius: 6px; padding: 16px; border: 1px solid #2B3139; }
  .chart .toolbar { display: flex; gap: 8px; margin-bottom: 12px; align-items: center; font: 500 12px/1 inherit; color: #B7BDC6; }
  .chart .toolbar .chip { padding: 5px 10px; border-radius: 4px; cursor: pointer; }
  .chart .toolbar .chip.active { background: #F0B90B; color: #0B0E11; font-weight: 700; }
  .candles { display: flex; align-items: flex-end; gap: 3px; height: 240px; padding: 0 4px; border-bottom: 1px solid #2B3139; }
  .candles .c { width: 8px; position: relative; }
  .candles .c.up { background: #0ECB81; }
  .candles .c.down { background: #F6465D; }
  .candles .c::before, .candles .c::after { content:''; position: absolute; left: 50%; width: 1.5px; transform: translateX(-50%); }
  .candles .c.up::before, .candles .c.down::before { background: inherit; top: -10px; height: 10px; }
  .candles .c.up::after, .candles .c.down::after { background: inherit; bottom: -8px; height: 8px; }
  .orderbook { background: #181A20; border-radius: 6px; padding: 12px; border: 1px solid #2B3139; }
  .orderbook h3 { font: 700 13px/1 inherit; margin: 0 0 12px; letter-spacing: 0.04em; text-transform: uppercase; color: #B7BDC6; }
  .ob-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; padding: 4px 8px; font: 500 12px/1.4 inherit; font-variant-numeric: tabular-nums; position: relative; }
  .ob-row .bg { position: absolute; right: 0; top: 0; bottom: 0; opacity: 0.16; }
  .ob-row.ask .bg { background: #F6465D; }
  .ob-row.bid .bg { background: #0ECB81; }
  .ob-row.ask .price { color: #F6465D; }
  .ob-row.bid .price { color: #0ECB81; }
  .ob-row span { position: relative; z-index: 1; }
  .ob-row .amt { color: #B7BDC6; text-align: right; }
  .ob-row .tot { color: #848E9C; text-align: right; }
  .ob-mid { padding: 10px 8px; text-align: center; border-top: 1px solid #2B3139; border-bottom: 1px solid #2B3139; margin: 6px 0; font: 700 14px/1 inherit; font-variant-numeric: tabular-nums; color: #0ECB81; }
  .ob-mid small { font: 500 10px/1 inherit; color: #848E9C; margin-left: 6px; font-weight: 500; }
</style>

<header class="topbar">
  <div class="brand"><div class="dia"></div><span>BINANCE</span></div>
  <div class="nav">
    <span class="a">매수</span>
    <span class="a">시장</span>
    <span class="a active">트레이드</span>
    <span class="a">선물</span>
    <span class="a">Earn</span>
    <span class="a">Square</span>
  </div>
  <div class="right"><span>지갑</span><span>주문</span><button class="deposit">입금</button></div>
</header>

<section class="ticker-row">
  <div class="pair">BTC/USDT<small class="sub">Bitcoin · 비트코인</small></div>
  <div class="price">68,420<small style="font-size:14px;color:#0ECB81;opacity:0.85;">.50</small></div>
  <div class="stat"><span>24h 변동</span><span class="v up">+1,602.30 (+2.40%)</span></div>
  <div class="stat"><span>24h 고가</span><span class="v">69,120.00</span></div>
  <div class="stat"><span>24h 저가</span><span class="v">66,840.10</span></div>
  <div class="stat"><span>24h 거래량 (BTC)</span><span class="v">42,128</span></div>
  <div class="stat"><span>24h 거래량 (USDT)</span><span class="v">2.87B</span></div>
</section>

<div class="grid">
  <div class="chart">
    <div class="toolbar">
      <span class="chip">1m</span>
      <span class="chip">5m</span>
      <span class="chip">15m</span>
      <span class="chip active">1h</span>
      <span class="chip">4h</span>
      <span class="chip">1d</span>
      <span class="chip">1w</span>
    </div>
    <div class="candles">
      <div class="c up" style="height:60%"></div>
      <div class="c up" style="height:75%"></div>
      <div class="c down" style="height:50%"></div>
      <div class="c up" style="height:85%"></div>
      <div class="c up" style="height:90%"></div>
      <div class="c down" style="height:65%"></div>
      <div class="c up" style="height:80%"></div>
      <div class="c up" style="height:95%"></div>
      <div class="c down" style="height:55%"></div>
      <div class="c up" style="height:88%"></div>
      <div class="c up" style="height:92%"></div>
      <div class="c up" style="height:98%"></div>
      <div class="c down" style="height:70%"></div>
      <div class="c up" style="height:90%"></div>
      <div class="c up" style="height:100%"></div>
      <div class="c up" style="height:96%"></div>
      <div class="c down" style="height:78%"></div>
      <div class="c up" style="height:84%"></div>
      <div class="c up" style="height:90%"></div>
      <div class="c down" style="height:62%"></div>
      <div class="c up" style="height:78%"></div>
      <div class="c up" style="height:88%"></div>
    </div>
  </div>
  <aside class="orderbook">
    <h3>오더북 · 0.1</h3>
    <div class="ob-row ask"><div class="bg" style="width:62%"></div><span class="price">68,478.20</span><span class="amt">0.0842</span><span class="tot">5.77</span></div>
    <div class="ob-row ask"><div class="bg" style="width:48%"></div><span class="price">68,468.10</span><span class="amt">0.0612</span><span class="tot">4.19</span></div>
    <div class="ob-row ask"><div class="bg" style="width:38%"></div><span class="price">68,458.00</span><span class="amt">0.0512</span><span class="tot">3.51</span></div>
    <div class="ob-row ask"><div class="bg" style="width:28%"></div><span class="price">68,448.40</span><span class="amt">0.0382</span><span class="tot">2.61</span></div>
    <div class="ob-row ask"><div class="bg" style="width:20%"></div><span class="price">68,438.10</span><span class="amt">0.0214</span><span class="tot">1.47</span></div>
    <div class="ob-mid">68,420.50<small>+2.40%</small></div>
    <div class="ob-row bid"><div class="bg" style="width:22%"></div><span class="price">68,418.40</span><span class="amt">0.0284</span><span class="tot">1.94</span></div>
    <div class="ob-row bid"><div class="bg" style="width:36%"></div><span class="price">68,408.10</span><span class="amt">0.0428</span><span class="tot">2.93</span></div>
    <div class="ob-row bid"><div class="bg" style="width:48%"></div><span class="price">68,398.00</span><span class="amt">0.0612</span><span class="tot">4.19</span></div>
    <div class="ob-row bid"><div class="bg" style="width:58%"></div><span class="price">68,388.40</span><span class="amt">0.0742</span><span class="tot">5.08</span></div>
    <div class="ob-row bid"><div class="bg" style="width:72%"></div><span class="price">68,378.10</span><span class="amt">0.0982</span><span class="tot">6.72</span></div>
  </aside>
</div>
```
