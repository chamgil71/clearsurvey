/**
 * 디자인 시스템 가이드 → 테마 카탈로그 + 드롭인 CSS 빌드.
 *
 *   design_system_guides/{id}.md       (:root = 라이트)  ─┐
 *   design_system_guides/{id}.dark.md  (:root = 다크)    ─┴─▶ src/theme/catalog.json
 *                                                            src/theme/{id}.css   (활성만)
 *                                                            src/theme/presets.css (활성만)
 *
 * new-beginnings/scripts/build-design-catalog.mjs 를 이식했다. 달라진 점:
 *  - 그쪽은 {id}.md 와 {id}.dark.md 를 별개 테마(toss / toss-dark)로 다뤄, 다크 토큰이
 *    {id}.md 안의 축약된 [data-theme="dark"] 블록(6줄 수준)에서 나온다. 여기서는 두 파일을
 *    짝지어 하나의 테마로 만든다 — {id}.dark.md 의 :root 가 완전한 다크 토큰셋이라 훨씬 낫다.
 *  - 출력 색을 oklch 로 변환한다(Tailwind v4 / shadcn 관례, theme_system_plan §3).
 *  - 원본의 토큰 어휘(--bg-base/--text-primary/…)를 이 프로젝트의 shadcn 토큰으로 매핑한다.
 *  - 차트 팔레트 자동 도출값은 초안일 뿐이며 overrides/{id}.json 이 있으면 그쪽이 이긴다.
 *
 * 사용: bun scripts/build-themes.mjs
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { convertValueToOklch, hexToOklchString } from "./lib/color.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FRONTEND = path.resolve(__dirname, "..");
const GUIDES_DIR = path.resolve(
  FRONTEND,
  "..",
  "..",
  "new-beginnings",
  "design",
  "design_system_guides",
);
const THEME_DIR = path.join(FRONTEND, "src", "theme");
const OVERRIDES_DIR = path.join(THEME_DIR, "overrides");
const CATALOG_FILE = path.join(THEME_DIR, "catalog.json");
const PRESETS_FILE = path.join(THEME_DIR, "presets.css");

/** UI 에 노출할 테마. 나머지는 카탈로그에만 남는 백업이다. */
const ACTIVE = [
  "toss",
  "apple-hig",
  "anthropic",
  "claude",
  "linear",
  "vercel",
  "duolingo",
  "datadog",
  "kakao",
  "github-primer",
  "airbnb",
];

/** new-beginnings/public/data/themes.json 에서 이관한 수작업 프리셋. 가이드가 없다. */
const HANDMADE = {
  ink: {
    label: "잉크",
    description: "다크 · 로즈 · 샤프(6px)",
    dark: true,
    radius: "6px",
    brand: { primary: "#f43f5e", bg: "#111318", fg: "#e5e7eb" },
    chart: ["#f43f5e", "#fb7185", "#fbbf24", "#38bdf8", "#a3e635"],
  },
  forest: {
    label: "포레스트",
    description: "그린 · 차분함(12px)",
    dark: false,
    radius: "12px",
    brand: { primary: "#10b981", bg: "#f6faf8", fg: "#14251d" },
    chart: ["#10b981", "#0ea5e9", "#f59e0b", "#8b5cf6", "#ef4444"],
  },
};

// ── 파싱 (new-beginnings 이식) ───────────────────────────────────────────────

/** 섹션 헤더(`### ③ ...`) 다음, 다음 `### ` 헤더 전까지의 본문. */
function extractSection(body, headerRegex) {
  const match = body.match(headerRegex);
  if (!match) return null;
  const rest = body.slice(match.index + match[0].length);
  const next = rest.search(/\n### /);
  return next === -1 ? rest : rest.slice(0, next);
}

function extractCssFence(sectionText) {
  if (!sectionText) return null;
  const m = sectionText.match(/```css\n([\s\S]*?)```/);
  return m ? m[1] : null;
}

function parseDecls(cssText) {
  const out = {};
  if (!cssText) return out;
  const re = /--([\w-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(cssText))) out[m[1]] = m[2].trim();
  return out;
}

function parseRoot(cssText) {
  if (!cssText) return {};
  const m = cssText.match(/:root\s*{([^}]*)}/);
  return parseDecls(m ? m[1] : "");
}

/** frontmatter 를 가볍게 읽는다(gray-matter 의존을 피한다 — 필요한 건 몇 개 스칼라뿐). */
function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([\w_]+):\s*(.*)$/);
    if (kv && kv[2] !== "") data[kv[1]] = kv[2].replace(/^["']|["']$/g, "");
  }
  return { data, body: raw.slice(m[0].length) };
}

const SECTION = {
  color: /###\s*③\s*컬러\s*시스템[^\n]*\n/,
  radius: /###\s*⑥\s*Border Radius[^\n]*\n/,
};

// ── 매핑 (원본 토큰 어휘 → 이 프로젝트 shadcn 토큰) ─────────────────────────

/**
 * theme_system_plan §2-C 의 매핑표.
 * d = 가이드의 선언 맵. 값이 없으면 fallback 체인을 탄다.
 */
function mapToShadcn(d) {
  const pick = (...keys) => {
    for (const k of keys) if (d[k]) return d[k];
    return null;
  };
  const primary = pick("color-primary-500");
  const onPrimary = pick("text-on-primary") || "#FFFFFF";
  const bgBase = pick("bg-base", "color-neutral-0");
  const bgSubtle = pick("bg-subtle", "color-neutral-100");
  const bgElevated = pick("bg-elevated", "bg-base", "color-neutral-0");
  const textPrimary = pick("text-primary", "color-neutral-900");
  const textTertiary = pick("text-tertiary", "color-neutral-700");
  const borderDefault = pick("border-default", "color-neutral-200");
  const borderFocus = pick("border-focus") || primary;

  return {
    background: bgBase,
    foreground: textPrimary,
    card: bgElevated,
    "card-foreground": textPrimary,
    popover: bgElevated,
    "popover-foreground": textPrimary,
    primary,
    "primary-foreground": onPrimary,
    secondary: bgSubtle,
    "secondary-foreground": textPrimary,
    muted: bgSubtle,
    "muted-foreground": textTertiary,
    accent: bgSubtle,
    "accent-foreground": textPrimary,
    destructive: pick("color-error-fg"),
    "destructive-foreground": onPrimary,
    success: pick("color-success-fg"),
    "success-foreground": onPrimary,
    warning: pick("color-warning-fg"),
    "warning-foreground": textPrimary,
    // 검색 형광펜 — 가이드에 대응 개념이 없어 warning 배경을 쓴다(노랑 계열 관용).
    highlight: pick("color-warning-bg", "color-warning-fg"),
    "highlight-foreground": textPrimary,
    border: borderDefault,
    input: borderDefault,
    ring: borderFocus,
    sidebar: bgSubtle,
    "sidebar-foreground": textPrimary,
    "sidebar-primary": primary,
    "sidebar-primary-foreground": onPrimary,
    "sidebar-accent": bgBase,
    "sidebar-accent-foreground": textPrimary,
    "sidebar-border": borderDefault,
    "sidebar-ring": borderFocus,
  };
}

/**
 * 차트 팔레트 자동 도출 — **초안일 뿐이다**.
 * new-beginnings 의 synthesizePalette 는 error.fg(빨강)를 후보에 넣는데, 중립 카테고리
 * 차트에 빨강이 섞이면 "위험/이상치"로 오독된다(theme_system_plan §2-D 원칙 3).
 * 여기서는 빨강을 빼고 색상(hue)이 벌어지는 순서로 고른 뒤, overrides/ 가 있으면 그쪽이 이긴다.
 */
function draftPalette(d) {
  const cands = [
    d["color-primary-500"],
    d["color-info-fg"],
    d["color-success-fg"],
    d["color-warning-fg"],
    d["color-secondary-500"],
    d["color-primary-300"],
    d["color-primary-700"],
  ].filter(Boolean);
  const uniq = [...new Set(cands)];
  while (uniq.length < 5) uniq.push(uniq[uniq.length - 1] || "#888888");
  return uniq.slice(0, 5);
}

function toOklchMap(hexMap) {
  const out = {};
  for (const [k, v] of Object.entries(hexMap)) {
    out[k] = v ? convertValueToOklch(v) : null;
  }
  return out;
}

// ── 빌드 ────────────────────────────────────────────────────────────────────

function buildFromGuides() {
  const files = readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  const bases = files.filter((f) => !f.endsWith(".dark.md")).map((f) => f.replace(/\.md$/, ""));
  const entries = [];
  const warnings = [];

  for (const id of bases) {
    const lightRaw = readFileSync(path.join(GUIDES_DIR, `${id}.md`), "utf-8").replace(/\r/g, "");
    const { data: fm, body } = parseFrontmatter(lightRaw);
    const lightDecls = parseRoot(extractCssFence(extractSection(body, SECTION.color)));
    if (!lightDecls["color-primary-500"]) {
      warnings.push(`${id}: --color-primary-500 없음 — 건너뜀`);
      continue;
    }

    // 다크는 짝 파일의 :root 를 쓴다. 없으면 라이트 전용 테마.
    let darkDecls = null;
    const darkPath = path.join(GUIDES_DIR, `${id}.dark.md`);
    if (existsSync(darkPath)) {
      const darkRaw = readFileSync(darkPath, "utf-8").replace(/\r/g, "");
      darkDecls = parseRoot(
        extractCssFence(extractSection(parseFrontmatter(darkRaw).body, SECTION.color)),
      );
      if (!Object.keys(darkDecls).length) darkDecls = null;
    }

    const radiusDecls = parseDecls(extractCssFence(extractSection(body, SECTION.radius)));
    const radius = radiusDecls["radius-md"] || "8px";

    entries.push({
      id,
      label: fm.brand_ko || fm.brand || id,
      description: fm.signature_keyword || fm.mood || "",
      source: `design_system_guides/${id}.md`,
      hasDark: Boolean(darkDecls),
      radius,
      light: toOklchMap(mapToShadcn(lightDecls)),
      dark: darkDecls ? toOklchMap(mapToShadcn(darkDecls)) : null,
      chart: {
        light: draftPalette(lightDecls).map((h) => hexToOklchString(h) ?? h),
        dark: darkDecls ? draftPalette(darkDecls).map((h) => hexToOklchString(h) ?? h) : null,
      },
    });
  }
  return { entries, warnings };
}

/** 수작업 프리셋(가이드 없음) → 카탈로그 항목. 브랜드 3색에서 나머지를 파생한다. */
function buildHandmade() {
  return Object.entries(HANDMADE).map(([id, h]) => {
    const on = h.dark ? "#0b0d10" : "#FFFFFF";
    const map = {
      background: h.brand.bg,
      foreground: h.brand.fg,
      card: h.brand.bg,
      "card-foreground": h.brand.fg,
      popover: h.brand.bg,
      "popover-foreground": h.brand.fg,
      primary: h.brand.primary,
      "primary-foreground": on,
      secondary: h.dark ? "#1b1f27" : "#e8f3ee",
      "secondary-foreground": h.brand.fg,
      muted: h.dark ? "#1b1f27" : "#e8f3ee",
      "muted-foreground": h.dark ? "#8b94a3" : "#5b7268",
      accent: h.dark ? "#1b1f27" : "#e8f3ee",
      "accent-foreground": h.brand.fg,
      destructive: "#ef4444",
      "destructive-foreground": "#FFFFFF",
      success: "#10b981",
      "success-foreground": "#FFFFFF",
      warning: "#f59e0b",
      "warning-foreground": h.brand.fg,
      highlight: "#fde68a",
      "highlight-foreground": "#1e293b",
      border: h.dark ? "#272c36" : "#d3e5dc",
      input: h.dark ? "#272c36" : "#d3e5dc",
      ring: h.brand.primary,
      sidebar: h.dark ? "#1b1f27" : "#e8f3ee",
      "sidebar-foreground": h.brand.fg,
      "sidebar-primary": h.brand.primary,
      "sidebar-primary-foreground": on,
      "sidebar-accent": h.brand.bg,
      "sidebar-accent-foreground": h.brand.fg,
      "sidebar-border": h.dark ? "#272c36" : "#d3e5dc",
      "sidebar-ring": h.brand.primary,
    };
    return {
      id,
      label: h.label,
      description: h.description,
      source: "new-beginnings/public/data/themes.json (수작업 이관)",
      hasDark: false,
      radius: h.radius,
      light: toOklchMap(map),
      dark: null,
      // 수작업 프리셋은 원본이 chart_palette 를 직접 갖고 있어 도출이 필요 없다.
      chart: { light: h.chart.map((c) => hexToOklchString(c) ?? c), dark: null },
      handmadeDarkMode: h.dark,
    };
  });
}

/**
 * 현행 styles.css 의 :root / .dark 를 그대로 카탈로그 항목으로 만든다.
 * 사용자가 어떤 테마를 골랐다가 "원래대로"를 선택할 수 있어야 하므로 기본값도 프리셋이어야 한다.
 * 값을 손으로 옮겨 적으면 styles.css 가 바뀔 때 갈라지므로 파일에서 직접 읽는다.
 */
function buildDefaultFromStyles(styles) {
  const grab = (selector) => {
    const re = new RegExp(`${selector}\\s*{([^}]*)}`);
    const m = styles.match(re);
    return m ? parseDecls(m[1]) : {};
  };
  const root = grab(":root");
  const dark = grab("\\.dark");
  const pickTokens = (d, base) => {
    const out = {};
    for (const k of Object.keys(base)) out[k] = d[k] ?? base[k] ?? null;
    return out;
  };
  const colorKeys = Object.keys(root).filter((k) => !k.startsWith("chart-") && k !== "radius");
  const lightColors = {};
  for (const k of colorKeys) lightColors[k] = root[k];
  const darkColors = pickTokens(dark, lightColors);
  const chartOf = (d, fb) => [1, 2, 3, 4, 5].map((i) => d[`chart-${i}`] ?? fb[i - 1]);
  const lightChart = chartOf(root, []);

  return [
    {
      id: "light",
      label: "기본 (라이트)",
      description: "ClearSurvey 기본 테마",
      source: "src/styles.css",
      hasDark: true,
      radius: root.radius || "0.625rem",
      light: lightColors,
      dark: darkColors,
      chart: { light: lightChart, dark: chartOf(dark, lightChart) },
      isDefault: true,
    },
    {
      id: "dark",
      label: "기본 (다크)",
      description: "ClearSurvey 기본 테마 · 다크 우선",
      source: "src/styles.css",
      hasDark: false,
      radius: root.radius || "0.625rem",
      light: darkColors,
      dark: null,
      chart: { light: chartOf(dark, lightChart), dark: null },
      isDefault: true,
      handmadeDarkMode: true,
    },
  ];
}

function applyOverrides(entry) {
  const f = path.join(OVERRIDES_DIR, `${entry.id}.json`);
  if (!existsSync(f)) return entry;
  const ov = JSON.parse(readFileSync(f, "utf-8"));
  const conv = (arr) => arr?.map((c) => (c.startsWith("#") ? (hexToOklchString(c) ?? c) : c));
  return {
    ...entry,
    chart: {
      light: conv(ov.chart?.light) ?? entry.chart.light,
      dark: conv(ov.chart?.dark) ?? entry.chart.dark,
    },
    chartOverridden: true,
  };
}

const cssBlock = (selector, entry, variant) => {
  const colors = variant === "dark" ? entry.dark : entry.light;
  const chart = (variant === "dark" ? entry.chart.dark : entry.chart.light) ?? entry.chart.light;
  const lines = [`${selector} {`];
  if (variant !== "dark") lines.push(`  --radius: ${entry.radius};`);
  for (const [k, v] of Object.entries(colors)) if (v) lines.push(`  --${k}: ${v};`);
  chart.forEach((c, i) => lines.push(`  --chart-${i + 1}: ${c};`));
  lines.push("}");
  return lines.join("\n");
};

function writeDropIn(entry, baseCss) {
  const header = `/* ${entry.label} — ${entry.description}
 *
 * 출처: ${entry.source}
 * 생성: bun scripts/build-themes.mjs — 직접 수정하지 말 것.
 *       차트 팔레트를 손보려면 src/theme/overrides/${entry.id}.json 을 만든다.
 *
 * 사용: 이 파일을 src/styles.css 로 덮으면 앱 전체 테마가 바뀐다.
 *       cp src/theme/${entry.id}.css src/styles.css
 */
`;
  const body = [
    baseCss.header,
    cssBlock(":root", entry, "light"),
    "",
    entry.dark ? cssBlock(".dark", entry, "dark") : baseCss.darkFallback,
    "",
    baseCss.footer,
  ].join("\n");
  writeFileSync(path.join(THEME_DIR, `${entry.id}.css`), header + body, "utf-8");
}

function main() {
  mkdirSync(THEME_DIR, { recursive: true });
  mkdirSync(OVERRIDES_DIR, { recursive: true });

  const { entries: guideEntries, warnings } = buildFromGuides();
  const styles = readFileSync(path.join(FRONTEND, "src", "styles.css"), "utf-8");
  const all = [...buildDefaultFromStyles(styles), ...guideEntries, ...buildHandmade()].map(
    applyOverrides,
  );

  // 현행 styles.css 에서 재사용할 조각(@import/@theme inline/@layer base)을 떼어낸다.
  const headerEnd = styles.indexOf(":root {");
  const layerStart = styles.indexOf("@layer base");
  const baseCss = {
    header: styles.slice(0, headerEnd).trimEnd() + "\n",
    footer: layerStart === -1 ? "" : styles.slice(layerStart),
    darkFallback: "/* 이 테마는 다크 토큰이 없다 — 기본 .dark 를 그대로 쓴다. */",
  };

  const active = all.filter((e) => ACTIVE.includes(e.id) || e.id in HANDMADE || e.isDefault);
  for (const e of active) writeDropIn(e, baseCss);

  // 런타임 프리셋 — 활성만. [data-theme="{id}"] 와 그 다크 조합.
  const presets = [
    "/* 런타임 테마 프리셋 — 생성물. bun scripts/build-themes.mjs",
    " * .dark(명암)와 [data-theme](브랜드)은 서로 다른 축이다. 조합이 성립해야 하므로",
    ' * 다크 블록 선택자는 [data-theme="{id}"].dark 이다. */',
    "",
    ...active.flatMap((e) => [
      cssBlock(`[data-theme="${e.id}"]`, e, "light"),
      "",
      ...(e.dark ? [cssBlock(`[data-theme="${e.id}"].dark`, e, "dark"), ""] : []),
    ]),
  ].join("\n");
  writeFileSync(PRESETS_FILE, presets, "utf-8");

  writeFileSync(
    CATALOG_FILE,
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        active: active.map((e) => e.id),
        count: all.length,
        entries: all,
      },
      null,
      2,
    ),
    "utf-8",
  );

  console.log(`카탈로그: ${all.length}개 (활성 ${active.length}) → src/theme/catalog.json`);
  console.log(`드롭인 CSS: ${active.length}개 → src/theme/{id}.css`);
  console.log(`런타임 프리셋 → src/theme/presets.css`);
  const missing = ACTIVE.filter((id) => !all.some((e) => e.id === id));
  if (missing.length) console.warn(`⚠ 활성 목록에 있으나 가이드를 못 찾음: ${missing.join(", ")}`);
  if (warnings.length)
    console.warn(`⚠ 경고 ${warnings.length}건 (앞 5개):\n  ${warnings.slice(0, 5).join("\n  ")}`);
}

main();
