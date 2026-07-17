---
brand: Steam
brand_ko: 스팀
slug: steam
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - gaming
  - ecommerce

color_tone: cool
primary_color_hex: "#1B2838"
primary_color_name: "Steam Navy"
mood:
  - 진중
  - 라이브러리
  - PC게이밍

font_category: sans-serif
font_primary: Motiva Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2003
last_major_revision: 2024
signature_keyword: "잉크 네이비 그라데이션 + 시안 액션 + 게임 카드 가로 캐러셀 — PC 게이밍 라이브러리의 원형"

hero_html: |
  <div style="font-family:'Motiva Sans','Arial',-apple-system,sans-serif;background:linear-gradient(180deg,#1B2838 0%,#16202D 100%);color:#C7D5E0;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;">
    <div style="padding:8px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #2A475E;">
      <div style="width:18px;height:18px;background:#171A21;border-radius:3px;display:grid;place-items:center;color:#66C0F4;font:900 11px/1 sans-serif;">⚙</div>
      <span style="color:#fff;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;font-size:10px;">STEAM</span>
      <span style="margin-left:auto;color:#66C0F4;font-size:10px;">Library</span>
    </div>
    <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
      <div style="background:linear-gradient(135deg,#1B2838,#2A475E);aspect-ratio:3/4;border-radius:3px;display:flex;align-items:flex-end;padding:6px;font-size:9px;color:#fff;font-weight:600;">Title A</div>
      <div style="background:linear-gradient(135deg,#1F1832,#5B3A8A);aspect-ratio:3/4;border-radius:3px;display:flex;align-items:flex-end;padding:6px;font-size:9px;color:#fff;font-weight:600;">Title B</div>
      <div style="background:linear-gradient(135deg,#3A1816,#7A3424);aspect-ratio:3/4;border-radius:3px;display:flex;align-items:flex-end;padding:6px;font-size:9px;color:#fff;font-weight:600;">Title C</div>
    </div>
    <div style="padding:8px 12px;background:#171A21;display:flex;gap:8px;font-size:10px;">
      <span style="color:#66C0F4;">▶ Play</span><span style="color:#C7D5E0;">★ Wishlist</span><span style="margin-left:auto;color:#5A8A3A;">● ONLINE</span>
    </div>
  </div>

sources:
  - https://store.steampowered.com/
---

### ① 브랜드 DNA
- **브랜드명**: Steam (Valve)
- **한 줄 정체성**: PC 게이밍 디지털 유통의 사실상 표준 — 게임 스토어 + 라이브러리 + 커뮤니티
- **공식 디자인 철학**: "Your gaming library, always" — 게임 비주얼이 무대의 주인공
- **시그니처 요소 1개**: 잉크 네이비 #1B2838 → #16202D 세로 그라데이션 + Cyan #66C0F4 액션. 게임 헤더/표지 이미지가 화면의 70%를 차지하는 카탈로그 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 진중, 라이브러리, PC게이밍
- **무드 설명**: 모니터 앞에 앉은 PC 게이머의 톤. 어두운 네이비 캔버스가 게임 아트워크의 다양한 색을 살리는 액자 역할. UI 자체는 채도 낮은 cyan 단색 한 톤만 사용.
- **비주얼 스타일**: 모던 미니멀 (게임 콘텐츠가 주연)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (3~4px) — 거의 sharp
- **평면성**: Layered — header gradient + 카드 위 미세 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Steam Navy */
  --color-primary-50:  #C7D5E0;
  --color-primary-100: #8F98A0;
  --color-primary-200: #67707A;
  --color-primary-300: #4E5764;
  --color-primary-400: #2A475E;
  --color-primary-500: #1B2838;       /* 시그니처 */
  --color-primary-600: #16202D;
  --color-primary-700: #171A21;
  --color-primary-800: #0E141B;
  --color-primary-900: #060A0F;

  /* Secondary - Steam Cyan (액션) */
  --color-secondary-300: #A3D3F0;
  --color-secondary-500: #66C0F4;
  --color-secondary-700: #4583B0;

  /* Accent - Green (Play / Online) */
  --color-accent-online: #5A8A3A;
  --color-accent-online-bright: #BFFF34;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F8FA;
  --color-neutral-100:  #C7D5E0;
  --color-neutral-300:  #8F98A0;
  --color-neutral-500:  #67707A;
  --color-neutral-700:  #4E5764;
  --color-neutral-900:  #1B2838;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #2A4030;
  --color-success-fg: #BFFF34;
  --color-warning-bg: #3A2D08;
  --color-warning-fg: #FFC93C;
  --color-error-bg:   #3A1816;
  --color-error-fg:   #FF6B5E;
  --color-info-bg:    #1A3A50;
  --color-info-fg:    #66C0F4;

  /* Surface */
  --bg-base:     #1B2838;
  --bg-subtle:   #16202D;
  --bg-elevated: #2A475E;
  --bg-page:     linear-gradient(180deg, #1B2838 0%, #16202D 100%);
  --bg-overlay:  rgba(0,0,0,0.70);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #C7D5E0;
  --text-tertiary:   #8F98A0;
  --text-link:       #66C0F4;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #4E5764;

  /* Border */
  --border-default: #2A475E;
  --border-subtle:  #16202D;
  --border-strong:  #4E5764;
  --border-focus:   #66C0F4;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Motiva Sans (Valve 자체) / Arial 폴백
  - 한글: Pretendard / Noto Sans KR / Malgun Gothic
  - 코드/메타: Consolas / JetBrains Mono
- **위계**:
  - Display: 36px / 400 / 1.2 / 0
  - H1: 26px / 400 / 1.25 / 0
  - H2: 18px / 400 / 1.3 / 0
  - H3: 14px / 600 / 1.4 / 0.04em uppercase
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 12px / 400 / 1.45 / 0
  - Meta: 11px / 600 / 1.4 / 0.06em uppercase
  - Caption: 11px / 400 / 1.4 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 18px;
  --space-xl: 28px;
  --space-2xl: 44px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 940px (스토어) / 풀스크린 (라이브러리)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;       /* 거의 sharp */
--radius-md: 3px;       /* 기본 */
--radius-lg: 4px;
--radius-xl: 6px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(0,0,0,0.4);
--shadow-md: 0 6px 20px rgba(0,0,0,0.55);
--shadow-lg: 0 16px 48px rgba(0,0,0,0.7);
--shadow-cyan: 0 0 0 2px rgba(102,192,244,0.5);
```

### ⑧ Iconography
- **스타일**: Outline (1.5px), 간혹 Filled (Steam mark)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Sharp ~ Soft
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 400 14px/1 'Motiva Sans',Arial,sans-serif; padding: 6px 14px; border-radius: 3px; border: 0; cursor: pointer; transition: background 150ms ease; }
.btn-primary { background: linear-gradient(180deg, #6DCFF6 0%, #2D5380 100%); color: #FFF; text-shadow: 0 1px 0 rgba(0,0,0,0.3); }
.btn-primary:hover { background: linear-gradient(180deg, #8BDDFF 0%, #3D63A0 100%); }
.btn-buy { background: linear-gradient(180deg, #A4D007 0%, #4F7B0F 100%); color: #FFF; }
.btn-buy:hover { background: linear-gradient(180deg, #BFFF34 0%, #5F9A1F 100%); }
.btn-ghost { background: rgba(102,192,244,0.15); color: var(--text-link); }
.btn-ghost:hover { background: rgba(102,192,244,0.25); }
```

**Input**
```css
.input { background: var(--color-primary-700); border: 1px solid var(--border-default); border-radius: 3px; padding: 6px 10px; font: 400 13px/1.4 'Motiva Sans',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); }
```

**Card (Game tile)**
```css
.tile { background: var(--bg-elevated); border-radius: 3px; overflow: hidden; cursor: pointer; transition: transform 150ms ease; position: relative; }
.tile:hover { transform: scale(1.02); }
.tile .header-img { aspect-ratio: 460/215; background: linear-gradient(135deg, #1B2838, #2A475E); }
.tile .meta { padding: 8px 10px; }
.tile h3 { font: 600 13px/1.3 'Motiva Sans',sans-serif; color: var(--text-primary); margin: 0 0 4px; }
.tile .price { font: 600 13px/1 inherit; color: var(--text-primary); }
.tile .discount { background: #4C6B22; color: #BEEE11; padding: 2px 6px; font: 700 12px/1 inherit; border-radius: 2px; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 1px 6px; border-radius: 2px; font: 400 11px/1.4 'Motiva Sans',sans-serif; }
.tag-default { background: rgba(103,193,245,0.20); color: var(--text-secondary); }
.tag-cyan { background: rgba(103,193,245,0.20); color: var(--text-link); }
.tag-discount { background: #4C6B22; color: #BEEE11; font-weight: 700; }
```

**Navigation (Top)**
```css
.topbar { background: linear-gradient(180deg, #171A21 0%, #1B2838 100%); padding: 0 16px; display: flex; align-items: center; gap: 16px; height: 44px; border-bottom: 1px solid var(--border-default); }
.topbar .logo { color: #C7D5E0; font: 400 18px/1 'Motiva Sans',sans-serif; }
.topbar .item { font: 400 14px/1 inherit; color: var(--text-secondary); padding: 6px 8px; cursor: pointer; text-transform: uppercase; letter-spacing: 0.04em; font-size: 13px; }
.topbar .item:hover { color: #fff; }
.topbar .item.active { color: var(--text-link); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. 흰색 배경 캔버스 사용 금지 — 다크 네이비가 디폴트
2. 채도 높은 보색 강조 금지 — Cyan/Green 한 톤씩만
3. 게임 표지를 작은 썸네일로만 사용 금지 — 헤더 이미지가 카드의 주연
4. 둥근 모서리(>6px) 사용 금지 — sharp 톤 유지
5. 그라데이션 버튼 톤 임의 변경 금지 — Steam blue/green 두 그라데이션만

### ⑫ 시그니처 적용 예시

```html
<style>
  .stm-app { font: 14px/1.5 'Motiva Sans', Arial, sans-serif; background: linear-gradient(180deg, #1B2838 0%, #16202D 100%); color: #C7D5E0; min-height: 480px; display: grid; grid-template-rows: 44px 1fr; }
  .stm-app .top { background: linear-gradient(180deg, #171A21 0%, #1B2838 100%); padding: 0 16px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid #2A475E; }
  .stm-app .top .lg { color: #C7D5E0; font: 400 18px/1 inherit; }
  .stm-app .top .nav { display: flex; gap: 4px; }
  .stm-app .top .nav span { padding: 6px 10px; font: 600 11.5px/1 inherit; text-transform: uppercase; letter-spacing: 0.06em; color: #B8B6B4; cursor: pointer; }
  .stm-app .top .nav span.act { color: #fff; }
  .stm-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .stm-app .top .right .green { color: #5A8A3A; }
  .stm-app .stage { padding: 18px 20px; display: grid; grid-template-rows: auto auto 1fr; gap: 14px; }
  .stm-app .stage h2 { font: 400 22px/1.2 inherit; color: #fff; margin: 0; }
  .stm-app .stage .sub { font: 400 12px/1.4 inherit; color: #8F98A0; }
  .stm-app .featured { display: grid; grid-template-columns: 2fr 1fr; gap: 12px; }
  .stm-app .hero { background: linear-gradient(135deg, #1F1832 0%, #5B3A8A 60%, #C4499A 100%); aspect-ratio: 460/215; border-radius: 3px; padding: 14px; display: flex; flex-direction: column; justify-content: flex-end; color: #fff; box-shadow: 0 6px 20px rgba(0,0,0,0.55); }
  .stm-app .hero h3 { margin: 0 0 4px; font: 600 18px/1.2 inherit; }
  .stm-app .hero .row { display: flex; align-items: center; gap: 8px; margin-top: 6px; }
  .stm-app .hero .disc { background: #4C6B22; color: #BEEE11; padding: 3px 8px; font: 700 13px/1 inherit; border-radius: 2px; }
  .stm-app .hero .px { color: #8F98A0; text-decoration: line-through; font-size: 11px; }
  .stm-app .hero .px2 { color: #ACDBF5; font-size: 14px; }
  .stm-app .hero .play { background: linear-gradient(180deg, #6DCFF6, #2D5380); color: #fff; padding: 6px 14px; border-radius: 3px; font: 400 13px/1 inherit; width: max-content; margin-top: 8px; text-shadow: 0 1px 0 rgba(0,0,0,0.3); }
  .stm-app .side { display: flex; flex-direction: column; gap: 6px; }
  .stm-app .side .row { background: #2A475E; padding: 6px 10px; border-radius: 3px; display: flex; align-items: center; gap: 8px; font-size: 12px; }
  .stm-app .side .row .ck { width: 60px; height: 28px; background: #1B2838; border-radius: 2px; }
  .stm-app .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .stm-app .grid .t { background: #2A475E; aspect-ratio: 460/215; border-radius: 3px; padding: 8px; color: #fff; font-size: 11px; display: flex; align-items: flex-end; }
  .stm-app .grid .t.a { background: linear-gradient(135deg,#1B2838,#395A7E); }
  .stm-app .grid .t.b { background: linear-gradient(135deg,#3A1816,#7A3424); }
  .stm-app .grid .t.c { background: linear-gradient(135deg,#1F4A2D,#3A8056); }
  .stm-app .grid .t.d { background: linear-gradient(135deg,#322D1A,#6E5C2A); }
</style>

<div class="stm-app">
  <header class="top">
    <span class="lg">STEAM</span>
    <nav class="nav"><span class="act">STORE</span><span>LIBRARY</span><span>COMMUNITY</span><span>PROFILE</span></nav>
    <div class="right"><span class="green">● username</span><span style="color:#67707A;">$0.00</span></div>
  </header>
  <section class="stage">
    <div>
      <h2>Featured & Recommended</h2>
      <div class="sub">Picked for you · 21,438 games in your library</div>
    </div>
    <div class="featured">
      <div class="hero">
        <h3>Hollow Citadel: Echoes</h3>
        <div class="sub" style="color:#ACDBF5;font-size:12px;">Action · Souls-like · Atmospheric</div>
        <div class="row"><span class="disc">-35%</span><span class="px">$39.99</span><span class="px2">$25.99</span></div>
        <span class="play">▶ Add to Cart</span>
      </div>
      <div class="side">
        <div class="row"><div class="ck"></div><div><div style="color:#fff;">Lumen Knights</div><div style="color:#67707A;font-size:11px;">$14.99</div></div></div>
        <div class="row"><div class="ck"></div><div><div style="color:#fff;">Petrichor Skies</div><div style="color:#67707A;font-size:11px;">$22.50</div></div></div>
        <div class="row"><div class="ck"></div><div><div style="color:#fff;">Pixel Sprint</div><div style="color:#67707A;font-size:11px;">FREE</div></div></div>
        <div class="row"><div class="ck"></div><div><div style="color:#fff;">Saltwater Ops</div><div style="color:#67707A;font-size:11px;">$29.99</div></div></div>
      </div>
    </div>
    <div class="grid">
      <div class="t a">Game A</div>
      <div class="t b">Game B</div>
      <div class="t c">Game C</div>
      <div class="t d">Game D</div>
    </div>
  </section>
</div>
```
