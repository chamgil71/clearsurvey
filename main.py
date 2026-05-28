from __future__ import annotations

import shutil
from pathlib import Path
from typing import Optional

import typer
import yaml
from pydantic import ValidationError

from engine.config import SurveyConfig
from engine.pipeline import SurveyPipeline

app = typer.Typer(help="Survey Engine v2 — 범용 설문 데이터 클렌징 도구")


# ---------------------------------------------------------------------------
# Config loading — supports both .yaml and .xlsx (Config sheet round-trip)
# ---------------------------------------------------------------------------

def _load_config(config_path: Path) -> SurveyConfig:
    if config_path.suffix.lower() in (".xlsx", ".xls"):
        from engine.config_excel import read_config_from_excel
        try:
            return read_config_from_excel(config_path)
        except Exception as exc:
            typer.echo(f"[오류] Excel Config 시트 읽기 실패: {exc}", err=True)
            raise typer.Exit(1)

    with open(config_path, encoding="utf-8") as f:
        raw = yaml.safe_load(f)
    try:
        return SurveyConfig.model_validate(raw)
    except ValidationError as exc:
        typer.echo(f"[오류] 설정 파일 검증 실패:\n{exc}", err=True)
        raise typer.Exit(1)


def _config_path_for_run(config: Path, cfg: SurveyConfig) -> Path:
    if config.suffix.lower() in (".yaml", ".yml"):
        return config
    # xlsx 안에 output/ 폴더 → 한 단계 위가 프로젝트 루트
    if config.parent.name.lower() == "output":
        return config.parent.parent / "config.yaml"
    # 같은 폴더에 config.yaml 이 이미 있으면 그대로 사용
    if (config.parent / "config.yaml").exists():
        return config.parent / "config.yaml"
    # draft가 프로젝트 폴더 밖에 있는 경우 → projects/<name>/ 자동 생성
    proj_dir = Path("projects") / cfg.project
    proj_dir.mkdir(parents=True, exist_ok=True)
    (proj_dir / "output").mkdir(exist_ok=True)
    typer.echo(f"[프로젝트] projects/{cfg.project}/ 폴더에 결과를 저장합니다.")
    return proj_dir / "config.yaml"


def _emit_validation_report(report) -> None:
    for msg in report.infos:
        typer.echo(f"[정보] {msg}")
    for msg in report.warnings:
        typer.echo(f"[경고] {msg}")
    for msg in report.errors:
        typer.echo(f"[오류] {msg}", err=True)


def _validate_or_exit(
    cfg: SurveyConfig,
    config_path: Path,
    input_path: Optional[Path] = None,
) -> None:
    from engine.validator import validate_config

    report = validate_config(cfg, config_path=config_path, input_path=input_path)
    if not report.ok:
        _emit_validation_report(report)
        typer.echo("[오류] 설정 검증 실패. 수정 후 다시 실행하거나 --skip-validate 옵션으로 우회하세요.", err=True)
        raise typer.Exit(1)


# ---------------------------------------------------------------------------
# Commands
# ---------------------------------------------------------------------------

@app.command()
def run(
    config: Path = typer.Argument(
        ...,
        help="config.yaml 경로 또는 이전 출력 xlsx (Config 시트 라운드트립)",
    ),
    input_file: Optional[Path] = typer.Option(
        None, "--input", "-i",
        help="원본 데이터 xlsx (config의 source_file 우선순위 낮음)",
    ),
    skip_validate: bool = typer.Option(
        False, "--skip-validate",
        help="실행 전 설정 참조 검증을 건너뜁니다.",
    ),
    dry_run: bool = typer.Option(
        False, "--dry-run",
        help="파일 저장 없이 검증 및 변환 결과만 화면에 출력합니다. (테스트용)",
    ),
) -> None:
    """설문 데이터를 정제하여 Cleaned / Summary / Config / Guide 시트를 생성합니다."""
    if not config.exists():
        typer.echo(f"[오류] 파일 없음: {config}", err=True)
        raise typer.Exit(1)

    cfg = _load_config(config)

    config_path = _config_path_for_run(config, cfg)
    if not skip_validate:
        _validate_or_exit(cfg, config_path, input_file)

    SurveyPipeline(cfg, config_path=config_path).run(input_path=input_file, dry_run=dry_run)


@app.command()
def analyze(
    file: Path = typer.Argument(..., help="분석할 xlsx 파일"),
    sheet: Optional[str] = typer.Option(None, "--sheet", "-s", help="시트 이름"),
    draft: Optional[Path] = typer.Option(
        None, "--draft", "-d",
        help="Config xlsx 저장 경로 지정 (기본: 원본 파일 폴더에 draft_{파일명}.xlsx 자동 생성)",
    ),
    project: Optional[str] = typer.Option(None, "--project", "-p", help="프로젝트 이름"),
    save_project: bool = typer.Option(
        False, "--save-project",
        help="projects/<project>/ 폴더를 생성하고 Config xlsx를 그 안에 저장합니다.",
    ),
    dry_run: bool = typer.Option(
        False, "--dry-run",
        help="파일 생성 없이 분석 결과(JSON)만 화면에 출력합니다.",
    ),
) -> None:
    """xlsx 파일 구조를 분석하고 Config xlsx를 생성합니다.

    기본 동작: 원본 파일과 같은 폴더에 draft_{파일명}.xlsx 자동 생성.
    --dry-run: 파일 생성 없이 JSON만 출력 (기존 analyze 동작).
    --save-project: projects/<name>/ 폴더 구조로 저장.
    """
    import json
    from engine.analyzer import ExcelAnalyzer

    if not file.exists():
        typer.echo(f"[오류] 파일 없음: {file}", err=True)
        raise typer.Exit(1)

    az = ExcelAnalyzer(file)
    result = az.analyze(sheet_name=sheet)

    if dry_run:
        typer.echo(json.dumps(result, ensure_ascii=False, indent=2))
        return

    proj_name = project or file.stem

    if save_project:
        proj_dir = Path("projects") / proj_name
        if proj_dir.exists():
            typer.echo(f"[주의] 이미 존재합니다: {proj_dir}  → 덮어씁니다.", err=True)
        proj_dir.mkdir(parents=True, exist_ok=True)
        (proj_dir / "output").mkdir(exist_ok=True)
        draft_path = proj_dir / f"draft_{file.stem}.xlsx"
    elif draft:
        draft_path = draft
    else:
        # 기본: 원본 파일과 같은 폴더에 draft_{파일명}.xlsx
        draft_path = file.parent / f"draft_{file.stem}.xlsx"

    out = az.generate_draft_xlsx(draft_path, sheet_name=sheet, project_name=proj_name)
    typer.echo(f"[draft 생성] {out}")
    typer.echo(f"  컬럼 수: {result['column_count']}  /  헤더 행: {result['header_row']}")
    typer.echo(f"  헤더 샘플: {', '.join(str(h) for h in result.get('sample_headers', [])[:5])}")

    if save_project:
        typer.echo(f"  프로젝트 폴더: projects/{proj_name}/")

    typer.echo(f"\n다음 단계:")
    typer.echo(f"  1. Excel에서 {out.name} 열기 → Config 시트 수정 (transform, output_col 등)")
    typer.echo(f"  2. python main.py run {out} --input {file}")
    typer.echo(f"  3. 결과 확인 후 output/*_cleaned.xlsx 의 Config 시트 수정 → 재실행")


@app.command()
def init(
    source: Path = typer.Argument(..., help="분석할 xlsx 파일 또는 폴더"),
    project: Optional[str] = typer.Option(None, "--project", "-p", help="프로젝트 이름 (지정 시 대화 생략)"),
    auto: bool = typer.Option(False, "--auto", "-y", help="대화 없이 자동으로 신규 프로젝트 생성"),
    projects_dir: Path = typer.Option(Path("projects"), "--dir", "-d", help="프로젝트 루트 디렉토리"),
) -> None:
    """xlsx 파일/폴더를 분석하고 프로젝트를 생성하거나 기존 프로젝트에 연결합니다.

    파일: 단일 xlsx → config.yaml 생성
    폴더: 폴더 내 모든 xlsx → merge 섹션 포함 config.yaml 생성

    --auto 또는 --project 지정 시 대화 없이 신규 생성합니다.
    """
    import yaml
    from engine.analyzer import ExcelAnalyzer

    if not source.exists():
        typer.echo(f"[오류] 파일/폴더 없음: {source}", err=True)
        raise typer.Exit(1)

    is_folder = source.is_dir()

    # ── 분석 ──────────────────────────────────────────────────────────────────
    if is_folder:
        xlsx_files = sorted(source.glob("*.xlsx")) + sorted(source.glob("*.xls"))
        if not xlsx_files:
            typer.echo(f"[오류] 폴더에 xlsx 파일이 없습니다: {source}", err=True)
            raise typer.Exit(1)
        ref_file = xlsx_files[0]
        typer.echo(f"\n폴더 분석: {source}  ({len(xlsx_files)}개 파일)")
        typer.echo(f"  기준 파일: {ref_file.name}")
    else:
        ref_file = source
        typer.echo(f"\n파일 분석: {source.name}")

    az = ExcelAnalyzer(ref_file)
    detection = az.analyze()
    typer.echo(f"  헤더 행:     {detection['header_row']}  (신뢰도 {detection['header_score']})")
    typer.echo(f"  데이터 시작: {detection['data_start_row']}")
    typer.echo(f"  컬럼 수:     {detection['column_count']}")
    typer.echo(f"  헤더 샘플:   {', '.join(detection['sample_headers'][:5])}")

    # ── 기존 프로젝트 목록 ────────────────────────────────────────────────────
    existing: list[str] = []
    if projects_dir.exists():
        existing = sorted(p.name for p in projects_dir.iterdir() if p.is_dir())
    if existing:
        typer.echo(f"\n기존 프로젝트: {', '.join(existing)}")

    # ── 프로젝트 이름 결정 ────────────────────────────────────────────────────
    default_name = source.stem
    proj_name = project

    if proj_name is None:
        if auto:
            proj_name = default_name
            typer.echo(f"  프로젝트명 자동 설정: {proj_name}")
        else:
            proj_name = typer.prompt(
                "\n프로젝트 이름 (기존 이름 입력 시 연결, 새 이름 입력 시 신규 생성)",
                default=default_name,
            )

    proj_dir   = projects_dir / proj_name
    is_new     = not proj_dir.exists()
    config_path = proj_dir / "config.yaml"

    # ── 프로젝트 폴더 준비 ────────────────────────────────────────────────────
    proj_dir.mkdir(parents=True, exist_ok=True)
    (proj_dir / "output").mkdir(exist_ok=True)

    # ── config.yaml 생성 / 덮어쓰기 여부 결정 ───────────────────────────────
    def _write_config() -> None:
        if is_folder:
            _write_merge_config_yaml(
                source, xlsx_files, detection, proj_name, config_path
            )
        else:
            # relative path from config.yaml's directory to source file
            try:
                rel_src = str(source.resolve().relative_to(config_path.parent.resolve()))
            except ValueError:
                rel_src = str(source.resolve())
            az.generate_config_yaml(
                config_path,
                project_name=proj_name,
                source_override=rel_src,
            )

    if is_new or not config_path.exists():
        _write_config()
        action = "생성"
    elif auto:
        action = "유지 (--auto 모드)"
    else:
        overwrite = typer.confirm(
            f"\nconfig.yaml이 이미 있습니다. 분석 결과로 덮어쓰시겠습니까?",
            default=False,
        )
        if overwrite:
            _write_config()
            action = "덮어씀"
        else:
            action = "유지"

    # ── 결과 출력 ─────────────────────────────────────────────────────────────
    tag = "[신규]" if is_new else "[기존]"
    typer.echo(f"\n{tag} 프로젝트: {proj_dir}")
    typer.echo(f"  config.yaml: {action}")
    typer.echo(f"\n다음 단계:")
    typer.echo(f"  1. {config_path}  (output_col, transform 수정)")
    if is_folder:
        typer.echo(f"  2. python main.py run {config_path}")
    else:
        typer.echo(f"  2. python main.py run {config_path} --input {source}")


def _write_merge_config_yaml(
    folder: Path,
    xlsx_files: list[Path],
    detection: dict,
    project_name: str,
    output_path: Path,
) -> None:
    """Write a merge-based config.yaml for a folder of xlsx files."""
    import yaml
    from engine.analyzer import ExcelAnalyzer

    hrow   = detection.get("header_row", 1)
    dstart = detection.get("data_start_row", hrow + 1)

    # build column list from first file's headers
    az = ExcelAnalyzer(xlsx_files[0])
    raw_cells = az.all_headers()
    from engine.analyzer import _suggest_transform, _unique_label
    columns = []
    seen: dict[str, int] = {}
    for i, cell in enumerate(raw_cells, 1):
        label = str(cell).strip() if cell is not None else f"열{i}"
        if not label:
            label = f"열{i}"
        label = _unique_label(label, seen)
        columns.append({
            "output_col": label,
            "source_col": i,
            "transform": _suggest_transform(label),
            "width": 16,
        })

    # relative folder path from config.yaml location
    try:
        rel_folder = str(folder.resolve().relative_to(output_path.parent.resolve()))
    except ValueError:
        rel_folder = str(folder.resolve())

    cfg: dict = {
        "project": project_name,
        "style_file": None,
        "patterns_file": None,
        "merge": {
            "sources": [{
                "path": rel_folder,
                "sheet": None,
                "header_row": hrow,
                "column_mapping": {},
            }],
            "dedup": {"strategy": "none", "key_cols": []},
            "output": {"add_source_col": True, "source_col_name": "_출처파일"},
        },
        "paths": {
            "output_dir": "output",
            "output_file": f"{project_name}_cleaned.xlsx",
        },
        "sheets": {"cleaned": "Cleaned", "summary": "Summary"},
        "columns": columns,
        "transform_kwargs": {},
        "slicers": [],
        "summary": {"sheet_name": "Summary", "sections": []},
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        yaml.dump(cfg, f, allow_unicode=True, default_flow_style=False, sort_keys=False)


@app.command()
def merge(
    config: Path = typer.Argument(..., help="merge 섹션이 포함된 config.yaml"),
    output: Optional[Path] = typer.Option(None, "--output", "-o", help="출력 xlsx 경로"),
) -> None:
    """여러 xlsx 파일/폴더를 병합하여 단일 파일로 저장합니다."""
    from engine.merger import DataMerger

    if not config.exists():
        typer.echo(f"[오류] 파일 없음: {config}", err=True)
        raise typer.Exit(1)

    cfg = _load_config(config)
    if not cfg.merge:
        typer.echo("[오류] config에 merge 섹션이 없습니다.", err=True)
        raise typer.Exit(1)

    df = DataMerger(cfg.merge).run()
    typer.echo(f"병합 완료: {len(df)}행 × {len(df.columns)}열")

    out_path = output or Path("merged_output.xlsx")
    df.to_excel(out_path, index=False)
    typer.echo(f"저장: {out_path}")


@app.command("new-project")
def new_project(
    name: str = typer.Argument(..., help="프로젝트 이름 (예: budget_2026)"),
    projects_dir: Path = typer.Option(
        Path("projects"), "--dir", "-d",
        help="프로젝트 루트 디렉토리",
    ),
) -> None:
    """새 프로젝트 폴더와 config.yaml 템플릿을 생성합니다."""
    proj_dir = projects_dir / name
    if proj_dir.exists():
        typer.echo(f"[오류] 이미 존재합니다: {proj_dir}", err=True)
        raise typer.Exit(1)

    proj_dir.mkdir(parents=True)
    (proj_dir / "output").mkdir()

    # copy style.yaml from gpu_2026 as template
    src_style = projects_dir / "gpu_2026" / "style.yaml"
    if src_style.exists():
        shutil.copy2(src_style, proj_dir / "style.yaml")
    else:
        (proj_dir / "style.yaml").write_text("# style.yaml — 스타일 설정\n", encoding="utf-8")

    # write config template
    template = f"""\
project: "{name}"
style_file: "style.yaml"

# 공통 패턴 파일 (주소·회사·전화·BRN 공통 규칙)
patterns_file: "../../config/patterns.yaml"

source:
  sheet:         null          # 시트 이름 (null = 첫 번째 시트)
  header_row:    1             # 헤더 행 번호 (1-indexed)
  data_start_row: 2            # 데이터 시작 행 번호

paths:
  output_dir:  "output"
  output_file: "{name}_cleaned.xlsx"

sheets:
  cleaned: "cleaned"
  summary: "summary"

columns:
  - output_col: "ID"
    source_col: 1
    width: 12
    transform: copy

  # 추가 컬럼을 아래에 정의하세요
  # - output_col: "항목명"
  #   source_col: 2
  #   transform: copy
  #   width: 20

transform_kwargs: {{}}

slicers: []

summary:
  sheet_name: "summary"
  total_cell: "$B$3"
  sections: []

# address_parsing:  # 주소 파싱이 필요한 경우 추가
# jang_extraction:  # GPU 장수 추출이 필요한 경우 추가
"""
    (proj_dir / "config.yaml").write_text(template, encoding="utf-8")

    typer.echo(f"프로젝트 생성 완료: {proj_dir}")
    typer.echo(f"  config.yaml 을 수정한 뒤 실행하세요:")
    typer.echo(f"  python main.py run {proj_dir}/config.yaml --input data.xlsx")


@app.command("validate")
def validate(
    config: Path = typer.Argument(..., help="검증할 config.yaml 또는 Config 시트가 있는 xlsx"),
    input_file: Optional[Path] = typer.Option(
        None, "--input", "-i",
        help="원본 데이터 xlsx. 지정하면 source_col 범위와 시트 존재 여부를 함께 검사합니다.",
    ),
) -> None:
    """설정 파일의 transform, 컬럼 참조, summary/slicer 참조를 실행 전에 검증합니다."""
    if not config.exists():
        typer.echo(f"[오류] 파일 없음: {config}", err=True)
        raise typer.Exit(1)
    if input_file is not None and not input_file.exists():
        typer.echo(f"[오류] 원본 파일 없음: {input_file}", err=True)
        raise typer.Exit(1)

    cfg = _load_config(config)
    from engine.validator import validate_config

    report = validate_config(cfg, config_path=config, input_path=input_file)

    _emit_validation_report(report)

    if not report.ok:
        raise typer.Exit(1)
    typer.echo("검증 완료")


@app.command("export")
def export_json(
    config: Path = typer.Argument(..., help="config.yaml 경로"),
    xlsx: Optional[Path] = typer.Option(None, "--xlsx", "-x", help="cleaned.xlsx 경로 (생략 시 output_dir에서 자동 탐색)"),
    out: Optional[Path] = typer.Option(None, "--out", "-o", help="출력 JSON 경로 (기본: web/data/{project}_data.json)"),
    skip_validate: bool = typer.Option(
        False, "--skip-validate",
        help="내보내기 전 설정 참조 검증을 건너뜁니다.",
    ),
) -> None:
    """cleaned.xlsx → web/data/{project}_data.json 으로 내보냅니다."""
    from engine.exporter import export_to_json

    if not config.exists():
        typer.echo(f"[오류] 파일 없음: {config}", err=True)
        raise typer.Exit(1)

    cfg = _load_config(config)
    if not skip_validate:
        _validate_or_exit(cfg, config)

    # resolve xlsx path
    if xlsx is None:
        out_dir = Path(cfg.paths.output_dir)
        if not out_dir.is_absolute():
            out_dir = config.parent / out_dir
        xlsx = out_dir / cfg.paths.output_file
    if not xlsx.exists():
        typer.echo(f"[오류] cleaned xlsx 없음: {xlsx}\n  먼저 'run' 명령으로 생성하세요.", err=True)
        raise typer.Exit(1)

    # resolve output json path
    json_path = out or (config.parent.parent.parent / "web" / "public" / "data" / f"{cfg.project}_data.json")

    export_to_json(xlsx, cfg, output_path=json_path, project_dir=config.parent)
    typer.echo(f"웹 대시보드 데이터: {json_path}")


@app.command("deploy")
def deploy_project(
    config: Path = typer.Argument(..., help="config.yaml 또는 cleaned.xlsx 경로"),
    dest: Path = typer.Option(
        Path("dist"), "--dest", "-d",
        help="배포 폴더 경로 (기본: dist/). 해당 폴더만 통째로 공유하면 됩니다.",
    ),
    xlsx: Optional[Path] = typer.Option(None, "--xlsx", "-x", help="cleaned.xlsx 경로 (생략 시 자동 탐색)"),
) -> None:
    """특정 프로젝트만 독립 웹서비스로 패키징합니다.

    생성 결과물(dist/)을 HTTP 서버로 서빙하거나 공유하면
    해당 프로젝트 데이터만 보이는 단독 대시보드로 동작합니다.

        python -m http.server 8080 --directory dist/
    """
    import json as _json
    import shutil as _shutil
    from engine.exporter import export_to_json

    if not config.exists():
        typer.echo(f"[오류] 파일 없음: {config}", err=True)
        raise typer.Exit(1)

    cfg = _load_config(config)

    # resolve cleaned xlsx
    if xlsx is None:
        out_dir = Path(cfg.paths.output_dir)
        if not out_dir.is_absolute():
            out_dir = config.parent / out_dir
        xlsx = out_dir / cfg.paths.output_file
    if not xlsx or not xlsx.exists():
        typer.echo(f"[오류] cleaned xlsx 없음: {xlsx}\n  먼저 'run' 명령으로 생성하세요.", err=True)
        raise typer.Exit(1)

    # prepare dest
    dest.mkdir(parents=True, exist_ok=True)
    data_dir = dest / "data"
    data_dir.mkdir(exist_ok=True)

    # copy web assets (js, css, html — not node_modules)
    web_dir = Path(__file__).parent / "web"
    for item in ["index.html", "js", "css"]:
        src = web_dir / item
        dst = dest / item
        if src.is_dir():
            if dst.exists():
                _shutil.rmtree(dst)
            _shutil.copytree(src, dst)
        elif src.is_file():
            _shutil.copy2(src, dst)

    # export project data JSON
    proj_dir = config.parent if config.suffix.lower() in (".yaml", ".yml") else None
    json_name = f"{cfg.project}_data.json"
    json_path = data_dir / json_name
    export_to_json(xlsx, cfg, output_path=json_path, project_dir=proj_dir)

    # write minimal projects.json (only this project)
    manifest = [{"id": cfg.project, "name": cfg.project, "file": json_name,
                 "updated": __import__("datetime").datetime.now().strftime("%Y-%m-%d %H:%M")}]
    (data_dir / "projects.json").write_text(
        _json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    # write a redirect index so ?data= param is pre-set
    entry_url = f"index.html?data={json_name}"
    typer.echo(f"\n배포 완료: {dest.resolve()}")
    typer.echo(f"  접속 URL: {entry_url}")
    typer.echo(f"  서버 실행: python -m http.server 8080 --directory {dest}")
    typer.echo(f"  브라우저: http://localhost:8080/{entry_url}")


if __name__ == "__main__":
    app()
