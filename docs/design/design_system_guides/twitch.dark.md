---
brand: Twitch
brand_ko: 트위치
slug: twitch
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - social

color_tone: cool
primary_color_hex: "#9146FF"
primary_color_name: "Twitch Purple"
mood:
  - 게이밍
  - 라이브
  - 활기참

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - dark
  - light

released_year: 2011
last_major_revision: 2024
signature_keyword: "Twitch Purple과 라이브 빨간 dot, 채팅 스트림의 게임 스트리밍 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F7F8", "border": "#DEDEE3", "fg": "#0E0E10", "fg_muted": "#898995", "accent": "#9146FF" },
    "dark":  { "bg": "#0E0E10", "surface": "#18181B", "border": "#26262C", "fg": "#EFEFF1", "fg_muted": "#ADADB8", "accent": "#9146FF" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:20px;background:var(--card-accent);clip-path:polygon(0 18%,18% 0,100% 0,100% 70%,82% 88%,55% 88%,40% 100%,40% 88%,12% 88%);"></span>
      <strong style="font-size:13px;font-weight:700;color:var(--card-fg);">Twitch</strong>
    </div>
    <div style="display:grid;grid-template-columns:1fr 100px;height:100%;">
      <div style="background:#000;position:relative;display:grid;place-items:center;">
        <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.18);display:grid;place-items:center;color:#fff;font-size:14px;">▶</div>
        <span style="position:absolute;left:8px;top:8px;background:#EB0400;color:#fff;padding:2px 8px;border-radius:3px;font-size:9px;font-weight:700;display:flex;align-items:center;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#fff;"></span>LIVE</span>
        <span style="position:absolute;right:8px;top:8px;background:rgba(0,0,0,0.7);color:#fff;padding:2px 6px;border-radius:3px;font-size:9px;font-weight:600;">12.4k 시청</span>
        <div style="position:absolute;left:8px;bottom:8px;font-size:11px;font-weight:700;color:#fff;">Mina_streams · 디자인 라이브</div>
      </div>
      <div style="background:var(--card-surface);border-left:1px solid var(--card-border);padding:8px;display:flex;flex-direction:column;gap:4px;font-size:9px;">
        <div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;font-weight:600;padding:2px;">스트림 채팅</div>
        <div style="padding:2px 0;line-height:1.3;"><strong style="color:#FF7B72;">user1:</strong> <span style="color:var(--card-fg);">와 좋다</span></div>
        <div style="padding:2px 0;line-height:1.3;"><strong style="color:#39E08B;">user2:</strong> <span style="color:var(--card-fg);">색 진짜 예쁨</span></div>
        <div style="padding:2px 0;line-height:1.3;"><strong style="color:var(--card-accent);">user3:</strong> <span style="color:var(--card-fg);">Kappa</span></div>
        <div style="margin-top:auto;background:var(--card-bg);border:1px solid var(--card-border);border-radius:4px;padding:4px 6px;color:var(--card-fg-muted);">메시지 보내기</div>
      </div>
    </div>
  </div>

sources:
  - https://www.twitch.tv/
  - https://brand.twitch.tv/
  - https://dev.twitch.tv/
---

### ① 브랜드 DNA
- **브랜드명**: Twitch
- **한 줄 정체성**: 게임/IRL 라이브 스트리밍의 표준 — 실시간 채팅 중심 커뮤니티
- **공식 디자인 철학**: "Where streamers and viewers meet — playful, live, community-driven"
- **시그니처 요소 1개**: Twitch Purple(#9146FF) + 라이브 빨간 dot(#EB0400) + 채팅 스트림의 다양한 사용자 컬러

### ② 톤 & 무드
- **핵심 키워드 3개**: 게이밍, 라이브, 활기참
- **무드 설명**: 다크 캔버스 + Purple 액센트 + 라이브 빨간 dot. 채팅의 다양한 사용자 색이 활기를 더한다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 채팅 + 비디오
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Twitch Purple */
  --color-primary-50:  #1F045A;
  --color-primary-100: #3D0B8A;
  --color-primary-200: #5C16C5;
  --color-primary-300: #772CE8;
  --color-primary-400: #9146FF;
  --color-primary-500: #9146FF;  /* Twitch Purple */
  --color-primary-600: #A970FF;  /* hover — 다크 위에서 더 밝게 */
  --color-primary-700: #BF94FF;
  --color-primary-800: #DBC2FF;
  --color-primary-900: #F0E5FF;

  /* Secondary - Twitch Live Red */
  --color-secondary-500: #EB0400;

  /* Chat user color (다양한 randomized — 다크 위 가독성 보정) */
  --user-red:   #FF7B72;
  --user-green: #39E08B;
  --user-blue:  #2FD3F5;
  --user-orange:#FFB000;

  /* Neutral - Twitch dark (inverted ramp — 0 = darkest canvas, 1000 = lightest text) */
  --color-neutral-0:    #0E0E10;     /* canvas */
  --color-neutral-50:   #18181B;     /* sidebar */
  --color-neutral-100:  #1F1F23;     /* elevated */
  --color-neutral-200:  #26262C;     /* card border */
  --color-neutral-300:  #3A3A41;
  --color-neutral-500:  #898995;
  --color-neutral-700:  #ADADB8;
  --color-neutral-800:  #C8C8D0;
  --color-neutral-900:  #DEDEE3;
  --color-neutral-1000: #EFEFF1;     /* lightest text */

  /* Semantic (dark-tinted bg + bright legible fg) */
  --color-success-bg: #102b1c;
  --color-success-fg: #2BD466;
  --color-warning-bg: #33270C;
  --color-warning-fg: #FBBF4D;
  --color-error-bg:   #330F0E;
  --color-error-fg:   #FF5A52;
  --color-info-bg:    #0E2A33;
  --color-info-fg:    #2FD3F5;

  /* Surface */
  --bg-base:     #0E0E10;
  --bg-subtle:   #18181B;
  --bg-elevated: #1F1F23;
  --bg-overlay:  rgba(0,0,0,0.80);

  /* Text */
  --text-primary:    #EFEFF1;
  --text-secondary:  #ADADB8;
  --text-tertiary:   #898995;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #53535F;

  /* Border */
  --border-default: #26262C;
  --border-subtle:  #18181B;
  --border-strong:  #3A3A41;
  --border-focus:   #9146FF;
}

[data-theme="light"] {
  /* Primary - Twitch Purple */
  --color-primary-50:  #F0E5FF;
  --color-primary-100: #DBC2FF;
  --color-primary-200: #B894FF;
  --color-primary-300: #9466FF;
  --color-primary-400: #9146FF;
  --color-primary-500: #9146FF;  /* Twitch Purple */
  --color-primary-600: #772CE8;
  --color-primary-700: #5C16C5;
  --color-primary-800: #3D0B8A;
  --color-primary-900: #1F045A;

  /* Chat user color (다양한 randomized) */
  --user-red:   #FF7B72;
  --user-green: #1AAD5C;
  --user-blue:  #00ADD8;
  --user-orange:#FFB000;

  /* Neutral - Twitch light scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F8;
  --color-neutral-100:  #EFEFF1;
  --color-neutral-200:  #DEDEE3;
  --color-neutral-300:  #ADADB8;
  --color-neutral-500:  #898995;
  --color-neutral-700:  #53535F;
  --color-neutral-800:  #26262C;     /* card border */
  --color-neutral-900:  #18181B;     /* sidebar */
  --color-neutral-1000: #0E0E10;     /* canvas */

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #00C853;
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #F1A33B;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #EB0400;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #00ADD8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,14,16,0.50);

  /* Text */
  --text-primary:    #0E0E10;
  --text-secondary:  #53535F;
  --text-tertiary:   #898995;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #ADADB8;

  /* Border */
  --border-default: #DEDEE3;
  --border-subtle:  #EFEFF1;
  --border-strong:  #ADADB8;
  --border-focus:   #9146FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.02em
  - H1: 28px / 700 / 1.2 / -0.01em
  - H2: 18px / 700 / 1.27 / 0
  - H3: 14px / 600 / 1.3 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.43 / 0
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
- **Container**: fluid

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.65);
--shadow-xl: 0 16px 32px rgba(145,70,255,0.45);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (live dot은 filled red)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-follow { background: var(--color-primary-500); color: #fff; }
.btn-follow.following { background: var(--bg-subtle); color: var(--text-primary); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 6px 12px; height: 32px; font-size: 13px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(145,70,255,0.20); }
```

**Card** (Stream card)
```css
.stream { cursor: pointer; }
.stream .preview { aspect-ratio: 16/9; background: var(--bg-subtle); border-radius: 0; position: relative; overflow: hidden; }
.stream .preview .live { position: absolute; left: 8px; top: 8px; background: var(--color-secondary-500); color: #fff; padding: 2px 6px; border-radius: 3px; font-size: 10px; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; text-transform: uppercase; }
.stream .preview .live::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: #fff; }
.stream .preview .viewers { position: absolute; right: 8px; top: 8px; background: rgba(0,0,0,0.7); color: #fff; padding: 2px 6px; border-radius: 3px; font-size: 11px; font-weight: 600; }
.stream .meta { padding: 10px 0; display: grid; grid-template-columns: 32px 1fr; gap: 8px; }
.stream .meta .avatar { width: 32px; height: 32px; border-radius: 50%; }
.stream h3 { font-size: 13px; font-weight: 600; margin: 0; line-height: 1.3; }
.stream .channel { font-size: 12px; color: var(--text-secondary); margin-top: 2px; }
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge / LIVE pill**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; text-transform: uppercase; letter-spacing: 0.04em; }
.tag-live { background: var(--color-secondary-500); color: #fff; }
.tag-live::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: #fff; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top + Sidebar)**
```css
.topnav { height: 50px; background: var(--color-neutral-0); color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 14px; }
.sidebar { width: 240px; background: var(--color-neutral-50); padding: 8px; }
.sidebar h3 { font-size: 11px; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.04em; padding: 6px; margin: 0 0 4px; font-weight: 700; }
.sidebar .item { display: grid; grid-template-columns: 32px 1fr auto; gap: 8px; padding: 4px 6px; border-radius: var(--radius-md); cursor: pointer; align-items: center; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item .av { width: 32px; height: 32px; border-radius: 50%; }
.sidebar .item .live { color: var(--color-secondary-500); font-size: 11px; font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. LIVE dot 색을 Purple로 변경 금지 — Red(#EB0400)가 시그니처
2. Twitch Purple을 본문 텍스트에 사용 금지 — 액션과 brand mark에만
3. 채팅 사용자 색을 brand purple로 통일 금지 — 다양성 보존
4. 라이트 테마는 마케팅에만 — 시청 UI는 다크 강제
5. emote(이모트) 크기를 임의 변경 금지 — 28px 표준

### ⑫ 시그니처 적용 예시 (Live channel)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #EFEFF1; background: #0E0E10; }
  .topnav { height: 50px; background: #0E0E10; display: flex; align-items: center; padding: 0 16px; gap: 14px; border-bottom: 1px solid #26262C; }
  .topnav .logo { width: 22px; height: 24px; background: #9146FF; clip-path: polygon(0 18%,18% 0,100% 0,100% 70%,82% 88%,55% 88%,40% 100%,40% 88%,12% 88%); }
  .topnav strong { font-size: 16px; }
  .layout { display: grid; grid-template-columns: 240px 1fr 320px; height: calc(100vh - 50px); }
  .sidebar { background: #18181B; padding: 12px 8px; overflow-y: auto; }
  .sidebar h3 { font-size: 11px; color: #ADADB8; text-transform: uppercase; letter-spacing: 0.04em; padding: 6px; margin: 0 0 4px; font-weight: 700; }
  .sidebar .item { display: grid; grid-template-columns: 32px 1fr auto; gap: 8px; padding: 4px 6px; border-radius: 6px; cursor: pointer; align-items: center; font-size: 12px; }
  .sidebar .item:hover { background: #26262C; }
  .sidebar .item .av { width: 32px; height: 32px; border-radius: 50%; }
  .sidebar .item .name { font-weight: 700; }
  .sidebar .item .game { color: #ADADB8; font-size: 11px; }
  .sidebar .item .live { color: #EB0400; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; gap: 3px; }
  .sidebar .item .live::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: #EB0400; }
  .player { background: #000; position: relative; display: grid; place-items: center; }
  .player .play { width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,0.18); display: grid; place-items: center; color: #fff; font-size: 22px; cursor: pointer; }
  .player .live { position: absolute; left: 14px; top: 14px; background: #EB0400; color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; display: flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.05em; }
  .player .live::before { content:""; width: 8px; height: 8px; border-radius: 50%; background: #fff; }
  .player .viewers { position: absolute; right: 14px; top: 14px; background: rgba(0,0,0,0.7); color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 600; }
  .player .info-bar { position: absolute; left: 14px; bottom: 14px; display: flex; align-items: center; gap: 10px; }
  .player .info-bar .avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg,#9146FF,#FF7B72); }
  .player .info-bar .who { color: #fff; }
  .player .info-bar .who strong { font-size: 14px; }
  .player .info-bar .who .game { font-size: 12px; color: #ADADB8; }
  .player .info-bar .follow { background: #9146FF; color: #fff; border: 0; border-radius: 4px; padding: 6px 14px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .chat { background: #18181B; border-left: 1px solid #26262C; display: flex; flex-direction: column; }
  .chat h3 { padding: 12px 14px; margin: 0; font-size: 13px; font-weight: 600; border-bottom: 1px solid #26262C; text-transform: uppercase; letter-spacing: 0.04em; color: #ADADB8; }
  .chat .messages { flex: 1; overflow-y: auto; padding: 12px 14px; display: flex; flex-direction: column; gap: 6px; font-size: 14px; line-height: 1.4; }
  .chat .messages strong { font-weight: 700; }
  .chat .input { background: #0E0E10; border: 1px solid #26262C; border-radius: 4px; padding: 8px 12px; margin: 12px 14px; font-size: 13px; color: #ADADB8; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Twitch</strong>
  <input class="input" placeholder="🔍 검색" style="margin-left:auto; max-width:240px; background:#18181B; border:1px solid #26262C; color:#EFEFF1; border-radius:4px; padding:6px 12px; font-size:13px;"/>
</header>

<div class="layout">
  <aside class="sidebar">
    <h3>추천 채널</h3>
    <div class="item">
      <div class="av" style="background:linear-gradient(135deg,#9146FF,#FF7B72);"></div>
      <div><div class="name">Mina_streams</div><div class="game">디자인 라이브</div></div>
      <div class="live">12.4k</div>
    </div>
    <div class="item">
      <div class="av" style="background:linear-gradient(135deg,#39E08B,#9146FF);"></div>
      <div><div class="name">JoonGaming</div><div class="game">League of Legends</div></div>
      <div class="live">8.2k</div>
    </div>
    <div class="item">
      <div class="av" style="background:linear-gradient(135deg,#2FD3F5,#FFB000);"></div>
      <div><div class="name">DaveCodes</div><div class="game">개발 라이브</div></div>
      <div class="live">3.1k</div>
    </div>
  </aside>
  <main class="player">
    <div class="live">LIVE</div>
    <div class="viewers">12,438 시청 중</div>
    <div class="play">▶</div>
    <div class="info-bar">
      <div class="avatar"></div>
      <div class="who"><strong>Mina_streams</strong><div class="game">디자인 라이브 · Figma</div></div>
      <button class="follow">+ 팔로우</button>
    </div>
  </main>
  <aside class="chat">
    <h3>스트림 채팅</h3>
    <div class="messages">
      <div><strong style="color:#FF7B72;">user_1:</strong> 와 그라데이션 진짜 예쁘다</div>
      <div><strong style="color:#39E08B;">user_2:</strong> 어떤 폰트 쓰시나요?</div>
      <div><strong style="color:#A970FF;">user_3:</strong> Kappa</div>
      <div><strong style="color:#2FD3F5;">user_4:</strong> 컬러 팔레트 공유 부탁드려요!</div>
      <div><strong style="color:#FFB000;">user_5:</strong> PogChamp 멋짐</div>
      <div><strong style="color:#FF7B72;">user_6:</strong> 처음 와봤어요, 팔로우 했어요!</div>
    </div>
    <div class="input">메시지 보내기</div>
  </aside>
</div>
```
