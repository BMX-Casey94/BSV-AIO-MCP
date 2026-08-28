# Academy opcodes + Rúnar reference cards

**Date:** 2026-08-18  
**Status:** approved (user: proceed; snapshot acceptable; Rúnar package label from the repo)

## Intent

The MCP must answer *when to use* a specific opcode (and how to author custom Script) from pinned, citable leaves — not only from authority-4 essays. Query path stays snapshot-only.

## Sources (verbatim, no invented prose)

- BSV Academy trees: `bsv-opcodes`, `introduction-to-bitcoin-script` (`.md` mirrors from `hub.bsvblockchain.org/llms.txt`). Skip assessments and quiz URLs.
- Rúnar docs: SDK overview, SDK API, Compiler API, CLI reference, quick start, contract basics, contract decorators/types (`runar.build`).
- Rúnar repo: `icellan/runar` in the Tier 0 manifest (`role: sdk`). Refresh confirms the package label and scans `packages/*` exports.

## Cards

- One committed markdown file per leaf page under `reference/academy/{opcodes,script,runar}/`.
- Ingest: `id: academy:{tree}/{slug}`, `kind: doc`, `authority: 1`. Strip GitBook `?ask=` footer; keep page body verbatim.
- Fetch is a gated job (`CSW_ALLOW_REFRESH=1`), never imported by the query path.

## Investigate

- Opcode questions (`OP_*`, reserved opcodes, Chronicle restoration) also retrieve `kind: doc` academy cards (authority 1).
- Custom-contract questions (Rúnar / smart contract / compile a contract) also retrieve Rúnar docs and any confirmed Rúnar symbols (authority ≤ 2).
- Claims still quote opened excerpts. No canned “use OP_NOP for padding” sentence.

## Tests

- Fetch parser skips quiz/assessment URLs.
- Ingest produces `academy:opcodes/op_nop` from the committed snapshot.
- Investigate on an OP_NOP question cites an academy doc leaf (authority 1).
- Investigate on a custom-contract question mentions Rúnar from a snapshotted card.
