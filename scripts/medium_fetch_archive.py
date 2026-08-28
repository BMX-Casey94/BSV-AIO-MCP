"""Enumerate the full Medium archive for user 9f0ea1c11fd0 (@craig_10243).

Medium's internal profile-stream API paginates via a `next` cursor object
(to/source/page). Responses are JSON prefixed with a 16-byte
anti-hijacking sentinel. urllib gets 403 (TLS fingerprinting), so we
drive curl.exe with a cookie jar harvested from the profile page.
"""
import json
import subprocess
import time
from pathlib import Path

USER_ID = "9f0ea1c11fd0"
BASE = f"https://medium.com/_/api/users/{USER_ID}/profile/stream"
SENTINEL = b"])}while(1);</x>"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
COOKIES = "medium_cookies.txt"


def get(url: str) -> dict:
    out = subprocess.run(
        ["curl.exe", "-s", "-b", COOKIES, "-A", UA,
         "-H", "Accept: application/json", url],
        capture_output=True, check=True,
    ).stdout
    if out.startswith(SENTINEL):
        out = out[len(SENTINEL):]
    return json.loads(out.decode("utf-8"))


def main() -> None:
    posts: dict[str, dict] = {}
    params = "limit=100&source=overview"
    page = 0
    while True:
        url = f"{BASE}?{params}"
        data = get(url)
        payload = data.get("payload", {})
        batch = payload.get("references", {}).get("Post", {})
        if not batch:
            break
        posts.update(batch)
        page += 1
        print(f"page={page} got={len(batch)} total={len(posts)}", flush=True)
        nxt = payload.get("paging", {}).get("next")
        if not nxt or not nxt.get("to"):
            break
        params = (f"limit={nxt.get('limit', 100)}&to={nxt['to']}"
                  f"&source={nxt.get('source', 'overview')}"
                  f"&page={nxt.get('page', page + 1)}")
        time.sleep(0.4)

    rows = sorted(posts.values(), key=lambda p: p.get("firstPublishedAt", 0))
    out = [
        {
            "id": p["id"],
            "slug": p.get("uniqueSlug", ""),
            "title": p.get("title", ""),
            "subtitle": p.get("content", {}).get("subtitle", ""),
            "firstPublishedAt": p.get("firstPublishedAt", 0),
            "latestPublishedAt": p.get("latestPublishedAt", 0),
            "readingTime": p.get("virtuals", {}).get("readingTime", 0),
            "wordCount": p.get("virtuals", {}).get("wordCount", 0),
            "tags": [t.get("slug", "") for t in p.get("virtuals", {}).get("tags", [])],
            "url": f"https://medium.com/@craig_10243/{p.get('uniqueSlug', p['id'])}",
        }
        for p in rows
    ]
    Path("data-medium").mkdir(exist_ok=True)
    Path("data-medium/archive.json").write_text(
        json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print(f"saved {len(out)} posts to data-medium/archive.json")


if __name__ == "__main__":
    main()
