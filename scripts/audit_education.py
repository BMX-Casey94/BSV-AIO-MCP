import json
from pathlib import Path

root = Path("data/education")
total = keep = drop = 0
incomplete = []
missing_files = []
for n in range(1, 25):
    p = root / f"verdicts-{n:02d}.json"
    if not p.exists():
        incomplete.append(n)
        continue
    items = json.loads(p.read_text(encoding="utf-8"))
    total += len(items)
    for e in items:
        if e.get("verdict") == "KEEP":
            keep += 1
            path = e.get("path")
            if not path or not Path(path).exists():
                missing_files.append(path or f"{e.get('era')}--{e.get('slug')}")
        else:
            drop += 1

print(f"verdict files missing: {incomplete or 'none'}")
print(f"essays: {total}  KEEP={keep}  DROP={drop}")
print(f"missing KEEP files: {len(missing_files)}")
for m in missing_files[:20]:
    print(" ", m)
print(f"distills on disk: {len(list(Path('education').glob('*.md')))}")
