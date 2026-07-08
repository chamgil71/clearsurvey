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

        let target = initialUrl || null;
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

  return { projects, data, url, loading, error, switchProject };
}
