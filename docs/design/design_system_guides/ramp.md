---
brand: Ramp
brand_ko: 램프
slug: ramp
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - enterprise

color_tone: warm
primary_color_hex: "#FFE45E"
primary_color_name: "Ramp Yellow"
mood:
  - B2B카드
  - 굵은산세리프
  - 옐로액센트

font_category: sans-serif
font_primary: Aeonik
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2019
last_major_revision: 2024
signature_keyword: "옐로(#FFE45E) 액센트 + 굵은 산세리프 헤드라인 + 검정 캔버스 옵션의 B2B 비용관리"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F7F7", "border": "#EFEFEF", "fg": "#0E0E0E", "fg_muted": "#7A7A7A", "accent": "#FFE45E" },
    "dark":  { "bg": "#0E0E0E", "surface": "#1A1A1A", "border": "#2A2A2A", "fg": "#FFFFFF", "fg_muted": "#B5B5B5", "accent": "#FFE45E" }
  }

hero_html: |
  <div style="font-family:Aeonik,Inter,'Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <span style="display:inline-block;width:14px;height:14px;border-radius:3px;background:var(--card-accent);"></span>
      <strong style="font-size:13px;font-weight:800;letter-spacing:-0.02em;">Ramp</strong>
    </div>
    <div style="padding:0 14px 8px;display:flex;flex-direction:column;gap:6px;justify-content:center;">
      <div style="aspect-ratio:1.6/1;border-radius:8px;background:var(--card-accent);padding:10px;display:flex;flex-direction:column;justify-content:space-between;color:#0E0E0E;">
        <div style="font-size:8px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;">RAMP</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;font-size:9px;">
          <div style="font-weight:700;font-variant-numeric:tabular-nums;">4538 ••••</div>
          <div style="font-weight:800;">VISA</div>
        </div>
      </div>
    </div>
    <div style="background:var(--card-surface);border-top:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:14px;font-weight:800;font-variant-numeric:tabular-nums;">$8,420</strong>
      <span style="font-size:9px;color:var(--card-accent);margin-left:auto;font-weight:700;">1.5% cashback</span>
    </div>
  </div>

sources:
  - https://ramp.com/
  - https://ramp.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Ramp
- **한 줄 정체성**: 미국 B2B 비용관리·법인카드 — 시간과 돈을 아끼는 금융 자동화
- **공식 디자인 철학**: "Save time, save money" — 굵은 산세리프 + 옐로 액센트의 명확한 톤
- **시그니처 요소 1개**: Ramp Yellow(#FFE45E) 카드 + 검정/흰 캔버스 + 굵은 헤드라인 + 직각 카드. 컨슈머 핀테크의 라운드와 정반대의 B2B 강인함

### ② 톤 & 무드
- **핵심 키워드 3개**: B2B카드, 굵은산세리프, 옐로액센트
- **무드 설명**: 검정 또는 흰 캔버스. 강조는 형광 옐로. 카드는 sharp 8px, 폰트는 굵고 큰 산세리프. 정보는 빽빽하면서도 위계가 또렷.
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘 (대담 헤드라인)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (4~8px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Ramp Yellow */
  --color-primary-50:  #FFFCDC;
  --color-primary-100: #FFF7A8;
  --color-primary-200: #FFEF7A;
  --color-primary-300: #FFE94C;
  --color-primary-400: #FFE45E;
  --color-primary-500: #FFE45E;   /* Ramp Yellow */
  --color-primary-600: #E5C84A;
  --color-primary-700: #B89E2F;
  --color-primary-800: #80701F;
  --color-primary-900: #4D420F;

  /* Secondary - Cool Black (브랜드 다크) */
  --color-secondary-500: #0E0E0E;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F7;
  --color-neutral-100:  #EFEFEF;
  --color-neutral-200:  #DCDCDC;
  --color-neutral-300:  #B5B5B5;
  --color-neutral-500:  #7A7A7A;
  --color-neutral-700:  #3A3A3A;
  --color-neutral-800:  #1F1F1F;
  --color-neutral-900:  #0E0E0E;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F4E2;
  --color-success-fg: #1A8233;
  --color-warning-bg: #FFF5DA;
  --color-warning-fg: #8C6A00;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #C72E1A;
  --color-info-bg:    #E8F0FB;
  --color-info-fg:    #2C70BE;

  /* Surface (Light default) */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,14,14,0.50);

  /* Text */
  --text-primary:    #0E0E0E;
  --text-secondary:  #3A3A3A;
  --text-tertiary:   #7A7A7A;
  --text-on-primary: #0E0E0E;       /* Yellow 위 검정 */
  --text-disabled:   #B5B5B5;

  /* Border */
  --border-default: #EFEFEF;
  --border-subtle:  #F7F7F7;
  --border-strong:  #DCDCDC;
  --border-focus:   #0E0E0E;
}

[data-theme="dark"] {
  --bg-base: #0E0E0E;
  --bg-subtle: #1A1A1A;
  --bg-elevated: #1F1F1F;
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255,255,255,0.78);
  --text-tertiary: rgba(255,255,255,0.55);
  --border-default: rgba(255,255,255,0.10);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Aeonik (Cofo Type) / Inter 폴백
  - 코드/숫자: IBM Plex Mono tabular-nums
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 96px / 800 / 0.95 / -0.04em (랜딩 헤드라인)
  - H1: 48px / 700 / 1.05 / -0.02em
  - H2: 28px / 700 / 1.2 / -0.01em
  - H3: 18px / 600 / 1.35 / 0
  - Body Large: 18px / 400 / 1.55 / 0
  - Body: 15px / 400 / 1.5 / 0
  - Body Small: 13px / 500 / 1.4 / 0
  - Caption: 11px / 700 / 1.3 / 0.08em uppercase
  - Numeric: 17px / 700 tabular-nums

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 36px;
  --space-2xl: 56px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 10px;
--radius-xl: 14px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(14,14,14,0.06);
--shadow-md: 0 4px 12px rgba(14,14,14,0.08);
--shadow-lg: 0 12px 28px rgba(14,14,14,0.12);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선) — 데이터 시각화는 굵게
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Aeonik, Inter, sans-serif; border-radius: 6px; padding: 13px 22px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #0E0E0E; color: #fff; }
.btn-secondary:hover { background: #1F1F1F; }
.btn-outline { background: transparent; color: var(--text-primary); border: 1.5px solid var(--text-primary); }
.btn-ghost { background: transparent; color: var(--text-primary); text-decoration: underline; padding: 0; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-yellow-cta { background: var(--color-primary-500); color: #0E0E0E; padding: 16px 26px; font-size: 15px; }
```

**Input**
```css
.input { background: #fff; border: 1.5px solid var(--border-strong); border-radius: 6px; padding: 12px 14px; color: var(--text-primary); font: 400 15px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--text-primary); box-shadow: 0 0 0 3px rgba(14,14,14,0.10); }
```

**Card (Stat / Card)**
```css
.stat-card { background: #fff; border: 1px solid var(--border-default); border-radius: 10px; padding: 22px; }
.stat-card .label { font: 600 11px/1 inherit; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 10px; }
.stat-card .value { font: 700 36px/1 inherit; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; }
.stat-card .delta { font: 700 13px/1 inherit; color: var(--color-success-fg); margin-top: 8px; font-variant-numeric: tabular-nums; }
.card-cc { background: var(--color-primary-500); color: var(--text-on-primary); border-radius: 8px; padding: 22px; min-height: 200px; display: flex; flex-direction: column; justify-content: space-between; }
.card-cc .label { font: 800 11px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; }
.card-cc .row { display: flex; justify-content: space-between; align-items: flex-end; font: 700 13px/1 inherit; font-variant-numeric: tabular-nums; }
.tx-row { display: grid; grid-template-columns: 32px 1fr auto auto; gap: 14px; padding: 14px 18px; background: #fff; border: 1px solid var(--border-default); border-radius: 6px; align-items: center; cursor: pointer; }
.tx-row:hover { background: var(--bg-subtle); }
.tx-row .who { font: 600 14px/1.3 inherit; }
.tx-row .merchant { font: 500 12px/1.3 inherit; color: var(--text-tertiary); }
.tx-row .amount { font: 700 15px/1 inherit; font-variant-numeric: tabular-nums; }
.card { background: #fff; border: 1px solid var(--border-default); border-radius: 10px; padding: 22px; }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 4px; font: 700 11px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-cashback   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-pending    { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.tag-approved   { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-card-active{ background: #0E0E0E; color: var(--color-primary-500); }
.tag-policy     { background: var(--color-info-bg); color: var(--color-info-fg); }
```

**Navigation (Side rail)**
```css
.rail { width: 240px; background: var(--bg-subtle); padding: 20px 12px; height: 100vh; border-right: 1px solid var(--border-default); }
.rail .brand { display: flex; align-items: center; gap: 8px; font: 800 22px/1 inherit; padding: 8px 14px; margin-bottom: 24px; letter-spacing: -0.01em; }
.rail .brand .sq { width: 16px; height: 16px; background: var(--color-primary-500); border-radius: 3px; }
.rail .item { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 6px; font: 500 14px/1.3 inherit; color: var(--text-secondary); cursor: pointer; }
.rail .item:hover { background: #fff; color: var(--text-primary); }
.rail .item.active { background: var(--text-primary); color: #fff; }
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
1. 옐로 외 액센트 색 추가 금지 — single accent
2. 라운드 풀필 카드 사용 금지 — 4~10px sharp
3. 옐로 위에 흰색 텍스트 사용 금지 — 검정만
4. 헤드라인을 얇은 라이트 웨이트로 사용 금지 — 굵은 산세리프가 정체성
5. 잔액·숫자를 비례폰트로 표기 금지 — tabular-nums

### ⑫ 시그니처 적용 예시 (Dashboard)
```html
<style>
  body { margin: 0; font-family: Aeonik, Inter, 'Pretendard', sans-serif; background: #FFFFFF; color: #0E0E0E; min-height: 100vh; }
  .layout { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .rail { background: #F7F7F7; padding: 22px 12px; border-right: 1px solid #EFEFEF; }
  .rail .brand { display: flex; align-items: center; gap: 8px; font: 800 22px/1 inherit; padding: 8px 14px; margin-bottom: 24px; letter-spacing: -0.02em; }
  .rail .brand .sq { width: 18px; height: 18px; background: #FFE45E; border-radius: 4px; }
  .rail .item { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 6px; font: 500 14px/1.3 inherit; color: #3A3A3A; cursor: pointer; margin-bottom: 2px; }
  .rail .item:hover { background: #fff; color: #0E0E0E; }
  .rail .item.active { background: #0E0E0E; color: #fff; }
  .main { padding: 32px 36px; }
  .main h1 { margin: 0 0 24px; font: 700 36px/1.05 inherit; letter-spacing: -0.02em; }
  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 28px; }
  .stat { background: #fff; border: 1px solid #EFEFEF; border-radius: 10px; padding: 20px; }
  .stat .label { font: 700 11px/1 inherit; letter-spacing: 0.12em; text-transform: uppercase; color: #7A7A7A; margin-bottom: 10px; }
  .stat .value { font: 700 32px/1 inherit; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; }
  .stat .delta { font: 700 13px/1 inherit; margin-top: 8px; font-variant-numeric: tabular-nums; }
  .stat .delta.up { color: #1A8233; }
  .stat .delta.down { color: #C72E1A; }
  .row-2 { display: grid; grid-template-columns: 1fr 320px; gap: 24px; }
  .left h2 { font: 700 20px/1.2 inherit; margin: 0 0 14px; letter-spacing: -0.005em; }
  .tx-list { display: flex; flex-direction: column; gap: 6px; }
  .tx { display: grid; grid-template-columns: 36px 1fr auto auto; gap: 14px; padding: 14px 18px; background: #fff; border: 1px solid #EFEFEF; border-radius: 6px; align-items: center; cursor: pointer; }
  .tx:hover { background: #FAFAFA; }
  .tx .av { width: 36px; height: 36px; border-radius: 50%; background: #EFEFEF; display: grid; place-items: center; font: 700 13px/1 inherit; color: #3A3A3A; }
  .tx .info strong { font: 600 14px/1.3 inherit; display: block; }
  .tx .info .m { font: 500 12px/1.3 inherit; color: #7A7A7A; margin-top: 2px; }
  .tx .tag { padding: 3px 8px; border-radius: 4px; font: 700 10px/1.4 inherit; letter-spacing: 0.06em; text-transform: uppercase; }
  .tx .tag.policy { background: #E8F0FB; color: #2C70BE; }
  .tx .tag.approved { background: #E0F4E2; color: #1A8233; }
  .tx .amount { font: 700 16px/1 inherit; font-variant-numeric: tabular-nums; }
  .right .card-cc { background: #FFE45E; color: #0E0E0E; border-radius: 10px; padding: 22px; min-height: 220px; display: flex; flex-direction: column; justify-content: space-between; }
  .right .card-cc .label { font: 800 11px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; }
  .right .card-cc .balance { font: 700 32px/1 inherit; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; margin-top: 6px; }
  .right .card-cc .row { display: flex; justify-content: space-between; align-items: flex-end; font: 700 13px/1 inherit; font-variant-numeric: tabular-nums; }
  .right .perks { margin-top: 14px; background: #fff; border: 1px solid #EFEFEF; border-radius: 10px; padding: 18px; }
  .right .perks h3 { margin: 0 0 12px; font: 700 13px/1 inherit; letter-spacing: 0.04em; text-transform: uppercase; color: #7A7A7A; }
  .right .perks .row-p { display: flex; justify-content: space-between; font: 600 14px/1.4 inherit; padding: 8px 0; border-top: 1px solid #EFEFEF; }
  .right .perks .row-p:first-of-type { border-top: 0; }
  .right .perks .row-p .v { font-variant-numeric: tabular-nums; }
</style>

<div class="layout">
  <aside class="rail">
    <div class="brand"><div class="sq"></div>Ramp</div>
    <div class="item active">Dashboard</div>
    <div class="item">Cards</div>
    <div class="item">Transactions</div>
    <div class="item">Reimbursements</div>
    <div class="item">Bill Pay</div>
    <div class="item">Reports</div>
    <div class="item">Settings</div>
  </aside>
  <main class="main">
    <h1>Welcome back, Acme Inc.</h1>
    <div class="stats">
      <div class="stat"><div class="label">월간 지출</div><div class="value">$48,290</div><div class="delta up">+ 12% vs last month</div></div>
      <div class="stat"><div class="label">캐시백 (YTD)</div><div class="value">$3,124</div><div class="delta up">+ $128 today</div></div>
      <div class="stat"><div class="label">활성 카드</div><div class="value">142</div><div class="delta">All systems normal</div></div>
      <div class="stat"><div class="label">미승인 비용</div><div class="value">12</div><div class="delta down">3 over policy</div></div>
    </div>
    <div class="row-2">
      <section class="left">
        <h2>최근 거래</h2>
        <div class="tx-list">
          <div class="tx"><div class="av">JM</div><div class="info"><strong>Jenna Mendez</strong><div class="m">United Airlines · Travel</div></div><div class="tag policy">Within policy</div><div class="amount">$842.20</div></div>
          <div class="tx"><div class="av">RK</div><div class="info"><strong>Ryo Kim</strong><div class="m">AWS · Cloud</div></div><div class="tag approved">Approved</div><div class="amount">$1,240.00</div></div>
          <div class="tx"><div class="av">AT</div><div class="info"><strong>Ana Torres</strong><div class="m">Notion Labs · Software</div></div><div class="tag approved">Approved</div><div class="amount">$96.00</div></div>
          <div class="tx"><div class="av">DK</div><div class="info"><strong>Daniel Khan</strong><div class="m">Equinox · Wellness</div></div><div class="tag policy">Within policy</div><div class="amount">$184.00</div></div>
        </div>
      </section>
      <aside class="right">
        <div class="card-cc">
          <div class="label">RAMP CARD</div>
          <div><div class="balance">$8,420<span style="font-size:14px;font-weight:600;color:#0E0E0E;opacity:0.7;margin-left:6px;">.00</span></div></div>
          <div class="row"><div>4538 ••••</div><div>VISA</div></div>
        </div>
        <div class="perks">
          <h3>This month</h3>
          <div class="row-p"><span>리워드</span><span class="v">$128.40</span></div>
          <div class="row-p"><span>vendor 협상으로 절약</span><span class="v">$2,142</span></div>
          <div class="row-p"><span>policy 위반 차단</span><span class="v">14건</span></div>
        </div>
      </aside>
    </div>
  </main>
</div>
```
