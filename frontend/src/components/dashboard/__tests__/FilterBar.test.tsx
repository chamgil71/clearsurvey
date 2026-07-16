import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterBar } from "@/components/dashboard/FilterBar";
import type { ProjectData, DashboardConfig } from "@/types/dashboard";

const data: ProjectData = {
  meta: { project: "test", total_rows: 5, columns: [] },
  rows: [
    { 지역: "서울" },
    { 지역: "부산" },
    { 지역: "서울" },
    { 지역: "대구" },
    { 지역: "서울" },
  ],
  aggregates: {
    지역: { 서울: 3, 부산: 1, 대구: 1 },
    부서: { 개발팀: 2, 영업팀: 3 },
  },
};

const cfg: DashboardConfig = {
  version: 1,
  kpi: [],
  charts: [],
  list: { visible_cols: [], filter_cols: ["지역", "부서"] },
};

function renderBar(overrides: Partial<{
  filteredCount: number;
  search: string;
  filters: Record<string, string>;
}> = {}) {
  const props = {
    data,
    cfg,
    search: "",
    filters: {},
    filteredCount: 5,
    onSearch: vi.fn(),
    onFilterChange: vi.fn(),
    onReset: vi.fn(),
    ...overrides,
  };
  const result = render(<FilterBar {...props} />);
  return { ...result, props };
}

// ── 기본 렌더링 ───────────────────────────────────────────────────────────────

describe("FilterBar — 기본 렌더링", () => {
  it("검색 인풋이 렌더링된다", () => {
    renderBar();
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  it("filter_cols에 정의된 컬럼 수만큼 셀렉트가 렌더링된다", () => {
    renderBar();
    expect(screen.getAllByRole("combobox")).toHaveLength(2);
  });

  it("셀렉트를 열면 aggregates 옵션들이 표시된다", async () => {
    const user = userEvent.setup();
    renderBar();
    // Radix Select는 트리거를 열어야 옵션이 렌더링된다.
    await user.click(screen.getAllByRole("combobox")[0]);
    expect(screen.getByText("서울 (3)")).toBeInTheDocument();
    expect(screen.getByText("부산 (1)")).toBeInTheDocument();
  });
});

// ── 필터 활성 상태 ────────────────────────────────────────────────────────────

describe("FilterBar — 필터 활성 상태", () => {
  it("filteredCount === total이면 카운트 표시와 초기화 버튼이 없다", () => {
    renderBar({ filteredCount: 5 });
    expect(screen.queryByText(/\/.*건/)).toBeNull();
    expect(screen.queryByText("초기화")).toBeNull();
  });

  it("filteredCount < total이면 'N / M건' 카운트가 표시된다", () => {
    renderBar({ filteredCount: 2 });
    expect(screen.getByText("2 / 5건")).toBeInTheDocument();
  });

  it("filteredCount < total이면 초기화 버튼이 표시된다", () => {
    renderBar({ filteredCount: 2 });
    expect(screen.getByText("초기화")).toBeInTheDocument();
  });
});

// ── 인터랙션 ──────────────────────────────────────────────────────────────────

describe("FilterBar — 인터랙션", () => {
  it("검색어 입력 시 onSearch가 입력값으로 호출된다", async () => {
    const user = userEvent.setup();
    const { props } = renderBar();
    await user.type(screen.getByRole("searchbox"), "a");
    expect(props.onSearch).toHaveBeenLastCalledWith("a");
  });

  it("셀렉트 변경 시 onFilterChange가 호출된다", async () => {
    const user = userEvent.setup();
    const { props } = renderBar();
    // Radix Select: 트리거를 클릭해 연 뒤 옵션을 클릭한다.
    await user.click(screen.getAllByRole("combobox")[0]);
    await user.click(screen.getByText("서울 (3)"));
    expect(props.onFilterChange).toHaveBeenCalledWith("지역", "서울");
  });

  it("초기화 버튼 클릭 시 onReset이 호출된다", async () => {
    const user = userEvent.setup();
    const { props } = renderBar({ filteredCount: 2 });
    await user.click(screen.getByText("초기화"));
    expect(props.onReset).toHaveBeenCalledOnce();
  });
});

// ── filter_cols가 없는 경우 ───────────────────────────────────────────────────

describe("FilterBar — filter_cols 없음", () => {
  it("filter_cols가 빈 배열이면 셀렉트가 렌더링되지 않는다", () => {
    const emptyCfg: DashboardConfig = { ...cfg, list: { visible_cols: [], filter_cols: [] } };
    render(
      <FilterBar
        data={data}
        cfg={emptyCfg}
        search=""
        filters={{}}
        filteredCount={5}
        onSearch={vi.fn()}
        onFilterChange={vi.fn()}
        onReset={vi.fn()}
      />,
    );
    expect(screen.queryByRole("combobox")).toBeNull();
  });
});
