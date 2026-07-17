---
brand: Yanolja
brand_ko: 야놀자
slug: yanolja
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - consumer
  - lifestyle

color_tone: warm
primary_color_hex: "#FF3478"
primary_color_name: "Yanolja Pink"
mood:
  - 친근함
  - 여행
  - 활기참

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: compact
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2005
last_major_revision: 2024
signature_keyword: "Pink 액센트와 숙소 카드 그리드의 한국 여행/숙박 톤"

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:#FFFFFF;color:#191919;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#FF3478;padding:12px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;color:#fff;letter-spacing:-0.025em;">야놀자</strong>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center;">
        <div style="background:#FFE5EE;border-radius:12px;padding:10px 4px;"><div style="font-size:22px;">🏨</div><div style="font-size:10px;font-weight:800;margin-top:4px;">호텔</div></div>
        <div style="background:#F5F5F5;border-radius:12px;padding:10px 4px;"><div style="font-size:22px;">🏡</div><div style="font-size:10px;font-weight:800;margin-top:4px;">펜션</div></div>
        <div style="background:#F5F5F5;border-radius:12px;padding:10px 4px;"><div style="font-size:22px;">⛺</div><div style="font-size:10px;font-weight:800;margin-top:4px;">캠핑</div></div>
        <div style="background:#F5F5F5;border-radius:12px;padding:10px 4px;"><div style="font-size:22px;">✈</div><div style="font-size:10px;font-weight:800;margin-top:4px;">항공</div></div>
      </div>
      <div style="background:#fff;border:1px solid #F0F0F0;border-radius:12px;padding:10px;display:grid;grid-template-columns:80px 1fr;gap:10px;">
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#FF3478,#FFB85C);border-radius:8px;"></div>
        <div>
          <div style="font-size:13px;font-weight:700;line-height:1.3;">제주 오션뷰 호텔</div>
          <div style="font-size:10px;color:#888;margin-top:2px;">★ 4.8 · 제주시</div>
          <div style="display:flex;align-items:center;gap:4px;margin-top:6px;">
            <span style="background:#FFE5EE;color:#FF3478;padding:1px 6px;border-radius:3px;font-size:9px;font-weight:800;">15%</span>
            <strong style="font-size:14px;">128,000원<small style="color:#888;font-weight:500;">/박</small></strong>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.yanolja.com/
  - https://yanolja.in/
---

### ① 브랜드 DNA
- **브랜드명**: Yanolja (야놀자)
- **한 줄 정체성**: 한국 1위 여행/숙박 플랫폼 — 호텔/펜션/캠핑/항공까지
- **공식 디자인 철학**: "더 즐거운 여행 — 친근하고 단순한 예약 경험"
- **시그니처 요소 1개**: Yanolja Pink(#FF3478) + 숙박 카테고리 그리드의 컬러풀 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 여행, 활기참
- **무드 설명**: 핑크 헤더 + 흰 캔버스 + 컬러풀 카테고리. 여행의 기대감을 높이는 활기찬 톤.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Compact
- **모서리 성향**: Round (8~12px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Yanolja Pink */
  --color-primary-50:  #FFE5EE;
  --color-primary-100: #FFC2D6;
  --color-primary-200: #FF8AAF;
  --color-primary-300: #FF528A;
  --color-primary-400: #FF3478;
  --color-primary-500: #FF3478;  /* Yanolja Pink */
  --color-primary-600: #DB2A66;
  --color-primary-700: #AD1F50;
  --color-primary-800: #80143A;
  --color-primary-900: #520A24;

  /* Secondary - Yanolja Purple */
  --color-secondary-500: #6B46C1;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #F0F0F0;
  --color-neutral-300:  #E0E0E0;
  --color-neutral-500:  #C7C7C7;
  --color-neutral-700:  #888888;
  --color-neutral-800:  #555555;
  --color-neutral-900:  #191919;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FFE5E5;
  --color-error-fg:   #FF3838;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,25,25,0.50);

  /* Text */
  --text-primary:    #191919;
  --text-secondary:  #555555;
  --text-tertiary:   #888888;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #F0F0F0;
  --border-subtle:  #FAFAFA;
  --border-strong:  #E0E0E0;
  --border-focus:   #FF3478;
}

[data-theme="dark"] {
  --bg-base: #1A1A1A;
  --bg-subtle: #2D2D2D;
  --bg-elevated: #383838;
  --text-primary: #F5F5F5;
}
```

### ④ 타이포그래피
- **폰트 페어링**: 한글 Pretendard, 영문 -apple-system
- **위계**:
  - Display: 32px / 800 / 1.15 / -0.025em
  - H1: 22px / 800 / 1.2 / -0.02em
  - H2: 18px / 700 / 1.27 / -0.015em
  - H3: 15px / 700 / 1.3 / -0.01em
  - Body Large: 14px / 500 / 1.5 / -0.005em
  - Body: 13px / 500 / 1.5 / 0
  - Body Small: 12px / 500 / 1.43 / 0
  - Caption: 11px / 700 / 1.27 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px; --space-sm:  8px; --space-md: 12px;
  --space-lg: 16px; --space-xl: 24px; --space-2xl: 32px; --space-3xl: 48px;
  ```
- **Container**: max-width 480px (모바일 우선)

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 6px; --radius-md: 8px;
--radius-lg: 12px; --radius-xl: 18px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(255,52,120,0.30);
```

### ⑧ Iconography
- **스타일**: Outline + Emoji
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Pretendard,-apple-system,sans-serif; letter-spacing:-0.01em; border-radius: var(--radius-md); padding: 12px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 0; border-radius: var(--radius-md); padding: 12px 14px; font-size: 14px; font-family: inherit; }
.input:focus { outline: 2px solid var(--border-focus); outline-offset: -2px; }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 12px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 1px 6px; border-radius: 3px; font-size: 10px; font-weight: 800; }
.tag-solid { background: var(--color-primary-500); color: #fff; }
.tag-subtle { background: var(--color-primary-50); color: var(--color-primary-500); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-discount { background: var(--color-primary-50); color: var(--color-primary-500); }
```

**Navigation**
```css
.topnav { padding: 12px 14px; background: var(--color-primary-500); color: #fff; display: flex; align-items: center; gap: 10px; }
.topnav .brand { font-weight: 900; font-size: 18px; letter-spacing: -0.025em; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 200ms; --duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. brand pink를 본문에 분산 사용 금지 — 액션과 brand mark에만
2. 카테고리 emoji를 임의 변경 금지 — 호텔/펜션/캠핑/항공 표준
3. 가격 영역에서 할인% 누락 금지
4. 본문 폰트 weight 400 이하 금지
5. 화이트 헤더 강제 금지 — pink 헤더가 시그니처

### ⑫ 시그니처 적용 예시 (Mobile home)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #191919; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; }
  .topbar { background: #FF3478; color: #fff; padding: 14px 16px; display: flex; align-items: center; gap: 10px; }
  .topbar .brand { font-weight: 900; font-size: 22px; letter-spacing: -0.025em; }
  .home { padding: 14px 14px 24px; display: flex; flex-direction: column; gap: 12px; }
  .quick { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .quick .item { background: #F5F5F5; border-radius: 14px; padding: 14px 4px; text-align: center; cursor: pointer; }
  .quick .item.active { background: #FFE5EE; }
  .quick .item .ic { font-size: 26px; }
  .quick .item .name { font-size: 11px; font-weight: 800; margin-top: 6px; }
  .listing { background: #fff; border: 1px solid #F0F0F0; border-radius: 14px; padding: 12px; display: grid; grid-template-columns: 96px 1fr; gap: 12px; }
  .listing .img { aspect-ratio: 1; border-radius: 10px; }
  .listing h3 { font-size: 15px; font-weight: 700; line-height: 1.3; margin: 0; }
  .listing .area { font-size: 11px; color: #888; margin-top: 4px; }
  .listing .price-row { display: flex; align-items: baseline; gap: 6px; margin-top: 8px; }
  .listing .pct { background: #FFE5EE; color: #FF3478; padding: 1px 6px; border-radius: 3px; font-size: 11px; font-weight: 800; }
  .listing .price { font-size: 16px; font-weight: 800; }
  .listing .price small { color: #888; font-weight: 500; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">야놀자</span>
    <span style="margin-left:auto; font-size:18px;">🔍 🛎</span>
  </header>
  <main class="home">
    <div class="quick">
      <div class="item active"><div class="ic">🏨</div><div class="name">호텔</div></div>
      <div class="item"><div class="ic">🏡</div><div class="name">펜션</div></div>
      <div class="item"><div class="ic">⛺</div><div class="name">캠핑</div></div>
      <div class="item"><div class="ic">✈</div><div class="name">항공</div></div>
      <div class="item"><div class="ic">🚌</div><div class="name">버스</div></div>
      <div class="item"><div class="ic">🚆</div><div class="name">기차</div></div>
      <div class="item"><div class="ic">🏛</div><div class="name">티켓</div></div>
      <div class="item"><div class="ic">🎢</div><div class="name">레저</div></div>
    </div>
    <h3 style="margin:8px 4px 0; font-size:18px; font-weight:800; letter-spacing:-0.02em;">제주 베스트 호텔</h3>
    <article class="listing">
      <div class="img" style="background:linear-gradient(135deg,#FF3478,#FFB85C);"></div>
      <div>
        <h3>제주 오션뷰 호텔</h3>
        <div class="area">★ 4.8 (1,240) · 제주시</div>
        <div class="price-row"><span class="pct">15%</span><span class="price">128,000원<small>/박</small></span></div>
      </div>
    </article>
    <article class="listing">
      <div class="img" style="background:linear-gradient(135deg,#6B46C1,#FF3478);"></div>
      <div>
        <h3>서귀포 글램핑 빌리지</h3>
        <div class="area">★ 4.9 (842) · 서귀포</div>
        <div class="price-row"><span class="pct">20%</span><span class="price">95,000원<small>/박</small></span></div>
      </div>
    </article>
  </main>
</div>
```
