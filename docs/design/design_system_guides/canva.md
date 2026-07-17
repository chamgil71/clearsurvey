---
brand: Canva
brand_ko: 캔바
slug: canva
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - creative-tools
  - consumer

color_tone: cool
primary_color_hex: "#7D2AE7"
primary_color_name: "Canva Purple"
mood:
  - 친근함
  - 컬러풀
  - 누구나 가능

font_category: sans-serif
font_primary: Canva Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2013
last_major_revision: 2024
signature_keyword: "Cyan→Purple 그라데이션과 둥근 라운드 카드의 친근한 디자인 도구"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FFFFFF", "border": "#EDEDED", "fg": "#0E1318", "fg_muted": "#6B7177", "accent": "#7D2AE7" },
    "dark":  { "bg": "#0E1318", "surface": "#252B33", "border": "#2C333A", "fg": "#FFFFFF", "fg_muted": "#9BA3AB", "accent": "#9F4DFF" }
  }

hero_html: |
  <div style="font-family:'Canva Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#00C4CC,#7D2AE7);"></span>
      <strong style="font-size:14px;font-weight:700;">Canva</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <h2 style="font-size:18px;font-weight:700;line-height:1.25;margin:0;">템플릿 만들기</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="aspect-ratio:1;border-radius:14px;background:linear-gradient(135deg,#00C4CC,#7D2AE7);position:relative;display:grid;place-items:center;color:#fff;">
          <div style="font-weight:800;font-size:14px;letter-spacing:-0.01em;">Insta Post</div>
        </div>
        <div style="aspect-ratio:1;border-radius:14px;background:linear-gradient(135deg,#FF7B70,#FFC15B);position:relative;display:grid;place-items:center;color:#fff;">
          <div style="font-weight:800;font-size:14px;letter-spacing:-0.01em;">Story</div>
        </div>
        <div style="aspect-ratio:1;border-radius:14px;background:linear-gradient(135deg,#7D2AE7,#FF7B70);position:relative;display:grid;place-items:center;color:#fff;">
          <div style="font-weight:800;font-size:14px;letter-spacing:-0.01em;">YT Thumb</div>
        </div>
        <div style="aspect-ratio:1;border-radius:14px;background:linear-gradient(135deg,#3DA1FF,#00C4CC);position:relative;display:grid;place-items:center;color:#fff;">
          <div style="font-weight:800;font-size:14px;letter-spacing:-0.01em;">Resume</div>
        </div>
      </div>
      <button style="background:var(--card-accent);color:#fff;border:0;border-radius:9999px;padding:10px 16px;font-size:13px;font-weight:700;font-family:inherit;align-self:flex-start;margin-top:auto;">+ 새 디자인</button>
    </div>
  </div>

sources:
  - https://www.canva.com/
  - https://www.canva.com/design-school/
  - https://www.canva.com/about/
---

### ① 브랜드 DNA
- **브랜드명**: Canva
- **한 줄 정체성**: 디자이너가 아니어도 누구나 만들 수 있게, 모든 시각 콘텐츠를 1분 안에 완성하는 도구
- **공식 디자인 철학**: "Empowering the world to design — accessible to everyone, anywhere"
- **시그니처 요소 1개**: Canva Cyan(#00C4CC)→Purple(#7D2AE7) 그라데이션 + 둥근 라운드 카드 + Canva Sans 자체 폰트

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 컬러풀, 누구나 가능
- **무드 설명**: 흰 캔버스 위에 다양한 그라데이션 템플릿이 둥글게 늘어선다. 색은 카드/일러스트에서 풍부하게, UI 본체는 차분하게.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~16px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Canva Purple */
  --color-primary-50:  #F0E6FE;
  --color-primary-100: #E0CCFD;
  --color-primary-200: #C199FB;
  --color-primary-300: #A266F9;
  --color-primary-400: #8939F1;
  --color-primary-500: #7D2AE7;  /* Canva Purple */
  --color-primary-600: #6A1FCC;
  --color-primary-700: #5818A8;
  --color-primary-800: #421285;
  --color-primary-900: #2C0C5A;

  /* Secondary - Canva Cyan */
  --color-secondary-500: #00C4CC;

  /* Brand 그라데이션 stops */
  --canva-cyan:    #00C4CC;
  --canva-purple:  #7D2AE7;
  --canva-coral:   #FF7B70;
  --canva-yellow:  #FFC15B;
  --canva-blue:    #3DA1FF;
  --canva-pink:    #FF66B3;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FB;
  --color-neutral-100:  #EDEDED;
  --color-neutral-200:  #DEDEDE;
  --color-neutral-300:  #C2C2C2;
  --color-neutral-500:  #8E8E92;
  --color-neutral-700:  #6A6B71;
  --color-neutral-800:  #444550;
  --color-neutral-900:  #0E1318;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #00A651;
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #D97706;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FF3B30;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #3DA1FF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F9FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,19,24,0.50);

  /* Text */
  --text-primary:    #0E1318;
  --text-secondary:  #6A6B71;
  --text-tertiary:   #8E8E92;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C2C2C2;

  /* Border */
  --border-default: #EDEDED;
  --border-subtle:  #F4F4F5;
  --border-strong:  #DEDEDE;
  --border-focus:   #7D2AE7;
}

[data-theme="dark"] {
  --bg-base: #0E1318;
  --bg-subtle: #1A1F25;
  --bg-elevated: #252B33;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Canva Sans (Canva 자체) / 폴백 Inter
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 64px / 800 / 1.0 / -0.03em
  - H1: 40px / 700 / 1.1 / -0.015em
  - H2: 28px / 700 / 1.2 / -0.01em
  - H3: 20px / 700 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 500 / 1.33 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

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
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;    /* 컨트롤 */
--radius-lg: 14px;    /* 템플릿 카드 */
--radius-xl: 20px;
--radius-full: 9999px;   /* CTA pill */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 20px 48px rgba(125,42,231,0.20);
```

### ⑧ Iconography
- **스타일**: Outline + Filled
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 'Canva Sans', Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;       /* Canva 시그니처 pill */
  padding: 0 18px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease, transform 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }

.btn-cta { background: linear-gradient(135deg, var(--canva-cyan), var(--canva-purple)); color: #fff; box-shadow: var(--shadow-md); }
.btn-cta:hover { transform: translateY(-1px); box-shadow: var(--shadow-lg); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: 14px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(125,42,231,0.18); }
```

**Card** (Template tile)
```css
.template { aspect-ratio: 1; border-radius: var(--radius-lg); position: relative; overflow: hidden; cursor: pointer; transition: transform 200ms ease, box-shadow 200ms ease; }
.template:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.template .label { position: absolute; left: 0; right: 0; bottom: 0; padding: 12px; color: #fff; font-weight: 800; font-size: 14px; text-shadow: 0 1px 4px rgba(0,0,0,0.20); }
.card { background: var(--bg-base); border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-pro     { background: linear-gradient(90deg, #FFC15B, #FF7B70); color: #fff; }
```

**Navigation (Side bar)**
```css
.sidebar { width: 220px; background: var(--bg-base); border-right: 1px solid var(--border-subtle); padding: 16px 12px; height: 100vh; }
.sidebar .item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: var(--radius-md); font-size: 14px; font-weight: 600; color: var(--text-primary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. button을 sharp 사각으로 변경 금지 — pill (9999px)이 Canva 시그니처
2. Cyan→Purple 그라데이션 방향을 임의 변경 금지 — 시그니처 stop 보존
3. 본문 폰트에 Canva Sans Display weight 사용 금지 — 헤드라인 전용
4. 템플릿 카드 라운드를 8px 미만으로 줄이지 말 것
5. Pro 배지에 단일 색 사용 금지 — yellow→coral 그라데이션이 표준

### ⑫ 시그니처 적용 예시 (Home)

```html
<style>
  body { margin: 0; font-family: 'Canva Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .layout { display: grid; grid-template-columns: 220px 1fr; min-height: 100vh; }
  .sidebar { background: #fff; border-right: 1px solid #F4F4F5; padding: 16px 12px; }
  .sidebar .logo { font-weight: 800; font-size: 22px; padding: 4px 8px 12px; background: linear-gradient(135deg,#00C4CC,#7D2AE7); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .sidebar .item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 10px; font-size: 14px; font-weight: 600; color: var(--text-primary); cursor: pointer; }
  .sidebar .item:hover { background: var(--bg-subtle); }
  .sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); }
  .main { padding: 24px 32px 64px; }
  .head h1 { margin: 0 0 6px; font-size: 32px; font-weight: 800; letter-spacing: -0.015em; }
  .head p { margin: 0 0 24px; color: var(--text-secondary); }
  .search { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 14px; padding: 14px 18px; display: flex; gap: 10px; align-items: center; margin-bottom: 24px; font-size: 14px; color: var(--text-secondary); }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 24px; }
  .template { aspect-ratio: 1; border-radius: 14px; position: relative; overflow: hidden; cursor: pointer; transition: transform 200ms cubic-bezier(0.22,1,0.36,1); }
  .template:hover { transform: translateY(-4px); }
  .template .label { position: absolute; left: 0; right: 0; bottom: 0; padding: 12px; color: #fff; font-weight: 800; text-shadow: 0 1px 4px rgba(0,0,0,0.30); }
  .recent { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .recent .card { background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); cursor: pointer; }
  .recent .thumb { aspect-ratio: 4/3; }
  .recent .meta { padding: 10px 14px; font-size: 13px; font-weight: 600; }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="logo">Canva</div>
    <div class="item active">⌂ 홈</div>
    <div class="item">📁 프로젝트</div>
    <div class="item">📐 템플릿</div>
    <div class="item">🎨 브랜드 키트</div>
    <div class="item">⚡ 마술 스튜디오</div>
    <button class="btn btn-cta" style="width:100%; margin-top:12px;">+ 새 디자인</button>
  </aside>
  <main class="main">
    <div class="head"><h1>안녕하세요, Mina 👋</h1><p>오늘은 무엇을 만들어 볼까요?</p></div>
    <div class="search">🔍 템플릿, 사진, 브랜드 자료 검색...</div>
    <div class="grid">
      <div class="template" style="background:linear-gradient(135deg,#00C4CC,#7D2AE7)"><div class="label">Instagram Post</div></div>
      <div class="template" style="background:linear-gradient(135deg,#FF7B70,#FFC15B)"><div class="label">Story</div></div>
      <div class="template" style="background:linear-gradient(135deg,#7D2AE7,#FF66B3)"><div class="label">YouTube Thumb</div></div>
      <div class="template" style="background:linear-gradient(135deg,#3DA1FF,#00C4CC)"><div class="label">Resume</div></div>
      <div class="template" style="background:linear-gradient(135deg,#FFC15B,#FF7B70)"><div class="label">Poster</div></div>
      <div class="template" style="background:linear-gradient(135deg,#00A651,#3DA1FF)"><div class="label">Presentation</div></div>
      <div class="template" style="background:linear-gradient(135deg,#FF66B3,#7D2AE7)"><div class="label">Video</div></div>
      <div class="template" style="background:linear-gradient(135deg,#0E1318,#444550)"><div class="label">Logo</div></div>
    </div>
    <h2 style="font-size:18px; font-weight:700; margin-top:24px;">최근 디자인</h2>
    <div class="recent">
      <div class="card"><div class="thumb" style="background:linear-gradient(135deg,#00C4CC,#7D2AE7)"></div><div class="meta">Q3 Marketing Post</div></div>
      <div class="card"><div class="thumb" style="background:linear-gradient(135deg,#FF7B70,#FFC15B)"></div><div class="meta">Brand Story</div></div>
      <div class="card"><div class="thumb" style="background:linear-gradient(135deg,#3DA1FF,#00C4CC)"></div><div class="meta">팀 워크숍</div></div>
      <div class="card"><div class="thumb" style="background:linear-gradient(135deg,#FFC15B,#FF66B3)"></div><div class="meta">5월 뉴스레터</div></div>
    </div>
  </main>
</div>
```
