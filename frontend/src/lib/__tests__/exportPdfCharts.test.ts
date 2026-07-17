import { describe, it, expect } from "vitest";
import { packPages } from "@/lib/exportPdfCharts";

/**
 * 페이지 배치 규칙. 이 파일이 지키는 계약은 하나다 — **카드는 절대 잘리지 않는다.**
 * 카드마다 이미지를 따로 갖고 통째로 배치하므로, 격자 밖으로 나가거나 겹치면 그게 곧 버그다.
 */

const card = (layout: string) => ({ img: `data:${layout}`, layout });

/** 한 페이지 안에서 두 카드가 겹치는지 검사. */
function hasOverlap(placed: ReturnType<typeof packPages>): boolean {
  const byPage = new Map<number, typeof placed>();
  for (const p of placed) {
    if (!byPage.has(p.page)) byPage.set(p.page, []);
    byPage.get(p.page)!.push(p);
  }
  for (const items of byPage.values()) {
    const cells = new Set<string>();
    for (const i of items) {
      for (let r = i.row; r < i.row + i.ch; r++) {
        for (let c = i.col; c < i.col + i.cw; c++) {
          const key = `${r},${c}`;
          if (cells.has(key)) return true;
          cells.add(key);
        }
      }
    }
  }
  return false;
}

describe("packPages", () => {
  it("1x1 6개는 3×2 한 페이지에 다 들어간다", () => {
    const out = packPages(Array.from({ length: 6 }, () => card("1x1")));
    expect(out.every((p) => p.page === 0)).toBe(true);
    expect(hasOverlap(out)).toBe(false);
  });

  it("1x1 7개째는 다음 페이지로 넘어간다", () => {
    const out = packPages(Array.from({ length: 7 }, () => card("1x1")));
    expect(out[5].page).toBe(0);
    expect(out[6].page).toBe(1);
    expect(out[6]).toMatchObject({ row: 0, col: 0 });
  });

  it("어떤 카드도 3열 2행 격자를 벗어나지 않는다", () => {
    const out = packPages([
      card("2x2"),
      card("1x1"),
      card("full"),
      card("2x1"),
      card("1x1"),
      card("2x2"),
      card("0.5x1"),
    ]);
    for (const p of out) {
      expect(p.col + p.cw).toBeLessThanOrEqual(3);
      expect(p.row + p.ch).toBeLessThanOrEqual(2);
    }
    expect(hasOverlap(out)).toBe(false);
  });

  // 사용자가 명시한 요구: 2x2가 연속 2개면 1페이지에 첫 번째, 2페이지에 두 번째.
  // 2x2는 가로 2칸을 쓰므로 3열 격자에 둘이 나란히 서려면 4열이 필요하다.
  it("2x2가 연속 2개면 페이지가 나뉜다", () => {
    const out = packPages([card("2x2"), card("2x2")]);
    expect(out[0].page).toBe(0);
    expect(out[1].page).toBe(1);
  });

  it("2x2 옆 남은 1열에는 1x1이 2개 들어간다", () => {
    const out = packPages([card("2x2"), card("1x1"), card("1x1")]);
    expect(out.map((p) => p.page)).toEqual([0, 0, 0]);
    // 2x2가 0~1열 2행을 다 쓰므로 1x1은 2열에 세로로 쌓인다.
    expect(out[1]).toMatchObject({ col: 2, row: 0 });
    expect(out[2]).toMatchObject({ col: 2, row: 1 });
    expect(hasOverlap(out)).toBe(false);
  });

  it("full은 3열을 다 쓴다", () => {
    const out = packPages([card("full"), card("1x1")]);
    expect(out[0]).toMatchObject({ col: 0, row: 0, cw: 3 });
    expect(out[1]).toMatchObject({ row: 1, page: 0 });
  });

  it("설정 순서를 유지한다(dense 재정렬 없음)", () => {
    const out = packPages([card("2x1"), card("1x1"), card("1x1")]);
    expect(out.map((p) => p.img)).toEqual(["data:2x1", "data:1x1", "data:1x1"]);
  });
});
