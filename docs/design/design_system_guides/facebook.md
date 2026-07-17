---
brand: Facebook
brand_ko: 페이스북
slug: facebook
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - social
  - consumer

color_tone: cool
primary_color_hex: "#0866FF"
primary_color_name: "Facebook Blue"
mood:
  - 친근
  - 정보
  - 공유

font_category: sans-serif
font_primary: SF Pro / Roboto
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2004
last_major_revision: 2024
signature_keyword: "Facebook 블루 + 카드 피드 + Pretendard 한글"

card_tokens: |
  {
    "light": { "bg": "#F0F2F5", "surface": "#FFFFFF", "border": "#E4E6EB", "fg": "#050505", "fg_muted": "#65676B", "accent": "#0866FF" },
    "dark":  { "bg": "#18191A", "surface": "#242526", "border": "#3A3B3C", "fg": "#E4E6EB", "fg_muted": "#B0B3B8", "accent": "#357FF6" }
  }

hero_html: |
  <div style="font-family:'SF Pro Text','Helvetica Neue',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.005em;">
    <div style="background:var(--card-surface);padding:10px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 1px 2px rgba(0,0,0,0.06);">
      <div style="width:32px;height:32px;background:var(--card-accent);border-radius:9999px;display:grid;place-items:center;color:#fff;font:900 17px/1 inherit;letter-spacing:-0.05em;">f</div>
      <div style="flex:1;background:var(--card-bg);border-radius:9999px;padding:7px 14px;font:500 13px/1.4 inherit;color:var(--card-fg-muted);">Facebook 검색</div>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:var(--card-surface);border-radius:10px;padding:12px;display:flex;align-items:center;gap:10px;">
        <div style="width:36px;height:36px;background:linear-gradient(135deg,#0866FF,#A50EFD);border-radius:9999px;"></div>
        <div style="flex:1;background:var(--card-bg);border-radius:9999px;padding:9px 14px;font:500 13px/1.4 inherit;color:var(--card-fg-muted);">무슨 생각을 하고 계신가요?</div>
      </div>
      <div style="background:var(--card-surface);border-radius:10px;padding:12px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:40px;height:40px;background:#A50EFD;border-radius:9999px;color:#fff;display:grid;place-items:center;font:800 14px/1 inherit;">M</div>
          <div>
            <div style="font:600 13px/1.3 inherit;color:var(--card-fg);">민지의 일상</div>
            <div style="font:500 11px/1.3 inherit;color:var(--card-fg-muted);margin-top:1px;">8분 · ⓘ 공개</div>
          </div>
        </div>
        <div style="font:400 13px/1.5 inherit;color:var(--card-fg);margin-top:8px;">오늘 점심은 동네 새로 생긴 라멘집! 진하고 깔끔한 국물 + 차슈 두툼 🍜</div>
        <div style="aspect-ratio:16/9;background:linear-gradient(135deg,#FBBF24,#B45309);border-radius:8px;margin-top:8px;"></div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);margin-top:8px;border-top:1px solid var(--card-border);padding-top:6px;font:600 12px/1.4 inherit;color:var(--card-fg-muted);">
          <span style="display:flex;align-items:center;justify-content:center;gap:4px;padding:6px;">👍 좋아요</span>
          <span style="display:flex;align-items:center;justify-content:center;gap:4px;padding:6px;">💬 댓글</span>
          <span style="display:flex;align-items:center;justify-content:center;gap:4px;padding:6px;">↗ 공유</span>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.facebook.com/
  - https://design.facebook.com/
  - https://about.meta.com/brand/resources/facebookapp/
---

### ① 브랜드 DNA
- **브랜드명**: Facebook (Meta Family)
- **한 줄 정체성**: 2004년 시작한 글로벌 1위 SNS — 친구/가족 단위 일상 공유 피드
- **공식 디자인 철학**: Facebook Design System — "Meet people where they are"
- **시그니처 요소 1개**: Facebook 블루(#0866FF, 2023 리브랜드) — 둥근 'f' 아바타 로고 + 카드 단위 피드 + 좋아요/댓글/공유 3분할. 2004년부터 이어진 카드 피드 메타포

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근, 정보, 공유
- **무드 설명**: 옅은 회색 캔버스(#F0F2F5) + 흰 카드 피드 + 페이스북 블루 액센트. 카드는 라운드 10px, 그림자 거의 없음. 정보 위계는 "사용자 아바타 → 콘텐츠 → 액션 3분할" 일관 구조.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 카드 패딩 12~14px
- **모서리 성향**: Round (8~12px, 아바타는 풀필)
- **평면성**: Flat — 상단 헤더만 sm 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Facebook Blue (2023 신규) */
  --color-primary-50:  #E7F3FF;
  --color-primary-100: #C2DBFE;
  --color-primary-200: #8DB8FB;
  --color-primary-300: #5894F8;
  --color-primary-400: #357FF6;
  --color-primary-500: #0866FF;   /* Facebook Blue */
  --color-primary-600: #0556CC;
  --color-primary-700: #0445A3;
  --color-primary-800: #043178;
  --color-primary-900: #02194D;

  /* Secondary - Reactions */
  --color-like:    #2078F4;
  --color-love:    #F33E58;
  --color-haha:    #F7B125;
  --color-wow:     #F7B125;
  --color-sad:     #F7B125;
  --color-angry:   #E9710F;

  /* Neutral - Facebook design */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F8FA;
  --color-neutral-100:  #F0F2F5;     /* page bg */
  --color-neutral-200:  #E4E6EB;     /* border */
  --color-neutral-300:  #CED0D4;
  --color-neutral-500:  #8A8D91;
  --color-neutral-700:  #65676B;     /* text secondary */
  --color-neutral-800:  #3A3B3C;
  --color-neutral-900:  #050505;     /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1B8E36;
  --color-warning-bg: #FFF3CD;
  --color-warning-fg: #B25800;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FA383E;
  --color-info-bg:    #E7F3FF;
  --color-info-fg:    #0866FF;

  /* Surface */
  --bg-base:     #F0F2F5;             /* page */
  --bg-subtle:   #F7F8FA;
  --bg-elevated: #FFFFFF;             /* card */
  --bg-overlay:  rgba(5,5,5,0.45);

  /* Text */
  --text-primary:    #050505;
  --text-secondary:  #3A3B3C;
  --text-tertiary:   #65676B;
  --text-on-primary: #FFFFFF;
  --text-link:       #0866FF;
  --text-disabled:   #8A8D91;

  /* Border */
  --border-default: #E4E6EB;
  --border-subtle:  #F0F2F5;
  --border-strong:  #CED0D4;
  --border-focus:   #0866FF;
}

[data-theme="dark"] {
  --bg-base: #18191A;
  --bg-subtle: #242526;
  --bg-elevated: #242526;
  --text-primary: #E4E6EB;
  --text-secondary: #B0B3B8;
  --border-default: #3A3B3C;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **SF Pro Text** (iOS) / **Segoe UI** (Windows) / **Roboto** (Android/Web) — 시스템 폰트 우선
  - 한글: **Pretendard** / Noto Sans KR / Apple SD Gothic Neo (iOS) 폴백
- **위계**:
  - Display: 32px / 700 / 1.2 / -0.02em
  - H1 (스토리/이벤트): 22px / 700 / 1.3 / -0.015em
  - H2: 18px / 700 / 1.3 / -0.015em
  - H3 (사용자 이름): 15px / 600 / 1.4 / -0.005em
  - Body Large: 16px / 400 / 1.5 / -0.005em
  - Body: 14px / 400 / 1.5 / 0
  - Body Small (시간/메타): 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.4 / 0.02em

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
  --space-3xl: 56px;
  ```
- **Container**: max-width 480px (모바일), 600px (피드 카드 최대), 1280px (3컬럼 데스크톱)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 8px;       /* 이미지/미디어 */
--radius-lg: 10px;      /* 카드 시그니처 */
--radius-xl: 16px;
--radius-full: 9999px;  /* 아바타, 검색바, 버튼 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);     /* 헤더 */
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.15);
```

### ⑧ Iconography
- **스타일**: Facebook UI Icons — Filled
- **Stroke 굵기**: N/A (Filled)
- **모서리 처리**: Round
- **추천 라이브러리**: Facebook UI Icons / Phosphor Fill

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 'SF Pro Text', Roboto, sans-serif; letter-spacing: -0.005em;
       border-radius: 6px; padding: 9px 16px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); }
.btn-secondary:hover { background: var(--border-default); }
.btn-text { background: transparent; color: var(--text-secondary); font-weight: 600; padding: 9px 12px; }
.btn-text:hover { background: var(--bg-base); }
.btn-icon { background: var(--bg-base); width: 36px; height: 36px; padding: 0; border-radius: 9999px; }
```

**Input**
```css
.search { background: var(--bg-base); border: 0; border-radius: 9999px; padding: 8px 14px; font: 500 13px/1.4 inherit; display: flex; align-items: center; gap: 8px; }
.search input { all: unset; flex: 1; }
.composer { background: var(--bg-elevated); border-radius: 10px; padding: 12px; display: flex; align-items: center; gap: 10px; }
.composer .ph { flex: 1; background: var(--bg-base); border-radius: 9999px; padding: 9px 14px; font: 500 13px/1.4 inherit; color: var(--text-tertiary); }
```

**Card (Post)**
```css
.post { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 12px 14px 0; margin-bottom: 8px; }
.post .head { display: flex; align-items: center; gap: 10px; }
.post .head .avatar { width: 40px; height: 40px; border-radius: 9999px; background: var(--bg-base); }
.post .head .name { font: 600 14px/1.3 inherit; color: var(--text-primary); }
.post .head .meta { font: 500 12px/1.3 inherit; color: var(--text-tertiary); margin-top: 1px; }
.post .body { font: 400 14px/1.55 inherit; padding: 10px 0; color: var(--text-primary); }
.post .media { aspect-ratio: 16/9; border-radius: var(--radius-md); background: var(--bg-base); margin: 0 -14px 0; }
.post .actions { display: grid; grid-template-columns: repeat(3, 1fr); margin: 4px 0 0; border-top: 1px solid var(--border-default); padding: 4px 0; font: 600 13px/1.4 inherit; color: var(--text-tertiary); }
.post .actions .btn { background: transparent; padding: 8px; border-radius: 6px; }
.post .actions .btn:hover { background: var(--bg-base); }
```

**Badge / Tag**
```css
.tag { padding: 3px 10px; border-radius: 9999px; font: 600 12px/1.4 inherit; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-live    { background: var(--color-error-fg); color: #fff; }
.reaction-bubble { background: #fff; box-shadow: var(--shadow-md); border-radius: 9999px; padding: 4px 8px; display: inline-flex; gap: 2px; }
```

**Navigation (Top Tabs)**
```css
.navbar { background: #fff; padding: 8px 16px; display: flex; align-items: center; gap: 14px; box-shadow: var(--shadow-sm); position: sticky; top: 0; z-index: 10; }
.navbar .logo { width: 36px; height: 36px; background: var(--color-primary-500); border-radius: 9999px; color: #fff; display: grid; place-items: center; font: 900 18px/1 inherit; letter-spacing: -0.05em; }
.tabbar { background: #fff; border-bottom: 1px solid var(--border-default); display: flex; padding: 0 8px; }
.tabbar .item { padding: 12px 16px; font: 600 13px/1 inherit; color: var(--text-tertiary); flex: 1; text-align: center; border-bottom: 3px solid transparent; }
.tabbar .item.active { color: var(--color-primary-500); border-bottom-color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);   /* 리액션 팝업 */
```

### ⑪ Anti-patterns
1. Facebook 블루를 본문 텍스트에 사용 금지 — 링크/CTA만
2. 카드 모서리 16px 이상 라운드 금지 — Instagram/Meta 코퍼레이트 톤과 혼동
3. 좋아요/댓글/공유 외 액션을 강조 색으로 추가 금지 — 3분할 일관성
4. 한 화면에 카드 그림자 lg 이상 사용 금지 — Flat 톤 깨짐
5. 블루 단독을 헤더 배경에 칠하지 말 것 — 2020년 리브랜드 이후 흰 헤더 + 블루 로고

### ⑫ 시그니처 적용 예시 (Facebook 피드)

```html
<style>
  body { margin: 0; font-family: 'SF Pro Text', 'Helvetica Neue', -apple-system, Roboto, Pretendard, sans-serif; letter-spacing: -0.005em; color: #050505; background: #F0F2F5; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .navbar { background: #fff; padding: 8px 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 2px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 10; }
  .navbar .logo { width: 36px; height: 36px; background: #0866FF; border-radius: 9999px; color: #fff; display: grid; place-items: center; font: 900 18px/1 inherit; letter-spacing: -0.05em; }
  .navbar .search { flex: 1; background: #F0F2F5; border-radius: 9999px; padding: 8px 14px; font: 500 13px/1.4 inherit; color: #65676B; display: flex; align-items: center; gap: 6px; }
  .navbar .icons { display: flex; gap: 6px; }
  .navbar .icons span { width: 36px; height: 36px; background: #F0F2F5; border-radius: 9999px; display: grid; place-items: center; font-size: 15px; }
  .tabs { background: #fff; border-bottom: 1px solid #E4E6EB; display: flex; padding: 0; }
  .tabs .item { padding: 12px 0; font: 600 13px/1 inherit; color: #65676B; flex: 1; text-align: center; border-bottom: 3px solid transparent; }
  .tabs .item.active { color: #0866FF; border-bottom-color: #0866FF; }
  .feed { padding: 8px; display: flex; flex-direction: column; gap: 8px; }
  .composer { background: #fff; border-radius: 10px; padding: 12px; display: flex; align-items: center; gap: 10px; }
  .composer .av { width: 40px; height: 40px; background: linear-gradient(135deg, #0866FF, #A50EFD); border-radius: 9999px; }
  .composer .ph { flex: 1; background: #F0F2F5; border-radius: 9999px; padding: 9px 14px; font: 500 13px/1.4 inherit; color: #65676B; }
  .post { background: #fff; border-radius: 10px; padding: 12px 14px 0; }
  .post .head { display: flex; align-items: center; gap: 10px; }
  .post .head .av { width: 40px; height: 40px; background: #A50EFD; color: #fff; border-radius: 9999px; display: grid; place-items: center; font: 800 16px/1 inherit; }
  .post .head .name { font: 600 14px/1.3 inherit; color: #050505; }
  .post .head .meta { font: 500 12px/1.3 inherit; color: #65676B; margin-top: 1px; }
  .post .head .more { margin-left: auto; font-size: 18px; color: #65676B; }
  .post .body { font: 400 14px/1.55 inherit; color: #050505; padding: 10px 0 8px; }
  .post .media { aspect-ratio: 16/9; background: linear-gradient(135deg, #FBBF24, #B45309); border-radius: 8px; margin: 0 -14px; }
  .post .stats { padding: 8px 0; display: flex; align-items: center; gap: 6px; font: 500 12px/1 inherit; color: #65676B; }
  .post .stats .icons { display: flex; align-items: center; gap: -4px; }
  .post .stats .ic { width: 18px; height: 18px; border-radius: 9999px; border: 2px solid #fff; margin-right: -6px; font: 700 11px/1 inherit; display: grid; place-items: center; color: #fff; }
  .post .stats .ic.like { background: #2078F4; }
  .post .stats .ic.love { background: #F33E58; }
  .post .stats .ic.haha { background: #F7B125; }
  .post .actions { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #E4E6EB; padding: 4px 0; font: 600 13px/1.4 inherit; color: #65676B; }
  .post .actions span { display: flex; align-items: center; justify-content: center; gap: 6px; padding: 8px; border-radius: 6px; cursor: pointer; }
  .post .actions span:hover { background: #F0F2F5; }
</style>

<div class="app">
  <header class="navbar">
    <div class="logo">f</div>
    <div class="search">🔍 Facebook 검색</div>
    <div class="icons"><span>👥</span><span>💬</span></div>
  </header>
  <nav class="tabs">
    <div class="item active">🏠</div>
    <div class="item">▶</div>
    <div class="item">🛒</div>
    <div class="item">👥</div>
    <div class="item">🔔</div>
  </nav>
  <main class="feed">
    <section class="composer">
      <div class="av"></div>
      <div class="ph">무슨 생각을 하고 계신가요?</div>
    </section>
    <article class="post">
      <div class="head">
        <div class="av">M</div>
        <div><div class="name">민지의 일상</div><div class="meta">8분 · 🌍 공개</div></div>
        <div class="more">⋯</div>
      </div>
      <div class="body">오늘 점심은 동네 새로 생긴 라멘집! 진하고 깔끔한 국물 + 차슈가 두툼했어요 🍜</div>
      <div class="media"></div>
      <div class="stats">
        <div class="icons">
          <span class="ic like">👍</span>
          <span class="ic love">♥</span>
          <span class="ic haha">😂</span>
        </div>
        <span style="margin-left:8px;">민수님 외 124명</span>
        <span style="margin-left:auto;">댓글 18개 · 공유 4회</span>
      </div>
      <div class="actions">
        <span>👍 좋아요</span>
        <span>💬 댓글</span>
        <span>↗ 공유</span>
      </div>
    </article>
  </main>
</div>
```
