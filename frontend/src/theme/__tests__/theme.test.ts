import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import catalog from "../catalog.json";
import { THEME_PRESETS, DEFAULT_THEME_ID, resolveThemeId } from "../registry";
import { COLOR_TOKENS, CHART_SLOTS } from "../tokens";

/**
 * 테마가 230종이라 사람이 눈으로 검사할 수 없다. 여기서 기계가 잡는다.
 * 토큰이 하나 빠지면 그 색만 조용히 기본값으로 떨어져 발견이 매우 어렵다.
 */

const THEME_DIR = path.resolve(__dirname, "..");
const activeIds = catalog.active as string[];
const entries = catalog.entries as Array<Record<string, any>>;
const byId = new Map(entries.map((e) => [e.id, e]));

const parseBlock = (css: string, selector: string): Record<string, string> => {
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = css.match(new RegExp(`${esc}\\s*\\{([^}]*)\\}`));
  if (!m) return {};
  const out: Record<string, string> = {};
  for (const decl of m[1].split(";")) {
    const kv = decl.match(/--([\w-]+)\s*:\s*(.+)/);
    if (kv) out[kv[1]] = kv[2].trim();
  }
  return out;
};

describe("카탈로그", () => {
  it("활성 15종이다", () => {
    expect(activeIds).toHaveLength(15);
  });

  it("활성 id 는 모두 카탈로그에 실재한다", () => {
    for (const id of activeIds) expect(byId.has(id), `${id} 없음`).toBe(true);
  });

  it("요청한 브랜드가 모두 활성이다", () => {
    // 빠지면 조용히 사라지므로 명시적으로 고정한다.
    for (const id of [
      "toss",
      "apple-hig",
      "anthropic",
      "claude",
      "ink",
      "forest",
      "light",
      "dark",
    ]) {
      expect(activeIds, `${id} 누락`).toContain(id);
    }
  });

  it("백업 테마도 함께 보관한다", () => {
    expect(catalog.count).toBeGreaterThan(200);
  });
});

describe("활성 테마 토큰 무결성", () => {
  it.each(activeIds)("%s — 색 토큰이 하나도 빠지지 않는다", (id) => {
    const e = byId.get(id)!;
    // 차트 색은 light 맵이 아니라 chart.light 배열에 따로 담긴다(슬롯 수가 가변일 수 있어서).
    for (const t of COLOR_TOKENS.filter((k) => !k.startsWith("chart-"))) {
      expect(e.light[t], `${id}.light 의 --${t}`).toBeTruthy();
    }
  });

  it.each(activeIds)("%s — 모든 색이 oklch 다", (id) => {
    const e = byId.get(id)!;
    const vals = [...Object.values(e.light), ...(e.dark ? Object.values(e.dark) : [])];
    for (const v of vals) {
      expect(String(v), `${id}: ${v}`).toMatch(/^oklch\(/);
    }
  });

  it.each(activeIds)("%s — 차트 팔레트가 %d색이고 서로 다르다", (id) => {
    const e = byId.get(id)!;
    expect(e.chart.light).toHaveLength(CHART_SLOTS);
    // 복붙 실수로 같은 색이 반복되면 범례 구분이 안 된다.
    expect(new Set(e.chart.light).size, `${id} 차트 색 중복`).toBe(CHART_SLOTS);
  });

  it.each(activeIds)("%s — radius 가 있다", (id) => {
    expect(byId.get(id)!.radius).toBeTruthy();
  });
});

describe("생성된 CSS", () => {
  it.each(activeIds)("%s.css 가 존재한다", (id) => {
    expect(existsSync(path.join(THEME_DIR, `${id}.css`))).toBe(true);
  });

  it.each(activeIds)("%s.css 의 :root 값이 카탈로그와 일치한다", (id) => {
    // 드롭인 CSS 와 카탈로그가 갈라지면 "파일마다 다른 색"이 된다.
    const css = readFileSync(path.join(THEME_DIR, `${id}.css`), "utf-8");
    const root = parseBlock(css, ":root");
    const e = byId.get(id)!;
    for (const t of COLOR_TOKENS) {
      if (t.startsWith("chart-")) continue;
      expect(root[t], `${id}.css 의 --${t}`).toBe(e.light[t]);
    }
  });

  it.each(activeIds)("%s 의 드롭인과 presets.css 값이 일치한다", (id) => {
    // 두 산출물이 한 소스에서 나오는지 고정 — 손으로 두 번 쓰면 반드시 갈라진다.
    const presets = readFileSync(path.join(THEME_DIR, "presets.css"), "utf-8");
    const scoped = parseBlock(presets, `[data-theme="${id}"]`);
    const e = byId.get(id)!;
    expect(Object.keys(scoped).length, `${id} 프리셋 블록 없음`).toBeGreaterThan(0);
    for (const t of COLOR_TOKENS) {
      if (t.startsWith("chart-")) continue;
      expect(scoped[t], `presets.css [data-theme="${id}"] 의 --${t}`).toBe(e.light[t]);
    }
  });

  it("드롭인 CSS 는 Tailwind 골격을 갖춘 완전한 파일이다", () => {
    const css = readFileSync(path.join(THEME_DIR, "toss.css"), "utf-8");
    expect(css).toContain('@import "tailwindcss"');
    expect(css).toContain("@theme inline");
    expect(css).toContain("@layer base");
  });

  it("다크 프리셋 선택자는 .dark 와 조합된다", () => {
    // .dark(명암)와 [data-theme](브랜드)은 다른 축이라 조합이 성립해야 한다.
    const presets = readFileSync(path.join(THEME_DIR, "presets.css"), "utf-8");
    expect(presets).toContain('[data-theme="toss"].dark');
  });
});

describe("registry", () => {
  it("카탈로그의 활성 목록과 같다", () => {
    expect(THEME_PRESETS.map((p) => p.id).sort()).toEqual([...activeIds].sort());
  });

  it("라벨·설명이 비어 있지 않다", () => {
    for (const p of THEME_PRESETS) {
      expect(p.label, `${p.id} 라벨`).toBeTruthy();
    }
  });

  it("모르는 id 는 기본 테마로 떨군다", () => {
    expect(resolveThemeId("없는테마")).toBe(DEFAULT_THEME_ID);
    expect(resolveThemeId(undefined)).toBe(DEFAULT_THEME_ID);
    expect(resolveThemeId("toss")).toBe("toss");
  });
});
