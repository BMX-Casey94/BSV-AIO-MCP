"""Fetch the complete post archive list from a Substack publication API.

Paginates /api/v1/archive until an empty page and writes data/archive.json.
"""
import json
import time
import urllib.request
from pathlib import Path

BASE = "https://singulargrit.substack.com"
LIMIT = 50
OUT = Path("data/archive.json")

def get(url: str):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (archive-indexer)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    posts = []
    offset = 0
    while True:
        url = f"{BASE}/api/v1/archive?sort=new&search=&offset={offset}&limit={LIMIT}"
        batch = get(url)
        if not batch:
            break
        posts.extend(batch)
        print(f"offset={offset} got={len(batch)} total={len(posts)}")
        # NB: the API sometimes returns a short first page; only an empty
        # page reliably marks the end of the archive.
        offset += len(batch)
        time.sleep(0.4)

    # De-duplicate by id, keep newest-first order
    seen = set()
    unique = []
    for p in posts:
        if p["id"] not in seen:
            seen.add(p["id"])
            unique.append(p)

    OUT.write_text(json.dumps(unique, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"WROTE {len(unique)} posts -> {OUT}")
    if unique:
        print("newest:", unique[0]["post_date"], unique[0]["title"])
        print("oldest:", unique[-1]["post_date"], unique[-1]["title"])

if __name__ == "__main__":
    main()
