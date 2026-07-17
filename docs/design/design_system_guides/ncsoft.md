---
brand: NCSoft
brand_ko: 엔씨소프트
slug: ncsoft
generated: 2026-05-19
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - gaming
  - consumer

color_tone: cool
primary_color_hex: "#C8102E"
primary_color_name: "NC Red"
mood:
  - 시네마틱
  - 다크판타지
  - 진지

font_category: sans-serif
font_primary: NC Sans
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 1997
last_major_revision: 2024
signature_keyword: "NC 레드(#C8102E) + 칠흑 캔버스 + 금속 질감 — 한국 MMORPG 거장의 다크 판타지 톤"

card_tokens: |
  {
    "light": { "bg": "#F4F4F5", "surface": "#FFFFFF", "border": "#E0E0E3", "fg": "#0B0B0D", "fg_muted": "#5A5A5F", "accent": "#C8102E" },
    "dark":  { "bg": "#0B0B0D", "surface": "#16161A", "border": "#26262C", "fg": "#F4F4F5", "fg_muted": "#9A9AA0", "accent": "#E63746" }
  }

hero_html: |
  <div style="font-family:'NC Sans','Inter',-apple-system,sans-serif;background:linear-gradient(180deg,#0B0B0D 0%,#16161A 100%);color:#F4F4F5;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #26262C;">
      <div style="font:900 13px/1 inherit;letter-spacing:0.16em;color:#C8102E;">NC</div>
      <span style="font-weight:600;letter-spacing:0.04em;text-transform:uppercase;font-size:10px;color:#9A9AA0;">Universe</span>
      <span style="margin-left:auto;font-size:10px;color:#9A9AA0;">PC · MOBILE</span>
    </div>
    <div style="padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="background:linear-gradient(135deg,#1A0B0D 0%,#3A0B12 100%);border:1px solid #26262C;border-radius:2px;aspect-ratio:16/10;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="font:900 11px/1 inherit;color:#E63746;letter-spacing:0.1em;text-transform:uppercase;">Lineage W</div>
      </div>
      <div style="background:linear-gradient(135deg,#0B131A 0%,#162638 100%);border:1px solid #26262C;border-radius:2px;aspect-ratio:16/10;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="font:900 11px/1 inherit;color:#7DB8E5;letter-spacing:0.1em;text-transform:uppercase;">TL</div>
      </div>
      <div style="background:linear-gradient(135deg,#0F1A14 0%,#1B3825 100%);border:1px solid #26262C;border-radius:2px;aspect-ratio:16/10;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="font:900 11px/1 inherit;color:#86C7A0;letter-spacing:0.1em;text-transform:uppercase;">Aion</div>
      </div>
      <div style="background:linear-gradient(135deg,#1A1306 0%,#3A2A0F 100%);border:1px solid #26262C;border-radius:2px;aspect-ratio:16/10;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="font:900 11px/1 inherit;color:#E0B070;letter-spacing:0.1em;text-transform:uppercase;">B&amp;S</div>
      </div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #26262C;font-size:10px;color:#9A9AA0;display:flex;align-items:center;gap:8px;">
      <span style="color:#C8102E;">◆</span><span>PURPLE — NC 통합 플랫폼</span>
    </div>
  </div>

sources:
  - https://www.ncsoft.com/
  - https://kr.ncsoft.com/
---

### ① 브랜드 DNA
- **브랜드명**: NCSoft (엔씨소프트)
- **한 줄 정체성**: 리니지·아이온·블레이드앤소울·TL — 한국 MMORPG의 거장
- **공식 디자인 철학**: "Beyond, Real, Connect" — 깊이있는 가상 세계 + 진지한 게임 톤
- **시그니처 요소 1개**: NC 레드(#C8102E) + 칠흑 캔버스 + 금속 질감 보더. Nexon의 노란 캐주얼이나 Netmarble의 푸른 모바일 톤과 정반대의 "어른 MMORPG" 다크 판타지

### ② 톤 & 무드
- **핵심 키워드 3개**: 시네마틱, 다크판타지, 진지
- **무드 설명**: 검은 캔버스에 NC 레드 한 점이 떨어진 듯한 진지한 톤. 영화 포스터·콘솔 UI 처럼 게임 키 아트가 풀블리드 카드로 들어가고, 헤더는 얇은 금속선으로 분리. 캐주얼 톤 일체 배제.
- **비주얼 스타일**: 모던 미니멀 (시네마틱 다크)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~4px)
- **평면성**: Layered (게임 카드 그라데이션, 금속 보더)

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - NC Red */
  --color-primary-50:  #FBE7EA;
  --color-primary-100: #F4B7C0;
  --color-primary-200: #EC8794;
  --color-primary-300: #E45768;
  --color-primary-400: #DC2E45;
  --color-primary-500: #C8102E;     /* 시그니처 */
  --color-primary-600: #A40D17;
  --color-primary-700: #7A0911;
  --color-primary-800: #51060B;
  --color-primary-900: #2A0205;

  /* Game-specific accents */
  --color-lineage: #E63746;   /* Lineage */
  --color-tl:      #7DB8E5;   /* Throne & Liberty */
  --color-aion:    #86C7A0;   /* Aion */
  --color-bns:     #E0B070;   /* Blade & Soul */

  /* Neutral - Cool dark */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F4F5;
  --color-neutral-100:  #E0E0E3;
  --color-neutral-300:  #9A9AA0;
  --color-neutral-500:  #5A5A5F;
  --color-neutral-700:  #26262C;
  --color-neutral-800:  #16161A;
  --color-neutral-900:  #0B0B0D;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #0F1F16;
  --color-success-fg: #86C7A0;
  --color-warning-bg: #1F1707;
  --color-warning-fg: #E0B070;
  --color-error-bg:   #2A0205;
  --color-error-fg:   #E63746;
  --color-info-bg:    #0B131A;
  --color-info-fg:    #7DB8E5;

  /* Surface */
  --bg-base:     #0B0B0D;
  --bg-subtle:   #16161A;
  --bg-elevated: #1F1F24;
  --bg-page:     linear-gradient(180deg, #0B0B0D 0%, #16161A 100%);
  --bg-overlay:  rgba(0,0,0,0.75);

  /* Text */
  --text-primary:    #F4F4F5;
  --text-secondary:  #C8C8CB;
  --text-tertiary:   #9A9AA0;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A5A5F;

  /* Border */
  --border-default: #26262C;
  --border-subtle:  #16161A;
  --border-strong:  #3A3A40;
  --border-focus:   #C8102E;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): NC Sans (자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 디스플레이: Cinzel / 자체 헤드라인
  - 코드: JetBrains Mono
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.03em uppercase
  - H1: 36px / 700 / 1.15 / -0.02em
  - H2: 24px / 700 / 1.25 / -0.01em
  - H3: 18px / 600 / 1.35 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 12px / 400 / 1.5 / 0
  - Caption: 11px / 600 / 1.4 / 0.08em uppercase

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 36px;
  --space-2xl: 56px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1280px (시네마틱 와이드)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;       /* 카드 시그니처 */
--radius-lg: 6px;
--radius-xl: 10px;
--radius-full: 9999px;  /* 태그/버튼 일부 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 8px 20px rgba(0,0,0,0.5);
--shadow-lg: 0 24px 56px rgba(0,0,0,0.7);
--shadow-red: 0 0 0 1px rgba(200,16,46,0.55), 0 8px 20px rgba(200,16,46,0.20);
```

### ⑧ Iconography
- **스타일**: Outline (얇고 날카로움) + 일부 Filled
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square
- **추천 라이브러리**: Lucide / Phosphor (Thin variant)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 'NC Sans',Inter,sans-serif; padding: 12px 22px; border-radius: 2px; border: 0; cursor: pointer; letter-spacing: 0.08em; text-transform: uppercase; transition: background 180ms ease, box-shadow 180ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); box-shadow: var(--shadow-red); }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { border-color: var(--color-primary-500); color: var(--color-primary-400); }
.btn-ghost { background: rgba(255,255,255,0.04); color: var(--text-secondary); }
```

**Input**
```css
.input { background: rgba(255,255,255,0.04); border: 1px solid var(--border-default); border-radius: 2px; padding: 12px 16px; font: 400 14px/1.4 'NC Sans',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 2px rgba(200,16,46,0.20); }
```

**Card (Game)**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 4px; aspect-ratio: 16/9; overflow: hidden; position: relative; cursor: pointer; transition: transform 180ms ease, border-color 180ms ease; }
.card:hover { transform: translateY(-2px); border-color: var(--color-primary-500); box-shadow: var(--shadow-red); }
.card .title { position: absolute; left: 14px; bottom: 14px; font: 800 18px/1.2 'NC Sans',sans-serif; color: #fff; letter-spacing: -0.01em; text-transform: uppercase; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 8px; border-radius: 0; font: 700 10px/1.4 'NC Sans',sans-serif; letter-spacing: 0.12em; text-transform: uppercase; }
.tag-red { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-outline { background: transparent; color: var(--text-tertiary); border: 1px solid var(--border-strong); }
.tag-new { background: var(--color-primary-500); color: #fff; padding: 2px 6px; }
```

**Navigation**
```css
.topbar { background: var(--bg-base); border-bottom: 1px solid var(--border-default); padding: 14px 28px; display: flex; align-items: center; gap: 24px; }
.topbar .logo { font: 900 18px/1 'NC Sans',sans-serif; letter-spacing: 0.18em; color: var(--color-primary-500); }
.topbar .item { font: 600 12px/1 'NC Sans',sans-serif; color: var(--text-tertiary); padding: 6px 0; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; border-bottom: 2px solid transparent; }
.topbar .item:hover, .topbar .item.active { color: var(--text-primary); border-color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-cinematic: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 라이트 캔버스 강제 금지 — NC 톤은 검은 캔버스가 디폴트
2. 모서리 round(>8px) 사용 금지 — 게임 UI 톤이 깨짐
3. 채도 높은 보조 색 동시 사용 금지 — NC 레드 한 점 외엔 무채 톤
4. 본문에 친근한 캐주얼 톤(이모지·둥근 일러스트) 사용 금지
5. Nexon/Netmarble 톤(밝은 캔버스+컬러풀) 차용 금지 — NC는 정반대

### ⑫ 시그니처 적용 예시

```html
<style>
  .nc-app { font: 14px/1.55 'NC Sans', Inter, -apple-system, sans-serif; background: linear-gradient(180deg, #0B0B0D 0%, #16161A 100%); color: #F4F4F5; min-height: 480px; display: grid; grid-template-rows: 60px 1fr 48px; letter-spacing: -0.005em; }
  .nc-app .top { padding: 0 28px; display: flex; align-items: center; gap: 24px; border-bottom: 1px solid #26262C; }
  .nc-app .top .logo { font: 900 20px/1 inherit; letter-spacing: 0.2em; color: #C8102E; }
  .nc-app .top .nav { display: flex; gap: 22px; margin-left: 12px; }
  .nc-app .top .nav span { font: 600 12px/1 inherit; color: #9A9AA0; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; padding: 6px 0; border-bottom: 2px solid transparent; }
  .nc-app .top .nav span.act { color: #F4F4F5; border-color: #C8102E; }
  .nc-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 16px; }
  .nc-app .top .right .purple { font: 700 11px/1 inherit; padding: 6px 12px; border: 1px solid #C8102E; color: #C8102E; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; }
  .nc-app .stage { padding: 24px 28px; display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: auto 1fr; gap: 14px; }
  .nc-app .hero { grid-row: span 2; background: linear-gradient(135deg, #2A0205 0%, #5A0810 60%, #0B0B0D 100%); border: 1px solid #26262C; border-radius: 4px; padding: 24px; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; }
  .nc-app .hero::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 80% 20%, rgba(200,16,46,0.18), transparent 60%); pointer-events: none; }
  .nc-app .hero .tag { position: relative; display: inline-flex; padding: 3px 8px; background: #C8102E; color: #fff; font: 700 10px/1.4 inherit; letter-spacing: 0.14em; text-transform: uppercase; width: max-content; margin-bottom: 10px; }
  .nc-app .hero h2 { position: relative; margin: 0 0 6px; font: 800 32px/1.1 inherit; letter-spacing: -0.02em; text-transform: uppercase; }
  .nc-app .hero .desc { position: relative; font-size: 13px; color: #C8C8CB; line-height: 1.55; margin-bottom: 18px; max-width: 75%; }
  .nc-app .hero .row { position: relative; display: flex; gap: 8px; }
  .nc-app .hero .btn { font: 700 12px/1 inherit; padding: 12px 22px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; border-radius: 2px; }
  .nc-app .hero .btn.p { background: #C8102E; color: #fff; }
  .nc-app .hero .btn.g { background: transparent; color: #F4F4F5; border: 1px solid #3A3A40; }
  .nc-app .tile { background: #16161A; border: 1px solid #26262C; border-radius: 4px; padding: 14px; aspect-ratio: 16/9; display: flex; flex-direction: column; justify-content: flex-end; cursor: pointer; transition: border-color 180ms ease; }
  .nc-app .tile:hover { border-color: #C8102E; }
  .nc-app .tile.t1 { background: linear-gradient(135deg, #0B131A 0%, #162638 100%); }
  .nc-app .tile.t2 { background: linear-gradient(135deg, #0F1A14 0%, #1B3825 100%); }
  .nc-app .tile .title { font: 800 16px/1.1 inherit; letter-spacing: -0.01em; text-transform: uppercase; color: #fff; }
  .nc-app .tile .sub { font: 600 10px/1.3 inherit; color: #9A9AA0; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; }
  .nc-app .foot { padding: 0 28px; display: flex; align-items: center; gap: 22px; color: #5A5A5F; font: 600 10px/1 inherit; letter-spacing: 0.12em; text-transform: uppercase; border-top: 1px solid #26262C; }
</style>

<div class="nc-app">
  <header class="top">
    <span class="logo">NC</span>
    <nav class="nav"><span class="act">Games</span><span>PURPLE</span><span>Esports</span><span>News</span><span>Support</span></nav>
    <div class="right"><span class="purple">PURPLE 다운로드</span></div>
  </header>
  <main class="stage">
    <div class="hero">
      <span class="tag">NEW · 2026</span>
      <h2>Throne &amp; Liberty</h2>
      <p class="desc">광활한 솔리시움 대륙. 신화의 권좌를 둘러싼 만인의 전쟁이 시작된다.</p>
      <div class="row"><span class="btn p">사전 등록</span><span class="btn g">소개 영상</span></div>
    </div>
    <div class="tile t1"><div class="title">Lineage W</div><div class="sub">PC · Mobile · MMORPG</div></div>
    <div class="tile t2"><div class="title">Aion 2</div><div class="sub">PC · MMORPG</div></div>
  </main>
  <footer class="foot">
    <span>© NCSOFT</span><span>이용약관</span><span>개인정보처리방침</span>
  </footer>
</div>
```
