---
brand: Uber Base Web
brand_ko: 우버 베이스 웹
slug: uber-base-web
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - mobility
  - dev-tools

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Uber Black"
mood:
  - 단호함
  - 명료
  - 도시적

font_category: sans-serif
font_primary: Uber Move
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2018
last_major_revision: 2023
signature_keyword: "검정 캔버스 위 풀 모노톤의 도시적 단호함"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F6F6F6", "border": "#E2E2E2", "fg": "#000000", "fg_muted": "#545454", "accent": "#000000" },
    "dark":  { "bg": "#000000", "surface": "#1A1A1A", "border": "#2E2E2E", "fg": "#FFFFFF", "fg_muted": "#CBCBCB", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:'Uber Move Text',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
    <div>
      <div style="font-family:'Uber Move',inherit;font-weight:700;font-size:18px;margin-bottom:6px;">Uber</div>
      <h2 style="font-family:'Uber Move',inherit;font-size:36px;font-weight:700;line-height:0.96;letter-spacing:-0.02em;margin:0 0 12px;">지금<br/>이동하세요.</h2>
      <p style="font-size:13px;color:var(--card-fg-muted);margin:0;line-height:1.4;">탭 한 번으로 차량 호출. 분 단위로 도착.</p>
    </div>
    <div style="aspect-ratio:4/2;background:var(--card-surface);border-radius:4px;position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,transparent 40%,rgba(255,255,255,0.06) 50%,transparent 60%);"></div>
      <div style="position:absolute;left:38%;top:38%;font-size:20px;">📍</div>
    </div>
    <button style="background:var(--card-accent);color:var(--card-bg);border:0;border-radius:4px;padding:12px 16px;font-size:13px;font-weight:500;font-family:inherit;align-self:flex-start;">탑승자 가입</button>
  </div>

sources:
  - https://baseweb.design/
  - https://brand.uber.com/
  - https://github.com/uber/baseweb
---

### ① 브랜드 DNA
- **브랜드명**: Uber Base Web Design System
- **한 줄 정체성**: 검정 캔버스의 단호한 모노톤 위에 라이더/드라이버 흐름이 정확히 흐르는 시스템
- **공식 디자인 철학**: "Move smarter — bold, clear, accessible at scale"
- **시그니처 요소 1개**: Uber Move (자체 폰트) + 풀 블랙(#000000) 배경 + 흰색 강조의 모노톤 위계

### ② 톤 & 무드
- **핵심 키워드 3개**: 단호함, 명료, 도시적
- **무드 설명**: 검정과 흰색이 화면의 90%를 차지하고, 강조는 거의 없다. 라인은 직선, 모서리는 살짝만 둥글다. 정보가 핵심이다.
- **비주얼 스타일**: 모던 미니멀 + 살짝의 브루털리즘
- **밀도(Density)**: Comfortable — 모바일 우선, 큰 터치 타깃
- **모서리 성향**: Sharp~Soft (0~6px)
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Uber White (다크에선 흰색이 primary action) */
  --color-primary-50:  #1A1A1A;
  --color-primary-100: #232323;
  --color-primary-200: #2E2E2E;
  --color-primary-300: #3A3A3A;
  --color-primary-400: #545454;
  --color-primary-500: #FFFFFF;  /* 다크에선 white가 primary action */
  --color-primary-600: #EEEEEE;
  --color-primary-700: #CBCBCB;
  --color-primary-800: #AFAFAF;
  --color-primary-900: #8C8C8C;

  /* Secondary - Uber Blue (액션이 아닌 highlight, 다크에서 한 단계 밝게) */
  --color-secondary-500: #5B91F5;

  /* Neutral - 다크 기준 반전 램프 */
  --color-neutral-0:    #000000;
  --color-neutral-50:   #121212;  /* mono100 (inv) */
  --color-neutral-100:  #1A1A1A;  /* mono200 (inv) */
  --color-neutral-200:  #2E2E2E;  /* mono300 (inv) */
  --color-neutral-300:  #3A3A3A;  /* mono400 (inv) */
  --color-neutral-500:  #6E6E6E;  /* mono500 */
  --color-neutral-700:  #AFAFAF;  /* mono700 (inv) */
  --color-neutral-800:  #CBCBCB;  /* mono800 (inv) */
  --color-neutral-900:  #E2E2E2;  /* mono900 (inv) */
  --color-neutral-1000: #FFFFFF;  /* mono1000 (inv) */

  /* Semantic - 다크 위에서 legible */
  --color-success-bg: #112A1E;
  --color-success-fg: #3FD68A;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #FFCF66;
  --color-error-bg:   #2E1311;
  --color-error-fg:   #FF5B47;
  --color-info-bg:    #14223F;
  --color-info-fg:    #5B91F5;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #121212;
  --bg-elevated: #1A1A1A;
  --bg-overlay:  rgba(0,0,0,0.70);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #CBCBCB;
  --text-tertiary:   #AFAFAF;
  --text-on-primary: #000000;
  --text-disabled:   #545454;

  /* Border */
  --border-default: #2E2E2E;
  --border-subtle:  #1F1F1F;
  --border-strong:  #545454;
  --border-focus:   #5B91F5;
}

[data-theme="light"] {
  /* 원본 라이트 테마 (Uber 모노톤 라이트) */
  --color-primary-50:  #F6F6F6;
  --color-primary-100: #EEEEEE;
  --color-primary-200: #E2E2E2;
  --color-primary-300: #CBCBCB;
  --color-primary-400: #AFAFAF;
  --color-primary-500: #000000;  /* Uber Black 기본 액션 */
  --color-primary-600: #1A1A1A;
  --color-primary-700: #2E2E2E;
  --color-primary-800: #545454;
  --color-primary-900: #757575;

  --color-secondary-500: #276EF1;

  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F6F6F6;
  --color-neutral-100:  #EEEEEE;
  --color-neutral-200:  #E2E2E2;
  --color-neutral-300:  #CBCBCB;
  --color-neutral-500:  #AFAFAF;
  --color-neutral-700:  #757575;
  --color-neutral-800:  #545454;
  --color-neutral-900:  #2E2E2E;
  --color-neutral-1000: #000000;

  --color-success-bg: #E6F2EC;
  --color-success-fg: #05A357;
  --color-warning-bg: #FFF2D9;
  --color-warning-fg: #FFC043;
  --color-error-bg:   #FCE8E8;
  --color-error-fg:   #E11900;
  --color-info-bg:    #E6EDFF;
  --color-info-fg:    #276EF1;

  --bg-base:     #FFFFFF;
  --bg-subtle:   #F6F6F6;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  --text-primary:    #000000;
  --text-secondary:  #545454;
  --text-tertiary:   #757575;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #AFAFAF;

  --border-default: #E2E2E2;
  --border-subtle:  #EEEEEE;
  --border-strong:  #545454;
  --border-focus:   #276EF1;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Uber Move (Uber 라이선스, 마케팅) + Uber Move Text (UI), 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 96px / 700 / 1.0 / -0.02em (마케팅 hero)
  - H1: 48px / 700 / 1.1 / -0.01em
  - H2: 32px / 700 / 1.2 / -0.005em
  - H3: 22px / 700 / 1.27 / 0
  - Body Large: 18px / 400 / 1.5 / 0
  - Body: 16px / 400 / 1.5 / 0
  - Body Small: 14px / 400 / 1.43 / 0
  - Caption: 12px / 500 / 1.33 / 0

### ⑤ 스페이싱
- **Base unit**: 4px (Base Web scale)
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
- **Container**: max-width 1200px, 좌우 패딩 16px (mobile) / 32px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 2px 4px rgba(0,0,0,0.50);                        /* dropdown */
--shadow-lg: 0 4px 16px rgba(0,0,0,0.60);                       /* modal */
--shadow-xl: 0 16px 32px rgba(0,0,0,0.70);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (Uber의 자체 아이콘 — 16/24/32px grid)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: baseui icons / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 16px/1.5 "Uber Move Text", -apple-system, "Pretendard", sans-serif;
  border-radius: var(--radius-md);
  padding: 14px 24px;
  display: inline-flex; align-items: center; gap: 8px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #000; }
.btn-primary:hover { background: var(--color-primary-700); }
.btn-primary:active { background: var(--color-primary-800); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--color-neutral-100); color: var(--text-primary); }
.btn-secondary:hover { background: var(--color-neutral-200); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--color-neutral-50); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--color-neutral-50);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  padding: 14px 16px;
  font-size: 16px;
}
.input:focus {
  outline: none;
  background: var(--bg-base);
  border-color: var(--color-primary-500);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-base); border-radius: var(--radius-md); padding: 16px; border: 1px solid var(--border-default); }
.card-elevated { border-color: transparent; box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge / Tag**
```css
.tag { padding: 4px 8px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 500; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #000; }
.tag-subtle  { background: var(--color-neutral-100); color: var(--text-primary); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top Bar)**
```css
.topbar { height: 64px; background: var(--color-primary-500); color: #000; display: flex; align-items: center; padding: 0 24px; gap: 24px; }
.topbar a { color: #000; font-weight: 500; }
.topbar .cta { margin-left: auto; background: #000; color: var(--color-primary-500); padding: 8px 16px; border-radius: var(--radius-md); font-weight: 500; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. brand action에 컬러 사용 금지 — primary는 모노 (검정 또는 흰색)
2. 채도 높은 그라데이션 배경 금지 — Uber는 모노 + 사진(도시 풍경) 합성
3. button을 pill로 변경 금지 — Base Web의 4px sharp가 시그니처
4. Uber Move 폰트를 본문 단락(60자+)에 사용 금지 — Uber Move Text 별도
5. 모달 배경 dim을 50% 미만으로 약하게 처리 금지 — 검정 캔버스에서 위계 흐림

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Uber Move Text", -apple-system, "Pretendard", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .topbar { /* 위 정의 */ }
  .hero { background: #000; color: #fff; padding: 96px 32px; }
  .hero-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .hero h1 { font-family: "Uber Move", "Uber Move Text", -apple-system, sans-serif; font-size: 80px; font-weight: 700; line-height: 0.96; letter-spacing: -0.02em; margin: 0 0 24px; }
  .hero p { font-size: 20px; line-height: 1.4; color: #CBCBCB; margin: 0 0 32px; }
  .hero .cta { display: flex; gap: 12px; }
  .hero .cta .btn-primary { background: #fff; color: #000; }
  .hero .map-mock { aspect-ratio: 4/3; background: #1A1A1A; border-radius: var(--radius-md); position: relative; overflow: hidden; }
  .hero .map-mock::before { content:""; position:absolute; inset:0; background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%); }
  .hero .map-mock::after { content:"📍"; position:absolute; left: 40%; top: 45%; font-size: 36px; }
  .features { max-width: 1200px; margin: 64px auto; padding: 0 32px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .feature-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 24px; }
  .feature-card .num { font-family: "Uber Move", inherit; font-size: 48px; font-weight: 700; line-height: 1; }
  .feature-card h3 { font-size: 20px; font-weight: 700; margin: 12px 0 4px; }
  .feature-card p { font-size: 14px; line-height: 1.43; color: var(--text-secondary); margin: 0; }
</style>

<header class="topbar">
  <span style="font-family:'Uber Move',inherit; font-weight:700; font-size:20px">Uber</span>
  <a>Ride</a><a>Drive</a><a>Business</a><a>Eats</a>
  <a class="cta">앱 다운로드</a>
</header>

<section class="hero">
  <div class="hero-inner">
    <div>
      <h1>지금<br/>이동하세요.</h1>
      <p>탭 한 번으로 차량 호출. 분 단위로 도착 예정.</p>
      <div class="cta">
        <button class="btn btn-primary">탑승자 가입</button>
        <button class="btn btn-ghost" style="color:#fff">드라이버로 등록 →</button>
      </div>
    </div>
    <div class="map-mock"></div>
  </div>
</section>

<div class="features">
  <div class="feature-card"><div class="num">3 min</div><h3>평균 도착 시간</h3><p>도시 핵심 구역 기준.</p></div>
  <div class="feature-card"><div class="num">10K+</div><h3>도시 운영 중</h3><p>전 세계 어디서든 같은 경험.</p></div>
  <div class="feature-card"><div class="num">24/7</div><h3>고객 지원</h3><p>언제든 연락 가능, 바로 응답.</p></div>
</div>
```
