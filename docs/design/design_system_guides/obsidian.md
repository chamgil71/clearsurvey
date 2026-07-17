---
brand: Obsidian
brand_ko: 옵시디언
slug: obsidian
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - consumer

color_tone: cool
primary_color_hex: "#7C3AED"
primary_color_name: "Obsidian Purple"
mood:
  - 로컬노트
  - 보석
  - 그래프뷰

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

released_year: 2020
last_major_revision: 2025
signature_keyword: "보라 결정 로고 + 다크 캔버스 + [[백링크]] + 그래프 뷰의 로컬 노트 앱"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F2F2F4", "border": "#EAEAEC", "fg": "#2E2E36", "fg_muted": "#8E8E97", "accent": "#7C3AED" },
    "dark":  { "bg": "#1E1E26", "surface": "#161620", "border": "#2E2E36", "fg": "#DCDDDE", "fg_muted": "#8E8E97", "accent": "#7C3AED" }
  }

hero_html: |
  <div style="font-family:'Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:8px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:24px;height:24px;background:linear-gradient(135deg,#A78BFA,#7C3AED);clip-path:polygon(50% 0,100% 30%,80% 100%,20% 100%,0 30%);"></div>
      <strong style="font-size:13px;font-weight:600;">Vault — Knowledge Garden</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">142 notes</span>
    </div>
    <div style="padding:10px 14px;font:400 13px/1.7 inherit;color:var(--card-fg);overflow:hidden;">
      <div style="font:700 22px/1.3 inherit;color:var(--card-fg);margin-bottom:4px;"># 디자인 시스템 v3</div>
      <div style="color:var(--card-fg-muted);font:500 11px/1.3 inherit;margin-bottom:10px;">📁 design / 🏷 #wip · #design-system</div>
      <p style="margin:0 0 8px;">Obsidian은 <span style="color:var(--card-accent);background:rgba(124,58,237,0.10);padding:0 4px;border-radius:3px;">[[로컬 마크다운]]</span> 기반 노트 앱이다. <span style="color:var(--card-accent);background:rgba(124,58,237,0.10);padding:0 4px;border-radius:3px;">[[백링크]]</span> 로 노트 간 연결을 만들고, <span style="color:var(--card-accent);background:rgba(124,58,237,0.10);padding:0 4px;border-radius:3px;">[[그래프 뷰]]</span> 로 시각화한다.</p>
      <div style="background:var(--card-surface);border-left:3px solid var(--card-accent);padding:6px 10px;border-radius:0 4px 4px 0;font:500 12px/1.5 inherit;color:var(--card-fg);margin-top:8px;">💡 정보를 한 폴더에 두지 말 것. 백링크가 폴더보다 강력하다.</div>
    </div>
    <div style="padding:6px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:10px;align-items:center;font:600 11px/1 inherit;color:var(--card-fg-muted);">
      <span>⎇ vault-main</span><span>● modified</span><span style="margin-left:auto;">3 backlinks</span>
    </div>
  </div>

sources:
  - https://obsidian.md/
---

### ① 브랜드 DNA
- **브랜드명**: Obsidian
- **한 줄 정체성**: 로컬 마크다운 기반 PKM(개인 지식 관리) — Roam 영감, 오프라인 우선
- **공식 디자인 철학**: "A second brain, for you, forever" — 로컬·평생 보관·확장성
- **시그니처 요소 1개**: 보라 결정(흑요석) 다각형 로고 + Obsidian Purple(#7C3AED) + [[백링크]] 보라 강조 + 그래프 뷰(노드+엣지 점·선). Notion 무채 톤·Roam 흰 캔버스와 정반대의 다크 보라

### ② 톤 & 무드
- **핵심 키워드 3개**: 로컬노트, 보석, 그래프뷰
- **무드 설명**: 다크 우선(#1E1E26 캔버스, #161620 사이드바). 색은 보라 단일 강조, [[링크]]는 보라 텍스트+배경. 모서리 4~6px Soft.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 멀티 페인 작업창
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Obsidian Purple */
  --color-primary-50:  #F1ECFE;
  --color-primary-100: #DDD1FC;
  --color-primary-200: #C5B0F9;
  --color-primary-300: #AB8DF5;
  --color-primary-400: #966EF0;
  --color-primary-500: #7C3AED;   /* Obsidian Purple */
  --color-primary-600: #6526D2;
  --color-primary-700: #4F1AA8;
  --color-primary-800: #371078;
  --color-primary-900: #21084A;

  /* Tag color (해시태그) */
  --color-tag: #5BCEFA;

  /* Neutral (dark) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F8;
  --color-neutral-100:  #EAEAEC;
  --color-neutral-200:  #C9CACD;
  --color-neutral-300:  #8E8E97;
  --color-neutral-500:  #5B5B66;
  --color-neutral-700:  #3D3D46;
  --color-neutral-800:  #262630;
  --color-neutral-900:  #1E1E26;
  --color-neutral-1000: #161620;

  /* Semantic */
  --color-success-bg: #1F3A2A;
  --color-success-fg: #66D69E;
  --color-warning-bg: #3D2F0E;
  --color-warning-fg: #F5C76A;
  --color-error-bg:   #3D1A21;
  --color-error-fg:   #F47B86;
  --color-info-bg:    #122D44;
  --color-info-fg:    --color-tag;

  /* Surface */
  --bg-base:     #1E1E26;
  --bg-subtle:   #262630;
  --bg-elevated: #2E2E36;
  --bg-sidebar:  #161620;
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #DCDDDE;
  --text-secondary:  #B5B6BC;
  --text-tertiary:   #8E8E97;
  --text-on-primary: #FFFFFF;
  --text-link:       #7C3AED;
  --text-disabled:   #5B5B66;

  /* Border */
  --border-default: #2E2E36;
  --border-subtle:  #262630;
  --border-strong:  #3D3D46;
  --border-focus:   #7C3AED;
}

[data-theme="light"] {
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F8;
  --bg-elevated: #FFFFFF;
  --bg-sidebar:  #F2F2F4;
  --text-primary:    #2E2E36;
  --text-secondary:  #5B5B66;
  --text-tertiary:   #8E8E97;
  --border-default:  #EAEAEC;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / Source Sans Pro / system-ui
  - 한글: Pretendard / Noto Sans KR
  - 마크다운/코드: **JetBrains Mono** / Source Code Pro
- **위계**:
  - Display: 32px / 700 / 1.2
  - H1: 26px / 700 / 1.3 (# 헤딩)
  - H2: 22px / 600 / 1.3 (## )
  - H3: 18px / 600 / 1.35 (### )
  - Body Large: 15px / 400 / 1.7
  - Body: 14px / 400 / 1.7
  - Body Small: 12px / 500 / 1.4
  - Code: 13px / 400 / 1.55 mono
  - Caption: 11px / 600 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 10px;
  --space-lg: 14px;
  --space-xl: 22px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 10px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.18);
--shadow-md: 0 4px 12px rgba(0,0,0,0.30);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.42);
```

### ⑧ Iconography
- **스타일**: Lucide (Obsidian 기본)
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 Inter, sans-serif; border-radius: 4px; padding: 7px 14px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-icon { background: transparent; border: 0; color: var(--text-tertiary); width: 28px; height: 28px; border-radius: 3px; }
.btn-icon:hover { background: var(--bg-elevated); color: var(--text-primary); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 6px 10px; font: 400 13px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 0; }
.cmd-palette { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 6px; box-shadow: var(--shadow-lg); padding: 8px; width: 520px; }
.cmd-palette .row { display: flex; align-items: center; gap: 10px; padding: 6px 10px; border-radius: 4px; font: 500 13px/1.4 inherit; cursor: pointer; }
.cmd-palette .row.active { background: var(--color-primary-500); color: #fff; }
```

**Card (Note)**
```css
.note-pane { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 4px; padding: 14px 18px; font: 400 15px/1.7 inherit; color: var(--text-primary); }
.note-pane h1 { font: 700 26px/1.3 inherit; color: #fff; }
.note-pane h2 { font: 700 22px/1.3 inherit; color: #fff; }
.note-pane .props { color: var(--text-tertiary); font: 500 11px/1.4 inherit; margin-bottom: 12px; }
.callout { background: var(--bg-subtle); border-left: 3px solid var(--color-primary-500); padding: 8px 12px; border-radius: 0 4px 4px 0; font: 500 13px/1.5 inherit; }
.callout.warn { border-left-color: var(--color-warning-fg); }
.callout.danger { border-left-color: var(--color-error-fg); }
```

**Badge / Tag**
```css
.tag-hash { color: var(--color-tag); background: rgba(91,206,250,0.10); border-radius: 3px; padding: 1px 6px; font: 600 12px/1.3 'JetBrains Mono', monospace; cursor: pointer; }
.tag-hash::before { content: '#'; }
.wikilink { color: var(--color-primary-500); background: rgba(124,58,237,0.10); border-radius: 3px; padding: 0 4px; cursor: pointer; }
.wikilink::before { content: '[['; opacity: 0.45; }
.wikilink::after  { content: ']]'; opacity: 0.45; }
.backlink-count { background: rgba(124,58,237,0.18); color: var(--color-primary-300); border-radius: 9999px; padding: 1px 8px; font: 700 11px/1.3 inherit; }
```

**Navigation (Vault file tree)**
```css
.sidebar { background: var(--bg-sidebar); border-right: 1px solid var(--border-default); width: 240px; padding: 8px 0; }
.sidebar .head { padding: 6px 14px; font: 700 11px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
.sidebar .folder { padding: 5px 12px 5px 14px; font: 500 13px/1.4 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .folder.expand::before { content: '▾ '; color: var(--text-tertiary); }
.sidebar .file { padding: 4px 12px 4px 28px; font: 400 13px/1.4 inherit; color: var(--text-primary); cursor: pointer; border-radius: 3px; margin: 1px 6px; }
.sidebar .file:hover { background: var(--bg-subtle); }
.sidebar .file.active { background: var(--color-primary-500); color: #fff; }
.graph-pane { background: radial-gradient(circle at center, rgba(124,58,237,0.05) 0, transparent 60%), var(--bg-base); border: 1px solid var(--border-default); border-radius: 4px; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 160ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 보라를 라이트(#A78BFA)로 흐리게 사용 금지 — 진한 보라(#7C3AED)가 정체성
2. [[백링크]] 표기에 컬러 강조 빼기 금지 — 보라 텍스트+옅은 보라 배경 시그니처
3. 그래프 뷰 제거하고 트리만 표시 금지 — 노드+엣지 그래프가 정체성
4. 풀필 9999px 카드 사용 금지 — 4~6px Soft
5. 라이트 톤만으로 노트 앱 표현 금지 — 다크 우선이 Obsidian 첫인상

### ⑫ 시그니처 적용 예시 (Obsidian 노트 + 그래프)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; color: #DCDDDE; background: #1E1E26; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 240px 1fr 360px; grid-template-rows: 36px 1fr 24px; min-height: 100vh; }
  .titlebar { grid-column: 1/4; background: #161620; border-bottom: 1px solid #2E2E36; display: flex; align-items: center; padding: 0 12px; gap: 12px; font: 600 13px/1 inherit; }
  .titlebar .logo { width: 22px; height: 22px; background: linear-gradient(135deg, #A78BFA, #7C3AED); clip-path: polygon(50% 0, 100% 30%, 80% 100%, 20% 100%, 0 30%); }
  .titlebar .vault { font-weight: 700; }
  .titlebar .right { margin-left: auto; display: flex; gap: 10px; color: #8E8E97; }
  .sidebar { background: #161620; border-right: 1px solid #2E2E36; padding: 10px 0; }
  .sidebar h2 { padding: 6px 14px; font: 700 11px/1.4 inherit; color: #8E8E97; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
  .folder { padding: 6px 14px; font: 600 13px/1.4 inherit; color: #B5B6BC; cursor: pointer; display: flex; align-items: center; gap: 6px; }
  .folder::before { content: '▾'; color: #8E8E97; font-size: 11px; }
  .file { padding: 5px 14px 5px 32px; font: 400 13px/1.4 inherit; color: #DCDDDE; cursor: pointer; border-radius: 3px; margin: 1px 6px 1px 0; }
  .file::before { content: '📄 '; color: #8E8E97; }
  .file:hover { background: #262630; }
  .file.active { background: #7C3AED; color: #fff; }
  .file.active::before { color: rgba(255,255,255,0.7); }
  main { background: #1E1E26; padding: 18px 24px; overflow-y: auto; }
  main h1 { margin: 0 0 4px; font: 700 28px/1.3 inherit; color: #fff; }
  main .props { color: #8E8E97; font: 500 11px/1.4 inherit; margin-bottom: 16px; display: flex; gap: 10px; flex-wrap: wrap; }
  main .props .tag { color: #5BCEFA; background: rgba(91,206,250,0.10); border-radius: 3px; padding: 1px 6px; font: 600 11px/1.3 'JetBrains Mono', monospace; }
  main h2 { margin: 22px 0 8px; font: 700 22px/1.3 inherit; color: #fff; }
  main p { margin: 0 0 12px; font: 400 15px/1.75 inherit; color: #DCDDDE; }
  .wl { color: #7C3AED; background: rgba(124,58,237,0.12); border-radius: 3px; padding: 0 4px; }
  .wl::before { content: '[['; opacity: 0.4; }
  .wl::after  { content: ']]'; opacity: 0.4; }
  .callout { background: #262630; border-left: 3px solid #7C3AED; padding: 10px 14px; border-radius: 0 4px 4px 0; font: 500 14px/1.6 inherit; margin: 14px 0; }
  .callout.warn { border-left-color: #F5C76A; }
  .code { background: #161620; border: 1px solid #2E2E36; border-radius: 4px; padding: 10px 14px; font: 400 13px/1.6 'JetBrains Mono', monospace; color: #DCDDDE; margin: 12px 0; }
  .code .kw  { color: #C77DBB; }
  .code .str { color: #66D69E; }
  .aside { background: #1E1E26; border-left: 1px solid #2E2E36; padding: 12px 14px; display: flex; flex-direction: column; gap: 12px; }
  .pane { background: #262630; border: 1px solid #2E2E36; border-radius: 4px; padding: 10px 12px; }
  .pane h3 { margin: 0 0 8px; font: 700 11px/1.4 inherit; color: #8E8E97; text-transform: uppercase; letter-spacing: 0.05em; }
  .backlink { font: 500 12px/1.4 inherit; color: #DCDDDE; padding: 4px 0; border-bottom: 1px solid #2E2E36; }
  .backlink:last-child { border-bottom: 0; }
  .backlink .src { color: #7C3AED; font-weight: 700; }
  .backlink .ctx { color: #8E8E97; font-size: 11px; margin-top: 2px; }
  .graph { aspect-ratio: 1; background: radial-gradient(circle at center, rgba(124,58,237,0.10) 0, transparent 60%), #161620; border-radius: 4px; position: relative; overflow: hidden; }
  .graph svg { width: 100%; height: 100%; }
  .statusbar { grid-column: 1/4; background: #161620; border-top: 1px solid #2E2E36; display: flex; align-items: center; padding: 0 12px; font: 500 11px/1 inherit; color: #8E8E97; gap: 14px; }
  .statusbar .right { margin-left: auto; display: flex; gap: 12px; }
</style>

<div class="app">
  <header class="titlebar">
    <div class="logo"></div>
    <span class="vault">Knowledge Garden</span>
    <span style="color:#8E8E97;font:500 12px/1 inherit;">v1.7</span>
    <div class="right">
      <span>← →</span><span>⌘P</span><span>⚙</span>
    </div>
  </header>
  <aside class="sidebar">
    <h2>Files</h2>
    <div class="folder">design</div>
    <div class="file active" style="padding-left:32px;">디자인 시스템 v3</div>
    <div class="file" style="padding-left:32px;">컬러 토큰 정리</div>
    <div class="file" style="padding-left:32px;">타이포 위계</div>
    <div class="folder">notes</div>
    <div class="file" style="padding-left:32px;">백링크</div>
    <div class="file" style="padding-left:32px;">그래프 뷰</div>
    <div class="file" style="padding-left:32px;">PKM 원칙</div>
    <div class="folder">daily</div>
    <div class="file" style="padding-left:32px;">2026-05-14</div>
    <div class="file" style="padding-left:32px;">2026-05-13</div>
  </aside>
  <main>
    <h1># 디자인 시스템 v3</h1>
    <div class="props">📁 design <span class="tag">wip</span><span class="tag">design-system</span><span class="tag">obsidian</span> · 마지막 수정 5월 14일</div>
    <p>Obsidian은 <span class="wl">로컬 마크다운</span> 기반 노트 앱이다. <span class="wl">백링크</span> 로 노트 간 양방향 연결을 만들고, <span class="wl">그래프 뷰</span> 로 시각화한다.</p>
    <h2>## 원칙</h2>
    <p>모든 정보를 한 폴더에 두지 말 것. 폴더는 분류, <span class="wl">백링크</span> 는 연결을 표현한다.</p>
    <div class="callout">💡 정보를 한 폴더에 두지 말 것. 백링크가 폴더보다 강력하다.</div>
    <div class="callout warn">⚠ 너무 많은 백링크는 그래프를 읽기 어렵게 만든다. 핵심 노드 위주로 압축할 것.</div>
    <h2>## 코드 예</h2>
    <div class="code"><span class="kw">const</span> note = { title: <span class="str">"디자인 시스템 v3"</span>, links: 12 };</div>
  </main>
  <aside class="aside">
    <section class="pane">
      <h3>Backlinks · 5</h3>
      <div class="backlink"><div><span class="src">백링크</span> — "디자인 시스템 v3 의 핵심 개념"</div><div class="ctx">notes/백링크.md</div></div>
      <div class="backlink"><div><span class="src">PKM 원칙</span> — "v3 는 토큰 기반"</div><div class="ctx">notes/PKM 원칙.md</div></div>
      <div class="backlink"><div><span class="src">2026-05-13</span> — "오늘 v3 시작"</div><div class="ctx">daily/2026-05-13.md</div></div>
    </section>
    <section class="pane">
      <h3>Graph view</h3>
      <div class="graph">
        <svg viewBox="0 0 200 200">
          <line x1="100" y1="100" x2="50" y2="40"  stroke="#7C3AED" stroke-opacity="0.7" stroke-width="1.5"/>
          <line x1="100" y1="100" x2="160" y2="50" stroke="#7C3AED" stroke-opacity="0.7" stroke-width="1.5"/>
          <line x1="100" y1="100" x2="160" y2="160" stroke="#7C3AED" stroke-opacity="0.7" stroke-width="1.5"/>
          <line x1="100" y1="100" x2="40" y2="160" stroke="#7C3AED" stroke-opacity="0.7" stroke-width="1.5"/>
          <line x1="50" y1="40" x2="160" y2="50" stroke="#7C3AED" stroke-opacity="0.4" stroke-width="1"/>
          <circle cx="100" cy="100" r="10" fill="#7C3AED"/>
          <circle cx="50"  cy="40"  r="6" fill="#A78BFA"/>
          <circle cx="160" cy="50"  r="6" fill="#A78BFA"/>
          <circle cx="160" cy="160" r="6" fill="#A78BFA"/>
          <circle cx="40"  cy="160" r="6" fill="#A78BFA"/>
          <text x="100" y="125" fill="#fff" text-anchor="middle" font: 700 9px Inter;">v3</text>
        </svg>
      </div>
    </section>
    <section class="pane">
      <h3>Tags</h3>
      <div style="display:flex;flex-wrap:wrap;gap:5px;"><span class="tag" style="color:#5BCEFA;background:rgba(91,206,250,0.10);border-radius:3px;padding:1px 6px;font:600 11px/1.3 'JetBrains Mono',monospace;">#wip · 8</span><span class="tag" style="color:#5BCEFA;background:rgba(91,206,250,0.10);border-radius:3px;padding:1px 6px;font:600 11px/1.3 'JetBrains Mono',monospace;">#design-system · 4</span><span class="tag" style="color:#5BCEFA;background:rgba(91,206,250,0.10);border-radius:3px;padding:1px 6px;font:600 11px/1.3 'JetBrains Mono',monospace;">#obsidian · 12</span></div>
    </section>
  </aside>
  <footer class="statusbar">
    <span>⎇ vault-main</span><span>● modified</span><span>3 backlinks</span>
    <div class="right"><span>142 notes</span><span>8 tags</span><span>Ln 12 · 1.3KB</span></div>
  </footer>
</div>
```
