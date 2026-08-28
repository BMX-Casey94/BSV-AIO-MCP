# Opcode & Rúnar context for the BSV knowledge MCP

**Date:** 2026-08-18
**Branch:** `feature/mcp-phase-a` (continuing; no merge per user)
**Status:** Approved by user (fidelity to source docs is the hard requirement)

## Problem

The MCP can *define* opcodes only through authority-4 essays (Craig's reserved-word doctrine,
macro expansion, "the disabled opcodes were the design"). It cannot *recommend* them. The smoke
test proved it: `investigate("What is OP_NOP…")` returned one essay and honestly reported "the
pinned snapshot does not contain an authority-class hit." There is no authoritative, citable
opcode leaf, and Rúnar — the BSVA-backed compiler that should be the recommended path for custom
Script — is absent from the package/symbol plane.

**Goal:** the MCP should know *when* to reach for a specific opcode (operational, use-organised
knowledge), and route custom-contract questions to Rúnar. Fidelity to source docs is paramount —
cards are faithful excerpts, never hand-summarised or invented.

## Sources (all agent-friendly, `.md` mirrors)

- **BSV Academy — BSV Opcodes** (`hub.bsvblockchain.org/higher-learning/bsv-academy/bsv-opcodes`):
  186 opcodes across 10 use-organised courses, incl. the Chronicle Release restoration
  (re-enabled arithmetic/bitwise/string ops, `OP_VER`/`OP_VERIF`/`OP_VERNOTIF`, new SHA-512 /
  SHA-512/256) and the reserved-opcode inventory (`OP_RESERVED`, `OP_NOP1`–`OP_NOP10`).
- **BSV Academy — Introduction to Bitcoin Script** (`…/introduction-to-bitcoin-script`): FORTH
  lineage, the stacks, P2PK/P2PKH/P2MS/P2MSH/R-puzzles, and a full `OP_PUSH_TX` chapter.
- **Rúnar docs** (`runar.build/docs/…`): SDK overview, SDK API, Compiler API, CLI reference,
  Contract Decorators/Types — the API surface for "how do I write a contract?".
- **Rúnar repo** (`github.com/icellan/runar`): public exports for the symbol plane.

## Design (five components)

### 1. Offline snapshot fetch (`server/src/ingest/fetchAcademyDocs.ts` + `server/scripts/…`)

A gated script (same `CSW_ALLOW_REFRESH=1` pattern as the Tier 0 refresh) GETs each page's `.md`
and writes it under `reference/academy/{tree}/{slug}.md`, plus a `manifest.json` recording
`source` URL and `fetched_at` per page. Snapshot-only at query time; the server never calls the
live `?ask=` endpoint. Quiz/assessment pages (the `?`-prefixed / `assessment-N` / `knowledge-check`
leaves) are skipped as noise. Content is stored verbatim (faithful excerpts), not re-summarised.

Trees: `opcodes` (bsv-opcodes), `script` (introduction-to-bitcoin-script), `runar` (the five
runar.build docs pages).

### 2. Ingest (`ingestAcademy` in `snapshotIngest.ts`)

One card per leaf page: `kind: "doc"`, `authority: 1` (BSVA reference), `id:
academy:{tree}/{slug}`, `locator:` the source URL, `language: "spec"`, body = the page markdown.
No new `HitKind`. Wired into `ingestSnapshots` alongside the existing ingestors.

### 3. Rúnar in the Tier 0 manifest

Add `icellan/runar` (`role: sdk`, `language: ts`, `package: null` → refresh fills the real label
from the repo's `package.json`). Re-run the Tier 0 refresh so `scanExports` records its public API
into `symbols.json` and it appears as a package card. This makes `get_symbol` /
`get_package_for_concept` able to answer contract-authoring questions with the real compiler.

### 4. `investigate` routing

- **Opcode semantics / reserved opcodes / Chronicle** → surface `academy:opcodes` doc cards.
- **Custom / complex Script authoring** (covenant, compiler, "write a contract", multi-language)
  → surface the Rúnar package card + `academy:runar` API cards (+ the *What Siggi Built* essay as
  supporting narrative).

BRC/spec still leads; these support. Claims quote opened excerpts — no canned "use OP_RETURN"
sentence, same honesty rule as the rest of Phase B.

### 5. Tests + goldens

- Ingest test: academy cards present with correct id/kind/authority/locator.
- Golden (Phase B runner): an opcode-semantics question (e.g. "when should I use OP_RETURN to
  store data on-chain?") must cite an `academy:opcodes` leaf; a contract-authoring question ("how
  do I write a BSV smart contract?") must surface Rúnar. `classified_as` asserted from hits only.

## Honesty / constraints

- Snapshot-only serving; fetch is a separate gated offline job.
- No invented opcode semantics, package APIs, or summaries — cards quote the source.
- UK English in generated strings. Stay on `feature/mcp-phase-a`. Do not push.
- Subagents: Grok 4.6 High/Fast (`cursor-grok-4.6-high-fast`).
- The academy pages are a live doc, not a git repo — pinned by fetch date, not SHA. Accepted by
  the user (the underlying BSV protocol is stable).

## Out of scope

- Embeddings; a literal Merkle tree; live `?ask=` querying at serve time.
- Re-summarising or curating opcode content (fidelity risk).
- Tier 1 repos / Phase C–D tools.
