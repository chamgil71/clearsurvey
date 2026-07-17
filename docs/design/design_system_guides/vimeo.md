---
brand: Vimeo
brand_ko: 비메오
slug: vimeo
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - creative-tools

color_tone: cool
primary_color_hex: "#00ADEF"
primary_color_name: "Vimeo Blue"
mood:
  - 크리에이터
  - 미니멀
  - 큐레이션

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: spacious
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2004
last_major_revision: 2024
signature_keyword: "흰 캔버스 + 시안(#00ADEF) 액센트 + 큐레이션 Staff Pick 라벨로 차분한 크리에이터 톤"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#fff;color:#1A2E35;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #EFF1F3;">
      <span style="display:inline-block;width:22px;height:14px;position:relative;">
        <span style="position:absolute;left:0;top:1px;width:0;height:0;border-left:9px solid #00ADEF;border-top:6px solid transparent;border-bottom:6px solid transparent;"></span>
      </span>
      <strong style="font-size:13px;font-weight:700;letter-spacing:-0.01em;">Vimeo</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="aspect-ratio:16/9;background:linear-gradient(135deg,#1A2E35 0%,#0D1A20 100%);border-radius:4px;position:relative;">
        <span style="position:absolute;left:8px;top:8px;background:#00ADEF;color:#fff;font-size:8px;font-weight:700;padding:2px 5px;border-radius:2px;letter-spacing:0.04em;">STAFF PICK</span>
        <span style="position:absolute;right:8px;bottom:8px;background:rgba(0,0,0,0.7);color:#fff;font-size:9px;font-weight:600;padding:2px 5px;border-radius:2px;">3:42</span>
      </div>
      <div style="font-size:11px;font-weight:600;color:#1A2E35;line-height:1.3;">Coastal Drift — 16mm Travelogue</div>
      <div style="font-size:9px;color:#637076;">Lena Park · 4.2K views</div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #EFF1F3;display:flex;align-items:center;gap:8px;">
      <span style="font-size:10px;color:#637076;">♥ 142</span>
      <span style="font-size:10px;color:#637076;">💬 18</span>
      <span style="font-size:10px;color:#00ADEF;margin-left:auto;font-weight:600;">Follow</span>
    </div>
  </div>

sources:
  - https://vimeo.com/
  - https://vimeo.com/brand
---

### ① 브랜드 DNA
- **브랜드명**: Vimeo
- **한 줄 정체성**: 크리에이터·필름메이커 중심의 큐레이션 동영상 호스팅·플랫폼
- **공식 디자인 철학**: "Vimeo is for video lovers" — 광고 없는 미니멀, 큐레이션 우선
- **시그니처 요소 1개**: 흰 캔버스 + 시안 Vimeo Blue(#00ADEF) + Staff Pick 큐레이션 라벨. YouTube의 빨강 알고리즘 추천 톤과 정반대의 차분한 큐레이션 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 크리에이터, 미니멀, 큐레이션
- **무드 설명**: 흰 캔버스가 기본. 시안 블루는 액션과 링크에만. Staff Pick 라벨이 큐레이션의 시그니처. 광고도 자동재생도 없는 차분한 호흡.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Spacious — 카드 간격 넉넉
- **모서리 성향**: Soft (4~8px)
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Vimeo Blue */
  --color-primary-50:  #E0F5FE;
  --color-primary-100: #B0E3FA;
  --color-primary-200: #7CCFF5;
  --color-primary-300: #44BCF1;
  --color-primary-400: #1FB2EF;
  --color-primary-500: #00ADEF;   /* Vimeo Blue */
  --color-primary-600: #0090C9;
  --color-primary-700: #006FA0;
  --color-primary-800: #004F73;
  --color-primary-900: #003049;

  /* Secondary - Vimeo Deep Navy (브랜드 다크) */
  --color-secondary-500: #1A2E35;

  /* Neutral - cool gray scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F9FA;
  --color-neutral-100:  #EFF1F3;
  --color-neutral-200:  #DCE0E4;
  --color-neutral-300:  #B6BDC4;
  --color-neutral-500:  #637076;
  --color-neutral-700:  #2D3A40;
  --color-neutral-800:  #1F2A30;
  --color-neutral-900:  #1A2E35;
  --color-neutral-1000: #0D1A20;

  /* Semantic */
  --color-success-bg: #E6F7EC;
  --color-success-fg: #1FA756;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B27212;
  --color-error-bg:   #FCE0E0;
  --color-error-fg:   #D63D3D;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #00ADEF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F9FA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,46,53,0.50);

  /* Text */
  --text-primary:    #1A2E35;
  --text-secondary:  #2D3A40;
  --text-tertiary:   #637076;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B6BDC4;

  /* Border */
  --border-default: #EFF1F3;
  --border-subtle:  #F7F9FA;
  --border-strong:  #DCE0E4;
  --border-focus:   #00ADEF;
}

[data-theme="dark"] {
  --bg-base: #1A2E35;
  --bg-subtle: #1F2A30;
  --bg-elevated: #2D3A40;
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255,255,255,0.85);
  --text-tertiary: rgba(255,255,255,0.6);
  --border-default: rgba(255,255,255,0.10);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter / Apercu (브랜드) 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 56px / 700 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 22px / 600 / 1.3 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.04em

### ⑤ 스페이싱
- **Base unit**: 4px (Spacious 톤)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 28px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 28px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(26,46,53,0.05);
--shadow-md: 0 4px 12px rgba(26,46,53,0.08);
--shadow-lg: 0 12px 28px rgba(26,46,53,0.12);
--shadow-xl: 0 20px 48px rgba(26,46,53,0.16);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, 'Pretendard', sans-serif; border-radius: 4px; padding: 11px 22px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); border-color: var(--color-primary-500); color: var(--color-primary-500); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-follow { background: var(--color-primary-500); color: #fff; font-weight: 700; padding: 8px 16px; border-radius: 4px; }
.btn-follow.following { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-play { width: 64px; height: 64px; border-radius: 50%; background: rgba(255,255,255,0.9); color: var(--color-secondary-500); display: grid; place-items: center; font-size: 22px; box-shadow: var(--shadow-md); }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-strong); border-radius: 4px; padding: 10px 14px 10px 38px; color: var(--text-primary); font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(0,173,239,0.15); }
```

**Card (Video)**
```css
.video { background: transparent; cursor: pointer; }
.video .thumb { aspect-ratio: 16/9; background: linear-gradient(135deg, var(--color-neutral-900), var(--color-neutral-1000)); border-radius: 4px; position: relative; overflow: hidden; transition: transform 250ms ease; }
.video:hover .thumb { transform: translateY(-2px); }
.video .thumb .duration { position: absolute; right: 8px; bottom: 8px; background: rgba(0,0,0,0.7); color: #fff; font: 600 11px/1 inherit; padding: 3px 6px; border-radius: 2px; }
.video .thumb .staff { position: absolute; left: 8px; top: 8px; background: var(--color-primary-500); color: #fff; font: 700 10px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 6px; border-radius: 2px; }
.video h3 { margin: 12px 0 4px; font: 600 15px/1.4 inherit; color: var(--text-primary); }
.video .by { font: 500 13px/1.3 inherit; color: var(--text-tertiary); }
.video .stats { display: flex; gap: 12px; font: 500 12px/1 inherit; color: var(--text-tertiary); margin-top: 6px; }
.card { background: #fff; border: 1px solid var(--border-default); border-radius: 8px; padding: 24px; }
.card-elevated { box-shadow: var(--shadow-md); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 2px; font: 600 11px/1.4 inherit; letter-spacing: 0.04em; }
.tag-solid     { background: var(--color-primary-500); color: #fff; }
.tag-subtle    { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline   { border: 1px solid var(--border-strong); color: var(--text-secondary); }
.tag-staff     { background: var(--color-primary-500); color: #fff; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; }
.tag-pro       { background: var(--color-secondary-500); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; border-bottom: 1px solid var(--border-default); padding: 14px 28px; display: flex; align-items: center; gap: 28px; font: 500 14px/1 inherit; }
.topbar .brand { display: flex; align-items: center; gap: 8px; font: 700 18px/1 inherit; color: var(--text-primary); }
.topbar .brand .v { color: var(--color-primary-500); }
.topbar .nav a { color: var(--text-secondary); cursor: pointer; }
.topbar .nav a:hover { color: var(--color-primary-500); }
.topbar .nav a.active { color: var(--color-primary-500); font-weight: 600; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. 자동 재생·광고 끼워넣기 금지 — Vimeo의 "광고 없는" 정체성 위반
2. 시안 외 다른 강조색 추가 금지 — Single accent
3. 카드 라운드 16px+ 사용 금지 — 4~8px Soft
4. Staff Pick 라벨을 형광/원색으로 변경 금지 — Vimeo Blue 고정
5. 다크 캔버스를 기본으로 사용 금지 — 라이트가 기본 (다크는 옵션)

### ⑫ 시그니처 적용 예시 (Watch + Staff Picks)
```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', sans-serif; background: #F7F9FA; color: #1A2E35; min-height: 100vh; }
  .topbar { background: #fff; border-bottom: 1px solid #EFF1F3; padding: 16px 28px; display: flex; align-items: center; gap: 28px; font-weight: 500; font-size: 14px; }
  .topbar .brand { display: flex; align-items: center; gap: 6px; font: 700 22px/1 inherit; }
  .topbar .brand .triangle { width: 0; height: 0; border-left: 14px solid #00ADEF; border-top: 9px solid transparent; border-bottom: 9px solid transparent; }
  .topbar .nav { display: flex; gap: 22px; color: #2D3A40; }
  .topbar .nav .a.active { color: #00ADEF; font-weight: 600; }
  .topbar .right { margin-left: auto; display: flex; gap: 12px; align-items: center; }
  .btn { font-family: inherit; font-size: 13px; font-weight: 600; border-radius: 4px; padding: 9px 18px; border: 0; cursor: pointer; }
  .btn-line { background: #fff; color: #1A2E35; border: 1px solid #DCE0E4; }
  .btn-blue { background: #00ADEF; color: #fff; }
  .container { max-width: 1280px; margin: 0 auto; padding: 32px 28px; display: grid; grid-template-columns: 1fr 320px; gap: 32px; }
  .player .frame { aspect-ratio: 16/9; background: linear-gradient(135deg, #1A2E35, #0D1A20); border-radius: 4px; position: relative; overflow: hidden; }
  .player .frame .play { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 64px; height: 64px; border-radius: 50%; background: rgba(255,255,255,0.95); display: grid; place-items: center; color: #1A2E35; font-size: 22px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); cursor: pointer; }
  .player .frame .staff { position: absolute; left: 12px; top: 12px; background: #00ADEF; color: #fff; font: 700 11px/1 inherit; letter-spacing: 0.08em; text-transform: uppercase; padding: 5px 8px; border-radius: 2px; }
  .player .frame .controls { position: absolute; left: 12px; right: 12px; bottom: 12px; display: flex; align-items: center; gap: 12px; color: #fff; }
  .player .frame .progress { flex: 1; height: 3px; background: rgba(255,255,255,0.25); border-radius: 9999px; overflow: hidden; }
  .player .frame .progress .bar { width: 28%; height: 100%; background: #00ADEF; }
  .player .meta { padding: 22px 0; }
  .player h1 { margin: 0 0 8px; font: 700 24px/1.3 inherit; color: #1A2E35; }
  .player .by-row { display: flex; align-items: center; gap: 12px; padding-bottom: 22px; border-bottom: 1px solid #EFF1F3; }
  .player .by-row .av { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg,#00ADEF,#1A2E35); }
  .player .by-row .who strong { display: block; font: 600 14px/1.3 inherit; }
  .player .by-row .who .sub { font: 500 12px/1.3 inherit; color: #637076; }
  .player .by-row .follow { margin-left: auto; }
  .player .description { padding: 22px 0; font: 400 15px/1.6 inherit; color: #2D3A40; max-width: 720px; }
  .player .stats { display: flex; gap: 22px; font: 500 13px/1 inherit; color: #637076; padding-bottom: 22px; border-bottom: 1px solid #EFF1F3; }
  .sidebar h2 { font: 700 14px/1 inherit; letter-spacing: 0.04em; text-transform: uppercase; color: #1A2E35; margin: 0 0 14px; }
  .sidebar .video { display: grid; grid-template-columns: 140px 1fr; gap: 12px; padding: 10px 0; cursor: pointer; }
  .sidebar .video .thumb { aspect-ratio: 16/9; background: linear-gradient(135deg,#1A2E35,#0D1A20); border-radius: 4px; position: relative; }
  .sidebar .video .thumb .duration { position: absolute; right: 4px; bottom: 4px; background: rgba(0,0,0,0.7); color: #fff; font: 600 10px/1 inherit; padding: 2px 4px; border-radius: 2px; }
  .sidebar .video .thumb .staff-mini { position: absolute; left: 4px; top: 4px; background: #00ADEF; color: #fff; font: 700 8px/1 inherit; letter-spacing: 0.04em; padding: 2px 4px; border-radius: 2px; text-transform: uppercase; }
  .sidebar .video h3 { margin: 0 0 4px; font: 600 13px/1.35 inherit; color: #1A2E35; }
  .sidebar .video .by { font: 500 11px/1.3 inherit; color: #637076; }
</style>

<header class="topbar">
  <div class="brand"><span class="triangle"></span>Vimeo</div>
  <div class="nav">
    <span class="a active">Watch</span>
    <span class="a">Categories</span>
    <span class="a">Channels</span>
    <span class="a">Staff Picks</span>
  </div>
  <div class="right">
    <button class="btn btn-line">로그인</button>
    <button class="btn btn-blue">업로드</button>
  </div>
</header>

<div class="container">
  <section class="player">
    <div class="frame">
      <span class="staff">Staff Pick</span>
      <div class="play">▶</div>
      <div class="controls">
        <span>0:42</span>
        <div class="progress"><div class="bar"></div></div>
        <span>3:42</span>
        <span>HD</span>
        <span>⛶</span>
      </div>
    </div>
    <div class="meta">
      <h1>Coastal Drift — A 16mm Travelogue</h1>
      <div class="by-row">
        <div class="av"></div>
        <div class="who">
          <strong>Lena Park</strong>
          <span class="sub">Filmmaker · Seoul · 1.2K followers</span>
        </div>
        <button class="btn btn-blue follow">＋ Follow</button>
      </div>
      <p class="description">동해안 일주, 16mm 필름으로 천천히 담아낸 일주일. 빛과 모래의 결을 기록합니다.</p>
      <div class="stats">
        <span>♥ 4,212</span>
        <span>💬 142</span>
        <span>4,233 views · 어제</span>
      </div>
    </div>
  </section>
  <aside class="sidebar">
    <h2>More Staff Picks</h2>
    <div class="video"><div class="thumb" style="background:linear-gradient(135deg,#264653,#0D1A20);"><span class="staff-mini">Staff Pick</span><span class="duration">2:18</span></div><div><h3>Quiet Mornings — 35mm Reel</h3><div class="by">Jin Han · 18K views</div></div></div>
    <div class="video"><div class="thumb" style="background:linear-gradient(135deg,#1F3A4D,#0D1A20);"><span class="staff-mini">Staff Pick</span><span class="duration">5:48</span></div><div><h3>The Last Train</h3><div class="by">Hye Won · 8.3K views</div></div></div>
    <div class="video"><div class="thumb" style="background:linear-gradient(135deg,#1A2E35,#0D1A20);"><span class="duration">4:02</span></div><div><h3>Letters Across the Sea</h3><div class="by">Studio Pause · 6.1K views</div></div></div>
    <div class="video"><div class="thumb" style="background:linear-gradient(135deg,#2D3A40,#0D1A20);"><span class="staff-mini">Staff Pick</span><span class="duration">3:24</span></div><div><h3>Field Notes — Iceland</h3><div class="by">Annika Volt · 22K views</div></div></div>
  </aside>
</div>
```
