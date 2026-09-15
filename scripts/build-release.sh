#!/bin/sh
# Pack module/OneSkip into a Bannerlord-ready zip for GitHub Releases.
set -eu
ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/module/OneSkip"
OUT_PUBLIC="$ROOT/public/downloads"
OUT_DIST="$ROOT/dist-release"

if [ ! -f "$SRC/SubModule.xml" ]; then
  echo "missing $SRC/SubModule.xml" >&2
  exit 1
fi

VER="$(sed -n 's/.*<Version value="\([^"]*\)".*/\1/p' "$SRC/SubModule.xml" | head -n 1)"
[ -n "$VER" ] || VER="v1.0.0"
NAME="OneSkip-${VER}.zip"

mkdir -p "$OUT_PUBLIC" "$OUT_DIST"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
cp -a "$SRC" "$STAGE/OneSkip"

ZIP="$OUT_DIST/$NAME"
rm -f "$ZIP"
python3 - "$STAGE" "$ZIP" << 'PY'
import hashlib, sys, zipfile
from pathlib import Path
stage, dest = Path(sys.argv[1]), Path(sys.argv[2])
with zipfile.ZipFile(dest, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
    for p in sorted(stage.rglob("*")):
        if p.is_file():
            info = zipfile.ZipInfo(p.relative_to(stage).as_posix())
            info.date_time = (2026, 1, 1, 0, 0, 0)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            zf.writestr(info, p.read_bytes())
digest = hashlib.sha256(dest.read_bytes()).hexdigest()
print(f"{dest.name}  {dest.stat().st_size} bytes")
print(f"SHA256  {digest}")
Path(str(dest) + ".sha256").write_text(f"{digest}  {dest.name}\n")
PY

cp -f "$ZIP" "$OUT_PUBLIC/$NAME"
cp -f "$ZIP.sha256" "$OUT_PUBLIC/$NAME.sha256"
echo "wrote $OUT_PUBLIC/$NAME"
