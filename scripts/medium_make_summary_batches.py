"""Build summarisation batches for the Medium corpus.

- Loads data-medium/classification.json + data-medium/archive.json
- Excludes posts already summarised in summaries-medium/
- Writes data-medium/summary_batches/batch_NN.json with full metadata
- Writes data-medium/in_list.json
"""
import json
import re
from datetime import datetime, timezone
from pathlib import Path

BATCH_SIZE = 6


def safe_name(slug: str, pid: str) -> str:
    name = re.sub(r"[^a-z0-9\-]", "", slug.lower())[:80].strip("-")
    return name or pid


archive = {safe_name(p["slug"], p["id"]): p
           for p in json.loads(Path("data-medium/archive.json").read_text(encoding="utf-8"))}
verdicts = {v["slug"]: v for v in json.loads(Path("data-medium/classification.json").read_text(encoding="utf-8"))}

done = {f.stem for f in Path("summaries-medium").glob("*.md")}
print(f"already summarised: {len(done)}")

todo = [
    s for s, v in verdicts.items()
    if v["verdict"] == "IN" and s not in done and s in archive
]
todo.sort(key=lambda s: archive[s]["firstPublishedAt"])
print(f"to summarise: {len(todo)}")

out_dir = Path("data-medium/summary_batches")
out_dir.mkdir(parents=True, exist_ok=True)
for old in out_dir.glob("batch_*.json"):
    old.unlink()

n = 0
for i in range(0, len(todo), BATCH_SIZE):
    chunk = todo[i:i + BATCH_SIZE]
    payload = []
    for slug in chunk:
        p = archive[slug]
        dt = datetime.fromtimestamp(p["firstPublishedAt"] / 1000, tz=timezone.utc)
        payload.append({
            "slug": slug,
            "title": p["title"],
            "subtitle": p.get("subtitle"),
            "date": dt.strftime("%Y-%m-%d"),
            "url": p["url"],
            "text_file": f"data-medium/posts/text/{slug}.txt",
        })
    (out_dir / f"batch_{n:02d}.json").write_text(
        json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    n += 1
print(f"wrote {n} batches of <= {BATCH_SIZE}")

final = sorted(
    (s for s, v in verdicts.items() if v["verdict"] == "IN" and s in archive),
    key=lambda s: archive[s]["firstPublishedAt"],
)
Path("data-medium/in_list.json").write_text(json.dumps(final, indent=2), encoding="utf-8")
print(f"final IN list: {len(final)} posts -> data-medium/in_list.json")
