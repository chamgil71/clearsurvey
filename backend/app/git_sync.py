"""발행(deploy) — 편집된 대시보드를 git 으로 밀어 Vercel 에 반영한다.

**이 모듈은 이 계획에서 가장 위험한 부분이다.**
`docs/guides/multi_pc_data_sync.md` §3 은 "원본·레시피가 없는 PC 에서 export/빌드로
`frontend/public/data` 를 재생성 후 커밋·푸시"를 **명시적으로 금지**한다 — 원래 PC 의
발행물을 덮어쓰고 Vercel 을 비우기 때문이다. 발행 버튼은 그 금지선에 손이 닿는 곳에 있다.

그래서 가드가 기능보다 먼저다. §6.3 의 3종:
  1. 원본 존재 확인 — 빈 PC 의 커밋을 원천 차단 (multi_pc §3 의 핵심 방어)
  2. 경로 제한 — data.json 과 projects.json 딱 둘만 스테이징
  3. 원격 선행 확인 — 원격이 앞서 있으면 푸시하지 않는다 (자동 rebase/force 없음)

**왜 자동 푸시가 아니라 버튼인가**: 저장마다 푸시하면 Vercel 배포와 원격 충돌 기회가 편집
횟수만큼 생긴다. 「발행」은 "지금 내보낸다"는 사람의 판단 그 자체다.

상세: docs/plan/pending/dashboard_edit_plan.md §6
"""
from __future__ import annotations

import subprocess
from dataclasses import dataclass
from pathlib import Path


class DeployBlocked(Exception):
    """가드에 걸려 발행하지 않았다. 사용자에게 이유를 그대로 보여준다."""


@dataclass
class DeployResult:
    pushed: bool
    committed: bool
    detail: str
    files: list[str]


def _git(repo: Path, *args: str, check: bool = True) -> subprocess.CompletedProcess:
    return subprocess.run(
        ["git", *args],
        cwd=str(repo),
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        check=check,
    )


# ---------------------------------------------------------------------------
# 가드
# ---------------------------------------------------------------------------

def guard_source_exists(proj_dir: Path, raw_file: Path | None) -> None:
    """가드 1 — 이 PC 가 그 프로젝트의 **원본과 레시피를 실제로 갖고 있는가**.

    이게 multi_pc §3 이 말하는 핵심 방어다. 원본 없는 PC 에서 만든 data.json 은 빈/다른
    데이터일 수 있고, 그걸 푸시하면 원래 PC 의 발행물을 덮어쓴다.
    """
    if not (proj_dir / "config.yaml").exists():
        raise DeployBlocked(
            f"이 PC 에 '{proj_dir.name}' 의 레시피(config.yaml)가 없습니다. "
            f"원본이 있는 PC 에서 발행하세요 — 여기서 발행하면 원래 발행물을 덮어씁니다."
        )
    if raw_file is None or not raw_file.exists():
        raise DeployBlocked(
            f"이 PC 에 '{proj_dir.name}' 의 원본 엑셀이 없습니다. "
            f"원본이 있는 PC 에서 발행하세요 — 여기서 발행하면 원래 발행물을 덮어씁니다."
        )


def guard_remote_not_ahead(repo: Path) -> None:
    """가드 3 — 원격이 앞서 있으면 **푸시하지 않는다**.

    자동 rebase 나 force 는 하지 않는다. 여기서 자동으로 풀면 다른 PC 의 발행물과 섞여
    무엇이 맞는지 아무도 모르게 된다 — 사람이 판단할 문제다.
    """
    fetch = _git(repo, "fetch", "--quiet", check=False)
    if fetch.returncode != 0:
        raise DeployBlocked(
            f"원격 상태를 확인하지 못했습니다(네트워크·인증). 발행을 중단합니다.\n{fetch.stderr.strip()}"
        )

    upstream = _git(repo, "rev-parse", "--abbrev-ref", "@{upstream}", check=False)
    if upstream.returncode != 0:
        raise DeployBlocked("현재 브랜치에 원격(upstream)이 없습니다.")

    counts = _git(repo, "rev-list", "--left-right", "--count", "@{upstream}...HEAD", check=False)
    if counts.returncode != 0:
        raise DeployBlocked("원격과 로컬의 차이를 계산하지 못했습니다.")
    behind, ahead = (int(x) for x in counts.stdout.split())
    if behind > 0:
        raise DeployBlocked(
            f"원격에 내가 받지 않은 커밋이 {behind}개 있습니다. 다른 PC 에서 발행했을 수 있습니다.\n"
            f"지금 발행하면 그 결과를 덮어쓸 수 있으니, 먼저 `git pull` 로 확인하세요."
        )


def _staged_paths(repo: Path, files: list[Path]) -> list[str]:
    return [str(f.relative_to(repo)).replace("\\", "/") for f in files]


# ---------------------------------------------------------------------------
# 발행
# ---------------------------------------------------------------------------

def deploy(
    repo: Path,
    proj_dir: Path,
    raw_file: Path | None,
    files: list[Path],
    project: str,
    edit_count: int,
) -> DeployResult:
    """가드 3종을 통과하면 커밋·푸시한다.

    files: 커밋할 파일 (data.json, projects.json). **여기 없는 건 절대 스테이징하지 않는다.**
    """
    guard_source_exists(proj_dir, raw_file)          # 가드 1
    guard_remote_not_ahead(repo)                     # 가드 3

    existing = [f for f in files if f.exists()]
    if not existing:
        raise DeployBlocked("발행할 파일이 없습니다. 먼저 정제·내보내기를 수행하세요.")

    rel = _staged_paths(repo, existing)

    # 가드 2 — 경로 제한. `git add -A` 를 쓰지 않는다. 사용자의 다른 작업물이 딸려가면
    # 발행이 남의 코드를 커밋하는 사고가 된다.
    _git(repo, "add", "--", *rel)

    staged = _git(repo, "diff", "--cached", "--name-only", check=False).stdout.split()
    unexpected = [p for p in staged if p not in rel]
    if unexpected:
        # 스테이징 영역에 이미 다른 게 올라와 있었다 — 우리 커밋에 섞이면 안 된다.
        _git(repo, "reset", "--quiet", check=False)
        raise DeployBlocked(
            f"스테이징 영역에 발행 대상이 아닌 변경이 있습니다: {unexpected[:5]}\n"
            f"먼저 커밋하거나 `git reset` 으로 비운 뒤 다시 시도하세요."
        )

    if not staged:
        return DeployResult(pushed=False, committed=False, detail="변경 사항이 없습니다.", files=rel)

    msg = f"data({project}): 대시보드 편집 반영 ({edit_count}건)"
    commit = _git(repo, "commit", "-m", msg, check=False)
    if commit.returncode != 0:
        raise DeployBlocked(f"커밋 실패:\n{commit.stderr.strip() or commit.stdout.strip()}")

    push = _git(repo, "push", check=False)
    if push.returncode != 0:
        # 커밋은 남기고 실패를 알린다 — 로컬 데이터는 이미 갱신됐으므로 되돌리지 않는다.
        return DeployResult(
            pushed=False,
            committed=True,
            detail=f"커밋했지만 푸시에 실패했습니다:\n{push.stderr.strip()}",
            files=rel,
        )

    return DeployResult(pushed=True, committed=True, detail=msg, files=rel)
