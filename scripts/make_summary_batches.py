"""Build summarisation batches from classification + archive.

- Adds the one missed post (digital-cash-is-not-a-vault) as IN.
- Excludes posts already summarised in summaries/.
- Writes data/summary_batches/batch_NN.json with full metadata.
"""
import json
from pathlib import Path

BATCH_SIZE = 6

archive = {p["slug"]: p for p in json.loads(Path("data/archive.json").read_text(encoding="utf-8"))}
verdicts = {v["slug"]: v for v in json.loads(Path("data/classification.json").read_text(encoding="utf-8"))}
verdicts["digital-cash-is-not-a-vault"] = {
    "slug": "digital-cash-is-not-a-vault",
    "verdict": "IN",
    "confidence": "high",
    "reason": "Single-key security failure in digital cash; core Bitcoin topic",
}

done = set()
for f in Path("summaries").glob("*.md"):
    stem = f.stem
    for slug in archive:
        if slug == stem or slug.startswith(stem):
            done.add(slug)
            break
print(f"already summarised: {len(done)}")

todo = [
    s for s, v in verdicts.items()
    if v["verdict"] == "IN" and s not in done and s in archive
]
todo.sort(key=lambda s: archive[s]["post_date"])
print(f"to summarise: {len(todo)}")

out_dir = Path("data/summary_batches")
out_dir.mkdir(parents=True, exist_ok=True)
for old in out_dir.glob("batch_*.json"):
    old.unlink()

n = 0
for i in range(0, len(todo), BATCH_SIZE):
    chunk = todo[i:i + BATCH_SIZE]
    payload = []
    for slug in chunk:
        p = archive[slug]
        payload.append({
            "slug": slug,
            "title": p["title"],
            "subtitle": p.get("subtitle"),
            "date": p["post_date"],
            "url": f"https://singulargrit.substack.com/p/{slug}",
            "text_file": f"data/posts/text/{slug}.txt",
        })
    (out_dir / f"batch_{n:02d}.json").write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    n += 1
print(f"wrote {n} batches of <= {BATCH_SIZE}")

# persist the final IN list (including the manual add) for the index build
final = sorted(
    (s for s, v in verdicts.items() if v["verdict"] == "IN"),
    key=lambda s: archive[s]["post_date"],
)
Path("data/in_list.json").write_text(json.dumps(final, indent=2), encoding="utf-8")
print(f"final IN list: {len(final)} posts -> data/in_list.json")
