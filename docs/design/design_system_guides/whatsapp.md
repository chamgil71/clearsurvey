---
brand: WhatsApp
brand_ko: 왓츠앱
slug: whatsapp
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - consumer

color_tone: cool
primary_color_hex: "#25D366"
primary_color_name: "WhatsApp Green"
mood:
  - 일상
  - 신뢰
  - 친근

font_category: sans-serif
font_primary: Helvetica Neue
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2009
last_major_revision: 2024
signature_keyword: "선명한 그린 말풍선 + 베이지 채팅 배경의 가장 보편적인 메시저"

card_tokens: |
  {
    "light": { "bg": "#EFE7DD", "surface": "#FFFFFF", "border": "#E9EDEF", "fg": "#111B21", "fg_muted": "#667781", "accent": "#25D366" },
    "dark":  { "bg": "#0B141A", "surface": "#202C33", "border": "#2A3942", "fg": "#E9EDEF", "fg_muted": "#8696A0", "accent": "#25D366" }
  }

hero_html: |
  <div style="font-family:-apple-system,'Helvetica Neue','Inter','Segoe UI',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;background:#075E54;color:#fff;display:flex;align-items:center;gap:10px;">
      <div style="width:30px;height:30px;background:var(--card-accent);border-radius:9999px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">💬</div>
      <strong style="font-size:14px;font-weight:600;">디자인 스터디</strong>
      <span style="margin-left:auto;font-size:11px;opacity:0.8;">온라인</span>
    </div>
    <div style="padding:12px 10px;display:flex;flex-direction:column;gap:6px;background-image:radial-gradient(circle at 20% 30%,rgba(0,0,0,0.025) 0,transparent 40%),radial-gradient(circle at 70% 60%,rgba(0,0,0,0.025) 0,transparent 40%);overflow:hidden;">
      <div style="align-self:flex-start;background:var(--card-surface);border-radius:0 7px 7px 7px;padding:6px 10px 4px;max-width:80%;font:400 13px/1.35 inherit;box-shadow:0 1px 0.5px rgba(0,0,0,0.13);">오늘 모임 7시 맞죠?<div style="font:400 9px/1 inherit;color:var(--card-fg-muted);text-align:right;margin-top:2px;">19:02</div></div>
      <div style="align-self:flex-end;background:#D9FDD3;border-radius:7px 0 7px 7px;padding:6px 10px 4px;max-width:80%;font:400 13px/1.35 inherit;box-shadow:0 1px 0.5px rgba(0,0,0,0.13);">네! 그린 말풍선 그대로요 🙂<div style="font:400 9px/1 inherit;color:var(--card-fg-muted);text-align:right;margin-top:2px;">19:03 ✓✓</div></div>
    </div>
    <div style="padding:7px 8px;display:flex;gap:6px;align-items:center;background:transparent;">
      <div style="flex:1;background:var(--card-surface);border-radius:9999px;padding:8px 12px;font:400 13px/1 inherit;color:var(--card-fg-muted);">메시지 입력</div>
      <div style="width:36px;height:36px;border-radius:9999px;background:var(--card-accent);color:#fff;display:grid;place-items:center;font:700 14px/1 inherit;">▶</div>
    </div>
  </div>

sources:
  - https://www.whatsapp.com/
  - https://about.meta.com/brand/resources/whatsapp/whatsappbrand/
---

### ① 브랜드 DNA
- **브랜드명**: WhatsApp (Meta)
- **한 줄 정체성**: 전세계 20억+ 사용자의 무료 암호화 메신저
- **공식 디자인 철학**: "Simple. Reliable. Private." — 보편적이고 즉시 이해되는 단순함
- **시그니처 요소 1개**: 선명한 WhatsApp Green(#25D366) 보내는 말풍선(#D9FDD3) + 받는 말풍선 흰색 + 베이지(#EFE7DD) 도트 패턴 채팅 배경. 다른 메신저(LINE/WeChat)도 그린이지만, WhatsApp만의 베이지 채팅 캔버스는 유일

### ② 톤 & 무드
- **핵심 키워드 3개**: 일상, 신뢰, 친근
- **무드 설명**: 화려함 대신 즉시성. 헤더 다크그린(#075E54), 본문은 흰 카드, 보낸 메시지는 라이트 민트(#D9FDD3). 일러스트보다 시스템 폰트와 이모지 중심.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 말풍선 8~10px 패딩
- **모서리 성판**: Round (7~12px), 말풍선 꼬리 쪽만 0
- **평면성**: Subtle — 미세한 1px 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - WhatsApp Green */
  --color-primary-50:  #E7FCE3;
  --color-primary-100: #D9FDD3;   /* outgoing bubble */
  --color-primary-200: #B5F0B0;
  --color-primary-300: #7DDB6F;
  --color-primary-400: #4EC940;
  --color-primary-500: #25D366;   /* CTA / 송신 버튼 */
  --color-primary-600: #1FAD56;
  --color-primary-700: #128C7E;   /* link / 강조 */
  --color-primary-800: #075E54;   /* 헤더 (legacy) */
  --color-primary-900: #054D43;

  /* Secondary */
  --color-secondary-500: #34B7F1;  /* status / 링크 */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F0F2F5;
  --color-neutral-100:  #EFE7DD;   /* chat bg (light) */
  --color-neutral-200:  #E9EDEF;
  --color-neutral-300:  #D1D7DB;
  --color-neutral-500:  #8696A0;
  --color-neutral-700:  #667781;
  --color-neutral-800:  #3B4A54;
  --color-neutral-900:  #111B21;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCFCE7;
  --color-success-fg: #15803D;
  --color-warning-bg: #FEF3C7;
  --color-warning-fg: #A16207;
  --color-error-bg:   #FECACA;
  --color-error-fg:   #B91C1C;
  --color-info-bg:    #DBEAFE;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #EFE7DD;     /* 채팅 배경 */
  --bg-subtle:   #F0F2F5;     /* 사이드바 */
  --bg-elevated: #FFFFFF;     /* 말풍선 / 카드 */
  --bg-overlay:  rgba(11,20,26,0.40);

  /* Text */
  --text-primary:    #111B21;
  --text-secondary:  #3B4A54;
  --text-tertiary:   #667781;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #8696A0;

  /* Border */
  --border-default: #E9EDEF;
  --border-subtle:  #F0F2F5;
  --border-strong:  #D1D7DB;
  --border-focus:   #25D366;
}

[data-theme="dark"] {
  --bg-base:     #0B141A;
  --bg-subtle:   #111B21;
  --bg-elevated: #202C33;   /* 받은 말풍선 */
  --text-primary:   #E9EDEF;
  --text-secondary: #D1D7DB;
  --text-tertiary:  #8696A0;
  --border-default: #2A3942;
  --color-primary-100: #005C4B;   /* 보낸 말풍선 (dark) */
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Helvetica Neue** / -apple-system / Segoe UI / system-ui
  - 한글: Pretendard / Apple SD Gothic Neo / Noto Sans KR
  - 이모지: Apple Color Emoji / Noto Color Emoji
- **위계**:
  - Display: 28px / 700 / 1.2 / -0.01em
  - H1: 22px / 700 / 1.25
  - H2: 19px / 600 / 1.3
  - H3: 16px / 600 / 1.3
  - Body Large: 16px / 400 / 1.4
  - Body: 14px / 400 / 1.35
  - Body Small: 13px / 400 / 1.35
  - Caption: 11px / 400 / 1.3 (timestamp)

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 10px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```
- **Container**: 채팅 최대 폭 80%, 데스크톱 max-width 1600px (3컬럼)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 7px;     /* 말풍선 기본 */
--radius-lg: 12px;
--radius-xl: 18px;
--radius-full: 9999px;   /* 액션 버튼 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0.5px rgba(11,20,26,0.13);   /* 말풍선 시그니처 */
--shadow-md: 0 2px 5px rgba(11,20,26,0.16);
--shadow-lg: 0 12px 32px rgba(11,20,26,0.20);
--shadow-xl: 0 20px 48px rgba(11,20,26,0.28);
```

### ⑧ Iconography
- **스타일**: Filled (말풍선·체크·전화기) + Outline (메뉴)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: 자체 / Material Symbols Rounded

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 inherit; border-radius: 9999px; padding: 10px 18px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-send { width: 42px; height: 42px; padding: 0; border-radius: 9999px; background: var(--color-primary-500); color: #fff; }
.btn-ghost { background: transparent; color: var(--color-primary-700); }
.btn-call { background: var(--color-primary-500); color: #fff; border-radius: 9999px; padding: 8px 16px; }
```

**Input (Compose bar)**
```css
.compose { background: var(--bg-base); padding: 7px 8px; display: flex; gap: 6px; align-items: center; }
.compose .field { flex: 1; background: var(--bg-elevated); border-radius: 9999px; padding: 9px 14px; font: 400 15px/1.3 inherit; color: var(--text-primary); border: 0; outline: 0; }
.compose .field::placeholder { color: var(--text-tertiary); }
```

**Card (Message bubble)**
```css
.bubble { max-width: 80%; padding: 6px 10px 4px; border-radius: 7px; font: 400 14px/1.35 inherit; box-shadow: var(--shadow-sm); position: relative; }
.bubble.in  { background: var(--bg-elevated); color: var(--text-primary); align-self: flex-start; border-top-left-radius: 0; }
.bubble.out { background: var(--color-primary-100); color: var(--text-primary); align-self: flex-end; border-top-right-radius: 0; }
.bubble .meta { font: 400 11px/1 inherit; color: var(--text-tertiary); text-align: right; margin-top: 2px; }
.bubble .check { color: var(--color-secondary-500); }   /* 읽음 ✓✓ */
```

**Badge / Tag**
```css
.badge-unread { background: var(--color-primary-500); color: #fff; border-radius: 9999px; padding: 1px 8px; font: 600 12px/1.4 inherit; min-width: 20px; text-align: center; }
.tag-status  { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 4px; padding: 2px 6px; font: 600 11px/1.3 inherit; }
```

**Navigation (좌측 채팅 리스트)**
```css
.chatlist { background: var(--bg-subtle); border-right: 1px solid var(--border-default); }
.chatlist .item { display: grid; grid-template-columns: 50px 1fr auto; gap: 12px; padding: 10px 14px; border-bottom: 1px solid var(--border-default); cursor: pointer; }
.chatlist .item:hover { background: var(--bg-elevated); }
.chatlist .item .avatar { width: 50px; height: 50px; border-radius: 9999px; }
.chatlist .item .name { font: 500 16px/1.3 inherit; color: var(--text-primary); }
.chatlist .item .preview { font: 400 14px/1.3 inherit; color: var(--text-tertiary); margin-top: 3px; }
.chatlist .item .time { font: 400 12px/1 inherit; color: var(--text-tertiary); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 180ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 라임/네온 그린 사용 금지 — Brand Green #25D366 고정
2. 채팅 배경에 단색 흰색만 사용 금지 — 베이지(#EFE7DD) 또는 도트 패턴 유지
3. 보낸 말풍선에 파랑/보라 사용 금지 — iMessage가 아님, 라이트 민트(#D9FDD3) 고수
4. 헤더에 그라데이션 금지 — 단색 다크그린 또는 라이트 헤더
5. 말풍선 풀필 9999px 금지 — 7px Round + 꼬리 쪽 0이 시그니처

### ⑫ 시그니처 적용 예시 (WhatsApp 채팅 UI)

```html
<style>
  body { margin: 0; font-family: -apple-system, 'Helvetica Neue', 'Segoe UI', system-ui, sans-serif; background: #EFE7DD; color: #111B21; }
  .app { max-width: 800px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { background: #075E54; color: #fff; padding: 10px 14px; display: flex; align-items: center; gap: 12px; }
  .topbar .avatar { width: 38px; height: 38px; border-radius: 9999px; background: #25D366; display: grid; place-items: center; font: 900 16px/1 inherit; }
  .topbar h1 { margin: 0; font: 600 16px/1.2 inherit; }
  .topbar .sub { font: 400 12px/1 inherit; opacity: 0.9; }
  .topbar .right { margin-left: auto; display: flex; gap: 16px; font-size: 18px; }
  .chat { padding: 12px 14px; display: flex; flex-direction: column; gap: 6px;
          background-image: radial-gradient(circle at 20% 30%, rgba(0,0,0,0.03) 0, transparent 40%),
                            radial-gradient(circle at 70% 60%, rgba(0,0,0,0.03) 0, transparent 40%); }
  .day { align-self: center; background: #E1F2FB; color: #3B4A54; font: 400 12px/1 inherit; padding: 5px 10px; border-radius: 7px; box-shadow: 0 1px 0.5px rgba(11,20,26,0.13); margin: 6px 0; }
  .bubble { max-width: 80%; padding: 7px 10px 5px; border-radius: 7px; font: 400 14.5px/1.35 inherit; box-shadow: 0 1px 0.5px rgba(11,20,26,0.13); position: relative; }
  .in  { background: #fff; align-self: flex-start; border-top-left-radius: 0; }
  .out { background: #D9FDD3; align-self: flex-end; border-top-right-radius: 0; }
  .meta { font: 400 11px/1 inherit; color: #667781; text-align: right; margin-top: 2px; }
  .check { color: #34B7F1; margin-left: 2px; font-weight: 700; }
  .compose { background: #EFE7DD; padding: 7px 8px; display: flex; gap: 6px; align-items: center; }
  .compose .field { flex: 1; background: #fff; border-radius: 9999px; padding: 10px 16px; font: 400 15px/1.3 inherit; color: #111B21; border: 0; outline: 0; }
  .compose .field::placeholder { color: #667781; }
  .compose .send { width: 42px; height: 42px; border-radius: 9999px; background: #25D366; color: #fff; border: 0; font: 700 16px/1 inherit; display: grid; place-items: center; cursor: pointer; }
</style>

<div class="app">
  <header class="topbar">
    <div class="avatar">💬</div>
    <div>
      <h1>디자인 스터디</h1>
      <div class="sub">멤버 12명 · 마지막 활동 9분 전</div>
    </div>
    <div class="right"><span>📞</span><span>🎥</span><span>⋮</span></div>
  </header>
  <main class="chat">
    <div class="day">오늘</div>
    <div class="bubble in">오늘 모임 7시 맞죠?<div class="meta">19:02</div></div>
    <div class="bubble out">네! 그린 말풍선 그대로요 🙂<div class="meta">19:03 <span class="check">✓✓</span></div></div>
    <div class="bubble in">자료 미리 공유해드려요 📎<br/><strong>WhatsApp_DS_v2.pdf</strong> · 2.4MB<div class="meta">19:04</div></div>
    <div class="bubble out">감사합니다! 베이지 캔버스 좋아요<div class="meta">19:05 <span class="check">✓✓</span></div></div>
  </main>
  <div class="compose">
    <span style="padding:0 6px;color:#667781;font-size:20px;">😊</span>
    <input class="field" placeholder="메시지 입력" />
    <span style="padding:0 6px;color:#667781;font-size:20px;">📎</span>
    <button class="send">▶</button>
  </div>
</div>
```
