---
brand: Apple Music
brand_ko: 애플 뮤직
slug: apple-music
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - consumer

color_tone: warm
primary_color_hex: "#FA2D48"
primary_color_name: "Apple Music Red"
mood:
  - 시네마틱
  - 음악우선
  - 매끄러움

font_category: sans-serif
font_primary: SF Pro
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2015
last_major_revision: 2024
signature_keyword: "다크 캔버스에 빨강 그라데이션과 SF Pro로 빚어낸 시네마틱 Now Playing"

card_tokens: |
  {
    "light": { "bg": "#000000", "surface": "#1A1A1D", "border": "#2C2C2E", "fg": "#FFFFFF", "fg_muted": "#A8A8AD", "accent": "#FA2D48" },
    "dark":  { "bg": "#000000", "surface": "#0A0A0A", "border": "#222226", "fg": "#F5F5F7", "fg_muted": "#8E8E93", "accent": "#FF3B58" }
  }

hero_html: |
  <div style="font-family:-apple-system,'SF Pro Display','Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;background:linear-gradient(180deg,#1A0A0F 0%,#000 100%);">
      <span style="display:inline-block;width:18px;height:18px;border-radius:5px;background:linear-gradient(135deg,#FA2D48 0%,#FF5577 100%);"></span>
      <strong style="font-size:13px;font-weight:700;letter-spacing:-0.01em;">Music</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;align-items:center;">
      <div style="width:128px;height:128px;border-radius:10px;background:linear-gradient(135deg,#FA2D48 0%,#7A0F2E 100%);box-shadow:0 18px 36px rgba(250,45,72,0.40);"></div>
      <div style="text-align:center;">
        <div style="font-size:14px;font-weight:700;letter-spacing:-0.01em;">Get Up!</div>
        <div style="font-size:11px;color:var(--card-accent);font-weight:600;">Mixed for You</div>
      </div>
    </div>
    <div style="padding:10px 14px;background:rgba(255,255,255,0.06);backdrop-filter:blur(10px);display:flex;align-items:center;gap:10px;border-top:1px solid rgba(255,255,255,0.08);">
      <div style="width:32px;height:32px;border-radius:6px;background:linear-gradient(135deg,#FA2D48,#FF8E72);"></div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:11px;font-weight:600;">Sunrise</div>
        <div style="font-size:10px;color:var(--card-fg-muted);">Childish Gambino</div>
      </div>
      <span style="font-size:14px;color:var(--card-fg);">▶</span>
    </div>
  </div>

sources:
  - https://www.apple.com/apple-music/
  - https://developer.apple.com/design/human-interface-guidelines/
---

### ① 브랜드 DNA
- **브랜드명**: Apple Music
- **한 줄 정체성**: 시네마틱 큐레이션이 강점인 Apple 생태계의 음악·라디오 스트리밍
- **공식 디자인 철학**: HIG의 명료·심도·생동(Clarity·Deference·Depth)을 음악 컨텍스트로 확장
- **시그니처 요소 1개**: 검정 캔버스 + Apple Music Red(#FA2D48) 그라데이션 + SF Pro로 짜인 시네마틱 Now Playing 풀스크린

### ② 톤 & 무드
- **핵심 키워드 3개**: 시네마틱, 음악우선, 매끄러움
- **무드 설명**: 검정·OLED 친화 캔버스 위에 앨범 아트가 주인공. 빨강 액센트는 절제, 곡 정보·가사 타이포가 큼직하게 흐른다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (10~14px)
- **평면성**: Layered — 블러 + 미세 그림자

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Apple Music Red */
  --color-primary-50:  #FEE8EC;
  --color-primary-100: #FDC1CB;
  --color-primary-200: #FB95A6;
  --color-primary-300: #FA6883;
  --color-primary-400: #FA4866;
  --color-primary-500: #FA2D48;   /* Apple Music Red */
  --color-primary-600: #E01539;
  --color-primary-700: #B30D2D;
  --color-primary-800: #7A0820;
  --color-primary-900: #420412;

  /* Secondary - Cinematic Pink/Orange (앨범 추출용 보조) */
  --color-secondary-500: #FF5577;

  /* Neutral - OLED dark scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F2F2F7;
  --color-neutral-100:  #E5E5EA;
  --color-neutral-200:  #D1D1D6;
  --color-neutral-300:  #A8A8AD;
  --color-neutral-500:  #636366;
  --color-neutral-700:  #2C2C2E;     /* card */
  --color-neutral-800:  #1C1C1E;     /* surface */
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;     /* canvas */

  /* Semantic */
  --color-success-bg: #E6F7EB;
  --color-success-fg: #2DBE5C;
  --color-warning-bg: #FFF4DC;
  --color-warning-fg: #FF9500;
  --color-error-bg:   #FDE2E5;
  --color-error-fg:   #FF3B30;
  --color-info-bg:    #E0EFFF;
  --color-info-fg:    #007AFF;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #1C1C1E;
  --bg-elevated: #2C2C2E;
  --bg-overlay:  rgba(0,0,0,0.70);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #EBEBF5;
  --text-tertiary:   #A8A8AD;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #636366;

  /* Border */
  --border-default: #2C2C2E;
  --border-subtle:  #1C1C1E;
  --border-strong:  #3A3A3C;
  --border-focus:   #FA2D48;
}

[data-theme="light"] {
  --bg-base: #FFFFFF;
  --bg-subtle: #F2F2F7;
  --bg-elevated: #FFFFFF;
  --text-primary: #000000;
  --text-secondary: #1C1C1E;
  --text-tertiary: #636366;
  --border-default: #E5E5EA;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: SF Pro Display / SF Pro Text (Apple 자체)
  - 한글: Apple SD Gothic Neo / Pretendard 폴백
  - 가사 디스플레이: SF Pro Display Heavy
- **위계**:
  - Display: 64px / 800 / 1.05 / -0.025em (Now Playing)
  - H1: 34px / 700 / 1.15 / -0.02em
  - H2: 22px / 700 / 1.2 / -0.01em
  - H3: 17px / 600 / 1.3 / -0.005em
  - Body Large: 17px / 400 / 1.45 / 0
  - Body: 15px / 400 / 1.45 / 0
  - Body Small: 13px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.02em uppercase

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
  --space-3xl: 72px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 22px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 8px 24px rgba(0,0,0,0.40);
--shadow-lg: 0 18px 36px rgba(0,0,0,0.50);
--shadow-art: 0 18px 36px rgba(250,45,72,0.40);   /* 앨범 아트 글로우 */
```

### ⑧ Iconography
- **스타일**: SF Symbols (Filled + Outline 혼합)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: SF Symbols / Phosphor 폴백

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 15px/1 -apple-system, 'SF Pro Display', Inter, sans-serif; border-radius: 9999px; padding: 10px 22px; border: 0; display: inline-flex; align-items: center; gap: 6px; transition: transform 120ms ease, background 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); transform: scale(1.02); }
.btn-primary:active { transform: scale(0.97); }
.btn-secondary { background: rgba(255,255,255,0.10); color: #fff; backdrop-filter: blur(20px); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-disabled { background: var(--color-neutral-700); color: var(--text-disabled); }
.btn-play { width: 60px; height: 60px; border-radius: 50%; background: var(--color-primary-500); color: #fff; display: grid; place-items: center; font-size: 24px; box-shadow: var(--shadow-art); }
```

**Input**
```css
.input { background: rgba(255,255,255,0.10); border: 0; border-radius: 10px; padding: 10px 14px 10px 38px; color: #fff; font: 400 15px/1.2 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: 2px solid var(--color-primary-500); outline-offset: 0; }
```

**Card (Album)**
```css
.album { background: transparent; cursor: pointer; }
.album .cover { aspect-ratio: 1; border-radius: var(--radius-md); background: linear-gradient(135deg,#FA2D48,#7A0F2E); box-shadow: var(--shadow-md); margin-bottom: 10px; }
.album h3 { margin: 0; font: 600 14px/1.3 inherit; color: #fff; }
.album .sub { font: 400 12px/1.3 inherit; color: var(--text-tertiary); margin-top: 2px; }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 3px 10px; border-radius: 9999px; font: 600 11px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: rgba(250,45,72,0.16); color: var(--color-primary-300); }
.tag-outline { border: 1px solid var(--border-strong); color: #fff; }
.tag-dolby   { background: #000; color: #fff; border: 1px solid #fff; font-weight: 800; letter-spacing: 0.08em; }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 240px; background: var(--bg-subtle); padding: 16px 12px; }
.sidebar .item { display: flex; align-items: center; gap: 12px; padding: 8px 12px; border-radius: 8px; font: 500 14px/1.3 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-elevated); }
.sidebar .item.active { background: rgba(250,45,72,0.16); color: var(--color-primary-400); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 240ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 라이트 모드를 기본 캔버스로 사용 금지 — 검정 OLED가 시그니처
2. 앨범 아트 위에 Red 단색 오버레이 금지 — 아트 원본이 주인공
3. Now Playing에서 폰트 크기 축소 금지 — 큰 타이포가 시네마틱 톤
4. 모서리 sharp(0px) 사용 금지 — 카드 10~14px, 버튼 pill
5. 빨강 외 다른 강조색 추가 금지 — single accent 원칙 (보조는 앨범 추출색)

### ⑫ 시그니처 적용 예시 (Now Playing)
```html
<style>
  body { margin: 0; font-family: -apple-system, 'SF Pro Display', 'Pretendard', sans-serif; background: #000; color: #fff; min-height: 100vh; }
  .stage { max-width: 460px; margin: 0 auto; padding: 24px; min-height: 100vh; background: radial-gradient(120% 60% at 50% 0%, rgba(250,45,72,0.30) 0%, rgba(0,0,0,1) 60%); display: flex; flex-direction: column; gap: 28px; }
  .topbar { display: flex; align-items: center; gap: 8px; font: 600 13px/1 inherit; color: rgba(255,255,255,0.7); }
  .topbar .down { font-size: 18px; }
  .topbar .center { flex: 1; text-align: center; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
  .cover { aspect-ratio: 1; border-radius: 14px; background: linear-gradient(135deg, #FA2D48 0%, #7A0F2E 100%); box-shadow: 0 24px 60px rgba(250,45,72,0.50); margin: 8px 0; position: relative; overflow: hidden; }
  .cover::after { content:''; position:absolute; inset:0; background: radial-gradient(circle at 30% 25%, rgba(255,200,210,0.45) 0%, transparent 50%); }
  .meta h1 { margin: 0 0 6px; font: 800 28px/1.15 inherit; letter-spacing: -0.02em; }
  .meta .by { color: #FA2D48; font: 600 17px/1.2 inherit; }
  .progress { display: flex; flex-direction: column; gap: 6px; }
  .progress .bar { height: 4px; border-radius: 9999px; background: rgba(255,255,255,0.18); position: relative; }
  .progress .bar::after { content:''; position: absolute; left: 0; top: 0; bottom: 0; width: 36%; background: rgba(255,255,255,0.95); border-radius: 9999px; }
  .progress .time { display: flex; justify-content: space-between; font: 500 11px/1 inherit; color: rgba(255,255,255,0.55); }
  .controls { display: flex; align-items: center; justify-content: space-between; padding: 0 8px; }
  .controls .icon { font-size: 32px; color: #fff; }
  .controls .play { width: 72px; height: 72px; border-radius: 50%; background: #fff; color: #000; display: grid; place-items: center; font-size: 30px; box-shadow: 0 18px 36px rgba(255,255,255,0.20); }
  .actions { display: flex; justify-content: space-between; align-items: center; color: rgba(255,255,255,0.7); padding: 0 12px; }
  .lyrics { background: rgba(255,255,255,0.06); backdrop-filter: blur(20px); border-radius: 14px; padding: 16px 18px; font: 700 18px/1.4 inherit; letter-spacing: -0.01em; }
  .lyrics .now { color: #fff; }
  .lyrics .next { color: rgba(255,255,255,0.35); }
</style>

<div class="stage">
  <div class="topbar">
    <span class="down">⌄</span>
    <span class="center">Get Up! 믹스</span>
    <span class="down">⋯</span>
  </div>
  <div class="cover"></div>
  <div class="meta">
    <h1>Sunrise</h1>
    <div class="by">Childish Gambino</div>
  </div>
  <div class="progress">
    <div class="bar"></div>
    <div class="time"><span>1:18</span><span>-2:43</span></div>
  </div>
  <div class="controls">
    <span class="icon">⏮</span>
    <div class="play">▶</div>
    <span class="icon">⏭</span>
  </div>
  <div class="lyrics">
    <div class="now">새벽이 오기 전에 너에게 닿고 싶었어</div>
    <div class="next">한 박자 뒤에 따라오는 빛</div>
  </div>
</div>
```
