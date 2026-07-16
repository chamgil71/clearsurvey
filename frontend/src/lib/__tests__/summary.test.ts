import { describe, it, expect } from "vitest";
import {
  buildSummary,
  buildSummarySection,
  displayFilterValue,
  filterConditionLines,
  filterSummaryLine,
  resolveSummaryColumns,
  SUMMARY_DEFAULT_COLUMNS,
} from "@/lib/summary";
import { buildChartItems } from "@/lib/aggregate";
import type { ChartItem, DashboardConfig, Row } from "@/types/dashboard";

const rows: Row[] = [
  { 지역: "서울", 점수: 10 },
  { 지역: "서울", 점수: 20 },
  { 지역: "부산", 점수: 30 },
  { 지역: "대구", 점수: 40 },
];

const donut: ChartItem = { type: "donut", col: "지역", title: "지역 분포" };

function makeCfg(patch: Partial<DashboardConfig> = {}): DashboardConfig {
  return {
    version: 1,
    kpi: [],
    charts: [donut],
    list: { visible_cols: [], filter_cols: [] },
    ...patch,
  };
}

describe("buildSummarySection", () => {
  it("차트 집계를 값/비중/순위/누적으로 변환한다", () => {
    const s = buildSummarySection(donut, rows);
    expect(s.title).toBe("지역 분포");
    expect(s.total).toBe(4);
    expect(s.rows).toHaveLength(3);

    const seoul = s.rows[0];
    expect(seoul.name).toBe("서울");
    expect(seoul.value).toBe(2);
    expect(seoul.percent).toBeCloseTo(50);
    expect(seoul.rank).toBe(1);
    expect(seoul.cumulative).toBeCloseTo(50);
  });

  it("누적 비중은 마지막 행에서 100%가 된다", () => {
    const s = buildSummarySection(donut, rows);
    expect(s.rows[s.rows.length - 1].cumulative).toBeCloseTo(100);
  });

  it("비중 합계는 100%가 된다", () => {
    const s = buildSummarySection(donut, rows);
    const sum = s.rows.reduce((acc, r) => acc + r.percent, 0);
    expect(sum).toBeCloseTo(100);
  });

  it("제목이 없으면 컬럼명을 쓴다", () => {
    const s = buildSummarySection({ type: "bar", col: "지역" }, rows);
    expect(s.title).toBe("지역");
  });

  it("빈 데이터에서 안전하다 (0으로 나누지 않음)", () => {
    const s = buildSummarySection(donut, []);
    expect(s.rows).toEqual([]);
    expect(s.total).toBe(0);
    expect(s.truncated).toBe(false);
  });

  it("차트 탭(buildChartItems)과 값이 정확히 일치한다", () => {
    // 요약 표가 차트와 다른 수치를 내면 신뢰를 잃는다 — 같은 함수를 쓰는지 고정한다.
    const items = buildChartItems(donut, rows);
    const s = buildSummarySection(donut, rows);
    expect(s.rows.map((r) => [r.name, r.value])).toEqual(items.map((i) => [i.name, i.value]));
  });

  it("max_items로 잘리면 truncated=true, 비중은 표시 항목 합계 기준", () => {
    const s = buildSummarySection({ ...donut, max_items: 2 }, rows);
    expect(s.truncated).toBe(true);
    expect(s.rows).toHaveLength(2);
    // 전체는 4건이지만 상위 2개(서울 2 + 부산·대구 중 1)만 합산 → 합계 3
    expect(s.total).toBe(3);
    expect(s.rows.reduce((a, r) => a + r.percent, 0)).toBeCloseTo(100);
  });

  it("항목 수가 max_items와 같으면 잘린 게 아니다", () => {
    // 고유값 3개, max_items 3 → 경계값. 잘리지 않았는데 truncated가 켜지면 안 된다.
    const s = buildSummarySection({ ...donut, max_items: 3 }, rows);
    expect(s.rows).toHaveLength(3);
    expect(s.truncated).toBe(false);
  });

  it("multibar도 처리한다", () => {
    const mb: ChartItem = {
      type: "multibar",
      title: "점수 비교",
      cols: [{ col: "점수", label: "점수합" }],
    };
    const s = buildSummarySection(mb, rows);
    expect(s.rows[0]).toMatchObject({ name: "점수합", value: 100, percent: 100 });
  });
});

describe("resolveSummaryColumns", () => {
  it("설정이 없으면 값·비중이 기본", () => {
    expect(resolveSummaryColumns(makeCfg())).toEqual(SUMMARY_DEFAULT_COLUMNS);
  });

  it("빈 배열이면 기본값으로 되돌린다", () => {
    expect(resolveSummaryColumns(makeCfg({ summary: { columns: [] } }))).toEqual(
      SUMMARY_DEFAULT_COLUMNS,
    );
  });

  it("설정 순서와 무관하게 정해진 열 순서로 정규화한다", () => {
    const cfg = makeCfg({ summary: { columns: ["cumulative", "value"] } });
    expect(resolveSummaryColumns(cfg)).toEqual(["value", "cumulative"]);
  });
});

describe("buildSummary", () => {
  it("차트 순서대로 섹션을 만든다", () => {
    const cfg = makeCfg({
      charts: [
        { type: "donut", col: "지역", title: "A" },
        { type: "bar", col: "지역", title: "B" },
      ],
    });
    const doc = buildSummary(cfg, rows, "proj", 4, "", {});
    expect(doc.sections.map((s) => s.title)).toEqual(["A", "B"]);
    expect(doc.projectName).toBe("proj");
  });

  it("차트가 없으면 섹션도 없다", () => {
    const doc = buildSummary(makeCfg({ charts: [] }), rows, "p", 4, "", {});
    expect(doc.sections).toEqual([]);
  });

  it("빈 값 필터는 조건에서 제외한다", () => {
    const doc = buildSummary(makeCfg(), rows, "p", 4, "", { 지역: "서울", 점수: "" });
    expect(doc.filterNote.filters).toEqual([["지역", "서울"]]);
    expect(doc.filterNote.isFiltered).toBe(true);
  });

  it("필터가 없으면 isFiltered=false", () => {
    const doc = buildSummary(makeCfg(), rows, "p", 4, "", {});
    expect(doc.filterNote.isFiltered).toBe(false);
  });
});

describe("필터 기준 문구", () => {
  it("필터 없으면 전체 건수만", () => {
    const doc = buildSummary(makeCfg(), rows, "p", 1300, "", {});
    expect(filterSummaryLine(doc.filterNote)).toBe("전체 1,300건 (필터 없음)");
  });

  it("필터가 있으면 비율까지", () => {
    const doc = buildSummary(makeCfg(), rows, "p", 8, "", { 지역: "서울" });
    // filtered = rows(4건), 전체 8건 → 50.0%
    expect(filterSummaryLine(doc.filterNote)).toBe("전체 8건 중 4건 (50.0%)");
  });

  it("검색어와 필터를 조건 목록으로 낸다", () => {
    const doc = buildSummary(makeCfg(), rows, "p", 4, "축제", { 지역: "서울" });
    expect(filterConditionLines(doc.filterNote)).toEqual(['검색어: "축제"', "지역: 서울"]);
  });

  it("와일드카드로 감싼 필터 값은 벗겨서 보여준다", () => {
    expect(displayFilterValue("*카카오*")).toBe("카카오");
    expect(displayFilterValue("서울")).toBe("서울");
    expect(displayFilterValue("**")).toBe("**");
  });
});
