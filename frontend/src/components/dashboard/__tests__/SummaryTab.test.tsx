import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { SummaryTab } from "@/components/dashboard/SummaryTab";
import type { DashboardConfig, Row } from "@/types/dashboard";

const rows: Row[] = [{ 지역: "서울" }, { 지역: "서울" }, { 지역: "부산" }, { 지역: "대구" }];

function makeCfg(patch: Partial<DashboardConfig> = {}): DashboardConfig {
  return {
    version: 1,
    kpi: [],
    charts: [{ type: "donut", col: "지역", title: "지역 분포" }],
    list: { visible_cols: [], filter_cols: [] },
    ...patch,
  };
}

function renderTab(
  cfg: DashboardConfig,
  opts: { search?: string; filters?: Record<string, string> } = {},
) {
  return render(
    <SummaryTab
      cfg={cfg}
      filtered={rows}
      projectName="mumhwa"
      totalRows={4}
      search={opts.search ?? ""}
      filters={opts.filters ?? {}}
    />,
  );
}

describe("SummaryTab", () => {
  it("전체 제목이 [프로젝트명] 요약 형식이다", () => {
    renderTab(makeCfg());
    expect(screen.getByText("[mumhwa] 요약")).toBeInTheDocument();
  });

  it("소제목이 차트 제목이다", () => {
    renderTab(makeCfg());
    expect(screen.getByRole("heading", { name: "지역 분포" })).toBeInTheDocument();
  });

  it("기본 열은 항목·값·비중이다", () => {
    renderTab(makeCfg());
    expect(screen.getByRole("columnheader", { name: "항목" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "값" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "비중" })).toBeInTheDocument();
    expect(screen.queryByRole("columnheader", { name: "순위" })).not.toBeInTheDocument();
  });

  it("값과 비중을 함께 표시한다", () => {
    renderTab(makeCfg());
    const table = screen.getByRole("table");
    const seoulRow = within(table).getByRole("cell", { name: "서울" }).closest("tr")!;
    expect(within(seoulRow).getByText("2")).toBeInTheDocument();
    expect(within(seoulRow).getByText("50.0%")).toBeInTheDocument();
  });

  it("설정한 열만 표시한다", () => {
    renderTab(makeCfg({ summary: { columns: ["value", "rank"] } }));
    expect(screen.getByRole("columnheader", { name: "순위" })).toBeInTheDocument();
    expect(screen.queryByRole("columnheader", { name: "비중" })).not.toBeInTheDocument();
  });

  it("합계 행을 낸다", () => {
    renderTab(makeCfg());
    const table = screen.getByRole("table");
    const totalRow = within(table).getByRole("cell", { name: /합계/ }).closest("tr")!;
    expect(within(totalRow).getByText("4")).toBeInTheDocument();
  });

  it("max_items로 잘리면 합계에 상위 N개 기준임을 밝힌다", () => {
    renderTab(makeCfg({ charts: [{ type: "donut", col: "지역", title: "T", max_items: 2 }] }));
    expect(screen.getByText(/상위 2개 기준/)).toBeInTheDocument();
  });

  it("차트 순서대로 표를 만든다", () => {
    renderTab(
      makeCfg({
        charts: [
          { type: "donut", col: "지역", title: "첫째" },
          { type: "bar", col: "지역", title: "둘째" },
        ],
      }),
    );
    const headings = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(headings).toEqual(["첫째", "둘째"]);
  });

  it("차트가 없으면 안내를 띄운다", () => {
    renderTab(makeCfg({ charts: [] }));
    expect(screen.getByText(/표시할 차트가 없습니다/)).toBeInTheDocument();
  });

  it("필터가 없으면 하단 박스에 '필터 없음'", () => {
    renderTab(makeCfg());
    expect(screen.getByText("필터 기준")).toBeInTheDocument();
    expect(screen.getByText("전체 4건 (필터 없음)")).toBeInTheDocument();
  });

  it("필터가 있으면 조건을 나열한다", () => {
    renderTab(makeCfg(), { search: "축제", filters: { 지역: "*서울*" } });
    expect(screen.getByText(/검색어: "축제"/)).toBeInTheDocument();
    // 와일드카드는 벗겨서 보여준다
    expect(screen.getByText(/지역: 서울/)).toBeInTheDocument();
  });
});
