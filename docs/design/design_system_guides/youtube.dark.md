---
brand: YouTube
brand_ko: 유튜브
slug: youtube
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - social
  - consumer

color_tone: cool
primary_color_hex: "#FF0000"
primary_color_name: "YouTube Red"
mood:
  - 비디오 우선
  - 친근함
  - 글로벌

font_category: sans-serif
font_primary: Roboto
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2005
last_major_revision: 2024
signature_keyword: "Red 재생 버튼과 비디오 썸네일 그리드의 비디오 플랫폼 표준"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F9F9F9", "border": "#E5E5E5", "fg": "#0F0F0F", "fg_muted": "#606060", "accent": "#FF0000" },
    "dark":  { "bg": "#0F0F0F", "surface": "#1F1F1F", "border": "#303030", "fg": "#F1F1F1", "fg_muted": "#AAAAAA", "accent": "#FF0000" }
  }

hero_html: |
  <div style="font-family:Roboto,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-flex;align-items:center;gap:0;">
        <span style="display:inline-block;width:24px;height:18px;background:var(--card-accent);border-radius:5px;position:relative;">
          <span style="position:absolute;left:9px;top:5px;width:0;height:0;border-style:solid;border-width:4px 0 4px 7px;border-color:transparent transparent transparent #fff;"></span>
        </span>
        <strong style="font-size:15px;font-weight:700;letter-spacing:-0.04em;color:var(--card-fg);margin-left:4px;">YouTube</strong>
      </span>
      <span style="margin-left:auto;font-size:18px;cursor:pointer;">🔍</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div>
        <div style="aspect-ratio:16/9;background:linear-gradient(135deg,#FF0000,#0A0A0A);border-radius:12px;position:relative;display:grid;place-items:center;">
          <div style="width:48px;height:48px;border-radius:50%;background:rgba(0,0,0,0.7);display:grid;place-items:center;color:#fff;font-size:18px;">▶</div>
          <span style="position:absolute;right:6px;bottom:6px;background:rgba(0,0,0,0.85);color:#fff;padding:1px 5px;border-radius:3px;font-size:10px;font-weight:600;">12:34</span>
        </div>
        <div style="display:grid;grid-template-columns:32px 1fr;gap:8px;margin-top:8px;">
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#FF0000,#3EA6FF);"></div>
          <div>
            <div style="font-size:13px;font-weight:600;line-height:1.3;color:var(--card-fg);">디자인 시스템 입문 — 토큰부터 컴포넌트까지</div>
            <div style="font-size:11px;color:var(--card-fg-muted);margin-top:2px;">UX Studio · 조회수 24만회 · 2일 전</div>
          </div>
        </div>
      </div>
      <div>
        <div style="aspect-ratio:16/9;background:linear-gradient(135deg,#3EA6FF,#FFC107);border-radius:12px;position:relative;">
          <span style="position:absolute;right:6px;bottom:6px;background:rgba(0,0,0,0.85);color:#fff;padding:1px 5px;border-radius:3px;font-size:10px;font-weight:600;">8:42</span>
        </div>
        <div style="display:grid;grid-template-columns:32px 1fr;gap:8px;margin-top:8px;">
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#4FD68A,#FF0000);"></div>
          <div>
            <div style="font-size:13px;font-weight:600;line-height:1.3;color:var(--card-fg);">Figma 마스터 클래스</div>
            <div style="font-size:11px;color:var(--card-fg-muted);margin-top:2px;">Design Daily · 조회수 18만회</div>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.youtube.com/
  - https://about.youtube/
  - https://design.google/
---

### ① 브랜드 DNA
- **브랜드명**: YouTube
- **한 줄 정체성**: 글로벌 비디오 플랫폼 — Material Design 기반 비디오 우선 UX
- **공식 디자인 철학**: "Designed for every screen — playful, clear, video-first"
- **시그니처 요소 1개**: YouTube Red(#FF0000) 재생 버튼 + Roboto 폰트 + 비디오 썸네일 그리드의 표준

### ② 톤 & 무드
- **핵심 키워드 3개**: 비디오 우선, 친근함, 글로벌
- **무드 설명**: 흰 캔버스(또는 다크) + 빨간 재생 버튼 + 비디오 썸네일이 페이지의 90%. UI chrome은 절제되고 콘텐츠가 주인공.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 썸네일 위주
- **모서리 성향**: Round (12~24px Material 3 기조)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - YouTube Red (다크 화면 대비를 위해 램프 반전) */
  --color-primary-50:  #330000;
  --color-primary-100: #660000;
  --color-primary-200: #990000;
  --color-primary-300: #CC0000;
  --color-primary-400: #FF1A1A;
  --color-primary-500: #FF0000;  /* YouTube Red */
  --color-primary-600: #FF4D4D;
  --color-primary-700: #FF8080;
  --color-primary-800: #FFB8B8;
  --color-primary-900: #FFE5E5;

  /* Secondary - YouTube Blue (다크 링크/액션, 톤 보정) */
  --color-secondary-500: #3EA6FF;

  /* Neutral (다크 기준 반전 램프) */
  --color-neutral-0:    #0F0F0F;
  --color-neutral-50:   #1A1A1A;
  --color-neutral-100:  #272727;
  --color-neutral-200:  #303030;
  --color-neutral-300:  #3F3F3F;
  --color-neutral-500:  #717171;
  --color-neutral-700:  #AAAAAA;
  --color-neutral-800:  #CFCFCF;
  --color-neutral-900:  #F1F1F1;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #0E2A1A;
  --color-success-fg: #4FD68A;
  --color-warning-bg: #2E2310;
  --color-warning-fg: #F5B947;
  --color-error-bg:   #2E1314;
  --color-error-fg:   #FF6B6B;
  --color-info-bg:    #0C2336;
  --color-info-fg:    #3EA6FF;

  /* Surface */
  --bg-base:     #0F0F0F;
  --bg-subtle:   #1F1F1F;
  --bg-elevated: #2A2A2A;
  --bg-overlay:  rgba(0,0,0,0.70);

  /* Text */
  --text-primary:    #F1F1F1;
  --text-secondary:  #AAAAAA;
  --text-tertiary:   #717171;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #4A4A4A;

  /* Border */
  --border-default: #303030;
  --border-subtle:  #272727;
  --border-strong:  #4A4A4A;
  --border-focus:   #3EA6FF;
}

[data-theme="light"] {
  /* Primary - YouTube Red */
  --color-primary-50:  #FFE5E5;
  --color-primary-100: #FFB8B8;
  --color-primary-200: #FF8080;
  --color-primary-300: #FF4D4D;
  --color-primary-400: #FF1A1A;
  --color-primary-500: #FF0000;  /* YouTube Red */
  --color-primary-600: #CC0000;
  --color-primary-700: #990000;
  --color-primary-800: #660000;
  --color-primary-900: #330000;

  /* Secondary - YouTube Blue (subscription action) */
  --color-secondary-500: #065FD4;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9F9F9;
  --color-neutral-100:  #F2F2F2;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #CCCCCC;
  --color-neutral-500:  #909090;
  --color-neutral-700:  #606060;
  --color-neutral-800:  #3F3F3F;
  --color-neutral-900:  #0F0F0F;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FFE5E5;
  --color-error-fg:   #FF0000;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #065FD4;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F9F9F9;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #0F0F0F;
  --text-secondary:  #606060;
  --text-tertiary:   #909090;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #CCCCCC;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F2F2F2;
  --border-strong:  #CCCCCC;
  --border-focus:   #065FD4;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Roboto (Apache 2.0) — Material Design 기조
  - 한글: Pretendard (OFL) / Noto Sans KR (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 28px / 600 / 1.2 / -0.01em
  - H2: 20px / 600 / 1.25 / 0
  - H3: 16px / 600 / 1.3 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 12px / 500 / 1.33 / 0

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
- **Container**: fluid, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;    /* 비디오 썸네일 */
--radius-xl: 18px;
--radius-full: 9999px;   /* Subscribe 버튼 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.60);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.70);
```

### ⑧ Iconography
- **스타일**: Filled (재생 컨트롤) + Outline (메뉴) — Material Symbols
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Material Symbols (공식)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 Roboto, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-subscribe { background: var(--color-primary-500); color: #fff; }       /* 시그니처 */
.btn-subscribe.subscribed { background: var(--color-neutral-100); color: var(--text-primary); }
.btn-primary { background: var(--text-primary); color: var(--bg-base); }
.btn-primary:hover { opacity: 0.85; }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: 0; padding: 8px 14px; font-size: 14px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: inset 0 0 0 1px var(--border-focus); }
```

**Card** (Video card)
```css
.video { cursor: pointer; }
.video .thumb { aspect-ratio: 16/9; border-radius: var(--radius-lg); position: relative; overflow: hidden; }
.video .thumb .duration { position: absolute; right: 6px; bottom: 6px; background: rgba(0,0,0,0.85); color: #fff; padding: 1px 5px; border-radius: 3px; font-size: 12px; font-weight: 600; }
.video .meta { display: grid; grid-template-columns: 36px 1fr; gap: 12px; padding: 12px 0 0; }
.video .avatar { width: 36px; height: 36px; border-radius: 50%; }
.video h3 { font-size: 14px; font-weight: 600; line-height: 1.4; margin: 0; color: var(--text-primary); }
.video .channel { font-size: 12px; color: var(--text-secondary); margin-top: 4px; }
.card { background: var(--bg-base); border-radius: var(--radius-md); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 500; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-neutral-100); color: var(--text-primary); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-live    { background: var(--color-primary-500); color: #fff; }
.tag-live::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: #fff; }
```

**Navigation (Top + Sidebar)**
```css
.topnav { padding: 8px 16px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.sidebar { width: 240px; padding: 12px 8px; }
.sidebar .item { display: flex; align-items: center; gap: 14px; padding: 8px 12px; border-radius: var(--radius-lg); font-size: 14px; cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item.active { background: var(--bg-subtle); font-weight: 600; }
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
1. brand red를 본문 텍스트나 링크에 사용 금지 — 액션과 워드마크에만
2. 비디오 썸네일 라운드를 4px 미만으로 변경 금지 — 12px이 시그니처
3. Subscribe 버튼을 sharp 사각으로 변경 금지 — pill (9999px)
4. 채널 아바타를 사각으로 변경 금지 — circle 시그니처
5. 비디오 카드 사이에 광고 카드 색을 동일하게 사용 금지 — 식별 신호 보존

### ⑫ 시그니처 적용 예시 (Home grid)

```html
<style>
  body { margin: 0; font-family: Roboto, 'Pretendard', -apple-system, sans-serif; color: #F1F1F1; background: #0F0F0F; }
  .topnav { padding: 8px 16px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #303030; }
  .topnav .logo { display: flex; align-items: center; gap: 4px; }
  .topnav .logo .play { display: inline-block; width: 30px; height: 22px; background: #FF0000; border-radius: 6px; position: relative; }
  .topnav .logo .play::before { content:""; position: absolute; left: 11px; top: 5px; width: 0; height: 0; border-style: solid; border-width: 6px 0 6px 9px; border-color: transparent transparent transparent #fff; }
  .topnav .logo strong { font-size: 18px; font-weight: 700; letter-spacing: -0.04em; }
  .search { flex: 1; max-width: 600px; margin: 0 auto; display: flex; }
  .search input { flex: 1; border: 1px solid #303030; border-right: 0; border-radius: 9999px 0 0 9999px; padding: 8px 16px; font-size: 14px; font-family: inherit; background: #121212; color: #F1F1F1; }
  .search button { background: #272727; border: 1px solid #303030; border-left: 0; border-radius: 0 9999px 9999px 0; padding: 0 22px; font-size: 16px; cursor: pointer; }
  .layout { display: grid; grid-template-columns: 240px 1fr; }
  .sidebar { padding: 12px 8px; }
  .sidebar .item { display: flex; align-items: center; gap: 14px; padding: 8px 12px; border-radius: 12px; font-size: 14px; cursor: pointer; }
  .sidebar .item:hover { background: #272727; }
  .sidebar .item.active { background: #272727; font-weight: 600; }
  .chips { padding: 8px 16px; display: flex; gap: 8px; overflow-x: auto; border-bottom: 1px solid #303030; }
  .chip { background: #272727; padding: 6px 14px; border-radius: 8px; font-size: 14px; font-weight: 500; flex: 0 0 auto; cursor: pointer; }
  .chip.active { background: #F1F1F1; color: #0F0F0F; }
  .grid { padding: 16px; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
  .video .thumb { aspect-ratio: 16/9; border-radius: 12px; position: relative; cursor: pointer; }
  .video .thumb .duration { position: absolute; right: 8px; bottom: 8px; background: rgba(0,0,0,0.85); color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 12px; font-weight: 600; }
  .video .meta { display: grid; grid-template-columns: 36px 1fr; gap: 12px; padding: 12px 0; }
  .video .avatar { width: 36px; height: 36px; border-radius: 50%; }
  .video h3 { font-size: 14px; font-weight: 600; line-height: 1.4; margin: 0; }
  .video .channel { font-size: 12px; color: #AAAAAA; margin-top: 4px; }
</style>

<header class="topnav">
  <div class="logo"><div class="play"></div><strong>YouTube</strong></div>
  <div class="search">
    <input placeholder="검색"/>
    <button>🔍</button>
  </div>
  <span style="color:#AAAAAA; font-size:14px; margin-left:auto;">📹 알림 ⓜ</span>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="item active">🏠 홈</div>
    <div class="item">▶ Shorts</div>
    <div class="item">📺 구독</div>
    <div class="item">📚 보관함</div>
    <div class="item">⏱ 시청 기록</div>
  </aside>
  <main>
    <div class="chips">
      <span class="chip active">전체</span>
      <span class="chip">디자인</span>
      <span class="chip">개발</span>
      <span class="chip">음악</span>
      <span class="chip">게임</span>
      <span class="chip">실시간</span>
    </div>
    <div class="grid">
      <div class="video">
        <div class="thumb" style="background:linear-gradient(135deg,#FF0000,#0A0A0A);"><div class="duration">12:34</div></div>
        <div class="meta">
          <div class="avatar" style="background:linear-gradient(135deg,#FF0000,#3EA6FF);"></div>
          <div><h3>디자인 시스템 입문 — 토큰부터 컴포넌트까지</h3><div class="channel">UX Studio · 조회수 24만회 · 2일 전</div></div>
        </div>
      </div>
      <div class="video">
        <div class="thumb" style="background:linear-gradient(135deg,#3EA6FF,#FFC107);"><div class="duration">8:42</div></div>
        <div class="meta">
          <div class="avatar" style="background:linear-gradient(135deg,#4FD68A,#FF0000);"></div>
          <div><h3>Figma 마스터 클래스: variants와 auto-layout</h3><div class="channel">Design Daily · 조회수 18만회 · 5일 전</div></div>
        </div>
      </div>
      <div class="video">
        <div class="thumb" style="background:linear-gradient(135deg,#7B68EE,#FF0000);"><div class="duration">22:18</div></div>
        <div class="meta">
          <div class="avatar" style="background:linear-gradient(135deg,#FFC107,#7B68EE);"></div>
          <div><h3>좋은 컴포넌트 라이브러리 만드는 법</h3><div class="channel">Code Notes · 조회수 12만회 · 1주 전</div></div>
        </div>
      </div>
    </div>
  </main>
</div>
```
