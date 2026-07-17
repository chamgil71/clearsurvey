import { useRef, useState } from "react";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { ConflictRecord, EditRecord } from "@/hooks/useRowEdit";

/** engine/overrides.py 의 Conflict.reason 을 사람 말로. */
const CONFLICT_LABEL: Record<string, string> = {
  row_missing: "그 행이 원본에 없습니다",
  col_missing: "그 컬럼이 설정에서 사라졌습니다",
  prev_mismatch: "정제 결과가 편집 당시와 달라졌습니다",
};

export interface ImportChange {
  row_id: string;
  col: string;
  value: string | number | null;
  prev?: string | number | null;
}

/**
 * 편집 검토 패널 — 무엇을 손댔는지 한눈에 보고, 되돌리고, 수정한 xlsx 를 되돌려 올린다.
 *
 * 편집은 `overrides.json` 에 쌓이고 파이프라인이 매번 다시 얹는다. 즉 **한 번 고치면 계속
 * 따라다닌다** — 그래서 "내가 무엇을 고쳤더라"를 볼 창구가 없으면 안 된다.
 *
 * 상세: docs/plan/pending/dashboard_edit_plan.md §7.3 · §5.4
 */
export function EditReviewPanel({
  open,
  onOpenChange,
  edits,
  conflicts = [],
  busy,
  onRevert,
  onImport,
  onDeploy,
  deployStale,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  edits: EditRecord[];
  /** 마지막 재생성에서 붙지 못한 편집. 버리지 않고 보여준다. */
  conflicts?: ConflictRecord[];
  busy: boolean;
  onRevert: (row_id?: string, col?: string) => Promise<void>;
  /** apply=false 면 미리보기만 — 서버가 아무것도 저장하지 않는다. */
  onImport: (file: File, apply: boolean) => Promise<ImportChange[]>;
  /** 발행 — 커밋 1개 + 푸시 1회. 없으면 발행 영역을 숨긴다. */
  onDeploy?: () => Promise<void>;
  /** data.json 이 마지막 발행보다 새로운가 (표시용) */
  deployStale?: boolean;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<{ file: File; changes: ImportChange[] } | null>(null);
  const [confirmDeploy, setConfirmDeploy] = useState(false);

  const pickFile = async (file: File) => {
    try {
      const changes = await onImport(file, false); // 미리보기
      if (changes.length === 0) {
        toast.info("바뀐 셀이 없습니다.");
        return;
      }
      setPending({ file, changes });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "업로드 실패");
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const confirmImport = async () => {
    if (!pending) return;
    try {
      await onImport(pending.file, true);
      setPending(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "반영 실패");
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[520px] sm:w-[520px] max-w-full p-6 overflow-y-auto">
        <SheetHeader className="p-0 mb-4">
          <SheetTitle className="text-base">직접 수정한 값 ({edits.length}건)</SheetTitle>
        </SheetHeader>

        <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">
          여기 있는 값은 정제 규칙보다 우선합니다. 정제를 다시 실행해도 유지되며, 되돌리면
          정제 결과의 원래 값으로 돌아갑니다.
        </p>

        {/* 붙지 못한 편집 (§7.3) — 조용히 사라지는 것이 이 기능의 최악의 실패다.
            파이프라인을 돌 때만 계산되므로 마지막 재생성 기준이다. */}
        {conflicts.length > 0 && (
          <div className="border border-destructive/40 bg-destructive/5 rounded-lg p-3 mb-4">
            <div className="text-xs font-semibold mb-1 text-destructive">
              반영하지 못한 편집 {conflicts.length}건
            </div>
            <p className="text-[11px] text-muted-foreground mb-2">
              원본이 바뀌었거나 설정이 달라져 붙을 자리가 사라졌습니다. 값은 버리지 않고 여기
              남겨둡니다.
            </p>
            <ul className="space-y-1">
              {conflicts.map((c, i) => (
                <li key={i} className="text-[11px]">
                  <span className="font-semibold">{c.col}</span>
                  <span className="text-muted-foreground"> · {CONFLICT_LABEL[c.reason] ?? c.reason}</span>
                  <div className="text-muted-foreground">
                    넣으려던 값: <span className="text-foreground">{String(c.value ?? "(빈 값)")}</span>
                    {c.reason === "prev_mismatch" && (
                      <> · 원래 {String(c.expected_prev ?? "")} 였는데 지금은{" "}
                        {String(c.actual_prev ?? "")}</>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 발행 (§6) — 저장마다 자동으로 밀지 않는 이유가 여기 적혀 있어야 한다 */}
        {onDeploy && (
          <div className="border border-border rounded-lg p-3 mb-4">
            <div className="text-xs font-semibold mb-1">발행</div>
            <p className="text-[11px] text-muted-foreground mb-2">
              지금까지의 편집을 공개 대시보드에 반영합니다. 커밋 1개로 묶여 배포됩니다.
              {deployStale === false && " 마지막 발행 이후 바뀐 것이 없을 수 있습니다."}
            </p>
            <Button
              size="sm"
              className="text-xs"
              disabled={busy}
              onClick={() => setConfirmDeploy(true)}
            >
              발행하기
            </Button>
          </div>
        )}

        {/* 발행은 공개 대시보드로 나가는 되돌리기 어려운 동작이다 — 먼저 묻는다 (§6.2 ②) */}
        <AlertDialog open={confirmDeploy} onOpenChange={setConfirmDeploy}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>편집 {edits.length}건을 발행합니다</AlertDialogTitle>
              <AlertDialogDescription>
                공개 대시보드에 배포되어 누구나 보게 됩니다. 커밋 1개로 기록됩니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  setConfirmDeploy(false);
                  void onDeploy?.();
                }}
              >
                발행
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* 수정된 xlsx 되돌려 올리기 (§5.4) */}
        <div className="border border-border rounded-lg p-3 mb-4">
          <div className="text-xs font-semibold mb-1">수정한 엑셀 올리기</div>
          <p className="text-[11px] text-muted-foreground mb-2">
            「원본 XLSX」로 받아 엑셀에서 고친 파일을 올리면 바뀐 셀만 골라 반영합니다.
          </p>
          <input
            ref={fileRef}
            type="file"
            accept=".xlsx"
            aria-label="수정한 엑셀 파일"
            disabled={busy}
            onChange={(e) => e.target.files?.[0] && pickFile(e.target.files[0])}
            className="text-[11px] w-full"
          />
        </div>

        {/* 미리보기 — 확인 전에는 아무것도 반영하지 않는다 */}
        {pending && (
          <div className="border border-warning/40 bg-warning/5 rounded-lg p-3 mb-4">
            <div className="text-xs font-semibold mb-2">
              {pending.changes.length}개 셀이 바뀝니다. 반영할까요?
            </div>
            <div className="max-h-[180px] overflow-y-auto mb-2">
              {pending.changes.map((c, i) => (
                <ChangeRow key={i} change={c} />
              ))}
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="text-xs" disabled={busy} onClick={confirmImport}>
                반영
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs"
                disabled={busy}
                onClick={() => setPending(null)}
              >
                취소
              </Button>
            </div>
          </div>
        )}

        {edits.length === 0 ? (
          <p className="text-xs text-muted-foreground text-center py-8">
            직접 수정한 값이 없습니다.
          </p>
        ) : (
          <>
            <div className="flex justify-end mb-2">
              <Button
                size="sm"
                variant="outline"
                className="text-xs"
                disabled={busy}
                onClick={() => onRevert()}
              >
                전체 되돌리기
              </Button>
            </div>
            <ul className="space-y-1.5">
              {edits.map((e) => (
                <li
                  key={`${e.row_id}:${e.col}`}
                  className="border border-border rounded p-2 flex items-start gap-2"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold">{e.col}</div>
                    <ChangeRow change={e} />
                    {/* 출처는 시각과 별개다 — at 이 없어도 어디서 온 편집인지는 보여야 한다 */}
                    {(e.at || e.origin === "xlsx-import") && (
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        {e.at ? e.at.slice(0, 16).replace("T", " ") : ""}
                        {e.origin === "xlsx-import"
                          ? `${e.at ? " · " : ""}엑셀에서 가져옴`
                          : ""}
                      </div>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-[11px] h-6 px-2 shrink-0"
                    disabled={busy}
                    onClick={() => onRevert(e.row_id, e.col)}
                    title="이 값을 정제 결과로 되돌리기"
                  >
                    되돌리기
                  </Button>
                </li>
              ))}
            </ul>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function ChangeRow({ change }: { change: EditRecord | ImportChange }) {
  return (
    <div className="text-[11px] break-all">
      <span className="text-muted-foreground line-through">
        {change.prev == null || change.prev === "" ? "(빈 값)" : String(change.prev)}
      </span>
      <span className="text-muted-foreground mx-1">→</span>
      <span className="text-foreground font-medium">
        {change.value == null || change.value === "" ? "(빈 값)" : String(change.value)}
      </span>
    </div>
  );
}
