"""독립 실행형 HTML 보고서(report_template.html)에 프로젝트 테마 색을 반영하기 위한
oklch → sRGB 변환 유틸리티.

frontend/src/theme/{preset}.css 의 :root 블록에 있는 --primary, --chart-1..5 값
(oklch(L C H) 형식)을 읽어 hex로 변환한다. 행렬은 frontend/scripts/lib/color.mjs 의
oklchToRgb 와 동일 — 두 코드가 같은 색을 내야 하므로 값이 어긋나면 그쪽부터 대조한다.
"""
from __future__ import annotations

import math
import re
from functools import lru_cache
from pathlib import Path

_ROOT_BLOCK_RE = re.compile(r":root\s*\{(.*?)\}", re.S)
_VAR_RE = re.compile(r"--([a-zA-Z0-9-]+)\s*:\s*([^;]+);")
_OKLCH_RE = re.compile(r"oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)")

_DEFAULT_CHART_HEX = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]
_DEFAULT_PRIMARY_HEX = "#2563eb"


def _clamp01(x: float) -> float:
    return max(0.0, min(1.0, x))


def _to_gamma(c: float) -> float:
    return 12.92 * c if c <= 0.0031308 else 1.055 * (c ** (1 / 2.4)) - 0.055


def _oklch_to_hex(L: float, C: float, h: float) -> str:
    hr = math.radians(h)
    a = C * math.cos(hr)
    b = C * math.sin(hr)

    l_ = L + 0.3963377774 * a + 0.2158037573 * b
    m_ = L - 0.1055613458 * a - 0.0638541728 * b
    s_ = L - 0.0894841775 * a - 1.291485548 * b
    l3, m3, s3 = l_ ** 3, m_ ** 3, s_ ** 3

    r_lin = 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3
    g_lin = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3
    b_lin = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3

    r = round(_clamp01(_to_gamma(r_lin)) * 255)
    g = round(_clamp01(_to_gamma(g_lin)) * 255)
    b_ = round(_clamp01(_to_gamma(b_lin)) * 255)
    return f"#{r:02x}{g:02x}{b_:02x}"


def _parse_root_vars(css_text: str) -> dict[str, str]:
    """첫 번째 :root {...} 블록(라이트 모드)의 커스텀 프로퍼티만 뽑는다."""
    m = _ROOT_BLOCK_RE.search(css_text)
    if not m:
        return {}
    return {name: value.strip() for name, value in _VAR_RE.findall(m.group(1))}


@lru_cache(maxsize=64)
def get_report_theme(preset: str | None, frontend_root: Path) -> dict:
    """프리셋의 primary·chart 팔레트를 hex로 반환. 못 찾으면 기본값(파랑 계열)."""
    result = {"primary": _DEFAULT_PRIMARY_HEX, "chart": list(_DEFAULT_CHART_HEX)}
    if not preset:
        return result

    css_path = frontend_root / "src" / "theme" / f"{preset}.css"
    if not css_path.exists():
        return result

    try:
        css_text = css_path.read_text(encoding="utf-8")
    except OSError:
        return result

    vars_ = _parse_root_vars(css_text)

    def _resolve(var_name: str) -> str | None:
        raw = vars_.get(var_name)
        if not raw:
            return None
        m = _OKLCH_RE.search(raw)
        if not m:
            return None
        L, C, h = (float(x) for x in m.groups())
        return _oklch_to_hex(L, C, h)

    primary = _resolve("primary")
    if primary:
        result["primary"] = primary

    chart = [c for i in range(1, 6) if (c := _resolve(f"chart-{i}"))]
    if chart:
        result["chart"] = chart

    return result
