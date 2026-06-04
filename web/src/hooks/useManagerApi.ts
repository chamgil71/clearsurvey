import { useState, useEffect } from "react";
import type { DashboardConfig, ProjectListItem } from "@/types/dashboard";

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
  output_col: string;            // 출력 컬럼명 (필수)
  source_col?: number | null;    // 원본 엑셀 열번호 (1-based)
  source_col_name?: string;      // 원본 헤더명 (참조용)
  transform?: string | null;     // 정제 규칙 이름 (단일 문자열)
  flag_keyword?: string;         // to_binary 전용
  backup_col?: number | null;    // jang 전용
  include_in_slicer?: boolean;
  type?: string;                 // UI 표시 힌트 (내보내기 시 자동 감지)
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

  // Check health on mount
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/health`);
        if (res.ok) {
          setIsBackendAlive(true);
          // Backend is alive, load projects
          const projRes = await fetch(`${API_BASE}/api/projects`);
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
      const res = await fetch(`${API_BASE}/api/projects`);
      if (res.ok) {
        const list = await res.json();
        setProjects(list);
      }
    } catch (err) {
      console.error("프로젝트 목록 로드 실패:", err);
    }
  };

  const createProject = async (name: string, file: File) => {
    setLoading(true);
    setError(null);
    setLogs((prev) => [...prev, `[SYSTEM] 프로젝트 '${name}' 생성 중...`]);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", file);

      const res = await fetch(`${API_BASE}/api/projects/create`, {
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
      const res = await fetch(`${API_BASE}/api/projects/${name}/config`);
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "프로젝트 설정 로드 실패");
      }
      return await res.json() as LoadedProjectConfig;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveProjectConfig = async (name: string, config: ProjectConfig, dashboard: DashboardConfig | null) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/projects/${name}/config`, {
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

  /**
   * 파이프라인 실행 요청 — 즉시 반환합니다 (백그라운드 실행).
   * 완료 여부는 getPipelineStatus()로 폴링하세요.
   */
  const runPipeline = async (name: string) => {
    setError(null);
    setLogs((prev) => [
      ...prev,
      `[SYSTEM] 파이프라인 실행 요청 전송 중...`,
    ]);
    try {
      const res = await fetch(`${API_BASE}/api/projects/${name}/run`, {
        method: "POST",
      });
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "파이프라인 실행 실패");
      }
      const data = await res.json(); // { status: "started" }
      setLogs((prev) => [
        ...prev,
        `[RUNNING] 정제 엔진이 백그라운드에서 구동을 시작했습니다...`,
      ]);
      return data;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      setLogs((prev) => [...prev, `[ERROR] 파이프라인 실행 중 오류: ${msg}`]);
      throw err;
    }
  };

  /** 파이프라인 실행 상태 폴링 — GET /api/projects/{name}/status */
  const getPipelineStatus = async (name: string): Promise<{
    status: "idle" | "running" | "done" | "error";
    cleaned_file?: string;
    output_dir?: string;
    detail?: string;
    started_at?: string;
    finished_at?: string;
  }> => {
    try {
      const res = await fetch(`${API_BASE}/api/projects/${name}/status`);
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
      const res = await fetch(`${API_BASE}/api/projects/${name}/export`, {
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

  const getDownloadUrl = (name: string) => {
    return `${API_BASE}/api/projects/${name}/download`;
  };

  const getLogsStreamUrl = (name: string) => {
    return `${API_BASE}/api/projects/${name}/logs/stream`;
  };

  const clearLogs = () => setLogs([]);

  return {
    isBackendAlive,
    projects,
    loading,
    error,
    logs,
    clearLogs,
    addLog,
    createProject,
    loadProjectConfig,
    saveProjectConfig,
    runPipeline,
    getPipelineStatus,
    exportDashboard,
    getDownloadUrl,
    getLogsStreamUrl,
    API_BASE,
  };
}
