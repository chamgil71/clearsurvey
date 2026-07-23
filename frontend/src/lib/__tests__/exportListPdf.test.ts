import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import type { Row } from "@/types/dashboard";

// html2canvas/jsPDF는 jsdom에서 실제 캔버스 래스터화를 할 수 없으므로 모킹하고, 대신
// exportListToPdf가 캡처 대상으로 만든 오프스크린 DOM과 jsPDF 호출 시퀀스가 옳은지를 검증한다.
const html2canvasMock = vi.fn();
vi.mock("html2canvas", () => ({
  default: (...args: unknown[]) => html2canvasMock(...args),
}));

const addImageMock = vi.fn();
const addPageMock = vi.fn();
const saveMock = vi.fn();
class FakeJsPDF {
  addImage = addImageMock;
  addPage = addPageMock;
  save = saveMock;
}
vi.mock("jspdf", () => ({ jsPDF: FakeJsPDF }));

import { exportListToPdf, chunkRows } from "@/lib/exportListPdf";

const SMALL_SHOT = { width: 2800, height: 50, toDataURL: () => "data:image/jpeg;base64,SMALL" };

describe("chunkRows", () => {
  it("size 단위로 나눈다", () => {
    expect(chunkRows([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("정확히 나누어떨어지면 마지막 청크에 나머지가 남지 않는다", () => {
    expect(
      chunkRows(
        Array.from({ length: 4 }, (_, i) => i),
        2,
      ),
    ).toEqual([
      [0, 1],
      [2, 3],
    ]);
  });

  it("빈 배열은 빈 청크 목록을 낸다", () => {
    expect(chunkRows([], 5)).toEqual([]);
  });

  it("전체 행 수가 청크 크기를 넘으면 여러 청크로 나뉜다", () => {
    const rows = Array.from({ length: 45 }, (_, i) => i);
    const chunks = chunkRows(rows, 40);
    expect(chunks.map((c) => c.length)).toEqual([40, 5]);
  });
});

describe("exportListToPdf", () => {
  beforeEach(() => {
    html2canvasMock.mockReset();
    html2canvasMock.mockResolvedValue(SMALL_SHOT);
    addImageMock.mockClear();
    addPageMock.mockClear();
    saveMock.mockClear();
  });

  afterEach(() => {
    document.body.innerHTML = "";
    document.documentElement.classList.remove("dark");
  });

  const rows: Row[] = [
    { 이름: "홍길동", 부서: "개발팀" },
    { 이름: "김철수", 부서: "영업팀" },
  ];

  it("헤더 행에 visibleCols 순서대로 컬럼명을 쓴다", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false);
    // calls[0] = 제목 블록, calls[1] = 첫 번째(유일한) 청크 표.
    const chunkEl = html2canvasMock.mock.calls[1][0] as HTMLElement;
    const headers = Array.from(chunkEl.querySelectorAll("thead th")).map((th) => th.textContent);
    expect(headers).toEqual(["이름", "부서"]);
  });

  it("rows 전체를 담는다 (화면 페이지네이션과 무관하게 필터링된 전체)", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false);
    const chunkEl = html2canvasMock.mock.calls[1][0] as HTMLElement;
    const bodyRows = chunkEl.querySelectorAll("tbody tr");
    expect(bodyRows.length).toBe(2);
    expect(bodyRows[0].textContent).toContain("홍길동");
    expect(bodyRows[1].textContent).toContain("김철수");
  });

  it("행 수가 청크 크기를 넘으면 청크별로 나눠 여러 번 캡처한다 (거대 단일 캔버스 방지)", async () => {
    const bigRows: Row[] = Array.from({ length: 260 }, (_, i) => ({ 이름: `사용자${i}` }));
    await exportListToPdf(bigRows, ["이름"], "test_proj", false);
    // 제목 1회 + 청크(250, 10) 2회 = 총 3회. 어떤 캔버스도 260행 전체를 한 번에 찍지 않는다.
    expect(html2canvasMock).toHaveBeenCalledTimes(3);
    const firstChunkRows = (html2canvasMock.mock.calls[1][0] as HTMLElement).querySelectorAll(
      "tbody tr",
    );
    const secondChunkRows = (html2canvasMock.mock.calls[2][0] as HTMLElement).querySelectorAll(
      "tbody tr",
    );
    expect(firstChunkRows.length).toBe(250);
    expect(secondChunkRows.length).toBe(10);
  }, 20000);

  it("청크가 한 페이지에 다 안 들어가면 addPage로 새 페이지를 연다", async () => {
    let callIndex = 0;
    html2canvasMock.mockImplementation(async () => {
      callIndex++;
      // 제목은 작게, 각 청크는 A4 가로 한 페이지 본문 높이(194mm)에 거의 꽉 차게 만들어
      // 두 번째 청크부터는 반드시 새 페이지가 필요하도록 한다.
      if (callIndex === 1) return SMALL_SHOT;
      return { width: 2800, height: 1933, toDataURL: () => "data:image/jpeg;base64,CHUNK" };
    });
    // 501행 → 청크(250, 250, 1) 3개. 3번째 청크부터 페이지 초과가 발생하도록 최소 행 수만 쓴다.
    const bigRows: Row[] = Array.from({ length: 501 }, (_, i) => ({ 이름: `사용자${i}` }));
    await exportListToPdf(bigRows, ["이름"], "test_proj", false);
    // 청크 3개 각각 한 페이지를 거의 다 채우므로, 매 청크 앞에서 새 페이지가 열린다.
    expect(addPageMock).toHaveBeenCalledTimes(3);
  }, 20000);

  it("visibleCols에 없는 컬럼(예: __row_id)은 노출되지 않는다", async () => {
    const rowsWithId: Row[] = [{ __row_id: "r1", 이름: "홍길동" }];
    await exportListToPdf(rowsWithId, ["이름"], "test_proj", false);
    const chunkEl = html2canvasMock.mock.calls[1][0] as HTMLElement;
    expect(chunkEl.textContent).not.toContain("r1");
    expect(chunkEl.textContent).not.toContain("__row_id");
  });

  it("셀 값을 textContent로 넣어 HTML로 해석되지 않는다", async () => {
    const rowsWithHtml: Row[] = [{ 이름: "<b>홍길동</b>" }];
    await exportListToPdf(rowsWithHtml, ["이름"], "test_proj", false);
    const chunkEl = html2canvasMock.mock.calls[1][0] as HTMLElement;
    expect(chunkEl.querySelector("tbody b")).toBeNull();
    expect(chunkEl.textContent).toContain("<b>홍길동</b>");
  });

  it("파일명은 {project}_list.pdf", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false);
    expect(saveMock).toHaveBeenCalledWith("test_proj_list.pdf");
  });

  it("검색어/필터 요약을 제목 블록에 포함한다", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false, {
      search: "홍길동",
      filterSummary: "부서: 개발팀",
      generatedAt: "2026-07-22 10:00",
    });
    const titleEl = html2canvasMock.mock.calls[0][0] as HTMLElement;
    expect(titleEl.textContent).toContain("홍길동");
    expect(titleEl.textContent).toContain("부서: 개발팀");
    expect(titleEl.textContent).toContain("2026-07-22 10:00");
  });

  it("다크모드에서는 캡처 동안 .dark를 벗기고 끝나면 복원한다", async () => {
    document.documentElement.classList.add("dark");
    const darkDuringCapture: boolean[] = [];
    html2canvasMock.mockImplementation(async () => {
      darkDuringCapture.push(document.documentElement.classList.contains("dark"));
      return SMALL_SHOT;
    });
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", true);
    expect(darkDuringCapture.every((v) => v === false)).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("호출 후 오프스크린 wrapper를 document에서 제거한다", async () => {
    await exportListToPdf(rows, ["이름", "부서"], "test_proj", false);
    expect(document.body.children.length).toBe(0);
  });
});
