"""Extract a compact digest of all 201 summaries for synthesis writing.

Per summary: date, title, themes, and the Core thesis section (trimmed to
~350 chars). Output: data/digest.md, ordered chronologically.
"""
import json
import re
from pathlib import Path

records = [r for r in json.loads(Path("data/corpus_index.json").read_text(encoding="utf-8")) if r["verdict"] == "IN"]
records.sort(key=lambda r: r["date"])

THESIS_RE = re.compile(r"## Core thesis\n(.*?)(?=\n## )", re.S)

lines = []
for r in records:
    text = Path(r["summary"]).read_text(encoding="utf-8")
    m = THESIS_RE.search(text)
    thesis = ""
    if m:
        thesis = re.sub(r"\s+", " ", m.group(1)).strip()[:350]
    themes = ", ".join(r["themes"])
    lines.append(f"### {r['date']} — {r['title']}\n[{themes}]\n{thesis}\n")

Path("data/digest.md").write_text("\n".join(lines), encoding="utf-8")
total = sum(len(l) for l in lines)
print(f"digest: {len(lines)} entries, ~{total//1000}k chars -> data/digest.md")
