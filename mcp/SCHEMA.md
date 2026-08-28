# MCP contract — tools, resources, planes

Frozen 2026-08-14 (addenda same day). Implementation must match these signatures.
UK English in generated text. Winner rules live in `winner-policy.md`.

## Planes

| Plane | Role | Mutates chain? |
|---|---|---|
| **knowledge** | Snapshot search, essays, BRCs, wiki, contradictions | No |
| **code** | Symbols, deps, tests, examples, BRC↔impl edges | No |
| **live-query** | Arcade / WoC / faucet *status* | No |
| **actuate** | Faucet claim, broadcast, wallet create | Yes — `network_guard` required, default `ttn` |

Knowledge, code, and `investigate` are **read-only**. They serve pinned snapshots
only. Live-query may hit the network with cache + back-off. Actuate is a separate
plane: it never runs unless the caller states a network and `network_guard` returns
`allow`. Do not describe the whole server as read-only.

`investigate` must not call actuate tools. If it needs a live fact it **declares**
`needs` (see `winner-policy.md`).

## Shared types

### Network

`any | main | test | ttn | tstn`

Canonical test id is **`ttn`**. Aliases to normalise: toolbox `ttn` = older TS
`teratest` = Arcade `teratestnet`. `tstn` is a separate Arcade-via-env network.

### TypedHit
```json
{
  "id": "brc:62",
  "kind": "brc|symbol|test|example|doc|essay|principle|wiki|web|live|contradiction|capability",
  "authority": 0,
  "title": "Background Evaluation Extended Format (BEEF)",
  "locator": "bsv-blockchain/BRCs/transactions/0062.md",
  "revision": "3ae1f25a8d0d",
  "fetched_at": "2026-08-14",
  "stale": false,
  "network": "any|main|test|ttn|tstn",
  "language": "spec|ts|go|py|prose",
  "contradiction_ids": [],
  "successor": null,
  "excerpt": "…"
}
```

Authority: `0` whitepaper/consensus/conformance · `1` BRC (non-opinion) · `2` Tier 0/1
implementation · `3` official docs/wiki/examples (including React kits) · `4`
education/essays/opinions · `5` web/legacy `bitcoin-sv`.

React kits (`identity-react`, `uhrp-react`) are `kind: example`, authority 3.

### IndexStatus

Returned by `get_index_status` and embedded on every EvidencePackage.

```json
{
  "status": "ready|empty|stale",
  "sha": "content-hash of the served snapshot set",
  "brc_revision": "3ae1f25a8d0d",
  "fetched_at": "2026-08-14",
  "counts": {
    "brcs": 171,
    "essays": 476,
    "education": 427,
    "packages": 0
  },
  "policy_version": "2026-08-14"
}
```

An empty or stub status is a failed build. Callers must see the pin before they
trust any hit.

### EvidencePackage

See `evidence-package.schema.json`. Return type of `investigate` / `design_review`.

## Resources (knowledge plane)

| URI | Source |
|---|---|
| `csw://principles/{theme}` | `education/` + `data/education_index.json` |
| `csw://essay/{era}/{slug}` | `summaries/` / `summaries-medium/` |
| `csw://contradictions` | `substack-articles/contradictions.json` |
| `brc://index` | `reference/brc_index.json` |
| `brc://spec/{number}` | snapshotted BRC markdown |
| `brc://guide/{section}` | `reference/brc-llm-training-guide.txt` |
| `wiki://ts-stack/{page}` | `reference/deepwiki/ts-stack/` |
| `ops://testnet` | `reference/testnet-ops.md` |
| `ops://ordinality` | `reference/ordinality-rules.md` |
| `repo://registry` | `reference/repo_registry.json` |
| `repo://deny` | `reference/deny-list.json` |
| `repo://tier0` | `reference/tier0/manifest.json` |
| `spec://ts-stack/{service}` | `reference/tier0/specs/` |
| `symbol://{repo}/{name}` | `reference/tier0/symbols.json` row — `{repo}` is the **short** name (e.g. `ts-sdk`, not `bsv-blockchain/ts-sdk`); `{name}` is the exact exported identifier |
| `vector://{domain}/{case}` | `reference/tier0/vectors/` |

## Tools

### Knowledge
- `get_index_status() → IndexStatus` — **required, real from day one**
- `search_knowledge(query, filters?) → TypedHit[]`
  filters: `kind[], authority_max, theme, network, language, era`
- `get_resource(uri) → { uri, text, hit }`
- `list_contradictions(topic?) → finding[]`

Retrieval: Plane 1 (prose) is FTS5 + local embeddings. Plane 2 (code, Phase B) is
FTS + symbols; embeddings are a later ranker, not the index of record.

### Code
- `get_symbol(repo, name) → SymbolRecord`
- `find_references(repo, symbol) → TypedHit[]`
- `trace_dependency(from_package, to_package) → path[]`
- `get_package_for_concept(concept) → { packages, brcs, hits }` — reads the
  generated capability graph (`capability-graph.md`)
- `get_conformance_vector(domain, case) → vector`
- `inspect_schema(service) → spec file` — ts-stack `specs/` (Phase B)
- `error_taxonomy(prefix?) → ERR_* rows` — `specs/errors.md` (Phase B)
- `repo_lookup(name_or_purpose) → registry row`
- `follow_edge(entity, relation) → GraphPath[]`
  relations: `implements | specified_by | tested_by | explained_by | superseded_by`
- `check_dependency(name) → { status: allowed|denied|unknown, reason, successor? }`
  (Phase D; deny list is already at `repo://deny`)

### Synthesis
- `investigate(question, context?) → EvidencePackage`
- `design_review(proposal) → EvidencePackage`
- `scaffold_flow(intent) → EvidencePackage & skeleton`
- `concept_map(entity) → graph`
- `network_guard(intent_text, current_network?) → { action: ask_switch|allow|deny|remind_main, network, reason }`

Do **not** implement `brc_ask` or `build_context`. Do **not** copy Zyra's seed.

### Live-query (read-only, cached)
- `get_chain_info(network)` — WoC-TTN / WoC
- `get_tx_status(network, txid)` — Arcade first, WoC fallback
- `faucet_health()` — `GET /api/health`

### Actuate (default network `ttn`)
- `create_test_wallet(network)` — separate storage file
- `faucet_claim({ address? | identityKey?, network: "ttn" })`
- `broadcast_tx(network, raw_hex)` — Arcade `POST /tx` as **EF hex**, not BEEF

Actuate tools MUST call `network_guard` internally. Mainnet actuation requires an
explicit `network: "main"` and a second confirmation flag.

## Composition rule

- **How** → authority ≤ 2 (BRC + current implementation + tests)
- **When / why** → education + essays (authority 4), still included
- **Is it true now** → live-query (or `needs` on the package)
- **Do it** → actuate after guard

Broadcast teaching uses the **per-network table** in `reference/testnet-ops.md`,
not the slogan “Arcade first everywhere”:

| Network | Default broadcast |
|---|---|
| `ttn` | Arcade first |
| `main` | Arcade + ARC (TAAL) + GorillaPool failover (TS Arcade is opt-in in toolbox) |
| `test` | TAAL ARC (Arcade off by default) |
| `tstn` | Arcade via `$TSTN_ARCADE_URL` |

Never recommend SVNode as the application broadcaster. Never return a
BitGenius/ShopRAG chunk as a source. Their repo list is only a successor-map
input (`reference/shoprag-successor-map.json`). Public BitGenius Q&A may be used
as an **eval canary**, never ingested.
