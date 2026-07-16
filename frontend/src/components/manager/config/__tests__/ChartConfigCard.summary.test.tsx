import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChartConfigCard } from "@/components/manager/config/ChartConfigCard";
import type { DashboardConfig } from "@/types/dashboard";

// 어드민 설정 편집기는 백엔드에 프로젝트 원본 폴더(config.yaml)가 있어야 열리므로
// 브라우저로 구동 검증이 어렵다. 요약 표시 열 UI의 계약만 여기서 고정한다.

function makeDashboard(patch: Partial<DashboardConfig> = {}): DashboardConfig {
  return {
    version: 1,
    kpi: [],
    charts: [{ type: "donut", col: "지역", title: "지역" }],
    list: { visible_cols: [], filter_cols: [] },
    ...patch,
  };
}

function renderCard(dashboard: DashboardConfig, onUpdateSummary?: (p: unknown) => void) {
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
      onUpdateChart={noop}
      onAddChart={noop}
      onMoveChart={noop}
      onDeleteChart={noop}
      onUpdateExcelOptions={noop}
      onUpdateSummary={onUpdateSummary as never}
    />,
  );
}

describe("ChartConfigCard — 요약 탭 표시 열", () => {
  it("네 개 열 체크박스를 낸다", () => {
    renderCard(makeDashboard(), vi.fn());
    expect(screen.getByText("요약 탭 표시 열")).toBeInTheDocument();
    for (const label of ["값", "비중", "순위", "누적 비중"]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    }
  });

  it("설정이 없으면 값·비중이 켜져 있다", () => {
    renderCard(makeDashboard(), vi.fn());
    expect(screen.getByLabelText("값")).toBeChecked();
    expect(screen.getByLabelText("비중")).toBeChecked();
    expect(screen.getByLabelText("순위")).not.toBeChecked();
    expect(screen.getByLabelText("누적 비중")).not.toBeChecked();
  });

  it("저장된 설정을 반영한다", () => {
    renderCard(makeDashboard({ summary: { columns: ["value", "rank"] } }), vi.fn());
    expect(screen.getByLabelText("값")).toBeChecked();
    expect(screen.getByLabelText("순위")).toBeChecked();
    expect(screen.getByLabelText("비중")).not.toBeChecked();
  });

  it("체크하면 기존 열에 추가해서 올린다", async () => {
    const onUpdateSummary = vi.fn();
    renderCard(makeDashboard(), onUpdateSummary);
    await userEvent.click(screen.getByLabelText("순위"));
    expect(onUpdateSummary).toHaveBeenCalledWith({ columns: ["value", "percent", "rank"] });
  });

  it("체크 해제하면 해당 열만 뺀다", async () => {
    const onUpdateSummary = vi.fn();
    renderCard(makeDashboard(), onUpdateSummary);
    await userEvent.click(screen.getByLabelText("비중"));
    expect(onUpdateSummary).toHaveBeenCalledWith({ columns: ["value"] });
  });

  it("onUpdateSummary가 없으면 섹션 자체를 감춘다", () => {
    renderCard(makeDashboard(), undefined);
    expect(screen.queryByText("요약 탭 표시 열")).not.toBeInTheDocument();
  });
});
