---
brand: Revolut
brand_ko: 레볼루트
slug: revolut
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#0666EB"
primary_color_name: "Revolut Blue"
mood:
  - 다크모노
  - 무지개액센트
  - 글로벌네오뱅크

font_category: sans-serif
font_primary: Aeonik
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark
  - light

released_year: 2015
last_major_revision: 2024
signature_keyword: "다크 모노 캔버스 + 무지개 그라데이션 카드 + 라운드 16px의 글로벌 네오뱅크"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F7F7", "border": "#EAEAEA", "fg": "#000000", "fg_muted": "#555555", "accent": "#0666EB" },
    "dark":  { "bg": "#000000", "surface": "#0A0A0A", "border": "#1F1F1F", "fg": "#FFFFFF", "fg_muted": "#8A8A8A", "accent": "#0666EB" }
  }

hero_html: |
  <div style="font-family:Aeonik,Inter,'Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:13px;font-weight:700;letter-spacing:-0.01em;">Revolut</strong>
    </div>
    <div style="padding:0 14px 10px;display:flex;flex-direction:column;gap:8px;">
      <div style="aspect-ratio:1.6/1;border-radius:14px;background:linear-gradient(135deg,#2678F1 0%,#9747FF 50%,#FF45B5 100%);padding:10px;display:flex;flex-direction:column;justify-content:space-between;color:#fff;box-shadow:0 18px 36px rgba(151,71,255,0.40);">
        <div style="font-size:8px;font-weight:600;letter-spacing:0.16em;opacity:0.85;">REVOLUT METAL</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;font-size:9px;">
          <div style="font-weight:500;font-variant-numeric:tabular-nums;">5325 ••••</div>
          <div style="font-weight:600;">VISA</div>
        </div>
      </div>
    </div>
    <div style="background:var(--card-surface);border-top:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:14px;font-weight:700;font-variant-numeric:tabular-nums;">€4,892.50</strong>
      <span style="font-size:9px;color:#19C2A0;margin-left:auto;font-weight:600;">+€124.20 오늘</span>
    </div>
  </div>

sources:
  - https://www.revolut.com/
  - https://brand.revolut.com/
---

### ① 브랜드 DNA
- **브랜드명**: Revolut
- **한 줄 정체성**: 영국발 글로벌 네오뱅크 — 다중 통화·주식·크립토를 한 앱에서
- **공식 디자인 철학**: "One app, all things money" — 다크 모노 + 컬러풀 그라데이션 카드
- **시그니처 요소 1개**: 다크 모노 캔버스(#000) + 카드는 무지개 그라데이션(#0666EB → #9747FF → #FF45B5) + 라운드 16px. Monzo의 코랄·Plaid의 모노톤과 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 다크모노, 무지개액센트, 글로벌네오뱅크
- **무드 설명**: 검정 캔버스가 기본. 거래 내역과 잔액은 흰 타이포. 카드 비주얼만 무지개 그라데이션이 강렬하게 박힌다. 라운드 14~16px로 부드럽다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~16px)
- **평면성**: Layered

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Revolut Blue (다크 위에서 가독성 위해 명도 한 단계 상향한 400을 기본으로) */
  --color-primary-50:  #E0EBFE;
  --color-primary-100: #B3D0FC;
  --color-primary-200: #80B0F9;
  --color-primary-300: #4D8FF6;
  --color-primary-400: #2678F1;
  --color-primary-500: #2678F1;   /* Revolut Blue (다크 캔버스 대비 보정) */
  --color-primary-600: #0666EB;
  --color-primary-700: #0554C9;
  --color-primary-800: #0440A1;
  --color-primary-900: #022D72;

  /* Secondary - Purple / Pink gradient stops */
  --color-secondary-500: #9747FF;
  --color-accent-pink:   #FF45B5;

  /* Neutral - mono dark (다크 기본: 0 = 잉크 블랙, 1000 = 화이트로 반전) */
  --color-neutral-0:    #000000;     /* 페이지 잉크 블랙 */
  --color-neutral-50:   #0A0A0A;
  --color-neutral-100:  #141414;
  --color-neutral-200:  #1F1F1F;     /* card */
  --color-neutral-300:  #2A2A2A;
  --color-neutral-500:  #555555;
  --color-neutral-700:  #8A8A8A;     /* muted text */
  --color-neutral-800:  #C0C0C0;
  --color-neutral-900:  #EAEAEA;
  --color-neutral-1000: #FFFFFF;     /* 본문 텍스트 화이트 */

  /* Semantic - 다크 캔버스 위 가독 (bg는 딥톤, fg는 채도 유지) */
  --color-success-bg: #0F2A1A;
  --color-success-fg: #2BD4AE;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #FFB84F;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #FF6B85;
  --color-info-bg:    #0A1F3A;
  --color-info-fg:    #5BA8FF;

  /* Surface (배경 위계) */
  --bg-base:     #000000;            /* 페이지 기본 — 잉크 블랙 */
  --bg-subtle:   #0A0A0A;            /* 섹션/사이드레일 */
  --bg-elevated: #141414;            /* 카드 */
  --bg-overlay:  rgba(0,0,0,0.85);   /* 모달/드롭다운 */

  /* Text */
  --text-primary:    #FFFFFF;                    /* 본문 화이트 */
  --text-secondary:  rgba(255,255,255,0.75);     /* 보조 */
  --text-tertiary:   rgba(255,255,255,0.50);     /* 캡션 */
  --text-on-primary: #FFFFFF;                    /* Primary 위 */
  --text-disabled:   rgba(255,255,255,0.28);

  /* Border */
  --border-default: rgba(255,255,255,0.10);
  --border-subtle:  rgba(255,255,255,0.05);
  --border-strong:  rgba(255,255,255,0.20);
  --border-focus:   #2678F1;
}

[data-theme="light"] {
  /* Primary - Revolut Blue (라이트 원본) */
  --color-primary-50:  #E0EBFE;
  --color-primary-100: #B3D0FC;
  --color-primary-200: #80B0F9;
  --color-primary-300: #4D8FF6;
  --color-primary-400: #2678F1;
  --color-primary-500: #0666EB;   /* Revolut Blue */
  --color-primary-600: #0554C9;
  --color-primary-700: #0440A1;
  --color-primary-800: #022D72;
  --color-primary-900: #011A45;

  /* Neutral - mono light (원본 정방향 램프) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F7;
  --color-neutral-100:  #EAEAEA;
  --color-neutral-200:  #C0C0C0;
  --color-neutral-300:  #8A8A8A;
  --color-neutral-500:  #555555;
  --color-neutral-700:  #1F1F1F;     /* card */
  --color-neutral-800:  #141414;
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;

  /* Semantic (라이트 원본) */
  --color-success-bg: #0F2A1A;
  --color-success-fg: #19C2A0;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #FFB84F;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #FF4D6D;
  --color-info-bg:    #0A1F3A;
  --color-info-fg:    #4DA0FF;

  /* Surface */
  --bg-base: #FFFFFF;
  --bg-subtle: #F7F7F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay: rgba(0,0,0,0.85);

  /* Text */
  --text-primary: #000000;
  --text-secondary: #1F1F1F;
  --text-tertiary: #555555;
  --text-on-primary: #FFFFFF;
  --text-disabled: rgba(0,0,0,0.28);

  /* Border */
  --border-default: #EAEAEA;
  --border-subtle:  rgba(0,0,0,0.05);
  --border-strong:  rgba(0,0,0,0.20);
  --border-focus:   #0666EB;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Aeonik (자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 56px / 700 / 1.1 / -0.02em (잔액)
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 22px / 600 / 1.3 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.06em uppercase
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
  --space-3xl: 72px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 20px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.45);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 16px 36px rgba(0,0,0,0.65);
--shadow-card: 0 18px 36px rgba(151,71,255,0.40);    /* 카드 그라데이션 글로우 */
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Aeonik, Inter, sans-serif; border-radius: 9999px; padding: 12px 22px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-primary:active { transform: scale(0.97); }
.btn-secondary { background: rgba(255,255,255,0.10); color: #fff; backdrop-filter: blur(20px); }
.btn-ghost { background: transparent; color: var(--color-primary-300); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-gradient { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500), var(--color-accent-pink)); color: #fff; }
.btn-circle { width: 56px; height: 56px; padding: 0; border-radius: 50%; background: rgba(255,255,255,0.10); color: #fff; }
```

**Input**
```css
.input { background: rgba(255,255,255,0.08); border: 1px solid transparent; border-radius: 12px; padding: 14px 16px; color: #fff; font: 400 15px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); background: rgba(255,255,255,0.12); }
```

**Card (Account / Transaction)**
```css
.card-account { background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-secondary-500) 50%, var(--color-accent-pink) 100%); color: #fff; border-radius: 16px; padding: 20px; min-height: 180px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-card); }
.card-account .label { font: 600 11px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.85; }
.card-account .balance { font: 700 32px/1 inherit; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; }
.tx-row { display: flex; align-items: center; gap: 14px; padding: 14px 16px; background: var(--bg-elevated); border-radius: 12px; margin-bottom: 6px; cursor: pointer; }
.tx-row .ic { width: 40px; height: 40px; border-radius: 50%; background: var(--color-primary-700); display: grid; place-items: center; }
.tx-row .info { flex: 1; min-width: 0; }
.tx-row .name { font: 600 14px/1.3 inherit; color: #fff; }
.tx-row .when { font: 500 12px/1.3 inherit; color: var(--text-tertiary); }
.tx-row .amount { font: 700 15px/1 inherit; color: #fff; font-variant-numeric: tabular-nums; }
.tx-row .amount.in { color: var(--color-success-fg); }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 20px; border: 1px solid var(--border-default); }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 9999px; font: 600 11px/1.4 inherit; letter-spacing: 0.02em; }
.tag-metal     { background: linear-gradient(135deg, #4A4A4A, #1F1F1F); color: #fff; border: 1px solid rgba(255,255,255,0.20); }
.tag-premium   { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; }
.tag-crypto    { background: rgba(255,184,0,0.16); color: #FFB84F; }
.tag-savings   { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-fee-free  { background: rgba(38,120,241,0.18); color: var(--color-primary-300); }
```

**Navigation (Side rail)**
```css
.rail { width: 240px; background: var(--bg-subtle); padding: 20px 12px; height: 100vh; }
.rail .brand { font: 700 18px/1 inherit; letter-spacing: -0.01em; padding: 8px 14px; margin-bottom: 20px; }
.rail .item { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 12px; font: 500 14px/1.3 inherit; color: var(--text-secondary); cursor: pointer; }
.rail .item:hover { background: rgba(255,255,255,0.06); color: #fff; }
.rail .item.active { background: rgba(38,120,241,0.18); color: var(--color-primary-300); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 카드 그라데이션을 단색으로 평탄화 금지 — 무지개 톤이 시그니처
2. 라이트 모드를 기본 캔버스로 사용 금지 — 다크가 정체성
3. 라운드 sharp(0~4px) 사용 금지 — 12~16px Round
4. 잔액 숫자에 monospace 외 폰트 사용 금지 — Aeonik tabular-nums
5. 본문에 채도 높은 그라데이션 일반화 금지 — 카드/CTA에만

### ⑫ 시그니처 적용 예시 (Dashboard)
```html
<style>
  body { margin: 0; font-family: Aeonik, Inter, 'Pretendard', sans-serif; background: #000; color: #fff; min-height: 100vh; }
  .layout { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .rail { background: #0A0A0A; padding: 22px 12px; }
  .rail .brand { font: 700 22px/1 inherit; letter-spacing: -0.01em; padding: 8px 14px; margin-bottom: 24px; }
  .rail .item { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 12px; font: 500 14px/1.3 inherit; color: rgba(255,255,255,0.7); cursor: pointer; margin-bottom: 4px; }
  .rail .item:hover { background: rgba(255,255,255,0.06); color: #fff; }
  .rail .item.active { background: rgba(38,120,241,0.18); color: #4D8FF6; }
  .main { padding: 32px 36px; }
  .main h1 { margin: 0 0 6px; font: 600 14px/1 inherit; color: rgba(255,255,255,0.7); letter-spacing: 0.08em; text-transform: uppercase; }
  .main .balance { font: 700 56px/1.0 inherit; letter-spacing: -0.02em; margin-bottom: 28px; font-variant-numeric: tabular-nums; }
  .main .balance small { font-size: 24px; color: rgba(255,255,255,0.5); margin-left: 8px; font-weight: 500; }
  .actions { display: flex; gap: 12px; margin-bottom: 32px; }
  .actions .a { background: rgba(255,255,255,0.08); border-radius: 12px; padding: 14px 18px; display: flex; align-items: center; gap: 10px; cursor: pointer; font: 500 14px/1 inherit; }
  .actions .a:hover { background: rgba(255,255,255,0.14); }
  .actions .a .icon { width: 28px; height: 28px; border-radius: 50%; background: #2678F1; display: grid; place-items: center; font-size: 13px; }
  .cards-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 32px; }
  .card-acc { aspect-ratio: 1.58; border-radius: 16px; padding: 18px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 18px 36px rgba(0,0,0,0.65); }
  .card-acc.metal { background: linear-gradient(135deg,#3A3A3A 0%,#1F1F1F 100%); color: #fff; }
  .card-acc.standard { background: linear-gradient(135deg,#2678F1 0%,#9747FF 50%,#FF45B5 100%); color: #fff; box-shadow: 0 18px 36px rgba(151,71,255,0.40); }
  .card-acc.crypto { background: linear-gradient(135deg,#FFB84F 0%,#FF6A00 100%); color: #fff; }
  .card-acc .label { font: 600 11px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.85; }
  .card-acc .bal { font: 700 28px/1 inherit; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; margin-top: 8px; }
  .card-acc .row { display: flex; justify-content: space-between; align-items: flex-end; font: 600 11px/1 inherit; }
  .card-acc .row .num { font-weight: 500; font-variant-numeric: tabular-nums; opacity: 0.85; }
  h2 { font: 600 16px/1 inherit; letter-spacing: 0.04em; text-transform: uppercase; color: rgba(255,255,255,0.7); margin: 0 0 14px; }
  .tx-list { display: flex; flex-direction: column; gap: 6px; }
  .tx { display: flex; align-items: center; gap: 14px; padding: 14px 16px; background: #141414; border-radius: 12px; cursor: pointer; }
  .tx:hover { background: #1F1F1F; }
  .tx .ic { width: 42px; height: 42px; border-radius: 50%; background: #1F2A3A; display: grid; place-items: center; font-size: 16px; }
  .tx .info { flex: 1; }
  .tx .info strong { font: 600 14px/1.3 inherit; display: block; }
  .tx .info .when { font: 500 12px/1.3 inherit; color: rgba(255,255,255,0.55); margin-top: 2px; }
  .tx .amount { font: 700 16px/1 inherit; font-variant-numeric: tabular-nums; }
  .tx .amount.in { color: #2BD4AE; }
</style>

<div class="layout">
  <aside class="rail">
    <div class="brand">Revolut</div>
    <div class="item active">🏠 홈</div>
    <div class="item">💳 결제</div>
    <div class="item">📈 투자</div>
    <div class="item">🪙 크립토</div>
    <div class="item">💎 Pockets</div>
    <div class="item">⚙️ 설정</div>
  </aside>
  <main class="main">
    <h1>총 자산</h1>
    <div class="balance">€4,892<small>.50</small></div>
    <div class="actions">
      <div class="a"><div class="icon">↑</div>송금</div>
      <div class="a"><div class="icon">↓</div>충전</div>
      <div class="a"><div class="icon">↔</div>환전</div>
      <div class="a"><div class="icon">＋</div>더보기</div>
    </div>
    <div class="cards-row">
      <div class="card-acc metal">
        <div class="label">REVOLUT METAL</div>
        <div><div class="bal">€2,420<span style="font-size:14px;color:rgba(255,255,255,0.5);margin-left:4px;">.10</span></div></div>
        <div class="row"><div class="num">5325 ••••</div><div>VISA</div></div>
      </div>
      <div class="card-acc standard">
        <div class="label">SAVINGS</div>
        <div><div class="bal">€1,892<span style="font-size:14px;color:rgba(255,255,255,0.7);margin-left:4px;">.40</span></div></div>
        <div class="row"><div class="num">+3.20% APY</div><div>EUR</div></div>
      </div>
      <div class="card-acc crypto">
        <div class="label">CRYPTO</div>
        <div><div class="bal">€580<span style="font-size:14px;color:rgba(255,255,255,0.7);margin-left:4px;">.00</span></div></div>
        <div class="row"><div class="num">BTC · ETH · SOL</div><div>+18.2%</div></div>
      </div>
    </div>
    <h2>최근 거래</h2>
    <div class="tx-list">
      <div class="tx"><div class="ic">☕</div><div class="info"><strong>Blue Bottle Coffee</strong><div class="when">오늘 09:42 · 카드</div></div><div class="amount">-€6.20</div></div>
      <div class="tx"><div class="ic" style="background:#1A3A1F;">💼</div><div class="info"><strong>Salary · Acme Corp</strong><div class="when">어제 · 입금</div></div><div class="amount in">+€3,200.00</div></div>
      <div class="tx"><div class="ic" style="background:#3A1A1F;">🛒</div><div class="info"><strong>Amazon.de</strong><div class="when">5월 12일 · 카드</div></div><div class="amount">-€42.90</div></div>
      <div class="tx"><div class="ic" style="background:#1A2A3A;">↔</div><div class="info"><strong>EUR → USD</strong><div class="when">5월 11일 · 환전</div></div><div class="amount">-€500.00</div></div>
    </div>
  </main>
</div>
```
