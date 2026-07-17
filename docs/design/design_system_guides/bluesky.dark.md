---
brand: Bluesky
brand_ko: 블루스카이
slug: bluesky
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - infra

color_tone: cool
primary_color_hex: "#0085FF"
primary_color_name: "Bluesky Blue"
mood:
  - 청량
  - 개방
  - 분산

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2023
last_major_revision: 2025
signature_keyword: "스카이 블루 + 흰 나비 로고 + AT 프로토콜 기반의 청량한 분산 소셜"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F0F4F7", "border": "#D9E2EB", "fg": "#161E27", "fg_muted": "#788BA1", "accent": "#0085FF" },
    "dark":  { "bg": "#161E27", "surface": "#1F2A38", "border": "#2C3A4E", "fg": "#EDF2F7", "fg_muted": "#B4C1D2", "accent": "#0085FF" }
  }

hero_html: |
  <div style="font-family:'Inter',-apple-system,'Segoe UI',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:26px;height:26px;background:var(--card-accent);border-radius:9999px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">🦋</div>
      <strong style="font-size:15px;font-weight:700;">Discover</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">Following</span>
    </div>
    <div style="padding:10px 14px;display:flex;flex-direction:column;gap:8px;overflow:hidden;">
      <div style="display:flex;gap:10px;">
        <div style="width:34px;height:34px;border-radius:9999px;background:linear-gradient(135deg,#0085FF,#67D6FE);flex:none;"></div>
        <div style="flex:1;min-width:0;">
          <div style="font:600 13px/1.2 inherit;">민지 <span style="color:var(--card-fg-muted);font-weight:400;">@minji.bsky · 5분</span></div>
          <div style="font:400 13px/1.5 inherit;color:var(--card-fg);margin-top:3px;">Bluesky는 AT 프로토콜 기반 분산 소셜이에요. 클라우드를 옮겨도 핸들이 유지됩니다 🦋</div>
          <div style="display:flex;gap:18px;margin-top:6px;color:var(--card-fg-muted);font:500 11px/1 inherit;">
            <span>💬 4</span><span>🔁 12</span><span>♡ 87</span>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <input style="flex:1;background:var(--card-surface);border:0;border-radius:9999px;padding:9px 14px;color:var(--card-fg);font:500 13px/1 inherit;" placeholder="새 스카잇 쓰기"/>
      <div style="background:var(--card-accent);color:#fff;border-radius:9999px;padding:9px 16px;font:700 12px/1 inherit;">Post</div>
    </div>
  </div>

sources:
  - https://bsky.app/
  - https://atproto.com/
---

### ① 브랜드 DNA
- **브랜드명**: Bluesky (bsky.app)
- **한 줄 정체성**: AT Protocol 기반 분산형 소셜 — Twitter 출신팀이 만든 오픈 마이크로블로깅
- **공식 디자인 철학**: "Algorithms as a feature, not a prison" — 알고리즘 선택권을 사용자에게
- **시그니처 요소 1개**: 라이트 스카이 블루(#0085FF) + 흰 나비 로고 + 흰색 카드 베이스에 옅은 보더(#D9E2EB)의 청량한 톤. X의 검정 모노톤·Mastodon의 보라와 정반대의 깔끔한 라이트 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 청량, 개방, 분산
- **무드 설명**: 흰 배경 + 옅은 회청색 보더. 채도 높은 강조는 액션 버튼과 링크만. 다크 모드에서는 짙은 네이비(#161E27).
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12px 카드 / 9999px 액션)
- **평면성**: Flat — 보더 의존, 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Bluesky Blue */
  --color-primary-50:  #E5F2FF;
  --color-primary-100: #C2E0FF;
  --color-primary-200: #99CDFF;
  --color-primary-300: #66B5FF;
  --color-primary-400: #339EFF;
  --color-primary-500: #0085FF;   /* Bluesky Blue */
  --color-primary-600: #2E9BFF;   /* 다크 위 hover (밝게) */
  --color-primary-700: #66B5FF;
  --color-primary-800: #99CDFF;
  --color-primary-900: #C2E0FF;

  /* Secondary - Sky cyan (액센트) */
  --color-secondary-500: #67D6FE;

  /* Neutral - 다크용 반전 램프 (0=가장 어두움, 900=가장 밝음) */
  --color-neutral-0:    #0E141C;
  --color-neutral-50:   #161E27;
  --color-neutral-100:  #1B2533;
  --color-neutral-200:  #243144;
  --color-neutral-300:  #2C3A4E;   /* border */
  --color-neutral-500:  #5C6E84;
  --color-neutral-700:  #8FA1B5;
  --color-neutral-800:  #B4C1D2;
  --color-neutral-900:  #EDF2F7;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #103526;
  --color-success-fg: #4ADE80;
  --color-warning-bg: #3A2E0E;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #3A1517;
  --color-error-fg:   #F87171;
  --color-info-bg:    #102A40;
  --color-info-fg:    #66B5FF;

  /* Surface */
  --bg-base:     #161E27;
  --bg-subtle:   #1B2533;
  --bg-elevated: #1F2A38;
  --bg-overlay:  rgba(8,12,18,0.66);

  /* Text */
  --text-primary:    #EDF2F7;
  --text-secondary:  #B4C1D2;
  --text-tertiary:   #788BA1;
  --text-on-primary: #FFFFFF;
  --text-link:       #4BA6FF;
  --text-disabled:   #5C6E84;

  /* Border */
  --border-default: #2C3A4E;
  --border-subtle:  #1F2A38;
  --border-strong:  #42526E;
  --border-focus:   #0085FF;
}

[data-theme="light"] {
  /* Primary - Bluesky Blue */
  --color-primary-50:  #E5F2FF;
  --color-primary-100: #C2E0FF;
  --color-primary-200: #99CDFF;
  --color-primary-300: #66B5FF;
  --color-primary-400: #339EFF;
  --color-primary-500: #0085FF;   /* Bluesky Blue */
  --color-primary-600: #006FE0;
  --color-primary-700: #0055AD;
  --color-primary-800: #003E80;
  --color-primary-900: #002752;

  /* Secondary - Sky cyan (액센트) */
  --color-secondary-500: #67D6FE;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F9FB;
  --color-neutral-100:  #F0F4F7;
  --color-neutral-200:  #E2E8F0;
  --color-neutral-300:  #D9E2EB;   /* border */
  --color-neutral-500:  #A6B5C4;
  --color-neutral-700:  #788BA1;
  --color-neutral-800:  #42526E;
  --color-neutral-900:  #161E27;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCFCE7;
  --color-success-fg: #15803D;
  --color-warning-bg: #FEF3C7;
  --color-warning-fg: #A16207;
  --color-error-bg:   #FECACA;
  --color-error-fg:   #B91C1C;
  --color-info-bg:    #DBEAFE;
  --color-info-fg:    #1D4ED8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F9FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(22,30,39,0.50);

  /* Text */
  --text-primary:    #161E27;
  --text-secondary:  #42526E;
  --text-tertiary:   #788BA1;
  --text-on-primary: #FFFFFF;
  --text-link:       #0085FF;
  --text-disabled:   #A6B5C4;

  /* Border */
  --border-default: #D9E2EB;
  --border-subtle:  #F0F4F7;
  --border-strong:  #A6B5C4;
  --border-focus:   #0085FF;
}

[data-theme="dim"] {
  --bg-base:     #1B2533;
  --bg-subtle:   #243144;
  --bg-elevated: #2A3A52;
  --text-primary:   #F0F4F7;
  --border-default: #38476A;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / system-ui
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 30px / 800 / 1.2 / -0.02em
  - H1: 24px / 700 / 1.25
  - H2: 20px / 700 / 1.3
  - H3: 17px / 600 / 1.35
  - Body Large: 17px / 400 / 1.5
  - Body: 15px / 400 / 1.5
  - Body Small: 13px / 400 / 1.4
  - Caption: 12px / 500 / 1.3

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
- **Container**: 단일 피드 max-width 600px (X와 동일 폭), 데스크톱 풀폭 1280px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 12px;
--radius-xl: 18px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.60);
--shadow-sky: 0 4px 16px rgba(0,133,255,0.35);
```

### ⑧ Iconography
- **스타일**: Outline (1.75px) + Filled (활성)
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor Regular / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, Pretendard, sans-serif; border-radius: 9999px; padding: 10px 18px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-follow { background: var(--color-primary-500); color: #fff; }
.btn-following { background: transparent; color: var(--text-primary); border: 1px solid var(--border-strong); }
```

**Input**
```css
.field { background: var(--bg-subtle); border: 1px solid transparent; border-radius: 9999px; padding: 10px 16px; font: 500 14px/1.3 inherit; color: var(--text-primary); }
.field:focus { background: var(--bg-elevated); border-color: var(--color-primary-500); outline: 0; }
.compose { background: transparent; border: 0; font: 400 18px/1.4 inherit; resize: none; }
.compose::placeholder { color: var(--text-tertiary); }
```

**Card (Post)**
```css
.post { padding: 12px 14px; border-bottom: 1px solid var(--border-default); display: flex; gap: 10px; cursor: pointer; }
.post:hover { background: var(--bg-subtle); }
.post .avatar { width: 42px; height: 42px; border-radius: 9999px; flex: none; }
.post .head { font: 600 14px/1.3 inherit; color: var(--text-primary); }
.post .head .handle { font-weight: 400; color: var(--text-tertiary); margin-left: 6px; }
.post .text { font: 400 15px/1.5 inherit; color: var(--text-primary); margin-top: 3px; }
.post .actions { display: flex; gap: 28px; margin-top: 10px; color: var(--text-tertiary); font: 500 12px/1 inherit; }
.embed { margin-top: 10px; border: 1px solid var(--border-default); border-radius: 12px; overflow: hidden; }
```

**Badge / Tag**
```css
.badge-feed { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 6px; padding: 2px 6px; font: 600 11px/1.3 inherit; }
.tag-pds { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); border-radius: 9999px; padding: 2px 8px; font: 500 11px/1.4 inherit; }
.handle-pill { background: var(--bg-subtle); color: var(--text-secondary); border-radius: 9999px; padding: 1px 8px; font: 500 11px/1.4 inherit; }
```

**Navigation (좌측 레일)**
```css
.nav { display: flex; flex-direction: column; gap: 4px; padding: 12px; }
.nav .item { display: flex; align-items: center; gap: 14px; padding: 10px 14px; border-radius: 9999px; font: 500 17px/1 inherit; color: var(--text-primary); cursor: pointer; }
.nav .item:hover { background: var(--bg-subtle); }
.nav .item.active { font-weight: 700; color: var(--color-primary-500); }
.nav .post-btn { background: var(--color-primary-500); color: #fff; padding: 13px; border-radius: 9999px; font: 700 15px/1 inherit; text-align: center; border: 0; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 진한 네이비 단색 사용 금지 — Sky Blue(#0085FF)의 청량함이 시그니처
2. 카드에 큰 그림자 사용 금지 — 1px 보더(#D9E2EB)로 구분
3. 나비 외 다른 마스코트/아이콘 강조 금지 — 단일 로고
4. 카드 모서리 0px(샤프) 금지 — 12px Round 유지
5. 알고리즘 피드 단일 강요 금지 — "Custom Feeds" 탭이 시그니처

### ⑫ 시그니처 적용 예시 (Bluesky 피드 UI)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, 'Segoe UI', sans-serif; color: #EDF2F7; background: #0E141C; letter-spacing: -0.005em; }
  .app { max-width: 600px; margin: 0 auto; min-height: 100vh; background: #161E27; border-left: 1px solid #2C3A4E; border-right: 1px solid #2C3A4E; }
  .topbar { padding: 14px 16px; backdrop-filter: blur(10px); background: rgba(22,30,39,0.85); border-bottom: 1px solid #2C3A4E; display: flex; align-items: center; gap: 10px; position: sticky; top: 0; }
  .topbar .logo { width: 28px; height: 28px; background: #0085FF; border-radius: 9999px; display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
  .topbar h1 { margin: 0; font: 800 20px/1.2 inherit; }
  .tabs { display: flex; gap: 28px; border-bottom: 1px solid #2C3A4E; padding: 0 16px; }
  .tab { padding: 12px 0; font: 600 14px/1 inherit; color: #788BA1; cursor: pointer; border-bottom: 2px solid transparent; }
  .tab.active { color: #EDF2F7; border-bottom-color: #0085FF; }
  .compose { padding: 14px 16px; display: flex; gap: 12px; border-bottom: 1px solid #2C3A4E; }
  .avatar { width: 42px; height: 42px; border-radius: 9999px; flex: none; background: linear-gradient(135deg, #0085FF, #67D6FE); }
  .compose .field { flex: 1; background: transparent; border: 0; font: 400 17px/1.4 inherit; color: #EDF2F7; outline: 0; resize: none; }
  .compose .btn { background: #0085FF; color: #fff; border: 0; border-radius: 9999px; padding: 8px 18px; font: 700 13px/1 inherit; align-self: flex-start; cursor: pointer; }
  .post { padding: 12px 16px; border-bottom: 1px solid #2C3A4E; display: flex; gap: 12px; cursor: pointer; }
  .post:hover { background: #1B2533; }
  .post .body { flex: 1; min-width: 0; }
  .post .head { font: 600 14px/1.3 inherit; }
  .post .head .handle, .post .head .time { color: #788BA1; font-weight: 400; }
  .post .check { display: inline-block; width: 14px; height: 14px; background: #0085FF; -webkit-mask: radial-gradient(circle, #000 8px, transparent 8px); border-radius: 9999px; vertical-align: -2px; }
  .post .text { font: 400 15px/1.5 inherit; color: #EDF2F7; margin-top: 3px; }
  .post .actions { display: flex; justify-content: space-between; max-width: 420px; margin-top: 10px; color: #788BA1; font: 500 12px/1 inherit; }
  .post .act { display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
  .post .act.like:hover { color: #FF6FA0; }
  .embed { margin-top: 10px; border: 1px solid #2C3A4E; border-radius: 12px; padding: 12px; background: #1B2533; }
  .embed .title { font: 600 14px/1.3 inherit; }
  .embed .url { font: 500 12px/1 inherit; color: #788BA1; margin-top: 4px; }
  .feed-pill { display: inline-block; background: #102A40; color: #66B5FF; border-radius: 9999px; padding: 3px 10px; font: 600 11px/1.3 inherit; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo">🦋</div>
    <h1>Bluesky</h1>
    <span style="margin-left:auto;color:#0085FF;font-size:22px;">⚙</span>
  </header>
  <div class="tabs">
    <div class="tab active">Following</div>
    <div class="tab">Discover</div>
    <div class="tab">Hangout</div>
  </div>
  <section class="compose">
    <div class="avatar"></div>
    <textarea class="field" rows="2" placeholder="새 스카잇 작성">분산 소셜의 묘미는 클라우드 이동 자유.</textarea>
    <button class="btn">Post</button>
  </section>
  <article class="post">
    <div class="avatar" style="background:linear-gradient(135deg,#67D6FE,#0085FF);"></div>
    <div class="body">
      <div class="head">민지 <span class="check"></span> <span class="handle">@minji.bsky · 5분</span></div>
      <div class="text">Bluesky는 AT 프로토콜 기반 분산 소셜이에요. 클라우드(PDS)를 옮겨도 핸들·팔로워가 유지됩니다. 🦋</div>
      <div class="embed">
        <span class="feed-pill">Custom Feed</span>
        <div class="title" style="margin-top:6px;">디자이너만 보기</div>
        <div class="url">by @design.bsky.team</div>
      </div>
      <div class="actions">
        <span class="act">💬 4</span>
        <span class="act">🔁 12</span>
        <span class="act like">♡ 87</span>
        <span class="act">📊 2.1K</span>
        <span class="act">⤴</span>
      </div>
    </div>
  </article>
  <article class="post">
    <div class="avatar" style="background:linear-gradient(135deg,#FFB74D,#FF8A65);"></div>
    <div class="body">
      <div class="head">디자인노트 <span class="handle">@designnote.bsky · 1시간</span></div>
      <div class="text">Bluesky의 시그니처는 라이트 톤 + 12px Round 카드. X의 모노 검정과 정반대 방향으로 청량함을 밀어붙인 인터페이스.</div>
      <div class="actions">
        <span class="act">💬 8</span><span class="act">🔁 24</span><span class="act like">♡ 211</span><span class="act">📊 6.8K</span><span class="act">⤴</span>
      </div>
    </div>
  </article>
</div>
```
