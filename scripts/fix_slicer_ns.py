"""Patch existing cleaned.xlsx: add xmlns:r to injected <drawing> elements."""
import sys
import zipfile
import os

path = sys.argv[1] if len(sys.argv) > 1 else "projects/project_budget/output/project_budget_cleaned.xlsx"
ns_r = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"

with zipfile.ZipFile(path, "r") as z:
    files = {n: z.read(n) for n in z.namelist()}

fixed = 0
for name in list(files.keys()):
    if "worksheets/sheet" in name and "_rels" not in name:
        xml = files[name].decode("utf-8")
        old = "<drawing r:id="
        new = f'<drawing xmlns:r="{ns_r}" r:id='
        if old in xml:
            files[name] = xml.replace(old, new).encode("utf-8")
            fixed += 1
            print(f"  patched: {name}")

tmp = path + ".tmp"
with zipfile.ZipFile(tmp, "w", compression=zipfile.ZIP_DEFLATED) as z:
    for n, d in files.items():
        z.writestr(n, d)
os.replace(tmp, path)
print(f"done: {fixed} sheet(s) patched -> {path}")
