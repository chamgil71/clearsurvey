---
brand: Spotify
brand_ko: 스포티파이
slug: spotify
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#1DB954"
primary_color_name: "Spotify Green"
mood:
  - 음악 우선
  - 다크
  - 활기참

font_category: sans-serif
font_primary: Spotify Circular
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2008
last_major_revision: 2024
signature_keyword: "검정 캔버스에 Spotify Green과 앨범 커버 그라데이션의 음악 톤"

hero_html: |
  <div style="font-family:'Spotify Circular',Inter,'Pretendard',-apple-system,sans-serif;background:#000000;color:#FFFFFF;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:linear-gradient(180deg,#1F1F1F 0%,#000 100%);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:20px;height:20px;background:#1DB954;border-radius:50%;position:relative;">
        <span style="position:absolute;left:5px;top:6px;width:10px;height:1.5px;background:#000;border-radius:9999px;"></span>
        <span style="position:absolute;left:6px;top:9px;width:8px;height:1.5px;background:#000;border-radius:9999px;"></span>
        <span style="position:absolute;left:7px;top:12px;width:6px;height:1.5px;background:#000;border-radius:9999px;"></span>
      </span>
      <strong style="font-size:13px;font-weight:700;">Spotify</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#1DB954 0%,#191414 100%);border-radius:6px;display:flex;align-items:flex-end;padding:14px;font-size:11px;font-weight:700;color:#fff;box-shadow:0 12px 40px rgba(29,185,84,0.30);max-width:140px;align-self:center;">
        <div>
          <div style="font-size:9px;font-weight:600;opacity:0.85;">PLAYLIST</div>
          <div style="font-size:14px;font-weight:800;line-height:1.1;letter-spacing:-0.01em;margin-top:4px;">Daily Mix</div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;">
        <strong style="font-size:14px;">Daily Mix 1</strong>
        <span style="color:#A7A7A7;">28 songs</span>
      </div>
    </div>
    <div style="background:#181818;border-top:1px solid #282828;padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <div style="width:36px;height:36px;border-radius:4px;background:linear-gradient(135deg,#FF6B9D,#1DB954);"></div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:11px;font-weight:600;color:#fff;line-height:1.2;">Yebba</div>
        <div style="font-size:10px;color:#A7A7A7;">Distance</div>
      </div>
      <span style="width:32px;height:32px;border-radius:50%;background:#FFFFFF;color:#000;display:grid;place-items:center;font-size:11px;font-weight:700;">▶</span>
    </div>
  </div>

sources:
  - https://www.spotify.com/
  - https://newsroom.spotify.com/company-info/
  - https://developer.spotify.com/
---

### ① 브랜드 DNA
- **브랜드명**: Spotify
- **한 줄 정체성**: 음악과 팟캐스트의 글로벌 스트리밍 — 발견과 큐레이션 중심
- **공식 디자인 철학**: "All sound, all the time — vibrant, personal, audio-first"
- **시그니처 요소 1개**: Spotify Green(#1DB954) + 검정 캔버스(#000) + 앨범 커버 컬러를 페이지로 추출하는 동적 그라데이션

### ② 톤 & 무드
- **핵심 키워드 3개**: 음악 우선, 다크, 활기참
- **무드 설명**: 검정 캔버스가 기본. 강조는 Spotify Green. 페이지 상단은 앨범 커버에서 추출한 색이 그라데이션으로 흘러 들어와 음악이 시각화된다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (4~16px, 큰 카드)
- **평면성**: Layered — 그라데이션 + 부드러운 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Spotify Green */
  --color-primary-50:  #E5F8EE;
  --color-primary-100: #C2F0D6;
  --color-primary-200: #84E0AE;
  --color-primary-300: #4DD180;
  --color-primary-400: #34C465;
  --color-primary-500: #1DB954;  /* Spotify Green */
  --color-primary-600: #1AA049;
  --color-primary-700: #14803A;
  --color-primary-800: #0E5F2B;
  --color-primary-900: #073C1B;

  /* Secondary - Spotify deep dark */
  --color-secondary-500: #191414;

  /* Neutral - Spotify dark scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #B3B3B3;
  --color-neutral-200:  #A7A7A7;
  --color-neutral-300:  #727272;
  --color-neutral-500:  #535353;
  --color-neutral-700:  #404040;
  --color-neutral-800:  #282828;     /* card */
  --color-neutral-900:  #181818;     /* now playing bar */
  --color-neutral-1000: #000000;     /* canvas */

  /* Semantic */
  --color-success-bg: #E5F8EE;
  --color-success-fg: #1DB954;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #F59E0B;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #E22134;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #4287D9;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #191414;
  --text-secondary:  #535353;
  --text-tertiary:   #727272;
  --text-on-primary: #000000;       /* Green 위에는 검정 */
  --text-disabled:   #B3B3B3;

  /* Border */
  --border-default: #E0E0E0;
  --border-subtle:  #F0F0F0;
  --border-strong:  #B3B3B3;
  --border-focus:   #1DB954;
}

[data-theme="dark"] {
  /* Spotify 시그니처 다크 (기본) */
  --bg-base: #000000;
  --bg-subtle: #121212;
  --bg-elevated: #181818;
  --bg-overlay: rgba(0,0,0,0.85);
  --text-primary: #FFFFFF;
  --text-secondary: #A7A7A7;
  --text-tertiary: #727272;
  --border-default: #282828;
  --border-subtle: #181818;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Spotify Circular (자체) / Circular Std — 폴백 -apple-system, "Helvetica Neue"
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 96px / 800 / 1.0 / -0.04em (artist hero)
  - H1: 56px / 800 / 1.05 / -0.02em
  - H2: 28px / 700 / 1.2 / -0.01em
  - H3: 20px / 700 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 600 / 1.27 / 0

### ⑤ 스페이싱
- **Base unit**: 4px (8 grid)
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
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.20);
--shadow-md: 0 4px 12px rgba(0,0,0,0.30);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.40);
--shadow-xl: 0 24px 48px rgba(29,185,84,0.30);
```

### ⑧ Iconography
- **스타일**: Filled (재생 컨트롤) + Outline (기타)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 'Spotify Circular', -apple-system, 'Pretendard', sans-serif;
  border-radius: 9999px;       /* Spotify 시그니처 pill */
  padding: 0 28px;
  height: 44px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: transform 100ms ease, background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); transform: scale(1.04); }
.btn-primary:active { transform: scale(0.98); }
.btn-primary:disabled { background: var(--color-neutral-700); color: var(--text-disabled); transform: none; }
.btn-secondary { background: transparent; color: #fff; border: 1px solid #B3B3B3; }
.btn-secondary:hover { border-color: #fff; transform: scale(1.04); }
.btn-ghost { background: transparent; color: #fff; }
.btn-danger { background: var(--color-error-fg); color: #fff; }

/* Play FAB (시그니처) */
.btn-play { width: 56px; height: 56px; border-radius: 50%; background: var(--color-primary-500); color: #000; display: grid; place-items: center; font-size: 22px; box-shadow: var(--shadow-md); cursor: pointer; }
.btn-play:hover { transform: scale(1.06); background: var(--color-primary-400); }
```

**Input**
```css
.input { background: #2A2A2A; border: 0; border-radius: 9999px; padding: 12px 18px 12px 44px; color: #fff; font-size: 14px; }
.input:focus { outline: 2px solid #fff; outline-offset: -2px; }
```

**Card** (Album/Playlist card)
```css
.album { background: var(--bg-elevated); border-radius: var(--radius-md); padding: 12px; transition: background 200ms ease; cursor: pointer; }
.album:hover { background: var(--color-neutral-700); }
.album .cover { aspect-ratio: 1; border-radius: 4px; box-shadow: var(--shadow-md); margin-bottom: 12px; }
.album h3 { font-size: 14px; font-weight: 700; margin: 0; color: #fff; }
.album .sub { font-size: 12px; color: var(--text-secondary); margin-top: 4px; }
.card { background: var(--bg-elevated); border-radius: var(--radius-md); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; text-transform: uppercase; letter-spacing: 0.04em; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid #B3B3B3; color: #fff; }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 240px; background: #000; padding: 8px; height: 100vh; }
.sidebar .item { display: flex; align-items: center; gap: 14px; padding: 8px 12px; border-radius: 4px; font-size: 14px; font-weight: 700; color: #B3B3B3; cursor: pointer; }
.sidebar .item:hover { color: #fff; }
.sidebar .item.active { color: #fff; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
/* Spotify 시그니처: play 버튼 hover scale */
--ease-play: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. brand Green을 본문 텍스트에 사용 금지 — 액션과 active 신호에만
2. 페이지 캔버스를 흰색으로 변경 금지 — 다크가 시그니처
3. button을 sharp 사각으로 변경 금지 — pill (9999px)
4. 앨범 커버 라운드를 16px+ 변경 금지 — 4px이 표준
5. play 버튼을 outline 스타일로 변경 금지 — filled green이 시그니처

### ⑫ 시그니처 적용 예시 (Web player)

```html
<style>
  body { margin: 0; font-family: 'Spotify Circular', -apple-system, 'Pretendard', sans-serif; color: #fff; background: #000; }
  .layout { display: grid; grid-template-columns: 240px 1fr; grid-template-rows: 1fr 80px; height: 100vh; }
  .sidebar { background: #000; padding: 8px; grid-row: 1; }
  .sidebar .top { background: #121212; border-radius: 8px; padding: 16px 12px; margin-bottom: 8px; }
  .sidebar .item { display: flex; align-items: center; gap: 14px; padding: 8px 4px; font-size: 14px; font-weight: 700; color: #B3B3B3; cursor: pointer; }
  .sidebar .item:hover, .sidebar .item.active { color: #fff; }
  .main { background: linear-gradient(180deg, #1DB954 0%, #121212 200px); padding: 16px 24px; overflow-y: auto; grid-row: 1; }
  .topbar { display: flex; gap: 12px; align-items: center; margin-bottom: 24px; }
  .topbar .nav-btn { width: 32px; height: 32px; border-radius: 50%; background: rgba(0,0,0,0.7); display: grid; place-items: center; cursor: pointer; }
  .topbar .search { flex: 1; max-width: 360px; background: #2A2A2A; border-radius: 9999px; padding: 12px 18px 12px 44px; font-size: 14px; color: #fff; position: relative; }
  .topbar .search::before { content:"🔍"; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); }
  .hero { display: flex; align-items: flex-end; gap: 24px; margin-bottom: 32px; }
  .hero .cover { width: 200px; aspect-ratio: 1; background: linear-gradient(135deg, #FF6B9D, #1DB954); border-radius: 4px; box-shadow: 0 16px 40px rgba(0,0,0,0.6); }
  .hero h1 { font-size: 64px; font-weight: 800; margin: 0; line-height: 1.0; letter-spacing: -0.02em; }
  .hero .meta { font-size: 13px; color: #fff; margin-top: 8px; opacity: 0.85; }
  .actions { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
  .play-fab { width: 56px; height: 56px; border-radius: 50%; background: #1DB954; color: #000; display: grid; place-items: center; font-size: 24px; cursor: pointer; box-shadow: 0 8px 24px rgba(0,0,0,0.4); transition: transform 100ms cubic-bezier(0.34,1.56,0.64,1); }
  .play-fab:hover { transform: scale(1.06); background: #34C465; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; }
  .album { background: #181818; border-radius: 8px; padding: 14px; cursor: pointer; transition: background 200ms ease; position: relative; }
  .album:hover { background: #282828; }
  .album:hover .play-fab-sm { opacity: 1; transform: translateY(0); }
  .album .cover { aspect-ratio: 1; border-radius: 4px; box-shadow: 0 8px 16px rgba(0,0,0,0.5); margin-bottom: 12px; }
  .album h3 { font-size: 14px; font-weight: 700; margin: 0; }
  .album .sub { font-size: 12px; color: #A7A7A7; margin-top: 4px; }
  .album .play-fab-sm { position: absolute; right: 22px; top: 130px; width: 40px; height: 40px; border-radius: 50%; background: #1DB954; color: #000; display: grid; place-items: center; font-size: 16px; opacity: 0; transition: opacity 200ms ease, transform 200ms ease; transform: translateY(8px); }
  .now { background: #181818; border-top: 1px solid #282828; padding: 12px 16px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; align-items: center; grid-column: 1 / -1; grid-row: 2; }
  .now .track { display: flex; align-items: center; gap: 12px; }
  .now .track .cv { width: 56px; height: 56px; background: linear-gradient(135deg, #FF6B9D, #1DB954); border-radius: 4px; }
  .now .track strong { font-size: 14px; font-weight: 600; }
  .now .track .by { font-size: 12px; color: #A7A7A7; }
  .now .controls { display: flex; align-items: center; justify-content: center; gap: 16px; }
  .now .controls .play { width: 36px; height: 36px; border-radius: 50%; background: #fff; color: #000; display: grid; place-items: center; font-size: 14px; cursor: pointer; }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="top">
      <div class="item active">🏠 Home</div>
      <div class="item">🔍 Search</div>
    </div>
    <div class="top">
      <div class="item">📚 Your Library</div>
      <div class="item">+ Create Playlist</div>
      <div class="item">💚 Liked Songs</div>
    </div>
  </aside>
  <main class="main">
    <div class="topbar">
      <div class="nav-btn">‹</div>
      <div class="nav-btn">›</div>
      <div class="search">아티스트, 곡, 팟캐스트 검색</div>
    </div>
    <div class="hero">
      <div class="cover"></div>
      <div>
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">PLAYLIST</div>
        <h1>Daily Mix 1</h1>
        <div class="meta">Mina · 28곡 · 1시간 42분</div>
      </div>
    </div>
    <div class="actions">
      <div class="play-fab">▶</div>
      <span style="font-size:32px; color:#1DB954;">♥</span>
      <span style="font-size:24px; color:#A7A7A7;">⋯</span>
    </div>
    <h2 style="font-size:24px; font-weight:800; margin: 0 0 16px;">Made For You</h2>
    <div class="grid">
      <div class="album"><div class="cover" style="background:linear-gradient(135deg,#1DB954,#191414);"></div><h3>Daily Mix 2</h3><div class="sub">indie rock, post-punk</div><div class="play-fab-sm">▶</div></div>
      <div class="album"><div class="cover" style="background:linear-gradient(135deg,#FF6B9D,#1DB954);"></div><h3>Discover Weekly</h3><div class="sub">매주 월요일 업데이트</div><div class="play-fab-sm">▶</div></div>
      <div class="album"><div class="cover" style="background:linear-gradient(135deg,#FFC15B,#FF3008);"></div><h3>Release Radar</h3><div class="sub">새 앨범과 싱글</div><div class="play-fab-sm">▶</div></div>
      <div class="album"><div class="cover" style="background:linear-gradient(135deg,#7B68EE,#1DB954);"></div><h3>On Repeat</h3><div class="sub">최근 자주 들은 곡</div><div class="play-fab-sm">▶</div></div>
    </div>
  </main>
  <div class="now">
    <div class="track">
      <div class="cv"></div>
      <div><div><strong>Distance</strong></div><div class="by">Yebba</div></div>
      <span style="color:#A7A7A7;">♥</span>
    </div>
    <div class="controls">
      <span style="color:#A7A7A7;">↺</span>
      <span style="color:#A7A7A7;">⏮</span>
      <div class="play">▶</div>
      <span style="color:#A7A7A7;">⏭</span>
      <span style="color:#A7A7A7;">↻</span>
    </div>
    <div></div>
  </div>
</div>
```
