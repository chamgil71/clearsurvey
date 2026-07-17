import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

/**
 * FastAPI 백엔드 URL.
 * 개발: http://127.0.0.1:8000 (기본값)
 * 변경: frontend/.env.local 에 VITE_API_BASE_URL=http://your-server 추가
 *
 * **`localhost` 가 아니라 `127.0.0.1` 인 이유**: `start_backend.bat` 이 uvicorn 을
 * `--host 127.0.0.1`(IPv4)로 띄우는데, Windows 에서 `localhost` 는 `::1`(IPv6)로 **먼저**
 * 풀린다. 그러면 매 요청이 IPv6 로 연결을 시도해 실패한 뒤 IPv4 로 되돌아오느라
 * **연결에만 ~210ms** 를 버린다(실측). 주소를 백엔드가 실제로 듣는 곳으로 맞추면 사라진다.
 */
export const API_BASE =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") ??
  "http://127.0.0.1:8000";

const POLL_MS = 10_000;

/**
 * https 페이지에서 http://localhost 로 가는 요청은 브라우저가 mixed content 로 **차단**한다.
 * 정적 배포(Vercel)가 정확히 이 조합이라, 백엔드는 원리적으로 닿을 수 없다.
 * 그런데도 10초마다 두드리면 공개 대시보드 콘솔이 영원히 빨간 에러로 덮인다 —
 * 닿을 수 없음이 확실한 경우엔 확인 자체를 건너뛴다.
 */
function unreachableByDesign(): boolean {
  if (typeof window === "undefined") return true;
  return window.location.protocol === "https:" && API_BASE.startsWith("http://");
}

export interface BackendStatus {
  /** 로컬 API 가 살아 있는가 (/api/health 응답) */
  isBackendAlive: boolean;
  /** 로그인 세션이 있는가 */
  isAuthed: boolean;
  /** 편집·설정이 가능한가 = 백엔드 + 인증. UI 노출 조건은 전부 이 값 하나로 판단한다. */
  canEdit: boolean;
  /** 첫 확인이 끝났는가 (끝나기 전엔 배지를 깜빡이지 않도록) */
  checked: boolean;
  sessionToken: string | null;
  apiBase: string;
  /** 인증 토큰을 쿼리로 붙인 URL — <a href> 처럼 헤더를 못 싣는 곳에서 쓴다. */
  withToken: (path: string) => string;
}

/**
 * 백엔드 가용성 + 로그인 상태.
 *
 * **왜 훅으로 뺐나**: 공개 대시보드(`routes/index.tsx`)가 이 정보를 몰라서, 백엔드가 없는
 * Vercel 에서도 `설정` 버튼이 그냥 보였다(계획 요구사항 3번). 그렇다고 `useManagerApi` 를
 * 통째로 쓰면 프로젝트 목록 로딩·파이프라인 실행 같은 관리자 전용 로직까지 딸려온다.
 * health 와 세션만 떼어 양쪽이 공유한다 — 폴링도 세션 구독도 한 벌만 돈다.
 *
 * 상세: docs/plan/pending/dashboard_edit_plan.md §7.1
 */
export function useBackendStatus(): BackendStatus {
  const [isBackendAlive, setIsBackendAlive] = useState(false);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const isLocalDev = (supabase as unknown as { isPlaceholder?: boolean }).isPlaceholder;

  // ── 세션 ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isLocalDev) {
      const check = () => {
        setSessionToken(localStorage.getItem("sb-local-session") ? "local-dev-bypass-token" : null);
      };
      check();
      const t = setInterval(check, 2000);
      return () => clearInterval(t);
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSessionToken(session?.access_token ?? null);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSessionToken(session?.access_token ?? null);
    });
    return () => subscription.unsubscribe();
  }, [isLocalDev]);

  // ── 백엔드 생존 ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (unreachableByDesign()) {
      setIsBackendAlive(false);
      setChecked(true);
      return;
    }
    let cancelled = false;
    const ping = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/health`);
        if (!cancelled) setIsBackendAlive(res.ok);
      } catch {
        if (!cancelled) setIsBackendAlive(false);
      } finally {
        if (!cancelled) setChecked(true);
      }
    };
    ping();
    const t = setInterval(ping, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, []);

  const withToken = useCallback(
    (path: string) => {
      const p = `${API_BASE}${path}`;
      if (!sessionToken) return p;
      const sep = p.includes("?") ? "&" : "?";
      return `${p}${sep}token=${encodeURIComponent(sessionToken)}`;
    },
    [sessionToken],
  );

  return {
    isBackendAlive,
    isAuthed: !!sessionToken,
    canEdit: isBackendAlive && !!sessionToken,
    checked,
    sessionToken,
    apiBase: API_BASE,
    withToken,
  };
}
