/**
 * useBackendStatus — 백엔드 가용성 + 로그인 상태 (dashboard_edit_plan §7.1 · 6단계)
 *
 * 요구사항 1·3: 편집·설정·원본 XLSX 는 "API 가 가동되는 환경"에서만 가능해야 하고,
 * 화면이 그 사실을 알려줘야 한다. 그 판단의 유일한 출처가 이 훅이다.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    isPlaceholder: true, // 로컬 개발 모드 (localStorage 기반 세션)
    auth: {
      getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
      onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
    },
  },
}));

import { useBackendStatus, API_BASE } from "@/hooks/useBackendStatus";

const ok = () => Promise.resolve({ ok: true } as Response);
const dead = () => Promise.reject(new Error("ECONNREFUSED"));

beforeEach(() => {
  localStorage.clear();
  vi.stubGlobal("fetch", vi.fn(ok));
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function login() {
  localStorage.setItem("sb-local-session", "1");
}

describe("useBackendStatus — canEdit 판정", () => {
  it("백엔드가 죽어 있으면 canEdit=false", async () => {
    vi.stubGlobal("fetch", vi.fn(dead));
    login();
    const { result } = renderHook(() => useBackendStatus());
    await waitFor(() => expect(result.current.checked).toBe(true));
    expect(result.current.isBackendAlive).toBe(false);
    expect(result.current.canEdit).toBe(false);
  });

  it("로그인하지 않았으면 canEdit=false (백엔드가 살아 있어도)", async () => {
    const { result } = renderHook(() => useBackendStatus());
    await waitFor(() => expect(result.current.isBackendAlive).toBe(true));
    expect(result.current.isAuthed).toBe(false);
    expect(result.current.canEdit).toBe(false);
  });

  it("백엔드 + 로그인이 모두 있어야 canEdit=true", async () => {
    login();
    const { result } = renderHook(() => useBackendStatus());
    await waitFor(() => expect(result.current.canEdit).toBe(true));
  });

  it("health 가 200 이 아니면 죽은 것으로 본다", async () => {
    vi.stubGlobal("fetch", vi.fn(() => Promise.resolve({ ok: false } as Response)));
    login();
    const { result } = renderHook(() => useBackendStatus());
    await waitFor(() => expect(result.current.checked).toBe(true));
    expect(result.current.canEdit).toBe(false);
  });
});

describe("useBackendStatus — https 페이지에서는 두드리지 않는다", () => {
  it("https + http://localhost 조합이면 health 요청 자체를 건너뛴다", async () => {
    // 정적 배포(Vercel) 상황: 브라우저가 mixed content 로 차단하므로 닿을 수 없다.
    // 그런데도 10초마다 두드리면 공개 대시보드 콘솔이 에러로 덮인다.
    const spy = vi.fn(ok);
    vi.stubGlobal("fetch", spy);
    const orig = window.location;
    Object.defineProperty(window, "location", {
      value: { ...orig, protocol: "https:" },
      writable: true,
    });

    const { result } = renderHook(() => useBackendStatus());
    await waitFor(() => expect(result.current.checked).toBe(true));

    expect(spy).not.toHaveBeenCalled();
    expect(result.current.isBackendAlive).toBe(false);

    Object.defineProperty(window, "location", { value: orig, writable: true });
  });
});

describe("useBackendStatus — withToken", () => {
  it("로그인 전에는 토큰을 붙이지 않는다", async () => {
    const { result } = renderHook(() => useBackendStatus());
    await waitFor(() => expect(result.current.checked).toBe(true));
    expect(result.current.withToken("/api/x")).toBe(`${API_BASE}/api/x`);
  });

  it("로그인 후에는 토큰을 쿼리로 붙인다 (<a href> 는 헤더를 못 싣는다)", async () => {
    login();
    const { result } = renderHook(() => useBackendStatus());
    await waitFor(() => expect(result.current.isAuthed).toBe(true));
    expect(result.current.withToken("/api/x")).toBe(
      `${API_BASE}/api/x?token=local-dev-bypass-token`,
    );
  });

  it("이미 쿼리가 있으면 & 로 잇는다", async () => {
    login();
    const { result } = renderHook(() => useBackendStatus());
    await waitFor(() => expect(result.current.isAuthed).toBe(true));
    expect(result.current.withToken("/api/x?a=1")).toContain("?a=1&token=");
  });
});
