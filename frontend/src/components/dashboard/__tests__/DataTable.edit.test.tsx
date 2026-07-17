/**
 * DataTable 편집 연동 — 드로어 닫기 가드 (dashboard_edit_plan §7.2 · 7단계)
 *
 * 저장 안 된 변경이 있는데 드로어가 닫히면 입력이 조용히 사라진다. Sheet 는 오버레이 클릭·Esc
 * 로도 닫히므로 패널 안에서는 막을 수 없다 — Sheet 를 가진 DataTable 이 가로챈다.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataTable } from "@/components/dashboard/DataTable";
import { ROW_ID_COL } from "@/types/dashboard";
import type { ColumnMeta, DashboardConfig, Row } from "@/types/dashboard";

beforeEach(() => {
  URL.createObjectURL = vi.fn().mockReturnValue("blob:mock");
  URL.revokeObjectURL = vi.fn();
});

const cfg: DashboardConfig = {
  version: 1,
  kpi: [],
  charts: [],
  list: { visible_cols: ["이름", "지역"], filter_cols: [] },
};

const columns: ColumnMeta[] = [
  { key: "이름", label: "이름", type: "text" },
  { key: "지역", label: "지역", type: "category", unique_values: ["서울", "부산"] },
];

const rows: Row[] = [
  { 이름: "홍길동", 지역: "서울", [ROW_ID_COL]: "r2" },
  { 이름: "김철수", 지역: "부산", [ROW_ID_COL]: "r3" },
];

const openDrawer = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByText("홍길동"));
  await waitFor(() => expect(screen.getByText("상세조회 레코드")).toBeInTheDocument());
};

describe("DataTable — 편집 모드 전달", () => {
  it("editable=false 면 드로어가 읽기 전용이다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={cfg} columns={columns} />);
    await openDrawer(user);
    expect(screen.queryByRole("button", { name: /^저장/ })).toBeNull();
  });

  it("editable=true 면 드로어에서 편집할 수 있다", async () => {
    const user = userEvent.setup();
    render(
      <DataTable rows={rows} cfg={cfg} columns={columns} editable onSaveRow={vi.fn()} />,
    );
    await openDrawer(user);
    expect(screen.getByLabelText("지역")).toBeInTheDocument();
  });

  it("저장 시 그 행과 변경분이 함께 넘어온다", async () => {
    const onSaveRow = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    render(
      <DataTable rows={rows} cfg={cfg} columns={columns} editable onSaveRow={onSaveRow} />,
    );
    await openDrawer(user);

    await user.clear(screen.getByLabelText("지역"));
    await user.type(screen.getByLabelText("지역"), "부산");
    await user.click(screen.getByRole("button", { name: /저장/ }));

    await waitFor(() => expect(onSaveRow).toHaveBeenCalled());
    const [row, changes] = onSaveRow.mock.calls[0];
    expect(row[ROW_ID_COL]).toBe("r2"); // 어느 행인지가 __row_id 로 전달된다
    expect(changes).toEqual({ 지역: "부산" });
  });
});

describe("DataTable — 저장 안 된 변경 닫기 가드", () => {
  it("변경이 없으면 그냥 닫힌다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={cfg} columns={columns} editable onSaveRow={vi.fn()} />);
    await openDrawer(user);

    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByText("상세조회 레코드")).toBeNull());
  });

  it("★ 변경이 있으면 Esc 로 닫아도 먼저 묻는다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={cfg} columns={columns} editable onSaveRow={vi.fn()} />);
    await openDrawer(user);

    await user.clear(screen.getByLabelText("지역"));
    await user.type(screen.getByLabelText("지역"), "부산");
    await user.keyboard("{Escape}");

    await waitFor(() =>
      expect(screen.getByText("저장하지 않은 변경이 있습니다")).toBeInTheDocument(),
    );
    // 아직 닫히지 않았다
    expect(screen.getByText("상세조회 레코드")).toBeInTheDocument();
  });

  it("'계속 편집' 을 고르면 드로어와 입력이 유지된다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={cfg} columns={columns} editable onSaveRow={vi.fn()} />);
    await openDrawer(user);

    await user.clear(screen.getByLabelText("지역"));
    await user.type(screen.getByLabelText("지역"), "부산");
    await user.keyboard("{Escape}");
    await waitFor(() => screen.getByText("저장하지 않은 변경이 있습니다"));

    await user.click(screen.getByRole("button", { name: "계속 편집" }));
    await waitFor(() => expect(screen.queryByText("저장하지 않은 변경이 있습니다")).toBeNull());
    expect(screen.getByLabelText("지역")).toHaveValue("부산");
  });

  it("'변경 버리고 닫기' 를 고르면 닫힌다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={cfg} columns={columns} editable onSaveRow={vi.fn()} />);
    await openDrawer(user);

    await user.clear(screen.getByLabelText("지역"));
    await user.type(screen.getByLabelText("지역"), "부산");
    await user.keyboard("{Escape}");
    await waitFor(() => screen.getByText("저장하지 않은 변경이 있습니다"));

    await user.click(screen.getByRole("button", { name: "변경 버리고 닫기" }));
    await waitFor(() => expect(screen.queryByText("상세조회 레코드")).toBeNull());
  });

  it("✕ 버튼으로 닫을 때도 묻는다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={cfg} columns={columns} editable onSaveRow={vi.fn()} />);
    await openDrawer(user);

    await user.type(screen.getByLabelText("지역"), "x");
    await user.click(screen.getByRole("button", { name: "✕" }));

    await waitFor(() =>
      expect(screen.getByText("저장하지 않은 변경이 있습니다")).toBeInTheDocument(),
    );
  });
});
