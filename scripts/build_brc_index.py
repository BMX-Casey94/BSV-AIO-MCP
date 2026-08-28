"""Build reference/brc_index.json from bsv-blockchain/BRCs SUMMARY.md.

Snapshot, do not live-fetch at query time. Re-run this script on the weekly
refresh (or when BRCs tags) to pick up new standards.
"""
import json
import re
import subprocess
from datetime import date
from pathlib import Path

SUMMARY_URL = "https://raw.githubusercontent.com/bsv-blockchain/BRCs/master/SUMMARY.md"
TREE_URL = "https://api.github.com/repos/bsv-blockchain/BRCs/git/trees/master?recursive=1"
RAW_BASE = "https://raw.githubusercontent.com/bsv-blockchain/BRCs/master/"
HTML_BASE = "https://github.com/bsv-blockchain/BRCs/blob/master/"


def curl(url):
    return subprocess.run(
        ["curl.exe", "-s", "-H", "User-Agent: csw-context", "--max-time", "60", url],
        capture_output=True, check=True,
    ).stdout.decode("utf-8", "replace")


def main():
    summary = curl(SUMMARY_URL)
    tree = json.loads(curl(TREE_URL))
    sha = tree.get("sha")
    files = {t["path"] for t in tree.get("tree", []) if t.get("type") == "blob"}

    category = None
    items = []
    cat_re = re.compile(r"^## (.+)$")
    item_re = re.compile(r"^\* \[([^\]]+)\]\(\./([^)]+)\)$")
    for line in summary.splitlines():
        m = cat_re.match(line.strip())
        if m:
            category = m.group(1).strip()
            continue
        m = item_re.match(line.strip())
        if not m or not category or category in ("Contribute", "Example"):
            continue
        title, path = m.group(1), m.group(2)
        num_m = re.search(r"/(\d{4})\.md$", path)
        number = int(num_m.group(1)) if num_m else None
        items.append({
            "number": number,
            "id": f"BRC-{number}" if number is not None else None,
            "title": title,
            "category": category.lower().replace(" ", "-"),
            "path": path,
            "raw_url": RAW_BASE + path,
            "html_url": HTML_BASE + path,
            "in_tree": path in files,
            "authority": 1 if category.lower() != "opinions" else 4,
            "implementations": [],
            "education_themes": [],
        })

    items.sort(key=lambda x: (x["number"] is None, x["number"] or 0))
    dest = Path("reference/brc_index.json")
    if dest.exists():
        prev = json.loads(dest.read_text(encoding="utf-8"))
        prev_count = int(prev.get("count") or 0)
        if prev_count >= 50 and len(items) < int(prev_count * 0.8):
            raise SystemExit(
                f"refusing to write {dest}: new count {len(items)} "
                f"is below 80% of previous {prev_count} (poisoned/truncated registry?)"
            )
    out = {
        "generated": str(date.today()),
        "source": "https://github.com/bsv-blockchain/BRCs",
        "revision": sha,
        "policy": "Hot snapshot. Refresh weekly via scripts/build_brc_index.py. Do not live-fetch per query.",
        "count": len(items),
        "by_category": {},
        "brcs": items,
    }
    for it in items:
        out["by_category"].setdefault(it["category"], 0)
        out["by_category"][it["category"]] += 1

    dest.write_text(json.dumps(out, indent=1, ensure_ascii=False), encoding="utf-8")
    print(f"wrote {dest}  {out['count']} BRCs  sha={sha[:12]}  cats={out['by_category']}")


if __name__ == "__main__":
    main()
