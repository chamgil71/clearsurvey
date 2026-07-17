---
brand: Stability AI
brand_ko: 스테빌리티 AI
slug: stability-ai
generated: 2026-05-13
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - ai
  - creative-tools

color_tone: cool
primary_color_hex: "#3D1F8C"
primary_color_name: "Stability Iris"
mood:
  - 오픈소스
  - 깊이
  - 실험적

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2022
last_major_revision: 2025
signature_keyword: "딥 보라(#3D1F8C) → 마젠타 그라데이션 + Stable Diffusion의 디퓨전 노이즈 결"

hero_html: |
  <div style="font-family:'Inter',-apple-system,sans-serif;background:#0A0518;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #1F1538;">
      <div style="width:18px;height:18px;background:linear-gradient(135deg,#3D1F8C,#E94BFF);border-radius:6px;"></div>
      <span style="font-weight:600;">Stability AI</span>
    </div>
    <div style="padding:6px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="background:radial-gradient(circle at 30% 30%, #E94BFF 0%, #3D1F8C 60%, #0A0518 100%);aspect-ratio:1;border-radius:8px;"></div>
      <div style="background:radial-gradient(circle at 70% 70%, #6D4DEA 0%, #2A1080 60%, #0A0518 100%);aspect-ratio:1;border-radius:8px;"></div>
      <div style="background:radial-gradient(circle at 50% 60%, #FF6BC5 0%, #3D1F8C 70%, #0A0518 100%);aspect-ratio:1;border-radius:8px;"></div>
      <div style="background:radial-gradient(circle at 40% 40%, #4DD0F0 0%, #2A1080 65%, #0A0518 100%);aspect-ratio:1;border-radius:8px;"></div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #1F1538;font-size:10px;color:#9F90C8;display:flex;gap:8px;font-family:'JetBrains Mono',monospace;">
      <span>SD3.5</span><span>cfg 7.0</span><span style="margin-left:auto;color:#E94BFF;">●</span>
    </div>
  </div>

sources:
  - https://stability.ai/
---

### ① 브랜드 DNA
- **브랜드명**: Stability AI
- **한 줄 정체성**: Stable Diffusion / SD3 / SDXL을 만드는 오픈 이미지·비디오 모델 회사
- **공식 디자인 철학**: "Open generative AI for everyone" — 오픈소스 + 실험적
- **시그니처 요소 1개**: 딥 보라(#3D1F8C) → 마젠타(#E94BFF) 라디얼 그라데이션과 디퓨전 노이즈 결. Midjourney의 잔잔한 라일락과 차별되는 "더 진한, 더 채도 있는" 보라

### ② 톤 & 무드
- **핵심 키워드 3개**: 오픈소스, 깊이, 실험적
- **무드 설명**: 어두운 잉크-퍼플 캔버스 위에 라디얼 그라데이션이 시그니처. 텍스트는 절제하고, 이미지/그래픽이 캔버스의 70%를 차지. 학술 + 데모 사이의 톤.
- **비주얼 스타일**: 모던 미니멀 (라디얼 그라데이션 시그니처)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (8~12px)
- **평면성**: Layered — 라디얼 글로우, 미세 elevation

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Stability Iris (딥 보라) */
  --color-primary-50:  #F2EBFE;
  --color-primary-100: #DEC9FB;
  --color-primary-200: #BC95F8;
  --color-primary-300: #9A62F4;
  --color-primary-400: #7D44E2;
  --color-primary-500: #6028C8;
  --color-primary-600: #4D1FAA;
  --color-primary-700: #3D1F8C;     /* 시그니처 */
  --color-primary-800: #2A1080;
  --color-primary-900: #1A0A50;

  /* Secondary - Magenta (그라데이션 종점) */
  --color-secondary-300: #FF93E4;
  --color-secondary-500: #E94BFF;
  --color-secondary-700: #B12FCC;

  /* Neutral - Ink purple */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F5FA;
  --color-neutral-100:  #EBE7F2;
  --color-neutral-300:  #9F90C8;
  --color-neutral-500:  #5F4F8A;
  --color-neutral-700:  #2F2052;
  --color-neutral-800:  #1F1538;
  --color-neutral-900:  #0A0518;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #051F1E;
  --color-success-fg: #4DD0B8;
  --color-warning-bg: #2A1B05;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #2A0D14;
  --color-error-fg:   #FF6BB5;
  --color-info-bg:    #0F1B36;
  --color-info-fg:    #4DD0F0;

  /* Surface */
  --bg-base:     #0A0518;
  --bg-subtle:   #14092E;
  --bg-elevated: #1F1538;
  --bg-overlay:  rgba(0,0,0,0.70);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #D4C5E6;
  --text-tertiary:   #9F90C8;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5F4F8A;

  /* Border */
  --border-default: #1F1538;
  --border-subtle:  #14092E;
  --border-strong:  #2F2052;
  --border-focus:   #E94BFF;

  /* Brand gradient (signature) */
  --gradient-iris: radial-gradient(circle at 30% 30%, #E94BFF 0%, #3D1F8C 55%, #0A0518 100%);
  --gradient-line: linear-gradient(90deg, #3D1F8C 0%, #E94BFF 100%);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Inter (OFL) / -apple-system 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드/파라미터: JetBrains Mono / IBM Plex Mono
- **위계**:
  - Display: 56px / 600 / 1.1 / -0.025em
  - H1: 36px / 600 / 1.2 / -0.02em
  - H2: 24px / 600 / 1.3 / -0.015em
  - H3: 18px / 600 / 1.4 / -0.01em
  - Body Large: 17px / 400 / 1.6 / 0
  - Body: 15px / 400 / 1.55 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Code/Param: 13px / 400 / 1.5 mono
  - Caption: 11px / 500 / 1.4 / 0.06em uppercase

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1200px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 6px 20px rgba(61,31,140,0.30);
--shadow-lg: 0 24px 64px rgba(61,31,140,0.45);
--shadow-iris: 0 0 48px rgba(233,75,255,0.30);  /* 라디얼 글로우 */
```

### ⑧ Iconography
- **스타일**: Outline (1.5px)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 14px/1 Inter,sans-serif; padding: 10px 18px; border-radius: 8px; border: 1px solid var(--border-default); background: var(--bg-elevated); color: var(--text-primary); transition: background 150ms ease, box-shadow 150ms ease; cursor: pointer; }
.btn:hover { background: #2A1B4A; }
.btn-primary { background: var(--gradient-line); color: var(--text-on-primary); border-color: transparent; }
.btn-primary:hover { box-shadow: var(--shadow-iris); }
.btn-ghost { background: transparent; border-color: transparent; color: var(--color-secondary-300); }
```

**Input (Prompt)**
```css
.prompt { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 12px; padding: 12px 14px; font: 400 14px/1.5 Inter,sans-serif; color: var(--text-primary); width: 100%; }
.prompt:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 4px rgba(233,75,255,0.15); }
```

**Card (Image tile)**
```css
.tile { aspect-ratio: 1; border-radius: 12px; background: var(--bg-elevated); overflow: hidden; position: relative; }
.tile-iris { background: var(--gradient-iris); }
.tile .params { position: absolute; left: 8px; bottom: 8px; background: rgba(0,0,0,0.6); padding: 3px 8px; border-radius: 9999px; font: 500 10px/1 'JetBrains Mono',monospace; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 10px; border-radius: 9999px; font: 500 11px/1.4 Inter,sans-serif; }
.tag-iris { background: var(--color-primary-900); color: var(--color-secondary-300); border: 1px solid var(--color-primary-700); }
.tag-model { font-family: 'JetBrains Mono',monospace; background: var(--bg-elevated); color: var(--text-secondary); border: 1px solid var(--border-default); }
```

**Navigation**
```css
.topbar { background: rgba(10,5,24,0.85); backdrop-filter: blur(12px); padding: 14px 22px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid var(--border-default); }
.topbar .logo { width: 26px; height: 26px; background: var(--gradient-line); border-radius: 7px; }
.topbar h1 { font: 600 16px/1 Inter,sans-serif; letter-spacing: -0.01em; margin: 0; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 600ms;         /* 디퓨전 페이드인 */
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-diffusion: cubic-bezier(0.4, 0, 0.6, 1);
```

### ⑪ Anti-patterns
1. 채도 낮은 라이트 톤 캔버스 사용 금지 — 항상 잉크-퍼플
2. 보색(노랑·녹색) 액센트 사용 금지 — 보라/마젠타 그라데이션 한 톤만
3. 라디얼 그라데이션 위에 본문 텍스트 직접 배치 금지 — 어두운 카드 layer 필수
4. 모서리 sharp(<6px) 사용 금지 — 부드러운 디퓨전 톤 유지
5. 흰 카드 사용 금지 — 모든 카드는 다크 elevated

### ⑫ 시그니처 적용 예시

```html
<style>
  .st-app { font: 15px/1.55 Inter, -apple-system, sans-serif; background: #0A0518; color: #fff; min-height: 480px; display: grid; grid-template-rows: auto 1fr auto; }
  .st-app .top { padding: 14px 22px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #1F1538; backdrop-filter: blur(12px); }
  .st-app .top .logo { width: 28px; height: 28px; background: linear-gradient(135deg,#3D1F8C,#E94BFF); border-radius: 8px; }
  .st-app .top h1 { font: 600 17px/1 inherit; letter-spacing: -0.01em; margin: 0; }
  .st-app .top .v { margin-left: auto; padding: 4px 10px; border-radius: 9999px; background: #1F1538; border: 1px solid #2F2052; font: 500 11px/1.3 'JetBrains Mono',monospace; color: #D4C5E6; }
  .st-app .stage { padding: 20px 22px; display: grid; grid-template-columns: 1fr 280px; gap: 18px; }
  .st-app .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .st-app .tile { aspect-ratio: 1; border-radius: 12px; position: relative; overflow: hidden; }
  .st-app .tile.a { background: radial-gradient(circle at 28% 30%, #E94BFF 0%, #3D1F8C 55%, #0A0518 100%); }
  .st-app .tile.b { background: radial-gradient(circle at 70% 65%, #6D4DEA 0%, #2A1080 55%, #0A0518 100%); }
  .st-app .tile.c { background: radial-gradient(circle at 50% 60%, #FF6BC5 0%, #3D1F8C 65%, #0A0518 100%); }
  .st-app .tile.d { background: radial-gradient(circle at 35% 40%, #4DD0F0 0%, #2A1080 65%, #0A0518 100%); }
  .st-app .tile .par { position: absolute; left: 10px; bottom: 10px; background: rgba(0,0,0,0.55); padding: 3px 8px; border-radius: 9999px; font: 500 10px/1 'JetBrains Mono',monospace; }
  .st-app .side { background: #14092E; border: 1px solid #1F1538; border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
  .st-app .side h3 { font: 600 11px/1 inherit; color: #9F90C8; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 4px; }
  .st-app .side .row { display: flex; justify-content: space-between; font: 400 13px/1.5 inherit; color: #D4C5E6; }
  .st-app .side .row .v { font-family: 'JetBrains Mono',monospace; color: #fff; }
  .st-app .prompt { background: #1F1538; border: 1px solid #2F2052; border-radius: 12px; padding: 12px 16px; display: flex; align-items: center; gap: 10px; }
  .st-app .prompt input { all: unset; flex: 1; color: #fff; font-size: 14px; }
  .st-app .prompt input::placeholder { color: #9F90C8; }
  .st-app .prompt .submit { background: linear-gradient(90deg,#3D1F8C,#E94BFF); color: #fff; padding: 7px 16px; border-radius: 9999px; font: 500 12px/1 inherit; }
</style>

<div class="st-app">
  <header class="top">
    <div class="logo"></div>
    <h1>Stability AI</h1>
    <span class="v">SD3.5 Large</span>
  </header>
  <main class="stage">
    <div>
      <div class="grid">
        <div class="tile a"><span class="par">cfg 7.0</span></div>
        <div class="tile b"><span class="par">steps 30</span></div>
        <div class="tile c"><span class="par">seed 8472</span></div>
        <div class="tile d"><span class="par">cfg 9.0</span></div>
      </div>
    </div>
    <aside class="side">
      <h3>Parameters</h3>
      <div class="row"><span>Model</span><span class="v">SD3.5-L</span></div>
      <div class="row"><span>Steps</span><span class="v">30</span></div>
      <div class="row"><span>CFG</span><span class="v">7.0</span></div>
      <div class="row"><span>Aspect</span><span class="v">1:1</span></div>
      <div class="row"><span>Seed</span><span class="v">8472</span></div>
    </aside>
  </main>
  <div class="prompt" style="margin:0 22px 18px;">
    <input placeholder="cinematic forest at dusk, soft mist…" />
    <span class="submit">Diffuse →</span>
  </div>
</div>
```
