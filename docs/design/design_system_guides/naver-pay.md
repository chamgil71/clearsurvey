---
brand: NaverPay
brand_ko: 네이버페이
slug: naver-pay
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#03C75A"
primary_color_name: "Naver Green"
mood:
  - 친근함
  - 간편 결제
  - 적립

font_category: sans-serif
font_primary: Nanum Square Neo
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
signature_keyword: "Naver Green N pay 마크와 적립 포인트의 한국 간편결제 톤"

hero_html: |
  <div style="font-family:'Nanum Square Neo','Nanum Square',Pretendard,-apple-system,sans-serif;background:#FFFFFF;color:#222222;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #F0F0F0;padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:18px;font-weight:900;color:#03C75A;letter-spacing:-0.025em;">N <span style="color:#222;font-weight:800;font-size:14px;">pay</span></strong>
      <span style="margin-left:auto;font-size:11px;color:#888;">알림</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:linear-gradient(135deg,#03C75A 0%,#08CE69 100%);color:#fff;border-radius:18px;padding:18px;">
        <div style="font-size:11px;font-weight:700;opacity:0.85;text-transform:uppercase;letter-spacing:0.04em;">N Pay 머니</div>
        <div style="font-size:26px;font-weight:800;letter-spacing:-0.025em;margin-top:6px;">128,400원</div>
        <div style="font-size:11px;font-weight:700;margin-top:4px;display:flex;align-items:center;gap:4px;">⭐ 적립 포인트 <strong>2,840P</strong></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <button style="background:#03C75A;color:#fff;border:0;border-radius:14px;padding:14px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;">결제하기</button>
        <button style="background:#F0F0F0;color:#222;border:0;border-radius:14px;padding:14px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;">송금</button>
      </div>
      <div style="background:#fff;border:1px solid #F0F0F0;border-radius:14px;padding:12px;font-size:13px;">
        <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:6px;">최근 결제</div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;align-items:center;">
          <div><strong>네이버 쇼핑</strong><div style="font-size:10px;color:#888;margin-top:2px;">5월 8일 · 적립 240P</div></div>
          <strong style="color:#222;">- 24,000원</strong>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://new-m.pay.naver.com/
  - https://www.naverservice.com/
---

### ① 브랜드 DNA
- **브랜드명**: NaverPay (네이버페이)
- **한 줄 정체성**: 네이버 생태계와 결합한 한국 간편결제 — 적립 포인트 중심
- **공식 디자인 철학**: "쇼핑부터 결제, 적립까지 — Naver 안에서 한 번에"
- **시그니처 요소 1개**: Naver Green 'N pay' 워드마크 + 그라데이션 머니 카드 + 포인트 별

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 간편 결제, 적립
- **무드 설명**: Naver Green 머니 카드 + 흰 캔버스 + 포인트 강조. Naver 패밀리 톤 안에서 결제에 특화.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~18px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Naver Green (NaverPay 공유) */
  --color-primary-50:  #E0F8EC;
  --color-primary-100: #B2EFD0;
  --color-primary-200: #6BE3A4;
  --color-primary-300: #2ED884;
  --color-primary-400: #08CE69;
  --color-primary-500: #03C75A;  /* Naver Green */
  --color-primary-600: #02A848;
  --color-primary-700: #018236;
  --color-primary-800: #015D26;
  --color-primary-900: #003917;

  /* Secondary */
  --color-secondary-500: #222222;

  /* Point gold */
  --color-point: #FFB800;     /* 적립 포인트 별 */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #F0F0F0;
  --color-neutral-300:  #E5E5E5;
  --color-neutral-500:  #C7C7C7;
  --color-neutral-700:  #888888;
  --color-neutral-800:  #555555;
  --color-neutral-900:  #222222;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F8EC;
  --color-success-fg: #03C75A;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #FFB800;
  --color-error-bg:   #FFE5E5;
  --color-error-fg:   #FF3838;
  --color-info-bg:    #E0F4FE;
  --color-info-fg:    #1EBCD2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(34,34,34,0.50);

  /* Text */
  --text-primary:    #222222;
  --text-secondary:  #555555;
  --text-tertiary:   #888888;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #F0F0F0;
  --border-subtle:  #FAFAFA;
  --border-strong:  #E5E5E5;
  --border-focus:   #03C75A;
}

[data-theme="dark"] {
  --bg-base: #1A1A1A;
  --bg-subtle: #2D2D2D;
  --bg-elevated: #383838;
  --text-primary: #F5F5F5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: Nanum Square Neo / Nanum Square / Pretendard (OFL 폴백)
  - 영문: -apple-system / SF Pro
- **위계**:
  - Display: 48px / 800 / 1.1 / -0.025em
  - H1: 28px / 800 / 1.2 / -0.02em
  - H2: 20px / 700 / 1.27 / -0.015em
  - H3: 16px / 700 / 1.3 / -0.01em
  - Body Large: 15px / 500 / 1.5 / -0.005em
  - Body: 14px / 500 / 1.5 / -0.005em
  - Body Small: 13px / 500 / 1.43 / 0
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
- **Container**: max-width 480px (모바일 우선)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(3,199,90,0.30);
```

### ⑧ Iconography
- **스타일**: Outline + Filled
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 800 16px/1 'Nanum Square Neo', Pretendard, -apple-system, sans-serif;
  letter-spacing: -0.01em;
  border-radius: var(--radius-md);
  padding: 14px 18px;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 0; border-radius: var(--radius-md); padding: 14px 16px; font-size: 16px; font-family: inherit; }
.input:focus { outline: 2px solid var(--border-focus); outline-offset: -2px; }
```

**Card** (Money card 시그니처)
```css
.money-card {
  background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-400) 100%);
  color: #fff;
  border-radius: 18px;
  padding: 22px;
}
.money-card .label { font-size: 11px; font-weight: 700; opacity: 0.9; text-transform: uppercase; letter-spacing: 0.04em; }
.money-card .amount { font-size: 30px; font-weight: 800; letter-spacing: -0.025em; margin-top: 8px; }
.money-card .point { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 700; margin-top: 6px; }
.money-card .point::before { content: "⭐"; }

.card { background: var(--bg-base); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 14px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.point-tag   { background: #FFF4D6; color: #B89400; }
.point-tag::before { content: "⭐"; }
```

**Navigation**
```css
.topnav { padding: 12px 16px; display: flex; align-items: center; gap: 12px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .brand { font-weight: 900; color: var(--color-primary-500); font-size: 22px; letter-spacing: -0.025em; }
.topnav .brand .pay { color: var(--text-primary); font-size: 16px; font-weight: 800; }
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
1. money card 그라데이션 색을 brand green 외 다른 색으로 변경 금지
2. Naver Green 위 흰 텍스트 외 색 사용 금지
3. 'N pay' 워드마크의 N과 pay 폰트 weight 차이를 통일 금지
4. 본문 폰트 weight 400 이하 사용 금지
5. 적립 포인트 색을 brand green과 동일하게 통일 금지 — 별도 gold 보존

### ⑫ 시그니처 적용 예시 (Mobile home)

```html
<style>
  body { margin: 0; font-family: 'Nanum Square Neo', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #222; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 14px 18px; display: flex; align-items: center; gap: 8px; }
  .topbar .brand { font-weight: 900; color: #03C75A; font-size: 24px; letter-spacing: -0.025em; }
  .topbar .brand .pay { color: #222; font-size: 18px; font-weight: 800; margin-left: 4px; }
  .home { padding: 8px 18px 20px; display: flex; flex-direction: column; gap: 12px; }
  .money-card { background: linear-gradient(135deg, #03C75A 0%, #08CE69 100%); color: #fff; border-radius: 22px; padding: 24px 22px; }
  .money-card .label { font-size: 12px; font-weight: 700; opacity: 0.95; text-transform: uppercase; letter-spacing: 0.04em; }
  .money-card .amount { font-size: 34px; font-weight: 800; letter-spacing: -0.025em; margin-top: 12px; }
  .money-card .point { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); padding: 5px 12px; border-radius: 9999px; margin-top: 8px; font-size: 12px; font-weight: 700; }
  .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .actions .pay { background: #03C75A; color: #fff; border: 0; border-radius: 14px; padding: 16px; font-size: 16px; font-weight: 800; cursor: pointer; font-family: inherit; }
  .actions .send { background: #F0F0F0; color: #222; border: 0; border-radius: 14px; padding: 16px; font-size: 16px; font-weight: 800; cursor: pointer; font-family: inherit; }
  .recent { background: #fff; border: 1px solid #F0F0F0; border-radius: 14px; padding: 4px 0; }
  .recent h3 { margin: 14px 16px 8px; font-size: 14px; font-weight: 800; }
  .row { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; padding: 12px 16px; align-items: center; border-bottom: 1px solid #FAFAFA; }
  .row:last-child { border-bottom: 0; }
  .row .ic { width: 36px; height: 36px; border-radius: 50%; background: #E0F8EC; color: #03C75A; display: grid; place-items: center; font-weight: 800; font-size: 13px; }
  .row .name { font-size: 14px; font-weight: 700; }
  .row .meta { font-size: 11px; color: #888; margin-top: 2px; display: flex; gap: 6px; align-items: center; }
  .row .meta .point { background: #FFF4D6; color: #B89400; padding: 1px 6px; border-radius: 9999px; font-size: 10px; font-weight: 700; }
  .row .amt { font-size: 14px; font-weight: 800; }
  .row .amt.in { color: #03C75A; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">N <span class="pay">pay</span></span>
    <span style="margin-left:auto; font-size:18px;">🔔 ⓜ</span>
  </header>
  <main class="home">
    <div class="money-card">
      <div class="label">N Pay 머니</div>
      <div class="amount">128,400원</div>
      <div class="point">⭐ 적립 포인트 2,840P</div>
    </div>
    <div class="actions">
      <button class="pay">결제하기</button>
      <button class="send">송금</button>
    </div>
    <section class="recent">
      <h3>최근 결제</h3>
      <div class="row">
        <div class="ic">N</div>
        <div><div class="name">네이버 쇼핑</div><div class="meta"><span>5월 8일</span><span class="point">+240P</span></div></div>
        <div class="amt">- 24,000원</div>
      </div>
      <div class="row">
        <div class="ic">☕</div>
        <div><div class="name">스타벅스 강남점</div><div class="meta"><span>5월 7일</span><span class="point">+62P</span></div></div>
        <div class="amt">- 6,200원</div>
      </div>
      <div class="row">
        <div class="ic">충</div>
        <div><div class="name">머니 충전</div><div class="meta">5월 5일 · 자동</div></div>
        <div class="amt in">+ 100,000원</div>
      </div>
    </section>
  </main>
</div>
```
