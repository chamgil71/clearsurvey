---
brand: Coinbase
brand_ko: 코인베이스
slug: coinbase
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#0052FF"
primary_color_name: "Coinbase Blue"
mood:
  - 모던 크립토
  - 신뢰
  - 깔끔

font_category: sans-serif
font_primary: Coinbase Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2012
last_major_revision: 2024
signature_keyword: "Coinbase Blue 단일 액센트와 깨끗한 토큰 리스트의 크립토 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFBFC", "border": "#EFF2F5", "fg": "#0A0B0D", "fg_muted": "#5B6473", "accent": "#0052FF" },
    "dark":  { "bg": "#0A0B0D", "surface": "#1E2025", "border": "#1E2025", "fg": "#FFFFFF", "fg_muted": "#8590A4", "accent": "#1E68FF" }
  }

hero_html: |
  <div style="font-family:'Coinbase Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:22px;height:22px;background:var(--card-accent);border-radius:50%;color:#fff;display:grid;place-items:center;font-size:11px;font-weight:800;">C</span>
      <strong style="font-size:14px;font-weight:700;">Coinbase</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:11px;color:var(--card-fg-muted);">총 잔액</div>
      <div style="font-size:30px;font-weight:700;letter-spacing:-0.01em;">$ 12,840.<small style="font-size:20px;color:var(--card-fg-muted);">42</small></div>
      <div style="font-size:11px;color:#05B16C;font-weight:700;">▲ +$284.50 (+2.3%) 오늘</div>
      <div style="margin-top:6px;display:flex;flex-direction:column;gap:4px;">
        <div style="display:grid;grid-template-columns:24px 1fr auto;gap:10px;align-items:center;padding:8px 0;border-bottom:1px solid var(--card-border);">
          <div style="width:24px;height:24px;border-radius:50%;background:#F7931A;color:#fff;display:grid;place-items:center;font-size:11px;font-weight:800;">B</div>
          <div><div style="font-size:13px;font-weight:600;">Bitcoin</div><div style="font-size:11px;color:var(--card-fg-muted);">BTC · 0.124</div></div>
          <div style="text-align:right;"><div style="font-size:13px;font-weight:600;">$ 8,420</div><div style="font-size:11px;color:#05B16C;font-weight:700;">▲ +1.8%</div></div>
        </div>
        <div style="display:grid;grid-template-columns:24px 1fr auto;gap:10px;align-items:center;padding:8px 0;">
          <div style="width:24px;height:24px;border-radius:50%;background:#627EEA;color:#fff;display:grid;place-items:center;font-size:11px;font-weight:800;">E</div>
          <div><div style="font-size:13px;font-weight:600;">Ethereum</div><div style="font-size:11px;color:var(--card-fg-muted);">ETH · 1.42</div></div>
          <div style="text-align:right;"><div style="font-size:13px;font-weight:600;">$ 4,420</div><div style="font-size:11px;color:#FA3737;font-weight:700;">▼ -0.4%</div></div>
        </div>
      </div>
      <button style="background:var(--card-accent);color:#fff;border:0;border-radius:9999px;padding:10px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;margin-top:6px;">매수 →</button>
    </div>
  </div>

sources:
  - https://www.coinbase.com/
  - https://www.coinbase.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Coinbase
- **한 줄 정체성**: 미국 1위 가상자산 거래소 — 일반인도 쉽게 시작하는 크립토
- **공식 디자인 철학**: "More economic freedom — simple, safe, regulated"
- **시그니처 요소 1개**: Coinbase Blue(#0052FF) 단일 액센트 + 풀 흰 캔버스 + 정확한 token 리스트

### ② 톤 & 무드
- **핵심 키워드 3개**: 모던 크립토, 신뢰, 깔끔
- **무드 설명**: 흰 캔버스 + 단일 Blue 액션 + grayscale 본문. 데이터가 깨끗하게 정리된 신뢰 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~9999px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Coinbase Blue */
  --color-primary-50:  #E5EEFF;
  --color-primary-100: #BFD4FF;
  --color-primary-200: #80AAFF;
  --color-primary-300: #4081FF;
  --color-primary-400: #1E68FF;
  --color-primary-500: #0052FF;  /* Coinbase Blue */
  --color-primary-600: #0044D9;
  --color-primary-700: #0036B0;
  --color-primary-800: #002787;
  --color-primary-900: #001A5A;

  /* Secondary - Coinbase Slate */
  --color-secondary-500: #1E2025;

  /* Up/Down */
  --color-up:   #05B16C;
  --color-down: #FA3737;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFBFC;
  --color-neutral-100:  #F5F7FA;
  --color-neutral-200:  #EFF2F5;
  --color-neutral-300:  #C5CCD6;
  --color-neutral-500:  #8590A4;
  --color-neutral-700:  #5B6473;
  --color-neutral-800:  #2D343D;
  --color-neutral-900:  #0A0B0D;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #05B16C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FA3737;
  --color-info-bg:    #E5EEFF;
  --color-info-fg:    #0052FF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFBFC;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(10,11,13,0.50);

  /* Text */
  --text-primary:    #0A0B0D;
  --text-secondary:  #5B6473;
  --text-tertiary:   #8590A4;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C5CCD6;

  /* Border */
  --border-default: #EFF2F5;
  --border-subtle:  #F5F7FA;
  --border-strong:  #C5CCD6;
  --border-focus:   #0052FF;
}

[data-theme="dark"] {
  --bg-base: #0A0B0D;
  --bg-subtle: #15171C;
  --bg-elevated: #1E2025;
  --text-primary: #FFFFFF;
  --text-secondary: #8590A4;
  --border-default: #1E2025;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Coinbase Sans / Coinbase Display (자체) — 폴백 -apple-system, Inter
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 11px / 600 / 1.27 / 0

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
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(10,11,13,0.06);
--shadow-md: 0 4px 12px rgba(10,11,13,0.10);
--shadow-lg: 0 8px 24px rgba(10,11,13,0.14);
--shadow-xl: 0 16px 32px rgba(0,82,255,0.18);
```

### ⑧ Iconography
- **스타일**: Outline (정밀)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 'Coinbase Sans',Inter,'Pretendard',sans-serif;
  border-radius: 9999px;
  padding: 0 18px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 10px 14px; font-size: 15px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(0,82,255,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-up   { color: var(--color-up); font-weight: 700; }
.tag-up::before { content:"▲ "; }
.tag-down { color: var(--color-down); font-weight: 700; }
.tag-down::before { content:"▼ "; }
```

**Navigation**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 18px; }
.topnav .brand .mark { width: 24px; height: 24px; background: var(--color-primary-500); border-radius: 50%; }
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
1. up/down 색을 임의 매핑 금지 — Green up / Red down 보존
2. brand blue를 destructive 액션에 사용 금지
3. 코인 가격에 연두색 빛깔 사용 금지 — Green은 +/- 신호 전용
4. 코인 로고 색을 brand blue로 통일 금지 — 각 코인의 공식 색 보존
5. 본문에 채도 높은 그라데이션 배경 금지

### ⑫ 시그니처 적용 예시 (Portfolio)

```html
<style>
  body { margin: 0; font-family: 'Coinbase Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: #0A0B0D; background: #fff; }
  .topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid #EFF2F5; }
  .topnav .brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 18px; }
  .topnav .brand .mark { width: 26px; height: 26px; background: #0052FF; border-radius: 50%; color: #fff; display: grid; place-items: center; font-weight: 800; font-size: 13px; }
  .topnav nav { display: flex; gap: 18px; font-size: 14px; color: #5B6473; }
  .layout { max-width: 1100px; margin: 24px auto; padding: 0 24px; display: grid; grid-template-columns: 1fr 320px; gap: 24px; }
  .balance h2 { font-size: 13px; font-weight: 600; color: #5B6473; margin: 0 0 8px; }
  .balance .total { font-size: 40px; font-weight: 700; letter-spacing: -0.015em; }
  .balance .total small { font-size: 26px; color: #5B6473; font-weight: 700; }
  .balance .delta { font-size: 14px; color: #05B16C; font-weight: 700; margin-top: 4px; }
  .actions { display: flex; gap: 8px; margin-top: 16px; }
  .actions button { background: #0052FF; color: #fff; border: 0; border-radius: 9999px; padding: 10px 20px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .actions button.alt { background: #F5F7FA; color: #0A0B0D; }
  .holdings { background: #fff; border: 1px solid #EFF2F5; border-radius: 12px; padding: 16px 20px; margin-top: 24px; }
  .holdings h3 { margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #5B6473; text-transform: uppercase; letter-spacing: 0.04em; }
  .row { display: grid; grid-template-columns: 32px 1fr auto; gap: 12px; padding: 12px 0; border-bottom: 1px solid #EFF2F5; align-items: center; }
  .row:last-child { border-bottom: 0; }
  .row .ic { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; color: #fff; font-weight: 800; font-size: 13px; }
  .row .name { font-size: 14px; font-weight: 600; }
  .row .ticker { font-size: 12px; color: #5B6473; margin-top: 2px; }
  .row .price { font-size: 14px; font-weight: 600; text-align: right; }
  .row .delta { font-size: 12px; font-weight: 700; text-align: right; margin-top: 2px; }
  .up { color: #05B16C; }
  .down { color: #FA3737; }
  .side { background: #fff; border: 1px solid #EFF2F5; border-radius: 12px; padding: 16px; height: fit-content; }
  .side h3 { margin: 0 0 12px; font-size: 14px; font-weight: 600; }
  .side .item { padding: 10px 0; border-bottom: 1px solid #EFF2F5; font-size: 13px; }
</style>

<header class="topnav">
  <div class="brand"><div class="mark">C</div>Coinbase</div>
  <nav><a>홈</a><a>마이</a><a>거래</a><a>지갑</a></nav>
  <span style="margin-left:auto; font-size:14px; color:#5B6473;">알림 ⚙</span>
</header>

<main class="layout">
  <section>
    <div class="balance">
      <h2>내 자산</h2>
      <div class="total">$12,840<small>.42</small></div>
      <div class="delta">▲ +$284.50 (+2.3%) 오늘</div>
      <div class="actions">
        <button>매수</button>
        <button class="alt">매도</button>
        <button class="alt">전송</button>
      </div>
    </div>
    <div class="holdings">
      <h3>보유 자산</h3>
      <div class="row">
        <div class="ic" style="background:#F7931A;">B</div>
        <div><div class="name">Bitcoin</div><div class="ticker">BTC · 0.124</div></div>
        <div><div class="price">$ 8,420.00</div><div class="delta up">▲ +1.8%</div></div>
      </div>
      <div class="row">
        <div class="ic" style="background:#627EEA;">E</div>
        <div><div class="name">Ethereum</div><div class="ticker">ETH · 1.42</div></div>
        <div><div class="price">$ 4,420.42</div><div class="delta down">▼ -0.4%</div></div>
      </div>
      <div class="row">
        <div class="ic" style="background:#26A17B;">T</div>
        <div><div class="name">USDC</div><div class="ticker">USDC · 28</div></div>
        <div><div class="price">$ 28.00</div><div class="delta" style="color:#5B6473;">―</div></div>
      </div>
    </div>
  </section>
  <aside class="side">
    <h3>인기 자산</h3>
    <div class="item">📈 SOL — $ 142.20 <span class="up" style="margin-left:auto; float:right;">▲ +4.2%</span></div>
    <div class="item">📈 LINK — $ 18.50 <span class="up" style="margin-left:auto; float:right;">▲ +2.0%</span></div>
    <div class="item">📈 AVAX — $ 38.40 <span class="down" style="margin-left:auto; float:right;">▼ -1.2%</span></div>
  </aside>
</main>
```
