import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { KpiRow } from "@/components/dashboard/KpiRow";
import type { Row, DashboardConfig } from "@/types/dashboard";

const rows: Row[] = [
  { 지역: "서울", 부서: "개발팀", 점수: 80 },
  { 지역: "부산", 부서: "영업팀", 점수: 90 },
  { 지역: "서울 강남", 부서: "개발팀", 점수: 70 },
  { 지역: "대구", 부서: "기획팀", 점수: 60 },
];

function makeCfg(kpi: DashboardConfig["kpi"]): DashboardConfig {
  return {
    version: 1,
    kpi,
    charts: [],
    list: { visible_cols: [], filter_cols: [] },
  };
}

// ── total_rows ────────────────────────────────────────────────────────────────

describe("KpiRow — total_rows", () => {
  it("전체 행 수를 표시한다", () => {
    render(<KpiRow rows={rows} cfg={makeCfg([{ label: "총 응답수", type: "total_rows" }])} />);
    expect(screen.getByText("4건")).toBeInTheDocument();
    expect(screen.getByText("총 응답수")).toBeInTheDocument();
  });
});

// ── count_value — 정확 일치 ───────────────────────────────────────────────────

describe("KpiRow — count_value 정확 일치", () => {
  it("정확히 일치하는 행 수를 카운트한다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([{ label: "서울 수", type: "count_value", col: "지역", value: "서울" }])}
      />,
    );
    expect(screen.getByText("1건")).toBeInTheDocument();
  });
});

// ── count_value — 와일드카드 ──────────────────────────────────────────────────

describe("KpiRow — count_value 와일드카드", () => {
  it("*keyword* 패턴은 포함 검색이다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([{ label: "서울 포함", type: "count_value", col: "지역", value: "*서울*" }])}
      />,
    );
    expect(screen.getByText("2건")).toBeInTheDocument();
  });

  it("keyword* 패턴은 시작 검색이다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([{ label: "서울로 시작", type: "count_value", col: "지역", value: "서울*" }])}
      />,
    );
    expect(screen.getByText("2건")).toBeInTheDocument();
  });

  it("*keyword 패턴은 끝 검색이다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([{ label: "강남으로 끝", type: "count_value", col: "지역", value: "*강남" }])}
      />,
    );
    expect(screen.getByText("1건")).toBeInTheDocument();
  });
});

// ── count_value — 부정 조건 ───────────────────────────────────────────────────

describe("KpiRow — count_value 부정 조건", () => {
  it("<> 연산자는 값이 다른 행을 카운트한다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([{ label: "서울 아님", type: "count_value", col: "지역", value: "<>서울" }])}
      />,
    );
    expect(screen.getByText("3건")).toBeInTheDocument();
  });

  it("!= 연산자도 동일하게 동작한다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([{ label: "서울 아님", type: "count_value", col: "지역", value: "!=서울" }])}
      />,
    );
    expect(screen.getByText("3건")).toBeInTheDocument();
  });

  it("<>*keyword* 는 포함하지 않는 행을 카운트한다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([{ label: "서울 미포함", type: "count_value", col: "지역", value: "<>*서울*" }])}
      />,
    );
    expect(screen.getByText("2건")).toBeInTheDocument();
  });
});

// ── sum ───────────────────────────────────────────────────────────────────────

describe("KpiRow — sum", () => {
  it("숫자 컬럼의 합계를 표시한다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([{ label: "점수 합계", type: "sum", col: "점수" }])}
      />,
    );
    expect(screen.getByText("300")).toBeInTheDocument();
  });
});

// ── 복합 KPI ─────────────────────────────────────────────────────────────────

describe("KpiRow — 복합 KPI", () => {
  it("여러 KPI 카드를 동시에 렌더링한다", () => {
    render(
      <KpiRow
        rows={rows}
        cfg={makeCfg([
          { label: "총 응답수", type: "total_rows" },
          { label: "서울", type: "count_value", col: "지역", value: "서울" },
          { label: "점수 합계", type: "sum", col: "점수" },
        ])}
      />,
    );
    expect(screen.getByText("총 응답수")).toBeInTheDocument();
    expect(screen.getByText("서울")).toBeInTheDocument();
    expect(screen.getByText("점수 합계")).toBeInTheDocument();
  });

  it("kpi 배열이 비어있으면 아무것도 렌더링하지 않는다", () => {
    const { container } = render(<KpiRow rows={rows} cfg={makeCfg([])} />);
    expect(container.querySelector(".kpi-card")).toBeNull();
  });
});
