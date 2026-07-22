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

// ── 상세보기 방식 (split/drawer/modal) ──────────────────────────────────────

function makeCfgWithMode(mode: "split" | "drawer" | "modal", visible_cols = ["이름", "점수"]): DashboardConfig {
  return { ...makeCfg(visible_cols), layout: { listViewMode: mode } };
}

describe("DataTable — 상세보기 방식", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("설정값이 없으면 기본은 drawer(우측 슬라이드)다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} />);
    await user.click(screen.getByText("홍길동"));
    expect(await screen.findByText("상세조회 레코드")).toBeInTheDocument();
  });

  it("project prop이 없으면 상세보기 방식 select 자체가 안 나온다(오버라이드 저장할 곳이 없음)", () => {
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} />);
    expect(screen.queryByTitle(/상세를 보여주는 방식/)).toBeNull();
  });

  it("project prop이 있으면 상세보기 방식 select가 나오고 설정값을 보여준다", () => {
    render(<DataTable rows={rows} cfg={makeCfgWithMode("modal")} project="demo" />);
    const select = screen.getByTitle(/상세를 보여주는 방식/) as HTMLSelectElement;
    expect(select.value).toBe("modal");
  });

  it("modal 모드에서 행을 클릭하면 다이얼로그(role=dialog)로 열린다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfgWithMode("modal")} project="demo" />);
    await user.click(screen.getByText("홍길동"));
    expect(await screen.findByText("상세조회 레코드")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("split 모드에서 행을 클릭하면 표 옆에 패널이 오버레이 없이 나란히 나온다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfgWithMode("split")} project="demo" />);
    // split은 오버레이(role=dialog)를 쓰지 않는다.
    await user.click(screen.getByText("홍길동"));
    expect(await screen.findByText("상세조회 레코드")).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).toBeNull();
    // 표 헤더도 여전히 같은 화면에 보인다(오버레이로 가려지지 않음).
    expect(screen.getByText("김철수")).toBeVisible();
  });

  it("select로 방식을 바꾸면 localStorage에 프로젝트별 오버라이드로 저장된다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfgWithMode("drawer")} project="demo" />);
    const select = screen.getByTitle(/상세를 보여주는 방식/);
    await user.selectOptions(select, "modal");
    expect(localStorage.getItem("list-view-mode-override-demo")).toBe("modal");
  });

  it("오버라이드를 설정값과 같은 값으로 되돌리면 localStorage에서 지워진다", async () => {
    localStorage.setItem("list-view-mode-override-demo", "modal");
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfgWithMode("drawer")} project="demo" />);
    const select = screen.getByTitle(/상세를 보여주는 방식/);
    await user.selectOptions(select, "drawer");
    expect(localStorage.getItem("list-view-mode-override-demo")).toBeNull();
  });

  it("저장된 오버라이드가 있으면 설정값 대신 그걸 초기값으로 쓴다", () => {
    localStorage.setItem("list-view-mode-override-demo", "split");
    render(<DataTable rows={rows} cfg={makeCfgWithMode("drawer")} project="demo" />);
    const select = screen.getByTitle(/상세를 보여주는 방식/) as HTMLSelectElement;
    expect(select.value).toBe("split");
  });
});

// ── 컬럼 선택 (표시할 컬럼 체크박스) ─────────────────────────────────────────

describe("DataTable — 컬럼 선택", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("project prop이 없으면 컬럼 버튼이 안 나온다(오버라이드 저장할 곳이 없음)", () => {
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} />);
    expect(screen.queryByText(/^🧩 컬럼/)).toBeNull();
  });

  it("project prop이 있으면 컬럼 버튼에 현재 표시 개수/전체 개수가 보인다", () => {
    render(<DataTable rows={rows} cfg={makeCfg(["이름", "지역"])} project="demo" />);
    // rows[0] = {이름, 지역, 점수} → 전체 3개, 설정값 2개 표시
    expect(screen.getByText("🧩 컬럼 (2/3)")).toBeInTheDocument();
  });

  it("팝오버를 열면 전체 컬럼이 체크박스로 나오고, 설정된 컬럼만 체크돼 있다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} project="demo" />);
    await user.click(screen.getByText(/^🧩 컬럼/));
    expect(screen.getByLabelText("이름")).toBeChecked();
    expect(screen.getByLabelText("지역")).not.toBeChecked();
    expect(screen.getByLabelText("점수")).not.toBeChecked();
  });

  it("체크박스를 켜면 그 컬럼이 표에 추가되고 localStorage에 저장된다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} project="demo" />);
    await user.click(screen.getByText(/^🧩 컬럼/));
    await user.click(screen.getByLabelText("지역"));
    expect(screen.getByRole("columnheader", { name: /지역/ })).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem("list-visible-cols-override-demo")!)).toEqual([
      "이름",
      "지역",
    ]);
  });

  it("체크박스를 끄면 그 컬럼이 표에서 빠진다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름", "지역"])} project="demo" />);
    await user.click(screen.getByText(/^🧩 컬럼/));
    await user.click(screen.getByLabelText("이름"));
    expect(screen.queryByRole("columnheader", { name: "이름" })).toBeNull();
    expect(screen.getByRole("columnheader", { name: "지역" })).toBeInTheDocument();
  });

  it("'기본값으로'를 누르면 오버라이드가 지워지고 설정값으로 돌아간다", async () => {
    localStorage.setItem("list-visible-cols-override-demo", JSON.stringify(["이름", "지역", "점수"]));
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} project="demo" />);
    await user.click(screen.getByText(/^🧩 컬럼/));
    await user.click(screen.getByText("기본값으로"));
    expect(localStorage.getItem("list-visible-cols-override-demo")).toBeNull();
    expect(screen.queryByRole("columnheader", { name: "지역" })).toBeNull();
  });

  it("저장된 오버라이드가 있으면 설정값 대신 그걸 초기 표시 컬럼으로 쓴다", () => {
    localStorage.setItem("list-visible-cols-override-demo", JSON.stringify(["지역"]));
    render(<DataTable rows={rows} cfg={makeCfg(["이름"])} project="demo" />);
    expect(screen.queryByRole("columnheader", { name: "이름" })).toBeNull();
    expect(screen.getByRole("columnheader", { name: "지역" })).toBeInTheDocument();
  });
});
