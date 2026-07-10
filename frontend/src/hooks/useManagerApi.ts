import { useState, useEffect } from "react";
import { toast } from "sonner";
import type { DashboardConfig, ProjectListItem } from "@/types/dashboard";
import { supabase } from "@/lib/supabase";
import { migrateConfig } from "@/lib/dashboardConfig";

/**
 * FastAPI 백엔드 URL.
 * 개발: http://localhost:8000 (기본값)
 * 변경: web/.env.local 에 VITE_API_BASE_URL=http://your-server 추가
 */
const API_BASE =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") ??
  "http://localhost:8000";

/**
 * 컬럼 정의 — Python engine/config.py ColumnDef 와 동일한 구조.
 * transforms/registry.py 에 등록된 실제 transform 이름만 사용합니다.
 */
export interface ColumnDef {
  output_col: string; // 출력 컬럼명 (필수)
  source_col?: number | null; // 원본 엑셀 열번호 (1-based)
  source_col_name?: string; // 원본 헤더명 (참조용)
  transform?: string | null; // 정제 규칙 이름 (단일 문자열)
  flag_keyword?: string; // to_binary 전용
  backup_col?: number | null; // jang 전용
  include_in_slicer?: boolean;
  type?: string; // UI 표시 힌트 (내보내기 시 자동 감지)
}

/**
 * 프로젝트 설정 — Python SurveyConfig 의 핵심 필드 타입.
 * (전체 필드가 아닌 웹 편집에 필요한 필드만 포함)
 */
export interface ProjectConfig {
  project: string;
  paths: {
    output_dir: string;
    output_file: string;
  };
  source: {
    file?: string | null;
    sheet?: string | null;
    header_row: number;
    data_start_row?: number | null;
  };
  columns: ColumnDef[];
  excel_options?: {
    include_slicers: boolean;
    include_charts: boolean;
  };
}

/** GET /api/projects/{name}/config 응답 구조 */
export interface LoadedProjectConfig {
  config: ProjectConfig;
  dashboard: DashboardConfig | null;
}

export function useManagerApi() {
  const [isBackendAlive, setIsBackendAlive] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  const isLocalDev = (supabase as any).isPlaceholder;

  // Supabase 세션 자동 구독 상태 연동
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isLocalDev) {
      const checkLocalSession = () => {
        const localSession = localStorage.getItem("sb-local-session");
        setSessionToken(localSession ? "local-dev-bypass-token" : null);
      };
      checkLocalSession();
      const interval = setInterval(checkLocalSession, 2000);
      return () => clearInterval(interval);
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

  const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const token = sessionToken;
    const headers = new Headers(options.headers || {});
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (res.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("sb-local-session");
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith("sb-") && key.endsWith("-auth-token")) {
            localStorage.removeItem(key);
          }
        }
        toast.error("인증 세션이 만료되었습니다. 다시 로그인해주세요.");
        setTimeout(() => {
          const currentPath = window.location.pathname + window.location.search;
          window.location.href = `/login?redirect=${encodeURIComponent(currentPath)}`;
        }, 1500);
      }
    }

    return res;
  };

  // Check health on mount
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/health`);
        if (res.ok) {
          setIsBackendAlive(true);
          // Backend is alive, load projects
          const projRes = await fetchWithAuth(`${API_BASE}/api/projects`);
          if (projRes.ok) {
            const list = await projRes.json();
            setProjects(list);
          }
        } else {
          setIsBackendAlive(false);
        }
      } catch (err) {
        setIsBackendAlive(false);
      }
    };
    checkHealth();
    const interval = setInterval(checkHealth, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, []);

  const refreshProjects = async () => {
    if (!isBackendAlive) return;
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects`);
      if (res.ok) {
        const list = await res.json();
        setProjects(list);
      }
    } catch (err) {
      console.error("프로젝트 목록 로드 실패:", err);
    }
  };

  const createProject = async (name: string, file: File, copyFromProject?: string) => {
    setLoading(true);
    setError(null);
    setLogs((prev) => [...prev, `[SYSTEM] 프로젝트 '${name}' 생성 중...`]);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", file);
      if (copyFromProject) {
        formData.append("copy_from_project", copyFromProject);
      }

      const res = await fetchWithAuth(`${API_BASE}/api/projects/create`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "프로젝트 생성 실패");
      }

      const data = await res.json();
      setLogs((prev) => [
        ...prev,
        `[SUCCESS] 프로젝트 '${name}' 분석 완료!`,
        ` - 헤더 시작 행: ${data.header_row}`,
        ` - 데이터 시작 행: ${data.data_start_row}`,
        ` - 총 감지 컬럼 수: ${data.column_count}`,
        ` - 생성된 드래프트 경로: ${data.draft_path}`,
      ]);
      await refreshProjects();
      return data;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      setLogs((prev) => [...prev, `[ERROR] 생성 실패: ${msg}`]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const loadProjectConfig = async (name: string): Promise<LoadedProjectConfig> => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects/${name}/config`);
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "프로젝트 설정 로드 실패");
      }
      const data = (await res.json()) as LoadedProjectConfig;
      if (data.dashboard) {
        data.dashboard = migrateConfig(data.dashboard);
      }
      return data;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveProjectConfig = async (
    name: string,
    config: ProjectConfig,
    dashboard: DashboardConfig | null,
  ) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects/${name}/config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config, dashboard }),
      });
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "설정 저장 실패");
      }
      setLogs((prev) => [...prev, `[SYSTEM] 프로젝트 '${name}' 설정 및 대시보드 저장 완료.`]);
      return await res.json();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      setLogs((prev) => [...prev, `[ERROR] 설정 저장 실패: ${msg}`]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const previewProjectConfig = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects/${name}/preview`, {
        method: "POST",
      });
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "미리보기 요청 실패");
      }
      const data = await res.json();
      return data?.preview as { raw: Record<string, string>; cleaned: Record<string, string> }[];
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * 파이프라인 실행 요청 — 즉시 반환합니다 (백그라운드 실행).
   * 완료 여부는 getPipelineStatus()로 폴링하세요.
   */
  const runPipeline = async (name: string) => {
    setError(null);
    setLogs((prev) => [...prev, `[SYSTEM] 파이프라인 실행 요청 전송 중...`]);
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects/${name}/run`, {
        method: "POST",
      });
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "파이프라인 실행 실패");
      }
      const data = await res.json(); // { status: "started" }
      setLogs((prev) => [...prev, `[RUNNING] 정제 엔진이 백그라운드에서 구동을 시작했습니다...`]);
      return data;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      setLogs((prev) => [...prev, `[ERROR] 파이프라인 실행 중 오류: ${msg}`]);
      throw err;
    }
  };

  /** 파이프라인 실행 상태 폴링 — GET /api/projects/{name}/status */
  const getPipelineStatus = async (
    name: string,
  ): Promise<{
    status: "idle" | "running" | "done" | "error";
    cleaned_file?: string;
    output_dir?: string;
    detail?: string;
    started_at?: string;
    finished_at?: string;
  }> => {
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects/${name}/status`);
      if (!res.ok) return { status: "error", detail: "상태 조회 실패" };
      return await res.json();
    } catch {
      return { status: "error", detail: "서버 연결 오류" };
    }
  };

  /** 로그 메시지 한 줄 추가 (폴링 로직에서 사용) */
  const addLog = (msg: string) => setLogs((prev) => [...prev, msg]);

  const exportDashboard = async (name: string) => {
    setLoading(true);
    setError(null);
    setLogs((prev) => [...prev, `[SYSTEM] 웹 대시보드 데이터 JSON 내보내기 진행 중...`]);
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects/${name}/export`, {
        method: "POST",
      });
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "JSON 내보내기 실패");
      }
      const data = await res.json();
      setLogs((prev) => [
        ...prev,
        `[SUCCESS] 대시보드 JSON 파일 저장 완료!`,
        ` - 대상 데이터: web/public/data/${data.json_file}`,
      ]);
      return data;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      setLogs((prev) => [...prev, `[ERROR] 내보내기 실패: ${msg}`]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createMergeProject = async (
    name: string,
    files: File[],
    options: {
      dedup_strategy: "first" | "last" | "none";
      key_cols: string[];
      add_source_col: boolean;
      source_col_name: string;
    },
    copyFromProject?: string,
  ) => {
    setLoading(true);
    setError(null);
    setLogs((prev) => [...prev, `[SYSTEM] 병합 프로젝트 '${name}' 생성 중...`]);
    try {
      const formData = new FormData();
      formData.append("name", name);
      files.forEach((file) => {
        formData.append("files", file);
      });
      formData.append("options", JSON.stringify(options));
      if (copyFromProject) {
        formData.append("copy_from_project", copyFromProject);
      }

      const res = await fetchWithAuth(`${API_BASE}/api/projects/create-merge`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "병합 프로젝트 생성 실패");
      }

      const data = await res.json();
      setLogs((prev) => [
        ...prev,
        `[SUCCESS] 병합 프로젝트 '${name}' 분석 완료!`,
        ` - 헤더 시작 행: ${data.header_row}`,
        ` - 데이터 시작 행: ${data.data_start_row}`,
        ` - 총 감지 컬럼 수: ${data.column_count}`,
        ` - 생성된 드래프트 경로: ${data.draft_path}`,
      ]);
      await refreshProjects();
      return data;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      setLogs((prev) => [...prev, `[ERROR] 병합 생성 실패: ${msg}`]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getDownloadUrl = (name: string) => {
    const token = sessionToken;
    const tokenParam = token ? `?token=${encodeURIComponent(token)}` : "";
    return `${API_BASE}/api/projects/${name}/download${tokenParam}`;
  };

  const getExportHtmlUrl = (name: string) => {
    const token = sessionToken;
    const tokenParam = token ? `?token=${encodeURIComponent(token)}` : "";
    return `${API_BASE}/api/projects/${name}/export-html${tokenParam}`;
  };

  const getLogsStreamUrl = (name: string) => {
    const token = sessionToken;
    const tokenParam = token ? `?token=${encodeURIComponent(token)}` : "";
    return `${API_BASE}/api/projects/${name}/logs/stream${tokenParam}`;
  };

  const clearLogs = () => setLogs([]);

  const togglePublish = async (name: string, published: boolean) => {
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects/${name}/publish`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: "게시 상태 변경 실패" }));
        throw new Error(err.detail);
      }
      setProjects((prev) => prev.map((p) => (p.id === name ? { ...p, published } : p)));
      return await res.json();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(msg);
    }
  };

  const deleteProject = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/projects/${name}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "프로젝트 삭제 실패" }));
        throw new Error(errDetail.detail || "프로젝트 삭제 실패");
      }
      await refreshProjects();
      return await res.json();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    isBackendAlive,
    projects,
    loading,
    error,
    logs,
    sessionToken,
    clearLogs,
    addLog,
    createProject,
    createMergeProject,
    loadProjectConfig,
    saveProjectConfig,
    previewProjectConfig,
    runPipeline,
    getPipelineStatus,
    exportDashboard,
    togglePublish,
    deleteProject,
    getDownloadUrl,
    getExportHtmlUrl,
    getLogsStreamUrl,
    API_BASE,
  };
}
