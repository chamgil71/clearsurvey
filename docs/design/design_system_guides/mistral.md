---
brand: Mistral AI
brand_ko: 미스트랄 AI
slug: mistral
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - ai
  - dev-tools

color_tone: warm
primary_color_hex: "#FA520F"
primary_color_name: "Mistral Orange"
mood:
  - 모던
  - 유럽적
  - 오픈

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2023
last_major_revision: 2024
signature_keyword: "Yellow→Orange→Red 5단 계단형 그라데이션의 유럽 오픈 AI 톤"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#FAFAF8;color:#0E1116;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#FAFAF8;border-bottom:1px solid #E5E2DA;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-flex;height:14px;align-items:flex-end;gap:2px;">
        <span style="width:4px;height:30%;background:#FFC53D;"></span>
        <span style="width:4px;height:50%;background:#FFA32D;"></span>
        <span style="width:4px;height:70%;background:#FA520F;"></span>
        <span style="width:4px;height:85%;background:#E03A1A;"></span>
        <span style="width:4px;height:100%;background:#7A2410;"></span>
      </span>
      <strong style="font-size:13px;">Mistral</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="font-size:18px;font-weight:600;line-height:1.25;color:#0E1116;">Le Chat</div>
      <div style="font-size:11px;color:#5C6275;">Mistral Large · €0.008 / 1k tokens</div>
      <div style="background:#fff;border:1px solid #E5E2DA;border-radius:10px;padding:12px;font-size:12px;line-height:1.55;color:#0E1116;">
        Bonjour ! Comment puis-je vous aider aujourd'hui ?
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <div style="background:#fff;border:1px solid #E5E2DA;border-radius:8px;padding:8px 10px;font-size:11px;color:#5C6275;">⚡ Fast inference<br/><strong style="color:#0E1116;font-size:13px;">42ms</strong></div>
        <div style="background:#fff;border:1px solid #E5E2DA;border-radius:8px;padding:8px 10px;font-size:11px;color:#5C6275;">🌐 Open weights<br/><strong style="color:#0E1116;font-size:13px;">Mixtral 8x7B</strong></div>
      </div>
      <button style="background:#FA520F;color:#fff;border:0;border-radius:8px;padding:8px 14px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;margin-top:auto;">Try Le Chat →</button>
    </div>
  </div>

sources:
  - https://mistral.ai/
  - https://chat.mistral.ai/
  - https://docs.mistral.ai/
---

### ① 브랜드 DNA
- **브랜드명**: Mistral AI
- **한 줄 정체성**: 유럽발 오픈 weights 모델로 효율적 추론을 강조하는 프랑스 AI 기업
- **공식 디자인 철학**: "Frontier AI in your hands — open, efficient, sovereign"
- **시그니처 요소 1개**: Yellow→Orange→Red→Maroon 5단 계단형 그라데이션 (mistral 바람 시각화) + Mistral Orange(#FA520F)

### ② 톤 & 무드
- **핵심 키워드 3개**: 모던, 유럽적, 오픈
- **무드 설명**: 따뜻한 베이지 캔버스에 5단 계단형 그라데이션이 brand mark로. 로고가 바람의 단계처럼 시각화된다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (8~10px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Mistral Orange */
  --color-primary-50:  #FEEFE5;
  --color-primary-100: #FCDCC2;
  --color-primary-200: #FAB985;
  --color-primary-300: #F89249;
  --color-primary-400: #FB6F1B;
  --color-primary-500: #FA520F;  /* Mistral Orange */
  --color-primary-600: #DB430A;
  --color-primary-700: #AD3508;
  --color-primary-800: #7A2410;
  --color-primary-900: #4D1604;

  /* 시그니처 5단 그라데이션 */
  --mistral-1: #FFC53D;       /* Yellow */
  --mistral-2: #FFA32D;       /* Light Orange */
  --mistral-3: #FA520F;       /* Orange */
  --mistral-4: #E03A1A;       /* Red */
  --mistral-5: #7A2410;       /* Maroon */

  /* Secondary */
  --color-secondary-500: #E03A1A;

  /* Neutral - warm beige */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAF8;     /* canvas */
  --color-neutral-100:  #F1EFE8;
  --color-neutral-200:  #E5E2DA;
  --color-neutral-300:  #C9C5B8;
  --color-neutral-500:  #8E8B7E;
  --color-neutral-700:  #5C6275;
  --color-neutral-800:  #3A3D44;
  --color-neutral-900:  #0E1116;
  --color-neutral-1000: #050608;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FAFAF8;
  --bg-subtle:   #F1EFE8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,17,22,0.50);

  /* Text */
  --text-primary:    #0E1116;
  --text-secondary:  #5C6275;
  --text-tertiary:   #8E8B7E;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C9C5B8;

  /* Border */
  --border-default: #E5E2DA;
  --border-subtle:  #F1EFE8;
  --border-strong:  #C9C5B8;
  --border-focus:   #FA520F;
}

[data-theme="dark"] {
  --bg-base: #0E1116;
  --bg-subtle: #1A1D24;
  --bg-elevated: #232831;
  --text-primary: #FAFAF8;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL)
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono"
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
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
--radius-lg: 10px;
--radius-xl: 14px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 20px 48px rgba(250,82,15,0.20);
```

### ⑧ Iconography
- **스타일**: Outline (Mistral 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 38px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 10px 14px; font-size: 15px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(250,82,15,0.20); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-subtle); }
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
1. 5단 계단형 그라데이션 색 순서를 임의 변경 금지 — Yellow→Maroon이 시그니처
2. Maroon(#7A2410)을 본문 텍스트로 사용 금지 — 가독성 저하
3. 캔버스를 흰색(#FFF)로 변경 금지 — 베이지(#FAFAF8) 시그니처
4. 본문에 italic 강조 금지
5. 5단 그라데이션을 그라데이션이 아닌 평면으로 임의 변경 금지

### ⑫ 시그니처 적용 예시 (Marketing hero)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #0E1116; background: #FAFAF8; }
  .topnav { padding: 16px 32px; display: flex; align-items: center; gap: 24px; border-bottom: 1px solid #E5E2DA; }
  .topnav .logo { display: inline-flex; height: 18px; align-items: flex-end; gap: 3px; }
  .topnav .logo span { width: 5px; }
  .topnav .logo .b1 { height: 30%; background: #FFC53D; }
  .topnav .logo .b2 { height: 50%; background: #FFA32D; }
  .topnav .logo .b3 { height: 70%; background: #FA520F; }
  .topnav .logo .b4 { height: 85%; background: #E03A1A; }
  .topnav .logo .b5 { height: 100%; background: #7A2410; }
  .topnav strong { font-size: 16px; font-weight: 700; }
  .topnav nav { display: flex; gap: 18px; font-size: 14px; color: #5C6275; }
  .hero { max-width: 1100px; margin: 80px auto; padding: 0 24px; text-align: center; }
  .hero h1 { font-size: 56px; font-weight: 700; line-height: 1.05; letter-spacing: -0.02em; margin: 0 0 16px; }
  .hero h1 .grad { background: linear-gradient(90deg, #FFC53D 0%, #FFA32D 25%, #FA520F 50%, #E03A1A 75%, #7A2410 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .hero p { font-size: 18px; color: #5C6275; max-width: 580px; margin: 0 auto 24px; line-height: 1.6; }
  .cta { display: inline-flex; gap: 10px; }
  .grid { max-width: 1100px; margin: 64px auto; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .panel { background: #fff; border: 1px solid #E5E2DA; border-radius: 14px; padding: 24px; }
  .panel h3 { margin: 8px 0 4px; font-size: 18px; font-weight: 700; }
  .panel p { font-size: 14px; line-height: 1.5; color: #5C6275; margin: 0; }
  .panel .ic { width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #FFA32D, #FA520F); display: grid; place-items: center; color: #fff; font-weight: 700; }
</style>

<header class="topnav">
  <div style="display:flex; align-items:center; gap:10px;">
    <span class="logo"><span class="b1"></span><span class="b2"></span><span class="b3"></span><span class="b4"></span><span class="b5"></span></span>
    <strong>Mistral AI</strong>
  </div>
  <nav><a>Models</a><a>Le Chat</a><a>API</a><a>Docs</a></nav>
  <button class="btn btn-primary" style="margin-left:auto; background:#FA520F; color:#fff; border:0; border-radius:8px; padding:8px 16px; font-size:13px; font-weight:600;">Try Le Chat →</button>
</header>

<section class="hero">
  <h1>Frontier AI<br/><span class="grad">in your hands.</span></h1>
  <p>오픈 weights 모델과 효율적인 추론으로 — 유럽발 AI 기업이 만드는 자율적 인공지능.</p>
  <div class="cta">
    <button class="btn btn-primary" style="background:#FA520F; color:#fff; border:0; border-radius:8px; padding:12px 20px; font-size:14px; font-weight:600;">Get started</button>
    <button class="btn btn-secondary" style="background:#fff; color:#0E1116; border:1px solid #C9C5B8; border-radius:8px; padding:12px 20px; font-size:14px; font-weight:600;">Read paper →</button>
  </div>
</section>

<div class="grid">
  <div class="panel"><div class="ic">⚡</div><h3>Mistral Large</h3><p>최고 성능 frontier 모델 — 다국어 추론, 코드, 함수 호출.</p></div>
  <div class="panel"><div class="ic">🌐</div><h3>Open weights</h3><p>Mixtral 8x7B, Mixtral 8x22B — Apache 라이선스로 공개.</p></div>
  <div class="panel"><div class="ic">💬</div><h3>Le Chat</h3><p>유럽 사용자를 위한 ChatGPT 대안. 다국어 친화.</p></div>
</div>
```
