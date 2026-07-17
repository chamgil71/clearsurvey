import React, { useRef, useEffect, useState } from "react";
import {
  Terminal as TerminalIcon,
  Play,
  Download,
  ExternalLink,
  RefreshCw,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useManagerApi } from "@/hooks/useManagerApi";
import type { ProjectFreshness } from "@/hooks/useManagerApi";

interface Step3Props {
  projectName: string;
  logs: string[];
  /** 파이프라인 시작 → 폴링 → export까지 포함한 통합 핸들러 (admin.tsx 에서 주입) */
  onRunPipeline: () => Promise<void>;
  /** 독립 export 버튼용 (현재 UI에서는 미노출, 확장을 위해 유지) */
  onExportDashboard?: () => Promise<any>;
  downloadUrl: string;
  loading: boolean;
  clearLogs: () => void;
  onBack: () => void;
}

export const Step3_RunDeploy: React.FC<Step3Props> = ({
  projectName,
  logs,
  onRunPipeline,
  downloadUrl,
  loading,
  clearLogs,
  onBack,
}) => {
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const [previewRows, setPreviewRows] = useState<
    { raw: Record<string, string>; cleaned: Record<string, string> }[] | null
  >(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [activeSampleIdx, setActiveSampleIdx] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [freshness, setFreshness] = useState<ProjectFreshness | null>(null);

  const api = useManagerApi();

  // Auto-scroll logs to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const isSuccess = logs.some((l) => l.includes("[SUCCESS] 대시보드 JSON 파일 저장 완료"));

  // 마지막 실행 시각 및 "설정 변경 후 미실행" 여부 조회.
  // isSuccess(실행 완료 시점)에도 다시 조회하여 방금 생성된 output 시각을 반영.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const f = await api.getProjectFreshness(projectName);
        if (!cancelled) setFreshness(f);
      } catch {
        if (!cancelled) setFreshness(null);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectName, isSuccess]);

  const handleRun = async () => {
    clearLogs();
    try {
      await onRunPipeline();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoadPreview = async () => {
    setPreviewLoading(true);
    try {
      const data = await api.previewProjectConfig(projectName);
      setPreviewRows(data || []);
      setActiveSampleIdx(0);
      setShowPreview(true);
    } catch (err: any) {
      console.error(err);
    } finally {
      setPreviewLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Actions panel */}
        <div className="md:col-span-1 space-y-4">
          <Card className="border-border bg-card">
            <CardHeader className="py-4">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                파이프라인 실행 제어
              </CardTitle>
              <CardDescription className="text-xs">
                정제 시나리오 및 요약 빌드 규칙에 맞춰 원본 데이터를 즉시 정제하고 배포합니다.
              </CardDescription>
              <p className="text-[10px] text-muted-foreground font-mono pt-1">
                마지막 실행:{" "}
                {freshness?.output_generated_at
                  ? new Date(freshness.output_generated_at).toLocaleString("ko-KR")
                  : "실행 이력 없음"}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {freshness?.is_stale && (
                <div className="p-2.5 bg-warning/10 border border-warning/30 rounded-md text-[11px] text-warning dark:text-warning font-semibold flex items-start gap-1.5">
                  <span>⚠</span>
                  <span>설정이 변경되었습니다. 최신 결과를 반영하려면 다시 실행해주세요.</span>
                </div>
              )}
              <Button
                variant="outline"
                onClick={handleLoadPreview}
                disabled={loading || previewLoading}
                className="w-full text-xs font-semibold h-9 flex items-center justify-center gap-2 border-primary/30 text-primary hover:bg-primary/5"
              >
                <Eye className="h-4 w-4" />
                {previewLoading ? "미리보기 분석 중..." : "정제 규칙 테스트 (미리보기)"}
              </Button>

              <Button
                onClick={handleRun}
                disabled={loading || previewLoading}
                className="w-full text-xs font-semibold h-10 flex items-center justify-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                {loading ? "데이터 정제 가동 중..." : "정제 엔진 1-Click 실행"}
              </Button>

              {isSuccess && (
                <div className="p-3 bg-success/10 border border-success/30 rounded-md text-xs text-foreground space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-success">
                    <CheckCircle2 className="h-4 w-4" />
                    정제 및 배포 성공
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    데이터 클렌징 및 요약 대시보드 JSON 이 최신 상태로 원격 빌드 완료되었습니다.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Download & View */}
          {isSuccess && (
            <Card className="border-border bg-card">
              <CardHeader className="py-4">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Download className="h-4 w-4 text-success" />
                  정제 결과 다운로드
                </CardTitle>
                <CardDescription className="text-xs">
                  정제 완료된 고품질의 엑셀 결과 파일을 내보내거나 대시보드로 이동합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href={downloadUrl} download>
                  <Button variant="outline" className="w-full text-xs font-semibold gap-1.5 h-9">
                    <Download className="h-4 w-4 text-primary" />
                    클렌징 엑셀 다운로드
                  </Button>
                </a>
                <a
                  href={`/?data=/data/${projectName}_data.json`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full text-xs font-semibold gap-1.5 h-9 bg-success text-success-foreground hover:bg-success/90">
                    📈 대시보드 즉시 확인
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Live Terminal Log */}
        <div className="md:col-span-2 space-y-4">
          <Card className="border-border bg-card flex flex-col min-h-[350px]">
            <CardHeader className="py-4 border-b">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <TerminalIcon className="h-4 w-4 text-primary" />
                정제 엔진 실시간 런타임 로그
              </CardTitle>
              <CardDescription className="text-xs">
                데이터 정밀 분석기 및 클렌징 정합성 엔진의 동작 과정 로그를 실시간 모니터링합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 bg-black p-4 font-mono text-[11px] overflow-y-auto leading-relaxed select-text min-h-[250px] max-h-[420px] rounded-b-lg">
              {logs.length === 0 ? (
                <div className="text-muted-foreground/60 h-full flex items-center justify-center italic text-xs">
                  [준비 상태] 상단 1-Click 실행 버튼을 누르면 엔진 로그가 여기에 실시간 누적됩니다.
                </div>
              ) : (
                <div className="space-y-1.5">
                  {/* 터미널 로그 색 — 컨테이너가 bg-black 고정이라 테마 토큰을 쓰면 안 된다.
                      라이트 테마의 --success/--warning 은 검은 배경 위에서 대비가 나오지 않는다.
                      배경이 고정인 문맥이므로 색도 고정한다(PDF 인쇄 스타일과 같은 이유). */}
                  {logs.map((log, idx) => {
                    let colorClass = "text-zinc-300";
                    if (log.startsWith("[SYSTEM]")) colorClass = "text-sky-400 font-semibold";
                    if (log.startsWith("[RUNNING]")) colorClass = "text-amber-400";
                    if (log.startsWith("[SUCCESS]")) colorClass = "text-emerald-400 font-bold";
                    if (log.startsWith("[ERROR]")) colorClass = "text-rose-500 font-semibold";

                    return (
                      <div key={idx} className={colorClass}>
                        {log}
                      </div>
                    );
                  })}
                  <div ref={terminalEndRef} />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preview Table Card */}
          {showPreview && previewRows && previewRows.length > 0 && (
            <Card className="border-border bg-card">
              <CardHeader className="py-3 border-b flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    정제 결과 미리보기 (상위 5개 샘플)
                  </CardTitle>
                  <CardDescription className="text-[11px] mt-0.5">
                    설정된 규칙(Transforms)이 실제 원본 데이터에 어떻게 적용되는지 확인합니다.
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPreview(false)}
                  className="h-7 text-xs font-semibold hover:bg-muted"
                >
                  닫기
                </Button>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                {/* 샘플 라디오 탭 */}
                <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-lg">
                  {previewRows.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSampleIdx(idx)}
                      className={`flex-1 py-1 text-[11px] font-bold rounded-md transition-all ${
                        activeSampleIdx === idx
                          ? "bg-background text-primary shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      샘플 행 {idx + 1}
                    </button>
                  ))}
                </div>

                {/* 컬럼 리스트 스크롤 영역 */}
                <div className="border rounded-lg overflow-hidden max-h-[300px] overflow-y-auto">
                  <table className="w-full text-[11px] font-mono leading-normal">
                    <thead className="bg-muted/50 border-b">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold w-[40%]">
                          문항 (출력 컬럼명)
                        </th>
                        <th className="px-3 py-2 text-left font-bold w-[30%]">원본 값 (Raw)</th>
                        <th className="px-3 py-2 text-left font-bold w-[30%] text-primary">
                          정제 결과 (Cleaned)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {Object.keys(previewRows[activeSampleIdx].raw).map((colName) => {
                        const rawVal = previewRows[activeSampleIdx].raw[colName];
                        const cleanedVal = previewRows[activeSampleIdx].cleaned[colName];
                        const isChanged = rawVal !== cleanedVal;

                        return (
                          <tr
                            key={colName}
                            className={`hover:bg-muted/10 ${isChanged ? "bg-warning/5" : ""}`}
                          >
                            <td
                              className="px-3 py-2 font-bold font-sans text-foreground truncate max-w-[130px]"
                              title={colName}
                            >
                              {colName}
                            </td>
                            <td
                              className="px-3 py-2 text-muted-foreground truncate max-w-[90px]"
                              title={rawVal}
                            >
                              {rawVal || "—"}
                            </td>
                            <td
                              className={`px-3 py-2 truncate max-w-[90px] font-bold ${isChanged ? "text-warning" : "text-muted-foreground"}`}
                              title={cleanedVal}
                            >
                              {cleanedVal}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* ── 하단 액션 버튼 바 ── */}
      <div className="flex items-center justify-between border-t pt-5 mt-4">
        <Button
          variant="outline"
          size="default"
          onClick={onBack}
          className="font-semibold text-xs gap-1.5"
          disabled={loading}
        >
          ← 이전 단계 (설정 편집)
        </Button>
      </div>
    </div>
  );
};
