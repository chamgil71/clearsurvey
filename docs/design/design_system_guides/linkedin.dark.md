---
brand: LinkedIn
brand_ko: 링크드인
slug: linkedin
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - social
  - enterprise

color_tone: cool
primary_color_hex: "#0A66C2"
primary_color_name: "LinkedIn Blue"
mood:
  - 신뢰
  - 비즈니스
  - 프로페셔널

font_category: sans-serif
font_primary: Source Sans 3
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2003
last_major_revision: 2024
signature_keyword: "LinkedIn 블루 + 비즈니스 프로필 카드 + 신뢰 톤"

card_tokens: |
  {
    "light": { "bg": "#F4F2EE", "surface": "#FFFFFF", "border": "#E0DEDA", "fg": "#1A1A1A", "fg_muted": "#666666", "accent": "#0A66C2" },
    "dark":  { "bg": "#1B1F23", "surface": "#2C3338", "border": "#3A4046", "fg": "#F5F5F5", "fg_muted": "#A8B0B8", "accent": "#70B5F9" }
  }

hero_html: |
  <div style="font-family:'Source Sans 3','Source Sans Pro',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.005em;">
    <div style="background:var(--card-surface);padding:10px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 1px 0 rgba(0,0,0,0.40);">
      <div style="width:28px;height:28px;background:var(--card-accent);border-radius:4px;display:grid;place-items:center;color:#0E1114;font:900 16px/1 inherit;letter-spacing:-0.05em;">in</div>
      <div style="flex:1;background:#1E2A36;border-radius:4px;padding:6px 10px;font:500 12px/1.4 inherit;color:var(--card-fg-muted);">🔍 검색</div>
    </div>
    <div style="padding:8px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:16px 14px;">
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <div style="width:48px;height:48px;background:linear-gradient(135deg,#70B5F9,#2D6FB8);border-radius:9999px;flex-shrink:0;display:grid;place-items:center;color:#0E1114;font:800 18px/1 inherit;">박</div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:4px;">
              <span style="font:600 14px/1.3 inherit;">박지원</span>
              <span style="font:500 12px/1.3 inherit;color:var(--card-fg-muted);">· 1촌 · 4시간</span>
            </div>
            <div style="font:400 12px/1.3 inherit;color:var(--card-fg-muted);margin-top:1px;">Product Designer at Naver · 강남구</div>
            <div style="font:400 13px/1.5 inherit;color:var(--card-fg);margin-top:8px;">새 디자인 시스템 v3.0을 함께 만든 동료들에게 깊이 감사합니다. 6개월간의 협업이 결실을 맺었습니다 🙏</div>
            <div style="display:flex;align-items:center;gap:18px;margin-top:10px;border-top:1px solid var(--card-border);padding-top:6px;font:600 12px/1.4 inherit;color:var(--card-fg-muted);">
              <span style="display:flex;align-items:center;gap:4px;">👍 좋아요</span>
              <span style="display:flex;align-items:center;gap:4px;">💬 댓글</span>
              <span style="display:flex;align-items:center;gap:4px;">↻ 다시 게시</span>
              <span style="display:flex;align-items:center;gap:4px;">↗ 보내기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.linkedin.com/
  - https://brand.linkedin.com/
  - https://design.linkedin.com/
---

### ① 브랜드 DNA
- **브랜드명**: LinkedIn (Microsoft 자회사)
- **한 줄 정체성**: 글로벌 1위 비즈니스 인맥/구인 SNS — 프로필·게시물·구인 일체형
- **공식 디자인 철학**: LinkedIn Design — "Built for opportunity" — 신뢰와 프로페셔널
- **시그니처 요소 1개**: LinkedIn 블루(#0A66C2) + 따뜻한 베이지 캔버스(#F4F2EE) + Source Sans 폰트. 한 화면에 늘 보이는 'in' 로고 + 라운드 사각 프로필 카드

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 비즈니스, 프로페셔널
- **무드 설명**: 비즈니스 SNS답게 차분한 베이지 캔버스 + 흰 카드 + 진한 블루 액센트. 모든 카드는 8px 라운드 + 1px 보더 + 미세한 그림자. 프로필 사진은 풀필 원형.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle — sm 그림자 + 1px 보더

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - LinkedIn Blue (dark-tuned: brand hue, lifted for contrast on dark) */
  --color-primary-50:  #0E2138;
  --color-primary-100: #122B49;
  --color-primary-200: #163C66;
  --color-primary-300: #1E5391;
  --color-primary-400: #2D6FB8;
  --color-primary-500: #70B5F9;   /* LinkedIn Blue (on-dark accent) */
  --color-primary-600: #8AC4FB;
  --color-primary-700: #A6D2FC;
  --color-primary-800: #C5E1FD;
  --color-primary-900: #E4F1FE;

  /* Secondary - Premium gold */
  --color-secondary-500: #E7B84B;

  /* Tertiary - Open To Work (badge) */
  --color-tertiary-500: #6FA64D;

  /* Neutral - LinkedIn cool dark tones (inverted ramp) */
  --color-neutral-0:    #16191C;
  --color-neutral-50:   #1B1F23;
  --color-neutral-100:  #1B1F23;       /* page bg (cool charcoal) */
  --color-neutral-200:  rgba(255,255,255,0.10);    /* border */
  --color-neutral-300:  rgba(255,255,255,0.16);
  --color-neutral-500:  rgba(255,255,255,0.42);
  --color-neutral-700:  rgba(255,255,255,0.65);    /* text secondary */
  --color-neutral-800:  rgba(255,255,255,0.80);
  --color-neutral-900:  rgba(255,255,255,0.90);    /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #143123;
  --color-success-fg: #5FD08A;
  --color-warning-bg: #3A2E0F;
  --color-warning-fg: #E7B84B;
  --color-error-bg:   #3A1C1A;
  --color-error-fg:   #F08379;
  --color-info-bg:    #122B49;
  --color-info-fg:    #70B5F9;

  /* Surface */
  --bg-base:     #1B1F23;              /* 쿨 차콜 캔버스 */
  --bg-subtle:   #242A30;
  --bg-elevated: #2C3338;             /* 카드 */
  --bg-overlay:  rgba(0,0,0,0.70);

  /* Text */
  --text-primary:    rgba(255,255,255,0.90);
  --text-secondary:  rgba(255,255,255,0.65);
  --text-tertiary:   rgba(255,255,255,0.48);
  --text-on-primary: #0E1114;
  --text-link:       #70B5F9;
  --text-disabled:   rgba(255,255,255,0.32);

  /* Border */
  --border-default: rgba(255,255,255,0.10);
  --border-subtle:  rgba(255,255,255,0.06);
  --border-strong:  rgba(255,255,255,0.22);
  --border-focus:   #70B5F9;
}

[data-theme="light"] {
  /* Primary - LinkedIn Blue */
  --color-primary-50:  #EAF1FA;
  --color-primary-100: #C7D9EE;
  --color-primary-200: #94B4DE;
  --color-primary-300: #6190CE;
  --color-primary-400: #3675BD;
  --color-primary-500: #0A66C2;   /* LinkedIn Blue */
  --color-primary-600: #084FA0;
  --color-primary-700: #06407F;
  --color-primary-800: #04305E;
  --color-primary-900: #021F3D;

  /* Secondary - Premium gold */
  --color-secondary-500: #B07F00;

  /* Tertiary - Open To Work (badge) */
  --color-tertiary-500: #44712E;

  /* Neutral - LinkedIn warm tones */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAF8;
  --color-neutral-100:  #F4F2EE;       /* page bg (warm beige) */
  --color-neutral-200:  rgba(0,0,0,0.08);    /* border */
  --color-neutral-300:  rgba(0,0,0,0.15);
  --color-neutral-500:  rgba(0,0,0,0.40);
  --color-neutral-700:  rgba(0,0,0,0.60);    /* text secondary */
  --color-neutral-800:  rgba(0,0,0,0.80);
  --color-neutral-900:  rgba(0,0,0,0.90);    /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E5F6E8;
  --color-success-fg: #057642;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #915907;
  --color-error-bg:   #FBE2E2;
  --color-error-fg:   #C03A2B;
  --color-info-bg:    #EAF1FA;
  --color-info-fg:    #0A66C2;

  /* Surface */
  --bg-base:     #F4F2EE;              /* 베이지 캔버스 */
  --bg-subtle:   #FAFAF8;
  --bg-elevated: #FFFFFF;              /* 카드 */
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    rgba(0,0,0,0.90);
  --text-secondary:  rgba(0,0,0,0.60);
  --text-tertiary:   rgba(0,0,0,0.45);
  --text-on-primary: #FFFFFF;
  --text-link:       #0A66C2;
  --text-disabled:   rgba(0,0,0,0.30);

  /* Border */
  --border-default: rgba(0,0,0,0.08);
  --border-subtle:  rgba(0,0,0,0.04);
  --border-strong:  rgba(0,0,0,0.15);
  --border-focus:   #0A66C2;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Source Sans 3 / Source Sans Pro** (OFL) — Adobe + LinkedIn
  - 한글: **Pretendard** / Apple SD Gothic Neo 폴백
- **위계**:
  - Display: 32px / 700 / 1.2 / -0.02em
  - H1 (프로필): 24px / 600 / 1.25 / -0.015em
  - H2: 20px / 600 / 1.3 / -0.01em
  - H3 (게시물 작성자): 14px / 600 / 1.3 / -0.005em
  - Body Large: 16px / 400 / 1.55 / 0
  - Body (게시물): 14px / 400 / 1.5 / 0
  - Body Small (메타): 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.4 / 0

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
  --space-3xl: 56px;
  ```
- **Container**: max-width 480px (모바일), 552px (피드), 1128px (3컬럼 데스크톱)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;        /* 카드 시그니처 */
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;   /* 아바타, 버튼 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 0 0 1px rgba(255,255,255,0.10);     /* 1px 보더 대체 */
--shadow-md: 0 4px 12px rgba(0,0,0,0.45);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.60);
```

### ⑧ Iconography
- **스타일**: LinkedIn UI Icons — Outline (Regular) + Filled 보조
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: LinkedIn Icons / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 'Source Sans 3', 'Source Sans Pro', sans-serif; letter-spacing: -0.005em;
       border-radius: 9999px; padding: 9px 18px; border: 1px solid transparent;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: transparent; color: var(--color-primary-500); border-color: var(--color-primary-500); }
.btn-secondary:hover { background: var(--color-primary-50); }
.btn-tertiary { background: transparent; color: var(--text-primary); border-color: var(--text-primary); }
.btn-text { background: transparent; color: var(--text-secondary); padding: 9px 12px; }
.btn-connect { background: transparent; color: var(--color-primary-500); border-color: var(--color-primary-500); padding: 6px 14px; font: 600 13px/1 inherit; }
```

**Input**
```css
.search { background: var(--color-primary-50); border: 0; border-radius: 4px; padding: 8px 12px; font: 500 13px/1.4 inherit; color: var(--text-primary); display: flex; align-items: center; gap: 6px; }
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 9px 12px; font: 500 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { outline: 0; border-color: var(--color-primary-500); box-shadow: 0 0 0 1px var(--color-primary-500); }
```

**Card (Post)**
```css
.post { background: var(--bg-elevated); border-radius: var(--radius-md); padding: 14px 16px; box-shadow: var(--shadow-sm); margin-bottom: 8px; }
.post .head { display: flex; align-items: flex-start; gap: 10px; }
.post .head .avatar { width: 48px; height: 48px; border-radius: 9999px; }
.post .head .name { font: 600 14px/1.3 inherit; color: var(--text-primary); }
.post .head .name .badge { display: inline-block; background: var(--text-primary); color: var(--bg-elevated); padding: 1px 4px; font: 700 9px/1.4 inherit; border-radius: 2px; margin-left: 4px; vertical-align: middle; }
.post .head .title { font: 400 12px/1.4 inherit; color: var(--text-secondary); margin-top: 1px; }
.post .head .meta { font: 500 12px/1.4 inherit; color: var(--text-tertiary); }
.post .body { font: 400 14px/1.55 inherit; color: var(--text-primary); margin-top: 8px; }
.post .actions { border-top: 1px solid var(--border-default); margin-top: 12px; padding-top: 6px; display: grid; grid-template-columns: repeat(4, 1fr); }
.post .actions .btn { padding: 8px 4px; background: transparent; font: 600 13px/1.4 inherit; color: var(--text-secondary); display: flex; align-items: center; justify-content: center; gap: 4px; border-radius: 4px; cursor: pointer; }
.post .actions .btn:hover { background: var(--bg-base); }

.profile-card { background: var(--bg-elevated); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); overflow: hidden; }
.profile-card .cover { height: 60px; background: linear-gradient(135deg, var(--color-primary-300), var(--color-primary-700)); }
.profile-card .body { padding: 0 14px 14px; position: relative; }
.profile-card .avatar { width: 64px; height: 64px; border: 3px solid var(--bg-elevated); border-radius: 9999px; margin-top: -32px; }
.profile-card .name { font: 600 16px/1.3 inherit; margin-top: 6px; }
```

**Badge / Tag**
```css
.tag { padding: 2px 8px; border-radius: 4px; font: 600 11px/1.5 inherit; }
.tag-1st       { background: transparent; color: var(--text-tertiary); }
.tag-premium   { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.tag-opentowork { background: var(--color-tertiary-500); color: #0E1114; }
.tag-hiring    { background: var(--color-success-bg); color: var(--color-success-fg); }
```

**Navigation (Top)**
```css
.navbar { background: var(--bg-elevated); padding: 8px 16px; display: flex; align-items: center; gap: 12px; box-shadow: var(--shadow-sm); position: sticky; top: 0; z-index: 10; }
.navbar .logo { width: 34px; height: 34px; background: var(--color-primary-500); border-radius: 4px; color: var(--text-on-primary); display: grid; place-items: center; font: 900 18px/1 inherit; letter-spacing: -0.05em; }
.navbar .item { padding: 6px 12px; font: 600 12px/1.3 inherit; color: var(--text-secondary); display: flex; flex-direction: column; align-items: center; gap: 2px; }
.navbar .item.active { color: var(--text-primary); border-bottom: 2px solid var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
```

### ⑪ Anti-patterns
1. 베이지 캔버스(#F4F2EE) 대신 회색(#F0F2F5) 사용 금지 — Facebook과 혼동
2. CTA 모양을 사각으로 변경 금지 — Pill round 9999px이 LinkedIn 시그니처
3. Premium 골드를 본문 텍스트에 사용 금지 — 배지/구독 강조만
4. 본문에 채도 높은 시안/그린 사용 금지 — 신뢰 톤에 어울리지 않음
5. 카드 모서리 12px 이상 라운드 금지 — 8px이 표준

### ⑫ 시그니처 적용 예시 (LinkedIn 피드)

```html
<style>
  body { margin: 0; font-family: 'Source Sans 3', 'Source Sans Pro', -apple-system, Pretendard, sans-serif; letter-spacing: -0.005em; color: rgba(255,255,255,0.90); background: #1B1F23; }
  .app { max-width: 552px; margin: 0 auto; min-height: 100vh; }
  .navbar { background: #2C3338; padding: 8px 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 0 rgba(0,0,0,0.40); position: sticky; top: 0; z-index: 10; }
  .navbar .logo { width: 32px; height: 32px; background: #70B5F9; border-radius: 4px; color: #0E1114; display: grid; place-items: center; font: 900 17px/1 inherit; letter-spacing: -0.05em; }
  .navbar .search { flex: 1; background: #1E2A36; border-radius: 4px; padding: 6px 10px; font: 500 13px/1.4 inherit; color: rgba(255,255,255,0.55); display: flex; align-items: center; gap: 6px; max-width: 280px; }
  .navbar .right { margin-left: auto; display: flex; gap: 4px; }
  .navbar .item { padding: 6px 10px; font: 600 11px/1.3 inherit; color: rgba(255,255,255,0.65); display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; }
  .navbar .item .ic { font-size: 18px; }
  .navbar .item.active { color: rgba(255,255,255,0.90); border-bottom: 2px solid rgba(255,255,255,0.90); }
  .feed { padding: 8px; display: flex; flex-direction: column; gap: 8px; }
  .profile-card { background: #2C3338; border-radius: 8px; box-shadow: 0 0 0 1px rgba(255,255,255,0.10); overflow: hidden; }
  .profile-card .cover { height: 56px; background: linear-gradient(135deg, #1E5391, #70B5F9); }
  .profile-card .body { padding: 0 14px 14px; }
  .profile-card .av { width: 60px; height: 60px; border: 3px solid #2C3338; border-radius: 9999px; background: linear-gradient(135deg, #70B5F9, #2D6FB8); margin-top: -30px; display: grid; place-items: center; color: #0E1114; font: 800 22px/1 inherit; }
  .profile-card .name { font: 600 16px/1.3 inherit; margin-top: 8px; }
  .profile-card .title { font: 400 12px/1.4 inherit; color: rgba(255,255,255,0.65); margin-top: 1px; }
  .composer { background: #2C3338; border-radius: 8px; box-shadow: 0 0 0 1px rgba(255,255,255,0.10); padding: 12px 14px; display: flex; align-items: center; gap: 10px; }
  .composer .av { width: 40px; height: 40px; border-radius: 9999px; background: linear-gradient(135deg, #70B5F9, #2D6FB8); }
  .composer .ph { flex: 1; background: transparent; border: 1px solid rgba(255,255,255,0.22); border-radius: 9999px; padding: 9px 14px; font: 500 13px/1.4 inherit; color: rgba(255,255,255,0.65); }
  .post { background: #2C3338; border-radius: 8px; box-shadow: 0 0 0 1px rgba(255,255,255,0.10); padding: 14px 16px; }
  .post .head { display: flex; align-items: flex-start; gap: 10px; }
  .post .head .av { width: 48px; height: 48px; background: linear-gradient(135deg, #70B5F9, #2D6FB8); border-radius: 9999px; display: grid; place-items: center; color: #0E1114; font: 800 18px/1 inherit; }
  .post .head .info .name { font: 600 14px/1.3 inherit; display: flex; align-items: center; gap: 4px; }
  .post .head .info .name .you { background: rgba(255,255,255,0.90); color: #16191C; padding: 1px 4px; font: 700 9px/1.4 inherit; border-radius: 2px; }
  .post .head .info .title { font: 400 12px/1.4 inherit; color: rgba(255,255,255,0.65); margin-top: 1px; }
  .post .head .info .meta { font: 500 11px/1.4 inherit; color: rgba(255,255,255,0.48); margin-top: 1px; }
  .post .body { font: 400 14px/1.55 inherit; margin-top: 10px; color: rgba(255,255,255,0.90); }
  .post .stats { padding: 8px 0; display: flex; align-items: center; gap: 6px; font: 500 12px/1 inherit; color: rgba(255,255,255,0.65); }
  .post .stats .iconwrap { display: flex; align-items: center; }
  .post .stats .ic { width: 16px; height: 16px; border-radius: 9999px; border: 2px solid #2C3338; margin-right: -4px; font: 700 10px/1 inherit; display: grid; place-items: center; color: #fff; }
  .post .stats .ic.like { background: #70B5F9; }
  .post .stats .ic.love { background: #E8645E; }
  .post .stats .ic.insight { background: #E7B84B; }
  .post .actions { border-top: 1px solid rgba(255,255,255,0.10); margin-top: 8px; padding-top: 4px; display: grid; grid-template-columns: repeat(4, 1fr); font: 600 13px/1.4 inherit; color: rgba(255,255,255,0.65); }
  .post .actions span { padding: 8px 4px; display: flex; align-items: center; justify-content: center; gap: 6px; border-radius: 4px; cursor: pointer; }
  .post .actions span:hover { background: rgba(255,255,255,0.06); }
</style>

<div class="app">
  <header class="navbar">
    <div class="logo">in</div>
    <div class="search">🔍 검색</div>
    <div class="right">
      <div class="item active"><span class="ic">🏠</span>홈</div>
      <div class="item"><span class="ic">👥</span>네트워크</div>
      <div class="item"><span class="ic">💼</span>채용</div>
      <div class="item"><span class="ic">💬</span>메시지</div>
      <div class="item"><span class="ic">🔔</span>알림</div>
    </div>
  </header>
  <main class="feed">
    <section class="profile-card">
      <div class="cover"></div>
      <div class="body">
        <div class="av">L</div>
        <div class="name">이연주</div>
        <div class="title">Product Designer at Naver · 강남구</div>
      </div>
    </section>
    <section class="composer">
      <div class="av"></div>
      <div class="ph">게시물 시작 — 무엇을 공유하시겠어요?</div>
    </section>
    <article class="post">
      <div class="head">
        <div class="av">박</div>
        <div class="info">
          <div class="name">박지원 <span class="you">1촌</span></div>
          <div class="title">Product Designer at Naver · 5,420명의 팔로워</div>
          <div class="meta">4시간 · 🌍</div>
        </div>
      </div>
      <div class="body">새 디자인 시스템 v3.0을 함께 만든 동료들에게 깊이 감사합니다. 6개월간의 협업이 결실을 맺었습니다. 토큰 1,200개, 컴포넌트 84개 — 가장 큰 변화는 결국 합의의 방식이었습니다 🙏</div>
      <div class="stats">
        <div class="iconwrap">
          <span class="ic like">👍</span>
          <span class="ic love">♥</span>
          <span class="ic insight">💡</span>
        </div>
        <span style="margin-left:8px;">민수님 외 248명</span>
        <span style="margin-left:auto;">댓글 42 · 다시 게시 8</span>
      </div>
      <div class="actions">
        <span>👍 좋아요</span>
        <span>💬 댓글</span>
        <span>↻ 다시 게시</span>
        <span>↗ 보내기</span>
      </div>
    </article>
  </main>
</div>
```
