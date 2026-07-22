import type { DashboardConfig, DataMeta } from "@/types/dashboard";

export const configKey = (project: string) => `survey-dash-config-${project}`;

/**
 * 구 theme 필드 제거. `primaryColor`·`chartPalette` 는 테마 프리셋과 개념이 겹쳐 폐기했다
 * (theme_system_plan §4-F). 저장된 값이 있어도 무시하고 버린다 — 남겨두면 프리셋과 둘 중
 * 뭐가 이기는지 모호해진다.
 */
function migrateTheme(theme: DashboardConfig["theme"]): DashboardConfig["theme"] {
  if (!theme) return theme;
  const { primaryColor, chartPalette, ...rest } = theme as Record<string, unknown>;
  void primaryColor;
  void chartPalette;
  return rest as DashboardConfig["theme"];
}

export function migrateConfig(parsed: DashboardConfig): DashboardConfig {
  if (parsed.theme) parsed = { ...parsed, theme: migrateTheme(parsed.theme) };
  if (!parsed.charts || !Array.isArray(parsed.charts)) return parsed;
  const charts = parsed.charts
    .filter((c) => c != null)
    .map((c: any) => {
      if (!c.layout && c.width !== undefined) {
        const { width, ...rest } = c;
        c = { ...rest, layout: width === 2 || width === "2" ? "2x1" : "1x1" };
      }
      // show_labels(차트 내 캡션 표시) 신설 전에는 show_percent 하나가 "툴팁에 비율 표시"와
      // "차트 안에 캡션 표시"를 겸했다. 기존에 show_percent:true로 저장된 차트가 이 변경으로
      // 갑자기 캡션이 사라지지 않도록, show_labels가 아직 없으면 과거 show_percent 값을
      // 그대로 물려받는다. 이후로는 두 값이 독립적으로 저장된다.
      if (c.type !== "text" && c.show_labels === undefined && c.show_percent !== undefined) {
        c = { ...c, show_labels: c.show_percent };
      }
      return c;
    });
  return { ...parsed, charts };
}

export function loadConfig(
  project: string,
  base: DashboardConfig | null = null,
  meta?: DataMeta,
): DashboardConfig | null {
  if (base && Object.keys(base).length > 0) return migrateConfig(base);
  if (typeof window === "undefined") return base ? migrateConfig(base) : null;
  try {
    const raw = window.localStorage.getItem(configKey(project));
    if (raw) {
      let parsed = JSON.parse(raw) as DashboardConfig;
      parsed = migrateConfig(parsed);

      if (meta && meta.columns && parsed.charts) {
        const validKeys = new Set(meta.columns.map((c) => c.key));
        const isCorrupted = parsed.charts.some((chart) => {
          if (chart.type === "multibar") {
            return chart.cols.some((c) => !validKeys.has(c.col));
          }
          return "col" in chart && !validKeys.has(chart.col);
        });

        if (isCorrupted) {
          window.localStorage.removeItem(configKey(project));
          return null;
        }
      }
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return base;
}

export function saveConfig(project: string, cfg: DashboardConfig) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(configKey(project), JSON.stringify(cfg));
}

export function buildDefaultConfig(meta: DataMeta): DashboardConfig {
  const catCols = meta.columns.filter((c) => c.type === "category");
  const numCols = meta.columns.filter((c) => c.type === "numeric");
  const allCols = meta.columns;

  const binaryCols = numCols.filter((c) => c.key.startsWith("O_"));
  const plainNums = numCols.filter((c) => !c.key.startsWith("O_"));

  const charts = catCols.slice(0, 5).map((c, i) => ({
    col: c.key,
    title: c.label,
    type: (i === 0 ? "donut" : "bar") as "donut" | "bar",
  })) as DashboardConfig["charts"];

  if (charts.length < 4) {
    plainNums.slice(0, 4 - charts.length).forEach((c) => {
      charts.push({ col: c.key, title: c.label, type: "bar" });
    });
  }

  if (binaryCols.length >= 2) {
    charts.push({
      type: "multibar",
      title: "활용 목적",
      cols: binaryCols.map((c) => ({ col: c.key, label: c.label.replace(/^O_/, "") })),
    });
  }

  const kpi: DashboardConfig["kpi"] = [
    { label: "총 응답수", type: "total_rows" },
    ...catCols.slice(0, 1).flatMap((c) =>
      (c.unique_values || []).slice(0, 2).map((v) => ({
        label: v,
        type: "count_value" as const,
        col: c.key,
        value: v,
      })),
    ),
    ...numCols.slice(0, 1).map((c) => ({
      label: c.label + " 합계",
      type: "sum" as const,
      col: c.key,
    })),
  ];

  return {
    version: 1,
    kpi: kpi.slice(0, 4),
    charts,
    list: {
      visible_cols: allCols.slice(0, 8).map((c) => c.key),
      filter_cols: catCols.slice(0, 3).map((c) => c.key),
    },
  };
}
