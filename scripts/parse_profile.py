"""Extract the embedded preloads JSON from a saved Substack profile page
and print the user's publications (subdomain, name, etc.)."""
import json
import re
import sys

html = open(sys.argv[1], encoding="utf-8").read()
m = re.search(r'window\._preloads\s*=\s*JSON\.parse\("(.*?)"\)\s*</script>', html, re.S)
if not m:
    print("NO_PRELOADS_FOUND")
    sys.exit(1)

raw = m.group(1).encode().decode("unicode_escape")
data = json.loads(raw)

def walk(obj, path=""):
    if isinstance(obj, dict):
        if "subdomain" in obj and ("name" in obj or "hero_text" in obj):
            pubs.append((path, obj))
        for k, v in obj.items():
            walk(v, f"{path}.{k}")
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, f"{path}[{i}]")

pubs = []
walk(data)
seen = set()
for path, pub in pubs:
    sub = pub.get("subdomain")
    if sub in seen:
        continue
    seen.add(sub)
    print(json.dumps({
        "path": path,
        "subdomain": sub,
        "name": pub.get("name"),
        "custom_domain": pub.get("custom_domain"),
        "base_url": pub.get("base_url"),
        "author_name": (pub.get("author") or {}).get("name") if isinstance(pub.get("author"), dict) else None,
    }, indent=2))
