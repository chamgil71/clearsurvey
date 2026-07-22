import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChartConfigCard } from "@/components/manager/config/ChartConfigCard";
import type { DashboardConfig } from "@/types/dashboard";

// 차트 사이에 끼워 넣는 텍스트 박스 편집 UI 계약을 고정한다.

function makeDashboard(patch: Partial<DashboardConfig> = {}): DashboardConfig {
  return {
    version: 1,
    kpi: [],
    charts: [{ type: "donut", col: "지역", title: "지역" }],
    list: { visible_cols: [], filter_cols: [] },
    ...patch,
  };
}

function renderCard(
  dashboard: DashboardConfig,
  overrides: {
    onUpdateChart?: (i: number, patch: Record<string, unknown>) => void;
    onAddTextBlock?: () => void;
    onMoveChart?: (i: number, dir: -1 | 1) => void;
    onDeleteChart?: (i: number) => void;
  } = {},
) {
  const noop = () => {};
  return render(
    <ChartConfigCard
      dashboard={dashboard}
      config={{ columns: [] } as never}
      allAvailableChartCols={["지역"]}
      chartTypes={["donut", "bar"]}
      onUpdateDashboardList={noop}
      onUpdateKpi={noop}
      onAddKpi={noop}
      onUpdateChart={overrides.onUpdateChart ?? noop}
      onAddChart={noop}
      onAddTextBlock={overrides.onAddTextBlock}
      onMoveChart={overrides.onMoveChart ?? noop}
      onDeleteChart={overrides.onDeleteChart ?? noop}
      onUpdateExcelOptions={noop}
    />,
  );
}

describe("ChartConfigCard — 텍스트 박스", () => {
  it("onAddTextBlock을 넘기면 '+ 텍스트 박스 추가' 버튼이 나온다", () => {
    renderCard(makeDashboard(), { onAddTextBlock: vi.fn() });
    expect(screen.getByText("+ 텍스트 박스 추가")).toBeInTheDocument();
  });

  it("onAddTextBlock이 없으면 버튼이 안 나온다", () => {
    renderCard(makeDashboard());
    expect(screen.queryByText("+ 텍스트 박스 추가")).not.toBeInTheDocument();
  });

  it("버튼을 누르면 onAddTextBlock이 호출된다", async () => {
    const onAddTextBlock = vi.fn();
    renderCard(makeDashboard(), { onAddTextBlock });
    await userEvent.click(screen.getByText("+ 텍스트 박스 추가"));
    expect(onAddTextBlock).toHaveBeenCalledTimes(1);
  });

  it("텍스트 항목은 '텍스트 박스' 배지와 textarea를 보여주고, 컬럼/차트타입 select는 없다", () => {
    renderCard(makeDashboard({ charts: [{ type: "text", text: "안내 문구", layout: "2x1" }] }));
    expect(screen.getByText("텍스트 박스")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("차트 사이에 표시할 설명 문구를 입력하세요")).toHaveValue(
      "안내 문구",
    );
    expect(screen.queryByText("-- 컬럼 --")).not.toBeInTheDocument();
  });

  it("textarea를 고치면 onUpdateChart(i, {text})가 호출된다", async () => {
    const onUpdateChart = vi.fn();
    renderCard(makeDashboard({ charts: [{ type: "text", text: "", layout: "2x1" }] }), {
      onUpdateChart,
    });
    const textarea = screen.getByPlaceholderText("차트 사이에 표시할 설명 문구를 입력하세요");
    await userEvent.type(textarea, "x");
    expect(onUpdateChart).toHaveBeenCalledWith(0, { text: "x" });
  });

  it("크기 select를 바꾸면 onUpdateChart(i, {layout})가 호출된다", async () => {
    const onUpdateChart = vi.fn();
    renderCard(makeDashboard({ charts: [{ type: "text", text: "", layout: "2x1" }] }), {
      onUpdateChart,
    });
    await userEvent.selectOptions(screen.getByTitle("박스 크기(비율)"), "full");
    expect(onUpdateChart).toHaveBeenCalledWith(0, { layout: "full" });
  });

  it("텍스트 박스도 이동·삭제 버튼이 일반 차트와 같은 핸들러(index 기반)로 동작한다", async () => {
    const onMoveChart = vi.fn();
    const onDeleteChart = vi.fn();
    renderCard(
      makeDashboard({
        charts: [
          { type: "donut", col: "지역", title: "지역" },
          { type: "text", text: "설명", layout: "2x1" },
        ],
      }),
      { onMoveChart, onDeleteChart },
    );
    const deleteButtons = screen.getAllByText("×");
    await userEvent.click(deleteButtons[deleteButtons.length - 1]);
    expect(onDeleteChart).toHaveBeenCalledWith(1);
  });

  it("텍스트 박스 기본 크기(layout 미지정)는 2x1로 표시된다", () => {
    renderCard(makeDashboard({ charts: [{ type: "text", text: "" }] }));
    expect(screen.getByTitle("박스 크기(비율)")).toHaveValue("2x1");
  });
});
