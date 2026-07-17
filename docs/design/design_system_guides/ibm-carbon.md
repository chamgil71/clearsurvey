---
brand: IBM Carbon
brand_ko: IBM 카본
slug: ibm-carbon
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - enterprise

color_tone: cool
primary_color_hex: "#0F62FE"
primary_color_name: "IBM Blue 60"
mood:
  - 정밀
  - 신뢰
  - 엔터프라이즈

font_category: sans-serif
font_primary: IBM Plex Sans
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2014
last_major_revision: 2024
signature_keyword: "IBM Plex와 2x grid가 만드는 sharp한 엔터프라이즈 정밀함"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F4F4F4", "border": "#E0E0E0", "fg": "#161616", "fg_muted": "#525252", "accent": "#0F62FE" },
    "dark":  { "bg": "#161616", "surface": "#262626", "border": "#393939", "fg": "#F4F4F4", "fg_muted": "#C6C6C6", "accent": "#4589FF" }
  }

hero_html: |
  <div style="font-family:'IBM Plex Sans','Segoe UI',sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:#161616;color:#fff;padding:8px 16px;font-size:12px;font-weight:600;display:flex;gap:8px;align-items:center;border-bottom:1px solid #393939;">
      <span style="font-weight:700;">IBM</span>
      <span style="opacity:0.8;font-weight:400;">Cloud Platform</span>
    </div>
    <div style="padding:20px 16px;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:600;color:var(--card-accent);letter-spacing:0.32px;margin-bottom:12px;">01 — PRODUCTIVE</div>
      <h2 style="font-size:32px;font-weight:300;line-height:1.16;margin:0 0 8px;">Engineered<br/><strong style="font-weight:600;color:var(--card-accent);">for scale.</strong></h2>
      <p style="font-size:12px;color:var(--card-fg-muted);line-height:1.43;margin:0;">2x grid, layered tokens, Plex.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--card-border);">
      <div style="background:var(--card-bg);padding:8px 12px;font-size:11px;color:var(--card-fg-muted);">layer-01</div>
      <div style="background:var(--card-surface);padding:8px 12px;font-size:11px;color:var(--card-fg-muted);">layer-02</div>
    </div>
    <button style="background:var(--card-accent);color:#fff;border:0;border-radius:0;padding:14px 16px;font-size:13px;font-weight:400;font-family:inherit;letter-spacing:0.16px;text-align:left;">Get started →</button>
  </div>

sources:
  - https://carbondesignsystem.com/
  - https://carbondesignsystem.com/elements/colors/overview/
  - https://www.ibm.com/plex/
---

### ① 브랜드 DNA
- **브랜드명**: IBM Carbon Design System
- **한 줄 정체성**: 엔터프라이즈 스케일에서도 일관성을 유지하는 IBM의 오픈소스 디자인 시스템
- **공식 디자인 철학**: "Designed for the IBM brand — open by default, built for scale"
- **시그니처 요소 1개**: IBM Plex Sans + 2x grid + 강렬한 IBM Blue 70(#0F62FE) — 차분한 grayscale 위에 한 점 떨어지는 코발트 블루

### ② 톤 & 무드
- **핵심 키워드 3개**: 정밀, 신뢰, 엔터프라이즈
- **무드 설명**: 타이트한 그리드, 명확한 컴포넌트 구분, 거의 직각에 가까운 모서리. 데이터 밀도가 높은 화면에서 안정적으로 동작하도록 설계됐다.
- **비주얼 스타일**: 모던 미니멀 + 약간의 브루털리즘 (sharp edges, 강한 contrast)
- **밀도(Density)**: Compact — 데이터 테이블, 폼 위주의 엔터프라이즈 UI에 최적화
- **모서리 성향**: Sharp (0~2px) — Carbon은 거의 직각이 정체성
- **평면성**: Flat — elevation은 최소, 라인과 surface tone으로 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - IBM Blue (Carbon Blue scale) */
  --color-primary-50:  #EDF5FF;  /* blue-10 */
  --color-primary-100: #D0E2FF;  /* blue-20 */
  --color-primary-200: #A6C8FF;  /* blue-30 */
  --color-primary-300: #78A9FF;  /* blue-40 */
  --color-primary-400: #4589FF;  /* blue-50 */
  --color-primary-500: #0F62FE;  /* blue-60 — interactive 기본 */
  --color-primary-600: #0043CE;  /* blue-70 — hover */
  --color-primary-700: #002D9C;  /* blue-80 */
  --color-primary-800: #001D6C;  /* blue-90 */
  --color-primary-900: #001141;  /* blue-100 */

  /* Secondary - Cyan (보조 강조) */
  --color-secondary-500: #1192E8;

  /* Neutral - Gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F4F4;  /* gray-10 */
  --color-neutral-100:  #E0E0E0;  /* gray-20 */
  --color-neutral-200:  #C6C6C6;  /* gray-30 */
  --color-neutral-300:  #A8A8A8;  /* gray-40 */
  --color-neutral-500:  #8D8D8D;  /* gray-50 */
  --color-neutral-700:  #525252;  /* gray-70 */
  --color-neutral-800:  #393939;  /* gray-80 */
  --color-neutral-900:  #262626;  /* gray-90 */
  --color-neutral-1000: #161616;  /* gray-100 */

  /* Semantic */
  --color-success-bg: #DEFBE6;
  --color-success-fg: #24A148;
  --color-warning-bg: #FCF4D6;
  --color-warning-fg: #F1C21B;
  --color-error-bg:   #FFF1F1;
  --color-error-fg:   #DA1E28;
  --color-info-bg:    #EDF5FF;
  --color-info-fg:    #0043CE;

  /* Surface (Carbon은 ui-01 ~ ui-05 layered tokens) */
  --bg-base:     #FFFFFF;       /* background */
  --bg-subtle:   #F4F4F4;       /* layer-01 */
  --bg-elevated: #FFFFFF;       /* layer-02 */
  --bg-overlay:  #F4F4F4;       /* overlay */

  /* Text */
  --text-primary:    #161616;   /* text-primary */
  --text-secondary:  #525252;   /* text-secondary */
  --text-tertiary:   #6F6F6F;   /* text-helper */
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C6C6C6;

  /* Border */
  --border-default: #C6C6C6;    /* border-strong */
  --border-subtle:  #E0E0E0;    /* border-subtle */
  --border-strong:  #8D8D8D;
  --border-focus:   #0F62FE;    /* focus */
}

[data-theme="dark"] {
  --bg-base: #161616;           /* g100 background */
  --bg-subtle: #262626;
  --bg-elevated: #393939;
  --text-primary: #F4F4F4;
  --text-secondary: #C6C6C6;
}
```

### ③.1 사용 컨텍스트 주석
- `--color-primary-500` (blue-60): 모든 interactive (버튼, 링크, focus)
- `--bg-subtle` (layer-01): 카드, 폼 내부 컨테이너
- `--border-focus`: 2px outline + 1px inner offset (Carbon 표준 focus ring)

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: IBM Plex Sans (OFL) / IBM Plex Mono (코드)
  - 한글: IBM Plex Sans KR (OFL)
- **위계** (Carbon type scale, productive):
  - Display: 42px / 300 / 1.19 / 0
  - H1 (Heading 06): 32px / 400 / 1.25 / 0
  - H2 (Heading 05): 28px / 400 / 1.29 / 0
  - H3 (Heading 04): 20px / 400 / 1.4 / 0
  - Body Large (Body 02): 16px / 400 / 1.5 / 0
  - Body (Body 01): 14px / 400 / 1.43 / 0.16px
  - Body Small (Helper text): 12px / 400 / 1.33 / 0.32px
  - Caption (Code 01): 12px / 400 / 1.33 / 0.32px (Plex Mono)

### ⑤ 스페이싱
- **Base unit**: 8px (Carbon 2x grid, 16px column gutter)
- **토큰** (Carbon spacing scale):
  ```css
  --space-xs:  4px;   /* spacing-02 */
  --space-sm:  8px;   /* spacing-03 */
  --space-md: 16px;   /* spacing-05 */
  --space-lg: 24px;   /* spacing-06 */
  --space-xl: 32px;   /* spacing-07 */
  --space-2xl: 48px;  /* spacing-09 */
  --space-3xl: 64px;  /* spacing-10 */
  ```
- **Container**: 12 column grid, 16px gutter, max-width none (fluid)

### ⑥ Border Radius
```css
--radius-none: 0;        /* Carbon 기본 */
--radius-sm: 2px;        /* 거의 사용 안 함 */
--radius-md: 4px;        /* button 강조 시 */
--radius-lg: 8px;        /* 일부 카드 */
--radius-xl: 12px;
--radius-full: 9999px;   /* tag */
```
**Carbon의 사실상 기본은 0px (sharp)**. 라운드는 예외적으로만.

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.10);                       /* 거의 안 씀 */
--shadow-md: 0 2px 6px rgba(0,0,0,0.12);                       /* tooltip */
--shadow-lg: 0 4px 12px rgba(0,0,0,0.14);                      /* dropdown, popover */
--shadow-xl: 0 8px 20px rgba(0,0,0,0.20);                      /* modal */
```
elevation은 최소화하고 layer token으로 위계 표현.

### ⑧ Iconography
- **스타일**: Outline (Carbon Icons는 outline 단일 weight)
- **Stroke 굵기**: 1px / 2px (16/20/24/32px 사이즈별 자동 매핑)
- **모서리 처리**: Square (sharp)
- **추천 라이브러리**: @carbon/icons (Apache 2.0, 2,000+)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 400 14px/1.43 "IBM Plex Sans", "IBM Plex Sans KR", sans-serif;
  letter-spacing: 0.16px;
  border-radius: 0;
  padding: 0 16px;
  height: 48px;
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid transparent;
  transition: background 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:focus { outline: 2px solid var(--border-focus); outline-offset: -3px; box-shadow: inset 0 0 0 1px #fff; }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--color-neutral-800); color: #fff; }
.btn-secondary:hover { background: var(--color-neutral-700); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--color-neutral-100); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input** (Carbon Text Input — 하단 underline 강조)
```css
.input {
  background: var(--bg-subtle);
  border: 0;
  border-bottom: 1px solid var(--border-default);
  border-radius: 0;
  padding: 0 16px;
  height: 40px;
  font-size: 14px;
}
.input:focus {
  outline: 2px solid var(--border-focus);
  outline-offset: -2px;
  border-bottom-color: transparent;
}
.input[aria-invalid="true"] { outline: 2px solid var(--color-error-fg); outline-offset: -2px; }
```

**Card (Tile)**
```css
.card { background: var(--bg-subtle); padding: 16px; border-radius: 0; }
.card-elevated { background: var(--bg-elevated); box-shadow: var(--shadow-md); }
.card-outlined { background: var(--bg-base); border: 1px solid var(--border-subtle); }
```

**Badge / Tag**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-full); font-size: 12px; font-weight: 400; }
.tag-solid   { background: var(--color-primary-700); color: #fff; }
.tag-subtle  { background: var(--color-primary-100); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (UI Shell — Header)**
```css
.shell-header {
  height: 48px;
  background: var(--color-neutral-1000);  /* Carbon 헤더는 g100 검정 */
  color: #fff;
  display: flex; align-items: center; padding: 0 16px;
  border-bottom: 1px solid var(--color-neutral-800);
}
.shell-header a { color: #f4f4f4; padding: 0 16px; height: 48px; display: flex; align-items: center; }
.shell-header a:hover { background: var(--color-neutral-800); }
```

### ⑩ Motion
Carbon 표준 productive (70ms) / expressive (240ms+) 분리:
```css
--duration-fast: 70ms;
--duration-base: 110ms;
--duration-slow: 240ms;
--ease-out: cubic-bezier(0, 0, 0.38, 0.9);             /* productive entrance */
--ease-in-out: cubic-bezier(0.2, 0, 0.38, 0.9);        /* productive standard */
```

### ⑪ Anti-patterns
1. 컴포넌트에 라운드(>4px) 임의 적용 금지 — Carbon의 sharp 정체성 위반
2. Plex Sans를 다른 산세리프로 대체 금지
3. blue-60(#0F62FE)을 brand 컬러 외 보조 강조에 분산 사용 금지 — 단일 interactive 신호 보존
4. 데이터 테이블에 다채로운 색 사용 금지 — gray-10/20 layer만으로 zebra 표현
5. focus ring을 outline:none으로 제거 금지 — 키보드 접근성 핵심

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "IBM Plex Sans", "IBM Plex Sans KR", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .shell-header { /* 위 정의 사용 */ }
  .hero { padding: 96px 32px; max-width: 1248px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: center; }
  .hero h1 { font-size: 54px; font-weight: 300; line-height: 1.16; letter-spacing: 0; margin: 0 0 16px; }
  .hero h1 strong { font-weight: 600; color: var(--color-primary-500); display: block; }
  .hero p { font-size: 16px; color: var(--text-secondary); margin: 0 0 32px; line-height: 1.5; }
  .grid-image { aspect-ratio: 4/3; background: linear-gradient(135deg, #001D6C, #0F62FE); border-radius: 0; }
  .features { max-width: 1248px; margin: 0 auto; padding: 0 32px 96px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border-subtle); border: 1px solid var(--border-subtle); }
  .feature-card { background: var(--bg-base); padding: 32px 24px; }
  .feature-card .num { font: 600 12px/1.33 "IBM Plex Mono", monospace; color: var(--color-primary-500); letter-spacing: 0.32px; margin-bottom: 16px; }
  .feature-card h3 { font-size: 20px; font-weight: 400; margin: 0 0 12px; line-height: 1.4; }
  .feature-card p { font-size: 14px; line-height: 1.43; color: var(--text-secondary); margin: 0; }
</style>

<header class="shell-header">
  <span style="font-weight:600">IBM</span>&nbsp;<span>Cloud Platform</span>
</header>

<section class="hero">
  <div>
    <h1>Engineered<strong>for scale.</strong></h1>
    <p>Carbon은 IBM의 모든 제품에 일관성, 접근성, 그리고 신뢰를 공급합니다.</p>
    <button class="btn btn-primary">시작하기 →</button>
  </div>
  <div class="grid-image"></div>
</section>

<div class="features">
  <div class="feature-card"><div class="num">01 — Productive</div><h3>2x Grid</h3><p>16열 그리드와 16px gutter로 데이터 밀도를 정확히 제어.</p></div>
  <div class="feature-card"><div class="num">02 — Plex</div><h3>IBM Plex Sans</h3><p>IBM 전용 폰트 가족, 라틴/그리스/키릴/일본어/한국어 지원.</p></div>
  <div class="feature-card"><div class="num">03 — Tokens</div><h3>Layered Tokens</h3><p>layer-01/02/03 토큰으로 다중 surface를 자동 처리.</p></div>
</div>
```
