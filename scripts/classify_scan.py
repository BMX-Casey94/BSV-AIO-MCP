"""First-pass relevance scan: counts Bitcoin-related term hits per post.

This is a triage aid only - final classification is done by reading.
"""
import json
import re
from pathlib import Path

TERMS = {
    "bitcoin": r"\bbitcoin\b",
    "BTC": r"\bBTC\b",
    "BSV": r"\bBSV\b",
    "satoshi": r"\bsatoshi\b",
    "blockchain": r"\bblockchain\b",
    "proof-of-work": r"proof[- ]of[- ]work",
    "PoW": r"\bPoW\b",
    "UTXO": r"\bUTXO\b",
    "mining/miner": r"\bmin(?:ing|er|ers)\b",
    "node(s)": r"\bnodes?\b",
    "ledger": r"\bledger\b",
    "token": r"\btokens?\b",
    "script/opcode": r"\b(?:script|opcodes?|OP_[A-Z]+)\b",
    "merkle": r"\bmerkle\b",
    "double-spend": r"double[- ]spend",
    "hash": r"\bhash(?:es|ing)?\b",
    "signature/ECDSA": r"\b(?:signature|ECDSA|secp256k1)\b",
    "whitepaper": r"\bwhite\s?paper\b",
    "crypto": r"\bcrypto\b",
    "exchange/casino": r"\b(?:exchange|casino|speculat\w+)\b",
    "micropayment": r"\bmicropayments?\b",
    "schnorr": r"\bschnorr\b",
    "segregated witness": r"segregated witness|\bsegwit\b",
    "lightning": r"\blightning\b",
}

rows = []
for f in sorted(Path("data/posts/text").glob("*.txt")):
    text = f.read_text(encoding="utf-8").lower()
    hits = {name: len(re.findall(pat, text, re.I)) for name, pat in TERMS.items()}
    total = sum(hits.values())
    rows.append((f.stem, total, hits))

rows.sort(key=lambda r: -r[1])
print(f"{'post':52} {'total':>6}  top terms")
for stem, total, hits in rows:
    top = sorted(hits.items(), key=lambda kv: -kv[1])[:8]
    top_s = ", ".join(f"{k}:{v}" for k, v in top if v)
    print(f"{stem:52} {total:>6}  {top_s}")
