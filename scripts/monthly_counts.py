"""Monthly IN/OUT counts for the canvas cadence chart."""
import json
from collections import defaultdict
from pathlib import Path

records = json.loads(Path("data/corpus_index.json").read_text(encoding="utf-8"))
buckets = defaultdict(lambda: [0, 0])
for r in records:
    key = r["date"][:7]
    buckets[key][0 if r["verdict"] == "IN" else 1] += 1

for k in sorted(buckets):
    i, o = buckets[k]
    print(f"{k}: IN={i} OUT={o}")
