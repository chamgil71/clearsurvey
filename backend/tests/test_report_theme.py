"""report_theme.py — 독립 HTML 보고서용 oklch→hex 테마 색 추출 테스트.

프론트 frontend/scripts/lib/color.mjs::oklchToRgb 와 같은 행렬을 쓰므로,
알려진 실제 브랜드 hex 값(예: Airbnb #FF385C)으로 왕복 정확도를 검증한다.
"""
from __future__ import annotations

from pathlib import Path

import pytest

from app.report_theme import get_report_theme, _oklch_to_hex, _parse_root_vars

_FRONTEND_ROOT = Path(__file__).resolve().parents[2] / "frontend"


def test_oklch_to_hex_matches_known_airbnb_brand_color():
    # airbnb.css의 --primary: oklch(0.658 0.231 17.074) → 실제 Airbnb 브랜드색 #FF385C
    assert _oklch_to_hex(0.658, 0.231, 17.074) == "#ff385c"


def test_parse_root_vars_only_reads_first_root_block_not_dark():
    css = """
    :root {
      --primary: oklch(0.5 0.1 10);
    }
    .dark {
      --primary: oklch(0.9 0.1 10);
    }
    """
    vars_ = _parse_root_vars(css)
    assert vars_["primary"] == "oklch(0.5 0.1 10)"


@pytest.mark.skipif(not _FRONTEND_ROOT.exists(), reason="frontend/ 디렉터리 없음")
def test_get_report_theme_reads_real_airbnb_css():
    result = get_report_theme("airbnb", _FRONTEND_ROOT)
    assert result["primary"] == "#ff385c"
    assert len(result["chart"]) == 5
    assert all(c.startswith("#") and len(c) == 7 for c in result["chart"])


def test_get_report_theme_falls_back_to_default_for_unknown_preset(tmp_path):
    result = get_report_theme("no_such_preset_xyz", tmp_path)
    assert result["primary"] == "#2563eb"
    assert len(result["chart"]) == 5


def test_get_report_theme_falls_back_when_preset_is_none(tmp_path):
    result = get_report_theme(None, tmp_path)
    assert result["primary"] == "#2563eb"
