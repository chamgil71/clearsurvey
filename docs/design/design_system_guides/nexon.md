---
brand: Nexon
brand_ko: 넥슨
slug: nexon
generated: 2026-05-19
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - gaming
  - consumer

color_tone: warm
primary_color_hex: "#FFC600"
primary_color_name: "Nexon Yellow"
mood:
  - 활기
  - 캐주얼
  - 친근

font_category: sans-serif
font_primary: Nexon Lv2 Gothic
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 1994
last_major_revision: 2024
signature_keyword: "Nexon Yellow(#FFC600) + 흰 캔버스 + 큰 캐릭터 일러스트 — 캐주얼 게임 퍼블리셔의 친근한 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFAFA", "border": "#EEEEEE", "fg": "#0F0F0F", "fg_muted": "#6A6A6A", "accent": "#FFC600" },
    "dark":  { "bg": "#0F0F0F", "surface": "#1A1A1A", "border": "#2A2A2A", "fg": "#FFFFFF", "fg_muted": "#B0B0B0", "accent": "#FFD740" }
  }

hero_html: |
  <div style="font-family:'Nexon Lv2 Gothic','Pretendard','Inter',-apple-system,sans-serif;background:#fff;color:#0F0F0F;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;background:#FFC600;color:#0F0F0F;">
      <div style="font:900 14px/1 inherit;letter-spacing:-0.02em;">NEXON</div>
      <span style="margin-left:auto;font-size:10px;font-weight:700;">DO YOU NEXON?</span>
    </div>
    <div style="padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="background:#FFF4CC;border-radius:14px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:800 10px/1.2 inherit;color:#B58900;">MapleStory</div>
      <div style="background:#FFE0DC;border-radius:14px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:800 10px/1.2 inherit;color:#C8392E;">Dungeon&amp;Fighter</div>
      <div style="background:#DCEEFF;border-radius:14px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:800 10px/1.2 inherit;color:#1565D8;">KartRider</div>
      <div style="background:#E6F8E0;border-radius:14px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:800 10px/1.2 inherit;color:#2F8C2F;">FC Online</div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #EEEEEE;font-size:10px;color:#6A6A6A;display:flex;align-items:center;gap:8px;">
      <span style="color:#FFC600;font-weight:900;">★</span><span>NEXON Game Launcher</span>
    </div>
  </div>

sources:
  - https://www.nexon.com/
  - https://company.nexon.com/
---

### ① 브랜드 DNA
- **브랜드명**: Nexon (넥슨)
- **한 줄 정체성**: 메이플스토리·던전앤파이터·FC온라인·카트라이더 — 한국 라이브 게임 퍼블리셔의 원조
- **공식 디자인 철학**: "Do you Nexon?" — 다양한 IP·다양한 플레이를 하나의 노란 캔버스에
- **시그니처 요소 1개**: Nexon Yellow #FFC600 한 점 + 흰 캔버스 + 큰 캐릭터 일러스트. NC의 다크 판타지·Netmarble의 푸른 모바일과 정반대의 "20년 라이브 게임" 친근한 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기, 캐주얼, 친근
- **무드 설명**: 흰 배경 위 노란 강조 + 큰 IP 일러스트가 시그니처. 각 게임이 자체 컬러 톤을 가지지만 전체 UI는 흰 캔버스 + 노란 액센트로 통일. 헤더는 노란 풀너비 바 + 가운데 큰 N.
- **비주얼 스타일**: 휴머니즘 + 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (14~20px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Nexon Yellow */
  --color-primary-50:  #FFF8DC;
  --color-primary-100: #FFEFAB;
  --color-primary-200: #FFE475;
  --color-primary-300: #FFD740;
  --color-primary-400: #FFCC1A;
  --color-primary-500: #FFC600;       /* 시그니처 */
  --color-primary-600: #E0AC00;
  --color-primary-700: #B88B00;
  --color-primary-800: #8C6800;
  --color-primary-900: #5A4300;

  /* Game-specific accents (각 IP별) */
  --color-maple:   #B58900;   /* MapleStory */
  --color-df:      #C8392E;   /* Dungeon & Fighter */
  --color-kart:    #1565D8;   /* KartRider */
  --color-fc:      #2F8C2F;   /* FC Online */
  --color-sa:      #4A5670;   /* Sudden Attack */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #EEEEEE;
  --color-neutral-300:  #C8C8C8;
  --color-neutral-500:  #9A9A9A;
  --color-neutral-700:  #6A6A6A;
  --color-neutral-900:  #0F0F0F;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F8E0;
  --color-success-fg: #1F6F1F;
  --color-warning-bg: #FFF4CC;
  --color-warning-fg: #B58900;
  --color-error-bg:   #FFE0DC;
  --color-error-fg:   #C8392E;
  --color-info-bg:    #DCEEFF;
  --color-info-fg:    #1565D8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(15,15,15,0.55);

  /* Text */
  --text-primary:    #0F0F0F;
  --text-secondary:  #3A3A3A;
  --text-tertiary:   #6A6A6A;
  --text-on-primary: #0F0F0F;     /* 노란색 위는 검은 텍스트 */
  --text-disabled:   #9A9A9A;

  /* Border */
  --border-default: #EEEEEE;
  --border-subtle:  #FAFAFA;
  --border-strong:  #C8C8C8;
  --border-focus:   #FFC600;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI/한글: Nexon Lv2 Gothic (자체 무료 폰트, 라이선스 공개)
  - 한글 폴백: Pretendard / Noto Sans KR
  - 영문: Inter / SF Pro
  - 코드: JetBrains Mono
- **위계**:
  - Display: 48px / 800 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.015em
  - H2: 22px / 700 / 1.3 / -0.01em
  - H3: 18px / 700 / 1.35 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Caption: 11px / 600 / 1.4 / 0.02em

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
- **Container**: max-width 1200px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;        /* 카드 시그니처 */
--radius-xl: 28px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(15,15,15,0.06);
--shadow-md: 0 6px 16px rgba(15,15,15,0.08);
--shadow-lg: 0 20px 48px rgba(15,15,15,0.12);
--shadow-yellow: 0 8px 20px rgba(255,198,0,0.36);
```

### ⑧ Iconography
- **스타일**: Filled (둥근 형태) + Outline 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor (Bold) / 자체 게임 아이콘

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'Nexon Lv2 Gothic',Pretendard,sans-serif; padding: 11px 22px; border-radius: 9999px; border: 0; cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); transform: translateY(-1px); box-shadow: var(--shadow-yellow); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 2px solid var(--color-primary-500); }
.btn-secondary:hover { background: var(--color-primary-50); }
.btn-ghost { background: transparent; color: var(--text-secondary); }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: 14px; padding: 11px 16px; font: 400 15px/1.4 'Nexon Lv2 Gothic',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 4px rgba(255,198,0,0.20); }
```

**Card (Game)**
```css
.card { background: var(--bg-base); border-radius: 20px; padding: 0; overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.card .cover { aspect-ratio: 1; background: var(--color-primary-50); }
.card .meta { padding: 14px 16px; }
.card h3 { font: 700 16px/1.3 'Nexon Lv2 Gothic',sans-serif; color: var(--text-primary); margin: 0 0 4px; }
.card .sub { font: 500 12px/1.4 inherit; color: var(--text-tertiary); }
```

**Badge**
```css
.tag { display: inline-flex; padding: 4px 12px; border-radius: 9999px; font: 700 11px/1.4 'Nexon Lv2 Gothic',sans-serif; }
.tag-yellow { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-soft { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-hot { background: linear-gradient(135deg, #FFD740, #FFC600); color: var(--text-on-primary); letter-spacing: 0.04em; text-transform: uppercase; }
```

**Navigation**
```css
.topbar { background: var(--color-primary-500); color: var(--text-on-primary); padding: 12px 24px; display: flex; align-items: center; gap: 18px; }
.topbar .logo { font: 900 22px/1 'Nexon Lv2 Gothic',sans-serif; letter-spacing: -0.02em; color: var(--text-on-primary); }
.topbar .item { font: 700 13px/1 inherit; padding: 8px 12px; cursor: pointer; opacity: 0.85; border-radius: 9999px; }
.topbar .item:hover, .topbar .item.active { opacity: 1; background: rgba(15,15,15,0.10); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.45, 0.64, 1);
```

### ⑪ Anti-patterns
1. 다크 캔버스 강제 금지 — Nexon 톤은 흰 캔버스
2. 모서리 sharp(<8px) 사용 금지 — 친근한 round 톤이 시그니처
3. 노란색 위에 흰 텍스트 금지 — 명도 대비 부족, 항상 검은 텍스트
4. 본문에 채도 높은 보조 색 동시 사용 금지 — 노란 한 점만
5. NC/Netmarble 톤(다크·푸른·진지) 차용 금지 — Nexon은 정반대

### ⑫ 시그니처 적용 예시

```html
<style>
  .nx-app { font: 14px/1.55 'Nexon Lv2 Gothic', Pretendard, -apple-system, sans-serif; background: #fff; color: #0F0F0F; min-height: 480px; display: grid; grid-template-rows: 56px 1fr; }
  .nx-app .top { background: #FFC600; color: #0F0F0F; padding: 0 24px; display: flex; align-items: center; gap: 18px; }
  .nx-app .top .logo { font: 900 24px/1 inherit; letter-spacing: -0.02em; }
  .nx-app .top .nav { display: flex; gap: 6px; margin-left: 14px; }
  .nx-app .top .nav span { padding: 8px 14px; font: 700 13px/1 inherit; cursor: pointer; opacity: 0.85; border-radius: 9999px; }
  .nx-app .top .nav span.act { opacity: 1; background: rgba(15,15,15,0.12); }
  .nx-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
  .nx-app .top .right .login { background: #0F0F0F; color: #FFC600; padding: 7px 14px; border-radius: 9999px; font: 700 12px/1 inherit; cursor: pointer; }
  .nx-app .stage { padding: 22px 28px; display: grid; grid-template-rows: auto 1fr; gap: 18px; }
  .nx-app .head h2 { margin: 0; font: 800 28px/1.15 inherit; letter-spacing: -0.02em; }
  .nx-app .head .sub { font-size: 13px; color: #6A6A6A; margin-top: 4px; }
  .nx-app .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .nx-app .card { background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 1px 2px rgba(15,15,15,0.06); cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
  .nx-app .card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(15,15,15,0.10); }
  .nx-app .card .cv { aspect-ratio: 1; display: grid; place-items: center; font: 800 16px/1.2 inherit; letter-spacing: -0.01em; }
  .nx-app .card.maple .cv { background: #FFF4CC; color: #B58900; }
  .nx-app .card.df .cv    { background: #FFE0DC; color: #C8392E; }
  .nx-app .card.kart .cv  { background: #DCEEFF; color: #1565D8; }
  .nx-app .card.fc .cv    { background: #E6F8E0; color: #2F8C2F; }
  .nx-app .card .meta { padding: 14px 16px; }
  .nx-app .card .meta h3 { margin: 0 0 4px; font: 700 15px/1.3 inherit; }
  .nx-app .card .meta .ply { font: 600 12px/1.3 inherit; color: #6A6A6A; }
  .nx-app .card .meta .hot { display: inline-block; margin-top: 6px; padding: 3px 8px; border-radius: 9999px; background: #FFC600; color: #0F0F0F; font: 700 10px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
</style>

<div class="nx-app">
  <header class="top">
    <span class="logo">NEXON</span>
    <nav class="nav"><span class="act">게임</span><span>이벤트</span><span>커뮤니티</span><span>고객센터</span></nav>
    <div class="right"><span class="login">로그인</span></div>
  </header>
  <main class="stage">
    <div class="head">
      <h2>지금 가장 인기있는 게임</h2>
      <div class="sub">Do you Nexon?</div>
    </div>
    <div class="grid">
      <div class="card maple"><div class="cv">MapleStory</div><div class="meta"><h3>메이플스토리</h3><div class="ply">동시접속 12만</div><span class="hot">HOT</span></div></div>
      <div class="card df"><div class="cv">DnF</div><div class="meta"><h3>던전앤파이터</h3><div class="ply">동시접속 8만</div></div></div>
      <div class="card kart"><div class="cv">KartRider</div><div class="meta"><h3>카트라이더 드리프트</h3><div class="ply">동시접속 4만</div></div></div>
      <div class="card fc"><div class="cv">FC Online</div><div class="meta"><h3>FC 온라인</h3><div class="ply">동시접속 6만</div></div></div>
    </div>
  </main>
</div>
```
