---
brand: eBay
brand_ko: 이베이
slug: ebay
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ecommerce
  - consumer

color_tone: mixed
primary_color_hex: "#0064D2"
primary_color_name: "eBay Blue"
mood:
  - 경매
  - 4색로고
  - 정보밀집

font_category: sans-serif
font_primary: Market Sans
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1995
last_major_revision: 2023
signature_keyword: "4색 로고(빨강·파랑·노랑·초록) + 'Time left' 카운트다운 + 입찰 톤의 정보 밀집 카드"

hero_html: |
  <div style="font-family:'Market Sans',Helvetica,'Pretendard',sans-serif;background:#fff;color:#111;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #E5E5E5;">
      <strong style="font-size:16px;font-weight:800;letter-spacing:-0.02em;line-height:1;">
        <span style="color:#E53238;">e</span><span style="color:#0064D2;">b</span><span style="color:#F5AF02;">a</span><span style="color:#86B817;">y</span>
      </strong>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:6px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#E5E5E5 0%,#fff 100%);border:1px solid #E5E5E5;position:relative;">
        <span style="position:absolute;left:6px;top:6px;background:#E53238;color:#fff;font-size:8px;font-weight:700;padding:2px 5px;letter-spacing:0.04em;">경매</span>
      </div>
      <div>
        <div style="font-size:10px;font-weight:600;color:#111;line-height:1.3;">Vintage Leica M3 Camera</div>
        <div style="font-size:8px;color:#707070;">중고 · 미국발송 · 입찰 12회</div>
      </div>
    </div>
    <div style="padding:8px 12px;background:#FFF8E1;border-top:1px solid #F5AF02;display:flex;flex-direction:column;gap:2px;">
      <div style="display:flex;align-items:center;gap:6px;">
        <strong style="font-size:13px;color:#111;font-weight:800;">$842.00</strong>
        <span style="font-size:9px;color:#86B817;font-weight:700;margin-left:auto;">즉시 구매 $1,250</span>
      </div>
      <div style="font-size:8px;color:#E53238;font-weight:700;">⏱ 2h 14m 38s 남음</div>
    </div>
  </div>

sources:
  - https://www.ebay.com/
  - https://www.ebayinc.com/
---

### ① 브랜드 DNA
- **브랜드명**: eBay
- **한 줄 정체성**: 경매 + 즉시구매 통합 글로벌 C2C 마켓플레이스
- **공식 디자인 철학**: "Connecting people through trade" — 정보 밀집·신뢰 우선
- **시그니처 요소 1개**: 4색 로고(#E53238·#0064D2·#F5AF02·#86B817) + Time left 카운트다운 + 입찰가/즉시구매가 듀얼 표시의 정보 밀집 카드

### ② 톤 & 무드
- **핵심 키워드 3개**: 경매, 4색로고, 정보밀집
- **무드 설명**: 흰 캔버스에 회색 보더. 카드는 정보 빽빽 (가격·배송·입찰수·판매자 평점). 경매 톤은 노란 캔버스(#FFF8E1) + 빨강 카운트다운, 즉시구매는 그린. 4색 로고가 절대 분리되지 않는다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact
- **모서리 성향**: Soft (3~4px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - eBay Blue */
  --color-primary-50:  #E0EFFD;
  --color-primary-100: #B3D5F9;
  --color-primary-200: #80B7F4;
  --color-primary-300: #4D98EE;
  --color-primary-400: #267DE3;
  --color-primary-500: #0064D2;   /* eBay Blue */
  --color-primary-600: #0052AD;
  --color-primary-700: #003F84;
  --color-primary-800: #002D5C;
  --color-primary-900: #001A35;

  /* Secondary - 4-color logo set */
  --color-logo-red:    #E53238;
  --color-logo-blue:   #0064D2;
  --color-logo-yellow: #F5AF02;
  --color-logo-green:  #86B817;

  /* Neutral - clean light */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F7;
  --color-neutral-100:  #EEEEEE;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #707070;
  --color-neutral-700:  #404040;
  --color-neutral-800:  #2A2A2A;
  --color-neutral-900:  #111111;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #EDF5DD;
  --color-success-fg: #86B817;     /* 즉시구매 그린 */
  --color-warning-bg: #FFF8E1;     /* 경매 노란 캔버스 */
  --color-warning-fg: #F5AF02;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #E53238;     /* 카운트다운·삭제 */
  --color-info-bg:    #E0EFFD;
  --color-info-fg:    #0064D2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F7;
  --bg-elevated: #FFFFFF;
  --bg-auction:  #FFF8E1;
  --bg-overlay:  rgba(17,17,17,0.50);

  /* Text */
  --text-primary:    #111111;
  --text-secondary:  #404040;
  --text-tertiary:   #707070;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #EEEEEE;
  --border-strong:  #C7C7C7;
  --border-focus:   #0064D2;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Market Sans (자체) / Helvetica 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 36px / 800 / 1.15 / -0.015em
  - H1: 24px / 700 / 1.25 / -0.01em
  - H2: 18px / 700 / 1.3 / -0.005em
  - H3: 15px / 600 / 1.35 / 0
  - Body Large: 15px / 400 / 1.45 / 0
  - Body: 13px / 400 / 1.4 / 0
  - Body Small: 12px / 500 / 1.35 / 0
  - Caption: 11px / 600 / 1.3 / 0.02em

### ⑤ 스페이싱
- **Base unit**: 4px (Compact)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 12px;
  --space-lg: 18px;
  --space-xl: 28px;
  --space-2xl: 44px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 20px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.12);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 'Market Sans', Helvetica, sans-serif; border-radius: 9999px; padding: 10px 18px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--text-primary); }
.btn-buy-now { background: var(--color-success-fg); color: #fff; }   /* 즉시 구매 그린 */
.btn-bid { background: var(--color-primary-500); color: #fff; }       /* 입찰 블루 */
.btn-watch { background: transparent; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-strong); border-radius: 4px; padding: 10px 14px; color: var(--text-primary); font: 400 13px/1.3 inherit; }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 2px rgba(0,100,210,0.15); }
.input::placeholder { color: var(--text-tertiary); }
```

**Card (Listing)**
```css
.listing { background: #fff; border: 1px solid var(--border-default); border-radius: 4px; padding: 10px; cursor: pointer; transition: box-shadow 150ms ease, border-color 150ms ease; }
.listing:hover { box-shadow: var(--shadow-md); border-color: var(--border-strong); }
.listing .img { aspect-ratio: 1; background: linear-gradient(135deg, #E5E5E5, #fff); position: relative; margin-bottom: 8px; }
.listing .img .auction { position: absolute; left: 4px; top: 4px; background: var(--color-error-fg); color: #fff; font: 700 10px/1 inherit; padding: 3px 6px; letter-spacing: 0.04em; }
.listing .title { font: 500 13px/1.35 inherit; color: var(--text-primary); margin-bottom: 6px; height: 36px; overflow: hidden; }
.listing .meta { font: 500 11px/1.3 inherit; color: var(--text-tertiary); margin-bottom: 6px; }
.listing .price-row { display: flex; align-items: baseline; gap: 6px; }
.listing .price { font: 800 16px/1 inherit; color: var(--text-primary); }
.listing .bin { font: 500 11px/1 inherit; color: var(--color-success-fg); }
.listing .time { font: 700 11px/1 inherit; color: var(--color-error-fg); margin-top: 6px; }
.listing .ship { font: 400 11px/1.3 inherit; color: var(--text-tertiary); margin-top: 4px; }
.card { background: #fff; border: 1px solid var(--border-default); border-radius: 4px; padding: 16px; }
```

**Badge / Tag**
```css
.tag { padding: 3px 7px; font: 700 11px/1.3 inherit; letter-spacing: 0.02em; }
.tag-auction    { background: var(--color-error-fg); color: #fff; }
.tag-buy-now    { background: var(--color-success-fg); color: #fff; }
.tag-top-rated  { background: var(--color-primary-500); color: #fff; }
.tag-free-ship  { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.tag-new        { background: #F4F4F4; color: var(--text-primary); border: 1px solid var(--border-default); }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; border-bottom: 1px solid var(--border-default); padding: 12px 20px; display: flex; align-items: center; gap: 18px; }
.topbar .brand { font: 800 28px/1 inherit; letter-spacing: -0.02em; }
.topbar .brand .r { color: var(--color-logo-red); }
.topbar .brand .b { color: var(--color-logo-blue); }
.topbar .brand .y { color: var(--color-logo-yellow); }
.topbar .brand .g { color: var(--color-logo-green); }
.topbar .search { flex: 1; max-width: 720px; display: flex; }
.topbar .search input { flex: 1; border: 2px solid var(--text-primary); border-right: 0; border-radius: 4px 0 0 4px; padding: 9px 14px; font: 400 14px/1.3 inherit; }
.topbar .search button { border: 2px solid var(--text-primary); border-left: 0; background: var(--color-primary-500); color: #fff; padding: 0 22px; font-weight: 700; border-radius: 0 4px 4px 0; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. 4색 로고를 단일 색으로 변경 금지 — 4색 정렬이 정체성
2. 입찰가·즉시구매가 통합 표시 금지 — 듀얼 표시가 시그니처
3. Time left 카운트다운 생략 금지 — 경매 톤의 핵심
4. 카드 라운드 16px+ 사용 금지 — 4px Sharp~Soft
5. 다크 모드 캔버스 사용 금지

### ⑫ 시그니처 적용 예시 (Search results)
```html
<style>
  body { margin: 0; font-family: 'Market Sans', Helvetica, 'Pretendard', sans-serif; background: #fff; color: #111; }
  .topbar { padding: 14px 20px; display: flex; align-items: center; gap: 18px; border-bottom: 1px solid #E5E5E5; }
  .topbar .brand { font: 800 36px/1 inherit; letter-spacing: -0.02em; }
  .topbar .brand .r { color: #E53238; }
  .topbar .brand .b { color: #0064D2; }
  .topbar .brand .y { color: #F5AF02; }
  .topbar .brand .g { color: #86B817; }
  .topbar .search { flex: 1; max-width: 720px; display: flex; }
  .topbar .search input { flex: 1; border: 2px solid #111; border-right: 0; padding: 10px 14px; font: 400 14px/1.3 inherit; border-radius: 4px 0 0 4px; }
  .topbar .search .cat { border: 2px solid #111; border-left: 0; border-right: 0; padding: 10px 14px; background: #fff; font: 400 13px/1 inherit; color: #111; }
  .topbar .search .go { border: 2px solid #0064D2; background: #0064D2; color: #fff; padding: 0 28px; font-weight: 700; border-radius: 0 4px 4px 0; cursor: pointer; }
  .topbar .right { display: flex; gap: 16px; align-items: center; font: 500 13px/1 inherit; color: #404040; }
  .container { max-width: 1280px; margin: 0 auto; padding: 22px 20px; }
  .container h1 { font: 700 24px/1.2 inherit; margin: 0 0 4px; }
  .container .sub { font: 400 13px/1.4 inherit; color: #707070; margin: 0 0 22px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .listing { background: #fff; border: 1px solid #E5E5E5; border-radius: 4px; padding: 10px; cursor: pointer; transition: box-shadow 150ms ease, border-color 150ms ease; }
  .listing:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.10); border-color: #C7C7C7; }
  .listing .img { aspect-ratio: 1; background: linear-gradient(135deg,#EEE,#fff); position: relative; margin-bottom: 8px; }
  .listing .img .auction { position: absolute; left: 4px; top: 4px; background: #E53238; color: #fff; font: 700 10px/1 inherit; padding: 3px 6px; letter-spacing: 0.04em; }
  .listing .img .top { position: absolute; right: 4px; top: 4px; background: #0064D2; color: #fff; font: 700 10px/1 inherit; padding: 3px 6px; letter-spacing: 0.02em; }
  .listing .title { font: 500 13px/1.35 inherit; color: #111; margin-bottom: 4px; height: 36px; overflow: hidden; }
  .listing .meta { font: 500 11px/1.3 inherit; color: #707070; margin-bottom: 4px; }
  .listing .price-row { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
  .listing .price { font: 800 18px/1 inherit; color: #111; }
  .listing .bin { font: 500 11px/1 inherit; color: #86B817; }
  .listing .time { font: 700 11px/1 inherit; color: #E53238; margin-top: 6px; }
  .listing .ship { font: 400 11px/1.3 inherit; color: #707070; margin-top: 3px; }
  .listing .seller { font: 500 10px/1.3 inherit; color: #707070; margin-top: 4px; }
</style>

<header class="topbar">
  <div class="brand"><span class="r">e</span><span class="b">b</span><span class="y">a</span><span class="g">y</span></div>
  <div class="search">
    <input placeholder="Vintage Leica M3 카메라 검색" />
    <select class="cat"><option>모든 카테고리</option></select>
    <button class="go">검색</button>
  </div>
  <div class="right"><span>판매하기</span><span>♥ 관심</span><span>🛒</span></div>
</header>

<main class="container">
  <h1>"Leica M3" 검색 결과</h1>
  <p class="sub">8,124 결과 · 입찰 + 즉시 구매</p>
  <div class="grid">
    <div class="listing">
      <div class="img"><span class="auction">경매</span><span class="top">Top Rated</span></div>
      <div class="title">Vintage Leica M3 Camera · Original Leather Case</div>
      <div class="meta">중고 · 미국발송 · 입찰 12회</div>
      <div class="price-row"><span class="price">$842.00</span><span class="bin">또는 즉시구매 $1,250</span></div>
      <div class="time">⏱ 2h 14m 38s 남음</div>
      <div class="ship">+ $24.50 배송 · 30일 반품</div>
      <div class="seller">판매자 leicabox-tokyo · 99.7% 긍정 (4,892)</div>
    </div>
    <div class="listing">
      <div class="img"><span class="auction">경매</span></div>
      <div class="title">Leica M3 Double Stroke 1957 · Serviced</div>
      <div class="meta">중고 · 일본발송 · 입찰 7회</div>
      <div class="price-row"><span class="price">$1,242.00</span></div>
      <div class="time">⏱ 5h 02m 11s 남음</div>
      <div class="ship">+ $32.00 배송</div>
      <div class="seller">판매자 vintage-cam-jp · 100% (1,204)</div>
    </div>
    <div class="listing">
      <div class="img"><span class="top">Top Rated</span></div>
      <div class="title">Leica M3 with 50mm Summicron · CLA serviced</div>
      <div class="meta">중고 · 독일발송</div>
      <div class="price-row"><span class="price">$2,380.00</span><span class="bin">즉시 구매</span></div>
      <div class="ship">+ 무료 배송 · 1년 보증</div>
      <div class="seller">판매자 munich-classic-cam · 100% (2,142)</div>
    </div>
    <div class="listing">
      <div class="img"></div>
      <div class="title">Leica M3 Body Only · For Parts/Repair</div>
      <div class="meta">중고 · 미국발송 · 입찰 3회</div>
      <div class="price-row"><span class="price">$320.00</span></div>
      <div class="time">⏱ 1d 02h 남음</div>
      <div class="ship">+ $18.00 배송</div>
      <div class="seller">판매자 classic-camera-store · 98.5% (842)</div>
    </div>
  </div>
</main>
```
