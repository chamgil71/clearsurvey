---
brand: TripAdvisor
brand_ko: 트립어드바이저
slug: tripadvisor
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - mobility
  - social

color_tone: cool
primary_color_hex: "#34E0A1"
primary_color_name: "Tripadvisor Green"
mood:
  - 신뢰
  - 후기
  - 발견

font_category: sans-serif
font_primary: Trip Sans
font_korean_supported: true

density: comfortable
corner_style: pill
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2000
last_major_revision: 2020
signature_keyword: "부엉이 로고와 초록 점 별점, 사용자 리뷰가 최상단인 UGC 톤"

hero_html: |
  <div style="font-family:-apple-system,'Trip Sans','Pretendard','Segoe UI',sans-serif;background:#fff;color:#000;height:100%;display:grid;grid-template-rows:auto 1fr;position:relative;overflow:hidden;">
    <div style="padding:12px 14px;display:flex;align-items:center;gap:6px;">
      <svg width="22" height="22" viewBox="0 0 100 100" style="display:block;">
        <circle cx="50" cy="50" r="48" fill="#34E0A1"/>
        <circle cx="32" cy="50" r="14" fill="#000"/>
        <circle cx="68" cy="50" r="14" fill="#000"/>
        <circle cx="32" cy="50" r="6" fill="#fff"/>
        <circle cx="68" cy="50" r="6" fill="#34E0A1"/>
        <circle cx="34" cy="48" r="2" fill="#000"/>
      </svg>
      <span style="font-weight:800;font-size:14px;letter-spacing:-0.01em;">Tripadvisor</span>
    </div>
    <div style="padding:8px 14px 14px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:#fff;border:1px solid #DEDEDE;border-radius:12px;padding:10px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          <span style="color:#34E0A1;font-size:14px;letter-spacing:-0.05em;">●●●●●</span>
          <span style="font-size:9px;color:#6E6E73;">2,134 reviews</span>
        </div>
        <div style="font-weight:700;font-size:12px;">시부야 그랜벨 호텔</div>
        <div style="font-size:9px;color:#6E6E73;">#3 of 184 hotels in Shibuya</div>
        <div style="margin-top:6px;background:#F2F2F2;border-radius:8px;padding:6px 8px;font-size:9px;color:#000;font-style:italic;line-height:1.4;">"역에서 정말 가깝고 직원이 친절했어요. 다음에도 묵고 싶네요!"</div>
        <div style="margin-top:4px;font-size:8px;color:#6E6E73;">— Sarah K., 한국 · 1일 전</div>
      </div>
      <button style="background:#000;color:#fff;border:0;border-radius:9999px;padding:9px;font-weight:700;font-size:11px;font-family:inherit;cursor:pointer;">리뷰 작성 ✏</button>
    </div>
  </div>

sources:
  - https://www.tripadvisor.com/
  - https://tripadvisor.mediaroom.com/branding
---

### ① 브랜드 DNA
- **브랜드명**: Tripadvisor
- **한 줄 정체성**: 전 세계 여행자 리뷰 10억+를 기반으로 호텔·맛집·액티비티를 추천하는 UGC 트래블 가이드
- **공식 디자인 철학**: "Know better. Book better. Go better." — 진짜 여행자의 경험이 결정의 근거
- **시그니처 요소 1개**: 부엉이 로고(올리 — Ollie) + 초록(#34E0A1) 점 5개로 표현하는 별점 + 사용자 리뷰가 항상 카드 최상단에 배치

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 후기, 발견
- **무드 설명**: 흰 캔버스, 검정 본문, 초록 강조 한 가지. 사진보다 리뷰 인용구가 시각 무게의 중심. 모서리 라운드와 풀필 버튼이 친근함을 만든다.
- **비주얼 스타일**: 모던 미니멀 (Editorial 톤)
- **밀도(Density)**: Comfortable — 카드 안에 사진 + 리뷰 + 평점이 여유 있게 배치
- **모서리 성향**: Pill (CTA) + Soft 12px (카드) → 단일 값 Pill
- **평면성**: Subtle — 카드에 옅은 그림자, hover 시 약간 떠오름

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Tripadvisor Green (별점·강조) */
  --color-primary-50:  #E0FBF0;
  --color-primary-100: #B8F2D9;
  --color-primary-200: #88E8BD;
  --color-primary-300: #5BDFA8;
  --color-primary-400: #44DBA0;
  --color-primary-500: #34E0A1;   /* Trip Green */
  --color-primary-600: #1FB07A;
  --color-primary-700: #168258;
  --color-primary-800: #0F5C3E;
  --color-primary-900: #083B28;

  /* Secondary - Black (CTA 버튼) */
  --color-secondary-500: #000000;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F2F2F2;     /* quote bg */
  --color-neutral-200:  #DEDEDE;     /* border */
  --color-neutral-300:  #C4C4C4;
  --color-neutral-500:  #6E6E73;
  --color-neutral-700:  #3A3A3D;
  --color-neutral-800:  #212121;
  --color-neutral-900:  #000000;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0FBF0;
  --color-success-fg: #1FB07A;
  --color-warning-bg: #FFF0D2;
  --color-warning-fg: #B07A00;
  --color-error-bg:   #FCE2E2;
  --color-error-fg:   #C8302C;
  --color-info-bg:    #E0EDF8;
  --color-info-fg:    #1F61CB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #3A3A3D;
  --text-tertiary:   #6E6E73;
  --text-on-primary: #000000;        /* 초록 위는 검정 (Trip 시그니처) */
  --text-on-cta:     #FFFFFF;        /* 검정 CTA 위는 흰색 */
  --text-disabled:   #C4C4C4;

  /* Border */
  --border-default: #DEDEDE;
  --border-subtle:  #F2F2F2;
  --border-strong:  #C4C4C4;
  --border-focus:   #34E0A1;
}

[data-theme="dark"] {
  --bg-base:     #121212;
  --bg-subtle:   #1C1C1E;
  --bg-elevated: #2A2A2C;
  --text-primary: #FFFFFF;
  --text-secondary: #C4C4C4;
  --border-default: #2F2F30;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Trip Sans (자체 폰트) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 리뷰 인용: Serif italic — Source Serif Pro / Noto Serif KR
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.02em
  - H1: 36px / 800 / 1.15 / -0.015em
  - H2: 26px / 700 / 1.25 / -0.01em
  - H3: 20px / 700 / 1.3 / 0
  - Body Large: 17px / 400 / 1.55 / 0
  - Body: 15px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.45 / 0
  - Quote: 15px / 400 / 1.6 / 0 italic serif
  - Caption: 12px / 600 / 1.3 / 0.02em

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
- **Container**: max-width 1136px, 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;     /* 카드 시그니처 */
--radius-xl: 24px;
--radius-full: 9999px;  /* 버튼·배지·점 별점 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);     /* 카드 hover */
--shadow-lg: 0 12px 28px rgba(0,0,0,0.14);    /* 모달 */
--shadow-xl: 0 24px 48px rgba(0,0,0,0.20);
```

### ⑧ Iconography
- **스타일**: Filled (별점은 풀필 원형 점) + Outline 혼합
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 14px/1 'Trip Sans', Inter, 'Pretendard', sans-serif; letter-spacing: -0.01em;
       border-radius: 9999px; padding: 12px 22px; height: 44px; border: 0;
       display: inline-flex; align-items: center; gap: 6px; cursor: pointer;
       transition: background 150ms ease, transform 150ms ease; }
.btn-primary { background: var(--color-secondary-500); color: var(--text-on-cta); }
.btn-primary:hover { background: #2A2A2C; transform: translateY(-1px); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }
.btn-accent  { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-accent:hover { background: var(--color-primary-400); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 2px solid var(--text-primary); padding: 10px 20px; }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--text-primary); text-decoration: underline; text-decoration-thickness: 2px; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-default);
         border-radius: 9999px; padding: 12px 18px; height: 48px;
         font: 500 15px/1.4 inherit; color: var(--text-primary); transition: border-color 150ms ease; }
.input:focus { outline: none; border-color: var(--text-primary); box-shadow: 0 0 0 2px var(--color-primary-200); }
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card (POI/Hotel)**
```css
.poi-card { background: #fff; border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; transition: box-shadow 200ms ease, transform 200ms ease; }
.poi-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.poi-card .thumb { aspect-ratio: 4/3; border-radius: var(--radius-md); background: var(--color-neutral-100); margin-bottom: 12px; overflow: hidden; }
.poi-card .rank { font: 600 12px/1 inherit; color: var(--text-tertiary); margin-bottom: 4px; }
.poi-card .name { font: 800 17px/1.3 inherit; margin: 0 0 6px; }
.poi-card .rating { display: inline-flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.poi-card .dots { display: inline-flex; gap: 2px; }
.poi-card .dot { width: 12px; height: 12px; border-radius: 9999px; background: var(--color-primary-500); }
.poi-card .dot.empty { background: var(--color-neutral-200); }
.poi-card .count { font: 600 13px/1 inherit; color: var(--text-tertiary); }
.poi-card .quote { background: var(--color-neutral-100); border-radius: var(--radius-md); padding: 10px 12px; font: italic 400 14px/1.6 'Source Serif Pro', serif; color: var(--text-primary); }
.poi-card .author { font: 500 11px/1.3 'Trip Sans', sans-serif; color: var(--text-tertiary); margin-top: 6px; font-style: normal; }
```

**Badge**
```css
.badge { padding: 4px 10px; border-radius: 9999px; font: 700 11px/1.4 inherit; letter-spacing: 0.02em; display: inline-flex; gap: 4px; align-items: center; }
.badge-award    { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.badge-loved    { background: var(--color-primary-50); color: var(--color-primary-700); }
.badge-solid    { background: var(--color-primary-500); color: var(--text-on-primary); }
.badge-outline  { background: #fff; border: 1px solid var(--text-primary); color: var(--text-primary); }
```

**Navigation (Top)**
```css
.topnav { height: 64px; background: #fff; color: var(--text-primary); border-bottom: 1px solid var(--border-default); display: flex; align-items: center; padding: 0 20px; gap: 28px; }
.topnav .logo { display: inline-flex; align-items: center; gap: 8px; font: 800 22px/1 inherit; letter-spacing: -0.01em; }
.topnav a { color: var(--text-primary); font: 700 14px/1 inherit; text-decoration: none; }
.topnav a:hover { text-decoration: underline; text-decoration-thickness: 2px; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 별점을 별 모양 아이콘으로 표시 금지 — Tripadvisor는 점(원형) 5개가 시그니처
2. 초록색 위에 흰색 텍스트 사용 금지 — 항상 검정 텍스트 (#34E0A1 + #000 조합)
3. 카드에서 리뷰 인용구 생략 금지 — UGC 톤의 핵심
4. 사각형 버튼 사용 금지 — 풀필 pill이 친근함 시그니처
5. 부엉이 로고 옆에 그라데이션·이펙트 적용 금지 — 평면 일러스트 유지

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: 'Trip Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: #000; background: #fff; }
  .topnav { height: 64px; background: #fff; border-bottom: 1px solid #DEDEDE; display: flex; align-items: center; padding: 0 24px; gap: 32px; }
  .topnav .logo { display: inline-flex; align-items: center; gap: 8px; font: 800 22px/1 inherit; letter-spacing: -0.01em; }
  .topnav .owl { width: 28px; height: 28px; border-radius: 9999px; background: #34E0A1; display: grid; place-items: center; }
  .topnav a { color: #000; font: 700 14px/1 inherit; text-decoration: none; }
  .topnav a:hover { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; }
  .hero { padding: 56px 24px 32px; max-width: 1136px; margin: 0 auto; text-align: center; }
  .hero h1 { font: 800 52px/1.1 inherit; letter-spacing: -0.02em; margin: 0 0 12px; }
  .hero p { font: 400 18px/1.5 inherit; color: #3A3A3D; margin: 0 0 24px; }
  .searchbar { max-width: 720px; margin: 0 auto; background: #fff; border: 2px solid #000; border-radius: 9999px; padding: 6px 6px 6px 24px; display: flex; align-items: center; gap: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  .searchbar input { flex: 1; border: 0; outline: 0; font: 500 16px/1.4 inherit; }
  .searchbar button { background: #000; color: #fff; border: 0; border-radius: 9999px; padding: 12px 22px; font: 800 14px/1 inherit; cursor: pointer; }
  .features { max-width: 1136px; margin: 32px auto 64px; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .card { background: #fff; border: 1px solid #DEDEDE; border-radius: 12px; padding: 16px; transition: box-shadow 200ms ease, transform 200ms ease; }
  .card:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.08); transform: translateY(-2px); }
  .card .thumb { aspect-ratio: 4/3; border-radius: 8px; background: linear-gradient(135deg, #B8F2D9, #34E0A1); margin-bottom: 12px; position: relative; }
  .card .award { position: absolute; top: 10px; left: 10px; background: #FFF0D2; color: #B07A00; font: 700 11px/1 inherit; padding: 4px 10px; border-radius: 9999px; letter-spacing: 0.02em; }
  .card .rank { font: 600 12px/1 inherit; color: #6E6E73; margin-bottom: 4px; }
  .card .name { font: 800 18px/1.3 inherit; margin: 0 0 6px; }
  .card .rating { display: inline-flex; align-items: center; gap: 6px; margin-bottom: 10px; }
  .card .dots { display: inline-flex; gap: 2px; }
  .card .dot { width: 12px; height: 12px; border-radius: 9999px; background: #34E0A1; }
  .card .dot.e { background: #DEDEDE; }
  .card .count { font: 600 13px/1 inherit; color: #6E6E73; }
  .card .quote { background: #F2F2F2; border-radius: 8px; padding: 10px 12px; font: italic 400 14px/1.6 'Source Serif Pro', serif; color: #000; margin: 0; }
  .card .author { font: 500 11px/1.3 'Trip Sans', sans-serif; color: #6E6E73; margin-top: 8px; }
</style>

<header class="topnav">
  <span class="logo">
    <span class="owl">
      <svg width="20" height="20" viewBox="0 0 100 100"><circle cx="32" cy="50" r="14" fill="#000"/><circle cx="68" cy="50" r="14" fill="#000"/><circle cx="32" cy="50" r="5" fill="#fff"/><circle cx="68" cy="50" r="5" fill="#34E0A1"/></svg>
    </span>
    Tripadvisor
  </span>
  <a>Hotels</a><a>Things to Do</a><a>Restaurants</a><a>Flights</a><a>Cruises</a>
  <span style="margin-left:auto;font:700 13px/1 inherit;">리뷰 작성 ✏</span>
</header>

<section class="hero">
  <h1>전 세계 여행자<br/>10억+의 후기로 떠나세요.</h1>
  <p>호텔 · 맛집 · 액티비티를 진짜 다녀온 사람들의 별점과 리뷰로 비교하세요.</p>
  <div class="searchbar">
    <input placeholder="어디로 가시나요?" />
    <button>검색</button>
  </div>
</section>

<div class="features">
  <div class="card">
    <div class="thumb"><span class="award">Travelers' Choice 2026</span></div>
    <div class="rank">#3 of 184 hotels · Shibuya</div>
    <h3 class="name">시부야 그랜벨 호텔</h3>
    <div class="rating">
      <span class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>
      <span class="count">2,134 리뷰</span>
    </div>
    <p class="quote">"역에서 정말 가깝고 직원이 친절했어요. 다음에도 묵고 싶네요!"</p>
    <div class="author">— Sarah K., 한국 · 1일 전</div>
  </div>
  <div class="card">
    <div class="thumb" style="background:linear-gradient(135deg,#88E8BD,#1FB07A)"></div>
    <div class="rank">#1 of 92 things to do · Asakusa</div>
    <h3 class="name">센소지 사원</h3>
    <div class="rating">
      <span class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>
      <span class="count">8,402 리뷰</span>
    </div>
    <p class="quote">"오래된 도쿄의 분위기를 느낄 수 있는 곳. 저녁에 조명이 켜지면 더 아름답습니다."</p>
    <div class="author">— Hiroshi M., 일본 · 3일 전</div>
  </div>
  <div class="card">
    <div class="thumb" style="background:linear-gradient(135deg,#5BDFA8,#168258)"></div>
    <div class="rank">#7 of 412 restaurants · Shinjuku</div>
    <h3 class="name">이치란 신주쿠</h3>
    <div class="rating">
      <span class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot e"></span></span>
      <span class="count">3,820 리뷰</span>
    </div>
    <p class="quote">"개인 부스에서 라멘을 음미할 수 있는 독특한 경험. 줄은 길지만 그만한 가치가 있어요."</p>
    <div class="author">— Min-jun K., 한국 · 5일 전</div>
  </div>
</div>
```
