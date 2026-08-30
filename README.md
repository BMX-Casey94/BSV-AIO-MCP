# BSV-AIO-MCP

A read-only [Model Context Protocol](https://modelcontextprotocol.io) server that gives any
MCP-capable assistant (Cursor, Claude Desktop, Claude Code, …) grounded answers about
Bitcoin SV: the BRC specifications, Bitcoin Script opcodes, BEEF transaction formats, the
Rúnar smart-contract toolchain, the Tier 0 SDKs (`@bsv/sdk`, `@bsv/wallet-toolbox`, `go-sdk`,
`go-wallet-toolbox`) and a structured corpus of Craig Wright's essays.

It answers from a **pinned snapshot** of these sources — never from the live web.

## Design invariants

- **Snapshot-only.** Every claim quotes a contiguous slice of a cited, pinned document. The
  server never fetches live HTTP and never actuates (no broadcasting, no wallet creation, no
  faucet claims). Live facts are declared in `needs` for the host to resolve.
- **Fail-closed.** When the snapshot cannot answer, the server says so (`insufficient` + a
  specific gap) instead of presenting incidental mentions as an answer.
- **Authority model.** BRCs rank 1, SDK/package cards 2, ops playbooks 3, essays 4. A named or
  governing spec always outranks commentary.
- **Deny list.** Deprecated/unsafe packages (`bsv`, `run-sdk`, `js-1sat-ord`, …) are never
  recommended; naming one as a dependency returns the denial, its reason (e.g.
  CVE-2025-69287) and its successor.
- **Recency honesty.** "Latest/newest/superseded" questions are answered as of the pin date,
  with the pin declared in the package's `gaps`.

## Install

Requires Node.js ≥ 22.13. No build step, no API keys, no network access at runtime.

Add to your MCP client config — Cursor (`~/.cursor/mcp.json`), Claude Desktop
(`claude_desktop_config.json`), or equivalent:

```json
{
  "mcpServers": {
    "bsv-aio": {
      "command": "npx",
      "args": ["-y", "bsv-aio-mcp"]
    }
  }
}
```

Restart the client. The server builds its local SQLite index from the shipped snapshot on
first launch (a few seconds), then answers over stdio.

### From source

```bash
git clone https://github.com/BMX-Casey94/BSV-AIO-MCP.git
cd BSV-AIO-MCP
npm install
npm run build
```

Then point the client at the built entry directly:

```json
{
  "mcpServers": {
    "bsv-aio": {
      "command": "node",
      "args": ["C:/path/to/BSV-AIO-MCP/server/dist/index.mjs"]
    }
  }
}
```

### Configuration

| Env var | Default | Purpose |
|---|---|---|
| `BSV_AIO_ROOT` | the installed package root | Corpus root override (development). |
| `BSV_AIO_DB_PATH` | `%TEMP%/bsv-aio-mcp/knowledge.sqlite` | Index cache location. |

## Tools

| Tool | What it returns |
|---|---|
| `investigate` | A structured EvidencePackage: claims with citations, hits, gaps, contradictions, declared live needs, and an answer sketch. The main entry point. |
| `search_knowledge` | Ranked hits over the pinned snapshot (BM25), with kind/authority/theme/network/language/era filters. |
| `get_resource` | The full pinned text behind any hit (`brc://spec/62`, `ops://testnet`, …). |
| `list_contradictions` | Curated contradiction findings across the essay corpus. |
| `get_index_status` | The snapshot pin: revision, fetch date, document counts, policy version. Read this before trusting any hit. |
| `get_symbol` / `find_references` | Tier 0 SDK symbol cards and reference graphs. |
| `get_package_for_concept` | Which confirmed package owns a concept ("BEEF", "runar", …). |
| `inspect_schema` | Pinned service schemas (e.g. the BRC-100 wallet interface). |
| `error_taxonomy` | The pinned `ERR_*` error catalogue with descriptions and interfaces. |
| `get_conformance_vector` | Pinned test vectors (e.g. BRC-100 `createAction`). |
| `check_dependency` | Read-only policy: is this package name denied (with reason and successor), confirmed in the pinned Tier 0/1 cards, or unknown? Absence from the deny list is never an endorsement. |
| `network_guard` | Read-only policy: which network does this intent belong on? Testing on mainnet gets `ask_switch` to ttn; actuation requests are refused — this server never broadcasts, signs, or claims. |

## The corpus

The snapshot pins: the BRC index and full BRC bodies; BSV Academy opcode/Script
documentation; the Rúnar documentation set; Tier 0 package/symbol/spec cards plus Tier 0/1
repo documentation (READMEs, docs, examples) with evidenced BRC-to-package edges; a deny list;
testnet operations notes; ordinality/provenance rules; curated Teranode throughput benchmark
facts (AWS 1M TPS trial, SSRN 79.09B TPS preprint — conditions and sources inline); and 476
summarised Craig Wright essays
(Medium 2018–2022 and Substack 2025–2026) with a curated contradiction map. See
[CORPUS.md](CORPUS.md) for the full corpus documentation.

The snapshot is the product: answers are reproducible and auditable against it. It does
**not** update itself. `npx bsv-aio-mcp` serves whatever pin was inside the last npm
publish. The operator refreshes weekly (or on a repo tag) with the gated jobs below,
then republishes so consumers receive the new pin. Full policy:
[mcp/refresh-policy.md](mcp/refresh-policy.md).

```powershell
$env:BSV_AIO_ALLOW_REFRESH = "1"
npm run refresh:tier0 --workspace=server   # Tier 0 SDKs/wallets + BRC bodies (regenerates brc_index.json)
npm run refresh:tier1 --workspace=server   # Tier 1 services/libraries
npm run fetch:academy --workspace=server   # Academy + Rúnar
npm test
```

Each job is guarded against accidental corpus collapse (80% retention). Review the
diff, commit, bump the patch version, and `npm publish`.

## Development

```bash
npm install          # install workspace deps
npm run build        # bundle server/dist
npm test             # 207 tests: goldens (A–D), tools, composition, ingest
npm run typecheck    # tsc --noEmit
node server/probe-full-battery.mjs   # adversarial smoke battery against the built server
```

## Security model

Stdio transport only — no network listener. All tool inputs are schema-validated with length
caps; FTS queries are tokenised, quoted and capped; snapshot file reads are confined to the
corpus root (symlink-resolved); the serving database handle is reopened read-only after
ingest; the deny list and live-fetch refusal cannot be bypassed by prompt phrasing. The
threat model and test battery are in `server/test/`.
