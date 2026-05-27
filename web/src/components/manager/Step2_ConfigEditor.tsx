import React, { useState } from "react";
import {
  Save,
  Settings,
  BarChart3,
  ListCollapse,
  Plus,
  Trash2,
  ArrowUpDown,
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
    config: any;
    dashboard: any;
  } | null;
  onSaveConfig: (config: any, dashboard: any) => Promise<any>;
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
  { value: "to_pct",         label: "to_pct — 퍼센트 문자열 → float" },
  // ── 주소 ────────────────────────────────────────────────────────────────────
  { value: "addr_split",     label: "addr_split — 주소 → 시도/시군구/상세 파생열 4개" },
  // ── 집계 ────────────────────────────────────────────────────────────────────
  { value: "group_sum",      label: "group_sum — 다중 컬럼 합산 (source_cols 필요)" },
];

/** flag_keyword 인수가 필요한 transform 목록 */
const NEEDS_FLAG_KEYWORD = new Set(["to_binary", "o_binary"]);

/** backup_col 인수가 필요한 transform 목록 */
const NEEDS_BACKUP_COL = new Set(["jang"]);

/** 파생열을 자동 생성하는 transform 목록 */
const DERIVES_COLUMNS = new Set(["norm_date_parts", "addr_split"]);

const COL_TYPES = [
  { value: "category", label: "카테고리 (category)" },
  { value: "numeric",  label: "수치 데이터 (numeric)" },
  { value: "text",     label: "자유 텍스트 (text)" },
  { value: "datetime", label: "날짜/시간 (datetime)" },
];

const CHART_TYPES = ["donut", "bar", "hbar", "histogram", "multibar"] as const;

const MAX_SOURCE_COLS = 50;
const sourceColOptions = Array.from({ length: MAX_SOURCE_COLS }, (_, i) => i + 1);

export const Step2_ConfigEditor: React.FC<Step2Props> = ({
  projectName,
  config,
  onSaveConfig,
  loading,
}) => {
  const [localConfig, setLocalConfig] = useState<any>(config?.config ?? null);
  const [localDashboard, setLocalDashboard] = useState<any>(
    config?.dashboard ?? { kpi: [], charts: [], list: { visible_cols: [], filter_cols: [] } },
  );
  const [activeSubTab, setActiveSubTab] = useState<"columns" | "dashboard">("columns");

  // config prop 변경 시 로컬 상태 동기화
  React.useEffect(() => {
    if (config) {
      setLocalConfig(config.config);
      setLocalDashboard(
        config.dashboard ?? { kpi: [], charts: [], list: { visible_cols: [], filter_cols: [] } },
      );
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

  const handleSave = async () => {
    const updatedDashboard = {
      ...localDashboard,
      list: localDashboard.list ?? { visible_cols: [], filter_cols: [] },
    };
    await onSaveConfig(localConfig, updatedDashboard);
  };

  /** exclude 가 아닌 컬럼 목록 (KPI·차트 대상 컬럼 선택용) */
  const activeColumns: ColumnDef[] = (localConfig.columns as ColumnDef[]).filter(
    (c) => c.transform !== "exclude",
  );

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
          {loading ? "저장 중..." : "설정 영구 저장"}
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

                    return (
                      <TableRow
                        key={index}
                        className={`hover:bg-muted/10 ${isExcluded ? "opacity-40" : ""}`}
                      >
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
                              className="w-full p-1.5 rounded border border-input bg-background text-[10px] cursor-pointer"
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
          <div className="grid md:grid-cols-2 gap-6">
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
                {localDashboard.kpi.map((k: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 bg-muted/20 border rounded-md text-xs"
                  >
                    <select
                      value={k.type}
                      title="연산 유형"
                      onChange={(e) => updateKpi(i, { type: e.target.value })}
                      className="p-1 rounded border border-input bg-background text-[11px] font-medium"
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
                        className="p-1 rounded border border-input bg-background text-[11px]"
                      >
                        <option value="">-- 대상 컬럼 --</option>
                        {activeColumns.map((c) => (
                          <option key={c.output_col} value={c.output_col}>
                            {c.output_col}
                          </option>
                        ))}
                      </select>
                    )}

                    {k.type === "count_value" && (
                      <Input
                        placeholder="매칭 값"
                        value={k.value ?? ""}
                        title="카운팅 대상 매칭 값"
                        onChange={(e) => updateKpi(i, { value: e.target.value })}
                        className="h-7 text-[10px] w-[60px]"
                      />
                    )}

                    <Input
                      placeholder="표시 라벨"
                      value={k.label ?? ""}
                      title="KPI 카드 라벨"
                      onChange={(e) => updateKpi(i, { label: e.target.value })}
                      className="h-7 text-[10px] flex-1 font-semibold"
                    />

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteKpi(i)}
                      className="h-7 w-7 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
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
                {localDashboard.charts.map((c: any, i: number) => (
                  <div
                    key={i}
                    className="space-y-2 p-2 bg-muted/20 border rounded-md text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <select
                        value={c.col ?? ""}
                        title="차트 대상 컬럼"
                        onChange={(e) => updateChart(i, { col: e.target.value })}
                        className="p-1 rounded border border-input bg-background text-[11px] flex-1"
                      >
                        <option value="">-- 대상 컬럼 --</option>
                        {activeColumns.map((col) => (
                          <option key={col.output_col} value={col.output_col}>
                            {col.output_col}
                          </option>
                        ))}
                      </select>

                      <select
                        value={c.type}
                        title="차트 렌더링 스타일"
                        onChange={(e) => updateChart(i, { type: e.target.value })}
                        className="p-1 rounded border border-input bg-background text-[11px] text-primary font-semibold"
                      >
                        {CHART_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="차트 카드 제목"
                        value={c.title ?? ""}
                        title="차트 카드 제목"
                        onChange={(e) => updateChart(i, { title: e.target.value })}
                        className="h-7 text-[10px] flex-1 font-semibold"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteChart(i)}
                        className="h-7 w-7 text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
