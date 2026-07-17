---
brand: Replicate
brand_ko: 리플리케이트
slug: replicate
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai
  - dev-tools

color_tone: cool
primary_color_hex: "#000000"
primary_color_name: "Replicate Ink"
mono_brand: true

mood:
  - 깔끔
  - 카탈로그
  - API

font_category: sans-serif
font_primary: Söhne
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2020
last_major_revision: 2025
signature_keyword: "흰 캔버스 + 검정 모노 그리드 + 컴퓨터 모델 카드 카탈로그 — AI 모델의 npm"

hero_html: |
  <div style="font-family:'Söhne','Inter',-apple-system,sans-serif;background:#FFFFFF;color:#000;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #E5E5E5;">
      <svg width="18" height="18" viewBox="0 0 18 18"><rect x="2" y="2" width="6" height="14" fill="#000"/><rect x="10" y="2" width="6" height="6" fill="#000"/><rect x="10" y="10" width="6" height="6" fill="#000"/></svg>
      <span style="font-weight:600;">replicate</span>
    </div>
    <div style="padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;font-family:'JetBrains Mono',monospace;">
      <div style="border:1px solid #E5E5E5;padding:8px 10px;border-radius:2px;">
        <div style="font-size:10px;color:#737373;">stability-ai/</div>
        <div style="font-size:11px;font-weight:600;color:#000;">sdxl</div>
        <div style="font-size:9px;color:#737373;margin-top:6px;">12.4M runs</div>
      </div>
      <div style="border:1px solid #E5E5E5;padding:8px 10px;border-radius:2px;">
        <div style="font-size:10px;color:#737373;">meta/</div>
        <div style="font-size:11px;font-weight:600;color:#000;">llama-3</div>
        <div style="font-size:9px;color:#737373;margin-top:6px;">8.1M runs</div>
      </div>
      <div style="border:1px solid #E5E5E5;padding:8px 10px;border-radius:2px;">
        <div style="font-size:10px;color:#737373;">black-forest-labs/</div>
        <div style="font-size:11px;font-weight:600;color:#000;">flux-pro</div>
        <div style="font-size:9px;color:#737373;margin-top:6px;">3.2M runs</div>
      </div>
      <div style="border:1px solid #E5E5E5;padding:8px 10px;border-radius:2px;">
        <div style="font-size:10px;color:#737373;">openai/</div>
        <div style="font-size:11px;font-weight:600;color:#000;">whisper</div>
        <div style="font-size:9px;color:#737373;margin-top:6px;">5.8M runs</div>
      </div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #E5E5E5;font:400 10px/1.4 'JetBrains Mono',monospace;color:#737373;">
      <span style="color:#000;">$</span> curl -X POST .../predictions
    </div>
  </div>

sources:
  - https://replicate.com/
---

### ① 브랜드 DNA
- **브랜드명**: Replicate
- **한 줄 정체성**: 오픈 ML 모델을 한 줄 API로 실행·배포하는 모델 호스팅 플랫폼 (AI의 npm)
- **공식 디자인 철학**: "Run AI models with a single line of code" — 깔끔한 카탈로그/문서 톤
- **시그니처 요소 1개**: 흰 #FFFFFF 캔버스 + 검정 sharp 모노 그리드 카드 + `org/model` 표기. 다른 AI 도구의 다크 톤과 정반대의 "문서·SDK 느낌"

### ② 톤 & 무드
- **핵심 키워드 3개**: 깔끔, 카탈로그, API
- **무드 설명**: 검정 텍스트 위주에 흰 캔버스. 모서리는 거의 직각, 모델 카드가 그리드로 정렬. GitHub README 같은 톤이지만 더 가볍고 친절.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact
- **모서리 성향**: Sharp (0~4px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Pure mono */
  --color-primary-50:  #FAFAFA;
  --color-primary-100: #F4F4F5;
  --color-primary-200: #E4E4E7;
  --color-primary-300: #D4D4D8;
  --color-primary-400: #A1A1AA;
  --color-primary-500: #71717A;
  --color-primary-600: #52525B;
  --color-primary-700: #3F3F46;
  --color-primary-800: #27272A;
  --color-primary-900: #000000;

  /* Secondary - 없음 (모노톤 원칙) */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F5;
  --color-neutral-300:  #D4D4D8;
  --color-neutral-500:  #71717A;
  --color-neutral-700:  #3F3F46;
  --color-neutral-900:  #18181B;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #ECFDF5;
  --color-success-fg: #047857;
  --color-warning-bg: #FFFBEB;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FEF2F2;
  --color-error-fg:   #B91C1C;
  --color-info-bg:    #EFF6FF;
  --color-info-fg:    #1D4ED8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #3F3F46;
  --text-tertiary:   #71717A;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A1A1AA;

  /* Border */
  --border-default: #E4E4E7;
  --border-subtle:  #F4F4F5;
  --border-strong:  #D4D4D8;
  --border-focus:   #000000;
}

[data-theme="dark"] {
  --bg-base: #000000;
  --bg-subtle: #0A0A0A;
  --bg-elevated: #18181B;
  --text-primary: #FFFFFF;
  --text-secondary: #D4D4D8;
  --border-default: #27272A;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Söhne (Klim Type Foundry) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드/모델명: JetBrains Mono / Söhne Mono
- **위계**:
  - Display: 48px / 600 / 1.1 / -0.03em
  - H1: 32px / 600 / 1.2 / -0.02em
  - H2: 22px / 600 / 1.3 / -0.015em
  - H3: 16px / 600 / 1.4 / -0.005em
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Code/Model: 13px / 500 / 1.45 mono
  - Caption: 12px / 500 / 1.4 / 0.01em

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 18px;
  --space-xl: 28px;
  --space-2xl: 44px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 3px;         /* 카드 시그니처 */
--radius-lg: 4px;
--radius-xl: 6px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.10);
--shadow-focus: 0 0 0 2px #000;
```

### ⑧ Iconography
- **스타일**: Outline (1.5px) sharp
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Sharp
- **추천 라이브러리**: Lucide / Phosphor (Sharp variant)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 13px/1 'Söhne',Inter,sans-serif; padding: 8px 14px; border-radius: 3px; border: 1px solid #000; background: var(--bg-base); color: var(--text-primary); cursor: pointer; transition: background 120ms ease; }
.btn:hover { background: var(--bg-subtle); }
.btn-primary { background: #000; color: #fff; }
.btn-primary:hover { background: #27272A; }
.btn-ghost { border-color: transparent; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 3px; padding: 8px 12px; font: 400 13px/1.5 'Söhne',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: #000; box-shadow: 0 0 0 1px #000; }
.input-code { font-family: 'JetBrains Mono',monospace; }
```

**Card (Model)**
```css
.model-card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 3px; padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; transition: border-color 120ms ease; cursor: pointer; }
.model-card:hover { border-color: #000; }
.model-card .owner { font: 500 12px/1.3 'JetBrains Mono',monospace; color: var(--text-tertiary); }
.model-card .name { font: 600 14px/1.3 'JetBrains Mono',monospace; color: var(--text-primary); }
.model-card .desc { font: 400 13px/1.5 'Söhne',sans-serif; color: var(--text-secondary); margin-top: 6px; }
.model-card .meta { font: 500 11px/1.4 'JetBrains Mono',monospace; color: var(--text-tertiary); margin-top: 8px; display: flex; gap: 12px; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 2px 8px; border-radius: 2px; font: 500 11px/1.4 'Söhne',sans-serif; }
.tag-default { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); }
.tag-active { background: #000; color: #fff; }
.tag-tag { font-family: 'JetBrains Mono',monospace; }
```

**Navigation**
```css
.topbar { background: var(--bg-base); padding: 10px 22px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid var(--border-default); }
.topbar .logo svg { display: block; }
.topbar h1 { font: 600 16px/1 'Söhne',sans-serif; letter-spacing: -0.01em; margin: 0; }
.topbar .nav { margin-left: auto; display: flex; gap: 16px; font: 500 13px/1 inherit; color: var(--text-secondary); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 150ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. 채도 있는 액센트 색 사용 금지 — 모노톤 원칙
2. 카드 모서리 round(>6px) 사용 금지 — 그리드 카탈로그 톤
3. 본문에 세리프 사용 금지 — 산세리프 + mono 두 폰트만
4. 그림자/elevation 강하게 사용 금지 — 1px 보더 위계만
5. 본문 텍스트에 mono 사용 금지 — 코드/모델명에만

### ⑫ 시그니처 적용 예시

```html
<style>
  .rp-app { font: 14px/1.55 'Söhne', Inter, -apple-system, sans-serif; background: #fff; color: #000; min-height: 480px; display: grid; grid-template-rows: auto 1fr; }
  .rp-app .top { padding: 12px 22px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid #E4E4E7; }
  .rp-app .top .lg svg { display: block; }
  .rp-app .top h1 { font: 600 17px/1 inherit; letter-spacing: -0.01em; margin: 0; }
  .rp-app .top .nav { margin-left: auto; display: flex; gap: 16px; font: 500 13px/1 inherit; color: #3F3F46; }
  .rp-app .stage { padding: 24px 22px; display: grid; grid-template-rows: auto 1fr; gap: 16px; }
  .rp-app .stage h2 { margin: 0; font: 600 24px/1.2 inherit; letter-spacing: -0.02em; }
  .rp-app .stage .sub { font: 400 13px/1.5 inherit; color: #71717A; margin-top: 4px; }
  .rp-app .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 8px; }
  .rp-app .mc { background: #fff; border: 1px solid #E4E4E7; padding: 14px 16px; }
  .rp-app .mc .owner { font: 500 11px/1.3 'JetBrains Mono', monospace; color: #71717A; }
  .rp-app .mc .name { font: 600 15px/1.3 'JetBrains Mono', monospace; color: #000; }
  .rp-app .mc .desc { font-size: 12.5px; line-height: 1.5; color: #3F3F46; margin-top: 6px; }
  .rp-app .mc .meta { display: flex; gap: 14px; margin-top: 10px; font: 500 11px/1.4 'JetBrains Mono', monospace; color: #71717A; }
  .rp-app .cmd { background: #18181B; color: #FAFAFA; padding: 12px 16px; border-radius: 3px; font: 400 12.5px/1.55 'JetBrains Mono', monospace; margin-top: 4px; }
  .rp-app .cmd .c { color: #71717A; }
  .rp-app .cmd .s { color: #A3E635; }
</style>

<div class="rp-app">
  <header class="top">
    <div class="lg"><svg width="20" height="20" viewBox="0 0 18 18"><rect x="2" y="2" width="6" height="14" fill="#000"/><rect x="10" y="2" width="6" height="6" fill="#000"/><rect x="10" y="10" width="6" height="6" fill="#000"/></svg></div>
    <h1>replicate</h1>
    <nav class="nav"><span>Explore</span><span>Pricing</span><span>Docs</span><span>Blog</span></nav>
  </header>
  <section class="stage">
    <div>
      <h2>인기 모델</h2>
      <div class="sub">한 줄 API로 어떤 ML 모델이든 실행하세요.</div>
    </div>
    <div class="grid">
      <div class="mc">
        <div class="owner">stability-ai /</div>
        <div class="name">sdxl</div>
        <div class="desc">A text-to-image generative AI model.</div>
        <div class="meta"><span>★ 12.4M runs</span><span>img</span></div>
      </div>
      <div class="mc">
        <div class="owner">meta /</div>
        <div class="name">llama-3-70b</div>
        <div class="desc">Open large language model from Meta.</div>
        <div class="meta"><span>★ 8.1M runs</span><span>text</span></div>
      </div>
      <div class="mc">
        <div class="owner">black-forest-labs /</div>
        <div class="name">flux-pro</div>
        <div class="desc">Photo-realistic image generation.</div>
        <div class="meta"><span>★ 3.2M runs</span><span>img</span></div>
      </div>
      <div class="mc">
        <div class="owner">openai /</div>
        <div class="name">whisper</div>
        <div class="desc">Robust speech recognition via large-scale weak supervision.</div>
        <div class="meta"><span>★ 5.8M runs</span><span>audio</span></div>
      </div>
      <div class="mc">
        <div class="owner">tencentarc /</div>
        <div class="name">photomaker</div>
        <div class="desc">Personalized text-to-image with stacked ID embeddings.</div>
        <div class="meta"><span>★ 1.9M runs</span><span>img</span></div>
      </div>
      <div class="mc">
        <div class="owner">lucataco /</div>
        <div class="name">moondream2</div>
        <div class="desc">Small vision language model for image captioning.</div>
        <div class="meta"><span>★ 980K runs</span><span>vlm</span></div>
      </div>
    </div>
    <pre class="cmd"><span class="c"># 한 줄로 호출</span>
curl -X POST <span class="s">https://api.replicate.com/v1/predictions</span> \
  -H <span class="s">"Authorization: Token $TOKEN"</span> \
  -d <span class="s">'{"version":"...","input":{"prompt":"a cat"}}'</span></pre>
  </section>
</div>
```
