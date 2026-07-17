---
brand: KakaoPay
brand_ko: 카카오페이
slug: kakao-pay
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - fintech
  - consumer

color_tone: warm
primary_color_hex: "#FEE500"
primary_color_name: "Kakao Yellow"
mood:
  - 친근
  - 명랑
  - 신뢰

font_category: sans-serif
font_primary: Kakao Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2014
last_major_revision: 2024
signature_keyword: "노란 카카오 옐로우와 검은 본문이 만나는 친근한 핀테크"

hero_html: |
  <div style="font-family:'Kakao Sans',Pretendard,-apple-system,sans-serif;background:#F7F8FA;color:#191919;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#FEE500;padding:14px 16px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:17px;font-weight:800;color:#191919;letter-spacing:-0.02em;">pay</strong>
      <span style="margin-left:auto;font-size:11px;color:#191919;font-weight:600;">⚙</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:#fff;border-radius:16px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="font-size:11px;color:#7E8593;font-weight:600;">머니</div>
        <div style="font-size:24px;font-weight:800;letter-spacing:-0.02em;margin-top:2px;">1,284,000원</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px;">
          <button style="background:#FEE500;color:#191919;border:0;border-radius:10px;padding:11px;font-size:13px;font-weight:800;font-family:inherit;cursor:pointer;">송금</button>
          <button style="background:#F1F3F5;color:#191919;border:0;border-radius:10px;padding:11px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">충전</button>
        </div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:14px;display:flex;align-items:center;gap:10px;">
        <div style="width:36px;height:36px;background:#FFF7B3;border-radius:10px;display:grid;place-items:center;font-weight:800;color:#191919;">P</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;">결제하기</div>
          <div style="font-size:11px;color:#7E8593;">바코드로 한 번에</div>
        </div>
        <span style="color:#B8BDC4;font-size:18px;">›</span>
      </div>
      <div style="background:#fff;border-radius:16px;padding:14px;">
        <div style="font-size:12px;color:#7E8593;font-weight:600;margin-bottom:6px;">최근 거래</div>
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;">
          <span>편의점 GS25</span><span>- 4,200원</span>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.kakaopay.com/
  - https://tech.kakaopay.com/
  - https://www.kakaocorp.com/
---

### ① 브랜드 DNA
- **브랜드명**: KakaoPay (카카오페이)
- **한 줄 정체성**: 카카오톡 친구 송금에서 시작해 결제·투자·보험까지 묶은 종합 핀테크
- **공식 디자인 철학**: "쉽고, 빠르고, 친근하게" — 금융을 일상 대화처럼
- **시그니처 요소 1개**: 새카만 본문(#191919) 위 한 점의 Kakao Yellow(#FEE500) 강조 + 16px 라운드 카드. 토스의 단일 Blue와 대비되는 "노란 친근함"

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근, 명랑, 신뢰
- **무드 설명**: 카카오 본가의 노란 톤을 유지하되, 금융 신뢰감 확보를 위해 본문은 거의 검정(#191919)에 가까운 톤. 카드는 흰색·라운드 16px로 분리감을 주고, 강조는 노랑 + 일부 코랄/블루로 결제·송금을 구분.
- **비주얼 스타일**: 모던 미니멀 + 약간의 휴머니즘 (캐릭터 라이언/어피치)
- **밀도(Density)**: Comfortable — 모바일 우선, 카드 사이 8~10px 여백
- **모서리 성향**: Round (12~16px) — 카카오 패밀리 공통
- **평면성**: Flat — 그림자 거의 없음, 미세한 elevation만

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Kakao Yellow */
  --color-primary-50:  #FFFEF0;
  --color-primary-100: #FFFAC2;
  --color-primary-200: #FFF285;
  --color-primary-300: #FFEC47;
  --color-primary-400: #FFE61F;
  --color-primary-500: #FEE500;  /* Kakao Yellow */
  --color-primary-600: #E5CE00;
  --color-primary-700: #B8A500;
  --color-primary-800: #8A7C00;
  --color-primary-900: #5C5300;

  /* Secondary - 결제 강조 코랄 */
  --color-secondary-500: #FF6F61;

  /* Tertiary - 송금/금융 파랑 */
  --color-tertiary-500: #3478F6;

  /* Neutral - Kakao Gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9FAFB;
  --color-neutral-100:  #F1F3F5;      /* surface subtle */
  --color-neutral-200:  #E8EAED;
  --color-neutral-300:  #DEE2E6;
  --color-neutral-500:  #B8BDC4;
  --color-neutral-700:  #7E8593;      /* text tertiary */
  --color-neutral-800:  #4A4F58;      /* text secondary */
  --color-neutral-900:  #191919;      /* text primary — 카카오 본가 본문 */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E8F8E8;
  --color-success-fg: #1EA64A;
  --color-warning-bg: #FFF6E0;
  --color-warning-fg: #F2A50C;
  --color-error-bg:   #FFEDED;
  --color-error-fg:   #E53935;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #3478F6;

  /* Surface */
  --bg-base:     #F7F8FA;         /* 페이지 회색 캔버스 */
  --bg-subtle:   #F1F3F5;
  --bg-elevated: #FFFFFF;          /* 카드 */
  --bg-overlay:  rgba(25,25,25,0.55);

  /* Text */
  --text-primary:    #191919;
  --text-secondary:  #4A4F58;
  --text-tertiary:   #7E8593;
  --text-on-primary: #191919;      /* Yellow 위는 검정 */
  --text-disabled:   #B8BDC4;

  /* Border */
  --border-default: #E8EAED;
  --border-subtle:  #F1F3F5;
  --border-strong:  #DEE2E6;
  --border-focus:   #3478F6;
}

[data-theme="dark"] {
  --bg-base: #121212;
  --bg-subtle: #1B1C1F;
  --bg-elevated: #232427;
  --text-primary: #F1F3F5;
  --text-secondary: #B8BDC4;
  --border-default: #2C2F37;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문/한글: **Kakao Sans** (자체) — 폴백 Pretendard, -apple-system
  - 본문은 한국어 가독성을 위해 weight 500+ 위주
- **위계**:
  - Display: 40px / 800 / 1.2 / -0.025em
  - H1: 28px / 800 / 1.25 / -0.02em
  - H2: 22px / 700 / 1.3 / -0.015em
  - H3: 18px / 700 / 1.35 / -0.01em
  - Body Large: 16px / 500 / 1.5 / -0.01em
  - Body: 14px / 500 / 1.5 / -0.005em
  - Body Small: 13px / 500 / 1.45 / 0
  - Caption: 11px / 600 / 1.4 / 0

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
- **Container**: max-width 480px (모바일), 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;     /* 카드 시그니처 */
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.03);
--shadow-md: 0 2px 8px rgba(0,0,0,0.04);   /* 카드 기본 */
--shadow-lg: 0 8px 20px rgba(0,0,0,0.08);  /* 모달 */
--shadow-xl: 0 16px 32px rgba(254,229,0,0.30); /* CTA 노란 발광 */
```

### ⑧ Iconography
- **스타일**: Filled + Outline 혼합 (카카오 패밀리는 둥근 Filled가 시그니처)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Kakao Icons / Phosphor Fill

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 15px/1 'Kakao Sans', Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: var(--radius-md); padding: 13px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 120ms ease, transform 80ms ease; }
.btn:active { transform: scale(0.98); }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); font-weight: 800; }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-tertiary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-default);
         border-radius: var(--radius-md); padding: 12px 14px; font: 500 15px/1.4 inherit;
         color: var(--text-primary); }
.input:focus { outline: 0; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(52,120,246,0.18); }
.input.error { border-color: var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-elevated); border-radius: var(--radius-lg);
        padding: 16px; box-shadow: var(--shadow-md); }
.card-flat { box-shadow: none; border: 1px solid var(--border-default); }
.card-yellow { background: var(--color-primary-500); color: var(--text-on-primary); }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 9999px; font: 600 11px/1.4 inherit; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-secondary); }
```

**Navigation (BottomNav)**
```css
.bottomnav { background: var(--bg-elevated); border-top: 1px solid var(--border-subtle);
             display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0; }
.bottomnav .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: var(--text-tertiary); }
.bottomnav .item.active { color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 노랑(#FEE500) 위에 흰 텍스트 사용 금지 — 접근성 명도 미달, 반드시 검정 본문
2. 본문에 카카오 캐릭터(라이언/어피치 등) 과다 노출 금지 — 금융 신뢰감 저하
3. 한 화면에 노랑 CTA를 두 개 이상 두지 말 것 — Primary는 하나만
4. 카드 모서리를 sharp(0~4px)로 변경 금지 — 16px round가 패밀리 시그니처
5. 결제 액션에 빨강 단독 사용 금지 — 코랄(#FF6F61)로 부드럽게 처리

### ⑫ 시그니처 적용 예시 (KakaoPay 메인)

```html
<style>
  body { margin: 0; font-family: 'Kakao Sans', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #191919; background: #F7F8FA; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #FEE500; padding: 14px 18px; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-weight: 800; font-size: 20px; }
  .topbar .icons { margin-left: auto; font-size: 18px; }
  .home { padding: 14px 16px 80px; display: flex; flex-direction: column; gap: 10px; }
  .money-card { background: #fff; border-radius: 16px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .money-card .label { font-size: 12px; color: #7E8593; font-weight: 600; }
  .money-card .amount { font-size: 28px; font-weight: 800; letter-spacing: -0.02em; margin-top: 2px; }
  .money-card .actions { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; margin-top: 14px; }
  .money-card .actions button { background: #F1F3F5; color: #191919; border: 0; border-radius: 10px; padding: 12px; font: 700 13px/1 inherit; cursor: pointer; }
  .money-card .actions .primary { background: #FEE500; font-weight: 800; }
  .menu-grid { background: #fff; border-radius: 16px; padding: 14px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px 4px; }
  .menu-grid .item { display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #4A4F58; }
  .menu-grid .item .ic { width: 44px; height: 44px; border-radius: 12px; background: #FFF7B3; display: grid; place-items: center; font-weight: 800; color: #191919; }
  .recent { background: #fff; border-radius: 16px; padding: 4px 0; }
  .recent .head { padding: 14px 16px 6px; font-size: 13px; font-weight: 700; color: #191919; }
  .recent .row { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; padding: 10px 16px; align-items: center; }
  .recent .row .ic { width: 36px; height: 36px; border-radius: 50%; background: #F1F3F5; display: grid; place-items: center; font-weight: 800; font-size: 13px; }
  .recent .row .name { font-size: 14px; font-weight: 700; }
  .recent .row .when { font-size: 11px; color: #7E8593; margin-top: 2px; }
  .recent .row .amt { font-size: 14px; font-weight: 800; }
  .recent .row .amt.in { color: #3478F6; }
  .bottomnav { background: #fff; border-top: 1px solid #F1F3F5; display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0; position: sticky; bottom: 0; }
  .bottomnav .item { padding: 6px; text-align: center; font-size: 11px; font-weight: 600; color: #B8BDC4; }
  .bottomnav .item.active { color: #191919; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">pay</span>
    <span class="icons">🔔 ⚙</span>
  </header>
  <main class="home">
    <section class="money-card">
      <div class="label">머니</div>
      <div class="amount">1,284,000원</div>
      <div class="actions">
        <button class="primary">송금</button>
        <button>충전</button>
        <button>받기</button>
      </div>
    </section>
    <section class="menu-grid">
      <div class="item"><div class="ic">💳</div>결제</div>
      <div class="item"><div class="ic">💸</div>송금</div>
      <div class="item"><div class="ic">📊</div>투자</div>
      <div class="item"><div class="ic">🛡</div>보험</div>
    </section>
    <section class="recent">
      <div class="head">최근 거래</div>
      <div class="row">
        <div class="ic">G</div>
        <div><div class="name">GS25 편의점</div><div class="when">5월 12일</div></div>
        <div class="amt">- 4,200원</div>
      </div>
      <div class="row">
        <div class="ic">월</div>
        <div><div class="name">월급</div><div class="when">5월 10일</div></div>
        <div class="amt in">+ 3,200,000원</div>
      </div>
    </section>
  </main>
  <nav class="bottomnav">
    <div class="item active">홈</div>
    <div class="item">결제</div>
    <div class="item">송금</div>
    <div class="item">자산</div>
    <div class="item">전체</div>
  </nav>
</div>
```
