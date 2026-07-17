---
brand: Sketch
brand_ko: 스케치
slug: sketch
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - creative-tools
  - design-system

color_tone: warm
primary_color_hex: "#FDB300"
primary_color_name: "Sketch Yellow"
mood:
  - 다이아옐로
  - 라이트캔버스
  - 셰이프패널

font_category: sans-serif
font_primary: SF Pro
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2010
last_major_revision: 2024
signature_keyword: "옐로(#FDB300) 다이아 로고 + 라이트 캔버스 + 좌측 셰이프 패널의 Mac 네이티브 디자인 툴"

hero_html: |
  <div style="font-family:-apple-system,'SF Pro Display','Pretendard',sans-serif;background:#fff;color:#1A1A1A;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #E5E5E5;">
      <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2L22 9 12 22 2 9 12 2z" fill="#FDB300"/></svg>
      <strong style="font-size:13px;font-weight:600;letter-spacing:-0.005em;">Sketch</strong>
    </div>
    <div style="padding:0;display:flex;background:#F5F5F5;">
      <div style="width:34%;background:#FAFAFA;padding:8px 6px;border-right:1px solid #E5E5E5;font-size:8px;display:flex;flex-direction:column;gap:3px;">
        <div style="color:#666;font-weight:600;letter-spacing:0.04em;">SHAPES</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;">
          <div style="width:100%;height:14px;background:#fff;border:1px solid #D5D5D5;border-radius:2px;"></div>
          <div style="width:100%;height:14px;background:#fff;border:1px solid #D5D5D5;border-radius:7px;"></div>
          <div style="width:100%;height:14px;background:#fff;border:1px solid #D5D5D5;border-radius:50%;"></div>
          <div style="width:100%;height:14px;background:#fff;border:1px solid #D5D5D5;clip-path:polygon(50% 0,100% 100%,0 100%);"></div>
        </div>
      </div>
      <div style="flex:1;position:relative;display:grid;place-items:center;">
        <div style="width:60px;height:60px;background:#FDB300;border-radius:8px;box-shadow:0 6px 14px rgba(253,179,0,0.30);"></div>
      </div>
    </div>
    <div style="background:#fff;border-top:1px solid #E5E5E5;padding:6px 14px;display:flex;align-items:center;gap:8px;font-size:9px;color:#666;font-weight:500;">
      <span>1440 × 1024</span>
      <span style="margin-left:auto;color:#1A1A1A;font-weight:600;">100%</span>
    </div>
  </div>

sources:
  - https://www.sketch.com/
  - https://www.sketch.com/brand/
---

### ① 브랜드 DNA
- **브랜드명**: Sketch
- **한 줄 정체성**: Mac 네이티브 벡터 디자인 툴 — Figma 이전 시대의 표준
- **공식 디자인 철학**: "Design with code in mind" — macOS 톤의 네이티브 미니멀
- **시그니처 요소 1개**: Sketch Yellow(#FDB300) 다이아 로고 + 라이트 캔버스 + 좌측 셰이프 패널 + 우측 인스펙터. Figma의 풀브라우저와 정반대의 Mac 네이티브 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 다이아옐로, 라이트캔버스, 셰이프패널
- **무드 설명**: 흰 캔버스 + 미세한 회색 보더. Mac 네이티브 위젯 톤 (3-pane: 레이어/캔버스/인스펙터). 옐로는 로고와 강조에만.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Sketch Yellow */
  --color-primary-50:  #FFF5D9;
  --color-primary-100: #FFE7A8;
  --color-primary-200: #FED77A;
  --color-primary-300: #FDC74C;
  --color-primary-400: #FDBD2D;
  --color-primary-500: #FDB300;   /* Sketch Yellow */
  --color-primary-600: #DC9C00;
  --color-primary-700: #AC7A00;
  --color-primary-800: #7A5700;
  --color-primary-900: #4A3500;

  /* Secondary - Accent blue (selection) */
  --color-secondary-500: #007AFF;

  /* Neutral - Mac native scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #D5D5D5;
  --color-neutral-500:  #8E8E93;
  --color-neutral-700:  #555555;
  --color-neutral-800:  #2A2A2A;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1E8E3E;
  --color-warning-bg: #FFF5DA;
  --color-warning-fg: #B27500;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #D63D3D;
  --color-info-bg:    #E0EEFE;
  --color-info-fg:    #007AFF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-canvas:   #F5F5F5;     /* 캔버스 배경 */
  --bg-overlay:  rgba(26,26,26,0.45);

  /* Text */
  --text-primary:    #1A1A1A;
  --text-secondary:  #555555;
  --text-tertiary:   #8E8E93;
  --text-on-primary: #1A1A1A;       /* 옐로 위 검정 */
  --text-disabled:   #D5D5D5;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F5F5F5;
  --border-strong:  #D5D5D5;
  --border-focus:   #007AFF;
}

[data-theme="dark"] {
  --bg-base: #1A1A1A;
  --bg-subtle: #222222;
  --bg-elevated: #2A2A2A;
  --bg-canvas: #2A2A2A;
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255,255,255,0.78);
  --text-tertiary: rgba(255,255,255,0.55);
  --border-default: rgba(255,255,255,0.10);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: SF Pro Text / SF Pro Display
  - 한글: Apple SD Gothic Neo / Pretendard
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.02em
  - H1: 28px / 600 / 1.2 / -0.01em
  - H2: 20px / 600 / 1.3 / -0.005em
  - H3: 14px / 600 / 1.35 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.02em
  - Numeric: 12px / 500 tabular-nums

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 10px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 40px;
  --space-3xl: 56px;
  ```
- **Container**: 데스크톱 앱 (full-height 3-pane)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(26,26,26,0.06);
--shadow-md: 0 4px 12px rgba(26,26,26,0.10);
--shadow-lg: 0 12px 24px rgba(26,26,26,0.14);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선) + SF Symbols
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: SF Symbols / Phosphor 폴백

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 13px/1 -apple-system, 'SF Pro Text', Inter, sans-serif; border-radius: 6px; padding: 7px 14px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 150ms ease; }
.btn-primary { background: var(--color-secondary-500); color: #fff; }
.btn-primary:hover { background: #006FE6; }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--color-neutral-100); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-yellow { background: var(--color-primary-500); color: var(--text-on-primary); font-weight: 600; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-strong); border-radius: 4px; padding: 6px 8px; color: var(--text-primary); font: 400 12px/1.3 inherit; font-variant-numeric: tabular-nums; }
.input:focus { outline: none; border-color: var(--color-secondary-500); box-shadow: 0 0 0 2px rgba(0,122,255,0.20); }
```

**Card (Inspector row / Shape)**
```css
.inspector { background: #FAFAFA; border-left: 1px solid var(--border-default); padding: 8px 10px; }
.inspector .section { padding: 8px 0; border-bottom: 1px solid var(--border-subtle); }
.inspector .section .label { font: 700 10px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 8px; }
.inspector .row { display: grid; grid-template-columns: 60px 1fr 1fr; gap: 4px; align-items: center; margin-bottom: 4px; font: 500 12px/1 inherit; }
.inspector .row label { color: var(--text-tertiary); font-weight: 500; }
.inspector .row .input { padding: 4px 6px; }
.shape-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; }
.shape-row .shape { aspect-ratio: 1; background: #fff; border: 1px solid var(--border-strong); border-radius: 3px; cursor: pointer; display: grid; place-items: center; }
.shape-row .shape:hover { border-color: var(--color-secondary-500); }
.shape-row .shape.selected { border-color: var(--color-secondary-500); background: var(--color-info-bg); }
.card { background: #fff; border: 1px solid var(--border-default); border-radius: 6px; padding: 14px; }
```

**Badge / Tag**
```css
.tag { padding: 2px 6px; border-radius: 3px; font: 600 10px/1.3 inherit; letter-spacing: 0.04em; }
.tag-symbol     { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-component  { background: rgba(0,122,255,0.15); color: var(--color-info-fg); }
.tag-mask       { background: rgba(26,26,26,0.08); color: var(--text-secondary); }
.tag-shared     { background: #F4E5FB; color: #6D2C9E; }
.tag-prototype  { background: var(--color-primary-500); color: var(--text-on-primary); }
```

**Navigation (Toolbar)**
```css
.toolbar { background: var(--bg-subtle); border-bottom: 1px solid var(--border-default); padding: 8px 12px; display: flex; align-items: center; gap: 12px; font: 500 12px/1 inherit; }
.toolbar .tool { width: 28px; height: 28px; border-radius: 4px; display: grid; place-items: center; cursor: pointer; color: var(--text-secondary); }
.toolbar .tool:hover { background: var(--color-neutral-200); }
.toolbar .tool.active { background: var(--color-secondary-500); color: #fff; }
.layer-list { background: #FAFAFA; border-right: 1px solid var(--border-default); padding: 6px; font: 500 12px/1.4 inherit; }
.layer-list .item { display: flex; align-items: center; gap: 6px; padding: 5px 8px; border-radius: 4px; cursor: pointer; color: var(--text-secondary); }
.layer-list .item:hover { background: #fff; }
.layer-list .item.selected { background: var(--color-info-bg); color: var(--color-info-fg); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 180ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. 옐로 외 강조색을 일반화 금지 — 액션 선택은 #007AFF Mac 시스템 블루
2. 3-pane (레이어/캔버스/인스펙터) 구조 변형 금지 — Sketch 정체성
3. 숫자 입력에 비례폰트 사용 금지 — tabular-nums
4. 캔버스 다크를 기본으로 사용 금지 — 라이트가 표준
5. 라운드 풀필 카드 사용 금지 — 4~6px Soft

### ⑫ 시그니처 적용 예시 (Editor 3-pane)
```html
<style>
  body { margin: 0; font-family: -apple-system, 'SF Pro Text', 'Pretendard', sans-serif; background: #FAFAFA; color: #1A1A1A; min-height: 100vh; }
  .app { display: grid; grid-template-rows: 44px 1fr; height: 100vh; }
  .toolbar { background: #FAFAFA; border-bottom: 1px solid #E5E5E5; padding: 8px 14px; display: flex; align-items: center; gap: 8px; }
  .toolbar .brand { display: flex; align-items: center; gap: 8px; font: 600 14px/1 inherit; }
  .toolbar .brand svg { display: block; }
  .toolbar .group { display: flex; gap: 4px; padding: 0 8px; border-right: 1px solid #E5E5E5; }
  .toolbar .tool { width: 28px; height: 28px; border-radius: 4px; display: grid; place-items: center; cursor: pointer; color: #555; font-size: 14px; }
  .toolbar .tool:hover { background: #E5E5E5; }
  .toolbar .tool.active { background: #007AFF; color: #fff; }
  .toolbar .right { margin-left: auto; display: flex; gap: 8px; font: 500 12px/1 inherit; color: #555; align-items: center; }
  .toolbar .right .share { background: #007AFF; color: #fff; font: 600 12px/1 inherit; padding: 6px 12px; border: 0; border-radius: 4px; cursor: pointer; }
  .editor { display: grid; grid-template-columns: 220px 1fr 240px; min-height: 0; }
  .layers { background: #FAFAFA; border-right: 1px solid #E5E5E5; padding: 8px; overflow-y: auto; font: 500 12px/1.4 inherit; }
  .layers h3 { font: 700 10px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; color: #8E8E93; margin: 0 0 8px; padding: 0 4px; }
  .layers .item { display: flex; align-items: center; gap: 6px; padding: 5px 8px; border-radius: 4px; cursor: pointer; color: #555; }
  .layers .item:hover { background: #fff; }
  .layers .item.selected { background: #E0EEFE; color: #007AFF; }
  .layers .item.indent { padding-left: 24px; }
  .layers .item.indent2 { padding-left: 40px; }
  .layers .item .ic { width: 14px; text-align: center; }
  .canvas { background: #F0F0F0; display: grid; place-items: center; padding: 32px; overflow: auto; position: relative; }
  .canvas .artboard { background: #fff; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 12px 24px rgba(0,0,0,0.08); width: 480px; height: 320px; position: relative; padding: 32px; display: flex; flex-direction: column; gap: 16px; }
  .canvas .artboard .label { position: absolute; left: 0; top: -22px; font: 600 11px/1 inherit; color: #8E8E93; letter-spacing: 0.04em; }
  .canvas .artboard .hero-card { background: #FDB300; border-radius: 8px; padding: 20px 24px; color: #1A1A1A; box-shadow: 0 8px 24px rgba(253,179,0,0.25); position: relative; }
  .canvas .artboard .hero-card.selected { outline: 2px solid #007AFF; outline-offset: 4px; }
  .canvas .artboard .hero-card h1 { margin: 0 0 6px; font: 700 22px/1.15 inherit; }
  .canvas .artboard .hero-card p { margin: 0; font: 500 13px/1.5 inherit; }
  .canvas .artboard .shape-row { display: flex; gap: 8px; }
  .canvas .artboard .shape-row .pill { background: #fff; border: 1px solid #D5D5D5; padding: 8px 14px; border-radius: 9999px; font: 500 12px/1 inherit; color: #555; }
  .inspector { background: #FAFAFA; border-left: 1px solid #E5E5E5; padding: 12px; overflow-y: auto; font: 500 12px/1 inherit; }
  .inspector .section { padding: 8px 0; border-bottom: 1px solid #F0F0F0; }
  .inspector h4 { font: 700 10px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; color: #8E8E93; margin: 0 0 8px; }
  .inspector .row { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 4px; }
  .inspector .row .ipt { display: flex; align-items: center; gap: 4px; background: #fff; border: 1px solid #D5D5D5; border-radius: 4px; padding: 5px 7px; font-variant-numeric: tabular-nums; }
  .inspector .row .ipt .l { color: #8E8E93; font-weight: 500; font-size: 11px; }
  .inspector .row .ipt .v { font-weight: 500; font-size: 12px; }
  .inspector .color-row { display: flex; align-items: center; gap: 8px; }
  .inspector .swatch { width: 22px; height: 22px; border-radius: 4px; border: 1px solid #D5D5D5; }
  .inspector .swatch.y { background: #FDB300; }
  .inspector .hex { font-family: 'SF Mono', Menlo, monospace; font-size: 12px; font-weight: 500; }
</style>

<div class="app">
  <header class="toolbar">
    <div class="brand">
      <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 2L22 9 12 22 2 9 12 2z" fill="#FDB300"/></svg>
      Sketch
    </div>
    <div class="group">
      <div class="tool">↶</div>
      <div class="tool">↷</div>
    </div>
    <div class="group">
      <div class="tool">V</div>
      <div class="tool active">▭</div>
      <div class="tool">○</div>
      <div class="tool">T</div>
      <div class="tool">↗</div>
    </div>
    <div class="right">
      <span style="font-variant-numeric:tabular-nums;">100%</span>
      <button class="share">공유 ↗</button>
    </div>
  </header>

  <section class="editor">
    <aside class="layers">
      <h3>레이어</h3>
      <div class="item"><span class="ic">▼</span> Landing — 480×320</div>
      <div class="item indent selected"><span class="ic">▭</span> Hero Card</div>
      <div class="item indent2"><span class="ic">T</span> Headline</div>
      <div class="item indent2"><span class="ic">T</span> Caption</div>
      <div class="item indent"><span class="ic">▼</span> Pills</div>
      <div class="item indent2"><span class="ic">○</span> Pill / 디자인</div>
      <div class="item indent2"><span class="ic">○</span> Pill / 프로토타입</div>
      <div class="item indent2"><span class="ic">○</span> Pill / 핸드오프</div>
    </aside>
    <div class="canvas">
      <div class="artboard">
        <div class="label">Landing — 480 × 320</div>
        <div class="hero-card selected">
          <h1>디자인은 Mac에서.</h1>
          <p>Sketch로 빠르게 스케치하고, 변수와 컴포넌트로 시스템을 만듭니다.</p>
        </div>
        <div class="shape-row">
          <span class="pill">디자인</span>
          <span class="pill">프로토타입</span>
          <span class="pill">핸드오프</span>
        </div>
      </div>
    </div>
    <aside class="inspector">
      <div class="section">
        <h4>크기</h4>
        <div class="row">
          <div class="ipt"><span class="l">W</span><span class="v">416</span></div>
          <div class="ipt"><span class="l">H</span><span class="v">96</span></div>
        </div>
        <div class="row">
          <div class="ipt"><span class="l">X</span><span class="v">32</span></div>
          <div class="ipt"><span class="l">Y</span><span class="v">32</span></div>
        </div>
      </div>
      <div class="section">
        <h4>외형</h4>
        <div class="color-row" style="margin-bottom:8px;"><div class="swatch y"></div><span class="hex">#FDB300</span><span class="l" style="margin-left:auto;color:#8E8E93;font-weight:500;font-size:11px;">100%</span></div>
        <div class="row">
          <div class="ipt"><span class="l">Radius</span><span class="v">8</span></div>
          <div class="ipt"><span class="l">Blur</span><span class="v">0</span></div>
        </div>
      </div>
      <div class="section">
        <h4>섀도우</h4>
        <div class="color-row"><div class="swatch" style="background:#FDB300;opacity:0.3;"></div><span class="hex">#FDB300 25%</span></div>
        <div class="row" style="margin-top:8px;">
          <div class="ipt"><span class="l">Y</span><span class="v">8</span></div>
          <div class="ipt"><span class="l">Blur</span><span class="v">24</span></div>
        </div>
      </div>
    </aside>
  </section>
</div>
```
