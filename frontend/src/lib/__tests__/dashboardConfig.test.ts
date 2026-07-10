import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { configKey, migrateConfig, buildDefaultConfig, loadConfig, saveConfig } from "@/lib/dashboardConfig";
import type { DataMeta, DashboardConfig } from "@/types/dashboard";

// ── configKey ─────────────────────────────────────────────────────────────────

describe("configKey", () => {
  it("프로젝트 이름으로 스토리지 키를 생성한다", () => {
    expect(configKey("demo")).toBe("survey-dash-config-demo");
  });
});

// ── migrateConfig ─────────────────────────────────────────────────────────────

describe("migrateConfig", () => {
  it("이미 layout이 있는 차트는 변경하지 않는다", () => {
    const cfg = {
      version: 1,
      kpi: [],
      charts: [{ type: "bar" as const, col: "a", layout: "2x1" as const }],
      list: { visible_cols: [], filter_cols: [] },
    };
    const result = migrateConfig(cfg);
    expect(result.charts[0].layout).toBe("2x1");
  });

  it("width=2인 레거시 차트를 layout '2x1'로 업그레이드한다", () => {
    const cfg = {
      version: 1, kpi: [],
      charts: [{ type: "bar" as const, col: "a", width: 2 } as any],
      list: { visible_cols: [], filter_cols: [] },
    };
    const result = migrateConfig(cfg);
    expect(result.charts[0].layout).toBe("2x1");
    expect((result.charts[0] as any).width).toBeUndefined();
  });

  it("width=1인 레거시 차트를 layout '1x1'로 업그레이드한다", () => {
    const cfg = {
      version: 1, kpi: [],
      charts: [{ type: "bar" as const, col: "a", width: 1 } as any],
      list: { visible_cols: [], filter_cols: [] },
    };
    const result = migrateConfig(cfg);
    expect(result.charts[0].layout).toBe("1x1");
  });

  it("null 차트 항목을 필터링한다", () => {
    const cfg = {
      version: 1, kpi: [],
      charts: [null, { type: "bar" as const, col: "a" }] as any,
      list: { visible_cols: [], filter_cols: [] },
    };
    const result = migrateConfig(cfg);
    expect(result.charts).toHaveLength(1);
  });
});

// ── buildDefaultConfig ────────────────────────────────────────────────────────

describe("buildDefaultConfig", () => {
  const meta: DataMeta = {
    project: "test",
    total_rows: 100,
    columns: [
      { key: "지역", label: "지역", type: "category", unique_values: ["서울", "부산"] },
      { key: "부서", label: "부서", type: "category", unique_values: ["개발팀"] },
      { key: "점수", label: "점수", type: "numeric" },
      { key: "O_교육", label: "교육 여부", type: "numeric" },
      { key: "O_연구", label: "연구 여부", type: "numeric" },
    ],
  };

  it("카테고리 컬럼 수 만큼 차트를 생성한다 (최대 5개)", () => {
    const cfg = buildDefaultConfig(meta);
    const catCharts = cfg.charts.filter((c) => "col" in c && c.type !== "multibar");
    expect(catCharts.length).toBeGreaterThanOrEqual(2);
  });

  it("첫 번째 차트는 donut 타입이다", () => {
    const cfg = buildDefaultConfig(meta);
    expect(cfg.charts[0]).toMatchObject({ type: "donut" });
  });

  it("O_ 접두사 컬럼이 2개 이상이면 multibar 차트를 추가한다", () => {
    const cfg = buildDefaultConfig(meta);
    const multibar = cfg.charts.find((c) => c.type === "multibar");
    expect(multibar).toBeDefined();
  });

  it("KPI는 최대 4개를 생성한다", () => {
    const cfg = buildDefaultConfig(meta);
    expect(cfg.kpi.length).toBeLessThanOrEqual(4);
  });

  it("첫 번째 KPI는 total_rows 타입이다", () => {
    const cfg = buildDefaultConfig(meta);
    expect(cfg.kpi[0]).toMatchObject({ type: "total_rows" });
  });

  it("list.visible_cols는 최대 8개이다", () => {
    const cfg = buildDefaultConfig(meta);
    expect(cfg.list.visible_cols.length).toBeLessThanOrEqual(8);
  });
});

// ── loadConfig / saveConfig ───────────────────────────────────────────────────

describe("loadConfig / saveConfig", () => {
  const base: DashboardConfig = {
    version: 1,
    kpi: [{ label: "총 응답수", type: "total_rows" }],
    charts: [{ type: "bar", col: "지역", title: "지역" }],
    list: { visible_cols: ["지역"], filter_cols: [] },
  };

  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it("base가 있으면 localStorage를 무시하고 base를 반환한다", () => {
    localStorage.setItem(configKey("p"), JSON.stringify({ version: 1, kpi: [], charts: [], list: { visible_cols: [], filter_cols: [] } }));
    const result = loadConfig("p", base);
    expect(result?.kpi[0].type).toBe("total_rows");
  });

  it("saveConfig 후 loadConfig하면 동일한 설정을 반환한다", () => {
    saveConfig("demo", base);
    const result = loadConfig("demo");
    expect(result).toMatchObject({ version: 1 });
    expect(result?.kpi[0].type).toBe("total_rows");
  });

  it("localStorage에 저장된 값이 없으면 null을 반환한다", () => {
    expect(loadConfig("없는프로젝트")).toBeNull();
  });

  it("localStorage가 손상된 JSON이면 null을 반환한다", () => {
    localStorage.setItem(configKey("broken"), "{ invalid json }");
    expect(loadConfig("broken")).toBeNull();
  });

  it("meta columns에 없는 col을 참조하는 차트가 있으면 null을 반환한다 (손상 감지)", () => {
    const corruptedCfg: DashboardConfig = {
      ...base,
      charts: [{ type: "bar", col: "삭제된컬럼" }],
    };
    saveConfig("demo2", corruptedCfg);
    const meta: DataMeta = {
      project: "demo2", total_rows: 10,
      columns: [{ key: "지역", label: "지역", type: "category" }],
    };
    expect(loadConfig("demo2", null, meta)).toBeNull();
  });
});
