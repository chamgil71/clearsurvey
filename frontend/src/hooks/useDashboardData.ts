import { useEffect, useState } from "react";
import type { ProjectData, ProjectListItem } from "@/types/dashboard";

async function fetchJson<T>(url: string): Promise<T> {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`데이터 로드 실패: ${url}`);
  return r.json() as Promise<T>;
}

function normalizeUrl(u: string) {
  return u.startsWith("data/") || u.startsWith("/")
    ? u.startsWith("/")
      ? u
      : "/" + u
    : "/data/" + u;
}

export function useDashboardData(initialUrl?: string) {
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [data, setData] = useState<ProjectData | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        let projList: ProjectListItem[] = [];
        try {
          projList = await fetchJson<ProjectListItem[]>("/data/projects.json");
        } catch {
          projList = [];
        }
        if (cancelled) return;
        // 공개 대시보드는 published: true 인 프로젝트만 표시
        // published 필드가 없는 레거시 항목은 모두 표시
        const published = projList.filter((p) => p.published !== false);
        setProjects(published);

        // 버그: initialUrl(?data= 쿼리파라미터)만 normalizeUrl을 안 거쳐 상대경로("x_data.json")로
        // 그대로 fetch되고 있었다 — 현재 페이지 경로 기준으로 풀려 항상 404, 데이터 없음 화면으로
        // 떨어졌다(실측 확인: /?data=books_data.json 접속 시 재현). 다른 분기는 전부 정상 경유.
        let target = initialUrl ? normalizeUrl(initialUrl) : null;
        // 버그: ?data= 가 published 필터를 안 거치고 무조건 그 프로젝트를 열었다 — 관리자가
        // 비공개로 돌려도 예전에 열어봤던 링크(북마크·주소창에 남은 ?data=)가 있으면 그 브라우저는
        // 계속 비공개 프로젝트를 보고 있었다. 매니페스트에 실제로 있는 항목인데 비공개면 무시하고
        // 아래 기본 프로젝트 선정 로직으로 넘어간다. 매니페스트에 아예 없는 파일명(레거시 링크 등)
        // 이거나 매니페스트 로드 자체가 실패했으면(published=[]) 판단할 근거가 없으므로 그대로 신뢰.
        if (target) {
          const manifestEntry = projList.find((p) => normalizeUrl(p.file) === target);
          if (manifestEntry && manifestEntry.published === false) target = null;
        }
        // 공개된 프로젝트 중 is_default로 지정된 것이 있으면 그걸 첫 화면으로 연다.
        // 없으면(레거시 매니페스트 포함) 기존처럼 목록 맨 앞 항목을 쓴다.
        const defaultProject = published.find((p) => p.is_default);
        if (!target && defaultProject) target = normalizeUrl(defaultProject.file);
        if (!target && published.length) target = normalizeUrl(published[0].file);
        if (!target && projList.length) target = normalizeUrl(projList[0].file);
        if (!target) target = "/data/survey_data.json";

        const d = await fetchJson<ProjectData>(target);
        if (cancelled) return;
        setData(d);
        setUrl(target);
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [initialUrl]);

  const switchProject = async (file: string) => {
    try {
      setLoading(true);
      setError(null);
      const target = normalizeUrl(file);
      const d = await fetchJson<ProjectData>(target);
      setData(d);
      setUrl(target);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    projects,
    data,
    url,
    loading,
    error,
    switchProject,
    /**
     * 서버가 새로 계산해 준 데이터로 통째 교체한다 (편집 저장 후).
     *
     * 부분 패치가 아니라 **교체**인 이유: 값 하나가 바뀌면 aggregates·unique_values·min/max 가
     * 함께 변한다. 프런트가 그걸 흉내내면 서버 결과와 어긋나므로, 서버가 계산한 것을 그대로 쓴다
     * (계획 §5.3 — 낙관적 업데이트를 하지 않는 이유).
     */
    applyData: setData,
  };
}
