"""Extract a DeepWiki repo wiki via the public DeepWiki MCP endpoint.

Usage: python scripts/deepwiki_mcp.py <owner/repo> <outdir>
Writes <outdir>/structure.json and one markdown file per wiki page.
"""
import json
import re
import subprocess
import sys
import time
from pathlib import Path

URL = "https://mcp.deepwiki.com/mcp"
HEADERS = [
    "-H", "Content-Type: application/json",
    "-H", "Accept: application/json, text/event-stream",
]


def call(method, params, rid):
    body = json.dumps({"jsonrpc": "2.0", "id": rid, "method": method, "params": params})
    out = subprocess.run(
        ["curl.exe", "-s", "-X", "POST", URL, *HEADERS, "-d", body, "--max-time", "120"],
        capture_output=True, check=True,
    ).stdout.decode("utf-8", "replace")
    # streamable-http may return SSE frames; handle both
    for line in out.splitlines():
        line = line.strip()
        if line.startswith("data:"):
            line = line[5:].strip()
        if not line:
            continue
        try:
            return json.loads(line)
        except json.JSONDecodeError:
            continue
    raise RuntimeError(f"no JSON in response: {out[:500]}")


def main():
    repo, outdir = sys.argv[1], Path(sys.argv[2])
    outdir.mkdir(parents=True, exist_ok=True)

    init = call("initialize", {
        "protocolVersion": "2024-11-05",
        "capabilities": {},
        "clientInfo": {"name": "csw-context", "version": "1.0"},
    }, 1)
    print("initialize ok:", "result" in init)

    tools = call("tools/list", {}, 2)
    for t in tools.get("result", {}).get("tools", []):
        print("tool:", t["name"], "| schema:", json.dumps(t.get("inputSchema", {})))

    struct = call("tools/call", {"name": "read_wiki_structure", "arguments": {"repoName": repo}}, 3)
    text = struct["result"]["content"][0]["text"]
    (outdir / "structure.json").write_text(text, encoding="utf-8")
    print(f"structure saved ({len(text)} chars)")

    # read_wiki_contents takes only repoName and returns the full wiki
    r = call("tools/call", {"name": "read_wiki_contents", "arguments": {"repoName": repo}}, 10)
    content = r["result"]["content"][0]["text"]
    (outdir / "FULL_WIKI.md").write_text(content, encoding="utf-8")
    print(f"full wiki saved: {len(content)} chars")

    # split into per-page files on the '# Page: <title>' markers DeepWiki emits
    parts = re.split(r"(?m)^(?=# Page: )", content)
    manifest = []
    n = 0
    for part in parts:
        part = part.strip()
        if not part:
            continue
        m = re.match(r"^# Page:\s+(.+)$", part.splitlines()[0])
        if not m:
            (outdir / "00-preamble.md").write_text(part, encoding="utf-8")
            continue
        n += 1
        title = m.group(1).strip()
        safe = "".join(c if c.isalnum() or c in "-_" else "-" for c in title)[:60].strip("-")
        fname = f"{n:02d}-{safe}.md"
        (outdir / fname).write_text(part, encoding="utf-8")
        manifest.append({"page": n, "title": title, "file": fname, "chars": len(part)})
    (outdir / "_manifest.json").write_text(json.dumps(manifest, indent=1), encoding="utf-8")
    print(f"split into {len(manifest)} page files")


if __name__ == "__main__":
    main()
