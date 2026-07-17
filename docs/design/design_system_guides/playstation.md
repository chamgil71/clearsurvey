---
brand: PlayStation
brand_ko: 플레이스테이션
slug: playstation
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - gaming
  - consumer

color_tone: cool
primary_color_hex: "#0070D1"
primary_color_name: "PS Blue"
mood:
  - 시네마틱
  - 콘솔
  - 4색사인

font_category: sans-serif
font_primary: SST
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 1994
last_major_revision: 2024
signature_keyword: "딥 PS 블루 + ○△□✕ 4심볼 사인 — 콘솔 게이밍의 시네마틱 거실 UI"

hero_html: |
  <div style="font-family:'SST','Inter',-apple-system,sans-serif;background:linear-gradient(180deg,#000B1A 0%,#001536 100%);color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <div style="display:flex;gap:3px;">
        <span style="width:10px;height:10px;border-radius:50%;border:1px solid #FF6F84;display:inline-block;"></span>
        <span style="width:10px;height:10px;display:inline-block;color:#7DC4FF;font:900 9px/1 sans-serif;text-align:center;">△</span>
        <span style="width:10px;height:10px;display:inline-block;color:#E594E5;font:900 8px/1 sans-serif;text-align:center;">□</span>
        <span style="width:10px;height:10px;display:inline-block;color:#7AE5B5;font:900 9px/1 sans-serif;text-align:center;">✕</span>
      </div>
      <span style="font-weight:600;letter-spacing:0.02em;">PlayStation</span>
    </div>
    <div style="padding:8px 14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:5px;">
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#001536,#003A8C);border-radius:6px;display:grid;place-items:center;color:#fff;font-size:10px;font-weight:600;">🎮</div>
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#1A0820,#5A1C5A);border-radius:6px;display:grid;place-items:center;color:#fff;font-size:10px;font-weight:600;">🌃</div>
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#0E2A20,#1B5A3A);border-radius:6px;display:grid;place-items:center;color:#fff;font-size:10px;font-weight:600;">⚔️</div>
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#3A1810,#8A3818);border-radius:6px;display:grid;place-items:center;color:#fff;font-size:10px;font-weight:600;">🏁</div>
      </div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #003A8C;font-size:10px;display:flex;gap:10px;color:#7DC4FF;">
      <span>○ Open</span><span>△ Options</span><span>✕ Confirm</span>
    </div>
  </div>

sources:
  - https://www.playstation.com/
---

### ① 브랜드 DNA
- **브랜드명**: PlayStation (Sony Interactive Entertainment)
- **한 줄 정체성**: 콘솔 게이밍의 사실상 표준, PS1~PS5의 30년 시네마틱 게임 플랫폼
- **공식 디자인 철학**: "Play has no limits" — 시네마틱, 영화적 톤
- **시그니처 요소 1개**: PS Blue #0070D1 + ○△□✕ 4색 컨트롤러 사인. 4가지 액션 컬러(빨강/하늘/핑크/녹)와 딥 네이비 캔버스의 콘솔 거실 톤. Xbox의 그린, Switch의 빨강과 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 시네마틱, 콘솔, 4색사인
- **무드 설명**: 거실 TV의 큰 화면을 가정한 시네마틱 톤. 어두운 네이비 캔버스에 게임 아트워크가 풀스크린 카드로 들어오고, 컨트롤러 4심볼이 액션 UI에 일관되게 등장.
- **비주얼 스타일**: 모던 미니멀 (시네마틱 카드)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (6~12px)
- **평면성**: Layered

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - PS Blue */
  --color-primary-50:  #E6F0FF;
  --color-primary-100: #BCD7FA;
  --color-primary-200: #87B5F4;
  --color-primary-300: #5C95EE;
  --color-primary-400: #2E7CE0;
  --color-primary-500: #0070D1;       /* 시그니처 */
  --color-primary-600: #005CB0;
  --color-primary-700: #004A8C;
  --color-primary-800: #003366;
  --color-primary-900: #001A33;

  /* Controller 4-symbol (액션 강조 전용) */
  --color-circle: #FF6F84;     /* ○ */
  --color-triangle: #7DC4FF;   /* △ */
  --color-square: #E594E5;     /* □ */
  --color-cross: #7AE5B5;      /* ✕ */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F9FC;
  --color-neutral-100:  #E1E8F0;
  --color-neutral-300:  #9AA5B8;
  --color-neutral-500:  #5A6478;
  --color-neutral-700:  #2A3550;
  --color-neutral-900:  #001536;
  --color-neutral-1000: #000B1A;

  /* Semantic */
  --color-success-bg: #0A2E1E;
  --color-success-fg: #7AE5B5;
  --color-warning-bg: #2A1B05;
  --color-warning-fg: #FFD78A;
  --color-error-bg:   #2A0D12;
  --color-error-fg:   #FF6F84;
  --color-info-bg:    #001A33;
  --color-info-fg:    #7DC4FF;

  /* Surface */
  --bg-base:     #000B1A;
  --bg-subtle:   #001536;
  --bg-elevated: #002B5C;
  --bg-page:     linear-gradient(180deg, #000B1A 0%, #001536 100%);
  --bg-overlay:  rgba(0,11,26,0.75);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #C7D3E5;
  --text-tertiary:   #7C8AA8;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #4A5478;

  /* Border */
  --border-default: #003A8C;
  --border-subtle:  #001536;
  --border-strong:  #005CB0;
  --border-focus:   #7DC4FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): SST (Sony 자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드: JetBrains Mono
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.015em
  - H2: 22px / 600 / 1.3 / -0.01em
  - H3: 16px / 600 / 1.35 / 0
  - Body Large: 16px / 400 / 1.55 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 12px / 400 / 1.45 / 0
  - Caption: 11px / 500 / 1.4 / 0.04em uppercase

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
- **Container**: TV-safe area, max-width 1280px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 18px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 2px 4px rgba(0,0,0,0.4);
--shadow-md: 0 8px 24px rgba(0,0,0,0.55);
--shadow-lg: 0 24px 64px rgba(0,0,0,0.75);
--shadow-cyan: 0 0 0 3px rgba(125,196,255,0.55);  /* 포커스 글로우 */
```

### ⑧ Iconography
- **스타일**: Outline + 4-symbol 컨트롤러 사인
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: PS 자체 / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 SST,Inter,sans-serif; padding: 11px 22px; border-radius: 9999px; border: 0; cursor: pointer; transition: background 150ms ease, box-shadow 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); box-shadow: var(--shadow-cyan); }
.btn-cross { background: var(--color-cross); color: #001536; font-weight: 700; }
.btn-cross:hover { background: #99EBC2; }
.btn-ghost { background: rgba(255,255,255,0.08); color: var(--text-primary); }
.btn-ghost:hover { background: rgba(255,255,255,0.15); }
```

**Input**
```css
.input { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 12px 16px; font: 400 15px/1.4 SST,sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--color-triangle); box-shadow: 0 0 0 2px rgba(125,196,255,0.3); }
```

**Card (Game tile)**
```css
.tile { background: var(--bg-elevated); border-radius: 12px; aspect-ratio: 1; overflow: hidden; position: relative; cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.tile:hover, .tile:focus { transform: scale(1.04); box-shadow: var(--shadow-lg), var(--shadow-cyan); }
.tile .title { position: absolute; left: 12px; bottom: 12px; font: 600 14px/1.3 SST,sans-serif; color: #fff; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 10px; border-radius: 9999px; font: 600 11px/1.4 SST,sans-serif; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-blue { background: rgba(0,112,209,0.25); color: var(--color-triangle); border: 1px solid rgba(125,196,255,0.3); }
.tag-ps5 { background: var(--color-primary-500); color: #fff; }
.tag-plus { background: linear-gradient(135deg, #FFD78A, #FFA94D); color: #2A1B05; }
```

**Navigation (TV horizontal)**
```css
.tvbar { background: var(--bg-page); padding: 16px 32px; display: flex; align-items: center; gap: 22px; }
.tvbar .logo { display: flex; gap: 4px; }
.tvbar .item { font: 600 14px/1 SST,sans-serif; color: var(--text-secondary); padding: 6px 10px; border-radius: 6px; cursor: pointer; }
.tvbar .item.active { color: #fff; background: rgba(255,255,255,0.10); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-cinematic: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 라이트 모드 강제 금지 — 시네마틱 다크가 디폴트
2. 4-심볼 색을 일반 UI 강조에 남용 금지 — 컨트롤러 액션 표시에만
3. 모서리 sharp(<4px) 사용 금지 — 콘솔 UI 톤 깨짐
4. Xbox/Switch 톤 차용 금지 — PS Blue 단일 메인
5. 본문에 700 굵기 남용 금지 — 헤더에만

### ⑫ 시그니처 적용 예시

```html
<style>
  .ps-app { font: 14px/1.55 SST, Inter, -apple-system, sans-serif; background: linear-gradient(180deg, #000B1A 0%, #001536 100%); color: #fff; min-height: 480px; display: grid; grid-template-rows: 64px 1fr 56px; }
  .ps-app .top { padding: 0 28px; display: flex; align-items: center; gap: 22px; }
  .ps-app .top .symbols { display: flex; gap: 6px; align-items: center; }
  .ps-app .top .symbols .c { color: #FF6F84; font: 900 16px/1 sans-serif; }
  .ps-app .top .symbols .t { color: #7DC4FF; font: 900 16px/1 sans-serif; }
  .ps-app .top .symbols .s { color: #E594E5; font: 900 14px/1 sans-serif; }
  .ps-app .top .symbols .x { color: #7AE5B5; font: 900 16px/1 sans-serif; }
  .ps-app .top h1 { margin: 0 0 0 6px; font: 700 18px/1 inherit; letter-spacing: 0.01em; }
  .ps-app .top .nav { display: flex; gap: 4px; margin-left: 16px; }
  .ps-app .top .nav span { padding: 8px 14px; font: 600 14px/1 inherit; color: #C7D3E5; cursor: pointer; border-radius: 8px; }
  .ps-app .top .nav span.act { background: rgba(255,255,255,0.10); color: #fff; }
  .ps-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
  .ps-app .top .right .plus { padding: 5px 12px; border-radius: 9999px; background: linear-gradient(135deg, #FFD78A, #FFA94D); color: #2A1B05; font: 600 11px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; }
  .ps-app .top .right .av { width: 32px; height: 32px; border-radius: 50%; background: #003A8C; display: grid; place-items: center; font-weight: 700; }
  .ps-app .stage { padding: 22px 28px; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 16px; }
  .ps-app .hero { grid-row: span 2; background: linear-gradient(135deg, #001536 0%, #003A8C 50%, #0070D1 100%); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; justify-content: flex-end; box-shadow: 0 8px 24px rgba(0,0,0,0.55); }
  .ps-app .hero .tag { display: inline-flex; padding: 3px 10px; border-radius: 9999px; background: rgba(255,255,255,0.10); color: #7DC4FF; font: 600 11px/1.4 inherit; letter-spacing: 0.06em; text-transform: uppercase; width: max-content; margin-bottom: 8px; }
  .ps-app .hero h2 { margin: 0 0 6px; font: 700 30px/1.1 inherit; letter-spacing: -0.02em; }
  .ps-app .hero .desc { font-size: 13px; color: #C7D3E5; line-height: 1.55; margin-bottom: 16px; max-width: 80%; }
  .ps-app .hero .row { display: flex; gap: 8px; }
  .ps-app .hero .btn { font: 700 13px/1 inherit; padding: 11px 18px; border-radius: 9999px; }
  .ps-app .hero .btn.p { background: #fff; color: #001536; display: flex; align-items: center; gap: 6px; }
  .ps-app .hero .btn.p .x { color: #7AE5B5; font: 900 14px/1 sans-serif; }
  .ps-app .hero .btn.g { background: rgba(255,255,255,0.08); color: #fff; }
  .ps-app .tile { background: #002B5C; border-radius: 12px; aspect-ratio: 1; padding: 12px; display: flex; align-items: flex-end; position: relative; overflow: hidden; }
  .ps-app .tile.a { background: linear-gradient(135deg, #1A0820 0%, #5A1C5A 80%); }
  .ps-app .tile.b { background: linear-gradient(135deg, #0E2A20 0%, #1B5A3A 80%); }
  .ps-app .tile.c { background: linear-gradient(135deg, #3A1810 0%, #8A3818 80%); }
  .ps-app .tile.d { background: linear-gradient(135deg, #1A1838 0%, #3A3A8A 80%); }
  .ps-app .tile.e { background: linear-gradient(135deg, #1F1422 0%, #6A346E 80%); }
  .ps-app .tile.f { background: linear-gradient(135deg, #001A33 0%, #003A8C 80%); }
  .ps-app .tile .title { color: #fff; font: 600 14px/1.3 inherit; }
  .ps-app .foot { padding: 0 28px; display: flex; align-items: center; gap: 22px; color: #7DC4FF; font-size: 12px; border-top: 1px solid #003A8C; }
  .ps-app .foot span { display: flex; align-items: center; gap: 4px; }
  .ps-app .foot .c { color: #FF6F84; font: 900 13px/1 sans-serif; }
  .ps-app .foot .x { color: #7AE5B5; font: 900 13px/1 sans-serif; }
  .ps-app .foot .t { color: #7DC4FF; font: 900 13px/1 sans-serif; }
</style>

<div class="ps-app">
  <header class="top">
    <div class="symbols"><span class="c">○</span><span class="t">△</span><span class="s">□</span><span class="x">✕</span></div>
    <h1>PlayStation</h1>
    <nav class="nav"><span class="act">Home</span><span>Games</span><span>Store</span><span>Library</span></nav>
    <div class="right"><span class="plus">PS Plus</span><div class="av">K</div></div>
  </header>
  <main class="stage">
    <div class="hero">
      <span class="tag">PS5 Exclusive</span>
      <h2>HORIZON: NEON DAWN</h2>
      <p class="desc">새로운 미지의 도시. 그곳을 가로지르는 거대한 기계 짐승. 시네마틱 액션 어드벤처의 신작.</p>
      <div class="row"><span class="btn p"><span class="x">✕</span> 플레이</span><span class="btn g">+ 라이브러리</span></div>
    </div>
    <div class="tile a"><div class="title">Stardust Echo</div></div>
    <div class="tile b"><div class="title">Forest of Vows</div></div>
    <div class="tile c"><div class="title">Inferno Drift</div></div>
    <div class="tile d"><div class="title">Cyber Pilgrim</div></div>
    <div class="tile e"><div class="title">Moonbound</div></div>
    <div class="tile f"><div class="title">Ocean Citadel</div></div>
  </main>
  <footer class="foot">
    <span><span class="x">✕</span> Confirm</span>
    <span><span class="c">○</span> Back</span>
    <span><span class="t">△</span> Options</span>
  </footer>
</div>
```
