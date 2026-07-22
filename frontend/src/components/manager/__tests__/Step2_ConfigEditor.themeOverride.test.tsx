/**
 * Step2_ConfigEditor — 저장 시 이 브라우저의 공개 대시보드 테마 오버라이드를 지운다.
 *
 * 관리자가 설정 화면에서 테마를 저장하면, 같은 브라우저의 공개 대시보드 헤더에서
 * 예전에 실험 삼아 골라둔 테마(localStorage `theme-preset-override-{project}`)가
 * 그 저장을 계속 가리는 버그가 있었다 — "저장했는데 왜 색이 안 바뀌지"로 보였다.
 * 저장 시점에 이 키를 지워 방금 저장한 값이 이 브라우저에도 곧바로 보이게 한다.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Step2_ConfigEditor } from "@/components/manager/Step2_ConfigEditor";
import type { ProjectConfig } from "@/hooks/useManagerApi";

vi.mock("@/hooks/useManagerApi", () => ({
  useManagerApi: () => ({
    previewProjectConfig: vi.fn(),
  }),
}));

const baseConfig: ProjectConfig = {
  project: "demo",
  paths: { output_dir: "storage/projects/demo", output_file: "demo.xlsx" },
  source: { header_row: 1 },
  columns: [],
};

beforeEach(() => {
  localStorage.clear();
});

describe("Step2_ConfigEditor — 저장 시 테마 오버라이드 정리", () => {
  it("'저장 후 실행 화면으로' 클릭 시 theme-preset-override-{project} 를 지운다", async () => {
    localStorage.setItem("theme-preset-override-demo", "airbnb");

    render(
      <Step2_ConfigEditor
        projectName="demo"
        config={{ config: baseConfig, dashboard: null }}
        onSaveConfig={vi.fn().mockResolvedValue(undefined)}
        onBack={vi.fn()}
        onNext={vi.fn()}
        onNextAndRun={vi.fn()}
        loading={false}
      />,
    );

    fireEvent.click(screen.getByText("저장 후 실행 화면으로"));

    await waitFor(() => {
      expect(localStorage.getItem("theme-preset-override-demo")).toBeNull();
    });
  });

  it("저장 없이는(초기 렌더만으로는) 오버라이드를 건드리지 않는다", () => {
    localStorage.setItem("theme-preset-override-demo", "airbnb");

    render(
      <Step2_ConfigEditor
        projectName="demo"
        config={{ config: baseConfig, dashboard: null }}
        onSaveConfig={vi.fn().mockResolvedValue(undefined)}
        onBack={vi.fn()}
        onNext={vi.fn()}
        onNextAndRun={vi.fn()}
        loading={false}
      />,
    );

    expect(localStorage.getItem("theme-preset-override-demo")).toBe("airbnb");
  });
});
