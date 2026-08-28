# MCP contract

These files are the tool contract for the shipped server. The product README and install
instructions live at the repository root (`README.md`).

| File | What it specifies |
|---|---|
| [SCHEMA.md](SCHEMA.md) | Planes, resources, tool signatures, TypedHit, IndexStatus, composition rule |
| [evidence-package.schema.json](evidence-package.schema.json) | `investigate` return type (index pin, needs, claim status) |
| [investigation-loop.md](investigation-loop.md) | classify → retrieve → inspect → hop → verify |
| [winner-policy.md](winner-policy.md) | Who wins, `insufficient`, investigate must not actuate |
| [capability-graph.md](capability-graph.md) | Generated concept→BRC→package map; titles plus confirmed symbols only |
| [refresh-policy.md](refresh-policy.md) | Snapshot vs live-fetch; BRC shrinkage fail |
| [repo-tiers.json](repo-tiers.json) | What to index first |
| [golden-eval.json](golden-eval.json) | Phase-gated questions the build must pass |

Related snapshots: `reference/brc_index.json` (171 BRCs, SHA-pinned),
`reference/shoprag-successor-map.json`, `reference/testnet-ops.md`,
`reference/deny-list.json`, `reference/ordinality-rules.md`.

**Do not** import a donor knowledge-MCP or invent capability API names. The SQLite/FTS
shape, injectable HTTP, and the `specs/` tool idea were patterned independently.
