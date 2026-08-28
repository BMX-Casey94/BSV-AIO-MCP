"""Audit: list paywalled posts, and compare tail of raw vs text for one slug."""
import json
import re
import sys
from pathlib import Path

mode = sys.argv[1]

if mode == "paywalled":
    paid = []
    for f in sorted(Path("data/posts/raw").glob("*.json")):
        d = json.loads(f.read_text(encoding="utf-8"))
        if d.get("audience") == "only_paid":
            paid.append((f.stem, (d.get("post_date") or "")[:10], len(d.get("body_html") or "")))
    print(f"paywalled posts: {len(paid)}")
    for slug, date, n in paid:
        print(f"  {date}  {slug}  (preview body {n}B)")

elif mode == "tail":
    slug = sys.argv[2]
    d = json.loads(Path(f"data/posts/raw/{slug}.json").read_text(encoding="utf-8"))
    html = d.get("body_html") or ""
    text_only = re.sub(r"<[^>]+>", " ", html)
    text_only = re.sub(r"\s+", " ", text_only)
    print("RAW TAIL:", text_only[-400:])
    t = Path(f"data/posts/text/{slug}.txt").read_text(encoding="utf-8")
    print("\nTEXT TAIL:", re.sub(r"\s+", " ", t)[-400:])
