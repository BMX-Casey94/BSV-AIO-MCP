"""Build data-medium/corpus_index.json: one record per Medium post.

Medium analogue of build_corpus_index.py. For IN posts: parse YAML frontmatter
from summaries-medium/<slug>.md (title, date, slug, url, themes) and attach the
summary path. For OUT posts: attach the classifier's reason. Records sorted
newest-first. Dates come from firstPublishedAt (ms epoch).
"""
import json
import re
import unicodedata
from datetime import datetime, timezone
from pathlib import Path

archive = {p["slug"]: p for p in json.loads(Path("data-medium/archive.json").read_text(encoding="utf-8"))}
classification_raw = json.loads(Path("data-medium/classification.json").read_text(encoding="utf-8"))


def fold(s: str) -> str:
    """ASCII-fold: 'übermensch' -> 'ubermensch'."""
    return unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()


def strip_nonascii(s: str) -> str:
    """The triage pipeline dropped non-ASCII outright: 'übermensch' -> 'bermensch'."""
    return "".join(c for c in s if ord(c) < 128)


# The triage/classification pipeline truncated long slugs and stripped non-ASCII,
# so its slugs are prefixes (modulo folding/stripping) of the canonical archive slugs.
archive_slugs = list(archive)
folded_archive = {fold(s): s for s in archive_slugs}
stripped_archive = {strip_nonascii(s): s for s in archive_slugs}

def to_archive_slug(slug: str):
    if slug in archive:
        return slug
    for key in (fold(slug), strip_nonascii(slug)):
        if key in folded_archive:
            return folded_archive[key]
        if key in stripped_archive:
            return stripped_archive[key]
    cands = [s for s in archive_slugs
             if fold(s).startswith(fold(slug)) or fold(slug).startswith(fold(s))]
    if not cands:
        return None
    cands.sort(key=len)
    return cands[0]

classification = {}
unmatched = []
for v in classification_raw:
    canon = to_archive_slug(v["slug"])
    if canon is None:
        unmatched.append(v["slug"])
        continue
    classification[canon] = v
if unmatched:
    print("CLASSIFICATION SLUGS NOT MATCHED TO ARCHIVE:", unmatched)

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
            out[key] = val.strip('"').strip("'")
    return out

summary_files = list(Path("summaries-medium").glob("*.md"))
by_stem = {f.stem: f for f in summary_files}

def find_summary(slug: str):
    """Summaries are named by the truncated classification slug, not the
    canonical archive slug — fold/strip and prefix-match both directions."""
    if slug in by_stem:
        return by_stem[slug]
    keys = {fold(slug), strip_nonascii(slug)}
    cands = [s for s in by_stem
             if any(fold(s).startswith(k) or k.startswith(fold(s)) for k in keys)
             or any(strip_nonascii(s).startswith(k) or k.startswith(strip_nonascii(s)) for k in keys)]
    if not cands:
        return None
    cands.sort(key=lambda s: -len(s))
    return by_stem[cands[0]]

def iso_date(ms: str) -> str:
    return datetime.fromtimestamp(int(ms) / 1000, tz=timezone.utc).date().isoformat()

records = []
for slug, p in archive.items():
    v = classification.get(slug, {"verdict": "?", "reason": "", "confidence": "?"})
    rec = {
        "slug": slug,
        "medium_id": p["id"],
        "title": p["title"],
        "subtitle": p.get("subtitle") or "",
        "date": iso_date(p["firstPublishedAt"]),
        "url": p["url"],
        "word_count": int(p.get("wordCount") or 0),
        "medium_tags": p.get("tags", []),
        "verdict": v["verdict"],
        "classifier_reason": v.get("reason", ""),
    }
    if v["verdict"] == "IN":
        f = find_summary(slug)
        if f:
            fm = parse_frontmatter(f.read_text(encoding="utf-8"))
            rec["themes"] = fm.get("themes", [])
            rec["summary"] = f"summaries-medium/{f.name}"
        else:
            rec["themes"] = []
            rec["summary"] = None
    records.append(rec)

records.sort(key=lambda r: r["date"], reverse=True)
Path("data-medium/corpus_index.json").write_text(json.dumps(records, indent=2, ensure_ascii=False), encoding="utf-8")

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
    print(f"IN WITHOUT SUMMARY ({len(no_summary)}):")
    for s in no_summary:
        print("  ", s)
unused = [f"summaries-medium/{f.name}" for f in summary_files
          if f"summaries-medium/{f.name}" not in {r.get("summary") for r in ins}]
if unused:
    print("SUMMARY FILES NOT MAPPED TO ANY POST:", unused)
