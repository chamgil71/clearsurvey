---
brand: Mercury
brand_ko: 머큐리
slug: mercury
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - fintech
  - enterprise

color_tone: cool
primary_color_hex: "#7E5DEC"
primary_color_name: "Mercury Purple"
mood:
  - 모던 핀테크
  - 스타트업
  - 정밀

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2024
signature_keyword: "보라 액센트와 차분한 데이터 테이블의 스타트업 비즈니스 뱅킹 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F4F0FE", "border": "#ECECEC", "fg": "#1B1B1F", "fg_muted": "#71717A", "accent": "#7E5DEC" },
    "dark":  { "bg": "#09090B", "surface": "#27272A", "border": "#3F3F46", "fg": "#FAFAFA", "fg_muted": "#A1A1AA", "accent": "#A78BF1" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);border-radius:5px;"></span>
      <strong style="font-size:14px;font-weight:700;">Mercury</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">acme inc.</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <div style="background:var(--card-surface);border:1px solid #4B3B7A;border-radius:10px;padding:10px;">
          <div style="font-size:9px;color:#C5B0F7;text-transform:uppercase;letter-spacing:0.04em;font-weight:700;">Checking</div>
          <div style="font-size:18px;font-weight:700;color:var(--card-fg);">$ 248,420</div>
        </div>
        <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:10px;">
          <div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;font-weight:700;">Treasury</div>
          <div style="font-size:18px;font-weight:700;color:var(--card-fg);">$ 1.2M</div>
        </div>
      </div>
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:0;font-size:11px;">
        <div style="display:grid;grid-template-columns:24px 1fr 70px;gap:8px;align-items:center;padding:8px 10px;border-bottom:1px solid #27272A;">
          <span style="color:#4ADE80;">↙</span>
          <span><strong>Stripe payouts</strong><div style="color:var(--card-fg-muted);font-size:10px;">5월 8일 · ACH</div></span>
          <strong style="color:#4ADE80;">+ $24,840</strong>
        </div>
        <div style="display:grid;grid-template-columns:24px 1fr 70px;gap:8px;align-items:center;padding:8px 10px;">
          <span style="color:var(--card-fg-muted);">↗</span>
          <span><strong>AWS</strong><div style="color:var(--card-fg-muted);font-size:10px;">5월 7일 · 카드</div></span>
          <strong>- $1,284</strong>
        </div>
      </div>
      <button style="background:var(--card-accent);color:#09090B;border:0;border-radius:8px;padding:8px 14px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;margin-top:6px;">송금하기 →</button>
    </div>
  </div>

sources:
  - https://mercury.com/
  - https://mercury.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Mercury
- **한 줄 정체성**: 스타트업과 테크 기업을 위한 모던 비즈니스 뱅킹
- **공식 디자인 철학**: "Banking that does more — for ambitious companies"
- **시그니처 요소 1개**: Mercury Purple(#7E5DEC) + 깔끔한 데이터 테이블 + 행성 모티프 그라데이션

### ② 톤 & 무드
- **핵심 키워드 3개**: 모던 핀테크, 스타트업, 정밀
- **무드 설명**: 흰 캔버스에 보라 액센트 + 정확한 데이터 테이블. 큰 자금이 차분하게 정렬된 비즈니스 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 데이터/거래
- **모서리 성향**: Soft (8~12px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Mercury Purple (dark-tuned) */
  --color-primary-50:  #1E1633;
  --color-primary-100: #281756;
  --color-primary-200: #3D267E;
  --color-primary-300: #5236AC;
  --color-primary-400: #6849D5;
  --color-primary-500: #8E70EE;  /* Mercury Purple on dark */
  --color-primary-600: #A78BF1;
  --color-primary-700: #C5B0F7;
  --color-primary-800: #E1D5FB;
  --color-primary-900: #F4F0FE;

  /* Secondary */
  --color-secondary-500: #FAFAFA;

  /* Neutral (inverted ramp) */
  --color-neutral-0:    #09090B;
  --color-neutral-50:   #18181B;
  --color-neutral-100:  #27272A;
  --color-neutral-200:  #3F3F46;
  --color-neutral-300:  #52525B;
  --color-neutral-500:  #71717A;
  --color-neutral-700:  #A1A1AA;
  --color-neutral-800:  #D4D4D8;
  --color-neutral-900:  #F4F4F5;
  --color-neutral-1000: #FAFAFA;

  /* Semantic */
  --color-success-bg: #14321F;
  --color-success-fg: #4ADE80;
  --color-warning-bg: #3A2C0A;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #3A1518;
  --color-error-fg:   #F87171;
  --color-info-bg:    #1E1633;
  --color-info-fg:    #A78BF1;

  /* Surface */
  --bg-base:     #09090B;
  --bg-subtle:   #18181B;
  --bg-elevated: #27272A;
  --bg-overlay:  rgba(0,0,0,0.65);

  /* Text */
  --text-primary:    #FAFAFA;
  --text-secondary:  #A1A1AA;
  --text-tertiary:   #71717A;
  --text-on-primary: #09090B;
  --text-disabled:   #52525B;

  /* Border */
  --border-default: #3F3F46;
  --border-subtle:  #27272A;
  --border-strong:  #52525B;
  --border-focus:   #A78BF1;
}

[data-theme="light"] {
  /* Primary - Mercury Purple */
  --color-primary-50:  #F4F0FE;
  --color-primary-100: #E1D5FB;
  --color-primary-200: #C5B0F7;
  --color-primary-300: #A78BF1;
  --color-primary-400: #8E70EE;
  --color-primary-500: #7E5DEC;  /* Mercury Purple */
  --color-primary-600: #6849D5;
  --color-primary-700: #5236AC;
  --color-primary-800: #3D267E;
  --color-primary-900: #281756;

  /* Secondary */
  --color-secondary-500: #1B1B1F;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F5;
  --color-neutral-200:  #ECECEC;
  --color-neutral-300:  #D4D4D8;
  --color-neutral-500:  #A1A1AA;
  --color-neutral-700:  #71717A;
  --color-neutral-800:  #3F3F46;
  --color-neutral-900:  #1B1B1F;
  --color-neutral-1000: #09090B;

  /* Semantic */
  --color-success-bg: #DCFCE7;
  --color-success-fg: #16A34A;
  --color-warning-bg: #FEF3C7;
  --color-warning-fg: #CA8A04;
  --color-error-bg:   #FEE2E2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #F4F0FE;
  --color-info-fg:    #7E5DEC;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(27,27,31,0.50);

  /* Text */
  --text-primary:    #1B1B1F;
  --text-secondary:  #71717A;
  --text-tertiary:   #A1A1AA;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #D4D4D8;

  /* Border */
  --border-default: #ECECEC;
  --border-subtle:  #F4F4F5;
  --border-strong:  #D4D4D8;
  --border-focus:   #7E5DEC;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노 (transactions): ui-monospace
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 32px / 600 / 1.15 / -0.01em
  - H2: 22px / 600 / 1.27 / 0
  - H3: 16px / 600 / 1.3 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

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
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.60);
--shadow-xl: 0 20px 48px rgba(126,93,236,0.35);
```

### ⑧ Iconography
- **스타일**: Outline (정밀)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 13px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #09090B; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #09090B; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 8px 12px; font-size: 14px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(167,139,241,0.30); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #09090B; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .logo { width: 24px; height: 24px; background: var(--color-primary-500); border-radius: 6px; }
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
1. 거래 데이터에 컬러풀 그래프 사용 금지 — purple 단일 라인이 시그니처
2. brand purple을 destructive 액션에 사용 금지
3. 큰 금액(잔액)을 작은 fontsize로 표시 금지 — 큰 letter-spacing tight 처리
4. 행성 모티프를 임의 회전/변형 금지
5. 본문 line-height 1.4 미만 금지 — 데이터 가독성

### ⑫ 시그니처 적용 예시 (Dashboard)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #FAFAFA; background: #09090B; }
  .topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: #18181B; border-bottom: 1px solid #3F3F46; }
  .topnav .logo { width: 26px; height: 26px; background: #8E70EE; border-radius: 6px; }
  .topnav strong { font-weight: 700; font-size: 16px; }
  .topnav nav { display: flex; gap: 16px; font-size: 13px; color: #A1A1AA; }
  .layout { max-width: 1100px; margin: 24px auto; padding: 0 24px; display: grid; grid-template-columns: 1fr; gap: 16px; }
  .accounts { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  .account { background: #18181B; border: 1px solid #3F3F46; border-radius: 12px; padding: 16px; }
  .account.primary { background: #1E1633; border-color: #4B3B7A; }
  .account .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #A1A1AA; }
  .account.primary .label { color: #C5B0F7; }
  .account .num { font-size: 28px; font-weight: 700; line-height: 1.1; margin: 8px 0 4px; letter-spacing: -0.01em; }
  .account .meta { font-size: 11px; color: #A1A1AA; }
  .table { background: #18181B; border: 1px solid #3F3F46; border-radius: 12px; overflow: hidden; }
  .table h3 { margin: 0; padding: 14px 16px; font-size: 13px; font-weight: 700; border-bottom: 1px solid #27272A; }
  .row { display: grid; grid-template-columns: 28px 1fr 120px 100px 120px; gap: 14px; padding: 12px 16px; border-bottom: 1px solid #27272A; align-items: center; font-size: 13px; }
  .row:last-child { border-bottom: 0; }
  .row .ic { width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 13px; }
  .row .in-ic { background: #14321F; color: #4ADE80; }
  .row .out-ic { background: #27272A; color: #A1A1AA; }
  .row .who { font-weight: 600; }
  .row .meta { font-size: 11px; color: #A1A1AA; margin-top: 2px; }
  .row .amt { text-align: right; font-weight: 700; font-family: ui-monospace, monospace; }
  .row .amt.in { color: #4ADE80; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Mercury</strong>
  <span style="color:#A1A1AA; font-size:13px;">/ acme inc.</span>
  <nav><a>대시보드</a><a>거래</a><a>송금</a><a>카드</a></nav>
</header>

<main class="layout">
  <div class="accounts">
    <div class="account primary">
      <div class="label">Checking · ★ 4321</div>
      <div class="num">$ 248,420.<small style="color:#C5B0F7; font-size:18px;">42</small></div>
      <div class="meta">사용 가능</div>
    </div>
    <div class="account">
      <div class="label">Savings</div>
      <div class="num">$ 84,000.<small style="color:#A1A1AA; font-size:18px;">00</small></div>
      <div class="meta">3.5% APY</div>
    </div>
    <div class="account">
      <div class="label">Treasury</div>
      <div class="num">$ 1.24M</div>
      <div class="meta">5.2% 수익률 · 30일</div>
    </div>
  </div>
  <section class="table">
    <h3>최근 거래</h3>
    <div class="row">
      <div class="ic in-ic">↙</div>
      <div><div class="who">Stripe payouts</div><div class="meta">5월 8일 · ACH</div></div>
      <div style="font-size:11px; color:#A1A1AA; font-family: ui-monospace, monospace;">CHECKING</div>
      <span class="tag" style="background:#14321F; color:#4ADE80; padding:2px 8px; border-radius:6px; font-size:11px; font-weight:600;">완료</span>
      <div class="amt in">+ $24,840.50</div>
    </div>
    <div class="row">
      <div class="ic out-ic">↗</div>
      <div><div class="who">AWS</div><div class="meta">5월 7일 · 회사 카드</div></div>
      <div style="font-size:11px; color:#A1A1AA; font-family: ui-monospace, monospace;">CARD</div>
      <span class="tag" style="background:#27272A; color:#A1A1AA; padding:2px 8px; border-radius:6px; font-size:11px; font-weight:600;">완료</span>
      <div class="amt">- $1,284.00</div>
    </div>
    <div class="row">
      <div class="ic out-ic">↗</div>
      <div><div class="who">Notion · 팀 플랜</div><div class="meta">5월 5일 · 자동 결제</div></div>
      <div style="font-size:11px; color:#A1A1AA; font-family: ui-monospace, monospace;">CARD</div>
      <span class="tag" style="background:#27272A; color:#A1A1AA; padding:2px 8px; border-radius:6px; font-size:11px; font-weight:600;">완료</span>
      <div class="amt">- $480.00</div>
    </div>
  </section>
</main>
```
