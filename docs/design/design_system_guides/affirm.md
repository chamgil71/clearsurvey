---
brand: Affirm
brand_ko: 어펌
slug: affirm
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#7A5AF8"
primary_color_name: "Affirm Violet"
mood:
  - BNPL
  - 친근보라
  - 라이트카드

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2012
last_major_revision: 2024
signature_keyword: "보라(#7A5AF8) + 크림 라이트 카드 + 'Pay in 4'의 BNPL 친근 톤"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#F8F7FB;color:#0A2540;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #E8E6F2;">
      <strong style="font-size:13px;font-weight:700;color:#7A5AF8;letter-spacing:-0.01em;">Affirm</strong>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:6px;">
      <div style="background:#fff;border-radius:14px;padding:10px;box-shadow:0 4px 12px rgba(122,90,248,0.10);">
        <div style="font-size:9px;color:#7A5AF8;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:4px;">Pay over time</div>
        <div style="font-size:11px;font-weight:600;color:#0A2540;margin-bottom:6px;">4회 분할 · 무이자</div>
        <div style="display:flex;gap:3px;">
          <span style="flex:1;height:4px;border-radius:9999px;background:#7A5AF8;"></span>
          <span style="flex:1;height:4px;border-radius:9999px;background:#7A5AF8;"></span>
          <span style="flex:1;height:4px;border-radius:9999px;background:#E8E6F2;"></span>
          <span style="flex:1;height:4px;border-radius:9999px;background:#E8E6F2;"></span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:6px;">
          <span style="font-size:9px;color:#52576B;">남은 금액</span>
          <strong style="font-size:13px;color:#0A2540;font-weight:700;font-variant-numeric:tabular-nums;">$84.50</strong>
        </div>
      </div>
    </div>
    <div style="background:#fff;border-top:1px solid #E8E6F2;padding:8px 14px;display:flex;align-items:center;gap:6px;">
      <span style="font-size:9px;color:#52576B;">다음 결제</span>
      <strong style="font-size:11px;color:#0A2540;font-weight:700;font-variant-numeric:tabular-nums;margin-left:auto;">5월 28일 · $42.25</strong>
    </div>
  </div>

sources:
  - https://www.affirm.com/
  - https://www.affirm.com/business/brand
---

### ① 브랜드 DNA
- **브랜드명**: Affirm
- **한 줄 정체성**: 미국 BNPL(Buy Now Pay Later) — 결제 시점에 4회 분할 또는 월 분할 옵션
- **공식 디자인 철학**: "Honest finance" — 숨겨진 수수료 없는 친근한 분할 결제
- **시그니처 요소 1개**: Affirm Violet(#7A5AF8) + 크림 캔버스(#F8F7FB) + 4단 분할 게이지. Klarna의 핑크, Afterpay의 민트와 차별되는 친근한 보라

### ② 톤 & 무드
- **핵심 키워드 3개**: BNPL, 친근보라, 라이트카드
- **무드 설명**: 라이트 라일락 캔버스 + 흰 카드 + 보라 강조. 4분할 게이지가 항상 노출. 친근하고 인본주의적 라이팅. 다크 모드는 거의 안 씀.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~16px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Affirm Violet */
  --color-primary-50:  #F0EBFF;
  --color-primary-100: #D9CCFE;
  --color-primary-200: #B9A5FC;
  --color-primary-300: #997AFB;
  --color-primary-400: #8865F9;
  --color-primary-500: #7A5AF8;   /* Affirm Violet */
  --color-primary-600: #5E3DE0;
  --color-primary-700: #4626B0;
  --color-primary-800: #2E1880;
  --color-primary-900: #170A4F;

  /* Secondary - Deep Navy (텍스트) */
  --color-secondary-500: #0A2540;

  /* Neutral - cool lilac scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F7FB;     /* 캔버스 */
  --color-neutral-100:  #EFECF6;
  --color-neutral-200:  #E8E6F2;
  --color-neutral-300:  #CFCBE0;
  --color-neutral-500:  #898498;
  --color-neutral-700:  #52576B;
  --color-neutral-800:  #2A2F45;
  --color-neutral-900:  #0A2540;
  --color-neutral-1000: #050B1F;

  /* Semantic */
  --color-success-bg: #E4F4EA;
  --color-success-fg: #1F8F4E;
  --color-warning-bg: #FFF3D9;
  --color-warning-fg: #A87A1F;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #C72E1A;
  --color-info-bg:    #E0EAFC;
  --color-info-fg:    #2C70BE;

  /* Surface */
  --bg-base:     #F8F7FB;
  --bg-subtle:   #EFECF6;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(10,37,64,0.50);

  /* Text */
  --text-primary:    #0A2540;
  --text-secondary:  #2A2F45;
  --text-tertiary:   #52576B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #CFCBE0;

  /* Border */
  --border-default: #E8E6F2;
  --border-subtle:  #EFECF6;
  --border-strong:  #CFCBE0;
  --border-focus:   #7A5AF8;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter / Söhne (Affirm 자체) 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.02em
  - H1: 28px / 700 / 1.2 / -0.01em
  - H2: 20px / 700 / 1.3 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.55 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 13px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.04em
  - Numeric: 16px / 700 tabular-nums

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
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(10,37,64,0.05);
--shadow-md: 0 4px 12px rgba(122,90,248,0.10);
--shadow-lg: 0 14px 28px rgba(122,90,248,0.14);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, 'Pretendard', sans-serif; border-radius: 9999px; padding: 14px 24px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { transform: scale(0.98); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1.5px solid var(--border-strong); }
.btn-secondary:hover { border-color: var(--color-primary-500); color: var(--color-primary-500); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-cta { background: var(--color-primary-500); color: #fff; padding: 16px 28px; font-size: 15px; }
```

**Input**
```css
.input { background: #fff; border: 1.5px solid var(--border-strong); border-radius: 12px; padding: 14px 16px; color: var(--text-primary); font: 400 15px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(122,90,248,0.15); }
```

**Card (Plan / Installment)**
```css
.plan { background: #fff; border-radius: 16px; padding: 22px; box-shadow: var(--shadow-md); border: 1px solid var(--border-default); }
.plan .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
.plan .name { font: 700 14px/1.3 inherit; color: var(--color-primary-500); letter-spacing: 0.04em; text-transform: uppercase; }
.plan .total { font: 700 28px/1 inherit; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; margin-bottom: 12px; color: var(--text-primary); }
.plan .gauge { display: flex; gap: 4px; margin-bottom: 12px; }
.plan .gauge span { flex: 1; height: 6px; border-radius: 9999px; background: var(--border-strong); }
.plan .gauge span.paid { background: var(--color-primary-500); }
.plan .next { display: flex; justify-content: space-between; font: 600 13px/1.3 inherit; color: var(--text-secondary); }
.plan .next .amount { font: 700 14px/1 inherit; color: var(--text-primary); font-variant-numeric: tabular-nums; }
.card { background: #fff; border: 1px solid var(--border-default); border-radius: 14px; padding: 20px; box-shadow: var(--shadow-sm); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 9999px; font: 700 11px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-pay-in-4   { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-monthly    { background: var(--color-info-bg); color: var(--color-info-fg); }
.tag-on-time    { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-prequal    { background: rgba(122,90,248,0.12); color: var(--color-primary-500); }
.tag-zero-int   { background: var(--color-primary-500); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; padding: 16px 20px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid var(--border-default); }
.topbar .brand { font: 700 22px/1 inherit; color: var(--color-primary-500); letter-spacing: -0.01em; }
.topbar .nav { display: flex; gap: 22px; font: 500 14px/1 inherit; color: var(--text-secondary); }
.topbar .nav .a.active { color: var(--text-primary); font-weight: 600; }
.topbar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; font: 500 13px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 450ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. 핑크/민트 등 다른 BNPL 컬러로 변경 금지 — Violet이 정체성
2. 다크 모드 캔버스 사용 금지 — 친근 라이트 톤
3. 4단 분할 게이지 생략 금지 — BNPL 핵심 비주얼
4. 'Hidden fees / interest' 라벨 사용 금지 — Honest finance 정책 위반
5. 카드 라운드 sharp(0~4px) 사용 금지 — 12~16px Round

### ⑫ 시그니처 적용 예시 (Checkout BNPL)
```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', sans-serif; background: #F8F7FB; color: #0A2540; min-height: 100vh; }
  .container { max-width: 480px; margin: 0 auto; padding: 28px 20px; }
  .header { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; }
  .header .back { font: 600 13px/1 inherit; color: #52576B; cursor: pointer; }
  .header .brand { margin-left: auto; font: 700 22px/1 inherit; color: #7A5AF8; letter-spacing: -0.02em; }
  .summary { background: #fff; border-radius: 18px; padding: 22px; box-shadow: 0 4px 12px rgba(122,90,248,0.10); margin-bottom: 18px; border: 1px solid #E8E6F2; }
  .summary .label { font: 700 11px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; color: #52576B; margin-bottom: 8px; }
  .summary h1 { margin: 0 0 18px; font: 700 28px/1.05 inherit; letter-spacing: -0.01em; }
  .summary .item { display: flex; justify-content: space-between; padding: 8px 0; font: 500 14px/1.4 inherit; color: #2A2F45; }
  .summary .item.tot { border-top: 1px solid #E8E6F2; margin-top: 8px; padding-top: 14px; font-weight: 700; font-size: 16px; color: #0A2540; }
  .summary .item .v { font-variant-numeric: tabular-nums; }
  h2 { font: 700 18px/1.2 inherit; margin: 22px 0 12px; letter-spacing: -0.005em; }
  .plans { display: flex; flex-direction: column; gap: 12px; }
  .plan { background: #fff; border-radius: 16px; padding: 20px; border: 2px solid #E8E6F2; cursor: pointer; transition: border-color 200ms ease; }
  .plan.selected { border-color: #7A5AF8; box-shadow: 0 4px 12px rgba(122,90,248,0.16); }
  .plan .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .plan .name { font: 700 12px/1 inherit; color: #7A5AF8; letter-spacing: 0.06em; text-transform: uppercase; }
  .plan .name.gray { color: #52576B; }
  .plan .tag { background: #F0EBFF; color: #4626B0; font: 700 10px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 8px; border-radius: 9999px; }
  .plan .total { font: 700 24px/1 inherit; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; margin-bottom: 10px; color: #0A2540; }
  .plan .total small { font: 500 14px/1 inherit; color: #52576B; margin-left: 4px; font-weight: 500; }
  .plan .gauge { display: flex; gap: 4px; margin-bottom: 12px; }
  .plan .gauge span { flex: 1; height: 6px; border-radius: 9999px; background: #E8E6F2; }
  .plan .gauge span.paid { background: #7A5AF8; }
  .plan .schedule { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font: 600 11px/1.3 inherit; color: #52576B; }
  .plan .schedule .step { text-align: center; padding: 8px 4px; background: #F8F7FB; border-radius: 8px; }
  .plan .schedule .step.now { background: #F0EBFF; color: #4626B0; }
  .plan .schedule .step .a { font: 700 13px/1 inherit; color: #0A2540; font-variant-numeric: tabular-nums; display: block; margin-top: 4px; }
  .pay-btn { width: 100%; margin-top: 22px; background: #7A5AF8; color: #fff; font: 700 15px/1 inherit; padding: 16px; border: 0; border-radius: 9999px; cursor: pointer; }
  .pay-btn:hover { background: #5E3DE0; }
  .note { margin-top: 14px; font: 500 12px/1.5 inherit; color: #52576B; text-align: center; }
</style>

<main class="container">
  <header class="header">
    <span class="back">← 결제로 돌아가기</span>
    <span class="brand">Affirm</span>
  </header>

  <section class="summary">
    <div class="label">주문 요약</div>
    <h1>Patagonia 다운 자켓</h1>
    <div class="item"><span>상품 금액</span><span class="v">$169.00</span></div>
    <div class="item"><span>배송</span><span class="v">무료</span></div>
    <div class="item"><span>세금</span><span class="v">$0.00</span></div>
    <div class="item tot"><span>합계</span><span class="v">$169.00</span></div>
  </section>

  <h2>결제 방식을 선택하세요</h2>
  <div class="plans">
    <div class="plan selected">
      <div class="head"><span class="name">PAY IN 4</span><span class="tag">0% APR</span></div>
      <div class="total">$42.25<small>/ 2주마다 · 총 $169.00</small></div>
      <div class="gauge"><span class="paid"></span><span></span><span></span><span></span></div>
      <div class="schedule">
        <div class="step now"><span>오늘</span><span class="a">$42.25</span></div>
        <div class="step"><span>5/28</span><span class="a">$42.25</span></div>
        <div class="step"><span>6/11</span><span class="a">$42.25</span></div>
        <div class="step"><span>6/25</span><span class="a">$42.25</span></div>
      </div>
    </div>
    <div class="plan">
      <div class="head"><span class="name gray">MONTHLY · 6개월</span><span class="tag" style="background:#E0EAFC;color:#2C70BE;">10% APR</span></div>
      <div class="total">$29.00<small>/ 월 · 6개월 동안</small></div>
    </div>
  </div>

  <button class="pay-btn">Pay with Affirm — $42.25 오늘</button>
  <p class="note">수수료·연체료 없음 · 신용점수 영향 없는 사전 자격 확인</p>
</main>
```
