"""Triage scan over all fetched Medium posts: score Bitcoin-relevance by
weighted terms. Era-specific terms (Metanet, nChain, BCH, Genesis) added
for the 2018-2020 corpus. Outputs data-medium/triage.json.
"""
import json
import re
from datetime import datetime, timezone
from pathlib import Path

TERMS = {
    "bitcoin": (r"\bbitcoin\b", 3),
    "BTC": (r"\bBTC\b", 3),
    "BSV": (r"\bBSV\b|bitcoin sv", 3),
    "satoshi": (r"\bsatoshi\b", 3),
    "blockchain": (r"\bblockchain\b", 3),
    "proof-of-work": (r"proof[- ]of[- ]work", 3),
    "UTXO": (r"\bUTXO\b", 3),
    "mining": (r"\bmin(?:ing|er|ers)\b", 2),
    "node": (r"\b(?:full )?nodes?\b", 2),
    "ledger": (r"\bledger\b", 2),
    "token": (r"\btokens?\b", 2),
    "script": (r"\b(?:script|opcodes?|OP_[A-Z]+)\b", 2),
    "merkle": (r"\bmerkle\b", 2),
    "double-spend": (r"double[- ]spend", 3),
    "hash": (r"\bhash(?:es|ing|rate|power)\b", 1),
    "signature": (r"\b(?:digital signature|ECDSA|secp256k1|schnorr)\b", 2),
    "whitepaper": (r"\bwhite\s?paper\b", 2),
    "crypto": (r"\bcrypto(?:currency|currencies|asset|assets)?\b", 2),
    "segwit": (r"segregated witness|\bsegwit\b", 3),
    "lightning": (r"\blightning\b", 3),
    "micropayment": (r"\bmicropayments?\b", 3),
    "SPV": (r"\bSPV\b|simplified payment verification", 3),
    "nakamoto": (r"\bnakamoto\b", 3),
    "halving": (r"\bhalving\b", 2),
    "wallet": (r"\bwallets?\b", 1),
    "exchange": (r"\bexchanges?\b", 1),
    "custody": (r"\bcustod(?:y|ian|ians|ial)\b", 2),
    "consensus": (r"\bconsensus\b", 2),
    "fork": (r"\b(?:hard |soft )?forks?\b", 2),
    "digital cash": (r"digital cash|electronic cash|e-cash", 3),
    "digital asset": (r"digital assets?", 2),
    "CBDC": (r"\bCBDC\b|central bank digital", 2),
    "stablecoin": (r"\bstablecoins?\b", 2),
    "DeFi": (r"\bDeFi\b", 2),
    "NFT": (r"\bNFTs?\b", 2),
    "proof-of-stake": (r"proof[- ]of[- ]stake", 3),
    "ethereum": (r"\bethereum\b", 2),
    "metanet": (r"\bmetanet\b", 3),
    "nchain": (r"\bnchain\b", 2),
    "bitcoin cash": (r"\bbitcoin cash\b|\bBCH\b", 2),
    "bitcoin core": (r"\bbitcoin core\b", 2),
    "genesis upgrade": (r"\bgenesis (?:upgrade|protocol)\b", 2),
    "ICO": (r"\bICOs?\b|initial coin offering", 2),
    "opcode": (r"\bOP_[A-Z_]+\b", 2),
    "block": (r"\bblocks?\b", 1),
    "transaction": (r"\btransactions?\b", 1),
    "timestamp": (r"\btimestamp(?:ing|ed|s)?\b", 1),
    "bearer": (r"\bbearer\b", 1),
    "settlement": (r"\bsettlement\b|\bsettle\b", 1),
    "finality": (r"\bfinality\b", 2),
    "51%": (r"\b51%|51 per cent|majority attack", 2),
    "mempool": (r"\bmempool\b", 2),
    "fee": (r"\bfees?\b", 1),
    "private key": (r"\bprivate keys?\b|\bpublic keys?\b", 2),
    "digital signature": (r"digital signature", 2),
    "smart contract": (r"smart contracts?", 2),
    "oracle": (r"\boracles?\b", 1),
    "Web3": (r"\bweb3\b", 2),
    "DAO": (r"\bDAOs?\b", 2),
    "ETF": (r"\bETFs?\b", 1),
    "peer-to-peer": (r"peer[- ]to[- ]peer|P2P", 2),
    "digital property": (r"digital property", 2),
    "triple-entry": (r"triple[- ]entry", 2),
    "audit": (r"\baudit(?:ing|or|ors)?\b", 1),
    "money": (r"\bmoney\b|\bmonetary\b", 1),
    "currency": (r"\bcurrenc(?:y|ies)\b", 1),
}


def safe_name(slug: str, pid: str) -> str:
    name = re.sub(r"[^a-z0-9\-]", "", slug.lower())[:80].strip("-")
    return name or pid


def main():
    archive = {safe_name(p["slug"], p["id"]): p
               for p in json.loads(Path("data-medium/archive.json").read_text(encoding="utf-8"))}
    rows = []
    for f in sorted(Path("data-medium/posts/text").glob("*.txt")):
        text = f.read_text(encoding="utf-8")
        low = text.lower()
        score = 0
        matched = {}
        for name, (pat, w) in TERMS.items():
            n = len(re.findall(pat, low, re.I))
            if n:
                matched[name] = n
                score += n * w
        meta = archive.get(f.stem, {})
        ts = meta.get("firstPublishedAt", 0)
        date = datetime.fromtimestamp(ts / 1000, tz=timezone.utc).strftime("%Y-%m-%d") if ts else ""
        rows.append({
            "slug": f.stem,
            "id": meta.get("id"),
            "title": meta.get("title"),
            "subtitle": meta.get("subtitle"),
            "date": date,
            "score": score,
            "matched": matched,
        })

    rows.sort(key=lambda r: -r["score"])
    Path("data-medium/triage.json").write_text(
        json.dumps(rows, indent=2, ensure_ascii=False), encoding="utf-8")

    for r in rows:
        top = ", ".join(f"{k}:{v}" for k, v in list(r["matched"].items())[:6])
        print(f"{r['score']:>5}  {r['date']}  {(r['title'] or '')[:60]:60}  {top}")
    print(f"\nTOTAL: {len(rows)} posts -> data-medium/triage.json")


if __name__ == "__main__":
    main()
