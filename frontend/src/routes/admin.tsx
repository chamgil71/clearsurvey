import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useManagerApi } from "@/hooks/useManagerApi";
import type { LoadedProjectConfig, ProjectConfig, ProjectFreshness } from "@/hooks/useManagerApi";
import type { DashboardConfig, ProjectListItem } from "@/types/dashboard";
import { Step1_ProjectUpload } from "@/components/manager/Step1_ProjectUpload";
import { Step2_ConfigEditor } from "@/components/manager/Step2_ConfigEditor";
import { Step3_RunDeploy } from "@/components/manager/Step3_RunDeploy";
import { GuideDrawer } from "@/components/dashboard/GuideDrawer";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderOpen,
  Globe,
  GlobeLock,
  LogOut,
  Play,
  Plus,
  Settings,
  BookOpen,
  FileText,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// ── 관리자 뷰 타입 ────────────────────────────────────────────────────────────
type AdminView = "list" | "new" | "config" | "run";

interface AdminSearch {
  project?: string;
}

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "관리자 대시보드 — ClearSurvey" }] }),
  validateSearch: (s: Record<string, unknown>): AdminSearch => ({
    project: typeof s.project === "string" ? s.project : undefined,
  }),
  component: AdminPage,
});

// ── 최상위 컴포넌트: 인증 게이트 ─────────────────────────────────────────────
function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();

  const isLocalDev = (supabase as any).isPlaceholder;

  useEffect(() => {
    if (isLocalDev) {
      const localSession = localStorage.getItem("sb-local-session");
      if (localSession) {
        try {
          const parsed = JSON.parse(localSession);
          setUser({ email: parsed.email } as any);
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setAuthLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, [isLocalDev]);

  useEffect(() => {
    if (!authLoading && !user) {
      window.location.href = "/login?redirect=/admin";
    }
  }, [authLoading, user]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-sm text-muted-foreground">인증 확인 중...</div>
      </div>
    );
  }
  if (!user) return null;

  return (
    <ErrorBoundary contextName="관리자 대시보드">
      <AdminDashboard user={user} />
    </ErrorBoundary>
  );
}

// ── 관리자 대시보드 (인증 완료 후) ───────────────────────────────────────────
function AdminDashboard({ user }: { user: User }) {
  const search = Route.useSearch();
  const initialProject = search.project || "";

  const [view, setView] = useState<AdminView>(initialProject ? "config" : "list");
  const [selectedProject, setSelectedProject] = useState<string>(initialProject);
  const [loadedConfig, setLoadedConfig] = useState<LoadedProjectConfig | null>(null);
  const [guideOpen, setGuideOpen] = useState(false);
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const api = useManagerApi();

  useEffect(
    () => () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    },
    [],
  );

  // 프로젝트 설정 로드 (컴포넌트 수명 주기 클린업 및 Race Condition 방어)
  useEffect(() => {
    let active = true;
    if (selectedProject && api.isBackendAlive && view === "config") {
      api
        .loadProjectConfig(selectedProject)
        .then((data) => {
          if (active) setLoadedConfig(data);
        })
        .catch((err) => {
          console.error(err);
          if (active) {
            toast.error(`설정 로드 실패: ${err instanceof Error ? err.message : String(err)}`);
            setView("list");
          }
        });
    }
    return () => {
      active = false;
      if (view === "config") {
        setLoadedConfig(null);
      }
    };
  }, [selectedProject, api.isBackendAlive, view]);

  const handleSignOut = async () => {
    if ((supabase as any).isPlaceholder) {
      localStorage.removeItem("sb-local-session");
      window.location.href = "/login";
      return;
    }
    await supabase.auth.signOut();
  };

  // ── 프로젝트 목록 → 설정 편집으로 이동 ─────────────────────────────────────
  const openConfig = (name: string) => {
    setSelectedProject(name);
    setView("config");
  };

  const openRun = (name: string) => {
    setSelectedProject(name);
    setView("run");
  };

  // ── Step1 핸들러 ────────────────────────────────────────────────────────────
  const handleSelectProject = (name: string) => {
    setSelectedProject(name);
    setView("config");
  };

  const handleCreateProject = async (name: string, file: File, copyFromProject?: string) => {
    const data = await api.createProject(name, file, copyFromProject);
    if (data?.status === "success") {
      setSelectedProject(name);
      setView("config");
    }
  };

  const handleCreateMergeProject = async (
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
    const data = await api.createMergeProject(name, files, options, copyFromProject);
    if (data?.status === "success") {
      setSelectedProject(name);
      setView("config");
    }
  };

  // ── Step2 핸들러 ────────────────────────────────────────────────────────────
  const handleSaveConfig = async (config: ProjectConfig, dashboard: DashboardConfig | null) => {
    if (!selectedProject) return;
    try {
      await api.saveProjectConfig(selectedProject, config, dashboard);
      const refreshed = await api.loadProjectConfig(selectedProject);
      setLoadedConfig(refreshed);
      toast.success("프로젝트 설정이 저장되었습니다!");
    } catch (err: unknown) {
      toast.error(`설정 저장 실패: ${err instanceof Error ? err.message : String(err)}`);
      throw err;
    }
  };

  // ── Step3 핸들러 ────────────────────────────────────────────────────────────
  const handleRunWithPolling = async (): Promise<void> => {
    if (!selectedProject) return;
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }

    api.clearLogs();
    let startResult: { status: string } | undefined;
    try {
      startResult = await api.runPipeline(selectedProject);
    } catch {
      return;
    }
    if (startResult?.status !== "started") return;

    const eventSource = new EventSource(api.getLogsStreamUrl(selectedProject));
    eventSource.onmessage = (e) => {
      if (e.data) {
        api.addLog(e.data);
        if (e.data.includes("프로세스가 종료되었습니다")) eventSource.close();
      }
    };
    eventSource.onerror = () => eventSource.close();

    setPipelineRunning(true);
    pollingRef.current = setInterval(async () => {
      const status = await api.getPipelineStatus(selectedProject);
      if (status.status === "done") {
        clearInterval(pollingRef.current!);
        pollingRef.current = null;
        eventSource.close();
        try {
          await api.exportDashboard(selectedProject);
        } catch {
          /* logged internally */
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

  // ── 렌더 ────────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col h-screen bg-background font-sans">
      {/* ── Top Header ───────────────────────────────────────────────────────── */}
      <header className="h-14 flex items-center justify-between px-6 bg-card border-b border-border shrink-0 z-10">
        <div className="flex items-center gap-3">
          <BarChart3 className="h-5 w-5 text-primary" />
          <span className="font-extrabold text-[16px] tracking-tight text-foreground">
            ClearSurvey Admin
          </span>
          <Badge variant="outline" className="ml-1 text-[10px] px-1.5 py-0">
            Manager
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {view !== "list" && (
            <div className="flex items-center gap-3 mr-4">
              <StepIndicator step={1} currentView={view} label="파일 업로드" targetView="new" />
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              <StepIndicator step={2} currentView={view} label="설정 편집" targetView="config" />
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              <StepIndicator step={3} currentView={view} label="파이프라인 실행" targetView="run" />
            </div>
          )}
          {!api.isBackendAlive ? (
            <Badge variant="destructive" className="text-xs">
              서버 오프라인
            </Badge>
          ) : (
            <Badge variant="outline" className="text-xs text-success border-success/40">
              서버 온라인
            </Badge>
          )}
          <div className="h-5 w-px bg-border mx-1" />
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground h-8 px-3 text-xs"
            onClick={() => setGuideOpen(true)}
          >
            <BookOpen className="h-4 w-4" /> 가이드
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground h-8 px-3 text-xs"
            onClick={() => window.open("/", "_blank")}
          >
            <ExternalLink className="h-4 w-4" /> 공개 대시보드
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-destructive h-8 px-3 text-xs"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" /> 로그아웃
          </Button>
        </div>
      </header>

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <main className="flex-1 overflow-hidden flex flex-col relative">
        {view === "list" ? (
          <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-background">
            <div className="max-w-5xl mx-auto space-y-8">
              <ProjectListView
                projects={api.projects}
                isBackendAlive={api.isBackendAlive}
                onOpenConfig={openConfig}
                onOpenRun={openRun}
                onTogglePublish={async (name, published) => {
                  try {
                    await api.togglePublish(name, published);
                    toast.success(`'${name}' ${published ? "게시" : "비공개"} 처리됨`);
                  } catch (err: unknown) {
                    toast.error(
                      `게시 상태 변경 실패: ${err instanceof Error ? err.message : String(err)}`,
                    );
                  }
                }}
                onDelete={async (name) => {
                  try {
                    await api.deleteProject(name);
                    toast.success(`프로젝트 '${name}'이 삭제되었습니다.`);
                  } catch (err: unknown) {
                    toast.error(
                      `프로젝트 삭제 실패: ${err instanceof Error ? err.message : String(err)}`,
                    );
                  }
                }}
                onNew={() => {
                  setView("new");
                  setSelectedProject("");
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col h-full bg-background overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              {view === "new" && (
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" onClick={() => setView("list")} className="gap-2">
                      <ChevronLeft className="h-4 w-4" /> 뒤로가기
                    </Button>
                    <h1 className="text-xl font-bold text-foreground">새 프로젝트 생성</h1>
                  </div>
                  <Step1_ProjectUpload
                    isBackendAlive={api.isBackendAlive}
                    projects={api.projects}
                    onSelectProject={handleSelectProject}
                    onCreateProject={handleCreateProject}
                    onCreateMergeProject={handleCreateMergeProject}
                    loading={api.loading}
                  />
                </div>
              )}
              {view === "config" &&
                (loadedConfig ? (
                  <Step2_ConfigEditor
                    projectName={selectedProject}
                    config={loadedConfig}
                    onSaveConfig={handleSaveConfig}
                    onBack={() => setView("list")}
                    onNext={() => setView("run")}
                    onNextAndRun={() => {
                      setView("run");
                      setTimeout(() => handleRunWithPolling(), 100);
                    }}
                    loading={api.loading}
                  />
                ) : (
                  <div className="p-12 text-center text-muted-foreground bg-card border border-border rounded-xl shadow-sm animate-pulse max-w-6xl mx-auto mt-8">
                    프로젝트 설정을 안전하게 불러오는 중입니다...
                  </div>
                ))}
              {view === "run" && (
                <div className="max-w-4xl mx-auto py-8 px-4 pb-24">
                  <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" onClick={() => setView("config")} className="gap-2">
                      <ChevronLeft className="h-4 w-4" /> 설정으로 돌아가기
                    </Button>
                    <h1 className="text-xl font-bold text-foreground">파이프라인 실행</h1>
                  </div>
                  <Step3_RunDeploy
                    projectName={selectedProject}
                    logs={api.logs}
                    onRunPipeline={handleRunWithPolling}
                    downloadUrl={api.getDownloadUrl(selectedProject)}
                    loading={api.loading || pipelineRunning}
                    clearLogs={api.clearLogs}
                    onBack={() => setView("config")}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <GuideDrawer isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}

// ── StepIndicator 컴포넌트 ─────────────────────────────────────────────────────────────

function StepIndicator({
  step,
  currentView,
  label,
  targetView,
}: {
  step: number;
  currentView: AdminView;
  label: string;
  targetView: AdminView;
}) {
  const isCompleted =
    (targetView === "new" && (currentView === "config" || currentView === "run")) ||
    (targetView === "config" && currentView === "run");
  const isCurrent = currentView === targetView;
  const isPending = !isCurrent && !isCompleted;

  return (
    <div className={`flex items-center gap-2 ${isCurrent ? "opacity-100" : "opacity-60"}`}>
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
          isCompleted
            ? "bg-primary text-white"
            : isCurrent
              ? "bg-primary text-white ring-4 ring-primary/10"
              : "bg-muted-foreground/20 text-muted-foreground"
        }`}
      >
        {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : step}
      </div>
      <span
        className={`text-sm font-bold ${isCurrent ? "text-foreground" : "text-muted-foreground"}`}
      >
        {label}
      </span>
    </div>
  );
}

function ProjectListView({
  projects,
  isBackendAlive,
  onOpenConfig,
  onOpenRun,
  onTogglePublish,
  onDelete,
  onNew,
}: {
  projects: ProjectListItem[];
  isBackendAlive: boolean;
  onOpenConfig: (name: string) => void;
  onOpenRun: (name: string) => void;
  onTogglePublish: (name: string, published: boolean) => Promise<void>;
  onDelete: (name: string) => Promise<void>;
  onNew: () => void;
}) {
  const [toggling, setToggling] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [freshness, setFreshness] = useState<Record<string, ProjectFreshness>>({});
  const api = useManagerApi();

  // 프로젝트별 "설정 변경 후 미실행(stale)" 여부를 조회해 배지로 표시.
  useEffect(() => {
    if (!isBackendAlive || projects.length === 0) return;
    let cancelled = false;
    (async () => {
      const results = await Promise.all(
        projects.map(async (p) => {
          try {
            return [p.id, await api.getProjectFreshness(p.id)] as const;
          } catch {
            return null;
          }
        }),
      );
      if (cancelled) return;
      const next: Record<string, ProjectFreshness> = {};
      for (const r of results) {
        if (r) next[r[0]] = r[1];
      }
      setFreshness(next);
    })();
    return () => {
      cancelled = true;
    };
  }, [projects, isBackendAlive]);

  const handleDelete = async (id: string, name: string) => {
    if (
      !window.confirm(
        `정말로 프로젝트 '${name}'을(를) 완전히 삭제하시겠습니까?\n이 작업은 되돌릴 수 없으며 관련 설정 및 배포 데이터가 영구적으로 제거됩니다.`,
      )
    ) {
      return;
    }
    setDeleting(id);
    try {
      await onDelete(id);
    } finally {
      setDeleting(null);
    }
  };

  const handleToggle = async (name: string, current: boolean) => {
    setToggling(name);
    try {
      await onTogglePublish(name, !current);
    } finally {
      setToggling(null);
    }
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-card p-6 md:p-8 border border-border rounded-xl shadow-sm">
        <div>
          <h1 className="text-xl font-extrabold text-foreground">프로젝트 관리</h1>
          <p className="text-sm text-muted-foreground mt-1.5 font-medium">
            등록된 프로젝트 목록과 웹 게시 상태를 관리합니다.
          </p>
        </div>
        <Button
          size="sm"
          onClick={onNew}
          disabled={!isBackendAlive}
        >
          <Plus className="h-4 w-4 mr-1.5" />새 프로젝트 등록
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="전체 등록된 프로젝트" value={projects.length} />
        <StatCard
          label="웹 게시 완료 (Online)"
          value={projects.filter((p) => p.published !== false).length}
          accent
        />
        <StatCard
          label="비공개 (Offline)"
          value={projects.filter((p) => p.published === false).length}
        />
      </div>

      {/* Backend offline notice */}
      {!isBackendAlive && (
        <div className="rounded-lg border border-warning/40 bg-warning/15 dark:bg-warning/15/20 dark:border-warning/40/40 p-4 text-sm text-warning dark:text-warning">
          백엔드 서버 오프라인. 설정 변경 및 파이프라인 실행이 제한됩니다.
        </div>
      )}

      {/* Project table */}
      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-border rounded-xl bg-card shadow-sm">
          <FolderOpen className="h-10 w-10 text-muted-foreground/40 mb-4" />
          <p className="text-[13px] font-medium text-muted-foreground">등록된 프로젝트가 없습니다</p>
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-muted-foreground font-semibold border-b border-border">
              <tr>
                <th className="px-6 py-3.5 text-left text-xs">프로젝트명</th>
                <th className="px-6 py-3.5 text-left text-xs">마지막 업데이트</th>
                <th className="px-6 py-3.5 text-center text-xs">게시 상태</th>
                <th className="px-6 py-3.5 text-right text-xs">작업 액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((p) => {
                const isPublished = p.published !== false;
                return (
                  <tr key={p.id} className="hover:bg-muted/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div
                        className="flex items-center gap-3 cursor-pointer w-fit"
                        onClick={() => isBackendAlive && onOpenConfig(p.id)}
                      >
                        <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                          <Settings className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <span className="font-bold text-[15px] text-foreground group-hover:text-primary transition-colors">
                          {p.name}
                        </span>
                        {freshness[p.id]?.is_stale && (
                          <span
                            className="text-[11px] font-bold text-warning bg-warning/20 dark:bg-warning/15/40 dark:text-warning px-1.5 py-0.5 rounded"
                            title="config.yaml 또는 dashboard.json이 마지막 정제 실행 이후에 수정되었습니다. 다시 실행해주세요."
                          >
                            ⚠ 설정 변경 후 미실행
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground font-medium text-[13px]">{p.updated || "—"}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Switch
                          checked={isPublished}
                          disabled={!isBackendAlive || toggling === p.id}
                          onCheckedChange={() => handleToggle(p.id, isPublished)}
                          className="scale-90"
                        />
                        {isPublished ? (
                          <span className="text-[11px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                            공개
                          </span>
                        ) : (
                          <span className="text-[11px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                            비공개
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2 flex-wrap">
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={!isBackendAlive || deleting === p.id}
                          onClick={() => onOpenConfig(p.id)}
                          className="h-8 text-xs px-3 font-semibold"
                        >
                          설정 편집
                        </Button>
                        <Button
                          size="sm"
                          disabled={!isBackendAlive || deleting === p.id}
                          onClick={() => onOpenRun(p.id)}
                          className="h-8 text-xs px-3 font-semibold"
                        >
                          엔진 가동
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          disabled={deleting === p.id}
                          onClick={() => {
                            window.location.href = api.getExportHtmlUrl(p.id);
                          }}
                          className="h-8 text-xs px-3 font-semibold"
                          title="정적 HTML 보고서 다운로드"
                        >
                          HTML 내보내기
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          disabled={!isBackendAlive || deleting === p.id}
                          onClick={() => handleDelete(p.id, p.name)}
                          className="h-8 text-xs px-3 font-semibold text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          삭제
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <Card className={`shadow-sm ${accent ? "border-primary/40" : "border-border/60"}`}>
      <CardContent className="px-5 py-4 flex flex-col justify-center">
        <div className="text-[13px] font-medium text-muted-foreground mb-1.5">{label}</div>
        <div className={`text-3xl font-bold tracking-tight ${accent ? "text-primary" : "text-foreground"}`}>
          {value}
        </div>
      </CardContent>
    </Card>
  );
}
