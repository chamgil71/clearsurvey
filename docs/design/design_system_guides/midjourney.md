---
brand: Midjourney
brand_ko: 미드저니
slug: midjourney
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai
  - creative-tools

color_tone: cool
primary_color_hex: "#5865F2"
primary_color_name: "MJ Iris"
mood:
  - 몽환
  - 예술적
  - 큐레이션

font_category: sans-serif
font_primary: Suisse Int'l
font_korean_supported: true

density: spacious
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2022
last_major_revision: 2025
signature_keyword: "잉크-블루 캔버스 + 이미지 그리드가 주연, UI는 무대 뒤로 사라지는 갤러리 톤"

hero_html: |
  <div style="font-family:'Suisse Intl','Inter',-apple-system,sans-serif;background:#0E0E11;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:8px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #1A1A1F;">
      <div style="width:18px;height:18px;background:linear-gradient(135deg,#5865F2,#A78BFA);border-radius:50%;"></div>
      <span style="font-weight:500;letter-spacing:-0.01em;">Midjourney</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:4px;padding:6px;">
      <div style="background:linear-gradient(135deg,#3D2C5E,#7C4D8E);aspect-ratio:1;border-radius:6px;"></div>
      <div style="background:linear-gradient(135deg,#1B2D4A,#5865F2);aspect-ratio:1;border-radius:6px;"></div>
      <div style="background:linear-gradient(135deg,#522B2B,#C97F5E);aspect-ratio:1;border-radius:6px;"></div>
      <div style="background:linear-gradient(135deg,#1E3A36,#5E9B86);aspect-ratio:1;border-radius:6px;"></div>
    </div>
    <div style="padding:8px 12px;border-top:1px solid #1A1A1F;">
      <div style="background:#1A1A1F;border-radius:8px;padding:8px 10px;color:#A1A1AA;font-size:10px;">
        cinematic forest at dusk, mist…
      </div>
    </div>
  </div>

sources:
  - https://www.midjourney.com/
---

### ① 브랜드 DNA
- **브랜드명**: Midjourney
- **한 줄 정체성**: 텍스트 → 회화적 이미지를 생성하는, 가장 예술적 결을 가진 AI 이미지 모델
- **공식 디자인 철학**: "Imagination as a service" — UI를 최소화하고 결과물(이미지)이 무대를 차지
- **시그니처 요소 1개**: 잉크-블루 #0E0E11 캔버스 + 4분할 이미지 그리드 + 보라(#5865F2)~라일락 그라데이션. Discord 시절의 보라 톤을 웹앱에 그대로 이식

### ② 톤 & 무드
- **핵심 키워드 3개**: 몽환, 예술적, 큐레이션
- **무드 설명**: AI 도구라기보다 갤러리. 텍스트는 작고 조용하며 이미지가 화면의 80%를 차지. UI 자체는 검정에 가까운 잉크 톤으로 사라져 결과물이 두드러지게 함.
- **비주얼 스타일**: 모던 미니멀 (이미지 중심 큐레이션)
- **밀도(Density)**: Spacious — 이미지 패딩, 풍부한 마진
- **모서리 성향**: Soft (6~8px)
- **평면성**: Layered — 이미지 위 hover overlay/parameter chip

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - MJ Iris */
  --color-primary-50:  #EEF0FF;
  --color-primary-100: #DCE0FE;
  --color-primary-200: #B5BCFC;
  --color-primary-300: #8E96F9;
  --color-primary-400: #7178F5;
  --color-primary-500: #5865F2;
  --color-primary-600: #4751C4;
  --color-primary-700: #383F99;
  --color-primary-800: #282D6E;
  --color-primary-900: #1B1F4F;

  /* Secondary - Lilac (그라데이션 종점) */
  --color-secondary-300: #C4B5FD;
  --color-secondary-500: #A78BFA;
  --color-secondary-700: #7C4DCA;

  /* Neutral - Ink */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F7;
  --color-neutral-100:  #E5E5EA;
  --color-neutral-300:  #A1A1AA;
  --color-neutral-500:  #71717A;
  --color-neutral-700:  #2D2D33;
  --color-neutral-800:  #1A1A1F;
  --color-neutral-900:  #0E0E11;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #06281C;
  --color-success-fg: #34D399;
  --color-warning-bg: #2A1B05;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #2A0D14;
  --color-error-fg:   #FB7185;
  --color-info-bg:    #1B1F4F;
  --color-info-fg:    #A78BFA;

  /* Surface */
  --bg-base:     #0E0E11;
  --bg-subtle:   #14141A;
  --bg-elevated: #1A1A1F;
  --bg-overlay:  rgba(0,0,0,0.70);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #B4B4BB;
  --text-tertiary:   #71717A;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #52525B;

  /* Border */
  --border-default: #2D2D33;
  --border-subtle:  #1A1A1F;
  --border-strong:  #52525B;
  --border-focus:   #A78BFA;

  /* Brand gradient (logo/orb) */
  --gradient-orb: linear-gradient(135deg, #5865F2 0%, #A78BFA 100%);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Suisse Int'l (Swiss Typefaces) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드/프롬프트: JetBrains Mono / IBM Plex Mono
- **위계**:
  - Display: 48px / 500 / 1.15 / -0.02em
  - H1: 28px / 500 / 1.25 / -0.015em
  - H2: 20px / 500 / 1.3 / -0.01em
  - H3: 14px / 500 / 1.4 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 12px / 400 / 1.5 / 0
  - Prompt: 13px / 400 / 1.55 mono
  - Caption: 11px / 500 / 1.4 / 0.04em

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
- **Container**: 풀스크린 갤러리, 좌측 사이드바 220px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;     /* 이미지 카드 시그니처 */
--radius-lg: 12px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
--shadow-md: 0 6px 20px rgba(0,0,0,0.55);
--shadow-lg: 0 24px 64px rgba(0,0,0,0.7);
--shadow-iris: 0 0 32px rgba(88,101,242,0.25);  /* hover orb */
```

### ⑧ Iconography
- **스타일**: Outline (얇게)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 13px/1 'Suisse Intl',Inter,sans-serif; padding: 9px 16px; border-radius: 6px; border: 1px solid var(--border-default); background: var(--bg-elevated); color: var(--text-primary); transition: background 150ms ease; cursor: pointer; }
.btn:hover { background: #25252D; }
.btn-primary { background: var(--gradient-orb); color: var(--text-on-primary); border-color: transparent; }
.btn-primary:hover { box-shadow: var(--shadow-iris); }
.btn-ghost { background: transparent; border-color: transparent; color: var(--text-secondary); }
```

**Input (Prompt bar)**
```css
.prompt { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; padding: 10px 14px; font: 400 13px/1.5 'JetBrains Mono',monospace; color: var(--text-primary); width: 100%; }
.prompt:focus { outline: none; border-color: var(--border-focus); }
.prompt::placeholder { color: var(--text-tertiary); font-family: 'Suisse Intl',sans-serif; }
```

**Card (Image tile)**
```css
.tile { position: relative; aspect-ratio: 1; border-radius: 6px; overflow: hidden; background: var(--bg-subtle); }
.tile .overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 40%); opacity: 0; transition: opacity 200ms ease; padding: 8px; display: flex; align-items: flex-end; font: 400 11px/1.4 'Suisse Intl',sans-serif; color: var(--text-primary); }
.tile:hover .overlay { opacity: 1; }
```

**Badge**
```css
.tag { padding: 3px 8px; border-radius: 9999px; font: 500 10px/1.4 'Suisse Intl',sans-serif; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-param { background: var(--bg-elevated); color: var(--text-secondary); border: 1px solid var(--border-default); font-family: 'JetBrains Mono',monospace; text-transform: none; letter-spacing: 0; }
.tag-iris { background: var(--color-primary-900); color: var(--color-secondary-300); border: 1px solid var(--color-primary-700); }
```

**Navigation**
```css
.sidebar { background: var(--bg-base); border-right: 1px solid var(--border-default); padding: 16px 12px; display: flex; flex-direction: column; gap: 4px; }
.sidebar .item { padding: 8px 12px; border-radius: 6px; font: 500 13px/1.3 'Suisse Intl',sans-serif; color: var(--text-secondary); display: flex; align-items: center; gap: 10px; cursor: pointer; }
.sidebar .item:hover { background: var(--bg-elevated); color: var(--text-primary); }
.sidebar .item.active { background: var(--bg-elevated); color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 600ms;     /* 이미지 페이드인 */
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-emphasized: cubic-bezier(0.4, 0, 0, 1);
```

### ⑪ Anti-patterns
1. 이미지 카드 위에 두꺼운 보더 사용 금지 — 갤러리 톤 유지
2. 채도 높은 보색 액센트 사용 금지 — 보라 한 톤만
3. 이미지 그리드에 라운드(>8px) 사용 금지 — 작품 액자 톤
4. UI 텍스트를 이미지 위 직접 배치 금지 — 항상 어두운 overlay 위
5. 흰 배경 모드 강제 금지 — 다크가 디폴트

### ⑫ 시그니처 적용 예시

```html
<style>
  .mj-app { font: 13px/1.5 'Suisse Intl', Inter, -apple-system, sans-serif; background: #0E0E11; color: #fff; min-height: 480px; display: grid; grid-template-columns: 200px 1fr; }
  .mj-app .side { background: #0E0E11; border-right: 1px solid #2D2D33; padding: 16px 12px; display: flex; flex-direction: column; gap: 2px; }
  .mj-app .side .brand { display: flex; align-items: center; gap: 10px; padding: 4px 8px 16px; }
  .mj-app .side .brand .orb { width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg,#5865F2,#A78BFA); }
  .mj-app .side .brand h1 { margin: 0; font: 500 14px/1 inherit; letter-spacing: -0.01em; }
  .mj-app .side .item { padding: 8px 10px; border-radius: 6px; font: 500 13px/1 inherit; color: #B4B4BB; display: flex; align-items: center; gap: 10px; cursor: pointer; }
  .mj-app .side .item.active { background: #1A1A1F; color: #fff; }
  .mj-app .main { padding: 20px 24px; display: grid; grid-template-rows: auto 1fr auto; gap: 16px; }
  .mj-app .main h2 { margin: 0; font: 500 22px/1.2 inherit; letter-spacing: -0.015em; }
  .mj-app .main .meta { color: #71717A; font-size: 11px; margin-top: 2px; letter-spacing: 0.04em; text-transform: uppercase; }
  .mj-app .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
  .mj-app .tile { position: relative; aspect-ratio: 1; border-radius: 6px; overflow: hidden; }
  .mj-app .tile.a { background: linear-gradient(135deg,#3D2C5E 0%,#7C4D8E 45%,#A78BFA 100%); }
  .mj-app .tile.b { background: linear-gradient(160deg,#0F1B36 0%,#1B2D4A 45%,#5865F2 100%); }
  .mj-app .tile.c { background: linear-gradient(120deg,#522B2B 0%,#8E4F4F 50%,#FBBF24 100%); }
  .mj-app .tile.d { background: linear-gradient(140deg,#1E3A36 0%,#3A6B5E 45%,#5E9B86 100%); }
  .mj-app .tile .params { position: absolute; left: 8px; bottom: 8px; padding: 3px 7px; border-radius: 9999px; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); font: 500 10px/1 'JetBrains Mono',monospace; color: #fff; }
  .mj-app .prompt { background: #1A1A1F; border: 1px solid #2D2D33; border-radius: 8px; padding: 10px 14px; font: 400 13px/1.5 'JetBrains Mono',monospace; color: #fff; display: flex; align-items: center; gap: 10px; }
  .mj-app .prompt .ph { flex: 1; color: #B4B4BB; }
  .mj-app .prompt .params2 { color: #A78BFA; }
  .mj-app .prompt .submit { background: linear-gradient(135deg,#5865F2,#A78BFA); color: #fff; padding: 6px 14px; border-radius: 9999px; font: 500 12px/1 'Suisse Intl',sans-serif; }
</style>

<div class="mj-app">
  <aside class="side">
    <div class="brand"><div class="orb"></div><h1>Midjourney</h1></div>
    <div class="item active">✦ Explore</div>
    <div class="item">⌘ Create</div>
    <div class="item">♥ Personalize</div>
    <div class="item">⎙ Organize</div>
  </aside>
  <main class="main">
    <div>
      <h2>cinematic forest at dusk</h2>
      <div class="meta">4 IMAGES · V7 · 1:1 · STYLIZE 250</div>
    </div>
    <div class="grid">
      <div class="tile a"><span class="params">--ar 1:1</span></div>
      <div class="tile b"><span class="params">--s 250</span></div>
      <div class="tile c"><span class="params">--chaos 30</span></div>
      <div class="tile d"><span class="params">--v 7</span></div>
    </div>
    <div class="prompt">
      <span class="ph">cinematic forest at dusk, soft mist, golden light <span class="params2">--ar 16:9 --v 7</span></span>
      <span class="submit">Generate</span>
    </div>
  </main>
</div>
```
