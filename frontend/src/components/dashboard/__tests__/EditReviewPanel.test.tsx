/**
 * EditReviewPanel (dashboard_edit_plan §7.3 · §5.4 · §6.2)
 *
 * 못박는 것:
 *   - 붙지 못한 편집(충돌)을 **버리지 않고 보여준다** — 조용히 사라지는 게 최악의 실패다
 *   - 수정한 xlsx 는 **미리보기에서 멈춘다** — 확인해야 반영된다
 *   - **발행은 먼저 묻는다** — 공개 대시보드로 나가는 되돌리기 어려운 동작이다
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EditReviewPanel } from "@/components/dashboard/EditReviewPanel";
import type { ConflictRecord, EditRecord } from "@/hooks/useRowEdit";

const edits: EditRecord[] = [
  { row_id: "r2", col: "지역", value: "서울특별시", prev: "서울", at: "2026-07-17T14:02:11" },
  { row_id: "r5", col: "점수", value: 95, prev: 90, origin: "xlsx-import" },
];

const base = {
  open: true,
  onOpenChange: vi.fn(),
  edits,
  busy: false,
  onRevert: vi.fn().mockResolvedValue(undefined),
  onImport: vi.fn().mockResolvedValue([]),
};

describe("EditReviewPanel — 편집 목록", () => {
  it("이전값 → 현재값을 보여준다", () => {
    render(<EditReviewPanel {...base} />);
    expect(screen.getByText("직접 수정한 값 (2건)")).toBeInTheDocument();
    expect(screen.getByText("서울")).toBeInTheDocument();
    expect(screen.getByText("서울특별시")).toBeInTheDocument();
  });

  it("엑셀에서 가져온 편집을 구분해 표시한다", () => {
    render(<EditReviewPanel {...base} />);
    expect(screen.getByText(/엑셀에서 가져옴/)).toBeInTheDocument();
  });

  it("개별 되돌리기는 그 칸만 지목한다", async () => {
    const onRevert = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    render(<EditReviewPanel {...base} onRevert={onRevert} />);
    await user.click(screen.getAllByRole("button", { name: "되돌리기" })[0]);
    expect(onRevert).toHaveBeenCalledWith("r2", "지역");
  });

  it("전체 되돌리기는 인자 없이 부른다", async () => {
    const onRevert = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    render(<EditReviewPanel {...base} onRevert={onRevert} />);
    await user.click(screen.getByRole("button", { name: "전체 되돌리기" }));
    expect(onRevert).toHaveBeenCalledWith();
  });

  it("편집이 없으면 안내만 보여준다", () => {
    render(<EditReviewPanel {...base} edits={[]} />);
    expect(screen.getByText("직접 수정한 값이 없습니다.")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "전체 되돌리기" })).toBeNull();
  });
});

describe("EditReviewPanel — 충돌 표시", () => {
  const conflicts: ConflictRecord[] = [
    { row_id: "r9", col: "지역", reason: "row_missing", value: "제주" },
    {
      row_id: "r2", col: "점수", reason: "prev_mismatch",
      value: 95, expected_prev: 90, actual_prev: 70,
    },
  ];

  it("★ 붙지 못한 편집을 버리지 않고 보여준다", () => {
    render(<EditReviewPanel {...base} conflicts={conflicts} />);
    expect(screen.getByText("반영하지 못한 편집 2건")).toBeInTheDocument();
    expect(screen.getByText(/그 행이 원본에 없습니다/)).toBeInTheDocument();
    expect(screen.getByText(/제주/)).toBeInTheDocument(); // 무엇을 넣으려 했는지 남는다
  });

  it("prev 불일치는 무엇이 달라졌는지 보여준다", () => {
    render(<EditReviewPanel {...base} conflicts={conflicts} />);
    expect(screen.getByText(/정제 결과가 편집 당시와 달라졌습니다/)).toBeInTheDocument();
    expect(screen.getByText(/원래 90 였는데 지금은/)).toBeInTheDocument();
  });

  it("충돌이 없으면 경고가 없다", () => {
    render(<EditReviewPanel {...base} conflicts={[]} />);
    expect(screen.queryByText(/반영하지 못한 편집/)).toBeNull();
  });
});

describe("EditReviewPanel — 발행", () => {
  it("onDeploy 가 없으면 발행 영역을 숨긴다 (백엔드 없는 환경)", () => {
    render(<EditReviewPanel {...base} />);
    expect(screen.queryByRole("button", { name: "발행하기" })).toBeNull();
  });

  it("★ 바로 발행하지 않고 먼저 묻는다", async () => {
    const onDeploy = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    render(<EditReviewPanel {...base} onDeploy={onDeploy} />);

    await user.click(screen.getByRole("button", { name: "발행하기" }));
    expect(onDeploy).not.toHaveBeenCalled(); // 아직 아니다
    expect(await screen.findByText("편집 2건을 발행합니다")).toBeInTheDocument();
    expect(screen.getByText(/공개 대시보드에 배포되어 누구나 보게 됩니다/)).toBeInTheDocument();
  });

  it("확인해야 발행한다", async () => {
    const onDeploy = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    render(<EditReviewPanel {...base} onDeploy={onDeploy} />);

    await user.click(screen.getByRole("button", { name: "발행하기" }));
    await user.click(await screen.findByRole("button", { name: "발행" }));
    await waitFor(() => expect(onDeploy).toHaveBeenCalledTimes(1));
  });

  it("취소하면 발행하지 않는다", async () => {
    const onDeploy = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    render(<EditReviewPanel {...base} onDeploy={onDeploy} />);

    await user.click(screen.getByRole("button", { name: "발행하기" }));
    await user.click(await screen.findByRole("button", { name: "취소" }));
    await waitFor(() => expect(screen.queryByText("편집 2건을 발행합니다")).toBeNull());
    expect(onDeploy).not.toHaveBeenCalled();
  });
});

describe("EditReviewPanel — 수정한 엑셀 올리기", () => {
  const xlsx = () =>
    new File(["x"], "edited.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

  it("★ 미리보기에서 멈춘다 — 확인 전에는 반영하지 않는다", async () => {
    const onImport = vi
      .fn()
      .mockResolvedValue([{ row_id: "r2", col: "지역", value: "부산", prev: "서울" }]);
    const user = userEvent.setup();
    render(<EditReviewPanel {...base} onImport={onImport} />);

    await user.upload(screen.getByLabelText("수정한 엑셀 파일"), xlsx());

    await waitFor(() => expect(screen.getByText("1개 셀이 바뀝니다. 반영할까요?")).toBeInTheDocument());
    expect(onImport).toHaveBeenCalledTimes(1);
    expect(onImport.mock.calls[0][1]).toBe(false); // apply=false = 미리보기
  });

  it("반영을 눌러야 apply=true 로 다시 부른다", async () => {
    const onImport = vi
      .fn()
      .mockResolvedValue([{ row_id: "r2", col: "지역", value: "부산", prev: "서울" }]);
    const user = userEvent.setup();
    render(<EditReviewPanel {...base} onImport={onImport} />);

    await user.upload(screen.getByLabelText("수정한 엑셀 파일"), xlsx());
    await waitFor(() => screen.getByText("1개 셀이 바뀝니다. 반영할까요?"));
    await user.click(screen.getByRole("button", { name: "반영" }));

    await waitFor(() => expect(onImport).toHaveBeenCalledTimes(2));
    expect(onImport.mock.calls[1][1]).toBe(true);
  });

  it("취소하면 미리보기만 닫힌다", async () => {
    const onImport = vi
      .fn()
      .mockResolvedValue([{ row_id: "r2", col: "지역", value: "부산", prev: "서울" }]);
    const user = userEvent.setup();
    render(<EditReviewPanel {...base} onImport={onImport} />);

    await user.upload(screen.getByLabelText("수정한 엑셀 파일"), xlsx());
    await waitFor(() => screen.getByText("1개 셀이 바뀝니다. 반영할까요?"));
    await user.click(screen.getByRole("button", { name: "취소" }));

    await waitFor(() => expect(screen.queryByText(/개 셀이 바뀝니다/)).toBeNull());
    expect(onImport).toHaveBeenCalledTimes(1); // apply 호출 없음
  });
});
