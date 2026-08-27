import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useManagerApi } from "@/hooks/useManagerApi";
import type { PublicDataAudit } from "@/hooks/useManagerApi";
import { Button } from "@/components/ui/button";
import { ShieldAlert, ShieldCheck, RefreshCw } from "lucide-react";

interface Props {
  isBackendAlive: boolean;
}

/**
 * frontend/public/data/ 의 실제 파일과 projects.json 매니페스트를 대조해 보여준다.
 *
 * 왜 필요한가: `published: false`는 앱 화면(목록·`?data=` 딥링크)만 가려줄 뿐이라,
 * 매니페스트에 아예 등록되지 않은 '고아 파일'은 그 차단 로직 자체가 작동하지 않아
 * URL을 아는 사람에게 그대로 열람된다. 상세: docs/guides/vercel_deploy_guide.md §6.1
 */
export function PublicDataAuditPanel({ isBackendAlive }: Props) {
  const api = useManagerApi();
  const [result, setResult] = useState<PublicDataAudit | null>(null);
  const [checking, setChecking] = useState(false);
  const [deletingFile, setDeletingFile] = useState<string | null>(null);

  const runAudit = async () => {
    setChecking(true);
    try {
      setResult(await api.auditPublicData());
    } catch (err: unknown) {
      toast.error(`공개 데이터 점검 실패: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    if (isBackendAlive) runAudit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBackendAlive]);

  const handleDeleteOrphan = async (file: string) => {
    if (
      !window.confirm(
        `'${file}'을(를) frontend/public/data/ 에서 완전히 삭제하시겠습니까?\n매니페스트(projects.json)에 없는 파일만 지워지며, 되돌릴 수 없습니다.`,
      )
    ) {
      return;
    }
    setDeletingFile(file);
    try {
      const res = await api.cleanupPublicData([file]);
      setResult(res.audit);
      if (res.deleted.includes(file)) {
        toast.success(`'${file}' 삭제 완료.`);
      } else {
        toast.warning(`'${file}'은(는) 매니페스트에 등록돼 있어 삭제하지 않았습니다.`);
      }
    } catch (err: unknown) {
      toast.error(`삭제 실패: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setDeletingFile(null);
    }
  };

  if (!isBackendAlive) return null;

  const hasFindings = !!result && (result.orphans.length > 0 || result.broken.length > 0);

  return (
    <div className="bg-card p-6 md:p-8 border border-border rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {hasFindings ? (
            <ShieldAlert className="h-5 w-5 text-destructive" />
          ) : (
            <ShieldCheck className="h-5 w-5 text-success" />
          )}
          <div>
            <h2 className="text-sm font-bold text-foreground">공개 데이터 점검</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              frontend/public/data/ 의 실제 파일과 프로젝트 목록을 대조합니다.
            </p>
          </div>
        </div>
        <Button size="sm" variant="outline" onClick={runAudit} disabled={checking} className="gap-1.5 h-8 text-xs">
          <RefreshCw className={`h-3.5 w-3.5 ${checking ? "animate-spin" : ""}`} />
          다시 검사
        </Button>
      </div>

      {result && (
        <div className="mt-4 space-y-3">
          {!hasFindings ? (
            <p className="text-xs text-success">
              정상 — 고아 파일·깨진 참조 없음 (파일 {result.disk_count}개 / 목록 {result.manifest_count}개).
            </p>
          ) : (
            <>
              {result.orphans.length > 0 && (
                <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-3">
                  <p className="text-xs font-semibold text-destructive">
                    고아 파일 {result.orphans.length}건 — 프로젝트 목록에 없지만 배포돼 있어, URL을 알면 그대로 열람됩니다.
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {result.orphans.map((file) => (
                      <li key={file} className="flex items-center justify-between text-xs">
                        <span className="font-mono text-foreground">{file}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          disabled={deletingFile === file}
                          onClick={() => handleDeleteOrphan(file)}
                          className="h-6 px-2 text-[11px] font-semibold text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          삭제
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.broken.length > 0 && (
                <div className="rounded-lg border border-warning/40 bg-warning/10 p-3">
                  <p className="text-xs font-semibold text-warning">
                    깨진 참조 {result.broken.length}건 — 프로젝트 목록엔 있지만 파일이 없습니다(배포 후 404).
                  </p>
                  <ul className="mt-2 space-y-1 font-mono text-xs text-muted-foreground">
                    {result.broken.map((file) => (
                      <li key={file}>{file}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {result.unpublished_but_deployed.length > 0 && (
            <p className="text-xs text-muted-foreground">
              참고: {result.unpublished_but_deployed.join(", ")}은(는) 비공개 상태지만 파일은 여전히 배포돼 있습니다.
              화면·딥링크에서는 막히지만 URL을 직접 알면 열람 가능합니다 — 완전히 지우려면 아래 프로젝트 목록에서 삭제하세요.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
