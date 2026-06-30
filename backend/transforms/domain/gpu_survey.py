import re

NUMERIC_TRANSFORMS = {"jang", "n_jang", "o_binary"}

_NO_GPU_VALS = {"없음", "없슴", "없습니다", "미보유", "미사용",
                "현재 보유중이지 않음", "0장 규모", "0장"}
_ZERO_JANG   = {"0", "0장", "해당없음", "필요없음", "없음"}


def parse_gpu_usage(val) -> tuple[str, str]:
    if not val:
        return "", ""
    v = str(val)
    if "미사용" in v:
        return "미사용", ""
    if "자체" in v and "외부" in v:
        detail = "자체서버+외부임차"
    elif "자체" in v:
        detail = "자체서버"
    elif "외부" in v or "임차" in v or "클라우드" in v:
        detail = "외부임차"
    else:
        detail = ""
    return "사용중", detail


def extract_n_jang(val) -> int | str:
    if val is None:
        return 0
    s = str(val).strip()
    if s in _NO_GPU_VALS or re.match(r"^0[,\s]", s) or s == "0":
        return 0
    for pattern in [
        r"[xX×]\s*(\d+(?:\.\d+)?)",
        r"(\d+(?:\.\d+)?)\s*장",
        r"^(\d+(?:\.\d+)?)$",
        r"(\d+(?:\.\d+)?)~\d+\s*장",
        r"^(\d+(?:\.\d+)?)~",
    ]:
        m = re.search(pattern, s)
        if m:
            n = float(m.group(1))
            return int(n) if n == int(n) else n
    return ""


def extract_jang(primary, backup=None, jang_cfg: dict | None = None) -> int | str:
    cfg            = jang_cfg or {}
    range_strategy = cfg.get("range_strategy", "max")
    dae_mul        = int(cfg.get("dae_multiplier", 0))
    prefer_jang    = cfg.get("prefer_jang_over_dae", True)

    for val in [primary, backup]:
        if val is None:
            continue
        s = str(val).strip()
        if not s:
            continue
        if s in _ZERO_JANG:
            return 0

        if prefer_jang:
            m = re.search(r"(\d+)~(\d+)\s*장", s)
            if m:
                return int(m.group(2)) if range_strategy == "max" else int(m.group(1))
            m = re.search(r"(\d+)\s*장\s*이상", s)
            if m:
                return int(m.group(1))
            m = re.search(r"(\d+)\s*장", s)
            if m:
                return int(m.group(1))
        else:
            m_dae = re.search(r"(\d+)\s*대", s)
            if m_dae and dae_mul:
                return int(m_dae.group(1)) * dae_mul
            m = re.search(r"(\d+)\s*장\s*이상", s)
            if m:
                return int(m.group(1))
            m = re.search(r"(\d+)~(\d+)\s*장", s)
            if m:
                return int(m.group(2)) if range_strategy == "max" else int(m.group(1))
            m = re.search(r"(\d+)\s*장", s)
            if m:
                return int(m.group(1))

        m = re.match(r"^(\d+(?:\.\d+)?)$", s)
        if m:
            v = float(m.group(1))
            return int(v) if v == int(v) else v

        m_dae = re.search(r"(\d+)\s*대", s)
        if m_dae:
            if dae_mul:
                return int(m_dae.group(1)) * dae_mul
            else:
                continue

    return ""


def clean_ac(val) -> str:
    if not val:
        return ""
    result = []
    for part in str(val).split(","):
        p = re.sub(r"기타\s*:\s*", "", part.strip())
        if "변동" in p:
            result.append("0%")
            continue
        m = re.search(r"(\d+(?:~\d+)?\s*%)", p)
        if m:
            result.append(m.group(1).replace(" ", ""))
    return ", ".join(result) if result else str(val)


def _jang_transform(val, backup_val=None, jang_cfg: dict | None = None, **kw):
    result = extract_jang(val, backup_val, jang_cfg)
    return result if result != "" else None


# 레지스트리에 등록될 딕셔너리
_TRANSFORMS: dict = {
    "gpu_usage_type":  lambda val, **kw: parse_gpu_usage(val)[0] or None,
    "gpu_usage_detail": lambda val, **kw: parse_gpu_usage(val)[1] or None,
    "n_jang":          lambda val, **kw: extract_n_jang(val),
    "jang":            _jang_transform,
    "clean_ac":        lambda val, **kw: clean_ac(val),
}
