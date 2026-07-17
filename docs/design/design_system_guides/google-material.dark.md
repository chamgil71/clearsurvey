---
brand: Google Material Design
brand_ko: 구글 머티리얼 디자인
slug: google-material
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - consumer

color_tone: mixed
primary_color_hex: "#4285F4"
primary_color_name: "Google Blue"
mood:
  - 적응적
  - 표현력 있는
  - 친근한

font_category: sans-serif
font_primary: Roboto
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2014
last_major_revision: 2021
signature_keyword: "Material You의 Dynamic Color가 사용자 취향대로 흐르는 시스템"

card_tokens: |
  {
    "light": { "bg": "#E8F0FE", "surface": "#FFFFFF", "border": "#DADCE0", "fg": "#1F1F1F", "fg_muted": "#5F6368", "accent": "#4285F4" },
    "dark":  { "bg": "#1F1F1F", "surface": "#2D2D2D", "border": "#3C3C3C", "fg": "#E3E3E3", "fg_muted": "#C4C7C5", "accent": "#8AB4F8" }
  }

hero_html: |
  <div style="font-family:Roboto,'Noto Sans KR','Segoe UI',sans-serif;background:linear-gradient(135deg,#1A2A42 0%,#3A1E22 50%,#332A14 100%);color:var(--card-fg);padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;border-radius:0 0 28px 28px;">
    <div>
      <div style="font-size:11px;font-weight:500;color:var(--card-fg-muted);letter-spacing:0.5px;text-transform:uppercase;">MATERIAL YOU</div>
      <h2 style="font-size:32px;font-weight:400;line-height:1.12;letter-spacing:-0.25px;margin:8px 0 12px;">당신을 닮은<br/>디자인.</h2>
      <p style="font-size:13px;color:var(--card-fg-muted);margin:0;line-height:1.4;">배경화면에서 추출한 색이 모든 표면에 흐릅니다.</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
      <button style="background:var(--card-accent);color:#1F1F1F;border:0;border-radius:9999px;padding:10px 20px;font-size:13px;font-weight:500;font-family:inherit;">시작</button>
      <button style="background:var(--card-surface);color:var(--card-accent);border:0;border-radius:9999px;padding:10px 20px;font-size:13px;font-weight:500;font-family:inherit;">더 알아보기</button>
    </div>
    <div style="display:flex;gap:4px;">
      <span style="width:22px;height:22px;border-radius:50%;background:#8AB4F8;"></span>
      <span style="width:22px;height:22px;border-radius:50%;background:#81C995;"></span>
      <span style="width:22px;height:22px;border-radius:50%;background:#FDD663;"></span>
      <span style="width:22px;height:22px;border-radius:50%;background:#F28B82;"></span>
    </div>
  </div>

sources:
  - https://m3.material.io/
  - https://m3.material.io/styles/color/system/overview
  - https://fonts.google.com/specimen/Roboto
---

### ① 브랜드 DNA
- **브랜드명**: Google Material Design (Material 3 / "Material You")
- **한 줄 정체성**: 종이와 잉크의 물리적 메타포로 설계된, 표현력과 적응성을 갖춘 시스템
- **공식 디자인 철학**: "Personal, adaptive, expressive" — 사용자 개인의 취향과 디바이스 컨텍스트에 적응하는 표현 가능한 디자인
- **시그니처 요소 1개**: Dynamic Color (Material You) — 사용자 배경화면에서 추출한 동적 색상 팔레트와 HCT(Hue/Chroma/Tone) 기반 토큰

### ② 톤 & 무드
- **핵심 키워드 3개**: 적응적, 표현력 있는, 친근한
- **무드 설명**: 깨끗한 베이스 위에 둥글고 풍부한 색이 자연스럽게 얹힌다. 그림자보다는 톤(tonal elevation)으로 깊이를 만들고, 모서리는 후하게 둥글다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (M3는 더 둥글고 컬러풀해짐)
- **밀도(Density)**: Comfortable — 모바일 우선 터치 친화 (FAB 56dp, 최소 48dp 타깃)
- **모서리 성향**: Round (12~28px, M3 Expressive에서 더 큰 라운드)
- **평면성**: Layered — tonal elevation (5단계 dp + tone shift)

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Material Blue (M3 dark scheme: 어두운 표면 위 대비를 위해 라이트 톤이 기본 액센트) */
  --color-primary-50:  #16223A;  /* darkest container */
  --color-primary-100: #1B2D4D;
  --color-primary-200: #1F3A66;
  --color-primary-300: #2A5599;
  --color-primary-400: #4285F4;
  --color-primary-500: #8AB4F8;  /* Google Blue (dark accent 기본) */
  --color-primary-600: #AECBFA;  /* hover/pressed */
  --color-primary-700: #C5D9FB;
  --color-primary-800: #D2E3FC;
  --color-primary-900: #E8F0FE;

  /* Secondary - Material Tertiary 영역에 해당 */
  --color-secondary-500: #D0BCFF;  /* M3 tertiary 예시 (dark-legible) */

  /* Neutral (inverted ramp) */
  --color-neutral-0:    #1F1F1F;
  --color-neutral-50:   #28292C;  /* surface dim */
  --color-neutral-100:  #2D2D2D;
  --color-neutral-200:  #3C4043;
  --color-neutral-300:  #5F6368;  /* outline-variant */
  --color-neutral-500:  #80868B;  /* outline */
  --color-neutral-700:  #BDC1C6;
  --color-neutral-800:  #DADCE0;
  --color-neutral-900:  #E8EAED;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #1B2D22;
  --color-success-fg: #81C995;  /* Google Green (dark) */
  --color-warning-bg: #322811;
  --color-warning-fg: #FDD663;  /* Google Yellow (dark) */
  --color-error-bg:   #2E1A17;
  --color-error-fg:   #F28B82;  /* Google Red (dark) */
  --color-info-bg:    #16223A;
  --color-info-fg:    #8AB4F8;

  /* Surface (M3 dark tonal elevation) */
  --bg-base:     #1F1F1F;        /* surface */
  --bg-subtle:   #28292C;        /* surface-container-low */
  --bg-elevated: #2D2D2D;        /* surface-container */
  --bg-overlay:  #3C3C3C;        /* surface-container-high */

  /* Text */
  --text-primary:    #E3E3E3;    /* on-surface */
  --text-secondary:  #C4C7C5;    /* on-surface-variant */
  --text-tertiary:   #9AA0A6;
  --text-on-primary: #1F1F1F;
  --text-disabled:   rgba(227,227,227,0.38);

  /* Border */
  --border-default: #3C4043;     /* outline-variant */
  --border-subtle:  #2D2D2D;
  --border-strong:  #5F6368;     /* outline */
  --border-focus:   #8AB4F8;
}

[data-theme="light"] {
  /* Primary - Material Blue (M3 baseline) */
  --color-primary-50:  #E8F0FE;
  --color-primary-100: #D2E3FC;
  --color-primary-200: #AECBFA;
  --color-primary-300: #8AB4F8;
  --color-primary-400: #669DF6;
  --color-primary-500: #4285F4;  /* Google Blue 기본 */
  --color-primary-600: #1A73E8;  /* hover/pressed */
  --color-primary-700: #1967D2;
  --color-primary-800: #185ABC;
  --color-primary-900: #174EA6;

  /* Secondary - Material Tertiary 영역에 해당 */
  --color-secondary-500: #7B1FA2;  /* M3 tertiary 예시 */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FA;  /* surface dim */
  --color-neutral-100:  #F1F3F4;
  --color-neutral-200:  #E8EAED;
  --color-neutral-300:  #DADCE0;  /* outline-variant */
  --color-neutral-500:  #9AA0A6;  /* outline */
  --color-neutral-700:  #5F6368;
  --color-neutral-800:  #3C4043;
  --color-neutral-900:  #202124;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #34A853;  /* Google Green */
  --color-warning-bg: #FEF7E0;
  --color-warning-fg: #FBBC04;  /* Google Yellow */
  --color-error-bg:   #FCE8E6;
  --color-error-fg:   #EA4335;  /* Google Red */
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #4285F4;

  /* Surface (M3 tonal elevation) */
  --bg-base:     #FFFFFF;        /* surface */
  --bg-subtle:   #F8F9FA;        /* surface-container-low */
  --bg-elevated: #F1F3F4;        /* surface-container */
  --bg-overlay:  #E8EAED;        /* surface-container-high */

  /* Text */
  --text-primary:    #1F1F1F;    /* on-surface */
  --text-secondary:  #5F6368;    /* on-surface-variant */
  --text-tertiary:   #80868B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(31,31,31,0.38);

  /* Border */
  --border-default: #DADCE0;     /* outline-variant */
  --border-subtle:  #E8EAED;
  --border-strong:  #9AA0A6;     /* outline */
  --border-focus:   #4285F4;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Roboto (Apache 2.0) / Roboto Flex (가변폰트)
  - 한글: Noto Sans KR (OFL)
- **위계** (M3 type scale):
  - Display Large: 57px / 400 / 1.12 / -0.25px
  - H1 (Headline Large): 32px / 400 / 1.25 / 0
  - H2 (Headline Medium): 28px / 400 / 1.29 / 0
  - H3 (Headline Small): 24px / 400 / 1.33 / 0
  - Body Large (Title Medium): 16px / 500 / 1.5 / 0.15px
  - Body: 14px / 400 / 1.43 / 0.25px
  - Body Small: 12px / 400 / 1.33 / 0.4px
  - Caption (Label Small): 11px / 500 / 1.45 / 0.5px

### ⑤ 스페이싱
- **Base unit**: 4dp (모든 간격은 4의 배수)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1440px, 좌우 패딩 16px (compact) / 24px (medium) / 200px+ (expanded)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;     /* 작은 칩 */
--radius-md: 12px;    /* 버튼 (M3는 full corner 권장) */
--radius-lg: 16px;    /* 카드 */
--radius-xl: 28px;    /* dialog, FAB extended */
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
M3는 그림자보다 surface tonal shift를 우선하지만, 표준 5단계 elevation은 유지:
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.45), 0 1px 3px 1px rgba(0,0,0,0.30);   /* Level 1 — 카드 */
--shadow-md: 0 1px 2px rgba(0,0,0,0.45), 0 2px 6px 2px rgba(0,0,0,0.30);   /* Level 2 — 버튼 elevated */
--shadow-lg: 0 4px 8px 3px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.55);   /* Level 3 — FAB, top app bar */
--shadow-xl: 0 6px 10px 4px rgba(0,0,0,0.35), 0 2px 3px rgba(0,0,0,0.60);  /* Level 4-5 — modal, navigation drawer */
```

### ⑧ Iconography
- **스타일**: Outline / Filled / Rounded / Sharp / Two-tone (Material Symbols 가변 axis 지원)
- **Stroke 굵기**: 가변 (100~700 weight axis)
- **모서리 처리**: Round 기본 (Material Symbols Rounded)
- **추천 라이브러리**: Material Symbols (공식, 3,000+) / Material Icons

### ⑨ 컴포넌트 가이드

**Button** (M3 5종: Filled / Tonal / Elevated / Outlined / Text)
```css
.btn {
  font: 500 14px/1.43 'Roboto', 'Noto Sans KR', sans-serif;
  letter-spacing: 0.1px;
  border-radius: var(--radius-full);
  padding: 10px 24px;
  height: 40px;
  transition: background 100ms ease;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); box-shadow: var(--shadow-sm); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: rgba(227,227,227,0.12); color: var(--text-disabled); }

.btn-secondary { background: var(--color-primary-50); color: var(--color-primary-700); } /* Tonal */
.btn-ghost { background: transparent; color: var(--color-primary-500); padding: 10px 12px; }
.btn-danger { background: var(--color-error-fg); color: #1F1F1F; }
```

**Input** (Outlined Text Field)
```css
.input {
  background: transparent;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  font-size: 16px;
  color: var(--text-primary);
}
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  border-width: 2px;
  padding: 13px 15px;
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card**
```css
.card {
  background: var(--bg-elevated);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
}
.card-elevated { background: var(--bg-base); box-shadow: var(--shadow-sm); }
.card-outlined { background: var(--bg-base); border: 1px solid var(--border-default); }
```

**Badge / Chip**
```css
.chip { padding: 6px 12px; border-radius: 8px; font-size: 14px; font-weight: 500; }
.chip-solid   { background: var(--color-primary-500); color: #1F1F1F; }
.chip-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.chip-outline { border: 1px solid var(--border-strong); color: var(--text-primary); }
```

**Navigation (Top App Bar)**
```css
.appbar {
  height: 64px;
  background: var(--bg-base);
  display: flex; align-items: center; padding: 0 16px; gap: 12px;
}
.appbar.scrolled { background: var(--bg-elevated); }
.appbar h1 { font-size: 22px; font-weight: 400; margin: 0; }
```

### ⑩ Motion
M3 표준 emphasized easing 사용:
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.05, 0.7, 0.1, 1);    /* emphasized decelerate */
--ease-in-out: cubic-bezier(0.2, 0, 0, 1);      /* emphasized */
```

### ⑪ Anti-patterns
1. 그림자만으로 elevation 표현하지 말 것 — M3는 tonal shift 우선
2. Primary/Secondary/Tertiary 색을 컴포넌트별로 임의 매핑 금지 — 토큰 역할 위반
3. 작은 라운드(<4px)와 큰 라운드(>24px)를 한 화면에 섞지 말 것
4. Roboto 본문에 letter-spacing 0 사용 금지 — 가독성 의도가 깨짐
5. FAB을 페이지에 2개 이상 배치 금지 — primary action 모호

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: 'Roboto', 'Noto Sans KR', sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .hero { padding: 96px 24px; text-align: center; background: linear-gradient(135deg, #16223A 0%, #3A1E22 50%, #332A14 100%); border-radius: 0 0 var(--radius-xl) var(--radius-xl); }
  .hero h1 { font-size: 57px; font-weight: 400; line-height: 1.12; letter-spacing: -0.25px; margin: 0 0 16px; color: var(--color-neutral-900); }
  .hero p { font-size: 18px; color: var(--text-secondary); margin: 0 0 32px; }
  .cta { display: inline-flex; gap: 12px; }
  .features { max-width: 1200px; margin: 64px auto; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .feature-card { background: var(--bg-elevated); border-radius: 28px; padding: 32px; transition: background 100ms ease; }
  .feature-card:hover { background: var(--bg-overlay); }
  .feature-card .icon { width: 56px; height: 56px; border-radius: 16px; background: var(--color-primary-50); color: var(--color-primary-700); display: grid; place-items: center; font-size: 28px; margin-bottom: 16px; }
  .feature-card h3 { font-size: 22px; font-weight: 500; margin: 0 0 8px; }
  .feature-card p { font-size: 14px; line-height: 1.5; color: var(--text-secondary); margin: 0; }
</style>

<section class="hero">
  <h1>당신을 닮은 디자인.</h1>
  <p>Material You는 사용자의 색을 따라 모든 표면이 살아납니다.</p>
  <div class="cta">
    <button class="btn btn-primary">시작하기</button>
    <button class="btn btn-secondary">더 알아보기</button>
  </div>
</section>

<div class="features">
  <div class="feature-card"><div class="icon">◆</div><h3>Dynamic Color</h3><p>배경화면에서 추출한 색이 모든 화면에 흐릅니다.</p></div>
  <div class="feature-card"><div class="icon">▣</div><h3>Adaptive Layout</h3><p>폰부터 폴더블, 태블릿까지 자연스럽게 적응합니다.</p></div>
  <div class="feature-card"><div class="icon">▲</div><h3>Tonal Elevation</h3><p>그림자 대신 톤으로 깊이를 만듭니다.</p></div>
</div>
```
