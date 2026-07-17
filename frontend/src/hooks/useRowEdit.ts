import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import type { ProjectData, Row } from "@/types/dashboard";
import { ROW_ID_COL } from "@/types/dashboard";
import { API_BASE } from "@/hooks/useBackendStatus";

/** overrides.json 의 편집 1건 (백엔드 engine/overrides.py 의 Edit 와 대응). */
export interface EditRecord {
  row_id: string;
  col: string;
  value: string | number | null;
  prev?: string | number | null;
  at?: string;
  by?: string;
  origin?: string;
}

export interface Freshness {
  is_stale: boolean;
  edit_count: number;
  overrides_updated_at: string | null;
  output_generated_at: string | null;
  has_output: boolean;
}

/**
 * 붙이지 못했거나 전제가 어긋난 편집 (백엔드 engine/overrides.py 의 Conflict).
 *
 * 파이프라인을 돌 때만 계산된다 — 그래서 마지막 rebuild/deploy 응답의 것을 들고 있는다.
 * **버리지 않고 보여줘야 한다**: 편집이 조용히 사라지는 것이 이 기능의 최악의 실패다.
 */
export interface ConflictRecord {
  row_id: string;
  col: string;
  reason: "row_missing" | "col_missing" | "prev_mismatch" | string;
  value: string | number | null;
  expected_prev?: string | number | null;
  actual_prev?: string | number | null;
}

export interface RowEditApi {
  saving: boolean;
  edits: EditRecord[];
  editCount: number;
  freshness: Freshness | null;
  /** 마지막 재생성에서 붙지 못한 편집. 비어 있으면 모두 정상 적용됐다. */
  conflicts: ConflictRecord[];
  /** __row_id → {컬럼: 파이프라인 원래값} — 드로어에서 "손댄 필드" 표시용 */
  editedCells: Record<string, Record<string, string | number | null>>;
  saveRow: (row: Row, changes: Record<string, string | number | null | undefined>) => Promise<void>;
  revert: (row_id?: string, col?: string) => Promise<void>;
  /** apply=false 면 서버가 아무것도 저장하지 않고 바뀔 목록만 돌려준다 (§5.4 ⑤). */
  importXlsx: (file: File, apply: boolean) => Promise<ImportChange[]>;
  /** 발행 — rebuild + 커밋 1개 + 푸시 1회. 가드에 걸리면 이유를 던진다. */
  deploy: () => Promise<void>;
  refresh: () => Promise<void>;
}

export interface ImportChange {
  row_id: string;
  col: string;
  value: string | number | null;
  prev?: string | number | null;
}

/**
 * 대시보드 행 편집 — 저장·되돌리기·편집 목록.
 *
 * **낙관적 업데이트를 하지 않는다** (계획 §5.3): 값 하나가 바뀌면 aggregates·unique_values·
 * min/max 가 함께 변하는데 프런트가 그걸 예측할 수 없다. 어긋나면 화면이 깜빡이며 값이
 * 바뀌는 최악의 UX 가 된다. 대신 드로어를 잠그고 서버가 계산한 결과를 기다린다 —
 * 저장이 xlsx 를 미루는(지연 생성) 덕에 이 대기가 짧다.
 *
 * 상세: docs/plan/pending/dashboard_edit_plan.md §5.1
 */
export function useRowEdit({
  project,
  enabled,
  sessionToken,
  onData,
}: {
  project: string | undefined;
  /** canEdit (백엔드 + 로그인). false 면 아무것도 요청하지 않는다. */
  enabled: boolean;
  sessionToken: string | null;
  /** 서버가 새로 계산한 데이터 → 대시보드에 반영 */
  onData: (data: ProjectData) => void;
}): RowEditApi {
  const [saving, setSaving] = useState(false);
  const [edits, setEdits] = useState<EditRecord[]>([]);
  const [freshness, setFreshness] = useState<Freshness | null>(null);
  const [conflicts, setConflicts] = useState<ConflictRecord[]>([]);

  const authFetch = useCallback(
    (path: string, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      if (sessionToken) headers.set("Authorization", `Bearer ${sessionToken}`);
      if (init?.body) headers.set("Content-Type", "application/json");
      return fetch(`${API_BASE}${path}`, { ...init, headers });
    },
    [sessionToken],
  );

  const refresh = useCallback(async () => {
    if (!enabled || !project) {
      setEdits([]);
      setFreshness(null);
      return;
    }
    try {
      const [ovRes, frRes] = await Promise.all([
        authFetch(`/api/projects/${encodeURIComponent(project)}/overrides`),
        authFetch(`/api/projects/${encodeURIComponent(project)}/freshness`),
      ]);
      // 이 PC 에 프로젝트 폴더가 없으면 404 다(발행된 data.json 만 있는 경우).
      // 정상 상태이므로 조용히 비운다 — 사용자에게 에러를 띄우지 않는다.
      setEdits(ovRes.ok ? ((await ovRes.json()).edits ?? []) : []);
      setFreshness(frRes.ok ? await frRes.json() : null);
    } catch {
      setEdits([]);
      setFreshness(null);
    }
  }, [enabled, project, authFetch]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const saveRow = useCallback(
    async (row: Row, changes: Record<string, string | number | null | undefined>) => {
      const rowId = row[ROW_ID_COL];
      if (!project || !rowId) {
        // __row_id 가 없는 데이터 = 이 기능이 생기기 전에 내보낸 data.json.
        // 어느 행인지 특정할 수 없으므로 저장하면 안 된다.
        toast.error("이 데이터에는 행 식별자가 없습니다. 정제를 다시 실행해 주세요.");
        throw new Error("missing row id");
      }
      setSaving(true);
      try {
        const res = await authFetch(
          `/api/projects/${encodeURIComponent(project)}/rows/${encodeURIComponent(String(rowId))}`,
          { method: "PATCH", body: JSON.stringify(changes) },
        );
        if (!res.ok) {
          const detail = await res.json().catch(() => ({}));
          throw new Error(detail?.detail || `저장 실패 (${res.status})`);
        }
        const body = await res.json();
        onData(body.data as ProjectData); // ⑨ 교체 → 차트·KPI·필터가 따라 갱신된다
        await refresh();
        toast.success("저장했습니다.");
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "저장 실패");
        throw e; // DetailPanel 이 draft 를 유지하도록 (§5.1 ⑩)
      } finally {
        setSaving(false);
      }
    },
    [project, authFetch, onData, refresh],
  );

  const revert = useCallback(
    async (row_id?: string, col?: string) => {
      if (!project) return;
      setSaving(true);
      try {
        const body = row_id ? JSON.stringify(col ? { row_id, col } : { row_id }) : undefined;
        const res = await authFetch(`/api/projects/${encodeURIComponent(project)}/overrides`, {
          method: "DELETE",
          body,
        });
        if (!res.ok) throw new Error(`되돌리기 실패 (${res.status})`);
        const out = await res.json();
        setConflicts(out.conflicts ?? []);
        await refresh();
        // 되돌리기는 xlsx 에서 data.json 을 전량 재생성한다(서버가 rebuild). 새로 읽어온다.
        const fresh = await fetch(`/data/${encodeURIComponent(project)}_data.json?t=${Date.now()}`);
        if (fresh.ok) onData((await fresh.json()) as ProjectData);
        toast.success(`${out.removed}건을 되돌렸습니다.`);
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "되돌리기 실패");
      } finally {
        setSaving(false);
      }
    },
    [project, authFetch, onData, refresh],
  );

  const importXlsx = useCallback(
    async (file: File, apply: boolean): Promise<ImportChange[]> => {
      if (!project) return [];
      setSaving(true);
      try {
        const form = new FormData();
        form.append("file", file);
        // Content-Type 을 직접 넣으면 multipart boundary 가 깨진다 — authFetch 가 body 를 보고
        // JSON 헤더를 붙이므로 여기서는 fetch 를 직접 쓴다.
        const headers = new Headers();
        if (sessionToken) headers.set("Authorization", `Bearer ${sessionToken}`);
        const res = await fetch(
          `${API_BASE}/api/projects/${encodeURIComponent(project)}/import-xlsx?apply=${apply}`,
          { method: "POST", body: form, headers },
        );
        if (!res.ok) {
          const detail = await res.json().catch(() => ({}));
          throw new Error(detail?.detail || `업로드 실패 (${res.status})`);
        }
        const body = await res.json();
        if (apply) {
          if (body.data) onData(body.data as ProjectData);
          await refresh();
          toast.success(`${body.count}개 셀을 반영했습니다.`);
        }
        return (body.changes ?? []) as ImportChange[];
      } finally {
        setSaving(false);
      }
    },
    [project, sessionToken, onData, refresh],
  );

  const deploy = useCallback(async () => {
    if (!project) return;
    setSaving(true);
    try {
      const res = await authFetch(`/api/projects/${encodeURIComponent(project)}/deploy`, {
        method: "POST",
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        // 409 = 가드에 걸린 것. 오류가 아니라 **의도된 정지**이므로 이유를 길게 보여준다.
        throw new Error(body?.detail || `발행 실패 (${res.status})`);
      }
      setConflicts(body.conflicts ?? []);
      await refresh();
      if (body.pushed) toast.success("발행했습니다. 곧 배포에 반영됩니다.");
      else toast.warning(body.detail || "커밋했지만 푸시하지 못했습니다.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "발행 실패", { duration: 10000 });
      throw e;
    } finally {
      setSaving(false);
    }
  }, [project, authFetch, refresh]);

  const editedCells: Record<string, Record<string, string | number | null>> = {};
  for (const e of edits) {
    (editedCells[e.row_id] ??= {})[e.col] = e.prev ?? null;
  }

  return {
    saving,
    edits,
    editCount: edits.length,
    freshness,
    conflicts,
    editedCells,
    saveRow,
    revert,
    importXlsx,
    deploy,
    refresh,
  };
}
