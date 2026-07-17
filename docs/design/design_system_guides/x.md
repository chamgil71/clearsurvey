---
brand: X
brand_ko: 엑스
slug: x
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - media

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "X Black"
mood:
  - 단호
  - 즉시
  - 모노

font_category: sans-serif
font_primary: TwitterChirp
font_korean_supported: true

density: compact
corner_style: pill
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2023
last_major_revision: 2025
signature_keyword: "검정 모노톤 + Chirp 글자 + 풀필 액션 버튼의 단호한 타임라인"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F9F9", "border": "#EFF3F4", "fg": "#0F1419", "fg_muted": "#536471", "accent": "#000000" },
    "dark":  { "bg": "#000000", "surface": "#16181C", "border": "#2F3336", "fg": "#E7E9EA", "fg_muted": "#71767B", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:'TwitterChirp','Inter',-apple-system,'Segoe UI',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.01em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:22px;height:22px;background:var(--card-accent);color:var(--card-bg);border-radius:4px;display:grid;place-items:center;font:900 14px/1 sans-serif;">𝕏</div>
      <strong style="font-size:15px;font-weight:800;">홈</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">실시간</span>
    </div>
    <div style="padding:10px 14px;display:flex;flex-direction:column;gap:10px;overflow:hidden;">
      <div style="display:flex;gap:10px;">
        <div style="width:34px;height:34px;border-radius:9999px;background:#1D9BF0;flex:none;"></div>
        <div style="flex:1;min-width:0;">
          <div style="font:700 13px/1.2 inherit;">@dev <span style="color:var(--card-fg-muted);font-weight:400;">· 2m</span></div>
          <div style="font:400 13px/1.4 inherit;color:var(--card-fg);margin-top:2px;">X는 풀필 버튼과 검정 캔버스의 단호함이 시그니처다.</div>
          <div style="display:flex;gap:14px;margin-top:6px;color:var(--card-fg-muted);font:600 11px/1 inherit;">
            <span>💬 12</span><span>🔁 3</span><span>❤ 84</span><span>📊 1.2K</span>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <input style="flex:1;background:var(--card-surface);border:0;border-radius:9999px;padding:8px 14px;color:var(--card-fg);font:500 12px/1 inherit;" placeholder="무슨 일이 일어나고 있나요?"/>
      <div style="background:var(--card-accent);color:var(--card-bg);border-radius:9999px;padding:8px 16px;font:800 12px/1 inherit;">게시</div>
    </div>
  </div>

sources:
  - https://x.com/
  - https://help.x.com/en/resources/brand-toolkit
---

### ① 브랜드 DNA
- **브랜드명**: X (구 Twitter)
- **한 줄 정체성**: 실시간 단문 공개 타임라인 — 짧은 글·이미지·동영상을 즉시 공유
- **공식 디자인 철학**: "Everything app" — 단호하고 무광택의 모노톤 베이스 위에 텍스트가 주인공
- **시그니처 요소 1개**: 순수 검정(#000000) 캔버스 + 흰색 풀필 액션 버튼 + Chirp 글꼴의 압축된 자간. 트위터 시절의 하늘색 새 로고를 완전히 제거하고 모노톤 정체성으로 전환

### ② 톤 & 무드
- **핵심 키워드 3개**: 단호, 즉시, 모노
- **무드 설명**: 검정 또는 순백 캔버스 양 극단만 사용. 색은 액션(블루 1D9BF0, 핑크 F91880, 그린 00BA7C)에만 점적으로. 텍스트가 즉시 시선을 잡도록 카드 보더 최소화.
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘
- **밀도(Density)**: Compact — 한 화면에 최대한 많은 포스트
- **모서리 성향**: Pill (액션 버튼 999px) / 카드 자체는 0~8px
- **평면성**: Flat — 그림자 거의 없음, 1px 보더로 구분

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - X Black */
  --color-primary-50:  #F7F9F9;
  --color-primary-100: #EFF3F4;
  --color-primary-200: #CFD9DE;
  --color-primary-300: #8B98A5;
  --color-primary-400: #536471;
  --color-primary-500: #000000;  /* X Black */
  --color-primary-600: #000000;
  --color-primary-700: #000000;
  --color-primary-800: #000000;
  --color-primary-900: #000000;

  /* Secondary - Action Blue (트위터 잔재, 링크용) */
  --color-secondary-500: #1D9BF0;

  /* Action accents (점적 사용) */
  --color-action-like:    #F91880;
  --color-action-retweet: #00BA7C;
  --color-action-bookmark:#1D9BF0;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F9F9;
  --color-neutral-100:  #EFF3F4;
  --color-neutral-200:  #E1E8ED;
  --color-neutral-300:  #CFD9DE;
  --color-neutral-500:  #8B98A5;
  --color-neutral-700:  #536471;
  --color-neutral-800:  #2F3336;
  --color-neutral-900:  #0F1419;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DDF2E8;
  --color-success-fg: #00754A;
  --color-warning-bg: #FFF1D6;
  --color-warning-fg: #8A6300;
  --color-error-bg:   #FDE2E4;
  --color-error-fg:   #F4212E;
  --color-info-bg:    #E3F0FF;
  --color-info-fg:    #1D9BF0;

  /* Surface (Light) */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F9F9;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.40);

  /* Text */
  --text-primary:    #0F1419;
  --text-secondary:  #536471;
  --text-tertiary:   #8B98A5;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #8B98A5;

  /* Border */
  --border-default: #EFF3F4;
  --border-subtle:  #F7F9F9;
  --border-strong:  #CFD9DE;
  --border-focus:   #1D9BF0;
}

[data-theme="dark"] {
  --bg-base:     #000000;
  --bg-subtle:   #16181C;
  --bg-elevated: #000000;
  --text-primary:   #E7E9EA;
  --text-secondary: #71767B;
  --text-tertiary:  #71767B;
  --border-default: #2F3336;
  --border-subtle:  #16181C;
  --border-strong:  #3E4144;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **TwitterChirp** (자체 폰트) / system-ui 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드: TwitterChirp Mono / SFMono
- **위계**:
  - Display: 31px / 800 / 1.1 / -0.02em
  - H1: 23px / 800 / 1.2 / -0.015em
  - H2: 20px / 800 / 1.25 / -0.01em
  - H3: 17px / 700 / 1.3 / -0.005em
  - Body Large: 17px / 400 / 1.3 / 0
  - Body: 15px / 400 / 1.3 / 0
  - Body Small: 13px / 400 / 1.3 / 0
  - Caption: 13px / 400 / 1.3 / 0 (text-secondary)

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
- **Container**: max-width 600px (단일 컬럼 피드), 좌우 패딩 16px. 3컬럼 풀폭 1280px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-full: 9999px;   /* 모든 액션 버튼 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 0 0 1px rgba(0,0,0,0.05);
--shadow-md: 0 1px 3px rgba(0,0,0,0.12);     /* 미디어 카드 */
--shadow-lg: 0 8px 24px rgba(0,0,0,0.18);    /* 모달 */
--shadow-xl: 0 20px 48px rgba(0,0,0,0.30);
```

### ⑧ Iconography
- **스타일**: Filled + Outline 혼합 (활성 시 filled)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: 자체 아이콘 / Phosphor Fill

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 TwitterChirp, system-ui, sans-serif; letter-spacing: -0.005em;
       border-radius: 9999px; padding: 9px 16px; border: 0; cursor: pointer; }
.btn-primary  { background: var(--text-primary); color: var(--text-on-primary); }   /* 검정/화이트 자동 반전 */
.btn-primary:hover { opacity: 0.9; }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-blue { background: #1D9BF0; color: #fff; }
.btn-blue:hover { background: #1A8CD8; }
.btn-danger { background: transparent; color: #F4212E; border: 1px solid #F4212E; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 0; border-radius: 9999px; padding: 10px 16px;
         font: 400 15px/1.3 inherit; color: var(--text-primary); }
.input:focus { background: var(--bg-base); box-shadow: 0 0 0 1px var(--border-focus); outline: 0; }
.compose { background: transparent; border: 0; font: 400 20px/1.3 inherit; resize: none; }
.compose::placeholder { color: var(--text-tertiary); }
```

**Card (Tweet)**
```css
.tweet { padding: 12px 16px; border-bottom: 1px solid var(--border-default); display: flex; gap: 12px; cursor: pointer; }
.tweet:hover { background: var(--bg-subtle); }
.tweet .avatar { width: 40px; height: 40px; border-radius: 9999px; flex: none; }
.tweet .head { font: 700 15px/1.3 inherit; color: var(--text-primary); }
.tweet .head .handle { font-weight: 400; color: var(--text-secondary); margin-left: 4px; }
.tweet .body { font: 400 15px/1.3 inherit; color: var(--text-primary); margin-top: 2px; }
.tweet .actions { display: flex; gap: 32px; margin-top: 10px; color: var(--text-secondary); font: 400 13px/1 inherit; }
.tweet .media { margin-top: 10px; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.badge-verified { display: inline-block; width: 18px; height: 18px; background: #1D9BF0;
  -webkit-mask: url("data:image/svg+xml;utf8,<svg ...>") center/contain no-repeat; mask: url("...") center/contain no-repeat; }
.badge-premium  { background: #FFD700; color: #000; border-radius: 4px; padding: 1px 5px; font: 800 11px/1.3 inherit; }
```

**Navigation (좌측 레일)**
```css
.nav { display: flex; flex-direction: column; gap: 4px; padding: 8px; }
.nav .item { display: flex; align-items: center; gap: 16px; padding: 12px; border-radius: 9999px;
             font: 400 20px/1 inherit; color: var(--text-primary); cursor: pointer; }
.nav .item:hover { background: var(--bg-subtle); }
.nav .item.active { font-weight: 800; }
.nav .post { background: var(--text-primary); color: var(--text-on-primary);
             padding: 14px; border-radius: 9999px; font: 700 17px/1 inherit; text-align: center; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 하늘색 새(트위터) 로고/팔레트 부활 금지 — 검정 모노톤 정체성 유지
2. 카드 모서리 12px 이상 금지 — 카드는 0~8px, 풀필은 액션 버튼에만
3. 본문 텍스트에 그라데이션 또는 컬러 강조 금지 — 색은 액션(like/RT/bookmark)에만
4. 광범위한 그림자 사용 금지 — 1px 보더로 구분
5. 다크/라이트 외 컬러 테마 추가 금지 — 검정/흰색 양 극단 고수

### ⑫ 시그니처 적용 예시 (X 다크 타임라인)

```html
<style>
  :root { font-family: 'TwitterChirp', system-ui, -apple-system, sans-serif; letter-spacing: -0.005em; }
  body { margin: 0; background: #000; color: #E7E9EA; }
  .app { max-width: 600px; margin: 0 auto; min-height: 100vh; border-left: 1px solid #2F3336; border-right: 1px solid #2F3336; }
  .topbar { padding: 14px 16px; backdrop-filter: blur(12px); background: rgba(0,0,0,0.7); border-bottom: 1px solid #2F3336; font: 800 20px/1 inherit; position: sticky; top: 0; }
  .compose { padding: 12px 16px; display: flex; gap: 12px; border-bottom: 1px solid #2F3336; }
  .avatar { width: 40px; height: 40px; border-radius: 9999px; flex: none; background: linear-gradient(135deg,#1D9BF0,#0F4B7A); }
  .compose .input { flex: 1; background: transparent; border: 0; color: #E7E9EA; font: 400 20px/1.3 inherit; outline: 0; }
  .compose .btn { background: #fff; color: #000; border: 0; border-radius: 9999px; padding: 8px 18px; font: 800 14px/1 inherit; align-self: flex-start; cursor: pointer; }
  .tweet { padding: 12px 16px; border-bottom: 1px solid #2F3336; display: flex; gap: 12px; cursor: pointer; }
  .tweet:hover { background: #0A0A0A; }
  .tweet .body { flex: 1; min-width: 0; }
  .tweet .head { font: 700 15px/1.3 inherit; color: #E7E9EA; }
  .tweet .head .handle, .tweet .head .time { font-weight: 400; color: #71767B; }
  .tweet .head .check { display: inline-block; width: 16px; height: 16px; vertical-align: -3px; margin-left: 2px; }
  .tweet .text { font: 400 15px/1.35 inherit; color: #E7E9EA; margin-top: 2px; }
  .tweet .actions { display: flex; justify-content: space-between; max-width: 425px; margin-top: 12px; color: #71767B; font: 400 13px/1 inherit; }
  .tweet .actions .act { display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
  .tweet .actions .act:hover .like { color: #F91880; } .tweet .actions .act:hover .rt { color: #00BA7C; }
</style>

<div class="app">
  <header class="topbar">홈</header>
  <section class="compose">
    <div class="avatar"></div>
    <textarea class="input" placeholder="무슨 일이 일어나고 있나요?" rows="2">크림이 아니라 검정. X 디자인의 단호함은 색을 빼는 데서 온다.</textarea>
    <button class="btn">게시</button>
  </section>
  <article class="tweet">
    <div class="avatar"></div>
    <div class="body">
      <div class="head">디자인노트 <span class="handle">@designnote · 4분</span></div>
      <div class="text">X는 풀필 액션 버튼 하나만으로 브랜드를 압축한다. 검정 캔버스 위 흰 알약, 그 외엔 거의 아무것도 없다.</div>
      <div class="actions">
        <span class="act">💬 24</span>
        <span class="act"><span class="rt">🔁</span> 87</span>
        <span class="act"><span class="like">♡</span> 1,204</span>
        <span class="act">📊 18K</span>
        <span class="act">⤴</span>
      </div>
    </div>
  </article>
  <article class="tweet">
    <div class="avatar" style="background: linear-gradient(135deg,#F91880,#7A0F4B);"></div>
    <div class="body">
      <div class="head">UX헌터 <span class="handle">@uxhunter · 1시간</span></div>
      <div class="text">Chirp 글꼴의 -0.01em 자간이 X 정체성의 절반이다. 사람들은 색을 기억하지만, 실제로 식별하는 건 글자 모양이다.</div>
      <div class="actions">
        <span class="act">💬 12</span><span class="act">🔁 41</span><span class="act">♡ 532</span><span class="act">📊 7.4K</span><span class="act">⤴</span>
      </div>
    </div>
  </article>
</div>
```
