"""Prepend YAML frontmatter to the 12 original summaries that predate the template."""
import json
from pathlib import Path

THEMES = {
    "digital-cash-is-not-a-vault": ["wallets-keys", "security-economics"],
    "order-on-chain-content-off-chain": ["ai-blockchain", "scaling-throughput"],
    "there-is-no-such-thing-as-spam-in": ["micropayments", "btc-critique", "intermediaries"],
    "the-protocol-no-gatekeeper-wants": ["intermediaries", "protocol-immutability", "micropayments"],
    "bitcoin-after-the-casino": ["monetary-economics", "protocol-immutability", "btc-critique"],
    "when-every-block-counts-except-the": ["mining-consensus", "security-economics"],
    "the-price-of-being-in-the-room": ["protocol-immutability", "governance-decentralisation"],
    "five-times-versus-twenty-per-cent": ["protocol-immutability", "governance-decentralisation"],
    "set-in-stone": ["protocol-immutability", "governance-decentralisation"],
    "the-cost-of-permission": ["governance-decentralisation", "intermediaries"],
    "the-defence-that-halves": ["security-economics", "monetary-economics"],
    "the-asset-that-pays-rent-to-exist": ["security-economics", "monetary-economics", "btc-critique"],
}

archive = {p["slug"]: p for p in json.loads(Path("data/archive.json").read_text(encoding="utf-8"))}

for slug, themes in THEMES.items():
    path = Path(f"summaries/{slug}.md")
    text = path.read_text(encoding="utf-8")
    if text.startswith("---"):
        print(f"SKIP (already has frontmatter): {slug}")
        continue
    p = archive[slug]
    title = p["title"].replace('"', '\\"')
    fm = (
        "---\n"
        f'title: "{title}"\n'
        f"date: {p['post_date'][:10]}\n"
        f"slug: {slug}\n"
        f"url: https://singulargrit.substack.com/p/{slug}\n"
        f"themes: [{', '.join(themes)}]\n"
        "---\n\n"
    )
    path.write_text(fm + text, encoding="utf-8")
    print(f"OK: {slug}")
