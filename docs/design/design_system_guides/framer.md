---
brand: Framer
brand_ko: 프레이머
slug: framer
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - creative-tools
  - dev-tools

color_tone: cool
primary_color_hex: "#0099FF"
primary_color_name: "Framer Blue"
mood:
  - 부드러움
  - 인터랙티브
  - 모션

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
  - light
  - dark

released_year: 2014
last_major_revision: 2024
signature_keyword: "Blue→Pink 그라데이션과 spring 모션의 둥근 노코드 빌더"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8F9FB", "border": "#E2E4E9", "fg": "#0A0B0E", "fg_muted": "#5A5E68", "accent": "#0099FF" },
    "dark":  { "bg": "#0A0B0E", "surface": "#1F2024", "border": "#2A2D34", "fg": "#FFFFFF", "fg_muted": "#BCC0CC", "accent": "#33A6FF" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;letter-spacing:-0.01em;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:14px;display:flex;justify-content:center;">
      <div style="background:rgba(255,255,255,0.9);border:1px solid var(--card-border);border-radius:9999px;padding:6px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 4px 12px rgba(10,11,14,0.08);">
        <strong style="font-size:13px;font-weight:700;">Framer</strong>
        <span style="font-size:11px;color:var(--card-fg-muted);">Templates</span>
      </div>
    </div>
    <div style="padding:0 20px;display:flex;flex-direction:column;justify-content:center;text-align:center;">
      <h2 style="font-size:30px;font-weight:600;line-height:1.0;letter-spacing:-0.04em;margin:0 0 8px;">당신의 디자인이<br/><span style="background:linear-gradient(135deg,#0099FF,#FF66E1);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">살아 움직입니다.</span></h2>
      <p style="font-size:11px;color:var(--card-fg-muted);margin:0;line-height:1.4;">코드 없이 인터랙티브 웹사이트를 즉시 게시.</p>
    </div>
    <div style="padding:14px 20px 20px;">
      <div style="aspect-ratio:16/4;background:linear-gradient(135deg,#0099FF,#FF66E1);border-radius:16px;box-shadow:0 16px 40px rgba(0,153,255,0.30);display:grid;place-items:center;color:#fff;font-weight:600;font-size:12px;margin-bottom:10px;">▶ Live preview</div>
      <button style="background:linear-gradient(135deg,#0099FF,#FF66E1);color:#fff;border:0;border-radius:12px;padding:10px 18px;font-size:12px;font-weight:600;font-family:inherit;width:100%;box-shadow:0 12px 30px rgba(0,153,255,0.30);">무료로 시작 →</button>
    </div>
  </div>

sources:
  - https://www.framer.com/
  - https://www.framer.com/brand/
  - https://www.framer.com/help/
---

### ① 브랜드 DNA
- **브랜드명**: Framer
- **한 줄 정체성**: 디자인이 곧 코드가 되는, 부드러운 모션과 컬러 그라데이션의 노코드 웹빌더
- **공식 디자인 철학**: "Design and ship websites — no code required, infinitely customizable"
- **시그니처 요소 1개**: Framer Blue(#0099FF)에서 Pink(#FF66E1)로 흐르는 그라데이션 + 부드러운 spring 모션 + 둥근 라운드 카드(16~24px)

### ② 톤 & 무드
- **핵심 키워드 3개**: 부드러움, 인터랙티브, 모션
- **무드 설명**: 라운드는 후하게, 그림자는 적게, 색은 그라데이션으로 흐른다. 모든 요소가 spring으로 미세하게 움직이는 듯한 인상.
- **비주얼 스타일**: 모던 미니멀 + 글래스모피즘 (그라데이션 ribbon)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~24px) — Framer의 시그니처
- **평면성**: Subtle Layered — 카드 + 부드러운 그림자 + 그라데이션

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Framer Blue */
  --color-primary-50:  #E5F4FF;
  --color-primary-100: #CCE9FF;
  --color-primary-200: #99D3FF;
  --color-primary-300: #66BCFF;
  --color-primary-400: #33A6FF;
  --color-primary-500: #0099FF;  /* Framer Blue 기본 */
  --color-primary-600: #007ACC;
  --color-primary-700: #005C99;
  --color-primary-800: #003D66;
  --color-primary-900: #001F33;

  /* Secondary - Framer Pink (그라데이션 끝) */
  --color-secondary-500: #FF66E1;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FB;
  --color-neutral-100:  #F0F1F4;
  --color-neutral-200:  #E2E4E9;
  --color-neutral-300:  #BCC0CC;
  --color-neutral-500:  #8C909C;
  --color-neutral-700:  #5A5E68;
  --color-neutral-800:  #3A3D44;
  --color-neutral-900:  #1F2024;
  --color-neutral-1000: #0A0B0E;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #00A86B;
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #FFA800;
  --color-error-bg:   #FFE0E0;
  --color-error-fg:   #FF3B30;
  --color-info-bg:    #E5F4FF;
  --color-info-fg:    #0099FF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F9FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(10,11,14,0.40);

  /* Text */
  --text-primary:    #0A0B0E;
  --text-secondary:  #5A5E68;
  --text-tertiary:   #8C909C;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #BCC0CC;

  /* Border */
  --border-default: #E2E4E9;
  --border-subtle:  #F0F1F4;
  --border-strong:  #BCC0CC;
  --border-focus:   #0099FF;
}

[data-theme="dark"] {
  --bg-base: #0A0B0E;
  --bg-subtle: #14161B;
  --bg-elevated: #1F2024;
  --text-primary: #FFFFFF;
  --text-secondary: #BCC0CC;
  --border-default: #2A2D34;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — Framer 마케팅 표준
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 80px / 600 / 1.0 / -0.04em (hero)
  - H1: 56px / 600 / 1.05 / -0.03em
  - H2: 36px / 600 / 1.15 / -0.02em
  - H3: 24px / 600 / 1.25 / -0.01em
  - Body Large: 18px / 400 / 1.55 / 0
  - Body: 16px / 400 / 1.5 / 0
  - Body Small: 14px / 400 / 1.43 / 0
  - Caption: 12px / 500 / 1.33 / 0.04em

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
--radius-sm: 6px;
--radius-md: 12px;    /* 컨트롤 */
--radius-lg: 16px;    /* 카드 */
--radius-xl: 24px;    /* hero panel */
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(10,11,14,0.06);
--shadow-md: 0 8px 24px rgba(10,11,14,0.08);
--shadow-lg: 0 20px 48px rgba(10,11,14,0.12);
--shadow-xl: 0 32px 64px rgba(10,11,14,0.18);
/* Framer 시그니처: 컬러 그림자 */
--shadow-glow-blue: 0 20px 60px rgba(0,153,255,0.30);
--shadow-glow-pink: 0 20px 60px rgba(255,102,225,0.30);
```

### ⑧ Iconography
- **스타일**: Outline (Framer Icons)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 15px/1 "Inter", "Pretendard", sans-serif;
  letter-spacing: -0.01em;
  border-radius: var(--radius-md);
  padding: 0 18px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 200ms ease;
}
.btn-primary { background: var(--text-primary); color: #fff; }
.btn-primary:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn-primary:active { transform: translateY(0); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); transform: none; box-shadow: none; }

.btn-cta { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; box-shadow: var(--shadow-glow-blue); }
.btn-cta:hover { transform: translateY(-2px); box-shadow: var(--shadow-glow-pink); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { transform: translateY(-2px); box-shadow: var(--shadow-sm); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--color-neutral-100); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 44px;
  font-size: 15px;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 4px rgba(0,153,255,0.15);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 4px rgba(255,59,48,0.15); }
```

**Card**
```css
.card { background: var(--bg-base); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1.5px solid var(--border-default); }
```

**Badge**
```css
.badge { padding: 4px 10px; border-radius: var(--radius-full); font-size: 12px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.badge-solid   { background: var(--color-primary-500); color: #fff; }
.badge-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.badge-outline { border: 1.5px solid var(--border-default); color: var(--text-primary); }
.badge-gradient { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; }
```

**Navigation (Top Nav — pill)**
```css
.topnav { padding: 16px 24px; display: flex; justify-content: center; position: sticky; top: 16px; z-index: 10; }
.topnav-pill { background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); border: 1px solid var(--border-default); border-radius: var(--radius-full); padding: 8px 16px; display: flex; align-items: center; gap: 24px; box-shadow: var(--shadow-md); }
.topnav-pill a { color: var(--text-primary); font-size: 14px; font-weight: 500; }
.topnav-pill a:hover { color: var(--color-primary-500); }
```

### ⑩ Motion
Framer는 motion이 정체성. spring을 적극 활용:
```css
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 600ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);     /* overshoot */
--ease-spring-soft: cubic-bezier(0.4, 0, 0.2, 1.4);
```

### ⑪ Anti-patterns
1. 모서리를 sharp (0~4px)으로 줄이지 말 것 — Framer의 round 정체성
2. spring overshoot 모션 없이 linear ease만 사용 금지 — 부드러운 motion이 시그니처
3. 컴포넌트에 헤비 그림자(>40px) 사용 금지 — 색 그림자(glow) 권장
4. 본문 텍스트에 그라데이션 마스킹 금지 — 큰 헤드라인에만
5. 모달 등장 200ms 미만 즉발 금지 — spring 등장이 표준

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Inter", "Pretendard", -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); letter-spacing: -0.01em; }
  .topnav { padding: 16px 24px; display: flex; justify-content: center; position: sticky; top: 16px; z-index: 10; }
  .topnav-pill { background: rgba(255,255,255,0.85); backdrop-filter: blur(20px); border: 1px solid var(--border-default); border-radius: 999px; padding: 8px 8px 8px 24px; display: flex; align-items: center; gap: 24px; box-shadow: var(--shadow-md); }
  .topnav-pill a { color: var(--text-primary); font-size: 14px; font-weight: 500; }
  .hero { max-width: 1100px; margin: 64px auto; padding: 80px 24px; text-align: center; position: relative; }
  .hero h1 { font-size: 80px; font-weight: 600; line-height: 1.0; letter-spacing: -0.04em; margin: 0 0 24px; }
  .hero h1 .grad { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .hero p { font-size: 20px; color: var(--text-secondary); max-width: 580px; margin: 0 auto 32px; line-height: 1.5; }
  .hero .cta { display: inline-flex; gap: 12px; }
  .preview { margin: 48px auto 0; max-width: 980px; aspect-ratio: 16/9; background: linear-gradient(135deg, #0099FF, #FF66E1); border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); display: grid; place-items: center; color: #fff; font-weight: 600; font-size: 18px; }
  .features { max-width: 1100px; margin: 96px auto; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .feature-card { background: var(--bg-base); border-radius: var(--radius-lg); padding: 32px; box-shadow: var(--shadow-sm); transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 300ms ease; }
  .feature-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
  .feature-card .ic { width: 48px; height: 48px; border-radius: var(--radius-md); background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); display: grid; place-items: center; color: #fff; font-weight: 700; margin-bottom: 16px; box-shadow: var(--shadow-glow-blue); }
  .feature-card h3 { font-size: 22px; font-weight: 600; margin: 0 0 8px; }
  .feature-card p { font-size: 15px; line-height: 1.5; color: var(--text-secondary); margin: 0; }
</style>

<header class="topnav">
  <div class="topnav-pill">
    <strong style="font-weight:700; font-size:18px">Framer</strong>
    <nav style="display:flex; gap:18px"><a>Features</a><a>Templates</a><a>Showcase</a><a>Pricing</a></nav>
    <button class="btn btn-cta" style="height:32px; padding:0 14px; font-size:13px">시작하기</button>
  </div>
</header>

<section class="hero">
  <h1>당신의 디자인이<br/><span class="grad">살아 움직입니다.</span></h1>
  <p>코드 한 줄 없이 인터랙티브 웹사이트를 디자인하고 즉시 게시하세요.</p>
  <div class="cta">
    <button class="btn btn-cta">무료로 시작</button>
    <button class="btn btn-secondary">템플릿 둘러보기 →</button>
  </div>
  <div class="preview">▶ Live preview · drag · drop · publish</div>
</section>

<div class="features">
  <div class="feature-card"><div class="ic">▶</div><h3>인터랙션</h3><p>variants와 transitions를 시각적으로 만들고, spring을 그대로 게시하세요.</p></div>
  <div class="feature-card"><div class="ic">⚡</div><h3>즉시 게시</h3><p>한 번의 publish로 글로벌 CDN. 별도 호스팅 불필요.</p></div>
  <div class="feature-card"><div class="ic">✦</div><h3>AI 생성</h3><p>한 줄의 프롬프트로 완성된 섹션을 생성합니다.</p></div>
</div>
```
