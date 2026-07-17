---
brand: Tesla
brand_ko: 테슬라
slug: tesla
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - mobility
  - lifestyle

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Tesla Black"
mood:
  - 미래적
  - 미니멀
  - 프리미엄

font_category: sans-serif
font_primary: Gotham
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2003
last_major_revision: 2024
signature_keyword: "검정 워드마크와 풀폭 차량 사진의 미래적 자동차 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F4F4F4", "border": "#E5E5E5", "fg": "#171A20", "fg_muted": "#5C5E62", "accent": "#171A20" },
    "dark":  { "bg": "#000000", "surface": "#232529", "border": "#393C41", "fg": "#FFFFFF", "fg_muted": "#A0A0A0", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:Gotham,'Helvetica Neue',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);padding:14px 16px;display:flex;align-items:center;gap:8px;position:absolute;top:0;left:0;right:0;z-index:2;">
      <strong style="font-size:18px;font-weight:500;letter-spacing:0.6em;color:var(--card-fg);">TESLA</strong>
    </div>
    <div style="background:linear-gradient(180deg,#E5E5E5 0%,#888 70%,#171a20 100%);position:relative;display:flex;flex-direction:column;justify-content:flex-end;padding:48px 16px 16px;">
      <div style="text-align:center;color:#171a20;">
        <div style="font-size:24px;font-weight:500;letter-spacing:-0.01em;line-height:1.1;">Model 3</div>
        <div style="font-size:11px;color:var(--card-fg-muted);margin-top:2px;letter-spacing:0.04em;">전환 모델 · 2026</div>
      </div>
      <div style="display:flex;gap:6px;justify-content:center;margin-top:14px;">
        <button style="background:var(--card-accent);color:var(--card-bg);border:0;border-radius:0;padding:9px 24px;font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;letter-spacing:0.06em;text-transform:uppercase;">주문하기</button>
        <button style="background:transparent;color:var(--card-accent);border:1px solid var(--card-accent);border-radius:0;padding:9px 24px;font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;letter-spacing:0.06em;text-transform:uppercase;">시승 신청</button>
      </div>
    </div>
  </div>

sources:
  - https://www.tesla.com/
  - https://www.tesla.com/design
---

### ① 브랜드 DNA
- **브랜드명**: Tesla
- **한 줄 정체성**: 전기차 + 에너지의 미래 — 자동차를 소프트웨어처럼 다루는 회사
- **공식 디자인 철학**: "Accelerating sustainable energy — bold simplicity, futuristic minimalism"
- **시그니처 요소 1개**: 'TESLA' 워드마크 (letter-spacing 0.6em) + 풀폭 차량 사진 + sharp 0px 디자인

### ② 톤 & 무드
- **핵심 키워드 3개**: 미래적, 미니멀, 프리미엄
- **무드 설명**: 흰 캔버스 + 검은 본문 + 풀폭 차량 사진. UI chrome은 거의 사라지고 차량이 모든 것.
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘 (sharp ramp)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~2px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  --color-primary-50: #F4F4F4; --color-primary-100: #E5E5E5;
  --color-primary-200: #C7C7C7; --color-primary-300: #999999;
  --color-primary-400: #555555; --color-primary-500: #171a20;
  --color-primary-600: #2D2D2D; --color-primary-700: #555555;
  --color-primary-800: #777; --color-primary-900: #999;

  --color-secondary-500: #CC0000;     /* Tesla 사이렌 빨강 */

  --color-neutral-0: #FFFFFF; --color-neutral-50: #F4F4F4;
  --color-neutral-100: #E5E5E5; --color-neutral-200: #C7C7C7;
  --color-neutral-300: #A0A0A0; --color-neutral-500: #5C5E62;
  --color-neutral-700: #393C41; --color-neutral-800: #232529;
  --color-neutral-900: #171A20; --color-neutral-1000: #000000;

  --color-success-bg: #DCF7E5; --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9; --color-warning-fg: #B45309;
  --color-error-bg: #FFE5E5; --color-error-fg: #CC0000;
  --color-info-bg: #E0F0FE; --color-info-fg: #2563EB;

  --bg-base: #FFFFFF; --bg-subtle: #F4F4F4;
  --bg-elevated: #FFFFFF; --bg-overlay: rgba(0,0,0,0.50);

  --text-primary: #171A20; --text-secondary: #5C5E62;
  --text-tertiary: #A0A0A0; --text-on-primary: #FFFFFF;
  --text-disabled: #C7C7C7;

  --border-default: #E5E5E5; --border-subtle: #F4F4F4;
  --border-strong: #C7C7C7; --border-focus: #171A20;
}

[data-theme="dark"] { --bg-base: #000; --bg-subtle: #171A20; --bg-elevated: #232529; --text-primary: #fff; }
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Gotham (Tesla 라이선스) — 폴백 "Helvetica Neue", -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 500 / 1.05 / -0.015em
  - H1 (워드마크): 28px / 500 / 1.2 / 0.6em (uppercase, ultra wide spacing)
  - H2: 32px / 500 / 1.2 / -0.01em
  - H3: 17px / 600 / 1.3 / 0
  - Body Large: 15px / 500 / 1.5 / 0
  - Body: 13px / 400 / 1.5 / 0
  - Caption: 11px / 600 / 1.27 / 0.06em (uppercase)

### ⑤ 스페이싱
- Base 8px, Container fluid

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 0; --radius-md: 0;
--radius-lg: 2px; --radius-xl: 4px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.16);
```

### ⑧ Iconography
- Outline (정밀), 1.5px, Square + Round
- Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 12px/1 Gotham,'Helvetica Neue',sans-serif; letter-spacing:0.06em; text-transform: uppercase; border-radius: 0; padding: 12px 28px; border: 0; cursor: pointer; }
.btn-primary { background: #171A20; color: #fff; }
.btn-secondary { background: transparent; color: #171A20; border: 1px solid #171A20; }
.btn-ghost { background: transparent; color: #171A20; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid #C7C7C7; border-radius: 0; padding: 12px 14px; font-size: 14px; font-family: inherit; }
.input:focus { outline: none; border-color: #171A20; }
```

**Card**
```css
.card { background: #fff; border: 1px solid #E5E5E5; border-radius: 0; padding: 24px; }
.product { padding: 0; }
.product .img { aspect-ratio: 16/9; background: linear-gradient(180deg,#E5E5E5,#888); }
.product h3 { font-size: 24px; font-weight: 500; letter-spacing: -0.01em; margin: 14px 0 4px; text-align: center; }
.product .desc { font-size: 13px; color: var(--text-secondary); text-align: center; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: 0; font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
.tag-solid { background: #171A20; color: #fff; }
.tag-subtle { background: #F4F4F4; color: #171A20; }
.tag-outline { border: 1px solid #171A20; color: #171A20; background: transparent; }
```

**Navigation (시그니처: 워드마크가 가운데 letter-spacing 큼)**
```css
.topnav { padding: 18px 24px; display: flex; align-items: center; gap: 24px; }
.topnav .brand { font-weight: 500; font-size: 18px; letter-spacing: 0.6em; color: #171A20; }
.topnav nav { display: flex; gap: 16px; font-size: 13px; font-weight: 500; }
.topnav nav a { color: #171A20; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 350ms; --duration-slow: 600ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. TESLA 워드마크의 letter-spacing(0.6em)을 변경 금지
2. 라운드(>4px) 적용 금지 — 0px sharp 시그니처
3. 채도 높은 컬러 분산 사용 금지 — 모노 + 차량 사진의 색만
4. 마케팅 페이지에 그라데이션 배경 금지 — 차량 자체의 그라데이션이 시그니처
5. 차량 사진을 작은 카드 안에 가두지 말 것 — 풀폭 시그니처

### ⑫ 시그니처 적용 예시 (Model 페이지)

```html
<style>
  body { margin: 0; font-family: Gotham, 'Helvetica Neue', -apple-system, sans-serif; color: #171A20; background: #fff; }
  .topnav { padding: 18px 24px; display: flex; align-items: center; gap: 24px; position: sticky; top: 0; background: #fff; z-index: 10; }
  .topnav .brand { font-weight: 500; font-size: 18px; letter-spacing: 0.6em; }
  .topnav nav { display: flex; gap: 18px; font-size: 13px; font-weight: 500; }
  .hero { background: linear-gradient(180deg,#E5E5E5 0%,#888 60%,#171A20 100%); position: relative; padding: 80px 24px 32px; min-height: 70vh; display: flex; flex-direction: column; justify-content: space-between; }
  .hero h1 { text-align: center; font-size: 40px; font-weight: 500; letter-spacing: -0.01em; margin: 0; color: #171A20; }
  .hero .sub { text-align: center; font-size: 14px; color: #5C5E62; margin-top: 6px; }
  .hero .cta { display: flex; gap: 8px; justify-content: center; margin-top: 32px; }
  .hero .cta button { padding: 12px 36px; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 0; cursor: pointer; font-family: inherit; }
  .hero .cta .order { background: #171A20; color: #fff; border: 0; }
  .hero .cta .demo { background: transparent; color: #171A20; border: 1px solid #171A20; }
  .specs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #E5E5E5; padding: 0; }
  .spec { background: #fff; padding: 32px 16px; text-align: center; }
  .spec .num { font-size: 48px; font-weight: 500; letter-spacing: -0.015em; line-height: 1; }
  .spec .num small { font-size: 18px; font-weight: 500; color: #5C5E62; }
  .spec .label { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #5C5E62; margin-top: 8px; }
</style>

<header class="topnav">
  <div class="brand">TESLA</div>
  <nav><a>Model S</a><a>Model 3</a><a>Model X</a><a>Model Y</a><a>Cybertruck</a></nav>
  <span style="margin-left:auto; font-size:13px; font-weight:500;">Shop · Account</span>
</header>

<section class="hero">
  <div></div>
  <div>
    <h1>Model 3</h1>
    <p class="sub">전환 모델 · 2026</p>
    <div class="cta">
      <button class="order">주문하기</button>
      <button class="demo">시승 신청</button>
    </div>
  </div>
</section>

<div class="specs">
  <div class="spec"><div class="num">2.9<small>s</small></div><div class="label">0~100 km/h</div></div>
  <div class="spec"><div class="num">528<small>km</small></div><div class="label">주행거리</div></div>
  <div class="spec"><div class="num">261<small>km/h</small></div><div class="label">최고속도</div></div>
</div>
```
