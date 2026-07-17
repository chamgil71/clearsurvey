---
brand: Wise
brand_ko: 와이즈
slug: wise
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#9FE870"
primary_color_name: "Wise Bright Green"
mood:
  - 모던
  - 글로벌
  - 투명

font_category: sans-serif
font_primary: Wise Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2011
last_major_revision: 2023
signature_keyword: "Bright Green과 Forest Navy의 글로벌 환전 송금 톤"

card_tokens: |
  {
    "light": { "bg": "#FAFAF7", "surface": "#FFFFFF", "border": "#E1DFD8", "fg": "#163300", "fg_muted": "#5A5A52", "accent": "#9FE870" },
    "dark":  { "bg": "#163300", "surface": "#1F4A04", "border": "#2D3D24", "fg": "#FFFFFF", "fg_muted": "#A4D78D", "accent": "#9FE870" }
  }

hero_html: |
  <div style="font-family:'Wise Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:24px;height:24px;background:var(--card-accent);border-radius:50%;color:#163300;display:grid;place-items:center;font-weight:900;font-size:13px;font-style:italic;">w</span>
      <strong style="font-size:14px;font-weight:700;">Wise</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;background:var(--card-bg);">
      <div style="font-size:11px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;font-weight:700;">USD 잔액</div>
      <div style="font-size:30px;font-weight:700;color:var(--card-fg);letter-spacing:-0.01em;">$ 1,284.<small style="color:var(--card-fg-muted);font-size:20px;">50</small></div>
      <div style="background:var(--card-accent);color:#163300;border-radius:14px;padding:14px;margin-top:6px;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;opacity:0.85;">환율 1 USD =</div>
        <div style="font-size:22px;font-weight:800;letter-spacing:-0.01em;margin-top:4px;">₩ 1,348.20</div>
        <div style="font-size:11px;font-weight:600;margin-top:4px;">실시간 중간환율 · 수수료 $0.42</div>
      </div>
      <button style="background:var(--card-accent);color:#163300;border:0;border-radius:9999px;padding:10px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;margin-top:6px;">송금하기 →</button>
    </div>
  </div>

sources:
  - https://wise.com/
  - https://wise.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Wise (前 TransferWise)
- **한 줄 정체성**: 실시간 중간환율로 수수료를 절감하는, 글로벌 송금 핀테크
- **공식 디자인 철학**: "Money without borders — bright, transparent, fair"
- **시그니처 요소 1개**: Bright Green(#9FE870)과 Forest Navy(#163300)의 단호한 대비 + 친근한 'w' 마크

### ② 톤 & 무드
- **핵심 키워드 3개**: 모던, 글로벌, 투명
- **무드 설명**: 깊은 녹색 navy 배경에 형광 그린 액센트. 환율 정보가 명확하고 수수료가 솔직하게 드러난다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~9999px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Wise Bright Green (다크 캔버스 위 액센트)
     500 = 브랜드 그린 / 300~400 = hover 시 더 밝게 / 700~900 = 깊은 그린 틴트 bg */
  --color-primary-50:  #16280A;   /* hover / active 그린 틴트 bg (다크) */
  --color-primary-100: #1E3A0E;
  --color-primary-200: #2D571A;   /* 그린 틴트 border */
  --color-primary-300: #B8EF8E;   /* hover — 다크 위 더 밝게 */
  --color-primary-400: #9FE870;  /* Wise Bright Green */
  --color-primary-500: #9FE870;
  --color-primary-600: #ABE979;   /* hover (다크 위 밝게) */
  --color-primary-700: #C2F098;
  --color-primary-800: #DDF8C2;
  --color-primary-900: #F0FCE4;

  /* Secondary - Wise Forest Navy (elevated 브랜드 서피스) */
  --color-secondary-500: #163300;

  /* Neutral - 반전된 다크 램프 (Forest 그린 틴트 near-black) */
  --color-neutral-0:    #0E120A;
  --color-neutral-50:   #131810;
  --color-neutral-100:  #1A2114;
  --color-neutral-200:  #232C1B;
  --color-neutral-300:  #2D3D24;
  --color-neutral-500:  #6B7A5E;
  --color-neutral-700:  #A4D78D;
  --color-neutral-800:  #CDE7BD;
  --color-neutral-900:  #E8F0E2;
  --color-neutral-1000: #FFFFFF;

  /* Semantic (다크 위 가독) */
  --color-success-bg: #16280A;
  --color-success-fg: #9FE870;
  --color-warning-bg: #2E2110;
  --color-warning-fg: #F0B45A;
  --color-error-bg:   #2E1414;
  --color-error-fg:   #FF6B6B;
  --color-info-bg:    #102338;
  --color-info-fg:    #6BB0FF;

  /* Surface */
  --bg-base:     #0E120A;
  --bg-subtle:   #131810;
  --bg-elevated: #1A2114;
  --bg-overlay:  rgba(7,15,0,0.72);

  /* Text */
  --text-primary:    #E8F0E2;
  --text-secondary:  #A4D78D;
  --text-tertiary:   #6B7A5E;
  --text-on-primary: #163300;       /* green 위에는 navy */
  --text-disabled:   #4A5640;

  /* Border */
  --border-default: #2D3D24;
  --border-subtle:  #232C1B;
  --border-strong:  #3E5132;
  --border-focus:   #9FE870;
}

[data-theme="light"] {
  /* Primary - Wise Bright Green */
  --color-primary-50:  #F0FCE4;
  --color-primary-100: #DDF8C2;
  --color-primary-200: #C2F098;
  --color-primary-300: #ABE979;
  --color-primary-400: #9FE870;  /* Wise Bright Green */
  --color-primary-500: #9FE870;
  --color-primary-600: #7CC852;
  --color-primary-700: #5BA13A;
  --color-primary-800: #3F7726;
  --color-primary-900: #233F11;

  /* Secondary - Wise Forest Navy (배경) */
  --color-secondary-500: #163300;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAF7;
  --color-neutral-100:  #F0EFEA;
  --color-neutral-200:  #E1DFD8;
  --color-neutral-300:  #C2BFB3;
  --color-neutral-500:  #8E8B7E;
  --color-neutral-700:  #5A5A52;
  --color-neutral-800:  #2D3D24;
  --color-neutral-900:  #163300;     /* Forest Navy */
  --color-neutral-1000: #0A1F00;

  /* Semantic */
  --color-success-bg: #F0FCE4;
  --color-success-fg: #5BA13A;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FAFAF7;
  --bg-subtle:   #F0EFEA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(22,51,0,0.50);

  /* Text */
  --text-primary:    #163300;
  --text-secondary:  #5A5A52;
  --text-tertiary:   #8E8B7E;
  --text-on-primary: #163300;       /* green 위에는 navy */
  --text-disabled:   #C2BFB3;

  /* Border */
  --border-default: #E1DFD8;
  --border-subtle:  #F0EFEA;
  --border-strong:  #C2BFB3;
  --border-focus:   #9FE870;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Wise Sans (자체) — 폴백 -apple-system, Inter
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 64px / 700 / 1.05 / -0.02em
  - H1: 40px / 700 / 1.15 / -0.01em
  - H2: 26px / 700 / 1.25 / 0
  - H3: 18px / 700 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
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
- **Container**: max-width 1200px, 좌우 패딩 24px

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
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.60);
--shadow-xl: 0 16px 32px rgba(159,232,112,0.24);
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
  font: 700 15px/1 'Wise Sans', Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 22px;
  height: 48px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-300); }
.btn-secondary { background: var(--bg-elevated); color: var(--color-secondary-500); border: 1.5px solid var(--color-secondary-500); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1.5px solid var(--border-strong); border-radius: var(--radius-md); padding: 12px 16px; font-size: 16px; }
.input:focus { outline: none; border-color: var(--color-secondary-500); box-shadow: 0 0 0 2px rgba(159,232,112,0.30); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 20px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; text-transform: uppercase; letter-spacing: 0.04em; }
.tag-solid   { background: var(--color-primary-500); color: var(--color-secondary-500); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 16px 24px; display: flex; align-items: center; gap: 16px; background: var(--color-secondary-500); color: #fff; }
.topnav .brand { display: flex; align-items: center; gap: 6px; font-size: 18px; font-weight: 700; }
.topnav .brand .mark { width: 28px; height: 28px; border-radius: 50%; background: var(--color-primary-500); color: var(--color-secondary-500); display: grid; place-items: center; font-weight: 900; font-style: italic; font-size: 14px; }
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
1. Bright Green 위에 흰 텍스트 사용 금지 — Forest Navy 사용
2. brand green을 destructive 액션에 사용 금지
3. 환율/수수료를 작은 fontsize로 숨기지 말 것 — 투명성 핵심
4. Wise 'w' 마크를 임의 색 변경 금지
5. 본문에 채도 높은 그라데이션 배경 금지

### ⑫ 시그니처 적용 예시 (Send money)

```html
<style>
  body { margin: 0; font-family: 'Wise Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: #E8F0E2; background: #0E120A; }
  .topnav { padding: 16px 32px; background: #163300; color: #fff; display: flex; align-items: center; gap: 18px; }
  .topnav .brand { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; }
  .topnav .brand .mark { width: 30px; height: 30px; border-radius: 50%; background: #9FE870; color: #163300; display: grid; place-items: center; font-weight: 900; font-style: italic; font-size: 16px; }
  .topnav nav { display: flex; gap: 16px; font-size: 14px; }
  .layout { max-width: 720px; margin: 32px auto; padding: 0 24px; }
  .layout h1 { font-size: 36px; font-weight: 700; line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 24px; }
  .form { background: #1A2114; border: 1px solid #2D3D24; border-radius: 24px; padding: 24px; }
  .field { margin-bottom: 14px; }
  .field label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #A4D78D; margin-bottom: 6px; display: block; }
  .field .row { display: grid; grid-template-columns: 1fr 90px; gap: 8px; align-items: center; }
  .field input { background: #131810; border: 1.5px solid #2D3D24; border-radius: 12px; padding: 14px 16px; font-size: 22px; font-weight: 700; font-family: inherit; color: #E8F0E2; }
  .field input:focus { outline: none; border-color: #9FE870; box-shadow: 0 0 0 2px rgba(159,232,112,0.30); }
  .field .currency { background: #232C1B; border-radius: 12px; padding: 14px; text-align: center; font-weight: 700; font-size: 16px; }
  .summary { background: #163300; color: #fff; border-radius: 16px; padding: 18px 20px; margin: 18px 0; }
  .summary .row { display: flex; justify-content: space-between; padding: 4px 0; font-size: 13px; }
  .summary .row.total { font-size: 18px; font-weight: 700; padding-top: 8px; border-top: 1px solid #2D3D24; margin-top: 8px; }
  .summary .row .green { color: #9FE870; font-weight: 700; }
  .send { background: #9FE870; color: #163300; border: 0; border-radius: 9999px; padding: 16px; font-size: 16px; font-weight: 800; cursor: pointer; width: 100%; font-family: inherit; }
</style>

<header class="topnav">
  <div class="brand"><div class="mark">w</div>Wise</div>
  <nav><a>Send</a><a>Receive</a><a>Convert</a><a>Card</a></nav>
</header>

<main class="layout">
  <h1>송금하기</h1>
  <div class="form">
    <div class="field">
      <label>보낼 금액</label>
      <div class="row">
        <input value="1000.00"/>
        <div class="currency">🇺🇸 USD</div>
      </div>
    </div>
    <div class="field">
      <label>받을 금액</label>
      <div class="row">
        <input value="1,348,200"/>
        <div class="currency">🇰🇷 KRW</div>
      </div>
    </div>
    <div class="summary">
      <div class="row"><span>실시간 중간환율 1 USD</span><span class="green">₩ 1,348.20</span></div>
      <div class="row"><span>수수료</span><span>$ 4.20</span></div>
      <div class="row total"><span>총 차감액</span><span>$ 1,004.20</span></div>
    </div>
    <button class="send">계속 →</button>
  </div>
</main>
```
