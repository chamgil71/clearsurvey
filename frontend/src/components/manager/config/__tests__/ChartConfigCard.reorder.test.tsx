import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChartConfigCard } from "@/components/manager/config/ChartConfigCard";
import type { DashboardConfig } from "@/types/dashboard";

// "차트 구성 (드래그로 순서 변경)"이라는 라벨을 실제 드래그 동작이 뒷받침하는지 고정한다.

function makeDashboard(): DashboardConfig {
  return {
    version: 1,
    kpi: [],
    charts: [
      { type: "donut", col: "A", title: "A" },
      { type: "donut", col: "B", title: "B" },
      { type: "donut", col: "C", title: "C" },
    ],
    list: { visible_cols: [], filter_cols: [] },
  };
}

function renderCard(
  dashboard: DashboardConfig,
  overrides: { onReorderChart?: (from: number, to: number) => void } = {},
) {
  const noop = () => {};
  return render(
    <ChartConfigCard
      dashboard={dashboard}
      config={{ columns: [] } as never}
      allAvailableChartCols={["A", "B", "C"]}
      chartTypes={["donut", "bar"]}
      onUpdateDashboardList={noop}
      onUpdateKpi={noop}
      onAddKpi={noop}
      onUpdateChart={noop}
      onAddChart={noop}
      onMoveChart={noop}
      onReorderChart={overrides.onReorderChart}
      onDeleteChart={noop}
      onUpdateExcelOptions={noop}
    />,
  );
}

function dragRow(fromIndex: number, toIndex: number) {
  const grips = screen.getAllByTestId("chart-drag-handle");
  const rows = screen.getAllByTestId("chart-row");

  fireEvent.mouseDown(grips[fromIndex]);
  fireEvent.dragStart(rows[fromIndex], { dataTransfer: {} });
  fireEvent.dragOver(rows[toIndex], { dataTransfer: {} });
  fireEvent.drop(rows[toIndex], { dataTransfer: {} });
  fireEvent.dragEnd(rows[fromIndex]);
}

describe("ChartConfigCard — 드래그 재배치", () => {
  it("그립을 잡고(mouseDown) 다른 행에 드롭하면 onReorderChart(from, to)가 호출된다", () => {
    const onReorderChart = vi.fn();
    renderCard(makeDashboard(), { onReorderChart });

    dragRow(0, 2);

    expect(onReorderChart).toHaveBeenCalledWith(0, 2);
  });

  it("그립을 잡지 않고(mouseDown 없이) 드래그를 시도하면 재배치가 일어나지 않는다", () => {
    const onReorderChart = vi.fn();
    renderCard(makeDashboard(), { onReorderChart });

    const rows = screen.getAllByTestId("chart-row");
    fireEvent.dragStart(rows[0], { dataTransfer: {} });
    fireEvent.dragOver(rows[2], { dataTransfer: {} });
    fireEvent.drop(rows[2], { dataTransfer: {} });

    expect(onReorderChart).not.toHaveBeenCalled();
  });

  it("같은 행에 드롭하면 onReorderChart가 호출되지 않는다", () => {
    const onReorderChart = vi.fn();
    renderCard(makeDashboard(), { onReorderChart });

    dragRow(1, 1);

    expect(onReorderChart).not.toHaveBeenCalled();
  });

  it("onReorderChart를 넘기지 않아도 드래그 시도 시 에러 없이 무시된다", () => {
    renderCard(makeDashboard(), {});
    expect(() => dragRow(0, 2)).not.toThrow();
  });
});
