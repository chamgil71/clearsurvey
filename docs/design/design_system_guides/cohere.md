---
brand: Cohere
brand_ko: 코히어
slug: cohere
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai
  - enterprise

color_tone: warm
primary_color_hex: "#FF7759"
primary_color_name: "Cohere Coral"
mood:
  - 신뢰
  - B2B
  - 따뜻

font_category: sans-serif
font_primary: CoFo Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2021
last_major_revision: 2025
signature_keyword: "코럴-피치 + 딥 네이비의 따뜻한 B2B LLM, 일러스트 톤이 가벼운 엔터프라이즈 AI"

hero_html: |
  <div style="font-family:'CoFo Sans','Inter',sans-serif;background:#FFF4ED;color:#1A1133;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <div style="width:18px;height:18px;background:#FF7759;border-radius:5px;display:grid;place-items:center;color:#fff;font:900 11px/1 sans-serif;">C</div>
      <span style="font-weight:600;">cohere</span>
    </div>
    <div style="padding:8px 14px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:#fff;border-radius:10px;padding:10px 12px;align-self:flex-end;max-width:75%;font-size:11px;color:#1A1133;box-shadow:0 1px 2px rgba(26,17,51,0.04);">Embed로 검색 인덱스 만들려면?</div>
      <div style="background:#FF7759;color:#fff;border-radius:10px;padding:10px 12px;font-size:11px;max-width:88%;line-height:1.55;">
        <strong style="font-weight:600;">embed-v4</strong> 모델을 쓰세요. 한 번에 96 입력, 최대 1024 토큰…
      </div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #FFE2D6;">
      <div style="background:#fff;border-radius:10px;padding:8px 10px;display:flex;align-items:center;gap:8px;font-size:11px;color:#6B5D55;">
        <span style="flex:1;">Cohere에게 물어보기…</span>
        <span style="width:22px;height:22px;background:#FF7759;border-radius:50%;display:grid;place-items:center;color:#fff;font-weight:700;">↑</span>
      </div>
    </div>
  </div>

sources:
  - https://cohere.com/
  - https://docs.cohere.com/
---

### ① 브랜드 DNA
- **브랜드명**: Cohere
- **한 줄 정체성**: B2B 엔터프라이즈를 위한 LLM·임베딩·검색 API 플랫폼 (Command/Embed/Rerank)
- **공식 디자인 철학**: "AI for business that builds, not breaks" — 따뜻하지만 신뢰감 있는 톤
- **시그니처 요소 1개**: 따뜻한 코럴(#FF7759) 액센트 + 피치(#FFF4ED) 캔버스 + 가벼운 라운드 일러스트. 다른 B2B AI(OpenAI 흑백·Anthropic 크림)와 차별되는 "친근한 엔터프라이즈"

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, B2B, 따뜻
- **무드 설명**: 엔터프라이즈 AI지만 무거운 다크 톤이 아니라 따뜻한 피치/크림 캔버스. 일러스트는 단순한 추상 라운드 셰이프. 한국·일본 SaaS의 가벼운 친근함과 미국 B2B의 신뢰감을 절충.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (8~12px)
- **평면성**: Subtle — 그림자 1단계, 미세 elevation

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Cohere Coral */
  --color-primary-50:  #FFF4ED;
  --color-primary-100: #FFE2D6;
  --color-primary-200: #FFC2A4;
  --color-primary-300: #FFA178;
  --color-primary-400: #FF8C66;
  --color-primary-500: #FF7759;
  --color-primary-600: #E55A3D;
  --color-primary-700: #B8442E;
  --color-primary-800: #82301F;
  --color-primary-900: #4A1B11;

  /* Secondary - Deep Navy (균형용) */
  --color-secondary-300: #4A4080;
  --color-secondary-500: #2D2466;
  --color-secondary-700: #1A1133;

  /* Neutral - Warm */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FFFBF7;
  --color-neutral-100:  #FFF4ED;
  --color-neutral-300:  #E5D7CD;
  --color-neutral-500:  #A1907D;
  --color-neutral-700:  #6B5D55;
  --color-neutral-900:  #1A1133;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #ECFDF5;
  --color-success-fg: #047857;
  --color-warning-bg: #FFFBEB;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FEF2F2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #EFF6FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFF4ED;
  --bg-subtle:   #FFFBF7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,17,51,0.55);

  /* Text */
  --text-primary:    #1A1133;
  --text-secondary:  #4A4080;
  --text-tertiary:   #6B5D55;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A1907D;

  /* Border */
  --border-default: #FFE2D6;
  --border-subtle:  #FFF4ED;
  --border-strong:  #E5D7CD;
  --border-focus:   #FF7759;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): CoFo Sans (Contrast Foundry) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드: JetBrains Mono / Söhne Mono
- **위계**:
  - Display: 56px / 600 / 1.1 / -0.03em
  - H1: 36px / 600 / 1.2 / -0.02em
  - H2: 24px / 600 / 1.3 / -0.015em
  - H3: 18px / 600 / 1.4 / -0.01em
  - Body Large: 17px / 400 / 1.6 / 0
  - Body: 15px / 400 / 1.55 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Caption: 12px / 500 / 1.4 / 0.01em
  - Code: 13px / 400 / 1.5 mono

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;     /* 기본 */
--radius-lg: 14px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(26,17,51,0.04);
--shadow-md: 0 4px 16px rgba(26,17,51,0.06);
--shadow-lg: 0 16px 40px rgba(26,17,51,0.10);
--shadow-coral: 0 8px 24px rgba(255,119,89,0.25);
```

### ⑧ Iconography
- **스타일**: Outline (1.75px) — 둥근 단면
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 14px/1 'CoFo Sans',Inter,sans-serif; padding: 10px 18px; border-radius: 10px; border: 1px solid var(--border-default); background: var(--bg-elevated); color: var(--text-primary); transition: background 150ms ease, transform 150ms ease; cursor: pointer; }
.btn:hover { background: var(--bg-subtle); }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); border-color: transparent; font-weight: 600; }
.btn-primary:hover { background: var(--color-primary-600); transform: translateY(-1px); }
.btn-ghost { background: transparent; border-color: transparent; color: var(--color-primary-700); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 10px; padding: 11px 14px; font: 400 14px/1.5 'CoFo Sans',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 4px rgba(255,119,89,0.12); }
.input::placeholder { color: var(--text-tertiary); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 14px; padding: 20px; box-shadow: var(--shadow-sm); }
.bubble-u { background: var(--bg-elevated); border-radius: 10px; padding: 10px 14px; max-width: 80%; align-self: flex-end; font-size: 14px; box-shadow: var(--shadow-sm); }
.bubble-a { background: var(--color-primary-500); color: var(--text-on-primary); border-radius: 10px; padding: 12px 14px; max-width: 90%; font-size: 14px; line-height: 1.55; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 10px; border-radius: 9999px; font: 500 11px/1.4 'CoFo Sans',sans-serif; }
.tag-coral { background: var(--color-primary-100); color: var(--color-primary-700); border: 1px solid var(--color-primary-200); }
.tag-navy { background: rgba(26,17,51,0.06); color: var(--color-secondary-700); }
.tag-model { font-family: 'JetBrains Mono',monospace; font-size: 10.5px; }
```

**Navigation**
```css
.topbar { background: var(--bg-base); padding: 14px 24px; display: flex; align-items: center; gap: 14px; }
.topbar .logo { width: 26px; height: 26px; background: var(--color-primary-500); border-radius: 7px; display: grid; place-items: center; color: var(--text-on-primary); font: 900 13px/1 sans-serif; }
.topbar h1 { font: 600 17px/1 'CoFo Sans',sans-serif; letter-spacing: -0.01em; margin: 0; }
.topbar .nav { margin-left: auto; display: flex; gap: 18px; font: 500 14px/1 inherit; color: var(--text-secondary); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-warm: cubic-bezier(0.34, 1.2, 0.64, 1);
```

### ⑪ Anti-patterns
1. 차가운 다크 톤 배경 금지 — 항상 따뜻한 피치/크림
2. 코럴 한 톤 외 다른 강조 색 금지 — single accent
3. 모서리 sharp(<6px) 사용 금지 — 친근함 잃음
4. 본문 텍스트를 코럴 위에 직접 배치 금지 — 흰 텍스트로 contrast 확보
5. 어두운 그림자 사용 금지 — 항상 따뜻하고 옅은 elevation

### ⑫ 시그니처 적용 예시

```html
<style>
  .co-app { font: 15px/1.55 'CoFo Sans', Inter, sans-serif; background: #FFF4ED; color: #1A1133; min-height: 480px; display: grid; grid-template-rows: auto 1fr; }
  .co-app .top { padding: 16px 24px; display: flex; align-items: center; gap: 12px; }
  .co-app .top .logo { width: 30px; height: 30px; background: #FF7759; color: #fff; border-radius: 8px; display: grid; place-items: center; font: 900 14px/1 sans-serif; }
  .co-app .top h1 { font: 600 18px/1 inherit; letter-spacing: -0.01em; margin: 0; }
  .co-app .top .nav { margin-left: auto; display: flex; gap: 18px; font: 500 14px/1 inherit; color: #4A4080; }
  .co-app .stage { padding: 16px 24px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 16px; align-items: start; }
  .co-app .chat { background: #fff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 16px rgba(26,17,51,0.06); display: flex; flex-direction: column; gap: 12px; }
  .co-app .chat .head { font: 500 12px/1 inherit; color: #6B5D55; letter-spacing: 0.04em; text-transform: uppercase; }
  .co-app .bubble-u { background: #FFF4ED; padding: 10px 14px; border-radius: 12px; align-self: flex-end; max-width: 80%; font-size: 14px; }
  .co-app .bubble-a { background: #FF7759; color: #fff; padding: 12px 14px; border-radius: 12px; max-width: 90%; line-height: 1.55; }
  .co-app .bubble-a code { background: rgba(0,0,0,0.18); padding: 1px 6px; border-radius: 4px; font: 12px 'JetBrains Mono',monospace; }
  .co-app .composer { margin-top: auto; background: #FFF4ED; border-radius: 12px; padding: 10px 12px 10px 16px; display: flex; align-items: center; gap: 10px; }
  .co-app .composer input { all: unset; flex: 1; font-size: 14px; }
  .co-app .composer .send { width: 28px; height: 28px; border-radius: 50%; background: #FF7759; color: #fff; display: grid; place-items: center; font-weight: 700; }
  .co-app .side { display: flex; flex-direction: column; gap: 12px; }
  .co-app .pick { background: #fff; border-radius: 14px; padding: 16px; box-shadow: 0 1px 2px rgba(26,17,51,0.04); }
  .co-app .pick h3 { font: 600 14px/1.3 inherit; margin: 0 0 8px; letter-spacing: -0.005em; }
  .co-app .pick .row { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; font-size: 13px; color: #4A4080; }
  .co-app .pick .row .name { font-family: 'JetBrains Mono',monospace; font-size: 12px; color: #1A1133; }
  .co-app .pick .row.act .name { color: #B8442E; }
  .co-app .pick .row.act { font-weight: 600; color: #1A1133; }
</style>

<div class="co-app">
  <header class="top">
    <div class="logo">C</div>
    <h1>cohere</h1>
    <nav class="nav"><span>Playground</span><span>Docs</span><span>Console</span></nav>
  </header>
  <section class="stage">
    <div class="chat">
      <div class="head">Command Chat</div>
      <div class="bubble-u">Embed로 검색 인덱스 만들려면?</div>
      <div class="bubble-a"><strong>embed-v4</strong> 모델을 사용하면 됩니다. 한 호출당 최대 96개 입력, 입력당 최대 1024 토큰. <code>input_type</code>은 <code>search_document</code>로 설정하세요.</div>
      <div class="bubble-u">한국어도 지원해?</div>
      <div class="bubble-a">네 — 다국어 임베딩 모델이라 한국어 문서도 그대로 인덱싱할 수 있습니다.</div>
      <div class="composer">
        <input placeholder="Cohere에게 물어보기…" />
        <div class="send">↑</div>
      </div>
    </div>
    <aside class="side">
      <div class="pick">
        <h3>모델</h3>
        <div class="row act"><span>Command R+</span><span class="name">command-r-plus</span></div>
        <div class="row"><span>Command R</span><span class="name">command-r</span></div>
        <div class="row"><span>Embed v4</span><span class="name">embed-v4</span></div>
        <div class="row"><span>Rerank 3.5</span><span class="name">rerank-3.5</span></div>
      </div>
      <div class="pick">
        <h3>파라미터</h3>
        <div class="row"><span>temperature</span><span class="name">0.3</span></div>
        <div class="row"><span>max_tokens</span><span class="name">1024</span></div>
      </div>
    </aside>
  </section>
</div>
```
