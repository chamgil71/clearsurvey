"""
Tests for app/git_sync.py — 발행 가드 (dashboard_edit_plan §6.3 · 11단계)

**계획이 "가드 테스트가 먼저 통과해야 한다"고 못박은 부분이다.**
multi_pc_data_sync.md §3 이 금지하는 동작("원본 없는 PC 에서 커밋·푸시 → 원래 PC 발행물을
덮어씀")에 손이 닿는 기능이라, 가드가 실제로 무는지가 기능보다 중요하다.

진짜 git 저장소를 만들어 검사한다 — mock 으로는 "정말 막히는가"를 알 수 없다.

실행: pytest tests/test_git_sync.py -v
"""
from __future__ import annotations

import subprocess
from pathlib import Path

import pytest

from app.git_sync import DeployBlocked, deploy, guard_remote_not_ahead, guard_source_exists


def _git(repo: Path, *args, check=True):
    return subprocess.run(
        ["git", *args], cwd=str(repo), capture_output=True, text=True,
        encoding="utf-8", errors="replace", check=check,
    )


@pytest.fixture
def repos(tmp_path):
    """origin(bare) + 로컬 클론. 발행 대상 파일까지 갖춰둔다."""
    origin = tmp_path / "origin.git"
    origin.mkdir()
    _git(origin, "init", "--bare", "--initial-branch=main")

    repo = tmp_path / "work"
    _git(tmp_path, "clone", str(origin), "work")
    _git(repo, "config", "user.email", "t@t")
    _git(repo, "config", "user.name", "t")

    data = repo / "frontend" / "public" / "data"
    data.mkdir(parents=True)
    (data / "p_data.json").write_text('{"rows":[]}', encoding="utf-8")
    (data / "projects.json").write_text("[]", encoding="utf-8")
    _git(repo, "add", "-A")
    _git(repo, "commit", "-m", "init")
    _git(repo, "push", "-u", "origin", "main")

    proj = repo / "storage" / "projects" / "p"
    proj.mkdir(parents=True)
    (proj / "config.yaml").write_text("project: p", encoding="utf-8")
    raw = repo / "storage" / "raw" / "src.xlsx"
    raw.parent.mkdir(parents=True)
    raw.write_bytes(b"x")

    return {
        "origin": origin, "repo": repo, "proj": proj, "raw": raw,
        "files": [data / "p_data.json", data / "projects.json"],
    }


def _touch(repos, text='{"rows":[1]}'):
    (repos["repo"] / "frontend/public/data/p_data.json").write_text(text, encoding="utf-8")


def _deploy(repos, **over):
    kw = dict(
        repo=repos["repo"], proj_dir=repos["proj"], raw_file=repos["raw"],
        files=repos["files"], project="p", edit_count=3,
    )
    kw.update(over)
    return deploy(**kw)


# ─────────────────────────────────────────────────────────────────────────────
# 가드 1 — 원본 존재 확인 (multi_pc §3 의 핵심 방어)
# ─────────────────────────────────────────────────────────────────────────────

class TestGuardSourceExists:
    def test_passes_when_both_present(self, repos):
        guard_source_exists(repos["proj"], repos["raw"])  # 예외 없음

    def test_blocks_without_config(self, repos, tmp_path):
        empty = tmp_path / "storage" / "projects" / "gone"
        empty.mkdir(parents=True)
        with pytest.raises(DeployBlocked, match="레시피"):
            guard_source_exists(empty, repos["raw"])

    def test_blocks_without_raw(self, repos):
        with pytest.raises(DeployBlocked, match="원본 엑셀"):
            guard_source_exists(repos["proj"], None)

    def test_blocks_when_raw_path_missing(self, repos):
        with pytest.raises(DeployBlocked, match="원본 엑셀"):
            guard_source_exists(repos["proj"], repos["repo"] / "storage/raw/없는파일.xlsx")

    def test_deploy_blocked_on_empty_pc(self, repos, tmp_path):
        """★ 원본 없는 PC 에서는 발행 자체가 안 된다 — 이게 금지선이다."""
        _touch(repos)
        empty = tmp_path / "storage" / "projects" / "gone"
        empty.mkdir(parents=True)
        with pytest.raises(DeployBlocked):
            _deploy(repos, proj_dir=empty)
        # 아무것도 커밋되지 않았다
        assert _git(repos["repo"], "status", "--porcelain").stdout.strip() != ""


# ─────────────────────────────────────────────────────────────────────────────
# 가드 3 — 원격 선행 확인
# ─────────────────────────────────────────────────────────────────────────────

class TestGuardRemoteNotAhead:
    def test_passes_when_in_sync(self, repos):
        guard_remote_not_ahead(repos["repo"])

    def test_blocks_when_remote_ahead(self, repos, tmp_path):
        """★ 다른 PC 가 먼저 발행했으면 덮어쓰지 않는다."""
        other = tmp_path / "other"
        _git(tmp_path, "clone", str(repos["origin"]), "other")
        _git(other, "config", "user.email", "o@o")
        _git(other, "config", "user.name", "o")
        (other / "frontend/public/data/p_data.json").write_text('{"rows":[9]}', encoding="utf-8")
        _git(other, "add", "-A")
        _git(other, "commit", "-m", "다른 PC 의 발행")
        _git(other, "push")

        with pytest.raises(DeployBlocked, match="원격에 내가 받지 않은 커밋"):
            guard_remote_not_ahead(repos["repo"])

    def test_deploy_blocked_when_remote_ahead(self, repos, tmp_path):
        other = tmp_path / "other"
        _git(tmp_path, "clone", str(repos["origin"]), "other")
        _git(other, "config", "user.email", "o@o")
        _git(other, "config", "user.name", "o")
        (other / "frontend/public/data/p_data.json").write_text('{"rows":[9]}', encoding="utf-8")
        _git(other, "add", "-A")
        _git(other, "commit", "-m", "다른 PC")
        _git(other, "push")

        _touch(repos)
        with pytest.raises(DeployBlocked, match="덮어쓸"):
            _deploy(repos)

    def test_blocks_without_upstream(self, repos):
        _git(repos["repo"], "checkout", "-b", "no-upstream")
        with pytest.raises(DeployBlocked, match="upstream"):
            guard_remote_not_ahead(repos["repo"])


# ─────────────────────────────────────────────────────────────────────────────
# 가드 2 — 경로 제한
# ─────────────────────────────────────────────────────────────────────────────

class TestGuardPathLimit:
    def test_unrelated_changes_are_not_committed(self, repos):
        """★ 발행이 남의 작업물을 커밋하면 안 된다."""
        _touch(repos)
        stray = repos["repo"] / "backend" / "secret.py"
        stray.parent.mkdir(parents=True, exist_ok=True)
        stray.write_text("# 작업 중인 코드", encoding="utf-8")

        _deploy(repos)

        files = _git(repos["repo"], "show", "--name-only", "--format=", "HEAD").stdout.split()
        assert files == ["frontend/public/data/p_data.json"]
        assert "secret.py" not in " ".join(files)
        # 손대지 않은 채로 남아 있다
        assert stray.exists()

    def test_blocks_when_staging_area_dirty(self, repos):
        """이미 스테이징된 게 있으면 우리 커밋에 섞인다 — 멈추고 사람에게 맡긴다."""
        _touch(repos)
        stray = repos["repo"] / "backend" / "other.py"
        stray.parent.mkdir(parents=True, exist_ok=True)
        stray.write_text("x", encoding="utf-8")
        _git(repos["repo"], "add", "backend/other.py")

        with pytest.raises(DeployBlocked, match="발행 대상이 아닌 변경"):
            _deploy(repos)

    def test_staging_is_reset_after_block(self, repos):
        """막았으면 스테이징도 원상복구해야 한다 — 다음 시도가 오염되면 안 된다."""
        _touch(repos)
        stray = repos["repo"] / "backend" / "other.py"
        stray.parent.mkdir(parents=True, exist_ok=True)
        stray.write_text("x", encoding="utf-8")
        _git(repos["repo"], "add", "backend/other.py")
        with pytest.raises(DeployBlocked):
            _deploy(repos)
        assert _git(repos["repo"], "diff", "--cached", "--name-only").stdout.strip() == ""


# ─────────────────────────────────────────────────────────────────────────────
# 정상 발행
# ─────────────────────────────────────────────────────────────────────────────

class TestDeploy:
    def test_commits_and_pushes(self, repos):
        _touch(repos)
        r = _deploy(repos)
        assert r.committed and r.pushed
        assert "data(p): 대시보드 편집 반영 (3건)" in r.detail

        # 원격에 실제로 올라갔다
        log = _git(repos["origin"], "log", "--format=%s", "-1").stdout.strip()
        assert log == "data(p): 대시보드 편집 반영 (3건)"

    def test_no_changes_is_not_an_error(self, repos):
        r = _deploy(repos)  # 파일을 안 고쳤다
        assert r.committed is False and r.pushed is False
        assert "변경 사항이 없습니다" in r.detail

    def test_one_commit_per_deploy(self, repos):
        """저장 N 회 → 발행 1 회 = 커밋 1개 (§6 의 존재 이유)."""
        before = len(_git(repos["repo"], "log", "--format=%h").stdout.split())
        for i in range(5):  # 편집 5회를 흉내
            _touch(repos, f'{{"rows":[{i}]}}')
        _deploy(repos)
        after = len(_git(repos["repo"], "log", "--format=%h").stdout.split())
        assert after - before == 1

    def test_push_failure_keeps_commit(self, repos):
        """푸시가 거부돼도 편집·커밋은 살린다 — 로컬 데이터는 이미 갱신됐다.

        원격이 푸시를 거부하는 상황(권한·훅·보호 브랜치)을 pre-receive 훅으로 흉내낸다.
        fetch 는 성공해야 가드 3 을 통과해 push 까지 도달한다.
        """
        hook = repos["origin"] / "hooks" / "pre-receive"
        hook.parent.mkdir(exist_ok=True)
        hook.write_text("#!/bin/sh\necho '거부됨' >&2\nexit 1\n", encoding="utf-8", newline="\n")
        hook.chmod(0o755)

        _touch(repos)
        r = _deploy(repos)
        assert r.committed is True   # 커밋은 남는다
        assert r.pushed is False
        assert "푸시에 실패" in r.detail

    def test_unreachable_remote_blocks_before_commit(self, repos):
        """원격을 확인조차 못 하면 커밋도 하지 않는다 — 가드 3 이 먼저 막는다."""
        _touch(repos)
        _git(repos["repo"], "remote", "set-url", "origin", str(repos["repo"] / "없는원격.git"))
        before = _git(repos["repo"], "rev-parse", "HEAD").stdout.strip()
        with pytest.raises(DeployBlocked, match="원격 상태를 확인하지 못했습니다"):
            _deploy(repos)
        assert _git(repos["repo"], "rev-parse", "HEAD").stdout.strip() == before
