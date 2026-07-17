---
brand: Hugging Face
brand_ko: 허깅페이스
slug: hugging-face
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - ai
  - dev-tools

color_tone: warm
primary_color_hex: "#FFD21E"
primary_color_name: "Hugging Face Yellow"
mood:
  - 친근함
  - 오픈소스
  - 커뮤니티

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2016
last_major_revision: 2024
signature_keyword: "🤗 이모지 마스코트와 노란 액센트의 친근한 오픈소스 ML 허브"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFAFA", "border": "#E5E5E5", "fg": "#1B1B1F", "fg_muted": "#6B7280", "accent": "#FFD21E" },
    "dark":  { "bg": "#0E0E10", "surface": "#1B1B1F", "border": "#27272A", "fg": "#FAFAFA", "fg_muted": "#A1A1AA", "accent": "#FFD21E" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;line-height:1;">🤗</span>
      <strong style="font-size:13px;">Hugging Face</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">acme/text-classifier</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
        <span style="background:#FFF8D6;color:#9C6A00;padding:2px 8px;border-radius:6px;font-size:10px;font-weight:600;">⭐ 12.4k</span>
        <span style="background:#F0F8E5;color:#3F7D20;padding:2px 8px;border-radius:6px;font-size:10px;font-weight:600;">↓ 240k</span>
        <span style="background:#F4F4F5;color:#27272A;padding:2px 8px;border-radius:6px;font-size:10px;font-weight:600;">apache-2.0</span>
      </div>
      <div style="font-size:14px;font-weight:700;line-height:1.3;color:var(--card-fg);">acme/text-classifier-base</div>
      <div style="font-size:11px;color:var(--card-fg-muted);line-height:1.5;">Multilingual sentence-level classifier · 110M parameters · BERT 기반.</div>
      <div style="background:#1B1B1F;color:#fff;border-radius:6px;padding:10px 12px;font-family:ui-monospace,'JetBrains Mono',monospace;font-size:10px;line-height:1.6;">
        <span style="color:#FFD21E;">from</span> transformers <span style="color:#FFD21E;">import</span> pipeline<br/>
        clf = pipeline(<span style="color:#A8E5A0;">"text-classification"</span>,<br/>
        &nbsp;&nbsp;model=<span style="color:#A8E5A0;">"acme/text-classifier-base"</span>)
      </div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
        <span style="background:var(--card-accent);color:#1B1B1F;padding:1px 6px;border-radius:9999px;font-size:9px;font-weight:700;">text-classification</span>
        <span style="background:#FFE5DD;color:#A8412B;padding:1px 6px;border-radius:9999px;font-size:9px;font-weight:700;">multilingual</span>
        <span style="background:#E0F4EC;color:#3F7D20;padding:1px 6px;border-radius:9999px;font-size:9px;font-weight:700;">pytorch</span>
      </div>
    </div>
  </div>

sources:
  - https://huggingface.co/
  - https://huggingface.co/brand
  - https://huggingface.co/docs
---

### ① 브랜드 DNA
- **브랜드명**: Hugging Face
- **한 줄 정체성**: ML 모델/데이터셋/스페이스를 공유하는, 오픈소스 AI의 허브
- **공식 디자인 철학**: "The AI community building the future — open, collaborative, accessible"
- **시그니처 요소 1개**: 🤗 이모지 마스코트 + Hugging Face Yellow(#FFD21E) + 다양한 task 컬러 태그

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 오픈소스, 커뮤니티
- **무드 설명**: 흰 캔버스에 노란 액센트, 다양한 색의 task 태그가 활기차게 정렬된다. 이모지 마스코트가 brand 톤을 친근하게 잡는다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (이모지 마스코트)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (6~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Hugging Face Yellow */
  --color-primary-50:  #FFF8D6;
  --color-primary-100: #FFEFAD;
  --color-primary-200: #FFE164;
  --color-primary-300: #FFD83D;
  --color-primary-400: #FFD42E;
  --color-primary-500: #FFD21E;  /* Hugging Face Yellow */
  --color-primary-600: #E6BB1E;
  --color-primary-700: #B8941A;
  --color-primary-800: #8A6E12;
  --color-primary-900: #5C4708;

  /* Secondary - Hugging Face Pink/Red */
  --color-secondary-500: #FF7B72;

  /* Task tag 컬러 (다양함) */
  --task-text:       #FFD21E;
  --task-image:      #FF7B72;
  --task-audio:      #6B7AFF;
  --task-multimodal: #B07CFF;
  --task-tabular:    #3F7D20;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F5;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #D4D4D8;
  --color-neutral-500:  #A1A1AA;
  --color-neutral-700:  #6B7280;
  --color-neutral-800:  #3F3F46;
  --color-neutral-900:  #1B1B1F;
  --color-neutral-1000: #09090B;

  /* Semantic */
  --color-success-bg: #F0F8E5;
  --color-success-fg: #3F7D20;
  --color-warning-bg: #FFF8D6;
  --color-warning-fg: #9C6A00;
  --color-error-bg:   #FFE5DD;
  --color-error-fg:   #A8412B;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(27,27,31,0.50);

  /* Text */
  --text-primary:    #1B1B1F;
  --text-secondary:  #6B7280;
  --text-tertiary:   #A1A1AA;
  --text-on-primary: #1B1B1F;        /* 노랑 위에는 검정 */
  --text-disabled:   #D4D4D8;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F4F4F5;
  --border-strong:  #D4D4D8;
  --border-focus:   #FFD21E;
}

[data-theme="dark"] {
  --bg-base: #0E0E10;
  --bg-subtle: #1B1B1F;
  --bg-elevated: #27272A;
  --text-primary: #FAFAFA;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono"
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 32px / 700 / 1.15 / -0.01em
  - H2: 22px / 600 / 1.27 / 0
  - H3: 17px / 600 / 1.3 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

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
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
--shadow-xl: 0 16px 32px rgba(255,210,30,0.20);
```

### ⑧ Iconography
- **스타일**: Outline + Emoji (Hugging Face는 emoji 적극 활용)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor + 시스템 emoji

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: var(--radius-md); padding: 8px 12px; font-size: 14px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(255,210,30,0.30); }
```

**Card** (Model card)
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Task tag**
```css
.tag { padding: 0 8px; height: 22px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 22px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-text    { background: rgba(255,210,30,0.20); color: #9C6A00; }
.tag-image   { background: rgba(255,123,114,0.18); color: #A8412B; }
.tag-audio   { background: rgba(107,122,255,0.18); color: #2D3F9D; }
```

**Navigation (Top nav)**
```css
.topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .logo { font-size: 22px; }
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
1. 노란 brand 위에 흰 텍스트 사용 금지 — 검정 사용
2. 🤗 마스코트를 임의 색 변경/회전 금지
3. task 태그 색을 임의 매핑 금지 — text/image/audio 카테고리별 보존
4. 본문에 채도 높은 노랑 background 사용 금지 — 가독성 저하
5. 코드 스니펫에 sans-serif 폰트 사용 금지

### ⑫ 시그니처 적용 예시 (Model card page)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #1B1B1F; background: #fff; }
  .topnav { padding: 12px 24px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid #E5E5E5; font-size: 14px; }
  .topnav .logo { font-size: 22px; }
  .container { max-width: 1100px; margin: 24px auto; padding: 0 24px; display: grid; grid-template-columns: 1fr 280px; gap: 24px; }
  .head { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
  .head h1 { margin: 0; font-size: 24px; font-weight: 700; font-family: ui-monospace, monospace; }
  .head .stat { background: #F4F4F5; color: #3F3F46; padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; }
  .desc { color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
  .tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
  .tab-bar { display: flex; gap: 0; border-bottom: 1px solid #E5E5E5; margin-bottom: 16px; }
  .tab-bar .t { padding: 10px 14px; font-size: 13px; color: #6B7280; cursor: pointer; }
  .tab-bar .t.active { color: #1B1B1F; border-bottom: 2px solid #FFD21E; font-weight: 600; }
  .code { background: #1B1B1F; color: #fff; border-radius: 8px; padding: 14px 16px; font-family: ui-monospace, monospace; font-size: 13px; line-height: 1.6; }
  .code .k { color: #FFD21E; }
  .code .s { color: #A8E5A0; }
  .side { background: #FAFAFA; border: 1px solid #E5E5E5; border-radius: 12px; padding: 16px; }
  .side h3 { font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #6B7280; margin: 0 0 8px; font-weight: 700; }
  .side .row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; }
  .side .row strong { color: #1B1B1F; font-weight: 600; }
  .side button { width: 100%; background: #FFD21E; color: #1B1B1F; border: 0; border-radius: 8px; padding: 10px; font-size: 13px; font-weight: 600; cursor: pointer; margin-top: 12px; font-family: inherit; }
</style>

<header class="topnav">
  <span class="logo">🤗</span>
  <strong>Hugging Face</strong>
  <span style="color:#6B7280; font-size:13px;">/ Models</span>
  <input class="input" placeholder="🔍 Search models..." style="margin-left:auto; max-width:280px"/>
</header>

<main class="container">
  <div>
    <div class="head">
      <h1>acme/text-classifier-base</h1>
      <span class="stat">⭐ 12.4k</span>
      <span class="stat">↓ 240k / month</span>
      <span class="stat">apache-2.0</span>
    </div>
    <p class="desc">Multilingual sentence-level text classifier. 110M parameters. BERT-base 위에 fine-tuning. 50개 언어, 8개 카테고리 지원.</p>
    <div class="tags">
      <span class="tag tag-text">text-classification</span>
      <span class="tag tag-image">multilingual</span>
      <span class="tag" style="background:#E0F4EC;color:#3F7D20;">pytorch</span>
      <span class="tag" style="background:#F4F4F5;color:#27272A;">bert</span>
    </div>
    <div class="tab-bar">
      <div class="t active">Model card</div>
      <div class="t">Files</div>
      <div class="t">Community</div>
      <div class="t">Train</div>
    </div>
    <h2 style="font-size:18px; font-weight:600; margin: 16px 0 8px;">사용 예시</h2>
    <div class="code">
<span class="k">from</span> transformers <span class="k">import</span> pipeline<br/>
<br/>
clf = pipeline(<span class="s">"text-classification"</span>,<br/>
&nbsp;&nbsp;model=<span class="s">"acme/text-classifier-base"</span>)<br/>
<br/>
result = clf(<span class="s">"Hello, world!"</span>)<br/>
<span style="color:#A1A1AA;"># [{'label': 'positive', 'score': 0.98}]</span>
    </div>
  </div>
  <aside class="side">
    <h3>Model details</h3>
    <div class="row"><span>Parameters</span><strong>110M</strong></div>
    <div class="row"><span>Languages</span><strong>50</strong></div>
    <div class="row"><span>Tensor type</span><strong>F16</strong></div>
    <div class="row"><span>License</span><strong>Apache-2.0</strong></div>
    <button>↓ Use in transformers</button>
  </aside>
</main>
```
