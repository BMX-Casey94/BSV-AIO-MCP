# Capability graph (generated, not a Universe)

A **capability** is a retrieval bridge: concept → BRC → package → (later) symbol.

It is **not** the index of record. BRC markdown, symbols, and education notes remain
authoritative. The graph exists so “pay a merchant” can reach BRC-29 / `createAction`
when those strings are absent from the query.

## Generation (never hand-API lists)

Build `reference/capability_graph.json` from, in order:

1. `reference/brc_index.json` — id, title, category, path
2. `data/education_index.json` themes that mention the same BRC or concept
3. `reference/shoprag-successor-map.json` — current package names only
4. Exported symbol names that match the BRC title tokens (Tier 0+1 `symbols.json`)
5. Evidenced BRC→package edges: `reference/tier0/docs/brc-mentions.json` and
   `reference/tier1/docs/brc-mentions.json` — BRC numbers cited by each repo's own
   snapshotted README/docs/examples. These are the only BRC-to-package edges the
   graph trusts beyond title-token matching.

**Forbidden:** copying a donor project's capability seed file. Those rows invent
APIs (`PeerPayClient`, `createPayment`, `serialiseEnvelope`).

A capability row may list `api: []` until a symbol indexer confirms names.
Unknown API is `insufficient`, not a guessed identifier.

## Record shape

```json
{
  "id": "brc-62-beef",
  "name": "Background Evaluation Extended Format",
  "brc": "BRC-62",
  "also": ["BRC-95", "BRC-96"],
  "packages": ["@bsv/sdk", "go-sdk"],
  "api": [],
  "education_themes": ["spv", "proofs"],
  "authority_hint": 1
}
```

React kits (`identity-react`, `uhrp-react`) may appear as `kind: example`
(authority 3), never as codegen sources of truth.

## Tools

- `get_package_for_concept` reads this graph (packages + BRCs only)
- `check_dependency` uses `reference/deny-list.json` plus the confirmed Tier 0/1
  package cards (shipped in 1.1.0)
- Do not add `build_context`. `investigate` is the expensive path.
