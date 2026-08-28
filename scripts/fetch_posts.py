"""Fetch full bodies for every post in data/archive.json.

Saves:
  data/posts/raw/{slug}.json   - full API response (metadata + body_html)
  data/posts/text/{slug}.txt   - plain-text rendering of the body
"""
import json
import re
import time
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

BASE = "https://singulargrit.substack.com"
RAW_DIR = Path("data/posts/raw")
TXT_DIR = Path("data/posts/text")

class HtmlToText(HTMLParser):
    BLOCK_TAGS = {"p", "div", "br", "hr", "li", "ul", "ol", "blockquote",
                  "h1", "h2", "h3", "h4", "h5", "h6", "pre", "figure", "table", "tr"}

    def __init__(self):
        super().__init__()
        self.parts = []
        self.skip = 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.skip += 1
        if tag in self.BLOCK_TAGS:
            self.parts.append("\n")
        if tag == "li":
            self.parts.append("- ")

    def handle_endtag(self, tag):
        if tag in ("script", "style") and self.skip:
            self.skip -= 1
        if tag in self.BLOCK_TAGS:
            self.parts.append("\n")

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)

    def text(self):
        out = "".join(self.parts)
        out = re.sub(r"[ \t]+", " ", out)
        out = re.sub(r"\n\s*\n+", "\n\n", out)
        return out.strip()

def get(url: str):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (archive-indexer)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

def html_to_text(html: str) -> str:
    parser = HtmlToText()
    parser.feed(html or "")
    return parser.text()

def main():
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    TXT_DIR.mkdir(parents=True, exist_ok=True)
    archive = json.loads(Path("data/archive.json").read_text(encoding="utf-8"))

    for i, meta in enumerate(archive, 1):
        slug = meta["slug"]
        raw_path = RAW_DIR / f"{slug}.json"
        if raw_path.exists():
            print(f"[{i}/{len(archive)}] SKIP {slug}")
            continue
        post = get(f"{BASE}/api/v1/posts/{slug}")
        raw_path.write_text(json.dumps(post, indent=2, ensure_ascii=False), encoding="utf-8")
        body_text = html_to_text(post.get("body_html", ""))
        header = [
            f"TITLE: {post.get('title')}",
            f"SUBTITLE: {post.get('subtitle') or ''}",
            f"DATE: {post.get('post_date')}",
            f"URL: {post.get('canonical_url')}",
            "",
        ]
        (TXT_DIR / f"{slug}.txt").write_text("\n".join(header) + body_text, encoding="utf-8")
        print(f"[{i}/{len(archive)}] OK {slug} ({len(body_text)} chars)")
        time.sleep(0.5)

    print("DONE")

if __name__ == "__main__":
    main()
