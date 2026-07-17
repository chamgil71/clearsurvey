---
brand: Atlassian Design System
brand_ko: 아틀라시안 디자인 시스템
slug: atlassian
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - productivity
  - enterprise

color_tone: cool
primary_color_hex: "#0052CC"
primary_color_name: "Atlassian Blue 500"
mood:
  - 차분함
  - 협업적
  - 명료함

font_category: sans-serif
font_primary: Charlie Text
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2023
signature_keyword: "역할 기반 토큰으로 받쳐주는 차분한 협업 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F4F5F7", "border": "#DFE1E6", "fg": "#172B4D", "fg_muted": "#42526E", "accent": "#0052CC" },
    "dark":  { "bg": "#1D2125", "surface": "#282E33", "border": "#3C434A", "fg": "#E6EDF3", "fg_muted": "#B6C2CF", "accent": "#388BFF" }
  }

hero_html: |
  <div style="font-family:'Charlie Text',-apple-system,'Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);padding:20px;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
    <div>
      <span style="display:inline-block;background:#DEEBFF;color:#0747A6;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:8px;">새 기능</span>
      <h2 style="font-size:24px;font-weight:600;line-height:1.1;margin:0 0 10px;letter-spacing:-0.01em;">팀 워크의<br/>흐름을 막힘없이.</h2>
      <p style="font-size:13px;color:var(--card-fg-muted);margin:0;line-height:1.43;">Jira, Confluence, Trello를 한 가족으로.</p>
    </div>
    <div style="background:var(--card-surface);border-radius:6px;padding:8px;display:flex;flex-direction:column;gap:4px;">
      <div style="display:flex;gap:6px;align-items:center;padding:4px 6px;border-radius:3px;font-size:11px;">
        <span style="background:#DEEBFF;color:#0747A6;padding:1px 5px;border-radius:3px;font-weight:700;font-size:9px;letter-spacing:0.04em;">진행중</span>
        <span style="color:var(--card-fg);">디자인 리뷰</span>
      </div>
      <div style="display:flex;gap:6px;align-items:center;padding:4px 6px;border-radius:3px;font-size:11px;">
        <span style="background:#E3FCEF;color:#006644;padding:1px 5px;border-radius:3px;font-weight:700;font-size:9px;letter-spacing:0.04em;">완료</span>
        <span style="color:var(--card-fg);">스펙 확정</span>
      </div>
      <div style="display:flex;gap:6px;align-items:center;padding:4px 6px;border-radius:3px;font-size:11px;">
        <span style="background:#FFEBE6;color:#DE350B;padding:1px 5px;border-radius:3px;font-weight:700;font-size:9px;letter-spacing:0.04em;">막힘</span>
        <span style="color:var(--card-fg);">API 결정</span>
      </div>
    </div>
    <button style="background:var(--card-accent);color:#fff;border:0;border-radius:3px;padding:6px 12px;font-size:12px;font-weight:500;font-family:inherit;align-self:flex-start;">시작하기</button>
  </div>

sources:
  - https://atlassian.design/
  - https://atlassian.design/foundations/color-new
  - https://atlassian.design/foundations/typography
---

### ① 브랜드 DNA
- **브랜드명**: Atlassian Design System (ADS)
- **한 줄 정체성**: 팀의 협업을 차분하게 받쳐주는, 역할 기반 토큰의 엔터프라이즈 시스템
- **공식 디자인 철학**: "Design with purpose — clear, confident, supportive"
- **시그니처 요소 1개**: Atlassian Blue 500(#0052CC) + 의미 기반 토큰(`elevation.surface`, `color.background.brand.bold`) 구조

### ② 톤 & 무드
- **핵심 키워드 3개**: 차분함, 협업적, 명료함
- **무드 설명**: 흰 캔버스에 차분한 진청색이 한 점으로 작용한다. 컴포넌트 라인은 부드럽고, 글자는 작지만 충분한 line-height로 호흡을 준다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — Jira/Confluence처럼 정보량 많은 화면에 맞춤
- **모서리 성향**: Soft (3~6px)
- **평면성**: Subtle — 1단계 그림자와 hover 색 변화로 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Atlassian Blue */
  --color-primary-50:  #DEEBFF;  /* B50 */
  --color-primary-100: #B3D4FF;  /* B75 */
  --color-primary-200: #4C9AFF;  /* B200 */
  --color-primary-300: #2684FF;  /* B300 */
  --color-primary-400: #0065FF;  /* B400 */
  --color-primary-500: #0052CC;  /* B500 — primary action */
  --color-primary-600: #0747A6;  /* B600 */
  --color-primary-700: #053A8E;
  --color-primary-800: #042B6E;
  --color-primary-900: #032148;

  /* Secondary - Purple */
  --color-secondary-500: #6554C0;

  /* Neutral - Atlassian neutral scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F5F7;  /* N20 */
  --color-neutral-100:  #EBECF0;  /* N30 */
  --color-neutral-200:  #DFE1E6;  /* N40 */
  --color-neutral-300:  #C1C7D0;  /* N60 */
  --color-neutral-500:  #7A869A;  /* N200 */
  --color-neutral-700:  #5E6C84;  /* N300 */
  --color-neutral-800:  #42526E;  /* N400 */
  --color-neutral-900:  #172B4D;  /* N800 — text primary */
  --color-neutral-1000: #091E42;  /* N900 */

  /* Semantic */
  --color-success-bg: #E3FCEF;
  --color-success-fg: #006644;
  --color-warning-bg: #FFFAE6;
  --color-warning-fg: #FF8B00;
  --color-error-bg:   #FFEBE6;
  --color-error-fg:   #DE350B;
  --color-info-bg:    #DEEBFF;
  --color-info-fg:    #0747A6;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F4F5F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  #FFFFFF;

  /* Text */
  --text-primary:    #172B4D;
  --text-secondary:  #42526E;
  --text-tertiary:   #6B778C;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A5ADBA;

  /* Border */
  --border-default: #DFE1E6;
  --border-subtle:  #EBECF0;
  --border-strong:  #C1C7D0;
  --border-focus:   #4C9AFF;
}

[data-theme="dark"] {
  --bg-base: #1D2125;
  --bg-subtle: #22272B;
  --bg-elevated: #282E33;
  --text-primary: #E6EDF3;
  --text-secondary: #B6C2CF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Charlie Display / Charlie Text (Atlassian 자체 폰트, 웹 폴백 -apple-system)
  - 한글: Pretendard 또는 Noto Sans KR (OFL)
- **위계** (ADS heading scale):
  - Display: 35px / 600 / 1.14 / -0.01em
  - H1: 29px / 500 / 1.10 / -0.01em
  - H2: 24px / 500 / 1.17 / -0.01em
  - H3: 20px / 500 / 1.20 / -0.008em
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em (uppercase)

### ⑤ 스페이싱
- **Base unit**: 4px (gridSize)
- **토큰**:
  ```css
  --space-xs:  4px;   /* space.050 */
  --space-sm:  8px;   /* space.100 */
  --space-md: 16px;   /* space.200 */
  --space-lg: 24px;   /* space.300 */
  --space-xl: 32px;   /* space.400 */
  --space-2xl: 48px;  /* space.600 */
  --space-3xl: 64px;  /* space.800 */
  ```
- **Container**: max-width 1024px (앱 콘텐츠), 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;     /* border.radius.050 */
--radius-md: 6px;     /* border.radius.100 — 기본 */
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 1px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31);   /* card resting */
--shadow-md: 0 4px 8px -2px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31); /* dropdown */
--shadow-lg: 0 8px 12px rgba(9,30,66,0.15), 0 0 1px rgba(9,30,66,0.31);    /* modal */
--shadow-xl: 0 12px 24px -6px rgba(9,30,66,0.25);                          /* dialog */
```

### ⑧ Iconography
- **스타일**: Outline (Atlassian Iconography는 단일 outline weight)
- **Stroke 굵기**: 2px (24px 사이즈 기준)
- **모서리 처리**: Round (subtle round join)
- **추천 라이브러리**: @atlaskit/icon (Atlassian 라이선스) / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1.43 "Charlie Text", -apple-system, "Pretendard", sans-serif;
  border-radius: var(--radius-sm);
  padding: 0 12px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  transition: background 100ms ease;
  border: 0;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-secondary:hover { background: var(--color-neutral-100); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-subtle);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  padding: 6px 8px;
  height: 36px;
  font-size: 14px;
}
.input:hover { background: var(--color-neutral-100); }
.input:focus {
  outline: none;
  background: var(--bg-base);
  border-color: var(--border-focus);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-elevated); border-radius: var(--radius-md); padding: 16px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge / Lozenge**
```css
.lozenge { padding: 2px 6px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
.lozenge-solid   { background: var(--color-primary-500); color: #fff; }
.lozenge-subtle  { background: var(--color-primary-50); color: var(--color-primary-600); }
.lozenge-outline { border: 1px solid var(--border-default); color: var(--text-secondary); }
```

**Navigation (Side Nav)**
```css
.sidenav { width: 240px; background: var(--bg-subtle); padding: 16px 8px; height: 100vh; }
.sidenav a { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: var(--radius-sm); color: var(--text-primary); font-size: 14px; font-weight: 500; }
.sidenav a:hover { background: var(--color-neutral-100); }
.sidenav a.active { background: var(--color-primary-50); color: var(--color-primary-600); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.15, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.2, 0, 0, 1);
```

### ⑪ Anti-patterns
1. raw hex 값 직접 사용 금지 — token (`color.text`, `color.background.accent.blue.bolder`)을 통해서만
2. lozenge에 4단계 이상 색 동시 사용 금지 — 상태 신호 혼란
3. `text.subtle`로 본문 텍스트 사용 금지 — 명도 대비 부족
4. 헤더에 large display 폰트 사용 금지 — Charlie Display는 hero에만
5. modal 위 modal (중첩 dialog) 금지 — 사용자 경로 추적 불가

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Charlie Text", -apple-system, "Pretendard", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .hero { max-width: 1024px; margin: 0 auto; padding: 80px 24px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center; }
  .hero .lozenge-subtle { display: inline-block; margin-bottom: 16px; }
  .hero h1 { font-size: 44px; font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; margin: 0 0 16px; color: var(--color-neutral-1000); }
  .hero p { font-size: 18px; color: var(--text-secondary); margin: 0 0 24px; line-height: 1.5; }
  .hero .preview { background: var(--bg-subtle); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm); }
  .hero .preview .row { display: flex; gap: 8px; align-items: center; padding: 8px 12px; border-radius: var(--radius-sm); }
  .hero .preview .row:hover { background: var(--color-neutral-100); }
  .features { max-width: 1024px; margin: 0 auto; padding: 0 24px 96px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .feature-card { background: var(--bg-base); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); }
  .feature-card .icon { width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--color-primary-50); color: var(--color-primary-600); display: grid; place-items: center; font-weight: 700; margin-bottom: 12px; }
  .feature-card h3 { font-size: 16px; font-weight: 600; margin: 0 0 6px; }
  .feature-card p { font-size: 14px; line-height: 1.43; color: var(--text-secondary); margin: 0; }
</style>

<section class="hero">
  <div>
    <span class="lozenge lozenge-subtle">새 기능</span>
    <h1>팀 워크의 흐름을 막힘없이.</h1>
    <p>Atlassian Design System은 Jira, Confluence, Trello를 한 가족으로 만듭니다.</p>
    <button class="btn btn-primary">시작하기</button>
    <button class="btn btn-ghost">문서 보기</button>
  </div>
  <div class="preview">
    <div class="row"><span class="lozenge lozenge-subtle">진행 중</span> <span style="font-size:14px">디자인 리뷰</span></div>
    <div class="row"><span class="lozenge" style="background:#E3FCEF;color:#006644">완료</span> <span style="font-size:14px">스펙 확정</span></div>
    <div class="row"><span class="lozenge" style="background:#FFEBE6;color:#DE350B">막힘</span> <span style="font-size:14px">API 결정</span></div>
  </div>
</section>

<div class="features">
  <div class="feature-card"><div class="icon">T</div><h3>Token 우선</h3><p>역할 기반 토큰으로 다크모드/브랜딩이 자동 적응.</p></div>
  <div class="feature-card"><div class="icon">F</div><h3>Forge 호환</h3><p>Atlassian 앱 플랫폼 Forge와 동일 컴포넌트.</p></div>
  <div class="feature-card"><div class="icon">A</div><h3>Accessible</h3><p>WCAG 2.1 AA 기본, 키보드 내비게이션 검증 완료.</p></div>
</div>
```
