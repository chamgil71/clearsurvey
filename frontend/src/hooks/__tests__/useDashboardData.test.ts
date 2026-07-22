/**
 * useDashboardData — 초기 프로젝트 선택 로직.
 *
 * 못박는 것:
 *   - initialUrl(?data= 쿼리파라미터)도 normalizeUrl을 거쳐 "/data/..."로 fetch된다.
 *     예전엔 이 분기만 정규화를 안 거쳐 상대경로("x_data.json")로 그대로 fetch되어
 *     현재 페이지 경로 기준으로 풀리면서 항상 404 → "데이터 없음" 화면으로 떨어졌다.
 *   - is_default로 지정된 공개 프로젝트가 있으면 그걸 기본으로 연다.
 *   - 없으면 매니페스트에서 published가 아닌 첫 항목을 연다.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useDashboardData } from "@/hooks/useDashboardData";

function mockFetch(handlers: Record<string, unknown>) {
  return vi.fn((url: string) => {
    for (const [path, body] of Object.entries(handlers)) {
      if (String(url) === path) {
        return Promise.resolve({ ok: true, status: 200, json: async () => body } as Response);
      }
    }
    return Promise.resolve({ ok: false, status: 404, json: async () => ({}) } as Response);
  });
}

const projectData = (project: string) => ({
  meta: { project, total_rows: 0, columns: [] },
  rows: [],
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("useDashboardData — 초기 URL 정규화", () => {
  it("initialUrl이 있으면 /data/ 접두사를 붙여 fetch한다(정규화 거침)", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "/data/projects.json": [],
        "/data/books_data.json": projectData("books"),
      }),
    );

    const { result } = renderHook(() => useDashboardData("books_data.json"));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.error).toBeNull();
    expect(result.current.data?.meta.project).toBe("books");
    expect(result.current.url).toBe("/data/books_data.json");
  });

  it("initialUrl이 이미 절대경로(/data/...)여도 그대로 동작한다", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "/data/projects.json": [],
        "/data/books_data.json": projectData("books"),
      }),
    );

    const { result } = renderHook(() => useDashboardData("/data/books_data.json"));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data?.meta.project).toBe("books");
  });
});

describe("useDashboardData — 기본 프로젝트 선택", () => {
  it("is_default로 지정된 공개 프로젝트가 있으면 그걸 연다", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "/data/projects.json": [
          { id: "a", name: "a", file: "a_data.json", published: true },
          { id: "b", name: "b", file: "b_data.json", published: true, is_default: true },
        ],
        "/data/a_data.json": projectData("a"),
        "/data/b_data.json": projectData("b"),
      }),
    );

    const { result } = renderHook(() => useDashboardData());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data?.meta.project).toBe("b");
  });

  it("is_default가 없으면 공개된 첫 항목을 연다", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "/data/projects.json": [
          { id: "a", name: "a", file: "a_data.json", published: false },
          { id: "b", name: "b", file: "b_data.json", published: true },
        ],
        "/data/a_data.json": projectData("a"),
        "/data/b_data.json": projectData("b"),
      }),
    );

    const { result } = renderHook(() => useDashboardData());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data?.meta.project).toBe("b");
  });
});

describe("useDashboardData — ?data= 는 비공개 프로젝트를 강제로 열 수 없다", () => {
  it("?data= 가 매니페스트상 published:false 항목이면 무시하고 기본 프로젝트로 대체한다", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "/data/projects.json": [
          { id: "secret", name: "secret", file: "secret_data.json", published: false },
          { id: "b", name: "b", file: "b_data.json", published: true, is_default: true },
        ],
        "/data/secret_data.json": projectData("secret"),
        "/data/b_data.json": projectData("b"),
      }),
    );

    const { result } = renderHook(() => useDashboardData("secret_data.json"));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data?.meta.project).toBe("b");
    expect(result.current.url).toBe("/data/b_data.json");
  });

  it("?data= 가 매니페스트에 아예 없는 파일이면(레거시 링크) 그대로 신뢰한다", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "/data/projects.json": [
          { id: "b", name: "b", file: "b_data.json", published: true, is_default: true },
        ],
        "/data/legacy_data.json": projectData("legacy"),
        "/data/b_data.json": projectData("b"),
      }),
    );

    const { result } = renderHook(() => useDashboardData("legacy_data.json"));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data?.meta.project).toBe("legacy");
  });

  it("?data= 가 매니페스트상 published:true 항목이면 그대로 연다", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetch({
        "/data/projects.json": [
          { id: "a", name: "a", file: "a_data.json", published: true },
          { id: "b", name: "b", file: "b_data.json", published: true, is_default: true },
        ],
        "/data/a_data.json": projectData("a"),
        "/data/b_data.json": projectData("b"),
      }),
    );

    const { result } = renderHook(() => useDashboardData("a_data.json"));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data?.meta.project).toBe("a");
  });
});
