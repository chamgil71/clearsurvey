import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, BookOpen, Settings, Moon, Sun, FileBarChart, FileText } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Survey Dashboard" }] }),
  component: DashboardPage,
});

// 차트 그리드 트랙 최소 폭. ChartCard.tsx의 단일 폭 카드 max-w-[560px]와는 별개로,
// 그리드 컬럼이 이보다 좁아지지 않도록 하는 하한선(반응형 auto-fit의 기준값).
const CHART_GRID_MIN_CARD_PX = 320;
// Tailwind `gap-3` = 0.75rem = 12px. 아래 클래스에서 gap-3을 바꾸면 이 값도 함께 바꿔야 함.
const CHART_GRID_GAP_PX = 12;
// dashboard.json에 layout.maxColumns가 없을 때 기본 가로 배열 개수.
const DEFAULT_MAX_COLUMNS = 4;

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
  const [exporting, setExporting] = useState<"ppt" | "pdf" | null>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

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

  const handleExportPptx = async () => {
    if (!cfg || !data) return;
    setExporting("ppt");
    try {
      const { exportToPptx } = await import("@/lib/exportPptx");
      await exportToPptx(cfg, filtered, data);
    } catch (e) {
      toast.error(`PPT 내보내기 실패: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setExporting(null);
    }
  };

  const handleExportPdf = async () => {
    if (!dashboardRef.current || !data) return;
    setExporting("pdf");
    try {
      const { exportToPdf } = await import("@/lib/exportPdf");
      await exportToPdf(dashboardRef.current, data.meta.project, theme === "dark");
    } catch (e) {
      toast.error(`PDF 내보내기 실패: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setExporting(null);
    }
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
          {error && <p className="mt-5 text-[11px] text-muted-foreground opacity-60">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary contextName="공개 대시보드">
      <div className="flex flex-col min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 h-14 flex items-center gap-4 sticky top-0 z-50 shadow-sm">
          <button
            type="button"
            onClick={() => window.location.reload()}
            title="새로고침"
            className="font-bold text-base text-primary flex items-center gap-1.5 bg-transparent border-none p-0 cursor-pointer"
          >
            <BarChart3 className="h-4 w-4" />
            ClearSurvey
          </button>

          <Select value={url ?? undefined} onValueChange={(v) => v && switchProject(v)}>
            <SelectTrigger title="프로젝트 선택" className="h-8 w-auto max-w-[240px] text-xs">
              <SelectValue placeholder="프로젝트 선택..." />
            </SelectTrigger>
            <SelectContent>
              {projects.map((p) => {
                const v = p.file.startsWith("data/") ? "/" + p.file : "/data/" + p.file;
                return (
                  <SelectItem key={p.id} value={v} className="text-xs">
                    {p.name} {p.updated ? `(${p.updated})` : ""}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <span className="flex-1" />

          <span className="text-[11px] text-muted-foreground hidden sm:block">
            {data.meta.generated_at?.slice(0, 16).replace("T", " ")}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={handleExportPptx}
            disabled={exporting !== null}
            title="차트를 PPT로 내보내기"
            className="text-xs gap-1.5"
          >
            <FileBarChart className="h-3.5 w-3.5" />
            {exporting === "ppt" ? "생성 중…" : "PPT"}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleExportPdf}
            disabled={exporting !== null}
            title="대시보드를 PDF로 내보내기"
            className="text-xs gap-1.5"
          >
            <FileText className="h-3.5 w-3.5" />
            {exporting === "pdf" ? "생성 중…" : "PDF"}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            title="다크모드 전환"
            className="h-8 w-8"
          >
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
            <Button
              variant="ghost"
              size="sm"
              className="text-xs gap-1.5"
              title="대시보드 관리자 설정"
            >
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

        {/* Tabs */}
        <Tabs
          value={tab}
          onValueChange={(v) => setTab(v as "dashboard" | "list")}
          className="flex-1"
        >
          <TabsList className="h-auto w-full justify-start gap-1 rounded-none border-b border-border bg-card px-6 pt-4 pb-0">
            <TabsTrigger
              value="dashboard"
              className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground shadow-none hover:text-primary data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              📈 대시보드
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground shadow-none hover:text-primary data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              📋 목록 · 검색
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="px-6 py-5 mt-0" ref={dashboardRef}>
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-sm text-muted-foreground col-span-full">
                필터 조건에 해당하는 데이터가 없습니다.
              </div>
            ) : (
              <div
                className="grid [grid-auto-flow:dense] gap-3 mx-auto"
                style={{
                  gridTemplateColumns: `repeat(auto-fit, minmax(${CHART_GRID_MIN_CARD_PX}px, 1fr))`,
                  // 가로 배열 최대 개수(기본 4열)를 넘지 않도록 컨테이너 폭을 제한.
                  // auto-fit이라 실제 열 수는 화면 폭에 맞춰 이보다 적게 줄어들 수 있음(반응형 유지).
                  maxWidth: `${
                    (cfg.layout?.maxColumns ?? DEFAULT_MAX_COLUMNS) * CHART_GRID_MIN_CARD_PX +
                    ((cfg.layout?.maxColumns ?? DEFAULT_MAX_COLUMNS) - 1) * CHART_GRID_GAP_PX
                  }px`,
                }}
              >
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
          </TabsContent>

          {/* List Tab */}
          <TabsContent value="list" className="px-6 py-5 mt-0">
            <DataTable rows={filtered} cfg={cfg} search={search} />
          </TabsContent>
        </Tabs>

        <GuideDrawer isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
      </div>
    </ErrorBoundary>
  );
}
