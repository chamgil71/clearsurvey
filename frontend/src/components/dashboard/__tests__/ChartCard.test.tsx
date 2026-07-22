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

const { pieSpy } = vi.hoisted(() => ({ pieSpy: vi.fn() }));

vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  PieChart: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="pie-chart">{children}</div>
  ),
  BarChart: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="bar-chart">{children}</div>
  ),
  Pie: (props: any) => {
    pieSpy(props);
    return null;
  },
  Bar: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  // content가 실제로 호출되도록 흉내내 renderBarLabel의 show_percent 분기를 검증할 수 있게 한다.
  LabelList: ({ content: Content }: { content: (props: any) => React.ReactNode }) =>
    Content ? <>{Content({ x: 0, y: 0, width: 40, height: 20, value: 8 })}</> : null,
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

  it("donut은 12시 방향(startAngle=90)에서 시계 방향(endAngle=-270)으로 돈다", () => {
    // recharts 기본값(startAngle=0, endAngle=360)은 3시에서 시작해 반시계로 돌아
    // 카드마다 정렬된 첫 조각이 다른 위치에서 시작하는 것처럼 보인다 — 명시적으로
    // 고정해야 모든 donut 카드가 12시에서 시작해 sort_by 순서 그대로 시계 방향으로 돈다.
    pieSpy.mockClear();
    render(<ChartCard chart={{ type: "donut", col: "지역", title: "파이" }} rows={rows} data={data} />);
    expect(pieSpy).toHaveBeenCalledWith(
      expect.objectContaining({ startAngle: 90, endAngle: -270 }),
    );
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

// ── 막대 값 라벨 (show_labels 토글) ────────────────────────────────────────
// show_labels: 차트 안에 캡션을 항상 표시할지(도넛 조각 위·막대 위/옆).
// show_percent: 그 캡션(과 마우스오버 툴팁)에 비율(%)을 같이 적을지 — 캡션 노출 여부와는 별개.

describe("ChartCard — 막대 값 라벨", () => {
  it("show_labels가 false(기본)면 막대 라벨이 없다", () => {
    render(<ChartCard chart={{ type: "bar", col: "지역", title: "바" }} rows={rows} data={data} />);
    expect(screen.queryByText(/\(\d+\.\d%\)/)).not.toBeInTheDocument();
  });

  it("show_percent만 true고 show_labels가 없으면 막대 라벨이 없다(툴팁 전용 설정과 분리됨)", () => {
    render(
      <ChartCard
        chart={{ type: "bar", col: "지역", title: "바", show_percent: true }}
        rows={rows}
        data={data}
      />,
    );
    expect(screen.queryByText(/\(\d+\.\d%\)/)).not.toBeInTheDocument();
  });

  it("show_labels가 true면 세로 막대에 값 라벨이 표시된다(show_percent 없으면 %는 안 붙음)", () => {
    render(
      <ChartCard
        chart={{ type: "bar", col: "지역", title: "바", show_labels: true }}
        rows={rows}
        data={data}
      />,
    );
    expect(screen.queryByText(/\(\d+\.\d%\)/)).not.toBeInTheDocument();
    expect(screen.getByText(/건$/)).toBeInTheDocument();
  });

  it("show_labels와 show_percent가 둘 다 true면 세로 막대에 값(비율%) 라벨이 표시된다", () => {
    render(
      <ChartCard
        chart={{ type: "bar", col: "지역", title: "바", show_labels: true, show_percent: true }}
        rows={rows}
        data={data}
      />,
    );
    expect(screen.getByText(/\(\d+\.\d%\)/)).toBeInTheDocument();
  });

  it("show_labels와 show_percent가 둘 다 true면 가로 막대(hbar)에도 값(비율%) 라벨이 표시된다", () => {
    render(
      <ChartCard
        chart={{ type: "hbar", col: "지역", title: "가로바", show_labels: true, show_percent: true }}
        rows={rows}
        data={data}
      />,
    );
    expect(screen.getByText(/\(\d+\.\d%\)/)).toBeInTheDocument();
  });
});

// ── 클릭 → 필터 (교차필터) ───────────────────────────────────────────────────

describe("ChartCard — 클릭=필터 배지", () => {
  it("onSelect가 있고 카테고리형 컬럼(bar)이면 '클릭=필터' 배지가 표시된다", () => {
    render(
      <ChartCard
        chart={{ type: "bar", col: "지역", title: "지역" }}
        rows={rows}
        data={data}
        onSelect={vi.fn()}
      />,
    );
    expect(screen.getByText("클릭=필터")).toBeInTheDocument();
  });

  it("onSelect가 없으면 배지가 표시되지 않는다", () => {
    render(<ChartCard chart={{ type: "bar", col: "지역", title: "지역" }} rows={rows} data={data} />);
    expect(screen.queryByText("클릭=필터")).toBeNull();
  });

  it("수치형 컬럼이면 onSelect가 있어도 배지가 표시되지 않는다", () => {
    const numericData: ProjectData = {
      meta: { project: "test", total_rows: 3, columns: [{ key: "점수", label: "점수", type: "numeric" }] },
      rows,
    };
    render(
      <ChartCard
        chart={{ type: "bar", col: "점수", title: "점수" }}
        rows={rows}
        data={numericData}
        onSelect={vi.fn()}
      />,
    );
    expect(screen.queryByText("클릭=필터")).toBeNull();
  });

  it("multibar는 onSelect가 있어도 배지가 표시되지 않는다", () => {
    const chart: ChartItem = {
      type: "multibar",
      title: "멀티바",
      cols: [{ col: "점수", label: "점수 합계" }],
    };
    render(<ChartCard chart={chart} rows={rows} data={data} onSelect={vi.fn()} />);
    expect(screen.queryByText("클릭=필터")).toBeNull();
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
