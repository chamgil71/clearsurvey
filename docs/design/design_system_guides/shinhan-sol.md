---
brand: Shinhan SOL
brand_ko: 신한 쏠
slug: shinhan-sol
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - fintech
  - enterprise

color_tone: cool
primary_color_hex: "#0046FF"
primary_color_name: "Shinhan Blue"
mood:
  - 신뢰
  - 안정
  - 정교

font_category: sans-serif
font_primary: Shinhan PMR
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2018
last_major_revision: 2024
signature_keyword: "Shinhan Blue 단일 강조 + 큰 숫자 + 카드 그림자의 정통 시중은행"

hero_html: |
  <div style="font-family:'Shinhan PMR',Pretendard,-apple-system,sans-serif;background:#F3F5F8;color:#1A1A1A;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#0046FF;color:#fff;padding:14px 16px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:800;letter-spacing:-0.025em;">SOL</strong>
      <span style="font-size:11px;font-weight:600;opacity:0.85;">신한은행</span>
      <span style="margin-left:auto;font-size:11px;opacity:0.85;">⓿ ⚙</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,0.06);border:1px solid #E5E8EE;">
        <div style="font-size:11px;color:#6B7280;font-weight:600;letter-spacing:0.02em;">신한 입출금</div>
        <div style="font-size:13px;color:#1A1A1A;margin-top:2px;font-weight:600;">110-***-123456</div>
        <div style="font-size:28px;font-weight:800;letter-spacing:-0.025em;margin-top:8px;">12,840,000 <span style="font-size:14px;font-weight:600;color:#6B7280;">원</span></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:12px;">
          <button style="background:#0046FF;color:#fff;border:0;border-radius:8px;padding:11px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">이체</button>
          <button style="background:#fff;color:#0046FF;border:1px solid #0046FF;border-radius:8px;padding:11px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">조회</button>
        </div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:14px;border:1px solid #E5E8EE;">
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;">
          <span>스타벅스</span><span style="color:#1A1A1A;">- 5,800원</span>
        </div>
        <div style="font-size:11px;color:#6B7280;margin-top:2px;">5월 12일 14:23</div>
      </div>
    </div>
  </div>

sources:
  - https://www.shinhan.com/
  - https://www.shinhansec.com/
  - https://www.shinhansol.com/
---

### ① 브랜드 DNA
- **브랜드명**: Shinhan SOL (신한 쏠)
- **한 줄 정체성**: 신한은행/증권/카드/라이프를 한 앱에 통합한 시중은행 슈퍼앱
- **공식 디자인 철학**: "More easy, More fast, More smart" — 정확하고 정중한 금융 디지털화
- **시그니처 요소 1개**: Shinhan Blue(#0046FF) 단일 강조 + 32px 안팎 큰 숫자 + 12px Soft 라운드 카드. 토스의 절제, 카카오페이의 친근함과 다른 "정중한 시중은행" 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 안정, 정교
- **무드 설명**: 흰색 캔버스 + 옅은 회색 배경 + 단일 Shinhan Blue. 카드는 미세한 1px 보더 + sm 그림자로 분리, 핵심 정보(잔액/계좌번호)는 시각 위계가 매우 강함. 잡색은 거의 사용하지 않음.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 데스크톱 웹뱅킹과 모바일 모두 대응, 시니어 가독성도 고려
- **모서리 성향**: Soft (8~12px) — round보다 한 단계 보수적
- **평면성**: Subtle — sm 그림자 + 1px 보더로 카드 elevation

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Shinhan Blue */
  --color-primary-50:  #E6EEFF;
  --color-primary-100: #B8CCFF;
  --color-primary-200: #7AA3FF;
  --color-primary-300: #3D7BFF;
  --color-primary-400: #1A5EFF;
  --color-primary-500: #0046FF;   /* Shinhan Blue */
  --color-primary-600: #0039D9;
  --color-primary-700: #002CA8;
  --color-primary-800: #001F77;
  --color-primary-900: #001247;

  /* Secondary - Deep Navy (헤더/강조) */
  --color-secondary-500: #001A66;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FB;
  --color-neutral-100:  #F3F5F8;     /* page bg */
  --color-neutral-200:  #E5E8EE;     /* border default */
  --color-neutral-300:  #D1D6DD;
  --color-neutral-500:  #9CA3AE;
  --color-neutral-700:  #6B7280;     /* text secondary */
  --color-neutral-800:  #3F4756;
  --color-neutral-900:  #1A1A1A;     /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F6EC;
  --color-success-fg: #16A55C;
  --color-warning-bg: #FFF4DB;
  --color-warning-fg: #E69500;
  --color-error-bg:   #FFE8EB;
  --color-error-fg:   #D62B3F;
  --color-info-bg:    #E6EEFF;
  --color-info-fg:    #0046FF;

  /* Surface */
  --bg-base:     #F3F5F8;
  --bg-subtle:   #F8F9FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,26,0.55);

  /* Text */
  --text-primary:    #1A1A1A;
  --text-secondary:  #3F4756;
  --text-tertiary:   #6B7280;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #9CA3AE;

  /* Border */
  --border-default: #E5E8EE;
  --border-subtle:  #F3F5F8;
  --border-strong:  #D1D6DD;
  --border-focus:   #0046FF;
}

[data-theme="dark"] {
  --bg-base: #0E1116;
  --bg-subtle: #14181F;
  --bg-elevated: #1A1F28;
  --text-primary: #F3F5F8;
  --text-secondary: #B8BFCB;
  --border-default: #232934;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Shinhan PMR / Roboto 폴백
  - 한글: **Shinhan PMR / Shinhan Indi** (자체) → 폴백 Pretendard, Noto Sans KR
- **위계** (시중은행답게 본문 weight 500+):
  - Display (잔액): 32px / 800 / 1.2 / -0.025em
  - H1: 24px / 700 / 1.3 / -0.02em
  - H2: 20px / 700 / 1.35 / -0.015em
  - H3: 17px / 700 / 1.4 / -0.01em
  - Body Large: 15px / 500 / 1.55 / -0.005em
  - Body: 14px / 500 / 1.55 / -0.005em
  - Body Small: 13px / 500 / 1.5 / 0
  - Caption: 11px / 600 / 1.4 / 0.02em

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
  --space-3xl: 60px;
  ```
- **Container**: max-width 480px (모바일), 1200px (웹뱅킹), 좌우 패딩 16px / 32px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;     /* 버튼 */
--radius-lg: 12px;    /* 카드 시그니처 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);    /* 카드 기본 */
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);   /* hover/팝오버 */
--shadow-lg: 0 12px 32px rgba(0,0,0,0.12);  /* 모달 */
--shadow-xl: 0 24px 48px rgba(0,70,255,0.18); /* 강조 다이얼로그 */
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합 (메뉴는 Filled, 상태는 Outline)
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Square 베이스 + 약간의 round
- **추천 라이브러리**: Shinhan 자체 / Heroicons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'Shinhan PMR', Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: var(--radius-md); padding: 12px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }
.btn-secondary { background: #fff; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-default); border-radius: var(--radius-md);
         padding: 12px 14px; font: 500 15px/1.4 inherit; color: var(--text-primary); }
.input:focus { outline: 0; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(0,70,255,0.18); }
.input.error { border-color: var(--color-error-fg); box-shadow: 0 0 0 3px rgba(214,43,63,0.15); }
.input-amount { font: 800 28px/1.2 inherit; letter-spacing: -0.025em; text-align: right; border: 0; border-bottom: 1px solid var(--border-default); border-radius: 0; padding: 8px 0; }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default);
        border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-accent { background: var(--color-primary-500); color: #fff; border-color: transparent; }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 4px; font: 600 11px/1.5 inherit; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-secondary); }
```

**Navigation (TabBar 5개)**
```css
.tabbar { background: #fff; border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 잔액·계좌번호에 채도 높은 색상 적용 금지 — 검정 본문(#1A1A1A)이 시중은행 신뢰감
2. 카드 모서리를 16px 이상 라운드 금지 — 토스/카카오 톤이 되어 정통성 손실
3. 한 화면에 여러 색 강조 금지 — Shinhan Blue 단일 강조 원칙
4. 그라데이션 본문 배경 금지 — 평면 surface + 1px 보더가 시그니처
5. 폰트 weight 400 이하 본문 사용 금지 — 시니어 사용자 가독성 미달

### ⑫ 시그니처 적용 예시 (SOL 홈)

```html
<style>
  body { margin: 0; font-family: 'Shinhan PMR', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #1A1A1A; background: #F3F5F8; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #0046FF; color: #fff; padding: 14px 18px; display: flex; align-items: center; gap: 10px; }
  .topbar .brand { font-weight: 800; font-size: 22px; letter-spacing: -0.025em; }
  .topbar .sub { font-size: 11px; opacity: 0.85; font-weight: 600; }
  .topbar .icons { margin-left: auto; font-size: 16px; opacity: 0.85; }
  .home { padding: 14px 16px 80px; display: flex; flex-direction: column; gap: 10px; }
  .acct-card { background: #fff; border: 1px solid #E5E8EE; border-radius: 12px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
  .acct-card .name { font-size: 12px; color: #6B7280; font-weight: 600; letter-spacing: 0.02em; }
  .acct-card .num { font-size: 13px; color: #1A1A1A; margin-top: 2px; font-weight: 600; }
  .acct-card .amt { font-size: 32px; font-weight: 800; letter-spacing: -0.025em; margin-top: 10px; }
  .acct-card .amt small { font-size: 14px; color: #6B7280; font-weight: 600; }
  .acct-card .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 14px; }
  .acct-card .actions .primary { background: #0046FF; color: #fff; border: 0; border-radius: 8px; padding: 12px; font: 700 14px/1 inherit; cursor: pointer; }
  .acct-card .actions .secondary { background: #fff; color: #0046FF; border: 1px solid #0046FF; border-radius: 8px; padding: 12px; font: 700 14px/1 inherit; cursor: pointer; }
  .quick { background: #fff; border: 1px solid #E5E8EE; border-radius: 12px; padding: 12px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .quick .item { display: flex; flex-direction: column; align-items: center; gap: 6px; font: 600 11px/1.3 inherit; color: #3F4756; }
  .quick .item .ic { width: 40px; height: 40px; border-radius: 8px; background: #E6EEFF; color: #0046FF; display: grid; place-items: center; font-weight: 800; }
  .tx { background: #fff; border: 1px solid #E5E8EE; border-radius: 12px; padding: 4px 0; }
  .tx .head { padding: 14px 16px 6px; display: flex; justify-content: space-between; align-items: center; }
  .tx .head .title { font-size: 13px; font-weight: 700; }
  .tx .head .more { font-size: 12px; color: #6B7280; font-weight: 600; }
  .tx .row { padding: 12px 16px; display: grid; grid-template-columns: 1fr auto; align-items: center; }
  .tx .row .name { font-size: 14px; font-weight: 700; }
  .tx .row .when { font-size: 11px; color: #6B7280; margin-top: 2px; }
  .tx .row .amt { font-size: 14px; font-weight: 800; text-align: right; }
  .tx .row .amt.in { color: #0046FF; }
  .tabbar { background: #fff; border-top: 1px solid #E5E8EE; display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 6px; text-align: center; font-size: 11px; font-weight: 600; color: #9CA3AE; }
  .tabbar .item.active { color: #0046FF; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">SOL</span>
    <span class="sub">신한은행</span>
    <span class="icons">🔔 ⚙</span>
  </header>
  <main class="home">
    <section class="acct-card">
      <div class="name">신한 주거래 통장</div>
      <div class="num">110-123-456789</div>
      <div class="amt">12,840,000 <small>원</small></div>
      <div class="actions">
        <button class="primary">이체</button>
        <button class="secondary">거래내역</button>
      </div>
    </section>
    <section class="quick">
      <div class="item"><div class="ic">💸</div>이체</div>
      <div class="item"><div class="ic">📥</div>입금</div>
      <div class="item"><div class="ic">💳</div>카드</div>
      <div class="item"><div class="ic">📈</div>투자</div>
    </section>
    <section class="tx">
      <div class="head">
        <span class="title">최근 거래</span>
        <span class="more">전체 ›</span>
      </div>
      <div class="row">
        <div><div class="name">스타벅스 강남점</div><div class="when">5월 12일 14:23</div></div>
        <div class="amt">- 5,800원</div>
      </div>
      <div class="row">
        <div><div class="name">월급</div><div class="when">5월 10일 09:30</div></div>
        <div class="amt in">+ 3,200,000원</div>
      </div>
    </section>
  </main>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">이체</div>
    <div class="item">자산</div>
    <div class="item">상품</div>
    <div class="item">메뉴</div>
  </nav>
</div>
```
