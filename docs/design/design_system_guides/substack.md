---
brand: Substack
brand_ko: 서브스택
slug: substack
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - media

color_tone: warm
primary_color_hex: "#FF6719"
primary_color_name: "Substack Orange"
mood:
  - 글쓰기 우선
  - 따뜻함
  - 독립

font_category: serif
font_primary: Spectral / Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2017
last_major_revision: 2024
signature_keyword: "오렌지 액센트와 세리프 본문의 longform 뉴스레터 톤"

hero_html: |
  <div style="font-family:Spectral,Georgia,'Apple SD Gothic Neo',serif;background:#FFFFFF;color:#1A1A1A;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #E6E6E6;padding:10px 14px;display:flex;align-items:center;gap:8px;font-family:Inter,sans-serif;">
      <span style="display:inline-flex;align-items:flex-end;gap:1px;height:18px;">
        <span style="width:5px;height:30%;background:#FF6719;"></span>
        <span style="width:5px;height:60%;background:#FF6719;"></span>
        <span style="width:5px;height:90%;background:#FF6719;"></span>
      </span>
      <strong style="font-size:14px;font-weight:700;">Substack</strong>
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;font-family:Inter,sans-serif;">
        <div style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#FF6719,#FFB85C);"></div>
        <div style="font-size:11px;font-weight:700;">디자인 노트</div>
        <span style="font-size:10px;color:#666;">by Mina · 5월 8일</span>
      </div>
      <h2 style="font-size:18px;font-weight:600;line-height:1.25;margin:4px 0 0;letter-spacing:-0.005em;">디자인 시스템을 처음 만들 때 가장 흔한 실수</h2>
      <p style="font-size:12px;line-height:1.55;color:#444;margin:0;">컴포넌트부터 만들고 토큰을 나중에 정의하면 시스템이 곧 흐트러집니다. 토큰이 시스템의 <em style="font-style:italic;">합의</em>이기 때문이죠.</p>
      <div style="display:flex;gap:8px;font-family:Inter,sans-serif;font-size:11px;color:#666;margin-top:8px;align-items:center;">
        <span>♡ 284</span>
        <span>·</span>
        <span>💬 42</span>
        <span style="margin-left:auto;background:#FF6719;color:#fff;padding:6px 14px;border-radius:9999px;font-weight:700;font-family:inherit;">구독</span>
      </div>
    </div>
  </div>

sources:
  - https://substack.com/
  - https://substack.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Substack
- **한 줄 정체성**: 작가가 독자에게 직접 글을 발행하고 구독료를 받는, 독립 뉴스레터 플랫폼
- **공식 디자인 철학**: "A new economic engine for culture — owned by writers, paid by readers"
- **시그니처 요소 1개**: Substack Orange(#FF6719) + Spectral 세리프 본문 + 3-bar 로고

### ② 톤 & 무드
- **핵심 키워드 3개**: 글쓰기 우선, 따뜻함, 독립
- **무드 설명**: 흰 캔버스 + 검은 세리프 본문 + 오렌지 구독 액센트. longform 글이 페이지의 주인공이 되는 종이 톤.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (세리프)
- **밀도(Density)**: Comfortable — longform 글
- **모서리 성향**: Soft (4~12px)
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Substack Orange */
  --color-primary-50:  #FFEFE5;
  --color-primary-100: #FFD8BD;
  --color-primary-200: #FFB175;
  --color-primary-300: #FF8A3D;
  --color-primary-400: #FF7A1E;
  --color-primary-500: #FF6719;  /* Substack Orange */
  --color-primary-600: #E5550A;
  --color-primary-700: #B84408;
  --color-primary-800: #8A3306;
  --color-primary-900: #5C2204;

  /* Secondary */
  --color-secondary-500: #1A1A1A;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F2F2F2;
  --color-neutral-200:  #E6E6E6;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #444444;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFEFE5;
  --color-warning-fg: #FF6719;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,26,0.50);

  /* Text */
  --text-primary:    #1A1A1A;
  --text-secondary:  #444444;
  --text-tertiary:   #666666;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E6E6E6;
  --border-subtle:  #F2F2F2;
  --border-strong:  #C7C7C7;
  --border-focus:   #FF6719;
}

[data-theme="dark"] {
  --bg-base: #1A1A1A;
  --bg-subtle: #2A2A2A;
  --bg-elevated: #383838;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문 본문: Spectral (OFL) — Substack 본문 시그니처
  - 영문 UI: Inter (OFL)
  - 한글: Noto Serif KR (본문) / Pretendard (UI)
- **위계**:
  - Display (Spectral): 56px / 600 / 1.1 / -0.01em
  - H1 (Spectral): 32px / 600 / 1.2 / -0.005em
  - H2 (Spectral): 24px / 500 / 1.3 / 0
  - H3 (Spectral): 20px / 500 / 1.3 / 0
  - Body Large (Spectral): 19px / 400 / 1.6 / 0.01em
  - Body (Spectral): 17px / 400 / 1.6 / 0.01em
  - Body Small (Inter): 13px / 400 / 1.43 / 0
  - Caption (Inter): 12px / 500 / 1.33 / 0

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
- **Container**: max-width 720px (longform), 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-xl: 18px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.10);
--shadow-xl: 0 16px 32px rgba(255,103,25,0.18);
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
  font: 700 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-subscribe { background: var(--color-primary-500); color: #fff; }   /* 시그니처 */
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: var(--radius-md); padding: 10px 14px; font-size: 15px; font-family: Inter, sans-serif; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(255,103,25,0.18); }
```

**Card** (Post card)
```css
.post { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 20px 24px; cursor: pointer; }
.post:hover { background: var(--bg-subtle); }
.post h3 { font-family: Spectral, Georgia, serif; font-size: 22px; font-weight: 600; margin: 8px 0 6px; line-height: 1.3; letter-spacing: -0.005em; }
.post p { font-family: Spectral, Georgia, serif; font-size: 15px; line-height: 1.55; color: var(--text-secondary); margin: 0; }
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; font-family: Inter, sans-serif; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); font-family: Inter, sans-serif; }
.topnav .logo { display: inline-flex; align-items: flex-end; gap: 2px; height: 22px; }
.topnav .logo span { width: 6px; background: var(--color-primary-500); }
.topnav .logo .b1 { height: 30%; }
.topnav .logo .b2 { height: 60%; }
.topnav .logo .b3 { height: 100%; }
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
1. 본문에 sans-serif 폰트 사용 금지 — Spectral 세리프가 시그니처
2. brand orange를 본문 텍스트에 사용 금지 — 구독 액션과 mark에만
3. 헤드라인을 sharp 사각 카드로 가두지 말 것 — longform 흐름 유지
4. 본문 line-height를 1.4 미만으로 줄이지 말 것 — 가독성 핵심
5. 3-bar 로고 비율 변경 금지

### ⑫ 시그니처 적용 예시 (Article + subscribe)

```html
<style>
  body { margin: 0; font-family: Spectral, Georgia, 'Apple SD Gothic Neo', serif; color: #1A1A1A; background: #fff; }
  .topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid #E6E6E6; font-family: Inter, sans-serif; }
  .topnav .logo { display: inline-flex; align-items: flex-end; gap: 2px; height: 22px; }
  .topnav .logo span { width: 6px; background: #FF6719; }
  .topnav .logo .b1 { height: 30%; } .topnav .logo .b2 { height: 60%; } .topnav .logo .b3 { height: 100%; }
  .topnav strong { font-size: 16px; font-weight: 700; }
  .article { max-width: 720px; margin: 48px auto; padding: 0 24px; }
  .pub { display: flex; align-items: center; gap: 10px; font-family: Inter, sans-serif; margin-bottom: 16px; }
  .pub .logo { width: 40px; height: 40px; border-radius: 8px; background: linear-gradient(135deg,#FF6719,#FFB85C); }
  .pub strong { font-size: 14px; font-weight: 700; }
  .pub small { font-size: 12px; color: #666; display: block; margin-top: 2px; }
  .article h1 { font-size: 40px; font-weight: 600; line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 14px; }
  .article .lead { font-size: 20px; line-height: 1.5; color: #444; margin: 0 0 24px; }
  .article p { font-size: 18px; line-height: 1.65; margin: 16px 0; }
  .article p em { font-style: italic; }
  .article p a { color: #FF6719; text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
  .subscribe { background: #FAFAFA; border: 1px solid #E6E6E6; border-radius: 12px; padding: 24px; margin: 32px 0; text-align: center; font-family: Inter, sans-serif; }
  .subscribe h3 { font-family: Spectral, Georgia, serif; font-size: 22px; font-weight: 600; margin: 0 0 6px; }
  .subscribe p { font-family: Inter, sans-serif; font-size: 13px; color: #666; margin: 0 0 14px; }
  .subscribe .form { display: flex; gap: 6px; max-width: 420px; margin: 0 auto; }
  .subscribe input { flex: 1; padding: 11px 14px; border: 1px solid #C7C7C7; border-radius: 6px; font-size: 14px; font-family: inherit; }
  .subscribe button { background: #FF6719; color: #fff; border: 0; border-radius: 6px; padding: 11px 22px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .actions { display: flex; gap: 14px; align-items: center; padding: 20px 0; border-top: 1px solid #E6E6E6; font-family: Inter, sans-serif; font-size: 13px; color: #666; }
</style>

<header class="topnav">
  <div class="logo"><span class="b1"></span><span class="b2"></span><span class="b3"></span></div>
  <strong>Substack</strong>
  <span style="margin-left:auto; font-size:13px; color:#666;">로그인</span>
</header>

<article class="article">
  <div class="pub">
    <div class="logo"></div>
    <div>
      <strong>디자인 노트</strong>
      <small>by Mina Park · 5월 8일 · 12,840 구독</small>
    </div>
  </div>
  <h1>디자인 시스템을 처음 만들 때 가장 흔한 실수</h1>
  <p class="lead">컴포넌트부터 만들고 토큰을 나중에 정의하면 시스템이 곧 흐트러집니다.</p>
  <p>이 글에서 가장 자주 받는 질문 중 하나는 — "디자인 시스템을 처음 만들 때 무엇부터 시작해야 할까요?"입니다.</p>
  <p>제 답은 명확합니다: <em>토큰부터</em>. 토큰이 시스템의 <a href="#">합의 그 자체</a>이기 때문이죠. 색·간격·라운드·폰트 같은 작은 결정에 이름을 붙이는 일을 미루면, 컴포넌트는 그 위에 모래성처럼 쌓입니다.</p>
  <div class="subscribe">
    <h3>이런 글을 매주 받아보세요</h3>
    <p>디자인 시스템과 협업에 관한 longform — 매주 목요일.</p>
    <div class="form">
      <input placeholder="이메일 주소 입력"/>
      <button>구독</button>
    </div>
  </div>
  <p>두 번째 흔한 실수는 — 시스템을 만든 첫 주에 100개 컴포넌트를 만드는 것입니다. 사용되지 않는 컴포넌트는 곧 쓰레기가 됩니다.</p>
  <div class="actions">
    <span>♡ 284</span>
    <span>💬 42</span>
    <span>↗ 공유</span>
  </div>
</article>
```
