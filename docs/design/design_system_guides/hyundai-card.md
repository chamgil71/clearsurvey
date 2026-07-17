---
brand: Hyundai Card
brand_ko: 현대카드
slug: hyundai-card
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - fintech
  - lifestyle

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "HC Black"
mood:
  - 프리미엄
  - 미니멀
  - 디자인

font_category: sans-serif
font_primary: Hyundai Card Youandi
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
signature_keyword: "검정 카드와 단호한 모노 타이포의 디자인 우선 카드사 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F5F5", "border": "#E0E0E0", "fg": "#000000", "fg_muted": "#888888", "accent": "#000000" },
    "dark":  { "bg": "#000000", "surface": "#1A1A1A", "border": "#2D2D2D", "fg": "#FFFFFF", "fg_muted": "#C7C7C7", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:'Hyundai Card Youandi',Pretendard,-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-accent);color:var(--card-bg);padding:14px 16px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:14px;font-weight:900;letter-spacing:-0.025em;">HYUNDAI CARD</strong>
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;">
      <div style="background:#000;border-radius:0;padding:24px 22px;color:#fff;aspect-ratio:1.585;display:flex;flex-direction:column;justify-content:space-between;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">the Black</div>
        <div>
          <div style="font-size:13px;font-family:ui-monospace,monospace;letter-spacing:0.05em;">**** **** **** 4321</div>
          <div style="display:flex;justify-content:space-between;margin-top:14px;font-size:9px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">
            <span>MINA PARK</span><span>HYUNDAI</span>
          </div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--card-fg-muted);font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">이번 달 사용</div>
      <div style="font-size:24px;font-weight:300;letter-spacing:-0.025em;line-height:1;">2,840,500<small style="font-size:14px;font-weight:500;color:var(--card-fg-muted);">원</small></div>
      <button style="background:var(--card-accent);color:var(--card-bg);border:0;border-radius:0;padding:14px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;letter-spacing:0.04em;text-transform:uppercase;align-self:flex-start;width:100%;">상세 내역 보기</button>
    </div>
  </div>

sources:
  - https://www.hyundaicard.com/
---

### ① 브랜드 DNA
- **브랜드명**: Hyundai Card (현대카드)
- **한 줄 정체성**: 디자인 정체성으로 차별화한 한국 프리미엄 카드사 — the Black/the Red/M
- **공식 디자인 철학**: "Design is everything — bold typography, monochrome confidence"
- **시그니처 요소 1개**: 검정 'HYUNDAI CARD' 워드마크 + sharp 0px 디자인 + 알파벳 등급 카드(M/X/Z/Black)

### ② 톤 & 무드
- **핵심 키워드 3개**: 프리미엄, 미니멀, 디자인
- **무드 설명**: 검정/흰색만이 화면을 차지. 카드 자체가 디자인 오브제로 시각화된다.
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~2px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  --color-primary-50: #F5F5F5; --color-primary-100: #E0E0E0;
  --color-primary-200: #C7C7C7; --color-primary-300: #999999;
  --color-primary-400: #555555; --color-primary-500: #000000;
  --color-primary-600: #1A1A1A; --color-primary-700: #2D2D2D;
  --color-primary-800: #555555; --color-primary-900: #888888;

  /* the Card 등급 컬러 */
  --hc-the-black: #000000;
  --hc-the-red:   #DA0011;
  --hc-the-purple:#5C0099;
  --hc-the-green: #1FAE5B;

  --color-secondary-500: #DA0011;

  --color-neutral-0: #FFFFFF; --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5; --color-neutral-200: #F0F0F0;
  --color-neutral-300: #E0E0E0; --color-neutral-500: #C7C7C7;
  --color-neutral-700: #888888; --color-neutral-800: #555555;
  --color-neutral-900: #191919; --color-neutral-1000: #000000;

  --color-success-bg: #DCF7E5; --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9; --color-warning-fg: #B45309;
  --color-error-bg: #FFE5E5; --color-error-fg: #DA0011;
  --color-info-bg: #E0F0FE; --color-info-fg: #2563EB;

  --bg-base: #FFFFFF; --bg-subtle: #F5F5F5;
  --bg-elevated: #FFFFFF; --bg-overlay: rgba(0,0,0,0.50);

  --text-primary: #000; --text-secondary: #555;
  --text-tertiary: #888; --text-on-primary: #FFFFFF;
  --text-disabled: #C7C7C7;

  --border-default: #E0E0E0; --border-subtle: #F0F0F0;
  --border-strong: #C7C7C7; --border-focus: #000;
}

[data-theme="dark"] { --bg-base: #000; --bg-subtle: #1A1A1A; --bg-elevated: #2D2D2D; --text-primary: #fff; }
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: Hyundai Card Youandi (자체) / Pretendard (OFL 폴백)
  - 영문: -apple-system / "Helvetica Neue"
- **위계**:
  - Display: 64px / 300 / 1.05 / -0.025em (얇은 디스플레이 시그니처)
  - H1: 36px / 300 / 1.2 / -0.02em
  - H2: 22px / 700 / 1.27 / -0.015em
  - H3: 16px / 700 / 1.3 / 0.04em (uppercase)
  - Body Large: 14px / 500 / 1.5 / 0
  - Body: 13px / 500 / 1.5 / 0
  - Body Small: 12px / 500 / 1.43 / 0.02em
  - Caption: 11px / 700 / 1.27 / 0.06em (uppercase)

### ⑤ 스페이싱
- Base 4px, Container max 1200px, 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 0; --radius-md: 0;
--radius-lg: 2px; --radius-xl: 4px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.24);
```

### ⑧ Iconography
- Outline (정밀), 1.5px, Square + Round
- Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 'Hyundai Card Youandi',Pretendard,sans-serif; letter-spacing:0.04em; text-transform: uppercase; border-radius: 0; padding: 16px 22px; border: 0; cursor: pointer; }
.btn-primary { background: #000; color: #fff; }
.btn-secondary { background: #fff; color: #000; border: 1px solid #000; }
.btn-ghost { background: transparent; color: #000; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 0; border-bottom: 1px solid #C7C7C7; border-radius: 0; padding: 10px 0; font-size: 16px; font-family: inherit; }
.input:focus { outline: none; border-bottom-color: #000; }
```

**Card** (the Card 시그니처)
```css
.hc-card { background: #000; color: #fff; border-radius: 0; padding: 28px 24px; aspect-ratio: 1.585; display: flex; flex-direction: column; justify-content: space-between; }
.hc-card .grade { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
.hc-card .num { font-family: ui-monospace, monospace; font-size: 14px; letter-spacing: 0.05em; }
.hc-card .row { display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
.hc-card.red { background: var(--hc-the-red); }
.hc-card.purple { background: var(--hc-the-purple); }

.card { background: #fff; border: 1px solid #F0F0F0; border-radius: 0; padding: 16px; }
```

**Badge**
```css
.tag { padding: 2px 6px; border-radius: 0; font-size: 10px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-solid { background: #000; color: #fff; }
.tag-subtle { background: #F5F5F5; color: #000; }
.tag-outline { border: 1px solid #000; color: #000; background: transparent; }
```

**Navigation**
```css
.topnav { padding: 14px 16px; background: #000; color: #fff; display: flex; align-items: center; gap: 12px; }
.topnav .brand { font-weight: 900; font-size: 16px; letter-spacing: -0.025em; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 250ms; --duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 라운드(>4px) 적용 금지 — sharp 0px 시그니처
2. 등급 컬러를 임의 매핑 금지 — Black/Red/Purple/Green 보존
3. 헤드라인을 굵은 폰트로 강제 변경 금지 — 얇은(300) display 톤
4. 채도 높은 그라데이션 배경 금지 — 모노가 정체성
5. 카드 비율(1.585)을 임의 변경 금지

### ⑫ 시그니처 적용 예시 (My Card)

```html
<style>
  body { margin: 0; font-family: 'Hyundai Card Youandi', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #000; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; }
  .topbar { background: #000; color: #fff; padding: 16px 18px; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-weight: 900; font-size: 16px; letter-spacing: -0.025em; }
  .home { padding: 20px 18px; display: flex; flex-direction: column; gap: 18px; }
  .hc-card { background: #000; color: #fff; aspect-ratio: 1.585; padding: 24px 22px; display: flex; flex-direction: column; justify-content: space-between; }
  .hc-card .grade { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
  .hc-card .num { font-family: ui-monospace, monospace; font-size: 15px; letter-spacing: 0.05em; }
  .hc-card .row { display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
  .month-label { font-size: 11px; color: #888; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
  .month-amt { font-size: 36px; font-weight: 300; letter-spacing: -0.025em; line-height: 1; margin-top: 6px; }
  .month-amt small { font-size: 18px; font-weight: 500; color: #888; }
  .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #E0E0E0; }
  .actions button { background: #fff; border: 0; padding: 18px; font-size: 13px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; cursor: pointer; font-family: inherit; }
  .actions button.primary { background: #000; color: #fff; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">HYUNDAI CARD</span>
    <span style="margin-left:auto; font-size:18px;">≡</span>
  </header>
  <main class="home">
    <div class="hc-card">
      <div class="grade">the Black</div>
      <div>
        <div class="num">**** **** **** 4321</div>
        <div class="row" style="margin-top:14px;"><span>MINA PARK</span><span>HYUNDAI</span></div>
      </div>
    </div>
    <div>
      <div class="month-label">2026년 5월 사용</div>
      <div class="month-amt">2,840,500<small>원</small></div>
    </div>
    <div class="actions">
      <button class="primary">상세 내역</button>
      <button>혜택</button>
    </div>
  </main>
</div>
```
