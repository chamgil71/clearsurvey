import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { ChartCard } from "@/components/dashboard/ChartCard";
import type { ChartItem, ProjectData, Row } from "@/types/dashboard";

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  PieChart: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="pie-chart">{children}</div>
  ),
  BarChart: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="bar-chart">{children}</div>
  ),
  Pie: () => null,
  Bar: () => null,
  Cell: () => null,
  XAxis: () => null,
  YAxis: () => null,
  Tooltip: () => null,
  CartesianGrid: () => null,
  Legend: () => null,
}));

const rows: Row[] = [
  { 지역: "서울", 점수: 80 },
  { 지역: "부산", 점수: 90 },
  { 지역: "서울", 점수: 70 },
];

const data: ProjectData = {
  meta: { project: "test", total_rows: 3, columns: [] },
  rows,
};

// ── null 가드 ─────────────────────────────────────────────────────────────────

describe("ChartCard — null 가드", () => {
  it("chart가 null이면 아무것도 렌더링하지 않는다", () => {
    const { container } = render(
      <ChartCard chart={null as any} rows={rows} data={data} />,
    );
    expect(container.firstChild).toBeNull();
  });
});

// ── 타이틀 ────────────────────────────────────────────────────────────────────

describe("ChartCard — 타이틀", () => {
  it("title prop이 있으면 해당 타이틀이 표시된다", () => {
    render(<ChartCard chart={{ type: "bar", col: "지역", title: "지역 분포" }} rows={rows} data={data} />);
    expect(screen.getByText("지역 분포")).toBeInTheDocument();
  });

  it("title이 없으면 col 이름이 타이틀로 표시된다", () => {
    render(<ChartCard chart={{ type: "bar", col: "지역" }} rows={rows} data={data} />);
    expect(screen.getByText("지역")).toBeInTheDocument();
  });
});

// ── 데이터 없음 ───────────────────────────────────────────────────────────────

describe("ChartCard — 데이터 없음", () => {
  it("rows가 비어 있으면 경고 메시지가 표시된다", () => {
    render(
      <ChartCard chart={{ type: "bar", col: "지역", title: "지역" }} rows={[]} data={{ ...data, rows: [] }} />,
    );
    expect(screen.getByText(/표시할 데이터가 없습니다/)).toBeInTheDocument();
  });

  it("multibar에서 모든 합계가 0이면 경고 메시지가 표시된다", () => {
    const zeroRows: Row[] = [{ 점수: 0 }, { 점수: 0 }];
    const chart: ChartItem = {
      type: "multibar",
      title: "합계",
      cols: [{ col: "점수", label: "점수 합계" }],
    };
    render(<ChartCard chart={chart} rows={zeroRows} data={{ ...data, rows: zeroRows }} />);
    expect(screen.getByText(/표시할 데이터가 없습니다/)).toBeInTheDocument();
  });
});

// ── 차트 타입 ─────────────────────────────────────────────────────────────────

describe("ChartCard — 차트 타입", () => {
  it("type=donut 이면 PieChart가 렌더링된다", () => {
    render(<ChartCard chart={{ type: "donut", col: "지역", title: "파이" }} rows={rows} data={data} />);
    expect(screen.getByTestId("pie-chart")).toBeInTheDocument();
  });

  it("type=bar 이면 BarChart가 렌더링된다", () => {
    render(<ChartCard chart={{ type: "bar", col: "지역", title: "바" }} rows={rows} data={data} />);
    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
  });

  it("type=hbar 이면 BarChart가 렌더링된다", () => {
    render(<ChartCard chart={{ type: "hbar", col: "지역", title: "가로바" }} rows={rows} data={data} />);
    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
  });

  it("type=multibar 이면 cols 기반 BarChart가 렌더링된다", () => {
    const chart: ChartItem = {
      type: "multibar",
      title: "멀티바",
      cols: [{ col: "점수", label: "점수 합계" }],
    };
    render(<ChartCard chart={chart} rows={rows} data={data} />);
    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
  });
});

// ── 레이아웃 클래스 ───────────────────────────────────────────────────────────

describe("ChartCard — 레이아웃 클래스", () => {
  it("layout=2x1 이면 col-span-2 클래스가 적용된다", () => {
    const { container } = render(
      <ChartCard chart={{ type: "bar", col: "지역", title: "바", layout: "2x1" }} rows={rows} data={data} />,
    );
    expect(container.firstChild).toHaveClass("col-span-2");
  });

  it("layout=full 이면 col-span-full 클래스가 적용된다", () => {
    const { container } = render(
      <ChartCard chart={{ type: "bar", col: "지역", title: "바", layout: "full" }} rows={rows} data={data} />,
    );
    expect(container.firstChild).toHaveClass("col-span-full");
  });

  it("layout이 없으면 col-span 클래스가 없다 (기본 1x1)", () => {
    const { container } = render(
      <ChartCard chart={{ type: "bar", col: "지역", title: "바" }} rows={rows} data={data} />,
    );
    expect(container.firstChild).not.toHaveClass("col-span-2");
    expect(container.firstChild).not.toHaveClass("col-span-full");
  });
});
