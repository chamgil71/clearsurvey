---
brand: Perplexity
brand_ko: 퍼플렉시티
slug: perplexity
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - ai
  - consumer

color_tone: cool
primary_color_hex: "#20808D"
primary_color_name: "Perplexity Teal"
mood:
  - 정보 우선
  - 깊이 있는
  - 출처 중심

font_category: sans-serif
font_primary: FK Display + Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2022
last_major_revision: 2024
signature_keyword: "Teal 액센트와 출처 카드(citation)가 정렬된 답변형 검색 톤"

card_tokens: |
  {
    "light": { "bg": "#FBFAF4", "surface": "#FFFFFF", "border": "#E5E2D7", "fg": "#13343B", "fg_muted": "#5B7A85", "accent": "#20808D" },
    "dark":  { "bg": "#091A1F", "surface": "#13343B", "border": "#1A4148", "fg": "#FBFAF4", "fg_muted": "#87BFC7", "accent": "#2F8B98" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);border-radius:4px;display:grid;place-items:center;color:#fff;font-weight:800;font-size:11px;font-family:serif;">P</span>
      <strong style="font-size:13px;">Perplexity</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="font-family:'FK Display',Georgia,serif;font-size:18px;font-weight:500;line-height:1.3;color:var(--card-fg);">디자인 시스템이란 무엇인가?</div>
      <div style="font-size:11px;color:var(--card-fg-muted);display:flex;gap:8px;align-items:center;">
        <span style="display:inline-flex;align-items:center;gap:4px;color:var(--card-accent);font-weight:600;">✦ Pro Search</span>
        <span>·</span>
        <span>4 sources</span>
      </div>
      <div style="font-size:12px;line-height:1.6;color:var(--card-fg);">
        디자인 시스템은 컴포넌트, 토큰, 가이드라인의 모음으로<sup style="background:var(--card-accent);color:#fff;padding:0 4px;border-radius:3px;font-size:9px;font-weight:700;margin-left:2px;">1</sup>, 팀이 일관되게 제품을 만들 수 있도록 돕습니다<sup style="background:var(--card-accent);color:#fff;padding:0 4px;border-radius:3px;font-size:9px;font-weight:700;margin-left:2px;">2</sup>.
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:8px 10px;">
          <div style="font-size:9px;color:var(--card-fg-muted);font-weight:600;display:flex;align-items:center;gap:4px;"><span style="background:var(--card-accent);color:#fff;padding:0 4px;border-radius:2px;font-size:8px;">1</span> material.io</div>
          <div style="font-size:11px;font-weight:600;color:var(--card-fg);line-height:1.3;margin-top:4px;">Material — Design</div>
        </div>
        <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:8px 10px;">
          <div style="font-size:9px;color:var(--card-fg-muted);font-weight:600;display:flex;align-items:center;gap:4px;"><span style="background:var(--card-accent);color:#fff;padding:0 4px;border-radius:2px;font-size:8px;">2</span> nngroup.com</div>
          <div style="font-size:11px;font-weight:600;color:var(--card-fg);line-height:1.3;margin-top:4px;">Design Systems 101</div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.perplexity.ai/
  - https://www.perplexity.ai/about
---

### ① 브랜드 DNA
- **브랜드명**: Perplexity
- **한 줄 정체성**: 출처를 인용하며 답하는, 답변형 AI 검색 엔진
- **공식 디자인 철학**: "Where knowledge begins — accurate, transparent, source-cited"
- **시그니처 요소 1개**: Perplexity Teal(#20808D) + 따뜻한 베이지 캔버스(#FBFAF4) + 본문 인라인의 번호 매겨진 인용 배지

### ② 톤 & 무드
- **핵심 키워드 3개**: 정보 우선, 깊이 있는, 출처 중심
- **무드 설명**: 베이지 캔버스에 검은 본문, Teal이 인용 번호와 액션에 한 점. 검색 결과가 longform으로 흐르며 출처 카드가 동반된다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — longform 답변
- **모서리 성향**: Soft (8~12px)
- **평면성**: Flat — 거의 그림자 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Perplexity Teal */
  --color-primary-50:  #E4F0F2;
  --color-primary-100: #C4E0E4;
  --color-primary-200: #87BFC7;
  --color-primary-300: #4F9FAA;
  --color-primary-400: #2F8B98;
  --color-primary-500: #20808D;  /* Perplexity Teal */
  --color-primary-600: #186B76;
  --color-primary-700: #115560;
  --color-primary-800: #0B404A;
  --color-primary-900: #062A30;

  /* Secondary - Perplexity warm sand */
  --color-secondary-500: #C9B58F;

  /* Neutral - Warm beige */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FBFAF4;     /* canvas */
  --color-neutral-100:  #F1EFE5;
  --color-neutral-200:  #E5E2D7;
  --color-neutral-300:  #D2CFC2;
  --color-neutral-500:  #A19E92;
  --color-neutral-700:  #5B7A85;
  --color-neutral-800:  #3A4F58;
  --color-neutral-900:  #13343B;
  --color-neutral-1000: #091A1F;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1A7F4A;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E4F0F2;
  --color-info-fg:    #20808D;

  /* Surface */
  --bg-base:     #FBFAF4;
  --bg-subtle:   #F1EFE5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(19,52,59,0.40);

  /* Text */
  --text-primary:    #13343B;
  --text-secondary:  #3A4F58;
  --text-tertiary:   #5B7A85;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A19E92;

  /* Border */
  --border-default: #E5E2D7;
  --border-subtle:  #F1EFE5;
  --border-strong:  #D2CFC2;
  --border-focus:   #20808D;
}

[data-theme="dark"] {
  --bg-base: #091A1F;
  --bg-subtle: #13343B;
  --bg-elevated: #1A4148;
  --text-primary: #FBFAF4;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문 헤드: FK Display (Florian Karsten, Perplexity 라이선스, 폴백 Georgia)
  - 영문 본문: Inter (OFL) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display (FK): 56px / 500 / 1.05 / -0.015em
  - H1 (FK): 36px / 500 / 1.15 / -0.005em
  - H2 (FK): 24px / 500 / 1.25 / 0
  - H3 (Inter): 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 15px / 400 / 1.55 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Caption: 12px / 500 / 1.33 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 40px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 768px (답변), 1200px (마케팅)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 18px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(19,52,59,0.04);
--shadow-md: 0 4px 12px rgba(19,52,59,0.06);
--shadow-lg: 0 8px 24px rgba(19,52,59,0.10);
--shadow-xl: 0 20px 48px rgba(19,52,59,0.14);
```

### ⑧ Iconography
- **스타일**: Outline (정밀)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input** (Search composer)
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  padding: 14px 18px;
  font-size: 16px;
  width: 100%;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(32,128,141,0.18); }
```

**Card** (Citation card)
```css
.cite { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 10px 12px; cursor: pointer; }
.cite:hover { background: var(--bg-subtle); }
.cite .source { font-size: 11px; color: var(--text-tertiary); display: flex; align-items: center; gap: 6px; }
.cite .num { background: var(--color-primary-500); color: #fff; padding: 0 5px; border-radius: 3px; font-size: 10px; font-weight: 700; }
.cite .title { font-size: 13px; font-weight: 600; color: var(--text-primary); margin-top: 4px; line-height: 1.3; }

.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Citation inline**
```css
.cite-num { background: var(--color-primary-500); color: #fff; padding: 0 5px; border-radius: 3px; font-size: 10px; font-weight: 700; vertical-align: super; line-height: 1; margin-left: 2px; }

.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-pro     { background: var(--color-primary-50); color: var(--color-primary-600); }
.tag-pro::before { content:"✦ "; }
```

**Navigation**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-subtle); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 본문 인라인의 출처 번호 배지를 sans-serif/black으로 변경 금지 — Teal 배경 필수
2. 캔버스를 흰색(#FFF)으로 변경 금지 — 베이지(#FBFAF4)가 시그니처
3. 헤드라인에 monospace 폰트 사용 금지 — FK Display 시그니처
4. citation 카드를 본문 위에 떠 있는 모달로만 보여주는 패턴 금지 — 답변 옆에 항상 동시 노출
5. brand teal을 reaction emoji 톤으로 분산 사용 금지

### ⑫ 시그니처 적용 예시 (Answer view)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #13343B; background: #FBFAF4; }
  .topnav { padding: 16px 24px; display: flex; align-items: center; gap: 16px; background: #FBFAF4; border-bottom: 1px solid #E5E2D7; }
  .topnav .logo { width: 26px; height: 26px; background: #20808D; border-radius: 6px; display: grid; place-items: center; color: #fff; font-weight: 800; font-family: 'FK Display', Georgia, serif; }
  .topnav strong { font-family: 'FK Display', Georgia, serif; font-weight: 500; font-size: 18px; }
  .answer { max-width: 760px; margin: 32px auto; padding: 0 24px; }
  .answer h1 { font-family: 'FK Display', Georgia, serif; font-size: 30px; font-weight: 500; line-height: 1.2; letter-spacing: -0.005em; margin: 0 0 8px; }
  .meta { display: flex; gap: 8px; align-items: center; font-size: 12px; color: #5B7A85; margin-bottom: 20px; }
  .meta .pro { color: #20808D; font-weight: 600; }
  .body { font-size: 16px; line-height: 1.65; color: #13343B; }
  .cite-num { background: #20808D; color: #fff; padding: 0 5px; border-radius: 3px; font-size: 10px; font-weight: 700; vertical-align: super; line-height: 1; margin-left: 2px; cursor: pointer; }
  .sources-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin: 24px 0; }
  .cite { background: #fff; border: 1px solid #E5E2D7; border-radius: 8px; padding: 12px; cursor: pointer; }
  .cite:hover { background: #F1EFE5; }
  .cite .source { font-size: 11px; color: #5B7A85; display: flex; align-items: center; gap: 6px; }
  .cite .num { background: #20808D; color: #fff; padding: 0 5px; border-radius: 2px; font-size: 9px; font-weight: 700; }
  .cite .title { font-size: 13px; font-weight: 600; margin: 6px 0 0; line-height: 1.3; }
  .related h3 { font-family: 'FK Display', Georgia, serif; font-size: 18px; font-weight: 500; margin: 24px 0 8px; }
  .related a { display: block; padding: 10px 14px; background: #fff; border: 1px solid #E5E2D7; border-radius: 8px; color: #13343B; text-decoration: none; font-size: 14px; margin-bottom: 6px; }
  .related a::before { content:"+ "; color: #20808D; font-weight: 700; }
</style>

<header class="topnav">
  <div class="logo">P</div>
  <strong>perplexity</strong>
</header>

<main class="answer">
  <h1>디자인 시스템이란 무엇인가?</h1>
  <div class="meta">
    <span class="pro">✦ Pro Search</span>
    <span>·</span>
    <span>4 sources</span>
    <span>·</span>
    <span>1.2초</span>
  </div>
  <div class="body">
    디자인 시스템은 디자인 토큰, 컴포넌트, 패턴, 가이드라인이 체계적으로 묶인 모음<span class="cite-num">1</span>입니다. 팀이 같은 결정을 두 번 내리지 않게 하고, 다양한 제품 사이에 일관된 사용자 경험을 보장합니다<span class="cite-num">2</span>.<br/><br/>
    잘 만들어진 디자인 시스템은 ① 시각 언어(색·타이포·간격), ② 컴포넌트 라이브러리, ③ 사용 가이드와 안티패턴<span class="cite-num">3</span>을 포함하며, 코드 ↔ 디자인 ↔ 문서가 같은 ground truth에서 동기화됩니다<span class="cite-num">4</span>.
  </div>
  <div class="sources-grid">
    <div class="cite"><div class="source"><span class="num">1</span> material.io</div><div class="title">Material — Google's Design System</div></div>
    <div class="cite"><div class="source"><span class="num">2</span> nngroup.com</div><div class="title">Design Systems 101</div></div>
    <div class="cite"><div class="source"><span class="num">3</span> primer.style</div><div class="title">GitHub Primer Foundations</div></div>
    <div class="cite"><div class="source"><span class="num">4</span> linear.app/method</div><div class="title">Linear's product method</div></div>
  </div>
  <div class="related">
    <h3>Related</h3>
    <a>디자인 토큰을 구체적으로 어떻게 정의하나요?</a>
    <a>오픈소스로 공개된 좋은 디자인 시스템 예시는?</a>
    <a>한국 브랜드 중 디자인 시스템이 잘된 곳은?</a>
  </div>
</main>
```
