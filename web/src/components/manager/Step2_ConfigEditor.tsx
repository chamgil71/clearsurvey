import React, { useState } from "react";
import { Save, HelpCircle, Check, Settings, BarChart3, ListCollapse, Plus, Trash2, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

interface ColumnConfig {
  name: string;
  type: string;
  source_col: number | string;
  target_name?: string;
  transforms?: Array<{ rule: string; args?: Record<string, any> }>;
  include_in_slicer?: boolean;
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

const TRANSFORM_RULES = [
  { value: "", label: "정제 없음 (통과)" },
  { value: "exclude", label: "exclude (결과 제외)" },
  { value: "norm_date_parts", label: "norm_date_parts (날짜 규격화)" },
  { value: "address_split", label: "address_split (주소 분할)" },
  { value: "val_range", label: "val_range (수치 범위 검증)" },
  { value: "val_in", label: "val_in (특정값 매칭 검증)" },
  { value: "val_regex", label: "val_regex (정규식 검증)" },
  { value: "to_string", label: "to_string (문자 변환)" },
  { value: "to_numeric", label: "to_numeric (숫자 변환)" },
  { value: "to_category", label: "to_category (카테고리 변환)" },
  { value: "mask_email", label: "mask_email (이메일 마스킹)" },
  { value: "mask_phone", label: "mask_phone (전화번호 마스킹)" },
  { value: "mask_name", label: "mask_name (이름 마스킹)" },
];

const COL_TYPES = [
  { value: "category", label: "카테고리 (category)" },
  { value: "numeric", label: "수치 데이터 (numeric)" },
  { value: "text", label: "자유 텍스트 (text)" },
  { value: "datetime", label: "날짜/시간 (datetime)" },
];

const CHART_TYPES = ["donut", "bar", "hbar", "histogram", "multibar"] as const;

export const Step2_ConfigEditor: React.FC<Step2Props> = ({
  projectName,
  config,
  onSaveConfig,
  loading,
}) => {
  const [localConfig, setLocalConfig] = useState<any>(config?.config || null);
  const [localDashboard, setLocalDashboard] = useState<any>(config?.dashboard || { kpi: [], charts: [], list: { visible_cols: [], filter_cols: [] } });
  const [activeSubTab, setActiveSubTab] = useState<"columns" | "dashboard">("columns");

  // Sync state if prop changes
  React.useEffect(() => {
    if (config) {
      setLocalConfig(config.config);
      setLocalDashboard(config.dashboard || { kpi: [], charts: [], list: { visible_cols: [], filter_cols: [] } });
    }
  }, [config]);

  if (!localConfig) {
    return (
      <div className="p-8 text-center text-muted-foreground bg-muted/20 border rounded-lg">
        ⏳ 1단계에서 프로젝트를 로드하거나 엑셀을 업로드하면 상세 편집기가 활성화됩니다.
      </div>
    );
  }

  // Get index dropdown options (1 to 50 columns)
  const maxSourceCols = 50;
  const sourceColOptions = Array.from({ length: maxSourceCols }, (_, i) => i + 1);

  // Column Handlers
  const handleColumnChange = (index: number, patch: Partial<ColumnConfig>) => {
    setLocalConfig((prev: any) => {
      const columns = [...prev.columns];
      columns[index] = { ...columns[index], ...patch };
      return { ...prev, columns };
    });
  };

  const handleTransformChange = (index: number, rule: string) => {
    setLocalConfig((prev: any) => {
      const columns = [...prev.columns];
      if (rule) {
        columns[index].transforms = [{ rule, args: {} }];
      } else {
        delete columns[index].transforms;
      }
      return { ...prev, columns };
    });
  };

  const handleTransformArgChange = (index: number, key: string, value: string) => {
    setLocalConfig((prev: any) => {
      const columns = [...prev.columns];
      const trans = columns[index].transforms?.[0];
      if (trans) {
        trans.args = { ...trans.args, [key]: value };
      }
      return { ...prev, columns };
    });
  };

  const addColumn = () => {
    setLocalConfig((prev: any) => ({
      ...prev,
      columns: [
        ...prev.columns,
        { name: "new_column", type: "category", source_col: prev.columns.length + 1, include_in_slicer: false },
      ],
    }));
  };

  const deleteColumn = (index: number) => {
    setLocalConfig((prev: any) => ({
      ...prev,
      columns: prev.columns.filter((_: any, i: number) => i !== index),
    }));
  };

  // KPI Handlers
  const updateKpi = (i: number, patch: Partial<any>) => {
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
      kpi: prev.kpi.filter((_: any, j: number) => j !== i),
    }));
  };

  // Chart Handlers
  const updateChart = (i: number, patch: Partial<any>) => {
    setLocalDashboard((prev: any) => {
      const charts = [...prev.charts];
      charts[i] = { ...charts[i], ...patch };
      return { ...prev, charts };
    });
  };

  const addChart = () => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      charts: [...prev.charts, { col: localConfig.columns[0]?.name || "", type: "donut", title: "새 차트" }],
    }));
  };

  const deleteChart = (i: number) => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      charts: prev.charts.filter((_: any, j: number) => j !== i),
    }));
  };

  const handleSave = async () => {
    // Sync list.visible_cols & filter_cols based on selections if needed
    const updatedDashboard = { ...localDashboard };
    // Always keep dashboard list structure
    if (!updatedDashboard.list) {
      updatedDashboard.list = { visible_cols: [], filter_cols: [] };
    }
    await onSaveConfig(localConfig, updatedDashboard);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            프로젝트 설정 및 대시보드 설계자
          </h2>
          <p className="text-xs text-muted-foreground">
            프로젝트: <strong className="text-primary">{projectName}</strong> | 엑셀 원본 매핑과 대시보드 레이아웃을 코딩 없이 제어하세요.
          </p>
        </div>
        <Button onClick={handleSave} disabled={loading} size="sm" className="font-semibold gap-1.5">
          <Save className="h-4 w-4" />
          {loading ? "저장 중..." : "설정 영구 저장"}
        </Button>
      </div>

      <Tabs
        value={activeSubTab}
        onValueChange={(v) => setActiveSubTab(v as any)}
        className="w-full"
      >
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger value="columns" className="text-xs font-semibold gap-1.5">
            <ListCollapse className="h-3.5 w-3.5" />
            1. 정제 및 10열 매핑 설정
          </TabsTrigger>
          <TabsTrigger value="dashboard" className="text-xs font-semibold gap-1.5">
            <BarChart3 className="h-3.5 w-3.5" />
            2. 대시보드 비주얼 레이아웃
          </TabsTrigger>
        </TabsList>

        {/* 10열 매핑 탭 */}
        <TabsContent value="columns" className="space-y-4 pt-4">
          <Card className="border-border bg-card">
            <CardHeader className="py-4">
              <CardTitle className="text-sm font-bold">10열 컬럼 정제 정의 시트</CardTitle>
              <CardDescription className="text-xs">
                각 설문 문항의 타입 및 정제 규칙, 원본 컬럼(1-based 인덱스) 번호를 드롭다운을 통해 매핑합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/50 text-[11px]">
                  <TableRow>
                    <TableHead className="w-[180px] font-semibold text-center">설문 문항명 (name)</TableHead>
                    <TableHead className="w-[140px] font-semibold text-center">데이터 타입 (type)</TableHead>
                    <TableHead className="w-[100px] font-semibold text-center">원본 엑셀 열번호</TableHead>
                    <TableHead className="w-[140px] font-semibold text-center">정제 결과 열이름</TableHead>
                    <TableHead className="w-[180px] font-semibold text-center">정제 규칙 (transform)</TableHead>
                    <TableHead className="w-[150px] font-semibold text-center">정합성 인수 (args)</TableHead>
                    <TableHead className="w-[80px] font-semibold text-center">필터여부</TableHead>
                    <TableHead className="w-[50px] font-semibold text-center"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  {localConfig.columns.map((col: any, index: number) => {
                    const mainRule = col.transforms?.[0]?.rule || "";
                    const mainArgs = col.transforms?.[0]?.args || {};
                    return (
                      <TableRow key={index} className="hover:bg-muted/10">
                        {/* 문항명 */}
                        <TableCell className="p-2">
                          <Input
                            value={col.name}
                            title="설문 문항명"
                            onChange={(e) => handleColumnChange(index, { name: e.target.value })}
                            className="h-8 text-xs font-semibold"
                          />
                        </TableCell>
                        {/* 데이터 타입 */}
                        <TableCell className="p-2">
                          <select
                            value={col.type}
                            title="데이터 타입 선택"
                            onChange={(e) => handleColumnChange(index, { type: e.target.value })}
                            className="w-full p-1.5 rounded border border-input bg-background text-xs cursor-pointer focus:ring-1 focus:ring-primary"
                          >
                            {COL_TYPES.map((t) => (
                              <option key={t.value} value={t.value}>
                                {t.label}
                              </option>
                            ))}
                          </select>
                        </TableCell>
                        {/* 원본 엑셀 열 번호 (드롭다운) */}
                        <TableCell className="p-2 text-center">
                          <select
                            value={col.source_col}
                            title="원본 엑셀 열번호"
                            onChange={(e) =>
                              handleColumnChange(index, {
                                source_col: Number.isNaN(Number(e.target.value))
                                  ? e.target.value
                                  : Number(e.target.value),
                              })
                            }
                            className="w-full p-1.5 rounded border border-input bg-background text-xs cursor-pointer text-center font-mono focus:ring-1 focus:ring-primary"
                          >
                            {sourceColOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}열
                              </option>
                            ))}
                          </select>
                        </TableCell>
                        {/* 정제 결과 열이름 */}
                        <TableCell className="p-2">
                          <Input
                            value={col.target_name || ""}
                            title="결과 열이름"
                            placeholder="공백 시 문항명 사용"
                            onChange={(e) => handleColumnChange(index, { target_name: e.target.value })}
                            className="h-8 text-xs font-mono"
                          />
                        </TableCell>
                        {/* 정제 규칙 드롭다운 */}
                        <TableCell className="p-2">
                          <select
                            value={mainRule}
                            title="정제 규칙 선택"
                            onChange={(e) => handleTransformChange(index, e.target.value)}
                            className="w-full p-1.5 rounded border border-input bg-background text-xs cursor-pointer text-primary font-medium focus:ring-1 focus:ring-primary"
                          >
                            {TRANSFORM_RULES.map((r) => (
                              <option key={r.value} value={r.value}>
                                {r.label}
                              </option>
                            ))}
                          </select>
                        </TableCell>
                        {/* 정합성 인수 */}
                        <TableCell className="p-2">
                          {mainRule === "val_range" && (
                            <div className="flex items-center gap-1">
                              <Input
                                placeholder="min"
                                value={mainArgs.min ?? ""}
                                title="최소 수치값"
                                onChange={(e) => handleTransformArgChange(index, "min", e.target.value)}
                                className="h-8 w-1/2 text-[10px]"
                              />
                              <Input
                                placeholder="max"
                                value={mainArgs.max ?? ""}
                                title="최대 수치값"
                                onChange={(e) => handleTransformArgChange(index, "max", e.target.value)}
                                className="h-8 w-1/2 text-[10px]"
                              />
                            </div>
                          )}
                          {mainRule === "val_in" && (
                            <Input
                              placeholder="예: M,F (쉼표 구분)"
                              value={mainArgs.allowed_values ? mainArgs.allowed_values.join(",") : ""}
                              title="허용 가능 항목 값들"
                              onChange={(e) =>
                                handleTransformArgChange(
                                  index,
                                  "allowed_values",
                                  e.target.value.split(",").map((x) => x.trim()) as any
                                )
                              }
                              className="h-8 text-[10px]"
                            />
                          )}
                          {!["val_range", "val_in"].includes(mainRule) && (
                            <span className="text-[10px] text-muted-foreground text-center block py-1.5">
                              인수 설정이 필요 없습니다
                            </span>
                          )}
                        </TableCell>
                        {/* 필터여부 */}
                        <TableCell className="p-2 text-center">
                          <div className="flex justify-center items-center">
                            <Checkbox
                              checked={col.include_in_slicer || false}
                              onCheckedChange={(val) =>
                                handleColumnChange(index, { include_in_slicer: !!val })
                              }
                              title="대시보드 필터 연동 여부"
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
          <div className="flex justify-start">
            <Button variant="outline" size="sm" onClick={addColumn} className="text-xs font-semibold gap-1">
              <Plus className="h-3.5 w-3.5" />
              컬럼 정의 행 추가
            </Button>
          </div>
        </TabsContent>

        {/* 대시보드 레이아웃 탭 */}
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
                  대시보드 최상단에 요약 노출할 핵심 메트릭 카드를 드롭다운으로 설정합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {localDashboard.kpi.map((k: any, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-muted/20 border rounded-md text-xs">
                    <select
                      value={k.type}
                      title="연산 유형 선택"
                      onChange={(e) => updateKpi(i, { type: e.target.value })}
                      className="p-1 rounded border border-input bg-background text-[11px] font-medium"
                    >
                      <option value="total_rows">전체 데이터 건수</option>
                      <option value="count_value">고유 항목 카운트</option>
                      <option value="sum">수치 데이터 합계</option>
                    </select>
                    {k.type !== "total_rows" && (
                      <select
                        value={k.col || ""}
                        title="KPI 연산 대상 컬럼"
                        onChange={(e) => updateKpi(i, { col: e.target.value })}
                        className="p-1 rounded border border-input bg-background text-[11px]"
                      >
                        <option value="">-- 대상 컬럼 --</option>
                        {localConfig.columns.map((c: any) => (
                          <option key={c.name} value={c.name}>
                            {c.name} ({c.type})
                          </option>
                        ))}
                      </select>
                    )}
                    {k.type === "count_value" && (
                      <Input
                        placeholder="매칭 값"
                        value={k.value || ""}
                        title="카운팅 대상 매칭 값"
                        onChange={(e) => updateKpi(i, { value: e.target.value })}
                        className="h-7 text-[10px] w-[60px]"
                      />
                    )}
                    <Input
                      placeholder="표시 라벨"
                      value={k.label || ""}
                      title="KPI 표시 라벨"
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
                <Button variant="outline" size="sm" onClick={addKpi} className="w-full text-xs font-semibold gap-1 mt-2">
                  <Plus className="h-3.5 w-3.5" />
                  KPI 요약 카드 추가
                </Button>
              </CardContent>
            </Card>

            {/* 차트 시각화 구성 빌더 */}
            <Card className="border-border bg-card">
              <CardHeader className="py-4">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  대시보드 차트 시각화 빌더
                </CardTitle>
                <CardDescription className="text-xs">
                  대시보드에 그릴 개별 차트의 대상 컬럼과 스타일(Donut, Bar 등)을 타이핑 없이 선택합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {localDashboard.charts.map((c: any, i: number) => (
                  <div key={i} className="space-y-2 p-2 bg-muted/20 border rounded-md text-xs">
                    <div className="flex items-center gap-2">
                      <select
                        value={c.col || ""}
                        title="차트 대상 컬럼"
                        onChange={(e) => updateChart(i, { col: e.target.value })}
                        className="p-1 rounded border border-input bg-background text-[11px] flex-1"
                      >
                        <option value="">-- 대상 컬럼 --</option>
                        {localConfig.columns.map((col: any) => (
                          <option key={col.name} value={col.name}>
                            {col.name} ({col.type})
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
                        value={c.title || ""}
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
                <Button variant="outline" size="sm" onClick={addChart} className="w-full text-xs font-semibold gap-1 mt-2">
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
