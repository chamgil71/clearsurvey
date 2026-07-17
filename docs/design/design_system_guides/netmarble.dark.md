---
brand: Netmarble
brand_ko: 넷마블
slug: netmarble
generated: 2026-05-19
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - gaming
  - consumer

color_tone: cool
primary_color_hex: "#0066B3"
primary_color_name: "Netmarble Blue"
mood:
  - 글로벌
  - 모바일
  - 다이내믹

font_category: sans-serif
font_primary: Netmarble Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2000
last_major_revision: 2023
signature_keyword: "Netmarble Blue(#0066B3) + 마블 스월 그라데이션 — 글로벌 모바일 게임 퍼블리셔의 다이내믹 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F8FC", "border": "#E1E8F0", "fg": "#0F1A2E", "fg_muted": "#5A6478", "accent": "#0066B3" },
    "dark":  { "bg": "#0A1422", "surface": "#142238", "border": "#22324A", "fg": "#FFFFFF", "fg_muted": "#A6B0C2", "accent": "#3992D6" }
  }

hero_html: |
  <div style="font-family:'Netmarble Sans','Pretendard','Inter',-apple-system,sans-serif;background:linear-gradient(135deg,#0A1422 0%,#102A4D 100%);color:#E6ECF5;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(57,146,214,0.28) 0%,transparent 70%);pointer-events:none;"></div>
    <div style="position:relative;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <div style="font:900 14px/1 inherit;letter-spacing:-0.01em;color:#5EA8E0;">netmarble</div>
      <span style="margin-left:auto;font-size:10px;font-weight:600;opacity:0.85;">GLOBAL</span>
    </div>
    <div style="position:relative;padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="background:linear-gradient(135deg,#0F2C52 0%,#1E5C96 100%);border-radius:10px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:700 10px/1.2 inherit;color:#E6ECF5;">Seven Knights</div>
      <div style="background:linear-gradient(135deg,#3A1228 0%,#7A2042 100%);border-radius:10px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:700 10px/1.2 inherit;color:#E6ECF5;">Marvel Snap</div>
      <div style="background:linear-gradient(135deg,#1E2D0F 0%,#445C2A 100%);border-radius:10px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:700 10px/1.2 inherit;color:#E6ECF5;">Lineage 2 Rev</div>
      <div style="background:linear-gradient(135deg,#2A1607 0%,#5C3512 100%);border-radius:10px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:700 10px/1.2 inherit;color:#E6ECF5;">Solo Leveling</div>
    </div>
    <div style="position:relative;padding:8px 14px;border-top:1px solid rgba(57,146,214,0.22);font-size:10px;display:flex;align-items:center;gap:8px;opacity:0.9;">
      <span style="font-weight:900;color:#5EA8E0;">◐</span><span>Make Wonderful Days</span>
    </div>
  </div>

sources:
  - https://www.netmarble.com/
  - https://company.netmarble.com/
---

### ① 브랜드 DNA
- **브랜드명**: Netmarble (넷마블)
- **한 줄 정체성**: 세븐나이츠·마블스냅·리니지2 레볼루션·솔로레벨링 — 글로벌 모바일 게임 퍼블리셔
- **공식 디자인 철학**: "Make Wonderful Days" — 전세계 유저에게 즐거운 모바일 경험
- **시그니처 요소 1개**: Netmarble Blue #0066B3 + 마블 스월 그라데이션 + 둥근 라운드 카드. NC의 다크 판타지·Nexon의 노란 캐주얼과 정반대의 "글로벌 모바일 퍼블리셔" 다이내믹 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 글로벌, 모바일, 다이내믹
- **무드 설명**: 블루 그라데이션이 풀블리드로 깔린 모바일 톤. 각 게임이 다양한 컬러 IP를 가지지만 메인 UI는 Netmarble Blue 한 톤. 스월(마블 무늬) 모티프가 헤더·풋터 글로우로 살짝 등장.
- **비주얼 스타일**: 모던 미니멀 (Layered 그라데이션)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (6~12px)
- **평면성**: Layered

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Netmarble Blue (다크 톤 보정) */
  --color-primary-50:  #0C2138;
  --color-primary-100: #11304F;
  --color-primary-200: #184069;
  --color-primary-300: #1F5689;
  --color-primary-400: #2E78B8;
  --color-primary-500: #3992D6;       /* 시그니처 (다크 명도 보정) */
  --color-primary-600: #5EA8E0;
  --color-primary-700: #84BEEA;
  --color-primary-800: #ABD3F1;
  --color-primary-900: #D4E8F8;

  /* Secondary - Marble Swirl (액센트 그라데이션) */
  --color-secondary-500: #9B6FD0;     /* purple swirl */

  /* Neutral (다크 반전 램프) */
  --color-neutral-0:    #0A1422;
  --color-neutral-50:   #142238;
  --color-neutral-100:  #1F3454;
  --color-neutral-300:  #3A4D6B;
  --color-neutral-500:  #7E8AA0;
  --color-neutral-700:  #C8D2E0;
  --color-neutral-900:  #E6ECF5;
  --color-neutral-1000: #FFFFFF;

  /* Semantic (다크 가독 보정) */
  --color-success-bg: #13301F;
  --color-success-fg: #5AD68C;
  --color-warning-bg: #332806;
  --color-warning-fg: #F0C04A;
  --color-error-bg:   #3A1414;
  --color-error-fg:   #F07A6E;
  --color-info-bg:    #0F2C52;
  --color-info-fg:    #5EA8E0;

  /* Surface */
  --bg-base:     #0A1422;
  --bg-subtle:   #142238;
  --bg-elevated: #1A2C45;
  --bg-hero:     linear-gradient(135deg, #0F2C52 0%, #1E5C96 100%);
  --bg-overlay:  rgba(2,8,18,0.66);

  /* Text */
  --text-primary:    #E6ECF5;
  --text-secondary:  #C8D2E0;
  --text-tertiary:   #A6B0C2;
  --text-on-primary: #061321;
  --text-disabled:   #5A6478;

  /* Border */
  --border-default: #22324A;
  --border-subtle:  #16243A;
  --border-strong:  #3A4D6B;
  --border-focus:   #3992D6;
}

[data-theme="light"] {
  /* Primary - Netmarble Blue */
  --color-primary-50:  #E6F0FA;
  --color-primary-100: #BCD7F0;
  --color-primary-200: #8DB8E2;
  --color-primary-300: #5E99D4;
  --color-primary-400: #3992D6;
  --color-primary-500: #0066B3;       /* 시그니처 */
  --color-primary-600: #00549A;
  --color-primary-700: #003DA5;
  --color-primary-800: #002A78;
  --color-primary-900: #001A4A;

  /* Secondary - Marble Swirl (액센트 그라데이션) */
  --color-secondary-500: #6B3FA0;     /* purple swirl */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F8FC;
  --color-neutral-100:  #E1E8F0;
  --color-neutral-300:  #A6B0C2;
  --color-neutral-500:  #5A6478;
  --color-neutral-700:  #22324A;
  --color-neutral-900:  #0F1A2E;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1E7B3B;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #B07A1F;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #C0392B;
  --color-info-bg:    #E6F0FA;
  --color-info-fg:    #0066B3;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F8FC;
  --bg-elevated: #FFFFFF;
  --bg-hero:     linear-gradient(135deg, #0066B3 0%, #003DA5 100%);
  --bg-overlay:  rgba(15,26,46,0.60);

  /* Text */
  --text-primary:    #0F1A2E;
  --text-secondary:  #3A4458;
  --text-tertiary:   #5A6478;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A6B0C2;

  /* Border */
  --border-default: #E1E8F0;
  --border-subtle:  #F5F8FC;
  --border-strong:  #A6B0C2;
  --border-focus:   #0066B3;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI: Netmarble Sans (자체) / Pretendard 폴백
  - 한글: Pretendard / Noto Sans KR
  - 영문: Inter / SF Pro
  - 코드: JetBrains Mono
- **위계**:
  - Display: 48px / 800 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.015em
  - H2: 22px / 700 / 1.3 / -0.01em
  - H3: 18px / 600 / 1.35 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 12px / 400 / 1.5 / 0
  - Caption: 11px / 600 / 1.4 / 0.04em uppercase

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 1200px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;       /* 카드 시그니처 */
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.40);
--shadow-md: 0 6px 18px rgba(0,0,0,0.50);
--shadow-lg: 0 20px 48px rgba(0,0,0,0.62);
--shadow-blue: 0 8px 20px rgba(57,146,214,0.40);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'Netmarble Sans',Pretendard,sans-serif; padding: 12px 22px; border-radius: 9999px; border: 0; cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); transform: translateY(-1px); box-shadow: var(--shadow-blue); }
.btn-marble { background: linear-gradient(135deg, #3992D6 0%, #9B6FD0 100%); color: #fff; }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-600); }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: 10px; padding: 12px 16px; font: 400 15px/1.4 'Netmarble Sans',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(57,146,214,0.28); }
```

**Card (Game)**
```css
.card { background: var(--bg-base); border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
.card .cover { aspect-ratio: 16/10; background: var(--bg-hero); display: grid; place-items: center; color: #fff; font: 800 18px/1.2 inherit; }
.card .meta { padding: 14px 16px; }
.card h3 { font: 700 16px/1.3 'Netmarble Sans',sans-serif; color: var(--text-primary); margin: 0 0 4px; }
.card .platform { font: 600 11px/1.3 inherit; color: var(--text-tertiary); letter-spacing: 0.06em; text-transform: uppercase; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 4px 12px; border-radius: 9999px; font: 700 11px/1.4 'Netmarble Sans',sans-serif; }
.tag-blue   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-soft   { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-marble { background: linear-gradient(135deg, #3992D6, #9B6FD0); color: #fff; letter-spacing: 0.04em; text-transform: uppercase; }
```

**Navigation**
```css
.topbar { background: var(--bg-base); border-bottom: 1px solid var(--border-default); padding: 14px 28px; display: flex; align-items: center; gap: 22px; }
.topbar .logo { font: 900 22px/1 'Netmarble Sans',sans-serif; letter-spacing: -0.02em; color: var(--color-primary-500); }
.topbar .item { font: 600 13px/1 inherit; color: var(--text-secondary); padding: 8px 10px; cursor: pointer; border-radius: 8px; }
.topbar .item:hover, .topbar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 260ms;
--duration-slow: 460ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.45, 0.64, 1);
```

### ⑪ Anti-patterns
1. 단색 평면 헤더 강제 금지 — 헤더/히어로는 블루 그라데이션 또는 마블 스월
2. 본문에 빨강/노랑 등 무관한 강조 색 사용 금지 — 블루 일관성
3. 모서리 sharp(<4px) 사용 금지 — 모바일 친화 round 톤
4. NC 처럼 어두운 캔버스 강제 금지 — 라이트가 디폴트
5. 본문에 게임 IP 컬러를 메인으로 사용 금지 — Netmarble Blue 한 점

### ⑫ 시그니처 적용 예시

```html
<style>
  .nm-app { font: 14px/1.55 'Netmarble Sans', Pretendard, -apple-system, sans-serif; background: #0A1422; color: #E6ECF5; min-height: 480px; display: grid; grid-template-rows: 56px 1fr; letter-spacing: -0.005em; }
  .nm-app .top { padding: 0 28px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid #22324A; }
  .nm-app .top .logo { font: 900 22px/1 inherit; letter-spacing: -0.02em; color: #5EA8E0; }
  .nm-app .top .nav { display: flex; gap: 6px; margin-left: 14px; }
  .nm-app .top .nav span { padding: 8px 12px; font: 600 13px/1 inherit; color: #C8D2E0; cursor: pointer; border-radius: 8px; }
  .nm-app .top .nav span.act { background: #11304F; color: #84BEEA; }
  .nm-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
  .nm-app .top .right .lang { font: 600 12px/1 inherit; color: #A6B0C2; cursor: pointer; }
  .nm-app .top .right .download { background: linear-gradient(135deg, #1E5C96, #0F2C52); color: #fff; padding: 8px 16px; border-radius: 9999px; font: 700 12px/1 inherit; cursor: pointer; }
  .nm-app .stage { padding: 24px 28px; display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: auto 1fr; gap: 16px; }
  .nm-app .hero { grid-row: span 2; background: linear-gradient(135deg, #0F2C52 0%, #1E5C96 60%, #5A3A8C 100%); border-radius: 16px; padding: 26px; color: #fff; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.55); }
  .nm-app .hero::after { content: ''; position: absolute; top: -40px; right: -40px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,0.20) 0%, transparent 70%); pointer-events: none; }
  .nm-app .hero .tag { position: relative; display: inline-flex; padding: 4px 12px; background: rgba(255,255,255,0.18); color: #fff; border-radius: 9999px; font: 700 11px/1.4 inherit; letter-spacing: 0.06em; text-transform: uppercase; width: max-content; margin-bottom: 12px; backdrop-filter: blur(8px); }
  .nm-app .hero h2 { position: relative; margin: 0 0 8px; font: 800 30px/1.1 inherit; letter-spacing: -0.02em; }
  .nm-app .hero .desc { position: relative; font-size: 13px; opacity: 0.92; line-height: 1.55; margin-bottom: 18px; max-width: 80%; }
  .nm-app .hero .row { position: relative; display: flex; gap: 8px; }
  .nm-app .hero .btn { font: 700 13px/1 inherit; padding: 12px 22px; border-radius: 9999px; cursor: pointer; }
  .nm-app .hero .btn.p { background: #fff; color: #0F2C52; }
  .nm-app .hero .btn.g { background: rgba(255,255,255,0.18); color: #fff; backdrop-filter: blur(8px); }
  .nm-app .tile { background: #142238; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.40); cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; display: flex; flex-direction: column; }
  .nm-app .tile:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.55); }
  .nm-app .tile .cv { aspect-ratio: 16/9; display: grid; place-items: center; color: #fff; font: 800 14px/1.2 inherit; }
  .nm-app .tile.a .cv { background: linear-gradient(135deg, #3A1228 0%, #7A2042 100%); }
  .nm-app .tile.b .cv { background: linear-gradient(135deg, #1E2D0F 0%, #445C2A 100%); }
  .nm-app .tile.c .cv { background: linear-gradient(135deg, #2A1607 0%, #5C3512 100%); }
  .nm-app .tile.d .cv { background: linear-gradient(135deg, #0F2C52 0%, #1E5C96 100%); }
  .nm-app .tile .meta { padding: 10px 12px; }
  .nm-app .tile h3 { margin: 0 0 2px; font: 700 13px/1.3 inherit; color: #E6ECF5; }
  .nm-app .tile .platform { font: 600 10px/1.3 inherit; color: #A6B0C2; letter-spacing: 0.06em; text-transform: uppercase; }
</style>

<div class="nm-app">
  <header class="top">
    <span class="logo">netmarble</span>
    <nav class="nav"><span class="act">Games</span><span>Company</span><span>News</span><span>Careers</span></nav>
    <div class="right"><span class="lang">EN · KO</span><span class="download">앱 다운로드</span></div>
  </header>
  <main class="stage">
    <div class="hero">
      <span class="tag">NEW · GLOBAL</span>
      <h2>Solo Leveling: ARISE</h2>
      <p class="desc">웹툰 기반 액션 RPG. 전세계 동시 출시. 당신만의 그림자 군단을 키워보세요.</p>
      <div class="row"><span class="btn p">사전 등록</span><span class="btn g">트레일러</span></div>
    </div>
    <div class="tile a"><div class="cv">Marvel Snap</div><div class="meta"><h3>마블 스냅</h3><div class="platform">MOBILE · COLLECTIBLE</div></div></div>
    <div class="tile b"><div class="cv">L2: Revolution</div><div class="meta"><h3>리니지2 레볼루션</h3><div class="platform">MOBILE · MMORPG</div></div></div>
    <div class="tile c"><div class="cv">Seven Knights</div><div class="meta"><h3>세븐나이츠</h3><div class="platform">MOBILE · RPG</div></div></div>
    <div class="tile d"><div class="cv">King of Fighters</div><div class="meta"><h3>KOF: AllStar</h3><div class="platform">MOBILE · ACTION</div></div></div>
  </main>
</div>
```
