"""Sanity-check the Medium archive: date range, yearly counts, word-count
distribution, and how many posts look like excerpts pointing elsewhere."""
import json
from collections import Counter
from datetime import datetime, timezone

rows = json.load(open("data-medium/archive.json", encoding="utf-8"))
print(f"total: {len(rows)}")

years = Counter()
for r in rows:
    dt = datetime.fromtimestamp(r["firstPublishedAt"] / 1000, tz=timezone.utc)
    years[dt.year] += 1
for y in sorted(years):
    print(f"  {y}: {years[y]}")

first = datetime.fromtimestamp(rows[0]["firstPublishedAt"] / 1000, tz=timezone.utc)
last = datetime.fromtimestamp(rows[-1]["firstPublishedAt"] / 1000, tz=timezone.utc)
print(f"range: {first:%Y-%m-%d} .. {last:%Y-%m-%d}")

wc = [r["wordCount"] for r in rows]
buckets = Counter()
for w in wc:
    if w < 100:
        buckets["<100 words"] += 1
    elif w < 400:
        buckets["100-399"] += 1
    elif w < 1500:
        buckets["400-1499"] += 1
    else:
        buckets["1500+"] += 1
print("word-count distribution:", dict(buckets))

print("\nfirst 5:")
for r in rows[:5]:
    dt = datetime.fromtimestamp(r["firstPublishedAt"] / 1000, tz=timezone.utc)
    print(f"  {dt:%Y-%m-%d}  {r['wordCount']:>6}w  {r['title'][:70]}")
print("\nlast 5:")
for r in rows[-5:]:
    dt = datetime.fromtimestamp(r["firstPublishedAt"] / 1000, tz=timezone.utc)
    print(f"  {dt:%Y-%m-%d}  {r['wordCount']:>6}w  {r['title'][:70]}")
