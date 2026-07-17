---
brand: Market Kurly
brand_ko: 마켓컬리
slug: kurly
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - ecommerce
  - lifestyle

color_tone: cool
primary_color_hex: "#5F0080"
primary_color_name: "Kurly Purple"
mood:
  - 프리미엄
  - 새벽배송
  - 큐레이션

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2015
last_major_revision: 2024
signature_keyword: "Kurly Purple과 새벽배송 배지의 한국 프리미엄 식료품 톤"

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:#FFFFFF;color:#191919;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#5F0080;color:#fff;padding:14px 16px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;letter-spacing:-0.025em;">Kurly</strong>
      <span style="margin-left:auto;font-size:11px;font-weight:700;background:rgba(255,255,255,0.15);padding:3px 8px;border-radius:9999px;">샛별배송</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div>
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#FFE9D5,#5F0080);border-radius:8px;position:relative;">
            <span style="position:absolute;left:6px;top:6px;background:#5F0080;color:#fff;padding:2px 6px;border-radius:3px;font-size:9px;font-weight:800;">샛별</span>
            <span style="position:absolute;left:6px;top:30px;background:#fff;color:#5F0080;padding:2px 6px;border-radius:3px;font-size:9px;font-weight:800;">Kurly Only</span>
          </div>
          <div style="margin-top:6px;">
            <div style="font-size:10px;color:#888;">[브랜드]</div>
            <div style="font-size:11px;font-weight:600;line-height:1.3;margin-top:1px;">제주 한라봉 1.5kg</div>
            <div style="display:flex;align-items:baseline;gap:4px;margin-top:3px;">
              <strong style="font-size:11px;color:#5F0080;">10%</strong>
              <strong style="font-size:13px;font-weight:800;">17,900</strong>
            </div>
          </div>
        </div>
        <div>
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#1AAD5C,#FFE9D5);border-radius:8px;position:relative;">
            <span style="position:absolute;left:6px;top:6px;background:#5F0080;color:#fff;padding:2px 6px;border-radius:3px;font-size:9px;font-weight:800;">샛별</span>
          </div>
          <div style="margin-top:6px;">
            <div style="font-size:10px;color:#888;">[브랜드]</div>
            <div style="font-size:11px;font-weight:600;line-height:1.3;margin-top:1px;">유기농 채소 박스</div>
            <div style="display:flex;align-items:baseline;gap:4px;margin-top:3px;">
              <strong style="font-size:13px;font-weight:800;">28,000</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.kurly.com/
---

### ① 브랜드 DNA
- **브랜드명**: Market Kurly (마켓컬리, 컬리)
- **한 줄 정체성**: 한국 새벽배송의 시작 — 프리미엄 식료품 큐레이션
- **공식 디자인 철학**: "내일의 식탁을 오늘 밤에 — 신선함, 큐레이션, 새벽 도착"
- **시그니처 요소 1개**: Kurly Purple(#5F0080) + 샛별배송 배지 + 'Kurly Only' 자체 브랜드

### ② 톤 & 무드
- **핵심 키워드 3개**: 프리미엄, 새벽배송, 큐레이션
- **무드 설명**: 보라 헤더 + 흰 캔버스 + 식료품 컬러풀 사진. 새벽배송 배지가 신뢰 신호로 강조된다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (6~10px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  --color-primary-50:  #F4E5F8;
  --color-primary-100: #E0B8EC;
  --color-primary-200: #C088D8;
  --color-primary-300: #9D58C2;
  --color-primary-400: #7E32A8;
  --color-primary-500: #5F0080;  /* Kurly Purple */
  --color-primary-600: #4F006B;
  --color-primary-700: #3D0053;
  --color-primary-800: #2B003B;
  --color-primary-900: #1A0024;

  --color-secondary-500: #FF3838;

  --color-neutral-0: #FFFFFF; --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5; --color-neutral-200: #F0F0F0;
  --color-neutral-300: #E0E0E0; --color-neutral-500: #C7C7C7;
  --color-neutral-700: #888888; --color-neutral-800: #555555;
  --color-neutral-900: #191919; --color-neutral-1000: #000000;

  --color-success-bg: #DCF7E5; --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9; --color-warning-fg: #B45309;
  --color-error-bg: #FFE5E5; --color-error-fg: #FF3838;
  --color-info-bg: #F4E5F8; --color-info-fg: #5F0080;

  --bg-base: #FFFFFF; --bg-subtle: #F5F5F5;
  --bg-elevated: #FFFFFF; --bg-overlay: rgba(95,0,128,0.50);

  --text-primary: #191919; --text-secondary: #555;
  --text-tertiary: #888; --text-on-primary: #FFFFFF;
  --text-disabled: #C7C7C7;

  --border-default: #F0F0F0; --border-subtle: #FAFAFA;
  --border-strong: #E0E0E0; --border-focus: #5F0080;
}

[data-theme="dark"] { --bg-base: #1A1A1A; --bg-subtle: #2D2D2D; --bg-elevated: #383838; --text-primary: #F5F5F5; }
```

### ④ 타이포그래피
- 한글 Pretendard, 영문 -apple-system
- Display 32/800/1.15 / H1 22/800/1.2 / H2 17/700/1.27 / H3 14/700/1.3
- Body 13/500 / Small 12/500 / Caption 11/700

### ⑤ 스페이싱
- Base 4px, Container max 480px (mobile)

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 4px; --radius-md: 6px;
--radius-lg: 8px; --radius-xl: 12px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(95,0,128,0.30);
```

### ⑧ Iconography
- Outline + Filled, 2px stroke, Round
- Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Pretendard,sans-serif; letter-spacing:-0.01em; border-radius: var(--radius-md); padding: 12px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: var(--radius-md); padding: 11px 14px; font-size: 14px; font-family: inherit; }
.input:focus { outline: none; border-color: var(--border-focus); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 12px; }
.product .img { aspect-ratio: 1; border-radius: var(--radius-md); position: relative; }
.product .brand { font-size: 10px; color: var(--text-tertiary); margin-top: 6px; }
.product h3 { font-size: 13px; font-weight: 600; line-height: 1.3; margin: 2px 0 4px; }
.product .price-row { display: flex; align-items: baseline; gap: 4px; }
.product .pct { font-size: 12px; color: var(--color-primary-500); font-weight: 800; }
.product .price { font-size: 14px; font-weight: 800; }
```

**Badge / 샛별배송**
```css
.tag { padding: 2px 6px; border-radius: 3px; font-size: 10px; font-weight: 800; }
.tag-saetbyeol { background: #5F0080; color: #fff; }
.tag-only { background: #fff; color: #5F0080; border: 1px solid #5F0080; }
.tag-solid { background: var(--color-primary-500); color: #fff; }
.tag-subtle { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 14px 16px; background: var(--color-primary-500); color: #fff; display: flex; align-items: center; gap: 10px; }
.topnav .brand { font-weight: 900; font-size: 18px; letter-spacing: -0.025em; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 200ms; --duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 샛별배송 배지를 brand purple 외 다른 색으로 변경 금지
2. brand purple을 destructive 액션에 사용 금지
3. Kurly Only 배지를 임의 위치 변경 금지 — 좌상단 표준
4. 본문 폰트 weight 400 이하 금지
5. 가격 영역에서 할인%/가격 분리 표기 금지

### ⑫ 시그니처 적용 예시 (Mobile feed)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #191919; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; }
  .topbar { background: #5F0080; color: #fff; padding: 14px 16px; display: flex; align-items: center; gap: 10px; }
  .topbar .brand { font-weight: 900; font-size: 22px; letter-spacing: -0.025em; }
  .topbar .saet { background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 800; margin-left: auto; }
  .home { padding: 12px 12px 24px; display: flex; flex-direction: column; gap: 12px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .product .img { aspect-ratio: 1; border-radius: 8px; position: relative; }
  .product .img .badge { position: absolute; padding: 2px 7px; border-radius: 3px; font-size: 10px; font-weight: 800; }
  .product .img .saetbyeol { left: 6px; top: 6px; background: #5F0080; color: #fff; }
  .product .img .only { left: 6px; top: 32px; background: #fff; color: #5F0080; border: 1px solid #5F0080; }
  .product .meta { padding: 6px 4px 0; }
  .product .brand-name { font-size: 10px; color: #888; }
  .product h3 { font-size: 13px; font-weight: 600; line-height: 1.3; margin: 2px 0 4px; }
  .product .price-row { display: flex; align-items: baseline; gap: 4px; }
  .product .pct { font-size: 12px; color: #5F0080; font-weight: 800; }
  .product .price { font-size: 15px; font-weight: 800; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">Kurly</span>
    <span class="saet">샛별배송</span>
  </header>
  <main class="home">
    <div class="grid">
      <article class="product">
        <div class="img" style="background:linear-gradient(135deg,#FFE9D5,#5F0080);"><span class="badge saetbyeol">샛별</span><span class="badge only">Kurly Only</span></div>
        <div class="meta"><div class="brand-name">[브랜드]</div><h3>제주 한라봉 1.5kg</h3><div class="price-row"><span class="pct">10%</span><span class="price">17,900</span></div></div>
      </article>
      <article class="product">
        <div class="img" style="background:linear-gradient(135deg,#1AAD5C,#FFE9D5);"><span class="badge saetbyeol">샛별</span></div>
        <div class="meta"><div class="brand-name">[브랜드]</div><h3>유기농 채소 박스</h3><div class="price-row"><span class="price">28,000</span></div></div>
      </article>
      <article class="product">
        <div class="img" style="background:linear-gradient(135deg,#FFC700,#FF3838);"><span class="badge saetbyeol">샛별</span><span class="badge only">Kurly Only</span></div>
        <div class="meta"><div class="brand-name">[브랜드]</div><h3>한우 한 마리 정육 패키지</h3><div class="price-row"><span class="pct">15%</span><span class="price">68,000</span></div></div>
      </article>
      <article class="product">
        <div class="img" style="background:linear-gradient(135deg,#9146FF,#FFE9D5);"><span class="badge saetbyeol">샛별</span></div>
        <div class="meta"><div class="brand-name">[브랜드]</div><h3>프리미엄 와인 셀렉션</h3><div class="price-row"><span class="price">42,000</span></div></div>
      </article>
    </div>
  </main>
</div>
```
