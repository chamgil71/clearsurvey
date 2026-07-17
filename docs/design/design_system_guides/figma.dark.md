---
brand: Figma
brand_ko: 피그마
slug: figma
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - creative-tools
  - design-system

color_tone: mixed
primary_color_hex: "#0D99FF"
primary_color_name: "Figma Blue"
mood:
  - 협업
  - 컬러풀
  - 도구적

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2016
last_major_revision: 2024
signature_keyword: "4색 액센트와 multiplayer cursor의 협업 캔버스"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F5F5", "border": "#E6E6E6", "fg": "#1E1E1E", "fg_muted": "#757575", "accent": "#0D99FF" },
    "dark":  { "bg": "#2C2C2C", "surface": "#383838", "border": "#444444", "fg": "#FFFFFF", "fg_muted": "#B3B3B3", "accent": "#33A6FD" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:-30px;background:radial-gradient(circle at 20% 30%,rgba(255,122,80,0.26) 0%,transparent 30%),radial-gradient(circle at 80% 25%,rgba(184,131,255,0.26) 0%,transparent 30%),radial-gradient(circle at 30% 80%,rgba(74,205,255,0.26) 0%,transparent 30%),radial-gradient(circle at 80% 80%,rgba(58,224,162,0.26) 0%,transparent 30%);filter:blur(30px);pointer-events:none;"></div>
    <div style="position:relative;z-index:1;">
      <div style="display:flex;gap:3px;margin-bottom:10px;">
        <span style="width:14px;height:14px;border-radius:50%;background:#FF7A50;"></span>
        <span style="width:14px;height:14px;border-radius:50%;background:#B883FF;"></span>
        <span style="width:14px;height:14px;border-radius:50%;background:#4ACDFF;"></span>
        <span style="width:14px;height:14px;border-radius:50%;background:#3AE0A2;"></span>
      </div>
      <h2 style="font-size:24px;font-weight:600;line-height:1.1;letter-spacing:-0.02em;margin:0 0 10px;">한 사람이 그리는 화면이,<br/>모두의 캔버스로.</h2>
      <p style="font-size:12px;color:var(--card-fg-muted);margin:0;line-height:1.4;">디자인부터 프로토타이핑까지 브라우저에서.</p>
    </div>
    <div style="position:relative;z-index:1;display:flex;gap:6px;flex-wrap:wrap;">
      <span style="background:#FF7A50;color:#1E1E1E;padding:3px 9px;border-radius:9999px;font-size:10px;font-weight:600;">▲ Mina</span>
      <span style="background:#B883FF;color:#1E1E1E;padding:3px 9px;border-radius:9999px;font-size:10px;font-weight:600;">▲ Joon</span>
      <span style="background:#4ACDFF;color:#1E1E1E;padding:3px 9px;border-radius:9999px;font-size:10px;font-weight:600;">▲ Dave</span>
      <span style="background:#3AE0A2;color:#1E1E1E;padding:3px 9px;border-radius:9999px;font-size:10px;font-weight:600;">▲ Soo</span>
    </div>
    <button style="position:relative;z-index:1;background:var(--card-accent);color:#0E1A24;border:0;border-radius:6px;padding:8px 14px;font-size:12px;font-weight:500;font-family:inherit;align-self:flex-start;">무료로 시작</button>
  </div>

sources:
  - https://www.figma.com/
  - https://www.figma.com/design/
  - https://www.figma.com/community
---

### ① 브랜드 DNA
- **브랜드명**: Figma
- **한 줄 정체성**: 4색 도형이 협업하는, 캔버스를 모든 디자이너가 공유하는 디자인 도구의 표준
- **공식 디자인 철학**: "The future of design is collaborative — multiplayer, in the browser, for everyone"
- **시그니처 요소 1개**: Figma 4색 로고 (오렌지 #F24E1E, 퍼플 #A259FF, 블루 #1ABCFE, 그린 #0ACF83) + Inter 본문 + Multiplayer cursor 컬러풀 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 협업, 컬러풀, 도구적
- **무드 설명**: 조용한 grayscale 캔버스에 4색 액센트가 동시다발적으로 흐른다. 마케팅은 컬러풀하고 활기차며, 도구 UI는 차분한 워크스페이스 톤이다.
- **비주얼 스타일**: 모던 미니멀 (도구) + 컬러풀 craft (마케팅)
- **밀도(Density)**: Compact — 디자인 도구 패널 위주
- **모서리 성향**: Soft (4~6px 도구 / 12~16px 마케팅 카드)
- **평면성**: Subtle — 도구는 flat, 마케팅은 그라데이션 + 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Figma Blue (UI selection 컬러, dark surface 대비용으로 한 단계 밝게) */
  --color-primary-50:  #052036;  /* deepest blue tint on dark */
  --color-primary-100: #073255;
  --color-primary-200: #0A4E80;
  --color-primary-300: #0669AB;
  --color-primary-400: #0D99FF;  /* Figma UI selection blue */
  --color-primary-500: #33A6FD;  /* dark 기본 accent */
  --color-primary-600: #5CB8FE;  /* hover (밝아짐) */
  --color-primary-700: #85CBFE;
  --color-primary-800: #B3DEFE;
  --color-primary-900: #E0F1FF;

  /* Secondary - Figma 4색 액센트 (dark 대비 위해 한 단계 밝게) */
  --color-figma-orange: #FF7A50;
  --color-figma-purple: #B883FF;
  --color-figma-cyan:   #4ACDFF;
  --color-figma-green:  #3AE0A2;
  --color-secondary-500: var(--color-figma-purple);

  /* Neutral (dark ramp: 0 = 가장 어두움 → 1000 = 가장 밝음) */
  --color-neutral-0:    #1E1E1E;
  --color-neutral-50:   #232323;
  --color-neutral-100:  #2C2C2C;
  --color-neutral-200:  #383838;
  --color-neutral-300:  #444444;
  --color-neutral-500:  #757575;
  --color-neutral-700:  #969696;
  --color-neutral-800:  #B3B3B3;
  --color-neutral-900:  #D9D9D9;
  --color-neutral-1000: #FFFFFF;

  /* Semantic (dark surface 위 가독) */
  --color-success-bg: #0E3322;
  --color-success-fg: #4FD795;
  --color-warning-bg: #3A2A0A;
  --color-warning-fg: #F2B33D;
  --color-error-bg:   #3A1714;
  --color-error-fg:   #FF6A5A;
  --color-info-bg:    #07304F;
  --color-info-fg:    #33A6FD;

  /* Surface (Figma 도구 다크) */
  --bg-base:     #2C2C2C;
  --bg-subtle:   #1E1E1E;
  --bg-elevated: #383838;
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #B3B3B3;
  --text-tertiary:   #757575;
  --text-on-primary: #0E1A24;
  --text-disabled:   #5C5C5C;

  /* Border */
  --border-default: #444444;
  --border-subtle:  #383838;
  --border-strong:  #6B6B6B;
  --border-focus:   #33A6FD;
}

[data-theme="light"] {
  /* Figma Light — 밝은 환경용 토글 (원본 라이트 값) */
  --color-primary-50:  #E5F4FF;
  --color-primary-100: #CCE9FE;
  --color-primary-200: #99D3FE;
  --color-primary-300: #66BCFD;
  --color-primary-400: #33A6FD;
  --color-primary-500: #0D99FF;  /* Figma UI selection blue */
  --color-primary-600: #0784D9;
  --color-primary-700: #0669AB;
  --color-primary-800: #054E80;
  --color-primary-900: #033255;

  --color-figma-orange: #F24E1E;
  --color-figma-purple: #A259FF;
  --color-figma-cyan:   #1ABCFE;
  --color-figma-green:  #0ACF83;
  --color-secondary-500: var(--color-figma-purple);

  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #E6E6E6;
  --color-neutral-200:  #D9D9D9;
  --color-neutral-300:  #B3B3B3;
  --color-neutral-500:  #757575;
  --color-neutral-700:  #4D4D4D;
  --color-neutral-800:  #2C2C2C;
  --color-neutral-900:  #1E1E1E;
  --color-neutral-1000: #000000;

  --color-success-bg: #DCF7E5;
  --color-success-fg: #14AE5C;
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #E08C00;
  --color-error-bg:   #FCE0DE;
  --color-error-fg:   #F24822;
  --color-info-bg:    #E5F4FF;
  --color-info-fg:    #0D99FF;

  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.40);

  --text-primary:    #1E1E1E;
  --text-secondary:  #757575;
  --text-tertiary:   #B3B3B3;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B3B3B3;

  --border-default: #E6E6E6;
  --border-subtle:  #F0F0F0;
  --border-strong:  #B3B3B3;
  --border-focus:   #0D99FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) / Whyte (Figma 마케팅 일부) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "Roboto Mono"
- **위계**:
  - Display: 64px / 600 / 1.05 / -0.03em (마케팅)
  - H1: 44px / 600 / 1.1 / -0.02em
  - H2: 28px / 600 / 1.2 / -0.015em
  - H3: 20px / 600 / 1.3 / -0.01em
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 500 / 1.27 / 0.04em (도구 UI 라벨)

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;     /* 도구 패널 */
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 48px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1280px (마케팅), 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 6px;     /* 컨트롤 */
--radius-lg: 12px;    /* 마케팅 카드 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);                 /* popover */
--shadow-lg: 0 8px 24px rgba(0,0,0,0.60);                 /* modal */
--shadow-xl: 0 16px 40px rgba(0,0,0,0.70);
```

### ⑧ Iconography
- **스타일**: Outline (도구 UI) + Filled (마케팅)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Figma Icons (Inside Figma) / Lucide (호환)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 12px/1 "Inter", "Pretendard", sans-serif;
  letter-spacing: 0;
  border-radius: var(--radius-md);
  padding: 0 12px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid transparent;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border-color: var(--border-default); }
.btn-secondary:hover { border-color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--text-primary); border-color: transparent; }
.btn-ghost:hover { background: var(--color-neutral-100); }
.btn-danger { background: var(--color-error-fg); color: #1E1E1E; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 8px;
  height: 32px;
  font-size: 12px;
}
.input:hover { border-color: var(--text-tertiary); }
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 1px var(--border-focus);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 1px var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Tag**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 500; line-height: 14px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #0E1A24; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-orange { background: rgba(255,122,80,0.18); color: #FF9871; }
.tag-purple { background: rgba(184,131,255,0.20); color: #C79BFF; }
.tag-cyan   { background: rgba(74,205,255,0.20); color: #6FD8FF; }
.tag-green  { background: rgba(58,224,162,0.20); color: #5FE6B4; }
```

**Navigation (Top toolbar — 도구)**
```css
.toolbar { height: 48px; background: var(--bg-base); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; padding: 0 8px; gap: 4px; }
.toolbar .icon-btn { width: 32px; height: 32px; border-radius: var(--radius-sm); display: grid; place-items: center; color: var(--text-primary); }
.toolbar .icon-btn:hover { background: var(--color-neutral-100); }
.toolbar .icon-btn.active { background: var(--color-primary-500); color: #0E1A24; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
/* Multiplayer cursor 트레일 */
--cursor-trail: cubic-bezier(0.25, 0.1, 0.25, 1);
```

### ⑪ Anti-patterns
1. 도구 UI 캔버스 위에 brand 그라데이션 사용 금지 — 사용자 작업물이 주인공
2. 4색 액센트를 한 화면에 4개 모두 동시 사용 금지 (마케팅 hero 외) — 시각 노이즈
3. 도구 패널 폰트 14px 이상 사용 금지 — 12/11px가 표준
4. cursor 색을 brand 색으로 강제 매핑 금지 — multiplayer 컬러풀 톤 보존
5. 모달 내부 모달 중첩 금지 — drawer 분리

### ⑫ 시그니처 적용 예시 (Figma 도구 + 마케팅 hero)

```html
<style>
  body { margin: 0; font-family: "Inter", "Pretendard", -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .marketing-hero { padding: 96px 24px; background: #1E1E1E; text-align: center; position: relative; overflow: hidden; }
  .marketing-hero::before {
    content:""; position:absolute; inset: -100px;
    background:
      radial-gradient(circle at 20% 30%, rgba(255,122,80,0.26) 0%, transparent 30%),
      radial-gradient(circle at 80% 25%, rgba(184,131,255,0.26) 0%, transparent 30%),
      radial-gradient(circle at 30% 80%, rgba(74,205,255,0.26) 0%, transparent 30%),
      radial-gradient(circle at 80% 80%, rgba(58,224,162,0.26) 0%, transparent 30%);
    filter: blur(40px);
  }
  .marketing-hero h1 { font-size: 64px; font-weight: 600; line-height: 1.05; letter-spacing: -0.03em; max-width: 880px; margin: 0 auto 24px; position: relative; }
  .marketing-hero p { font-size: 20px; color: var(--text-secondary); max-width: 580px; margin: 0 auto 32px; position: relative; }
  .marketing-hero .cta { display: flex; gap: 12px; justify-content: center; position: relative; }
  .marketing-hero .btn-primary { background: var(--color-primary-500); padding: 12px 24px; height: auto; }
  .marketing-hero .btn-secondary { padding: 12px 24px; height: auto; }
  .features { max-width: 1280px; margin: 80px auto; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .feature-card { background: var(--bg-base); border-radius: var(--radius-lg); padding: 32px; box-shadow: var(--shadow-sm); position: relative; overflow: hidden; }
  .feature-card .corner { position: absolute; top: 0; right: 0; width: 80px; height: 80px; opacity: 0.30; border-radius: 0 var(--radius-lg) 0 60%; }
  .feature-card.orange .corner { background: var(--color-figma-orange); }
  .feature-card.purple .corner { background: var(--color-figma-purple); }
  .feature-card.cyan .corner { background: var(--color-figma-cyan); }
  .feature-card h3 { font-size: 22px; font-weight: 600; margin: 8px 0; }
  .feature-card p { font-size: 14px; line-height: 1.5; color: var(--text-secondary); margin: 0; }
  .cursor-row { display: flex; gap: 8px; margin-top: 32px; justify-content: center; }
  .cursor { display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 999px; font-size: 11px; color: #1E1E1E; }
</style>

<section class="marketing-hero">
  <h1>한 사람이 그리는 화면이, <br/>모두의 캔버스가 됩니다.</h1>
  <p>Figma는 디자인부터 프로토타이핑, 핸드오프까지 한 자리에서 — 브라우저에서 실시간으로.</p>
  <div class="cta">
    <button class="btn btn-primary">무료로 시작</button>
    <button class="btn btn-secondary">데모 영상 →</button>
  </div>
  <div class="cursor-row">
    <span class="cursor" style="background:#FF7A50">▲ Mina</span>
    <span class="cursor" style="background:#B883FF">▲ Joon</span>
    <span class="cursor" style="background:#4ACDFF">▲ Dave</span>
    <span class="cursor" style="background:#3AE0A2">▲ Soo</span>
  </div>
</section>

<div class="features">
  <div class="feature-card orange"><div class="corner"></div><h3>Auto Layout</h3><p>Constraints + Flex로 실제 코드와 똑같이 레이아웃을 만드세요.</p></div>
  <div class="feature-card purple"><div class="corner"></div><h3>Variables</h3><p>토큰을 디자인 안에서 정의하고, 모드별로 적용하세요.</p></div>
  <div class="feature-card cyan"><div class="corner"></div><h3>Dev Mode</h3><p>개발자도 같은 캔버스에서 측정·복사·코드 생성.</p></div>
</div>
```
