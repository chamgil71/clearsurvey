---
brand: NaverWebtoon
brand_ko: 네이버웹툰
slug: naver-webtoon
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#00DC64"
primary_color_name: "Webtoon Green"
mood:
  - 컬러풀
  - 만화
  - 글로벌

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - dark
  - light

released_year: 2004
last_major_revision: 2024
signature_keyword: "Webtoon Green과 다채로운 썸네일 그리드의 한국 웹툰 표준"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F5F5", "border": "#E0E0E0", "fg": "#191919", "fg_muted": "#888888", "accent": "#00B854" },
    "dark":  { "bg": "#191919", "surface": "#2D2D2D", "border": "#383838", "fg": "#FFFFFF", "fg_muted": "#A0A0A0", "accent": "#00DC64" }
  }

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;color:var(--card-accent);letter-spacing:-0.025em;">webtoon</strong>
      <span style="margin-left:auto;font-size:18px;">🔍</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
        <div>
          <div style="aspect-ratio:2/3;background:linear-gradient(135deg,#FF3478,#00DC64);border-radius:8px;position:relative;">
            <span style="position:absolute;left:6px;top:6px;background:#FF3478;color:#fff;padding:1px 5px;border-radius:3px;font-size:8px;font-weight:800;">UP</span>
          </div>
          <div style="font-size:11px;font-weight:700;margin-top:5px;line-height:1.2;">신의 탑</div>
          <div style="font-size:10px;color:var(--card-fg-muted);margin-top:2px;">★ 9.8</div>
        </div>
        <div>
          <div style="aspect-ratio:2/3;background:linear-gradient(135deg,#0074E8,#9146FF);border-radius:8px;"></div>
          <div style="font-size:11px;font-weight:700;margin-top:5px;line-height:1.2;">화산귀환</div>
          <div style="font-size:10px;color:var(--card-fg-muted);margin-top:2px;">★ 9.9</div>
        </div>
        <div>
          <div style="aspect-ratio:2/3;background:linear-gradient(135deg,#FFC700,#EE2E24);border-radius:8px;position:relative;">
            <span style="position:absolute;left:6px;top:6px;background:var(--card-accent);color:#191919;padding:1px 5px;border-radius:3px;font-size:8px;font-weight:800;">신작</span>
          </div>
          <div style="font-size:11px;font-weight:700;margin-top:5px;line-height:1.2;">외모지상주의</div>
          <div style="font-size:10px;color:var(--card-fg-muted);margin-top:2px;">★ 9.7</div>
        </div>
      </div>
      <div style="background:var(--card-surface);border-radius:10px;padding:10px;font-size:11px;color:var(--card-fg-muted);display:flex;align-items:center;gap:8px;">
        <span style="font-size:18px;">🎁</span>
        <span><strong style="color:var(--card-fg);font-size:12px;">쿠키 충전</strong><div style="font-size:10px;margin-top:1px;">10% 추가 적립 이벤트</div></span>
      </div>
    </div>
  </div>

sources:
  - https://comic.naver.com/
  - https://www.webtoons.com/
---

### ① 브랜드 DNA
- **브랜드명**: NaverWebtoon (네이버웹툰 / WEBTOON)
- **한 줄 정체성**: 한국 웹툰의 종주 — 글로벌 웹툰 표준을 만든 디지털 만화 플랫폼
- **공식 디자인 철학**: "Stories are for everyone — colorful, mobile-first, infinite scroll"
- **시그니처 요소 1개**: Webtoon Green(#00DC64) + 다채로운 썸네일 그리드 + 무한 스크롤 reading

### ② 톤 & 무드
- **핵심 키워드 3개**: 컬러풀, 만화, 글로벌
- **무드 설명**: 다크 캔버스 + 다양한 색의 썸네일 카드 + Green 액센트. 만화 자체가 색을 담당.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~12px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Webtoon Green */
  --color-primary-50:  #E0FCEC;
  --color-primary-100: #B5F4D2;
  --color-primary-200: #7DEBA9;
  --color-primary-300: #4EE187;
  --color-primary-400: #22DC72;
  --color-primary-500: #00DC64;  /* Webtoon Green */
  --color-primary-600: #00B854;
  --color-primary-700: #008F40;
  --color-primary-800: #00682E;
  --color-primary-900: #003D1B;

  /* Secondary - Webtoon Pink (UP) */
  --color-secondary-500: #FF3478;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #E0E0E0;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #A0A0A0;
  --color-neutral-700:  #888888;
  --color-neutral-800:  #2D2D2D;
  --color-neutral-900:  #191919;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0FCEC;
  --color-success-fg: #00DC64;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #FFC700;
  --color-error-bg:   #FFE5E5;
  --color-error-fg:   #FF3838;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #191919;
  --text-secondary:  #555555;
  --text-tertiary:   #888888;
  --text-on-primary: #191919;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #F0F0F0;
  --border-subtle:  #FAFAFA;
  --border-strong:  #E0E0E0;
  --border-focus:   #00DC64;
}

[data-theme="dark"] {
  --bg-base: #191919;
  --bg-subtle: #2D2D2D;
  --bg-elevated: #383838;
  --text-primary: #FFFFFF;
  --text-secondary: #A0A0A0;
  --border-default: #2D2D2D;
}
```

### ④ 타이포그래피
- **폰트 페어링**: 한글 Pretendard, 영문 -apple-system
- **위계**:
  - Display: 32px / 800 / 1.15 / -0.025em
  - H1: 22px / 800 / 1.2 / -0.02em
  - H2: 17px / 800 / 1.27 / -0.015em
  - H3: 14px / 700 / 1.3 / -0.01em
  - Body: 13px / 500 / 1.5 / 0
  - Body Small: 12px / 500 / 1.43 / 0
  - Caption: 11px / 700 / 1.27 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**: `--space-xs:4px; --space-sm:8px; --space-md:12px; --space-lg:16px; --space-xl:24px; --space-2xl:32px;`
- **Container**: max-width 480px (모바일 우선)

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 4px; --radius-md: 8px;
--radius-lg: 12px; --radius-xl: 16px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
--shadow-md: 0 4px 12px rgba(0,0,0,0.20);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.30);
--shadow-xl: 0 16px 32px rgba(0,220,100,0.20);
```

### ⑧ Iconography
- **스타일**: Outline + Filled
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 14px/1 Pretendard, sans-serif; letter-spacing:-0.01em; border-radius: var(--radius-md); padding: 12px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 0; border-radius: var(--radius-md); padding: 10px 12px; font-size: 13px; font-family: inherit; }
.input:focus { outline: 2px solid var(--border-focus); outline-offset: -2px; }
```

**Card** (Webtoon thumbnail)
```css
.toon { cursor: pointer; }
.toon .img { aspect-ratio: 2/3; border-radius: var(--radius-md); position: relative; }
.toon h3 { font-size: 13px; font-weight: 700; margin: 6px 0 2px; line-height: 1.25; }
.toon .rating { font-size: 11px; color: var(--text-tertiary); }
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 14px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 1px 6px; border-radius: 3px; font-size: 9px; font-weight: 800; line-height: 14px; display: inline-flex; align-items: center; }
.tag-up { background: #FF3478; color: #fff; }
.tag-new { background: #00DC64; color: #191919; }
.tag-solid { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Tab — 요일별)**
```css
.tabs { display: flex; gap: 0; padding: 0 12px; border-bottom: 1px solid var(--border-default); }
.tabs .tab { padding: 12px 14px; font-size: 14px; font-weight: 700; color: var(--text-tertiary); cursor: pointer; }
.tabs .tab.active { color: var(--color-primary-500); border-bottom: 2px solid var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 200ms; --duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. UP/신작 배지 색을 임의 매핑 금지 — Pink UP / Green 신작 보존
2. 썸네일 라운드를 16px+ 변경 금지 — 8px 시그니처
3. brand green을 본문 텍스트에 사용 금지
4. 무한 스크롤 reader에 가로 페이지 모드 강제 금지 — 세로가 표준
5. 다크 캔버스를 흰색으로 변경 금지 — 만화 시청 톤

### ⑫ 시그니처 적용 예시 (Mobile feed)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #fff; background: #191919; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { padding: 12px 14px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #2D2D2D; }
  .topbar .brand { font-weight: 900; color: #00DC64; font-size: 22px; letter-spacing: -0.025em; }
  .topbar .icons { margin-left: auto; font-size: 18px; }
  .tabs { display: flex; gap: 0; padding: 0 4px; border-bottom: 1px solid #2D2D2D; }
  .tabs .tab { flex: 1; padding: 12px 4px; font-size: 13px; font-weight: 700; color: #888; cursor: pointer; text-align: center; }
  .tabs .tab.active { color: #00DC64; border-bottom: 2px solid #00DC64; }
  .grid { padding: 14px 12px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
  .toon { cursor: pointer; }
  .toon .img { aspect-ratio: 2/3; border-radius: 8px; position: relative; }
  .toon .img .badge { position: absolute; left: 6px; top: 6px; padding: 2px 6px; border-radius: 3px; font-size: 9px; font-weight: 800; }
  .toon .img .up { background: #FF3478; color: #fff; }
  .toon .img .new { background: #00DC64; color: #191919; }
  .toon h3 { font-size: 13px; font-weight: 700; margin: 6px 0 2px; line-height: 1.25; }
  .toon .rating { font-size: 11px; color: #888; }
  .promo { margin: 0 12px 16px; background: #2D2D2D; border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; gap: 10px; }
  .promo .ic { font-size: 22px; }
  .promo strong { font-size: 13px; }
  .promo .sub { font-size: 11px; color: #A0A0A0; margin-top: 2px; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">webtoon</span>
    <span class="icons">🔍 🔔</span>
  </header>
  <div class="tabs">
    <div class="tab active">월</div>
    <div class="tab">화</div>
    <div class="tab">수</div>
    <div class="tab">목</div>
    <div class="tab">금</div>
    <div class="tab">토</div>
    <div class="tab">일</div>
  </div>
  <div class="grid">
    <div class="toon"><div class="img" style="background:linear-gradient(135deg,#FF3478,#00DC64);"><span class="badge up">UP</span></div><h3>신의 탑</h3><div class="rating">★ 9.8</div></div>
    <div class="toon"><div class="img" style="background:linear-gradient(135deg,#0074E8,#9146FF);"></div><h3>화산귀환</h3><div class="rating">★ 9.9</div></div>
    <div class="toon"><div class="img" style="background:linear-gradient(135deg,#FFC700,#EE2E24);"><span class="badge new">신작</span></div><h3>외모지상주의</h3><div class="rating">★ 9.7</div></div>
    <div class="toon"><div class="img" style="background:linear-gradient(135deg,#1AAD5C,#0074E8);"></div><h3>여신강림</h3><div class="rating">★ 9.6</div></div>
    <div class="toon"><div class="img" style="background:linear-gradient(135deg,#9146FF,#FF3478);"><span class="badge up">UP</span></div><h3>나혼자만 레벨업</h3><div class="rating">★ 9.9</div></div>
    <div class="toon"><div class="img" style="background:linear-gradient(135deg,#FF6F0F,#FFC700);"></div><h3>전지적 독자 시점</h3><div class="rating">★ 9.8</div></div>
  </div>
  <div class="promo">
    <span class="ic">🎁</span>
    <div><strong>쿠키 충전</strong><div class="sub">10% 추가 적립 이벤트 진행 중</div></div>
  </div>
</div>
```
