import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataTable } from "@/components/dashboard/DataTable";
import type { DashboardConfig, Row } from "@/types/dashboard";

beforeEach(() => {
  URL.createObjectURL = vi.fn().mockReturnValue("blob:mock-url");
  URL.revokeObjectURL = vi.fn();
});

function makeCfg(visible_cols: string[] = []): DashboardConfig {
  return {
    version: 1,
    kpi: [],
    charts: [],
    list: { visible_cols, filter_cols: [] },
  };
}

const rows: Row[] = [
  { 이름: "홍길동", 지역: "서울", 점수: 80 },
  { 이름: "김철수", 지역: "부산", 점수: 90 },
  { 이름: "이영희", 지역: "서울", 점수: 70 },
];

// ── 컬럼 표시 ─────────────────────────────────────────────────────────────────

describe("DataTable — 컬럼 표시", () => {
  it("visible_cols가 있으면 해당 컬럼만 헤더에 표시된다", () => {
    render(<DataTable rows={rows} cfg={makeCfg(["이름", "지역"])} />);
    expect(screen.getByText("이름")).toBeInTheDocument();
    expect(screen.getByText("지역")).toBeInTheDocument();
    expect(screen.queryByRole("columnheader", { name: "점수" })).toBeNull();
  });

  it("visible_cols가 비어 있으면 rows[0]의 모든 키가 헤더가 된다", () => {
    render(<DataTable rows={rows} cfg={makeCfg([])} />);
    expect(screen.getByText("이름")).toBeInTheDocument();
    expect(screen.getByText("지역")).toBeInTheDocument();
    expect(screen.getByText("점수")).toBeInTheDocument();
  });

  it("rows가 비어 있으면 '검색 결과가 없습니다' 메시지가 표시된다", () => {
    render(<DataTable rows={[]} cfg={makeCfg(["이름"])} />);
    expect(screen.getByText("검색 결과가 없습니다")).toBeInTheDocument();
  });

  it("총 건수가 표시된다", () => {
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} />);
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});

// ── 정렬 ─────────────────────────────────────────────────────────────────────

describe("DataTable — 정렬", () => {
  it("숫자 헤더 클릭 시 오름차순 정렬이 적용된다", async () => {
    const user = userEvent.setup();
    const { container } = render(<DataTable rows={rows} cfg={makeCfg(["이름", "점수"])} />);
    await user.click(screen.getByText("점수"));
    const tbodyRows = container.querySelectorAll("tbody tr");
    // 오름차순: 70(이영희), 80(홍길동), 90(김철수)
    expect(tbodyRows[0].querySelector("td:nth-child(2)")?.textContent).toBe("70");
  });

  it("같은 헤더 재클릭 시 내림차순 정렬이 적용된다", async () => {
    const user = userEvent.setup();
    const { container } = render(<DataTable rows={rows} cfg={makeCfg(["이름", "점수"])} />);
    await user.click(screen.getByText("점수"));       // 오름차순 ▲
    await user.click(screen.getByText("점수 ▲"));    // 내림차순 ▼
    const tbodyRows = container.querySelectorAll("tbody tr");
    // 내림차순: 90(김철수), 80(홍길동), 70(이영희)
    expect(tbodyRows[0].querySelector("td:nth-child(2)")?.textContent).toBe("90");
  });

  it("다른 컬럼 클릭 시 해당 컬럼 오름차순 정렬로 전환된다", async () => {
    const user = userEvent.setup();
    const { container } = render(<DataTable rows={rows} cfg={makeCfg(["이름"])} />);
    await user.click(screen.getByText("이름"));
    const tbodyRows = container.querySelectorAll("tbody tr");
    // 가나다순: 김철수, 이영희, 홍길동
    expect(tbodyRows[0].querySelector("td")?.textContent).toBe("김철수");
  });
});

// ── 페이지네이션 ──────────────────────────────────────────────────────────────

describe("DataTable — 페이지네이션", () => {
  it("30건 이하이면 페이지네이션 버튼이 없다", () => {
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} />);
    expect(screen.queryByText("다음 ▶")).toBeNull();
  });

  it("30건 초과 시 '다음' 버튼과 페이지 표시가 나타난다", () => {
    const manyRows: Row[] = Array.from({ length: 35 }, (_, i) => ({ 이름: `사용자${i + 1}` }));
    render(<DataTable rows={manyRows} cfg={makeCfg(["이름"])} />);
    expect(screen.getByText("1 / 2 페이지")).toBeInTheDocument();
    expect(screen.getByText("다음 ▶")).toBeInTheDocument();
    expect(screen.queryByText("사용자31")).toBeNull();
  });

  it("'다음' 버튼 클릭 시 다음 페이지 데이터가 표시된다", async () => {
    const user = userEvent.setup();
    const manyRows: Row[] = Array.from({ length: 35 }, (_, i) => ({ 이름: `사용자${i + 1}` }));
    render(<DataTable rows={manyRows} cfg={makeCfg(["이름"])} />);
    await user.click(screen.getByText("다음 ▶"));
    expect(screen.getByText("2 / 2 페이지")).toBeInTheDocument();
    expect(screen.getByText("사용자31")).toBeInTheDocument();
    expect(screen.getByText("◀ 이전")).toBeInTheDocument();
  });
});

// ── 검색 하이라이트 ───────────────────────────────────────────────────────────

describe("DataTable — 검색 하이라이트", () => {
  it("search prop 매칭 텍스트에 mark 태그가 적용된다", () => {
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} search="홍" />);
    const mark = document.querySelector("mark");
    expect(mark).not.toBeNull();
    expect(mark?.textContent).toBe("홍");
  });

  it("search가 빈 문자열이면 mark 태그가 없다", () => {
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} search="" />);
    expect(document.querySelector("mark")).toBeNull();
  });
});

// ── CSV 내보내기 ──────────────────────────────────────────────────────────────

describe("DataTable — CSV 내보내기", () => {
  it("'화면 컬럼' 버튼 클릭 시 URL.createObjectURL이 호출된다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} />);
    await user.click(screen.getByText("⬇ CSV 내보내기 (화면 컬럼)"));
    expect(URL.createObjectURL).toHaveBeenCalledOnce();
  });

  it("'전체 컬럼' 버튼 클릭 시 URL.createObjectURL이 호출된다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} />);
    await user.click(screen.getByText("⬇ CSV 내보내기 (전체 컬럼)"));
    expect(URL.createObjectURL).toHaveBeenCalledOnce();
  });
});

// ── 행 클릭 → 상세 패널 ──────────────────────────────────────────────────────

describe("DataTable — 행 클릭", () => {
  it("행 클릭 시 상세 패널이 열린다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름", "점수"])} />);
    await user.click(screen.getByText("홍길동"));
    expect(await screen.findByText("상세조회 레코드")).toBeInTheDocument();
  });

  it("상세 패널에서 Close 버튼 클릭 시 패널이 닫힌다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름", "점수"])} />);
    await user.click(screen.getByText("홍길동"));
    await screen.findByText("상세조회 레코드");
    // Sheet의 기본 Close 버튼 (sr-only "Close" 텍스트)
    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByText("상세조회 레코드")).toBeNull();
  });
});
