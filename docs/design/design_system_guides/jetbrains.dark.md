---
brand: JetBrains
brand_ko: 젯브레인스
slug: jetbrains
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - productivity

color_tone: mixed
primary_color_hex: "#FF318C"
primary_color_name: "JetBrains Pink"
mood:
  - 정교
  - 컬러풀
  - 강력

font_category: sans-serif
font_primary: JetBrains Sans
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2001
last_major_revision: 2025
signature_keyword: "다이아몬드 + 핑크·오렌지·블루 3색 그라데이션 + Darcula 신택스의 프로 IDE 패밀리"

card_tokens: |
  {
    "light": { "bg": "#F7F8FA", "surface": "#FFFFFF", "border": "#DFE1E5", "fg": "#1F1F1F", "fg_muted": "#4A4A4A", "accent": "#FF318C" },
    "dark":  { "bg": "#2B2D30", "surface": "#1E1F22", "border": "#393B40", "fg": "#DFE1E5", "fg_muted": "#BCBEC4", "accent": "#FF318C" }
  }

hero_html: |
  <div style="font-family:'JetBrains Sans','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:36px 28px 1fr 24px;letter-spacing:-0.002em;">
    <div style="background:var(--card-surface);display:flex;align-items:center;padding:0 10px;font:500 12px/1 inherit;gap:14px;color:var(--card-fg-muted);border-bottom:1px solid var(--card-border);">
      <div style="width:18px;height:18px;background:linear-gradient(135deg,#FF318C 0%,#FCC419 50%,#0095FF 100%);transform:rotate(45deg);border-radius:2px;"></div>
      <span>kotlin-demo</span>
      <span style="margin-left:auto;color:var(--card-fg-muted);">▶ main</span>
    </div>
    <div style="background:var(--card-bg);display:flex;border-bottom:1px solid var(--card-border);">
      <div style="padding:0 12px;background:var(--card-surface);color:var(--card-fg);border-right:1px solid var(--card-border);font:500 12px/28px inherit;display:inline-flex;align-items:center;gap:6px;border-top:2px solid var(--card-accent);">Main.kt</div>
      <div style="padding:0 12px;color:var(--card-fg-muted);border-right:1px solid var(--card-border);font:500 12px/28px inherit;">build.gradle</div>
    </div>
    <div style="padding:10px 14px;font:400 13px/1.6 'JetBrains Mono',Consolas,monospace;color:var(--card-fg);overflow:hidden;">
      <div><span style="color:#7A7E85;">// JetBrains Darcula 신택스</span></div>
      <div><span style="color:#CF8E6D;">fun</span> <span style="color:#56A8F5;">main</span>() {</div>
      <div style="padding-left:14px;"><span style="color:#56A8F5;">println</span>(<span style="color:#6AAB73;">"Hello, IntelliJ!"</span>)</div>
      <div>}</div>
    </div>
    <div style="background:var(--card-surface);color:var(--card-fg-muted);display:flex;align-items:center;padding:0 12px;font:400 11px/1 inherit;gap:14px;border-top:1px solid var(--card-border);">
      <span>⎇ main</span><span>Kotlin 2.1</span><span style="margin-left:auto;">UTF-8 · LF · Ln 3, Col 24</span>
    </div>
  </div>

sources:
  - https://www.jetbrains.com/
  - https://www.jetbrains.com/lp/intellij-platform-ui/
---

### ① 브랜드 DNA
- **브랜드명**: JetBrains
- **한 줄 정체성**: IntelliJ IDEA·PyCharm·WebStorm 등 언어별 프로 IDE 패밀리 — Kotlin 제작사
- **공식 디자인 철학**: "Powerful tools for developers" — 정교한 기능을 깔끔한 인터페이스로
- **시그니처 요소 1개**: 다이아몬드(45° 회전 정사각형) 로고 + 핑크(#FF318C) → 옐로(#FCC419) → 블루(#0095FF) 3색 그라데이션 (제품마다 컬러 변주) + Darcula 다크 테마. VS Code의 #1E1E1E보다 한 톤 밝은 #2B2D30 + 보더 강조

### ② 톤 & 무드
- **핵심 키워드 3개**: 정교, 컬러풀, 강력
- **무드 설명**: 다크는 #2B2D30 베이스, 패널 간 1px 보더로 영역 명확히 구분. 액션 버튼은 라이트 블루(#3574F0), 강조 그라데이션은 마케팅 사이트에서만 사용.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 도구창이 사이드에 빼곡
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle — 보더 + 미세 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - JetBrains Pink (브랜드 그라데이션 시작점 · 다크 위 동일 hue 유지) */
  --color-primary-50:  #4A0727;
  --color-primary-100: #770B40;
  --color-primary-200: #A8125A;
  --color-primary-300: #DB1873;
  --color-primary-400: #FF318C;
  --color-primary-500: #FF318C;   /* JetBrains Pink */
  --color-primary-600: #FF5798;
  --color-primary-700: #FF85B4;
  --color-primary-800: #FFB3D1;
  --color-primary-900: #FFE0EE;

  /* Gradient stops (제품별 컬러) */
  --grad-pink:   #FF318C;
  --grad-yellow: #FCC419;
  --grad-blue:   #0095FF;
  --grad-purple: #8676FF;
  --grad-orange: #FE5722;
  --grad-jb: linear-gradient(135deg, var(--grad-pink) 0%, var(--grad-yellow) 50%, var(--grad-blue) 100%);

  /* Action Blue (IDE 내 버튼 · 다크 위 밝게 튜닝) */
  --color-action-500: #3574F0;
  --color-action-600: #548AF7;

  /* Syntax (Darcula) */
  --color-syntax-keyword:  #CF8E6D;
  --color-syntax-string:   #6AAB73;
  --color-syntax-comment:  #7A7E85;
  --color-syntax-function: #56A8F5;
  --color-syntax-variable: #C77DBB;
  --color-syntax-type:     #AFBF7E;
  --color-syntax-number:   #2AACB8;

  /* Neutral (Darcula · inverted ramp) */
  --color-neutral-0:    #1E1F22;
  --color-neutral-50:   #25272B;
  --color-neutral-100:  #2B2D30;
  --color-neutral-200:  #393B40;
  --color-neutral-300:  #4D5158;
  --color-neutral-500:  #7F8385;
  --color-neutral-700:  #BCBEC4;
  --color-neutral-800:  #DFE1E5;   /* primary text */
  --color-neutral-900:  #F0F1F2;   /* high-contrast text */
  --color-neutral-1000: #FFFFFF;

  /* Semantic (다크 위 가독) */
  --color-success-bg: #1F3F26;
  --color-success-fg: #6AAB73;
  --color-warning-bg: #3B2F0F;
  --color-warning-fg: #F2B33D;
  --color-error-bg:   #4A1B1F;
  --color-error-fg:   #DB5C5C;
  --color-info-bg:    #1A3A5A;
  --color-info-fg:    #548AF7;

  /* Surface */
  --bg-base:     #2B2D30;
  --bg-subtle:   #1E1F22;
  --bg-elevated: #393B40;
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #DFE1E5;
  --text-secondary:  #BCBEC4;
  --text-tertiary:   #7F8385;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A5D63;

  /* Border */
  --border-default: #393B40;
  --border-subtle:  #2B2D30;
  --border-strong:  #4D5158;
  --border-focus:   #3574F0;
}

[data-theme="light"] {
  /* Primary - JetBrains Pink (브랜드 그라데이션 시작점) */
  --color-primary-50:  #FFE0EE;
  --color-primary-100: #FFB3D1;
  --color-primary-200: #FF85B4;
  --color-primary-300: #FF5798;
  --color-primary-400: #FF318C;
  --color-primary-500: #FF318C;   /* JetBrains Pink */
  --color-primary-600: #DB1873;
  --color-primary-700: #A8125A;
  --color-primary-800: #770B40;
  --color-primary-900: #4A0727;

  /* Gradient stops (제품별 컬러) */
  --grad-pink:   #FF318C;
  --grad-yellow: #FCC419;
  --grad-blue:   #0095FF;
  --grad-purple: #8676FF;
  --grad-orange: #FE5722;
  --grad-jb: linear-gradient(135deg, var(--grad-pink) 0%, var(--grad-yellow) 50%, var(--grad-blue) 100%);

  /* Action Blue (IDE 내 버튼) */
  --color-action-500: #3574F0;
  --color-action-600: #2860D1;

  /* Syntax (IntelliJ Light) */
  --color-syntax-keyword:  #0033B3;
  --color-syntax-string:   #067D17;
  --color-syntax-comment:  #8C8C8C;
  --color-syntax-function: #00627A;
  --color-syntax-variable: #871094;
  --color-syntax-type:     #00627A;
  --color-syntax-number:   #1750EB;

  /* Neutral (IntelliJ Light) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F0F1F2;
  --color-neutral-100:  #DFE1E5;
  --color-neutral-200:  #BCBEC4;
  --color-neutral-300:  #7F8385;
  --color-neutral-500:  #5A5D63;
  --color-neutral-700:  #393B40;
  --color-neutral-800:  #2B2D30;
  --color-neutral-900:  #1E1F22;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E8F5EC;
  --color-success-fg: #208A3C;
  --color-warning-bg: #FBF1D9;
  --color-warning-fg: #9A6700;
  --color-error-bg:   #FBE9E9;
  --color-error-fg:   #C7222D;
  --color-info-bg:    #E3F0FB;
  --color-info-fg:    #3574F0;

  /* Surface */
  --bg-base:     #F7F8FA;
  --bg-subtle:   #EBECF0;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.30);

  /* Text */
  --text-primary:    #1F1F1F;
  --text-secondary:  #4A4A4A;
  --text-tertiary:   #818594;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A8ADBD;

  /* Border */
  --border-default: #DFE1E5;
  --border-subtle:  #EBECF0;
  --border-strong:  #C9CCD6;
  --border-focus:   #3574F0;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI: **JetBrains Sans** (자체) / Inter / -apple-system
  - 코드: **JetBrains Mono** (대표 무료 코딩 폰트)
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 700 / 1.2 / -0.02em
  - H1: 24px / 700 / 1.25
  - H2: 20px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 15px / 400 / 1.55
  - Body: 13px / 400 / 1.5
  - UI Label: 13px / 500 / 1.3
  - Code: 13px / 400 / 1.6 mono
  - Caption: 11px / 500 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  2px;
  --space-sm:  4px;
  --space-md:  8px;
  --space-lg: 12px;
  --space-xl: 16px;
  --space-2xl: 24px;
  --space-3xl: 36px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 4px;     /* 버튼 시그니처 */
--radius-lg: 6px;
--radius-xl: 10px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.45);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.65);
--shadow-pink: 0 6px 24px rgba(255,49,140,0.35);
```

### ⑧ Iconography
- **스타일**: 자체 IntelliJ Icons (Filled + Outline 혼합)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square (정밀)
- **추천 라이브러리**: IntelliJ Platform Icons / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 13px/1 'JetBrains Sans', Inter, sans-serif; border-radius: 4px; padding: 6px 16px; border: 1px solid transparent; cursor: pointer; }
.btn-primary { background: var(--color-action-500); color: #fff; border-color: var(--color-action-500); }
.btn-primary:hover { background: var(--color-action-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border-color: var(--border-strong); }
.btn-secondary:hover { background: var(--bg-base); }
.btn-cta-grad { background: var(--grad-jb); color: #fff; border: 0; padding: 12px 24px; border-radius: 6px; font-weight: 600; }   /* 마케팅 사이트 */
.btn-icon { background: transparent; border: 0; color: var(--text-secondary); padding: 4px; border-radius: 3px; }
.btn-icon:hover { background: var(--bg-elevated); }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-strong); border-radius: 4px; padding: 5px 8px; font: 400 13px/1.3 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-action-500); outline: 1px solid var(--color-action-500); outline-offset: -2px; }
.search { background: var(--bg-subtle); border-radius: 4px; padding: 5px 8px; display: flex; align-items: center; gap: 6px; }
```

**Card (Tool Window / Tab)**
```css
.toolwin { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 0; }
.toolwin .head { background: var(--bg-subtle); padding: 4px 10px; font: 500 12px/1.4 inherit; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid var(--border-default); }
.tab { display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px; background: var(--bg-base); color: var(--text-secondary); font: 500 13px/1.3 inherit; border-right: 1px solid var(--border-default); cursor: pointer; }
.tab.active { background: var(--bg-subtle); color: var(--text-primary); border-top: 2px solid var(--color-primary-500); padding-top: 3px; }
```

**Badge / Tag**
```css
.badge-version { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); border-radius: 4px; padding: 1px 6px; font: 500 11px/1.3 inherit; }
.tag-pink { background: rgba(255,49,140,0.15); color: var(--color-primary-300); border-radius: 9999px; padding: 2px 8px; font: 600 11px/1.3 inherit; }
.tag-action { background: rgba(53,116,240,0.15); color: var(--color-action-500); border-radius: 9999px; padding: 2px 8px; font: 600 11px/1.3 inherit; }
.kbd { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-bottom-width: 2px; border-radius: 3px; padding: 1px 6px; font: 600 11px/1 'JetBrains Mono', monospace; }
```

**Navigation (좌측 도구창 사이드)**
```css
.sideicons { background: var(--bg-subtle); width: 28px; display: flex; flex-direction: column; gap: 2px; padding-top: 6px; border-right: 1px solid var(--border-default); }
.sideicons .item { width: 28px; height: 28px; display: grid; place-items: center; font: 600 11px/1 inherit; color: var(--text-tertiary); cursor: pointer; writing-mode: vertical-rl; transform: rotate(180deg); padding: 4px 0; }
.sideicons .item:hover, .sideicons .item.active { color: var(--text-primary); background: var(--bg-elevated); }
.titlebar { background: var(--bg-subtle); height: 36px; padding: 0 12px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--border-default); }
.titlebar .logo { width: 18px; height: 18px; background: var(--grad-jb); transform: rotate(45deg); border-radius: 2px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 180ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### ⑪ Anti-patterns
1. 그라데이션 풀배경 사용 금지 — 다이아몬드 로고/마케팅 카드에만, IDE 안에선 단색
2. 카드 모서리 12px 이상 금지 — 4~6px Soft가 시그니처
3. 사이드바 아이콘을 가로로 펼치기 금지 — 좌우 28px 세로 도구창 라벨 패턴 유지
4. Darcula 베이스를 #1E1E1E(VS Code) 처럼 어둡게 만들기 금지 — #2B2D30 한 톤 밝은 톤 고수
5. JetBrains Mono를 빈티지·세리프 폰트로 대체 금지 — 코딩 환경에서는 JetBrains Mono 또는 Cascadia 권장

### ⑫ 시그니처 적용 예시 (IntelliJ IDEA Darcula)

```html
<style>
  body { margin: 0; font-family: 'JetBrains Sans', Inter, -apple-system, sans-serif; color: #DFE1E5; background: #2B2D30; letter-spacing: -0.002em; }
  .app { display: grid; grid-template-rows: 36px 28px 1fr 24px; grid-template-columns: 28px 240px 1fr 28px; height: 100vh; }
  .titlebar { grid-column: 1/5; background: #1E1F22; display: flex; align-items: center; padding: 0 12px; gap: 14px; border-bottom: 1px solid #393B40; font: 500 13px/1 inherit; color: #BCBEC4; }
  .titlebar .logo { width: 20px; height: 20px; background: linear-gradient(135deg, #FF318C, #FCC419 50%, #0095FF); transform: rotate(45deg); border-radius: 3px; }
  .titlebar .run { margin-left: auto; display: flex; align-items: center; gap: 10px; }
  .titlebar .run .play { background: #2B2D30; border: 1px solid #393B40; color: #6AAB73; padding: 3px 10px; border-radius: 4px; font: 600 11px/1.4 inherit; }
  .tabs { grid-column: 2/4; background: #2B2D30; display: flex; align-items: stretch; border-bottom: 1px solid #393B40; }
  .tab { padding: 0 16px; font: 500 13px/28px inherit; color: #BCBEC4; border-right: 1px solid #393B40; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; }
  .tab.active { background: #1E1F22; color: #fff; border-top: 2px solid #FF318C; line-height: 26px; }
  .leftrail, .rightrail { background: #1E1F22; display: flex; flex-direction: column; gap: 2px; padding-top: 6px; border-right: 1px solid #393B40; }
  .rightrail { border-right: 0; border-left: 1px solid #393B40; }
  .leftrail .ic, .rightrail .ic { width: 28px; padding: 8px 0; text-align: center; color: #7F8385; font: 600 11px/1 inherit; writing-mode: vertical-rl; transform: rotate(180deg); cursor: pointer; }
  .leftrail .ic.active, .rightrail .ic.active { color: #fff; background: #2B2D30; }
  .project { background: #1E1F22; border-right: 1px solid #393B40; }
  .project .head { padding: 6px 12px; font: 700 11px/1.4 inherit; color: #BCBEC4; text-transform: uppercase; letter-spacing: 0.05em; }
  .project .row { padding: 3px 14px 3px 24px; font: 400 13px/1.4 inherit; color: #DFE1E5; cursor: pointer; }
  .project .row.folder::before { content: '▸ '; color: #7F8385; }
  .project .row.active { background: #2E436E; color: #fff; }
  .editor { background: #1E1F22; padding: 10px 16px; font: 400 14px/1.65 'JetBrains Mono', Consolas, monospace; color: #DFE1E5; overflow: auto; }
  .editor .ln { display: inline-block; width: 28px; color: #5A5D63; text-align: right; margin-right: 14px; user-select: none; }
  .kw  { color: #CF8E6D; }
  .str { color: #6AAB73; }
  .cmt { color: #7A7E85; font-style: italic; }
  .fn  { color: #56A8F5; }
  .var { color: #C77DBB; }
  .ty  { color: #AFBF7E; }
  .num { color: #2AACB8; }
  .statusbar { grid-column: 1/5; background: #1E1F22; color: #7F8385; display: flex; align-items: center; padding: 0 12px; font: 400 11px/24px inherit; gap: 16px; border-top: 1px solid #393B40; }
  .statusbar .right { margin-left: auto; display: flex; gap: 16px; }
  .grad-cta { display: inline-block; background: linear-gradient(135deg, #FF318C, #FCC419 50%, #0095FF); color: #fff; border-radius: 4px; padding: 4px 12px; font: 700 11px/1.2 inherit; margin-left: 12px; box-shadow: 0 4px 16px rgba(255,49,140,0.30); }
</style>

<div class="app">
  <header class="titlebar">
    <div class="logo"></div>
    <span>IntelliJ IDEA <span class="grad-cta">2026.1 Ultimate</span></span>
    <div class="run">
      <span class="play">▶ Main</span>
      <span style="color:#7F8385;">🔍</span>
      <span style="color:#7F8385;">⚙</span>
    </div>
  </header>
  <nav class="tabs">
    <div class="tab active">📄 Main.kt</div>
    <div class="tab">⚙ build.gradle.kts</div>
    <div class="tab">📦 settings.gradle.kts</div>
  </nav>
  <aside class="leftrail">
    <div class="ic active">Project</div>
    <div class="ic">Structure</div>
    <div class="ic">Commit</div>
    <div class="ic">Pull Req</div>
  </aside>
  <aside class="project">
    <div class="head">kotlin-demo ~/projects</div>
    <div class="row folder" style="padding-left:14px;">.idea</div>
    <div class="row folder" style="padding-left:14px;">src</div>
    <div class="row folder" style="padding-left:28px;">main</div>
    <div class="row folder" style="padding-left:42px;">kotlin</div>
    <div class="row active" style="padding-left:56px;">📄 Main.kt</div>
    <div class="row folder" style="padding-left:14px;">build</div>
    <div class="row" style="padding-left:14px;">📦 build.gradle.kts</div>
  </aside>
  <main class="editor">
<span class="ln">1</span><span class="cmt">// JetBrains Darcula — 정교한 색 분리</span>
<span class="ln">2</span><span class="kw">package</span> com.example
<span class="ln">3</span>
<span class="ln">4</span><span class="kw">import</span> kotlinx.coroutines.*
<span class="ln">5</span>
<span class="ln">6</span><span class="kw">data class</span> <span class="ty">User</span>(<span class="kw">val</span> <span class="var">name</span>: <span class="ty">String</span>, <span class="kw">val</span> <span class="var">age</span>: <span class="ty">Int</span> = <span class="num">0</span>)
<span class="ln">7</span>
<span class="ln">8</span><span class="kw">suspend fun</span> <span class="fn">main</span>() = <span class="fn">coroutineScope</span> {
<span class="ln">9</span>    <span class="kw">val</span> <span class="var">users</span> = <span class="fn">listOf</span>(<span class="ty">User</span>(<span class="str">"Mia"</span>, <span class="num">21</span>), <span class="ty">User</span>(<span class="str">"Leo"</span>, <span class="num">29</span>))
<span class="ln">10</span>    <span class="var">users</span>.<span class="fn">forEach</span> { <span class="fn">launch</span> { <span class="fn">println</span>(<span class="str">"Hi, ${it.name}"</span>) } }
<span class="ln">11</span>}
  </main>
  <aside class="rightrail">
    <div class="ic">Gradle</div>
    <div class="ic">Database</div>
    <div class="ic">AI Assistant</div>
  </aside>
  <footer class="statusbar">
    <span>⎇ main</span><span>● 2 changed</span><span style="color:#F2B33D;">⚠ 1</span><span>Kotlin 2.1</span>
    <div class="right"><span>Ln 10, Col 38</span><span>UTF-8</span><span>LF</span><span>JDK 21</span><span>4 spaces</span></div>
  </footer>
</div>
```
