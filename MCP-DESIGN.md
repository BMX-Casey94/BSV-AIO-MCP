# BSV Knowledge MCP — Design

Status: **pre-build contract frozen (2026-08-14, Zyra addenda same day)**.
Implementation starts from `mcp/SCHEMA.md` and
`docs/superpowers/plans/2026-08-14-bsv-knowledge-mcp-phase-a.md`.
This document is the rationale; the contract files are law.

## 1. Purpose

An all-in-one, intelligent BSV MCP server that lets an AI agent (or developer via an
agent) answer: *"How should I build this on Bitcoin (BSV), and why is that the correct
way?"* — with citations back to source material at every step.

It merges four knowledge assets already in this workspace:

| Asset | Location | Role |
|---|---|---|
| Craig Wright corpus (476 summarised essays, both eras) | `summaries/`, `summaries-medium/`, `substack-articles/`, `medium-articles/` | Design rationale, first principles, the "why" |
| Education distillations (427 KEEP / 49 DROP) | `education/`, `data/education_index.json` | Bullet-point principles, BTC-critique filtered out |
| BRC LLM training guide | `reference/brc-llm-training-guide.txt` | Standards layer (BRC-100/103, BEEF, UHRP, overlays…) |
| DeepWiki ts-stack extraction (36 pages, 264 KB) | `reference/deepwiki/ts-stack/` | Architecture map of the production TS stack |
| Repo registry (149 repos, metadata) | `reference/repo_registry.json` | Routing: what each repo is for, language, activity, URL |
| Testnet / Arcade / faucet runbook | `reference/testnet-ops.md` | Network switch, faucet API, WoC-TTN, Arcade endpoints |
| BRC catalogue (171 standards, SHA-pinned) | `reference/brc_index.json` | Per-standard index from `bsv-blockchain/BRCs` SUMMARY.md |
| ShopRAG successor map | `reference/shoprag-successor-map.json` | Old `bitcoin-sv/*` → current repos; LARS/CARS marked legacy |
| MCP contract | `mcp/` | Tool schema, evidence package, loop, winner policy, tiers, golden eval |
| Deny list / ordinality | `reference/deny-list.json`, `reference/ordinality-rules.md` | v1/LARS blocks; BRC-150 sat-continuity rules |

BRC markdown bodies are snapshotted on refresh (`scripts/build_brc_index.py`), not
live-fetched per query. New BRCs arrive on the weekly/tag job.

## 2. Architecture — three planes, one server

### Plane 1 — Knowledge (the "why" and "what")
Curated documents exposed as MCP **resources**. Prose retrieval is hybrid
(SQLite FTS5 + local embeddings; corpus is a few MB, so no external vector DB).
Code retrieval (Plane 2) is FTS + symbols; embeddings are a later ranker there.

- `csw://principles/{topic}` — distilled education notes by theme
- `csw://essay/{era}/{slug}` — full essay summaries
- `csw://contradictions` — the 84-finding consistency audit
  (`substack-articles/contradictions.json`) so the agent can flag where Craig's
  positions collide rather than presenting both as truth
- `brc://guide/{section}` — BRC training guide sections
- `brc://spec/{number}` — per-standard summaries (to be built)
- `wiki://ts-stack/{page}` — DeepWiki architecture pages

### Plane 2 — Code intelligence (the "where" and "how")
Structured, per-repo indexes so the agent retrieves exact symbols instead of guessing
from prose. Precomputed per repo (SCIP where available, tree-sitter fallback), stored
locally, commit-pinned.

Tools (model-invokable):
- `get_symbol(repo, name)` — definition, signature, source excerpt
- `find_references(repo, symbol)` — usages across the org's repos
- `trace_dependency(from_package, to_package)` — path through the monorepo domains
- `get_package_for_concept("BEEF")` → `@bsv/sdk` + relevant files
- `get_conformance_vector(domain, case)` — ts/go shared test vectors as the
  cross-language source of truth
- `repo_lookup(name_or_purpose)` — answers "which repo do I need?" from the registry
  (149 repos with descriptions, language, last-push, URL)

### Plane 3 — Synthesis (the differentiator)
Tools that join the planes — this is what a plain doc-search MCP cannot do:

- `design_review(proposal)` — checks a proposed design against Craig's principles,
  relevant BRCs, and known contradictions; returns aligned/conflicting citations
- `scaffold_flow(intent)` — e.g. "tokenise an asset" → BTMS path + overlay topic +
  relevant essays + conformance vectors + a minimal code skeleton
- `concept_map(entity)` — BRC-100 ↔ wallet-toolbox ↔ Craig's keys-as-control essays,
  as a traversable graph
- `network_guard(intent_text)` — see §4

## 3. Operational policies baked into the knowledge

These are standing decisions, to be encoded as first-class knowledge (and enforced by
the synthesis tools), not left to agent improvisation. Concrete endpoints and the
wallet-switch runbook live in `reference/testnet-ops.md`.

1. **Broadcast via the per-network table** in `reference/testnet-ops.md`, not the
   slogan “Arcade first everywhere”. `ttn`: Arcade first. `main`: Arcade + ARC
   (TAAL) + GorillaPool (TS Arcade is toolbox-opt-in). `test`: TAAL ARC. `tstn`:
   Arcade via env. Never recommend SVNode as the application broadcaster.
   - Main: `https://arcade-v2-us-1.bsvblockchain.tech`
   - TTN: `https://arcade-v2-ttn-us-1.bsvblockchain.tech`
   - API: `POST /tx` (**EF hex**, not BEEF), `GET /tx/{txid}`. SSE `/events` is
     optional (README still marks it TODO). Arc-compatible headers, not
     byte-for-byte ARC.
   - Hosted Arcade may 503; surface that, do not silently fall back to SVNode.
   - Status vocabulary is Arcade's (`RECEIVED` → `MINED`). Do not teach
     `SEEN_MULTIPLE_NODES`. Do not fail over after `REJECTED` /
     `DOUBLE_SPEND_ATTEMPTED`.
2. **High-volume wallet ingestion via go-wallet-toolbox.** Demonstrated ~1,000 TPS
   sustained for 90 s accepted by the network without loss on limited CPU (BSVA demo).
   Also the reference for Merkle proof/tree handling and BEEFs-from-blockheight.
   TS/Python/Rust toolboxes for other languages; Go for throughput-critical services.
3. **Immutability-first design guidance**: protocol-set-in-stone reasoning from the
   corpus should surface whenever a design depends on protocol behaviour.

## 4. Testnet support (Teratestnet) — gap closed 14 Aug 2026

Switching is **easy at construction, not a hot-swap**. Set `chain` / `bsv_network` /
`BSV_NETWORK` / Arcade `network:` when the wallet (and its storage file) is created.
`ttn` shares testnet address encoding with `test`, but UTXOs and SQLite files must
not be reused across networks. Canonical id: **`ttn`**. Aliases to normalise:
toolbox `ttn` = older TS `teratest` = Arcade `teratestnet`.

- **Create (TS)**: `Setup.createWalletSQLite({ chain: 'ttn', filePath, rootKeyHex })`
- **Create (Go)**: `BSV_NETWORK=ttn` + `go run ./cmd/infra`, or `network: ttn` in
  `examples-config.yaml`. Address via `brc29.Address(..., brc29.WithTestNet())`.
- **Fund**: `https://faucet-ttn.bsvblockchain.tech` (= faucet.teratestnet.org)
  - `POST /api/claim` `{ address, captchaToken? }` → `{ txid, ef, outputs }`
  - `POST /api/claim/wallet` `{ identityKey, captchaToken? }` → Atomic BEEF for
    `internalizeAction` (preferred when a BRC-100 wallet is in session)
  - `GET /api/status/:txid` · optional `Authorization: Bearer` skips captcha
- **Broadcast**: Arcade TTN `POST /tx` (not classic-testnet faucets, not SVNode).
- **Explorer**: UI `https://woc-ttn.bsvblockchain.tech` · API
  `https://api.woc-ttn.bsvblockchain.tech/v1/bsv/test/...` (path says `test`,
  `chain` field is `teratestnet`; confirmed live). Rate-limit aware; prefer Arcade
  status for txs we broadcast.
- **`network_guard`**: detect testing intent → offer `ttn` → remind to return to
  `main` → every TX response names its network → refuse cross-network storage reuse.

## 5. Keeping the knowledge updated

It does **not** update itself by magic, and it should not query live sources on every
request. The model is **versioned snapshots + a refresh pipeline**:

1. **Snapshot**: all sources are fetched into `reference/` with the fetch date and
   source revision (repo commit SHA / DeepWiki "last indexed" date) recorded in a
   manifest. The MCP serves only from snapshots — deterministic, offline-capable,
   auditable.
2. **Refresh pipeline** (scripts already in `scripts/`: `deepwiki_mcp.py`,
   `build_repo_registry.py`, plus repo clones to come): re-run on a schedule
   (weekly is ample for docs; on-tag for pinned repos) or on demand.
3. **Incremental reindex**: content-hash each source file; only changed files are
   re-chunked/re-embedded. Produces a changelog ("BRC-1029 amended; go-sdk v1.2.3
   re-indexed") so downstream users know what moved.
4. **Live fallback (optional, off by default)**: the DeepWiki public MCP
   (`mcp.deepwiki.com`) can be wired in as a fallback tool for repos not yet
   snapshotted. Note: its behaviour changed mid-August 2026 (calls that worked one
   day returned `-32602` the next), so it must never be a hard dependency.
5. **Craig corpus**: static (Substack/Medium archives); only new posts trigger a
   top-up run of the existing fetch/summarise pipeline.

## 6. Security & quality constraints

- Knowledge, code, and `investigate` are read-only. Actuate is a guarded separate
  plane (`network_guard`, default `ttn`). No execution of fetched code; tool
  arguments validated.
- Every response carries citations (essay slug, BRC section, repo file:line) and
  an `IndexStatus` pin. `insufficient` beats a guessed BRC number.
- No invented content: if the corpus doesn't cover it, the tool says so and points
  to the nearest adjacent material.
- External endpoints (WoC testnet, faucet) are rate-limit aware with caching.
  WoC free tier is 3 req/s — never a hot-path loop.
- UK English throughout generated knowledge artefacts.
- Do not ingest BitGenius/ShopRAG answers. Do not implement `brc_ask`.
- Do not copy `from-zyra-bsv-app-studio/`; steal patterns only (see `mcp/`).

## 7. Build phases

Pre-build (this pass) is **done**: schema, evidence package, investigation loop,
winner policy, capability-graph rule, deny list, ordinality card, repo tiers,
golden eval, refresh policy, BRC index, ShopRAG successor map.

| Phase | Scope | Depends on | Golden |
|---|---|---|---|
| A | Knowledge plane over existing snapshots + real `get_index_status` + `investigate` | Pre-build | G04, G05, G09, G10 |
| B | Code intelligence for Tier 0 + `inspect_schema` / `error_taxonomy` / vectors | A | G02 |
| C | Tier 1 (arcade, overlays, merkle-service, x402) + BRC↔impl edges | B | G01, G03, G07, G08 |
| D | design_review, scaffold_flow, concept_map, network_guard, actuate, `check_dependency` | C | G06, G11 |

Existing related repos to evaluate at build time (not reinvent): `bsv-blockchain/bsv-mcp`,
`bsv-blockchain/simple-mcp`. Pattern library only: `from-zyra-bsv-app-studio/`
(do not fork). Phase A plan: `docs/superpowers/plans/2026-08-14-bsv-knowledge-mcp-phase-a.md`.
Phase B plan: `docs/superpowers/plans/2026-08-14-bsv-knowledge-mcp-phase-b.md`.
