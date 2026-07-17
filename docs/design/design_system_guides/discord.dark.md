---
brand: Discord
brand_ko: 디스코드
slug: discord
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - consumer

color_tone: cool
primary_color_hex: "#5865F2"
primary_color_name: "Discord Blurple"
mood:
  - 친근함
  - 게이밍
  - 커뮤니티

font_category: sans-serif
font_primary: gg sans
font_korean_supported: true

density: compact
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2015
last_major_revision: 2024
signature_keyword: "Blurple과 다크 캔버스, 게임 컨트롤러 로고가 만드는 커뮤니티 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F2F3F5", "border": "#E3E5E8", "fg": "#060607", "fg_muted": "#4F5660", "accent": "#5865F2" },
    "dark":  { "bg": "#36393F", "surface": "#2F3136", "border": "#202225", "fg": "#FFFFFF", "fg_muted": "#8E9297", "accent": "#5865F2" }
  }

hero_html: |
  <div style="font-family:'gg sans','Whitney',-apple-system,'Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-columns:60px 140px 1fr;">
    <div style="background:var(--card-border);padding:8px 0;display:flex;flex-direction:column;align-items:center;gap:6px;">
      <div style="width:36px;height:36px;border-radius:50%;background:var(--card-accent);display:grid;place-items:center;color:#fff;font-weight:700;font-size:14px;">▲</div>
      <div style="width:36px;height:36px;border-radius:18px;background:#3BA55D;"></div>
      <div style="width:36px;height:36px;border-radius:18px;background:#7289DA;"></div>
      <div style="width:36px;height:36px;border-radius:18px;border:2px dashed #4F545C;display:grid;place-items:center;color:#3BA55D;font-size:18px;font-weight:300;">+</div>
    </div>
    <div style="background:var(--card-surface);padding:10px 8px;display:flex;flex-direction:column;gap:4px;">
      <div style="font-size:12px;font-weight:700;color:var(--card-fg);padding:4px;">Acme Server</div>
      <div style="font-size:10px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;padding:8px 6px 4px;">Text Channels</div>
      <div style="font-size:13px;color:var(--card-fg);background:#42464D;padding:4px 6px;border-radius:4px;">＃ general</div>
      <div style="font-size:13px;color:var(--card-fg-muted);padding:4px 6px;">＃ design</div>
      <div style="font-size:10px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;padding:8px 6px 4px;">Voice</div>
      <div style="font-size:13px;color:var(--card-fg-muted);padding:4px 6px;">🔊 hangout</div>
    </div>
    <div style="padding:10px 12px;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;">
      <div style="display:flex;gap:8px;">
        <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#5865F2,#EB459E);"></div>
        <div>
          <div style="font-size:11px;"><strong style="color:var(--card-fg);font-weight:700;">Mina</strong> <span style="color:#8E9297;">오늘 10:24</span></div>
          <div style="font-size:12px;color:var(--card-fg);line-height:1.4;">새 봇 추가했어 :sparkles:</div>
        </div>
      </div>
      <div style="background:#40444B;border-radius:8px;padding:6px 10px;color:var(--card-fg);font-size:12px;">＃general 메시지 보내기</div>
    </div>
  </div>

sources:
  - https://discord.com/
  - https://discord.com/branding
  - https://discord.com/blog
---

### ① 브랜드 DNA
- **브랜드명**: Discord
- **한 줄 정체성**: 게이머에서 출발해 모든 커뮤니티의 거실이 된, 보이스+텍스트 채팅 플랫폼
- **공식 디자인 철학**: "Imagine a place — easy to talk every day, and hang out more often"
- **시그니처 요소 1개**: Blurple(#5865F2) + 다크 캔버스(#36393F) + 둥근 게임 컨트롤러 마스코트 — 친근한 커뮤니티 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 게이밍, 커뮤니티
- **무드 설명**: 다크 캔버스가 기본. Blurple이 한 점으로 강조되고, role color로 다양한 색이 활기차게 흐른다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (이모지/스티커/마스코트)
- **밀도(Density)**: Compact — 채팅 위주
- **모서리 성향**: Round (16~24px 카드, pill 컨트롤)
- **평면성**: Subtle — 다크 캔버스 + 약한 톤 차이

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Discord Blurple */
  --color-primary-50:  #EEF0FE;
  --color-primary-100: #DCE0FE;
  --color-primary-200: #B9C0FD;
  --color-primary-300: #95A0FB;
  --color-primary-400: #7281F8;
  --color-primary-500: #5865F2;  /* Discord Blurple 기본 */
  --color-primary-600: #6E79F4;  /* hover (다크에서 밝게) */
  --color-primary-700: #828CF6;
  --color-primary-800: #95A0FB;
  --color-primary-900: #B9C0FD;

  /* Secondary - Old Blurple (legacy) */
  --color-secondary-500: #7289DA;

  /* Neutral - Discord dark scale (어두움 0 → 밝음 1000) */
  --color-neutral-0:    #18191C;
  --color-neutral-50:   #1E1F22;
  --color-neutral-100:  #232428;
  --color-neutral-200:  #2B2D31;
  --color-neutral-300:  #4E5058;
  --color-neutral-500:  #949BA4;
  --color-neutral-700:  #B5BAC1;
  --color-neutral-800:  #DBDEE1;   /* main canvas text */
  --color-neutral-900:  #ECEDEE;   /* sidebar text */
  --color-neutral-1000: #FBFBFB;   /* high-contrast text */

  /* Semantic */
  --color-success-bg: #1F3024;
  --color-success-fg: #43B581;
  --color-warning-bg: #3A2E12;
  --color-warning-fg: #FAA81A;
  --color-error-bg:   #3A1E1F;
  --color-error-fg:   #F23F42;
  --color-info-bg:    #232A4D;
  --color-info-fg:    #7281F8;

  /* Status (Discord 시그니처) */
  --status-online: #43B581;
  --status-idle:   #FAA81A;
  --status-dnd:    #F23F42;
  --status-offline: #80848E;

  /* Surface */
  --bg-base:     #313338;
  --bg-subtle:   #2B2D31;
  --bg-elevated: #383A40;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #F2F3F5;
  --text-secondary:  #B5BAC1;
  --text-tertiary:   #949BA4;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5C5E66;

  /* Border */
  --border-default: #1E1F22;
  --border-subtle:  #2B2D31;
  --border-strong:  #3F4147;
  --border-focus:   #5865F2;
}

[data-theme="light"] {
  /* Discord 라이트 (원본 light 값) */
  --color-primary-600: #4752C4;  /* hover */
  --color-primary-700: #3C45A5;
  --color-primary-800: #313987;
  --color-primary-900: #232668;

  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F2F3F5;
  --color-neutral-100:  #EBEDEF;
  --color-neutral-200:  #DCDDDE;
  --color-neutral-300:  #B9BBBE;
  --color-neutral-500:  #72767D;
  --color-neutral-700:  #4F545C;
  --color-neutral-800:  #36393F;   /* main canvas dark */
  --color-neutral-900:  #2F3136;   /* sidebar dark */
  --color-neutral-1000: #202225;   /* server list dark */

  --color-success-bg: #DCF7E5;
  --color-success-fg: #3BA55D;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #FAA81A;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #ED4245;
  --color-info-bg:    #DCE0FE;
  --color-info-fg:    #5865F2;

  --status-online: #3BA55D;
  --status-idle:   #FAA81A;
  --status-dnd:    #ED4245;
  --status-offline: #747F8D;

  --bg-base:     #FFFFFF;
  --bg-subtle:   #F2F3F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.85);

  --text-primary:    #060607;
  --text-secondary:  #4F5660;
  --text-tertiary:   #747F8D;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B9BBBE;

  --border-default: #E3E5E8;
  --border-subtle:  #EBEDEF;
  --border-strong:  #B9BBBE;
  --border-focus:   #5865F2;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: gg sans (Discord 자체, 2022 이후 기본) / Whitney (legacy) / 폴백 -apple-system
  - 한글: Apple SD Gothic Neo / Pretendard 폴백
- **위계**:
  - Display: 48px / 800 / 1.1 / -0.02em (마케팅)
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 24px / 700 / 1.25 / 0
  - H3: 20px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 500 / 1.33 / 0
  - Caption: 11px / 700 / 1.27 / 0.04em (uppercase)

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
--radius-sm: 3px;
--radius-md: 4px;     /* 메시지 hover */
--radius-lg: 8px;     /* 입력, 카드 */
--radius-xl: 16px;    /* 모달, 배너 */
--radius-full: 9999px;   /* 서버 아이콘 hover, 버튼 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.30);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.45);
--shadow-xl: 0 16px 40px rgba(0,0,0,0.60);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (Discord 자체 아이콘)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round (살짝 둥근 corner)
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 'gg sans', Whitney, -apple-system, sans-serif;
  border-radius: 3px;
  padding: 0 16px;
  height: 38px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 170ms ease, color 170ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }

.btn-secondary { background: var(--color-neutral-300); color: #fff; }
.btn-secondary:hover { background: var(--color-neutral-200); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: #1E1F22;
  border: 0;
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
  color: var(--text-primary);
}
.input:focus { outline: none; box-shadow: 0 0 0 1px var(--color-primary-500); }
```

**Card**
```css
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge / Role pill**
```css
.role { display: inline-flex; align-items: center; gap: 4px; padding: 0 6px; height: 20px; border-radius: 4px; font-size: 12px; font-weight: 500; line-height: 20px; }
.role::before { content:""; width: 8px; height: 8px; border-radius: 50%; background: currentColor; }
.role-solid   { background: var(--color-primary-500); color: #fff; }
.role-subtle  { background: rgba(88,101,242,0.18); color: var(--color-primary-300); }
.role-outline { background: transparent; border: 1px solid currentColor; color: var(--text-primary); }

.status-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
.status-online { background: var(--status-online); }
.status-idle { background: var(--status-idle); }
.status-dnd { background: var(--status-dnd); }
```

**Navigation (Server list + Channel list)**
```css
.server-list { width: 72px; background: #1E1F22; padding: 12px 0; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.server-list .icon { width: 48px; height: 48px; border-radius: 24px; background: #313338; transition: border-radius 200ms ease, background 200ms ease; cursor: pointer; }
.server-list .icon:hover { border-radius: 16px; background: var(--color-primary-500); }
.server-list .icon.active { border-radius: 16px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
/* 서버 아이콘 morph (원→스퀘어) */
--ease-server: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. Blurple을 본문 텍스트에 사용 금지 — 액션/링크에만
2. role color를 무지개색으로 남발 금지 — 서버 역할의 의미 신호 흐림
3. 다크 모드에서 풀 white(#FFF) 메시지 텍스트 금지 — Discord는 헤더만 white
4. 서버 아이콘 hover에서 morph(원→스퀘어) 모션 제거 금지 — 시그니처
5. 마스코트 캐릭터를 임의 색으로 변경 금지 — Blurple 단일 색

### ⑫ 시그니처 적용 예시 (Dark)

```html
<style>
  body { margin: 0; font-family: 'gg sans', Whitney, -apple-system, 'Pretendard', sans-serif; color: #fff; background: #313338; }
  .layout { display: grid; grid-template-columns: 72px 240px 1fr 240px; min-height: 100vh; }
  .server-list { background: #1E1F22; padding: 12px 0; display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .server-list .icon { width: 48px; height: 48px; border-radius: 24px; background: #313338; cursor: pointer; transition: border-radius 200ms cubic-bezier(0.34,1.56,0.64,1), background 200ms ease; display: grid; place-items: center; color: #fff; font-weight: 700; }
  .server-list .icon:hover, .server-list .icon.active { border-radius: 16px; background: #5865F2; }
  .channel-list { background: #2B2D31; padding: 12px 8px; }
  .channel-list .ws { font-weight: 700; padding: 4px 8px; border-bottom: 1px solid #1E1F22; padding-bottom: 12px; margin-bottom: 8px; }
  .channel-list .section { font-size: 11px; color: #949BA4; text-transform: uppercase; letter-spacing: 0.04em; padding: 12px 8px 4px; }
  .channel-list .item { display: flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 4px; color: #949BA4; font-size: 14px; cursor: pointer; }
  .channel-list .item:hover { background: rgba(255,255,255,0.05); color: #DBDEE1; }
  .channel-list .item.active { background: #404249; color: #fff; }
  .main { display: flex; flex-direction: column; }
  .channel-header { padding: 12px 16px; border-bottom: 1px solid #1E1F22; display: flex; align-items: center; gap: 8px; box-shadow: 0 1px 0 rgba(0,0,0,0.30); }
  .channel-header h1 { margin: 0; font-size: 16px; font-weight: 600; }
  .stream { flex: 1; padding: 16px; display: flex; flex-direction: column; gap: 16px; overflow: auto; }
  .msg { display: flex; gap: 12px; }
  .msg .avatar { width: 40px; height: 40px; border-radius: 50%; }
  .msg strong { color: #fff; font-weight: 600; }
  .msg .time { font-size: 12px; color: #949BA4; margin-left: 8px; }
  .msg .body { font-size: 16px; line-height: 1.5; color: #DBDEE1; }
  .compose { padding: 12px 16px 24px; }
  .compose .box { background: #383A40; border-radius: 8px; padding: 10px 16px; color: #949BA4; }
  .members { background: #2B2D31; padding: 12px; }
  .members .section { font-size: 11px; color: #949BA4; text-transform: uppercase; letter-spacing: 0.04em; padding: 6px; }
  .members .member { display: flex; align-items: center; gap: 8px; padding: 4px 6px; }
  .members .avatar { width: 32px; height: 32px; border-radius: 50%; }
  .members .name { color: #DBDEE1; font-size: 14px; font-weight: 500; }
</style>

<div class="layout">
  <aside class="server-list">
    <div class="icon active">▲</div>
    <div class="icon" style="background:#43B581">D</div>
    <div class="icon" style="background:#FAA81A">G</div>
    <div class="icon" style="background:#F23F42">R</div>
    <div class="icon" style="background:#313338; color:#43B581; border:2px dashed #4E5058">+</div>
  </aside>
  <aside class="channel-list">
    <div class="ws">Acme Server ▾</div>
    <div class="section">Text Channels</div>
    <div class="item active">＃ general</div>
    <div class="item">＃ design-system</div>
    <div class="item">＃ random</div>
    <div class="section">Voice Channels</div>
    <div class="item">🔊 hangout <span style="margin-left:auto;font-size:11px;">3</span></div>
  </aside>
  <main class="main">
    <div class="channel-header">＃ <h1>general</h1><span style="margin-left:auto;color:#949BA4;font-size:12px;">12 members</span></div>
    <div class="stream">
      <div class="msg">
        <div class="avatar" style="background:linear-gradient(135deg,#5865F2,#EB459E)"></div>
        <div>
          <div><strong>Mina</strong><span class="time">오늘 10:24</span></div>
          <div class="body">새 봇 추가했어! /help 로 명령어 확인 가능 ✨</div>
        </div>
      </div>
      <div class="msg">
        <div class="avatar" style="background:linear-gradient(135deg,#43B581,#FAA81A)"></div>
        <div>
          <div><strong style="color:#43B581">Joon</strong><span class="time">오늘 10:31</span></div>
          <div class="body">고마워! 디자인 채널에서도 쓸 수 있게 해줄래?</div>
        </div>
      </div>
    </div>
    <div class="compose"><div class="box">＃general에 메시지 보내기</div></div>
  </main>
  <aside class="members">
    <div class="section">Online — 4</div>
    <div class="member"><div class="avatar" style="background:#5865F2;position:relative"></div><span class="name">Mina</span></div>
    <div class="member"><div class="avatar" style="background:#43B581"></div><span class="name" style="color:#43B581;font-weight:600">Joon</span></div>
    <div class="member"><div class="avatar" style="background:#FAA81A"></div><span class="name">Dave</span></div>
  </aside>
</div>
```
