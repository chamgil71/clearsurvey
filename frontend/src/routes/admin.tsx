import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import "@/legacy-dashboard.css";
import "@/styles.css";
import { useManagerApi } from "@/hooks/useManagerApi";
import type { LoadedProjectConfig, ProjectConfig } from "@/hooks/useManagerApi";
import type { DashboardConfig, ProjectListItem } from "@/types/dashboard";
import { Step1_ProjectUpload } from "@/components/manager/Step1_ProjectUpload";
import { Step2_ConfigEditor } from "@/components/manager/Step2_ConfigEditor";
import { Step3_RunDeploy } from "@/components/manager/Step3_RunDeploy";
import { GuideDrawer } from "@/components/dashboard/GuideDrawer";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import {
  BarChart3,
  ChevronRight,
  ExternalLink,
  FolderOpen,
  Globe,
  GlobeLock,
  LayoutDashboard,
  LogOut,
  Play,
  Plus,
  Settings,
  BookOpen,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

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

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
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

  return <AdminDashboard user={user} />;
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

  useEffect(() => () => { if (pollingRef.current) clearInterval(pollingRef.current); }, []);

  // 프로젝트 설정 로드 (컴포넌트 수명 주기 클린업 및 Race Condition 방어)
  useEffect(() => {
    let active = true;
    if (selectedProject && api.isBackendAlive && (view === "config" || view === "run")) {
      api.loadProjectConfig(selectedProject)
        .then((data) => {
          if (active) setLoadedConfig(data);
        })
        .catch(console.error);
    }
    return () => {
      active = false;
      setLoadedConfig(null);
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

  const handleCreateProject = async (name: string, file: File) => {
    const data = await api.createProject(name, file);
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
    if (pollingRef.current) { clearInterval(pollingRef.current); pollingRef.current = null; }

    api.clearLogs();
    let startResult: { status: string } | undefined;
    try { startResult = await api.runPipeline(selectedProject); } catch { return; }
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
        try { await api.exportDashboard(selectedProject); } catch { /* logged internally */ }
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
    <div className="flex h-screen bg-background/50 overflow-hidden font-sans">
      {/* ── Sidebar ──────────────────────────────────────────────────────────── */}
      <aside className="w-64 flex flex-col shrink-0 border-r border-border bg-gradient-to-b from-card via-card/98 to-muted/20 backdrop-blur-md">
        <SidebarLogo />
        <SidebarNavigation
          view={view}
          setView={setView}
          setSelectedProject={setSelectedProject}
          setGuideOpen={setGuideOpen}
        />
        <SidebarUserPanel
          email={user.email}
          onSignOut={handleSignOut}
        />
      </aside>

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-14 flex items-center gap-2 px-6 border-b bg-background shrink-0">
          <Breadcrumb view={view} project={selectedProject} onList={() => setView("list")} />
          <div className="flex-1" />
          {!api.isBackendAlive && (
            <Badge variant="destructive" className="text-xs">서버 오프라인</Badge>
          )}
          {api.isBackendAlive && (
            <Badge variant="outline" className="text-xs text-emerald-600 border-emerald-300">서버 온라인</Badge>
          )}
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {view === "list" && (
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
                  toast.error(`게시 상태 변경 실패: ${err instanceof Error ? err.message : String(err)}`);
                }
              }}
              onNew={() => setView("new")}
            />
          )}

          {view === "new" && (
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-xl font-bold">새 프로젝트</h1>
              <Step1_ProjectUpload
                isBackendAlive={api.isBackendAlive}
                projects={api.projects}
                onSelectProject={handleSelectProject}
                onCreateProject={handleCreateProject}
                loading={api.loading}
              />
            </div>
          )}

          {view === "config" && (
            <div className="max-w-5xl mx-auto space-y-4">
              {loadedConfig ? (
                <Step2_ConfigEditor
                  projectName={selectedProject}
                  config={loadedConfig}
                  onSaveConfig={handleSaveConfig}
                  onBack={() => setView("list")}
                  onNext={() => {
                    setView("run");
                    setTimeout(() => {
                      handleRunWithPolling();
                    }, 100);
                  }}
                  loading={api.loading}
                />
              ) : (
                <div className="p-12 text-center text-muted-foreground bg-muted/5 border rounded-lg animate-pulse">
                  ⏳ 프로젝트 설정을 안전하게 불러오는 중입니다...
                </div>
              )}
            </div>
          )}

          {view === "run" && (
            <div className="max-w-3xl mx-auto space-y-4">
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
        </main>
      </div>

      <GuideDrawer isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}

  // ── 서브 컴포넌트 ─────────────────────────────────────────────────────────────

function SidebarLogo() {
  return (
    <div className="relative flex items-center gap-3 px-6 pt-11 pb-7 bg-gradient-to-b from-primary/10 via-primary/[0.03] to-transparent shrink-0">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-indigo-600 shadow-md shadow-primary/20 shrink-0">
        <BarChart3 className="h-4 w-4 text-white animate-pulse" />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-black text-sm tracking-wide text-foreground truncate leading-none mb-1.5">
          ClearSurvey
        </span>
        <span className="text-[9px] font-bold text-muted-foreground/60 tracking-widest uppercase leading-none">
          Data Platform
        </span>
      </div>
      <Badge variant="outline" className="text-[9px] px-1.5 py-0.5 ml-auto border-primary/30 bg-primary/5 text-primary font-extrabold shadow-sm shrink-0">Admin</Badge>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function SidebarNavigation({
  view,
  setView,
  setSelectedProject,
  setGuideOpen,
}: {
  view: AdminView;
  setView: (v: AdminView) => void;
  setSelectedProject: (p: string) => void;
  setGuideOpen: (open: boolean) => void;
}) {
  return (
    <nav className="flex-1 py-6 space-y-3 overflow-y-auto">
      <SidebarItem
        icon={<LayoutDashboard className="h-4 w-4" />}
        label="프로젝트 목록"
        active={view === "list"}
        onClick={() => setView("list")}
      />
      <SidebarItem
        icon={<Plus className="h-4 w-4" />}
        label="새 프로젝트"
        active={view === "new"}
        onClick={() => { setView("new"); setSelectedProject(""); }}
      />

      <div className="pt-6 pb-2 px-6 flex items-center gap-2">
        <span className="text-[10px] uppercase font-extrabold tracking-widest text-muted-foreground/50 shrink-0">도구</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <SidebarItem
        icon={<BookOpen className="h-4 w-4" />}
        label="도움말 가이드"
        active={false}
        onClick={() => setGuideOpen(true)}
      />
      <div className="px-3 py-1">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent/60 hover:text-foreground hover:pl-4.5 transition-all duration-300 group"
        >
          <span className="text-muted-foreground/80 group-hover:text-primary transition-transform duration-300 group-hover:scale-110 shrink-0">
            <ExternalLink className="h-4 w-4" />
          </span>
          <span className="leading-none">공개 대시보드</span>
        </a>
      </div>
    </nav>
  );
}

function SidebarUserPanel({
  email,
  onSignOut,
}: {
  email: string;
  onSignOut: () => void;
}) {
  return (
    <div className="p-4 border-t border-border bg-gradient-to-t from-muted/30 to-transparent space-y-3 shrink-0">
      <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-card/60 border border-border/80 text-xs shadow-sm min-w-0">
        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px] shrink-0 border border-primary/20">
          {email.slice(0, 1).toUpperCase()}
        </div>
        <span className="truncate text-muted-foreground font-medium min-w-0" title={email}>
          {email}
        </span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-start gap-2 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all duration-200"
        onClick={onSignOut}
      >
        <LogOut className="h-4 w-4" />
        <span className="leading-none">로그아웃</span>
      </Button>
    </div>
  );
}

// ── SidebarItem ─────────────────────────────────────────────────────────────
function SidebarItem({
  icon, label, active, onClick,
}: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <div className="relative px-3">
      {active && (
        <div className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-gradient-to-b from-primary to-indigo-600" />
      )}
      <button
        onClick={onClick}
        className={`flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-300 text-left group ${
          active
            ? "bg-gradient-to-r from-primary to-indigo-600 text-white font-semibold shadow-md shadow-primary/20 scale-[1.02]"
            : "text-muted-foreground hover:bg-accent/60 hover:text-foreground hover:pl-4.5"
        }`}
      >
        <span className={`transition-transform duration-300 group-hover:scale-110 shrink-0 ${active ? "text-white" : "text-muted-foreground/80 group-hover:text-primary"}`}>
          {icon}
        </span>
        <span className="leading-none">{label}</span>
      </button>
    </div>
  );
}

function Breadcrumb({
  view, project, onList,
}: { view: AdminView; project: string; onList: () => void }) {
  const labels: Record<AdminView, string> = {
    list: "프로젝트 목록",
    new: "새 프로젝트",
    config: "설정 편집",
    run: "파이프라인 실행",
  };
  return (
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
      {view !== "list" ? (
        <button onClick={onList} className="hover:text-foreground transition-colors">
          프로젝트 목록
        </button>
      ) : (
        <span className="font-semibold text-foreground">프로젝트 목록</span>
      )}
      {view !== "list" && (
        <>
          <ChevronRight className="h-3 w-3" />
          {project && <span className="text-foreground font-medium font-mono">{project}</span>}
          {project && <ChevronRight className="h-3 w-3" />}
          <span className="font-semibold text-foreground">{labels[view]}</span>
        </>
      )}
    </div>
  );
}

function ProjectListView({
  projects,
  isBackendAlive,
  onOpenConfig,
  onOpenRun,
  onTogglePublish,
  onNew,
}: {
  projects: ProjectListItem[];
  isBackendAlive: boolean;
  onOpenConfig: (name: string) => void;
  onOpenRun: (name: string) => void;
  onTogglePublish: (name: string, published: boolean) => Promise<void>;
  onNew: () => void;
}) {
  const [toggling, setToggling] = useState<string | null>(null);
  const api = useManagerApi();

  const handleToggle = async (name: string, current: boolean) => {
    setToggling(name);
    try { await onTogglePublish(name, !current); } finally { setToggling(null); }
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">프로젝트 관리</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            등록된 프로젝트 목록과 웹 게시 상태를 관리합니다
          </p>
        </div>
        <Button onClick={onNew} disabled={!isBackendAlive}>
          <Plus className="h-4 w-4 mr-2" />
          새 프로젝트
        </Button>
      </div>

      {/* Backend offline notice */}
      {!isBackendAlive && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-4 text-sm text-amber-800 dark:text-amber-200">
          ⚠ FastAPI 서버가 오프라인 상태입니다. 설정 변경 및 파이프라인 실행은 서버 온라인 시 가능합니다.
        </div>
      )}

      {/* Project table */}
      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border rounded-xl bg-muted/20">
          <FolderOpen className="h-12 w-12 text-muted-foreground/40 mb-4" />
          <p className="text-muted-foreground">등록된 프로젝트가 없습니다</p>
          <Button className="mt-4" onClick={onNew} disabled={!isBackendAlive}>
            <Plus className="h-4 w-4 mr-2" />
            첫 프로젝트 만들기
          </Button>
        </div>
      ) : (
        <div className="border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-muted-foreground text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3 text-left">프로젝트명</th>
                <th className="px-4 py-3 text-left">마지막 업데이트</th>
                <th className="px-4 py-3 text-center">웹 게시</th>
                <th className="px-4 py-3 text-right">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {projects.map((p) => {
                const isPublished = p.published !== false;
                return (
                  <tr key={p.id} className="bg-background hover:bg-muted/20 transition-colors">
                    {/* 프로젝트명 */}
                    <td className="px-4 py-3">
                      <div
                        className="flex items-center gap-2 cursor-pointer group/name"
                        onClick={() => isBackendAlive && onOpenConfig(p.id)}
                        title="클릭하여 프로젝트 설정 편집"
                      >
                        <Settings className="h-4 w-4 text-muted-foreground/50 group-hover/name:text-primary transition-colors" />
                        <span className="font-bold font-mono text-foreground group-hover/name:text-primary group-hover/name:underline transition-colors">
                          {p.name}
                        </span>
                      </div>
                    </td>

                    {/* 업데이트 */}
                    <td className="px-4 py-3 text-muted-foreground">
                      {p.updated || "—"}
                    </td>

                    {/* 게시 토글 */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <Switch
                          checked={isPublished}
                          disabled={!isBackendAlive || toggling === p.id}
                          onCheckedChange={() => handleToggle(p.id, isPublished)}
                        />
                        {isPublished ? (
                          <Globe className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <GlobeLock className="h-3.5 w-3.5 text-muted-foreground/50" />
                        )}
                      </div>
                    </td>

                    {/* 액션 */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={!isBackendAlive}
                          onClick={() => onOpenConfig(p.id)}
                        >
                          <Settings className="h-3.5 w-3.5 mr-1" />
                          설정
                        </Button>
                        <Button
                          size="sm"
                          disabled={!isBackendAlive}
                          onClick={() => onOpenRun(p.id)}
                        >
                          <Play className="h-3.5 w-3.5 mr-1" />
                          실행
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => {
                            window.location.href = api.getExportHtmlUrl(p.id);
                          }}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                          title="인터넷 연결이 필요 없는 오프라인 단독 실행형 HTML 보고서를 다운로드합니다."
                        >
                          <FileText className="h-3.5 w-3.5 mr-1 text-slate-500" />
                          HTML 다운로드
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

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="전체 프로젝트" value={projects.length} />
        <StatCard label="웹 게시 중" value={projects.filter((p) => p.published !== false).length} accent />
        <StatCard label="비공개" value={projects.filter((p) => p.published === false).length} />
      </div>
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className={`border rounded-xl p-4 ${accent ? "bg-primary/5 border-primary/20" : "bg-muted/20"}`}>
      <div className={`text-2xl font-bold ${accent ? "text-primary" : ""}`}>{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
