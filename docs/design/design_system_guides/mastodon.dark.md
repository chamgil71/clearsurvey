---
brand: Mastodon
brand_ko: 마스토돈
slug: mastodon
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - infra

color_tone: cool
primary_color_hex: "#6364FF"
primary_color_name: "Mastodon Purple"
mood:
  - 분산
  - 커뮤니티
  - 진중

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2016
last_major_revision: 2024
signature_keyword: "보라 코끼리 + 다크 네이비 캔버스 + 페디버스의 자치 인스턴스 소셜"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F2F5F7", "border": "#D9E1E8", "fg": "#191B22", "fg_muted": "#606984", "accent": "#6364FF" },
    "dark":  { "bg": "#191B22", "surface": "#282C37", "border": "#393F4F", "fg": "#FFFFFF", "fg_muted": "#9BAEC8", "accent": "#6364FF" }
  }

hero_html: |
  <div style="font-family:'Inter','Roboto',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.002em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;background:var(--card-surface);border-bottom:1px solid var(--card-border);">
      <div style="width:28px;height:28px;background:var(--card-accent);border-radius:6px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">M</div>
      <strong style="font-size:14px;font-weight:600;">홈 타임라인</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">mastodon.social</span>
    </div>
    <div style="padding:10px 14px;display:flex;flex-direction:column;gap:8px;overflow:hidden;">
      <div style="display:flex;gap:10px;">
        <div style="width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#7C7DFF,#A19BFF);flex:none;"></div>
        <div style="flex:1;min-width:0;">
          <div style="font:600 13px/1.2 inherit;color:var(--card-fg);">민지 <span style="color:var(--card-fg-muted);font-weight:400;">@minji@mas.to · 5분</span></div>
          <div style="font:400 13px/1.5 inherit;color:var(--card-fg);margin-top:3px;">Mastodon은 인스턴스마다 룰이 다른 분산 소셜이에요. 코끼리 한 마리가 페디버스를 들고 다니죠 🐘</div>
          <div style="display:flex;gap:18px;margin-top:6px;color:var(--card-fg-muted);font:500 11px/1 inherit;">
            <span>💬 3</span><span>🔁 8</span><span>⭐ 42</span>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;background:var(--card-surface);">
      <input style="flex:1;background:var(--card-bg);border:1px solid var(--card-border);border-radius:8px;padding:8px 12px;color:var(--card-fg);font:500 13px/1 inherit;" placeholder="무슨 일이 일어나고 있나요?"/>
      <div style="background:var(--card-accent);color:#fff;border-radius:8px;padding:8px 14px;font:600 12px/1 inherit;">툿!</div>
    </div>
  </div>

sources:
  - https://joinmastodon.org/
  - https://docs.joinmastodon.org/
---

### ① 브랜드 DNA
- **브랜드명**: Mastodon
- **한 줄 정체성**: 페디버스(Fediverse) 분산 소셜 — 자치 인스턴스가 ActivityPub로 연결
- **공식 디자인 철학**: "Social networking, back in your hands" — 광고/알고리즘 없는 시간순 타임라인
- **시그니처 요소 1개**: 보라(#6364FF) 코끼리 마스코트 + 다크 네이비(#191B22) 캔버스 + 8px Soft 카드 + 시간순 3컬럼 데스크톱 레이아웃(컬럼 추가/제거 가능한 TweetDeck 스타일). Bluesky의 라이트 톤과 정반대

### ② 톤 & 무드
- **핵심 키워드 3개**: 분산, 커뮤니티, 진중
- **무드 설명**: 기본 다크 톤. 보라는 액션·강조에만, 본문은 회청색 텍스트. 데스크톱에선 컬럼별 패널이 나란히 — 정보 밀도가 높음.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 데스크톱 멀티컬럼
- **모서리 성향**: Soft (6~8px)
- **평면성**: Flat — 1px 보더, 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Mastodon Purple (다크 위에서 밝게 올라가는 램프) */
  --color-primary-50:  #181953;
  --color-primary-100: #2A2B80;
  --color-primary-200: #3D3EAD;
  --color-primary-300: #4F50DA;
  --color-primary-400: #6364FF;
  --color-primary-500: #6364FF;   /* Mastodon Purple */
  --color-primary-600: #7C7DFF;   /* 다크 위 hover (밝게) */
  --color-primary-700: #9596FF;
  --color-primary-800: #B6B7FF;
  --color-primary-900: #D6D7FF;

  /* Secondary - Boost green (부스트 액션) */
  --color-secondary-500: #4DBDF7;
  --color-boost: #5BB4E8;

  /* Neutral - 다크용 반전 램프 (0=가장 어두움, 1000=가장 밝음) */
  --color-neutral-0:    #17191F;
  --color-neutral-50:   #191B22;
  --color-neutral-100:  #21242E;
  --color-neutral-200:  #282C37;
  --color-neutral-300:  #393F4F;   /* border */
  --color-neutral-500:  #606984;
  --color-neutral-700:  #9BAEC8;
  --color-neutral-800:  #C5D0DE;
  --color-neutral-900:  #E6EBF0;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #1B3320;
  --color-success-fg: #66D880;
  --color-warning-bg: #3B2F0F;
  --color-warning-fg: #FFD479;
  --color-error-bg:   #401E20;
  --color-error-fg:   #FF6B6B;
  --color-info-bg:    #16273B;
  --color-info-fg:    #6BB6FF;

  /* Surface (dark default — Mastodon은 다크 우선) */
  --bg-base:     #191B22;
  --bg-subtle:   #17191F;
  --bg-elevated: #282C37;
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #D9E1E8;
  --text-tertiary:   #9BAEC8;
  --text-on-primary: #FFFFFF;
  --text-link:       #9596FF;
  --text-disabled:   #606984;

  /* Border */
  --border-default: #393F4F;
  --border-subtle:  #282C37;
  --border-strong:  #4D5364;
  --border-focus:   #6364FF;
}

[data-theme="light"] {
  /* Primary - Mastodon Purple */
  --color-primary-50:  #ECECFF;
  --color-primary-100: #C8C9FF;
  --color-primary-200: #A4A5FF;
  --color-primary-300: #8081FF;
  --color-primary-400: #6364FF;
  --color-primary-500: #6364FF;   /* Mastodon Purple */
  --color-primary-600: #4F50DA;
  --color-primary-700: #3D3EAD;
  --color-primary-800: #2A2B80;
  --color-primary-900: #181953;

  /* Secondary - Boost green (부스트 액션) */
  --color-secondary-500: #03A9F4;
  --color-boost: #2B90D9;

  /* Neutral - Cool dark navy */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F2F5F7;
  --color-neutral-100:  #E6EBF0;
  --color-neutral-200:  #D9E1E8;
  --color-neutral-300:  #9BAEC8;
  --color-neutral-500:  #606984;
  --color-neutral-700:  #393F4F;
  --color-neutral-800:  #282C37;
  --color-neutral-900:  #191B22;
  --color-neutral-1000: #17191F;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1B7A33;
  --color-warning-bg: #FBF2D9;
  --color-warning-fg: #8A6400;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #C4302B;
  --color-info-bg:    #E3F0FB;
  --color-info-fg:    #1F6FC4;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F2F5F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,27,34,0.45);

  /* Text */
  --text-primary:    #191B22;
  --text-secondary:  #282C37;
  --text-tertiary:   #606984;
  --text-on-primary: #FFFFFF;
  --text-link:       #4F50DA;
  --text-disabled:   #9BAEC8;

  /* Border */
  --border-default:  #D9E1E8;
  --border-subtle:   #E6EBF0;
  --border-strong:   #9BAEC8;
  --border-focus:    #6364FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / Roboto / system-ui
  - 한글: Pretendard / Noto Sans KR
  - 코드: mastodon-font-monospace / SFMono
- **위계**:
  - Display: 28px / 700 / 1.25
  - H1: 22px / 700 / 1.3
  - H2: 19px / 700 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 16px / 400 / 1.5
  - Body: 14px / 400 / 1.45    /* Mastodon 본문은 X/Bluesky보다 한 단계 작음 */
  - Body Small: 13px / 500 / 1.4
  - Caption: 12px / 500 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 10px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 36px;
  --space-3xl: 56px;
  ```
- **Container**: 모바일 단일 컬럼 100%, 데스크톱 멀티컬럼(컬럼당 350px, 풀폭 무제한)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;     /* 카드/패널 시그니처 */
--radius-xl: 12px;
--radius-full: 9999px;   /* 아바타·태그만 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.65);
```

### ⑧ Iconography
- **스타일**: Material Symbols Outlined / Filled 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Material Symbols / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, Pretendard, sans-serif; border-radius: 6px; padding: 9px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-follow { background: var(--color-primary-500); color: #fff; }
.btn-follow.requested { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-boost { background: transparent; color: var(--color-boost); }
```

**Input**
```css
.field { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 6px; padding: 9px 12px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.field:focus { border-color: var(--color-primary-500); outline: 0; }
.compose { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 8px; padding: 12px; font: 400 16px/1.5 inherit; color: var(--text-primary); resize: vertical; min-height: 80px; outline: 0; }
.compose:focus { border-color: var(--color-primary-500); }
```

**Card (Status / Toot)**
```css
.status { padding: 12px 14px; border-bottom: 1px solid var(--border-default); background: var(--bg-base); }
.status .head { display: flex; gap: 10px; align-items: flex-start; }
.status .avatar { width: 44px; height: 44px; border-radius: 8px; flex: none; }
.status .meta { flex: 1; min-width: 0; }
.status .name { font: 600 14px/1.3 inherit; color: var(--text-primary); }
.status .handle { font: 400 13px/1.3 inherit; color: var(--text-tertiary); }
.status .text { font: 400 14px/1.5 inherit; color: var(--text-primary); margin-top: 8px; }
.status .actions { display: flex; gap: 32px; margin-top: 10px; color: var(--text-tertiary); font: 500 12px/1 inherit; }
.cw { background: var(--bg-elevated); border-radius: 6px; padding: 8px 12px; font: 500 13px/1.4 inherit; color: var(--text-secondary); }
```

**Badge / Tag**
```css
.badge-bot   { background: var(--bg-elevated); color: var(--text-secondary); border: 1px solid var(--border-default); border-radius: 4px; padding: 1px 6px; font: 600 10px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.05em; }
.tag-hashtag { color: var(--color-primary-500); font: 500 14px/1.4 inherit; text-decoration: none; }
.tag-hashtag:hover { text-decoration: underline; }
.tag-cw      { background: var(--color-warning-bg); color: var(--color-warning-fg); border-radius: 4px; padding: 2px 6px; font: 600 11px/1.3 inherit; }
```

**Navigation (좌측 메뉴 + 데스크톱 멀티컬럼)**
```css
.nav { background: var(--bg-elevated); border-right: 1px solid var(--border-default); padding: 12px; min-width: 250px; }
.nav .item { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 6px; font: 500 14px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.nav .item:hover { background: var(--bg-subtle); color: var(--text-primary); }
.nav .item.active { background: var(--bg-subtle); color: var(--color-primary-500); border-left: 3px solid var(--color-primary-500); padding-left: 9px; }
.columns { display: grid; grid-auto-flow: column; grid-auto-columns: 350px; gap: 8px; overflow-x: auto; }
.column { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 8px; display: flex; flex-direction: column; height: calc(100vh - 24px); }
.column header { padding: 10px 14px; border-bottom: 1px solid var(--border-default); font: 700 14px/1 inherit; color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 핑크/오렌지 강조색 추가 금지 — 보라(#6364FF) 단일 강조
2. 카드 모서리 12px 이상 금지 — 8px Soft 유지
3. 알고리즘 정렬·광고 표시 금지 — 시간 역순 타임라인이 정체성
4. 단일 컬럼 강제 금지 — 데스크톱은 멀티컬럼 옵션 제공
5. 코끼리 마스코트 톤 외 컬러풀 일러스트 사용 금지 — 보라 단색

### ⑫ 시그니처 적용 예시 (Mastodon 멀티컬럼 다크)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; background: #191B22; color: #D9E1E8; letter-spacing: -0.002em; }
  .app { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .nav { background: #282C37; border-right: 1px solid #393F4F; padding: 14px; }
  .nav .logo { display: flex; align-items: center; gap: 10px; padding: 4px 10px 16px; font: 800 18px/1 inherit; color: #fff; }
  .nav .logo .m { width: 30px; height: 30px; background: #6364FF; border-radius: 8px; display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
  .nav .item { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 6px; font: 500 14px/1 inherit; color: #D9E1E8; cursor: pointer; }
  .nav .item:hover { background: #17191F; }
  .nav .item.active { background: #17191F; color: #9596FF; border-left: 3px solid #6364FF; padding-left: 9px; }
  .columns { padding: 12px; display: grid; grid-auto-flow: column; grid-auto-columns: 350px; gap: 8px; overflow-x: auto; align-items: start; }
  .column { background: #191B22; border: 1px solid #393F4F; border-radius: 8px; display: flex; flex-direction: column; max-height: calc(100vh - 24px); }
  .column header { padding: 12px 14px; border-bottom: 1px solid #393F4F; font: 700 14px/1 inherit; color: #fff; display: flex; align-items: center; gap: 8px; }
  .column header .dot { width: 6px; height: 6px; background: #6364FF; border-radius: 9999px; }
  .column .body { overflow-y: auto; }
  .status { padding: 12px 14px; border-bottom: 1px solid #393F4F; }
  .status .head { display: flex; gap: 10px; align-items: flex-start; }
  .status .avatar { width: 44px; height: 44px; border-radius: 8px; flex: none; background: linear-gradient(135deg, #7C7DFF, #A19BFF); }
  .status .meta { flex: 1; min-width: 0; }
  .status .name { font: 600 14px/1.3 inherit; color: #fff; }
  .status .handle { font: 400 12px/1.3 inherit; color: #9BAEC8; }
  .status .text { font: 400 14px/1.5 inherit; color: #D9E1E8; margin-top: 6px; }
  .status .text a { color: #9596FF; text-decoration: none; }
  .status .actions { display: flex; justify-content: space-between; max-width: 280px; margin-top: 8px; color: #9BAEC8; font: 500 12px/1 inherit; }
  .status .act { display: inline-flex; align-items: center; gap: 5px; cursor: pointer; }
  .cw { background: #282C37; border-radius: 6px; padding: 8px 10px; font: 500 12px/1.4 inherit; color: #D9E1E8; margin-top: 6px; }
  .compose { padding: 14px; background: #17191F; }
  .compose .area { width: 100%; background: #191B22; border: 1px solid #393F4F; border-radius: 6px; padding: 10px; font: 400 14px/1.5 inherit; color: #fff; min-height: 70px; outline: 0; resize: none; box-sizing: border-box; }
  .compose .actions { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }
  .compose .left { color: #9BAEC8; font-size: 18px; display: flex; gap: 12px; }
  .compose .btn { background: #6364FF; color: #fff; border: 0; padding: 7px 16px; border-radius: 6px; font: 700 13px/1 inherit; cursor: pointer; }
</style>

<div class="app">
  <aside class="nav">
    <div class="logo"><div class="m">M</div>Mastodon</div>
    <div class="item active">🏠 홈</div>
    <div class="item">🔔 알림</div>
    <div class="item">🌐 로컬 타임라인</div>
    <div class="item">🚀 페디버스</div>
    <div class="item">⭐ 즐겨찾기</div>
    <div class="item">📌 컬럼 추가</div>
    <div class="item">⚙ 설정</div>
  </aside>
  <main class="columns">
    <section class="column">
      <header><span class="dot"></span>홈 타임라인</header>
      <div class="compose">
        <textarea class="area" placeholder="무슨 일이 일어나고 있나요?">분산 소셜 코끼리가 페디버스를 들고 다닌다.</textarea>
        <div class="actions">
          <div class="left"><span>📷</span><span>😀</span><span>🌐 공개</span><span>500</span></div>
          <button class="btn">툿!</button>
        </div>
      </div>
      <div class="body">
        <article class="status">
          <div class="head">
            <div class="avatar"></div>
            <div class="meta">
              <div class="name">민지</div>
              <div class="handle">@minji@mas.to · 5분</div>
              <div class="cw">CW: 페디버스 입문</div>
              <div class="text">Mastodon은 인스턴스마다 룰이 다른 자치 네트워크예요. 보라 코끼리 한 마리가 <a>#fediverse</a> <a>#mastodon</a> 을 통째로 들고 다니는 느낌. 🐘</div>
              <div class="actions">
                <span class="act">💬 3</span>
                <span class="act" style="color:#5BB4E8">🔁 8</span>
                <span class="act" style="color:#FFD479">⭐ 42</span>
                <span class="act">⋯</span>
              </div>
            </div>
          </div>
        </article>
        <article class="status">
          <div class="head">
            <div class="avatar" style="background:linear-gradient(135deg,#FF8A65,#E64A19);"></div>
            <div class="meta">
              <div class="name">개발노트</div>
              <div class="handle">@devnote@hachyderm.io · 22분</div>
              <div class="text">멀티컬럼 레이아웃이 Mastodon의 진짜 시그니처. 단순 트위터 클론이 아니라 TweetDeck DNA가 흐른다.</div>
              <div class="actions">
                <span class="act">💬 1</span><span class="act" style="color:#5BB4E8">🔁 14</span><span class="act" style="color:#FFD479">⭐ 67</span><span class="act">⋯</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section class="column">
      <header><span class="dot"></span>알림</header>
      <div class="body">
        <article class="status"><div class="text">🚀 <strong>@design.note</strong> 님이 부스트했습니다.</div></article>
        <article class="status"><div class="text">⭐ <strong>@uxhunter</strong> 님이 즐겨찾기에 추가했습니다.</div></article>
        <article class="status"><div class="text">👤 <strong>@newbie</strong> 님이 팔로우합니다.</div></article>
      </div>
    </section>
    <section class="column">
      <header><span class="dot"></span>로컬 타임라인 — mas.to</header>
      <div class="body">
        <article class="status">
          <div class="head">
            <div class="avatar" style="background:linear-gradient(135deg,#66D880,#1B3320);"></div>
            <div class="meta">
              <div class="name">에코</div>
              <div class="handle">@echo@mas.to · 방금</div>
              <div class="text">멀티컬럼 다크 모드는 정보 밀도가 진짜 높음. 모니터 빈 공간 없이 채워짐.</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</div>
```
