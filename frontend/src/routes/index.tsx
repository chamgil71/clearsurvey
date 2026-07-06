import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import "@/legacy-dashboard.css";
import { useDashboardData } from "@/hooks/useDashboardData";
import { buildDefaultConfig, loadConfig } from "@/lib/dashboardConfig";
import { filterRows } from "@/lib/aggregate";
import type { DashboardConfig } from "@/types/dashboard";
import { KpiRow } from "@/components/dashboard/KpiRow";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { GuideDrawer } from "@/components/dashboard/GuideDrawer";

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

  // load theme — data-theme (legacy CSS) + .dark class (shadcn) 동시 적용
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") || "" : "";
    setTheme(saved);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = saved;
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  const cfg: DashboardConfig | null = useMemo(() => {
    if (!data) return null;
    const saved = loadConfig(data.meta.project, data.dashboard || null, data.meta);
    return saved || buildDefaultConfig(data.meta);
  }, [data]);

  // reset filters when data changes
  useEffect(() => {
    setSearch("");
    setFilters({});
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    return filterRows(data.rows, search.trim().toLowerCase(), filters);
  }, [data, search, filters]);

  if (loading && !data) {
    return <div id="loading">⏳ 데이터 로드 중...</div>;
  }

  if (!data || !cfg) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-primary)", padding: "24px" }}>
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>
            ClearSurvey Dashboard
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            표시할 설문 데이터가 없습니다.<br />
            로컬 환경에서 백엔드를 실행하고 데이터를 내보내면<br />
            여기에서 대시보드를 확인할 수 있습니다.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/login"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 18px", borderRadius: 8, background: "var(--accent)", color: "#fff", fontSize: 14, fontWeight: 500 }}
            >
              🔐 관리자 로그인
            </Link>
            <a
              href="https://github.com/chamgil71/clearsurvey"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 18px", borderRadius: 8, border: "1px solid var(--border)", color: "var(--text-primary)", fontSize: 14, fontWeight: 500 }}
            >
              📖 GitHub
            </a>
          </div>
          {error && (
            <p style={{ marginTop: 20, fontSize: 11, color: "var(--text-muted)", opacity: 0.6 }}>
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrap">
      <header className="header">
        <span className="header-logo">📊 Survey</span>
        <select
          className="project-select"
          title="프로젝트 선택"
          value={url ?? ""}
          onChange={(e) => e.target.value && switchProject(e.target.value)}
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
        <span className="header-spacer" />
        <span className="header-meta">
          {data.meta.generated_at?.slice(0, 16).replace("T", " ")}
        </span>
        <button className="theme-toggle btn-ghost btn-sm" onClick={toggleTheme} title="다크모드">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button className="btn-ghost btn-sm" onClick={() => setGuideOpen(true)} title="설문 정제 가이드 보기">
          📖 가이드
        </button>
      </header>

      <KpiRow
        rows={filtered}
        cfg={cfg}
        onKpiClick={(k) => {
          if (k.type === "count_value") {
            setFilters((prev) => ({
              ...prev,
              [k.col]: k.value,
            }));
          } else {
            setFilters({});
            setSearch("");
          }
        }}
      />

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

      <nav className="tab-nav">
        <button
          className={`tab-btn${tab === "dashboard" ? " active" : ""}`}
          onClick={() => setTab("dashboard")}
        >
          📈 대시보드
        </button>
        <button
          className={`tab-btn${tab === "list" ? " active" : ""}`}
          onClick={() => setTab("list")}
        >
          📋 목록 · 검색
        </button>
      </nav>

      <section className={`tab-panel${tab !== "dashboard" ? " hidden" : ""}`}>
        {filtered.length === 0 ? (
          <div className="no-data">필터 조건에 해당하는 데이터가 없습니다.</div>
        ) : (
          <div className="chart-grid">
            {(cfg.charts || []).map((c, i) => (
              <ChartCard key={i} chart={c} rows={filtered} data={data} />
            ))}
          </div>
        )}
      </section>

      <section className={`tab-panel${tab !== "list" ? " hidden" : ""}`}>
        <DataTable rows={filtered} cfg={cfg} search={search} />
      </section>

      <GuideDrawer isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}

