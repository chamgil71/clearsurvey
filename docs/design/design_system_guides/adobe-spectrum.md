---
brand: Adobe Spectrum
brand_ko: 어도비 스펙트럼
slug: adobe-spectrum
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - creative-tools

color_tone: neutral
primary_color_hex: "#2680EB"
primary_color_name: "Spectrum Blue"
mood:
  - 크리에이티브
  - 정밀
  - 도구적

font_category: sans-serif
font_primary: Adobe Clean
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2024
signature_keyword: "어두운 워크스페이스에서 사용자 콘텐츠가 빛나는 도구 톤"

card_tokens: |
  {
    "light": { "bg": "#1F1F1F", "surface": "#2C2C2C", "border": "#4B4B4B", "fg": "#EFEFEF", "fg_muted": "#C8C8C8", "accent": "#2680EB" },
    "dark":  { "bg": "#080808", "surface": "#1A1A1A", "border": "#3A3A3A", "fg": "#F5F5F5", "fg_muted": "#B3B3B3", "accent": "#378EF0" }
  }

hero_html: |
  <div style="font-family:'Adobe Clean',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-columns:48px 1fr 100px;">
    <div style="background:var(--card-surface);display:flex;flex-direction:column;padding:6px 0;gap:4px;align-items:center;">
      <div style="width:32px;height:32px;border-radius:4px;background:var(--card-accent);display:grid;place-items:center;color:#fff;font-size:14px;">▤</div>
      <div style="width:32px;height:32px;border-radius:4px;color:var(--card-fg-muted);display:grid;place-items:center;font-size:14px;">✎</div>
      <div style="width:32px;height:32px;border-radius:4px;color:var(--card-fg-muted);display:grid;place-items:center;font-size:14px;">⚙</div>
    </div>
    <div style="background:#0F0F0F;display:grid;place-items:center;padding:16px;">
      <div style="width:80%;aspect-ratio:4/3;background:linear-gradient(135deg,#2680EB 0%,#6767EC 50%,#FF75D1 100%);border-radius:4px;box-shadow:0 16px 40px rgba(0,0,0,0.6);"></div>
    </div>
    <div style="padding:10px 8px;border-left:1px solid var(--card-border);display:flex;flex-direction:column;gap:6px;">
      <div style="font-size:10px;font-weight:700;color:var(--card-fg);">Properties</div>
      <div style="background:#393939;border-radius:4px;padding:6px;font-size:9px;color:var(--card-fg-muted);">Layer<br/><span style="color:#fff;font-weight:600;">Background</span></div>
      <button style="background:transparent;color:var(--card-fg);border:2px solid var(--card-fg);border-radius:9999px;padding:4px 8px;font-size:9px;font-weight:700;font-family:inherit;margin-top:auto;">Export</button>
    </div>
  </div>

sources:
  - https://spectrum.adobe.com/
  - https://spectrum.adobe.com/page/color-system/
  - https://spectrum.adobe.com/page/typography/
---

### ① 브랜드 DNA
- **브랜드명**: Adobe Spectrum Design System
- **한 줄 정체성**: 크리에이티브 도구를 위한, 콘텐츠가 주인공이 되는 어두운 캔버스 시스템
- **공식 디자인 철학**: "An evolving, adaptive design system that empowers creativity"
- **시그니처 요소 1개**: Spectrum Blue(#2680EB) + 어두운 워크스페이스 톤(canvas dark) + Adobe Clean 폰트의 정밀 ramp

### ② 톤 & 무드
- **핵심 키워드 3개**: 크리에이티브, 정밀, 도구적
- **무드 설명**: 어두운 캔버스 위에 사용자의 콘텐츠(이미지/영상)가 빛난다. UI는 chrome으로 한 발 물러나고, 강조는 단일 블루로 응축된다.
- **비주얼 스타일**: 모던 미니멀 (도구 인터페이스 톤)
- **밀도(Density)**: Compact / Comfortable 양립 (4 scale: small / medium / large / extra-large)
- **모서리 성향**: Soft (4px 기본)
- **평면성**: Flat — 어두운 캔버스에서는 그림자보다 톤 차이로 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Spectrum Blue */
  --color-primary-50:  #E0F2FF;  /* blue-100 */
  --color-primary-100: #CAE8FF;  /* blue-200 */
  --color-primary-200: #B5DEFF;
  --color-primary-300: #78BBFA;  /* blue-500 */
  --color-primary-400: #4B9CF5;
  --color-primary-500: #2680EB;  /* blue-700 — 기본 accent */
  --color-primary-600: #1473E6;  /* hover */
  --color-primary-700: #0D66D0;
  --color-primary-800: #095ABA;
  --color-primary-900: #064F8C;

  /* Secondary - Spectrum Indigo */
  --color-secondary-500: #6767EC;

  /* Neutral - Spectrum gray */
  --color-neutral-0:    #FFFFFF;     /* gray-50 light */
  --color-neutral-50:   #F5F5F5;     /* gray-100 */
  --color-neutral-100:  #E1E1E1;     /* gray-200 */
  --color-neutral-200:  #CACACA;     /* gray-300 */
  --color-neutral-300:  #B3B3B3;     /* gray-400 */
  --color-neutral-500:  #8E8E8E;     /* gray-500 */
  --color-neutral-700:  #6E6E6E;     /* gray-600 */
  --color-neutral-800:  #4B4B4B;     /* gray-700 */
  --color-neutral-900:  #2C2C2C;     /* gray-800 */
  --color-neutral-1000: #1A1A1A;     /* gray-900 */

  /* Semantic */
  --color-success-bg: #DCF7E3;
  --color-success-fg: #268E6C;
  --color-warning-bg: #FFF4E6;
  --color-warning-fg: #E68619;
  --color-error-bg:   #FFEBE7;
  --color-error-fg:   #D7373F;
  --color-info-bg:    #E0F2FF;
  --color-info-fg:    #2680EB;

  /* Surface (Spectrum Light) */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.40);  /* scrim */

  /* Text */
  --text-primary:    #2C2C2C;
  --text-secondary:  #6E6E6E;
  --text-tertiary:   #8E8E8E;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B3B3B3;

  /* Border */
  --border-default: #CACACA;
  --border-subtle:  #E1E1E1;
  --border-strong:  #8E8E8E;
  --border-focus:   #2680EB;
}

[data-theme="dark"] {
  /* Spectrum Dark — 크리에이티브 도구 기본 */
  --bg-base: #1F1F1F;        /* gray-100 dark */
  --bg-subtle: #2C2C2C;
  --bg-elevated: #393939;
  --bg-overlay: rgba(0,0,0,0.50);
  --text-primary: #EFEFEF;
  --text-secondary: #C8C8C8;
  --border-default: #4B4B4B;
  --color-primary-500: #378EF0;
}

[data-theme="darkest"] {
  /* Photoshop 등 풀 다크 */
  --bg-base: #080808;
  --bg-subtle: #1A1A1A;
  --bg-elevated: #252525;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Adobe Clean (Adobe 라이선스, 웹 폴백 -apple-system)
  - 한글: Adobe Clean Han KR (한국어 가족) / 폴백 Apple SD Gothic Neo
- **위계** (Spectrum scale, medium):
  - Display (Heading XXL): 36px / 700 / 1.2 / 0
  - H1 (Heading XL): 28px / 700 / 1.25 / 0
  - H2 (Heading L): 22px / 700 / 1.27 / 0
  - H3 (Heading M): 18px / 700 / 1.33 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 400 / 1.27 / 0.06em

### ⑤ 스페이싱
- **Base unit**: 4px (Spectrum size-100 = 8px)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 40px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;     /* 기본 */
--radius-lg: 8px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 4px rgba(0,0,0,0.10);
--shadow-md: 0 4px 8px rgba(0,0,0,0.12);                  /* popover */
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);                 /* dialog */
--shadow-xl: 0 12px 32px rgba(0,0,0,0.20);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (Spectrum workflow 18px / UI 16px / illustrative 큰 사이즈)
- **Stroke 굵기**: 2px (workflow 18px)
- **모서리 처리**: Round
- **추천 라이브러리**: @adobe/react-spectrum + @spectrum-icons (Apache 2.0)

### ⑨ 컴포넌트 가이드

**Button** (Spectrum: cta / primary / secondary / negative + fill / outline / quiet)
```css
.btn {
  font: 700 14px/1.286 "Adobe Clean", "Adobe Clean Han KR", -apple-system, sans-serif;
  border-radius: var(--radius-full);   /* Spectrum 기본은 pill */
  padding: 0 18px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 2px solid transparent;
  transition: background 130ms ease, border 130ms ease;
}
.btn-primary { background: var(--text-primary); color: #fff; border-color: var(--text-primary); }
.btn-primary:hover { background: #1A1A1A; border-color: #1A1A1A; }
.btn-primary:active { background: #000; }
.btn-cta { background: var(--color-primary-500); color: #fff; border-color: var(--color-primary-500); }
.btn-cta:hover { background: var(--color-primary-600); border-color: var(--color-primary-600); }

.btn-secondary { background: transparent; color: var(--text-primary); border-color: var(--text-primary); }
.btn-secondary:hover { background: var(--text-primary); color: #fff; }
.btn-ghost { background: transparent; color: var(--text-primary); border-color: transparent; }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; border-color: var(--color-error-fg); }
```

**Input** (Spectrum Text Field)
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 12px;
  height: 32px;
  font-size: 14px;
}
.input:hover { border-color: var(--border-strong); }
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 1px var(--border-focus);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 1px var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Tag**
```css
.tag { padding: 0 10px; height: 22px; border-radius: var(--radius-full); font-size: 12px; font-weight: 400; line-height: 22px; display: inline-flex; align-items: center; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-default); }
.tag-outline { background: transparent; border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Side Nav — workspace style)**
```css
.workspace-nav { width: 64px; background: var(--bg-subtle); display: flex; flex-direction: column; padding: 8px 0; gap: 4px; }
.workspace-nav .icon-btn { width: 48px; height: 48px; border-radius: var(--radius-md); margin: 0 8px; display: grid; place-items: center; color: var(--text-secondary); }
.workspace-nav .icon-btn:hover { background: var(--bg-elevated); color: var(--text-primary); }
.workspace-nav .icon-btn.active { background: var(--color-primary-500); color: #fff; }
```

### ⑩ Motion
```css
--duration-fast: 130ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0, 0, 0.40, 1);
--ease-in-out: cubic-bezier(0.45, 0, 0.40, 1);
```

### ⑪ Anti-patterns
1. 사용자 콘텐츠(canvas) 위에 채도 높은 강조 색 사용 금지 — 작품 색이 왜곡
2. dark/darkest 테마에서 풀 white(#FFF) 텍스트 금지 — 눈부심, gray-900 권장
3. workflow icon과 ui icon을 한 toolbar에서 혼용 금지 — 시각 위계 충돌
4. button을 둥근 사각(8px+)으로 임의 변경 금지 — Spectrum의 pill이 시그니처
5. 워크스페이스 chrome 영역에 brand 컬러 그라데이션 금지 — 콘텐츠 우선 원칙 위배

### ⑫ 시그니처 적용 예시 (Dark workspace)

```html
<style data-theme="dark">
  body[data-theme="dark"] { --bg-base: #1F1F1F; --bg-subtle: #2C2C2C; --bg-elevated: #393939; --text-primary: #EFEFEF; --text-secondary: #C8C8C8; --border-default: #4B4B4B; --color-primary-500: #378EF0; }
  body { margin: 0; font-family: "Adobe Clean", "Adobe Clean Han KR", -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .layout { display: grid; grid-template-columns: 64px 1fr 280px; height: 100vh; }
  .workspace-nav { /* 위 정의 */ }
  .canvas { background: #0F0F0F; display: grid; place-items: center; padding: 32px; position: relative; }
  .artwork { width: min(80%, 720px); aspect-ratio: 4/3; background: linear-gradient(135deg, #2680EB 0%, #6767EC 50%, #FF75D1 100%); border-radius: var(--radius-md); box-shadow: 0 30px 80px rgba(0,0,0,0.5); }
  .panel { background: var(--bg-base); border-left: 1px solid var(--border-default); padding: 16px; }
  .panel h2 { font-size: 14px; font-weight: 700; margin: 0 0 12px; }
  .panel .feature-card { background: var(--bg-elevated); border-radius: var(--radius-md); padding: 12px; margin-bottom: 8px; }
  .panel .feature-card h3 { font-size: 12px; font-weight: 700; margin: 0 0 4px; }
  .panel .feature-card p { font-size: 11px; color: var(--text-secondary); margin: 0; line-height: 1.4; }
</style>

<body data-theme="dark">
<div class="layout">
  <aside class="workspace-nav">
    <div class="icon-btn active">▤</div>
    <div class="icon-btn">✎</div>
    <div class="icon-btn">▣</div>
    <div class="icon-btn">⚙</div>
  </aside>
  <main class="canvas"><div class="artwork"></div></main>
  <aside class="panel">
    <h2>Properties</h2>
    <div class="feature-card"><h3>Layer</h3><p>Background</p></div>
    <div class="feature-card"><h3>Blend Mode</h3><p>Normal · 100%</p></div>
    <div class="feature-card"><h3>Effects</h3><p>2개 적용 — Drop Shadow, Gradient</p></div>
    <button class="btn btn-cta" style="width:100%; margin-top:12px">내보내기</button>
  </aside>
</div>
</body>
```
