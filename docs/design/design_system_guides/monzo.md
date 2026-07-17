---
brand: Monzo
brand_ko: 몬조
slug: monzo
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - consumer

color_tone: warm
primary_color_hex: "#FF4F40"
primary_color_name: "Monzo Coral"
mood:
  - 코랄카드
  - 일러스트
  - 활기찬

font_category: sans-serif
font_primary: ABC Diatype
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2015
last_major_revision: 2024
signature_keyword: "코랄(#FF4F40) 카드 + 친근한 일러스트 + Pots 저금통의 활기찬 영국 챌린저뱅크"

card_tokens: |
  {
    "light": { "bg": "#F9F8F4", "surface": "#FFFFFF", "border": "#E6E4DD", "fg": "#11181C", "fg_muted": "#797873", "accent": "#FF4F40" },
    "dark":  { "bg": "#11181C", "surface": "#232D33", "border": "#2D363B", "fg": "#F9F8F4", "fg_muted": "#A8A6A0", "accent": "#FF6051" }
  }

hero_html: |
  <div style="font-family:'ABC Diatype',Inter,'Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:13px;font-weight:700;letter-spacing:-0.01em;color:var(--card-fg);">Monzo</strong>
    </div>
    <div style="padding:0 14px 8px;display:flex;flex-direction:column;gap:8px;">
      <div style="aspect-ratio:1.6/1;border-radius:14px;background:var(--card-accent);padding:10px;display:flex;flex-direction:column;justify-content:space-between;color:#fff;box-shadow:0 14px 28px rgba(255,79,64,0.30);">
        <div style="font-size:8px;font-weight:600;letter-spacing:0.16em;opacity:0.85;">monzo</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;font-size:9px;">
          <div style="font-weight:500;font-variant-numeric:tabular-nums;">2942 ••••</div>
          <div style="font-weight:600;">Mastercard</div>
        </div>
      </div>
    </div>
    <div style="background:var(--card-surface);border-top:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:14px;font-weight:700;font-variant-numeric:tabular-nums;color:var(--card-fg);">£1,284.50</strong>
      <span style="font-size:9px;color:#0F8A5F;margin-left:auto;font-weight:600;">↑ £42 오늘</span>
    </div>
  </div>

sources:
  - https://monzo.com/
  - https://monzo.com/brand
---

### ① 브랜드 DNA
- **브랜드명**: Monzo
- **한 줄 정체성**: 영국발 코랄 카드의 챌린저뱅크 — 친근하고 인간 중심의 디지털 은행
- **공식 디자인 철학**: "Built for everyone" — 따뜻한 일러스트와 명확한 라이팅
- **시그니처 요소 1개**: Monzo Coral(#FF4F40) 카드 비주얼 + 크림 캔버스(#F9F8F4) + Pots(저금통) 일러스트. Revolut의 다크 무지개와 정반대의 라이트·따뜻한 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 코랄카드, 일러스트, 활기찬
- **무드 설명**: 따뜻한 크림 캔버스 + 흰 카드. 강조는 Monzo Coral. 친근한 일러스트가 곳곳에. 잔액 숫자는 tabular-nums, 메시지는 명확하고 친근한 영국 영어 톤.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~20px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Monzo Coral */
  --color-primary-50:  #FFE9E6;
  --color-primary-100: #FFC4BC;
  --color-primary-200: #FF9C90;
  --color-primary-300: #FF7464;
  --color-primary-400: #FF6051;
  --color-primary-500: #FF4F40;   /* Monzo Coral */
  --color-primary-600: #E03A2C;
  --color-primary-700: #B22C20;
  --color-primary-800: #821E16;
  --color-primary-900: #52120D;

  /* Secondary - Sunny / Lemon (Pots) */
  --color-secondary-500: #F2D24C;

  /* Neutral - warm cream */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9F8F4;     /* 캔버스 */
  --color-neutral-100:  #F0EEE8;
  --color-neutral-200:  #E6E4DD;
  --color-neutral-300:  #C8C6BD;
  --color-neutral-500:  #797873;
  --color-neutral-700:  #44443F;
  --color-neutral-800:  #2A2A26;
  --color-neutral-900:  #11181C;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E4F4EA;
  --color-success-fg: #0F8A5F;
  --color-warning-bg: #FFF6D9;
  --color-warning-fg: #A87A1F;
  --color-error-bg:   #FCE3E0;
  --color-error-fg:   #C72E1A;
  --color-info-bg:    #E0EFFB;
  --color-info-fg:    #2C70BE;

  /* Surface */
  --bg-base:     #F9F8F4;
  --bg-subtle:   #F0EEE8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(17,24,28,0.50);

  /* Text */
  --text-primary:    #11181C;
  --text-secondary:  #44443F;
  --text-tertiary:   #797873;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C8C6BD;

  /* Border */
  --border-default: #E6E4DD;
  --border-subtle:  #F0EEE8;
  --border-strong:  #C8C6BD;
  --border-focus:   #FF4F40;
}

[data-theme="dark"] {
  --bg-base: #11181C;
  --bg-subtle: #1B2329;
  --bg-elevated: #232D33;
  --text-primary: #F9F8F4;
  --text-secondary: rgba(249,248,244,0.85);
  --text-tertiary: rgba(249,248,244,0.55);
  --border-default: rgba(255,255,255,0.10);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: ABC Diatype (Dinamo) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.015em
  - H1: 28px / 700 / 1.2 / -0.01em
  - H2: 20px / 700 / 1.3 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.55 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 13px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.02em
  - Numeric: 17px / 600 tabular-nums

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
- **Container**: max-width 1200px, 좌우 패딩 20px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-xl: 28px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(17,24,28,0.06);
--shadow-md: 0 4px 12px rgba(17,24,28,0.08);
--shadow-lg: 0 14px 28px rgba(17,24,28,0.12);
--shadow-coral: 0 14px 28px rgba(255,79,64,0.30);   /* 카드 글로우 */
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합 + 친근한 일러스트
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Heroicons + 자체 일러스트

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'ABC Diatype', Inter, sans-serif; border-radius: 9999px; padding: 14px 22px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { transform: scale(0.97); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1.5px solid var(--text-primary); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-pot { background: var(--color-secondary-500); color: var(--text-primary); }   /* 저축 Pots */
```

**Input**
```css
.input { background: #fff; border: 1.5px solid var(--border-strong); border-radius: 14px; padding: 14px 16px; color: var(--text-primary); font: 400 15px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(255,79,64,0.15); }
```

**Card (Account + Pots)**
```css
.card-account { background: var(--color-primary-500); color: #fff; border-radius: 20px; padding: 22px; min-height: 200px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-coral); }
.card-account .label { font: 600 11px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.85; }
.card-account .balance { font: 700 36px/1 inherit; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; margin-top: 12px; }
.pot { background: #fff; border-radius: 20px; padding: 18px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; box-shadow: var(--shadow-sm); }
.pot .icon { width: 44px; height: 44px; border-radius: 50%; background: var(--color-secondary-500); display: grid; place-items: center; font-size: 22px; }
.pot .name { font: 700 15px/1.3 inherit; color: var(--text-primary); }
.pot .amount { font: 700 22px/1 inherit; color: var(--text-primary); font-variant-numeric: tabular-nums; }
.pot .progress { height: 6px; background: var(--bg-subtle); border-radius: 9999px; overflow: hidden; }
.pot .progress .bar { height: 100%; background: var(--color-primary-500); border-radius: 9999px; }
.card { background: #fff; border-radius: 14px; padding: 18px; box-shadow: var(--shadow-sm); }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 9999px; font: 700 11px/1.4 inherit; letter-spacing: 0.02em; }
.tag-current   { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-pot       { background: rgba(242,210,76,0.30); color: #8C6A00; }
.tag-savings   { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-premium   { background: var(--color-primary-500); color: #fff; }
.tag-shared    { background: rgba(44,112,190,0.16); color: var(--color-info-fg); }
```

**Navigation (Bottom tab)**
```css
.tab-bar { display: flex; gap: 16px; padding: 12px 16px; background: #fff; border-top: 1px solid var(--border-default); }
.tab-bar .tab { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; font: 600 11px/1.2 inherit; color: var(--text-tertiary); cursor: pointer; }
.tab-bar .tab.active { color: var(--color-primary-500); }
.tab-bar .tab .ic { font-size: 22px; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 450ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 카드 색을 코랄 외 색으로 변경 금지 — Monzo Coral이 시그니처
2. 다크 캔버스를 기본으로 사용 금지 — 따뜻한 크림이 정체성 (Revolut과 차별)
3. 라운드 sharp(0~4px) 사용 금지 — 14~20px Round
4. 친근한 일러스트 톤을 무광 아이콘으로 대체 금지
5. 잔액 표기에 monospace 외 폰트 사용 금지

### ⑫ 시그니처 적용 예시 (Account + Pots)
```html
<style>
  body { margin: 0; font-family: 'ABC Diatype', Inter, 'Pretendard', sans-serif; background: #F9F8F4; color: #11181C; min-height: 100vh; }
  .container { max-width: 420px; margin: 0 auto; padding: 24px 18px; }
  .topbar { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
  .topbar .av { width: 40px; height: 40px; border-radius: 50%; background: #FFC4BC; }
  .topbar .greet strong { display: block; font: 700 16px/1.2 inherit; }
  .topbar .greet .sub { font: 500 12px/1.2 inherit; color: #797873; }
  .card-acc { background: #FF4F40; color: #fff; border-radius: 24px; padding: 22px; min-height: 200px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 14px 28px rgba(255,79,64,0.30); margin-bottom: 22px; }
  .card-acc .row1 { display: flex; justify-content: space-between; align-items: center; }
  .card-acc .row1 .l { font: 600 11px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.85; }
  .card-acc .row1 .chip { background: rgba(255,255,255,0.20); padding: 4px 10px; border-radius: 9999px; font: 700 11px/1 inherit; backdrop-filter: blur(20px); }
  .card-acc .balance { font: 700 44px/1 inherit; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; margin-top: 18px; }
  .card-acc .balance small { font-size: 22px; opacity: 0.85; font-weight: 500; }
  .card-acc .row3 { display: flex; justify-content: space-between; align-items: flex-end; font: 600 12px/1 inherit; opacity: 0.85; }
  .actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 28px; }
  .actions .a { background: #fff; border-radius: 16px; padding: 14px 6px; display: flex; flex-direction: column; align-items: center; gap: 6px; font: 600 11px/1.2 inherit; color: #11181C; cursor: pointer; box-shadow: 0 1px 2px rgba(17,24,28,0.06); }
  .actions .a .ic { width: 36px; height: 36px; border-radius: 50%; background: #F9F8F4; display: grid; place-items: center; font-size: 16px; }
  h2 { font: 700 20px/1.2 inherit; margin: 0 0 14px; letter-spacing: -0.005em; }
  h2 small { font-size: 13px; color: #FF4F40; font-weight: 600; margin-left: 8px; }
  .pots { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 28px; }
  .pot { background: #fff; border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 1px 2px rgba(17,24,28,0.06); cursor: pointer; }
  .pot .icon { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; font-size: 22px; }
  .pot .name { font: 700 14px/1.2 inherit; }
  .pot .amount { font: 700 20px/1 inherit; font-variant-numeric: tabular-nums; }
  .pot .progress { height: 6px; background: #F0EEE8; border-radius: 9999px; overflow: hidden; }
  .pot .progress .bar { height: 100%; border-radius: 9999px; }
  .pot .goal { font: 500 11px/1.3 inherit; color: #797873; }
  .tx { background: #fff; border-radius: 18px; padding: 6px; box-shadow: 0 1px 2px rgba(17,24,28,0.06); }
  .tx .row { display: flex; align-items: center; gap: 12px; padding: 10px 12px; cursor: pointer; }
  .tx .row + .row { border-top: 1px solid #F0EEE8; }
  .tx .row .ic { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; font-size: 18px; flex-shrink: 0; }
  .tx .row .info { flex: 1; min-width: 0; }
  .tx .row .info strong { font: 700 14px/1.3 inherit; display: block; }
  .tx .row .info .when { font: 500 12px/1.3 inherit; color: #797873; margin-top: 2px; }
  .tx .row .amount { font: 700 15px/1 inherit; font-variant-numeric: tabular-nums; }
  .tx .row .amount.in { color: #0F8A5F; }
</style>

<main class="container">
  <header class="topbar">
    <div class="av"></div>
    <div class="greet"><strong>오후 좋은 하루, Lena</strong><div class="sub">Monzo와 함께</div></div>
  </header>

  <section class="card-acc">
    <div class="row1"><div class="l">CURRENT ACCOUNT</div><div class="chip">£</div></div>
    <div class="balance">£1,284<small>.50</small></div>
    <div class="row3"><div>2942 ••••</div><div>Mastercard</div></div>
  </section>

  <div class="actions">
    <div class="a"><div class="ic">↑</div>송금</div>
    <div class="a"><div class="ic">↔</div>이체</div>
    <div class="a"><div class="ic">＋</div>Pot</div>
    <div class="a"><div class="ic">⋯</div>더보기</div>
  </div>

  <h2>나의 Pots<small>3개</small></h2>
  <div class="pots">
    <div class="pot">
      <div class="icon" style="background:#F2D24C;">🏖</div>
      <div class="name">바르셀로나 여행</div>
      <div class="amount">£820</div>
      <div class="progress"><div class="bar" style="width:64%;background:#FF4F40;"></div></div>
      <div class="goal">£1,280 목표 · 64%</div>
    </div>
    <div class="pot">
      <div class="icon" style="background:#A8D5BA;">🏠</div>
      <div class="name">전세보증금</div>
      <div class="amount">£4,200</div>
      <div class="progress"><div class="bar" style="width:42%;background:#0F8A5F;"></div></div>
      <div class="goal">£10,000 목표 · 42%</div>
    </div>
  </div>

  <h2>최근 거래</h2>
  <div class="tx">
    <div class="row"><div class="ic" style="background:#FFE9E6;">☕</div><div class="info"><strong>Pret a Manger</strong><div class="when">오늘 09:18</div></div><div class="amount">-£3.80</div></div>
    <div class="row"><div class="ic" style="background:#E4F4EA;">💼</div><div class="info"><strong>Salary</strong><div class="when">어제 · 입금</div></div><div class="amount in">+£2,420.00</div></div>
    <div class="row"><div class="ic" style="background:#FFF6D9;">🚇</div><div class="info"><strong>TfL</strong><div class="when">월 12일 · 교통</div></div><div class="amount">-£28.40</div></div>
    <div class="row"><div class="ic" style="background:#E0EFFB;">🍝</div><div class="info"><strong>Padella Soho</strong><div class="when">월 11일 · 외식</div></div><div class="amount">-£24.00</div></div>
  </div>
</main>
```
