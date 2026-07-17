---
brand: Spline
brand_ko: 스플라인
slug: spline
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - creative-tools
  - dev-tools

color_tone: cool
primary_color_hex: "#5E5CE6"
primary_color_name: "Spline Violet"
mood:
  - 3D웹
  - 보라그라데이션
  - 인터랙티브

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal
  - glassmorphism

theme_modes:
  - dark

released_year: 2020
last_major_revision: 2024
signature_keyword: "보라·블루 그라데이션 + 3D 도형 + 글래스 인스펙터의 웹 인터랙티브 3D"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#0E0E14;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(80% 80% at 70% 20%, rgba(94,92,230,0.30) 0%, transparent 60%), radial-gradient(60% 60% at 30% 90%, rgba(64,165,255,0.20) 0%, transparent 60%);"></div>
    <div style="position:relative;padding:10px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,0.08);">
      <span style="display:inline-block;width:14px;height:14px;background:linear-gradient(135deg,#5E5CE6,#9A6FFF);border-radius:50%;"></span>
      <strong style="font-size:13px;font-weight:600;letter-spacing:-0.01em;">Spline</strong>
      <span style="margin-left:auto;font-size:9px;color:#A0A0BB;">untitled.spline</span>
    </div>
    <div style="position:relative;display:grid;place-items:center;padding:14px;">
      <div style="display:flex;align-items:flex-end;gap:10px;">
        <div style="width:42px;height:42px;background:linear-gradient(135deg,#7A6BFF,#5E5CE6);border-radius:6px;transform:rotate(-12deg) skewY(-6deg);box-shadow:0 14px 24px rgba(94,92,230,0.50);"></div>
        <div style="width:38px;height:38px;background:linear-gradient(180deg,#F9A8D4,#EC4899);border-radius:50%;box-shadow:0 14px 24px rgba(236,72,153,0.30);"></div>
        <div style="width:38px;height:54px;background:linear-gradient(135deg,#FFD460,#F59E0B);border-radius:8px;transform:rotate(8deg);box-shadow:0 14px 24px rgba(245,158,11,0.30);"></div>
      </div>
    </div>
    <div style="position:relative;padding:6px 14px;background:rgba(255,255,255,0.04);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:6px;font-size:9px;color:#A0A0BB;">
      <span>● Scene · 3 objects</span>
      <span style="margin-left:auto;color:#5E5CE6;font-weight:600;">PLAY</span>
    </div>
  </div>

sources:
  - https://spline.design/
  - https://docs.spline.design/
---

### ① 브랜드 DNA
- **브랜드명**: Spline
- **한 줄 정체성**: 웹 인터랙티브 3D 디자인 툴 — 브라우저에서 직접 모델링·애니메이션
- **공식 디자인 철학**: "3D for the web, made simple" — 보라·블루 그라데이션의 미래 톤
- **시그니처 요소 1개**: Spline Violet(#5E5CE6) + 보라·블루 그라데이션 광원 + 글래스(blur) 인스펙터 + 3D 도형 미리보기. Sketch/Adobe의 평면 UI와 정반대의 인터랙티브 3D 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 3D웹, 보라그라데이션, 인터랙티브
- **무드 설명**: 깊은 다크 캔버스(#0E0E14) + 보라/블루/핑크 광원이 캔버스에 스민다. 인스펙터는 blur(20px) glassmorphism. 3D 도형이 두둥실 떠있다.
- **비주얼 스타일**: 모던 미니멀 + 글래스모피즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (10~14px)
- **평면성**: Layered

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Spline Violet */
  --color-primary-50:  #ECEBFE;
  --color-primary-100: #CDC9FD;
  --color-primary-200: #A8A4F9;
  --color-primary-300: #8580F4;
  --color-primary-400: #6E6AEE;
  --color-primary-500: #5E5CE6;   /* Spline Violet */
  --color-primary-600: #4847B8;
  --color-primary-700: #34338A;
  --color-primary-800: #22215C;
  --color-primary-900: #11102E;

  /* Secondary - Sky / Pink (gradient light) */
  --color-secondary-500: #40A5FF;
  --color-accent-pink:   #F9A8D4;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5FA;
  --color-neutral-100:  #E5E5F0;
  --color-neutral-200:  #C0C0D0;
  --color-neutral-300:  #8A8AA0;
  --color-neutral-500:  #555570;
  --color-neutral-700:  #2A2A40;
  --color-neutral-800:  #1A1A26;
  --color-neutral-900:  #14141C;
  --color-neutral-1000: #0E0E14;

  /* Semantic */
  --color-success-bg: #0F2A1A;
  --color-success-fg: #34C273;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #FFB84F;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #FF4D6D;
  --color-info-bg:    #0F1F3A;
  --color-info-fg:    #40A5FF;

  /* Surface */
  --bg-base:     #0E0E14;
  --bg-subtle:   #14141C;
  --bg-elevated: rgba(255,255,255,0.04);    /* glass panels */
  --bg-canvas:   #0E0E14;
  --bg-overlay:  rgba(0,0,0,0.80);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.78);
  --text-tertiary:   #A0A0BB;
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(255,255,255,0.28);

  /* Border */
  --border-default: rgba(255,255,255,0.08);
  --border-subtle:  rgba(255,255,255,0.04);
  --border-strong:  rgba(255,255,255,0.16);
  --border-focus:   #5E5CE6;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 56px / 700 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 20px / 600 / 1.3 / -0.005em
  - H3: 14px / 600 / 1.35 / 0
  - Body Large: 15px / 400 / 1.5 / 0
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
  --space-md: 12px;
  --space-lg: 18px;
  --space-xl: 28px;
  --space-2xl: 44px;
  --space-3xl: 64px;
  ```
- **Container**: 데스크톱 풀스크린

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
--shadow-md: 0 8px 24px rgba(0,0,0,0.45);
--shadow-lg: 0 18px 36px rgba(0,0,0,0.55);
--shadow-violet: 0 14px 28px rgba(94,92,230,0.40);   /* 3D 도형 글로우 */
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 Inter, 'Pretendard', sans-serif; border-radius: 9999px; padding: 9px 16px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-secondary { background: rgba(255,255,255,0.08); color: #fff; backdrop-filter: blur(20px); }
.btn-ghost { background: transparent; color: var(--color-primary-300); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-play { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; padding: 10px 18px; }
.btn-tool { width: 36px; height: 36px; padding: 0; border-radius: 50%; background: rgba(255,255,255,0.08); color: #fff; backdrop-filter: blur(20px); }
```

**Input**
```css
.input { background: rgba(255,255,255,0.06); border: 1px solid transparent; border-radius: 6px; padding: 6px 10px; color: #fff; font: 400 12px/1.3 inherit; font-variant-numeric: tabular-nums; backdrop-filter: blur(20px); }
.input:focus { outline: none; border-color: var(--color-primary-500); background: rgba(255,255,255,0.10); }
```

**Card (Inspector glass + Object)**
```css
.glass { background: rgba(255,255,255,0.04); backdrop-filter: blur(28px); border: 1px solid var(--border-default); border-radius: 14px; padding: 14px; }
.glass .head { font: 700 11px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 10px; }
.glass .row { display: grid; grid-template-columns: 50px 1fr 1fr; gap: 6px; align-items: center; margin-bottom: 4px; font: 500 12px/1 inherit; }
.glass .row label { color: var(--text-tertiary); }
.scene-item { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; cursor: pointer; font: 500 12px/1.3 inherit; color: var(--text-secondary); }
.scene-item:hover { background: rgba(255,255,255,0.06); color: #fff; }
.scene-item.selected { background: rgba(94,92,230,0.20); color: var(--color-primary-300); }
.scene-item .ic { width: 18px; text-align: center; color: var(--color-primary-300); }
.card { background: rgba(255,255,255,0.04); backdrop-filter: blur(28px); border: 1px solid var(--border-default); border-radius: 14px; padding: 16px; }
```

**Badge / Tag**
```css
.tag { padding: 4px 8px; border-radius: 9999px; font: 600 11px/1.4 inherit; letter-spacing: 0.02em; }
.tag-mesh     { background: rgba(94,92,230,0.16); color: var(--color-primary-300); }
.tag-light    { background: rgba(255,184,79,0.16); color: var(--color-warning-fg); }
.tag-event    { background: rgba(64,165,255,0.16); color: var(--color-info-fg); }
.tag-export   { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-beta     { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: rgba(14,14,20,0.6); backdrop-filter: blur(20px); padding: 10px 16px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid var(--border-default); position: sticky; top: 0; z-index: 10; }
.topbar .brand { display: flex; align-items: center; gap: 8px; font: 700 16px/1 inherit; letter-spacing: -0.01em; }
.topbar .brand .dot { width: 18px; height: 18px; background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-300)); border-radius: 50%; }
.topbar .tools { display: flex; gap: 6px; align-items: center; }
.topbar .right { margin-left: auto; display: flex; gap: 10px; align-items: center; font: 500 12px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-3d: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 다크 캔버스 없이 라이트로 변경 금지 — 3D 광원 톤이 시그니처
2. 인스펙터에 solid 배경 사용 금지 — glassmorphism이 정체성
3. 보라·블루 외 그라데이션으로 변경 금지 — Violet single accent
4. 3D 도형 그림자 생략 금지 — Layered depth
5. 폰트를 세리프로 변경 금지 — Inter 산세리프

### ⑫ 시그니처 적용 예시 (Editor)
```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', sans-serif; background: #0E0E14; color: #fff; min-height: 100vh; }
  .app { display: grid; grid-template-rows: 50px 1fr; height: 100vh; position: relative; overflow: hidden; }
  .app::before { content:''; position: absolute; inset: 0; background: radial-gradient(80% 60% at 70% 0%, rgba(94,92,230,0.30) 0%, transparent 60%), radial-gradient(60% 50% at 30% 100%, rgba(64,165,255,0.20) 0%, transparent 60%); pointer-events: none; z-index: 0; }
  .topbar { position: relative; z-index: 2; background: rgba(14,14,20,0.6); backdrop-filter: blur(20px); padding: 11px 18px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .topbar .brand { display: flex; align-items: center; gap: 8px; font: 700 16px/1 inherit; letter-spacing: -0.01em; }
  .topbar .brand .dot { width: 18px; height: 18px; background: linear-gradient(135deg,#5E5CE6,#9A6FFF); border-radius: 50%; }
  .topbar .tools { display: flex; gap: 6px; align-items: center; }
  .topbar .tools .tool { width: 32px; height: 32px; border-radius: 9999px; background: rgba(255,255,255,0.06); display: grid; place-items: center; cursor: pointer; font-size: 13px; color: rgba(255,255,255,0.78); }
  .topbar .tools .tool:hover { background: rgba(255,255,255,0.12); }
  .topbar .tools .tool.active { background: #5E5CE6; color: #fff; }
  .topbar .right { margin-left: auto; display: flex; gap: 10px; align-items: center; font: 500 13px/1 inherit; }
  .topbar .right .play { background: linear-gradient(135deg,#5E5CE6,#40A5FF); color: #fff; font-weight: 600; padding: 8px 16px; border-radius: 9999px; cursor: pointer; }
  .topbar .right .share { background: rgba(255,255,255,0.06); padding: 8px 14px; border-radius: 9999px; cursor: pointer; backdrop-filter: blur(20px); }
  .editor { position: relative; z-index: 1; display: grid; grid-template-columns: 220px 1fr 260px; min-height: 0; padding: 14px; gap: 14px; }
  .panel { background: rgba(255,255,255,0.04); backdrop-filter: blur(28px); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 14px; overflow-y: auto; }
  .panel h3 { font: 700 11px/1 inherit; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.55); margin: 0 0 12px; }
  .scene-item { display: flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 8px; cursor: pointer; font: 500 12px/1.3 inherit; color: rgba(255,255,255,0.78); margin-bottom: 2px; }
  .scene-item:hover { background: rgba(255,255,255,0.06); color: #fff; }
  .scene-item.selected { background: rgba(94,92,230,0.20); color: #8580F4; }
  .scene-item .ic { width: 20px; text-align: center; color: #8580F4; font-size: 14px; }
  .scene-item.indent { padding-left: 22px; }
  .canvas { position: relative; display: grid; place-items: center; border-radius: 14px; overflow: hidden; }
  .scene { display: flex; align-items: flex-end; gap: 24px; perspective: 800px; }
  .obj { box-shadow: 0 18px 36px rgba(0,0,0,0.50); }
  .obj.cube { width: 96px; height: 96px; background: linear-gradient(135deg,#7A6BFF,#5E5CE6); border-radius: 8px; transform: rotateX(-18deg) rotateY(28deg); box-shadow: 0 18px 36px rgba(94,92,230,0.50); }
  .obj.ball { width: 90px; height: 90px; background: radial-gradient(circle at 30% 25%, #FBCFE8, #EC4899 70%, #8A1F4F); border-radius: 50%; box-shadow: 0 18px 36px rgba(236,72,153,0.40); }
  .obj.pill { width: 88px; height: 132px; background: linear-gradient(135deg,#FFD460,#F59E0B); border-radius: 14px; transform: rotate(8deg) rotateX(-12deg); box-shadow: 0 18px 36px rgba(245,158,11,0.40); }
  .canvas .badge { position: absolute; left: 18px; top: 18px; background: rgba(255,255,255,0.06); backdrop-filter: blur(20px); padding: 6px 10px; border-radius: 9999px; font: 600 11px/1 inherit; color: #fff; letter-spacing: 0.04em; text-transform: uppercase; }
  .canvas .controls { position: absolute; right: 18px; bottom: 18px; display: flex; gap: 6px; }
  .canvas .controls .b { background: rgba(255,255,255,0.06); backdrop-filter: blur(20px); padding: 8px 12px; border-radius: 9999px; font: 600 12px/1 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
  .panel.right .row { display: grid; grid-template-columns: 56px 1fr 1fr 1fr; gap: 6px; align-items: center; margin-bottom: 5px; font: 500 12px/1 inherit; }
  .panel.right .row label { color: rgba(255,255,255,0.6); }
  .panel.right .row .ipt { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 6px 8px; color: #fff; font: 500 12px/1 inherit; font-variant-numeric: tabular-nums; }
  .panel.right .section { padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.06); }
  .panel.right .section:first-of-type { border-top: 0; padding-top: 0; }
  .panel.right .color-row { display: flex; align-items: center; gap: 8px; padding: 4px 0; font: 500 12px/1 inherit; color: rgba(255,255,255,0.78); }
  .panel.right .color-row .swatch { width: 22px; height: 22px; border-radius: 4px; }
</style>

<div class="app">
  <header class="topbar">
    <div class="brand"><div class="dot"></div>Spline</div>
    <div class="tools">
      <div class="tool active">↖</div>
      <div class="tool">⬜</div>
      <div class="tool">○</div>
      <div class="tool">↗</div>
      <div class="tool">💡</div>
      <div class="tool">📷</div>
    </div>
    <div class="right">
      <span class="share">공유</span>
      <span class="play">▶ Play</span>
    </div>
  </header>

  <section class="editor">
    <aside class="panel left">
      <h3>Scene</h3>
      <div class="scene-item"><span class="ic">▼</span>Scene</div>
      <div class="scene-item indent"><span class="ic">⬜</span>Camera</div>
      <div class="scene-item indent"><span class="ic">💡</span>Directional Light</div>
      <div class="scene-item indent"><span class="ic">▼</span>Group</div>
      <div class="scene-item indent" style="padding-left:36px;"><span class="ic">⬜</span>Cube</div>
      <div class="scene-item indent selected" style="padding-left:36px;"><span class="ic">○</span>Sphere</div>
      <div class="scene-item indent" style="padding-left:36px;"><span class="ic">▣</span>Pill</div>
    </aside>

    <div class="canvas">
      <span class="badge">Scene · 3 objects</span>
      <div class="scene">
        <div class="obj cube"></div>
        <div class="obj ball"></div>
        <div class="obj pill"></div>
      </div>
      <div class="controls">
        <span class="b">−</span>
        <span class="b">100%</span>
        <span class="b">＋</span>
      </div>
    </div>

    <aside class="panel right">
      <h3>Sphere</h3>
      <div class="section">
        <div class="row"><label>Position</label><input class="ipt" value="0.00" /><input class="ipt" value="0.00" /><input class="ipt" value="0.00" /></div>
        <div class="row"><label>Rotation</label><input class="ipt" value="0°" /><input class="ipt" value="0°" /><input class="ipt" value="0°" /></div>
        <div class="row"><label>Scale</label><input class="ipt" value="1.00" /><input class="ipt" value="1.00" /><input class="ipt" value="1.00" /></div>
      </div>
      <div class="section">
        <h3>Material</h3>
        <div class="color-row"><div class="swatch" style="background:radial-gradient(circle at 30% 25%,#FBCFE8,#EC4899 70%,#8A1F4F);"></div><span>Hot Pink Glass</span></div>
        <div class="row" style="margin-top:8px;"><label>Roughness</label><input class="ipt" value="0.15" /><input class="ipt" value="" /><input class="ipt" value="" /></div>
      </div>
      <div class="section">
        <h3>Events</h3>
        <div class="scene-item" style="padding:8px 10px;background:rgba(64,165,255,0.16);color:#9DCBFF;"><span class="ic" style="color:#9DCBFF;">▶</span>On Hover · Scale 1.10</div>
      </div>
    </aside>
  </section>
</div>
```
