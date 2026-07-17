---
brand: RIDI
brand_ko: 리디
slug: ridi
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#1F8CE6"
primary_color_name: "Ridi Blue"
mood:
  - 차분
  - 정돈
  - 가독

font_category: serif
font_primary: Ridibatang
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2008
last_major_revision: 2024
signature_keyword: "전자책 가독을 위한 차분한 회색 캔버스 + Ridi 블루 액센트"

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:#F4F4F0;color:#222;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.005em;">
    <div style="background:#fff;border-bottom:1px solid #E5E5E0;padding:12px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;color:#222;letter-spacing:-0.025em;">RIDI</strong>
      <span style="margin-left:auto;font-size:11px;color:#777;">🔍 ⓜ</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:12px;">
      <div style="background:#fff;border-radius:10px;padding:14px;display:grid;grid-template-columns:60px 1fr;gap:12px;align-items:center;">
        <div style="aspect-ratio:2/3;background:linear-gradient(180deg,#1F8CE6,#0B5394);border-radius:3px;display:grid;place-items:center;color:#fff;font-family:'Ridibatang',serif;font:700 14px/1.2 serif;text-align:center;padding:6px;">소설<br/>제목</div>
        <div>
          <div style="font-size:11px;color:#1F8CE6;font-weight:700;letter-spacing:0.02em;">RIDI ORIGINALS</div>
          <div style="font-size:14px;font-weight:800;margin-top:2px;font-family:'Ridibatang',serif;">서울, 어느 날 소설이 되다</div>
          <div style="font-size:11px;color:#777;margin-top:2px;">박상영 · 장편소설</div>
          <button style="margin-top:8px;background:#1F8CE6;color:#fff;border:0;border-radius:4px;padding:6px 12px;font:800 11px/1 inherit;cursor:pointer;">바로 읽기</button>
        </div>
      </div>
      <div style="font-size:12px;color:#222;font-weight:800;">최근 읽은 책</div>
      <div style="background:#fff;border-radius:10px;padding:10px;display:grid;grid-template-columns:40px 1fr auto;gap:10px;align-items:center;">
        <div style="aspect-ratio:2/3;background:#E5E5E0;border-radius:2px;"></div>
        <div>
          <div style="font-size:12px;font-weight:800;font-family:'Ridibatang',serif;">아몬드</div>
          <div style="font-size:10px;color:#777;margin-top:2px;">손원평 · 62%</div>
        </div>
        <span style="font-size:13px;color:#1F8CE6;">›</span>
      </div>
    </div>
  </div>

sources:
  - https://ridibooks.com/
  - https://ridicorp.com/
---

### ① 브랜드 DNA
- **브랜드명**: RIDI (리디 — 리디주식회사)
- **한 줄 정체성**: 한국 1위 전자책 플랫폼 — 종이책 같은 가독성에 집중
- **공식 디자인 철학**: "독서는 다정한 일" — 읽기에 방해되지 않는 인터페이스
- **시그니처 요소 1개**: 페이퍼 톤 회색-크림(#F4F4F0) 캔버스 + Ridi 블루(#1F8CE6) 액센트 + 한글 본문 세리프(Ridibatang). 다른 OTT의 강한 다크 톤과 정반대

### ② 톤 & 무드
- **핵심 키워드 3개**: 차분, 정돈, 가독
- **무드 설명**: 종이를 연상시키는 옅은 베이지-그레이 캔버스 + 흰 카드 + 책 자켓의 컬러풀함을 보존. 본문 UI는 산세리프, 책 제목·본문은 세리프(Ridibatang). 다크모드는 옅은 갈색-카키 톤.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (세리프 결합)
- **밀도(Density)**: Comfortable — 카드 패딩 14~16px
- **모서리 성향**: Soft (4~10px) — 자켓 모서리는 거의 직각(2~3px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Ridi Blue */
  --color-primary-50:  #E8F2FC;
  --color-primary-100: #C0DCF7;
  --color-primary-200: #8AC0F0;
  --color-primary-300: #54A4E9;
  --color-primary-400: #2C95E6;
  --color-primary-500: #1F8CE6;   /* Ridi Blue */
  --color-primary-600: #1671C2;
  --color-primary-700: #0F5694;
  --color-primary-800: #0B3D6B;
  --color-primary-900: #062642;

  /* Secondary - Ridi Yellow Highlight */
  --color-secondary-500: #FFD43B;

  /* Neutral - Paper tone */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAF7;
  --color-neutral-100:  #F4F4F0;     /* page bg — 종이 톤 */
  --color-neutral-200:  #E5E5E0;     /* border */
  --color-neutral-300:  #D6D6D0;
  --color-neutral-500:  #999996;
  --color-neutral-700:  #777775;     /* text secondary */
  --color-neutral-800:  #4A4A48;
  --color-neutral-900:  #222220;     /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E8F6EC;
  --color-success-fg: #16A34A;
  --color-warning-bg: #FFF8E1;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FDEDEE;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E8F2FC;
  --color-info-fg:    #1F8CE6;

  /* Surface */
  --bg-base:     #F4F4F0;          /* 종이 톤 */
  --bg-subtle:   #FAFAF7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(34,34,32,0.55);

  /* Text */
  --text-primary:    #222220;
  --text-secondary:  #4A4A48;
  --text-tertiary:   #777775;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #999996;

  /* Border */
  --border-default: #E5E5E0;
  --border-subtle:  #F4F4F0;
  --border-strong:  #D6D6D0;
  --border-focus:   #1F8CE6;
}

[data-theme="dark"] {
  --bg-base: #2A2825;
  --bg-subtle: #1F1D1B;
  --bg-elevated: #353330;
  --text-primary: #F4F4F0;
  --text-secondary: #C8C5BE;
  --border-default: #4A4845;
}

[data-theme="sepia"] {
  --bg-base: #F4ECD8;
  --bg-elevated: #FAF3DD;
  --text-primary: #5B4636;
  --text-secondary: #7B6549;
  --border-default: #E0D5BC;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글(본문/책 제목): **Ridibatang** (자체 세리프, OFL)
  - 한글(UI): Pretendard (OFL)
  - 영문: Ridibatang Latin / Charter / Georgia 폴백
- **위계**:
  - Display (책 제목): 32px / 700 / 1.3 Ridibatang serif
  - H1: 24px / 700 / 1.35 / -0.015em serif
  - H2 (섹션): 16px / 800 / 1.4 / -0.005em Pretendard sans
  - H3 (책 제목): 14px / 800 / 1.4 Ridibatang serif
  - Body Large (독서뷰): 17px / 400 / 1.65 Ridibatang serif
  - Body (UI): 14px / 500 / 1.5 Pretendard sans
  - Body Small (저자): 11px / 600 / 1.45 Pretendard sans
  - Caption: 10px / 600 / 1.4 / 0.02em Pretendard sans

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 14px;
  --space-lg: 20px;
  --space-xl: 28px;
  --space-2xl: 44px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 480px (모바일), 720px (독서뷰), 1200px (스토어 웹)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;       /* 자켓 */
--radius-md: 4px;       /* 버튼 */
--radius-lg: 10px;      /* 카드 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-book: 2px 4px 8px rgba(0,0,0,0.18);   /* 책 자켓 옆 그림자 */
--shadow-lg: 0 12px 28px rgba(0,0,0,0.12);
```

### ⑧ Iconography
- **스타일**: Outline (UI) + 책 아이콘 Filled
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round (얇은 1.5px)
- **추천 라이브러리**: Phosphor Light / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 13px/1 Pretendard, sans-serif; letter-spacing: -0.005em;
       border-radius: 4px; padding: 10px 16px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-buy { background: var(--text-primary); color: #fff; }       /* 책 구매 = 검정 */
.btn-rent { background: var(--color-primary-500); color: #fff; }
```

**Input**
```css
.search-input { background: #fff; border: 1px solid var(--border-default); color: var(--text-primary); border-radius: var(--radius-md); padding: 10px 14px; font: 500 14px/1.4 inherit; }
.search-input:focus { outline: 0; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(31,140,230,0.20); }
```

**Card**
```css
.book-card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 14px; display: grid; grid-template-columns: 60px 1fr; gap: 12px; align-items: center; }
.book-cover { aspect-ratio: 2/3; background: var(--bg-base); border-radius: 2px; box-shadow: var(--shadow-book); overflow: hidden; }
.book-list-card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 10px; display: grid; grid-template-columns: 40px 1fr auto; gap: 10px; align-items: center; }
.reader-page { background: var(--bg-base); padding: 24px 28px; font-family: Ridibatang, Charter, serif; font-size: 17px; line-height: 1.7; color: var(--text-primary); }
```

**Badge / Tag**
```css
.tag { padding: 2px 6px; border-radius: 3px; font: 700 10px/1.5 Pretendard, sans-serif; letter-spacing: 0.02em; }
.tag-original { background: transparent; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }
.tag-best     { background: var(--color-secondary-500); color: var(--text-primary); }
.tag-new      { background: var(--color-error-fg); color: #fff; }
```

**Navigation (TabBar)**
```css
.tabbar { background: #fff; border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 700 11px/1.3 Pretendard, sans-serif; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-page-turn: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
```

### ⑪ Anti-patterns
1. 본문 한글에 산세리프 강요 금지 — 책 제목/본문은 Ridibatang 세리프 유지
2. 페이지 배경을 순백(#FFF) 단독 사용 금지 — 페이퍼 톤(#F4F4F0)이 시그니처
3. 강조 액센트로 빨강 단독 사용 금지 — 신간/특가에만 한정, 본 강조는 Ridi 블루
4. 책 자켓 모서리를 8px 이상 라운드 금지 — 종이책 메타포 손실
5. 다크모드를 순흑(#000)으로 만들지 말 것 — 갈색-카키 톤(#2A2825)이 표준

### ⑫ 시그니처 적용 예시 (RIDI 홈)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.005em; color: #222220; background: #F4F4F0; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #fff; border-bottom: 1px solid #E5E5E0; padding: 12px 14px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 10; }
  .topbar .brand { font-weight: 900; font-size: 20px; letter-spacing: -0.025em; }
  .topbar nav { margin-left: 8px; display: flex; gap: 12px; font: 700 13px/1 inherit; color: #777775; }
  .topbar nav .active { color: #222220; }
  .topbar .icons { margin-left: auto; font-size: 16px; color: #777775; }
  .home { padding: 14px; display: flex; flex-direction: column; gap: 14px; }
  .hero { background: #fff; border-radius: 10px; padding: 14px; display: grid; grid-template-columns: 70px 1fr; gap: 14px; align-items: center; }
  .hero .cover { aspect-ratio: 2/3; background: linear-gradient(180deg, #1F8CE6, #0B5394); border-radius: 3px; box-shadow: 2px 4px 8px rgba(0,0,0,0.20); display: grid; place-items: center; color: #fff; font: 700 13px/1.3 Ridibatang, Charter, serif; text-align: center; padding: 6px; }
  .hero .label { font: 700 10px/1.4 inherit; color: #1F8CE6; letter-spacing: 0.04em; }
  .hero h2 { margin: 4px 0 2px; font: 800 17px/1.3 Ridibatang, Charter, serif; }
  .hero .author { font: 600 11px/1.4 inherit; color: #777775; }
  .hero .actions { display: flex; gap: 6px; margin-top: 10px; }
  .hero .actions .primary { background: #1F8CE6; color: #fff; border: 0; border-radius: 4px; padding: 8px 14px; font: 800 12px/1 inherit; cursor: pointer; }
  .hero .actions .secondary { background: #fff; color: #222220; border: 1px solid #E5E5E0; border-radius: 4px; padding: 8px 14px; font: 800 12px/1 inherit; cursor: pointer; }
  .section h3 { margin: 0 0 8px; font: 800 14px/1.4 inherit; }
  .row { display: grid; grid-auto-flow: column; grid-auto-columns: 90px; gap: 10px; overflow-x: auto; padding-bottom: 4px; }
  .row .cover { aspect-ratio: 2/3; background: #E5E5E0; border-radius: 2px; box-shadow: 2px 4px 8px rgba(0,0,0,0.16); position: relative; overflow: hidden; display: grid; place-items: center; padding: 6px; }
  .row .cover.b1 { background: linear-gradient(180deg, #1F8CE6, #0B5394); color: #fff; font: 700 11px/1.3 Ridibatang, serif; text-align: center; }
  .row .cover.b2 { background: linear-gradient(180deg, #DC2626, #7F1D1D); color: #fff; font: 700 11px/1.3 Ridibatang, serif; text-align: center; }
  .row .cover.b3 { background: linear-gradient(180deg, #5B21B6, #1E1B4B); color: #fff; font: 700 11px/1.3 Ridibatang, serif; text-align: center; }
  .row .cover.b4 { background: linear-gradient(180deg, #FACC15, #B45309); color: #222; font: 700 11px/1.3 Ridibatang, serif; text-align: center; }
  .row .cover.b5 { background: linear-gradient(180deg, #16A34A, #052E1A); color: #fff; font: 700 11px/1.3 Ridibatang, serif; text-align: center; }
  .row .cover .badge { position: absolute; top: 4px; left: 4px; background: #FFD43B; color: #222; padding: 1px 4px; font: 700 9px/1.4 Pretendard, sans-serif; border-radius: 2px; }
  .reading { background: #fff; border-radius: 10px; padding: 12px; display: grid; grid-template-columns: 40px 1fr auto; gap: 12px; align-items: center; }
  .reading .cover { aspect-ratio: 2/3; background: #E5E5E0; border-radius: 2px; box-shadow: 1px 2px 4px rgba(0,0,0,0.12); }
  .reading .title { font: 800 13px/1.3 Ridibatang, Charter, serif; }
  .reading .progress { font: 600 11px/1.3 inherit; color: #777775; margin-top: 2px; }
  .reading .more { color: #1F8CE6; font-size: 16px; }
  .tabbar { background: #fff; border-top: 1px solid #E5E5E0; display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 6px; text-align: center; font: 700 11px/1.3 inherit; color: #999996; }
  .tabbar .item.active { color: #222220; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">RIDI</span>
    <nav><span class="active">홈</span><span>로맨스</span><span>판타지</span></nav>
    <span class="icons">🔍 ⓜ</span>
  </header>
  <main class="home">
    <section class="hero">
      <div class="cover">서울,<br/>어느 날<br/>소설이</div>
      <div>
        <div class="label">RIDI ORIGINALS</div>
        <h2>서울, 어느 날 소설이 되다</h2>
        <div class="author">박상영 · 장편소설</div>
        <div class="actions">
          <button class="primary">바로 읽기</button>
          <button class="secondary">미리보기</button>
        </div>
      </div>
    </section>
    <section class="section">
      <h3>오늘의 추천</h3>
      <div class="row">
        <div class="cover b1">소설<br/>제목</div>
        <div class="cover b2"><span class="badge">BEST</span>로맨스</div>
        <div class="cover b3">판타지</div>
        <div class="cover b4">에세이</div>
        <div class="cover b5">비문학</div>
      </div>
    </section>
    <section class="section">
      <h3>최근 읽은 책</h3>
      <div class="reading">
        <div class="cover"></div>
        <div>
          <div class="title">아몬드</div>
          <div class="progress">손원평 · 62% 읽음</div>
        </div>
        <div class="more">›</div>
      </div>
    </section>
  </main>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">스토어</div>
    <div class="item">서재</div>
    <div class="item">웹툰</div>
    <div class="item">메뉴</div>
  </nav>
</div>
```
