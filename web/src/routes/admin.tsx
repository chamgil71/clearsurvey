import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import "@/legacy-dashboard.css";
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

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

  // 프로젝트 설정 로드
  useEffect(() => {
    if (selectedProject && api.isBackendAlive && (view === "config" || view === "run")) {
      api.loadProjectConfig(selectedProject).then(setLoadedConfig).catch(console.error);
    }
  }, [selectedProject, api.isBackendAlive, view]);

  const handleSignOut = async () => {
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
      setView("run");
    } catch (err: unknown) {
      toast.error(`설정 저장 실패: ${err instanceof Error ? err.message : String(err)}`);
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
    <div className="flex h-screen bg-background overflow-hidden">
      {/* ── Sidebar ──────────────────────────────────────────────────────────── */}
      <aside className="w-56 flex flex-col shrink-0 border-r bg-muted/30">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-4 border-b">
          <BarChart3 className="h-5 w-5 text-primary" />
          <span className="font-black text-sm tracking-tight">ClearSurvey</span>
          <Badge variant="outline" className="text-[9px] ml-auto">Admin</Badge>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
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

          <div className="pt-2 pb-1">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground/60 px-2">도구</div>
          </div>

          <SidebarItem
            icon={<BookOpen className="h-4 w-4" />}
            label="도움말 가이드"
            active={false}
            onClick={() => setGuideOpen(true)}
          />
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            공개 대시보드
          </a>
        </nav>

        {/* User info */}
        <div className="p-3 border-t space-y-2">
          <div className="px-2 py-1.5 rounded-md bg-muted text-xs truncate text-muted-foreground">
            {user.email}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-muted-foreground hover:text-destructive"
            onClick={handleSignOut}
          >
            <LogOut className="h-3.5 w-3.5" />
            로그아웃
          </Button>
        </div>
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
              <Step2_ConfigEditor
                projectName={selectedProject}
                config={loadedConfig}
                onSaveConfig={handleSaveConfig}
                loading={api.loading}
              />
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

function SidebarItem({
  icon, label, active, onClick,
}: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 w-full rounded-md px-2 py-2 text-sm transition-colors text-left ${
        active
          ? "bg-primary/10 text-primary font-semibold"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {icon}
      {label}
    </button>
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
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-muted-foreground/50" />
                        <span className="font-medium font-mono">{p.name}</span>
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
