---
brand: Threads
brand_ko: 스레드
slug: threads
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - social
  - consumer

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Threads Black"
mood:
  - 절제
  - 텍스트
  - 차분

font_category: sans-serif
font_primary: SF Pro Display
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2023
last_major_revision: 2025
signature_keyword: "흑백 톤 + Instagram 계정 연동 + 텍스트 우선 피드"

hero_html: |
  <div style="font-family:'SF Pro Display','Helvetica Neue',-apple-system,sans-serif;background:#000;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#000;padding:14px;display:flex;align-items:center;gap:10px;justify-content:center;border-bottom:1px solid #1F1F1F;">
      <div style="width:24px;height:24px;background:#fff;border-radius:6px;display:grid;place-items:center;color:#000;font:900 16px/1 inherit;letter-spacing:-0.05em;">@</div>
      <strong style="font-size:14px;font-weight:700;letter-spacing:-0.015em;">Threads</strong>
    </div>
    <div style="padding:8px 14px;display:flex;flex-direction:column;gap:0;">
      <div style="padding:14px 0;border-bottom:1px solid #1F1F1F;">
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#F09433,#DC2743,#BC1888);border-radius:9999px;flex-shrink:0;"></div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font:600 14px/1.3 inherit;">minji.daily</span>
              <span style="font:500 12px/1.3 inherit;color:#A8A8A8;">10분</span>
            </div>
            <div style="font:400 14px/1.5 inherit;margin-top:2px;color:#F5F5F5;">새 책 한 권 펴는 일요일 오후. 아직 페이지를 넘기지 않았는데, 시간만 흐른다. 그래도 좋다.</div>
            <div style="display:flex;align-items:center;gap:18px;margin-top:10px;color:#A8A8A8;font:500 12px/1.4 inherit;">
              <span>♡ 24</span><span>💬 3</span><span>↻</span><span>↗</span>
            </div>
          </div>
        </div>
      </div>
      <div style="padding:14px 0;border-bottom:1px solid #1F1F1F;">
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <div style="width:36px;height:36px;background:#444;border-radius:9999px;flex-shrink:0;"></div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font:600 14px/1.3 inherit;">designreader</span>
              <span style="font:500 12px/1.3 inherit;color:#A8A8A8;">1시간</span>
            </div>
            <div style="font:400 14px/1.5 inherit;margin-top:2px;color:#F5F5F5;">디자인 시스템은 결국 합의의 결과물이다. 토큰의 정확성보다 팀의 동의가 더 어렵다.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.threads.net/
  - https://about.meta.com/brand/resources/threads/
---

### ① 브랜드 DNA
- **브랜드명**: Threads (Meta — Instagram 자매 앱)
- **한 줄 정체성**: Instagram 계정과 연동되는 텍스트 중심 SNS — Twitter/X의 대안
- **공식 디자인 철학**: "Where conversations happen" — 단순함과 텍스트 우선
- **시그니처 요소 1개**: 거의 모노톤(검정·흰색)에 가까운 절제된 톤 + Instagram의 그라데이션 아바타. 텍스트 본문이 시각 위계의 절대 중심

### ② 톤 & 무드
- **핵심 키워드 3개**: 절제, 텍스트, 차분
- **무드 설명**: 다크 기본(#000), 보더는 가는 1px #1F1F1F, 색상은 거의 없음. 흰 텍스트 본문이 시그니처. Instagram의 화려함과 정반대.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 포스트 패딩 14px, 본문 line-height 1.5
- **모서리 성향**: Round (8px 보더 / 풀필 아바타)
- **평면성**: Flat — 그림자 없음, 1px 보더만

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Threads Black/White */
  --color-primary-50:  #F5F5F5;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #C8C8C8;
  --color-primary-300: #A8A8A8;
  --color-primary-400: #6E6E6E;
  --color-primary-500: #000000;   /* Threads Black */
  --color-primary-600: #000000;
  --color-primary-700: #000000;
  --color-primary-800: #000000;
  --color-primary-900: #000000;

  /* Secondary - Instagram gradient (아바타용) */
  --color-grad-1: #F09433;
  --color-grad-2: #DC2743;
  --color-grad-3: #BC1888;

  /* Neutral - Dark-first */
  --color-neutral-0:    #000000;       /* page bg */
  --color-neutral-50:   #0A0A0A;
  --color-neutral-100:  #101010;
  --color-neutral-200:  #1F1F1F;       /* border */
  --color-neutral-300:  #333333;
  --color-neutral-500:  #6E6E6E;
  --color-neutral-700:  #A8A8A8;       /* text tertiary */
  --color-neutral-800:  #D1D1D1;
  --color-neutral-900:  #F5F5F5;       /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 매우 절제 */
  --color-success-fg: #4ADE80;
  --color-warning-fg: #FACC15;
  --color-error-fg:   #FA383E;
  --color-info-fg:    #5BC9F4;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #0A0A0A;
  --bg-elevated: #101010;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #F5F5F5;
  --text-secondary:  #D1D1D1;
  --text-tertiary:   #A8A8A8;
  --text-on-primary: #000000;
  --text-disabled:   #6E6E6E;

  /* Border */
  --border-default: #1F1F1F;
  --border-subtle:  #101010;
  --border-strong:  #333333;
  --border-focus:   #6E6E6E;
}

[data-theme="light"] {
  --bg-base: #FFFFFF;
  --bg-subtle: #F5F5F5;
  --bg-elevated: #FFFFFF;
  --text-primary: #000000;
  --text-secondary: #4A4A4A;
  --text-tertiary: #6E6E6E;
  --border-default: #E5E5E5;
  --color-primary-500: #000000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **SF Pro Display / Text** (iOS) / **Roboto** (Android)
  - 한글: **Pretendard** / Apple SD Gothic Neo (iOS)
- **위계**:
  - Display: 28px / 700 / 1.25 / -0.025em
  - H1: 22px / 700 / 1.3 / -0.02em
  - H2: 17px / 700 / 1.35 / -0.015em
  - H3 (사용자 이름): 14px / 600 / 1.3 / -0.005em
  - Body Large: 16px / 400 / 1.5 / -0.005em
  - Body (포스트 본문): 14px / 400 / 1.5 / 0
  - Body Small (시간/메타): 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.4 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 14px;
  --space-xl: 20px;
  --space-2xl: 32px;
  --space-3xl: 56px;
  ```
- **Container**: max-width 480px (모바일), 640px (피드 최대), 좌우 패딩 14px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;     /* 이미지 첨부 */
--radius-xl: 22px;
--radius-full: 9999px; /* 아바타, 버튼 */
```

### ⑦ Shadow / Elevation
거의 사용하지 않음. 1px 보더가 분리 역할.
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 16px rgba(0,0,0,0.55);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.70);
```

### ⑧ Iconography
- **스타일**: Threads UI Icons — Outline (얇은 선)
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor Light / SF Symbols

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 'SF Pro Display', Roboto, Pretendard, sans-serif; letter-spacing: -0.005em;
       border-radius: 9999px; padding: 10px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
.btn-primary { background: var(--text-primary); color: var(--bg-base); }       /* 흰→검정 또는 검정→흰 */
.btn-primary:hover { opacity: 0.85; }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--text-tertiary); }
.btn-follow { background: var(--text-primary); color: var(--bg-base); padding: 6px 14px; font: 600 12px/1 inherit; }
.btn-following { background: transparent; color: var(--text-primary); border: 1px solid var(--border-strong); padding: 6px 14px; font: 600 12px/1 inherit; }
```

**Input**
```css
.compose { background: var(--bg-base); border-top: 1px solid var(--border-default); padding: 14px; display: grid; grid-template-columns: 36px 1fr; gap: 10px; align-items: flex-start; }
.compose .avatar { width: 36px; height: 36px; border-radius: 9999px; background: var(--border-default); }
.compose .area { display: flex; flex-direction: column; gap: 8px; }
.compose textarea { all: unset; font: 400 16px/1.55 inherit; color: var(--text-primary); min-height: 24px; }
.compose textarea::placeholder { color: var(--text-tertiary); }
.compose .actions { display: flex; align-items: center; gap: 12px; color: var(--text-tertiary); font: 500 18px/1 inherit; }
.compose .actions .post { margin-left: auto; background: var(--text-primary); color: var(--bg-base); padding: 7px 14px; border-radius: 9999px; font: 700 13px/1 'SF Pro', sans-serif; cursor: pointer; }
```

**Card (Post)**
```css
.post { padding: 14px 0; border-bottom: 1px solid var(--border-default); display: grid; grid-template-columns: 36px 1fr; gap: 10px; align-items: flex-start; }
.post .avatar { width: 36px; height: 36px; border-radius: 9999px; background: var(--bg-elevated); }
.post .avatar.ig { background: linear-gradient(135deg, var(--color-grad-1), var(--color-grad-2), var(--color-grad-3)); }
.post .body .head { display: flex; align-items: center; gap: 6px; }
.post .body .name { font: 600 14px/1.3 inherit; color: var(--text-primary); }
.post .body .time { font: 500 12px/1.3 inherit; color: var(--text-tertiary); }
.post .body .more { margin-left: auto; color: var(--text-tertiary); }
.post .body .text { font: 400 14px/1.55 inherit; color: var(--text-primary); margin-top: 2px; }
.post .body .media { margin-top: 8px; border-radius: var(--radius-lg); aspect-ratio: 16/9; background: var(--bg-elevated); overflow: hidden; }
.post .body .actions { display: flex; align-items: center; gap: 18px; margin-top: 10px; color: var(--text-tertiary); font: 500 13px/1 inherit; }
.post .body .actions .ic { font: 400 18px/1 inherit; }
```

**Badge / Tag**
```css
.tag { padding: 2px 8px; border-radius: 9999px; font: 600 11px/1.5 inherit; }
.tag-verified { color: var(--color-info-fg); background: transparent; }
.tag-original { background: var(--text-primary); color: var(--bg-base); }
```

**Navigation (Top + Bottom)**
```css
.topbar { padding: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; border-bottom: 1px solid var(--border-default); position: sticky; top: 0; background: var(--bg-base); z-index: 10; }
.topbar .logo { width: 26px; height: 26px; background: var(--text-primary); border-radius: 7px; color: var(--bg-base); display: grid; place-items: center; font: 900 16px/1 inherit; letter-spacing: -0.05em; }
.tabbar { background: var(--bg-base); border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 8px 0; position: sticky; bottom: 0; }
.tabbar .item { padding: 6px; text-align: center; color: var(--text-tertiary); font: 700 16px/1 inherit; }
.tabbar .item.active { color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-heart: cubic-bezier(0.34, 1.56, 0.64, 1);     /* 좋아요 팝 */
```

### ⑪ Anti-patterns
1. 강조 색을 단일 컬러로 추가 금지 — 모노톤이 Threads 정체성 (좋아요만 빨강)
2. 카드 보더 색 진하게(#333 이상) 변경 금지 — 가는 #1F1F1F가 시그니처
3. 본문에 그림자 추가 금지 — Flat 유지
4. 포스트 카드를 박스 형태로 둘러싸지 말 것 — 보더 1줄만 사용 (블록 스타일)
5. Twitter/X처럼 좋아요 빨간 하트 default 사용 금지 — 빈 하트(♡) 기본, 클릭 시만 채워짐

### ⑫ 시그니처 적용 예시 (Threads 피드)

```html
<style>
  body { margin: 0; font-family: 'SF Pro Display', 'Helvetica Neue', -apple-system, Roboto, Pretendard, sans-serif; letter-spacing: -0.01em; color: #F5F5F5; background: #000; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 14px; display: flex; align-items: center; justify-content: center; gap: 10px; border-bottom: 1px solid #1F1F1F; position: sticky; top: 0; background: #000; z-index: 10; }
  .topbar .logo { width: 28px; height: 28px; background: #fff; border-radius: 7px; color: #000; display: grid; place-items: center; font: 900 18px/1 inherit; letter-spacing: -0.05em; }
  .topbar h1 { margin: 0; font: 700 16px/1.3 inherit; letter-spacing: -0.015em; }
  .feed { padding: 0 14px; }
  .post { padding: 16px 0; border-bottom: 1px solid #1F1F1F; display: grid; grid-template-columns: 36px 1fr; gap: 10px; align-items: flex-start; }
  .post .avatar { width: 36px; height: 36px; border-radius: 9999px; }
  .post .avatar.ig { background: linear-gradient(135deg, #F09433, #DC2743, #BC1888); }
  .post .avatar.bw { background: #444; }
  .post .avatar.pp { background: linear-gradient(135deg, #5B21B6, #1E1B4B); }
  .post .head { display: flex; align-items: center; gap: 6px; }
  .post .head .name { font: 600 14px/1.3 inherit; }
  .post .head .time { font: 500 12px/1.3 inherit; color: #A8A8A8; }
  .post .head .more { margin-left: auto; font-size: 16px; color: #A8A8A8; }
  .post .text { font: 400 14px/1.55 inherit; margin-top: 2px; color: #F5F5F5; }
  .post .actions { display: flex; align-items: center; gap: 18px; margin-top: 10px; color: #A8A8A8; font: 500 13px/1 inherit; }
  .post .actions .ic { font-size: 18px; }
  .compose { padding: 12px 14px 14px; display: grid; grid-template-columns: 32px 1fr; gap: 10px; border-top: 1px solid #1F1F1F; align-items: center; }
  .compose .av { width: 32px; height: 32px; border-radius: 9999px; background: linear-gradient(135deg, #F09433, #BC1888); }
  .compose .box { display: flex; align-items: center; gap: 10px; }
  .compose .box .ph { flex: 1; font: 500 14px/1.4 inherit; color: #6E6E6E; }
  .compose .box .post-btn { background: #fff; color: #000; padding: 7px 14px; border-radius: 9999px; font: 700 13px/1 inherit; border: 0; cursor: pointer; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo">@</div>
    <h1>Threads</h1>
  </header>
  <main class="feed">
    <article class="post">
      <div class="avatar ig"></div>
      <div>
        <div class="head"><span class="name">minji.daily</span><span class="time">· 10분</span><span class="more">⋯</span></div>
        <div class="text">새 책 한 권 펴는 일요일 오후. 아직 페이지를 넘기지 않았는데, 시간만 흐른다. 그래도 좋다.</div>
        <div class="actions">
          <span><span class="ic">♡</span> 24</span>
          <span><span class="ic">💬</span> 3</span>
          <span class="ic">↻</span>
          <span class="ic">↗</span>
        </div>
      </div>
    </article>
    <article class="post">
      <div class="avatar bw"></div>
      <div>
        <div class="head"><span class="name">designreader</span><span class="time">· 1시간</span><span class="more">⋯</span></div>
        <div class="text">디자인 시스템은 결국 합의의 결과물이다. 토큰의 정확성보다 팀의 동의가 더 어렵다.</div>
        <div class="actions">
          <span><span class="ic">♡</span> 142</span>
          <span><span class="ic">💬</span> 22</span>
          <span class="ic">↻</span>
          <span class="ic">↗</span>
        </div>
      </div>
    </article>
    <article class="post">
      <div class="avatar pp"></div>
      <div>
        <div class="head"><span class="name">latenightcoder</span><span class="time">· 3시간</span><span class="more">⋯</span></div>
        <div class="text">React Server Components, 6개월 써보고 든 생각: 학습 곡선보다 빌드 도구 갈아치우는 게 더 힘들다.</div>
        <div class="actions">
          <span><span class="ic">♡</span> 88</span>
          <span><span class="ic">💬</span> 14</span>
          <span class="ic">↻</span>
          <span class="ic">↗</span>
        </div>
      </div>
    </article>
  </main>
  <footer class="compose">
    <div class="av"></div>
    <div class="box">
      <div class="ph">새 스레드 시작...</div>
      <button class="post-btn">게시</button>
    </div>
  </footer>
</div>
```
