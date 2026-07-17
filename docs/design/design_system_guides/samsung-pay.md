---
brand: Samsung Pay
brand_ko: 삼성페이
slug: samsung-pay
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#1428A0"
primary_color_name: "Samsung Blue"
mood:
  - 카드스택
  - 삼성블루
  - 모바일결제

font_category: sans-serif
font_primary: SamsungOne
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2015
last_major_revision: 2024
signature_keyword: "삼성 블루(#1428A0) + 다크 캔버스 + 부채살 카드 스택의 모바일 결제 정체성"

hero_html: |
  <div style="font-family:SamsungOne,'Pretendard',-apple-system,sans-serif;background:#000;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:13px;font-weight:700;letter-spacing:-0.01em;">Samsung Pay</strong>
    </div>
    <div style="padding:0 14px 8px;display:flex;align-items:flex-end;justify-content:center;gap:0;position:relative;">
      <div style="aspect-ratio:1.6/1;width:60%;border-radius:8px;background:linear-gradient(135deg,#0F1E78 0%,#1428A0 100%);padding:8px;display:flex;flex-direction:column;justify-content:space-between;color:#fff;box-shadow:0 12px 24px rgba(20,40,160,0.40);position:relative;z-index:3;">
        <div style="font-size:8px;font-weight:700;letter-spacing:0.16em;opacity:0.85;">신한카드</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;font-size:8px;">
          <div style="font-weight:500;font-variant-numeric:tabular-nums;">5247 ••••</div>
          <div style="font-weight:700;">VISA</div>
        </div>
      </div>
      <div style="aspect-ratio:1.6/1;width:50%;border-radius:8px;background:linear-gradient(135deg,#666 0%,#222 100%);position:absolute;right:14%;bottom:0;transform:rotate(8deg) translateY(8px);z-index:2;opacity:0.7;"></div>
      <div style="aspect-ratio:1.6/1;width:45%;border-radius:8px;background:linear-gradient(135deg,#444 0%,#111 100%);position:absolute;left:14%;bottom:0;transform:rotate(-8deg) translateY(8px);z-index:1;opacity:0.5;"></div>
    </div>
    <div style="background:#0A0A0A;border-top:1px solid #1F1F1F;padding:8px 14px;display:flex;flex-direction:column;gap:2px;">
      <div style="font-size:8px;color:#A0A0A0;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">기본 결제 카드</div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <strong style="font-size:11px;font-weight:600;">신한 The More 카드</strong>
        <span style="font-size:9px;color:#1428A0;background:#fff;font-weight:700;padding:3px 8px;border-radius:9999px;">결제</span>
      </div>
    </div>
  </div>

sources:
  - https://www.samsung.com/sec/samsung-pay/
  - https://www.samsung.com/global/galaxy/apps/samsung-wallet/
---

### ① 브랜드 DNA
- **브랜드명**: Samsung Pay
- **한 줄 정체성**: 삼성 갤럭시 기기의 NFC·MST 모바일 결제 — Samsung Wallet 통합 (카드/멤버십/티켓)
- **공식 디자인 철학**: "Tap. Pay. Done." — 삼성 블루 + 다크 캔버스의 프리미엄 기기 톤
- **시그니처 요소 1개**: 삼성 블루(#1428A0) + 검정 캔버스 + 부채살 카드 스택(여러 카드를 살짝 회전하여 겹쳐 보여주는 시그니처 디스플레이)

### ② 톤 & 무드
- **핵심 키워드 3개**: 카드스택, 삼성블루, 모바일결제
- **무드 설명**: 검정 캔버스에 카드는 짙은 네이비 그라데이션. 카드 스택이 부채살처럼 펼쳐진다. 폰트는 SamsungOne (영문)/삼성샤프(한글). 결제 모션이 큰 비중.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~12px)
- **평면성**: Layered — 카드 그림자가 시그니처

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Samsung Blue */
  --color-primary-50:  #E0E6F7;
  --color-primary-100: #B3BFE7;
  --color-primary-200: #8093D5;
  --color-primary-300: #4D67C3;
  --color-primary-400: #2645B0;
  --color-primary-500: #1428A0;   /* Samsung Blue */
  --color-primary-600: #0F1E78;
  --color-primary-700: #0A1758;
  --color-primary-800: #060E36;
  --color-primary-900: #02071A;

  /* Secondary - Galaxy gradient (cool teal) */
  --color-secondary-500: #4FBFB8;

  /* Neutral - dark scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F5F8;
  --color-neutral-100:  #E6E7EC;
  --color-neutral-200:  #C0C2CC;
  --color-neutral-300:  #8A8D99;
  --color-neutral-500:  #555866;
  --color-neutral-700:  #1F1F26;
  --color-neutral-800:  #141418;
  --color-neutral-900:  #0A0A0F;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #0F2A1A;
  --color-success-fg: #2DC07A;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #FFB84F;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #FF4D6D;
  --color-info-bg:    #0F1A3A;
  --color-info-fg:    #4FA0FF;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #0A0A0F;
  --bg-elevated: #141418;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.78);
  --text-tertiary:   rgba(255,255,255,0.55);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(255,255,255,0.28);

  /* Border */
  --border-default: rgba(255,255,255,0.08);
  --border-subtle:  rgba(255,255,255,0.04);
  --border-strong:  rgba(255,255,255,0.18);
  --border-focus:   #1428A0;
}

[data-theme="light"] {
  --bg-base: #FFFFFF;
  --bg-subtle: #F4F5F8;
  --bg-elevated: #FFFFFF;
  --text-primary: #0A0A0F;
  --text-secondary: #1F1F26;
  --text-tertiary: #555866;
  --border-default: #E6E7EC;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: SamsungOne / SamsungSharpSans
  - 한글: 삼성샤프 / Pretendard 폴백
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 22px / 700 / 1.3 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 13px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.04em
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
- **Container**: max-width 480px (모바일 우선), 좌우 패딩 20px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 8px 20px rgba(0,0,0,0.40);
--shadow-lg: 0 18px 36px rgba(0,0,0,0.55);
--shadow-card: 0 14px 28px rgba(20,40,160,0.40);    /* 카드 글로우 */
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 SamsungOne, Inter, sans-serif; border-radius: 9999px; padding: 14px 24px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-primary:active { transform: scale(0.97); }
.btn-secondary { background: rgba(255,255,255,0.10); color: #fff; }
.btn-secondary:hover { background: rgba(255,255,255,0.16); }
.btn-ghost { background: transparent; color: var(--color-primary-300); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-pay { background: #FFFFFF; color: var(--color-primary-500); font-weight: 700; padding: 14px 28px; }
.btn-icon { width: 56px; height: 56px; padding: 0; border-radius: 50%; background: rgba(255,255,255,0.10); color: #fff; }
```

**Input**
```css
.input { background: rgba(255,255,255,0.08); border: 1px solid transparent; border-radius: 12px; padding: 14px 16px; color: #fff; font: 400 15px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-400); background: rgba(255,255,255,0.12); }
```

**Card (Wallet / Stack)**
```css
.wallet-card { background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-500) 100%); color: #fff; border-radius: 12px; padding: 18px; min-height: 200px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-card); }
.wallet-card .label { font: 700 11px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.85; }
.wallet-card .num { font: 600 16px/1 inherit; font-variant-numeric: tabular-nums; letter-spacing: 0.04em; }
.stack { position: relative; padding-bottom: 30px; }
.stack .card-l { position: absolute; left: 14%; bottom: 0; width: 70%; aspect-ratio: 1.6/1; border-radius: 12px; transform: rotate(-8deg) translateY(8px); opacity: 0.55; background: linear-gradient(135deg, var(--color-neutral-700), var(--color-neutral-900)); z-index: 1; }
.stack .card-r { position: absolute; right: 14%; bottom: 0; width: 76%; aspect-ratio: 1.6/1; border-radius: 12px; transform: rotate(8deg) translateY(8px); opacity: 0.75; background: linear-gradient(135deg, var(--color-neutral-500), var(--color-neutral-800)); z-index: 2; }
.stack .card-front { position: relative; z-index: 3; }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 20px; border: 1px solid var(--border-default); }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 9999px; font: 700 11px/1.4 inherit; letter-spacing: 0.02em; }
.tag-default-card { background: var(--color-primary-500); color: #fff; }
.tag-touch-id     { background: rgba(255,255,255,0.12); color: #fff; }
.tag-rewards      { background: rgba(45,192,122,0.20); color: var(--color-success-fg); }
.tag-membership   { background: rgba(79,160,255,0.16); color: var(--color-info-fg); }
.tag-coupon       { background: rgba(255,184,79,0.16); color: var(--color-warning-fg); }
```

**Navigation (Bottom tab + Stack)**
```css
.tab-bar { display: flex; padding: 12px 16px; background: var(--bg-base); border-top: 1px solid var(--border-default); }
.tab-bar .tab { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; font: 600 11px/1.2 inherit; color: var(--text-tertiary); cursor: pointer; }
.tab-bar .tab.active { color: var(--color-primary-300); }
.tab-bar .tab .ic { font-size: 22px; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 450ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);   /* 카드 스택 펴짐 */
```

### ⑪ Anti-patterns
1. 메인 카드 컬러를 삼성 블루 외 컬러로 변경 금지 — 단일 톤 정체성
2. 카드 한 장만 표시 금지 — 부채살 스택이 시그니처
3. 라이트 캔버스를 기본으로 사용 금지 — 다크가 표준
4. 카드 모서리 sharp 사용 금지 — 8~12px Round
5. 카드 번호·금액을 비례폰트로 표기 금지

### ⑫ 시그니처 적용 예시 (Wallet home)
```html
<style>
  body { margin: 0; font-family: SamsungOne, 'Pretendard', sans-serif; background: #000; color: #fff; min-height: 100vh; }
  .container { max-width: 460px; margin: 0 auto; padding: 28px 20px; }
  .topbar { display: flex; align-items: center; gap: 12px; margin-bottom: 30px; }
  .topbar h1 { margin: 0; font: 700 22px/1 inherit; letter-spacing: -0.01em; }
  .topbar .right { margin-left: auto; display: flex; gap: 14px; font-size: 22px; color: rgba(255,255,255,0.7); }
  .stack { position: relative; padding-bottom: 36px; margin-bottom: 30px; }
  .stack .card-l { position: absolute; left: 8%; bottom: 0; width: 70%; aspect-ratio: 1.6/1; border-radius: 14px; transform: rotate(-9deg) translateY(10px); opacity: 0.45; background: linear-gradient(135deg,#3A3A40,#0A0A0F); z-index: 1; box-shadow: 0 10px 20px rgba(0,0,0,0.30); }
  .stack .card-r { position: absolute; right: 8%; bottom: 0; width: 78%; aspect-ratio: 1.6/1; border-radius: 14px; transform: rotate(9deg) translateY(10px); opacity: 0.65; background: linear-gradient(135deg,#5C2A1A,#1A0808); z-index: 2; box-shadow: 0 10px 20px rgba(0,0,0,0.40); }
  .stack .card-front { position: relative; z-index: 3; aspect-ratio: 1.6/1; width: 88%; margin: 0 auto; border-radius: 14px; background: linear-gradient(135deg,#0F1E78,#1428A0); padding: 22px; display: flex; flex-direction: column; justify-content: space-between; color: #fff; box-shadow: 0 18px 36px rgba(20,40,160,0.40); }
  .stack .card-front .row1 { display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; opacity: 0.9; }
  .stack .card-front .row1 .chip { background: rgba(255,255,255,0.16); padding: 4px 10px; border-radius: 9999px; font: 700 10px/1 inherit; backdrop-filter: blur(20px); }
  .stack .card-front .name { font: 700 18px/1.2 inherit; letter-spacing: -0.01em; margin-top: 4px; }
  .stack .card-front .num { font: 600 17px/1 inherit; letter-spacing: 0.06em; font-variant-numeric: tabular-nums; opacity: 0.95; }
  .stack .card-front .row3 { display: flex; justify-content: space-between; align-items: flex-end; font: 700 13px/1 inherit; }
  .pay-btn { width: 100%; background: #fff; color: #1428A0; font: 700 17px/1 inherit; padding: 18px; border: 0; border-radius: 9999px; cursor: pointer; box-shadow: 0 12px 24px rgba(20,40,160,0.30); display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 30px; }
  h2 { font: 700 18px/1.2 inherit; margin: 0 0 14px; letter-spacing: -0.005em; }
  .quick { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 30px; }
  .quick .a { background: rgba(255,255,255,0.06); border-radius: 16px; padding: 16px 6px; display: flex; flex-direction: column; align-items: center; gap: 6px; font: 600 11px/1.2 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
  .quick .a:hover { background: rgba(255,255,255,0.12); }
  .quick .a .ic { width: 40px; height: 40px; border-radius: 50%; background: rgba(20,40,160,0.30); display: grid; place-items: center; font-size: 17px; }
  .stub-list { display: flex; flex-direction: column; gap: 6px; }
  .stub { display: flex; align-items: center; gap: 14px; padding: 14px 16px; background: rgba(255,255,255,0.04); border-radius: 14px; cursor: pointer; border: 1px solid rgba(255,255,255,0.04); }
  .stub:hover { background: rgba(255,255,255,0.08); }
  .stub .ic { width: 40px; height: 40px; border-radius: 50%; background: rgba(20,40,160,0.30); display: grid; place-items: center; font-size: 17px; }
  .stub .info strong { font: 600 14px/1.3 inherit; display: block; }
  .stub .info .sub { font: 500 12px/1.3 inherit; color: rgba(255,255,255,0.55); margin-top: 2px; }
  .stub .amount { font: 700 15px/1 inherit; margin-left: auto; font-variant-numeric: tabular-nums; }
</style>

<main class="container">
  <header class="topbar">
    <h1>Samsung Pay</h1>
    <div class="right">🔍 ⚙</div>
  </header>

  <section class="stack">
    <div class="card-l"></div>
    <div class="card-r"></div>
    <div class="card-front">
      <div class="row1"><span>신한카드</span><span class="chip">기본 결제 카드</span></div>
      <div>
        <div class="name">신한 The More 카드</div>
        <div class="num" style="margin-top:14px;">5247 ●●●● ●●●● 8210</div>
      </div>
      <div class="row3"><span>VISA</span><span style="opacity:0.85;font-weight:500;">유효기간 09/28</span></div>
    </div>
  </section>

  <button class="pay-btn">📱 결제하기 — 화면 아래에서 위로 스와이프</button>

  <h2>빠른 기능</h2>
  <div class="quick">
    <div class="a"><div class="ic">📲</div>결제</div>
    <div class="a"><div class="ic">🎟️</div>멤버십</div>
    <div class="a"><div class="ic">🪪</div>티켓</div>
    <div class="a"><div class="ic">＋</div>추가</div>
  </div>

  <h2>최근 결제 내역</h2>
  <div class="stub-list">
    <div class="stub"><div class="ic">☕</div><div class="info"><strong>스타벅스 강남R점</strong><div class="sub">오늘 09:14 · 신한 The More</div></div><div class="amount">-₩5,800</div></div>
    <div class="stub"><div class="ic" style="background:rgba(45,192,122,0.25);">🛒</div><div class="info"><strong>이마트 트레이더스</strong><div class="sub">어제 19:42 · 현대 ZERO</div></div><div class="amount">-₩48,920</div></div>
    <div class="stub"><div class="ic" style="background:rgba(255,184,79,0.20);">⛽</div><div class="info"><strong>SK주유소 양재점</strong><div class="sub">5월 12일 · 신한 The More</div></div><div class="amount">-₩72,400</div></div>
    <div class="stub"><div class="ic" style="background:rgba(79,160,255,0.20);">🚇</div><div class="info"><strong>티머니 충전</strong><div class="sub">5월 11일 · 자동 충전</div></div><div class="amount">-₩30,000</div></div>
  </div>
</main>
```
