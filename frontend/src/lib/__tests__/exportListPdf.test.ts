import { describe, it, expect, vi, afterEach } from "vitest";
import type { Row } from "@/types/dashboard";

// exportToPdf(html2pdf 경유)는 jsdom에서 실행할 수 없으므로 모킹하고, 대신
// exportListToPdf가 만들어 넘기는 오프스크린 DOM이 옳은지를 검증한다.
const exportToPdfMock = vi.fn().mockResolvedValue(undefined);
vi.mock("@/lib/exportPdf", () => ({
  exportToPdf: (...args: unknown[]) => exportToPdfMock(...args),
}));

import { exportListToPdf } from "@/lib/exportListPdf";

describe("exportListToPdf", () => {
  afterEach(() => {
    exportToPdfMock.mockClear();
    document.body.innerHTML = "";
  });

  const rows: Row[] = [
    { 이름: "홍길동", 부서: "개발팀" },
    { 이름: "김철수", 부서: "영업팀" },
  ];

  it("헤더 행에 visibleCols 순서대로 컬럼명을 쓴다", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false);
    const el = exportToPdfMock.mock.calls[0][0] as HTMLElement;
    const headers = Array.from(el.querySelectorAll("thead th")).map((th) => th.textContent);
    expect(headers).toEqual(["이름", "부서"]);
  });

  it("rows 전체를 담는다 (화면 페이지네이션과 무관하게 필터링된 전체)", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false);
    const el = exportToPdfMock.mock.calls[0][0] as HTMLElement;
    const bodyRows = el.querySelectorAll("tbody tr");
    expect(bodyRows.length).toBe(2);
    expect(bodyRows[0].textContent).toContain("홍길동");
    expect(bodyRows[1].textContent).toContain("김철수");
  });

  it("visibleCols에 없는 컬럼(예: __row_id)은 노출되지 않는다", async () => {
    const rowsWithId: Row[] = [{ __row_id: "r1", 이름: "홍길동" }];
    await exportListToPdf(rowsWithId, ["이름"], "test_proj", false);
    const el = exportToPdfMock.mock.calls[0][0] as HTMLElement;
    expect(el.textContent).not.toContain("r1");
    expect(el.textContent).not.toContain("__row_id");
  });

  it("셀 값을 textContent로 넣어 HTML로 해석되지 않는다", async () => {
    const rowsWithHtml: Row[] = [{ 이름: "<b>홍길동</b>" }];
    await exportListToPdf(rowsWithHtml, ["이름"], "test_proj", false);
    const el = exportToPdfMock.mock.calls[0][0] as HTMLElement;
    expect(el.querySelector("tbody b")).toBeNull();
    expect(el.textContent).toContain("<b>홍길동</b>");
  });

  it("exportToPdf에 landscape 방향과 list 접미사를 넘긴다", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", true);
    expect(exportToPdfMock).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      "test_proj",
      true,
      { orientation: "landscape", suffix: "list" },
    );
  });

  it("호출 후 오프스크린 wrapper를 document에서 제거한다", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false);
    expect(document.body.children.length).toBe(0);
  });

  it("검색어/필터 요약을 제목 블록에 포함한다", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false, {
      search: "홍길동",
      filterSummary: "부서: 개발팀",
      generatedAt: "2026-07-22 10:00",
    });
    const el = exportToPdfMock.mock.calls[0][0] as HTMLElement;
    expect(el.textContent).toContain("홍길동");
    expect(el.textContent).toContain("부서: 개발팀");
    expect(el.textContent).toContain("2026-07-22 10:00");
  });
});
