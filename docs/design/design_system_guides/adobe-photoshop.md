---
brand: Adobe Photoshop
brand_ko: 어도비 포토샵
slug: adobe-photoshop
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - creative-tools

color_tone: cool
primary_color_hex: "#001E36"
primary_color_name: "Photoshop Cobalt"
mood:
  - 픽셀편집
  - 코발트네이비
  - Ps모노그램

font_category: sans-serif
font_primary: Adobe Clean
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 1990
last_major_revision: 2024
signature_keyword: "코발트 네이비(#001E36) 캔버스 + 흰 Ps 모노그램 로고 + 픽셀 그리드의 데스크톱 편집 톤"

hero_html: |
  <div style="font-family:'Adobe Clean',Inter,'Pretendard',sans-serif;background:#1A1A1A;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;background:#001E36;">
      <span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:#001E36;border:1.5px solid #31A8FF;border-radius:3px;font-size:10px;font-weight:800;color:#31A8FF;line-height:1;">Ps</span>
      <strong style="font-size:12px;font-weight:500;letter-spacing:-0.005em;">Photoshop</strong>
      <span style="margin-left:auto;font-size:9px;color:#A0A0A0;">untitled.psd</span>
    </div>
    <div style="display:flex;background:#2A2A2A;">
      <div style="width:28%;background:#2A2A2A;padding:6px 4px;display:flex;flex-direction:column;gap:3px;">
        <div style="font-size:8px;color:#666;letter-spacing:0.04em;padding:0 2px;">TOOLS</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
          <div style="aspect-ratio:1;background:#3F3F3F;border-radius:1px;display:grid;place-items:center;font-size:9px;">↖</div>
          <div style="aspect-ratio:1;background:#3F3F3F;border-radius:1px;display:grid;place-items:center;font-size:9px;">[]</div>
          <div style="aspect-ratio:1;background:#31A8FF;border-radius:1px;display:grid;place-items:center;font-size:9px;color:#001E36;">✦</div>
          <div style="aspect-ratio:1;background:#3F3F3F;border-radius:1px;display:grid;place-items:center;font-size:9px;">⌒</div>
        </div>
      </div>
      <div style="flex:1;background:#535353;display:grid;place-items:center;position:relative;">
        <div style="width:70px;height:48px;background:linear-gradient(135deg,#FF8E72,#7A1E5C);border:1px dashed #FFF;"></div>
      </div>
    </div>
    <div style="background:#1F1F1F;padding:5px 12px;display:flex;align-items:center;gap:6px;font-size:9px;color:#A0A0A0;font-weight:500;border-top:1px solid #3A3A3A;">
      <span style="font-variant-numeric:tabular-nums;">1920 × 1080 px</span>
      <span style="margin-left:auto;font-variant-numeric:tabular-nums;color:#fff;">75%</span>
    </div>
  </div>

sources:
  - https://www.adobe.com/products/photoshop.html
  - https://spectrum.adobe.com/
---

### ① 브랜드 DNA
- **브랜드명**: Adobe Photoshop
- **한 줄 정체성**: 산업 표준 래스터 이미지 편집기 — Adobe Creative Cloud의 대표 제품
- **공식 디자인 철학**: Adobe Spectrum 기반 + 코발트 네이비 브랜드 컬러 — 픽셀 편집 전용 톤
- **시그니처 요소 1개**: Photoshop Cobalt(#001E36) 캔버스 + 흰/시안 Ps 모노그램 + 좌측 단축 툴바 + 우측 레이어/속성 패널. 다른 Adobe 앱과 차별되는 픽셀 편집 정체성

### ② 톤 & 무드
- **핵심 키워드 3개**: 픽셀편집, 코발트네이비, Ps모노그램
- **무드 설명**: 다크 캔버스(#1A1A1A). 코발트 네이비 박스 로고가 강한 식별. 액션 강조는 Adobe Action Blue(#31A8FF). 정보 밀도가 매우 높고 단축 툴이 빽빽.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact
- **모서리 성향**: Sharp (2~3px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Photoshop Cobalt */
  --color-primary-50:  #E0E7F0;
  --color-primary-100: #B3C0D5;
  --color-primary-200: #8095B6;
  --color-primary-300: #4D6A98;
  --color-primary-400: #26477F;
  --color-primary-500: #001E36;   /* Photoshop Cobalt */
  --color-primary-600: #001A2E;
  --color-primary-700: #001525;
  --color-primary-800: #001019;
  --color-primary-900: #000A10;

  /* Secondary - Adobe Action Blue */
  --color-secondary-500: #31A8FF;

  /* Neutral - dark photoshop UI */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F4F4;
  --color-neutral-100:  #E5E5E5;
  --color-neutral-200:  #B5B5B5;
  --color-neutral-300:  #8C8C8C;
  --color-neutral-500:  #6E6E6E;
  --color-neutral-700:  #3F3F3F;     /* tool button */
  --color-neutral-800:  #2A2A2A;     /* panel */
  --color-neutral-900:  #1F1F1F;     /* canvas chrome */
  --color-neutral-1000: #1A1A1A;     /* page bg */

  /* Semantic */
  --color-success-bg: #0F2A1A;
  --color-success-fg: #36C273;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #F0B021;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #E04A6A;
  --color-info-bg:    #0F1F3A;
  --color-info-fg:    #31A8FF;

  /* Surface */
  --bg-base:     #1A1A1A;
  --bg-subtle:   #1F1F1F;
  --bg-elevated: #2A2A2A;
  --bg-canvas:   #535353;     /* document area */
  --bg-overlay:  rgba(0,0,0,0.80);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.78);
  --text-tertiary:   #A0A0A0;
  --text-on-primary: #31A8FF;       /* Ps 로고 톤 */
  --text-disabled:   rgba(255,255,255,0.30);

  /* Border */
  --border-default: #3A3A3A;
  --border-subtle:  #2A2A2A;
  --border-strong:  #535353;
  --border-focus:   #31A8FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Adobe Clean (자체) / Source Sans 폴백
  - 한글: Adobe Clean Han KR / Pretendard 폴백
  - 숫자: tabular-nums
- **위계**:
  - Display: 32px / 700 / 1.15 / -0.01em
  - H1: 22px / 600 / 1.2 / -0.005em
  - H2: 16px / 600 / 1.3 / 0
  - H3: 13px / 600 / 1.35 / 0
  - Body Large: 13px / 400 / 1.45 / 0
  - Body: 12px / 400 / 1.4 / 0
  - Body Small: 11px / 500 / 1.35 / 0
  - Caption: 10px / 600 / 1.3 / 0.04em
  - Code: 12px / 400 mono tabular-nums

### ⑤ 스페이싱
- **Base unit**: 4px (Compact)
- **토큰**:
  ```css
  --space-xs:  2px;
  --space-sm:  4px;
  --space-md: 8px;
  --space-lg: 12px;
  --space-xl: 20px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```
- **Container**: 데스크톱 앱 풀스크린

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;
--radius-xl: 6px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 16px 32px rgba(0,0,0,0.65);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선) — Adobe Spectrum 아이콘
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square
- **추천 라이브러리**: Adobe Spectrum / Phosphor 폴백

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 12px/1 'Adobe Clean', Inter, sans-serif; border-radius: 3px; padding: 6px 12px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 120ms ease; }
.btn-primary { background: var(--color-secondary-500); color: #fff; }
.btn-primary:hover { background: #1F8FE5; }
.btn-secondary { background: var(--color-neutral-700); color: var(--text-primary); }
.btn-secondary:hover { background: #535353; }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-tool { width: 32px; height: 32px; padding: 0; border-radius: 2px; background: var(--color-neutral-700); color: #fff; display: grid; place-items: center; }
.btn-tool.active { background: var(--color-secondary-500); color: var(--color-primary-500); }
```

**Input**
```css
.input { background: var(--color-neutral-800); border: 1px solid var(--border-default); border-radius: 2px; padding: 4px 6px; color: var(--text-primary); font: 400 12px/1.3 inherit; font-variant-numeric: tabular-nums; }
.input:focus { outline: none; border-color: var(--color-secondary-500); }
.input-spinner { display: flex; align-items: center; }
.input-spinner .label { font: 500 11px/1 inherit; color: var(--text-tertiary); margin-right: 6px; }
```

**Card (Layer / Panel)**
```css
.panel { background: var(--color-neutral-800); border: 1px solid var(--border-default); border-radius: 0; padding: 0; }
.panel .head { display: flex; align-items: center; gap: 8px; padding: 6px 10px; font: 500 12px/1.3 inherit; color: var(--text-secondary); background: var(--color-neutral-900); border-bottom: 1px solid var(--border-default); }
.panel .body { padding: 8px; }
.layer-row { display: flex; align-items: center; gap: 8px; padding: 5px 8px; border-radius: 2px; cursor: pointer; font: 500 12px/1.3 inherit; }
.layer-row:hover { background: var(--color-neutral-700); }
.layer-row.selected { background: var(--color-primary-400); }
.layer-row .thumb { width: 32px; height: 32px; background: linear-gradient(135deg, var(--color-secondary-500), #7A1E5C); border: 1px solid var(--border-default); border-radius: 2px; flex-shrink: 0; }
.layer-row .name { color: var(--text-primary); }
.layer-row .vis { color: var(--text-tertiary); font-size: 14px; }
.card { background: var(--color-neutral-800); border: 1px solid var(--border-default); border-radius: 0; padding: 12px; }
```

**Badge / Tag**
```css
.tag { padding: 2px 6px; font: 600 10px/1.3 inherit; letter-spacing: 0.02em; }
.tag-blend     { background: var(--color-secondary-500); color: var(--color-primary-500); }
.tag-smart     { background: rgba(49,168,255,0.20); color: var(--color-secondary-500); }
.tag-mask      { background: rgba(255,255,255,0.10); color: #fff; }
.tag-adjustment{ background: rgba(240,176,33,0.20); color: var(--color-warning-fg); }
.tag-cloud     { background: #0F2A1A; color: var(--color-success-fg); }
```

**Navigation (Menu bar + tool rail)**
```css
.menu-bar { background: var(--color-primary-500); padding: 6px 12px; display: flex; align-items: center; gap: 14px; color: var(--text-on-primary); border-bottom: 1px solid var(--border-default); font: 500 12px/1 inherit; }
.menu-bar .brand { width: 22px; height: 22px; background: var(--color-primary-500); border: 1.5px solid var(--color-secondary-500); border-radius: 3px; display: grid; place-items: center; font: 800 11px/1 inherit; color: var(--color-secondary-500); }
.menu-bar .item { color: #fff; cursor: pointer; font-weight: 500; }
.tool-rail { width: 44px; background: var(--color-neutral-900); padding: 6px 4px; display: flex; flex-direction: column; gap: 2px; border-right: 1px solid var(--border-default); }
.tool-rail .tool { width: 36px; height: 36px; border-radius: 2px; background: transparent; color: #B5B5B5; display: grid; place-items: center; cursor: pointer; font-size: 14px; }
.tool-rail .tool:hover { background: var(--color-neutral-700); color: #fff; }
.tool-rail .tool.active { background: var(--color-secondary-500); color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 160ms;
--duration-slow: 240ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. Ps 로고 보더 색을 변경 금지 — 시안 보더가 정체성
2. 캔버스 라이트 모드를 기본으로 사용 금지 — 다크가 표준
3. 메뉴바를 검정으로 변경 금지 — Photoshop Cobalt가 시그니처
4. 카드 라운드 6px+ 사용 금지 — Sharp (2~3px)
5. 숫자 입력에 비례폰트 사용 금지 — tabular-nums

### ⑫ 시그니처 적용 예시 (Editor)
```html
<style>
  body { margin: 0; font-family: 'Adobe Clean', Inter, 'Pretendard', sans-serif; background: #1A1A1A; color: #fff; min-height: 100vh; }
  .app { display: grid; grid-template-rows: 36px 1fr; height: 100vh; }
  .menu-bar { background: #001E36; padding: 6px 14px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid #3A3A3A; }
  .menu-bar .brand { width: 24px; height: 24px; background: #001E36; border: 1.5px solid #31A8FF; border-radius: 3px; display: grid; place-items: center; font: 800 11px/1 inherit; color: #31A8FF; }
  .menu-bar .item { color: rgba(255,255,255,0.85); cursor: pointer; font: 500 12px/1 inherit; }
  .menu-bar .item:hover { color: #fff; }
  .menu-bar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; font: 500 11px/1 inherit; color: rgba(255,255,255,0.7); }
  .editor { display: grid; grid-template-columns: 44px 1fr 280px; min-height: 0; }
  .tool-rail { width: 44px; background: #1F1F1F; padding: 6px 4px; display: flex; flex-direction: column; gap: 2px; border-right: 1px solid #3A3A3A; }
  .tool-rail .tool { width: 36px; height: 36px; border-radius: 2px; background: transparent; color: #B5B5B5; display: grid; place-items: center; cursor: pointer; font-size: 14px; }
  .tool-rail .tool:hover { background: #3F3F3F; color: #fff; }
  .tool-rail .tool.active { background: #31A8FF; color: #001E36; }
  .stage { background: #2A2A2A; display: flex; flex-direction: column; min-height: 0; }
  .stage .options { background: #1F1F1F; padding: 6px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #3A3A3A; font: 500 11px/1 inherit; color: rgba(255,255,255,0.85); }
  .stage .options .ipt { background: #2A2A2A; border: 1px solid #3A3A3A; border-radius: 2px; padding: 4px 6px; font-family: inherit; font-variant-numeric: tabular-nums; font-size: 11px; min-width: 60px; }
  .stage .canvas { flex: 1; background: #535353; display: grid; place-items: center; padding: 32px; overflow: auto; position: relative; }
  .stage .doc { background: #fff; box-shadow: 0 12px 28px rgba(0,0,0,0.40); width: 480px; height: 320px; position: relative; background-image: linear-gradient(135deg, #FF8E72 0%, #7A1E5C 100%); }
  .stage .doc .marquee { position: absolute; left: 30%; top: 25%; width: 40%; height: 50%; border: 1.5px dashed #fff; background: rgba(255,255,255,0.08); }
  .stage .status { background: #1F1F1F; padding: 4px 14px; display: flex; align-items: center; gap: 10px; font: 500 10px/1 inherit; color: rgba(255,255,255,0.7); border-top: 1px solid #3A3A3A; }
  .stage .status .v { font-variant-numeric: tabular-nums; color: #fff; }
  .panels { background: #1F1F1F; border-left: 1px solid #3A3A3A; padding: 8px; display: flex; flex-direction: column; gap: 8px; overflow-y: auto; }
  .panel { background: #2A2A2A; border: 1px solid #3A3A3A; }
  .panel .head { display: flex; align-items: center; gap: 8px; padding: 7px 10px; font: 600 11px/1 inherit; color: rgba(255,255,255,0.85); background: #1F1F1F; border-bottom: 1px solid #3A3A3A; letter-spacing: 0.04em; text-transform: uppercase; }
  .panel .body { padding: 6px; display: flex; flex-direction: column; gap: 3px; font: 500 12px/1.3 inherit; }
  .layer-row { display: flex; align-items: center; gap: 8px; padding: 4px 6px; border-radius: 2px; cursor: pointer; }
  .layer-row:hover { background: #3A3A3A; }
  .layer-row.selected { background: #26477F; }
  .layer-row .vis { color: rgba(255,255,255,0.55); width: 18px; font-size: 12px; }
  .layer-row .thumb { width: 32px; height: 32px; border: 1px solid #535353; flex-shrink: 0; }
  .layer-row .name { font: 500 12px/1.3 inherit; }
  .blend-row { display: grid; grid-template-columns: 70px 1fr; gap: 6px; align-items: center; padding: 4px 6px; font: 500 11px/1 inherit; color: rgba(255,255,255,0.7); }
  .blend-row select { background: #1F1F1F; border: 1px solid #3A3A3A; color: #fff; padding: 4px 6px; font-family: inherit; font-size: 11px; }
  .opacity-row { display: flex; align-items: center; gap: 8px; padding: 4px 6px; font: 500 11px/1 inherit; color: rgba(255,255,255,0.7); }
  .opacity-row .bar { flex: 1; height: 4px; background: #1F1F1F; border-radius: 9999px; position: relative; }
  .opacity-row .bar::after { content:''; position: absolute; left: 0; top: 0; bottom: 0; width: 85%; background: #31A8FF; border-radius: 9999px; }
  .opacity-row .v { font-variant-numeric: tabular-nums; color: #fff; }
</style>

<div class="app">
  <header class="menu-bar">
    <div class="brand">Ps</div>
    <span class="item">파일</span>
    <span class="item">편집</span>
    <span class="item">이미지</span>
    <span class="item">레이어</span>
    <span class="item">유형</span>
    <span class="item">선택</span>
    <span class="item">필터</span>
    <span class="item">3D</span>
    <span class="item">보기</span>
    <span class="item">창</span>
    <span class="item">도움말</span>
    <div class="right"><span>untitled.psd @ 75%</span></div>
  </header>

  <section class="editor">
    <aside class="tool-rail">
      <div class="tool">↖</div>
      <div class="tool active">▱</div>
      <div class="tool">⌒</div>
      <div class="tool">✂</div>
      <div class="tool">✦</div>
      <div class="tool">🖌</div>
      <div class="tool">🩹</div>
      <div class="tool">⛌</div>
      <div class="tool">T</div>
      <div class="tool">⤳</div>
      <div class="tool">⊟</div>
      <div class="tool">📏</div>
    </aside>

    <main class="stage">
      <div class="options">
        <span style="font-weight:600;">사각형 선택 도구</span>
        <span>·</span>
        <span>페더: <input class="ipt" type="text" value="0 px" /></span>
        <span>스타일: <span class="ipt">표준</span></span>
        <span style="margin-left:auto;color:rgba(255,255,255,0.55);">⌥ Shift Drag — 정사각형 선택</span>
      </div>
      <div class="canvas">
        <div class="doc"><div class="marquee"></div></div>
      </div>
      <div class="status">
        <span>문서: <span class="v">12.5MB / 48.2MB</span></span>
        <span>·</span>
        <span>크기: <span class="v">1920 × 1080 px</span></span>
        <span style="margin-left:auto;">75% <span class="v">75%</span></span>
      </div>
    </main>

    <aside class="panels">
      <div class="panel">
        <div class="head">색상 · 색상 견본 · 라이브러리</div>
        <div class="body">
          <div style="display:flex;gap:6px;margin:6px;">
            <div style="width:36px;height:36px;background:#31A8FF;border:1px solid #535353;"></div>
            <div style="width:36px;height:36px;background:#fff;border:1px solid #535353;"></div>
            <div style="flex:1;font-family:'SF Mono',Menlo,monospace;font-size:11px;color:rgba(255,255,255,0.85);align-self:center;">H: 207  S: 81  B: 100</div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="head">레이어</div>
        <div class="body">
          <div class="blend-row"><label>혼합 모드</label><select><option>표준</option></select></div>
          <div class="opacity-row"><label>불투명도</label><div class="bar"></div><span class="v">85%</span></div>
          <div class="layer-row"><span class="vis">👁</span><div class="thumb" style="background:linear-gradient(135deg,#FF8E72,#7A1E5C);"></div><span class="name">배경 그라데이션</span></div>
          <div class="layer-row selected"><span class="vis">👁</span><div class="thumb" style="background:rgba(49,168,255,0.40);border-style:dashed;"></div><span class="name">선택 영역 1</span></div>
          <div class="layer-row"><span class="vis">👁</span><div class="thumb" style="background:#000;"></div><span class="name">텍스트 레이어</span></div>
          <div class="layer-row"><span class="vis">👁</span><div class="thumb" style="background:linear-gradient(135deg,#fff,#888);"></div><span class="name">배경</span></div>
        </div>
      </div>
    </aside>
  </section>
</div>
```
