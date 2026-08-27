/**
 * PublicDataAuditPanel — frontend/public/data/ 고아 파일(매니페스트 미등록) 점검 UI.
 *
 * 배경: published=false 는 앱 화면·?data= 딥링크만 가려줄 뿐이라, 매니페스트에 아예
 * 등록되지 않은 파일은 URL을 아는 사람에게 그대로 열람된다. 이 패널은 그 고아 파일을
 * 찾아 보여주고 삭제할 수 있게 한다 — 핵심은 "정말 삭제 API를 호출하는가"와
 * "정상 상태면 위험 표시를 하지 않는가"이다.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PublicDataAuditPanel } from "@/components/manager/PublicDataAuditPanel";
import type { PublicDataAudit } from "@/hooks/useManagerApi";

const auditPublicData = vi.fn();
const cleanupPublicData = vi.fn();

vi.mock("@/hooks/useManagerApi", () => ({
  useManagerApi: () => ({
    auditPublicData,
    cleanupPublicData,
  }),
}));

const cleanResult: PublicDataAudit = {
  orphans: [],
  broken: [],
  unpublished_but_deployed: [],
  disk_count: 3,
  manifest_count: 3,
};

const orphanResult: PublicDataAudit = {
  orphans: ["leaked_data.json"],
  broken: [],
  unpublished_but_deployed: [],
  disk_count: 4,
  manifest_count: 3,
};

beforeEach(() => {
  auditPublicData.mockReset();
  cleanupPublicData.mockReset();
});

describe("PublicDataAuditPanel", () => {
  it("백엔드가 꺼져 있으면 아무것도 렌더링하지 않는다", () => {
    const { container } = render(<PublicDataAuditPanel isBackendAlive={false} />);
    expect(container).toBeEmptyDOMElement();
    expect(auditPublicData).not.toHaveBeenCalled();
  });

  it("마운트 시 자동으로 점검하고, 문제 없으면 정상 상태를 보여준다", async () => {
    auditPublicData.mockResolvedValue(cleanResult);
    render(<PublicDataAuditPanel isBackendAlive={true} />);

    await waitFor(() => expect(auditPublicData).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(/정상 — 고아 파일·깨진 참조 없음/)).toBeInTheDocument();
  });

  it("고아 파일이 있으면 목록에 보여주고, 삭제 클릭 시 cleanupPublicData를 호출한다", async () => {
    const user = userEvent.setup();
    auditPublicData.mockResolvedValue(orphanResult);
    cleanupPublicData.mockResolvedValue({
      deleted: ["leaked_data.json"],
      skipped: [],
      audit: cleanResult,
    });
    vi.spyOn(window, "confirm").mockReturnValue(true);

    render(<PublicDataAuditPanel isBackendAlive={true} />);

    expect(await screen.findByText("leaked_data.json")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "삭제" }));

    expect(cleanupPublicData).toHaveBeenCalledWith(["leaked_data.json"]);
    // 삭제 후 반환된 audit(clean)으로 갱신되어 정상 문구가 다시 보여야 한다.
    expect(await screen.findByText(/정상 — 고아 파일·깨진 참조 없음/)).toBeInTheDocument();
  });

  it("사용자가 삭제 확인을 취소하면 cleanupPublicData를 호출하지 않는다", async () => {
    const user = userEvent.setup();
    auditPublicData.mockResolvedValue(orphanResult);
    vi.spyOn(window, "confirm").mockReturnValue(false);

    render(<PublicDataAuditPanel isBackendAlive={true} />);

    await user.click(await screen.findByRole("button", { name: "삭제" }));

    expect(cleanupPublicData).not.toHaveBeenCalled();
  });
});
