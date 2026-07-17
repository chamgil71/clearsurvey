---
brand: Klarna
brand_ko: 클라르나
slug: klarna
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - fintech
  - ecommerce

color_tone: warm
primary_color_hex: "#FFA8CD"
primary_color_name: "Klarna Pink"
mood:
  - 친근함
  - 쇼핑
  - BNPL

font_category: sans-serif
font_primary: Klarna Display
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

released_year: 2005
last_major_revision: 2024
signature_keyword: "Smoooth Pink과 4분할 BNPL의 친근한 쇼핑 결제 톤"

card_tokens: |
  {
    "light": { "bg": "#FFA8CD", "surface": "#FFFFFF", "border": "#E5E5E5", "fg": "#0A0A0A", "fg_muted": "#666666", "accent": "#FFA8CD" },
    "dark":  { "bg": "#0A0A0A", "surface": "#2D2D2D", "border": "#3A3A3A", "fg": "#FFA8CD", "fg_muted": "#999999", "accent": "#FFA8CD" }
  }

hero_html: |
  <div style="font-family:'Klarna Display',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:800;letter-spacing:-0.02em;color:var(--card-fg);">Klarna.</strong>
      <span style="margin-left:auto;font-size:11px;font-weight:700;color:var(--card-fg);">smoooth ✨</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:var(--card-surface);border-radius:18px;padding:16px;color:#0A0A0A;">
        <div style="font-size:11px;color:#666;font-weight:700;">총 결제</div>
        <div style="font-size:24px;font-weight:800;letter-spacing:-0.01em;margin:4px 0;">$ 240.00</div>
        <div style="font-size:11px;font-weight:700;background:#0A0A0A;color:#FFA8CD;padding:3px 8px;border-radius:9999px;display:inline-block;">4회 무이자 분할</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:10px;">
          <div style="background:#FFA8CD;color:#0A0A0A;border-radius:9px;padding:8px 4px;text-align:center;">
            <div style="font-size:9px;font-weight:700;">오늘</div>
            <strong style="font-size:13px;">$ 60</strong>
          </div>
          <div style="background:#FFE9F2;color:#0A0A0A;border-radius:9px;padding:8px 4px;text-align:center;">
            <div style="font-size:9px;font-weight:700;">2주 후</div>
            <strong style="font-size:13px;">$ 60</strong>
          </div>
          <div style="background:#FFE9F2;color:#0A0A0A;border-radius:9px;padding:8px 4px;text-align:center;">
            <div style="font-size:9px;font-weight:700;">4주 후</div>
            <strong style="font-size:13px;">$ 60</strong>
          </div>
          <div style="background:#FFE9F2;color:#0A0A0A;border-radius:9px;padding:8px 4px;text-align:center;">
            <div style="font-size:9px;font-weight:700;">6주 후</div>
            <strong style="font-size:13px;">$ 60</strong>
          </div>
        </div>
      </div>
      <button style="background:#0A0A0A;color:#FFA8CD;border:0;border-radius:9999px;padding:12px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;">Klarna로 결제 →</button>
    </div>
  </div>

sources:
  - https://www.klarna.com/
  - https://www.klarna.com/about/
---

### ① 브랜드 DNA
- **브랜드명**: Klarna
- **한 줄 정체성**: BNPL(Buy Now Pay Later)의 대표주자 — 쇼핑 결제를 4번에 나눠 내는 핀테크
- **공식 디자인 철학**: "Smoooth — bold, friendly, payment with personality"
- **시그니처 요소 1개**: Smoooth Pink(#FFA8CD) + 4분할 BNPL UI + Klarna Display 굵은 폰트

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 쇼핑, BNPL
- **무드 설명**: 핑크 배경에 검은 본문 + 흰 카드. 4분할 결제 시각화가 BNPL의 핵심 신호로 강조된다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (16~24px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Klarna Smoooth Pink */
  --color-primary-50:  #FFE9F2;
  --color-primary-100: #FFCBE0;
  --color-primary-200: #FFB4D2;
  --color-primary-300: #FFA8CD;  /* Klarna Pink */
  --color-primary-400: #FF8FBE;
  --color-primary-500: #FFA8CD;
  --color-primary-600: #DD7EAD;
  --color-primary-700: #A55C82;
  --color-primary-800: #6E3C57;
  --color-primary-900: #401F31;

  /* Secondary - Klarna Black */
  --color-secondary-500: #0A0A0A;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F1F1F1;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #2D2D2D;
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #00A651;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #FFE9F2;
  --color-info-fg:    #A55C82;

  /* Surface */
  --bg-base:     #FFA8CD;             /* canvas pink */
  --bg-subtle:   #FFE9F2;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(10,10,10,0.50);

  /* Text */
  --text-primary:    #0A0A0A;
  --text-secondary:  #666666;
  --text-tertiary:   #999999;
  --text-on-primary: #0A0A0A;       /* pink 위에는 black */
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F1F1F1;
  --border-strong:  #C7C7C7;
  --border-focus:   #0A0A0A;
}

[data-theme="dark"] {
  --bg-base: #0A0A0A;
  --bg-subtle: #1A1A1A;
  --bg-elevated: #2D2D2D;
  --text-primary: #FFA8CD;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Klarna Display / Klarna Headline (자체) — 폴백 -apple-system, "Helvetica Neue"
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 80px / 800 / 1.0 / -0.04em
  - H1: 48px / 800 / 1.05 / -0.025em
  - H2: 32px / 800 / 1.15 / -0.015em
  - H3: 22px / 700 / 1.27 / 0
  - Body Large: 17px / 500 / 1.5 / 0
  - Body: 15px / 500 / 1.5 / 0
  - Body Small: 13px / 600 / 1.43 / 0
  - Caption: 11px / 800 / 1.27 / 0.04em (uppercase)

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
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
--shadow-xl: 0 16px 32px rgba(255,168,205,0.30);
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
  font: 800 14px/1 'Klarna Display', Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 24px;
  height: 48px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-secondary-500); color: var(--color-primary-300); }
.btn-primary:hover { background: #2D2D2D; }
.btn-secondary { background: var(--bg-elevated); color: var(--color-secondary-500); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 0; border-radius: var(--radius-md); padding: 14px 18px; font-size: 16px; font-family: inherit; }
.input:focus { outline: 2px solid var(--color-secondary-500); outline-offset: -2px; }
```

**Card**
```css
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge / BNPL pill**
```css
.tag { padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 800; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; text-transform: uppercase; letter-spacing: 0.04em; }
.tag-solid   { background: var(--color-secondary-500); color: var(--color-primary-300); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); }
.topnav .brand { font-weight: 800; font-size: 22px; letter-spacing: -0.02em; }
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
1. brand pink 위에 흰 텍스트 사용 금지 — 검정 사용
2. 4분할 결제 시각화에서 분할 횟수를 임의 변경 금지 — 4회가 표준
3. 본문 폰트 weight 400 이하 사용 금지 — 500+ Bold가 시그니처
4. Klarna 워드마크 끝의 마침표(.) 제거 금지
5. 본문에 채도 낮은 베이지 사용 금지 — bright pink가 정체성

### ⑫ 시그니처 적용 예시 (Checkout)

```html
<style>
  body { margin: 0; font-family: 'Klarna Display', Inter, 'Pretendard', -apple-system, sans-serif; color: #0A0A0A; background: #FFA8CD; font-weight: 500; }
  .topnav { padding: 16px 32px; display: flex; align-items: center; gap: 16px; background: #FFA8CD; }
  .topnav .brand { font-weight: 800; font-size: 28px; letter-spacing: -0.025em; }
  .checkout { max-width: 540px; margin: 32px auto; padding: 0 24px; }
  .checkout h1 { font-size: 36px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 8px; }
  .checkout p { font-size: 15px; margin: 0 0 20px; line-height: 1.5; }
  .summary { background: #fff; border-radius: 24px; padding: 24px; margin-bottom: 16px; }
  .summary .head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
  .summary .head .label { font-size: 12px; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.04em; }
  .summary .total { font-size: 36px; font-weight: 800; letter-spacing: -0.015em; margin: 4px 0 8px; }
  .summary .pill { background: #0A0A0A; color: #FFA8CD; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 800; display: inline-block; text-transform: uppercase; letter-spacing: 0.04em; }
  .schedule { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 16px; }
  .pay { padding: 14px 8px; border-radius: 14px; text-align: center; }
  .pay.now { background: #FFA8CD; }
  .pay.later { background: #FFE9F2; }
  .pay .when { font-size: 11px; font-weight: 800; }
  .pay .amt { font-size: 18px; font-weight: 800; margin-top: 4px; }
  .pay-btn { background: #0A0A0A; color: #FFA8CD; border: 0; border-radius: 9999px; padding: 18px; font-size: 16px; font-weight: 800; cursor: pointer; width: 100%; font-family: inherit; }
  .terms { font-size: 12px; color: #2D2D2D; text-align: center; margin-top: 12px; }
</style>

<header class="topnav">
  <span class="brand">Klarna.</span>
  <span style="margin-left:auto; font-size:13px; font-weight:700;">smoooth ✨</span>
</header>

<main class="checkout">
  <h1>4번에 나눠<br/>편하게 결제하세요</h1>
  <p>매 2주마다 자동으로 4회 분할. 무이자.</p>
  <div class="summary">
    <div class="head">
      <div>
        <div class="label">총 결제 금액</div>
        <div class="total">$ 240.00</div>
        <div class="pill">4회 무이자</div>
      </div>
    </div>
    <div class="schedule">
      <div class="pay now"><div class="when">오늘</div><div class="amt">$ 60</div></div>
      <div class="pay later"><div class="when">2주 후</div><div class="amt">$ 60</div></div>
      <div class="pay later"><div class="when">4주 후</div><div class="amt">$ 60</div></div>
      <div class="pay later"><div class="when">6주 후</div><div class="amt">$ 60</div></div>
    </div>
  </div>
  <button class="pay-btn">Klarna로 결제 →</button>
  <p class="terms">결제 즉시 1/4 차감, 나머지는 자동 결제</p>
</main>
```
