---
brand: Toss Dark Mode
brand_ko: 토스 다크모드
slug: toss-dark-mode
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - fintech
  - consumer

color_tone: cool
primary_color_hex: "#4795FF"
primary_color_name: "Toss Blue (Dark)"
mood:
  - 절제
  - 침착
  - 신뢰

font_category: sans-serif
font_primary: Toss Product Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2015
last_major_revision: 2024
signature_keyword: "어두운 캔버스 위 단일 Toss Blue 발광 — 한국 핀테크 다크 표준"

hero_html: |
  <div style="font-family:'Toss Product Sans',Pretendard,-apple-system,sans-serif;background:#0F1115;color:#F2F4F6;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#0F1115;border-bottom:1px solid #21232A;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:800;color:#4795FF;letter-spacing:-0.025em;">toss</strong>
      <span style="margin-left:auto;font-size:11px;color:#8B95A1;">알림 ⓜ</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:12px;color:#B0B8C1;font-weight:600;">내 자산</div>
      <div style="font-size:30px;font-weight:800;letter-spacing:-0.025em;color:#F9FAFB;">₩ 12,840,000</div>
      <div style="background:#1A1D24;border:1px solid #21232A;border-radius:14px;padding:14px;margin-top:6px;">
        <div style="font-size:11px;color:#8B95A1;font-weight:600;margin-bottom:4px;">통합계좌 · 토스뱅크</div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:14px;font-weight:700;color:#F2F4F6;">자유</span>
          <strong style="font-size:18px;font-weight:800;color:#F2F4F6;">₩ 8,420,000</strong>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px;">
        <button style="background:#4795FF;color:#0F1115;border:0;border-radius:14px;padding:14px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;box-shadow:0 0 0 1px rgba(71,149,255,0.30), 0 8px 24px rgba(71,149,255,0.18);">송금</button>
        <button style="background:#21232A;color:#F2F4F6;border:0;border-radius:14px;padding:14px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;">받기</button>
      </div>
      <div style="background:#1A1D24;border:1px solid #21232A;border-radius:14px;padding:14px;margin-top:6px;">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:600;color:#E5E8EB;">
          <span>Joon에게 송금</span>
          <span style="color:#F2F4F6;font-weight:800;">- 24,000원</span>
        </div>
        <div style="font-size:11px;color:#8B95A1;margin-top:2px;">5월 8일 · 점심값</div>
      </div>
    </div>
  </div>

sources:
  - https://toss.im/
  - https://toss.tech/
  - https://www.tossbank.com/
  - https://toss.tech/article/tossteam-darkmode
---

### ① 브랜드 DNA
- **브랜드명**: Toss Dark Mode (토스 다크모드 — 비바리퍼블리카)
- **한 줄 정체성**: 어두운 캔버스에서도 절제된 단일 Toss Blue로 한 화면 한 액션을 유지하는 한국 핀테크 다크 표준
- **공식 디자인 철학**: "모두가 자유롭게 — 다크모드에서도 단순함의 끝까지"
- **시그니처 요소 1개**: 거의 검정에 가까운 네이비-차콜(#0F1115) 위, 톤을 한 단계 끌어올린 Toss Blue(#4795FF)가 단 한 곳에서만 발광하는 절제된 다크 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 절제, 침착, 신뢰
- **무드 설명**: 야간 사용·OLED 번인 회피·금융 정보 가독성을 우선한 거의 검정 캔버스. 라이트 모드의 흰색을 단순 반전하지 않고, surface를 3단계로 미세하게 들어 올려 카드와 본문을 구분. 강조 색은 한 화면에 한 번만.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 모바일 우선, 야간 시인성 확보를 위해 라이트 모드보다 줄간격 +0.02 정도 여유
- **모서리 성향**: Round (12~16px) — 라이트와 동일
- **평면성**: Flat — 그림자 대신 surface 명도 차로 elevation 표현

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Toss Blue (Dark용 한 단계 라이트) */
  --color-primary-50:  #0A1D3D;   /* dark bg-info */
  --color-primary-100: #0E2B5C;
  --color-primary-200: #133E84;
  --color-primary-300: #1F5BB8;
  --color-primary-400: #2C77DF;
  --color-primary-500: #4795FF;   /* Dark Toss Blue — 본 강조 */
  --color-primary-600: #6FAEFF;
  --color-primary-700: #97C6FF;
  --color-primary-800: #C2DCFF;
  --color-primary-900: #E8F2FF;

  /* Secondary - 명도가 들린 네이비 */
  --color-secondary-500: #B0B8C1;

  /* Neutral - Toss Dark Gray (cool 톤 유지) */
  --color-neutral-0:    #0A0C10;   /* 페이지 base보다 더 어두운 OLED 검정 */
  --color-neutral-50:   #0F1115;   /* page base */
  --color-neutral-100:  #15171C;   /* subtle */
  --color-neutral-200:  #1A1D24;   /* elevated */
  --color-neutral-300:  #21232A;   /* border default */
  --color-neutral-500:  #2C2F37;   /* border strong */
  --color-neutral-700:  #8B95A1;   /* text tertiary */
  --color-neutral-800:  #B0B8C1;   /* text secondary */
  --color-neutral-900:  #E5E8EB;   /* text near-primary */
  --color-neutral-1000: #F9FAFB;   /* text primary highlight */

  /* Semantic - 다크 배경에서 충분한 대비 확보 */
  --color-success-bg: #0F2E1C;
  --color-success-fg: #4ADE80;
  --color-warning-bg: #2E1F00;
  --color-warning-fg: #FFB547;
  --color-error-bg:   #2E1010;
  --color-error-fg:   #FF6B6B;
  --color-info-bg:    #0E2B5C;
  --color-info-fg:    #4795FF;

  /* Surface (3단계 elevation을 명도 차로) */
  --bg-base:     #0F1115;          /* 페이지 기본 */
  --bg-subtle:   #15171C;          /* 섹션 구분 */
  --bg-elevated: #1A1D24;          /* 카드 */
  --bg-overlay:  rgba(10,12,16,0.72);  /* 모달/드롭다운 */

  /* Text 위계 */
  --text-primary:    #F2F4F6;
  --text-secondary:  #B0B8C1;
  --text-tertiary:   #8B95A1;
  --text-on-primary: #0F1115;      /* Toss Blue 위는 다크 텍스트로 가독성 확보 */
  --text-disabled:   #4E5968;

  /* Border (저채도, 1단계 명도 차) */
  --border-default: #21232A;
  --border-subtle:  #15171C;
  --border-strong:  #2C2F37;
  --border-focus:   #4795FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Toss Product Sans (자체) — 폴백 -apple-system
  - 한글: **Pretendard (OFL)** — Toss가 표준화에 큰 영향
- **위계** (다크 본문은 같은 사이즈여도 시각 무게가 가벼우므로 weight를 1단계 살짝 올려 사용 권장):
  - Display: 56px / 800 / 1.05 / -0.025em
  - H1 (Title 1): 32px / 800 / 1.15 / -0.02em
  - H2 (Title 2): 24px / 700 / 1.25 / -0.015em
  - H3 (Title 3): 19px / 700 / 1.3 / -0.01em
  - Body Large (Body 1): 17px / 500 / 1.52 / -0.01em
  - Body (Body 2): 15px / 500 / 1.52 / -0.01em
  - Body Small (Body 3): 13px / 600 / 1.45 / -0.005em
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
다크모드는 그림자보다 **surface 명도 차**로 elevation을 표현. 그림자는 강조 액션의 발광 효과에만 절제적으로 사용.
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.45);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.55);
--shadow-xl: 0 0 0 1px rgba(71,149,255,0.30), 0 16px 32px rgba(71,149,255,0.18); /* primary glow */
```
- sm = 작은 토스트, md = 카드 hover, lg = 모달, xl = primary CTA 발광

### ⑧ Iconography
- **스타일**: Outline (Toss 자체)
- **Stroke 굵기**: 1.5~2px — 다크에서는 1.75px 권장 (얇은 선이 눌려 보임 방지)
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
  transition: background 100ms ease, box-shadow 150ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); box-shadow: var(--shadow-xl); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-400); }
.btn-primary:disabled { background: var(--bg-elevated); color: var(--text-disabled); box-shadow: none; }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); }
.btn-secondary:hover { background: var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #0F1115; }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  font-size: 16px;
  font-family: inherit;
  color: var(--text-primary);
  caret-color: var(--color-primary-500);
}
.input:focus { outline: 2px solid var(--border-focus); outline-offset: -2px; border-color: var(--border-focus); }
.input::placeholder { color: var(--text-tertiary); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { background: #1F222A; border-color: transparent; box-shadow: var(--shadow-md); }
.card-outlined { background: transparent; box-shadow: none; }
```

**Badge / Tag**
```css
.tag { padding: 2px 8px; border-radius: 9999px; font-size: 12px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-600); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); background: transparent; }
```

**Navigation (BottomNav 모바일)**
```css
.bottomnav { background: var(--bg-base); border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 8px 0; }
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
1. 라이트 톤을 단순 반전한 순흑(#000) 배경 금지 — 굵은 콘트라스트로 본문 가독성 저하. 반드시 `#0F1115` 계열 차콜 사용
2. 다크 배경 위 본문 텍스트에 채도 높은 형광색(레몬/시안 등) 금지 — Toss Blue를 유일 강조로 유지
3. 한 화면에 두 개 이상 발광 CTA(`--shadow-xl`) 동시 사용 금지 — 시선이 분산되어 절제 원칙 붕괴
4. 다크모드에서 surface elevation을 그림자로만 표현 금지 — 야간 환경에선 그림자가 거의 보이지 않음, 반드시 명도 차로 분리
5. Border를 흰색·고채도로 사용 금지 — `#21232A`~`#2C2F37` 범위 저채도 그레이만 사용

### ⑫ 시그니처 적용 예시 (Mobile home — Dark)

```html
<style>
  body { margin: 0; font-family: 'Toss Product Sans', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #F2F4F6; background: #0F1115; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; background: #0F1115; }
  .topbar { padding: 14px 20px; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-weight: 800; color: #4795FF; font-size: 24px; letter-spacing: -0.025em; }
  .topbar .icons { margin-left: auto; display: flex; gap: 14px; font-size: 22px; color: #B0B8C1; }
  .home { padding: 8px 20px 20px; display: flex; flex-direction: column; gap: 12px; }
  .home h1 { font-size: 24px; font-weight: 800; margin: 0 0 4px; letter-spacing: -0.02em; color: #F9FAFB; }
  .home .sub { font-size: 13px; color: #B0B8C1; }
  .total-card { background: #15171C; border: 1px solid #21232A; border-radius: 14px; padding: 18px 20px; }
  .total-card .label { font-size: 13px; color: #B0B8C1; font-weight: 600; }
  .total-card .amount { font-size: 30px; font-weight: 800; letter-spacing: -0.025em; margin-top: 4px; color: #F9FAFB; }
  .accounts { display: flex; flex-direction: column; gap: 8px; }
  .account { background: #1A1D24; border: 1px solid #21232A; border-radius: 14px; padding: 16px; display: flex; align-items: center; gap: 12px; }
  .account .ic { width: 40px; height: 40px; border-radius: 50%; background: #0E2B5C; color: #4795FF; display: grid; place-items: center; font-weight: 800; }
  .account .name { font-size: 14px; color: #B0B8C1; font-weight: 600; }
  .account .balance { font-size: 18px; font-weight: 800; margin-top: 2px; color: #F2F4F6; }
  .account .arrow { color: #8B95A1; font-size: 20px; margin-left: auto; }
  .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
  .actions .send { background: #4795FF; color: #0F1115; border: 0; border-radius: 14px; padding: 16px; font-size: 16px; font-weight: 800; cursor: pointer; font-family: inherit; box-shadow: 0 0 0 1px rgba(71,149,255,0.30), 0 16px 32px rgba(71,149,255,0.18); }
  .actions .receive { background: #21232A; color: #F2F4F6; border: 0; border-radius: 14px; padding: 16px; font-size: 16px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .recent { background: #1A1D24; border: 1px solid #21232A; border-radius: 14px; padding: 4px 0; margin-top: 8px; }
  .recent .row { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; padding: 12px 16px; align-items: center; }
  .recent .row .ic { width: 36px; height: 36px; border-radius: 50%; background: #21232A; color: #F2F4F6; display: grid; place-items: center; font-weight: 800; font-size: 13px; }
  .recent .row .name { font-size: 14px; font-weight: 700; color: #F2F4F6; }
  .recent .row .when { font-size: 11px; color: #8B95A1; margin-top: 2px; }
  .recent .row .amt { font-size: 14px; font-weight: 800; color: #F2F4F6; }
  .recent .row .amt.in { color: #4795FF; }
  .bottomnav { background: #0F1115; border-top: 1px solid #21232A; display: grid; grid-template-columns: repeat(5, 1fr); padding: 8px 0; }
  .bottomnav .item { padding: 6px; text-align: center; font-size: 11px; font-weight: 600; color: #8B95A1; }
  .bottomnav .item.active { color: #4795FF; }
  .bottomnav .item .ic { font-size: 20px; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">toss</span>
    <span class="icons">🔔 ⓜ</span>
  </header>
  <main class="home">
    <h1>안녕하세요, 미나님</h1>
    <div class="sub">늦은 밤에도 잘 부탁드려요</div>
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
