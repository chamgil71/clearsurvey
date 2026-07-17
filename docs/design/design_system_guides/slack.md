---
brand: Slack
brand_ko: 슬랙
slug: slack
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - productivity
  - enterprise

color_tone: warm
primary_color_hex: "#4A154B"
primary_color_name: "Slack Aubergine"
mood:
  - 따뜻함
  - 활기참
  - 협업적

font_category: sans-serif
font_primary: Slack Lato
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2013
last_major_revision: 2024
signature_keyword: "Aubergine 사이드바와 4색 hash 로고가 만드는 워크 메시징 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8F8F8", "border": "#DDDDDD", "fg": "#1D1C1D", "fg_muted": "#616061", "accent": "#4A154B" },
    "dark":  { "bg": "#1A1D21", "surface": "#222529", "border": "#2C2D30", "fg": "#D1D2D3", "fg_muted": "#ABABAD", "accent": "#926692" }
  }

hero_html: |
  <div style="font-family:'Slack Lato',-apple-system,'Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-columns:90px 1fr;">
    <div style="background:#3F0E40;color:#fff;padding:10px 8px;display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;gap:2px;flex-wrap:wrap;width:24px;">
        <span style="width:10px;height:10px;background:#36C5F0;border-radius:2px;"></span>
        <span style="width:10px;height:10px;background:#2EB67D;border-radius:2px;"></span>
        <span style="width:10px;height:10px;background:#ECB22E;border-radius:2px;"></span>
        <span style="width:10px;height:10px;background:#E01E5A;border-radius:2px;"></span>
      </div>
      <div style="font-size:10px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:0.04em;margin-top:6px;">Channels</div>
      <div style="font-size:11px;font-weight:700;color:#fff;background:#1164A3;padding:3px 6px;border-radius:4px;"># general</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.85);padding:3px 6px;"># design</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.85);padding:3px 6px;"># random</div>
    </div>
    <div style="padding:14px 14px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:14px;font-weight:900;display:flex;align-items:center;gap:6px;border-bottom:1px solid var(--card-border);padding-bottom:8px;">
        <span style="color:var(--card-fg);">#</span>general
      </div>
      <div style="display:flex;gap:8px;align-items:flex-start;">
        <div style="width:28px;height:28px;border-radius:6px;background:linear-gradient(135deg,#E01E5A,#ECB22E);"></div>
        <div>
          <div style="font-size:11px;"><strong style="color:var(--card-fg);">Mina</strong> <span style="color:var(--card-fg-muted);">10:24 AM</span></div>
          <div style="font-size:12px;color:var(--card-fg);line-height:1.4;">디자인 시스템 v2 PR 올렸어요 🎉</div>
          <div style="margin-top:4px;display:inline-flex;gap:3px;align-items:center;background:var(--card-surface);border:1px solid var(--card-border);border-radius:9999px;padding:2px 8px;font-size:11px;">
            <span>👍</span><span style="color:#1264A3;font-weight:700;">3</span>
          </div>
        </div>
      </div>
      <div style="margin-top:auto;background:var(--card-bg);border:1px solid var(--card-fg-muted);border-radius:8px;padding:8px 10px;font-size:11px;color:var(--card-fg-muted);">메시지 보내기...</div>
    </div>
  </div>

sources:
  - https://slack.com/
  - https://brand.slackhq.com/
  - https://api.slack.com/reference/block-kit/blocks
---

### ① 브랜드 DNA
- **브랜드명**: Slack
- **한 줄 정체성**: 채널 기반의 따뜻한 워크 메시징 — 일이 흐르는 디지털 사무실
- **공식 디자인 철학**: "Where work happens — make work life simpler, more pleasant, more productive"
- **시그니처 요소 1개**: Aubergine(#4A154B) 사이드바 + 4색(파랑/초록/노랑/빨강) hash 로고 + Lato 본문 — 일관된 워크 메시징 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 따뜻함, 활기참, 협업적
- **무드 설명**: 깊은 보라 사이드바 옆에 따뜻한 흰 캔버스가 펼쳐진다. 4색 액센트는 hash 로고와 status에만 등장하고, 본문은 차분한 grayscale로 정돈된다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (이모지 친화)
- **밀도(Density)**: Comfortable — 메시지 가독성 우선
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle — 1단계 그림자, 사이드바와 본문의 색 차이로 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Slack Aubergine (사이드바, brand mark) */
  --color-primary-50:  #F4ECF4;
  --color-primary-100: #E0CCE0;
  --color-primary-200: #B999B9;
  --color-primary-300: #926692;
  --color-primary-400: #6B336B;
  --color-primary-500: #4A154B;  /* Slack Aubergine */
  --color-primary-600: #3F0E40;  /* sidebar bg */
  --color-primary-700: #350B36;
  --color-primary-800: #2A082B;
  --color-primary-900: #1F0520;

  /* Secondary - Slack Action Blue */
  --color-secondary-500: #1164A3;

  /* Slack 4색 액센트 (hash 로고) */
  --slack-cyan:   #36C5F0;
  --slack-green:  #2EB67D;
  --slack-yellow: #ECB22E;
  --slack-red:    #E01E5A;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F8F8;
  --color-neutral-100:  #F4EDE4;   /* warm beige */
  --color-neutral-200:  #E1E1E1;
  --color-neutral-300:  #DDDDDD;
  --color-neutral-500:  #868686;
  --color-neutral-700:  #616061;
  --color-neutral-800:  #454245;
  --color-neutral-900:  #1D1C1D;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DDF1E5;
  --color-success-fg: #007A5A;
  --color-warning-bg: #FFF8E0;
  --color-warning-fg: #BB7700;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #E01E5A;
  --color-info-bg:    #E0F1FA;
  --color-info-fg:    #1264A3;

  /* Surface */
  --bg-base:     #FFFFFF;          /* main canvas */
  --bg-subtle:   #F8F8F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(29,28,29,0.40);

  /* Text */
  --text-primary:    #1D1C1D;
  --text-secondary:  #616061;
  --text-tertiary:   #868686;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #BABABA;

  /* Border */
  --border-default: #DDDDDD;
  --border-subtle:  #E1E1E1;
  --border-strong:  #868686;
  --border-focus:   #1264A3;
}

[data-theme="dark"] {
  --bg-base: #1A1D21;
  --bg-subtle: #222529;
  --bg-elevated: #2C2D30;
  --text-primary: #D1D2D3;
  --text-secondary: #ABABAD;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Slack Lato (Slack 라이선스, 폴백 Lato → -apple-system)
  - 한글: Apple SD Gothic Neo / Pretendard 폴백
- **위계**:
  - Display: 36px / 900 / 1.15 / -0.01em
  - H1: 28px / 900 / 1.2 / -0.005em
  - H2: 22px / 700 / 1.27 / 0
  - H3: 18px / 700 / 1.33 / 0
  - Body Large: 17px / 400 / 1.5 / 0
  - Body: 15px / 400 / 1.46 / 0
  - Body Small: 13px / 400 / 1.38 / 0
  - Caption: 12px / 700 / 1.33 / 0.04em (uppercase)

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
- **Container**: max-width 1280px, 좌우 패딩 16px (mobile) / 24px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;     /* 컨트롤 */
--radius-lg: 8px;     /* 카드 */
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
--shadow-md: 0 2px 8px rgba(0,0,0,0.12);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.18);
--shadow-xl: 0 16px 40px rgba(0,0,0,0.24);
```

### ⑧ Iconography
- **스타일**: Outline (Slack의 시스템 아이콘은 단일 outline)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 15px/1 'Slack Lato', Lato, -apple-system, sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 80ms ease;
}
.btn-primary { background: #007A5A; color: #fff; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.20); }
.btn-primary:hover { background: #148567; }
.btn-primary:active { background: #00583E; }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); box-shadow: none; }

.btn-secondary { background: transparent; color: var(--text-primary); box-shadow: inset 0 0 0 1px var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  font-size: 15px;
}
.input:focus { outline: none; border-color: #1264A3; box-shadow: 0 0 0 3px rgba(18,100,163,0.20); }
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Mention pill**
```css
.mention { background: #1D9BD11A; color: #1264A3; padding: 0 4px; border-radius: 3px; font-weight: 700; font-size: 13px; }
.tag { padding: 0 8px; height: 22px; border-radius: var(--radius-full); font-size: 12px; font-weight: 600; line-height: 22px; display: inline-flex; align-items: center; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-600); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 220px; background: #3F0E40; color: #fff; padding: 12px 8px; height: 100vh; }
.sidebar .channel { display: flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 4px; color: rgba(255,255,255,0.85); font-size: 14px; cursor: pointer; }
.sidebar .channel:hover { background: rgba(255,255,255,0.10); color: #fff; }
.sidebar .channel.active { background: #1164A3; color: #fff; font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. Aubergine을 본문 텍스트에 사용 금지 — 사이드바와 brand mark 전용
2. 4색 hash 액센트를 UI 액션 색으로 분산 사용 금지 — 로고/identity 전용
3. 메시지 카드를 강한 그림자로 띄우지 말 것 — flat 메시지 스트림 톤
4. 채널 이름에 12px 미만 폰트 사용 금지 — 가독성 핵심
5. modal 위 modal 중첩 금지 — 워크 메시징 흐름 끊김

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: 'Slack Lato', Lato, -apple-system, 'Pretendard', sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .layout { display: grid; grid-template-columns: 220px 1fr; min-height: 100vh; }
  .sidebar { background: #3F0E40; color: #fff; padding: 12px 8px; }
  .sidebar .ws-name { font-weight: 900; padding: 4px 8px; display: flex; gap: 6px; align-items: center; }
  .sidebar .channel { display: flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 4px; color: rgba(255,255,255,0.85); font-size: 14px; cursor: pointer; }
  .sidebar .channel:hover { background: rgba(255,255,255,0.10); color: #fff; }
  .sidebar .channel.active { background: #1164A3; color: #fff; font-weight: 700; }
  .sidebar .section-label { font-size: 11px; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.04em; padding: 12px 8px 4px; }
  .main { display: flex; flex-direction: column; }
  .channel-header { padding: 12px 20px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 8px; }
  .channel-header h1 { font-size: 18px; font-weight: 900; margin: 0; }
  .stream { flex: 1; padding: 16px 20px; display: flex; flex-direction: column; gap: 16px; }
  .msg { display: flex; gap: 10px; }
  .msg .avatar { width: 36px; height: 36px; border-radius: 6px; }
  .msg .meta { font-size: 13px; }
  .msg strong { font-weight: 900; }
  .msg .time { color: var(--text-tertiary); margin-left: 6px; font-size: 12px; }
  .msg .body { font-size: 15px; line-height: 1.5; color: var(--text-primary); margin-top: 2px; }
  .reaction { display: inline-flex; gap: 4px; align-items: center; background: var(--bg-subtle); border: 1px solid var(--border-subtle); border-radius: 9999px; padding: 2px 8px; font-size: 12px; margin-top: 4px; margin-right: 4px; }
  .reaction strong { color: var(--color-secondary-500); font-weight: 700; }
  .compose { padding: 12px 20px 20px; }
  .compose .box { border: 1px solid var(--border-strong); border-radius: 8px; padding: 10px 12px; color: var(--text-tertiary); font-size: 14px; }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="ws-name">🎯 Acme HQ</div>
    <div class="section-label">Channels</div>
    <div class="channel active"># general</div>
    <div class="channel"># design-system</div>
    <div class="channel"># random</div>
    <div class="channel"># growth</div>
    <div class="section-label">Direct Messages</div>
    <div class="channel">● Mina</div>
    <div class="channel">● Joon</div>
  </aside>
  <main class="main">
    <div class="channel-header"><h1># general</h1><span style="color:var(--text-tertiary); font-size:13px;">12 members</span></div>
    <div class="stream">
      <div class="msg">
        <div class="avatar" style="background:linear-gradient(135deg,#E01E5A,#ECB22E)"></div>
        <div>
          <div class="meta"><strong>Mina</strong><span class="time">10:24 AM</span></div>
          <div class="body">디자인 시스템 v2 PR 올렸어요. 리뷰 부탁드립니다 🎉</div>
          <div><span class="reaction">👍 <strong>3</strong></span><span class="reaction">🚀 <strong>1</strong></span></div>
        </div>
      </div>
      <div class="msg">
        <div class="avatar" style="background:linear-gradient(135deg,#36C5F0,#2EB67D)"></div>
        <div>
          <div class="meta"><strong>Joon</strong><span class="time">10:31 AM</span></div>
          <div class="body">@<span class="mention">Mina</span> 점심 후에 같이 봐요!</div>
        </div>
      </div>
    </div>
    <div class="compose"><div class="box">메시지 보내기 #general</div></div>
  </main>
</div>
```
