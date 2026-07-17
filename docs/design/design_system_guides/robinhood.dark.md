---
brand: Robinhood
brand_ko: 로빈후드
slug: robinhood
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#00C805"
primary_color_name: "Robinhood Green"
mood:
  - 모던 핀테크
  - 다크
  - 단순

font_category: sans-serif
font_primary: Capsule Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - dark
  - light

released_year: 2013
last_major_revision: 2024
signature_keyword: "다크 캔버스에 Green up / Red down 선그래프의 무수수료 트레이딩 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8F8F8", "border": "#DEDEDE", "fg": "#1A1A1A", "fg_muted": "#555555", "accent": "#00C805" },
    "dark":  { "bg": "#000000", "surface": "#0A0A0A", "border": "#1A1A1A", "fg": "#FFFFFF", "fg_muted": "#9CA3AF", "accent": "#00C805" }
  }

hero_html: |
  <div style="font-family:'Capsule Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);border-radius:5px;color:#000;display:grid;place-items:center;font-weight:900;font-size:11px;">R</span>
      <strong style="font-size:13px;font-weight:700;">Robinhood</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:11px;color:var(--card-fg-muted);">포트폴리오</div>
      <div style="font-size:28px;font-weight:700;letter-spacing:-0.01em;">$ 12,840.<small style="font-size:18px;color:var(--card-fg-muted);">42</small></div>
      <div style="font-size:11px;color:var(--card-accent);font-weight:700;display:flex;align-items:center;gap:4px;">▲ +$284.50 (+2.3%) 오늘</div>
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:8px;padding:14px;margin-top:6px;">
        <svg viewBox="0 0 220 80" style="width:100%;height:60px;display:block;" preserveAspectRatio="none">
          <defs><linearGradient id="grR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#00C805" stop-opacity="0.3"/><stop offset="1" stop-color="#00C805" stop-opacity="0"/></linearGradient></defs>
          <path d="M0 60 L20 56 L40 50 L60 58 L80 42 L100 46 L120 36 L140 40 L160 28 L180 32 L200 18 L220 22 L220 80 L0 80 Z" fill="url(#grR)"/>
          <polyline points="0,60 20,56 40,50 60,58 80,42 100,46 120,36 140,40 160,28 180,32 200,18 220,22" stroke="#00C805" stroke-width="2" fill="none"/>
        </svg>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px;">
        <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:8px;padding:8px 10px;">
          <div style="font-size:10px;color:var(--card-fg-muted);">AAPL</div>
          <div style="font-size:14px;font-weight:600;">$182.42</div>
          <div style="font-size:10px;color:var(--card-accent);font-weight:700;">+1.8%</div>
        </div>
        <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:8px;padding:8px 10px;">
          <div style="font-size:10px;color:var(--card-fg-muted);">TSLA</div>
          <div style="font-size:14px;font-weight:600;">$248.18</div>
          <div style="font-size:10px;color:#FF5C5C;font-weight:700;">−2.1%</div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://robinhood.com/
  - https://newsroom.aboutrobinhood.com/
---

### ① 브랜드 DNA
- **브랜드명**: Robinhood
- **한 줄 정체성**: 무수수료 모바일 트레이딩의 시작 — 미국 밀레니얼/Z세대 투자 앱
- **공식 디자인 철학**: "Investing for everyone — beautifully simple, mobile-first"
- **시그니처 요소 1개**: 풀 다크 캔버스 + Robinhood Green(#00C805) up / Red(#FF5C5C) down + 부드러운 area chart

### ② 톤 & 무드
- **핵심 키워드 3개**: 모던 핀테크, 다크, 단순
- **무드 설명**: 풀 검정 배경에 그린/레드만이 차트 라인으로 강조된다. 숫자가 모든 것이고 chrome은 거의 사라진다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~16px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Robinhood Green */
  --color-primary-50:  #DDFADC;
  --color-primary-100: #B8F4B5;
  --color-primary-200: #84EB7E;
  --color-primary-300: #4FE246;
  --color-primary-400: #22D81B;
  --color-primary-500: #00C805;  /* Robinhood Green */
  --color-primary-600: #00A604;
  --color-primary-700: #008504;
  --color-primary-800: #006503;
  --color-primary-900: #003B02;

  /* Secondary - Robinhood Red (down) */
  --color-secondary-500: #FF5C5C;

  /* Neutral - 다크 캔버스용 반전 램프 (0 = 캔버스, 1000 = 가장 밝은 텍스트) */
  --color-neutral-0:    #000000;     /* canvas */
  --color-neutral-50:   #0A0A0A;
  --color-neutral-100:  #141414;
  --color-neutral-200:  #1A1A1A;     /* border */
  --color-neutral-300:  #2A2A2A;
  --color-neutral-500:  #9CA3AF;
  --color-neutral-700:  #B0B0B0;
  --color-neutral-800:  #D4D4D4;
  --color-neutral-900:  #E6E6E6;     /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크 위에서 읽히는 톤 (어두운 bg + 밝은 fg) */
  --color-success-bg: #07260A;
  --color-success-fg: #4FE246;
  --color-warning-bg: #2E2206;
  --color-warning-fg: #F1A33B;
  --color-error-bg:   #2E0E0E;
  --color-error-fg:   #FF7B7B;
  --color-info-bg:    #0A2138;
  --color-info-fg:    #5FA3F0;

  /* Surface */
  --bg-base:     #000000;          /* 시그니처 풀 블랙 캔버스 */
  --bg-subtle:   #0A0A0A;
  --bg-elevated: #1A1A1A;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #E6E6E6;
  --text-secondary:  #9CA3AF;
  --text-tertiary:   #6B7280;
  --text-on-primary: #000000;          /* green 위에는 black */
  --text-disabled:   #555555;

  /* Border */
  --border-default: #1A1A1A;
  --border-subtle:  #141414;
  --border-strong:  #2A2A2A;
  --border-focus:   #00C805;
}

[data-theme="light"] {
  /* 마케팅용 라이트 테마 (원본 라이트 값) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F8F8;
  --color-neutral-100:  #F1F1F1;
  --color-neutral-200:  #DEDEDE;
  --color-neutral-300:  #B0B0B0;
  --color-neutral-500:  #9CA3AF;
  --color-neutral-700:  #555555;
  --color-neutral-800:  #1A1A1A;
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;

  --color-success-bg: #DDFADC;
  --color-success-fg: #00C805;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #F1A33B;
  --color-error-bg:   #FFE5E5;
  --color-error-fg:   #FF5C5C;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #4287D9;

  --bg-base: #FFFFFF;
  --bg-subtle: #F8F8F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay: rgba(0,0,0,0.85);

  --text-primary: #1A1A1A;
  --text-secondary: #555555;
  --text-tertiary: #9CA3AF;
  --text-on-primary: #000000;
  --text-disabled: #B0B0B0;

  --border-default: #DEDEDE;
  --border-subtle: #F1F1F1;
  --border-strong: #B0B0B0;
  --border-focus: #00C805;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Capsule Sans (Robinhood 자체) — 폴백 -apple-system, Inter
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 32px / 700 / 1.15 / -0.01em
  - H2: 22px / 700 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
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
- **Container**: max-width 1200px, 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.65);
--shadow-xl: 0 16px 32px rgba(0,200,5,0.25);
```

### ⑧ Iconography
- **스타일**: Outline (정밀)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 'Capsule Sans',Inter,'Pretendard',sans-serif;
  border-radius: 9999px;
  padding: 0 22px;
  height: 48px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #000; }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-secondary { background: rgba(255,255,255,0.10); color: #fff; }
.btn-ghost { background: transparent; color: #fff; }
.btn-danger { background: var(--color-secondary-500); color: #fff; }
```

**Input**
```css
.input { background: transparent; border: 0; border-bottom: 1px solid var(--border-strong); border-radius: 0; padding: 8px 0; font-size: 18px; color: #fff; }
.input:focus { outline: none; border-bottom-color: var(--color-primary-500); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Up/Down indicator**
```css
.tag { padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #000; }
.tag-subtle  { background: var(--color-success-bg); color: var(--color-primary-300); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-up   { color: var(--color-primary-500); }
.tag-up::before { content:"▲ "; }
.tag-down { color: var(--color-secondary-500); }
.tag-down::before { content:"▼ "; }
```

**Navigation**
```css
.topnav { padding: 14px 16px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .logo { width: 22px; height: 22px; background: var(--color-primary-500); border-radius: 5px; }
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
1. up/down 색을 임의 매핑 금지 — Green up / Red down 산업 표준 보존
2. brand green을 destructive 액션에 사용 금지
3. 라이트 테마는 마케팅에만 — 트레이딩 UI는 다크 강제
4. 차트 라인 두께를 1px 미만으로 줄이지 말 것
5. 본문에 채도 높은 그라데이션 배경 금지

### ⑫ 시그니처 적용 예시 (Mobile portfolio)

```html
<style>
  body { margin: 0; font-family: 'Capsule Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: #E6E6E6; background: #000; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { padding: 16px; display: flex; align-items: center; gap: 12px; }
  .topbar .logo { width: 26px; height: 26px; background: #00C805; border-radius: 6px; }
  .summary { padding: 4px 16px 24px; }
  .summary .label { font-size: 13px; color: #9CA3AF; }
  .summary .total { font-size: 36px; font-weight: 700; letter-spacing: -0.015em; margin: 6px 0; }
  .summary .total small { font-size: 22px; color: #9CA3AF; font-weight: 700; }
  .summary .delta { font-size: 14px; color: #00C805; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; }
  .chart { padding: 0 16px 16px; }
  .chart-wrap { background: #000; border: 1px solid #1A1A1A; border-radius: 16px; padding: 16px; }
  .timeframes { display: flex; justify-content: center; gap: 4px; margin-top: 12px; }
  .timeframes .tf { padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 600; color: #9CA3AF; cursor: pointer; }
  .timeframes .tf.active { background: rgba(0,200,5,0.15); color: #00C805; }
  .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 0 16px 16px; }
  .actions .buy { background: #00C805; color: #000; padding: 14px; border-radius: 9999px; text-align: center; font-weight: 800; font-size: 14px; cursor: pointer; }
  .actions .sell { background: rgba(255,255,255,0.10); color: #fff; padding: 14px; border-radius: 9999px; text-align: center; font-weight: 800; font-size: 14px; cursor: pointer; }
  .holdings { padding: 0 16px 24px; }
  .holdings h3 { font-size: 15px; font-weight: 700; margin: 0 0 12px; }
  .row { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; padding: 12px 0; border-bottom: 1px solid #1A1A1A; align-items: center; }
  .row .ic { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 13px; color: #fff; }
  .row strong { font-size: 14px; }
  .row .name { font-size: 12px; color: #9CA3AF; margin-top: 2px; }
  .row .price { font-size: 14px; font-weight: 600; text-align: right; }
  .row .delta { font-size: 12px; font-weight: 700; text-align: right; margin-top: 2px; }
  .up { color: #00C805; }
  .down { color: #FF5C5C; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo"></div>
    <strong style="font-size:15px;">계좌</strong>
    <span style="margin-left:auto; font-size:18px;">🔍 ⚙</span>
  </header>
  <section class="summary">
    <div class="label">개인 계좌</div>
    <div class="total">$12,840.<small>42</small></div>
    <div class="delta">▲ +$284.50 (+2.3%) 오늘</div>
  </section>
  <div class="chart">
    <div class="chart-wrap">
      <svg viewBox="0 0 460 100" style="width:100%; height:100px; display:block;" preserveAspectRatio="none">
        <defs><linearGradient id="gr2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#00C805" stop-opacity="0.3"/><stop offset="1" stop-color="#00C805" stop-opacity="0"/></linearGradient></defs>
        <path d="M0 76 L40 70 L80 64 L120 72 L160 56 L200 60 L240 48 L280 52 L320 38 L360 44 L400 24 L440 30 L460 26 L460 100 L0 100 Z" fill="url(#gr2)"/>
        <polyline points="0,76 40,70 80,64 120,72 160,56 200,60 240,48 280,52 320,38 360,44 400,24 440,30 460,26" stroke="#00C805" stroke-width="2" fill="none"/>
      </svg>
    </div>
    <div class="timeframes">
      <div class="tf active">1D</div><div class="tf">1W</div><div class="tf">1M</div><div class="tf">3M</div><div class="tf">1Y</div><div class="tf">ALL</div>
    </div>
  </div>
  <div class="actions">
    <div class="buy">매수</div>
    <div class="sell">매도</div>
  </div>
  <section class="holdings">
    <h3>보유 종목</h3>
    <div class="row">
      <div class="ic" style="background:#1A1A1A;">A</div>
      <div><strong>AAPL</strong><div class="name">Apple Inc.</div></div>
      <div><div class="price">$182.42</div><div class="delta up">▲ +1.8%</div></div>
    </div>
    <div class="row">
      <div class="ic" style="background:#1A1A1A;">T</div>
      <div><strong>TSLA</strong><div class="name">Tesla, Inc.</div></div>
      <div><div class="price">$248.18</div><div class="delta down">▼ −2.1%</div></div>
    </div>
    <div class="row">
      <div class="ic" style="background:#1A1A1A;">N</div>
      <div><strong>NVDA</strong><div class="name">NVIDIA Corp.</div></div>
      <div><div class="price">$924.40</div><div class="delta up">▲ +3.4%</div></div>
    </div>
  </section>
</div>
```
