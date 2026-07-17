---
brand: Reddit
brand_ko: 레딧
slug: reddit
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - media

color_tone: warm
primary_color_hex: "#FF4500"
primary_color_name: "Reddit Orangered"
mood:
  - 커뮤니티
  - 활기참
  - 토론

font_category: sans-serif
font_primary: IBM Plex Sans
font_korean_supported: true

density: compact
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2005
last_major_revision: 2024
signature_keyword: "Snoo 마스코트와 Orangered upvote의 커뮤니티 토론 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8F9FA", "border": "#EAEDEF", "fg": "#0F1A1C", "fg_muted": "#7A8285", "accent": "#FF4500" },
    "dark":  { "bg": "#0E1113", "surface": "#181C1F", "border": "#2A2E31", "fg": "#F2F4F5", "fg_muted": "#B8C5C9", "accent": "#FF4500" }
  }

hero_html: |
  <div style="font-family:'IBM Plex Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:22px;height:22px;background:var(--card-accent);border-radius:50%;position:relative;">
        <span style="position:absolute;left:7px;top:7px;width:8px;height:6px;background:#fff;border-radius:3px;"></span>
      </span>
      <strong style="font-size:14px;font-weight:700;">reddit</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">r/design</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:6px;">
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;display:grid;grid-template-columns:36px 1fr;overflow:hidden;">
        <div style="background:var(--card-surface);display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:2px;">
          <span style="font-size:14px;color:var(--card-accent);font-weight:700;cursor:pointer;">▲</span>
          <strong style="font-size:11px;color:var(--card-accent);">2.4k</strong>
          <span style="font-size:14px;color:var(--card-fg-muted);cursor:pointer;">▼</span>
        </div>
        <div style="padding:10px 12px;">
          <div style="font-size:9px;color:var(--card-fg-muted);display:flex;align-items:center;gap:4px;">
            <span style="width:14px;height:14px;border-radius:50%;background:linear-gradient(135deg,#FF4500,#0079D3);"></span>
            <strong style="color:var(--card-fg);font-size:11px;font-weight:700;">r/design</strong>
            <span>· u/mina · 4시간</span>
          </div>
          <div style="font-size:13px;font-weight:700;line-height:1.3;color:var(--card-fg);margin-top:4px;">디자인 시스템 처음 만들 때 토큰부터 정해야 할까요?</div>
          <div style="font-size:11px;color:var(--card-fg-muted);line-height:1.5;margin-top:4px;">팀에서 디자인 시스템 v1을 만들기 시작했는데, 컴포넌트부터 만들 vs 토큰부터 정의할 vs ...</div>
          <div style="display:flex;gap:10px;margin-top:6px;font-size:10px;color:var(--card-fg-muted);font-weight:600;">
            <span>💬 184 댓글</span>
            <span>↗ 공유</span>
            <span>🔖 저장</span>
          </div>
        </div>
      </div>
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:10px 12px;">
        <div style="font-size:9px;color:var(--card-fg-muted);">r/css · u/joon · 1일</div>
        <div style="font-size:13px;font-weight:700;line-height:1.3;margin-top:4px;">CSS 그라데이션으로 brand mark 만들기</div>
        <div style="font-size:10px;color:var(--card-fg-muted);margin-top:6px;display:flex;gap:8px;"><span>▲ 1.2k</span><span>💬 92</span></div>
      </div>
    </div>
  </div>

sources:
  - https://www.reddit.com/
  - https://redditinc.com/brand-resources
  - https://design.reddit.com/
---

### ① 브랜드 DNA
- **브랜드명**: Reddit
- **한 줄 정체성**: 토론과 투표(upvote/downvote)로 운영되는 거대한 커뮤니티 네트워크
- **공식 디자인 철학**: "The front page of the internet — community, discovery, conversation"
- **시그니처 요소 1개**: Reddit Orangered(#FF4500) upvote + Snoo(외계인 마스코트) + 좌측 vote bar의 시그니처 레이아웃

### ② 톤 & 무드
- **핵심 키워드 3개**: 커뮤니티, 활기참, 토론
- **무드 설명**: 흰 캔버스 + Orangered 액센트 + 짙은 본문. 게시물마다 좌측 vote bar가 사이드 stripe처럼 시각화된다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (마스코트)
- **밀도(Density)**: Compact — 게시물 리스트
- **모서리 성향**: Round (12~16px Reddit 2024 리브랜드)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Reddit Orangered */
  --color-primary-50:  #FFEEE5;
  --color-primary-100: #FFCDB3;
  --color-primary-200: #FF9966;
  --color-primary-300: #FF7547;
  --color-primary-400: #FF5C2E;
  --color-primary-500: #FF4500;  /* Reddit Orangered */
  --color-primary-600: #E03A00;
  --color-primary-700: #B82E00;
  --color-primary-800: #8A2200;
  --color-primary-900: #5C1700;

  /* Secondary - Reddit Blue (downvote/link) */
  --color-secondary-500: #0079D3;

  /* Vote colors (시그니처) */
  --vote-up:   #FF4500;
  --vote-down: #7193FF;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FA;
  --color-neutral-100:  #F2F4F5;
  --color-neutral-200:  #EAEDEF;
  --color-neutral-300:  #DAE0E6;
  --color-neutral-500:  #B8C5C9;
  --color-neutral-700:  #7A8285;
  --color-neutral-800:  #4F5A5E;
  --color-neutral-900:  #0F1A1C;
  --color-neutral-1000: #030708;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #0079D3;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F9FA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(15,26,28,0.50);

  /* Text */
  --text-primary:    #0F1A1C;
  --text-secondary:  #4F5A5E;
  --text-tertiary:   #7A8285;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B8C5C9;

  /* Border */
  --border-default: #EAEDEF;
  --border-subtle:  #F2F4F5;
  --border-strong:  #DAE0E6;
  --border-focus:   #FF4500;
}

[data-theme="dark"] {
  --bg-base: #0E1113;
  --bg-subtle: #181C1F;
  --bg-elevated: #1A1A1B;
  --text-primary: #F2F4F5;
  --text-secondary: #8C9295;
  --border-default: #343536;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: IBM Plex Sans (OFL) — Reddit 2024 리브랜드 이후
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.01em
  - H1: 28px / 700 / 1.2 / -0.005em
  - H2: 20px / 700 / 1.27 / 0
  - H3: 16px / 700 / 1.3 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
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
- **Container**: max-width 1080px (피드), 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 16px;     /* 게시물 카드 */
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(15,26,28,0.06);
--shadow-md: 0 4px 12px rgba(15,26,28,0.10);
--shadow-lg: 0 8px 24px rgba(15,26,28,0.14);
--shadow-xl: 0 16px 32px rgba(255,69,0,0.18);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (vote 화살표는 filled)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 13px/1 'IBM Plex Sans', Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 16px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-join { background: var(--color-primary-500); color: #fff; }
.btn-join.joined { background: transparent; color: var(--text-primary); border: 1px solid var(--border-strong); }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 9999px; padding: 8px 16px; font-size: 14px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(255,69,0,0.18); }
```

**Card** (Post card)
```css
.post { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); display: grid; grid-template-columns: 40px 1fr; overflow: hidden; }
.post .vote { background: var(--bg-subtle); display: flex; flex-direction: column; align-items: center; padding: 8px 0; gap: 4px; }
.post .vote .arrow { font-size: 16px; color: var(--text-tertiary); cursor: pointer; }
.post .vote .arrow.up.active { color: var(--vote-up); }
.post .vote .arrow.down.active { color: var(--vote-down); }
.post .vote .count { font-size: 12px; font-weight: 700; }
.post .body { padding: 10px 14px; }
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Flair**
```css
.flair { padding: 0 8px; height: 18px; border-radius: 4px; font-size: 11px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; }
.flair-discussion { background: var(--color-primary-50); color: var(--color-primary-700); }
.flair-help       { background: var(--color-info-bg); color: var(--color-info-fg); }
.flair-news       { background: var(--color-success-bg); color: var(--color-success-fg); }

.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 8px 16px; display: flex; align-items: center; gap: 14px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .brand { display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: 18px; }
.topnav .brand .snoo { width: 28px; height: 28px; background: var(--color-primary-500); border-radius: 50%; }
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
1. upvote 색을 임의 매핑 금지 — Orangered 보존
2. downvote를 빨강으로 변경 금지 — Periwinkle Blue가 표준
3. Snoo 마스코트의 비율을 변경 금지 — circle 시그니처
4. Subscribe/Join 버튼을 sharp 사각으로 변경 금지 — pill (9999px)
5. flair 색을 의미와 무관하게 무작위 적용 금지

### ⑫ 시그니처 적용 예시 (Subreddit feed)

```html
<style>
  body { margin: 0; font-family: 'IBM Plex Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: #0F1A1C; background: #F8F9FA; }
  .topnav { padding: 10px 16px; display: flex; align-items: center; gap: 14px; background: #fff; border-bottom: 1px solid #EAEDEF; }
  .topnav .brand { display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: 18px; }
  .topnav .brand .snoo { width: 28px; height: 28px; background: #FF4500; border-radius: 50%; position: relative; }
  .topnav .brand .snoo::after { content:""; position: absolute; left: 9px; top: 10px; width: 10px; height: 8px; background: #fff; border-radius: 4px; }
  .layout { max-width: 1100px; margin: 16px auto; padding: 0 16px; display: grid; grid-template-columns: 1fr 280px; gap: 16px; }
  .feed { display: flex; flex-direction: column; gap: 8px; }
  .post { background: #fff; border: 1px solid #EAEDEF; border-radius: 16px; display: grid; grid-template-columns: 40px 1fr; overflow: hidden; cursor: pointer; }
  .post:hover { border-color: #DAE0E6; }
  .post .vote { background: #F8F9FA; display: flex; flex-direction: column; align-items: center; padding: 10px 0; gap: 4px; font-size: 14px; }
  .post .vote .up { color: #FF4500; cursor: pointer; }
  .post .vote .count { font-size: 11px; font-weight: 700; color: #FF4500; }
  .post .vote .down { color: #7A8285; cursor: pointer; }
  .post .body { padding: 12px 14px; }
  .post .head { font-size: 11px; color: #7A8285; display: flex; align-items: center; gap: 6px; }
  .post .head .sub { display: flex; align-items: center; gap: 4px; color: #0F1A1C; font-weight: 700; }
  .post .head .sub .ic { width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(135deg,#FF4500,#0079D3); }
  .post h3 { margin: 6px 0; font-size: 16px; font-weight: 700; line-height: 1.3; }
  .post p { font-size: 13px; line-height: 1.5; color: #4F5A5E; margin: 0; }
  .post .actions { display: flex; gap: 12px; margin-top: 10px; font-size: 12px; color: #7A8285; font-weight: 600; }
  .side { background: #fff; border: 1px solid #EAEDEF; border-radius: 16px; padding: 16px; height: fit-content; }
  .side h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; }
  .side p { font-size: 13px; line-height: 1.5; color: #4F5A5E; margin: 0 0 12px; }
  .side button { background: #FF4500; color: #fff; border: 0; border-radius: 9999px; padding: 8px 16px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; }
</style>

<header class="topnav">
  <div class="brand"><div class="snoo"></div><strong>reddit</strong></div>
  <input class="input" placeholder="🔍 Reddit 검색" style="flex:1; max-width:360px; background:#F8F9FA; border:1px solid #EAEDEF; border-radius:9999px; padding:8px 16px; font-size:13px;"/>
  <button class="btn btn-primary" style="margin-left:auto; background:#FF4500; color:#fff; border:0; border-radius:9999px; padding:8px 16px; font-size:13px; font-weight:700; cursor:pointer; font-family:inherit;">+ 만들기</button>
</header>

<main class="layout">
  <div class="feed">
    <div class="post">
      <div class="vote"><span class="up">▲</span><span class="count">2.4k</span><span class="down">▼</span></div>
      <div class="body">
        <div class="head"><span class="sub"><span class="ic"></span>r/design</span><span>· u/mina · 4시간 전</span><span class="flair flair-discussion" style="background:#FFEEE5; color:#B82E00; padding:0 8px; height:18px; line-height:18px; border-radius:4px; font-size:11px; font-weight:600; margin-left:auto;">Discussion</span></div>
        <h3>디자인 시스템 처음 만들 때 토큰부터 정해야 할까요?</h3>
        <p>팀에서 디자인 시스템 v1을 시작하는데 토큰 → 컴포넌트 순서가 좋을지, 컴포넌트 → 토큰이 좋을지 다들 어떻게 하셨나요?</p>
        <div class="actions"><span>💬 184 댓글</span><span>↗ 공유</span><span>🔖 저장</span></div>
      </div>
    </div>
    <div class="post">
      <div class="vote"><span class="up">▲</span><span class="count">1.2k</span><span class="down">▼</span></div>
      <div class="body">
        <div class="head"><span class="sub"><span class="ic" style="background:linear-gradient(135deg,#0079D3,#7193FF);"></span>r/css</span><span>· u/joon · 1일 전</span></div>
        <h3>CSS 그라데이션으로 brand mark 만들기</h3>
        <p>linear-gradient + mask로 단일 div에서 그라데이션 마스코트 만드는 방법.</p>
        <div class="actions"><span>💬 92 댓글</span><span>↗ 공유</span><span>🔖 저장</span></div>
      </div>
    </div>
  </div>
  <aside class="side">
    <h3>r/design 정보</h3>
    <p>디자인 토론을 위한 커뮤니티. 1.2M 멤버 · 4.2k 온라인.</p>
    <button>가입</button>
  </aside>
</main>
```
