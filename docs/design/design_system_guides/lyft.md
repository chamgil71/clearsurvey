---
brand: Lyft
brand_ko: 리프트
slug: lyft
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - mobility
  - consumer

color_tone: warm
primary_color_hex: "#FF00BF"
primary_color_name: "Lyft Magenta"
mood:
  - 친근함
  - 활기참
  - 도시적

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
  - dark

released_year: 2012
last_major_revision: 2024
signature_keyword: "Magenta 액센트와 둥근 라운드의 친근한 라이드셰어 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8FAFC", "border": "#EAEEF2", "fg": "#11181C", "fg_muted": "#647179", "accent": "#FF00BF" },
    "dark":  { "bg": "#11181C", "surface": "#2A3138", "border": "#3D484F", "fg": "#FFFFFF", "fg_muted": "#8C949B", "accent": "#FF53C5" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:800;color:var(--card-accent);letter-spacing:-0.02em;">lyft</strong>
    </div>
    <div style="display:grid;grid-template-rows:1fr auto;">
      <div style="background:#FCE4F3;position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,#FCE4F3 0%,#FFE9F8 100%);"></div>
        <div style="position:absolute;left:32%;top:36%;width:14px;height:14px;border-radius:50%;background:#FF00BF;border:3px solid #fff;box-shadow:0 0 0 4px rgba(255,0,191,0.18);"></div>
        <div style="position:absolute;left:60%;top:62%;width:14px;height:14px;border-radius:2px;background:#11181C;border:3px solid #fff;"></div>
        <svg style="position:absolute;left:0;top:0;width:100%;height:100%;" viewBox="0 0 200 120" preserveAspectRatio="none">
          <path d="M64 50 Q 100 65, 122 78" stroke="#FF00BF" stroke-width="2.5" fill="none"/>
        </svg>
      </div>
      <div style="padding:12px 14px;background:var(--card-bg);border-top:1px solid var(--card-border);">
        <div style="font-size:11px;color:var(--card-fg-muted);">Lyft · 약 3분 후 도착</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;">
          <strong style="font-size:14px;">강남역</strong>
          <strong style="font-size:14px;">$ 12.40</strong>
        </div>
        <button style="background:var(--card-accent);color:#fff;border:0;border-radius:9999px;padding:10px;font-size:13px;font-weight:700;font-family:inherit;width:100%;margin-top:10px;">Get Lyft</button>
      </div>
    </div>
  </div>

sources:
  - https://www.lyft.com/
  - https://design.lyft.com/
  - https://www.lyft.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Lyft
- **한 줄 정체성**: 핑크 무스타시(콧수염) 마스코트로 시작한, 친근한 미국 라이드셰어
- **공식 디자인 철학**: "Friendly first — making transportation accessible and enjoyable"
- **시그니처 요소 1개**: Lyft Magenta(#FF00BF) + 둥근 pill 컴포넌트 + 라이트 핑크 배경 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 활기참, 도시적
- **무드 설명**: 흰 캔버스 + Magenta 액센트 + 라이트 핑크 영역. Uber의 단호한 모노에 비해 더 친근한 톤.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~9999px pill)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Lyft Magenta */
  --color-primary-50:  #FFE9F8;
  --color-primary-100: #FCC9EB;
  --color-primary-200: #FF8FD8;
  --color-primary-300: #FF53C5;
  --color-primary-400: #FF1FC0;
  --color-primary-500: #FF00BF;  /* Lyft Magenta */
  --color-primary-600: #D800A2;
  --color-primary-700: #A8007F;
  --color-primary-800: #7A005C;
  --color-primary-900: #4D003A;

  /* Secondary - Lyft Purple */
  --color-secondary-500: #6B46C1;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8FAFC;
  --color-neutral-100:  #F1F4F7;
  --color-neutral-200:  #EAEEF2;
  --color-neutral-300:  #C5CDD3;
  --color-neutral-500:  #8C949B;
  --color-neutral-700:  #647179;
  --color-neutral-800:  #3D484F;
  --color-neutral-900:  #11181C;
  --color-neutral-1000: #050708;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8FAFC;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(17,24,28,0.50);

  /* Text */
  --text-primary:    #11181C;
  --text-secondary:  #647179;
  --text-tertiary:   #8C949B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C5CDD3;

  /* Border */
  --border-default: #EAEEF2;
  --border-subtle:  #F1F4F7;
  --border-strong:  #C5CDD3;
  --border-focus:   #FF00BF;
}

[data-theme="dark"] {
  --bg-base: #11181C;
  --bg-subtle: #1C2227;
  --bg-elevated: #2A3138;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 700 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 12px / 600 / 1.33 / 0

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
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 20px;
--radius-full: 9999px;   /* CTA pill 시그니처 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
--shadow-xl: 0 16px 32px rgba(255,0,191,0.18);
```

### ⑧ Iconography
- **스타일**: Outline (Lyft 자체 + Lucide 호환)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 15px/1 Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 22px;
  height: 44px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease, transform 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); transform: scale(0.98); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 2px solid var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 10px 14px; font-size: 14px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(255,0,191,0.18); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .brand { font-family: Inter, sans-serif; font-weight: 800; font-size: 24px; color: var(--color-primary-500); letter-spacing: -0.02em; }
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
1. button을 sharp 사각으로 변경 금지 — pill (9999px)이 시그니처
2. Magenta를 본문 텍스트에 사용 금지 — 액션과 brand mark에만
3. brand 색을 destructive 액션에 사용 금지 — Magenta는 positive/CTA에만
4. 앱 캔버스에 그라데이션 배경 사용 금지
5. Lyft logotype의 letter-spacing을 변경 금지 — -0.02em이 표준

### ⑫ 시그니처 적용 예시 (Mobile)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #11181C; background: #fff; }
  .app { max-width: 420px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 14px 18px; display: flex; align-items: center; }
  .topbar .brand { font-weight: 800; font-size: 28px; color: #FF00BF; letter-spacing: -0.02em; }
  .topbar .me { margin-left: auto; width: 36px; height: 36px; border-radius: 50%; background: #FCE4F3; }
  .map { background: #FCE4F3; position: relative; overflow: hidden; }
  .map::before { content:""; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 50%,#FFE9F8 0%,#FCC9EB 100%); }
  .map .pickup { position: absolute; left: 32%; top: 36%; width: 16px; height: 16px; border-radius: 50%; background: #FF00BF; border: 3px solid #fff; box-shadow: 0 0 0 8px rgba(255,0,191,0.20); }
  .map .drop { position: absolute; left: 60%; top: 62%; width: 14px; height: 14px; border-radius: 2px; background: #11181C; border: 3px solid #fff; }
  .map svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .panel { background: #fff; padding: 18px 18px 24px; box-shadow: 0 -8px 24px rgba(0,0,0,0.06); border-radius: 24px 24px 0 0; }
  .panel h1 { margin: 0 0 6px; font-size: 18px; font-weight: 700; }
  .where { background: #F8FAFC; border-radius: 14px; padding: 12px 14px; margin-bottom: 14px; }
  .where input { background: transparent; border: 0; outline: none; padding: 8px 0; font-size: 15px; width: 100%; font-family: inherit; }
  .where input:not(:last-child) { border-bottom: 1px solid #EAEEF2; }
  .options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 14px; }
  .opt { background: #F8FAFC; border: 2px solid transparent; border-radius: 14px; padding: 10px; text-align: center; cursor: pointer; }
  .opt.selected { border-color: #FF00BF; background: #FFE9F8; }
  .opt .ic { font-size: 28px; }
  .opt .name { font-size: 12px; font-weight: 700; margin-top: 4px; }
  .opt .price { font-size: 13px; font-weight: 800; margin-top: 2px; color: #FF00BF; }
  .request { background: #FF00BF; color: #fff; border: 0; border-radius: 9999px; padding: 16px; font-size: 16px; font-weight: 700; font-family: inherit; cursor: pointer; width: 100%; }
</style>

<div class="app">
  <header class="topbar">
    <div class="brand">lyft</div>
    <div class="me"></div>
  </header>
  <div class="map">
    <div class="pickup"></div>
    <div class="drop"></div>
    <svg viewBox="0 0 400 280" preserveAspectRatio="none">
      <path d="M128 100 Q 220 140, 248 188" stroke="#FF00BF" stroke-width="3" fill="none"/>
    </svg>
  </div>
  <main class="panel">
    <h1>어디로 갈까요?</h1>
    <div class="where">
      <input value="현재 위치"/>
      <input placeholder="목적지 입력"/>
    </div>
    <div class="options">
      <div class="opt selected"><div class="ic">🚗</div><div class="name">Lyft</div><div class="price">$12.40</div></div>
      <div class="opt"><div class="ic">🚙</div><div class="name">XL</div><div class="price">$18.20</div></div>
      <div class="opt"><div class="ic">⭐</div><div class="name">Lux</div><div class="price">$24.00</div></div>
    </div>
    <button class="request">Get Lyft · 약 3분</button>
  </main>
</div>
```
