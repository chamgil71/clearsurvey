---
brand: Loom
brand_ko: 룸
slug: loom
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - productivity
  - media

color_tone: cool
primary_color_hex: "#625DF5"
primary_color_name: "Loom Purple"
mood:
  - 부드러움
  - 친근함
  - 비디오 메시지

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2016
last_major_revision: 2023
signature_keyword: "Purple→Pink 그라데이션과 둥근 카드의 비디오 메시징 톤"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#FFFFFF;color:#1A1A2E;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #ECECEC;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#625DF5,#F65177);"></span>
      <strong style="font-size:14px;">Loom</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="aspect-ratio:16/9;background:linear-gradient(135deg,#625DF5,#F65177);border-radius:14px;position:relative;display:grid;place-items:center;color:#fff;font-weight:700;box-shadow:0 8px 24px rgba(98,93,245,0.30);">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.95);display:grid;place-items:center;">
          <span style="border-style:solid;border-width:8px 0 8px 14px;border-color:transparent transparent transparent #625DF5;margin-left:3px;"></span>
        </div>
        <span style="position:absolute;top:8px;left:10px;background:rgba(0,0,0,0.5);color:#fff;padding:2px 8px;border-radius:9999px;font-size:9px;font-weight:600;">● REC 2:14</span>
        <span style="position:absolute;bottom:8px;right:10px;width:36px;height:36px;border-radius:50%;background:#F65177;border:2px solid #fff;"></span>
      </div>
      <div>
        <div style="font-size:13px;font-weight:700;">Q3 디자인 리뷰 영상</div>
        <div style="font-size:11px;color:#666;margin-top:2px;">Mina · 2분 전 · 12 views</div>
      </div>
      <button style="background:#625DF5;color:#fff;border:0;border-radius:9999px;padding:8px 14px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;">+ 새 녹화</button>
    </div>
  </div>

sources:
  - https://www.loom.com/
  - https://www.loom.com/pricing
  - https://help.loom.com/
---

### ① 브랜드 DNA
- **브랜드명**: Loom (Atlassian)
- **한 줄 정체성**: 빠르게 녹화해서 보내는, 비동기 비디오 메시징 도구
- **공식 디자인 철학**: "Express yourself with video — work smarter, not harder"
- **시그니처 요소 1개**: Purple(#625DF5)→Pink(#F65177) 그라데이션 + 동영상 카드의 둥근 라운드(14px+)

### ② 톤 & 무드
- **핵심 키워드 3개**: 부드러움, 친근함, 비디오 메시지
- **무드 설명**: 흰 캔버스에 보라/핑크 그라데이션이 따뜻하게 흐른다. 영상 카드와 캠 버블이 둥글고 크게 강조된다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~24px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Loom Purple */
  --color-primary-50:  #EEEDFE;
  --color-primary-100: #DCDBFE;
  --color-primary-200: #B9B7FC;
  --color-primary-300: #9692FA;
  --color-primary-400: #786EF7;
  --color-primary-500: #625DF5;  /* Loom Purple */
  --color-primary-600: #4F4ADC;
  --color-primary-700: #3F3BB3;
  --color-primary-800: #312E89;
  --color-primary-900: #20205A;

  /* Secondary - Loom Pink (그라데이션 끝) */
  --color-secondary-500: #F65177;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F5;
  --color-neutral-200:  #ECECEC;
  --color-neutral-300:  #D4D4D8;
  --color-neutral-500:  #9C9C9C;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #424242;
  --color-neutral-900:  #1A1A2E;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #D9890C;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #F65177;
  --color-info-bg:    #EEEDFE;
  --color-info-fg:    #625DF5;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,46,0.50);

  /* Text */
  --text-primary:    #1A1A2E;
  --text-secondary:  #666666;
  --text-tertiary:   #9C9C9C;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #D4D4D8;

  /* Border */
  --border-default: #ECECEC;
  --border-subtle:  #F4F4F5;
  --border-strong:  #D4D4D8;
  --border-focus:   #625DF5;
}

[data-theme="dark"] {
  --bg-base: #1A1A2E;
  --bg-subtle: #232440;
  --bg-elevated: #2D2F4D;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — Loom 마케팅/앱 모두
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 700 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
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
--radius-md: 8px;
--radius-lg: 14px;    /* 비디오 카드 */
--radius-xl: 24px;
--radius-full: 9999px;   /* 캠 버블 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(98,93,245,0.20);
--shadow-xl: 0 20px 48px rgba(98,93,245,0.28);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (play, record 등 미디어 컨트롤은 filled)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;       /* Loom 시그니처 pill */
  padding: 0 18px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease, transform 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-cta { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; box-shadow: var(--shadow-lg); }
.btn-cta:hover { transform: translateY(-2px); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: 15px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(98,93,245,0.20); }
```

**Card** (비디오 thumbnail 카드)
```css
.video-card { background: var(--bg-base); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: transform 200ms ease, box-shadow 200ms ease; }
.video-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.video-card .thumb { aspect-ratio: 16/9; background: linear-gradient(135deg, #625DF5, #F65177); position: relative; }
.video-card .meta { padding: 12px; }
.video-card h3 { font-size: 14px; font-weight: 600; margin: 0 0 4px; line-height: 1.3; }
.video-card p { font-size: 11px; color: var(--text-secondary); margin: 0; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-rec     { background: rgba(0,0,0,0.6); color: #fff; }
.tag-rec::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: #F65177; }
```

**Navigation (Top Nav)**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 24px; border-bottom: 1px solid var(--border-subtle); background: var(--bg-base); }
.topnav .logo { width: 24px; height: 24px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); }
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
1. 비디오 카드 라운드를 8px 미만으로 줄이지 말 것 — 둥근 카드가 시그니처
2. 그라데이션 배경 위 본문 텍스트 직접 배치 금지 — 흰 카드 사용
3. 캠 버블을 사각으로 변경 금지 — 원형 시그니처
4. play 버튼을 outline 스타일로 변경 금지 — filled가 표준
5. brand 색을 reaction emoji 색에 분산 사용 금지

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .topnav { padding: 14px 24px; display: flex; align-items: center; gap: 24px; border-bottom: 1px solid var(--border-subtle); }
  .topnav .logo { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #625DF5, #F65177); }
  .container { max-width: 1100px; margin: 32px auto; padding: 0 24px; }
  .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
  .head h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.01em; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .video-card { background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); cursor: pointer; transition: transform 200ms cubic-bezier(0.22,1,0.36,1), box-shadow 200ms ease; }
  .video-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
  .video-card .thumb { aspect-ratio: 16/9; position: relative; display: grid; place-items: center; color: #fff; }
  .video-card .thumb.t1 { background: linear-gradient(135deg, #625DF5, #F65177); }
  .video-card .thumb.t2 { background: linear-gradient(135deg, #F65177, #FFB951); }
  .video-card .thumb.t3 { background: linear-gradient(135deg, #6CB7FF, #625DF5); }
  .video-card .play { width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,0.95); display: grid; place-items: center; }
  .video-card .play::before { content:""; border-style: solid; border-width: 10px 0 10px 16px; border-color: transparent transparent transparent #625DF5; margin-left: 4px; }
  .video-card .rec { position: absolute; top: 10px; left: 12px; }
  .video-card .cam { position: absolute; bottom: 10px; right: 12px; width: 44px; height: 44px; border-radius: 50%; border: 3px solid #fff; }
  .video-card .meta { padding: 14px 16px; }
  .video-card h3 { font-size: 15px; font-weight: 600; margin: 0 0 4px; line-height: 1.3; }
  .video-card p { font-size: 12px; color: var(--text-secondary); margin: 0; }
  .empty-card { background: var(--bg-subtle); border-radius: 14px; aspect-ratio: 16/9; display: grid; place-items: center; color: var(--text-secondary); font-size: 13px; cursor: pointer; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Loom</strong>
  <span style="margin-left:auto"><button class="btn btn-cta">+ 새 녹화</button></span>
</header>

<main class="container">
  <div class="head">
    <h1>Library</h1>
    <button class="btn btn-secondary">필터</button>
  </div>
  <div class="grid">
    <div class="video-card">
      <div class="thumb t1">
        <span class="rec tag tag-rec">REC 2:14</span>
        <span class="play"></span>
        <span class="cam" style="background:linear-gradient(135deg,#FFB951,#F65177)"></span>
      </div>
      <div class="meta"><h3>Q3 디자인 리뷰</h3><p>Mina · 2분 전 · 12 views</p></div>
    </div>
    <div class="video-card">
      <div class="thumb t2">
        <span class="rec tag tag-rec">5:42</span>
        <span class="play"></span>
        <span class="cam" style="background:linear-gradient(135deg,#625DF5,#6CB7FF)"></span>
      </div>
      <div class="meta"><h3>Onboarding 흐름 데모</h3><p>Joon · 1시간 전 · 28 views</p></div>
    </div>
    <div class="video-card">
      <div class="thumb t3">
        <span class="rec tag tag-rec">1:08</span>
        <span class="play"></span>
        <span class="cam" style="background:linear-gradient(135deg,#1AAD5C,#6CB7FF)"></span>
      </div>
      <div class="meta"><h3>버그 재현</h3><p>Dave · 어제 · 8 views</p></div>
    </div>
  </div>
</main>
```
