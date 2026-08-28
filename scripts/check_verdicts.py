"""Spot-check verdicts for specific slugs."""
import json
import sys
from pathlib import Path

verdicts = {v["slug"]: v for v in json.loads(Path("data/classification.json").read_text(encoding="utf-8"))}
for slug in sys.argv[1:]:
    v = verdicts.get(slug)
    if v:
        print(f"{v['verdict']:>3} ({v['confidence']})  {v['slug']}  :: {v['reason']}")
    else:
        print(f"???  {slug}  :: NO VERDICT")
