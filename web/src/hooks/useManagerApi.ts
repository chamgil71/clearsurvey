import { useState, useEffect } from "react";

export interface ProjectConfig {
  project: string;
  paths: {
    source_file: string;
    output_dir: string;
    output_file: string;
  };
  parser: {
    header_row: number;
    data_start_row: number;
    encoding: string;
  };
  columns: Array<{
    name: string;
    type: string;
    source_col: number | string;
    target_name?: string;
    transforms?: Array<{ rule: string; args?: Record<string, any> }>;
    include_in_slicer?: boolean;
    slicer_order?: number;
  }>;
}

export function useManagerApi() {
  const [isBackendAlive, setIsBackendAlive] = useState<boolean>(false);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const API_BASE = "http://localhost:8000";

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
    } catch (err: any) {
      setError(err.message);
      setLogs((prev) => [...prev, `[ERROR] 생성 실패: ${err.message}`]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const loadProjectConfig = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/projects/${name}/config`);
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "프로젝트 설정 로드 실패");
      }
      return await res.json();
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveProjectConfig = async (name: string, config: any, dashboard: any) => {
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
    } catch (err: any) {
      setError(err.message);
      setLogs((prev) => [...prev, `[ERROR] 설정 저장 실패: ${err.message}`]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const runPipeline = async (name: string) => {
    setLoading(true);
    setError(null);
    setLogs((prev) => [
      ...prev,
      `[SYSTEM] 파이프라인 정제 실행 요청 중...`,
      `[RUNNING] 정제 엔진 구동 시작 (Excel cleansing & validation)...`,
    ]);
    try {
      const res = await fetch(`${API_BASE}/api/projects/${name}/run`, {
        method: "POST",
      });
      if (!res.ok) {
        const errDetail = await res.json().catch(() => ({ detail: "알 수 없는 에러" }));
        throw new Error(errDetail.detail || "파이프라인 실행 실패");
      }
      const data = await res.json();
      setLogs((prev) => [
        ...prev,
        `[SUCCESS] 정제 프로세스 성공적으로 완료!`,
        ` - 정제 완료 파일: ${data.cleaned_file}`,
        ` - 저장 디렉토리: ${data.output_dir}`,
      ]);
      return data;
    } catch (err: any) {
      setError(err.message);
      setLogs((prev) => [...prev, `[ERROR] 파이프라인 실행 중 오류: ${err.message}`]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

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
        ` - 대상 데이터: web/data/${data.json_file}`,
      ]);
      return data;
    } catch (err: any) {
      setError(err.message);
      setLogs((prev) => [...prev, `[ERROR] 내보내기 실패: ${err.message}`]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getDownloadUrl = (name: string) => {
    return `${API_BASE}/api/projects/${name}/download`;
  };

  const clearLogs = () => setLogs([]);

  return {
    isBackendAlive,
    projects,
    loading,
    error,
    logs,
    clearLogs,
    createProject,
    loadProjectConfig,
    saveProjectConfig,
    runPipeline,
    exportDashboard,
    getDownloadUrl,
  };
}
