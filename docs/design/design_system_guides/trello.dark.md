---
brand: Trello
brand_ko: 트렐로
slug: trello
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - productivity

color_tone: cool
primary_color_hex: "#0079BF"
primary_color_name: "Trello Blue"
mood:
  - 단순함
  - 시각적
  - 칸반

font_category: sans-serif
font_primary: Charlie Display
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2011
last_major_revision: 2023
signature_keyword: "그라데이션 보드 배경 위 흰 카드의 칸반 원형"

card_tokens: |
  {
    "light": { "bg": "#0079BF", "surface": "#FFFFFF", "border": "#DFE1E6", "fg": "#172B4D", "fg_muted": "#5E6C84", "accent": "#0079BF" },
    "dark":  { "bg": "#1D2125", "surface": "#282E33", "border": "#22272B", "fg": "#B6C2CF", "fg_muted": "#7A869A", "accent": "#4C9AFF" }
  }

hero_html: |
  <div style="font-family:'Charlie Display','Charlie Text',-apple-system,'Pretendard',sans-serif;background:linear-gradient(135deg,#1C3A50 0%,#10293A 100%);color:#fff;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;background:rgba(0,0,0,0.30);">
      <span style="width:18px;height:18px;background:var(--card-surface);border-radius:3px;display:inline-block;position:relative;">
        <span style="position:absolute;left:3px;top:3px;width:4px;height:8px;background:var(--card-accent);border-radius:1px;"></span>
        <span style="position:absolute;left:9px;top:3px;width:4px;height:6px;background:var(--card-accent);border-radius:1px;"></span>
      </span>
      <strong style="font-size:14px;">Trello</strong>
      <span style="margin-left:auto;font-size:11px;opacity:0.85;">Sprint 24</span>
    </div>
    <div style="padding:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;align-items:start;">
      <div style="background:#1D2125;border-radius:6px;padding:8px;display:flex;flex-direction:column;gap:6px;">
        <div style="font-size:11px;font-weight:700;color:var(--card-fg);padding:0 4px;">To Do</div>
        <div style="background:var(--card-surface);border-radius:3px;padding:6px 8px;font-size:11px;color:var(--card-fg);box-shadow:0 1px 0 rgba(0,0,0,0.40);">Q3 회의</div>
        <div style="background:var(--card-surface);border-radius:3px;padding:6px 8px;font-size:11px;color:var(--card-fg);box-shadow:0 1px 0 rgba(0,0,0,0.40);">스펙 검토</div>
      </div>
      <div style="background:#1D2125;border-radius:6px;padding:8px;display:flex;flex-direction:column;gap:6px;">
        <div style="font-size:11px;font-weight:700;color:var(--card-fg);padding:0 4px;">Doing</div>
        <div style="background:var(--card-surface);border-radius:3px;padding:6px 8px;font-size:11px;color:var(--card-fg);box-shadow:0 1px 0 rgba(0,0,0,0.40);">
          <div style="display:flex;gap:3px;margin-bottom:3px;">
            <span style="width:24px;height:6px;background:#7BC86C;border-radius:3px;"></span>
            <span style="width:18px;height:6px;background:#E2B203;border-radius:3px;"></span>
          </div>
          디자인 v2
        </div>
      </div>
      <div style="background:#1D2125;border-radius:6px;padding:8px;display:flex;flex-direction:column;gap:6px;">
        <div style="font-size:11px;font-weight:700;color:var(--card-fg);padding:0 4px;">Done</div>
        <div style="background:var(--card-surface);border-radius:3px;padding:6px 8px;font-size:11px;color:var(--card-fg);box-shadow:0 1px 0 rgba(0,0,0,0.40);">
          <div style="display:flex;gap:3px;margin-bottom:3px;"><span style="width:30px;height:6px;background:#7BC86C;border-radius:3px;"></span></div>
          어시스트 셋업
        </div>
      </div>
    </div>
  </div>

sources:
  - https://trello.com/
  - https://help.trello.com/
  - https://atlassian.design/
---

### ① 브랜드 DNA
- **브랜드명**: Trello (Atlassian)
- **한 줄 정체성**: 보드/리스트/카드 3개 개념만으로 모든 협업을 표현하는 칸반의 원형
- **공식 디자인 철학**: "Visual collaboration that helps teams move work forward — simple, flexible, powerful"
- **시그니처 요소 1개**: 풀폭 컬러/이미지 보드 배경 + 흰 카드의 단순한 칸반 — 한눈에 파악 가능한 시각 워크플로우

### ② 톤 & 무드
- **핵심 키워드 3개**: 단순함, 시각적, 칸반
- **무드 설명**: 컬러풀한 보드 배경 위에 깔끔한 흰 카드가 늘어선다. 색은 라벨과 보드 배경에서만 강하게 등장한다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 카드 단위 정보
- **모서리 성향**: Soft (3~6px)
- **평면성**: Subtle — 1단계 그림자 + flat 카드

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Trello Blue (다크 톤에 맞춰 명도 상향) */
  --color-primary-50:  #082640;
  --color-primary-100: #09304F;
  --color-primary-200: #0B4266;
  --color-primary-300: #0C5A8C;
  --color-primary-400: #1D7AFC;
  --color-primary-500: #4C9AFF;  /* Trello Blue 기본 (다크용) */
  --color-primary-600: #66B0FF;  /* hover */
  --color-primary-700: #8FC7FF;
  --color-primary-800: #B8DCFF;
  --color-primary-900: #DEEBFF;

  /* Trello Label colors (시그니처) - 다크 보드 위 채도 상향 */
  --label-green:  #7BC86C;
  --label-yellow: #E2B203;
  --label-orange: #FAA53D;
  --label-red:    #F87168;
  --label-purple: #CD8DE5;
  --label-blue:   #4C9AFF;
  --label-sky:    #6CC3E0;
  --label-lime:   #94C748;
  --label-pink:   #F797D2;
  --label-black:  #8C9BAB;

  /* Secondary */
  --color-secondary-500: #CD8DE5;

  /* Neutral - Atlassian dark (반전 램프) */
  --color-neutral-0:    #0E1114;
  --color-neutral-50:   #161A1D;
  --color-neutral-100:  #1D2125;   /* list bg */
  --color-neutral-200:  #22272B;
  --color-neutral-300:  #2C333A;
  --color-neutral-500:  #596773;
  --color-neutral-700:  #8C9BAB;
  --color-neutral-800:  #9FADBC;
  --color-neutral-900:  #B6C2CF;
  --color-neutral-1000: #DEE4EA;

  /* Semantic - 다크 위 가독성 보정 */
  --color-success-bg: #1C3329;
  --color-success-fg: #7EE2B8;
  --color-warning-bg: #332A1A;
  --color-warning-fg: #F5CD47;
  --color-error-bg:   #42221F;
  --color-error-fg:   #FD9891;
  --color-info-bg:    #09304F;
  --color-info-fg:    #85B8FF;

  /* Surface */
  --bg-base:     #1D2125;
  --bg-subtle:   #161A1D;
  --bg-elevated: #282E33;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #B6C2CF;
  --text-secondary:  #9FADBC;
  --text-tertiary:   #8C9BAB;
  --text-on-primary: #1D2125;
  --text-disabled:   #596773;

  /* Border */
  --border-default: #38414A;
  --border-subtle:  #2C333A;
  --border-strong:  #596773;
  --border-focus:   #4C9AFF;
}

[data-theme="light"] {
  /* Primary - Trello Blue */
  --color-primary-50:  #DEEBFF;
  --color-primary-100: #B3D4FF;
  --color-primary-200: #4C9AFF;
  --color-primary-300: #2684FF;
  --color-primary-400: #0079BF;
  --color-primary-500: #0079BF;  /* Trello Blue 기본 */
  --color-primary-600: #026AA7;  /* hover */
  --color-primary-700: #055A8C;
  --color-primary-800: #034368;
  --color-primary-900: #022D44;

  /* Trello Label colors (시그니처) */
  --label-green:  #61BD4F;
  --label-yellow: #F2D600;
  --label-orange: #FF9F1A;
  --label-red:    #EB5A46;
  --label-purple: #C377E0;
  --label-blue:   #0079BF;
  --label-sky:    #00C2E0;
  --label-lime:   #51E898;
  --label-pink:   #FF78CB;
  --label-black:  #344563;

  /* Secondary */
  --color-secondary-500: #C377E0;

  /* Neutral - Atlassian-derived */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F5F7;
  --color-neutral-100:  #EBECF0;   /* list bg */
  --color-neutral-200:  #DFE1E6;
  --color-neutral-300:  #C1C7D0;
  --color-neutral-500:  #7A869A;
  --color-neutral-700:  #5E6C84;
  --color-neutral-800:  #42526E;
  --color-neutral-900:  #172B4D;
  --color-neutral-1000: #091E42;

  /* Semantic */
  --color-success-bg: #E3FCEF;
  --color-success-fg: #36B37E;
  --color-warning-bg: #FFFAE6;
  --color-warning-fg: #FF991F;
  --color-error-bg:   #FFEBE6;
  --color-error-fg:   #FF5630;
  --color-info-bg:    #DEEBFF;
  --color-info-fg:    #0079BF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F4F5F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(9,30,66,0.50);

  /* Text */
  --text-primary:    #172B4D;
  --text-secondary:  #5E6C84;
  --text-tertiary:   #7A869A;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A5ADBA;

  /* Border */
  --border-default: #DFE1E6;
  --border-subtle:  #EBECF0;
  --border-strong:  #C1C7D0;
  --border-focus:   #4C9AFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Charlie Display / Charlie Text (Atlassian Trello 통합 후) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 40px / 700 / 1.1 / -0.01em
  - H1: 28px / 700 / 1.2 / -0.005em
  - H2: 22px / 600 / 1.27 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 700 / 1.27 / 0.04em

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
- **Container**: 보드는 fluid (가로 스크롤), 좌우 패딩 12px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;     /* 카드 (Trello 기본) */
--radius-md: 6px;     /* 리스트 */
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(0,0,0,0.40);
--shadow-md: 0 4px 8px -2px rgba(0,0,0,0.48), 0 0 1px rgba(0,0,0,0.50);
--shadow-lg: 0 8px 16px rgba(0,0,0,0.45);
--shadow-xl: 0 12px 24px rgba(0,0,0,0.55);
```

### ⑧ Iconography
- **스타일**: Outline (Atlassian Iconography)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: @atlaskit/icon / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 'Charlie Display', -apple-system, 'Pretendard', sans-serif;
  border-radius: var(--radius-sm);
  padding: 0 12px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: rgba(255,255,255,0.12); color: var(--text-primary); }   /* 보드 위 */
.btn-secondary:hover { background: rgba(255,255,255,0.20); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #1D2125; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  padding: 6px 8px;
  font-size: 14px;
}
.input:hover { background: var(--bg-subtle); }
.input:focus { outline: none; background: var(--bg-base); border-color: var(--border-focus); }
```

**Card** (Trello Card)
```css
.t-card { background: var(--bg-elevated); border-radius: var(--radius-sm); padding: 6px 8px 8px; box-shadow: var(--shadow-sm); cursor: pointer; }
.t-card:hover { background: var(--bg-subtle); }
.t-card .labels { display: flex; gap: 4px; margin-bottom: 4px; }
.t-card .labels span { height: 8px; min-width: 32px; border-radius: 4px; }
.t-card .title { font-size: 14px; line-height: 1.43; color: var(--text-primary); }
.t-card .icons { display: flex; gap: 8px; margin-top: 6px; font-size: 11px; color: var(--text-secondary); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge / Label**
```css
.label { padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 700; line-height: 14px; color: #1D2125; display: inline-flex; align-items: center; }
.label-solid   { background: var(--color-primary-500); color: #1D2125; }
.label-subtle  { background: var(--color-primary-50); color: var(--color-primary-900); }
.label-outline { border: 1px solid var(--border-default); color: var(--text-primary); background: transparent; }
.label-green  { background: var(--label-green); }
.label-yellow { background: var(--label-yellow); color: #1D2125; }
.label-red    { background: var(--label-red); }
```

**Navigation (Board header)**
```css
.board-header { padding: 8px 12px; background: rgba(0,0,0,0.32); color: #fff; display: flex; align-items: center; gap: 12px; }
.board-header h1 { font-size: 18px; font-weight: 700; margin: 0; color: #fff; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.15, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.2, 0, 0, 1);
```

### ⑪ Anti-patterns
1. 보드 배경에 너무 채도 높은 사진 사용 금지 — 카드 가독성 저하
2. 라벨 색을 같은 색조로 4개 이상 동시 사용 금지 — 의미 분류 흐림
3. 카드 라운드를 12px 이상으로 변경 금지 — Trello 시그니처는 3px sharp
4. 리스트(컬럼)의 background를 흰색으로 변경 금지 — gray bg가 카드 분리 기준
5. 카드 내부 가로 폭을 보드 컬럼 폭(272px) 이상으로 늘리지 말 것

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: 'Charlie Display', -apple-system, 'Pretendard', sans-serif; color: var(--text-primary); background: linear-gradient(135deg, #1C3A50, #10293A); min-height: 100vh; }
  .board-header { padding: 10px 16px; background: rgba(0,0,0,0.32); color: #fff; display: flex; align-items: center; gap: 12px; }
  .board-header h1 { font-size: 18px; font-weight: 700; margin: 0; }
  .board-header .members { display: flex; gap: -4px; margin-left: auto; }
  .board-header .members .avatar { width: 28px; height: 28px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.4); }
  .board { padding: 16px; display: flex; gap: 8px; align-items: flex-start; overflow-x: auto; }
  .list { width: 272px; background: #1D2125; border-radius: 6px; padding: 6px; flex-shrink: 0; }
  .list h3 { margin: 4px 8px 8px; font-size: 14px; font-weight: 700; color: #B6C2CF; }
  .t-card { background: #282E33; border-radius: 3px; padding: 6px 8px 8px; box-shadow: 0 1px 0 rgba(0,0,0,0.40); margin-bottom: 8px; cursor: pointer; }
  .t-card:hover { background: #2C333A; }
  .t-card .labels { display: flex; gap: 4px; margin-bottom: 4px; }
  .t-card .labels span { height: 8px; min-width: 40px; border-radius: 4px; }
  .t-card .title { font-size: 14px; line-height: 1.43; color: #B6C2CF; }
  .t-card .icons { display: flex; gap: 8px; margin-top: 6px; font-size: 11px; color: #9FADBC; }
  .add-card { padding: 6px 8px; color: #9FADBC; font-size: 13px; cursor: pointer; }
  .add-card:hover { background: #2C333A; border-radius: 3px; color: #B6C2CF; }
</style>

<header class="board-header">
  <strong style="font-size:14px;">📋</strong>
  <h1>Sprint 24 · Engineering</h1>
  <span style="background:rgba(255,255,255,0.14); padding:2px 8px; border-radius:3px; font-size:11px;">⭐ Star</span>
  <div class="members">
    <span class="avatar" style="background:linear-gradient(135deg,#F06A6A,#FBC850);"></span>
    <span class="avatar" style="background:linear-gradient(135deg,#7B68EE,#FD71AF);"></span>
    <span class="avatar" style="background:linear-gradient(135deg,#36B37E,#4C9AFF);"></span>
  </div>
</header>

<div class="board">
  <div class="list">
    <h3>To Do</h3>
    <div class="t-card"><div class="labels"><span style="background:#E2B203"></span></div><div class="title">Q3 로드맵 회의 준비</div><div class="icons"><span>📅 5/15</span><span>💬 2</span></div></div>
    <div class="t-card"><div class="labels"><span style="background:#4C9AFF"></span></div><div class="title">스펙 문서 검토</div><div class="icons"><span>📎 1</span></div></div>
    <div class="add-card">+ 카드 추가</div>
  </div>
  <div class="list">
    <h3>Doing</h3>
    <div class="t-card"><div class="labels"><span style="background:#7BC86C"></span><span style="background:#E2B203"></span></div><div class="title">디자인 시스템 v2 정리</div><div class="icons"><span>📅 5/12</span><span>📎 4</span><span>💬 8</span></div></div>
    <div class="t-card"><div class="labels"><span style="background:#F87168"></span></div><div class="title">Onboarding 흐름 개선</div><div class="icons"><span>📅 5/9</span></div></div>
    <div class="add-card">+ 카드 추가</div>
  </div>
  <div class="list">
    <h3>Done</h3>
    <div class="t-card"><div class="labels"><span style="background:#7BC86C"></span></div><div class="title">어시스트 봇 셋업</div><div class="icons"><span>✓ 5/3</span></div></div>
    <div class="add-card">+ 카드 추가</div>
  </div>
  <div class="list" style="background:rgba(255,255,255,0.08); color:#fff;">
    <div class="add-card" style="color:#fff;">+ 다른 리스트 추가</div>
  </div>
</div>
```
