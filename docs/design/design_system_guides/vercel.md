---
brand: Vercel
brand_ko: 버셀
slug: vercel
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - dev-tools
  - infra

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Vercel Black"
mood:
  - 모노
  - 정밀
  - 빠름

font_category: sans-serif
font_primary: Geist Sans
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2016
last_major_revision: 2023
signature_keyword: "풀 블랙 캔버스에 떠 있는 삼각 로고와 grid 패턴"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFAFA", "border": "#EAEAEA", "fg": "#000000", "fg_muted": "#666666", "accent": "#000000" },
    "dark":  { "bg": "#000000", "surface": "#0A0A0A", "border": "#1A1A1A", "fg": "#FFFFFF", "fg_muted": "#A1A1A1", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:'Geist Sans','Pretendard',-apple-system,sans-serif;letter-spacing:-0.01em;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:linear-gradient(#1A1A1A 1px,transparent 1px),linear-gradient(90deg,#1A1A1A 1px,transparent 1px);background-size:24px 24px;mask:radial-gradient(ellipse 60% 50% at 50% 30%,#000 30%,transparent 80%);-webkit-mask:radial-gradient(ellipse 60% 50% at 50% 30%,#000 30%,transparent 80%);pointer-events:none;"></div>
    <div style="padding:14px 18px;border-bottom:1px solid var(--card-border);display:flex;align-items:center;gap:10px;position:relative;z-index:1;">
      <svg viewBox="0 0 24 24" fill="#fff" width="18" height="18"><path d="M12 2 L22 20 L2 20 Z"/></svg>
      <strong style="font-size:14px;">Vercel</strong>
    </div>
    <div style="padding:24px 18px;display:flex;flex-direction:column;justify-content:center;text-align:center;position:relative;z-index:1;">
      <h2 style="font-size:32px;font-weight:700;line-height:1.0;letter-spacing:-0.04em;margin:0 0 10px;">Develop.<br/>Preview.<br/>Ship.</h2>
      <p style="font-size:11px;color:var(--card-fg-muted);margin:0;line-height:1.4;">git push 한 번으로 글로벌 엣지 배포.</p>
    </div>
    <div style="padding:0 18px 18px;display:flex;gap:8px;align-items:center;position:relative;z-index:1;">
      <button style="background:var(--card-accent);color:var(--card-bg);border:0;border-radius:6px;padding:8px 14px;font-size:12px;font-weight:500;font-family:inherit;letter-spacing:-0.01em;">Deploy →</button>
      <span style="font-family:'Geist Mono',ui-monospace,monospace;background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:6px 10px;font-size:11px;color:var(--card-fg-muted);"><span style="color:#666;">$</span> <span style="color:var(--card-fg);">vercel</span></span>
    </div>
  </div>

sources:
  - https://vercel.com/
  - https://vercel.com/design
  - https://vercel.com/geist
---

### ① 브랜드 DNA
- **브랜드명**: Vercel
- **한 줄 정체성**: 풀 블랙 캔버스에 삼각 로고가 떠 있는, 개발자 우선의 모노톤 인프라 시스템
- **공식 디자인 철학**: "Zero config, ship fast — speed and elegance for the developer's daily flow"
- **시그니처 요소 1개**: 풀 블랙(#000) 배경 + Geist Sans/Mono 폰트 + 흰 삼각 로고 + 단일 픽셀 라인 위계

### ② 톤 & 무드
- **핵심 키워드 3개**: 모노, 정밀, 빠름
- **무드 설명**: 검정과 흰색이 90%를 차지한다. 강조는 거의 없고, 정보 위계는 fontweight과 line만으로 만들어낸다.
- **비주얼 스타일**: 모던 미니멀 + 약간의 브루털리즘 (sharp, no rounded corners on text blocks)
- **밀도(Density)**: Compact
- **모서리 성향**: Soft (6~8px) — 컴포넌트는 살짝 둥근, 텍스트 블록은 sharp
- **평면성**: Flat — 그림자 거의 없음, border 위주

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Vercel Black/White (모노) */
  --color-primary-50:  #FAFAFA;
  --color-primary-100: #EAEAEA;
  --color-primary-200: #999999;
  --color-primary-300: #666666;
  --color-primary-400: #444444;
  --color-primary-500: #000000;  /* Vercel black 기본 */
  --color-primary-600: #0A0A0A;
  --color-primary-700: #1A1A1A;
  --color-primary-800: #2A2A2A;
  --color-primary-900: #3A3A3A;

  /* Secondary - Geist accent blue (rare) */
  --color-secondary-500: #0070F3;

  /* Neutral - Geist gray ramp */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;  /* gray-1 */
  --color-neutral-100:  #F4F4F5;
  --color-neutral-200:  #EAEAEA;  /* gray-2 */
  --color-neutral-300:  #D4D4D8;
  --color-neutral-500:  #999999;  /* gray-5 */
  --color-neutral-700:  #666666;  /* gray-6 */
  --color-neutral-800:  #444444;
  --color-neutral-900:  #171717;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #D3E5FF;
  --color-success-fg: #0070F3;     /* Vercel은 success도 blue 사용 */
  --color-warning-bg: #FFE0AC;
  --color-warning-fg: #F5A623;
  --color-error-bg:   #FFCCCC;
  --color-error-fg:   #E00;
  --color-info-bg:    #D3E5FF;
  --color-info-fg:    #0070F3;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #666666;
  --text-tertiary:   #999999;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #D4D4D8;

  /* Border */
  --border-default: #EAEAEA;
  --border-subtle:  #F4F4F5;
  --border-strong:  #999999;
  --border-focus:   #0070F3;
}

[data-theme="dark"] {
  /* Vercel signature dark */
  --bg-base: #000000;
  --bg-subtle: #0A0A0A;
  --bg-elevated: #111111;
  --bg-overlay: rgba(0,0,0,0.80);
  --text-primary: #FFFFFF;
  --text-secondary: #A1A1A1;
  --text-tertiary: #666666;
  --border-default: #333333;
  --border-subtle: #1A1A1A;
  --color-primary-500: #FFFFFF;
  --text-on-primary: #000000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Geist Sans (Vercel 자체, OFL) / Geist Mono
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 80px / 700 / 1.0 / -0.04em (hero)
  - H1: 48px / 700 / 1.1 / -0.025em
  - H2: 32px / 600 / 1.2 / -0.02em
  - H3: 22px / 600 / 1.3 / -0.015em
  - Body Large: 18px / 400 / 1.5 / -0.005em
  - Body: 16px / 400 / 1.5 / 0
  - Body Small: 14px / 400 / 1.43 / 0
  - Caption: 13px / 500 / 1.38 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;     /* 카드 */
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 8px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
--shadow-xl: 0 24px 48px rgba(0,0,0,0.20);
```

### ⑧ Iconography
- **스타일**: Outline (Lucide 호환), Geist Icons
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide (Geist UI 표준) / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 "Geist Sans", "Pretendard", -apple-system, sans-serif;
  letter-spacing: -0.01em;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid transparent;
  transition: background 100ms ease, border-color 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); border-color: var(--color-primary-500); }
.btn-primary:hover { background: var(--color-primary-700); }
.btn-primary:active { opacity: 0.9; }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); border-color: var(--color-neutral-100); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border-color: var(--border-default); }
.btn-secondary:hover { border-color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--text-primary); border-color: transparent; }
.btn-ghost:hover { background: var(--color-neutral-100); }
.btn-danger { background: var(--color-error-fg); color: #fff; border-color: var(--color-error-fg); }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 12px;
  height: 40px;
  font-size: 14px;
}
.input:hover { border-color: var(--text-tertiary); }
.input:focus {
  outline: none;
  border-color: var(--text-primary);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.10);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 3px rgba(238,0,0,0.10); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 20px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.badge { padding: 0 8px; height: 22px; border-radius: var(--radius-full); font-size: 12px; font-weight: 500; line-height: 22px; display: inline-flex; align-items: center; gap: 4px; }
.badge-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.badge-subtle  { background: var(--color-neutral-100); color: var(--text-primary); }
.badge-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top Nav)**
```css
.topnav { height: 64px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); display: flex; align-items: center; padding: 0 24px; gap: 24px; }
.topnav .triangle { width: 24px; height: 24px; }
.topnav a { color: var(--text-secondary); font-size: 14px; font-weight: 500; }
.topnav a:hover { color: var(--text-primary); }
.topnav a.active { color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. brand action에 채도 높은 컬러 사용 금지 — primary는 black/white 모노
2. 페이지 배경에 그라데이션 사용 금지 (hero 외) — Vercel은 솔리드 또는 grid 패턴
3. 본문에 italic 사용 금지 — Geist의 모노톤 미감 위배
4. 카드에 큰 그림자 사용 금지 — border 1px가 시그니처
5. 코드 스니펫에 컬러풀 신택스 + 그라데이션 동시 사용 금지

### ⑫ 시그니처 적용 예시 (Dark hero)

```html
<style data-theme="dark">
  body { margin: 0; font-family: "Geist Sans", "Pretendard", -apple-system, sans-serif; color: #fff; background: #000; letter-spacing: -0.01em; }
  .topnav { height: 64px; border-bottom: 1px solid #1A1A1A; display: flex; align-items: center; padding: 0 24px; gap: 24px; background: rgba(0,0,0,0.7); backdrop-filter: blur(12px); position: sticky; top:0; z-index:10; }
  .topnav svg { width: 24px; height: 24px; }
  .topnav a { color: #A1A1A1; font-size: 14px; font-weight: 500; }
  .topnav a:hover, .topnav a.active { color: #fff; }
  .hero { padding: 120px 24px 80px; max-width: 1200px; margin: 0 auto; text-align: center; position: relative; }
  .hero h1 { font-size: 80px; font-weight: 700; letter-spacing: -0.04em; line-height: 1.0; margin: 0 0 24px; }
  .hero p { font-size: 20px; color: #A1A1A1; max-width: 580px; margin: 0 auto 32px; line-height: 1.5; }
  .hero .grid-bg { position: absolute; inset: 0; background-image: linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px); background-size: 32px 32px; mask: radial-gradient(ellipse 60% 50% at 50% 30%, #000 30%, transparent 80%); pointer-events: none; }
  .features { max-width: 1200px; margin: 64px auto; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; position: relative; }
  .feature-card { background: #0A0A0A; border: 1px solid #1A1A1A; border-radius: 8px; padding: 24px; }
  .feature-card:hover { border-color: #333; }
  .feature-card .ic { width: 32px; height: 32px; border-radius: 6px; background: #fff; color: #000; display: grid; place-items: center; font-weight: 700; margin-bottom: 16px; }
  .feature-card h3 { font-size: 18px; font-weight: 600; margin: 0 0 6px; letter-spacing: -0.015em; }
  .feature-card p { font-size: 14px; line-height: 1.5; color: #A1A1A1; margin: 0; }
  .code { font-family: "Geist Mono", ui-monospace, monospace; background: #0A0A0A; border: 1px solid #1A1A1A; border-radius: 6px; padding: 12px 16px; display: inline-flex; align-items: center; gap: 8px; color: #A1A1A1; font-size: 14px; margin-top: 24px; }
  .code .prompt { color: #666; }
  .code .cmd { color: #fff; }
</style>

<header class="topnav">
  <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2 L22 20 L2 20 Z"/></svg>
  <strong>Vercel</strong>
  <nav style="display:flex; gap:24px; margin-left:24px"><a class="active">Solutions</a><a>Resources</a><a>Pricing</a><a>Enterprise</a></nav>
  <div style="margin-left:auto; display:flex; gap:8px">
    <button class="btn btn-ghost" style="color:#fff">로그인</button>
    <button class="btn btn-secondary" style="background:#fff; color:#000; border-color:#fff">시작하기</button>
  </div>
</header>

<section class="hero">
  <div class="grid-bg"></div>
  <h1>Develop.<br/>Preview.<br/>Ship.</h1>
  <p>Vercel은 가장 빠른 프론트엔드 클라우드입니다. git push 한 번으로 글로벌 엣지에 배포됩니다.</p>
  <div>
    <button class="btn btn-secondary" style="background:#fff; color:#000; border-color:#fff">시작하기 →</button>
    <span class="code"><span class="prompt">$</span><span class="cmd">npm i -g vercel</span></span>
  </div>
</section>

<div class="features">
  <div class="feature-card"><div class="ic">▲</div><h3>Edge Network</h3><p>119개 도시에서 평균 50ms 이내.</p></div>
  <div class="feature-card"><div class="ic">⚡</div><h3>Zero Config</h3><p>git push 한 번이면 끝.</p></div>
  <div class="feature-card"><div class="ic">↻</div><h3>Preview Deploy</h3><p>모든 PR에 고유 URL.</p></div>
</div>
</body>
```
