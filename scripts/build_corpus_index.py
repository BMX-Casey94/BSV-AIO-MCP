"""Build data/corpus_index.json: one record per post across the whole archive.

For IN posts: parse YAML frontmatter from the summary file (title, date, slug,
url, themes) and attach summary path. For OUT posts: attach the classifier's
reason. Records are sorted newest-first.
"""
import json
import re
from pathlib import Path

archive = {p["slug"]: p for p in json.loads(Path("data/archive.json").read_text(encoding="utf-8"))}
classification = {v["slug"]: v for v in json.loads(Path("data/classification.json").read_text(encoding="utf-8"))}
classification["digital-cash-is-not-a-vault"] = {
    "slug": "digital-cash-is-not-a-vault", "verdict": "IN",
    "confidence": "high", "reason": "Single-key security failure in digital cash; core Bitcoin topic",
}

FM_RE = re.compile(r"\A---\n(.*?)\n---\n", re.S)

def parse_frontmatter(text: str) -> dict:
    m = FM_RE.match(text)
    if not m:
        return {}
    out = {}
    for line in m.group(1).splitlines():
        if ":" not in line:
            continue
        key, _, val = line.partition(":")
        key, val = key.strip(), val.strip()
        if val.startswith("[") and val.endswith("]"):
            out[key] = [t.strip() for t in val[1:-1].split(",") if t.strip()]
        else:
            out[key] = val.strip('"')
    return out

# map summary files to slugs (filenames may be truncated slugs).
# Exact match first; otherwise the LONGEST mutually-prefixing stem wins,
# so "set-in-stone-or-sold-..." never steals "set-in-stone.md".
summary_files = list(Path("summaries").glob("*.md"))
by_stem = {f.stem: f for f in summary_files}
def find_summary(slug: str):
    if slug in by_stem:
        return by_stem[slug]
    candidates = [
        f for f in summary_files
        if slug.startswith(f.stem) or f.stem.startswith(slug)
    ]
    if not candidates:
        return None
    candidates.sort(key=lambda f: -len(f.stem))
    return candidates[0]

records = []
for slug, p in archive.items():
    v = classification.get(slug, {"verdict": "?", "reason": "", "confidence": "?"})
    rec = {
        "slug": slug,
        "title": p["title"],
        "subtitle": p.get("subtitle") or "",
        "date": p["post_date"][:10],
        "url": f"https://singulargrit.substack.com/p/{slug}",
        "verdict": v["verdict"],
        "classifier_reason": v.get("reason", ""),
        "audience": p.get("audience", "everyone"),
    }
    if v["verdict"] == "IN":
        f = find_summary(slug)
        if f:
            fm = parse_frontmatter(f.read_text(encoding="utf-8"))
            rec["themes"] = fm.get("themes", [])
            rec["summary"] = f"summaries/{f.name}"
        else:
            rec["themes"] = []
            rec["summary"] = None
    records.append(rec)

records.sort(key=lambda r: r["date"], reverse=True)
Path("data/corpus_index.json").write_text(json.dumps(records, indent=2, ensure_ascii=False), encoding="utf-8")

ins = [r for r in records if r["verdict"] == "IN"]
theme_counts = {}
for r in ins:
    for t in r["themes"]:
        theme_counts[t] = theme_counts.get(t, 0) + 1
print(f"records={len(records)} IN={len(ins)} OUT={len(records)-len(ins)}")
print("theme distribution:")
for t, c in sorted(theme_counts.items(), key=lambda kv: -kv[1]):
    print(f"  {c:>3}  {t}")
no_summary = [r["slug"] for r in ins if not r["summary"]]
if no_summary:
    print("IN WITHOUT SUMMARY:", no_summary)

# integrity: each summary file must serve exactly one post
used = {}
for r in ins:
    if r["summary"]:
        used.setdefault(r["summary"], []).append(r["slug"])
for f, slugs in used.items():
    if len(slugs) > 1:
        print("SHARED FILE:", f, slugs)
unused = [f"summaries/{f.name}" for f in summary_files if f"summaries/{f.name}" not in used]
if unused:
    print("SUMMARY FILES NOT MAPPED TO ANY POST:", unused)
