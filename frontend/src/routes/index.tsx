import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useDashboardData } from "@/hooks/useDashboardData";
import { buildDefaultConfig, loadConfig } from "@/lib/dashboardConfig";
import { filterRows } from "@/lib/aggregate";
import type { DashboardConfig } from "@/types/dashboard";
import { KpiRow } from "@/components/dashboard/KpiRow";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { GuideDrawer } from "@/components/dashboard/GuideDrawer";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { BarChart3, BookOpen, Settings, Moon, Sun } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Survey Dashboard" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const initialUrl =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("data") || undefined
      : undefined;

  const { projects, data, url, loading, error, switchProject } = useDashboardData(initialUrl);
  const [tab, setTab] = useState<"dashboard" | "list">("dashboard");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [theme, setTheme] = useState<string>("");
  const [guideOpen, setGuideOpen] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") || "" : "";
    setTheme(saved);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  const cfg: DashboardConfig | null = useMemo(() => {
    if (!data) return null;
    const saved = loadConfig(data.meta.project, data.dashboard || null, data.meta);
    return saved || buildDefaultConfig(data.meta);
  }, [data]);

  useEffect(() => {
    setSearch("");
    setFilters({});
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    return filterRows(data.rows, search.trim().toLowerCase(), filters);
  }, [data, search, filters]);

  if (loading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <p className="text-sm text-muted-foreground">⏳ 데이터 로드 중...</p>
      </div>
    );
  }

  if (!data || !cfg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-[480px] text-center">
          <div className="text-5xl mb-4">📊</div>
          <h1 className="text-xl font-bold text-foreground mb-2">ClearSurvey Dashboard</h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            표시할 설문 데이터가 없습니다.
            <br />
            로컬 환경에서 백엔드를 실행하고 데이터를 내보내면
            <br />
            여기에서 대시보드를 확인할 수 있습니다.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/login">
              <Button>🔐 관리자 로그인</Button>
            </Link>
            <a href="https://github.com/chamgil71/clearsurvey" target="_blank" rel="noreferrer">
              <Button variant="outline">📖 GitHub</Button>
            </a>
          </div>
          {error && (
            <p className="mt-5 text-[11px] text-muted-foreground opacity-60">{error}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary contextName="공개 대시보드">
      <div className="flex flex-col min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 h-14 flex items-center gap-4 sticky top-0 z-50 shadow-sm">
          <span className="font-bold text-base text-primary flex items-center gap-1.5">
            <BarChart3 className="h-4 w-4" />
            Survey
          </span>

          <select
            title="프로젝트 선택"
            value={url ?? ""}
            onChange={(e) => e.target.value && switchProject(e.target.value)}
            className="text-xs px-2.5 py-1.5 border border-input rounded-md bg-background text-foreground max-w-[240px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">프로젝트 선택...</option>
            {projects.map((p) => {
              const v = p.file.startsWith("data/") ? "/" + p.file : "/data/" + p.file;
              return (
                <option key={p.id} value={v}>
                  {p.name} {p.updated ? `(${p.updated})` : ""}
                </option>
              );
            })}
          </select>

          <span className="flex-1" />

          <span className="text-[11px] text-muted-foreground hidden sm:block">
            {data.meta.generated_at?.slice(0, 16).replace("T", " ")}
          </span>

          <Button variant="ghost" size="icon" onClick={toggleTheme} title="다크모드 전환" className="h-8 w-8">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setGuideOpen(true)}
            title="설문 정제 가이드 보기"
            className="text-xs gap-1.5"
          >
            <BookOpen className="h-3.5 w-3.5" />
            가이드
          </Button>

          <Link to="/admin">
            <Button variant="ghost" size="sm" className="text-xs gap-1.5" title="대시보드 관리자 설정">
              <Settings className="h-3.5 w-3.5" />
              설정
            </Button>
          </Link>
        </header>

        {/* KPI */}
        <KpiRow
          rows={filtered}
          cfg={cfg}
          onKpiClick={(k) => {
            if (k.type === "count_value") {
              setFilters((prev) => ({ ...prev, [k.col]: k.value }));
            } else {
              setFilters({});
              setSearch("");
            }
          }}
        />

        {/* Filter Bar */}
        <FilterBar
          data={data}
          cfg={cfg}
          search={search}
          filters={filters}
          filteredCount={filtered.length}
          onSearch={setSearch}
          onFilterChange={(col, val) =>
            setFilters((prev) => {
              const next = { ...prev };
              if (val) next[col] = val;
              else delete next[col];
              return next;
            })
          }
          onReset={() => {
            setSearch("");
            setFilters({});
          }}
        />

        {/* Tab Nav */}
        <nav className="flex gap-1 px-6 pt-4 border-b border-border bg-card">
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              tab === "dashboard"
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-primary"
            }`}
            onClick={() => setTab("dashboard")}
          >
            📈 대시보드
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              tab === "list"
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-primary"
            }`}
            onClick={() => setTab("list")}
          >
            📋 목록 · 검색
          </button>
        </nav>

        {/* Dashboard Tab */}
        <section className={`px-6 py-5 ${tab !== "dashboard" ? "hidden" : ""}`}>
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-sm text-muted-foreground col-span-full">
              필터 조건에 해당하는 데이터가 없습니다.
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] [grid-auto-flow:dense] gap-3">
              {(cfg.charts || []).map((c, i) => (
                <ChartCard
                  key={i}
                  chart={c}
                  rows={filtered}
                  data={data}
                  onSelect={(col, val) =>
                    setFilters((prev) => ({ ...prev, [col]: prev[col] === val ? "" : val }))
                  }
                />
              ))}
            </div>
          )}
        </section>

        {/* List Tab */}
        <section className={`px-6 py-5 ${tab !== "list" ? "hidden" : ""}`}>
          <DataTable rows={filtered} cfg={cfg} search={search} />
        </section>

        <GuideDrawer isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
      </div>
    </ErrorBoundary>
  );
}
