---
brand: TikTok
brand_ko: 틱톡
slug: tiktok
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: asia
industry:
  - social
  - media
  - consumer

color_tone: cool
primary_color_hex: "#FE2C55"
primary_color_name: "TikTok Pink"
mood:
  - 활기
  - 네온
  - 즉시

font_category: sans-serif
font_primary: TikTok Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2016
last_major_revision: 2024
signature_keyword: "검정 캔버스 + 시안·핑크 글리치 + 풀스크린 세로 영상"

hero_html: |
  <div style="font-family:'TikTok Sans','SF Pro Display',-apple-system,sans-serif;background:#000;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.01em;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:linear-gradient(135deg,#1E1B4B 0%,#5B21B6 30%,#000 60%,#FE2C55 100%);opacity:0.6;"></div>
    <div style="position:relative;padding:14px;display:flex;align-items:center;justify-content:center;gap:18px;font:700 14px/1 inherit;">
      <span style="color:rgba(255,255,255,0.6);">팔로잉</span>
      <span style="color:#fff;border-bottom:2px solid #fff;padding-bottom:2px;">For You</span>
    </div>
    <div style="position:relative;padding:14px 14px 0;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;">
      <div style="font:800 14px/1.3 inherit;">@minji.dance</div>
      <div style="font:500 13px/1.5 inherit;color:#fff;">새 챌린지 도전! 손가락 하트 + 윙크 콤보 💖 #신곡댄스 #챌린지 #fyp</div>
      <div style="font:600 12px/1.3 inherit;color:rgba(255,255,255,0.85);display:flex;align-items:center;gap:6px;">♪ 원음 - minji.dance</div>
    </div>
    <div style="position:relative;display:grid;grid-template-columns:1fr auto;align-items:flex-end;padding:14px;">
      <div></div>
      <div style="display:flex;flex-direction:column;gap:14px;align-items:center;">
        <div style="position:relative;width:42px;height:42px;background:linear-gradient(135deg,#FE2C55,#25F4EE);border-radius:9999px;padding:2px;"><div style="width:100%;height:100%;background:#fff;border-radius:9999px;"></div><span style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);background:#FE2C55;color:#fff;border-radius:9999px;width:18px;height:18px;display:grid;place-items:center;font:900 12px/1 inherit;">+</span></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:2px;color:#fff;font:700 11px/1 inherit;"><span style="font-size:24px;">♥</span><span>124K</span></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:2px;color:#fff;font:700 11px/1 inherit;"><span style="font-size:24px;">💬</span><span>3,402</span></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:2px;color:#fff;font:700 11px/1 inherit;"><span style="font-size:24px;">⇄</span><span>2,108</span></div>
      </div>
    </div>
  </div>

sources:
  - https://www.tiktok.com/
  - https://newsroom.tiktok.com/en-us/brand-resources
---

### ① 브랜드 DNA
- **브랜드명**: TikTok (ByteDance)
- **한 줄 정체성**: 세로 짧은 영상 SNS 글로벌 1위 — Z세대 표준 콘텐츠 플랫폼
- **공식 디자인 철학**: "Make Your Day" — 단순한 풀스크린 인터랙션 + 알고리즘 추천
- **시그니처 요소 1개**: 검정 캔버스 + RGB 글리치(시안 #25F4EE / 핑크 #FE2C55) + 풀스크린 세로 9:16. 음표 'd' 로고가 시그니처

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기, 네온, 즉시
- **무드 설명**: 영상 = 캔버스. UI는 영상 위에 흰 텍스트 + 사이드 아이콘. 색은 검정 베이스 + 시안/핑크 RGB 글리치 액센트. 모든 텍스트는 white drop shadow로 영상 위 가독성 확보.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~16px), 아바타는 풀필
- **평면성**: Flat — 영상이 깊이를 만듦

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - TikTok Pink */
  --color-primary-50:  #FFE3EA;
  --color-primary-100: #FFB3C2;
  --color-primary-200: #FF7892;
  --color-primary-300: #FF4D6F;
  --color-primary-400: #FE3A60;
  --color-primary-500: #FE2C55;   /* TikTok Pink */
  --color-primary-600: #E5183E;
  --color-primary-700: #B81230;
  --color-primary-800: #8A0D22;
  --color-primary-900: #5C0815;

  /* Secondary - TikTok Cyan (RGB glitch pair) */
  --color-cyan-500: #25F4EE;
  --color-cyan-300: #75FFFA;

  /* Neutral (Dark-first) */
  --color-neutral-0:    #000000;
  --color-neutral-50:   #0A0A0A;
  --color-neutral-100:  #161823;       /* TikTok 공식 배경 */
  --color-neutral-200:  #2F3038;
  --color-neutral-300:  #4A4A52;
  --color-neutral-500:  #8A8B91;
  --color-neutral-700:  #B0B0B5;
  --color-neutral-800:  #D9D9D9;
  --color-neutral-900:  #F5F5F5;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-fg: #4ADE80;
  --color-warning-fg: #FACC15;
  --color-error-fg:   #FE2C55;
  --color-info-fg:    #25F4EE;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #161823;
  --bg-elevated: #1F2029;
  --bg-overlay:  rgba(0,0,0,0.78);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #F5F5F5;
  --text-tertiary:   rgba(255,255,255,0.65);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(255,255,255,0.40);

  /* Border */
  --border-default: rgba(255,255,255,0.15);
  --border-subtle:  rgba(255,255,255,0.08);
  --border-strong:  rgba(255,255,255,0.30);
  --border-focus:   #FE2C55;

  /* Glitch gradient */
  --gradient-glitch: linear-gradient(135deg, var(--color-cyan-500) 0%, var(--color-primary-500) 100%);
  --shadow-text: 0 1px 2px rgba(0,0,0,0.6);    /* 영상 위 흰 텍스트 가독성 */
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **TikTok Sans** (자체) → SF Pro Display / Helvetica 폴백
  - 한글: Pretendard / Apple SD Gothic Neo 폴백
- **위계**:
  - Display: 36px / 800 / 1.1 / -0.02em
  - H1: 22px / 800 / 1.2 / -0.015em
  - H2: 17px / 800 / 1.3 / -0.01em
  - H3 (사용자): 14px / 800 / 1.3 / -0.005em
  - Body Large: 15px / 500 / 1.5 / 0
  - Body (caption): 13px / 500 / 1.5 / 0 with text-shadow
  - Body Small: 12px / 600 / 1.4 / 0
  - Caption: 11px / 700 / 1.4 / 0.02em
  - Counter (좋아요 수): 11px / 700 / 1 / 0 with text-shadow

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
- **Container**: 풀스크린 (max-width 480px on mobile, 9:16 비율)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-text-light: 0 1px 2px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.3);
--shadow-text-strong: 0 1px 3px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.5);
--shadow-glitch: 2px 0 0 rgba(254,44,85,0.7), -2px 0 0 rgba(37,244,238,0.7);
```

### ⑧ Iconography
- **스타일**: Filled (Phosphor Fill / Material Symbols Filled)
- **Stroke 굵기**: N/A
- **모서리 처리**: Round
- **추천 라이브러리**: TikTok Icons / Phosphor Fill

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 14px/1 'TikTok Sans', sans-serif; letter-spacing: -0.01em;
       border-radius: 6px; padding: 11px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-glitch { background: var(--gradient-glitch); color: #fff; position: relative; }
.btn-glitch::before { content: ''; position: absolute; inset: 0; background: var(--color-primary-500); transform: translate(2px, 0); z-index: -1; opacity: 0.6; mix-blend-mode: screen; border-radius: inherit; }
.btn-glitch::after { content: ''; position: absolute; inset: 0; background: var(--color-cyan-500); transform: translate(-2px, 0); z-index: -1; opacity: 0.6; mix-blend-mode: screen; border-radius: inherit; }
.btn-secondary { background: rgba(255,255,255,0.18); color: #fff; backdrop-filter: blur(8px); }
.btn-follow { background: var(--color-primary-500); color: #fff; padding: 7px 14px; font: 800 13px/1 inherit; border-radius: 4px; }
.btn-following { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.30); padding: 7px 14px; font: 800 13px/1 inherit; border-radius: 4px; }
```

**Input**
```css
.search-input { background: var(--bg-elevated); border: 0; color: #fff; border-radius: 9999px; padding: 10px 16px; font: 500 14px/1.4 inherit; }
.search-input::placeholder { color: var(--text-tertiary); }
```

**Card (Video)**
```css
.video { position: relative; aspect-ratio: 9/16; background: #000; overflow: hidden; border-radius: var(--radius-md); }
.video .overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%); pointer-events: none; }
.video .info { position: absolute; left: 12px; right: 70px; bottom: 80px; color: #fff; }
.video .info .user { font: 800 14px/1.3 inherit; text-shadow: var(--shadow-text-light); }
.video .info .caption { font: 500 13px/1.5 inherit; margin-top: 6px; text-shadow: var(--shadow-text-light); }
.video .info .sound { font: 600 12px/1.3 inherit; margin-top: 8px; color: rgba(255,255,255,0.95); display: flex; align-items: center; gap: 6px; }
.video .sidebar { position: absolute; right: 8px; bottom: 80px; display: flex; flex-direction: column; gap: 14px; align-items: center; }
.video .sidebar .avatar-plus { position: relative; }
.video .sidebar .avatar-plus .avatar { width: 44px; height: 44px; border-radius: 9999px; background: var(--gradient-glitch); padding: 2px; }
.video .sidebar .avatar-plus .plus { position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: var(--color-primary-500); color: #fff; border-radius: 9999px; width: 20px; height: 20px; display: grid; place-items: center; font: 900 14px/1 inherit; }
.video .sidebar .action { display: flex; flex-direction: column; align-items: center; gap: 2px; color: #fff; }
.video .sidebar .action .ic { font-size: 30px; text-shadow: var(--shadow-text-light); }
.video .sidebar .action .ic.like.active { color: var(--color-primary-500); }
.video .sidebar .action .n { font: 700 11px/1 inherit; text-shadow: var(--shadow-text-light); }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 4px; font: 800 11px/1.3 inherit; background: rgba(255,255,255,0.15); color: #fff; backdrop-filter: blur(6px); }
.tag-live { background: var(--color-primary-500); color: #fff; }
.tag-trending { background: var(--gradient-glitch); color: #fff; }
```

**Navigation (TabBar)**
```css
.topbar { position: absolute; top: 0; left: 0; right: 0; display: flex; justify-content: center; gap: 24px; padding: 14px 0; font: 700 14px/1 inherit; color: rgba(255,255,255,0.6); z-index: 5; }
.topbar .item { color: rgba(255,255,255,0.6); padding: 2px 4px; }
.topbar .item.active { color: #fff; border-bottom: 2px solid #fff; padding-bottom: 4px; }
.tabbar { background: #000; display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0 10px; }
.tabbar .item { padding: 4px; text-align: center; color: rgba(255,255,255,0.65); font: 700 11px/1.3 inherit; display: flex; flex-direction: column; align-items: center; gap: 2px; }
.tabbar .item .ic { font-size: 20px; }
.tabbar .item.active { color: #fff; }
.tabbar .create { background: linear-gradient(135deg, var(--color-cyan-500), var(--color-primary-500)); color: #000; padding: 6px 14px; border-radius: 8px; font: 900 16px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-glitch: cubic-bezier(0.4, 0, 0.6, 1);
```

### ⑪ Anti-patterns
1. 영상 위 본문 텍스트에 text-shadow 없이 흰색 사용 금지 — 영상 명도 변동으로 가독성 깨짐
2. 카드 보더 라인 사용 금지 — 풀스크린이 시그니처
3. 시안·핑크 외 다른 강조 색 추가 금지 — RGB 글리치 두 색이 정체성
4. 라이트 모드 만들지 말 것 — TikTok은 다크 only
5. 좋아요/댓글/공유 외 사이드 액션 4개 이상 배치 금지 — UI 노이즈 방지

### ⑫ 시그니처 적용 예시 (TikTok 풀스크린 영상)

```html
<style>
  body { margin: 0; font-family: 'TikTok Sans', 'SF Pro Display', -apple-system, sans-serif; letter-spacing: -0.01em; color: #fff; background: #000; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: 1fr auto; position: relative; }
  .stage { position: relative; aspect-ratio: 9/16; background: linear-gradient(180deg, #1E1B4B 0%, #5B21B6 30%, #000 60%, #FE2C55 100%); overflow: hidden; }
  .stage::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 30% 30%, rgba(37,244,238,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(254,44,85,0.20), transparent 50%); }
  .topbar { position: absolute; top: 0; left: 0; right: 0; display: flex; justify-content: center; gap: 20px; padding: 16px 0; font: 700 15px/1 inherit; z-index: 5; }
  .topbar .item { color: rgba(255,255,255,0.65); padding: 2px 4px; cursor: pointer; }
  .topbar .item.active { color: #fff; border-bottom: 2px solid #fff; padding-bottom: 4px; }
  .info { position: absolute; left: 14px; right: 70px; bottom: 24px; }
  .info .user { font: 800 15px/1.3 inherit; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
  .info .caption { font: 500 13px/1.55 inherit; margin-top: 6px; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
  .info .caption .tag { color: #fff; font-weight: 700; }
  .info .sound { font: 600 12px/1.3 inherit; margin-top: 10px; display: flex; align-items: center; gap: 6px; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
  .info .follow { margin-top: 12px; background: #FE2C55; color: #fff; border: 0; padding: 8px 18px; border-radius: 4px; font: 800 13px/1 inherit; cursor: pointer; }
  .sidebar { position: absolute; right: 10px; bottom: 24px; display: flex; flex-direction: column; gap: 18px; align-items: center; }
  .sidebar .av-wrap { position: relative; }
  .sidebar .av-wrap .av { width: 44px; height: 44px; border-radius: 9999px; background: linear-gradient(135deg, #25F4EE, #FE2C55); padding: 2px; }
  .sidebar .av-wrap .av .inner { width: 100%; height: 100%; border-radius: 9999px; background: linear-gradient(135deg, #FE2C55, #5B21B6); }
  .sidebar .av-wrap .plus { position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #FE2C55; color: #fff; border-radius: 9999px; width: 20px; height: 20px; display: grid; place-items: center; font: 900 14px/1 inherit; }
  .sidebar .action { display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .sidebar .action .ic { font-size: 30px; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
  .sidebar .action.like .ic { color: #FE2C55; }
  .sidebar .action .n { font: 700 11px/1 inherit; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
  .sidebar .disc { width: 44px; height: 44px; border-radius: 9999px; background: radial-gradient(circle, #1F2029 30%, #000 31%, #FE2C55 70%, #25F4EE); animation: spin 4s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .tabbar { background: #000; display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0 14px; }
  .tabbar .item { padding: 4px; text-align: center; color: rgba(255,255,255,0.65); font: 700 11px/1.3 inherit; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; }
  .tabbar .item .ic { font-size: 22px; }
  .tabbar .item.active { color: #fff; }
  .tabbar .create-wrap { display: grid; place-items: center; }
  .tabbar .create { background: linear-gradient(135deg, #25F4EE, #FE2C55); color: #000; padding: 8px 16px; border-radius: 10px; font: 900 18px/1 inherit; position: relative; box-shadow: 2px 0 0 rgba(37,244,238,0.5), -2px 0 0 rgba(254,44,85,0.5); }
</style>

<div class="app">
  <section class="stage">
    <nav class="topbar">
      <span class="item">팔로잉</span>
      <span class="item active">For You</span>
      <span class="item">LIVE</span>
    </nav>
    <div class="info">
      <div class="user">@minji.dance</div>
      <div class="caption">새 챌린지 도전! 손가락 하트 + 윙크 콤보 💖 <span class="tag">#신곡댄스</span> <span class="tag">#챌린지</span> <span class="tag">#fyp</span></div>
      <div class="sound">♪ 원음 - minji.dance · 12.4M uses</div>
      <button class="follow">+ 팔로우</button>
    </div>
    <div class="sidebar">
      <div class="av-wrap">
        <div class="av"><div class="inner"></div></div>
        <span class="plus">+</span>
      </div>
      <div class="action like">
        <span class="ic">♥</span>
        <span class="n">124K</span>
      </div>
      <div class="action">
        <span class="ic">💬</span>
        <span class="n">3,402</span>
      </div>
      <div class="action">
        <span class="ic">🔖</span>
        <span class="n">8,210</span>
      </div>
      <div class="action">
        <span class="ic">↗</span>
        <span class="n">2,108</span>
      </div>
      <div class="disc"></div>
    </div>
  </section>
  <nav class="tabbar">
    <div class="item active"><span class="ic">🏠</span>홈</div>
    <div class="item"><span class="ic">👥</span>친구</div>
    <div class="create-wrap"><div class="create">+</div></div>
    <div class="item"><span class="ic">📥</span>받은편지함</div>
    <div class="item"><span class="ic">👤</span>프로필</div>
  </nav>
</div>
```
