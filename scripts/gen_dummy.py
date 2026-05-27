"""
Generate dummy Excel files for testing.
  - storage/dummy_gpu_survey.xlsx   (400 rows, anonymized GPU survey)
  - storage/dummy_budget.xlsx       (budget with changed codes + 2 new groups)

Run: python scripts/gen_dummy.py
"""
from __future__ import annotations

import random
import sys
import io
import zipfile
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
from pathlib import Path

import openpyxl
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

STORAGE = Path(__file__).parent.parent / "storage"
random.seed(42)

# ──────────────────────────────────────────────────────────────────────────────
# Pool data
# ──────────────────────────────────────────────────────────────────────────────

ORG_TYPES = [
    ("산업계(중소기업)", 0.50),
    ("산업계(중견기업)", 0.10),
    ("산업계(대기업)", 0.08),
    ("학계(대학, 대학원 등)", 0.15),
    ("연구계(출연연 등 연구기관)", 0.10),
    ("기타: 스타트업기업", 0.04),
    ("기타: IT", 0.03),
]
REGIONS = [
    ("서울", 0.35), ("경기 및 인천", 0.20), ("대전·세종·충청", 0.10),
    ("부산·울산·경남", 0.08), ("대구·경북", 0.06), ("광주·전남·전북", 0.07),
    ("강원", 0.04), ("기타: 서울, 대전 2곳", 0.01),
]
GPU_STATUS = [
    ("사용중 - 외부 임차(클라우드, 센터 등)", 0.35),
    ("사용중 - 자체 서버 보유", 0.25),
    ("사용 중 - 자체서버 + 외부 임차 병행", 0.25),
    ("미사용(현재 GPU를 사용하지 않음)", 0.15),
]
GPU_USAGE_PURPOSES = [
    "대규모 AI 모델 학습",
    "알고리즘 검증·고도화",
    "추론 서비스 운영",
    "데이터 전처리/분석",
    "기타",
]
SERVICE_FIELDS = [
    "범용 (General Purpose)",
    "특화산업 AI(제조·금융·의료·농업 등)",
    "멀티모달 (텍스트,이미지,영상 등)",
    "언어모델 (LLM,sLLM·번역 등)",
    "피지컬 AI(로보틱스·자율주행·드론 등)",
    "기타",
]
GPU_MODELS = ["NVIDIA H100", "NVIDIA H200", "NVIDIA B100", "NVIDIA B200"]
GPU_SUPPORT_TIMING = [
    "즉시(현재 필요)",
    "'26년 상반기(2026년 1~6월)",
    "'26년 하반기(2026년 7~12월)",
    "'27년 이후",
]
USAGE_PERIOD = [
    "6개월 이하", "7개월~12개월", "13개월~18개월",
    "19개월~24개월", "24개월 초과",
]
GROWTH_RATE = [
    "변동 없음", "20%이내", "40%이내", "60%이내",
    "80% 이내", "기타: 100% 이상",
]

COMPANY_PREFIXES = [
    "주식회사", "(주)", "㈜", "유한회사", "재단법인", "사단법인", "",
]
COMPANY_WORDS = [
    "딥러닝", "에이아이", "테크", "솔루션", "인텔리전스", "데이터", "클라우드",
    "넥스트", "스마트", "디지털", "이노베이션", "코리아", "글로벌", "시스템",
    "네트웍스", "소프트", "랩스", "리서치", "모빌리티", "헬스", "바이오",
    "파이낸스", "미디어", "에너지", "로직", "비전", "퓨처", "사이버", "하이텍",
    "엔터프라이즈", "어드밴스드", "프리미엄", "인사이트", "크리에이티브",
    "엔진", "플랫폼", "인프라", "네오", "알파", "베타", "제타",
]
DEPT_NAMES = [
    "AI개발팀", "기업부설연구소", "연구전담부서", "데이터사이언스팀",
    "Data Lab", "AI플랫폼팀", "ML엔지니어링팀", "R&D본부", "기술연구소",
    "AI전략팀", "인프라팀", "클라우드팀", "개발팀", "솔루션사업부",
]
POSITIONS = [
    "대표이사", "이사", "부장", "팀장", "과장", "차장", "수석연구원",
    "책임연구원", "선임연구원", "연구원", "사원", "매니저",
]
SURNAMES = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권"]
GIVEN_NAMES = [
    "민준", "서준", "도윤", "예준", "시우", "주원", "하준", "지호", "준서", "준우",
    "지수", "서연", "지아", "하은", "서현", "민서", "지유", "윤서", "채원", "수아",
    "성민", "현우", "태양", "동현", "민혁", "진우", "재원", "성호", "승현", "종환",
]
ADDR_DISTRICTS = [
    ("서울", ["강남구 테헤란로", "서초구 강남대로", "마포구 상암로", "강서구 마곡중앙로",
              "송파구 올림픽로", "영등포구 여의대로", "중구 을지로", "종로구 종로"]),
    ("경기", ["성남시 분당구 판교로", "수원시 영통구 삼성로", "안양시 동안구 관악대로",
              "화성시 동탄반석로", "용인시 기흥구 공세로"]),
    ("인천", ["연수구 송도과학로", "서구 청라커낼로", "남동구 인주대로"]),
    ("대전", ["유성구 대학로", "서구 둔산대로", "중구 대종로"]),
    ("부산", ["해운대구 센텀중앙로", "사상구 학감대로", "남구 문현금융로"]),
    ("대구", ["달서구 성서공단로", "수성구 범어로", "북구 산격동"]),
    ("광주", ["광산구 하남산단", "서구 치평동", "북구 오룡동"]),
    ("강원", ["춘천시 강원대학길", "원주시 혁신로", "강릉시 범일로"]),
    ("충청", ["청주시 흥덕구", "천안시 서북구", "아산시 탕정면"]),
]
ADDR_BLDG = [
    "AI타워 {f}층", "테크센터 {f}층", "비즈파크 {f}층", "{f}층",
    "혁신센터 {f}호", "스타트업파크 {f}호", "디지털타워 {f}층",
]


def _weighted_choice(pool):
    items = [x[0] for x in pool]
    weights = [x[1] for x in pool]
    return random.choices(items, weights=weights, k=1)[0]


def _multi_choice(options, min_n=1, max_n=3):
    n = random.randint(min_n, min(max_n, len(options)))
    return random.sample(options, n)


def _gen_brn():
    return f"{random.randint(100,999)}-{random.randint(10,99)}-{random.randint(10000,99999)}"


def _gen_company():
    prefix = random.choice(COMPANY_PREFIXES)
    word = random.choice(COMPANY_WORDS)
    suffix = random.choice(["", " 코리아", " 테크", " AI"])
    name = f"{word}{suffix}"
    return f"{prefix} {name}".strip() if prefix else name


def _gen_email(company: str) -> str:
    domain_words = ["ai", "tech", "data", "ml", "dev", "lab", "info", "co"]
    local = random.choice(["info", "contact", "admin", "ai", "research"])
    domain = f"{random.choice(domain_words)}-{random.randint(10,99)}"
    tld = random.choice(["co.kr", "ai", "io", "kr"])
    return f"{local}@{domain}.{tld}"


def _gen_address(region: str) -> str:
    # Pick matching region district
    for region_key, districts in ADDR_DISTRICTS:
        if region_key in region:
            district = random.choice(districts)
            num = random.randint(1, 500)
            floor = random.randint(2, 25)
            bldg = random.choice(ADDR_BLDG).format(f=floor)
            return f"{region_key} {district} {num}, {bldg}"
    district = random.choice(["테헤란로", "강남대로", "판교로"])
    return f"서울특별시 {district} {random.randint(1, 300)}"


def _gen_datetime(base_date="2026-05-06"):
    base = datetime.strptime(base_date, "%Y-%m-%d")
    offset_days = random.randint(0, 7)
    hour = random.randint(9, 18)
    minute = random.randint(0, 59)
    dt = base + timedelta(days=offset_days, hours=hour, minutes=minute)
    dur = timedelta(minutes=random.randint(3, 20))
    return dt.strftime("%Y-%m-%d %H:%M:%S"), (dt + dur).strftime("%Y-%m-%d %H:%M:%S")


def _gen_gpu_amount():
    choices = [0, 0, 0, 1, 2, 4, 4, 8, 8, 16, 16, 32, 64]
    return random.choice(choices)


def _gen_scale_desc():
    options = [None, "0", "0.5", "1장 규모", "2장", "4장 규모", "8장",
               "16장", "32장", "약 10장", "서버 1대", "rtx 5090", "약 100장"]
    return random.choice(options)


def _gen_timing():
    base = _multi_choice(GPU_SUPPORT_TIMING, min_n=1, max_n=3)
    # keep sorted
    order = {v: i for i, v in enumerate(GPU_SUPPORT_TIMING)}
    base.sort(key=lambda x: order.get(x, 99))
    return ", ".join(base)


def _gen_period():
    base = _multi_choice(USAGE_PERIOD, min_n=1, max_n=2)
    order = {v: i for i, v in enumerate(USAGE_PERIOD)}
    base.sort(key=lambda x: order.get(x, 99))
    return ", ".join(base)


def _gen_growth():
    base = _multi_choice(GROWTH_RATE, min_n=1, max_n=2)
    order = {v: i for i, v in enumerate(GROWTH_RATE)}
    base.sort(key=lambda x: order.get(x, 99))
    return ", ".join(base)


def _gen_row(idx: int) -> list:
    region = _weighted_choice(REGIONS)
    org_type = _weighted_choice(ORG_TYPES)
    gpu_status = _weighted_choice(GPU_STATUS)
    company = _gen_company()
    surname = random.choice(SURNAMES)
    given_name = random.choice(GIVEN_NAMES)
    name = f"{surname}{given_name}"
    dept = random.choice(DEPT_NAMES)
    position = random.choice(POSITIONS)
    start_dt, end_dt = _gen_datetime()
    brn = _gen_brn()
    email = _gen_email(company)
    address = _gen_address(region)

    # GPU models — pick 1-3
    selected_models = _multi_choice(GPU_MODELS, min_n=1, max_n=3)
    model_str = ", ".join(selected_models)

    def _has_model(key: str) -> bool:
        return any(key in m for m in selected_models)

    h100 = _gen_gpu_amount() if _has_model("H100") else 0
    h200 = _gen_gpu_amount() if _has_model("H200") else 0
    b100 = _gen_gpu_amount() if _has_model("B100") else 0
    b200 = _gen_gpu_amount() if _has_model("B200") else 0
    # ensure at least one non-zero when a model is selected
    if not any([h100, h200, b100, b200]):
        if _has_model("H100"):
            h100 = random.choice([1, 2, 4, 8])
        elif _has_model("H200"):
            h200 = random.choice([1, 2, 4, 8])
        elif _has_model("B100"):
            b100 = random.choice([1, 2, 4, 8])
        else:
            b200 = random.choice([1, 2, 4, 8])

    purposes = _multi_choice(GPU_USAGE_PURPOSES, min_n=1, max_n=4)
    purpose_str = ", ".join(purposes)
    services = _multi_choice(SERVICE_FIELDS, min_n=1, max_n=3)
    service_str = ", ".join(services)

    timing = _gen_timing()
    period = _gen_period()
    growth = _gen_growth()
    scale = _gen_scale_desc()

    comment_options = [
        "더 많은 지원을 바랍니다.", "의견 없음.", "감사합니다.", "장기 사용 허용 부탁드립니다.",
        "소형 모델 학습 지원도 필요합니다.", "추론용 GPU 지원이 필요합니다.",
        None, None, None,
    ]
    comment = random.choice(comment_options)

    return [
        idx,                  # 응답자ID
        brn,                  # 답변 ID
        start_dt,             # 시작일시
        end_dt,               # 종료일시
        org_type,             # 소속기관유형
        company,              # 기관명
        dept,                 # 부서명
        position,             # 직급
        name,                 # 성명
        email,                # 이메일
        address,              # 주소
        region,               # 소재지(지역)
        gpu_status,           # GPU 사용 현황
        scale,                # GPU 보유 규모 (H100 환산)
        purpose_str,          # GPU 활용 계획
        service_str,          # 서비스 분야
        model_str,            # GPU 기종 (col17)
        h100, h200, b100, b200,  # col18-21
        None, None, None, None, None,  # col22-26 (duplicate block, left blank)
        timing,               # GPU 지원 시기
        period,               # 희망 사용 기간
        growth,               # 이용량 증가율
        comment,              # 기타 의견
        "적격",               # 답변 적격성
    ]


# ──────────────────────────────────────────────────────────────────────────────
# Build GPU survey dummy xlsx
# ──────────────────────────────────────────────────────────────────────────────

def build_gpu_survey(n_rows: int = 400) -> Path:
    src = STORAGE / "sampledata.xlsx"
    wb_src = openpyxl.load_workbook(src, data_only=True)
    ws_src = wb_src["all responses"]

    wb = Workbook()
    wb.remove(wb.active)

    ws = wb.create_sheet("all responses")

    # Copy rows 1-3 (header rows) verbatim
    for r in range(1, 4):
        for c in range(1, ws_src.max_column + 1):
            ws.cell(r, c).value = ws_src.cell(r, c).value

    # Write 400 dummy data rows starting at row 4
    for i in range(1, n_rows + 1):
        row_data = _gen_row(i)
        for c, val in enumerate(row_data, 1):
            ws.cell(i + 3, c).value = val

    # Copy column widths approx
    for c in range(1, ws_src.max_column + 1):
        col_letter = get_column_letter(c)
        dim = ws_src.column_dimensions.get(col_letter)
        if dim and dim.width:
            ws.column_dimensions[col_letter].width = dim.width

    out = STORAGE / "dummy_gpu_survey.xlsx"
    wb.save(out)
    print(f"GPU survey dummy: {out} ({n_rows}행)")
    return out


# ──────────────────────────────────────────────────────────────────────────────
# Budget dummy builder
# ──────────────────────────────────────────────────────────────────────────────

# New code mappings for existing 6 business codes
CODE_MAP = {
    "25-01-Q-11": "25-01-A-01",
    "26-01-L-41": "26-01-B-01",
    "26-01-Q-11": "26-01-A-02",
    "26-01-Q-31": "26-01-A-03",
    "26-03-N-11": "26-03-C-01",
    "26-12-I-11": "26-12-D-01",
}
NAME_MAP = {
    "25-01-Q-11": "(이월)AI 인프라 구축 및 통합관리환경 개발",
    "26-01-L-41": "AI 기술이전·창업 지원 체계 구축",
    "26-01-Q-11": "AI 컴퓨팅 인프라 확충 및 운영환경 고도화",
    "26-01-Q-31": "지역거점 AI 산업성장 지원",
    "26-03-N-11": "친환경 데이터센터 산업발전 기반 조성",
    "26-12-I-11": "클라우드 전환 촉진 및 기업 디지털역량 강화",
}
DEPT_MAP = {
    "25-01-Q-11": "디지털인프라팀",
    "26-01-L-41": "산학협력센터",
    "26-01-Q-11": "AI인프라팀",
    "26-01-Q-31": "지역협력팀",
    "26-03-N-11": "그린IT팀",
    "26-12-I-11": "클라우드사업팀",
}


def _scale(val_str: str | None, factor: float) -> str | None:
    if not val_str:
        return val_str
    # Handle formatted numbers like "2,108,179,490,000"
    clean = val_str.replace(",", "")
    try:
        num = int(float(clean) * factor)
        return str(num)
    except Exception:
        return val_str


def _pct(h_str, g_str) -> str:
    try:
        h = int(h_str or 0)
        g = int(g_str or 0)
        if g == 0:
            return "0%"
        pct = f"{h/g*100:.2f}".rstrip("0").rstrip(".")
        return pct + "%"
    except Exception:
        return "0%"


def _read_budget_rows() -> tuple[dict, list]:
    """Read budget rows from sampledata2.xlsx via zipfile."""
    ns = {"s": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    with zipfile.ZipFile(STORAGE / "samledata2.xlsx") as zf:
        sst: list[str] = []
        with zf.open("xl/sharedStrings.xml") as f:
            tree = ET.parse(f)
        for si in tree.getroot().findall(".//s:si", ns):
            t = "".join(
                n.text or ""
                for n in si.iter("{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t")
            )
            sst.append(t)

        with zf.open("xl/worksheets/sheet1.xml") as f:
            tree = ET.parse(f)

        rows: dict[int, dict[str, str]] = {}
        for row_el in tree.getroot().findall(".//s:row", ns):
            r = int(row_el.get("r"))
            for cell_el in row_el.findall("s:c", ns):
                ref = cell_el.get("r", "")
                col_letter = "".join(c for c in ref if c.isalpha())
                t = cell_el.get("t", "")
                v_el = cell_el.find("s:v", ns)
                if v_el is not None and v_el.text:
                    val = sst[int(v_el.text)] if t == "s" else v_el.text
                else:
                    val = None
                rows.setdefault(r, {})[col_letter] = val

    # Parse into ordered list of dicts (rows 4+)
    ordered = [rows[r] for r in sorted(rows.keys()) if r >= 4]
    # Also return header rows
    headers = {r: rows[r] for r in [1, 2, 3] if r in rows}
    return headers, ordered


def _build_budget_group(
    rows: list[dict],
    orig_code: str,
    new_code: str,
    new_name: str,
    new_dept: str,
    g_factor: float,
    h_factor: float,
) -> list[list]:
    """
    Extract rows for orig_code group, apply new code/name/dept and scale G/H,
    return as list of lists [A, B, C, D, E, F, G, H, I, J].
    """
    # collect rows belonging to this group (from level-3 row to next level-3)
    group_rows: list[dict] = []
    inside = False
    for row in rows:
        level = row.get("C", "")
        a = row.get("A", "")
        if level == "3" and a == orig_code:
            inside = True
        elif level == "3" and inside:
            break
        if inside:
            group_rows.append(row)

    result: list[list] = []
    for row in group_rows:
        level = row.get("C", "")
        a_val = row.get("A", "")
        b_val = row.get("B", "")
        g_str = row.get("G")
        h_str = row.get("H")

        # Apply code/name mapping for level-3 row
        if level == "3":
            a_val = new_code
            b_val = new_name

        # Scale G and H
        new_g = _scale(g_str, g_factor) if g_str else "0"
        new_h = _scale(h_str, h_factor) if h_str else "0"
        new_i = str(max(0, int(new_g or 0) - int(new_h or 0)))
        new_j = _pct(new_h, new_g)

        result.append([
            a_val,
            b_val,
            level,
            row.get("D", "2026-01-01"),
            row.get("E", "2026-12-31"),
            new_dept if level in ("3", "4") else row.get("F", new_dept),
            new_g,
            new_h,
            new_i,
            new_j,
        ])

    return result


def _gen_dummy_group(code: str, name: str, dept: str, budget: int) -> list[list]:
    """
    Generate a simple 2-level dummy business group:
      Level 3: code / name
        Level 4: 200-00 물건비
          Level 5: 210-00 운영비
            Level 6: 210-01 일반수용비
              Level 7: 001 세부항목
          Level 5: 240-00 업무추진비
            Level 6: 240-01 사업추진비
              Level 7: 001 사업추진비
        Level 4: 300-00 이전지출
          Level 5: 320-00 민간이전
            Level 6: 320-02 민간위탁사업비
              Level 7: 001 민간위탁사업비
    """
    g_operations = int(budget * random.uniform(0.05, 0.15))
    g_transfer   = budget - g_operations
    h_ops_pct    = random.uniform(0.3, 0.9)
    h_trans_pct  = random.uniform(0.4, 0.95)
    h_operations = int(g_operations * h_ops_pct)
    h_transfer   = int(g_transfer   * h_trans_pct)

    g_ops_sub1   = int(g_operations * 0.6)
    g_ops_sub2   = g_operations - g_ops_sub1
    h_ops_sub1   = int(h_operations * 0.6)
    h_ops_sub2   = h_operations - h_ops_sub1

    period = ("2026-01-01", "2026-12-31")

    def row(a, b, level, g, h):
        i = max(0, g - h)
        j = f"{h/g*100:.2f}%" if g else "0%"
        return [a, b, str(level), period[0], period[1], dept,
                str(g), str(h), str(i), j]

    rows = [
        row(code,      name,           3, budget,       h_operations + h_transfer),
        row("200-00",  "물건비",        4, g_operations, h_operations),
        row("210-00",  "운영비",        5, g_ops_sub1,   h_ops_sub1),
        row("210-01",  "일반수용비",    6, g_ops_sub1,   h_ops_sub1),
        row("001",     "사무용품 구입비", 7, 0,           h_ops_sub1),
        row("240-00",  "업무추진비",    5, g_ops_sub2,   h_ops_sub2),
        row("240-01",  "사업추진비",    6, g_ops_sub2,   h_ops_sub2),
        row("001",     "사업추진비",    7, 0,            h_ops_sub2),
        row("300-00",  "이전지출",      4, g_transfer,   h_transfer),
        row("320-00",  "민간이전",      5, g_transfer,   h_transfer),
        row("320-02",  "민간위탁사업비", 6, g_transfer,  h_transfer),
        row("001",     "민간위탁사업비", 7, 0,           h_transfer),
    ]
    return rows


def build_budget() -> Path:
    headers, data_rows = _read_budget_rows()

    # Original codes in order of appearance
    ORIG_CODES = [
        "25-01-Q-11", "26-01-L-41", "26-01-Q-11",
        "26-01-Q-31", "26-03-N-11", "26-12-I-11",
    ]

    all_groups: list[list[list]] = []

    for orig in ORIG_CODES:
        new_code = CODE_MAP[orig]
        new_name = NAME_MAP[orig]
        new_dept = DEPT_MAP[orig]
        g_factor = random.uniform(0.88, 1.12)
        h_factor = random.uniform(0.80, 0.98)
        grp = _build_budget_group(data_rows, orig, new_code, new_name, new_dept, g_factor, h_factor)
        all_groups.append(grp)
        print(f"  변경: {orig} → {new_code} ({len(grp)}행)")

    # Add 2 new dummy groups
    new_groups = [
        _gen_dummy_group("26-15-E-01", "AI 기반 공공서비스 혁신 지원",
                         "공공혁신팀", random.randint(500_000_000, 3_000_000_000)),
        _gen_dummy_group("26-20-F-11", "미래형 반도체 AI 융합연구 기반 구축",
                         "반도체AI팀", random.randint(2_000_000_000, 10_000_000_000)),
    ]
    for i, grp in enumerate(new_groups):
        all_groups.append(grp)
        print(f"  신규: {grp[0][0]} ({grp[0][1]}, {len(grp)}행)")

    # Write xlsx
    wb = Workbook()
    ws = wb.active
    ws.title = "예실대비표"

    # Header rows
    ws.append(["예실대비표"] * 10)
    ws.append(["예산코드", "예산명", "레벨", "사업기간", "사업기간",
               "수행부서", "예산현액(A)", "발의실적", "발의실적", "발의실적"])
    ws.append(["예산코드", "예산명", "레벨", "사업시작일", "사업종료일",
               "수행부서", "예산현액(A)", "금액(B)", "잔액(A-B)", "집행율(B/A*100)"])

    # Data rows
    total_g = 0
    total_h = 0
    for grp in all_groups:
        for row in grp:
            ws.append(row)
            if row[2] == "3":  # level 3 row — accumulate for grand total
                g = row[6] or "0"
                h = row[7] or "0"
                try:
                    total_g += int(g.replace(",", ""))
                    total_h += int(h.replace(",", ""))
                except Exception:
                    pass

    # Grand total row
    ws.append(["", "합계", "", "", "", "",
                str(total_g), str(total_h),
                str(total_g - total_h),
                _pct(str(total_h), str(total_g))])

    # Column widths
    for col, width in zip(["A","B","C","D","E","F","G","H","I","J"],
                          [18, 40, 8, 14, 14, 22, 18, 18, 18, 14]):
        ws.column_dimensions[col].width = width

    out = STORAGE / "dummy_budget.xlsx"
    wb.save(out)
    print(f"Budget dummy: {out}")
    return out


# ──────────────────────────────────────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("=== GPU Survey (400행) ===")
    build_gpu_survey(400)

    print("\n=== Budget (코드 변경 + 신규 2개) ===")
    build_budget()

    print("\n완료.")
