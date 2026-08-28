"""Merge education-pass verdicts into data/education_index.json and verify files.

Reads data/education/verdicts-*.json, joins with the batch files (for titles,
dates, themes), checks every KEEP has its distillation file on disk, and writes
a single machine-readable index.
"""
import json
from collections import Counter
from pathlib import Path

EDU = Path("data/education")

meta = {}
for bf in sorted(EDU.glob("batch-*.json")):
    for it in json.loads(bf.read_text(encoding="utf-8")):
        meta[(it["era"], it["slug"])] = it

verdicts = []
seen = set()
for vf in sorted(EDU.glob("verdicts-*.json")):
    for v in json.loads(vf.read_text(encoding="utf-8")):
        key = (v["era"], v["slug"])
        if key in seen:
            print("DUPLICATE verdict:", key)
            continue
        seen.add(key)
        verdicts.append(v)

missing_verdicts = [k for k in meta if k not in seen]
if missing_verdicts:
    print(f"MISSING VERDICTS ({len(missing_verdicts)}):")
    for era, slug in missing_verdicts:
        print("  ", era, slug)

index = []
missing_files = []
for v in verdicts:
    m = meta.get((v["era"], v["slug"]), {})
    rec = {**m, **v}
    if v["verdict"] == "KEEP":
        p = Path(v.get("education_file") or v.get("path") or "")
        if not p.exists():
            missing_files.append(str(p))
        rec["education_file"] = str(p)
        rec["path"] = str(p)
    else:
        rec["education_file"] = None
        rec["path"] = None
    index.append(rec)

index.sort(key=lambda r: (r["era"], r.get("date", "")))

keeps = [r for r in index if r["verdict"] == "KEEP"]
drops = [r for r in index if r["verdict"] == "DROP"]
stats = {
    "total": len(index),
    "keep": len(keeps),
    "drop": len(drops),
    "keep_by_era": dict(Counter(r["era"] for r in keeps)),
    "drop_by_era": dict(Counter(r["era"] for r in drops)),
    "keep_by_theme": Counter(t for r in keeps for t in r.get("themes", [])).most_common(),
    "missing_files": missing_files,
}

out = {
    "generated": "2026-08-14",
    "purpose": "Bitcoin-education distillation: essays retained for transferable BSV/original-Bitcoin logic; BTC-polemic, satire, authorship-campaign and litigation content dropped",
    "stats": {**stats, "keep_by_theme": dict(stats["keep_by_theme"])},
    "essays": index,
}
Path("data/education_index.json").write_text(
    json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8"
)
print(json.dumps({k: v for k, v in stats.items() if k != "missing_files"}, indent=2, default=str))
print("KEEP files missing on disk:", missing_files or "none")
