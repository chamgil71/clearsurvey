import React, { useState } from "react";
import type { ProjectConfig } from "@/hooks/useManagerApi";
import type { DashboardConfig, KpiItem, ChartItem } from "@/types/dashboard";
import {
  Save,
  Settings,
  BarChart3,
  ListCollapse,
  Plus,
  Trash2,
  ArrowUpDown,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * ColumnDef — Python engine/config.py ColumnDef 와 동일한 구조.
 *
 * - output_col   : 출력 컬럼명 (필수)
 * - source_col   : 원본 엑셀 열번호 (1-based)
 * - transform    : 정제 규칙 이름 (단일 문자열, TRANSFORM_RULES 참조)
 * - flag_keyword : to_binary 전용 — 이 키워드 포함 시 1, 아니면 0
 * - backup_col   : jang 전용 — 주 컬럼이 빈 경우 사용할 보조 열번호
 * - include_in_slicer : 대시보드 슬라이서 필터 등록 여부
 * - type         : UI 표시 전용 힌트 (Python ColumnDef 에는 없음, YAML 에 extra-field 로 저장됨)
 */
interface ColumnDef {
  output_col: string;
  source_col?: number | null;
  source_col_name?: string;       // 원본 헤더명 (참조용, 수정 불필요)
  transform?: string | null;
  flag_keyword?: string;
  backup_col?: number | null;
  include_in_slicer?: boolean;
  type?: string;                  // UI 표시용 힌트 (auto-detect 시 내보내기에서 자동 결정)
}

interface Step2Props {
  projectName: string;
  config: {
    config: ProjectConfig;
    dashboard: DashboardConfig | null;
  } | null;
  onSaveConfig: (config: ProjectConfig, dashboard: DashboardConfig | null) => Promise<void>;
  onBack: () => void;
  onNext: () => void;
  loading: boolean;
}

/**
 * TRANSFORM_RULES — engine/config_excel.py _TRANSFORM_OPTIONS 와 동기화.
 *
 * 엔진에 등록된 실제 transform 이름만 포함합니다.
 * (오래된 alias 는 엔진 내부에서 호환되지만 UI 에서는 canonical 이름만 노출)
 */
const TRANSFORM_RULES: { value: string; label: string }[] = [
  { value: "",               label: "정제 없음 (통과)" },
  { value: "copy",           label: "copy — 원본 값 그대로" },
  { value: "exclude",        label: "exclude — 출력 제외" },
  // ── 클렌징 (norm_) ─────────────────────────────────────────────────────────
  { value: "norm_date",      label: "norm_date — 날짜 표준화 (YYYY-MM-DD)" },
  { value: "norm_date_parts",label: "norm_date_parts — 날짜 + 연/월/일 파생열 4개 자동 생성" },
  { value: "date_year",      label: "date_year — 날짜 연도(YYYY) 숫자만 추출" },
  { value: "norm_phone",     label: "norm_phone — 전화번호 정규화" },
  { value: "norm_company",   label: "norm_company — 회사명 정규화" },
  { value: "norm_text",      label: "norm_text — 텍스트 정규화" },
  { value: "norm_num",       label: "norm_num — 숫자 정규화" },
  { value: "norm_position",  label: "norm_position — 직함 정규화" },
  // ── 검증 (val_) ────────────────────────────────────────────────────────────
  { value: "val_email",      label: "val_email — 이메일 유효성 검사" },
  { value: "val_url",        label: "val_url — URL 유효성 검사" },
  { value: "val_brn",        label: "val_brn — 사업자번호 유효성 검사" },
  // ── 마스킹 (mask_) ─────────────────────────────────────────────────────────
  { value: "mask_name",      label: "mask_name — 이름 마스킹" },
  { value: "mask_rrn",       label: "mask_rrn — 주민번호 뒷자리 마스킹" },
  // ── 변환 ────────────────────────────────────────────────────────────────────
  { value: "to_binary",      label: "to_binary — 키워드 포함 여부 → 1/0 (flag_keyword 필요)" },
  { value: "split_binary",   label: "split_binary — 복수 선택형 다중 이진 플래그 분리 (flag_keyword 필요)" },
  { value: "to_pct",         label: "to_pct — 퍼센트 문자열 → float" },
  // ── 주소 ────────────────────────────────────────────────────────────────────
  { value: "addr_split",     label: "addr_split — 주소 → 시도/시군구/상세 파생열 4개" },
  // ── 집계 ────────────────────────────────────────────────────────────────────
  { value: "group_sum",      label: "group_sum — 다중 컬럼 합산 (source_cols 필요)" },
];

/** flag_keyword 인수가 필요한 transform 목록 */
const NEEDS_FLAG_KEYWORD = new Set(["to_binary", "o_binary", "split_binary"]);

/** backup_col 인수가 필요한 transform 목록 */
const NEEDS_BACKUP_COL = new Set(["jang"]);

/** source_cols 인수가 필요한 transform 목록 */
const NEEDS_SOURCE_COLS = new Set(["group_sum"]);

/** 파생열을 자동 생성하는 transform 목록 */
const DERIVES_COLUMNS = new Set(["norm_date_parts", "addr_split", "split_binary"]);

const COL_TYPES = [
  { value: "category", label: "카테고리 (category)" },
  { value: "numeric",  label: "수치 데이터 (numeric)" },
  { value: "text",     label: "자유 텍스트 (text)" },
  { value: "datetime", label: "날짜/시간 (datetime)" },
];

const CHART_TYPES = ["donut", "bar", "hbar", "histogram", "multibar"] as const;

const MAX_SOURCE_COLS = 50;
const sourceColOptions = Array.from({ length: MAX_SOURCE_COLS }, (_, i) => i + 1);

const EMPTY_DASHBOARD: DashboardConfig = {
  version: 1,
  kpi: [],
  charts: [],
  list: { visible_cols: [], filter_cols: [] },
};

function normDashboard(d: DashboardConfig | null | undefined): DashboardConfig {
  if (!d || Object.keys(d).length === 0) return EMPTY_DASHBOARD;
  return {
    ...EMPTY_DASHBOARD,
    ...d,
    kpi: d.kpi ?? [],
    charts: d.charts ?? [],
    list: d.list ?? EMPTY_DASHBOARD.list,
  };
}

export const Step2_ConfigEditor: React.FC<Step2Props> = ({
  projectName,
  config,
  onSaveConfig,
  onBack,
  onNext,
  loading,
}) => {
  const [localConfig, setLocalConfig] = useState<ProjectConfig | null>(config?.config ?? null);
  const [localDashboard, setLocalDashboard] = useState<DashboardConfig>(
    normDashboard(config?.dashboard),
  );
  const [activeSubTab, setActiveSubTab] = useState<"columns" | "dashboard">("columns");

  // config prop 변경 시 로컬 상태 동기화
  React.useEffect(() => {
    if (config) {
      setLocalConfig(config.config);
      setLocalDashboard(normDashboard(config.dashboard));
    }
  }, [config]);

  if (!localConfig) {
    return (
      <div className="p-8 text-center text-muted-foreground bg-muted/20 border rounded-lg">
        ⏳ 1단계에서 프로젝트를 로드하거나 엑셀을 업로드하면 상세 편집기가 활성화됩니다.
      </div>
    );
  }

  // ── Column Handlers ──────────────────────────────────────────────────────────

  const handleColumnChange = (index: number, patch: Partial<ColumnDef>) => {
    setLocalConfig((prev: any) => {
      const columns = [...prev.columns];
      columns[index] = { ...columns[index], ...patch };
      return { ...prev, columns };
    });
  };

  const handleExcludeToggle = (index: number, currentlyExcluded: boolean) => {
    if (currentlyExcluded) {
      handleColumnChange(index, { transform: "copy" });
    } else {
      handleColumnChange(index, { transform: "exclude" });
    }
  };

  /**
   * transform 변경 시 더 이상 필요 없는 인수(flag_keyword, backup_col)를 자동으로 제거합니다.
   */
  const handleTransformChange = (index: number, transform: string) => {
    setLocalConfig((prev: any) => {
      const columns = [...prev.columns];
      const col: ColumnDef = { ...columns[index] };
      col.transform = transform || null;

      if (!NEEDS_FLAG_KEYWORD.has(transform)) {
        delete col.flag_keyword;
      }
      if (!NEEDS_BACKUP_COL.has(transform)) {
        delete col.backup_col;
      }

      columns[index] = col;
      return { ...prev, columns };
    });
  };

  const addColumn = () => {
    setLocalConfig((prev: any) => ({
      ...prev,
      columns: [
        ...prev.columns,
        {
          output_col: "new_column",
          source_col: prev.columns.length + 1,
          transform: "copy",
          include_in_slicer: false,
        } satisfies ColumnDef,
      ],
    }));
  };

  const deleteColumn = (index: number) => {
    setLocalConfig((prev: any) => ({
      ...prev,
      columns: prev.columns.filter((_: ColumnDef, i: number) => i !== index),
    }));
  };

  const moveColumn = (index: number, dir: -1 | 1) => {
    setLocalConfig((prev: any) => {
      const cols = [...prev.columns];
      const target = index + dir;
      if (target < 0 || target >= cols.length) return prev;
      [cols[index], cols[target]] = [cols[target], cols[index]];
      return { ...prev, columns: cols };
    });
  };

  // ── KPI Handlers ─────────────────────────────────────────────────────────────

  const updateKpi = (i: number, patch: Partial<Record<string, unknown>>) => {
    setLocalDashboard((prev: any) => {
      const kpi = [...prev.kpi];
      kpi[i] = { ...kpi[i], ...patch };
      return { ...prev, kpi };
    });
  };

  const addKpi = () => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      kpi: [...prev.kpi, { label: "새 KPI", type: "total_rows" }],
    }));
  };

  const deleteKpi = (i: number) => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      kpi: prev.kpi.filter((_: unknown, j: number) => j !== i),
    }));
  };

  // ── Chart Handlers ───────────────────────────────────────────────────────────

  const updateChart = (i: number, patch: Partial<Record<string, unknown>>) => {
    setLocalDashboard((prev: any) => {
      const charts = [...prev.charts];
      charts[i] = { ...charts[i], ...patch };
      return { ...prev, charts };
    });
  };

  const addChart = () => {
    const firstCol = (localConfig.columns as ColumnDef[]).find(
      (c) => c.transform !== "exclude",
    );
    setLocalDashboard((prev: any) => ({
      ...prev,
      charts: [
        ...prev.charts,
        { col: firstCol?.output_col ?? "", type: "donut", title: "새 차트" },
      ],
    }));
  };

  const deleteChart = (i: number) => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      charts: prev.charts.filter((_: unknown, j: number) => j !== i),
    }));
  };

  const updateDashboardList = (patch: Partial<{ visible_cols: string[]; filter_cols: string[] }>) => {
    setLocalDashboard((prev: any) => {
      const list = { ...(prev.list || { visible_cols: [], filter_cols: [] }), ...patch };
      return { ...prev, list };
    });
  };

  const handleSave = async () => {
    const updatedDashboard = {
      ...localDashboard,
      list: localDashboard.list ?? { visible_cols: [], filter_cols: [] },
    };
    await onSaveConfig(localConfig, updatedDashboard);
  };

  const handleSaveAndNext = async () => {
    const updatedDashboard = {
      ...localDashboard,
      list: localDashboard.list ?? { visible_cols: [], filter_cols: [] },
    };
    try {
      await onSaveConfig(localConfig, updatedDashboard);
      onNext();
    } catch (err) {
      // prevent transition on validation error
    }
  };

  /** exclude 가 아닌 컬럼 목록 (KPI·차트 대상 컬럼 선택용) */
  const activeColumns: ColumnDef[] = localConfig?.columns
    ? (localConfig.columns as ColumnDef[]).filter((c) => c.transform !== "exclude")
    : [];

  /** split_binary 등의 파생 가상 열 명칭을 포함한 차트 집계 가능 전체 컬럼 목록 */
  const allAvailableChartCols = React.useMemo(() => {
    const list: string[] = [];
    activeColumns.forEach((col) => {
      list.push(col.output_col);
      if (col.transform === "split_binary" && col.flag_keyword) {
        const kws = col.flag_keyword.split(",").map((k) => k.trim()).filter(Boolean);
        kws.forEach((kw) => {
          list.push(`${col.output_col}_${kw}`);
        });
      }
      if (col.transform === "norm_date_parts") {
        list.push(`${col.output_col}_년`, `${col.output_col}_월`, `${col.output_col}_일`);
      }
      if (col.transform === "addr_split") {
        list.push(`${col.output_col}_시도`, `${col.output_col}_시군구`, `${col.output_col}_상세`);
      }
    });
    return list;
  }, [activeColumns]);

  return (
    <div className="space-y-6">
      {/* ── 헤더 ── */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            프로젝트 설정 및 대시보드 설계자
          </h2>
          <p className="text-xs text-muted-foreground">
            프로젝트: <strong className="text-primary">{projectName}</strong>
            {" "}| 엑셀 원본 매핑과 대시보드 레이아웃을 코딩 없이 제어하세요.
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={loading}
          size="sm"
          className="font-semibold gap-1.5"
        >
          <Save className="h-4 w-4" />
          {loading ? "저장 중..." : "정제 설정 저장"}
        </Button>
      </div>

      <Tabs
        value={activeSubTab}
        onValueChange={(v) => setActiveSubTab(v as "columns" | "dashboard")}
        className="w-full"
      >
        <TabsList className="grid w-[420px] grid-cols-2">
          <TabsTrigger value="columns" className="text-xs font-semibold gap-1.5">
            <ListCollapse className="h-3.5 w-3.5" />
            1. 정제 및 컬럼 매핑 설정
          </TabsTrigger>
          <TabsTrigger value="dashboard" className="text-xs font-semibold gap-1.5">
            <BarChart3 className="h-3.5 w-3.5" />
            2. 대시보드 비주얼 레이아웃
          </TabsTrigger>
        </TabsList>

        {/* ════════════════════ 컬럼 매핑 탭 ════════════════════ */}
        <TabsContent value="columns" className="space-y-4 pt-4">
          <Card className="border-border bg-card">
            <CardHeader className="py-4">
              <CardTitle className="text-sm font-bold">컬럼 정제 정의 시트</CardTitle>
              <CardDescription className="text-xs">
                각 설문 문항의 정제 규칙과 원본 컬럼(1-based 인덱스) 번호를 매핑합니다.
                타입 선택은 표시용이며, 내보내기(export) 시 실제 데이터로 자동 감지됩니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/50 text-[11px]">
                  <TableRow>
                    <TableHead className="w-[52px] font-semibold text-center">순서</TableHead>
                    <TableHead className="w-[50px] font-semibold text-center">제외</TableHead>
                    <TableHead className="w-[185px] font-semibold text-center">
                      출력 컬럼명 (output_col)
                    </TableHead>
                    <TableHead className="w-[110px] font-semibold text-center">
                      타입 (표시용)
                    </TableHead>
                    <TableHead className="w-[90px] font-semibold text-center">
                      원본 열번호
                    </TableHead>
                    <TableHead className="w-[215px] font-semibold text-center">
                      정제 규칙 (transform)
                    </TableHead>
                    <TableHead className="w-[155px] font-semibold text-center">
                      추가 인수
                    </TableHead>
                    <TableHead className="w-[75px] font-semibold text-center">
                      필터
                    </TableHead>
                    <TableHead className="w-[46px]" />
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  {(localConfig.columns as ColumnDef[]).map((col, index) => {
                    const transform = col.transform ?? "";
                    const isExcluded = transform === "exclude";

                    const totalCols = (localConfig.columns as ColumnDef[]).length;
                    return (
                      <TableRow
                        key={index}
                        className={`hover:bg-muted/10 ${isExcluded ? "bg-muted/40 opacity-50" : ""}`}
                      >
                        {/* 순서 이동 */}
                        <TableCell className="p-1 text-center">
                          <div className="flex flex-col gap-0.5 items-center">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => moveColumn(index, -1)}
                              disabled={index === 0}
                              className="h-5 w-5 text-muted-foreground hover:text-foreground disabled:opacity-20"
                              title="위로"
                            >
                              ▲
                            </Button>
                            <span className="text-[10px] text-muted-foreground font-mono leading-none">{index + 1}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => moveColumn(index, 1)}
                              disabled={index === totalCols - 1}
                              className="h-5 w-5 text-muted-foreground hover:text-foreground disabled:opacity-20"
                              title="아래로"
                            >
                              ▼
                            </Button>
                          </div>
                        </TableCell>

                        {/* 제외 체크박스 */}
                        <TableCell className="p-1 text-center">
                          <Checkbox
                            checked={isExcluded}
                            onCheckedChange={() => handleExcludeToggle(index, isExcluded)}
                            title="출력 결과에서 제외"
                            className="scale-90"
                          />
                        </TableCell>

                        {/* 출력 컬럼명 */}
                        <TableCell className="p-2">
                          <Input
                            value={col.output_col}
                            title="출력 컬럼명 (output_col)"
                            onChange={(e) =>
                              handleColumnChange(index, { output_col: e.target.value })
                            }
                            className="h-8 text-xs font-semibold"
                          />
                          {col.source_col_name && (
                            <span
                              className="text-[10px] text-muted-foreground pl-1 truncate block max-w-[170px] mt-0.5"
                              title={col.source_col_name}
                            >
                              ← {col.source_col_name}
                            </span>
                          )}
                        </TableCell>

                        {/* 타입 (표시용) */}
                        <TableCell className="p-2">
                          <select
                            value={col.type ?? ""}
                            title="데이터 타입 (표시 힌트, 내보내기 시 자동 감지)"
                            onChange={(e) =>
                              handleColumnChange(index, { type: e.target.value })
                            }
                            className="w-full p-1.5 rounded border border-input bg-background text-xs cursor-pointer focus:ring-1 focus:ring-primary"
                          >
                            <option value="">자동 감지</option>
                            {COL_TYPES.map((t) => (
                              <option key={t.value} value={t.value}>
                                {t.label}
                              </option>
                            ))}
                          </select>
                        </TableCell>

                        {/* 원본 열번호 */}
                        <TableCell className="p-2">
                          <select
                            value={col.source_col ?? ""}
                            title="원본 엑셀 열번호 (1-based)"
                            disabled={isExcluded}
                            onChange={(e) =>
                              handleColumnChange(index, {
                                source_col: e.target.value
                                  ? Number(e.target.value)
                                  : undefined,
                              })
                            }
                            className="w-full p-1.5 rounded border border-input bg-background text-xs cursor-pointer text-center font-mono focus:ring-1 focus:ring-primary disabled:opacity-40"
                          >
                            <option value="">-</option>
                            {sourceColOptions.map((n) => (
                              <option key={n} value={n}>
                                {n}열
                              </option>
                            ))}
                          </select>
                        </TableCell>

                        {/* 정제 규칙 */}
                        <TableCell className="p-2">
                          <select
                            value={transform}
                            title="정제 규칙 선택 (transform)"
                            onChange={(e) => handleTransformChange(index, e.target.value)}
                            className={`w-full p-1.5 rounded border border-input bg-background text-xs cursor-pointer font-medium focus:ring-1 focus:ring-primary ${
                              isExcluded ? "text-destructive" : "text-primary"
                            }`}
                          >
                            {TRANSFORM_RULES.map((r) => (
                              <option key={r.value} value={r.value}>
                                {r.label}
                              </option>
                            ))}
                          </select>
                        </TableCell>

                        {/* 추가 인수 */}
                        <TableCell className="p-2">
                          {NEEDS_FLAG_KEYWORD.has(transform) && (
                            <Input
                              placeholder="flag_keyword (예: GPU)"
                              value={col.flag_keyword ?? ""}
                              title="to_binary: 이 키워드가 포함되면 1, 아니면 0"
                              onChange={(e) =>
                                handleColumnChange(index, { flag_keyword: e.target.value })
                              }
                              className="h-8 text-[10px]"
                            />
                          )}
                          {NEEDS_SOURCE_COLS.has(transform) && (
                            <Input
                              placeholder="source_cols (예: 12, 13, 14)"
                              value={(col.source_cols || []).join(", ")}
                              title="group_sum: 합산할 엑셀 원본 열 번호들을 쉼표로 나열하세요"
                              onChange={(e) => {
                                const val = e.target.value;
                                const nums = val.split(",")
                                  .map((v) => parseInt(v.trim(), 10))
                                  .filter((n) => !isNaN(n));
                                handleColumnChange(index, { source_cols: nums });
                              }}
                              className="h-8 text-[10px]"
                            />
                          )}
                          {NEEDS_BACKUP_COL.has(transform) && (
                            <select
                              value={col.backup_col ?? ""}
                              title="jang: 주 컬럼이 빈 경우 사용할 보조 열번호"
                              onChange={(e) =>
                                handleColumnChange(index, {
                                  backup_col: e.target.value
                                    ? Number(e.target.value)
                                    : undefined,
                                })
                              }
                              className="w-full p-1.5 rounded border border-input bg-background text-[10px] cursor-pointer font-semibold"
                            >
                              <option value="">보조열 없음</option>
                              {sourceColOptions.map((n) => (
                                <option key={n} value={n}>
                                  {n}열
                                </option>
                              ))}
                            </select>
                          )}
                          {DERIVES_COLUMNS.has(transform) && (
                            <span className="text-[10px] text-amber-600 text-center block py-1.5 font-medium">
                              ⚡ 파생열 자동 생성
                            </span>
                          )}
                          {!NEEDS_FLAG_KEYWORD.has(transform) &&
                            !NEEDS_SOURCE_COLS.has(transform) &&
                            !NEEDS_BACKUP_COL.has(transform) &&
                            !DERIVES_COLUMNS.has(transform) && (
                              <span className="text-[10px] text-muted-foreground text-center block py-1.5">
                                —
                              </span>
                            )}
                        </TableCell>

                        {/* 필터 여부 */}
                        <TableCell className="p-2 text-center">
                          <div className="flex justify-center items-center">
                            <Checkbox
                              checked={col.include_in_slicer ?? false}
                              disabled={isExcluded}
                              onCheckedChange={(val) =>
                                handleColumnChange(index, { include_in_slicer: !!val })
                              }
                              title="대시보드 슬라이서 필터로 등록"
                            />
                          </div>
                        </TableCell>

                        {/* 삭제 */}
                        <TableCell className="p-2 text-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteColumn(index)}
                            className="h-7 w-7 text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            size="sm"
            onClick={addColumn}
            className="text-xs font-semibold gap-1"
          >
            <Plus className="h-3.5 w-3.5" />
            컬럼 정의 행 추가
          </Button>
        </TabsContent>

        {/* ════════════════════ 대시보드 레이아웃 탭 ════════════════════ */}
        <TabsContent value="dashboard" className="space-y-6 pt-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* KPI 카드 빌더 */}
            <Card className="border-border bg-card">
              <CardHeader className="py-4">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4 text-primary" />
                  KPI 핵심 스탯 구성
                </CardTitle>
                <CardDescription className="text-xs">
                  대시보드 상단에 표시할 핵심 메트릭 카드를 드롭다운으로 설정합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {localDashboard.kpi.map((k: KpiItem, i: number) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="my-3 border-t border-dashed border-muted-foreground/30" />}
                    <div className="space-y-2.5 p-3 bg-muted/20 border rounded-md text-xs shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-sm">
                          핵심 스탯 #{i + 1}
                        </span>
                      </div>
                      
                      {/* 1층: 연산 유형 & 대상 컬럼 */}
                      <div className="flex items-center gap-2">
                        <select
                          value={k.type}
                          title="연산 유형"
                          onChange={(e) => updateKpi(i, { type: e.target.value })}
                          className="h-8 px-2 rounded border border-input bg-background text-xs font-semibold text-primary flex-1 shadow-sm focus:ring-1 focus:ring-primary"
                        >
                          <option value="total_rows">전체 데이터 건수</option>
                          <option value="count_value">특정값 카운트</option>
                          <option value="sum">수치 데이터 합계</option>
                        </select>

                        {k.type !== "total_rows" && (
                          <select
                            value={k.col ?? ""}
                            title="KPI 연산 대상 컬럼"
                            onChange={(e) => updateKpi(i, { col: e.target.value })}
                            className="h-8 px-2 rounded border border-input bg-background text-xs flex-1 max-w-[130px] shadow-sm focus:ring-1 focus:ring-primary"
                          >
                            <option value="">-- 대상 --</option>
                            {activeColumns.map((c) => (
                              <option key={c.output_col} value={c.output_col}>
                                {c.output_col}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>

                      {/* 2층: KPI 표시 이름 & 매칭값 입력 */}
                      <div className="flex items-center gap-2">
                        <Input
                          placeholder="표시 이름 (예: H100 총수)"
                          value={k.label ?? ""}
                          title="KPI 카드 라벨"
                          onChange={(e) => updateKpi(i, { label: e.target.value })}
                          className="h-8 text-xs flex-1 font-semibold"
                        />

                        {k.type === "count_value" && (
                          <Input
                            placeholder="값 (예: *H100*, <> 서울)"
                            value={k.value ?? ""}
                            title="카운팅 대상 매칭 값"
                            onChange={(e) => updateKpi(i, { value: e.target.value })}
                            className="h-8 text-xs w-[140px]"
                          />
                        )}

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteKpi(i)}
                          className="h-8 w-8 text-destructive hover:bg-destructive/10 border"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={addKpi}
                  className="w-full text-xs font-semibold gap-1 mt-2"
                >
                  <Plus className="h-3.5 w-3.5" />
                  KPI 요약 카드 추가
                </Button>
              </CardContent>
            </Card>

            {/* 차트 시각화 빌더 */}
            <Card className="border-border bg-card">
              <CardHeader className="py-4">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  대시보드 차트 시각화 빌더
                </CardTitle>
                <CardDescription className="text-xs">
                  각 차트의 대상 컬럼과 스타일(Donut, Bar 등)을 선택합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {localDashboard.charts.map((c: ChartItem, i: number) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="my-3 border-t border-dashed border-muted-foreground/30" />}
                    <div className="space-y-2.5 p-3 bg-muted/20 border rounded-md text-xs shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-sm">
                          시각화 차트 #{i + 1}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {c.type === "multibar" ? (
                          <div className="h-8 px-2 flex-1 flex items-center bg-muted/20 border border-input rounded text-muted-foreground font-semibold text-[11px]">
                            ※ 아래 다중 분석 열 리스트에서 설정하세요
                          </div>
                        ) : (
                          <select
                            value={"col" in c ? (c.col as string) : ""}
                            title="차트 대상 컬럼"
                            onChange={(e) => updateChart(i, { col: e.target.value })}
                            className="h-8 px-2 rounded border border-input bg-background text-xs flex-1 shadow-sm focus:ring-1 focus:ring-primary font-semibold"
                          >
                            <option value="">-- 대상 컬럼 --</option>
                            {allAvailableChartCols.map((cname) => (
                              <option key={cname} value={cname}>
                                {cname}
                              </option>
                            ))}
                          </select>
                        )}

                      <select
                        value={c.type}
                        title="차트 렌더링 스타일"
                        onChange={(e) => {
                          const newType = e.target.value;
                          if (newType === "multibar") {
                            updateChart(i, { type: newType, cols: [], col: undefined });
                          } else {
                            updateChart(i, { type: newType, cols: undefined, col: allAvailableChartCols[0] || "" });
                          }
                        }}
                        className="h-8 px-2 rounded border border-input bg-background text-xs text-primary font-semibold shadow-sm focus:ring-1 focus:ring-primary"
                      >
                        {CHART_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {c.type === "multibar" && (
                      <div className="flex-1 border border-dashed rounded-md p-2 bg-muted/10 min-h-[36px] flex flex-wrap items-center gap-1.5 text-xs">
                        <span className="font-semibold text-muted-foreground mr-1 text-[11px]">다중 분석 열:</span>
                        {((c as any).cols || []).map((colObj: any, colIdx: number) => (
                          <Badge key={colIdx} variant="secondary" className="text-[10px] font-semibold flex items-center gap-1">
                            {colObj.label || colObj.col}
                            <button
                              type="button"
                              onClick={() => {
                                const nextCols = [...((c as any).cols || [])].filter((_, ci) => ci !== colIdx);
                                updateChart(i, { cols: nextCols });
                              }}
                              className="hover:text-destructive text-muted-foreground/60 font-bold ml-0.5"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                        <select
                          value=""
                          title="다중 집계 대상 열 추가"
                          onChange={(e) => {
                            if (!e.target.value) return;
                            const selected = e.target.value;
                            const currentCols = (c as any).cols || [];
                            if (currentCols.some((co: any) => co.col === selected)) return;
                            updateChart(i, {
                              cols: [...currentCols, { col: selected, label: selected }]
                            });
                          }}
                          className="h-6 px-1 rounded border bg-background text-[10px] shadow-sm font-semibold max-w-[130px] outline-none cursor-pointer"
                        >
                          <option value="">+ 컬럼 추가...</option>
                          {allAvailableChartCols.map((cname) => (
                            <option key={cname} value={cname}>
                              {cname}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* 차트 제목 입력 필드 - 단독 배치로 찌그러짐 차단 */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-muted-foreground">
                        차트 카드 제목
                      </label>
                      <Input
                        placeholder="차트 카드 제목 (예: 기관유형 분포)"
                        value={c.title ?? ""}
                        title="차트 카드 제목"
                        onChange={(e) => updateChart(i, { title: e.target.value })}
                        className="h-8 text-xs font-semibold w-full bg-background"
                      />
                    </div>

                    {/* 세부 집계 및 정렬 속성들 */}
                    <div className="flex items-center gap-2 pt-1">
                      {c.type !== "multibar" && (
                        <select
                          value={(c as any).value_col ?? ""}
                          title="합산할 값 열 (선택)"
                          onChange={(e) => updateChart(i, { value_col: e.target.value || undefined })}
                          className="h-8 px-2 rounded border border-input bg-background text-xs max-w-[170px] flex-1 shadow-sm focus:ring-1 focus:ring-primary font-semibold"
                        >
                          <option value="">-- 단순 건수(Count) --</option>
                          {allAvailableChartCols.map((cname) => (
                            <option key={cname} value={cname}>
                              값 합산: {cname}
                            </option>
                          ))}
                        </select>
                      )}
                      <select
                        value={c.sort_by ?? "value_desc"}
                        title="차트 데이터 정렬 순서"
                        onChange={(e) => updateChart(i, { sort_by: e.target.value })}
                        className="h-8 px-2 rounded border border-input bg-background text-xs max-w-[140px] flex-1 shadow-sm focus:ring-1 focus:ring-primary font-semibold"
                      >
                        <option value="value_desc">정렬: 값 내림차순</option>
                        <option value="value_asc">정렬: 값 오름차순</option>
                        <option value="name_asc">정렬: 이름 가나다</option>
                        <option value="none">정렬: 기본 순서</option>
                      </select>
                      <select
                        value={c.max_items ?? 20}
                        title="표시할 항목 갯수 제한"
                        onChange={(e) => updateChart(i, { max_items: Number(e.target.value) })}
                        className="h-8 px-2 rounded border border-input bg-background text-xs max-w-[130px] flex-1 shadow-sm focus:ring-1 focus:ring-primary font-semibold"
                      >
                        <option value={20}>상위 20개 표시</option>
                        <option value={15}>상위 15개 표시</option>
                        <option value={10}>상위 10개 표시</option>
                        <option value={5}>상위 5개 표시</option>
                        <option value={0}>전체 표시</option>
                      </select>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteChart(i)}
                        className="h-8 w-8 text-destructive hover:bg-destructive/10 border ml-auto"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </React.Fragment>
              ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={addChart}
                  className="w-full text-xs font-semibold gap-1 mt-2"
                >
                  <Plus className="h-3.5 w-3.5" />
                  시각화 차트 추가
                </Button>
              </CardContent>
            </Card>

            {/* 조회 필터 및 목록 표 컬럼 설정 (신규 카드) */}
            <Card className="border-border bg-card">
              <CardHeader className="py-4">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" />
                  조회 필터 및 목록 표 설정
                </CardTitle>
                <CardDescription className="text-xs">
                  상단 검색 필터 조건과 두 번째 탭 목록 표에 노출할 열을 지정합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 1. 상단 필터 설정 */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground block">
                    🔍 대시보드 상단 조회 필터 열
                  </label>
                  <div className="border rounded-md p-2 bg-muted/10 max-h-[140px] overflow-y-auto space-y-1.5">
                    {activeColumns.map((col) => {
                      const isFiltered = (localDashboard.list?.filter_cols || []).includes(col.output_col);
                      return (
                        <label key={col.output_col} className="flex items-center gap-2 text-[11px] cursor-pointer hover:bg-muted/30 p-1 rounded">
                          <input
                            type="checkbox"
                            checked={isFiltered}
                            onChange={(e) => {
                              const current = localDashboard.list?.filter_cols || [];
                              const next = e.target.checked
                                ? [...current, col.output_col]
                                : current.filter((c: string) => c !== col.output_col);
                              updateDashboardList({ filter_cols: next });
                            }}
                            className="rounded border-input text-primary focus:ring-primary h-3.5 w-3.5"
                          />
                          <span className="truncate">{col.output_col}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* 2. 목록 표 노출 설정 */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground block">
                    📋 목록 표 노출 열 (전체 검색 대상)
                  </label>
                  <div className="border rounded-md p-2 bg-muted/10 max-h-[140px] overflow-y-auto space-y-1.5">
                    {activeColumns.map((col) => {
                      const isVisible = (localDashboard.list?.visible_cols || []).includes(col.output_col);
                      return (
                        <label key={col.output_col} className="flex items-center gap-2 text-[11px] cursor-pointer hover:bg-muted/30 p-1 rounded">
                          <input
                            type="checkbox"
                            checked={isVisible}
                            onChange={(e) => {
                              const current = localDashboard.list?.visible_cols || [];
                              const next = e.target.checked
                                ? [...current, col.output_col]
                                : current.filter((c: string) => c !== col.output_col);
                              updateDashboardList({ visible_cols: next });
                            }}
                            className="rounded border-input text-primary focus:ring-primary h-3.5 w-3.5"
                          />
                          <span className="truncate">{col.output_col}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 엑셀 출력 옵션 카드 */}
            <Card className="border-border bg-card">
              <CardHeader className="py-4">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Settings className="h-4 w-4 text-primary" />
                  결과 엑셀 출력 옵션
                </CardTitle>
                <CardDescription className="text-xs">
                  정제 가동 시 결과 엑셀 파일(.xlsx)에 포함할 개체들을 제어합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/30 p-1.5 rounded">
                    <input
                      type="checkbox"
                      checked={localConfig?.excel_options?.include_slicers ?? true}
                      onChange={(e) => {
                        if (!localConfig) return;
                        const current = localConfig.excel_options || { include_slicers: true, include_charts: true };
                        setLocalConfig({
                          ...localConfig,
                          excel_options: { ...current, include_slicers: e.target.checked }
                        });
                      }}
                      className="rounded border-input text-primary focus:ring-primary h-4 w-4"
                    />
                    <span>결과 엑셀에 필터 슬라이서 포함 (Slicers)</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/30 p-1.5 rounded">
                    <input
                      type="checkbox"
                      checked={localConfig?.excel_options?.include_charts ?? true}
                      onChange={(e) => {
                        if (!localConfig) return;
                        const current = localConfig.excel_options || { include_slicers: true, include_charts: true };
                        setLocalConfig({
                          ...localConfig,
                          excel_options: { ...current, include_charts: e.target.checked }
                        });
                      }}
                      className="rounded border-input text-primary focus:ring-primary h-4 w-4"
                    />
                    <span>요약 시트에 시각화 차트 이미지 삽입 (Charts)</span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* ── 하단 액션 버튼 바 ── */}
      <div className="flex items-center justify-between border-t pt-5 mt-4">
        {activeSubTab === "columns" ? (
          <>
            <Button
              variant="outline"
              size="default"
              onClick={onBack}
              className="font-semibold text-xs gap-1.5"
            >
              ← 이전 단계 (프로젝트 목록)
            </Button>
            
            <Button
              onClick={async () => {
                try {
                  await handleSave();
                  setActiveSubTab("dashboard");
                } catch (e) {
                  // prevent tab switch on save error
                }
              }}
              disabled={loading}
              size="default"
              className="font-bold text-xs gap-1.5 px-6 shadow-sm"
            >
              <Save className="h-4 w-4" />
              {loading ? "저장 중..." : "저장 후 대시보드 디자인 단계로 →"}
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              size="default"
              onClick={() => setActiveSubTab("columns")}
              className="font-semibold text-xs gap-1.5"
            >
              ← 이전 단계 (컬럼 정제 설정)
            </Button>
            
            <Button
              onClick={handleSaveAndNext}
              disabled={loading}
              size="default"
              className="font-bold text-xs gap-1.5 px-6 shadow-sm"
            >
              <Save className="h-4 w-4" />
              {loading ? "저장 중..." : "디자인 저장 후 정제 테스트 및 실행 단계로 →"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
