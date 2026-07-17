---
brand: Cash App
brand_ko: 캐시앱
slug: cash-app
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#00D54B"
primary_color_name: "Cash App Mint"
mood:
  - 단순
  - 청년 친화
  - 다크

font_category: sans-serif
font_primary: Cash Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - dark
  - light

released_year: 2013
last_major_revision: 2024
signature_keyword: "검정 캔버스에 Mint Green 액션과 $cashtag의 단순 송금 톤"

card_tokens: |
  {
    "light": { "bg": "#000000", "surface": "#1A1A1A", "border": "#1A1A1A", "fg": "#FFFFFF", "fg_muted": "#A1A1A1", "accent": "#00D54B" },
    "dark":  { "bg": "#000000", "surface": "#0A0A0A", "border": "#1F1F1F", "fg": "#F5F5F5", "fg_muted": "#A1A1A1", "accent": "#00D54B" }
  }

hero_html: |
  <div style="font-family:'Cash Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:var(--card-bg);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:24px;height:24px;background:var(--card-accent);border-radius:8px;color:#000;display:grid;place-items:center;font-weight:900;font-size:14px;">$</span>
      <strong style="font-size:13px;font-weight:700;">Cash App</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:11px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;font-weight:700;">잔액</div>
      <div style="font-size:48px;font-weight:800;letter-spacing:-0.025em;line-height:1;color:var(--card-fg);">$284<small style="font-size:32px;color:var(--card-fg-muted);">.50</small></div>
      <div style="background:var(--card-accent);color:#000;padding:4px 10px;border-radius:9999px;font-size:11px;font-weight:800;font-style:italic;display:inline-flex;align-items:center;gap:4px;">$mina</div>
    </div>
    <div style="padding:14px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <button style="background:var(--card-accent);color:#000;border:0;border-radius:9999px;padding:14px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;">받기</button>
      <button style="background:var(--card-surface);color:var(--card-fg);border:0;border-radius:9999px;padding:14px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;">보내기</button>
    </div>
  </div>

sources:
  - https://cash.app/
  - https://cash.app/about
---

### ① 브랜드 DNA
- **브랜드명**: Cash App (Block)
- **한 줄 정체성**: $cashtag으로 즉시 송금하는 청년 친화 모바일 결제/금융 앱
- **공식 디자인 철학**: "Money for everyone — bold simplicity, designed for thumb"
- **시그니처 요소 1개**: $ 한 글자 + Mint Green(#00D54B) + 검정 캔버스의 단호한 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 단순, 청년 친화, 다크
- **무드 설명**: 풀 검정 + 형광 그린의 강한 대비. UI는 거의 없고 큰 숫자가 화면을 채운다. 청년/스트릿 톤.
- **비주얼 스타일**: 모던 미니멀 + 살짝 브루털리즘 (큰 letterform)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~9999px pill)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Cash App Mint */
  --color-primary-50:  #DDFCEA;
  --color-primary-100: #B8F8CF;
  --color-primary-200: #84F0A8;
  --color-primary-300: #4FE782;
  --color-primary-400: #22DC60;
  --color-primary-500: #00D54B;  /* Cash App Mint */
  --color-primary-600: #00B33F;
  --color-primary-700: #008A30;
  --color-primary-800: #006324;
  --color-primary-900: #003F17;

  /* Secondary - Cash App Black */
  --color-secondary-500: #000000;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #C0C0C0;
  --color-neutral-500:  #A1A1A1;
  --color-neutral-700:  #6B6B6B;
  --color-neutral-800:  #2E2E2E;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DDFCEA;
  --color-success-fg: #00D54B;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FF5C5C;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #4287D9;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #6B6B6B;
  --text-tertiary:   #A1A1A1;
  --text-on-primary: #000000;       /* mint 위에는 black */
  --text-disabled:   #C0C0C0;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F5F5F5;
  --border-strong:  #C0C0C0;
  --border-focus:   #00D54B;
}

[data-theme="dark"] {
  /* Cash App 시그니처 다크 */
  --bg-base: #000000;
  --bg-subtle: #1A1A1A;
  --bg-elevated: #2E2E2E;
  --bg-overlay: rgba(0,0,0,0.85);
  --text-primary: #FFFFFF;
  --text-secondary: #A1A1A1;
  --border-default: #1A1A1A;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Cash Sans (자체) — 폴백 -apple-system, Inter
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 96px / 800 / 1.0 / -0.04em
  - H1: 56px / 800 / 1.05 / -0.025em
  - H2: 32px / 800 / 1.15 / -0.015em
  - H3: 22px / 700 / 1.25 / 0
  - Body Large: 17px / 500 / 1.5 / 0
  - Body: 15px / 500 / 1.5 / 0
  - Body Small: 13px / 500 / 1.43 / 0
  - Caption: 11px / 700 / 1.27 / 0.04em (uppercase)

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
- **Container**: max-width 480px (모바일 우선)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.20);
--shadow-md: 0 4px 12px rgba(0,0,0,0.30);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.40);
--shadow-xl: 0 16px 32px rgba(0,213,75,0.20);
```

### ⑧ Iconography
- **스타일**: Outline (정밀)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 800 16px/1 'Cash Sans',Inter,'Pretendard',sans-serif;
  border-radius: 9999px;
  padding: 0 24px;
  height: 56px;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-secondary { background: var(--color-neutral-900); color: #fff; }      /* 다크 모드에서 변형 */
.btn-secondary:hover { background: var(--color-neutral-800); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: transparent; border: 0; border-bottom: 2px solid var(--border-default); border-radius: 0; padding: 12px 0; font-size: 28px; font-weight: 700; font-family: inherit; }
.input:focus { outline: none; border-bottom-color: var(--color-primary-500); }
```

**Card**
```css
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge / cashtag pill**
```css
.cashtag { background: var(--color-primary-500); color: #000; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 800; font-style: italic; display: inline-flex; align-items: center; gap: 4px; }
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #000; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 14px 16px; display: flex; align-items: center; gap: 12px; background: var(--bg-base); }
.topnav .logo { width: 28px; height: 28px; background: var(--color-primary-500); border-radius: 8px; color: #000; display: grid; place-items: center; font-weight: 900; }
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
1. 송금 액션 색을 brand mint 외 다른 색 사용 금지 — Mint = pay/receive
2. $cashtag 표기에서 $ 기호 제거 금지
3. mint 위에 흰 텍스트 사용 금지 — 검정 사용
4. 본문에 채도 높은 그라데이션 배경 사용 금지
5. 큰 숫자(잔액)을 표 안에 가두지 말 것 — 큰 fontsize로 단독 표시

### ⑫ 시그니처 적용 예시 (Mobile)

```html
<style>
  body { margin: 0; font-family: 'Cash Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: #fff; background: #000; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 14px 16px; display: flex; align-items: center; gap: 12px; }
  .topbar .logo { width: 32px; height: 32px; background: #00D54B; border-radius: 9px; color: #000; display: grid; place-items: center; font-weight: 900; font-size: 18px; }
  .topbar .me { margin-left: auto; width: 36px; height: 36px; border-radius: 50%; background: #2E2E2E; }
  .balance { padding: 32px 24px; display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; }
  .balance .label { font-size: 12px; color: #A1A1A1; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; }
  .balance .amount { font-size: 80px; font-weight: 800; letter-spacing: -0.04em; line-height: 1; color: #fff; }
  .balance .amount small { font-size: 48px; color: #A1A1A1; font-weight: 700; }
  .balance .cashtag { background: #00D54B; color: #000; padding: 6px 16px; border-radius: 9999px; font-weight: 800; font-style: italic; font-size: 14px; }
  .actions { padding: 12px 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .actions .pay { background: #00D54B; color: #000; padding: 18px; border-radius: 9999px; text-align: center; font-weight: 800; font-size: 17px; cursor: pointer; }
  .actions .request { background: #1A1A1A; color: #fff; padding: 18px; border-radius: 9999px; text-align: center; font-weight: 800; font-size: 17px; cursor: pointer; border: 1px solid #2E2E2E; }
  .recent { padding: 0 16px 24px; }
  .recent h3 { font-size: 12px; color: #A1A1A1; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; margin: 16px 0 12px; }
  .row { display: grid; grid-template-columns: 40px 1fr auto; gap: 12px; padding: 12px 0; border-bottom: 1px solid #1A1A1A; align-items: center; }
  .row .ic { width: 40px; height: 40px; border-radius: 50%; background: #1A1A1A; display: grid; place-items: center; color: #00D54B; font-weight: 800; }
  .row .who strong { font-size: 15px; }
  .row .when { font-size: 12px; color: #A1A1A1; margin-top: 2px; }
  .row .amt { font-size: 15px; font-weight: 800; }
  .row .amt.in { color: #00D54B; }
  .row .amt.out { color: #fff; }
  .nav { background: #000; border-top: 1px solid #1A1A1A; display: grid; grid-template-columns: repeat(5, 1fr); padding: 8px 0; }
  .nav .item { padding: 8px; text-align: center; font-size: 11px; color: #A1A1A1; cursor: pointer; }
  .nav .item.active { color: #00D54B; }
  .nav .item .ic { font-size: 18px; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo">$</div>
    <span style="margin-left:auto"></span>
    <div class="me"></div>
  </header>
  <main>
    <section class="balance">
      <div class="label">CASH BALANCE</div>
      <div class="amount">$284<small>.50</small></div>
      <div class="cashtag">$mina</div>
    </section>
    <div class="actions">
      <div class="pay">받기</div>
      <div class="request">보내기</div>
    </div>
    <section class="recent">
      <h3>최근 활동</h3>
      <div class="row">
        <div class="ic">$</div>
        <div><strong>$joon</strong><div class="when">친구가 보냄 · 5월 8일</div></div>
        <div class="amt in">+$24.00</div>
      </div>
      <div class="row">
        <div class="ic">$</div>
        <div><strong>$dave</strong><div class="when">친구에게 보냄 · 5월 6일</div></div>
        <div class="amt out">-$15.00</div>
      </div>
      <div class="row">
        <div class="ic">⚡</div>
        <div><strong>Bitcoin</strong><div class="when">매수 · 5월 5일</div></div>
        <div class="amt out">-$50.00</div>
      </div>
    </section>
  </main>
  <nav class="nav">
    <div class="item active"><div class="ic">$</div>Money</div>
    <div class="item"><div class="ic">📈</div>Invest</div>
    <div class="item"><div class="ic">⚡</div>Bitcoin</div>
    <div class="item"><div class="ic">💳</div>Card</div>
    <div class="item"><div class="ic">🛒</div>Pay</div>
  </nav>
</div>
```
