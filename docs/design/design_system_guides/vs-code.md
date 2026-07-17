---
brand: VS Code
brand_ko: VS 코드
slug: vs-code
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - productivity

color_tone: cool
primary_color_hex: "#007ACC"
primary_color_name: "VS Code Blue"
mood:
  - 정밀
  - 친숙
  - 확장성

font_category: sans-serif
font_primary: Segoe UI
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2015
last_major_revision: 2025
signature_keyword: "활동바 5개 아이콘 + 일렉트로닉 블루 + Monaco/Dark+ 신택스의 사실상 표준 IDE"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F3F3F3", "border": "#E5E5E5", "fg": "#1F1F1F", "fg_muted": "#616161", "accent": "#007ACC" },
    "dark":  { "bg": "#1E1E1E", "surface": "#252526", "border": "#2D2D2D", "fg": "#CCCCCC", "fg_muted": "#969696", "accent": "#007ACC" }
  }

hero_html: |
  <div style="font-family:'Segoe UI','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:24px 1fr 22px;grid-template-columns:48px 1fr;letter-spacing:-0.002em;">
    <div style="grid-column:1/3;background:#3C3C3C;display:flex;align-items:center;padding:0 8px;font:400 12px/1 inherit;color:var(--card-fg);gap:14px;">
      <span>File</span><span>Edit</span><span>View</span><span style="margin-left:auto;font-size:10px;color:var(--card-fg-muted);">app.tsx — 작업</span>
    </div>
    <div style="background:#333;display:flex;flex-direction:column;align-items:center;padding-top:8px;gap:14px;color:#858585;">
      <div style="border-left:2px solid var(--card-accent);color:#fff;padding:2px;font-size:18px;">▤</div>
      <div style="font-size:18px;">🔍</div>
      <div style="font-size:18px;">⎇</div>
      <div style="font-size:18px;">🐛</div>
      <div style="font-size:18px;">⊞</div>
    </div>
    <div style="background:var(--card-bg);padding:10px 12px;font:400 12px/1.55 'Cascadia Code','Consolas',monospace;color:#D4D4D4;overflow:hidden;">
      <div style="color:#6A9955;">// VS Code Dark+ theme</div>
      <div><span style="color:#C586C0;">import</span> <span style="color:#9CDCFE;">React</span> <span style="color:#C586C0;">from</span> <span style="color:#CE9178;">'react'</span>;</div>
      <div><span style="color:#569CD6;">const</span> <span style="color:#DCDCAA;">App</span> = () =&gt; (</div>
      <div style="padding-left:14px;">&lt;<span style="color:#4EC9B0;">div</span>&gt;Hello&lt;/<span style="color:#4EC9B0;">div</span>&gt;</div>
      <div>);</div>
    </div>
    <div style="grid-column:1/3;background:var(--card-accent);color:#fff;display:flex;align-items:center;padding:0 10px;font:400 11px/1 inherit;gap:14px;">
      <span>⎇ main</span><span>● 0</span><span>⚠ 0</span><span style="margin-left:auto;">Ln 4, Col 18 · TypeScript · UTF-8</span>
    </div>
  </div>

sources:
  - https://code.visualstudio.com/
  - https://github.com/microsoft/vscode
---

### ① 브랜드 DNA
- **브랜드명**: Visual Studio Code (Microsoft)
- **한 줄 정체성**: 사실상 표준이 된 무료 Electron 기반 코드 에디터 — 풍부한 확장성으로 IDE급 진화
- **공식 디자인 철학**: "Code editing. Redefined." — 최소한의 크롬, 콘텐츠(코드) 우선
- **시그니처 요소 1개**: 좌측 48px Activity Bar(5개 아이콘) + 하단 일렉트로닉 블루(#007ACC) 풀폭 Status Bar + Dark+ 신택스(키워드 #569CD6 / 변수 #9CDCFE / 문자열 #CE9178 / 코멘트 #6A9955). 다른 에디터에 없는 단일 시그니처

### ② 톤 & 무드
- **핵심 키워드 3개**: 정밀, 친숙, 확장성
- **무드 설명**: 풀 다크(#1E1E1E) 기본, 모서리는 거의 0px(샤프). 색은 신택스 하이라이트와 상태 바에만. UI 폰트는 OS 시스템(Segoe UI/SF Pro), 코드는 모노스페이스(Cascadia Code).
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 한 화면에 최대한 많은 코드
- **모서리 성향**: Sharp (0~4px)
- **평면성**: Flat — 1px 보더, 그림자는 모달에만

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - VS Code Blue (Status Bar) */
  --color-primary-50:  #E5F3FF;
  --color-primary-100: #BFE0FF;
  --color-primary-200: #95CCFF;
  --color-primary-300: #6BB8FF;
  --color-primary-400: #3AA4FF;
  --color-primary-500: #007ACC;   /* Status Bar */
  --color-primary-600: #005A9E;
  --color-primary-700: #004270;
  --color-primary-800: #002C4D;
  --color-primary-900: #001930;

  /* Secondary - Debug Orange */
  --color-secondary-500: #CC6633;

  /* Syntax (Dark+) */
  --color-syntax-keyword:  #569CD6;
  --color-syntax-string:   #CE9178;
  --color-syntax-comment:  #6A9955;
  --color-syntax-function: #DCDCAA;
  --color-syntax-variable: #9CDCFE;
  --color-syntax-type:     #4EC9B0;
  --color-syntax-control:  #C586C0;
  --color-syntax-number:   #B5CEA8;

  /* Neutral (Dark+ default) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F3F3F3;
  --color-neutral-100:  #E1E1E1;
  --color-neutral-200:  #CCCCCC;
  --color-neutral-300:  #858585;
  --color-neutral-500:  #6E6E6E;
  --color-neutral-700:  #3C3C3C;
  --color-neutral-800:  #2D2D2D;
  --color-neutral-900:  #1E1E1E;   /* editor bg */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #14432E;
  --color-success-fg: #4EC9B0;
  --color-warning-bg: #3E2E10;
  --color-warning-fg: #FFC107;
  --color-error-bg:   #5A1D1D;
  --color-error-fg:   #F48771;
  --color-info-bg:    #14304F;
  --color-info-fg:    #3794FF;

  /* Surface */
  --bg-base:     #1E1E1E;   /* editor */
  --bg-subtle:   #252526;   /* sidebar */
  --bg-elevated: #2D2D2D;   /* tab inactive */
  --bg-titlebar: #3C3C3C;
  --bg-activitybar: #333333;
  --bg-statusbar:   #007ACC;

  /* Text */
  --text-primary:    #CCCCCC;
  --text-secondary:  #969696;
  --text-tertiary:   #6E6E6E;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A5A5A;

  /* Border */
  --border-default: #2D2D2D;
  --border-subtle:  #1E1E1E;
  --border-strong:  #454545;
  --border-focus:   #007ACC;
}

[data-theme="light"] {
  --bg-base:        #FFFFFF;
  --bg-subtle:      #F3F3F3;
  --bg-elevated:    #ECECEC;
  --bg-titlebar:    #DDDDDD;
  --bg-activitybar: #2C2C2C;     /* light에서도 activity bar는 다크 */
  --bg-statusbar:   #007ACC;
  --text-primary:   #1F1F1F;
  --text-secondary: #616161;
  --border-default: #E5E5E5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI: **Segoe UI** (Win) / **SF Pro Text** (mac) / system-ui
  - 코드: **Cascadia Code** (자체 폰트) / Consolas / Menlo / "JetBrains Mono" 폴백
  - 한글 UI: Pretendard / Malgun Gothic / Apple SD Gothic Neo
- **위계**:
  - Display: 22px / 600 / 1.3
  - H1: 18px / 600 / 1.3
  - H2: 15px / 600 / 1.35
  - H3: 13px / 600 / 1.4
  - Body Large: 14px / 400 / 1.5
  - Body: 13px / 400 / 1.4
  - UI Tab/Sidebar: 13px / 400 / 1.3
  - Code: 14px / 400 / 1.55 monospace
  - Status Bar: 12px / 400 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  2px;
  --space-sm:  4px;
  --space-md:  8px;
  --space-lg: 12px;
  --space-xl: 18px;
  --space-2xl: 24px;
  --space-3xl: 36px;
  ```
- **Layout 고정값**:
  - Activity Bar: 48px
  - Side Bar: 270px (조정 가능)
  - Status Bar: 22px
  - Title Bar: 30px

### ⑥ Border Radius
```css
--radius-none: 0;       /* 대부분의 UI 요소 */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.2);
--shadow-md: 0 4px 8px rgba(0,0,0,0.36);   /* Quick Open / Command Palette */
--shadow-lg: 0 8px 24px rgba(0,0,0,0.50);  /* Modal */
```

### ⑧ Iconography
- **스타일**: Codicons — 자체 라이브러리
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Sharp
- **추천 라이브러리**: Codicons / Phosphor Light

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 400 13px/1 'Segoe UI', system-ui, sans-serif; border-radius: 2px; padding: 6px 14px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-link { background: transparent; color: var(--color-primary-400); padding: 0; }
```

**Input (Command Palette / Search)**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-strong); border-radius: 2px; padding: 5px 8px; font: 400 13px/1.3 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 1px solid var(--color-primary-500); outline-offset: -2px; }
.palette { background: var(--bg-elevated); border: 1px solid var(--border-strong); box-shadow: var(--shadow-md); width: 600px; padding: 8px; }
.palette .row { padding: 4px 8px; font: 400 13px/1.4 inherit; color: var(--text-primary); cursor: pointer; }
.palette .row.active { background: var(--color-primary-500); color: #fff; }
.palette .row .kbd { float: right; font: 400 11px/1 monospace; color: var(--text-tertiary); }
```

**Card (Tab)**
```css
.tab { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: var(--bg-elevated); color: var(--text-secondary); font: 400 13px/1.3 inherit; border-right: 1px solid var(--border-default); cursor: pointer; }
.tab.active { background: var(--bg-base); color: var(--text-primary); border-top: 1px solid var(--color-primary-500); }
.tab .dot { width: 8px; height: 8px; border-radius: 9999px; background: var(--text-secondary); }   /* unsaved */
.tab .close { color: var(--text-tertiary); opacity: 0; }
.tab:hover .close { opacity: 1; }
```

**Badge / Tag**
```css
.badge-count { background: var(--color-primary-500); color: #fff; border-radius: 9999px; min-width: 18px; height: 18px; padding: 0 5px; display: inline-grid; place-items: center; font: 600 11px/1 inherit; }
.badge-problem-error { color: var(--color-error-fg); }
.badge-problem-warn  { color: var(--color-warning-fg); }
.kbd { background: var(--bg-subtle); border: 1px solid var(--border-strong); border-bottom-width: 2px; border-radius: 3px; padding: 1px 5px; font: 600 11px/1 'Cascadia Code', monospace; color: var(--text-primary); }
```

**Navigation (Activity Bar + Side Bar + Status Bar)**
```css
.activitybar { background: var(--bg-activitybar); width: 48px; display: flex; flex-direction: column; align-items: center; padding-top: 6px; gap: 4px; }
.activitybar .item { width: 48px; height: 48px; display: grid; place-items: center; color: var(--text-tertiary); font-size: 22px; cursor: pointer; position: relative; }
.activitybar .item:hover, .activitybar .item.active { color: #fff; }
.activitybar .item.active::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--color-primary-500); }
.sidebar { background: var(--bg-subtle); width: 270px; padding: 6px 0; }
.sidebar .title { font: 600 11px/1.4 inherit; color: var(--text-secondary); text-transform: uppercase; padding: 4px 18px; letter-spacing: 0.04em; }
.sidebar .item { padding: 3px 18px; font: 400 13px/1.4 inherit; color: var(--text-primary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-elevated); }
.sidebar .item.active { background: var(--color-primary-500); color: #fff; }
.statusbar { background: var(--bg-statusbar); color: #fff; height: 22px; padding: 0 10px; display: flex; align-items: center; gap: 14px; font: 400 12px/1 inherit; }
.statusbar .right { margin-left: auto; display: flex; gap: 14px; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 150ms;
--duration-slow: 250ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### ⑪ Anti-patterns
1. 카드/패널 모서리 8px 이상 금지 — 0~4px Sharp가 시그니처
2. 상태 바를 검정으로 바꾸기 금지 — Status Bar Blue(#007ACC)는 정체성
3. Activity Bar 제거 또는 가로 배치 금지 — 좌측 48px 세로 5아이콘 패턴 유지
4. 본문에 컬러 강조 금지 — 색은 신택스 하이라이트와 액션에만
5. Material/Carbon식 강한 그림자 사용 금지 — Flat + 보더로 구분

### ⑫ 시그니처 적용 예시 (VS Code Dark+)

```html
<style>
  body { margin: 0; font-family: 'Segoe UI', 'SF Pro Text', system-ui, sans-serif; color: #CCC; background: #1E1E1E; letter-spacing: -0.002em; }
  .app { display: grid; grid-template-columns: 48px 240px 1fr; grid-template-rows: 30px 30px 1fr 22px; height: 100vh; }
  .titlebar { grid-column: 1/4; background: #3C3C3C; display: flex; align-items: center; padding: 0 10px; font: 400 12px/1 inherit; gap: 14px; }
  .titlebar .menu { color: #CCC; cursor: pointer; }
  .titlebar .title { margin: 0 auto; color: #969696; font-size: 11px; }
  .tabs { grid-column: 2/4; background: #2D2D2D; display: flex; align-items: stretch; border-bottom: 1px solid #1E1E1E; }
  .tab { display: inline-flex; align-items: center; gap: 8px; padding: 0 14px; color: #969696; font: 400 13px/30px inherit; border-right: 1px solid #1E1E1E; cursor: pointer; }
  .tab.active { background: #1E1E1E; color: #fff; border-top: 1px solid #007ACC; }
  .tab .close { color: #6E6E6E; }
  .activitybar { grid-row: 2/4; background: #333; display: flex; flex-direction: column; align-items: center; padding-top: 6px; gap: 6px; }
  .activitybar .item { width: 48px; height: 44px; display: grid; place-items: center; color: #858585; font-size: 22px; cursor: pointer; position: relative; }
  .activitybar .item.active { color: #fff; }
  .activitybar .item.active::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: #007ACC; }
  .sidebar { background: #252526; padding: 4px 0; }
  .sidebar .title { padding: 6px 18px 4px; font: 700 11px/1.4 inherit; color: #BBBBBB; text-transform: uppercase; letter-spacing: 0.05em; }
  .sidebar .row { padding: 3px 22px; font: 400 13px/1.4 inherit; color: #CCCCCC; cursor: pointer; }
  .sidebar .row:hover { background: #2A2D2E; }
  .sidebar .row.active { background: #094771; color: #fff; }
  .sidebar .row.folder::before { content: '▸ '; color: #969696; }
  .editor { background: #1E1E1E; padding: 10px 16px; font: 400 14px/1.55 'Cascadia Code', Consolas, 'JetBrains Mono', monospace; color: #D4D4D4; overflow: auto; }
  .editor .ln { display: inline-block; width: 28px; color: #6E6E6E; text-align: right; margin-right: 12px; user-select: none; }
  .kw { color: #569CD6; } .str { color: #CE9178; } .cmt { color: #6A9955; font-style: italic; } .fn { color: #DCDCAA; } .var { color: #9CDCFE; } .ty { color: #4EC9B0; } .ctl { color: #C586C0; } .num { color: #B5CEA8; }
  .statusbar { grid-column: 1/4; background: #007ACC; color: #fff; display: flex; align-items: center; padding: 0 12px; font: 400 12px/22px inherit; gap: 16px; }
  .statusbar .right { margin-left: auto; display: flex; gap: 16px; }
</style>

<div class="app">
  <header class="titlebar">
    <span class="menu">File</span><span class="menu">Edit</span><span class="menu">Selection</span><span class="menu">View</span><span class="menu">Go</span><span class="menu">Run</span><span class="menu">⋯</span>
    <span class="title">app.tsx — vs-code-demo — Visual Studio Code</span>
  </header>
  <nav class="tabs">
    <div class="tab active">📄 app.tsx <span class="close">×</span></div>
    <div class="tab">⚙ settings.json <span class="close">×</span></div>
    <div class="tab">📦 package.json ● <span class="close">×</span></div>
  </nav>
  <aside class="activitybar">
    <div class="item active">▤</div>
    <div class="item">🔍</div>
    <div class="item">⎇</div>
    <div class="item">🐛</div>
    <div class="item">⊞</div>
    <div style="margin-top:auto;display:flex;flex-direction:column;gap:6px;">
      <div class="item">👤</div>
      <div class="item">⚙</div>
    </div>
  </aside>
  <aside class="sidebar">
    <div class="title">탐색기</div>
    <div class="row folder">VS-CODE-DEMO</div>
    <div class="row" style="padding-left:32px;">📁 src</div>
    <div class="row active" style="padding-left:44px;">📄 app.tsx</div>
    <div class="row" style="padding-left:44px;">📄 index.tsx</div>
    <div class="row" style="padding-left:32px;">📁 public</div>
    <div class="row" style="padding-left:22px;">📄 package.json</div>
    <div class="row" style="padding-left:22px;">📄 tsconfig.json</div>
  </aside>
  <main class="editor">
<span class="ln">1</span><span class="cmt">// VS Code Dark+ 시그니처: 키워드/문자열/타입 색 분리</span>
<span class="ln">2</span><span class="kw">import</span> <span class="var">React</span>, { <span class="var">useState</span> } <span class="kw">from</span> <span class="str">'react'</span>;
<span class="ln">3</span>
<span class="ln">4</span><span class="kw">type</span> <span class="ty">Props</span> = { <span class="var">name</span>: <span class="ty">string</span>; <span class="var">count</span>?: <span class="ty">number</span> };
<span class="ln">5</span>
<span class="ln">6</span><span class="kw">export</span> <span class="kw">const</span> <span class="fn">App</span> = ({ <span class="var">name</span>, <span class="var">count</span> = <span class="num">0</span> }: <span class="ty">Props</span>) =&gt; {
<span class="ln">7</span>  <span class="kw">const</span> [<span class="var">n</span>, <span class="fn">setN</span>] = <span class="fn">useState</span>(<span class="var">count</span>);
<span class="ln">8</span>  <span class="ctl">return</span> (
<span class="ln">9</span>    &lt;<span class="ty">div</span> <span class="var">className</span>=<span class="str">"hero"</span>&gt;
<span class="ln">10</span>      &lt;<span class="ty">h1</span>&gt;Hello, {<span class="var">name</span>}&lt;/<span class="ty">h1</span>&gt;
<span class="ln">11</span>      &lt;<span class="ty">button</span> <span class="var">onClick</span>={() =&gt; <span class="fn">setN</span>(<span class="var">n</span> + <span class="num">1</span>)}&gt;{<span class="var">n</span>}&lt;/<span class="ty">button</span>&gt;
<span class="ln">12</span>    &lt;/<span class="ty">div</span>&gt;
<span class="ln">13</span>  );
<span class="ln">14</span>};
  </main>
  <footer class="statusbar">
    <span>⎇ main</span><span>● 1</span><span style="color:#F48771;">⊗ 0</span><span style="color:#FFC107;">⚠ 2</span>
    <div class="right"><span>Ln 12, Col 18</span><span>UTF-8</span><span>LF</span><span>TypeScript JSX</span><span>🔔 0</span></div>
  </footer>
</div>
```
