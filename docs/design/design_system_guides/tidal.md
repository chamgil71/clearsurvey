---
brand: Tidal
brand_ko: 타이달
slug: tidal
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#000000"
primary_color_name: "Tidal Black"
mood:
  - 하이파이
  - 모노크롬
  - 오디오필

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2014
last_major_revision: 2024
signature_keyword: "검정·흰 모노크롬에 시안 액센트와 Master/HiRes 배지로 그리는 오디오필 톤"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#000;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:13px;font-weight:800;letter-spacing:0.04em;">TIDAL</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;align-items:center;justify-content:center;">
      <div style="width:128px;height:128px;background:linear-gradient(135deg,#1A1A1A 0%,#000 100%);position:relative;border:1px solid #1F1F1F;">
        <span style="position:absolute;right:6px;top:6px;font-size:7px;font-weight:800;letter-spacing:0.16em;color:#19C2C2;border:1px solid #19C2C2;padding:2px 4px;">MAX</span>
      </div>
      <div style="text-align:center;">
        <div style="font-size:12px;font-weight:700;letter-spacing:-0.005em;">In Rainbows</div>
        <div style="font-size:10px;color:#A0A0A0;">Radiohead</div>
      </div>
    </div>
    <div style="background:#0A0A0A;border-top:1px solid #1F1F1F;padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <div style="width:32px;height:32px;background:linear-gradient(135deg,#1A1A1A,#000);border:1px solid #1F1F1F;"></div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:10px;font-weight:600;">Nude</div>
        <div style="font-size:9px;color:#A0A0A0;">FLAC 24/96</div>
      </div>
      <span style="font-size:13px;color:#19C2C2;">▶</span>
    </div>
  </div>

sources:
  - https://tidal.com/
  - https://brand.tidal.com/
---

### ① 브랜드 DNA
- **브랜드명**: Tidal
- **한 줄 정체성**: 무손실·고해상도 오디오를 강조하는 오디오필향 스트리밍
- **공식 디자인 철학**: "High-fidelity sound, artist-first" — 음원의 품질과 아티스트 보상에 집중
- **시그니처 요소 1개**: 순흑/순백 모노크롬 + 시안 액센트(#19C2C2/#00FFFF) + Master/HiRes/MAX 품질 배지가 모든 카드에 박혀있는 오디오필 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 하이파이, 모노크롬, 오디오필
- **무드 설명**: 색이 거의 없다. 검정·흰·회색만 사용하고, 시안만 액션·품질 신호로 등장. 라운드도 거의 없고, 직각 카드와 얇은 1px 보더가 톤을 정의한다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~2px) — Spotify·YT Music과 차별
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Tidal Black */
  --color-primary-50:  #FAFAFA;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #BFBFBF;
  --color-primary-300: #8A8A8A;
  --color-primary-400: #4A4A4A;
  --color-primary-500: #000000;
  --color-primary-600: #000000;
  --color-primary-700: #000000;
  --color-primary-800: #000000;
  --color-primary-900: #000000;

  /* Secondary - Tidal Cyan */
  --color-secondary-500: #19C2C2;
  --color-secondary-300: #5EE5E5;
  --color-secondary-700: #0E8585;

  /* Neutral - mono scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #E5E5E5;
  --color-neutral-200:  #C0C0C0;
  --color-neutral-300:  #A0A0A0;
  --color-neutral-500:  #6A6A6A;
  --color-neutral-700:  #1F1F1F;
  --color-neutral-800:  #141414;
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #0A2A24;
  --color-success-fg: #19C2A0;
  --color-warning-bg: #2A2510;
  --color-warning-fg: #E5C04F;
  --color-error-bg:   #2A0F12;
  --color-error-fg:   #E04050;
  --color-info-bg:    #0A2126;
  --color-info-fg:    #19C2C2;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #0A0A0A;
  --bg-elevated: #141414;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #C0C0C0;
  --text-tertiary:   #A0A0A0;
  --text-on-primary: #000000;       /* 흰 버튼 위 검정 */
  --text-disabled:   #6A6A6A;

  /* Border */
  --border-default: #1F1F1F;
  --border-subtle:  #141414;
  --border-strong:  #3A3A3A;
  --border-focus:   #19C2C2;
}

[data-theme="light"] {
  --bg-base: #FFFFFF;
  --bg-subtle: #F5F5F5;
  --bg-elevated: #FFFFFF;
  --text-primary: #000000;
  --text-secondary: #1F1F1F;
  --text-tertiary: #6A6A6A;
  --text-on-primary: #FFFFFF;
  --border-default: #E5E5E5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter / Tidal Sans / Helvetica Now 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 64px / 800 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 22px / 700 / 1.3 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0.005em
  - Caption: 10px / 700 / 1.2 / 0.16em uppercase (품질 배지)

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
- **Container**: max-width 1320px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 0;          /* 시그니처: 카드 직각 */
--radius-md: 2px;
--radius-lg: 4px;
--radius-xl: 8px;
--radius-full: 9999px;   /* 버튼만 pill */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.45);
--shadow-lg: 0 16px 32px rgba(0,0,0,0.55);
--shadow-cyan: 0 0 0 1px #19C2C2;   /* 시그니처 cyan 보더 */
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square (Tidal 시그니처)
- **추천 라이브러리**: Phosphor Light / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 Inter, 'Pretendard', sans-serif; letter-spacing: 0.04em; text-transform: uppercase; border-radius: 9999px; padding: 12px 26px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: #FFFFFF; color: #000; }
.btn-primary:hover { background: #E5E5E5; }
.btn-secondary { background: transparent; color: #fff; border: 1px solid #fff; }
.btn-secondary:hover { background: rgba(255,255,255,0.10); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); border: 1px solid var(--color-secondary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-disabled { background: var(--color-neutral-700); color: var(--text-disabled); }
.btn-play { width: 56px; height: 56px; border-radius: 50%; background: #fff; color: #000; display: grid; place-items: center; font-size: 18px; }
```

**Input**
```css
.input { background: transparent; border: 0; border-bottom: 1px solid var(--border-strong); border-radius: 0; padding: 10px 0 10px 32px; color: #fff; font: 400 14px/1.2 inherit; }
.input:focus { outline: none; border-bottom-color: var(--color-secondary-500); }
.input::placeholder { color: var(--text-tertiary); }
```

**Card (Album, sharp)**
```css
.album { background: transparent; cursor: pointer; }
.album .cover { aspect-ratio: 1; background: linear-gradient(135deg,#1A1A1A,#000); border: 1px solid var(--border-default); position: relative; }
.album .cover .quality { position: absolute; right: 8px; top: 8px; font: 700 10px/1 inherit; letter-spacing: 0.16em; color: var(--color-secondary-500); border: 1px solid var(--color-secondary-500); padding: 3px 5px; }
.album h3 { margin: 10px 0 2px; font: 600 14px/1.3 inherit; color: #fff; }
.album .by { font: 400 12px/1.3 inherit; color: var(--text-tertiary); }
.card { background: var(--bg-elevated); border-radius: 0; padding: 24px; border: 1px solid var(--border-default); }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 0; font: 700 10px/1.4 inherit; letter-spacing: 0.16em; text-transform: uppercase; border: 1px solid currentColor; }
.tag-master  { color: var(--color-secondary-500); }     /* MASTER */
.tag-hires   { color: #FFD24F; }                        /* HiRes */
.tag-max     { color: var(--color-secondary-500); background: rgba(25,194,194,0.10); }
.tag-dolby   { color: #fff; }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 240px; background: #0A0A0A; padding: 18px 12px; border-right: 1px solid var(--border-default); }
.sidebar .brand { font: 800 16px/1 inherit; letter-spacing: 0.04em; padding: 8px 14px; margin-bottom: 18px; }
.sidebar .item { display: flex; align-items: center; gap: 12px; padding: 10px 14px; font: 500 13px/1.3 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .item:hover { color: #fff; }
.sidebar .item.active { color: var(--color-secondary-500); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 380ms;
--ease-out: cubic-bezier(0.2, 0, 0, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 카드 모서리에 라운드 사용 금지 — sharp(0px)가 시그니처
2. 본문에 채도 높은 색상 사용 금지 — 모노크롬 + cyan 액센트만
3. 그라데이션 배경 사용 금지 — 페이지는 무광 검정
4. 품질 배지 (Master/HiRes/MAX) 생략 금지 — 오디오필 정체성
5. 버튼에 round(8~16px) 사용 금지 — pill(9999px) 또는 sharp만

### ⑫ 시그니처 적용 예시 (Album page)
```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', sans-serif; background: #000; color: #fff; min-height: 100vh; }
  .topbar { display: flex; align-items: center; padding: 14px 24px; border-bottom: 1px solid #1F1F1F; gap: 24px; }
  .topbar .brand { font: 800 18px/1 inherit; letter-spacing: 0.04em; }
  .topbar .nav { display: flex; gap: 22px; font: 500 13px/1 inherit; letter-spacing: 0.04em; text-transform: uppercase; color: #A0A0A0; }
  .topbar .nav .a.active { color: #fff; }
  .topbar .right { margin-left: auto; font: 700 11px/1 inherit; letter-spacing: 0.16em; color: #19C2C2; }
  .hero { display: grid; grid-template-columns: 280px 1fr; gap: 32px; padding: 40px 24px; }
  .hero .cover { aspect-ratio: 1; background: linear-gradient(135deg,#1A1A1A,#000); border: 1px solid #1F1F1F; position: relative; }
  .hero .cover .max { position: absolute; right: 10px; top: 10px; font: 700 10px/1 inherit; letter-spacing: 0.16em; color: #19C2C2; border: 1px solid #19C2C2; padding: 3px 5px; }
  .hero .info { display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 12px; }
  .hero .info .pre { font: 700 11px/1 inherit; letter-spacing: 0.16em; color: #A0A0A0; text-transform: uppercase; margin-bottom: 8px; }
  .hero .info h1 { margin: 0 0 6px; font: 800 48px/1.1 inherit; letter-spacing: -0.02em; }
  .hero .info .by { font: 500 16px/1.4 inherit; color: #C0C0C0; margin-bottom: 18px; }
  .hero .info .meta { font: 400 13px/1.4 inherit; color: #A0A0A0; }
  .hero .info .quality-row { display: flex; gap: 8px; margin-top: 18px; }
  .hero .info .tag { padding: 4px 8px; font: 700 10px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; border: 1px solid #19C2C2; color: #19C2C2; }
  .hero .info .tag.dolby { border-color: #fff; color: #fff; }
  .actions { padding: 0 24px; display: flex; gap: 12px; margin-bottom: 32px; align-items: center; }
  .btn { font: 700 12px/1 inherit; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 9999px; padding: 14px 28px; border: 0; cursor: pointer; }
  .btn-white { background: #fff; color: #000; }
  .btn-line { background: transparent; color: #fff; border: 1px solid #fff; }
  .tracks { padding: 0 24px 60px; }
  .tracks .row { display: grid; grid-template-columns: 28px 1fr auto auto auto; gap: 16px; padding: 14px 12px; border-bottom: 1px solid #141414; align-items: center; font: 400 13px/1.4 inherit; }
  .tracks .row .num { color: #A0A0A0; }
  .tracks .row .name { color: #fff; font-weight: 500; }
  .tracks .row .q { font: 700 10px/1 inherit; letter-spacing: 0.16em; color: #19C2C2; border: 1px solid #19C2C2; padding: 3px 5px; }
  .tracks .row .time { color: #A0A0A0; font-variant-numeric: tabular-nums; }
  .tracks .row:hover { background: #0A0A0A; }
</style>

<header class="topbar">
  <div class="brand">TIDAL</div>
  <div class="nav">
    <span class="a active">홈</span>
    <span class="a">탐색</span>
    <span class="a">내 컬렉션</span>
    <span class="a">비디오</span>
  </div>
  <div class="right">MAX 활성</div>
</header>

<section class="hero">
  <div class="cover"><span class="max">MAX</span></div>
  <div class="info">
    <div class="pre">앨범 · 2007</div>
    <h1>In Rainbows</h1>
    <div class="by">Radiohead</div>
    <div class="meta">10곡 · 42분 · FLAC 24 bit / 96 kHz</div>
    <div class="quality-row"><span class="tag">MASTER</span><span class="tag dolby">DOLBY ATMOS</span></div>
  </div>
</section>

<div class="actions">
  <button class="btn btn-white">▶ 재생</button>
  <button class="btn btn-line">＋ 컬렉션</button>
  <button class="btn btn-line">⋯</button>
</div>

<section class="tracks">
  <div class="row"><span class="num">1</span><span class="name">15 Step</span><span class="q">MAX</span><span class="time">3:58</span><span class="num">⋯</span></div>
  <div class="row"><span class="num">2</span><span class="name">Bodysnatchers</span><span class="q">MAX</span><span class="time">4:02</span><span class="num">⋯</span></div>
  <div class="row"><span class="num">3</span><span class="name">Nude</span><span class="q">MAX</span><span class="time">4:15</span><span class="num">⋯</span></div>
  <div class="row"><span class="num">4</span><span class="name">Weird Fishes/Arpeggi</span><span class="q">MAX</span><span class="time">5:18</span><span class="num">⋯</span></div>
</section>
```
