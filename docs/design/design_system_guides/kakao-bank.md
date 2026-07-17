---
brand: KakaoBank
brand_ko: 카카오뱅크
slug: kakao-bank
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - fintech
  - consumer

color_tone: warm
primary_color_hex: "#FFCD00"
primary_color_name: "Kakao Yellow"
mood:
  - 친근함
  - 단순
  - 카카오 패밀리

font_category: sans-serif
font_primary: KakaoBank
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2024
signature_keyword: "Kakao Yellow와 검정의 단순한 인터넷 은행 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F5F5", "border": "#F0F0F0", "fg": "#191919", "fg_muted": "#888888", "accent": "#FFCD00" },
    "dark":  { "bg": "#191919", "surface": "#2D2D2D", "border": "#383838", "fg": "#FFFFFF", "fg_muted": "#A0A0A0", "accent": "#FFCD00" }
  }

hero_html: |
  <div style="font-family:'KakaoBank',Pretendard,-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-accent);padding:14px 18px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:800;color:#191919;letter-spacing:-0.02em;">카카오뱅크</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:#191919;border-radius:18px;padding:18px;color:#fff;">
        <div style="font-size:11px;color:#FFCD00;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">카카오뱅크 통장</div>
        <div style="font-size:24px;font-weight:800;letter-spacing:-0.025em;margin-top:8px;">8,420,000원</div>
        <div style="font-size:11px;color:#A0A0A0;margin-top:4px;font-family:ui-monospace,monospace;">3333-01-1234567</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px;">
        <button style="background:var(--card-accent);color:#191919;border:0;border-radius:14px;padding:14px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;">이체</button>
        <button style="background:var(--card-surface);color:var(--card-fg);border:0;border-radius:14px;padding:14px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;">받기</button>
      </div>
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:14px;padding:14px;margin-top:6px;">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:700;">
          <span>준이</span><strong style="color:var(--card-fg);">- 24,000원</strong>
        </div>
        <div style="font-size:11px;color:var(--card-fg-muted);margin-top:2px;">5월 8일 · 점심</div>
      </div>
    </div>
  </div>

sources:
  - https://www.kakaobank.com/
  - https://design.kakao.com/
---

### ① 브랜드 DNA
- **브랜드명**: KakaoBank (카카오뱅크)
- **한 줄 정체성**: 한국 1세대 인터넷 전문 은행 — 카카오 패밀리의 친근한 모바일 뱅킹
- **공식 디자인 철학**: "쉽고, 즐겁고, 친근한 — 모바일 뱅킹의 가장 단순한 시작점"
- **시그니처 요소 1개**: Kakao Yellow(#FFCD00) + 검정 본문 + 둥근 라운드 통장 카드의 친근 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 단순, 카카오 패밀리
- **무드 설명**: 노란 헤더와 검정 본문의 단호한 대비. 통장이 검정 카드 형태로 시각화되며, 키 액션은 노란 button.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~18px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Kakao Yellow */
  --color-primary-50:  #FFF7CC;
  --color-primary-100: #FFEC85;
  --color-primary-200: #FFE254;
  --color-primary-300: #FFDB30;
  --color-primary-400: #FFD20E;
  --color-primary-500: #FFCD00;  /* Kakao Yellow */
  --color-primary-600: #E5B900;
  --color-primary-700: #B89400;
  --color-primary-800: #8C7000;
  --color-primary-900: #5C4900;

  /* Secondary - Kakao Black */
  --color-secondary-500: #191919;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #F0F0F0;
  --color-neutral-300:  #D9D9D9;
  --color-neutral-500:  #A0A0A0;
  --color-neutral-700:  #888888;
  --color-neutral-800:  #555555;
  --color-neutral-900:  #191919;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF7CC;
  --color-warning-fg: #B89400;
  --color-error-bg:   #FFE5E5;
  --color-error-fg:   #FF3838;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,25,25,0.50);

  /* Text */
  --text-primary:    #191919;
  --text-secondary:  #555555;
  --text-tertiary:   #888888;
  --text-on-primary: #191919;       /* yellow 위에는 black */
  --text-disabled:   #D9D9D9;

  /* Border */
  --border-default: #F0F0F0;
  --border-subtle:  #FAFAFA;
  --border-strong:  #D9D9D9;
  --border-focus:   #FFCD00;
}

[data-theme="dark"] {
  --bg-base: #191919;
  --bg-subtle: #2D2D2D;
  --bg-elevated: #383838;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: KakaoBank (자체) / Pretendard (OFL 폴백)
  - 영문: -apple-system / 폴백 SF Pro
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.025em
  - H1: 28px / 800 / 1.15 / -0.02em
  - H2: 20px / 700 / 1.27 / -0.015em
  - H3: 16px / 700 / 1.3 / -0.01em
  - Body Large: 16px / 500 / 1.5 / -0.01em
  - Body: 14px / 500 / 1.5 / -0.005em
  - Body Small: 13px / 500 / 1.43 / 0
  - Caption: 11px / 700 / 1.27 / 0

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
- **Container**: max-width 480px (모바일 우선), 좌우 패딩 20px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(255,205,0,0.30);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (KakaoBank 자체)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 800 16px/1 'KakaoBank', Pretendard, -apple-system, sans-serif;
  letter-spacing: -0.01em;
  border-radius: var(--radius-md);
  padding: 14px 18px;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 0; border-radius: var(--radius-md); padding: 14px 16px; font-size: 16px; font-family: inherit; }
.input:focus { outline: 2px solid var(--border-focus); outline-offset: -2px; }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 14px 18px; background: var(--color-primary-500); display: flex; align-items: center; gap: 12px; }
.topnav .brand { font-weight: 800; font-size: 18px; color: var(--color-secondary-500); letter-spacing: -0.02em; }
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
1. Yellow 위 흰 텍스트 사용 금지 — 검정 사용
2. brand yellow를 destructive 액션에 사용 금지
3. 본문 폰트 weight 400 이하 사용 금지 — 500+ Bold가 한국어 가독성 핵심
4. 카카오 캐릭터(라이언/어피치/제이지)를 임의 색 변경 금지
5. 통장 카드를 노랑 배경으로 변경 금지 — 검정이 시그니처

### ⑫ 시그니처 적용 예시 (Mobile home)

```html
<style>
  body { margin: 0; font-family: 'KakaoBank', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #191919; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #FFCD00; padding: 16px 20px; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-weight: 800; font-size: 22px; color: #191919; letter-spacing: -0.025em; }
  .topbar .icons { margin-left: auto; font-size: 20px; }
  .home { padding: 20px; display: flex; flex-direction: column; gap: 12px; }
  .account-card { background: #191919; color: #fff; border-radius: 18px; padding: 22px; }
  .account-card .label { font-size: 12px; color: #FFCD00; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
  .account-card .amount { font-size: 32px; font-weight: 800; letter-spacing: -0.025em; margin-top: 12px; }
  .account-card .num { font-size: 13px; color: #A0A0A0; margin-top: 6px; font-family: ui-monospace, monospace; }
  .account-card .actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 18px; }
  .account-card button { background: #FFCD00; color: #191919; border: 0; border-radius: 14px; padding: 14px; font-size: 15px; font-weight: 800; cursor: pointer; font-family: inherit; }
  .account-card button.alt { background: rgba(255,255,255,0.10); color: #fff; }
  .recent { background: #fff; border: 1px solid #F0F0F0; border-radius: 18px; padding: 4px 0; }
  .recent h3 { margin: 16px 18px 8px; font-size: 14px; font-weight: 700; }
  .row { display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; padding: 14px 18px; border-bottom: 1px solid #FAFAFA; align-items: center; }
  .row:last-child { border-bottom: 0; }
  .row .ic { width: 36px; height: 36px; border-radius: 50%; background: #FFF7CC; color: #191919; display: grid; place-items: center; font-weight: 800; font-size: 13px; }
  .row .who { font-size: 14px; font-weight: 700; }
  .row .when { font-size: 11px; color: #888; margin-top: 2px; }
  .row .amt { font-size: 14px; font-weight: 800; }
  .row .amt.in { color: #1AAD5C; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">카카오뱅크</span>
    <span class="icons" style="margin-left:auto;">🔔 ⚙</span>
  </header>
  <main class="home">
    <div class="account-card">
      <div class="label">카카오뱅크 통장</div>
      <div class="amount">8,420,000원</div>
      <div class="num">3333-01-1234567</div>
      <div class="actions">
        <button>이체</button>
        <button class="alt">받기</button>
      </div>
    </div>
    <section class="recent">
      <h3>최근 거래</h3>
      <div class="row">
        <div class="ic">준</div>
        <div><div class="who">준이</div><div class="when">5월 8일 · 점심</div></div>
        <div class="amt">- 24,000원</div>
      </div>
      <div class="row">
        <div class="ic">월</div>
        <div><div class="who">월급</div><div class="when">5월 5일 · Acme</div></div>
        <div class="amt in">+ 2,400,000원</div>
      </div>
    </section>
  </main>
</div>
```
