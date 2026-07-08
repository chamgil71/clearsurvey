from __future__ import annotations

import re
import time
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

from engine.config import SurveyConfig

_NS_MAIN  = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
_NS_PKG   = "http://schemas.openxmlformats.org/package/2006/relationships"
_NS_R     = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
_NS_REL   = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
_NS_X14   = "http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"
_NS_X15   = "http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"
_NS_MC    = "http://schemas.openxmlformats.org/markup-compatibility/2006"
_NS_XDR   = "http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"
_NS_A     = "http://schemas.openxmlformats.org/drawingml/2006/main"
_NS_SLE   = "http://schemas.microsoft.com/office/drawing/2010/slicer"
_REL_CACHE  = "http://schemas.microsoft.com/office/2007/relationships/slicerCache"
_REL_SLICER = "http://schemas.microsoft.com/office/2007/relationships/slicer"
_REL_DRAW   = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
_EXT_SLICER_CACHES = "{A8765BA9-456A-4dab-B4F3-ACF838C3DE2C}"  # workbook-level x14:slicerCaches ext (note: distinct from worksheet-level slicerList uri)


# ---------------------------------------------------------------------------
# XML builders
# ---------------------------------------------------------------------------

def _slicer_xml(cname: str, caption: str) -> str:
    """One slicer definition file (xl/slicers/slicerN.xml)."""
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<slicers xmlns="{_NS_X15}" xmlns:mc="{_NS_MC}" xmlns:x14="{_NS_X14}" mc:Ignorable="x14">'
        f'<slicer name="{cname}" cache="{cname}" caption="{caption}"'
        f' rowHeight="225720" style="SlicerStyleLight1"/>'
        f'</slicers>'
    )


def _slicer_rels_xml(cache_idx: int) -> str:
    """Rels from slicer file → slicerCache file."""
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<Relationships xmlns="{_NS_PKG}">'
        f'<Relationship Id="rId1" Type="{_REL_CACHE}"'
        f' Target="../slicerCaches/slicerCache{cache_idx}.xml"/>'
        f'</Relationships>'
    )


def _cache_xml(cname: str, label: str, table_id: int, col_idx: int) -> str:
    """SlicerCache definition referencing the Table column."""
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<slicerCacheDefinition xmlns="{_NS_X14}" xmlns:r="{_NS_R}"'
        f' name="{cname}" sourceName="{label}">'
        f'<extLst>'
        f'<ext uri="{{2F2917AC-EB37-4324-AD4E-5DD8C200BD13}}">'
        f'<x15:tableSlicerCache xmlns:x15="{_NS_X15}" tableId="{table_id}" column="{col_idx}"/>'
        f'</ext>'
        f'</extLst>'
        f'</slicerCacheDefinition>'
    )


def _drawing_xml(n_slicers: int, n_data_cols: int) -> str:
    """Drawing that positions slicers to the right of data columns, side by side."""
    anchors = []
    for i in range(1, n_slicers + 1):
        from_col = n_data_cols + (i - 1) * 4   # 0-based column
        from_row = 2                              # below subtotal+header rows
        to_col   = from_col + 4
        to_row   = from_row + 12
        anchor = (
            f'<xdr:twoCellAnchor editAs="oneCell">'
            f'<xdr:from>'
            f'<xdr:col>{from_col}</xdr:col><xdr:colOff>0</xdr:colOff>'
            f'<xdr:row>{from_row}</xdr:row><xdr:rowOff>0</xdr:rowOff>'
            f'</xdr:from>'
            f'<xdr:to>'
            f'<xdr:col>{to_col}</xdr:col><xdr:colOff>0</xdr:colOff>'
            f'<xdr:row>{to_row}</xdr:row><xdr:rowOff>0</xdr:rowOff>'
            f'</xdr:to>'
            f'<xdr:graphicFrame macro="">'
            f'<xdr:nvGraphicFramePr>'
            f'<xdr:cNvPr id="{i + 1}" name="Slicer {i}"/>'
            f'<xdr:cNvGraphicFramePr/>'
            f'</xdr:nvGraphicFramePr>'
            f'<xdr:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/></xdr:xfrm>'
            f'<a:graphic>'
            f'<a:graphicData uri="http://schemas.microsoft.com/office/drawing/2010/slicer">'
            f'<sle:slicer xmlns:sle="{_NS_SLE}" r:id="rId{i}"/>'
            f'</a:graphicData>'
            f'</a:graphic>'
            f'</xdr:graphicFrame>'
            f'<xdr:clientData/>'
            f'</xdr:twoCellAnchor>'
        )
        anchors.append(anchor)

    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<xdr:wsDr xmlns:xdr="{_NS_XDR}" xmlns:a="{_NS_A}" xmlns:r="{_NS_R}">'
        + "".join(anchors)
        + '</xdr:wsDr>'
    )


def _drawing_rels_xml(n_slicers: int) -> str:
    """Drawing rels: each rIdN → slicerN.xml."""
    rels = "".join(
        f'<Relationship Id="rId{i}" Type="{_REL_SLICER}"'
        f' Target="../slicers/slicer{i}.xml"/>'
        for i in range(1, n_slicers + 1)
    )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<Relationships xmlns="{_NS_PKG}">'
        + rels
        + '</Relationships>'
    )


# ---------------------------------------------------------------------------
# Main entry point
# ---------------------------------------------------------------------------

def inject_slicers(output_path: Path, cfg: SurveyConfig, col_index_map: dict[str, int]) -> None:
    """Patch xlsx ZIP to inject table slicers with proper drawing positioning.

    Each slicer gets its own file. A drawing XML positions them visually
    to the right of the data columns.
    """
    if not cfg.slicers:
        return

    cleaned_sheet = cfg.sheets.cleaned
    n_data_cols   = max(col_index_map.values()) if col_index_map else 0
    n_slicers     = len(cfg.slicers)

    with zipfile.ZipFile(output_path, "r") as zin:
        orig = {n: zin.read(n) for n in zin.namelist()}

    # ── locate cleaned sheet ──────────────────────────────────────────────────
    wb_root = ET.fromstring(orig["xl/workbook.xml"])
    cleaned_rid: str | None = None
    for sh in wb_root.iter(f"{{{_NS_MAIN}}}sheet"):
        if sh.get("name") == cleaned_sheet:
            cleaned_rid = sh.get(f"{{{_NS_REL}}}id")
            break

    if not cleaned_rid:
        print(f"Warning: sheet '{cleaned_sheet}' not found — slicers skipped")
        return

    wb_rels_root = ET.fromstring(orig["xl/_rels/workbook.xml.rels"])
    ws_target: str | None = None
    for rel in wb_rels_root.iter(f"{{{_NS_PKG}}}Relationship"):
        if rel.get("Id") == cleaned_rid:
            ws_target = rel.get("Target")
            break

    if not ws_target:
        print("Warning: worksheet target not found — slicers skipped")
        return

    ws_target_clean = ws_target.lstrip("/")
    ws_file         = ws_target_clean if ws_target_clean.startswith("xl/") else f"xl/{ws_target_clean}"
    ws_basename     = ws_target_clean.split("/")[-1]
    ws_rels_path    = f"xl/worksheets/_rels/{ws_basename}.rels"

    # ── get table id ──────────────────────────────────────────────────────────
    table_id = 1
    if ws_rels_path in orig:
        ws_rels_root = ET.fromstring(orig[ws_rels_path])
        for rel in ws_rels_root.iter(f"{{{_NS_PKG}}}Relationship"):
            if "table" in rel.get("Type", "").lower():
                tgt = rel.get("Target", "")
                tgt_file = ("xl/" + tgt[3:]) if tgt.startswith("../") else f"xl/worksheets/{tgt}"
                if tgt_file in orig:
                    tbl_root = ET.fromstring(orig[tgt_file])
                    table_id = int(tbl_root.get("id", 1))
                break

    new_files = dict(orig)

    # ── per-slicer files (slicer + cache + slicer rels) ───────────────────────
    for i, sdef in enumerate(cfg.slicers, 1):
        label   = sdef.col
        caption = sdef.caption or label
        cname   = f"Slicer_{label}"
        col_idx = col_index_map.get(label, 1) - 1

        new_files[f"xl/slicers/slicer{i}.xml"]             = _slicer_xml(cname, caption).encode("utf-8")
        new_files[f"xl/slicers/_rels/slicer{i}.xml.rels"]  = _slicer_rels_xml(i).encode("utf-8")
        new_files[f"xl/slicerCaches/slicerCache{i}.xml"]   = _cache_xml(cname, label, table_id, col_idx).encode("utf-8")

    # ── drawing XML (visual positioning) ───────────────────────────────────────
    # 차트가 이미 xl/drawings/drawing1.xml 을 선점하고 있을 수 있으므로(예: 요약 시트에
    # openpyxl이 만든 차트 드로잉), 항상 drawing1.xml 을 덮어쓰면 기존 차트의 드로잉/관계가
    # 통째로 사라지거나 [Content_Types].xml 에 동일 PartName Override가 중복 등록되어
    # Excel이 "복구" 경고를 띄운다. 비어 있는 다음 번호를 골라 충돌을 피한다.
    existing_drawing_nums = [
        int(m.group(1))
        for name in orig
        if (m := re.match(r"xl/drawings/drawing(\d+)\.xml$", name))
    ]
    drawing_num       = max(existing_drawing_nums, default=0) + 1
    drawing_file      = f"xl/drawings/drawing{drawing_num}.xml"
    drawing_rels_file = f"xl/drawings/_rels/drawing{drawing_num}.xml.rels"

    new_files[drawing_file]      = _drawing_xml(n_slicers, n_data_cols).encode("utf-8")
    new_files[drawing_rels_file] = _drawing_rels_xml(n_slicers).encode("utf-8")

    # ── patch worksheet XML ───────────────────────────────────────────────────
    ws_drw_rid = "rId_drw1"
    ws_xml     = orig[ws_file].decode("utf-8")

    slicer_list_items = "".join(
        f'<x14:slicer xmlns:r="{_NS_R}" r:id="rId_slc{i}"/>'
        for i in range(1, n_slicers + 1)
    )
    slicer_ext = (
        f'<ext xmlns:x14="{_NS_X14}" uri="{{A8765BA9-456A-4daa-B4F3-9B99337C10BE}}">'
        f'<x14:slicerList>{slicer_list_items}</x14:slicerList>'
        f'</ext>'
    )
    drawing_el = f'<drawing xmlns:r="{_NS_R}" r:id="{ws_drw_rid}"/>'

    # 1. extLst 패치
    last_extlst_end = ws_xml.rfind("</extLst>")
    if last_extlst_end != -1 and last_extlst_end > ws_xml.rfind("</worksheet>") - 2000:
        ws_xml = ws_xml[:last_extlst_end] + slicer_ext + ws_xml[last_extlst_end:]
    else:
        ws_end = ws_xml.rfind("</worksheet>")
        ws_xml = ws_xml[:ws_end] + f"<extLst>{slicer_ext}</extLst>" + ws_xml[ws_end:]

    # 2. drawing 주입 (반드시 tableParts 나 extLst 앞에 위치해야 함)
    tableparts_start = ws_xml.rfind("<tableParts")
    if tableparts_start != -1:
        ws_xml = ws_xml[:tableparts_start] + drawing_el + ws_xml[tableparts_start:]
    else:
        extlst_start = ws_xml.rfind("<extLst")
        if extlst_start != -1:
            ws_xml = ws_xml[:extlst_start] + drawing_el + ws_xml[extlst_start:]
        else:
            ws_end = ws_xml.rfind("</worksheet>")
            ws_xml = ws_xml[:ws_end] + drawing_el + ws_xml[ws_end:]

    new_files[ws_file] = ws_xml.encode("utf-8")

    # ── patch worksheet rels ──────────────────────────────────────────────────
    new_ws_rels = f'<Relationship Id="{ws_drw_rid}" Type="{_REL_DRAW}" Target="../drawings/drawing{drawing_num}.xml"/>'
    for i in range(1, n_slicers + 1):
        new_ws_rels += (
            f'<Relationship Id="rId_slc{i}" Type="{_REL_SLICER}"'
            f' Target="../slicers/slicer{i}.xml"/>'
        )

    if ws_rels_path in new_files:
        ws_rels_str = new_files[ws_rels_path].decode("utf-8")
        ws_rels_str = ws_rels_str.replace("</Relationships>", new_ws_rels + "</Relationships>")
    else:
        ws_rels_str = (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            f'<Relationships xmlns="{_NS_PKG}">{new_ws_rels}</Relationships>'
        )
    new_files[ws_rels_path] = ws_rels_str.encode("utf-8")

    # ── patch workbook.xml.rels: slicerCache relationships ───────────────────
    wb_rels_str  = orig["xl/_rels/workbook.xml.rels"].decode("utf-8")
    wb_cache_rels = "".join(
        f'<Relationship Id="rId_cache{i}" Type="{_REL_CACHE}"'
        f' Target="slicerCaches/slicerCache{i}.xml"/>'
        for i in range(1, n_slicers + 1)
    )
    wb_rels_str = wb_rels_str.replace("</Relationships>", wb_cache_rels + "</Relationships>")
    new_files["xl/_rels/workbook.xml.rels"] = wb_rels_str.encode("utf-8")

    # ── patch workbook.xml: x14:slicerCaches 선언 (필수) ───────────────────────
    # workbook.xml.rels 에 slicerCache 관계를 추가하는 것만으로는 부족하다.
    # 워크북 자체의 extLst 에 x14:slicerCaches 로 각 캐시를 명시적으로 광고하지
    # 않으면, Excel이 "연결되었지만 선언되지 않은" 관계로 판단해 파일을 열 때
    # 콘텐츠 복구 경고를 띄운다.
    wb_xml = orig["xl/workbook.xml"].decode("utf-8")
    slicer_cache_items = "".join(
        f'<x14:slicerCache xmlns:r="{_NS_R}" r:id="rId_cache{i}"/>'
        for i in range(1, n_slicers + 1)
    )
    wb_slicer_ext = (
        f'<ext xmlns:x14="{_NS_X14}" uri="{_EXT_SLICER_CACHES}">'
        f'<x14:slicerCaches>{slicer_cache_items}</x14:slicerCaches>'
        f'</ext>'
    )
    wb_last_extlst_end = wb_xml.rfind("</extLst>")
    if wb_last_extlst_end != -1:
        wb_xml = wb_xml[:wb_last_extlst_end] + wb_slicer_ext + wb_xml[wb_last_extlst_end:]
    else:
        wb_end = wb_xml.rfind("</workbook>")
        wb_xml = wb_xml[:wb_end] + f"<extLst>{wb_slicer_ext}</extLst>" + wb_xml[wb_end:]
    new_files["xl/workbook.xml"] = wb_xml.encode("utf-8")

    # ── patch [Content_Types].xml ─────────────────────────────────────────────
    ct_str = orig["[Content_Types].xml"].decode("utf-8")
    new_ct = (
        f'<Override PartName="/{drawing_file}"'
        ' ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/>'
    )
    for i in range(1, n_slicers + 1):
        new_ct += (
            f'<Override PartName="/xl/slicers/slicer{i}.xml"'
            f' ContentType="application/vnd.ms-excel.slicer+xml"/>'
            f'<Override PartName="/xl/slicerCaches/slicerCache{i}.xml"'
            f' ContentType="application/vnd.ms-excel.slicerCache+xml"/>'
        )
    ct_str = ct_str.replace("</Types>", new_ct + "</Types>")
    new_files["[Content_Types].xml"] = ct_str.encode("utf-8")

    # ── write patched zip ─────────────────────────────────────────────────────
    tmp_path = output_path.with_suffix(".sltmp.xlsx")
    with zipfile.ZipFile(tmp_path, "w", compression=zipfile.ZIP_DEFLATED) as zout:
        for name, data in new_files.items():
            zout.writestr(name, data)

    # Windows: 백신 실시간 검사나 직전 다운로드 요청(FileResponse)이 파일을 순간적으로
    # 붙잡고 있어 WinError 5(액세스 거부)가 발생할 수 있다. 잠금이 몇 초 지속되는 경우도
    # 있어 충분히 여유를 두고 재시도한다.
    _RETRY_DELAYS = [0.3, 0.6, 1.0, 1.5, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0]  # 총 최대 ~15초
    for attempt, delay in enumerate([*_RETRY_DELAYS, None]):
        try:
            tmp_path.replace(output_path)
            break
        except PermissionError:
            if delay is None:
                tmp_path.unlink(missing_ok=True)
                raise
            time.sleep(delay)
    print(f"슬라이서 {n_slicers}개 삽입 완료")
