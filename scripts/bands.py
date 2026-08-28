import json
import sys

rows = json.load(open("data/triage.json", encoding="utf-8"))
bands = [(200, 10**9), (100, 200), (50, 100), (25, 50), (10, 25), (0, 10)]
for lo, hi in bands:
    n = sum(1 for r in rows if lo <= r["score"] < hi)
    label = f"{lo:>4}+" if hi > 10**8 else f"{lo:>4}-{hi}"
    print(f"{label}: {n}")

print()
print("--- boundary band: score 25-140 ---")
for r in rows:
    if 25 <= r["score"] < 140:
        print(f"{r['score']:>4}  {r['date']}  {(r['title'] or '')[:95]}")
