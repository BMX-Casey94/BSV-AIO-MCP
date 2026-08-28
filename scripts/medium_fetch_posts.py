"""Fetch full bodies for every post in data-medium/archive.json.

Medium's post endpoint returns a paragraph model:
  payload.value.content.bodyModel.paragraphs[]
each with `text`, `type`, and `markups` (inline links etc.).
Saves raw JSON to data-medium/posts/json/ and flattened plain text to
data-medium/posts/text/.
"""
import json
import re
import subprocess
import sys
import time
from pathlib import Path

SENTINEL = b"])}while(1);</x>"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
COOKIES = "medium_cookies.txt"
JSON_DIR = Path("data-medium/posts/json")
TEXT_DIR = Path("data-medium/posts/text")

# paragraph types worth marking structurally
HEADING_TYPES = {3, 4, 13}   # h1/h2 variants
QUOTE_TYPES = {6, 7}         # blockquote / pullquote
CODE_TYPE = 9
LIST_TYPES = {10, 11}        # ul / ol items


def get(url: str) -> dict:
    out = subprocess.run(
        ["curl.exe", "-s", "-b", COOKIES, "-A", UA,
         "-H", "Accept: application/json", url],
        capture_output=True, check=True,
    ).stdout
    if out.startswith(SENTINEL):
        out = out[len(SENTINEL):]
    return json.loads(out.decode("utf-8"))


def safe_name(slug: str, pid: str) -> str:
    name = re.sub(r"[^a-z0-9\-]", "", slug.lower())[:80].strip("-")
    return name or pid


def flatten(post: dict) -> str:
    value = post.get("payload", {}).get("value", {})
    title = value.get("title", "")
    subtitle = value.get("content", {}).get("subtitle", "")
    paras = value.get("content", {}).get("bodyModel", {}).get("paragraphs", [])
    lines = [f"# {title}"]
    if subtitle:
        lines.append(f"## {subtitle}")
    lines.append("")
    for p in paras:
        text = p.get("text", "").strip()
        if not text:
            continue
        ptype = p.get("type", 1)
        links = [m.get("href") for m in p.get("markups", []) if m.get("href")]
        if ptype in HEADING_TYPES:
            lines.append(f"\n## {text}")
        elif ptype in QUOTE_TYPES:
            lines.append(f"> {text}")
        elif ptype == CODE_TYPE:
            lines.append(f"```\n{text}\n```")
        elif ptype in LIST_TYPES:
            lines.append(f"- {text}")
        else:
            lines.append(text)
        for href in links:
            lines.append(f"[link: {href}]")
        lines.append("")
    return "\n".join(lines)


def main() -> None:
    archive = json.load(open("data-medium/archive.json", encoding="utf-8"))
    JSON_DIR.mkdir(parents=True, exist_ok=True)
    TEXT_DIR.mkdir(parents=True, exist_ok=True)
    done = {f.stem for f in TEXT_DIR.glob("*.txt")}
    todo = [r for r in archive if safe_name(r["slug"], r["id"]) not in done]
    print(f"{len(archive)} posts, {len(done)} already fetched, {len(todo)} to go")
    failures = []
    for i, r in enumerate(todo, 1):
        name = safe_name(r["slug"], r["id"])
        try:
            data = get(f"https://medium.com/_/api/posts/{r['id']}")
            (JSON_DIR / f"{name}.json").write_text(
                json.dumps(data, ensure_ascii=False), encoding="utf-8"
            )
            text = flatten(data)
            (TEXT_DIR / f"{name}.txt").write_text(text, encoding="utf-8")
            if i % 25 == 0 or i == len(todo):
                print(f"[{i}/{len(todo)}] {name}", flush=True)
        except Exception as e:  # noqa: BLE001 - log and continue
            print(f"FAILED {r['id']} {name}: {e}", flush=True)
            failures.append(r["id"])
        time.sleep(0.35)
    print(f"done. failures={len(failures)}")
    if failures:
        Path("data-medium/failures.json").write_text(json.dumps(failures))


if __name__ == "__main__":
    sys.exit(main())
