"""Generate education/README.md from data/education_index.json."""
import json
from collections import Counter, defaultdict
from pathlib import Path

idx = json.loads(Path("data/education_index.json").read_text(encoding="utf-8"))
essays = idx["essays"]
keeps = [r for r in essays if r["verdict"] == "KEEP"]
drops = [r for r in essays if r["verdict"] == "DROP"]

theme_counts = Counter(t for r in keeps for t in r.get("themes", []))

by_theme = defaultdict(list)
for r in keeps:
    for t in r.get("themes", ["untagged"]):
        by_theme[t].append(r)

L = []
L.append("# education/ — Bitcoin (BSV) core principles, distilled")
L.append("")
L.append("The educational residue of the corpus: every essay from both eras was re-read and")
L.append("classified for **transferable Bitcoin logic** — protocol mechanics, Script, UTXOs, SPV,")
L.append("wallets and keys, scaling engineering, security economics, monetary design, law and")
L.append("property, tokenisation, mining, privacy. Essays retained were rewritten as tight")
L.append("bullet-point principle files with the anti-BTC framing stripped out; what remains is")
L.append("positive, reusable BSV logic with the numbers, mechanisms and legal citations intact.")
L.append("")
L.append("## What was filtered out")
L.append("")
L.append("- BTC/BTC-Core/Lightning/exchange polemic whose content collapses without the attack target")
L.append("- Satire and fables (Ledgerford, Ledgerfall, Hashwarts, Intermedion, …)")
L.append("- The Satoshi-authorship campaign, litigation commentary and memoirs")
L.append("- Price-theology takedowns with no standalone monetary principle")
L.append("- Event commentary and self-promotion")
L.append("")
L.append("## At a glance")
L.append("")
s = idx["stats"]
L.append(f"- **{s['keep']} essays retained** ({s['keep_by_era'].get('medium', 0)} Medium-era,"
         f" {s['keep_by_era'].get('substack', 0)} Substack-era) of {s['total']} Bitcoin-related essays audited")
L.append(f"- **{s['drop']} essays dropped** with per-essay reasons in `data/education_index.json`")
L.append("- Each retained essay: `education/<era>--<slug>.md` — 4–12 bullets of core principles,")
L.append("  YAML frontmatter (title, era, date, themes, source summary, canonical URL)")
L.append("")
L.append("## Theme distribution of retained essays")
L.append("")
L.append("| Theme | Essays |")
L.append("|---|---|")
for t, c in theme_counts.most_common():
    L.append(f"| {t} | {c} |")
L.append("")
L.append("(Essays carry multiple tags, so totals exceed the essay count.)")
L.append("")
L.append("## Retained essays by theme")
L.append("")
for t, c in theme_counts.most_common():
    L.append(f"### {t} ({c})")
    L.append("")
    for r in sorted(by_theme[t], key=lambda x: (x["era"], x.get("date", ""))):
        title = r["title"].replace("|", "\\|")
        L.append(f"- [{title}]({r['education_file']}) — {r['era']}, {r.get('date', '?')[:10]}")
    L.append("")
L.append("## Dropped essays")
L.append("")
L.append(f"{len(drops)} essays were dropped. Full per-essay reasons live in `data/education_index.json`;")
L.append("the list below is for manual spot-checking (borderline calls are inevitable in a corpus this polemical).")
L.append("")
L.append("| Era | Date | Title | Reason |")
L.append("|---|---|---|---|")
for r in sorted(drops, key=lambda x: (x["era"], x.get("date", ""))):
    title = r["title"].replace("|", "\\|")
    L.append(f"| {r['era']} | {r.get('date', '?')[:10]} | {title} | {r['reason']} |")
L.append("")

Path("education/README.md").write_text("\n".join(L), encoding="utf-8")
print(f"education/README.md written: {len(keeps)} KEEP, {len(drops)} DROP, {len(L)} lines")
