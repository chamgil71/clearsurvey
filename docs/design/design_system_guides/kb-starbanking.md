---
brand: KB StarBanking
brand_ko: KB스타뱅킹
slug: kb-starbanking
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - fintech
  - enterprise

color_tone: warm
primary_color_hex: "#FFBC00"
primary_color_name: "KB Yellow"
mood:
  - 안정
  - 친근
  - 견고

font_category: sans-serif
font_primary: KBFG Display
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2010
last_major_revision: 2024
signature_keyword: "KB 옐로우 헤더 + 검은 본문 + 다크 네이비 보조의 종합금융"

hero_html: |
  <div style="font-family:'KBFG Display',Pretendard,-apple-system,sans-serif;background:#F4F5F7;color:#1A1A1A;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#FFBC00;padding:14px 16px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;color:#1A1A1A;letter-spacing:-0.02em;">★ KB</strong>
      <span style="font-size:11px;font-weight:700;color:#1A1A1A;">스타뱅킹</span>
      <span style="margin-left:auto;font-size:11px;color:#1A1A1A;">⚙</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:#fff;border-radius:12px;padding:16px;border:1px solid #E1E4EA;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <div style="font-size:11px;color:#6E7480;font-weight:700;letter-spacing:0.02em;">KB국민ONE통장</div>
        <div style="font-size:12px;color:#1A1A1A;margin-top:2px;font-weight:600;">123-12-1234-567</div>
        <div style="font-size:26px;font-weight:900;letter-spacing:-0.025em;margin-top:8px;">8,420,000 <span style="font-size:13px;color:#6E7480;font-weight:700;">원</span></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:12px;">
          <button style="background:#1A1A1A;color:#FFBC00;border:0;border-radius:8px;padding:11px;font-size:13px;font-weight:800;font-family:inherit;cursor:pointer;">이체</button>
          <button style="background:#FFBC00;color:#1A1A1A;border:0;border-radius:8px;padding:11px;font-size:13px;font-weight:800;font-family:inherit;cursor:pointer;">조회</button>
        </div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:12px;border:1px solid #E1E4EA;display:flex;align-items:center;gap:10px;">
        <div style="width:32px;height:32px;background:#FFF6D6;color:#1A1A1A;border-radius:8px;display:grid;place-items:center;font-weight:800;">★</div>
        <div style="flex:1;font-size:13px;font-weight:700;">스타클럽 등급 — VIP</div>
        <span style="font-size:11px;color:#6E7480;">›</span>
      </div>
    </div>
  </div>

sources:
  - https://obank.kbstar.com/
  - https://www.kbfg.com/
  - https://omoney.kbstar.com/
---

### ① 브랜드 DNA
- **브랜드명**: KB StarBanking (KB 스타뱅킹 — KB국민은행)
- **한 줄 정체성**: 한국 최대 시중은행의 디지털 뱅킹 — 보수적 종합금융 슈퍼앱
- **공식 디자인 철학**: "고객의 평생 금융파트너" — 정확성·접근성·견고함 우선
- **시그니처 요소 1개**: KB 옐로우(#FFBC00) 헤더 + 검정 본문 + 다크 네이비 보조 액션. 별(★) 심볼이 곳곳에 등장해 "스타뱅킹"을 시각화

### ② 톤 & 무드
- **핵심 키워드 3개**: 안정, 친근, 견고
- **무드 설명**: 노란 헤더로 친근함을 주고, 본문은 흰색 카드 + 1px 보더로 정통 은행 톤. 강조 CTA는 종종 검정(#1A1A1A) + 노란 텍스트의 역상으로 KB 시그니처를 표현.
- **비주얼 스타일**: 모던 미니멀 + 약간의 휴머니즘(스타프렌즈 캐릭터)
- **밀도(Density)**: Comfortable — 시니어 사용자 비중이 높아 글자·터치 영역이 큼
- **모서리 성향**: Soft (8~12px)
- **평면성**: Subtle — 1px 보더 + sm 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - KB Yellow */
  --color-primary-50:  #FFFBE6;
  --color-primary-100: #FFF3B3;
  --color-primary-200: #FFE780;
  --color-primary-300: #FFD740;
  --color-primary-400: #FFCB1A;
  --color-primary-500: #FFBC00;   /* KB Yellow */
  --color-primary-600: #E6A800;
  --color-primary-700: #B88600;
  --color-primary-800: #8A6500;
  --color-primary-900: #5C4400;

  /* Secondary - KB Dark Navy (CTA 역상용) */
  --color-secondary-500: #1A1A1A;
  --color-secondary-700: #000000;

  /* Tertiary - 보조 액션 블루 */
  --color-tertiary-500: #2C6CDF;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9FAFB;
  --color-neutral-100:  #F4F5F7;     /* page bg */
  --color-neutral-200:  #E1E4EA;     /* border */
  --color-neutral-300:  #CDD2DA;
  --color-neutral-500:  #9CA3AE;
  --color-neutral-700:  #6E7480;     /* text secondary */
  --color-neutral-800:  #3F4654;
  --color-neutral-900:  #1A1A1A;     /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F6EC;
  --color-success-fg: #16A55C;
  --color-warning-bg: #FFF6D6;
  --color-warning-fg: #E69500;
  --color-error-bg:   #FFE8EB;
  --color-error-fg:   #D32F2F;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #2C6CDF;

  /* Surface */
  --bg-base:     #F4F5F7;
  --bg-subtle:   #F9FAFB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,26,0.55);

  /* Text */
  --text-primary:    #1A1A1A;
  --text-secondary:  #3F4654;
  --text-tertiary:   #6E7480;
  --text-on-primary: #1A1A1A;    /* 노랑 위는 검정 */
  --text-on-dark:    #FFBC00;    /* 검정 위는 노랑 (KB 시그니처) */
  --text-disabled:   #9CA3AE;

  /* Border */
  --border-default: #E1E4EA;
  --border-subtle:  #F4F5F7;
  --border-strong:  #CDD2DA;
  --border-focus:   #FFBC00;
}

[data-theme="dark"] {
  --bg-base: #0F1014;
  --bg-subtle: #15171C;
  --bg-elevated: #1B1D24;
  --text-primary: #F4F5F7;
  --text-secondary: #B5BAC4;
  --border-default: #232831;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: **KBFG Display / KBFG Text** (자체) — 폴백 Pretendard, Noto Sans KR
  - 영문: KBFG Display Latin / Roboto 폴백
- **위계** (시니어 가독성 우선, 본문 weight 600+):
  - Display (잔액): 32px / 900 / 1.2 / -0.025em
  - H1: 26px / 800 / 1.3 / -0.02em
  - H2: 20px / 700 / 1.35 / -0.015em
  - H3: 17px / 700 / 1.4 / -0.01em
  - Body Large: 16px / 600 / 1.55 / -0.005em
  - Body: 14px / 600 / 1.55 / -0.005em
  - Body Small: 13px / 600 / 1.5 / 0
  - Caption: 11px / 700 / 1.4 / 0.02em

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
- **Container**: max-width 480px (모바일), 1200px (웹뱅킹), 좌우 패딩 16px / 32px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;     /* 카드 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.12);
--shadow-xl: 0 24px 48px rgba(255,188,0,0.25);
```

### ⑧ Iconography
- **스타일**: Filled 위주 (메뉴) + Outline 보조 (상태)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: KBFG Icon Set / Material Symbols

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 14px/1 'KBFG Display', Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: var(--radius-md); padding: 13px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: all 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }
.btn-dark { background: var(--color-secondary-500); color: var(--text-on-dark); }    /* KB 시그니처 역상 CTA */
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-tertiary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-default); border-radius: var(--radius-md);
         padding: 13px 14px; font: 600 15px/1.4 inherit; color: var(--text-primary); }
.input:focus { outline: 0; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(255,188,0,0.25); }
.input.error { border-color: var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default);
        border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-sm); }
.card-yellow { background: var(--color-primary-500); color: var(--text-on-primary); border-color: transparent; }
.card-dark { background: var(--color-secondary-500); color: var(--text-on-dark); border-color: transparent; }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 6px; font: 700 11px/1.5 inherit; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-dark    { background: var(--color-secondary-500); color: var(--text-on-dark); }
```

**Navigation (TabBar)**
```css
.tabbar { background: #fff; border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 700 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--text-primary); }
.tabbar .item.active .ic { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 노랑(#FFBC00) 위에 흰 텍스트 사용 금지 — 명도 대비 부족, 반드시 검정
2. 본문 카드를 노랑으로 도배 금지 — 노랑은 헤더·강조 CTA에만 절제 사용
3. 본문 weight 500 이하 사용 금지 — 시니어 가독성 미달
4. ★ 심볼 과다 사용 금지 — 스타클럽·이벤트 등 한정된 컨텍스트에만
5. 카드 모서리 16px 이상 라운드 금지 — 토스/카카오톤이 되어 정통성 손실

### ⑫ 시그니처 적용 예시 (스타뱅킹 홈)

```html
<style>
  body { margin: 0; font-family: 'KBFG Display', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #1A1A1A; background: #F4F5F7; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #FFBC00; padding: 16px 18px; display: flex; align-items: center; gap: 10px; }
  .topbar .brand { font-weight: 900; font-size: 22px; letter-spacing: -0.025em; }
  .topbar .sub { font-size: 12px; font-weight: 700; }
  .topbar .icons { margin-left: auto; font-size: 16px; font-weight: 700; }
  .home { padding: 14px 16px 80px; display: flex; flex-direction: column; gap: 10px; }
  .acct { background: #fff; border: 1px solid #E1E4EA; border-radius: 12px; padding: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
  .acct .name { font-size: 12px; color: #6E7480; font-weight: 700; letter-spacing: 0.02em; }
  .acct .num { font-size: 12px; color: #1A1A1A; margin-top: 2px; font-weight: 700; }
  .acct .amt { font-size: 30px; font-weight: 900; letter-spacing: -0.025em; margin-top: 8px; }
  .acct .amt small { font-size: 14px; color: #6E7480; font-weight: 700; }
  .acct .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 14px; }
  .acct .actions .dark { background: #1A1A1A; color: #FFBC00; border: 0; border-radius: 8px; padding: 12px; font: 800 14px/1 inherit; cursor: pointer; }
  .acct .actions .yellow { background: #FFBC00; color: #1A1A1A; border: 0; border-radius: 8px; padding: 12px; font: 800 14px/1 inherit; cursor: pointer; }
  .star-row { background: #fff; border: 1px solid #E1E4EA; border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 10px; }
  .star-row .ic { width: 36px; height: 36px; background: #FFF6D6; color: #1A1A1A; border-radius: 8px; display: grid; place-items: center; font-weight: 900; font-size: 18px; }
  .star-row .name { flex: 1; font-size: 14px; font-weight: 700; }
  .star-row .name small { display: block; font-size: 11px; color: #6E7480; margin-top: 2px; font-weight: 600; }
  .star-row .more { color: #9CA3AE; }
  .menu { background: #fff; border: 1px solid #E1E4EA; border-radius: 12px; padding: 14px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px 4px; }
  .menu .item { display: flex; flex-direction: column; align-items: center; gap: 6px; font: 700 11px/1.3 inherit; color: #3F4654; }
  .menu .item .ic { width: 42px; height: 42px; border-radius: 10px; background: #FFF6D6; color: #1A1A1A; display: grid; place-items: center; font-weight: 900; }
  .tabbar { background: #fff; border-top: 1px solid #E1E4EA; display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 6px; text-align: center; font: 700 11px/1.3 inherit; color: #9CA3AE; }
  .tabbar .item.active { color: #1A1A1A; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">★ KB</span>
    <span class="sub">스타뱅킹</span>
    <span class="icons">🔔 ⚙</span>
  </header>
  <main class="home">
    <section class="acct">
      <div class="name">KB국민ONE통장</div>
      <div class="num">123-12-1234-567</div>
      <div class="amt">8,420,000 <small>원</small></div>
      <div class="actions">
        <button class="dark">이체</button>
        <button class="yellow">거래내역</button>
      </div>
    </section>
    <section class="star-row">
      <div class="ic">★</div>
      <div class="name">스타클럽 등급 <small>이번 달 VIP — 우대금리 +0.3%</small></div>
      <div class="more">›</div>
    </section>
    <section class="menu">
      <div class="item"><div class="ic">💸</div>이체</div>
      <div class="item"><div class="ic">📋</div>조회</div>
      <div class="item"><div class="ic">📈</div>예적금</div>
      <div class="item"><div class="ic">💳</div>대출</div>
    </section>
  </main>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">이체</div>
    <div class="item">상품</div>
    <div class="item">자산</div>
    <div class="item">메뉴</div>
  </nav>
</div>
```
