---
brand: YouTube Music
brand_ko: 유튜브 뮤직
slug: youtube-music
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - consumer

color_tone: warm
primary_color_hex: "#FF0033"
primary_color_name: "YouTube Music Red"
mood:
  - 비디오우선
  - 가사몰입
  - 다크

font_category: sans-serif
font_primary: YouTube Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2018
last_major_revision: 2024
signature_keyword: "검정 캔버스 + YT 빨강 + 곡 위로 흐르는 가사 풀스크린의 비디오·뮤직 혼합 톤"

hero_html: |
  <div style="font-family:'YouTube Sans','Roboto','Pretendard',sans-serif;background:#030303;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;background:#0F0F0F;">
      <span style="display:inline-block;width:22px;height:22px;border-radius:50%;background:#FF0033;position:relative;">
        <span style="position:absolute;inset:0;display:grid;place-items:center;font-size:9px;color:#fff;font-weight:900;">▶</span>
      </span>
      <strong style="font-size:12px;font-weight:700;letter-spacing:-0.01em;">Music</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;align-items:center;justify-content:center;background:linear-gradient(180deg,#3A0814 0%,#030303 100%);">
      <div style="width:120px;height:120px;border-radius:8px;background:linear-gradient(135deg,#FF0033 0%,#7A0820 100%);box-shadow:0 16px 36px rgba(255,0,51,0.40);"></div>
      <div style="font-size:11px;color:#FF6B7A;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">LYRICS</div>
      <div style="font-size:13px;font-weight:700;text-align:center;line-height:1.3;">밤은 길고 우리는<br/>아직 깨어있어</div>
    </div>
    <div style="background:#0F0F0F;border-top:1px solid #272727;padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <div style="width:36px;height:36px;border-radius:4px;background:linear-gradient(135deg,#FF0033,#7A0820);"></div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:11px;font-weight:600;">Night Walk</div>
        <div style="font-size:10px;color:#AAA;">악동뮤지션</div>
      </div>
      <span style="font-size:16px;color:#fff;">▶</span>
    </div>
  </div>

sources:
  - https://music.youtube.com/
  - https://www.youtube.com/howyoutubeworks/
---

### ① 브랜드 DNA
- **브랜드명**: YouTube Music
- **한 줄 정체성**: 뮤직비디오 + 오디오 트랙이 하나로 흐르는 YouTube 기반 음악 스트리밍
- **공식 디자인 철학**: YouTube Material You 톤 — 다크 우선·콘텐츠 풀블리드
- **시그니처 요소 1개**: 검정 캔버스 + YT Red(#FF0033) + 풀스크린 가사(노트 아이콘 + 큰 볼드 텍스트)로 곡 위로 흐르는 라이브 자막. Apple Music이 SF Pro 무드라면, YT Music은 비디오·뮤직 하이브리드

### ② 톤 & 무드
- **핵심 키워드 3개**: 비디오우선, 가사몰입, 다크
- **무드 설명**: 거의 검정. 곡 재생 시 비디오와 오디오를 토글할 수 있고, 가사 탭은 큰 타이포로 곡과 함께 스크롤된다. 빨강은 재생·구독 신호에만.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~12px)
- **평면성**: Layered — 모달·미니플레이어에 미세 그림자

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - YouTube Music Red */
  --color-primary-50:  #FFE6EB;
  --color-primary-100: #FFB8C5;
  --color-primary-200: #FF8294;
  --color-primary-300: #FF4D67;
  --color-primary-400: #FF2548;
  --color-primary-500: #FF0033;   /* YT Music Red */
  --color-primary-600: #CC0029;
  --color-primary-700: #99001F;
  --color-primary-800: #660015;
  --color-primary-900: #330009;

  /* Secondary - Lyric warm gradient hint */
  --color-secondary-500: #FF6B7A;

  /* Neutral - YT dark scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9F9F9;
  --color-neutral-100:  #F2F2F2;
  --color-neutral-200:  #AAAAAA;
  --color-neutral-300:  #717171;
  --color-neutral-500:  #4F4F4F;
  --color-neutral-700:  #272727;       /* card */
  --color-neutral-800:  #1F1F1F;       /* surface */
  --color-neutral-900:  #0F0F0F;       /* sidebar */
  --color-neutral-1000: #030303;       /* canvas */

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1E8E3E;
  --color-warning-bg: #FEF7E0;
  --color-warning-fg: #F9AB00;
  --color-error-bg:   #FCE8E6;
  --color-error-fg:   #D93025;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #1A73E8;

  /* Surface */
  --bg-base:     #030303;
  --bg-subtle:   #0F0F0F;
  --bg-elevated: #1F1F1F;
  --bg-overlay:  rgba(0,0,0,0.80);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #AAAAAA;
  --text-tertiary:   #717171;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #4F4F4F;

  /* Border */
  --border-default: #272727;
  --border-subtle:  #1F1F1F;
  --border-strong:  #3F3F3F;
  --border-focus:   #FF0033;
}

[data-theme="light"] {
  --bg-base: #FFFFFF;
  --bg-subtle: #F9F9F9;
  --bg-elevated: #FFFFFF;
  --text-primary: #0F0F0F;
  --text-secondary: #606060;
  --text-tertiary: #909090;
  --border-default: #E5E5E5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: YouTube Sans / Roboto 폴백
  - 한글: Noto Sans KR / Pretendard
- **위계**:
  - Display: 56px / 700 / 1.1 / -0.02em (가사 풀스크린)
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 22px / 700 / 1.25 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.04em uppercase
  - Lyric: 28~40px / 700 / 1.35 / -0.01em (시그니처)

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 1428px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.45);
--shadow-lg: 0 16px 36px rgba(255,0,51,0.30);  /* 앨범 글로우 */
--shadow-xl: 0 24px 48px rgba(0,0,0,0.60);
```

### ⑧ Iconography
- **스타일**: Material Symbols (Outline + Filled 토글)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Material Symbols / Phosphor 폴백

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 'YouTube Sans', Roboto, sans-serif; border-radius: 9999px; padding: 10px 22px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: #fff; color: #000; }      /* 흰 버튼이 메인 */
.btn-primary:hover { background: #E5E5E5; }
.btn-secondary { background: transparent; color: #fff; border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: rgba(255,255,255,0.10); }
.btn-ghost { background: transparent; color: #fff; }
.btn-danger { background: var(--color-primary-500); color: #fff; }
.btn-subscribe { background: var(--color-primary-500); color: #fff; font-weight: 700; }   /* 시그니처 빨강 */
.btn-disabled { background: var(--color-neutral-700); color: var(--text-disabled); }
.btn-play { width: 56px; height: 56px; border-radius: 50%; background: #fff; color: #000; display: grid; place-items: center; font-size: 22px; }
```

**Input**
```css
.input { background: rgba(255,255,255,0.08); border: 1px solid transparent; border-radius: 9999px; padding: 10px 18px 10px 40px; color: #fff; font: 400 14px/1.2 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); background: rgba(255,255,255,0.12); }
```

**Card (Track)**
```css
.track { display: flex; align-items: center; gap: 14px; padding: 8px; border-radius: 8px; cursor: pointer; transition: background 150ms ease; }
.track:hover { background: rgba(255,255,255,0.08); }
.track .cv { width: 48px; height: 48px; border-radius: 4px; background: linear-gradient(135deg,#FF0033,#7A0820); }
.track h3 { margin: 0; font: 600 14px/1.3 inherit; color: #fff; }
.track .by { font: 400 12px/1.3 inherit; color: var(--text-secondary); margin-top: 2px; }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 3px 10px; border-radius: 9999px; font: 600 11px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: rgba(255,0,51,0.16); color: var(--color-primary-300); }
.tag-outline { border: 1px solid var(--border-strong); color: #fff; }
.tag-music   { background: #fff; color: #000; }   /* MUSIC VIDEO 토글 */
```

**Navigation (Sidebar)**
```css
.sidebar { width: 240px; background: var(--bg-subtle); padding: 12px; }
.sidebar .item { display: flex; align-items: center; gap: 14px; padding: 10px 14px; border-radius: 9999px; font: 500 14px/1.3 inherit; color: var(--text-primary); cursor: pointer; }
.sidebar .item:hover { background: rgba(255,255,255,0.08); }
.sidebar .item.active { background: rgba(255,0,51,0.16); color: var(--color-primary-300); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);     /* Material Standard */
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-lyric: cubic-bezier(0.33, 1, 0.68, 1);    /* 가사 슬라이드 */
```

### ⑪ Anti-patterns
1. 가사 디스플레이를 작은 본문 폰트로 렌더링 금지 — 큰 볼드 라이브 자막이 시그니처
2. 메인 액션을 빨강 버튼으로 사용 금지 — 흰 버튼이 메인, 빨강은 구독·재생 신호
3. 라이트 모드를 기본 캔버스로 사용 금지
4. 카드 모서리 sharp(0px) 사용 금지 — 8~12px Round
5. 영상 썸네일을 무시한 오디오만 UI 금지 — 영상/오디오 토글이 정체성

### ⑫ 시그니처 적용 예시 (Lyrics 풀스크린)
```html
<style>
  body { margin: 0; font-family: 'YouTube Sans', Roboto, 'Pretendard', sans-serif; background: #030303; color: #fff; min-height: 100vh; }
  .stage { max-width: 480px; margin: 0 auto; padding: 20px; min-height: 100vh; display: flex; flex-direction: column; gap: 20px; background: radial-gradient(120% 60% at 50% 0%, #3A0814 0%, #030303 60%); }
  .topbar { display: flex; align-items: center; gap: 12px; font: 600 13px/1 inherit; color: rgba(255,255,255,0.7); }
  .topbar .down { font-size: 20px; }
  .topbar .center { flex: 1; text-align: center; }
  .tabs { display: flex; gap: 8px; padding: 4px; background: rgba(255,255,255,0.08); border-radius: 9999px; align-self: center; }
  .tabs .t { padding: 8px 18px; font: 600 13px/1 inherit; border-radius: 9999px; cursor: pointer; color: rgba(255,255,255,0.7); }
  .tabs .t.active { background: #fff; color: #000; }
  .header { display: flex; align-items: center; gap: 12px; margin-top: 8px; }
  .header .cover { width: 56px; height: 56px; border-radius: 6px; background: linear-gradient(135deg,#FF0033,#7A0820); }
  .header h1 { margin: 0; font: 700 18px/1.2 inherit; letter-spacing: -0.01em; }
  .header .by { font: 500 13px/1.2 inherit; color: rgba(255,255,255,0.7); margin-top: 4px; }
  .lyrics { display: flex; flex-direction: column; gap: 22px; padding: 24px 0; flex: 1; overflow-y: auto; }
  .lyrics .line { font: 700 28px/1.35 inherit; letter-spacing: -0.01em; color: rgba(255,255,255,0.32); transition: color 250ms ease, opacity 250ms ease; }
  .lyrics .line.now { color: #fff; }
  .lyrics .line.past { opacity: 0.45; }
  .now-playing { background: rgba(15,15,15,0.85); backdrop-filter: blur(20px); border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; gap: 12px; }
  .now-playing .cv { width: 40px; height: 40px; border-radius: 4px; background: linear-gradient(135deg,#FF0033,#7A0820); }
  .now-playing .meta { flex: 1; min-width: 0; }
  .now-playing strong { font: 600 13px/1.2 inherit; }
  .now-playing .by2 { font: 400 11px/1.2 inherit; color: #AAA; }
  .now-playing .play { width: 36px; height: 36px; border-radius: 50%; background: #fff; color: #000; display: grid; place-items: center; font-size: 14px; }
</style>

<div class="stage">
  <div class="topbar">
    <span class="down">⌄</span>
    <span class="center">지금 재생 중</span>
    <span class="down">⋯</span>
  </div>
  <div class="tabs">
    <div class="t">영상</div>
    <div class="t active">가사</div>
    <div class="t">관련</div>
  </div>
  <div class="header">
    <div class="cover"></div>
    <div>
      <h1>Night Walk</h1>
      <div class="by">악동뮤지션 · Night Sessions</div>
    </div>
  </div>
  <div class="lyrics">
    <div class="line past">우리가 처음 만난 골목엔</div>
    <div class="line past">가로등 두 개가 깜빡이고 있었지</div>
    <div class="line now">밤은 길고 우리는 아직 깨어있어</div>
    <div class="line">발끝이 향하는 곳을 따라가</div>
    <div class="line">차가운 공기에 손을 호호 불며</div>
  </div>
  <div class="now-playing">
    <div class="cv"></div>
    <div class="meta"><strong>Night Walk</strong><div class="by2">악동뮤지션</div></div>
    <div class="play">⏸</div>
  </div>
</div>
```
