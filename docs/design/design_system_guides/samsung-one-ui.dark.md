---
brand: Samsung One UI
brand_ko: 삼성 원 UI
slug: samsung-one-ui
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: korea
industry:
  - enterprise
  - consumer

color_tone: cool
primary_color_hex: "#1428A0"
primary_color_name: "Samsung Blue"
mood:
  - 한손
  - 안정
  - 부드러움

font_category: sans-serif
font_primary: SamsungOne / SamsungSharpSans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2018
last_major_revision: 2024
signature_keyword: "Samsung 블루 + 큰 라운드 + 한손 도달 영역의 안드로이드 스킨"

card_tokens: |
  {
    "light": { "bg": "#F0F0F2", "surface": "#FFFFFF", "border": "#E0E0E0", "fg": "#1A1A1C", "fg_muted": "#6A6A6F", "accent": "#1428A0" },
    "dark":  { "bg": "#000000", "surface": "#1C1C1E", "border": "#3C3C40", "fg": "#FFFFFF", "fg_muted": "#C7C7CB", "accent": "#1428A0" }
  }

hero_html: |
  <div style="font-family:SamsungOne,'Apple SD Gothic Neo',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.01em;">
    <div style="padding:14px 16px;display:flex;align-items:center;justify-content:space-between;font:600 12px/1 inherit;color:rgba(255,255,255,0.85);">
      <span>9:41</span>
      <div style="display:flex;align-items:center;gap:4px;font-size:11px;">📶 5G 🔋87%</div>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:14px;">
      <div style="font:300 36px/1.1 inherit;letter-spacing:-0.025em;padding-top:60px;">설정</div>
      <div style="background:var(--card-surface);border-radius:24px;padding:0;overflow:hidden;">
        <div style="padding:16px 18px;display:flex;align-items:center;gap:14px;border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="width:36px;height:36px;background:var(--card-accent);border-radius:12px;display:grid;place-items:center;font:900 16px/1 inherit;">📶</div>
          <div style="flex:1;font:500 16px/1.3 inherit;">연결</div>
          <span style="color:rgba(255,255,255,0.55);">›</span>
        </div>
        <div style="padding:16px 18px;display:flex;align-items:center;gap:14px;border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="width:36px;height:36px;background:#5C7CF0;border-radius:12px;display:grid;place-items:center;font:900 16px/1 inherit;">🔔</div>
          <div style="flex:1;font:500 16px/1.3 inherit;">알림</div>
          <span style="color:rgba(255,255,255,0.55);">›</span>
        </div>
        <div style="padding:16px 18px;display:flex;align-items:center;gap:14px;">
          <div style="width:36px;height:36px;background:#A06BF5;border-radius:12px;display:grid;place-items:center;font:900 16px/1 inherit;">🔊</div>
          <div style="flex:1;font:500 16px/1.3 inherit;">소리 및 진동</div>
          <span style="color:rgba(255,255,255,0.55);">›</span>
        </div>
      </div>
    </div>
    <div style="padding:14px;text-align:center;font:600 12px/1 inherit;color:rgba(255,255,255,0.55);">⏤ Samsung Galaxy ⏤</div>
  </div>

sources:
  - https://www.samsung.com/sec/apps/one-ui/
  - https://developer.samsung.com/one-ui/
---

### ① 브랜드 DNA
- **브랜드명**: Samsung One UI (Galaxy의 안드로이드 스킨)
- **한 줄 정체성**: 삼성이 안드로이드 위에 올린 One UI — "한 손" 도달 영역과 큰 라운드가 정체성
- **공식 디자인 철학**: "Focus the user, make it natural" — 컨트롤은 하단, 콘텐츠는 상단
- **시그니처 요소 1개**: 큰 헤더 (제목 36px+) → 콘텐츠 영역의 "Viewer/Controller" 분리 + 매우 큰 라운드(20~28px) + Samsung 블루(#1428A0)

### ② 톤 & 무드
- **핵심 키워드 3개**: 한손, 안정, 부드러움
- **무드 설명**: 다크 베이스에서도 부드러운 곡선, 라이트는 흰 캔버스 + 옅은 회색. 카드는 라운드 20~28px이 시그니처. 헤더 제목은 매우 큰 라이트 weight(300).
- **비주얼 스타일**: 모던 미니멀 (One UI 5+)
- **밀도(Density)**: Comfortable — 한 손 도달을 위해 패딩 16~20px
- **모서리 성향**: Round (20~28px) — 안드로이드 표준 중 가장 큰 라운드
- **평면성**: Layered — 카드 그림자 미세하게

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Samsung Blue (다크 표면에서 가독성을 위해 한 단계 밝게 보정) */
  --color-primary-50:  #0A1030;   /* 다크 위 가장 짙은 틴트 (info bg 계열) */
  --color-primary-100: #111A4D;
  --color-primary-200: #1A2A6E;
  --color-primary-300: #2740A0;
  --color-primary-400: #3A57C4;
  --color-primary-500: #4F6FE0;   /* Samsung Blue — 다크 위 기본 강조 */
  --color-primary-600: #6C88EC;
  --color-primary-700: #91A8F4;
  --color-primary-800: #BCCAF9;
  --color-primary-900: #E2E9FD;

  /* Secondary - Galaxy Purple (S24 accent, 다크 위 보정) */
  --color-secondary-500: #A06BF5;

  /* Bixby Cyan */
  --color-tertiary-500: #3DD6FF;

  /* Neutral - One UI grays (다크 반전 램프) */
  --color-neutral-0:    #000000;       /* AMOLED 트루블랙 */
  --color-neutral-50:   #0E0E10;
  --color-neutral-100:  #131316;       /* page bg dark */
  --color-neutral-200:  #1C1C1E;       /* elevated surface */
  --color-neutral-300:  #2A2A2E;       /* raised surface */
  --color-neutral-500:  #46464B;       /* strong border */
  --color-neutral-700:  #C7C7CB;       /* text tertiary */
  --color-neutral-800:  #E0E0E2;
  --color-neutral-900:  #F2F2F4;       /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic (다크 위 가독성) */
  --color-success-bg: #10301E;
  --color-success-fg: #4CD787;
  --color-warning-bg: #382611;
  --color-warning-fg: #FFB454;
  --color-error-bg:   #3A1717;
  --color-error-fg:   #FF6B6B;
  --color-info-bg:    #111A4D;
  --color-info-fg:    #91A8F4;

  /* Surface */
  --bg-base:     #000000;              /* AMOLED 트루블랙 페이지 */
  --bg-subtle:   #131316;
  --bg-elevated: #1C1C1E;              /* 카드 */
  --bg-overlay:  rgba(0,0,0,0.66);

  /* Text */
  --text-primary:    #F2F2F4;
  --text-secondary:  rgba(255,255,255,0.85);
  --text-tertiary:   rgba(255,255,255,0.55);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(255,255,255,0.30);

  /* Border */
  --border-default: rgba(255,255,255,0.06);
  --border-subtle:  rgba(255,255,255,0.03);
  --border-strong:  rgba(255,255,255,0.18);
  --border-focus:   #4F6FE0;
}

[data-theme="light"] {
  /* Primary - Samsung Blue */
  --color-primary-50:  #E5E9F4;
  --color-primary-100: #B8C2E0;
  --color-primary-200: #889ACD;
  --color-primary-300: #5872BA;
  --color-primary-400: #3354AD;
  --color-primary-500: #1428A0;   /* Samsung Blue */
  --color-primary-600: #0E1F86;
  --color-primary-700: #08176B;
  --color-primary-800: #04104F;
  --color-primary-900: #020933;

  --color-secondary-500: #7C3AED;
  --color-tertiary-500: #00C6FF;

  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F7;
  --color-neutral-100:  #F0F0F2;       /* page bg light */
  --color-neutral-200:  #E0E0E0;       /* border */
  --color-neutral-300:  #C7C7CB;
  --color-neutral-500:  #8E8E93;
  --color-neutral-700:  #6A6A6F;
  --color-neutral-800:  #3C3C40;
  --color-neutral-900:  #1A1A1C;
  --color-neutral-1000: #000000;

  --color-success-bg: #E5F8EC;
  --color-success-fg: #1B9F5C;
  --color-warning-bg: #FFF4E0;
  --color-warning-fg: #E68900;
  --color-error-bg:   #FEE8E8;
  --color-error-fg:   #E5343C;
  --color-info-bg:    #E5E9F4;
  --color-info-fg:    #1428A0;

  --bg-base:     #F0F0F2;
  --bg-subtle:   #F7F7F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,28,0.55);

  --text-primary:    #1A1A1C;
  --text-secondary:  #3C3C40;
  --text-tertiary:   #6A6A6F;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #8E8E93;

  --border-default: #E0E0E0;
  --border-subtle:  #F0F0F2;
  --border-strong:  #C7C7CB;
  --border-focus:   #1428A0;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **SamsungOne / SamsungSharpSans** (자체) — Roboto 폴백
  - 한글: **SamsungOneKorean** / Apple SD Gothic Neo / Pretendard 폴백
- **위계** (One UI 큰 헤더 시그니처):
  - Display (큰 헤더 제목): 36px / 300 / 1.15 / -0.025em — light weight가 시그니처
  - H1: 28px / 700 / 1.2 / -0.02em
  - H2 (섹션): 17px / 600 / 1.3 / -0.01em
  - H3 (목록 항목): 16px / 500 / 1.3 / -0.005em
  - Body Large: 16px / 400 / 1.55 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.4 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 14px;
  --space-lg: 20px;
  --space-xl: 28px;
  --space-2xl: 44px;
  --space-3xl: 80px;            /* 큰 헤더 위 여백 */
  ```
- **Container**: max-width 480px (모바일), 좌우 패딩 14px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;        /* 카드 시그니처 */
--radius-xl: 28px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.45);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.60);
--shadow-sheet: 0 -4px 16px rgba(0,0,0,0.55);
```

### ⑧ Iconography
- **스타일**: One UI Icons (Filled, 라운드 사각 배경)
- **Stroke 굵기**: N/A (Filled)
- **모서리 처리**: Round 라운드 사각 배경(12~14px)
- **추천 라이브러리**: One UI Icons / Material Symbols Filled

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 15px/1 SamsungOne, 'Apple SD Gothic Neo', Roboto, sans-serif; letter-spacing: -0.01em;
       border-radius: 26px; padding: 13px 24px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 8px;
       transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--color-primary-500); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-fab { width: 56px; height: 56px; padding: 0; border-radius: 9999px; background: var(--color-primary-500); color: #fff; box-shadow: var(--shadow-md); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 14px 16px; font: 500 16px/1.4 inherit; color: var(--text-primary); }
.input:focus { outline: 0; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(79,111,224,0.30); }
.toggle { width: 48px; height: 28px; background: var(--border-strong); border-radius: 9999px; position: relative; transition: background 200ms ease; }
.toggle.on { background: var(--color-primary-500); }
.toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 24px; height: 24px; background: #fff; border-radius: 9999px; transition: transform 200ms ease; }
.toggle.on::after { transform: translateX(20px); }
```

**Card (Section List)**
```css
.section-card { background: var(--bg-elevated); border-radius: var(--radius-lg); overflow: hidden; }
.section-card .item { padding: 16px 18px; display: grid; grid-template-columns: 36px 1fr auto; gap: 14px; align-items: center; border-bottom: 1px solid var(--border-default); }
.section-card .item:last-child { border-bottom: 0; }
.section-card .item .icon { width: 36px; height: 36px; border-radius: 12px; background: var(--color-primary-500); display: grid; place-items: center; color: #fff; font: 700 14px/1 inherit; }
.section-card .item .name { font: 500 16px/1.3 inherit; color: var(--text-primary); }
.section-card .item .meta { font: 500 13px/1.3 inherit; color: var(--text-tertiary); margin-top: 1px; }
.section-card .item .arrow { color: var(--text-tertiary); font-size: 18px; }
.hero-header { padding: 60px 16px 12px; }
.hero-header .title { font: 300 36px/1.1 inherit; letter-spacing: -0.025em; }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 9999px; font: 600 11px/1.4 inherit; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-success { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-galaxy  { background: var(--color-secondary-500); color: #fff; }
```

**Navigation (Bottom Sheet)**
```css
.bottom-sheet { background: var(--bg-elevated); border-radius: var(--radius-xl) var(--radius-xl) 0 0; padding: 20px 16px; box-shadow: var(--shadow-sheet); }
.bottom-sheet .handle { width: 36px; height: 4px; background: var(--border-strong); border-radius: 9999px; margin: 0 auto 16px; }
.nav-bar { background: var(--bg-elevated); border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 8px 0; }
.nav-bar .item { padding: 8px; text-align: center; font: 600 11px/1.3 inherit; color: var(--text-tertiary); }
.nav-bar .item.active { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);     /* Material 3 emphasized */
--ease-spring-softer: cubic-bezier(0.34, 1.3, 0.64, 1);
```

### ⑪ Anti-patterns
1. 모서리 12px 이하 라운드 사용 금지 — One UI는 큰 라운드(20~28px)가 시그니처
2. 큰 헤더 제목에 굵은 weight(700+) 사용 금지 — 300~400 light weight 표준
3. 본문을 한 화면에 가득 채우지 말 것 — 상단 60~80px 비워두어 한 손 도달 영역 확보
4. 아이콘을 보더만 있는 outline으로 사용 금지 — 라운드 사각 배경(12~14px) + Filled 아이콘
5. AMOLED 다크 모드에서 회색 배경(#1E1E1E 등) 사용 금지 — 트루블랙 #000이 OLED 최적

### ⑫ 시그니처 적용 예시 (One UI 설정 화면)

```html
<style>
  body { margin: 0; font-family: SamsungOne, 'Apple SD Gothic Neo', Pretendard, Roboto, sans-serif; letter-spacing: -0.01em; color: #fff; background: #000; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .statusbar { padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; font: 600 12px/1 inherit; color: rgba(255,255,255,0.85); }
  .statusbar .right { display: flex; align-items: center; gap: 6px; font-size: 11px; }
  .home { padding: 12px 14px 80px; display: flex; flex-direction: column; gap: 16px; }
  .hero-header { padding: 60px 8px 4px; }
  .hero-header h1 { font: 300 36px/1.1 inherit; letter-spacing: -0.025em; margin: 0; }
  .search-row { background: #1C1C1E; border-radius: 24px; padding: 12px 16px; display: flex; align-items: center; gap: 10px; font: 500 14px/1.4 inherit; color: rgba(255,255,255,0.55); }
  .card { background: #1C1C1E; border-radius: 24px; overflow: hidden; }
  .card .item { padding: 16px 18px; display: grid; grid-template-columns: 36px 1fr auto; gap: 14px; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); cursor: pointer; }
  .card .item:last-child { border-bottom: 0; }
  .card .item:hover { background: rgba(255,255,255,0.04); }
  .card .item .ic { width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center; color: #fff; font: 700 16px/1 inherit; }
  .card .item .ic.b1 { background: #4F6FE0; }
  .card .item .ic.b2 { background: #5C7CF0; }
  .card .item .ic.b3 { background: #A06BF5; }
  .card .item .ic.b4 { background: #34D17A; }
  .card .item .ic.b5 { background: #FF5A5A; }
  .card .item .name { font: 500 16px/1.3 inherit; }
  .card .item .meta { font: 500 13px/1.3 inherit; color: rgba(255,255,255,0.55); margin-top: 1px; }
  .card .item .arrow { color: rgba(255,255,255,0.55); font-size: 18px; }
  .card .item .toggle { width: 48px; height: 28px; background: rgba(255,255,255,0.18); border-radius: 9999px; position: relative; }
  .card .item .toggle::after { content: ''; position: absolute; top: 2px; right: 2px; width: 24px; height: 24px; background: #fff; border-radius: 9999px; }
  .card .item .toggle.on { background: #4F6FE0; }
  .card .item .toggle.on::after { right: auto; left: 2px; transform: translateX(20px); }
  .navbar { background: #000; border-top: 1px solid rgba(255,255,255,0.06); display: grid; grid-template-columns: repeat(5, 1fr); padding: 8px 0; }
  .navbar .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: rgba(255,255,255,0.55); display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .navbar .item .ic { width: 32px; height: 32px; border-radius: 9999px; display: grid; place-items: center; font-size: 16px; }
  .navbar .item.active { color: #fff; }
  .navbar .item.active .ic { background: rgba(79,111,224,0.40); color: #fff; }
</style>

<div class="app">
  <div class="statusbar">
    <span>9:41</span>
    <div class="right">📶 5G 🔋87%</div>
  </div>
  <main class="home">
    <div class="hero-header"><h1>설정</h1></div>
    <div class="search-row">🔍 검색</div>
    <section class="card">
      <div class="item">
        <div class="ic b1">📶</div>
        <div><div class="name">연결</div><div class="meta">Wi-Fi, 블루투스, 비행기 모드</div></div>
        <span class="arrow">›</span>
      </div>
      <div class="item">
        <div class="ic b3">🔊</div>
        <div><div class="name">소리 및 진동</div><div class="meta">소리 모드, 벨소리, 음량</div></div>
        <span class="arrow">›</span>
      </div>
      <div class="item">
        <div class="ic b2">🔔</div>
        <div><div class="name">알림</div><div class="meta">상태 표시줄, 알림 차단</div></div>
        <div class="toggle on"></div>
      </div>
    </section>
    <section class="card">
      <div class="item">
        <div class="ic b4">🔋</div>
        <div><div class="name">배터리 및 디바이스 관리</div><div class="meta">전력 모드, 저장 공간, RAM</div></div>
        <span class="arrow">›</span>
      </div>
      <div class="item">
        <div class="ic b5">🎨</div>
        <div><div class="name">디스플레이</div><div class="meta">밝기, 다크 모드, 글자 크기</div></div>
        <span class="arrow">›</span>
      </div>
    </section>
  </main>
  <nav class="navbar">
    <div class="item active"><div class="ic">⚙</div>설정</div>
    <div class="item"><div class="ic">📱</div>장치</div>
    <div class="item"><div class="ic">🔒</div>보안</div>
    <div class="item"><div class="ic">👤</div>계정</div>
    <div class="item"><div class="ic">ⓘ</div>정보</div>
  </nav>
</div>
```
