/**
 * `__row_id` 가 사용자에게 새지 않는지 (dashboard_edit_plan §2 · 2단계)
 *
 * 백엔드는 `meta.columns` 에서 __row_id 를 빼지만, 프런트에는 **컬럼을 meta.columns 가 아니라
 * `Object.keys(row)` 로 직접 구하는 경로가 셋** 있다. 거기서는 식별자가 그대로 샌다:
 *   - DataTable  visible_cols 미설정 시의 헤더 폴백
 *   - DataTable  "CSV 내보내기 (전체 컬럼)"
 *   - DetailPanel 상세 드로어(+ PDF 저장)
 *
 * 셋 다 `visibleRowKeys()` 를 쓰도록 고쳤고, 여기서 회귀를 막는다.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataTable } from "@/components/dashboard/DataTable";
import { DetailPanel } from "@/components/dashboard/DetailPanel";
import { ROW_ID_COL, visibleRowKeys } from "@/types/dashboard";
import type { DashboardConfig, Row } from "@/types/dashboard";

let lastBlobText = "";

beforeEach(() => {
  lastBlobText = "";
  URL.createObjectURL = vi.fn((blob: Blob) => {
    // Blob 내용을 동기적으로 훔쳐본다 (jsdom 에는 Blob.text() 가 있으나 비동기라 사용 곤란)
    lastBlobText = (blob as unknown as { __text?: string }).__text ?? "";
    return "blob:mock-url";
  }) as unknown as typeof URL.createObjectURL;
  URL.revokeObjectURL = vi.fn();

  // Blob 생성 시 원문을 보관하도록 감싼다
  const RealBlob = globalThis.Blob;
  vi.stubGlobal(
    "Blob",
    class extends RealBlob {
      __text: string;
      constructor(parts: BlobPart[], options?: BlobPropertyBag) {
        super(parts, options);
        this.__text = parts.map(String).join("");
      }
    },
  );
});

const cfg = (visible_cols: string[] = []): DashboardConfig => ({
  version: 1,
  kpi: [],
  charts: [],
  list: { visible_cols, filter_cols: [] },
});

const rows: Row[] = [
  { 이름: "홍길동", 지역: "서울", [ROW_ID_COL]: "r2" },
  { 이름: "김철수", 지역: "부산", [ROW_ID_COL]: "r5" },
];

describe("visibleRowKeys", () => {
  it("__row_id 를 제외한 키만 돌려준다", () => {
    expect(visibleRowKeys(rows[0])).toEqual(["이름", "지역"]);
  });

  it("null/undefined 행에도 안전하다", () => {
    expect(visibleRowKeys(null)).toEqual([]);
    expect(visibleRowKeys(undefined)).toEqual([]);
  });

  it("백엔드 ROW_ID_COL 과 값이 같아야 한다", () => {
    // engine/config.py 의 ROW_ID_COL — 바뀌면 양쪽을 함께 고쳐야 한다
    expect(ROW_ID_COL).toBe("__row_id");
  });
});

describe("DataTable — __row_id 노출 차단", () => {
  it("visible_cols 미설정 폴백에서 __row_id 가 헤더로 뜨지 않는다", () => {
    render(<DataTable rows={rows} cfg={cfg([])} />);
    expect(screen.getByRole("columnheader", { name: /이름/ })).toBeInTheDocument();
    expect(screen.queryByRole("columnheader", { name: new RegExp(ROW_ID_COL) })).toBeNull();
  });

  it("'CSV 내보내기 (전체 컬럼)' 에 __row_id 가 들어가지 않는다", async () => {
    const user = userEvent.setup();
    render(<DataTable rows={rows} cfg={cfg(["이름"])} />);
    await user.click(screen.getByText(/CSV 내보내기 \(전체 컬럼\)/));

    expect(lastBlobText).toContain("이름");
    expect(lastBlobText).toContain("지역");         // 화면에 없던 컬럼도 나와야 하고
    expect(lastBlobText).not.toContain(ROW_ID_COL); // 식별자는 빠져야 한다
    expect(lastBlobText).not.toContain("r2");
  });
});

describe("DetailPanel — __row_id 노출 차단", () => {
  it("상세 드로어에 __row_id 가 표시되지 않는다", () => {
    render(<DetailPanel row={rows[0]} cfg={cfg(["이름"])} onClose={() => {}} />);
    // 제목과 '이름' 필드 값으로 두 번 나온다 — 렌더 자체가 됐는지만 확인
    expect(screen.getAllByText("홍길동").length).toBeGreaterThan(0);
    expect(screen.getByText("지역")).toBeInTheDocument();   // 일반 필드는 보이고
    expect(screen.queryByText(ROW_ID_COL)).toBeNull();      // 식별자는 안 보인다
    expect(screen.queryByText("r2")).toBeNull();
  });
});
