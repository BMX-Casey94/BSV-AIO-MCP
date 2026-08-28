"""Check whether flagged posts are truncated in the API response itself."""
import json
from pathlib import Path

for slug in [
    "commixtio-coin-obfuscation-and-the",
    "harry-ledger-and-the-philosophers",
    "cryptographic-control-as-fiduciary",
]:
    txt = Path(f"data/posts/text/{slug}.txt")
    raw = Path(f"data/posts/raw/{slug}.json")
    t = txt.stat().st_size if txt.exists() else -1
    if raw.exists():
        d = json.loads(raw.read_text(encoding="utf-8"))
        body = d.get("body_html") or ""
        print(
            f"{slug}: text={t}B body_html={len(body)}B "
            f"is_truncated={d.get('is_truncated')} audience={d.get('audience')}"
        )
    else:
        print(f"{slug}: text={t}B NO RAW FILE")
