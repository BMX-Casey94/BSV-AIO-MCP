"""Build batches for the Bitcoin-education distillation pass.

Reads both corpus indexes, emits batches of ~20 IN essays (era, slug, title,
summary path, themes) to data/education/batch-NN.json for parallel agents.
"""
import json
from pathlib import Path

OUT = Path("data/education")
OUT.mkdir(parents=True, exist_ok=True)

items = []
for era, idx_path in (("substack", "substack-articles/corpus_index.json"), ("medium", "medium-articles/corpus_index.json")):
    for r in json.loads(Path(idx_path).read_text(encoding="utf-8")):
        if r["verdict"] != "IN":
            continue
        items.append({
            "era": era,
            "slug": r["slug"],
            "title": r["title"],
            "date": r["date"],
            "summary": r["summary"],
            "themes": r["themes"],
        })

items.sort(key=lambda x: (x["era"], x["date"]))
print(f"total IN essays: {len(items)}")

BATCH = 20
n = 0
for i in range(0, len(items), BATCH):
    n += 1
    chunk = items[i:i + BATCH]
    (OUT / f"batch-{n:02d}.json").write_text(
        json.dumps(chunk, indent=1, ensure_ascii=False), encoding="utf-8"
    )
print(f"batches written: {n}")
