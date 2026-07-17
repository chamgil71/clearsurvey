---
brand: Gmarket
brand_ko: 지마켓
slug: gmarket
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - ecommerce
  - consumer

color_tone: warm
primary_color_hex: "#00C73C"
primary_color_name: "Gmarket Green"
mood:
  - 가성비
  - 다양
  - 안정

font_category: sans-serif
font_primary: Gmarket Sans
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2000
last_major_revision: 2024
signature_keyword: "G마켓 그린 강조 + Gmarket Sans + 정보 밀집 그리드"

hero_html: |
  <div style="font-family:'Gmarket Sans',Pretendard,-apple-system,sans-serif;background:#fff;color:#222;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#fff;border-bottom:2px solid #00C73C;padding:10px 12px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;color:#00C73C;letter-spacing:-0.025em;">Gmarket</strong>
      <div style="flex:1;background:#F4F5F7;border:1px solid #E1E4EA;border-radius:4px;padding:6px 10px;font:600 12px/1.4 inherit;color:#9CA3AE;">🔍 검색</div>
    </div>
    <div style="padding:8px 10px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:linear-gradient(90deg,#00C73C 0%,#00A832 100%);color:#fff;border-radius:4px;padding:10px 12px;display:flex;align-items:center;gap:8px;">
        <div style="background:#fff;color:#00A832;font:900 11px/1 inherit;padding:3px 6px;border-radius:2px;">스마일클럽</div>
        <div style="flex:1;font:900 13px/1.3 inherit;">무료배송 + 적립</div>
        <span style="font-size:14px;">›</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:#fff;border:1px solid #E1E4EA;border-radius:4px;padding:6px;">
          <div style="aspect-ratio:1;background:#F4F5F7;border-radius:2px;margin-bottom:4px;position:relative;"><span style="position:absolute;top:0;left:0;background:#00C73C;color:#fff;font:900 10px/1 inherit;padding:2px 4px;">BEST</span></div>
          <div style="font:600 11px/1.3 inherit;">애플 에어팟 프로 2</div>
          <div style="font:900 14px/1.2 inherit;color:#222;margin-top:2px;">298,000<small style="font-size:10px;font-weight:800;">원</small></div>
          <div style="font:700 10px/1.3 inherit;color:#00C73C;margin-top:2px;">스마일배송 무료</div>
        </div>
        <div style="background:#fff;border:1px solid #E1E4EA;border-radius:4px;padding:6px;">
          <div style="aspect-ratio:1;background:#F4F5F7;border-radius:2px;margin-bottom:4px;"></div>
          <div style="font:600 11px/1.3 inherit;">LG 그램 16인치 노트북</div>
          <div style="font:900 14px/1.2 inherit;color:#222;margin-top:2px;">1,690,000<small style="font-size:10px;font-weight:800;">원</small></div>
          <div style="font:700 10px/1.3 inherit;color:#7C7C82;margin-top:2px;">★ 4.8 · 리뷰 8,420</div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.gmarket.co.kr/
  - https://corp.gmarket.co.kr/
---

### ① 브랜드 DNA
- **브랜드명**: Gmarket (G마켓 — 신세계/이베이)
- **한 줄 정체성**: 한국 종합 오픈마켓 — 가성비·다양성·스마일클럽 멤버십 기반
- **공식 디자인 철학**: "Smart customer's choice" — 가격·리뷰·배송 정보의 일관된 비교
- **시그니처 요소 1개**: G마켓 그린(#00C73C) 단일 강조 + Gmarket Sans 자체 폰트 + 정보 밀집형 sharp 사각 그리드. 멜론 형광 그린보다 한 단계 정돈된 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 가성비, 다양, 안정
- **무드 설명**: 흰 캔버스 + 그린 라이너 + 검정 본문. 카드는 1px 보더, sharp 사각 라운드 4px. 가격은 검정 본문에 굵게, 할인 강조는 그린.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 11번가와 유사, 정보량 우선
- **모서리 성향**: Sharp (2~4px) — 사각 가까운 라운드
- **평면성**: Flat — 1px 보더만

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Gmarket Green */
  --color-primary-50:  #E5F9EB;
  --color-primary-100: #B8F0C5;
  --color-primary-200: #80E298;
  --color-primary-300: #47D26A;
  --color-primary-400: #1FCC50;
  --color-primary-500: #00C73C;   /* Gmarket Green */
  --color-primary-600: #00A832;
  --color-primary-700: #008827;
  --color-primary-800: #00611B;
  --color-primary-900: #003910;

  /* Secondary - 스마일클럽 골드 */
  --color-secondary-500: #FFB300;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFB;
  --color-neutral-100:  #F4F5F7;
  --color-neutral-200:  #E1E4EA;     /* border */
  --color-neutral-300:  #CDD2DA;
  --color-neutral-500:  #9CA3AE;
  --color-neutral-700:  #7C7C82;
  --color-neutral-800:  #4A4A52;
  --color-neutral-900:  #222222;     /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E5F9EB;
  --color-success-fg: #00C73C;
  --color-warning-bg: #FFF6D6;
  --color-warning-fg: #FFB300;
  --color-error-bg:   #FFE8EC;
  --color-error-fg:   #E53935;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #2C6CDF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F4F5F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(34,34,34,0.55);

  /* Text */
  --text-primary:    #222222;
  --text-secondary:  #4A4A52;
  --text-tertiary:   #7C7C82;
  --text-on-primary: #FFFFFF;
  --text-price:      #222222;       /* 가격은 검정, 할인%만 그린 */
  --text-discount:   #00C73C;
  --text-disabled:   #9CA3AE;

  /* Border */
  --border-default: #E1E4EA;
  --border-subtle:  #F4F5F7;
  --border-strong:  #CDD2DA;
  --border-focus:   #00C73C;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: **Gmarket Sans** (자체, OFL 무료) → 폴백 Pretendard
  - 영문: Gmarket Sans Latin / Inter
  - 가격: tabular-nums
- **위계**:
  - Display (할인가): 22px / 900 / 1.2 / -0.025em tabular-nums
  - H1: 17px / 800 / 1.4 / -0.015em
  - H2: 15px / 800 / 1.35 / -0.01em
  - H3 (상품명): 12px / 600 / 1.4 / -0.005em
  - Body Large: 14px / 600 / 1.5 / -0.005em
  - Body: 12px / 600 / 1.45 / 0
  - Body Small: 11px / 600 / 1.4 / 0
  - Caption: 10px / 700 / 1.4 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  2px;
  --space-sm:  4px;
  --space-md:  8px;
  --space-lg: 12px;
  --space-xl: 16px;
  --space-2xl: 24px;
  --space-3xl: 40px;
  ```
- **Container**: max-width 480px (모바일), 1280px (웹), 좌우 패딩 10px / 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;     /* 카드 시그니처 */
--radius-lg: 6px;
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.14);
```

### ⑧ Iconography
- **스타일**: Filled (스마일/배지) + Outline (메뉴)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square 베이스
- **추천 라이브러리**: Material Symbols / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 13px/1 'Gmarket Sans', Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: var(--radius-md); padding: 11px 16px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-buy { background: var(--color-primary-500); color: #fff; padding: 14px 20px; font-weight: 900; }
.btn-cart { background: var(--text-primary); color: #fff; padding: 14px 20px; font-weight: 900; }
.btn-ghost { background: transparent; color: var(--color-primary-700); }
```

**Input**
```css
.search { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 8px 12px; font: 600 13px/1.4 inherit; color: var(--text-primary); display: flex; align-items: center; gap: 6px; }
```

**Card**
```css
.prod { background: #fff; border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 6px; }
.prod .img { aspect-ratio: 1; background: var(--bg-subtle); border-radius: 2px; margin-bottom: 4px; position: relative; overflow: hidden; }
.prod .img .badge { position: absolute; top: 0; left: 0; background: var(--color-primary-500); color: #fff; font: 900 10px/1 inherit; padding: 2px 4px; }
.prod .name { font: 600 12px/1.4 inherit; min-height: 33px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.prod .price { display: flex; align-items: baseline; gap: 6px; margin-top: 4px; }
.prod .price .pct { font: 900 14px/1.2 inherit; color: var(--text-discount); font-variant-numeric: tabular-nums; }
.prod .price .now { font: 900 14px/1.2 inherit; color: var(--text-price); font-variant-numeric: tabular-nums; }
.prod .price .now small { font-size: 10px; font-weight: 800; }
.prod .meta { font: 700 10px/1.3 inherit; color: var(--text-tertiary); margin-top: 4px; display: flex; gap: 4px; flex-wrap: wrap; }
.prod .meta .smile { color: var(--color-primary-700); font-weight: 800; }
```

**Badge / Tag**
```css
.tag { padding: 2px 4px; border-radius: 2px; font: 900 10px/1.4 inherit; }
.tag-best   { background: var(--color-primary-500); color: #fff; }
.tag-smile  { background: var(--color-primary-50); color: var(--color-primary-700); border: 1px solid var(--color-primary-200); }
.tag-coupon { background: var(--color-error-bg); color: var(--color-error-fg); border: 1px solid #FFA5AA; }
.tag-pick   { background: var(--text-primary); color: #fff; }
```

**Navigation**
```css
.tabbar { background: #fff; border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 800 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
```

### ⑪ Anti-patterns
1. 그린 헤더 배경 사용 금지 — 헤더는 흰색 + 그린 보더 라인이 G마켓 시그니처
2. 카드 모서리를 8px 이상 라운드 금지 — sharp 사각 4px 표준
3. 가격 본문에 그린 직접 적용 금지 — 가격은 검정, 할인%만 그린
4. 본문 폰트를 Pretendard 단독 사용 — Gmarket Sans 자체 폰트 사용 권장
5. 한 화면 정보 밀도를 낮추기 위해 큰 패딩 사용 금지 — compact 그리드 표준

### ⑫ 시그니처 적용 예시 (G마켓 홈)

```html
<style>
  body { margin: 0; font-family: 'Gmarket Sans', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #222; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #fff; border-bottom: 2px solid #00C73C; padding: 10px 12px; display: flex; align-items: center; gap: 10px; position: sticky; top: 0; z-index: 10; }
  .topbar .brand { font-weight: 900; color: #00C73C; font-size: 20px; letter-spacing: -0.025em; }
  .topbar .search { flex: 1; background: #F4F5F7; border: 1px solid #E1E4EA; border-radius: 4px; padding: 7px 10px; font: 600 13px/1.4 inherit; color: #9CA3AE; display: flex; align-items: center; gap: 6px; }
  .topbar .icons { font-size: 16px; color: #7C7C82; }
  .home { padding: 8px 10px 80px; display: flex; flex-direction: column; gap: 10px; }
  .smile { background: linear-gradient(90deg, #00C73C 0%, #00A832 100%); color: #fff; border-radius: 4px; padding: 10px 12px; display: flex; align-items: center; gap: 8px; }
  .smile .pill { background: #fff; color: #00A832; font: 900 11px/1 inherit; padding: 3px 6px; border-radius: 2px; }
  .smile .title { font: 900 13px/1.3 inherit; flex: 1; }
  .quick { background: #fff; border: 1px solid #E1E4EA; border-radius: 4px; padding: 10px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px 2px; }
  .quick .item { display: flex; flex-direction: column; align-items: center; gap: 4px; font: 700 10px/1.3 inherit; color: #222; }
  .quick .item .ic { width: 36px; height: 36px; border-radius: 4px; background: #E5F9EB; color: #00A832; display: grid; place-items: center; font: 900 14px/1 inherit; }
  .section h2 { font: 900 15px/1.3 inherit; margin: 8px 0; display: flex; align-items: baseline; gap: 6px; }
  .section h2 small { font: 700 11px/1 inherit; color: #7C7C82; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .prod { background: #fff; border: 1px solid #E1E4EA; border-radius: 4px; padding: 6px; }
  .prod .img { aspect-ratio: 1; background: #F4F5F7; border-radius: 2px; margin-bottom: 4px; position: relative; }
  .prod .img.p2 { background: linear-gradient(135deg, #1F2937, #6B7280); }
  .prod .img.p3 { background: linear-gradient(135deg, #FBBF24, #B45309); }
  .prod .img.p4 { background: linear-gradient(135deg, #DBEAFE, #3B82F6); }
  .prod .img .badge { position: absolute; top: 0; left: 0; background: #00C73C; color: #fff; font: 900 10px/1 inherit; padding: 2px 4px; }
  .prod .name { font: 600 12px/1.4 inherit; min-height: 33px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .prod .price { display: flex; align-items: baseline; gap: 6px; margin-top: 4px; }
  .prod .price .pct { font: 900 13px/1.2 inherit; color: #00C73C; font-variant-numeric: tabular-nums; }
  .prod .price .now { font: 900 14px/1.2 inherit; color: #222; font-variant-numeric: tabular-nums; }
  .prod .price .now small { font-size: 10px; font-weight: 800; }
  .prod .meta { font: 700 10px/1.3 inherit; color: #7C7C82; margin-top: 4px; display: flex; gap: 4px; flex-wrap: wrap; }
  .prod .meta .smile { color: #008827; font-weight: 900; }
  .tabbar { background: #fff; border-top: 1px solid #E1E4EA; display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 6px; text-align: center; font: 800 11px/1.3 inherit; color: #9CA3AE; }
  .tabbar .item.active { color: #00C73C; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">Gmarket</span>
    <div class="search">🔍 검색</div>
    <span class="icons">🛒</span>
  </header>
  <main class="home">
    <section class="smile">
      <span class="pill">스마일클럽</span>
      <div class="title">무료배송 + 적립 5%</div>
      <span>›</span>
    </section>
    <section class="quick">
      <div class="item"><div class="ic">⚡</div>스마일</div>
      <div class="item"><div class="ic">🎁</div>오늘쿠폰</div>
      <div class="item"><div class="ic">💎</div>특가</div>
      <div class="item"><div class="ic">🌍</div>해외직구</div>
      <div class="item"><div class="ic">🎬</div>G라이브</div>
    </section>
    <section class="section">
      <h2>오늘의 베스트 <small>실시간 랭킹</small></h2>
      <div class="grid">
        <div class="prod">
          <div class="img"><span class="badge">BEST 1</span></div>
          <div class="name">애플 에어팟 프로 2세대 USB-C</div>
          <div class="price"><span class="pct">15%</span><span class="now">298,000<small>원</small></span></div>
          <div class="meta"><span class="smile">스마일배송 무료</span></div>
        </div>
        <div class="prod">
          <div class="img p2"><span class="badge">BEST 2</span></div>
          <div class="name">LG 그램 16인치 노트북 16Z90R</div>
          <div class="price"><span class="now">1,690,000<small>원</small></span></div>
          <div class="meta">★ 4.8 · 리뷰 8,420</div>
        </div>
        <div class="prod">
          <div class="img p3"></div>
          <div class="name">설화수 윤조 에센스 90ml 한정판</div>
          <div class="price"><span class="pct">40%</span><span class="now">79,200<small>원</small></span></div>
          <div class="meta"><span class="smile">스마일</span></div>
        </div>
        <div class="prod">
          <div class="img p4"></div>
          <div class="name">CJ 햇반 210g x 24개입 대용량</div>
          <div class="price"><span class="pct">24%</span><span class="now">21,900<small>원</small></span></div>
          <div class="meta">무료배송</div>
        </div>
      </div>
    </section>
  </main>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">카테고리</div>
    <div class="item">검색</div>
    <div class="item">장바구니</div>
    <div class="item">My</div>
  </nav>
</div>
```
