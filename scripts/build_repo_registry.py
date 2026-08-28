"""Build a registry of bsv-blockchain repos: GitHub metadata + DeepWiki indexing status.

Output: reference/repo_registry.json
"""
import json
import subprocess
import time
from pathlib import Path

MCP_URL = "https://mcp.deepwiki.com/mcp"
MCP_HEADERS = [
    "-H", "Content-Type: application/json",
    "-H", "Accept: application/json, text/event-stream",
]
ORG = "bsv-blockchain"


def curl_json(url, body=None, headers=None, timeout=60, dump_headers=None):
    args = ["curl.exe", "-s", "--max-time", str(timeout)]
    if dump_headers:
        args += ["-D", dump_headers]
    if headers:
        args += headers
    if body is not None:
        args += ["-X", "POST", "-d", json.dumps(body)]
    args.append(url)
    p = subprocess.run(args, capture_output=True)
    return p.stdout.decode("utf-8", "replace")


SESSION = {"id": None}


def mcp_headers():
    h = ["-H", "Content-Type: application/json",
         "-H", "Accept: application/json, text/event-stream"]
    if SESSION["id"]:
        h += ["-H", f"Mcp-Session-Id: {SESSION['id']}"]
    return h


def github_repos():
    repos = []
    page = 1
    while True:
        raw = curl_json(
            f"https://api.github.com/orgs/{ORG}/repos?per_page=100&page={page}&type=public",
            headers=["-H", "Accept: application/vnd.github+json", "-H", "User-Agent: csw-context"],
        )
        try:
            batch = json.loads(raw)
        except json.JSONDecodeError:
            print("GitHub API parse error:", raw[:300])
            break
        if not isinstance(batch, list):
            print("GitHub API error:", str(batch)[:300])
            break
        repos.extend(batch)
        if len(batch) < 100:
            break
        page += 1
    return repos


def mcp_call(method, params, rid):
    hdr_file = Path(f".mcp_headers_{rid}.txt")
    out = curl_json(MCP_URL, {"jsonrpc": "2.0", "id": rid, "method": method, "params": params},
                    mcp_headers(), timeout=90, dump_headers=str(hdr_file))
    if hdr_file.exists():
        for line in hdr_file.read_text(encoding="utf-8", errors="replace").splitlines():
            if line.lower().startswith("mcp-session-id:"):
                SESSION["id"] = line.split(":", 1)[1].strip()
        hdr_file.unlink(missing_ok=True)
    for line in out.splitlines():
        line = line.strip()
        if line.startswith("data:"):
            try:
                return json.loads(line[5:].strip())
            except json.JSONDecodeError:
                continue
    return {}


def main():
    repos = github_repos()
    print(f"github: {len(repos)} public repos")

    mcp_call("initialize", {"protocolVersion": "2024-11-05", "capabilities": {},
                            "clientInfo": {"name": "csw-context", "version": "1.0"}}, 1)

    registry = []
    for i, r in enumerate(sorted(repos, key=lambda x: x["name"].lower())):
        name = r["name"]
        full = r["full_name"]
        entry = {
            "name": name,
            "full_name": full,
            "url": r["html_url"],
            "description": r.get("description"),
            "language": r.get("language"),
            "archived": r.get("archived", False),
            "pushed_at": r.get("pushed_at"),
            "stars": r.get("stargazers_count", 0),
            "deepwiki_indexed": None,
            "deepwiki_pages": 0,
        }
        for attempt in (1, 2):
            resp = mcp_call("read_wiki_structure", {"repoName": full}, 100 + i)
            if "result" in resp:
                content = resp["result"].get("content", [{}])
                text = content[0].get("text", "") if content else ""
                if resp["result"].get("isError") or "not indexed" in text.lower() or "error" in text.lower()[:60]:
                    entry["deepwiki_indexed"] = False
                else:
                    entry["deepwiki_indexed"] = True
                    entry["deepwiki_pages"] = sum(1 for l in text.splitlines() if l.strip().startswith("-"))
                break
            if attempt == 1:
                mcp_call("initialize", {"protocolVersion": "2024-11-05", "capabilities": {},
                                        "clientInfo": {"name": "csw-context", "version": "1.0"}}, 1)
                time.sleep(1)
        print(f"[{i+1}/{len(repos)}] {name}: indexed={entry['deepwiki_indexed']} pages={entry['deepwiki_pages']} ({entry['language']}, pushed {str(entry['pushed_at'])[:10]})")
        registry.append(entry)
        time.sleep(0.4)

    out = Path("reference/repo_registry.json")
    out.write_text(json.dumps(registry, indent=1), encoding="utf-8")
    indexed = [e for e in registry if e["deepwiki_indexed"]]
    active = [e for e in registry if not e["archived"]]
    print(f"\nsaved {len(registry)} repos -> {out}")
    print(f"active (non-archived): {len(active)} | deepwiki-indexed: {len(indexed)}")


if __name__ == "__main__":
    main()
