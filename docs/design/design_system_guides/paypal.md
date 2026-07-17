---
brand: PayPal
brand_ko: 페이팔
slug: paypal
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#003087"
primary_color_name: "PayPal Deep Blue"
mood:
  - 신뢰
  - 글로벌
  - 거래 우선

font_category: sans-serif
font_primary: PayPal Open
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1998
last_major_revision: 2024
signature_keyword: "Deep Blue + Sky Blue 두 P 그래픽과 Yellow CTA의 글로벌 결제 톤"

hero_html: |
  <div style="font-family:'PayPal Open',Inter,'Pretendard',-apple-system,sans-serif;background:#FFFFFF;color:#0E1726;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #E1E7F0;padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <span style="display:inline-block;font-weight:800;font-size:16px;letter-spacing:-0.02em;font-style:italic;">
        <span style="color:#003087;">Pay</span><span style="color:#009CDE;">Pal</span>
      </span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:11px;color:#4D5A6F;">잔액</div>
      <div style="font-size:28px;font-weight:700;color:#003087;letter-spacing:-0.01em;">$ 1,284.50</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px;">
        <button style="background:#FFC439;color:#003087;border:0;border-radius:9999px;padding:10px;font-size:13px;font-weight:800;font-family:inherit;font-style:italic;">PayPal 결제</button>
        <button style="background:#fff;color:#003087;border:1px solid #003087;border-radius:9999px;padding:10px;font-size:13px;font-weight:700;font-family:inherit;">받기</button>
      </div>
      <div style="background:#F5F8FB;border-radius:12px;padding:12px;margin-top:6px;">
        <div style="font-size:10px;color:#4D5A6F;text-transform:uppercase;letter-spacing:0.04em;font-weight:700;margin-bottom:6px;">최근 거래</div>
        <div style="display:flex;justify-content:space-between;font-size:12px;padding:4px 0;">
          <span>Joon에게</span><span style="color:#D14040;font-weight:700;">- $24.00</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12px;padding:4px 0;">
          <span>월급</span><span style="color:#1B7E47;font-weight:700;">+ $1,800.00</span>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.paypal.com/
  - https://newsroom.paypal-corp.com/
---

### ① 브랜드 DNA
- **브랜드명**: PayPal
- **한 줄 정체성**: 25년 이상 글로벌 결제의 표준 — 안전하고 즉시한 송금/결제
- **공식 디자인 철학**: "Money for everyone — secure, simple, global"
- **시그니처 요소 1개**: Deep Blue(#003087) + Sky Blue(#009CDE)의 두 P 그래픽 + 노란(#FFC439) CTA 버튼

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 글로벌, 거래 우선
- **무드 설명**: 흰 캔버스 + 두 종류 파랑 + 강한 노란 CTA. 거래 데이터(잔액, 송금)가 명확히 보이는 신뢰 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~9999px pill CTA)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - PayPal Deep Blue */
  --color-primary-50:  #E5EBF5;
  --color-primary-100: #BCC8E0;
  --color-primary-200: #8DA4C7;
  --color-primary-300: #5C7DAA;
  --color-primary-400: #2D5A93;
  --color-primary-500: #003087;  /* PayPal Deep Blue */
  --color-primary-600: #002870;
  --color-primary-700: #001F58;
  --color-primary-800: #001540;
  --color-primary-900: #000B26;

  /* Secondary - PayPal Sky Blue */
  --color-secondary-500: #009CDE;

  /* Accent - PayPal Yellow (CTA) */
  --color-cta: #FFC439;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F9FC;
  --color-neutral-100:  #EBF0F5;
  --color-neutral-200:  #E1E7F0;
  --color-neutral-300:  #C9D2E0;
  --color-neutral-500:  #8E97A8;
  --color-neutral-700:  #4D5A6F;
  --color-neutral-800:  #2C3548;
  --color-neutral-900:  #0E1726;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F4EC;
  --color-success-fg: #1B7E47;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #D14040;
  --color-info-bg:    #E0F4FE;
  --color-info-fg:    #009CDE;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F9FC;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,23,38,0.50);

  /* Text */
  --text-primary:    #0E1726;
  --text-secondary:  #4D5A6F;
  --text-tertiary:   #8E97A8;
  --text-on-primary: #FFFFFF;
  --text-on-cta:     #003087;     /* 노랑 위 deep blue */
  --text-disabled:   #C9D2E0;

  /* Border */
  --border-default: #E1E7F0;
  --border-subtle:  #EBF0F5;
  --border-strong:  #C9D2E0;
  --border-focus:   #009CDE;
}

[data-theme="dark"] {
  --bg-base: #0E1726;
  --bg-subtle: #1A2538;
  --bg-elevated: #2C3548;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: PayPal Open (자체) / PayPal Sans (legacy) — 폴백 -apple-system, "Helvetica Neue"
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 700 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

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
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 18px;
--radius-full: 9999px;   /* CTA pill */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(14,23,38,0.06);
--shadow-md: 0 4px 12px rgba(14,23,38,0.10);
--shadow-lg: 0 8px 24px rgba(14,23,38,0.14);
--shadow-xl: 0 16px 32px rgba(0,48,135,0.18);
```

### ⑧ Iconography
- **스타일**: Outline (PayPal 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 'PayPal Open',Inter,'Pretendard',sans-serif;
  border-radius: 9999px;
  padding: 0 24px;
  height: 44px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-cta { background: var(--color-cta); color: var(--text-on-cta); font-style: italic; }   /* PayPal CTA */
.btn-cta:hover { background: #FFB200; }
.btn-secondary { background: var(--bg-base); color: var(--color-primary-500); border: 1.5px solid var(--color-primary-500); }
.btn-secondary:hover { background: var(--color-primary-50); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1.5px solid var(--border-strong); border-radius: var(--radius-md); padding: 12px 14px; font-size: 15px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(0,156,222,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .brand { font-style: italic; font-weight: 800; font-size: 22px; letter-spacing: -0.02em; }
.topnav .brand .pay { color: var(--color-primary-500); }
.topnav .brand .pal { color: var(--color-secondary-500); }
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
1. CTA 노랑(#FFC439) 위에 흰 텍스트 사용 금지 — Deep Blue 사용
2. PayPal 워드마크의 italic을 제거 금지
3. brand blue를 destructive 액션에 사용 금지
4. 두 P 그래픽의 색 위치를 변경 금지 — 앞 deep blue + 뒤 sky blue
5. 본문에 채도 높은 노랑 사용 금지 — CTA 전용

### ⑫ 시그니처 적용 예시 (Wallet)

```html
<style>
  body { margin: 0; font-family: 'PayPal Open', Inter, 'Pretendard', -apple-system, sans-serif; color: #0E1726; background: #F7F9FC; }
  .topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: #fff; border-bottom: 1px solid #E1E7F0; }
  .topnav .brand { font-style: italic; font-weight: 800; font-size: 22px; letter-spacing: -0.02em; }
  .topnav .brand .pay { color: #003087; }
  .topnav .brand .pal { color: #009CDE; }
  .layout { max-width: 1100px; margin: 24px auto; padding: 0 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .balance { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
  .balance .label { font-size: 12px; color: #4D5A6F; font-weight: 600; }
  .balance .amount { font-size: 40px; font-weight: 700; color: #003087; letter-spacing: -0.015em; margin: 8px 0; }
  .balance .actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
  .btn-cta { background: #FFC439; color: #003087; font-style: italic; font-weight: 800; }
  .btn-secondary { background: #fff; color: #003087; border: 1.5px solid #003087; }
  .btn-cta, .btn-secondary { border-radius: 9999px; padding: 10px 22px; font-size: 14px; cursor: pointer; font-family: inherit; }
  .btn-cta { border: 0; }
  .activity { background: #fff; border-radius: 16px; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
  .activity h3 { margin: 0 0 12px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #4D5A6F; }
  .row { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; padding: 12px 0; border-bottom: 1px solid #EBF0F5; align-items: center; }
  .row:last-child { border-bottom: 0; }
  .row .ic { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; font-size: 16px; }
  .row .out { background: #FCE4E4; color: #D14040; }
  .row .in { background: #E0F4EC; color: #1B7E47; }
  .row .who { font-size: 14px; font-weight: 600; }
  .row .when { font-size: 12px; color: #8E97A8; margin-top: 2px; }
  .row .amt { font-size: 14px; font-weight: 700; }
  .row .amt.out { color: #D14040; }
  .row .amt.in { color: #1B7E47; }
</style>

<header class="topnav">
  <div class="brand"><span class="pay">Pay</span><span class="pal">Pal</span></div>
  <span style="margin-left:auto; font-size:13px; color:#4D5A6F; display:flex; gap:14px;">활동 보내기 받기</span>
</header>

<main class="layout">
  <section class="balance">
    <div class="label">PayPal 잔액 · USD</div>
    <div class="amount">$ 1,284.50</div>
    <div class="actions">
      <button class="btn-cta">PayPal 결제</button>
      <button class="btn-secondary">송금하기</button>
      <button class="btn-secondary">요청하기</button>
    </div>
  </section>
  <section class="activity">
    <h3>최근 활동</h3>
    <div class="row">
      <div class="ic out">↗</div>
      <div><div class="who">Joon에게 송금</div><div class="when">5월 8일 · 점심값</div></div>
      <div class="amt out">- $24.00</div>
    </div>
    <div class="row">
      <div class="ic in">↙</div>
      <div><div class="who">월급</div><div class="when">5월 5일 · Acme Corp</div></div>
      <div class="amt in">+ $1,800.00</div>
    </div>
    <div class="row">
      <div class="ic out">↗</div>
      <div><div class="who">Amazon 결제</div><div class="when">5월 3일</div></div>
      <div class="amt out">- $128.40</div>
    </div>
  </section>
</main>
```
