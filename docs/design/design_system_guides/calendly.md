---
brand: Calendly
brand_ko: 캘린들리
slug: calendly
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - productivity

color_tone: cool
primary_color_hex: "#006BFF"
primary_color_name: "Calendly Blue"
mood:
  - 단순함
  - 신뢰
  - 캘린더 우선

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2013
last_major_revision: 2023
signature_keyword: "월별 그리드 캘린더와 단일 Blue 액션의 미팅 스케줄링 표준"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#FFFFFF;color:#0F172A;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #E2E8F0;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="width:20px;height:20px;background:#006BFF;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:11px;font-weight:700;">C</span>
      <strong style="font-size:13px;">Calendly</strong>
      <span style="margin-left:auto;font-size:11px;color:#64748B;">30 min meeting</span>
    </div>
    <div style="padding:14px;display:grid;grid-template-columns:1fr 100px;gap:10px;">
      <div>
        <div style="font-size:11px;font-weight:600;color:#64748B;margin-bottom:6px;">May 2026</div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:9px;color:#64748B;">
          <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-top:4px;text-align:center;font-size:11px;">
          <div style="padding:5px 0;color:#94A3B8;">26</div><div style="padding:5px 0;color:#94A3B8;">27</div><div style="padding:5px 0;color:#94A3B8;">28</div>
          <div style="padding:5px 0;color:#94A3B8;">29</div><div style="padding:5px 0;color:#94A3B8;">30</div><div style="padding:5px 0;">1</div><div style="padding:5px 0;">2</div>
          <div style="padding:5px 0;">3</div><div style="padding:5px 0;">4</div><div style="padding:5px 0;">5</div>
          <div style="padding:5px 0;background:#E5F0FF;color:#006BFF;font-weight:600;border-radius:50%;">6</div>
          <div style="padding:5px 0;">7</div>
          <div style="padding:5px 0;background:#006BFF;color:#fff;font-weight:600;border-radius:50%;">8</div>
          <div style="padding:5px 0;">9</div>
          <div style="padding:5px 0;">10</div><div style="padding:5px 0;">11</div><div style="padding:5px 0;">12</div><div style="padding:5px 0;">13</div><div style="padding:5px 0;">14</div><div style="padding:5px 0;">15</div><div style="padding:5px 0;">16</div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <div style="font-size:10px;font-weight:600;color:#64748B;text-align:center;margin-bottom:4px;">Thu, May 8</div>
        <button style="background:#fff;color:#006BFF;border:1px solid #006BFF;border-radius:4px;padding:6px;font-size:11px;font-weight:600;font-family:inherit;">9:00</button>
        <button style="background:#006BFF;color:#fff;border:0;border-radius:4px;padding:6px;font-size:11px;font-weight:700;font-family:inherit;">10:00 ✓</button>
        <button style="background:#fff;color:#006BFF;border:1px solid #006BFF;border-radius:4px;padding:6px;font-size:11px;font-weight:600;font-family:inherit;">11:00</button>
        <button style="background:#fff;color:#006BFF;border:1px solid #006BFF;border-radius:4px;padding:6px;font-size:11px;font-weight:600;font-family:inherit;">14:00</button>
      </div>
    </div>
  </div>

sources:
  - https://calendly.com/
  - https://calendly.com/blog
  - https://help.calendly.com/
---

### ① 브랜드 DNA
- **브랜드명**: Calendly
- **한 줄 정체성**: 이메일 핑퐁을 끝내는 단순한 미팅 스케줄링 링크
- **공식 디자인 철학**: "Easy scheduling ahead — find time that works for everyone"
- **시그니처 요소 1개**: 월별 그리드 캘린더 + 단일 Blue 액션 + 시간 슬롯 outline 버튼

### ② 톤 & 무드
- **핵심 키워드 3개**: 단순함, 신뢰, 캘린더 우선
- **무드 설명**: 흰 캔버스 위 명확한 그리드. Blue가 선택된 날짜와 시간에만 등장한다. 군더더기 없는 스케줄링 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 큰 터치 타깃 (시간 슬롯)
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Calendly Blue */
  --color-primary-50:  #E5F0FF;
  --color-primary-100: #C2DDFF;
  --color-primary-200: #85BBFF;
  --color-primary-300: #4799FF;
  --color-primary-400: #1A82FF;
  --color-primary-500: #006BFF;  /* Calendly Blue */
  --color-primary-600: #0058D9;
  --color-primary-700: #0046B0;
  --color-primary-800: #003487;
  --color-primary-900: #00225A;

  /* Secondary - Calendly Dark Blue (text) */
  --color-secondary-500: #0F172A;

  /* Neutral - Calendly slate */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8FAFC;
  --color-neutral-100:  #F1F5F9;
  --color-neutral-200:  #E2E8F0;
  --color-neutral-300:  #CBD5E1;
  --color-neutral-500:  #94A3B8;
  --color-neutral-700:  #64748B;
  --color-neutral-800:  #334155;
  --color-neutral-900:  #0F172A;
  --color-neutral-1000: #020617;

  /* Semantic */
  --color-success-bg: #DCFCE7;
  --color-success-fg: #16A34A;
  --color-warning-bg: #FEF3C7;
  --color-warning-fg: #CA8A04;
  --color-error-bg:   #FEE2E2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #006BFF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8FAFC;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(15,23,42,0.50);

  /* Text */
  --text-primary:    #0F172A;
  --text-secondary:  #64748B;
  --text-tertiary:   #94A3B8;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #CBD5E1;

  /* Border */
  --border-default: #E2E8F0;
  --border-subtle:  #F1F5F9;
  --border-strong:  #CBD5E1;
  --border-focus:   #006BFF;
}

[data-theme="dark"] {
  --bg-base: #0F172A;
  --bg-subtle: #1E293B;
  --bg-elevated: #334155;
  --text-primary: #F8FAFC;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL)
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.38 / 0
  - Caption: 12px / 600 / 1.33 / 0.04em

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
- **Container**: max-width 1200px (예약 페이지는 720~880px), 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;     /* 시간 슬롯 */
--radius-md: 6px;
--radius-lg: 12px;    /* 카드 */
--radius-xl: 16px;
--radius-full: 9999px;   /* 날짜 셀 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(15,23,42,0.06);
--shadow-md: 0 4px 12px rgba(15,23,42,0.10);
--shadow-lg: 0 8px 24px rgba(15,23,42,0.14);
--shadow-xl: 0 20px 40px rgba(15,23,42,0.20);
```

### ⑧ Iconography
- **스타일**: Outline (Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 15px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-sm);
  padding: 0 18px;
  height: 44px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-base); color: var(--color-primary-500); border: 1.5px solid var(--color-primary-500); }
.btn-secondary:hover { background: var(--color-primary-50); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: 15px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(0,107,255,0.18); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Slot pill**
```css
.tag { padding: 2px 10px; height: 22px; border-radius: var(--radius-full); font-size: 12px; font-weight: 600; line-height: 22px; display: inline-flex; align-items: center; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }

.slot { display: block; width: 100%; padding: 12px; border-radius: 4px; border: 1.5px solid var(--color-primary-500); background: var(--bg-base); color: var(--color-primary-500); font-weight: 600; font-size: 14px; cursor: pointer; }
.slot:hover { background: var(--color-primary-50); }
.slot.selected { background: var(--color-primary-500); color: #fff; }
```

**Navigation (Top nav)**
```css
.topnav { padding: 16px 24px; display: flex; align-items: center; gap: 24px; border-bottom: 1px solid var(--border-subtle); background: var(--bg-base); }
.topnav .logo { width: 28px; height: 28px; border-radius: 50%; background: var(--color-primary-500); color: #fff; display: grid; place-items: center; font-weight: 800; }
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
1. 시간 슬롯 outline 두께를 1px로 줄이지 말 것 — 1.5px가 시그니처
2. 한 페이지에 4개 이상 brand color 사용 금지 — Blue 단일 액션이 핵심
3. 캘린더 날짜 셀을 사각으로 변경 금지 — 원형(circle)이 시그니처
4. 이벤트 타입을 색으로만 구분 금지 — 라벨/아이콘 동반
5. 예약 페이지에 그라데이션 배경 사용 금지 — 신뢰감 저하

### ⑫ 시그니처 적용 예시 (예약 페이지)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-subtle); }
  .booking { max-width: 880px; margin: 48px auto; background: #fff; border-radius: 12px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-default); overflow: hidden; display: grid; grid-template-columns: 280px 1fr 200px; min-height: 540px; }
  .info { padding: 28px; border-right: 1px solid var(--border-default); }
  .info .avatar { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg,#006BFF,#1A82FF); margin-bottom: 12px; }
  .info h1 { margin: 0 0 4px; font-size: 14px; font-weight: 600; color: var(--text-secondary); }
  .info h2 { margin: 0 0 16px; font-size: 22px; font-weight: 700; }
  .info .row { display: flex; gap: 8px; align-items: center; font-size: 14px; color: var(--text-secondary); margin-bottom: 8px; }
  .calendar { padding: 28px; }
  .calendar h3 { margin: 0 0 12px; font-size: 16px; font-weight: 600; }
  .month { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .month strong { font-size: 14px; }
  .grid7 { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; }
  .grid7 .dow { font-size: 11px; color: var(--text-secondary); padding: 4px 0; font-weight: 600; }
  .grid7 .day { aspect-ratio: 1; display: grid; place-items: center; font-size: 13px; cursor: pointer; border-radius: 50%; }
  .grid7 .day:hover { background: var(--bg-subtle); }
  .grid7 .day.muted { color: var(--text-tertiary); }
  .grid7 .day.selected { background: var(--color-primary-500); color: #fff; font-weight: 600; }
  .grid7 .day.today { background: var(--color-primary-50); color: var(--color-primary-500); font-weight: 600; }
  .slots { padding: 28px 16px; border-left: 1px solid var(--border-default); display: flex; flex-direction: column; gap: 6px; }
  .slots h3 { margin: 0 0 12px; font-size: 12px; font-weight: 600; color: var(--text-secondary); text-align: center; }
  .slot { padding: 12px; border: 1.5px solid #006BFF; background: #fff; color: #006BFF; border-radius: 4px; font-weight: 600; font-size: 14px; text-align: center; cursor: pointer; }
  .slot:hover { background: #E5F0FF; }
  .slot.selected { background: #006BFF; color: #fff; }
</style>

<main class="booking">
  <aside class="info">
    <div class="avatar"></div>
    <h1>Mina Park</h1>
    <h2>30분 디자인 상담</h2>
    <div class="row">⏱ 30 min</div>
    <div class="row">📹 Google Meet</div>
    <div class="row">🌐 Asia/Seoul</div>
    <p style="font-size:13px; color:var(--text-secondary); line-height:1.5; margin-top:12px;">디자인 시스템 도입에 대해 자유롭게 상담해 드립니다.</p>
  </aside>
  <div class="calendar">
    <h3>날짜를 선택하세요</h3>
    <div class="month">
      <button class="btn btn-ghost" style="padding:0 8px; height:28px;">‹</button>
      <strong>May 2026</strong>
      <button class="btn btn-ghost" style="padding:0 8px; height:28px;">›</button>
    </div>
    <div class="grid7">
      <div class="dow">S</div><div class="dow">M</div><div class="dow">T</div><div class="dow">W</div><div class="dow">T</div><div class="dow">F</div><div class="dow">S</div>
      <div class="day muted">26</div><div class="day muted">27</div><div class="day muted">28</div><div class="day muted">29</div><div class="day muted">30</div><div class="day">1</div><div class="day">2</div>
      <div class="day">3</div><div class="day">4</div><div class="day">5</div><div class="day today">6</div><div class="day">7</div><div class="day selected">8</div><div class="day">9</div>
      <div class="day">10</div><div class="day">11</div><div class="day">12</div><div class="day">13</div><div class="day">14</div><div class="day">15</div><div class="day">16</div>
      <div class="day">17</div><div class="day">18</div><div class="day">19</div><div class="day">20</div><div class="day">21</div><div class="day">22</div><div class="day">23</div>
    </div>
  </div>
  <aside class="slots">
    <h3>Thursday, May 8</h3>
    <button class="slot">9:00 AM</button>
    <button class="slot selected">10:00 AM ✓</button>
    <button class="slot">11:00 AM</button>
    <button class="slot">14:00 PM</button>
    <button class="slot">15:00 PM</button>
  </aside>
</main>
```
