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
4. After Phase B: exported symbol names that match the BRC title tokens

**Forbidden:** copying `from-zyra-bsv-app-studio/.../capabilities.seed.json`.
Those rows invent APIs (`PeerPayClient`, `createPayment`, `serialiseEnvelope`).

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

- Phase B: `get_package_for_concept` reads this graph (packages + BRCs only)
- Phase D: `check_dependency` uses `reference/deny-list.json` plus indexed packages
- Do not add `build_context`. `investigate` is the expensive path.
