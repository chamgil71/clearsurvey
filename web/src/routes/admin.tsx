import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import "@/legacy-dashboard.css";
import { useManagerApi } from "@/hooks/useManagerApi";
import type { LoadedProjectConfig, ProjectConfig } from "@/hooks/useManagerApi";
import type { DashboardConfig } from "@/types/dashboard";
import { Step1_ProjectUpload } from "@/components/manager/Step1_ProjectUpload";
import { Step2_ConfigEditor } from "@/components/manager/Step2_ConfigEditor";
import { Step3_RunDeploy } from "@/components/manager/Step3_RunDeploy";
import { GuideDrawer } from "@/components/dashboard/GuideDrawer";
import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminSearch {
  project?: string;
}

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Survey 3단계 설정 매니저" }] }),
  validateSearch: (s: Record<string, unknown>): AdminSearch => ({
    project: typeof s.project === "string" ? s.project : undefined,
  }),
  component: AdminPage,
});

function AdminPage() {
  const search = Route.useSearch();
  const initialProject = search.project || "";

  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<string>(initialProject);
  const [loadedConfig, setLoadedConfig] = useState<LoadedProjectConfig | null>(null);
  const [guideOpen, setGuideOpen] = useState<boolean>(false);
  const [pipelineRunning, setPipelineRunning] = useState<boolean>(false);

  // 폴링 interval ref — 컴포넌트 언마운트 시 정리
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const api = useManagerApi();

  // 언마운트 시 폴링 정리
  useEffect(() => {
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, []);

  // Load project config if a project is selected or initial search param exists
  useEffect(() => {
    if (selectedProject && api.isBackendAlive) {
      (async () => {
        try {
          const cfg = await api.loadProjectConfig(selectedProject);
          setLoadedConfig(cfg);
        } catch (err) {
          console.error("설정 로드 실패:", err);
        }
      })();
    }
  }, [selectedProject, api.isBackendAlive]);

  const handleSelectProject = (name: string) => {
    setSelectedProject(name);
    setActiveStep(2); // Automatically advance to configuration step
  };

  const handleCreateProject = async (name: string, file: File) => {
    try {
      const data = await api.createProject(name, file);
      if (data && data.status === "success") {
        setSelectedProject(name);
        setActiveStep(2); // Automatically advance to configuration step
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveConfig = async (config: ProjectConfig, dashboard: DashboardConfig | null) => {
    if (!selectedProject) return;
    try {
      await api.saveProjectConfig(selectedProject, config, dashboard);
      // Reload updated config
      const refreshed = await api.loadProjectConfig(selectedProject);
      setLoadedConfig(refreshed);
      toast.success("프로젝트 설정이 영구 저장되었습니다!");
      setActiveStep(3); // Advance to run pipeline step
    } catch (err: any) {
      toast.error(`설정 저장 중 에러: ${err.message}`);
    }
  };

  /**
   * 파이프라인 실행 + 상태 폴링 + 대시보드 export 통합 핸들러.
   * Step3 의 onRunPipeline prop 으로 전달합니다.
   */
  const handleRunWithPolling = async (): Promise<void> => {
    if (!selectedProject) return;

    // 이전 폴링 정리
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }

    // 0. 로그 초기화
    api.clearLogs();

    // 1. 파이프라인 시작 요청
    let startResult: { status: string } | undefined;
    try {
      startResult = await api.runPipeline(selectedProject);
    } catch {
      return; // runPipeline 내부에서 에러 로그 처리
    }
    if (startResult?.status !== "started") return;

    // 2. SSE 연동 (실시간 로그 수신)
    const streamUrl = api.getLogsStreamUrl(selectedProject);
    const eventSource = new EventSource(streamUrl);

    eventSource.onmessage = (event) => {
      const data = event.data;
      if (data) {
        api.addLog(data);
        if (data.includes("프로세스가 종료되었습니다")) {
          eventSource.close();
        }
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    // 3. 상태 폴링 시작 (완료 감지 및 대시보드 내보내기용)
    setPipelineRunning(true);

    pollingRef.current = setInterval(async () => {
      const status = await api.getPipelineStatus(selectedProject);

      if (status.status === "done") {
        clearInterval(pollingRef.current!);
        pollingRef.current = null;
        eventSource.close();

        // 대시보드 JSON 자동 내보내기
        try {
          await api.exportDashboard(selectedProject);
        } catch {
          // export 에러는 api 내부에서 로그 처리
        }
        setPipelineRunning(false);

      } else if (status.status === "error") {
        clearInterval(pollingRef.current!);
        pollingRef.current = null;
        eventSource.close();
        api.addLog(`[ERROR] 파이프라인 실패: ${status.detail ?? "알 수 없는 오류"}`);
        toast.error(`정제 실패: ${status.detail ?? "알 수 없는 오류"}`);
        setPipelineRunning(false);
      }
    }, 2000);
  };

  return (
    <div className="app-wrap min-h-screen flex flex-col bg-background">
      <header className="header flex items-center justify-between px-6 border-b">
        <div className="flex items-center gap-3">
          <Link to="/" className="btn-ghost btn-sm flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" />
            대시보드로
          </Link>
          <span className="h-4 w-[1px] bg-border" />
          <span className="header-logo text-sm font-black text-primary">⚙ 설정 매니저 마법사</span>
          {selectedProject && (
            <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-semibold text-primary font-mono">
              {selectedProject}
            </span>
          )}
        </div>

        {/* Step Indicator Bar */}
        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-muted-foreground">
          <span
            className={`flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors ${
              activeStep === 1 ? "text-primary font-bold" : ""
            }`}
            onClick={() => setActiveStep(1)}
          >
            <span className={`flex items-center justify-center h-5 w-5 rounded-full border text-[10px] ${activeStep === 1 ? "bg-primary border-primary text-primary-foreground font-black" : "bg-muted"}`}>
              1
            </span>
            프로젝트 & 파일
          </span>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          <span
            className={`flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors ${
              activeStep === 2 ? "text-primary font-bold" : ""
            } ${!selectedProject ? "pointer-events-none opacity-40" : ""}`}
            onClick={() => selectedProject && setActiveStep(2)}
          >
            <span className={`flex items-center justify-center h-5 w-5 rounded-full border text-[10px] ${activeStep === 2 ? "bg-primary border-primary text-primary-foreground font-black" : "bg-muted"}`}>
              2
            </span>
            컬럼 정의 & 빌더
          </span>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          <span
            className={`flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors ${
              activeStep === 3 ? "text-primary font-bold" : ""
            } ${!selectedProject ? "pointer-events-none opacity-40" : ""}`}
            onClick={() => selectedProject && setActiveStep(3)}
          >
            <span className={`flex items-center justify-center h-5 w-5 rounded-full border text-[10px] ${activeStep === 3 ? "bg-primary border-primary text-primary-foreground font-black" : "bg-muted"}`}>
              3
            </span>
            정제 실행 & 다운
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn-ghost btn-sm flex items-center gap-1" onClick={() => setGuideOpen(true)}>
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            도움말 가이드
          </button>
        </div>
      </header>

      {/* Main Admin wizard body */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 space-y-6">
        {activeStep === 1 && (
          <Step1_ProjectUpload
            isBackendAlive={api.isBackendAlive}
            projects={api.projects}
            onSelectProject={handleSelectProject}
            onCreateProject={handleCreateProject}
            loading={api.loading}
          />
        )}

        {activeStep === 2 && (
          <Step2_ConfigEditor
            projectName={selectedProject}
            config={loadedConfig}
            onSaveConfig={handleSaveConfig}
            loading={api.loading}
          />
        )}

        {activeStep === 3 && (
          <Step3_RunDeploy
            projectName={selectedProject}
            logs={api.logs}
            onRunPipeline={handleRunWithPolling}
            downloadUrl={api.getDownloadUrl(selectedProject)}
            loading={api.loading || pipelineRunning}
            clearLogs={api.clearLogs}
          />
        )}
      </main>

      {/* Footer info */}
      <footer className="border-t bg-muted/20 py-4 text-center text-[10px] text-muted-foreground">
        Survey Engine 하이브리드 대시보드 설정 마법사 | UI 구조, 비주얼 디자인, REST 로직 3계층 분리 아키텍처
      </footer>

      {/* Help Reference guide drawer */}
      <GuideDrawer isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}