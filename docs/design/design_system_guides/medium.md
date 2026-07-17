---
brand: Medium
brand_ko: 미디엄
slug: medium
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media

color_tone: neutral
primary_color_hex: "#1A8917"
primary_color_name: "Medium Green"
mood:
  - 글쓰기 우선
  - 읽기 편한
  - 절제

font_category: serif
font_primary: Charter / sohne
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2012
last_major_revision: 2024
signature_keyword: "큰 세리프 본문(Charter)과 검정 워드마크의 longform 읽기 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFAFA", "border": "#F2F2F2", "fg": "#242424", "fg_muted": "#6B6B6B", "accent": "#1A8917" },
    "dark":  { "bg": "#191919", "surface": "#2A2A2A", "border": "#333333", "fg": "#E6E6E6", "fg_muted": "#999999", "accent": "#2A9F1E" }
  }

hero_html: |
  <div style="font-family:'Charter',Georgia,'Apple SD Gothic Neo',serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;font-family:sohne,-apple-system,sans-serif;">
      <span style="display:inline-block;width:22px;height:22px;background:var(--card-fg);border-radius:50%;color:var(--card-bg);display:grid;place-items:center;font-size:14px;font-weight:900;font-family:Georgia,serif;">M</span>
      <strong style="font-size:14px;font-weight:700;">Medium</strong>
      <button style="margin-left:auto;background:var(--card-accent);color:#fff;border:0;border-radius:9999px;padding:5px 12px;font-size:11px;font-weight:600;font-family:inherit;">멤버십</button>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;font-family:sohne,sans-serif;">
        <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#1A8917,#000);"></div>
        <span style="font-size:11px;font-weight:600;">In <strong style="color:var(--card-accent);">UX Collective</strong> by Mina</span>
      </div>
      <h2 style="font-size:22px;font-weight:700;line-height:1.2;letter-spacing:-0.005em;margin:4px 0 0;">컴포넌트보다 먼저 정해야 할 8가지 토큰</h2>
      <p style="font-size:14px;line-height:1.55;color:var(--card-fg-muted);margin:0;">디자인 시스템의 첫 주는 컴포넌트가 아니라 토큰을 정의하는 데 써야 한다.</p>
      <div style="display:flex;align-items:center;gap:8px;font-family:sohne,sans-serif;font-size:11px;color:var(--card-fg-muted);margin-top:8px;">
        <span>★ Member-only</span>
        <span>·</span>
        <span>5월 8일</span>
        <span>·</span>
        <span>8 min read</span>
        <span style="margin-left:auto;display:flex;gap:14px;">
          <span>👏 1.2K</span>
          <span>💬 28</span>
        </span>
      </div>
    </div>
  </div>

sources:
  - https://medium.com/
  - https://medium.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Medium
- **한 줄 정체성**: 글쓰기와 독서의 longform 플랫폼 — Charter 세리프와 절제된 UI
- **공식 디자인 철학**: "Where good ideas find you — quality writing, calm reading"
- **시그니처 요소 1개**: 큰 세리프 본문(Charter) + 검정 M 워드마크 + Medium Green(#1A8917) 멤버십 액센트

### ② 톤 & 무드
- **핵심 키워드 3개**: 글쓰기 우선, 읽기 편한, 절제
- **무드 설명**: 흰 캔버스 + 검은 세리프 본문 + 거의 모든 chrome이 사라진 longform 톤. 멤버십 신호에만 Green이 등장.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 본문 가독성 우선
- **모서리 성향**: Round (4~9999px pill)
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Medium Green */
  --color-primary-50:  #E5F6E1;
  --color-primary-100: #C2E8B8;
  --color-primary-200: #84D072;
  --color-primary-300: #45B12C;
  --color-primary-400: #2A9F1E;
  --color-primary-500: #1A8917;  /* Medium Green */
  --color-primary-600: #156D12;
  --color-primary-700: #0E520D;
  --color-primary-800: #093809;
  --color-primary-900: #042204;

  /* Secondary - Black (워드마크) */
  --color-secondary-500: #242424;

  /* Neutral - warm grayscale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F2F2F2;
  --color-neutral-200:  #E6E6E6;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #6B6B6B;
  --color-neutral-800:  #404040;
  --color-neutral-900:  #242424;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E5F6E1;
  --color-success-fg: #1A8917;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(36,36,36,0.50);

  /* Text */
  --text-primary:    #242424;
  --text-secondary:  #6B6B6B;
  --text-tertiary:   #999999;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E6E6E6;
  --border-subtle:  #F2F2F2;
  --border-strong:  #C7C7C7;
  --border-focus:   #1A8917;
}

[data-theme="dark"] {
  --bg-base: #191919;
  --bg-subtle: #232323;
  --bg-elevated: #2A2A2A;
  --text-primary: #E6E6E6;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문 본문: Charter (Bitstream, Medium 라이선스) — 폴백 Georgia
  - 영문 UI: sohne / Inter (OFL 폴백) — 폴백 -apple-system
  - 한글 본문: Noto Serif KR (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display (Charter): 56px / 700 / 1.1 / -0.01em
  - H1 (Charter): 42px / 700 / 1.15 / -0.005em
  - H2 (Charter): 32px / 700 / 1.2 / 0
  - H3 (Charter): 24px / 700 / 1.3 / 0
  - Body Large (Charter): 21px / 400 / 1.6 / 0
  - Body (Charter): 19px / 400 / 1.6 / 0
  - Body Small (sohne): 14px / 400 / 1.43 / 0
  - Caption (sohne): 13px / 500 / 1.33 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 680px (longform 본문), 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;   /* button 시그니처 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.10);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.14);
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
  font: 500 14px/1 sohne, Inter, -apple-system, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-secondary-500); color: #fff; }
.btn-primary:hover { background: #000; }
.btn-member { background: var(--color-primary-500); color: #fff; }   /* 멤버십 */
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 0; border-bottom: 1px solid var(--border-strong); border-radius: 0; padding: 8px 0; font-size: 16px; font-family: Charter, Georgia, serif; }
.input:focus { outline: none; border-bottom-color: var(--text-primary); }
```

**Card** (Story preview)
```css
.story { padding: 16px 0; border-bottom: 1px solid var(--border-subtle); cursor: pointer; }
.story h3 { font-family: Charter, Georgia, serif; font-size: 22px; font-weight: 700; line-height: 1.25; letter-spacing: -0.005em; margin: 8px 0 6px; }
.story p { font-family: Charter, Georgia, serif; font-size: 16px; line-height: 1.5; color: var(--text-secondary); margin: 0; }
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 500; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; font-family: sohne, Inter, sans-serif; }
.tag-solid   { background: var(--color-secondary-500); color: #fff; }
.tag-subtle  { background: var(--bg-subtle); color: var(--text-primary); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-member  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-member::before { content: "★ "; }
```

**Navigation**
```css
.topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); font-family: sohne, Inter, sans-serif; }
.topnav .brand { font-family: Georgia, serif; font-size: 24px; font-weight: 900; letter-spacing: -0.02em; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
/* 박수 (clap) animation */
--ease-clap: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 본문에 sans-serif 폰트 강제 사용 금지 — Charter 세리프가 시그니처
2. brand green을 본문 텍스트나 link에 분산 사용 금지 — 멤버십 신호에만
3. 본문 폰트 size 16px 미만으로 줄이지 말 것 — longform 가독성 핵심
4. 박수(👏) 횟수 표기를 좋아요(♡)로 변경 금지 — Medium 시그니처
5. M 워드마크를 임의 색 변경 금지 — 검정 단일

### ⑫ 시그니처 적용 예시 (Article)

```html
<style>
  body { margin: 0; font-family: Charter, Georgia, 'Apple SD Gothic Neo', serif; color: #242424; background: #fff; }
  .topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid #F2F2F2; font-family: sohne, Inter, sans-serif; }
  .topnav .brand { font-family: Georgia, serif; font-size: 28px; font-weight: 900; letter-spacing: -0.02em; }
  .topnav .search { background: #F9F9F9; border-radius: 9999px; padding: 8px 16px 8px 36px; font-size: 13px; color: #6B6B6B; flex: 0 0 200px; position: relative; }
  .topnav .search::before { content:"🔍"; position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 13px; }
  .topnav button { background: #242424; color: #fff; border: 0; border-radius: 9999px; padding: 8px 14px; font-size: 13px; font-weight: 500; cursor: pointer; font-family: inherit; }
  .article { max-width: 680px; margin: 56px auto; padding: 0 24px; }
  .pub { display: flex; align-items: center; gap: 12px; font-family: sohne, Inter, sans-serif; margin-bottom: 16px; }
  .pub .av { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #1A8917, #000); }
  .pub .who { font-size: 14px; }
  .pub .who strong { font-weight: 600; color: #242424; }
  .pub .who small { display: block; color: #6B6B6B; margin-top: 2px; font-size: 13px; }
  .pub .follow { background: #1A8917; color: #fff; border: 0; border-radius: 9999px; padding: 6px 14px; font-size: 13px; font-weight: 500; cursor: pointer; font-family: inherit; }
  .article h1 { font-size: 42px; font-weight: 700; line-height: 1.15; letter-spacing: -0.005em; margin: 0 0 12px; }
  .article .lead { font-size: 22px; line-height: 1.4; color: #6B6B6B; margin: 0 0 24px; }
  .article .meta { display: flex; gap: 8px; align-items: center; font-family: sohne, Inter, sans-serif; font-size: 13px; color: #6B6B6B; padding: 14px 0; border-top: 1px solid #F2F2F2; border-bottom: 1px solid #F2F2F2; margin-bottom: 32px; }
  .article .meta .member { background: #E5F6E1; color: #156D12; padding: 2px 10px; border-radius: 9999px; font-weight: 500; }
  .article .meta .member::before { content:"★ "; }
  .article p { font-size: 21px; line-height: 1.6; margin: 16px 0; }
  .article p strong { font-weight: 700; }
  .article p em { font-style: italic; }
  .actions { display: flex; gap: 16px; align-items: center; padding: 24px 0; border-top: 1px solid #F2F2F2; font-family: sohne, Inter, sans-serif; font-size: 13px; color: #6B6B6B; }
</style>

<header class="topnav">
  <div class="brand">M</div>
  <div class="search">검색</div>
  <span style="margin-left:auto; display:flex; gap:18px; align-items:center; font-size:14px; color:#6B6B6B;">
    <span>✏ 글쓰기</span>
    <button>가입</button>
  </span>
</header>

<article class="article">
  <div class="pub">
    <div class="av"></div>
    <div class="who">
      <strong>Mina Park</strong> in <strong style="color:#1A8917;">UX Collective</strong>
      <small>5월 8일 · 8 min read</small>
    </div>
    <button class="follow" style="margin-left:auto;">팔로우</button>
  </div>
  <h1>컴포넌트보다 먼저 정해야 할 8가지 토큰</h1>
  <p class="lead">디자인 시스템의 첫 주는 컴포넌트가 아니라 토큰을 정의하는 데 써야 한다.</p>
  <div class="meta">
    <span class="member">Member-only story</span>
    <span style="margin-left:auto;">👏 1.2K · 💬 28 · 🔖</span>
  </div>
  <p>가장 자주 받는 질문은 — "디자인 시스템을 만들 때 무엇부터 시작해야 할까요?"이다. 답은 <strong>토큰부터</strong>이다.</p>
  <p>토큰은 시스템의 <em>합의 그 자체</em>이다. 색·간격·라운드·폰트 같은 작은 결정에 이름을 붙이는 일을 미루면, 컴포넌트는 모래성처럼 쌓인다.</p>
  <p>이 글에서는 컴포넌트보다 먼저 정해야 할 8가지 토큰 — 색상 팔레트 9단계, semantic 컬러, 간격 7단계, 폰트 가족, 폰트 위계, 라운드, 그림자, 모션 — 을 차례로 살펴본다.</p>
  <div class="actions">
    <span>👏 박수</span>
    <span>💬 응답 28개</span>
    <span style="margin-left:auto;">🔖 ↗ ⋯</span>
  </div>
</article>
```
