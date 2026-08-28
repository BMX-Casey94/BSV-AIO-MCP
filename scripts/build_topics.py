"""Build topics/ — thematic directories batching the summarised essays.

Sources: summaries/ (Substack) and summaries-medium/ (Medium, when present).
Each essay carries YAML frontmatter with theme tags from the controlled
vocabulary; fine-grained topics the vocabulary lacks (UTXOs, stablecoins,
CBDCs...) are routed by keyword rules over the summary text.

Every topic directory gets:
  _INDEX.md          — scope note + chronological table of member essays
  <date>_<slug>.md   — a copy of each member summary (regenerate, don't edit)

An IN essay that no Bitcoin-specific topic claims AND whose summary is
near-free of Bitcoin vocabulary is copied to _review/ instead — those are
the classifier's suspected false positives, for manual checking.

Outputs topics/_INDEX.json (machine-readable topic -> slugs map).
"""
import json
import re
import shutil
from pathlib import Path

# ---------------------------------------------------------------- topics
# dir -> (display name, scope note, source themes, extra keyword rules)
# keyword rules: (regex, min_hits) applied to the summary body
TOPICS = {
    "wallets-addresses-keys": (
        "Wallets, addresses and keys",
        "Key generation and custody, address derivation, brain wallets, air-gapped "
        "construction, ElectrumSV, and the control-vs-ownership question.",
        ["wallets-keys"],
        [(r"\bwallets?\b|\baddresses?\b|private key|brain wallet|air[- ]gap|electrumsv|seed phrase|key derivation", 3)],
    ),
    "utxo-model": (
        "UTXOs and the coin model",
        "The unspent-output model: coins as chains of signatures, outpoints, "
        "sub-satoshi channels, UTXO-held commitments and auctions.",
        [],
        [(r"\butxos?\b|unspent (?:transaction )?outputs?|outpoints?|sub[- ]satoshi", 2)],
    ),
    "scripts-opcodes": (
        "Script and opcodes",
        "Bitcoin Script itself: opcode semantics, macro expansion, compilers "
        "(Runar), VMs (BSVM), CLTV, and what the 2009 instruction set can express.",
        ["script-technical"],
        [(r"\bOP_[A-Z_]+\b|\bopcodes?\b|\brunar\b|\bbsvm\b|\bcltv\b", 2)],
    ),
    "stablecoins": (
        "Stablecoins",
        "Fiat-token designs, the 'lost spark' thesis, and why stablecoins belong "
        "on Bitcoin's rails.",
        [],
        [(r"\bstablecoins?\b|\btether\b|\busdc\b|\busdt\b", 1)],
    ),
    "mining-consensus": (
        "Mining and consensus",
        "Proof-of-work as economic action: miners as the network, difficulty, "
        "orphans, Nakamoto consensus vs BFT, the alert key.",
        ["mining-consensus"],
        [],
    ),
    "scaling-throughput": (
        "Scaling and throughput",
        "Block-size economics, Teranode's service decomposition, propagation, "
        "multicast, and the five-transactions-a-second critique.",
        ["scaling-throughput"],
        [],
    ),
    "spv-light-clients": (
        "SPV and light clients",
        "Simplified Payment Verification as the designed user mode: header-chain "
        "proofs, offline synchronisation, and the refutation of everyone-validates.",
        ["spv-light-clients"],
        [],
    ),
    "security-economics": (
        "Security economics",
        "The security budget: subsidy halving, fee replacement, attack-cost "
        "curves, memorylessness vs Markov, energy intensity.",
        ["security-economics"],
        [],
    ),
    "privacy-identity": (
        "Privacy and identity",
        "Privacy without anonymity: key rotation, ECDH notes, identity "
        "infrastructure, and where the line between the two sits.",
        ["privacy", "identity"],
        [],
    ),
    "micropayments-channels": (
        "Micropayments and payment channels",
        "Penny-flat fees, bonded channels, e-cash hybrids, and selling the "
        "unspent chain.",
        ["micropayments"],
        [],
    ),
    "lightning-l2-critique": (
        "Lightning and L2 critiques",
        "Why hub-and-spoke off-chain networks rebuild banking: watchtowers, "
        "custody, liquidity cartels.",
        ["lightning-l2"],
        [],
    ),
    "monetary-economics": (
        "Money and monetary economics",
        "Unit of account follows medium of exchange; digital-gold critique; "
        "hoarding vs circulation; power-law retrodiction.",
        ["monetary-economics"],
        [],
    ),
    "intermediaries-custody": (
        "Intermediaries and custody",
        "The toll-booth economy: exchanges, ETFs, custodians, and which "
        "middlemen Bitcoin was built to make optional.",
        ["intermediaries"],
        [],
    ),
    "law-regulation": (
        "Law and regulation",
        "Keys as fiduciary control, bailment on a ledger, protocol-as-offer, "
        "court orders, NAR/DAR, and the CLARITY Act.",
        ["law-regulation"],
        [],
    ),
    "property-rights": (
        "Property rights",
        "Digital property and scarcity, IP debates, bearer instruments, and "
        "what ownership of a UTXO actually is.",
        ["property-rights"],
        [],
    ),
    "governance-decentralisation": (
        "Governance and decentralisation",
        "Consensus vs governance, the five-layer decentralisation vector, "
        "coalitions, and the proof-of-stake bearer-share critique.",
        ["governance-decentralisation"],
        [],
    ),
    "protocol-immutability": (
        "Protocol immutability",
        "Set-in-stone as constitution: hold-up problems, ossification vs "
        "capture, forks as pathology.",
        ["protocol-immutability"],
        [],
    ),
    "satoshi-history": (
        "Satoshi history",
        "The origin record: whitepaper exegesis, the alert key, early design "
        "intent, and attribution disputes.",
        ["satoshi-history"],
        [],
    ),
    "evidence-audit": (
        "Evidence, timestamping and audit",
        "The ledger as proof engine: timestamp server, triple-entry accounting, "
        "sealed commitments, selective disclosure.",
        ["audit-accounting"],
        [],
    ),
    "tokenisation": (
        "Tokenisation",
        "Tokens as UTXO commitments: what on-chain tokens can and cannot "
        "represent.",
        ["tokenisation"],
        [],
    ),
    "quantum": (
        "Quantum scepticism",
        "The quantum-threat literature audited: cost frontiers, logical qubits, "
        "and hash-anchored defences.",
        ["quantum-scepticism"],
        [],
    ),
    "networking": (
        "Network architecture",
        "The networking layer: small-world topology, multicast propagation, "
        "IPv6, and why home nodes don't matter to block production.",
        ["networking"],
        [],
    ),
    "btc-critique": (
        "BTC critique",
        "Direct engagements with BTC-mainstream orthodoxy: small blocks, "
        "node theology, ETF financialisation, protocol capture.",
        ["btc-critique"],
        [],
    ),
    "satire": (
        "Satire and fables",
        "The allegorical fifth of the corpus: Ledgerford, Hashwarts and the "
        "rest — argument by dramatised incentive structure.",
        ["satire"],
        [],
    ),
    "ai-blockchain": (
        "AI and blockchain",
        "Where machine intelligence meets the ledger: verifiable AI memory, "
        "training-data economics, and what a chain cannot make a model know.",
        ["ai-blockchain"],
        [],
    ),
    "cbdc-banking": (
        "CBDCs and banking",
        "Central-bank digital currencies, fractional-reserve parallels, "
        "settlement rails (mBridge) and the banking system's gravity.",
        [],
        [(r"\bCBDC\b|central bank digital|fractional[- ]reserve|\bmBridge\b", 1)],
    ),
}

# strong Bitcoin vocabulary for the false-positive check
BITCOIN_VOCAB = re.compile(
    r"\bbitcoin\b|\bBTC\b|\bBSV\b|\bblockchain\b|\bUTXO\b|\bsatoshi\b|"
    r"\bmin(?:ing|er|ers)\b|proof[- ]of[- ]work|\bledger\b|\bsegwit\b|"
    r"\blightning\b|\bscript\b|\bopcodes?\b|\bnodes?\b|\btokens?\b",
    re.I,
)
MIN_VOCAB_HITS = 4

# essays at or below this density AND holding no hard-technical topic are
# copied to _review/ as boundary cases for manual checking (they keep their
# normal topic memberships too — _review is a watch-list, not an exile)
REVIEW_VOCAB_CEILING = 2
HARD_TOPICS = {
    "wallets-addresses-keys", "utxo-model", "scripts-opcodes",
    "mining-consensus", "scaling-throughput", "spv-light-clients",
    "security-economics", "quantum", "tokenisation", "stablecoins",
}

FRONT_RE = re.compile(r"^---\n(.*?)\n---\n", re.S)


def parse_summary(path: Path, platform: str) -> dict | None:
    text = path.read_text(encoding="utf-8")
    m = FRONT_RE.match(text)
    if not m:
        return None
    fm = m.group(1)
    def field(name):
        fm_m = re.search(rf"^{name}:\s*(.+)$", fm, re.M)
        return fm_m.group(1).strip().strip("'\"") if fm_m else ""
    themes_m = re.search(r"^themes:\s*\[(.*?)\]", fm, re.M | re.S)
    themes = [t.strip() for t in themes_m.group(1).split(",")] if themes_m else []
    thesis = ""
    body = text[m.end():]
    th_m = re.search(r"## Core thesis\n(.+?)(?:\n\n|\n##)", body, re.S)
    if th_m:
        thesis = " ".join(th_m.group(1).split())[:260]
    return {
        "slug": field("slug") or path.stem,
        "title": field("title"),
        "date": field("date"),
        "url": field("url"),
        "themes": themes,
        "thesis": thesis,
        "text": text,
        "path": path,
        "platform": platform,
    }


def route(entry: dict) -> list[str]:
    hits = []
    for dirname, (_name, _scope, themes, kw_rules) in TOPICS.items():
        if any(t in entry["themes"] for t in themes):
            hits.append(dirname)
            continue
        for pat, minimum in kw_rules:
            if len(re.findall(pat, entry["text"], re.I)) >= minimum:
                hits.append(dirname)
                break
    return hits


def main() -> None:
    entries = []
    for platform, d in (("substack", "summaries"), ("medium", "summaries-medium")):
        for f in sorted(Path(d).glob("*.md")):
            e = parse_summary(f, platform)
            if e:
                entries.append(e)
    print(f"parsed {len(entries)} summaries")

    out = Path("topics")
    if out.exists():
        shutil.rmtree(out)
    out.mkdir()

    index: dict[str, list[str]] = {}
    review = []
    for e in entries:
        dirs = route(e)
        vocab_hits = len(BITCOIN_VOCAB.findall(e["text"]))
        if not dirs:
            # no topic claimed it at all — unrouted; review regardless of density
            review.append((e, "no topic assignment"))
            dirs = ["_review"]
        elif vocab_hits <= REVIEW_VOCAB_CEILING and not any(d in HARD_TOPICS for d in dirs):
            review.append((e, f"low Bitcoin-vocab density ({vocab_hits}) and no hard-technical topic"))
            dirs = dirs + ["_review"]
        for d in dirs:
            index.setdefault(d, []).append(e["slug"])
            tgt_dir = out / d
            tgt_dir.mkdir(exist_ok=True)
            shutil.copyfile(e["path"], tgt_dir / f"{e['date']}_{e['path'].stem}.md")

    by_slug = {e["slug"]: e for e in entries}
    for dirname, (name, scope, _t, _k) in TOPICS.items():
        slugs = sorted(index.get(dirname, []), key=lambda s: by_slug[s]["date"])
        if not slugs:
            continue
        lines = [f"# {name}", "", scope, "",
                 f"**{len(slugs)} essays** (copies in this directory; regenerate with "
                 f"`scripts/build_topics.py` — do not edit copies).", "",
                 "| Date | Essay | Platform | Premise |", "|---|---|---|---|"]
        for s in slugs:
            e = by_slug[s]
            premise = e["thesis"][:140].replace("|", "\\|")
            title = e["title"].replace("|", "\\|")
            lines.append(f"| {e['date']} | [{title}]({e['url']}) | {e['platform']} | {premise}… |")
        (out / dirname / "_INDEX.md").write_text("\n".join(lines) + "\n", encoding="utf-8")

    if review:
        rdir = out / "_review"
        rdir.mkdir(exist_ok=True)
        lines = ["# _review — boundary cases for manual checking", "",
                 "Classified IN, but flagged by an independent signal (very low Bitcoin",
                 "vocabulary in the summary and no hard-technical topic, or no topic at",
                 "all). Most are probably legitimately Bitcoin-adjacent — glance and clear;",
                 "any that are truly not Bitcoin-related are candidates for reclassification",
                 "to OUT. Copies here are duplicates; the essays keep their topic homes.", "",
                 "| Date | Essay | Platform | Themes | Why flagged |", "|---|---|---|---|---|"]
        for e, why in review:
            lines.append(f"| {e['date']} | [{e['title']}]({e['url']}) | {e['platform']} | {', '.join(e['themes'])} | {why} |")
        (rdir / "_INDEX.md").write_text("\n".join(lines) + "\n", encoding="utf-8")

    (out / "_INDEX.json").write_text(json.dumps(
        {k: sorted(v) for k, v in sorted(index.items())}, indent=2), encoding="utf-8")

    readme = ["# topics/ — the corpus, batched by subject", "",
              "Each directory holds copies of the essay summaries relevant to its subject,",
              "plus an `_INDEX.md` with a scope note and a chronological table of contents.",
              "Essays span multiple subjects, so most appear in two to four directories",
              "(copies are cheap; regenerate with `scripts/build_topics.py`, never edit).", "",
              "`_INDEX.json` is the machine-readable topic -> slugs map for agent/MCP use.", "",
              "## Directories", "",
              "| Directory | Essays | Scope |", "|---|---|---|"]
    for dirname, (name, scope, _t, _k) in TOPICS.items():
        n = len(index.get(dirname, []))
        if n:
            readme.append(f"| [{dirname}/]({dirname}/_INDEX.md) | {n} | {scope} |")
    readme.append(f"| [_review/](_review/_INDEX.md) | {len(review)} | Boundary cases flagged for manual checking |")
    readme += ["", f"Total: {sum(len(v) for v in index.values())} copies of "
               f"{len(entries)} essays across {len(index)} directories.", ""]
    (out / "README.md").write_text("\n".join(readme), encoding="utf-8")

    print(f"\n{'topic':<32} essays")
    for dirname, (name, _s, _t, _k) in TOPICS.items():
        n = len(index.get(dirname, []))
        if n:
            print(f"{dirname:<32} {n}")
    print(f"{'_review':<32} {len(review)}")
    total_copies = sum(len(v) for v in index.values())
    print(f"\ntotal file copies: {total_copies} across {len(index)} directories")


if __name__ == "__main__":
    main()
