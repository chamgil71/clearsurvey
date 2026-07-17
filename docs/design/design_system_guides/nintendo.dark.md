---
brand: Nintendo
brand_ko: 닌텐도
slug: nintendo
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - gaming
  - consumer

color_tone: warm
primary_color_hex: "#E60012"
primary_color_name: "Nintendo Red"
mood:
  - 활기
  - 친근
  - 패밀리

font_category: sans-serif
font_primary: Nintendo Std
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - humanism
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 1985
last_major_revision: 2025
signature_keyword: "Nintendo Red(#E60012) + 흰 캔버스 + 큰 캐릭터 일러스트 — 가족형 콘솔의 친근한 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFAFA", "border": "#F0F0F0", "fg": "#1A1A1A", "fg_muted": "#6B6B6B", "accent": "#E60012" },
    "dark":  { "bg": "#1A1A1A", "surface": "#2D2D2D", "border": "#3A3A3A", "fg": "#FFFFFF", "fg_muted": "#D4D4D4", "accent": "#FF606A" }
  }

hero_html: |
  <div style="font-family:'Nintendo Std','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;background:var(--card-accent);color:#fff;">
      <div style="width:30px;height:14px;background:#fff;border-radius:9999px;display:grid;place-items:center;color:var(--card-accent);font:900 9px/1 sans-serif;">N</div>
      <span style="font-weight:700;letter-spacing:0.02em;">Nintendo</span>
      <span style="margin-left:auto;font-size:10px;opacity:0.85;">Switch 2</span>
    </div>
    <div style="padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="background:#3A1F22;border-radius:14px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font-size:10px;font-weight:700;color:#FF606A;">Mario Kart</div>
      <div style="background:#1B2C42;border-radius:14px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font-size:10px;font-weight:700;color:#69A9FF;">Zelda</div>
      <div style="background:#3A3219;border-radius:14px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font-size:10px;font-weight:700;color:#E0B340;">Animal Crossing</div>
      <div style="background:#1F3320;border-radius:14px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font-size:10px;font-weight:700;color:#5FC95F;">Splatoon</div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid var(--card-border);font-size:10px;color:var(--card-fg-muted);display:flex;align-items:center;gap:8px;">
      <span style="color:var(--card-accent);">★</span><span>Nintendo Switch Online</span>
    </div>
  </div>

sources:
  - https://www.nintendo.com/
---

### ① 브랜드 DNA
- **브랜드명**: Nintendo
- **한 줄 정체성**: Switch / Mario / Zelda — 가족 친화 콘솔 게이밍의 일본 거장
- **공식 디자인 철학**: "Bring smiles to everyone" — 친근하고 가족적인 톤
- **시그니처 요소 1개**: Nintendo Red #E60012 한 톤 + 흰 캔버스 + 큰 캐릭터 일러스트. PS의 어두운 시네마틱, Xbox의 그린 콘솔 톤과 정반대의 "어린이도 안전한" 환한 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기, 친근, 패밀리
- **무드 설명**: 흰 배경 위 큰 캐릭터 IP가 시그니처. Mario/Zelda/Splatoon 각 게임이 자체 컬러 톤을 가지지만 전체 UI는 흰 캔버스 + 빨강 액센트로 통일. 콘솔/모바일/스토어 모든 채널에서 친절한 톤.
- **비주얼 스타일**: 휴머니즘 + 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (14~20px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Nintendo Red (다크에서는 한 단계 라이트하게 운용) */
  --color-primary-50:  #330004;
  --color-primary-100: #5F0008;
  --color-primary-200: #8C000A;
  --color-primary-300: #B8000E;
  --color-primary-400: #E60012;
  --color-primary-500: #FF3644;       /* 시그니처 (다크 캔버스 대비용 라이트닝) */
  --color-primary-600: #FF606A;
  --color-primary-700: #FF9298;
  --color-primary-800: #FFC4C7;
  --color-primary-900: #FFE9EA;

  /* Game-specific accents (각 IP별, 다크 캔버스 대비 보정) */
  --color-mario: #FF3644;
  --color-zelda: #69A9FF;
  --color-animal: #E0B340;
  --color-splatoon: #5FC95F;
  --color-kirby: #FF9ACB;

  /* Neutral (다크 반전 램프) */
  --color-neutral-0:    #0E0E10;
  --color-neutral-50:   #161618;
  --color-neutral-100:  #1F1F22;
  --color-neutral-300:  #2D2D31;
  --color-neutral-500:  #5A5A60;
  --color-neutral-700:  #A1A1A8;
  --color-neutral-900:  #E6E6E6;
  --color-neutral-1000: #FFFFFF;

  /* Semantic (다크 캔버스 위 가독) */
  --color-success-bg: #14271C;
  --color-success-fg: #4ADE80;
  --color-warning-bg: #2A2110;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #2E1416;
  --color-error-fg:   #FF6670;
  --color-info-bg:    #142033;
  --color-info-fg:    #69A9FF;

  /* Surface */
  --bg-base:     #131315;
  --bg-subtle:   #1B1B1E;
  --bg-elevated: #232327;
  --bg-overlay:  rgba(0,0,0,0.66);

  /* Text */
  --text-primary:    #F2F2F2;
  --text-secondary:  #C2C2C6;
  --text-tertiary:   #8E8E94;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A5A60;

  /* Border */
  --border-default: #2D2D31;
  --border-subtle:  #1F1F22;
  --border-strong:  #3F3F45;
  --border-focus:   #FF3644;
}

[data-theme="light"] {
  /* Primary - Nintendo Red */
  --color-primary-50:  #FFE9EA;
  --color-primary-100: #FFC4C7;
  --color-primary-200: #FF9298;
  --color-primary-300: #FF606A;
  --color-primary-400: #FF2F3D;
  --color-primary-500: #E60012;       /* 시그니처 */
  --color-primary-600: #B8000E;
  --color-primary-700: #8C000A;
  --color-primary-800: #5F0008;
  --color-primary-900: #330004;

  /* Game-specific accents (각 IP별) */
  --color-mario: #E60012;
  --color-zelda: #1565D8;
  --color-animal: #C0830B;
  --color-splatoon: #2F8C2F;
  --color-kirby: #FF7AB8;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F0F0F0;
  --color-neutral-300:  #D4D4D4;
  --color-neutral-500:  #A1A1A1;
  --color-neutral-700:  #6B6B6B;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #ECFDF5;
  --color-success-fg: #047857;
  --color-warning-bg: #FFFBEB;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FFE9EA;
  --color-error-fg:   #E60012;
  --color-info-bg:    #EFF6FF;
  --color-info-fg:    #1565D8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,26,0.55);

  /* Text */
  --text-primary:    #1A1A1A;
  --text-secondary:  #4A4A4A;
  --text-tertiary:   #6B6B6B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A1A1A1;

  /* Border */
  --border-default: #F0F0F0;
  --border-subtle:  #FAFAFA;
  --border-strong:  #D4D4D4;
  --border-focus:   #E60012;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Nintendo Std (자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 일문: Hiragino Sans / Noto Sans JP
  - 코드: JetBrains Mono
- **위계**:
  - Display: 56px / 700 / 1.1 / -0.02em
  - H1: 36px / 700 / 1.2 / -0.015em
  - H2: 24px / 700 / 1.3 / -0.01em
  - H3: 18px / 700 / 1.35 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Caption: 12px / 600 / 1.4 / 0.02em

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 36px;
  --space-2xl: 56px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1200px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;        /* 카드 시그니처 */
--radius-xl: 28px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 6px 18px rgba(0,0,0,0.50);
--shadow-lg: 0 20px 48px rgba(0,0,0,0.60);
--shadow-red: 0 6px 18px rgba(255,54,68,0.35);
```

### ⑧ Iconography
- **스타일**: Filled (둥근 형태) / Outline 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: 자체 아이콘 / Phosphor (Bold variant)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'Nintendo Std',Inter,sans-serif; padding: 11px 22px; border-radius: 9999px; border: 0; cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); transform: translateY(-1px); box-shadow: var(--shadow-red); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 2px solid var(--color-primary-500); }
.btn-secondary:hover { background: var(--color-primary-50); }
.btn-ghost { background: transparent; color: var(--color-primary-600); }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: 14px; padding: 11px 16px; font: 400 15px/1.4 'Nintendo Std',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 4px rgba(255,54,68,0.22); }
```

**Card (Game)**
```css
.card { background: var(--bg-elevated); border-radius: 20px; padding: 0; overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.card .cover { aspect-ratio: 1; background: var(--color-primary-50); }
.card .meta { padding: 14px 16px; }
.card h3 { font: 700 16px/1.3 'Nintendo Std',sans-serif; color: var(--text-primary); margin: 0 0 4px; }
.card .price { font: 700 14px/1 inherit; color: var(--color-primary-600); }
```

**Badge**
```css
.tag { display: inline-flex; padding: 4px 12px; border-radius: 9999px; font: 700 11px/1.4 'Nintendo Std',sans-serif; }
.tag-red { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-pink { background: var(--color-primary-100); color: var(--color-primary-700); }
.tag-sale { background: linear-gradient(135deg, #FF606A, #FF3644); color: #fff; letter-spacing: 0.04em; text-transform: uppercase; }
```

**Navigation**
```css
.topbar { background: var(--color-primary-500); color: var(--text-on-primary); padding: 12px 24px; display: flex; align-items: center; gap: 16px; }
.topbar .logo { width: 56px; height: 24px; background: #fff; border-radius: 9999px; display: grid; place-items: center; color: var(--color-primary-500); font: 900 14px/1 'Nintendo Std',sans-serif; letter-spacing: 0.04em; }
.topbar .item { font: 700 13px/1 inherit; padding: 8px 12px; cursor: pointer; opacity: 0.9; }
.topbar .item:hover { opacity: 1; }
.topbar .item.active { opacity: 1; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.45, 0.64, 1);
```

### ⑪ Anti-patterns
1. 다크 톤 캔버스 강제 금지 — 흰 캔버스가 시그니처
2. 모서리 sharp(<8px) 사용 금지 — 모든 카드/버튼은 round
3. 빨강 외 강조 색을 본문에 사용 금지 (각 IP별 색은 그 게임 컨텍스트에서만)
4. 본문에 무거운 굵기(800+) 사용 금지 — 700이 maximum
5. 칙칙한 회색 톤 사용 금지 — 항상 라이트하고 환한 톤

### ⑫ 시그니처 적용 예시

```html
<style>
  .nt-app { font: 14px/1.55 'Nintendo Std', Inter, -apple-system, sans-serif; background: #131315; color: #F2F2F2; min-height: 480px; display: grid; grid-template-rows: auto 1fr; }
  .nt-app .top { background: #FF3644; color: #fff; padding: 14px 24px; display: flex; align-items: center; gap: 18px; }
  .nt-app .top .logo { width: 60px; height: 24px; background: #fff; border-radius: 9999px; display: grid; place-items: center; color: #FF3644; font: 900 14px/1 inherit; letter-spacing: 0.06em; }
  .nt-app .top h1 { margin: 0; font: 700 17px/1 inherit; letter-spacing: 0.01em; }
  .nt-app .top .nav { display: flex; gap: 4px; margin-left: 14px; }
  .nt-app .top .nav span { padding: 8px 14px; font: 700 13px/1 inherit; cursor: pointer; opacity: 0.9; border-radius: 9999px; }
  .nt-app .top .nav span.act { background: rgba(255,255,255,0.22); opacity: 1; }
  .nt-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
  .nt-app .top .right .online { background: #fff; color: #FF3644; padding: 5px 12px; border-radius: 9999px; font: 700 12px/1 inherit; }
  .nt-app .stage { padding: 24px 28px; display: grid; grid-template-rows: auto 1fr; gap: 18px; }
  .nt-app .head h2 { margin: 0; font: 700 28px/1.2 inherit; letter-spacing: -0.02em; color: #F2F2F2; }
  .nt-app .head .sub { font-size: 13px; color: #8E8E94; margin-top: 4px; }
  .nt-app .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .nt-app .card { background: #232327; border-radius: 20px; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,0.40); cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
  .nt-app .card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.55); }
  .nt-app .card .cv { aspect-ratio: 1; display: grid; place-items: center; font: 700 16px/1.2 inherit; }
  .nt-app .card.mario .cv { background: #3A1F22; color: #FF606A; }
  .nt-app .card.zelda .cv { background: #1B2C42; color: #69A9FF; }
  .nt-app .card.animal .cv { background: #3A3219; color: #E0B340; }
  .nt-app .card.splatoon .cv { background: #1F3320; color: #5FC95F; }
  .nt-app .card .meta { padding: 14px 16px; }
  .nt-app .card .meta h3 { margin: 0 0 4px; font: 700 15px/1.3 inherit; }
  .nt-app .card .meta .px { font: 700 14px/1 inherit; color: #FF606A; }
  .nt-app .card .meta .sale { display: inline-block; margin-left: 6px; padding: 2px 8px; border-radius: 9999px; background: linear-gradient(135deg,#FF606A,#FF3644); color: #fff; font: 700 10px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
</style>

<div class="nt-app">
  <header class="top">
    <span class="logo">N</span>
    <h1>Nintendo</h1>
    <nav class="nav"><span class="act">Switch</span><span>Games</span><span>Online</span><span>Store</span></nav>
    <div class="right"><span class="online">★ Online</span></div>
  </header>
  <main class="stage">
    <div class="head">
      <h2>오늘의 추천 게임</h2>
      <div class="sub">패밀리 친구 모두가 즐길 수 있어요.</div>
    </div>
    <div class="grid">
      <div class="card mario"><div class="cv">Mario Kart</div><div class="meta"><h3>Mario Kart World</h3><span class="px">₩68,000</span><span class="sale">-20%</span></div></div>
      <div class="card zelda"><div class="cv">Zelda</div><div class="meta"><h3>Tears of the Kingdom</h3><span class="px">₩72,000</span></div></div>
      <div class="card animal"><div class="cv">Animal Crossing</div><div class="meta"><h3>New Horizons</h3><span class="px">₩59,000</span></div></div>
      <div class="card splatoon"><div class="cv">Splatoon</div><div class="meta"><h3>Splatoon 3</h3><span class="px">₩68,000</span></div></div>
    </div>
  </main>
</div>
```
