---
brand: Shopify Polaris
brand_ko: 쇼피파이 폴라리스
slug: shopify-polaris
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - ecommerce

color_tone: warm
primary_color_hex: "#008060"
primary_color_name: "Shopify Green"
mood:
  - 신뢰
  - 효율
  - 따뜻함

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

released_year: 2017
last_major_revision: 2024
signature_keyword: "절제된 그린 액센트와 따뜻한 회색의 어드민 톤"

hero_html: |
  <div style="font-family:Inter,'Pretendard','Segoe UI',sans-serif;background:#F1F2F3;color:#202223;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #E4E5E7;padding:10px 16px;display:flex;align-items:center;gap:8px;">
      <span style="font-weight:700;color:#008060;font-size:14px;">Shopify</span>
      <span style="font-size:11px;color:#6D7175;">홈</span>
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <h2 style="font-size:18px;font-weight:700;margin:0;">오늘 매출</h2>
        <button style="background:#008060;color:#fff;border:0;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:500;font-family:inherit;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.2);">상품 추가</button>
      </div>
      <div style="background:#fff;border:1px solid #E4E5E7;border-radius:12px;padding:14px;box-shadow:0 1px 0 rgba(0,0,0,0.05);">
        <div style="font-size:11px;color:#6D7175;margin-bottom:4px;">지난 7일 대비</div>
        <div style="font-size:22px;font-weight:700;">₩ 1,284,500</div>
        <div style="font-size:12px;font-weight:600;color:#008060;margin-top:4px;">▲ 12.4%</div>
      </div>
      <div style="display:flex;gap:6px;">
        <span style="background:#AEE9D1;color:#008060;font-size:10px;font-weight:500;padding:2px 8px;border-radius:4px;">활성</span>
        <span style="background:#FED3D1;color:#D72C0D;font-size:10px;font-weight:500;padding:2px 8px;border-radius:4px;">검토 필요</span>
      </div>
    </div>
  </div>

sources:
  - https://polaris.shopify.com/
  - https://polaris.shopify.com/tokens/colors
  - https://polaris.shopify.com/design/typography
---

### ① 브랜드 DNA
- **브랜드명**: Shopify Polaris
- **한 줄 정체성**: 머천트(상점주)의 일을 자신감 있게 해내도록 돕는 커머스 어드민 시스템
- **공식 디자인 철학**: "Build for merchants — empower them to focus on what matters"
- **시그니처 요소 1개**: Shopify Green(#008060) 액센트 + Inter 폰트 + 따뜻한 흰 배경(#FAFBFB)의 어드민 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 효율, 따뜻함
- **무드 설명**: 깨끗한 흰 캔버스, 명확한 표 구조, 절제된 그린 액센트. 머천트가 매일 마주해도 피로하지 않은 차분함이 핵심.
- **비주얼 스타일**: 모던 미니멀 + 살짝의 휴머니즘 (둥근 모서리, 따뜻한 회색)
- **밀도(Density)**: Comfortable — 다양한 숙련도의 머천트를 위해 여유 있는 라인
- **모서리 성향**: Soft (8px 기본 컴포넌트, 12px 카드)
- **평면성**: Subtle — 1단계 그림자 + border 결합

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Shopify Green */
  --color-primary-50:  #E5F5F0;
  --color-primary-100: #BFE6D6;
  --color-primary-200: #95D6BB;
  --color-primary-300: #6AC59F;
  --color-primary-400: #3FB585;
  --color-primary-500: #008060;  /* Shopify Green 기본 */
  --color-primary-600: #006E52;  /* hover */
  --color-primary-700: #005C44;
  --color-primary-800: #004A36;
  --color-primary-900: #003828;

  /* Secondary - Indigo accent */
  --color-secondary-500: #2C6ECB;

  /* Neutral - Polaris neutral (warmer than pure gray) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFBFB;  /* surface */
  --color-neutral-100:  #F1F2F3;  /* surface-subdued */
  --color-neutral-200:  #E4E5E7;  /* divider */
  --color-neutral-300:  #C9CCD0;
  --color-neutral-500:  #8A8F95;
  --color-neutral-700:  #6D7175;  /* text subdued */
  --color-neutral-800:  #4A4F54;
  --color-neutral-900:  #202223;  /* text */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #AEE9D1;
  --color-success-fg: #008060;
  --color-warning-bg: #FFEB78;
  --color-warning-fg: #B98900;
  --color-error-bg:   #FED3D1;
  --color-error-fg:   #D72C0D;
  --color-info-bg:    #B4E1FA;
  --color-info-fg:    #2C6ECB;

  /* Surface */
  --bg-base:     #F1F2F3;        /* page background — Polaris는 살짝 회색 */
  --bg-subtle:   #FAFBFB;
  --bg-elevated: #FFFFFF;        /* card */
  --bg-overlay:  #FFFFFF;

  /* Text */
  --text-primary:    #202223;
  --text-secondary:  #6D7175;
  --text-tertiary:   #8A8F95;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #BABEC3;

  /* Border */
  --border-default: #C9CCD0;
  --border-subtle:  #E4E5E7;
  --border-strong:  #8A8F95;
  --border-focus:   #458FFF;
}

[data-theme="dark"] {
  --bg-base: #0B0B0B;
  --bg-subtle: #1A1A1A;
  --bg-elevated: #303030;
  --text-primary: #E3E5E7;
  --text-secondary: #B5B5B5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — Polaris 12 이후 ShopifySans에서 Inter 기반으로 전환
  - 한글: Pretendard (OFL) 또는 Inter Var의 한글 폴백
- **위계** (Polaris text styles):
  - Display (Heading XL): 28px / 700 / 1.14 / 0
  - H1 (Heading LG): 24px / 700 / 1.17 / 0
  - H2 (Heading MD): 20px / 700 / 1.20 / 0
  - H3 (Heading SM): 16px / 700 / 1.25 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body (Body MD): 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.38 / 0
  - Caption: 12px / 400 / 1.33 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 20px;     /* Polaris는 20px도 자주 사용 */
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1140px (admin 기본), 좌우 패딩 16px (mobile) / 32px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;     /* 버튼, 입력 */
--radius-lg: 12px;    /* 카드 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(0,0,0,0.05);                                 /* card resting */
--shadow-md: 0 4px 6px -2px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04);
--shadow-lg: 0 12px 16px -4px rgba(0,0,0,0.08);                        /* popover */
--shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.10);                        /* modal */
```

### ⑧ Iconography
- **스타일**: Outline + Filled (Polaris Icons는 minor/major 두 사이즈 + filled variant)
- **Stroke 굵기**: 1.5px (minor 16px) / 2px (major 20px)
- **모서리 처리**: Round
- **추천 라이브러리**: @shopify/polaris-icons (MIT) / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 "Inter", "Pretendard", sans-serif;
  border-radius: var(--radius-md);
  padding: 6px 12px;
  min-height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid transparent;
  transition: background 200ms ease, box-shadow 200ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.2); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); box-shadow: inset 0 1px 0 rgba(0,0,0,0.2); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); box-shadow: none; }

.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border-color: var(--border-default); box-shadow: 0 1px 0 rgba(0,0,0,0.05); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--color-primary-50); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 6px 12px;
  height: 36px;
  font-size: 14px;
  box-shadow: 0 0 0 1px transparent inset;
}
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 1px var(--border-focus) inset;
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 1px var(--color-error-fg) inset; }
```

**Card**
```css
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-subtle); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.badge { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px; }
.badge-solid   { background: var(--color-primary-500); color: #fff; }
.badge-subtle  { background: var(--color-primary-100); color: var(--color-primary-800); }
.badge-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top Bar)**
```css
.topbar { height: 56px; background: var(--bg-elevated); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; padding: 0 16px; gap: 16px; }
.topbar .logo { font-weight: 700; color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 300ms;
--ease-out: cubic-bezier(0.4, 0.22, 0.28, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 어드민 화면에 채도 높은 그라데이션 배경 금지 — 머천트가 데이터 보는 데 방해
2. Shopify Green을 destructive 액션에 사용 금지 — 의미 신호 혼란
3. badge에 4가지 이상 색 동시 사용 금지 — 상태 가독성 저하
4. 페이지 헤더 H1 외에 다른 곳에서 28px 이상 폰트 사용 금지
5. modal에 form 5개 이상 필드 금지 — full page 사용 권장

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Inter", "Pretendard", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .topbar { /* 위 정의 */ }
  .page { max-width: 1140px; margin: 0 auto; padding: 32px; }
  .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
  .page-header h1 { font-size: 24px; font-weight: 700; margin: 0; }
  .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .feature-card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-subtle); }
  .feature-card .icon-circle { width: 36px; height: 36px; border-radius: 50%; background: var(--color-primary-50); color: var(--color-primary-500); display: grid; place-items: center; font-weight: 700; margin-bottom: 12px; }
  .feature-card h3 { font-size: 16px; font-weight: 700; margin: 0 0 4px; }
  .feature-card p { font-size: 13px; line-height: 1.43; color: var(--text-secondary); margin: 0; }
  .stat { display: flex; align-items: baseline; gap: 8px; margin-top: 12px; }
  .stat .num { font-size: 24px; font-weight: 700; color: var(--text-primary); }
  .stat .delta { color: var(--color-success-fg); font-size: 13px; font-weight: 600; }
</style>

<header class="topbar">
  <span class="logo">Shopify</span>
  <input class="input" placeholder="Search" style="flex:1; max-width:480px"/>
  <button class="btn btn-secondary">도움말</button>
</header>

<main class="page">
  <div class="page-header">
    <h1>홈</h1>
    <div>
      <button class="btn btn-secondary">내보내기</button>
      <button class="btn btn-primary">상품 추가</button>
    </div>
  </div>
  <div class="features">
    <div class="feature-card">
      <div class="icon-circle">$</div>
      <h3>오늘 매출</h3>
      <p>지난 7일 대비</p>
      <div class="stat"><span class="num">₩ 1,284,500</span><span class="delta">▲ 12.4%</span></div>
    </div>
    <div class="feature-card">
      <div class="icon-circle">★</div>
      <h3>주문</h3>
      <p>처리 대기 중</p>
      <div class="stat"><span class="num">28</span><span class="badge badge-subtle">검토 필요</span></div>
    </div>
    <div class="feature-card">
      <div class="icon-circle">♦</div>
      <h3>방문자</h3>
      <p>지난 24시간</p>
      <div class="stat"><span class="num">3,412</span><span class="delta">▲ 8.1%</span></div>
    </div>
  </div>
</main>
```
