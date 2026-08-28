"""Inspect profile preloads: user id, handle, and all linked publications."""
import json
import re
import sys

html = open(sys.argv[1], encoding="utf-8").read()
m = re.search(r'window\._preloads\s*=\s*JSON\.parse\("(.*?)"\)\s*</script>', html, re.S)
raw = m.group(1).encode().decode("unicode_escape")
data = json.loads(raw)

profile = data.get("profile") or {}
print("profile keys:", sorted(profile.keys()))
for k in ("id", "handle", "name", "bio", "photo_url"):
    if k in profile:
        print(f"{k}: {profile[k]}")

pubs = profile.get("publicationUsers") or []
print("publicationUsers count:", len(pubs))
for pu in pubs:
    pub = pu.get("publication") or {}
    print("-", pub.get("subdomain"), "|", pub.get("name"), "| role:", pu.get("role"))
