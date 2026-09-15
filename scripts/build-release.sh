#!/bin/sh
# Pack module/OneSkip into a Vortex-ready zip: Modules/OneSkip/...
set -eu
ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/module/OneSkip"
OUT="$ROOT/releases"

if [ ! -f "$SRC/SubModule.xml" ]; then
  echo "missing $SRC/SubModule.xml" >&2
  exit 1
fi

VER="$(sed -n 's/.*<Version value="\([^"]*\)".*/\1/p' "$SRC/SubModule.xml" | head -n 1)"
[ -n "$VER" ] || VER="v1.0.0"
NAME="OneSkip-${VER}.zip"

mkdir -p "$OUT"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
mkdir -p "$STAGE/Modules"
cp -a "$SRC" "$STAGE/Modules/OneSkip"

ZIP="$OUT/$NAME"
rm -f "$ZIP"
python3 - "$STAGE" "$ZIP" << 'PY'
import hashlib, sys, zipfile
from pathlib import Path
stage, dest = Path(sys.argv[1]), Path(sys.argv[2])
dirs = []
files = []
for p in sorted(stage.rglob("*")):
    rel = p.relative_to(stage).as_posix()
    if p.is_dir():
        dirs.append(rel.rstrip("/") + "/")
    elif p.is_file():
        files.append(p)

with zipfile.ZipFile(dest, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
    for d in dirs:
        info = zipfile.ZipInfo(d)
        info.date_time = (2026, 1, 1, 0, 0, 0)
        info.compress_type = zipfile.ZIP_STORED
        info.external_attr = (0o40755 << 16) | 0x10
        zf.writestr(info, b"")
    for p in files:
        info = zipfile.ZipInfo(p.relative_to(stage).as_posix())
        info.date_time = (2026, 1, 1, 0, 0, 0)
        info.compress_type = zipfile.ZIP_DEFLATED
        info.external_attr = 0o644 << 16
        zf.writestr(info, p.read_bytes())
digest = hashlib.sha256(dest.read_bytes()).hexdigest()
print(f"{dest.name}  {dest.stat().st_size} bytes")
print(f"SHA256  {digest}")
print("layout:")
with zipfile.ZipFile(dest) as zf:
    for n in zf.namelist():
        print(f"  {n}")
Path(str(dest) + ".sha256").write_text(f"{digest}  {dest.name}\n")
PY

echo "wrote $ZIP"
