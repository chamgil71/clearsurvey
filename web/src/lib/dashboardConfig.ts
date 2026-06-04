import type { DashboardConfig, DataMeta } from "@/types/dashboard";

export const configKey = (project: string) => `survey-dash-config-${project}`;

export function loadConfig(project: string, base: DashboardConfig | null = null): DashboardConfig | null {
  if (base && Object.keys(base).length > 0) return base;
  if (typeof window === "undefined") return base;
  try {
    const raw = window.localStorage.getItem(configKey(project));
    if (raw) return JSON.parse(raw) as DashboardConfig;
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