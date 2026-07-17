---
brand: Telegram
brand_ko: 텔레그램
slug: telegram
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - infra

color_tone: cool
primary_color_hex: "#2AABEE"
primary_color_name: "Telegram Blue"
mood:
  - 가벼움
  - 속도
  - 투명

font_category: sans-serif
font_primary: SF Pro
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2013
last_major_revision: 2025
signature_keyword: "종이비행기 + 텔레그램 블루 그라데이션 + 빠르고 가벼운 클라우드 메신저"

card_tokens: |
  {
    "light": { "bg": "#E1F4FC", "surface": "#FFFFFF", "border": "#EFEFEF", "fg": "#000000", "fg_muted": "#929292", "accent": "#2AABEE" },
    "dark":  { "bg": "#17212B", "surface": "#232E3C", "border": "#2C3743", "fg": "#FFFFFF", "fg_muted": "#6D7F8F", "accent": "#2AABEE" }
  }

hero_html: |
  <div style="font-family:'SF Pro Text','Inter',-apple-system,'Segoe UI',sans-serif;background:linear-gradient(135deg,#0E1621 0%,#17212B 100%);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:30px;height:30px;background:linear-gradient(135deg,#2AABEE,#229ED9);border-radius:9999px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">✈</div>
      <strong style="font-size:14px;font-weight:600;">@design_channel</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">12,453명</span>
    </div>
    <div style="padding:12px 10px;display:flex;flex-direction:column;gap:6px;overflow:hidden;">
      <div style="align-self:flex-start;background:var(--card-surface);border-radius:14px 14px 14px 4px;padding:8px 12px;max-width:80%;font:400 13px/1.35 inherit;box-shadow:0 1px 2px rgba(0,0,0,0.30);">텔레그램은 가볍고 빠른 메시저예요.</div>
      <div style="align-self:flex-end;background:#2B5278;border-radius:14px 14px 4px 14px;padding:8px 12px;max-width:80%;font:400 13px/1.35 inherit;box-shadow:0 1px 2px rgba(0,0,0,0.30);">맞아요! 클라우드 동기화 좋아요 ☁<div style="font:400 9px/1 inherit;color:#7DD0FF;text-align:right;margin-top:2px;">19:03 ✓✓</div></div>
    </div>
    <div style="padding:8px 10px;background:var(--card-surface);display:flex;gap:6px;align-items:center;border-top:1px solid var(--card-border);">
      <div style="flex:1;background:#1B2730;border-radius:9999px;padding:8px 14px;font:400 13px/1 inherit;color:var(--card-fg-muted);">메시지</div>
      <div style="width:32px;height:32px;border-radius:9999px;background:linear-gradient(135deg,#2AABEE,#229ED9);color:#fff;display:grid;place-items:center;font:800 14px/1 inherit;">✈</div>
    </div>
  </div>

sources:
  - https://telegram.org/
  - https://core.telegram.org/
---

### ① 브랜드 DNA
- **브랜드명**: Telegram
- **한 줄 정체성**: 클라우드 기반 빠르고 가벼운 메신저 — 채널·봇·대용량 파일 강점
- **공식 디자인 철학**: "Fast, Free, Secure" — 무광 표면 + 가벼운 애니메이션
- **시그니처 요소 1개**: 종이비행기 로고 + Telegram Blue 그라데이션(#2AABEE → #229ED9, 좌상→우하 45°) + 받은 말풍선 흰색·보낸 말풍선 라이트 라임 그린(#EFFDDE). 다른 메신저(WhatsApp/LINE)와 달리 보낸 말풍선이 그린이지만 매우 옅고 텍스트는 검정 유지

### ② 톤 & 무드
- **핵심 키워드 3개**: 가벼움, 속도, 투명
- **무드 설명**: 채팅 배경에 파스텔 그라데이션 또는 사용자 지정 wallpaper. UI는 시스템 네이티브에 가깝게(iOS는 SF, Android는 Roboto). 버튼·메뉴는 라운드 9999px 풀필.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (14~18px 말풍선)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Telegram Blue */
  --color-primary-50:  #0A2A3D;
  --color-primary-100: #0F3D57;
  --color-primary-200: #145274;
  --color-primary-300: #1C7AA8;
  --color-primary-400: #229ED9;
  --color-primary-500: #2AABEE;   /* Telegram Blue */
  --color-primary-600: #47B3EC;
  --color-primary-700: #6BC0EF;
  --color-primary-800: #95D3F4;
  --color-primary-900: #C7E9FB;

  /* Out bubble green (보낸 말풍선) */
  --color-bubble-out: #2B5278;        /* 다크에선 블루 톤 */
  --color-bubble-out-dark: #2B5278;
  --color-bubble-check: #7DD0FF;

  /* Neutral - 다크 반전 램프 */
  --color-neutral-0:    #0E1621;
  --color-neutral-50:   #17212B;
  --color-neutral-100:  #1B2730;
  --color-neutral-200:  #232E3C;
  --color-neutral-300:  #2C3743;
  --color-neutral-500:  #5A6B7B;
  --color-neutral-700:  #8A99A8;
  --color-neutral-800:  #B7C2CC;
  --color-neutral-900:  #E6ECF2;
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크에서 가독성 확보 */
  --color-success-bg: #1C3326;
  --color-success-fg: #6CD08A;
  --color-warning-bg: #3A2E14;
  --color-warning-fg: #E3B341;
  --color-error-bg:   #3A1E1E;
  --color-error-fg:   #F08585;
  --color-info-bg:    #12303F;
  --color-info-fg:    #5CC0F0;

  /* Surface */
  --bg-base:     #17212B;
  --bg-subtle:   #1B2730;
  --bg-elevated: #232E3C;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #AAB8C2;
  --text-tertiary:   #6D7F8F;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #4A5A68;

  /* Border */
  --border-default: #2C3743;
  --border-subtle:  #232E3C;
  --border-strong:  #3A4754;
  --border-focus:   #2AABEE;
}

[data-theme="light"] {
  /* Primary - Telegram Blue */
  --color-primary-50:  #E5F4FD;
  --color-primary-100: #BFE4F9;
  --color-primary-200: #95D3F4;
  --color-primary-300: #6BC0EF;
  --color-primary-400: #47B3EC;
  --color-primary-500: #2AABEE;
  --color-primary-600: #229ED9;
  --color-primary-700: #1C84B4;
  --color-primary-800: #146080;
  --color-primary-900: #0A3F55;

  --color-bubble-out: #EFFDDE;
  --color-bubble-out-dark: #6F5A4A;
  --color-bubble-check: #4FAE4E;

  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FA;
  --color-neutral-100:  #F4F4F5;
  --color-neutral-200:  #EFEFEF;
  --color-neutral-300:  #D9D9D9;
  --color-neutral-500:  #B6B6B6;
  --color-neutral-700:  #929292;
  --color-neutral-800:  #3B3B3B;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  --color-success-bg: #DFF4D7;
  --color-success-fg: #2E7D32;
  --color-warning-bg: #FFF3CD;
  --color-warning-fg: #B07A1F;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #D32F2F;
  --color-info-bg:    #E5F4FD;
  --color-info-fg:    #229ED9;

  --bg-base:     linear-gradient(135deg, #A0DEFE 0%, #E1F4FC 100%);
  --bg-subtle:   #F4F4F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.40);

  --text-primary:    #000000;
  --text-secondary:  #3B3B3B;
  --text-tertiary:   #929292;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #B6B6B6;

  --border-default: #EFEFEF;
  --border-subtle:  #F4F4F5;
  --border-strong:  #D9D9D9;
  --border-focus:   #2AABEE;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - iOS: **SF Pro Text/Display**
  - Android/Web: **Roboto** / Inter
  - 한글: Pretendard / Apple SD Gothic Neo / Noto Sans KR
- **위계**:
  - Display: 28px / 700 / 1.25
  - H1: 22px / 600 / 1.3
  - H2: 19px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 17px / 400 / 1.4 (iOS native)
  - Body: 15px / 400 / 1.35
  - Body Small: 13px / 400 / 1.35
  - Caption: 12px / 400 / 1.3

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
- **Container**: 모바일 100%, 데스크톱 max-width 1180px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;   /* 말풍선 시그니처 */
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.40);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.55);
--shadow-tg-blue: 0 4px 16px rgba(42,171,238,0.30);
```

### ⑧ Iconography
- **스타일**: Outline (얇음) — 자체 라인 아이콘
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Material Symbols Outlined

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 'SF Pro Text', Roboto, Inter, sans-serif; border-radius: 9999px; padding: 11px 20px; border: 0; cursor: pointer; }
.btn-primary { background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600)); color: #fff; box-shadow: var(--shadow-tg-blue); }
.btn-primary:hover { filter: brightness(1.05); }
.btn-secondary { background: var(--bg-elevated); color: var(--color-primary-500); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-send { width: 36px; height: 36px; padding: 0; border-radius: 9999px; background: linear-gradient(135deg, #2AABEE, #229ED9); color: #fff; }
```

**Input**
```css
.field { background: var(--bg-subtle); border: 0; border-radius: 9999px; padding: 10px 16px; font: 400 15px/1.3 inherit; color: var(--text-primary); outline: 0; }
.field:focus { background: var(--bg-elevated); box-shadow: 0 0 0 2px var(--color-primary-200); }
```

**Card (Bubble)**
```css
.bubble { max-width: 80%; padding: 7px 11px; border-radius: 14px; font: 400 15px/1.4 inherit; box-shadow: var(--shadow-sm); position: relative; }
.bubble.in  { background: var(--bg-elevated); color: var(--text-primary); align-self: flex-start; border-bottom-left-radius: 4px; }
.bubble.out { background: var(--color-bubble-out); color: var(--text-primary); align-self: flex-end; border-bottom-right-radius: 4px; }
.bubble .meta { font: 400 11px/1 inherit; color: var(--color-bubble-check); text-align: right; margin-top: 2px; }
.bubble.in .meta { color: var(--text-tertiary); }
```

**Badge / Tag**
```css
.badge-channel { background: var(--color-primary-500); color: #fff; border-radius: 9999px; padding: 1px 7px; font: 600 11px/1.4 inherit; display: inline-flex; align-items: center; gap: 4px; }
.badge-unread { background: var(--color-primary-500); color: #fff; border-radius: 9999px; padding: 1px 8px; min-width: 20px; height: 20px; display: inline-grid; place-items: center; font: 700 12px/1 inherit; }
.tag-mention  { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 4px; padding: 2px 6px; font: 600 13px/1.3 inherit; }
```

**Navigation (좌측 채팅 리스트)**
```css
.chatlist { background: var(--bg-elevated); border-right: 1px solid var(--border-default); }
.chatlist .item { display: grid; grid-template-columns: 54px 1fr auto; gap: 10px; padding: 8px 12px; cursor: pointer; border-radius: 10px; margin: 2px 6px; }
.chatlist .item:hover { background: var(--bg-subtle); }
.chatlist .item.active { background: var(--color-primary-500); color: #fff; }
.chatlist .item.active .preview, .chatlist .item.active .time { color: rgba(255,255,255,0.85); }
.chatlist .item .avatar { width: 54px; height: 54px; border-radius: 9999px; background: linear-gradient(135deg, #FF8A65, #E64A19); }
.chatlist .item .name { font: 500 15px/1.3 inherit; }
.chatlist .item .preview { font: 400 13px/1.3 inherit; color: var(--text-tertiary); margin-top: 3px; }
.chatlist .item .time { font: 400 12px/1 inherit; color: var(--text-tertiary); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.32, 0.72, 0, 1);
--ease-tg-spring: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 단색 #2AABEE 평평한 사용 금지 — 헤더·버튼은 그라데이션(#2AABEE→#229ED9)
2. 보낸 말풍선에 진한 그린 또는 파랑 사용 금지 — 라이트 라임(#EFFDDE), 텍스트는 검정
3. 채팅 배경에 단색 흰색만 사용 금지 — 파스텔 그라데이션 또는 사용자 wallpaper
4. 종이비행기 외 다른 아이콘으로 송신 버튼 대체 금지
5. 풀필 카드(9999px) 금지 — 카드/말풍선은 14~18px Round

### ⑫ 시그니처 적용 예시 (Telegram 채팅 UI)

```html
<style>
  body { margin: 0; font-family: 'SF Pro Text', 'Roboto', Inter, -apple-system, sans-serif; color: #fff; background: #0E1621; }
  .app { max-width: 420px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; background: linear-gradient(135deg, #0E1621 0%, #17212B 100%); }
  .topbar { background: #17212B; padding: 10px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #2C3743; }
  .topbar .avatar { width: 36px; height: 36px; border-radius: 9999px; background: linear-gradient(135deg, #2AABEE, #229ED9); display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
  .topbar h1 { margin: 0; font: 600 16px/1.2 inherit; color: #fff; }
  .topbar .sub { font: 400 12px/1 inherit; color: #2AABEE; margin-top: 2px; }
  .topbar .right { margin-left: auto; color: #2AABEE; font-size: 18px; display: flex; gap: 14px; }
  .chat { padding: 14px 10px; display: flex; flex-direction: column; gap: 6px; overflow-y: auto; }
  .row { display: flex; }
  .row.in { justify-content: flex-start; }
  .row.out { justify-content: flex-end; }
  .bubble { max-width: 80%; padding: 7px 11px; border-radius: 14px; font: 400 15px/1.4 inherit; box-shadow: 0 1px 2px rgba(0,0,0,0.35); }
  .bubble.in  { background: #232E3C; color: #fff; border-bottom-left-radius: 4px; }
  .bubble.out { background: #2B5278; color: #fff; border-bottom-right-radius: 4px; }
  .meta { font: 400 11px/1 inherit; text-align: right; margin-top: 3px; }
  .meta.in  { color: #6D7F8F; }
  .meta.out { color: #7DD0FF; }
  .name { font: 600 13px/1 inherit; color: #2AABEE; margin-bottom: 3px; }
  .day { align-self: center; background: rgba(0,0,0,0.35); color: #fff; padding: 4px 10px; border-radius: 9999px; font: 500 12px/1 inherit; margin: 8px 0; }
  .compose { background: #17212B; padding: 8px 10px; display: flex; gap: 8px; align-items: center; border-top: 1px solid #2C3743; }
  .compose .ico { color: #6D7F8F; font-size: 22px; padding: 0 4px; }
  .compose .field { flex: 1; background: #1B2730; border-radius: 9999px; padding: 9px 16px; font: 400 15px/1 inherit; color: #fff; border: 0; outline: 0; }
  .compose .send { width: 36px; height: 36px; border-radius: 9999px; background: linear-gradient(135deg, #2AABEE, #229ED9); color: #fff; border: 0; display: grid; place-items: center; font: 800 14px/1 inherit; cursor: pointer; box-shadow: 0 4px 12px rgba(42,171,238,0.40); }
</style>

<div class="app">
  <header class="topbar">
    <div class="avatar">✈</div>
    <div>
      <h1>디자인 채널</h1>
      <div class="sub">12,453명 구독</div>
    </div>
    <div class="right"><span>🔍</span><span>⋮</span></div>
  </header>
  <main class="chat">
    <div class="day">오늘</div>
    <div class="row in">
      <div class="bubble in">
        <div class="name">알렉스</div>
        텔레그램은 클라우드 기반이라 디바이스 바꿔도 메시지가 그대로 따라와요.
        <div class="meta in">18:50</div>
      </div>
    </div>
    <div class="row out">
      <div class="bubble out">
        그리고 빠르죠. 종이비행기처럼 🛩
        <div class="meta out">19:01 ✓✓</div>
      </div>
    </div>
    <div class="row in">
      <div class="bubble in">
        <div class="name">알렉스</div>
        UI도 가벼움이 시그니처: 풀필 버튼, 라운드 14px 말풍선, 파스텔 wallpaper.
        <div class="meta in">19:02</div>
      </div>
    </div>
    <div class="row out">
      <div class="bubble out">
        보낸 말풍선이 라임 그린이 라이트한 게 포인트네요.
        <div class="meta out">19:03 ✓✓</div>
      </div>
    </div>
  </main>
  <div class="compose">
    <div class="ico">📎</div>
    <input class="field" placeholder="메시지" />
    <div class="ico">😊</div>
    <button class="send">✈</button>
  </div>
</div>
```
