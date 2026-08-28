"""Split triage.json into chunks for parallel LLM classification."""
import json
from pathlib import Path

CHUNK_SIZE = 61

rows = json.loads(Path("data/triage.json").read_text(encoding="utf-8"))
out_dir = Path("data/classify_chunks")
out_dir.mkdir(parents=True, exist_ok=True)

slim = [
    {"slug": r["slug"], "date": r["date"], "title": r["title"], "subtitle": r["subtitle"], "score": r["score"]}
    for r in rows
]

for i in range(0, len(slim), CHUNK_SIZE):
    chunk = slim[i:i + CHUNK_SIZE]
    n = i // CHUNK_SIZE
    (out_dir / f"chunk_{n}.json").write_text(json.dumps(chunk, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"chunk_{n}.json: {len(chunk)} posts, scores {chunk[0]['score']}..{chunk[-1]['score']}")
