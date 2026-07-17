/**
 * DetailPanel 편집 모드 (dashboard_edit_plan §7.2 · 7단계)
 *
 * 드로어를 편집 창구로 택한 이유는 표가 `visible_cols` 만 보여주는 반면 드로어는 전 컬럼을
 * 보여주기 때문이다. 그 전제가 깨지지 않는지, 그리고 계획이 지목한 회귀 지점들을 못박는다:
 *   - 편집 모드에서 **빈 값 컬럼도 보여야** 한다 (안 보이면 채울 방법이 없다)
 *   - `__row_id` 는 편집 모드에서도 안 보인다
 *   - 변경된 컬럼만 저장 payload 에 담긴다
 *   - 저장 실패 시 입력을 날리지 않는다
 *   - 읽기 모드는 기존 동작 그대로 (빈 값 감춤 · 저장 버튼 없음)
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DetailPanel } from "@/components/dashboard/DetailPanel";
import { ROW_ID_COL } from "@/types/dashboard";
import type { ColumnMeta, DashboardConfig, Row } from "@/types/dashboard";

const cfg: DashboardConfig = {
  version: 1,
  kpi: [],
  charts: [],
  list: { visible_cols: ["이름"], filter_cols: [] },
};

const columns: ColumnMeta[] = [
  { key: "이름", label: "이름", type: "text" },
  { key: "지역", label: "지역", type: "category", unique_values: ["서울", "부산", "대구"] },
  { key: "점수", label: "점수", type: "numeric" },
  { key: "비고", label: "비고", type: "text" },
];

const row: Row = {
  이름: "홍길동",
  지역: "서울",
  점수: 90,
  비고: "", // 빈 값 — 편집 모드에서 반드시 보여야 한다
  [ROW_ID_COL]: "r2",
};

function renderPanel(props: Partial<React.ComponentProps<typeof DetailPanel>> = {}) {
  return render(
    <DetailPanel row={row} cfg={cfg} columns={columns} onClose={() => {}} {...props} />,
  );
}

describe("DetailPanel — 읽기 모드 (기존 동작 유지)", () => {
  it("저장 버튼이 없다", () => {
    renderPanel();
    expect(screen.queryByRole("button", { name: /저장$/ })).toBeNull();
  });

  it("빈 값 컬럼은 감춘다", () => {
    renderPanel();
    expect(screen.queryByText("비고")).toBeNull();
  });

  it("값을 텍스트로 보여준다 (입력창 아님)", () => {
    renderPanel();
    // 제목과 '이름' 필드 값으로 두 번 나온다 — 렌더 여부만 본다
    expect(screen.getAllByText("홍길동").length).toBeGreaterThan(0);
    expect(screen.queryByLabelText("이름")).toBeNull(); // 입력창은 없다
  });
});

describe("DetailPanel — 편집 모드", () => {
  it("★ 빈 값 컬럼도 보여준다 (안 보이면 채울 방법이 없다)", () => {
    renderPanel({ editable: true });
    expect(screen.getByText("비고")).toBeInTheDocument();
    expect(screen.getByLabelText("비고")).toBeInTheDocument();
  });

  it("__row_id 는 편집 모드에서도 안 보인다", () => {
    renderPanel({ editable: true });
    expect(screen.queryByText(ROW_ID_COL)).toBeNull();
    expect(screen.queryByLabelText(ROW_ID_COL)).toBeNull();
  });

  it("타입별로 위젯이 갈린다", () => {
    renderPanel({ editable: true });
    expect(screen.getByLabelText("점수")).toHaveAttribute("type", "number");
    expect(screen.getByLabelText("지역")).toHaveAttribute("list"); // datalist = 제안 + 자유입력
    expect(screen.getByLabelText("비고").tagName).toBe("TEXTAREA");
  });

  it("category 후보값이 datalist 로 제공된다", () => {
    const { container } = renderPanel({ editable: true });
    const opts = [...container.querySelectorAll("datalist option")].map((o) =>
      o.getAttribute("value"),
    );
    expect(opts).toEqual(["서울", "부산", "대구"]);
  });

  it("변경 전에는 저장 버튼이 비활성", () => {
    renderPanel({ editable: true, onSave: vi.fn() });
    expect(screen.getByRole("button", { name: /저장/ })).toBeDisabled();
  });

  it("★ 변경된 컬럼만 저장 payload 에 담긴다", async () => {
    const onSave = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    renderPanel({ editable: true, onSave });

    await user.clear(screen.getByLabelText("지역"));
    await user.type(screen.getByLabelText("지역"), "부산");
    await user.click(screen.getByRole("button", { name: /저장/ }));

    await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
    expect(onSave).toHaveBeenCalledWith({ 지역: "부산" }); // 이름·점수는 안 담긴다
  });

  it("여러 컬럼을 고치면 한 번에 담긴다 (행 1건 저장)", async () => {
    const onSave = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    renderPanel({ editable: true, onSave });

    await user.clear(screen.getByLabelText("점수"));
    await user.type(screen.getByLabelText("점수"), "95");
    await user.type(screen.getByLabelText("비고"), "확인함");
    await user.click(screen.getByRole("button", { name: /저장/ }));

    await waitFor(() => expect(onSave).toHaveBeenCalled());
    expect(onSave.mock.calls[0][0]).toEqual({ 점수: 95, 비고: "확인함" });
  });

  it("원래 값으로 되돌리면 변경으로 치지 않는다", async () => {
    const user = userEvent.setup();
    renderPanel({ editable: true, onSave: vi.fn() });

    const 지역 = screen.getByLabelText("지역");
    await user.clear(지역);
    await user.type(지역, "부산");
    expect(screen.getByRole("button", { name: /저장/ })).toBeEnabled();

    await user.clear(지역);
    await user.type(지역, "서울"); // 원래 값
    await waitFor(() => expect(screen.getByRole("button", { name: /저장/ })).toBeDisabled());
  });

  it("숫자 필드를 비우면 0 이 아니라 null 로 보낸다", async () => {
    const onSave = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    renderPanel({ editable: true, onSave });

    await user.clear(screen.getByLabelText("점수"));
    await user.click(screen.getByRole("button", { name: /저장/ }));

    await waitFor(() => expect(onSave).toHaveBeenCalled());
    expect(onSave.mock.calls[0][0]).toEqual({ 점수: null });
  });

  it("★ 저장에 실패하면 입력을 날리지 않는다", async () => {
    const onSave = vi.fn().mockRejectedValue(new Error("network"));
    const user = userEvent.setup();
    renderPanel({ editable: true, onSave });

    await user.clear(screen.getByLabelText("지역"));
    await user.type(screen.getByLabelText("지역"), "부산");
    await user.click(screen.getByRole("button", { name: /저장/ }));

    await waitFor(() => expect(onSave).toHaveBeenCalled());
    expect(screen.getByLabelText("지역")).toHaveValue("부산"); // 그대로 남아 있다
    expect(screen.getByRole("button", { name: /저장/ })).toBeEnabled(); // 다시 시도 가능
  });

  it("저장 성공하면 변경 표시가 사라진다", async () => {
    const onSave = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    renderPanel({ editable: true, onSave });

    await user.clear(screen.getByLabelText("지역"));
    await user.type(screen.getByLabelText("지역"), "부산");
    await user.click(screen.getByRole("button", { name: /저장/ }));

    await waitFor(() => expect(screen.getByRole("button", { name: /저장/ })).toBeDisabled());
  });

  it("saving 중에는 패널이 잠긴다 (낙관적 반영을 안 하므로 결과를 기다린다)", () => {
    renderPanel({ editable: true, onSave: vi.fn(), saving: true });
    expect(screen.getByLabelText("지역")).toBeDisabled();
    expect(screen.getByRole("button", { name: /저장 중/ })).toBeDisabled();
  });

  it("dirty 상태를 바깥에 알린다 (Sheet 닫기 가드가 이걸 본다)", async () => {
    const onDirtyChange = vi.fn();
    const user = userEvent.setup();
    renderPanel({ editable: true, onSave: vi.fn(), onDirtyChange });

    expect(onDirtyChange).toHaveBeenLastCalledWith(false);
    await user.type(screen.getByLabelText("비고"), "x");
    await waitFor(() => expect(onDirtyChange).toHaveBeenLastCalledWith(true));
  });

  it("이미 손 편집된 필드에 표시가 붙는다", () => {
    renderPanel({ editable: true, editedCols: { 지역: "인천" } });
    expect(screen.getByTitle(/직접 수정한 값 \(원래: 인천\)/)).toBeInTheDocument();
  });
});
