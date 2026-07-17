---
brand: Uber
brand_ko: 우버
slug: uber
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - mobility
  - consumer

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Uber Black"
mood:
  - 단호함
  - 도시적
  - 모노

font_category: sans-serif
font_primary: Uber Move
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2009
last_major_revision: 2024
signature_keyword: "검정 캔버스와 Uber Move 폰트, 지도 위 픽업/드롭의 도시 모빌리티 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F6F6F6", "border": "#E2E2E2", "fg": "#000000", "fg_muted": "#545454", "accent": "#000000" },
    "dark":  { "bg": "#000000", "surface": "#2E2E2E", "border": "#2E2E2E", "fg": "#FFFFFF", "fg_muted": "#CBCBCB", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:'Uber Move Text','Uber Move',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-family:'Uber Move',inherit;font-size:16px;font-weight:700;letter-spacing:-0.02em;">Uber</strong>
    </div>
    <div style="position:relative;background:#0E0E10;overflow:hidden;">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 60%, #242427, #000);"></div>
      <div style="position:absolute;left:30%;top:35%;width:14px;height:14px;border-radius:50%;background:#fff;border:3px solid #000;"></div>
      <div style="position:absolute;left:55%;top:55%;width:14px;height:14px;border-radius:2px;background:#fff;border:3px solid #000;"></div>
      <svg style="position:absolute;left:0;top:0;width:100%;height:100%;" viewBox="0 0 200 120" preserveAspectRatio="none">
        <path d="M62 50 Q 100 60, 115 70" stroke="#fff" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/>
      </svg>
      <div style="position:absolute;left:14px;right:14px;bottom:14px;background:var(--card-bg);color:var(--card-fg);border-radius:8px;padding:12px 14px;">
        <div style="font-size:11px;color:var(--card-fg-muted);">UberX · 약 4분 후 도착</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;">
          <strong style="font-size:14px;">강남역 11번 출구</strong>
          <strong style="font-size:14px;">₩ 8,400</strong>
        </div>
        <button style="background:var(--card-accent);color:var(--card-bg);border:0;border-radius:6px;padding:10px;font-size:13px;font-weight:500;font-family:inherit;width:100%;margin-top:10px;">UberX 호출</button>
      </div>
    </div>
  </div>

sources:
  - https://www.uber.com/
  - https://brand.uber.com/
  - https://www.uber.com/us/en/ride/
---

### ① 브랜드 DNA
- **브랜드명**: Uber
- **한 줄 정체성**: 어디서든 차량을 즉시 호출하는, 도시 모빌리티의 표준
- **공식 디자인 철학**: "Move smarter — bold typography, clear hierarchy, accessible everywhere"
- **시그니처 요소 1개**: Uber Black(#000) 캔버스 + Uber Move 폰트의 굵은 letter-spacing + 지도 위 픽업/드롭 아이콘

### ② 톤 & 무드
- **핵심 키워드 3개**: 단호함, 도시적, 모노
- **무드 설명**: 검정/흰색이 화면의 95%. 강조는 거의 없고, 정보 위계는 fontweight과 layout으로만. 지도 위 콘텐츠가 주인공.
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘 (sharp letterform)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~8px)
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Uber White (다크 모노 — 강조는 흰색 면) */
  --color-primary-50:  #1A1A1C;
  --color-primary-100: #242427;
  --color-primary-200: #2E2E32;
  --color-primary-300: #3C3C41;
  --color-primary-400: #545458;
  --color-primary-500: #FFFFFF;   /* 기본 — 다크 캔버스 위 강조는 흰색 */
  --color-primary-600: #E6E6E6;
  --color-primary-700: #CBCBCB;
  --color-primary-800: #AFAFAF;
  --color-primary-900: #8A8A8A;

  /* Secondary - Uber 미세 highlight (rare) */
  --color-secondary-500: #4C8DF6;

  /* Neutral - 반전 램프 (0=다크, 1000=라이트) */
  --color-neutral-0:    #0E0E10;
  --color-neutral-50:   #151517;
  --color-neutral-100:  #1A1A1C;
  --color-neutral-200:  #242427;
  --color-neutral-300:  #2E2E32;
  --color-neutral-500:  #545458;
  --color-neutral-700:  #8A8A8A;
  --color-neutral-800:  #AFAFAF;
  --color-neutral-900:  #CBCBCB;
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크 위 가독 */
  --color-success-bg: #11271D;
  --color-success-fg: #3FCB8E;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #FFC043;
  --color-error-bg:   #2E1413;
  --color-error-fg:   #FF5247;
  --color-info-bg:    #141E33;
  --color-info-fg:    #6FA3F8;

  /* Surface */
  --bg-base:     #0E0E10;
  --bg-subtle:   #1A1A1C;
  --bg-elevated: #242427;
  --bg-overlay:  rgba(0,0,0,0.80);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #CBCBCB;
  --text-tertiary:   #8A8A8A;
  --text-on-primary: #000000;
  --text-disabled:   #545458;

  /* Border */
  --border-default: #2E2E32;
  --border-subtle:  #242427;
  --border-strong:  #545458;
  --border-focus:   #FFFFFF;
}

[data-theme="light"] {
  /* Primary - Uber Black (모노) */
  --color-primary-50:  #F6F6F6;
  --color-primary-100: #EEEEEE;
  --color-primary-200: #E2E2E2;
  --color-primary-300: #CBCBCB;
  --color-primary-400: #AFAFAF;
  --color-primary-500: #000000;
  --color-primary-600: #1A1A1A;
  --color-primary-700: #2E2E2E;
  --color-primary-800: #545454;
  --color-primary-900: #757575;

  /* Secondary */
  --color-secondary-500: #276EF1;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F6F6F6;
  --color-neutral-100:  #EEEEEE;
  --color-neutral-200:  #E2E2E2;
  --color-neutral-300:  #CBCBCB;
  --color-neutral-500:  #AFAFAF;
  --color-neutral-700:  #757575;
  --color-neutral-800:  #545454;
  --color-neutral-900:  #2E2E2E;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F4EC;
  --color-success-fg: #06864F;
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #FFC043;
  --color-error-bg:   #FCE8E8;
  --color-error-fg:   #E11900;
  --color-info-bg:    #E6EDFF;
  --color-info-fg:    #276EF1;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F6F6F6;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #545454;
  --text-tertiary:   #757575;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #AFAFAF;

  /* Border */
  --border-default: #E2E2E2;
  --border-subtle:  #EEEEEE;
  --border-strong:  #545454;
  --border-focus:   #000000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Uber Move (Display) / Uber Move Text (UI), 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 96px / 700 / 1.0 / -0.02em
  - H1: 56px / 700 / 1.05 / -0.015em
  - H2: 36px / 700 / 1.15 / -0.01em
  - H3: 22px / 600 / 1.27 / 0
  - Body Large: 18px / 400 / 1.5 / 0
  - Body: 16px / 400 / 1.5 / 0
  - Body Small: 14px / 400 / 1.43 / 0
  - Caption: 12px / 500 / 1.33 / 0

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
  --space-3xl: 80px;
  ```
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.60);
--shadow-xl: 0 24px 48px rgba(0,0,0,0.70);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (Uber 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 16px/1 'Uber Move Text', -apple-system, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 14px 24px;
  display: inline-flex; align-items: center; gap: 8px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-700); }
.btn-primary:active { background: var(--color-primary-800); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
.btn-secondary { background: var(--color-neutral-100); color: var(--text-primary); }
.btn-secondary:hover { background: var(--color-neutral-200); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--color-neutral-50); border: 2px solid transparent; border-radius: var(--radius-md); padding: 14px 16px; font-size: 16px; }
.input:focus { outline: none; background: var(--bg-base); border-color: var(--color-primary-500); }
```

**Card** (Ride request)
```css
.card { background: var(--bg-base); border-radius: var(--radius-md); padding: 16px; border: 1px solid var(--border-default); }
.card-elevated { border-color: transparent; box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 4px 8px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 500; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-neutral-100); color: var(--text-primary); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { height: 64px; background: var(--color-neutral-0); color: var(--text-primary); display: flex; align-items: center; padding: 0 24px; gap: 24px; }
.topnav .brand { font-family: 'Uber Move', -apple-system, sans-serif; font-weight: 700; font-size: 24px; letter-spacing: -0.02em; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. brand action에 컬러 사용 금지 — primary는 모노
2. 본문에 채도 높은 그라데이션 배경 금지
3. button을 pill로 변경 금지 — 4px round가 시그니처
4. Uber Move 폰트를 본문 단락(60자+)에 사용 금지 — Uber Move Text 별도
5. 지도 위 픽업/드롭 아이콘 형태(원/사각)를 임의 변경 금지

### ⑫ 시그니처 적용 예시 (Ride request — Mobile)

```html
<style>
  body { margin: 0; font-family: 'Uber Move Text', -apple-system, 'Pretendard', sans-serif; color: #fff; background: #0E0E10; }
  .app { max-width: 420px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 280px 1fr; }
  .topbar { padding: 16px; background: #000; color: #fff; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-family: 'Uber Move', sans-serif; font-weight: 700; font-size: 22px; letter-spacing: -0.02em; }
  .map { background: #0E0E10; position: relative; overflow: hidden; }
  .map::before { content:""; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 60%, #242427, #000); }
  .map .pickup { position: absolute; left: 30%; top: 35%; width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 3px solid #000; box-shadow: 0 0 0 6px rgba(255,255,255,0.15); }
  .map .drop { position: absolute; left: 60%; top: 65%; width: 14px; height: 14px; border-radius: 2px; background: #fff; border: 3px solid #000; }
  .map svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .panel { padding: 18px 20px; background: #0E0E10; }
  .panel h1 { margin: 0 0 8px; font-family: 'Uber Move', sans-serif; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; color: #fff; }
  .panel .stops { background: #1A1A1C; border-radius: 8px; padding: 12px 14px; margin-bottom: 14px; }
  .panel .stop { display: grid; grid-template-columns: 14px 1fr; gap: 10px; align-items: center; padding: 6px 0; }
  .panel .stop .ic-pickup { width: 10px; height: 10px; border-radius: 50%; background: #fff; }
  .panel .stop .ic-drop { width: 10px; height: 10px; border-radius: 2px; background: #fff; }
  .ride-options { display: flex; flex-direction: column; gap: 8px; }
  .opt { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; padding: 12px 14px; border: 1px solid #2E2E32; border-radius: 8px; align-items: center; cursor: pointer; }
  .opt.selected { border-color: #fff; border-width: 2px; padding: 11px 13px; }
  .opt .ic { font-size: 22px; }
  .opt .name { font-weight: 600; font-size: 15px; color: #fff; }
  .opt .meta { font-size: 12px; color: #8A8A8A; }
  .opt .price { font-weight: 600; font-size: 15px; text-align: right; color: #fff; }
  .request { background: #fff; color: #000; border: 0; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 500; font-family: inherit; cursor: pointer; width: 100%; margin-top: 14px; }
</style>

<div class="app">
  <header class="topbar"><span class="brand">Uber</span></header>
  <div class="map">
    <div class="pickup"></div>
    <div class="drop"></div>
    <svg viewBox="0 0 400 280" preserveAspectRatio="none">
      <path d="M120 100 Q 220 130, 240 180" stroke="#fff" stroke-width="3" fill="none" stroke-dasharray="6 4"/>
    </svg>
  </div>
  <main class="panel">
    <h1>탑승 옵션</h1>
    <div class="stops">
      <div class="stop"><span class="ic-pickup"></span><span style="font-size:14px;">강남역 11번 출구</span></div>
      <div class="stop"><span class="ic-drop"></span><span style="font-size:14px;">서울시청</span></div>
    </div>
    <div class="ride-options">
      <div class="opt selected">
        <span class="ic">🚗</span>
        <div><div class="name">UberX</div><div class="meta">약 4분 후 도착 · 4인승</div></div>
        <div><div class="price">₩ 8,400</div></div>
      </div>
      <div class="opt">
        <span class="ic">🚙</span>
        <div><div class="name">Uber Comfort</div><div class="meta">약 6분 후 · 더 넓은 공간</div></div>
        <div><div class="price">₩ 11,200</div></div>
      </div>
      <div class="opt">
        <span class="ic">🚐</span>
        <div><div class="name">UberXL</div><div class="meta">약 8분 후 · 6인승</div></div>
        <div><div class="price">₩ 14,800</div></div>
      </div>
    </div>
    <button class="request">UberX 호출 · ₩ 8,400</button>
  </main>
</div>
```
