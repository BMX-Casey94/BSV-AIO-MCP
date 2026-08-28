"""Verify every IN post has a summary file; report missing."""
import json
from pathlib import Path

in_list = json.loads(Path("data/in_list.json").read_text(encoding="utf-8"))
have = {f.stem for f in Path("summaries").glob("*.md")}

missing = []
for slug in in_list:
    if slug in have:
        continue
    # filename may be a truncated slug; check prefix match both ways
    if any(h.startswith(slug) or slug.startswith(h) for h in have):
        continue
    missing.append(slug)

print(f"IN list: {len(in_list)}, summaries on disk: {len(have)}, missing: {len(missing)}")
for m in missing:
    print("MISSING:", m)
