---
brand: Venmo
brand_ko: 벤모
slug: venmo
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - fintech
  - social
  - consumer

color_tone: cool
primary_color_hex: "#3D95CE"
primary_color_name: "Venmo Blue"
mood:
  - 친근함
  - 소셜
  - 송금

font_category: sans-serif
font_primary: Venmo Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2009
last_major_revision: 2024
signature_keyword: "Venmo Blue 워드마크와 송금 피드의 소셜 결제 톤"

hero_html: |
  <div style="font-family:'Venmo Sans',Inter,'Pretendard',-apple-system,sans-serif;background:#FFFFFF;color:#0A1929;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#3D95CE;color:#fff;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:800;letter-spacing:-0.02em;">venmo</strong>
      <span style="margin-left:auto;font-size:12px;">$ 284.50</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:#F5F5F5;border-radius:14px;padding:12px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#3D95CE,#00D54B);"></div>
          <div style="font-size:12px;line-height:1.3;"><strong>Mina</strong> paid <strong>Joon</strong></div>
          <div style="margin-left:auto;font-size:13px;font-weight:700;color:#0A1929;">$24</div>
        </div>
        <div style="font-size:12px;color:#0A1929;line-height:1.4;">🍕 점심값 + 커피</div>
        <div style="display:flex;gap:14px;margin-top:6px;font-size:11px;color:#73808E;">
          <span>♡ 3</span><span>💬 2</span><span>5월 8일</span>
        </div>
      </div>
      <div style="background:#F5F5F5;border-radius:14px;padding:12px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#FF7B72,#3D95CE);"></div>
          <div style="font-size:12px;line-height:1.3;"><strong>Dave</strong> paid <strong>Mina</strong></div>
          <div style="margin-left:auto;font-size:13px;font-weight:700;color:#00D54B;">+ $40</div>
        </div>
        <div style="font-size:12px;color:#0A1929;">🎁 생일선물 갹출</div>
      </div>
    </div>
  </div>

sources:
  - https://venmo.com/
  - https://venmo.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Venmo (PayPal)
- **한 줄 정체성**: 친구끼리 송금하는 소셜 페이먼트 — 미국 P2P 결제 표준
- **공식 디자인 철학**: "Pay with personality — social, friendly, fast"
- **시그니처 요소 1개**: Venmo Blue(#3D95CE) 워드마크 + 송금 내역에 따라붙는 emoji + 소셜 피드

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 소셜, 송금
- **무드 설명**: 흰 캔버스에 Venmo Blue 헤더, 송금 내역이 SNS 피드처럼 표시. 결제가 사회적 활동.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~16px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Venmo Blue */
  --color-primary-50:  #E5F0F8;
  --color-primary-100: #BCD9EB;
  --color-primary-200: #8DBEDA;
  --color-primary-300: #5EA3C9;
  --color-primary-400: #4596C9;
  --color-primary-500: #3D95CE;  /* Venmo Blue */
  --color-primary-600: #2C7CB0;
  --color-primary-700: #1F608B;
  --color-primary-800: #144666;
  --color-primary-900: #0A2C42;

  /* Secondary - Venmo Cobalt (legacy) */
  --color-secondary-500: #008CFF;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FB;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #C7CDD3;
  --color-neutral-500:  #A2ABB5;
  --color-neutral-700:  #73808E;
  --color-neutral-800:  #344654;
  --color-neutral-900:  #0A1929;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DDFCEA;
  --color-success-fg: #00D54B;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F0F8;
  --color-info-fg:    #3D95CE;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(10,25,41,0.50);

  /* Text */
  --text-primary:    #0A1929;
  --text-secondary:  #73808E;
  --text-tertiary:   #A2ABB5;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7CDD3;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F5F5F5;
  --border-strong:  #C7CDD3;
  --border-focus:   #3D95CE;
}

[data-theme="dark"] {
  --bg-base: #0A1929;
  --bg-subtle: #15263A;
  --bg-elevated: #1F344F;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Venmo Sans / Inter (OFL 폴백) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 32px / 700 / 1.15 / -0.01em
  - H2: 22px / 700 / 1.27 / 0
  - H3: 17px / 700 / 1.3 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
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
--shadow-sm: 0 1px 2px rgba(10,25,41,0.06);
--shadow-md: 0 4px 12px rgba(10,25,41,0.10);
--shadow-lg: 0 8px 24px rgba(10,25,41,0.14);
--shadow-xl: 0 16px 32px rgba(61,149,206,0.18);
```

### ⑧ Iconography
- **스타일**: Outline + Emoji (송금에 emoji 적극)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor + 시스템 emoji

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 'Venmo Sans', Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 22px;
  height: 44px;
  display: inline-flex; align-items: center; gap: 6px;
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
.input { background: var(--bg-subtle); border: 0; border-radius: var(--radius-md); padding: 12px 14px; font-size: 15px; }
.input:focus { outline: 2px solid var(--border-focus); outline-offset: -2px; }
```

**Card** (Activity card)
```css
.card { background: var(--bg-subtle); border-radius: var(--radius-lg); padding: 14px; }
.card-elevated { background: var(--bg-elevated); box-shadow: var(--shadow-md); }
.card-outlined { background: var(--bg-base); border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
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
1. brand blue를 destructive 액션에 사용 금지
2. 송금 description에서 emoji 제거 금지 — Venmo의 사회적 톤 핵심
3. venmo 워드마크를 대문자로 변경 금지 — 소문자 워드마크가 표준
4. 활동 피드를 단순 거래 리스트로 단조롭게 표시 금지 — 좋아요/댓글이 있어야 함
5. 본문에 채도 높은 그라데이션 배경 금지

### ⑫ 시그니처 적용 예시 (Activity feed)

```html
<style>
  body { margin: 0; font-family: 'Venmo Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: #0A1929; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { padding: 14px 16px; background: #3D95CE; color: #fff; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-size: 24px; font-weight: 800; letter-spacing: -0.02em; }
  .tabs { display: flex; gap: 0; padding: 0 16px; border-bottom: 1px solid #E5E5E5; }
  .tabs .tab { padding: 14px 18px; font-size: 14px; font-weight: 600; color: #73808E; cursor: pointer; }
  .tabs .tab.active { color: #3D95CE; border-bottom: 2px solid #3D95CE; }
  .feed { padding: 12px 16px 32px; display: flex; flex-direction: column; gap: 10px; }
  .item { background: #F5F5F5; border-radius: 16px; padding: 14px; }
  .row1 { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .row1 .av { width: 36px; height: 36px; border-radius: 50%; }
  .row1 .who { font-size: 13px; line-height: 1.3; flex: 1; }
  .row1 .who strong { font-weight: 700; }
  .row1 .amt { font-size: 15px; font-weight: 800; }
  .row1 .amt.in { color: #00B33F; }
  .row1 .amt.out { color: #0A1929; }
  .desc { font-size: 14px; color: #0A1929; line-height: 1.4; margin-bottom: 8px; }
  .meta { display: flex; gap: 16px; font-size: 12px; color: #73808E; align-items: center; }
  .meta .when { margin-left: auto; }
  .pay-bar { position: sticky; bottom: 0; padding: 14px 16px 24px; background: #fff; border-top: 1px solid #E5E5E5; }
  .pay-bar button { background: #3D95CE; color: #fff; border: 0; border-radius: 9999px; padding: 16px; font-size: 16px; font-weight: 700; cursor: pointer; width: 100%; font-family: inherit; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">venmo</span>
    <span style="margin-left:auto; font-size:14px;">$ 284.50</span>
  </header>
  <div class="tabs">
    <div class="tab active">친구</div>
    <div class="tab">전체</div>
  </div>
  <div class="feed">
    <div class="item">
      <div class="row1">
        <div class="av" style="background:linear-gradient(135deg,#3D95CE,#00D54B);"></div>
        <div class="who"><strong>Mina</strong> paid <strong>Joon</strong></div>
        <div class="amt out">$24.00</div>
      </div>
      <div class="desc">🍕 점심값 + 커피</div>
      <div class="meta"><span>♡ 3</span><span>💬 2</span><span class="when">5월 8일 · 12:42</span></div>
    </div>
    <div class="item">
      <div class="row1">
        <div class="av" style="background:linear-gradient(135deg,#FF7B72,#3D95CE);"></div>
        <div class="who"><strong>Dave</strong> paid <strong>Mina</strong></div>
        <div class="amt in">+ $40.00</div>
      </div>
      <div class="desc">🎁 생일선물 갹출</div>
      <div class="meta"><span>♡ 5</span><span>💬 0</span><span class="when">5월 6일</span></div>
    </div>
    <div class="item">
      <div class="row1">
        <div class="av" style="background:linear-gradient(135deg,#FFC15B,#F65177);"></div>
        <div class="who"><strong>Soo</strong> paid <strong>Mina</strong></div>
        <div class="amt in">+ $12.50</div>
      </div>
      <div class="desc">☕ 커피값 (어제 빌린 거)</div>
      <div class="meta"><span>♡ 1</span><span>💬 0</span><span class="when">5월 5일</span></div>
    </div>
  </div>
  <div class="pay-bar"><button>Pay or Request →</button></div>
</div>
```
