import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GuideDrawer } from "@/components/dashboard/GuideDrawer";

// ── 닫힌 상태 ─────────────────────────────────────────────────────────────────

describe("GuideDrawer — 닫힌 상태", () => {
  it("isOpen=false 이면 드로어 컨텐츠가 렌더링되지 않는다", () => {
    render(<GuideDrawer isOpen={false} onClose={vi.fn()} />);
    expect(screen.queryByRole("heading", { name: /설문 정제 가이드/ })).toBeNull();
  });
});

// ── 열린 상태 ─────────────────────────────────────────────────────────────────

describe("GuideDrawer — 열린 상태", () => {
  it("isOpen=true 이면 '설문 정제 가이드' 제목이 표시된다", () => {
    render(<GuideDrawer isOpen={true} onClose={vi.fn()} />);
    expect(screen.getByRole("heading", { name: /설문 정제 가이드/ })).toBeInTheDocument();
  });

  it("기본 탭(Transform)에 정제 규칙 목록이 표시된다", () => {
    render(<GuideDrawer isOpen={true} onClose={vi.fn()} />);
    expect(screen.getByText("copy")).toBeInTheDocument();
    expect(screen.getByText("norm_date")).toBeInTheDocument();
    expect(screen.getByText("mask_name")).toBeInTheDocument();
    expect(screen.getByText("addr_split")).toBeInTheDocument();
  });

  it("모든 그룹(기본/정규화/검증/마스킹/변환/주소/집계)이 표시된다", () => {
    render(<GuideDrawer isOpen={true} onClose={vi.fn()} />);
    ["기본", "정규화", "검증", "마스킹", "변환", "주소", "집계"].forEach((g) => {
      expect(screen.getAllByText(g).length).toBeGreaterThan(0);
    });
  });
});

// ── 탭 전환 ───────────────────────────────────────────────────────────────────

describe("GuideDrawer — 탭 전환", () => {
  it("'CLI 명령어' 탭 클릭 시 python 명령어가 표시된다", async () => {
    const user = userEvent.setup();
    render(<GuideDrawer isOpen={true} onClose={vi.fn()} />);
    await user.click(screen.getByRole("tab", { name: "CLI 명령어" }));
    expect(screen.getByText(/python main\.py analyze/)).toBeInTheDocument();
  });

  it("'정제 규칙' 탭으로 다시 돌아올 수 있다", async () => {
    const user = userEvent.setup();
    render(<GuideDrawer isOpen={true} onClose={vi.fn()} />);
    await user.click(screen.getByRole("tab", { name: "CLI 명령어" }));
    await user.click(screen.getByRole("tab", { name: /정제 규칙/ }));
    expect(screen.getByText("copy")).toBeInTheDocument();
  });
});

// ── 닫기 ─────────────────────────────────────────────────────────────────────

describe("GuideDrawer — 닫기", () => {
  it("Sheet 기본 Close 버튼 클릭 시 onClose가 호출된다", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<GuideDrawer isOpen={true} onClose={onClose} />);
    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("Escape 키 입력 시 onClose가 호출된다", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<GuideDrawer isOpen={true} onClose={onClose} />);
    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });
});
