import json
import re
import struct
import subprocess
import sys
import zipfile

MODULE_XML = "module/SkipLord/SubModule.xml"
ZIP_DLL = "Modules/SkipLord/bin/Win64_Shipping_Client/SkipLord.dll"
ZIP_XML = "Modules/SkipLord/SubModule.xml"
MODULE_VERSION = re.compile(r'<Version\s+value="v(\d+\.\d+\.\d+)"\s*/>')
SUBJECT = re.compile(r"^\[(\d+\.\d+\.\d+|no release)\] \S")
HEADING = re.compile(r"^## (.+?)\s*$", re.M)
MAX_ENTRY = 248
DASHES = ("\u2013", "\u2014")


def fail(message):
    print(f"::error::{message}", file=sys.stderr)
    sys.exit(1)


def git(*args, check=True):
    result = subprocess.run(["git", *args], capture_output=True, text=True)
    if check and result.returncode != 0:
        fail(f"git {' '.join(args)} failed: {result.stderr.strip()}")
    return result


def show(sha, path):
    result = git("show", f"{sha}:{path}", check=False)
    return result.stdout if result.returncode == 0 else None


def module_version(text, where):
    found = MODULE_VERSION.findall(text or "")
    if len(found) != 1:
        fail(f"{where}: expected one <Version value=\"vX.Y.Z\" /> line, found {len(found)}")
    return found[0]


def version_at(sha):
    return module_version(show(sha, MODULE_XML), f"{MODULE_XML} at {sha[:7]}")


def as_tuple(version):
    return tuple(int(part) for part in version.split("."))


def bullets(text):
    return [line[2:].rstrip() for line in text.splitlines() if line.startswith("- ")]


def changelog_section(text, version):
    headings = list(HEADING.finditer(text))
    if not headings:
        fail("CHANGELOG.md has no version sections")
    names = [h.group(1) for h in headings]
    if "Unreleased" in names:
        fail(f"CHANGELOG.md still has an Unreleased heading in the {version} commit")
    if names[0] != version:
        fail(f"CHANGELOG.md starts with ## {names[0]}, expected ## {version}")
    end = headings[1].start() if len(headings) > 1 else len(text)
    return text[headings[0].end():end]


def body_of(sha):
    return git("log", "-1", "--format=%b", sha).stdout.strip()


def touched(sha):
    out = git("diff-tree", "--root", "--no-commit-id", "--name-only", "-r", sha).stdout
    return set(out.split())


def check_notes(entries, version):
    if not entries:
        fail(f"{version} has no changelog entries")
    for entry in entries:
        if len(entry) > MAX_ENTRY:
            fail(f"{version} entry is {len(entry)} characters, the limit is {MAX_ENTRY}: {entry[:80]}")
        if any(dash in entry for dash in DASHES):
            fail(f"{version} entry uses a long dash: {entry[:80]}")


def check_version_commit(sha, version, parent):
    if version_at(sha) != version:
        fail(f"{sha[:7]} says [{version}] but {MODULE_XML} says v{version_at(sha)}")
    if parent and as_tuple(version) <= as_tuple(version_at(parent)):
        fail(f"{sha[:7]} ships {version}, which is not above v{version_at(parent)}")
    if "CHANGELOG.md" not in touched(sha):
        fail(f"{sha[:7]} ships {version} without touching CHANGELOG.md")
    changelog = show(sha, "CHANGELOG.md")
    if changelog is None:
        fail(f"{sha[:7]} has no CHANGELOG.md")
    entries = bullets(changelog_section(changelog, version))
    body = body_of(sha)
    stray = [line for line in body.splitlines() if line.strip() and not line.startswith("- ")]
    if stray:
        fail(f"{sha[:7]} body has lines that are not entries: {stray[0][:80]}")
    if bullets(body) != entries:
        fail(f"{sha[:7]} body and the CHANGELOG.md section for {version} do not say the same thing")
    check_notes(entries, version)


def tagged_commit(version):
    result = git("rev-parse", "-q", "--verify", f"refs/tags/v{version}^{{commit}}", check=False)
    return result.stdout.strip() if result.returncode == 0 else None


def parent_of(sha):
    result = git("rev-parse", "-q", "--verify", f"{sha}^", check=False)
    return result.stdout.strip() if result.returncode == 0 else None


def pushed_commits(before, head):
    known = before and not re.fullmatch(r"0*", before)
    if known and git("cat-file", "-e", f"{before}^{{commit}}", check=False).returncode == 0:
        if git("merge-base", "--is-ancestor", before, head, check=False).returncode == 0:
            return git("rev-list", "--reverse", f"{before}..{head}").stdout.split()
    return [head]


def plan(before, head):
    head = git("rev-parse", head).stdout.strip()
    targets = []
    for sha in pushed_commits(before, head):
        subject = git("log", "-1", "--format=%s", sha).stdout.strip()
        marker = SUBJECT.match(subject)
        if not marker:
            fail(f"{sha[:7]} subject must start with [X.Y.Z] or [no release]: {subject[:80]}")
        parent = parent_of(sha)
        if marker.group(1) == "no release":
            if parent and version_at(parent) != version_at(sha):
                fail(f"{sha[:7]} is [no release] but changes the version in {MODULE_XML}")
            module_paths = [p for p in touched(sha) if p.startswith(("module/", "module-src/"))]
            if module_paths and "CHANGELOG.md" not in touched(sha):
                print(f"::notice::{sha[:7]} changes the module under [no release] with no changelog entry", file=sys.stderr)
            continue
        version = marker.group(1)
        tagged = tagged_commit(version)
        if tagged == sha:
            continue
        if tagged:
            fail(f"v{version} is already released from {tagged[:7]}, a version is published once")
        check_version_commit(sha, version, parent)
        targets.append({"sha": sha, "version": version, "publish": True})
    if not any(t["sha"] == head for t in targets):
        targets.append({"sha": head, "version": version_at(head), "publish": False})
    print("targets=" + json.dumps(targets, separators=(",", ":")))


def fixed_file_version(dll):
    at = dll.find(struct.pack("<I", 0xFEEF04BD))
    if at < 0:
        fail("SkipLord.dll has no version resource")
    ms, ls = struct.unpack_from("<II", dll, at + 8)
    return (ms >> 16, ms & 0xFFFF, ls >> 16, ls & 0xFFFF)


def stamp(zip_path):
    with open(MODULE_XML, encoding="utf-8") as handle:
        version = module_version(handle.read(), MODULE_XML)
    with zipfile.ZipFile(zip_path) as archive:
        names = archive.namelist()
        for required in (ZIP_DLL, ZIP_XML):
            if required not in names:
                fail(f"{zip_path} is missing {required}")
        dll = archive.read(ZIP_DLL)
        packed = module_version(archive.read(ZIP_XML).decode("utf-8"), ZIP_XML)
    file_version = fixed_file_version(dll)
    expected = as_tuple(version) + (0,)
    if file_version != expected:
        shown = ".".join(map(str, file_version))
        fail(f"SkipLord.dll file version is {shown}, the source says {version}")
    if packed != version:
        fail(f"the zip's SubModule.xml says v{packed}, the source says v{version}")
    print(f"stamp ok: SkipLord.dll {'.'.join(map(str, file_version))}, SubModule.xml v{packed}")


def notes(sha):
    entries = bullets(body_of(sha))
    check_notes(entries, sha[:7])
    print("\n".join(f"- {entry}" for entry in entries))


def main(argv):
    if len(argv) >= 2 and argv[1] == "version":
        with open(MODULE_XML, encoding="utf-8") as handle:
            print(module_version(handle.read(), MODULE_XML))
    elif len(argv) == 4 and argv[1] == "plan":
        plan(argv[2], argv[3])
    elif len(argv) == 3 and argv[1] == "stamp":
        stamp(argv[2])
    elif len(argv) == 3 and argv[1] == "notes":
        notes(argv[2])
    else:
        fail("usage: release-gate.py version | plan BEFORE HEAD | stamp ZIP | notes SHA")


if __name__ == "__main__":
    main(sys.argv)
