"""Scan all summaries for developer-topic coverage.

For each developer topic, regex-scan every summary (both eras) and rank essays
by hit density. Output: data/developer_scan.json
"""
import json
import re
from pathlib import Path

TOPICS = {
    "spv-merkle-proofs": [
        r"\bSPV\b", r"simplified payment verification", r"merkle (tree|proof|branch|path)",
        r"block header", r"merkle root", r"inclusion proof",
    ],
    "locking-scripts": [
        r"locking script", r"unlocking script", r"scriptpubkey", r"scriptsig",
        r"\bOP_[A-Z_]+\b", r"\bscript\b.*\b(opcode|opcode|primitive)\b", r"redeem script",
        r"P2PKH", r"P2SH", r"R-puzzle", r"hash puzzle",
    ],
    "keys-addresses": [
        r"private key", r"public key", r"key pair", r"key derivation", r"HD wallet",
        r"hierarchical deterministic", r"address reuse", r"fresh (key|address)",
        r"threshold (key|signature|ECDSA)", r"key split", r"Shamir", r"air-?gap",
        r"Elliptic Curve", r"\bECDSA\b", r"secp256k1",
    ],
    "signatures-sighash": [
        r"digital signature", r"\bSIGHASH\b", r"ANYONECANPAY", r"SIGHASH_NONE",
        r"SIGHASH_SINGLE", r"signature (hash|algorithm)", r"signing",
    ],
    "tokens-tokenisation": [
        r"tokeni[sz]ation", r"token(s)?\b", r"coloured coin", r"\bNFT\b", r"asset issuance",
        r"1-?satoshi token", r"STAS", r"Run\b",
    ],
    "overlays-brc-beef-uhrp": [
        r"\bBRC-?\d+\b", r"\bBEEF\b", r"\bUHRP\b", r"overlay network", r"overlay service",
        r"content-?addressed", r"lookup service", r"topic manager", r"message box",
        r"WalletClient", r"@bsv/sdk", r"PushDrop", r"certifier",
    ],
    "teranode-infrastructure": [
        r"Teranode", r"microservice", r"pipelin", r"subtree", r"block assembly",
        r"propagation", r"multicast", r"small-?world", r"compact block", r"parallel validation",
    ],
    "full-nodes-miners": [
        r"full node", r"non-mining node", r"mining node", r"node(s)? (are|is) miner",
        r"listener node", r"honest node", r"node count",
    ],
    "fee-structures": [
        r"fee(s)?\b", r"satoshi(s)? per (byte|transaction)", r"fee market", r"fee rate",
        r"miner fee", r"transaction fee", r"flat fee", r"percentage fee",
    ],
    "transaction-building": [
        r"transaction (input|output|building|construction)", r"\bUTXO\b", r"unspent output",
        r"nLockTime", r"nSequence", r"locktime", r"raw transaction", r"coinbase transaction",
        r"change output", r"dust",
    ],
    "payment-channels-0conf": [
        r"payment channel", r"\b0-?conf\b", r"zero confirmation", r"instant transaction",
        r"double-?spend", r"first-?seen", r"channel factory",
    ],
    "security-practices": [
        r"cold (storage|wallet)", r"hot wallet", r"key (backup|rotation|ceremony)",
        r"multi-?sig", r"custody", r"operational security", r"opsec", r"wallet security",
        r"nonce reuse", r"RNG", r"random number",
    ],
    "data-on-chain-evidence": [
        r"OP_RETURN", r"OP_FALSE", r"data (carrier|on-?chain)", r"timestamp",
        r"hash (of|anchor|commitment)", r"notar", r"proof of existence", r"audit trail",
        r"triple-?entry", r"EDI",
    ],
    "smart-contracts-automata": [
        r"smart contract", r"\bDFA\b", r"finite state (machine|automaton)", r"Turing",
        r"oracle", r"Rúnar|Runar", r"sCrypt", r"BSVM", r"tokenised contract",
    ],
    "privacy-identity": [
        r"privacy", r"pseudonym", r"anonym", r"identity", r"certificate", r"attestation",
        r"selective disclosure", r"re-?keying", r"linkability",
    ],
    "mining-economics": [
        r"block subsidy", r"halving", r"block reward", r"hash rate|hashrate",
        r"difficulty adjustment", r"proof-?of-?work", r"selfish mining", r"orphan",
    ],
    "scaling-throughput": [
        r"throughput", r"\bTPS\b", r"transactions per second", r"block size", r"unbounded",
        r"gigabyte|terabyte block", r"scale|scaling", r"bandwidth",
    ],
    "stablecoins-cbdc": [
        r"stablecoin", r"\bCBDC\b", r"central bank digital", r"tokenised (fiat|currency)",
        r"Tether", r"e-?cash",
    ],
    "ip-to-ip-payments": [
        r"IP-?to-?IP", r"peer-?to-?peer (payment|transaction|cash)", r"direct payment",
        r"paymail", r"ECDH", r"negotiated (note|key|payment)",
    ],
}

def scan_file(path):
    text = path.read_text(encoding="utf-8", errors="ignore").lower()
    return text

results = {}
for topic, patterns in TOPICS.items():
    rx = [re.compile(p, re.IGNORECASE) for p in patterns]
    hits = []
    for folder, era in (("summaries", "substack"), ("summaries-medium", "medium")):
        for f in sorted(Path(folder).glob("*.md")):
            text = scan_file(f)
            n = sum(len(r.findall(text)) for r in rx)
            if n:
                hits.append({"era": era, "file": str(f).replace("\\", "/"), "hits": n})
    hits.sort(key=lambda h: -h["hits"])
    results[topic] = {
        "essays_with_coverage": len(hits),
        "total_hits": sum(h["hits"] for h in hits),
        "top_essays": hits[:15],
    }

Path("data/developer_scan.json").write_text(
    json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8"
)
for topic, r in sorted(results.items(), key=lambda kv: -kv[1]["essays_with_coverage"]):
    print(f"{r['essays_with_coverage']:>4} essays  {r['total_hits']:>5} hits  {topic}")
