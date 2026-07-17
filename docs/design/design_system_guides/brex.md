---
brand: Brex
brand_ko: 브렉스
slug: brex
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - fintech
  - enterprise

color_tone: neutral
primary_color_hex: "#FB7C2D"
primary_color_name: "Brex Orange"
mood:
  - 정밀
  - 엔터프라이즈
  - 모노

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

released_year: 2017
last_major_revision: 2024
signature_keyword: "검정 캔버스에 Brex Orange 단일 액센트의 기업 카드/지출 톤"

card_tokens: |
  {
    "light": { "bg": "#0E0E10", "surface": "#1F1F22", "border": "#2A2A2D", "fg": "#FFFFFF", "fg_muted": "#A4A4A8", "accent": "#FB7C2D" },
    "dark":  { "bg": "#000000", "surface": "#141417", "border": "#27272A", "fg": "#F5F5F5", "fg_muted": "#A4A4A8", "accent": "#FB7C2D" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-surface);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);border-radius:5px;"></span>
      <strong style="font-size:13px;font-weight:700;">Brex</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:linear-gradient(135deg,#1F1F22 0%,#0E0E10 100%);border:1px solid var(--card-border);border-radius:12px;padding:14px;color:#fff;">
        <div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">Brex Card · acme inc.</div>
        <div style="font-family:ui-monospace,monospace;font-size:14px;letter-spacing:0.05em;margin:14px 0 6px;">•••• •••• •••• 4321</div>
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;display:flex;justify-content:space-between;">
          <span>MINA PARK</span><span style="color:var(--card-accent);">BREX</span>
        </div>
      </div>
      <div style="background:var(--card-surface);border-radius:10px;padding:10px;font-size:11px;">
        <div style="color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;font-weight:700;font-size:9px;margin-bottom:4px;">이번 달 지출</div>
        <div style="font-size:18px;font-weight:700;">$ 24,820</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-top:8px;font-size:10px;">
          <div><span style="color:var(--card-fg-muted);">SaaS</span><br/><strong>$ 12.4k</strong></div>
          <div><span style="color:var(--card-fg-muted);">출장</span><br/><strong>$ 4.2k</strong></div>
          <div><span style="color:var(--card-fg-muted);">광고</span><br/><strong>$ 8.2k</strong></div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.brex.com/
  - https://brex.design/
---

### ① 브랜드 DNA
- **브랜드명**: Brex
- **한 줄 정체성**: 스타트업/테크 기업 전용 코퍼레이트 카드 + 지출 관리 플랫폼
- **공식 디자인 철학**: "Spend smart — modern finance for ambitious companies"
- **시그니처 요소 1개**: 다크 캔버스(#0E0E10) + Brex Orange(#FB7C2D) 단일 액센트 + 코퍼레이트 카드 디자인

### ② 톤 & 무드
- **핵심 키워드 3개**: 정밀, 엔터프라이즈, 모노
- **무드 설명**: 거의 모노 다크 + 한 점의 오렌지. 코퍼레이트 카드와 지출 데이터가 단조로운 정밀 톤으로 표현된다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 데이터 위주
- **모서리 성향**: Soft (8~12px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Brex Orange */
  --color-primary-50:  #FEEFE5;
  --color-primary-100: #FCDCC2;
  --color-primary-200: #FAB985;
  --color-primary-300: #FD9748;
  --color-primary-400: #FC8732;
  --color-primary-500: #FB7C2D;  /* Brex Orange */
  --color-primary-600: #DB6520;
  --color-primary-700: #AD4F18;
  --color-primary-800: #803A12;
  --color-primary-900: #4D220A;

  /* Secondary - Brex Black */
  --color-secondary-500: #0E0E10;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F8F8;
  --color-neutral-100:  #F1F1F2;
  --color-neutral-200:  #E0E0E2;
  --color-neutral-300:  #C7C7CA;
  --color-neutral-500:  #8A8A8E;
  --color-neutral-700:  #5C5C60;
  --color-neutral-800:  #2A2A2D;
  --color-neutral-900:  #1F1F22;
  --color-neutral-1000: #0E0E10;

  /* Semantic */
  --color-success-bg: #DCFCE7;
  --color-success-fg: #16A34A;
  --color-warning-bg: #FEF3C7;
  --color-warning-fg: #CA8A04;
  --color-error-bg:   #FEE2E2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #FEEFE5;
  --color-info-fg:    #FB7C2D;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F8F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,14,16,0.50);

  /* Text */
  --text-primary:    #0E0E10;
  --text-secondary:  #5C5C60;
  --text-tertiary:   #8A8A8E;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7CA;

  /* Border */
  --border-default: #E0E0E2;
  --border-subtle:  #F1F1F2;
  --border-strong:  #C7C7CA;
  --border-focus:   #FB7C2D;
}

[data-theme="dark"] {
  --bg-base: #0E0E10;
  --bg-subtle: #1F1F22;
  --bg-elevated: #2A2A2D;
  --text-primary: #FFFFFF;
  --text-secondary: #A4A4A8;
  --border-default: #1F1F22;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 32px / 700 / 1.15 / -0.01em
  - H2: 22px / 600 / 1.25 / 0
  - H3: 16px / 600 / 1.3 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.43 / 0
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
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-xl: 0 16px 32px rgba(251,124,45,0.18);
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
  font: 600 13px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 6px 10px; height: 32px; font-size: 13px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(251,124,45,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Brex Card** (시그니처)
```css
.brex-card {
  background: linear-gradient(135deg, #1F1F22 0%, #0E0E10 100%);
  border: 1px solid #2A2A2D;
  border-radius: 12px;
  padding: 18px 20px;
  color: #fff;
  font-family: ui-monospace, monospace;
  position: relative;
}
.brex-card .label { font-size: 9px; color: #A4A4A8; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; }
.brex-card .num { font-size: 16px; letter-spacing: 0.05em; margin: 18px 0 8px; }
.brex-card .row { display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
.brex-card .row .brand { color: var(--color-primary-500); }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
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
1. brand orange를 destructive 액션에 사용 금지 — primary action에만
2. Brex 카드 디자인의 모노 다크 색을 임의 변경 금지
3. 본문에 채도 높은 그라데이션 배경 금지
4. 데이터 테이블에 다채로운 색 row 사용 금지 — 모노 stripe만
5. 로고 사각형 비율 변경 금지

### ⑫ 시그니처 적용 예시 (Dashboard dark)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #fff; background: #0E0E10; }
  .topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: #0E0E10; border-bottom: 1px solid #1F1F22; }
  .topnav .logo { width: 22px; height: 22px; background: #FB7C2D; border-radius: 5px; }
  .topnav strong { font-size: 15px; font-weight: 700; }
  .topnav nav { display: flex; gap: 16px; font-size: 13px; color: #A4A4A8; }
  .layout { max-width: 1100px; margin: 24px auto; padding: 0 24px; display: grid; grid-template-columns: 320px 1fr; gap: 18px; }
  .brex-card { background: linear-gradient(135deg, #1F1F22 0%, #0E0E10 100%); border: 1px solid #2A2A2D; border-radius: 14px; padding: 22px 24px; color: #fff; box-shadow: 0 16px 40px rgba(0,0,0,0.5); }
  .brex-card .label { font-size: 10px; color: #A4A4A8; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; }
  .brex-card .num { font-family: ui-monospace, monospace; font-size: 18px; letter-spacing: 0.06em; margin: 28px 0 14px; }
  .brex-card .row { display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
  .brex-card .row .brand { color: #FB7C2D; font-style: italic; }
  .stats { background: #1F1F22; border: 1px solid #2A2A2D; border-radius: 14px; padding: 18px 20px; }
  .stats h3 { margin: 0 0 14px; font-size: 13px; font-weight: 700; color: #A4A4A8; text-transform: uppercase; letter-spacing: 0.04em; }
  .stats .total { font-size: 32px; font-weight: 700; letter-spacing: -0.01em; }
  .breakdown { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px; }
  .breakdown .item { background: #0E0E10; border: 1px solid #2A2A2D; border-radius: 8px; padding: 10px 12px; }
  .breakdown .item .name { font-size: 11px; color: #A4A4A8; }
  .breakdown .item strong { font-size: 16px; font-weight: 700; display: block; margin-top: 4px; }
  .breakdown .item .pct { font-size: 11px; color: #FB7C2D; font-weight: 700; margin-top: 2px; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Brex</strong>
  <span style="color:#A4A4A8; font-size:13px;">/ acme inc.</span>
  <nav><a>대시보드</a><a>카드</a><a>지출</a><a>송금</a></nav>
</header>

<main class="layout">
  <div class="brex-card">
    <div class="label">Brex Card · Acme Inc.</div>
    <div class="num">•••• •••• •••• 4321</div>
    <div class="row"><span>MINA PARK</span><span class="brand">BREX</span></div>
  </div>
  <section class="stats">
    <h3>이번 달 회사 지출</h3>
    <div class="total">$ 24,820.50</div>
    <div class="breakdown">
      <div class="item"><div class="name">SaaS</div><strong>$ 12,400</strong><div class="pct">▲ 8%</div></div>
      <div class="item"><div class="name">출장</div><strong>$ 4,200</strong><div class="pct">▼ 12%</div></div>
      <div class="item"><div class="name">광고</div><strong>$ 8,220</strong><div class="pct">▲ 24%</div></div>
    </div>
  </section>
</main>
```
