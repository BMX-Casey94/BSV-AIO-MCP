# MCP pre-build contract

These files freeze the server before implementation. Start here, then `MCP-DESIGN.md`.
Phase A plan: `docs/superpowers/plans/2026-08-14-bsv-knowledge-mcp-phase-a.md`.

| File | What it freezes |
|---|---|
| [SCHEMA.md](SCHEMA.md) | Planes, resources, tool signatures, TypedHit, IndexStatus, composition rule |
| [evidence-package.schema.json](evidence-package.schema.json) | `investigate` return type (index pin, needs, claim status) |
| [investigation-loop.md](investigation-loop.md) | classify → retrieve → inspect → hop → verify |
| [winner-policy.md](winner-policy.md) | Who wins, `insufficient`, investigate must not actuate |
| [capability-graph.md](capability-graph.md) | Generated concept→BRC→package map; no Zyra seed |
| [refresh-policy.md](refresh-policy.md) | Snapshot vs live-fetch; BRC shrinkage fail |
| [repo-tiers.json](repo-tiers.json) | What to index first |
| [golden-eval.json](golden-eval.json) | Phase-gated questions the build must pass |

Related snapshots: `reference/brc_index.json` (171 BRCs, SHA-pinned),
`reference/shoprag-successor-map.json`, `reference/testnet-ops.md`,
`reference/deny-list.json`, `reference/ordinality-rules.md`.

**Do not** copy `from-zyra-bsv-app-studio/packages/bsv-knowledge`. Steal SQLite/FTS
shape, injectable HTTP, and the `specs/` tool idea only.
