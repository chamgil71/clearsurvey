---
brand: Booking.com
brand_ko: 부킹닷컴
slug: booking
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - consumer
  - lifestyle

color_tone: cool
primary_color_hex: "#003B95"
primary_color_name: "Booking Blue"
mood:
  - 신뢰
  - 거래 우선
  - 실용적

font_category: sans-serif
font_primary: BlinkMacSystemFont stack
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1996
last_major_revision: 2024
signature_keyword: "Booking Blue 헤더와 노란 검색 버튼의 거래 우선 호텔 예약 톤"

hero_html: |
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Pretendard',sans-serif;background:#FFFFFF;color:#1A1A1A;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#003B95;color:#fff;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:16px;font-weight:800;">Booking.com</strong>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:#FFC107;border:2px solid #FFC107;border-radius:6px;padding:6px;display:grid;grid-template-columns:1fr 1fr 80px;gap:4px;">
        <div style="background:#fff;border-radius:4px;padding:6px 8px;font-size:10px;color:#666;">📍 제주, 한국</div>
        <div style="background:#fff;border-radius:4px;padding:6px 8px;font-size:10px;color:#666;">📅 5/8 → 5/12</div>
        <button style="background:#0071C2;color:#fff;border:0;border-radius:4px;font-size:11px;font-weight:700;font-family:inherit;cursor:pointer;">검색</button>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <span style="background:#008009;color:#fff;padding:2px 6px;border-radius:3px;font-size:11px;font-weight:700;">9.4</span>
        <span style="font-size:11px;font-weight:700;">훌륭함</span>
        <span style="font-size:11px;color:#666;">128 후기</span>
      </div>
      <div style="border:1px solid #DDDDDD;border-radius:6px;padding:10px 12px;display:grid;grid-template-columns:60px 1fr;gap:10px;align-items:center;">
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#0071C2,#003B95);border-radius:4px;"></div>
        <div>
          <div style="font-size:13px;font-weight:700;color:#0071C2;">제주 오션뷰 호텔</div>
          <div style="font-size:10px;color:#666;">제주시 · 5성급 · 무료 취소</div>
          <div style="font-size:11px;font-weight:700;color:#1A1A1A;margin-top:4px;display:flex;justify-content:space-between;">
            <span style="color:#CC0000;">₩384,000 <small style="text-decoration:line-through;color:#999;font-weight:400;">₩480,000</small></span>
            <span style="background:#FFE5E5;color:#CC0000;padding:1px 4px;border-radius:2px;font-size:9px;">-20%</span>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.booking.com/
  - https://global.booking.com/
---

### ① 브랜드 DNA
- **브랜드명**: Booking.com
- **한 줄 정체성**: 1996년부터 시작한, 전 세계에서 가장 큰 숙소 예약 플랫폼
- **공식 디자인 철학**: "Make booking the right place easier — clear deals, transparent prices"
- **시그니처 요소 1개**: Booking Blue(#003B95) 헤더 + 노란(#FFC107) 검색 영역 + 강한 거래 신호(할인%, 점수 배지)

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 거래 우선, 실용적
- **무드 설명**: 흰 캔버스 + 짙은 파랑 헤더 + 노란 검색 영역. 화려함보다 정확한 가격과 후기 점수가 우선되는 거래 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 결과 리스트 위주
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Booking Blue */
  --color-primary-50:  #E6F0FF;
  --color-primary-100: #BFD7FF;
  --color-primary-200: #80B0FF;
  --color-primary-300: #3380E6;
  --color-primary-400: #0071C2;
  --color-primary-500: #003B95;  /* Booking Blue */
  --color-primary-600: #003280;
  --color-primary-700: #00266B;
  --color-primary-800: #001B4D;
  --color-primary-900: #001033;

  /* Secondary - Booking Yellow (검색 영역) */
  --color-secondary-500: #FFC107;

  /* Action Blue */
  --color-action: #0071C2;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #EBEBEB;
  --color-neutral-200:  #DDDDDD;
  --color-neutral-300:  #C4C4C4;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #4D4D4D;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic - 거래 신호 컬러 */
  --color-success-bg: #DCFAE6;
  --color-success-fg: #008009;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FFE5E5;
  --color-error-fg:   #CC0000;
  --color-info-bg:    #E6F0FF;
  --color-info-fg:    #0071C2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,26,0.50);

  /* Text */
  --text-primary:    #1A1A1A;
  --text-secondary:  #666666;
  --text-tertiary:   #999999;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C4C4C4;

  /* Border */
  --border-default: #DDDDDD;
  --border-subtle:  #EBEBEB;
  --border-strong:  #C4C4C4;
  --border-focus:   #0071C2;
}

[data-theme="dark"] {
  --bg-base: #1A1A1A;
  --bg-subtle: #2A2A2A;
  --bg-elevated: #383838;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto (system stack — Booking은 시스템 폰트 사용)
  - 한글: Apple SD Gothic Neo / Pretendard 폴백
- **위계**:
  - Display: 40px / 700 / 1.1 / -0.01em
  - H1: 28px / 700 / 1.2 / -0.005em
  - H2: 22px / 700 / 1.27 / 0
  - H3: 16px / 700 / 1.3 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 700 / 1.27 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 16px

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
--shadow-md: 0 2px 8px rgba(0,0,0,0.10);
--shadow-lg: 0 4px 16px rgba(0,0,0,0.14);
--shadow-xl: 0 8px 24px rgba(0,0,0,0.18);
```

### ⑧ Iconography
- **스타일**: Outline (Booking 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-action); color: #fff; }
.btn-primary:hover { background: #005DA0; }
.btn-primary:active { background: #00467A; }
.btn-secondary { background: var(--bg-base); color: var(--color-action); border: 1px solid var(--color-action); }
.btn-ghost { background: transparent; color: var(--color-action); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 8px 12px; font-size: 14px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 1px var(--border-focus); }
```

**Card** (Listing card)
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 12px 14px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Score (시그니처)**
```css
.score { background: var(--color-primary-500); color: #fff; padding: 4px 8px; border-radius: 6px 6px 6px 0; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; }
.score-9plus { background: #008009; }
.deal { background: var(--color-error-bg); color: var(--color-error-fg); padding: 2px 6px; border-radius: 2px; font-size: 11px; font-weight: 700; }
.tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 700; line-height: 16px; display: inline-flex; align-items: center; }
.tag-solid   { background: var(--color-action); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-500); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 12px 16px; background: var(--color-primary-500); color: #fff; display: flex; align-items: center; gap: 16px; }
.topnav .brand { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
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
1. score 배지 색을 점수와 무관하게 임의 매핑 금지 — 9+ green, 8-9 blue 등 의미 보존
2. brand blue 헤더 배경에 채도 높은 노랑 외 다른 액션 색 사용 금지
3. 가격 영역에 small price (취소선) 없이 할인% 표기 금지 — 거래 투명성
4. listing 사진을 라운드 0px 또는 24px+ 변경 금지 — 4~8px이 시그니처
5. 후기 점수와 후기 수를 분리 배치 금지 — 항상 동시 표시 (신뢰 신호)

### ⑫ 시그니처 적용 예시 (Search results)

```html
<style>
  body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Pretendard', sans-serif; color: #1A1A1A; background: #F5F5F5; }
  .topnav { padding: 12px 16px; background: #003B95; color: #fff; display: flex; align-items: center; gap: 16px; }
  .topnav .brand { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
  .search-box { background: #FFC107; border-radius: 4px; padding: 6px; display: grid; grid-template-columns: 1fr 1fr 1fr 120px; gap: 4px; max-width: 1100px; margin: 16px auto; }
  .search-box .field { background: #fff; border: 0; border-radius: 4px; padding: 12px 14px; font-size: 14px; font-family: inherit; }
  .search-box button { background: #0071C2; color: #fff; border: 0; border-radius: 4px; font-size: 16px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .results { max-width: 1100px; margin: 16px auto; padding: 0 16px; display: flex; flex-direction: column; gap: 8px; }
  .summary { font-size: 14px; color: #1A1A1A; padding: 8px 0; }
  .summary strong { font-size: 22px; font-weight: 700; }
  .listing { background: #fff; border: 1px solid #DDDDDD; border-radius: 8px; padding: 14px; display: grid; grid-template-columns: 200px 1fr 200px; gap: 14px; }
  .listing .img { aspect-ratio: 1; background: linear-gradient(135deg, #0071C2, #003B95); border-radius: 4px; }
  .listing h3 { margin: 0 0 4px; font-size: 18px; font-weight: 700; color: #0071C2; }
  .listing .area { font-size: 12px; color: #666; }
  .listing .features { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
  .listing .right { text-align: right; display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between; }
  .listing .score-row { display: flex; align-items: center; gap: 8px; }
  .listing .score-row strong { font-size: 13px; font-weight: 700; }
  .listing .score-row .reviews { font-size: 12px; color: #666; }
  .listing .price { margin-top: auto; }
  .listing .price .old { color: #999; text-decoration: line-through; font-size: 13px; }
  .listing .price .now { font-size: 22px; font-weight: 700; color: #1A1A1A; }
  .listing .price .deal { background: #FFE5E5; color: #CC0000; padding: 2px 6px; border-radius: 2px; font-size: 11px; font-weight: 700; }
</style>

<header class="topnav">
  <div class="brand">Booking.com</div>
  <span style="margin-left:auto; font-size:13px;">KRW · 한국어 · 로그인</span>
</header>

<div class="search-box">
  <input class="field" value="제주, 한국"/>
  <input class="field" value="2026년 5월 8일–12일"/>
  <input class="field" value="성인 2 · 객실 1"/>
  <button>검색</button>
</div>

<div class="results">
  <div class="summary"><strong>제주: 384개</strong> 숙소 검색 결과</div>
  <div class="listing">
    <div class="img"></div>
    <div>
      <h3>제주 오션뷰 호텔</h3>
      <div class="area">제주시 · 시내 중심에서 1.2km</div>
      <div class="features">
        <span class="tag" style="background:#E6F0FF; color:#003B95;">5성급</span>
        <span class="tag" style="background:#DCFAE6; color:#008009;">무료 취소</span>
        <span class="tag" style="background:#F5F5F5; color:#1A1A1A;">조식 포함</span>
      </div>
    </div>
    <div class="right">
      <div class="score-row">
        <div>
          <div style="font-size:13px; font-weight:700;">훌륭함</div>
          <div class="reviews">128 후기</div>
        </div>
        <div class="score score-9plus" style="background:#008009; color:#fff; padding:8px 10px; border-radius:6px 6px 6px 0; font-size:14px; font-weight:700;">9.4</div>
      </div>
      <div class="price">
        <div style="margin-bottom:4px;">
          <span class="deal">-20% 오늘만</span>
        </div>
        <div class="old">₩480,000</div>
        <div class="now">₩384,000</div>
        <div style="font-size:11px; color:#666; margin-top:2px;">4박 + 세금 포함</div>
        <button class="btn btn-primary" style="margin-top:8px; background:#0071C2; color:#fff; border:0; border-radius:4px; padding:8px 14px; font-size:14px; font-weight:700; cursor:pointer; font-family:inherit;">예약하기 →</button>
      </div>
    </div>
  </div>
</div>
```
