import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DetailPanel } from "@/components/dashboard/DetailPanel";
import type { DashboardConfig, Row } from "@/types/dashboard";

const mockSave = vi.hoisted(() => vi.fn().mockResolvedValue(undefined));

vi.mock("html2pdf.js", () => ({
  default: () => {
    const chain: any = { set: () => chain, from: () => chain, save: mockSave };
    return chain;
  },
}));

const cfg: DashboardConfig = {
  version: 1,
  kpi: [],
  charts: [],
  list: { visible_cols: ["이름", "지역"], filter_cols: [] },
};

const row: Row = { 이름: "홍길동", 지역: "서울", 점수: 80, 비고: null };

// ── null 상태 ─────────────────────────────────────────────────────────────────

describe("DetailPanel — null 상태", () => {
  it("row=null 이면 안내 문구가 표시된다", () => {
    render(<DetailPanel row={null} cfg={cfg} onClose={vi.fn()} />);
    expect(screen.getByText("좌측 목록에서 항목을 선택하세요")).toBeInTheDocument();
  });

  it("row=null 이면 PDF 버튼이 없다", () => {
    render(<DetailPanel row={null} cfg={cfg} onClose={vi.fn()} />);
    expect(screen.queryByText("📄 PDF 다운로드")).toBeNull();
  });
});

// ── row 렌더링 ────────────────────────────────────────────────────────────────

describe("DetailPanel — row 렌더링", () => {
  it("'상세조회 레코드' 레이블이 표시된다", () => {
    render(<DetailPanel row={row} cfg={cfg} onClose={vi.fn()} />);
    expect(screen.getByText("상세조회 레코드")).toBeInTheDocument();
  });

  it("visible_cols 첫 번째 값이 제목으로 표시된다", () => {
    render(<DetailPanel row={row} cfg={cfg} onClose={vi.fn()} />);
    // titleKey = "이름" → title = "홍길동"
    expect(screen.getAllByText("홍길동").length).toBeGreaterThan(0);
  });

  it("null이 아닌 키-값 쌍이 dl에 렌더링된다", () => {
    render(<DetailPanel row={row} cfg={cfg} onClose={vi.fn()} />);
    expect(screen.getByText("이름")).toBeInTheDocument();
    expect(screen.getByText("지역")).toBeInTheDocument();
    expect(screen.getByText("서울")).toBeInTheDocument();
    expect(screen.getByText("80")).toBeInTheDocument();
  });

  it("null 값인 키는 렌더링되지 않는다", () => {
    render(<DetailPanel row={row} cfg={cfg} onClose={vi.fn()} />);
    // row.비고 = null → 렌더링 제외
    expect(screen.queryByText("비고")).toBeNull();
  });
});

// ── 닫기 버튼 ─────────────────────────────────────────────────────────────────

describe("DetailPanel — 닫기 버튼", () => {
  it("✕ 버튼 클릭 시 onClose가 호출된다", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<DetailPanel row={row} cfg={cfg} onClose={onClose} />);
    await user.click(screen.getByRole("button", { name: "✕" }));
    expect(onClose).toHaveBeenCalledOnce();
  });
});

// ── PDF 다운로드 ──────────────────────────────────────────────────────────────

describe("DetailPanel — PDF 다운로드", () => {
  it("PDF 다운로드 버튼이 표시되고 초기에는 활성화 상태다", () => {
    render(<DetailPanel row={row} cfg={cfg} onClose={vi.fn()} />);
    const btn = screen.getByText("📄 PDF 다운로드");
    expect(btn).toBeInTheDocument();
    expect(btn.closest("button")).not.toBeDisabled();
  });

  it("PDF 버튼 클릭 시 html2pdf().save()가 호출된다", async () => {
    const user = userEvent.setup();
    mockSave.mockClear();
    render(<DetailPanel row={row} cfg={cfg} onClose={vi.fn()} />);
    await user.click(screen.getByText("📄 PDF 다운로드"));
    await waitFor(() => expect(mockSave).toHaveBeenCalledOnce());
  });

  it("저장 완료 후 버튼이 초기 텍스트로 돌아온다", async () => {
    const user = userEvent.setup();
    render(<DetailPanel row={row} cfg={cfg} onClose={vi.fn()} />);
    await user.click(screen.getByText("📄 PDF 다운로드"));
    await waitFor(() =>
      expect(screen.getByText("📄 PDF 다운로드")).toBeInTheDocument(),
    );
  });
});
