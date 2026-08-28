import json
from pathlib import Path

d = json.loads(Path("data/developer_scan.json").read_text(encoding="utf-8"))
import sys
topics = sys.argv[1:] or list(d)
for t in topics:
    if t not in d:
        continue
    print("##", t)
    for h in d[t]["top_essays"][:10]:
        name = h["file"].replace("\\", "/").split("/")[-1][:70]
        print(f"   {h['hits']:>3}  [{h['era']}] {name}")
    print()
