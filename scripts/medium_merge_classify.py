"""Merge Medium classification verdicts, verify coverage, print the IN list."""
import json
import re
from pathlib import Path


def safe_name(slug: str, pid: str) -> str:
    name = re.sub(r"[^a-z0-9\-]", "", slug.lower())[:80].strip("-")
    return name or pid


archive = {safe_name(p["slug"], p["id"]): p
           for p in json.loads(Path("data-medium/archive.json").read_text(encoding="utf-8"))}

verdicts = {}
for f in sorted(Path("data-medium/classify_out").glob("chunk_*.json")):
    for v in json.loads(f.read_text(encoding="utf-8")):
        verdicts[v["slug"]] = v

missing = [s for s in archive if s not in verdicts]
extra = [s for s in verdicts if s not in archive]
print(f"verdicts={len(verdicts)} archive={len(archive)} missing={len(missing)} extra={len(extra)}")
if missing:
    print("MISSING:", missing[:20])
if extra:
    print("EXTRA:", extra[:20])

ins = [(s, v) for s, v in verdicts.items() if v["verdict"] == "IN"]
ins.sort(key=lambda kv: archive[kv[0]]["firstPublishedAt"])
print(f"\nIN: {len(ins)}  OUT: {len(verdicts) - len(ins)}")

low = [(s, v) for s, v in verdicts.items() if v["confidence"] == "low"]
print(f"\n--- low-confidence ({len(low)}) ---")
for s, v in low:
    print(f"{v['verdict']:>3}  {s}  :: {v['reason']}")

Path("data-medium/classification.json").write_text(
    json.dumps(sorted(verdicts.values(), key=lambda v: v["slug"]), indent=2, ensure_ascii=False),
    encoding="utf-8",
)
print("\nwrote data-medium/classification.json")
