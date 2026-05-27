import React, { useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, Download, ExternalLink, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Step3Props {
  projectName: string;
  logs: string[];
  onRunPipeline: () => Promise<any>;
  onExportDashboard: () => Promise<any>;
  downloadUrl: string;
  loading: boolean;
  clearLogs: () => void;
}

export const Step3_RunDeploy: React.FC<Step3Props> = ({
  projectName,
  logs,
  onRunPipeline,
  onExportDashboard,
  downloadUrl,
  loading,
  clearLogs,
}) => {
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleRun = async () => {
    clearLogs();
    try {
      // 1. Run pipeline
      const runResult = await onRunPipeline();
      if (runResult && runResult.status === "success") {
        // 2. Proactively export dashboard json
        await onExportDashboard();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const isSuccess = logs.some((l) => l.includes("[SUCCESS] 대시보드 JSON 파일 저장 완료"));

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
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={handleRun}
                disabled={loading}
                className="w-full text-xs font-semibold h-10 flex items-center justify-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                {loading ? "데이터 정제 가동 중..." : "정제 엔진 1-Click 실행"}
              </Button>

              {isSuccess && (
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-md text-xs text-foreground space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-green-500">
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
                  <Download className="h-4 w-4 text-green-500" />
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
                <a href={`/?data=/data/${projectName}_data.json`}>
                  <Button className="w-full text-xs font-semibold gap-1.5 h-9 bg-green-600 hover:bg-green-700 text-white">
                    📈 대시보드 즉시 확인
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Live Terminal Log */}
        <div className="md:col-span-2">
          <Card className="border-border bg-card h-full flex flex-col min-h-[350px]">
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
                  {logs.map((log, idx) => {
                    let colorClass = "text-zinc-300";
                    if (log.startsWith("[SYSTEM]")) colorClass = "text-sky-400 font-semibold";
                    if (log.startsWith("[RUNNING]")) colorClass = "text-yellow-400";
                    if (log.startsWith("[SUCCESS]")) colorClass = "text-green-400 font-bold";
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
        </div>
      </div>
    </div>
  );
};
