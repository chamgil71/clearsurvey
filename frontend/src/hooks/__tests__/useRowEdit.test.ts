/**
 * useRowEdit — 저장 연결 (dashboard_edit_plan §5.1 · 8단계)
 *
 * 못박는 것:
 *   - 저장 성공 시 **서버가 계산한 data 로 교체**한다 (낙관적 반영 없음 — §5.3)
 *   - 저장 실패 시 throw 한다 → DetailPanel 이 draft 를 유지한다 (§5.1 ⑩)
 *   - __row_id 없는 데이터는 저장하지 않는다 (어느 행인지 특정 불가)
 *   - 프로젝트가 이 PC 에 없으면(404) 조용히 비운다 — 정상 상태다
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor, act } from "@testing-library/react";

vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));
vi.mock("@/lib/supabase", () => ({
  supabase: {
    isPlaceholder: true,
    auth: {
      getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
      onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
    },
  },
}));

import { useRowEdit } from "@/hooks/useRowEdit";
import { ROW_ID_COL } from "@/types/dashboard";
import { toast } from "sonner";

const row = { 이름: "홍길동", 지역: "서울", [ROW_ID_COL]: "r2" };
const newData = { meta: { project: "p", total_rows: 1, columns: [] }, rows: [], aggregates: {} };

function mockFetch(handlers: Record<string, () => unknown>) {
  return vi.fn((url: string, init?: RequestInit) => {
    const method = init?.method ?? "GET";
    for (const [pat, fn] of Object.entries(handlers)) {
      const [m, frag] = pat.split(" ");
      if (m === method && String(url).includes(frag)) return Promise.resolve(fn() as Response);
    }
    return Promise.resolve({ ok: false, status: 404, json: async () => ({}) } as Response);
  });
}

const okJson = (body: unknown) => ({ ok: true, status: 200, json: async () => body }) as Response;

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal(
    "fetch",
    mockFetch({
      "GET /overrides": () => okJson({ edits: [], count: 0 }),
      "GET /freshness": () => okJson({ is_stale: false, edit_count: 0 }),
    }),
  );
});
afterEach(() => vi.unstubAllGlobals());

const setup = (over: Partial<Parameters<typeof useRowEdit>[0]> = {}) => {
  const onData = vi.fn();
  const hook = renderHook(() =>
    useRowEdit({ project: "p", enabled: true, sessionToken: "tok", onData, ...over }),
  );
  return { ...hook, onData };
};

describe("useRowEdit — 저장", () => {
  it("성공하면 서버가 준 data 로 교체한다 (낙관적 반영 없음)", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "GET /overrides": () => okJson({ edits: [], count: 0 }),
        "GET /freshness": () => okJson({ is_stale: true, edit_count: 1 }),
        "PATCH /rows/": () => okJson({ status: "success", data: newData, edit_count: 1 }),
      }),
    );
    const { result, onData } = setup();
    await act(async () => {
      await result.current.saveRow(row, { 지역: "부산" });
    });
    expect(onData).toHaveBeenCalledWith(newData);
    expect(toast.success).toHaveBeenCalled();
  });

  it("변경분만 PATCH 로 보낸다", async () => {
    const f = mockFetch({
      "GET /overrides": () => okJson({ edits: [], count: 0 }),
      "GET /freshness": () => okJson({ is_stale: false, edit_count: 0 }),
      "PATCH /rows/": () => okJson({ data: newData }),
    });
    vi.stubGlobal("fetch", f);
    const { result } = setup();
    await act(async () => {
      await result.current.saveRow(row, { 지역: "부산" });
    });
    const call = f.mock.calls.find((c) => c[1]?.method === "PATCH");
    expect(String(call?.[0])).toContain("/rows/r2");
    expect(call?.[1]?.body).toBe(JSON.stringify({ 지역: "부산" }));
  });

  it("★ 실패하면 throw 한다 (DetailPanel 이 draft 를 지키려면 필요)", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "GET /overrides": () => okJson({ edits: [], count: 0 }),
        "GET /freshness": () => okJson({ is_stale: false, edit_count: 0 }),
        "PATCH /rows/": () => ({ ok: false, status: 400, json: async () => ({ detail: "알 수 없는 컬럼" }) }),
      }),
    );
    const { result, onData } = setup();
    await expect(
      act(async () => {
        await result.current.saveRow(row, { x: 1 });
      }),
    ).rejects.toThrow();
    expect(onData).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith("알 수 없는 컬럼");
  });

  it("★ __row_id 가 없으면 저장하지 않는다", async () => {
    const { result, onData } = setup();
    await expect(
      act(async () => {
        await result.current.saveRow({ 이름: "홍길동" }, { 지역: "부산" });
      }),
    ).rejects.toThrow();
    expect(onData).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith(expect.stringContaining("행 식별자"));
  });
});

describe("useRowEdit — 편집 목록", () => {
  it("editedCells 를 __row_id 기준으로 묶는다 (드로어 표시용)", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "GET /overrides": () =>
          okJson({
            edits: [
              { row_id: "r2", col: "지역", value: "부산", prev: "서울" },
              { row_id: "r2", col: "이름", value: "홍길순", prev: "홍길동" },
              { row_id: "r5", col: "지역", value: "대구", prev: "인천" },
            ],
          }),
        "GET /freshness": () => okJson({ is_stale: true, edit_count: 3 }),
      }),
    );
    const { result } = setup();
    await waitFor(() => expect(result.current.editCount).toBe(3));
    expect(result.current.editedCells).toEqual({
      r2: { 지역: "서울", 이름: "홍길동" },
      r5: { 지역: "인천" },
    });
  });

  it("enabled=false 면 아무것도 요청하지 않는다", async () => {
    const f = vi.fn();
    vi.stubGlobal("fetch", f);
    const { result } = setup({ enabled: false });
    await waitFor(() => expect(result.current.editCount).toBe(0));
    expect(f).not.toHaveBeenCalled();
  });

  it("★ 이 PC 에 프로젝트가 없으면(404) 조용히 비운다 — 정상 상태다", async () => {
    vi.stubGlobal("fetch", vi.fn(() => Promise.resolve({ ok: false, status: 404 } as Response)));
    const { result } = setup();
    await waitFor(() => expect(result.current.freshness).toBeNull());
    expect(result.current.editCount).toBe(0);
    expect(toast.error).not.toHaveBeenCalled(); // 에러를 띄우지 않는다
  });
});
