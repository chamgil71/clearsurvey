---
brand: Toss
brand_ko: 토스
slug: toss
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#0064FF"
primary_color_name: "Toss Blue"
mood:
  - 단순
  - 신뢰
  - 모던

font_category: sans-serif
font_primary: Toss Product Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2015
last_major_revision: 2024
signature_keyword: "Pretendard와 단일 Toss Blue 강조의 한국 핀테크 표준"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F2F4F6", "border": "#E5E8EB", "fg": "#191F28", "fg_muted": "#8B95A1", "accent": "#0064FF" },
    "dark":  { "bg": "#17171C", "surface": "#21232A", "border": "#2C2F37", "fg": "#F2F4F6", "fg_muted": "#B0B8C1", "accent": "#0064FF" }
  }

hero_html: |
  <div style="font-family:'Toss Product Sans',Pretendard,-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-surface);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:800;color:var(--card-accent);letter-spacing:-0.025em;">toss</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">알림 ⓜ</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:12px;color:var(--card-fg-muted);font-weight:600;">내 자산</div>
      <div style="font-size:30px;font-weight:800;letter-spacing:-0.025em;">₩ 12,840,000</div>
      <div style="background:var(--card-surface);border-radius:14px;padding:14px;margin-top:6px;">
        <div style="font-size:11px;color:var(--card-fg-muted);font-weight:600;margin-bottom:4px;">통합계좌 · 토스뱅크</div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:14px;font-weight:700;color:var(--card-fg);">자유</span>
          <strong style="font-size:18px;font-weight:800;color:var(--card-fg);">₩ 8,420,000</strong>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px;">
        <button style="background:var(--card-accent);color:#fff;border:0;border-radius:14px;padding:14px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;">송금</button>
        <button style="background:var(--card-surface);color:var(--card-fg);border:0;border-radius:14px;padding:14px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;">받기</button>
      </div>
      <div style="background:var(--card-bg);border:1px solid var(--card-surface);border-radius:14px;padding:14px;margin-top:6px;">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:600;">
          <span>Joon에게 송금</span>
          <span style="color:var(--card-fg);font-weight:800;">- 24,000원</span>
        </div>
        <div style="font-size:11px;color:var(--card-fg-muted);margin-top:2px;">5월 8일 · 점심값</div>
      </div>
    </div>
  </div>

sources:
  - https://toss.im/
  - https://toss.tech/
  - https://www.tossbank.com/
---

### ① 브랜드 DNA
- **브랜드명**: Toss (토스, 비바리퍼블리카)
- **한 줄 정체성**: 한국 핀테크의 표준 — 송금부터 증권/은행/보험까지 한 슈퍼앱
- **공식 디자인 철학**: "모두가 자유롭게 — 단순함의 끝까지 다듬는다"
- **시그니처 요소 1개**: Pretendard + Toss Product Sans + 단일 Toss Blue(#0064FF) — 한 화면에 한 액션의 절제 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 단순, 신뢰, 모던
- **무드 설명**: 흰 캔버스 + 검은 본문 + 단일 Toss Blue. 한 화면에는 정확히 한 가지 행동만 강조되는 절제된 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 모바일 우선
- **모서리 성향**: Round (12~16px)
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Toss Blue (dark-tuned, ramp inverted) */
  --color-primary-50:  #001A47;
  --color-primary-100: #002C77;
  --color-primary-200: #003EA8;
  --color-primary-300: #0050D9;
  --color-primary-400: #0064FF;
  --color-primary-500: #2D82FF;  /* Toss Blue (dark-lifted for contrast) */
  --color-primary-600: #5AA0FF;
  --color-primary-700: #85B9FF;
  --color-primary-800: #C2DCFF;
  --color-primary-900: #E8F2FF;

  /* Secondary - Navy (lifted to read on dark) */
  --color-secondary-500: #C9D2DD;

  /* Neutral - Toss gray (inverted ramp) */
  --color-neutral-0:    #0E0E12;
  --color-neutral-50:   #15151B;
  --color-neutral-100:  #1C1E25;     /* surface subtle */
  --color-neutral-200:  #2C2F37;
  --color-neutral-300:  #3A3E47;
  --color-neutral-500:  #6B7480;
  --color-neutral-700:  #98A1AD;     /* text tertiary */
  --color-neutral-800:  #C2C9D2;     /* text secondary */
  --color-neutral-900:  #F2F4F6;     /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #0E2A1B;
  --color-success-fg: #34D17E;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #FFB13D;
  --color-error-bg:   #2E1414;
  --color-error-fg:   #FF6B6B;
  --color-info-bg:    #0E2347;
  --color-info-fg:    #5AA0FF;

  /* Surface */
  --bg-base:     #17171C;
  --bg-subtle:   #21232A;
  --bg-elevated: #2C2F37;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #F2F4F6;
  --text-secondary:  #C2C9D2;
  --text-tertiary:   #98A1AD;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A6573;

  /* Border */
  --border-default: #2C2F37;
  --border-subtle:  #21232A;
  --border-strong:  #3A3E47;
  --border-focus:   #2D82FF;
}

[data-theme="light"] {
  /* Primary - Toss Blue */
  --color-primary-50:  #E8F2FF;
  --color-primary-100: #C2DCFF;
  --color-primary-200: #85B9FF;
  --color-primary-300: #4795FF;
  --color-primary-400: #1F7CFF;
  --color-primary-500: #0064FF;  /* Toss Blue */
  --color-primary-600: #0050D9;
  --color-primary-700: #003EA8;
  --color-primary-800: #002C77;
  --color-primary-900: #001A47;

  /* Secondary - Navy */
  --color-secondary-500: #191F28;

  /* Neutral - Toss gray (warm-cool middle) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9FAFB;
  --color-neutral-100:  #F2F4F6;     /* surface subtle */
  --color-neutral-200:  #E5E8EB;
  --color-neutral-300:  #D1D6DB;
  --color-neutral-500:  #B0B8C1;
  --color-neutral-700:  #8B95A1;     /* text tertiary */
  --color-neutral-800:  #4E5968;     /* text secondary */
  --color-neutral-900:  #191F28;     /* text primary */
  --color-neutral-1000: #0A0E14;

  /* Semantic */
  --color-success-bg: #E8F8EE;
  --color-success-fg: #00A85A;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #FF9500;
  --color-error-bg:   #FFE8E8;
  --color-error-fg:   #FF4040;
  --color-info-bg:    #E8F2FF;
  --color-info-fg:    #0064FF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F2F4F6;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,31,40,0.50);

  /* Text */
  --text-primary:    #191F28;
  --text-secondary:  #4E5968;
  --text-tertiary:   #8B95A1;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B0B8C1;

  /* Border */
  --border-default: #E5E8EB;
  --border-subtle:  #F2F4F6;
  --border-strong:  #D1D6DB;
  --border-focus:   #0064FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Toss Product Sans (자체) — 폴백 -apple-system
  - 한글: **Pretendard (OFL)** — Toss가 표준화에 큰 영향
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.025em
  - H1 (Title 1): 32px / 800 / 1.15 / -0.02em
  - H2 (Title 2): 24px / 700 / 1.25 / -0.015em
  - H3 (Title 3): 19px / 700 / 1.3 / -0.01em
  - Body Large (Body 1): 17px / 500 / 1.5 / -0.01em
  - Body (Body 2): 15px / 500 / 1.5 / -0.01em
  - Body Small (Body 3): 13px / 500 / 1.43 / -0.005em
  - Caption: 11px / 600 / 1.27 / 0

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
- **Container**: max-width 480px (모바일 우선), 좌우 패딩 20px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 14px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.40);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.55);
--shadow-xl: 0 16px 32px rgba(0,100,255,0.35);
```

### ⑧ Iconography
- **스타일**: Outline (Toss 자체)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Toss Icons / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 16px/1 'Toss Product Sans', Pretendard, -apple-system, sans-serif;
  letter-spacing: -0.01em;
  border-radius: var(--radius-md);
  padding: 14px 18px;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-secondary:hover { background: var(--color-neutral-200); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 0; border-radius: var(--radius-md); padding: 14px 16px; font-size: 16px; font-family: inherit; }
.input:focus { outline: 2px solid var(--border-focus); outline-offset: -2px; }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: 9999px; font-size: 12px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (BottomNav 모바일)**
```css
.bottomnav { background: var(--bg-base); border-top: 1px solid var(--border-subtle); display: grid; grid-template-columns: repeat(5, 1fr); padding: 8px 0; }
.bottomnav .item { padding: 6px; text-align: center; font-size: 11px; font-weight: 600; color: var(--text-tertiary); }
.bottomnav .item.active { color: var(--color-primary-500); }
.bottomnav .item .ic { font-size: 22px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 한 화면에 두 개 이상 primary action 동시 사용 금지 — Toss 절제 원칙
2. Toss Blue를 destructive 액션에 사용 금지
3. 그라데이션 배경 위에 본문 텍스트 직접 배치 금지
4. 버튼을 sharp 사각으로 변경 금지 — 12~14px round가 시그니처
5. 본문 폰트 weight 400 이하 사용 금지 — 500+ Bold가 한국어 가독성 핵심

### ⑫ 시그니처 적용 예시 (Mobile home)

```html
<style>
  body { margin: 0; font-family: 'Toss Product Sans', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #F2F4F6; background: #17171C; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 14px 20px; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-weight: 800; color: #2D82FF; font-size: 24px; letter-spacing: -0.025em; }
  .topbar .icons { margin-left: auto; display: flex; gap: 14px; font-size: 22px; }
  .home { padding: 8px 20px 20px; display: flex; flex-direction: column; gap: 12px; }
  .home h1 { font-size: 24px; font-weight: 800; margin: 0 0 4px; letter-spacing: -0.02em; }
  .home .sub { font-size: 13px; color: #C2C9D2; }
  .total-card { background: #21232A; border-radius: 14px; padding: 18px 20px; }
  .total-card .label { font-size: 13px; color: #C2C9D2; font-weight: 600; }
  .total-card .amount { font-size: 30px; font-weight: 800; letter-spacing: -0.025em; margin-top: 4px; }
  .accounts { display: flex; flex-direction: column; gap: 8px; }
  .account { background: #17171C; border: 1px solid #2C2F37; border-radius: 14px; padding: 16px; display: flex; align-items: center; gap: 12px; }
  .account .ic { width: 40px; height: 40px; border-radius: 50%; background: #0E2347; color: #5AA0FF; display: grid; place-items: center; font-weight: 800; }
  .account .name { font-size: 14px; color: #C2C9D2; font-weight: 600; }
  .account .balance { font-size: 18px; font-weight: 800; margin-top: 2px; }
  .account .arrow { color: #98A1AD; font-size: 20px; margin-left: auto; }
  .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
  .actions .send { background: #2D82FF; color: #fff; border: 0; border-radius: 14px; padding: 16px; font-size: 16px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .actions .receive { background: #21232A; color: #F2F4F6; border: 0; border-radius: 14px; padding: 16px; font-size: 16px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .recent { background: #17171C; border: 1px solid #2C2F37; border-radius: 14px; padding: 4px 0; margin-top: 8px; }
  .recent .row { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; padding: 12px 16px; align-items: center; }
  .recent .row .ic { width: 36px; height: 36px; border-radius: 50%; background: #21232A; color: #F2F4F6; display: grid; place-items: center; font-weight: 800; font-size: 13px; }
  .recent .row .name { font-size: 14px; font-weight: 700; }
  .recent .row .when { font-size: 11px; color: #98A1AD; margin-top: 2px; }
  .recent .row .amt { font-size: 14px; font-weight: 800; }
  .recent .row .amt.in { color: #5AA0FF; }
  .bottomnav { background: #17171C; border-top: 1px solid #2C2F37; display: grid; grid-template-columns: repeat(5, 1fr); padding: 8px 0; }
  .bottomnav .item { padding: 6px; text-align: center; font-size: 11px; font-weight: 600; color: #98A1AD; }
  .bottomnav .item.active { color: #2D82FF; }
  .bottomnav .item .ic { font-size: 20px; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">toss</span>
    <span class="icons">🔔 ⓜ</span>
  </header>
  <main class="home">
    <h1>안녕하세요, 미나님</h1>
    <div class="sub">오늘도 잘 부탁드려요</div>
    <div class="total-card">
      <div class="label">내 자산</div>
      <div class="amount">12,840,000원</div>
    </div>
    <div class="accounts">
      <div class="account">
        <div class="ic">통</div>
        <div>
          <div class="name">통합계좌 · 토스뱅크</div>
          <div class="balance">8,420,000원</div>
        </div>
        <span class="arrow">›</span>
      </div>
      <div class="account">
        <div class="ic">증</div>
        <div>
          <div class="name">토스증권</div>
          <div class="balance">4,420,000원</div>
        </div>
        <span class="arrow">›</span>
      </div>
    </div>
    <div class="actions">
      <button class="send">송금</button>
      <button class="receive">받기</button>
    </div>
    <section class="recent">
      <div class="row">
        <div class="ic">J</div>
        <div><div class="name">Joon에게 송금</div><div class="when">5월 8일 · 점심값</div></div>
        <div class="amt">- 24,000원</div>
      </div>
      <div class="row">
        <div class="ic">월</div>
        <div><div class="name">월급</div><div class="when">5월 5일 · Acme Corp</div></div>
        <div class="amt in">+ 2,400,000원</div>
      </div>
    </section>
  </main>
  <nav class="bottomnav">
    <div class="item active"><div class="ic">🏠</div>홈</div>
    <div class="item"><div class="ic">💸</div>혜택</div>
    <div class="item"><div class="ic">⏱</div>주식</div>
    <div class="item"><div class="ic">🛒</div>쇼핑</div>
    <div class="item"><div class="ic">Ⓜ</div>전체</div>
  </nav>
</div>
```
