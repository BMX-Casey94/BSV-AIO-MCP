# BSV Knowledge MCP — Phase A Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]` ) syntax for tracking.

**Goal:** Ship a from-scratch, read-only knowledge MCP in this repo that searches the existing snapshots, returns a real `IndexStatus` pin, and runs `investigate` well enough to pass golden cases G04, G05, G09, and G10.

**Architecture:** One TypeScript ESM package at `server/`. SQLite FTS5 over essays, education, BRCs, contradictions, testnet-ops, ordinality, and the deny list. `investigate` is a thin orchestrator over those primitives (≤4 hops). No symbol indexer, no actuate, no `brc_ask`, no Zyra fork.

**Tech Stack:** Node ≥22.13 · TypeScript 5.6 strict · `@modelcontextprotocol/sdk` ^1.17 · `zod` ^3.23 · Vitest 3 · `node:sqlite` (Windows-safe; no native `better-sqlite3` in Phase A).

## Global Constraints

- UK English in every generated string.
- Contract law: `mcp/SCHEMA.md`, `mcp/evidence-package.schema.json`, `mcp/winner-policy.md`, `mcp/investigation-loop.md`.
- Serve snapshots only. No live GitHub / `bsv.brc.dev ?ask=` / DeepWiki on the query path.
- `get_index_status` must never return `{ status: "empty" }` once ingest has run.
- `investigate` must not call actuate tools; live facts go in `needs`.
- Do not copy `from-zyra-bsv-app-studio/packages/bsv-knowledge`. Patterns only.
- Do not invent BRC numbers, package APIs, or fee values.
- Currency £; distances in miles if any copy needs them.
- No mock/demo corpus. Tests may use tiny fixtures under `server/test/fixtures/`.
- Commits only if the user asks. Do not push.

## File structure (create in Task 1)

```
package.json                 # root workspace scripts: test, typecheck, mcp
tsconfig.base.json
server/
  package.json
  tsconfig.json
  vitest.config.ts
  src/
    index.ts                 # stdio entry
    server.ts                # McpServer factory
    config.ts
    types.ts                 # TypedHit, IndexStatus, EvidencePackage
    store/db.ts
    store/schema.sql
    store/knowledgeStore.ts
    ingest/snapshotIngest.ts
    ingest/capabilityGraph.ts
    ingest/indexManifest.ts
    tools/statusTools.ts
    tools/knowledgeTools.ts
    tools/investigateTools.ts
    compose/winner.ts
    compose/investigate.ts
  test/
    statusTools.test.ts
    knowledgeTools.test.ts
    investigateTools.test.ts
    winner.test.ts
    golden-phase-a.test.ts
    fixtures/mini-corpus/
```

---

### Task 1: Package scaffold and real `get_index_status`

**Files:**
- Create: `package.json`, `tsconfig.base.json`, `server/package.json`, `server/tsconfig.json`, `server/vitest.config.ts`
- Create: `server/src/config.ts`, `server/src/types.ts`, `server/src/store/db.ts`, `server/src/store/schema.sql`, `server/src/ingest/indexManifest.ts`, `server/src/tools/statusTools.ts`, `server/src/server.ts`, `server/src/index.ts`
- Test: `server/test/statusTools.test.ts`

**Interfaces:**
- Consumes: `reference/brc_index.json` (`revision`, `count`, `generated`); contradictions live at `substack-articles/contradictions.json` (not `data/`)
- Produces: `createServer(config) → McpServer`; `buildIndexStatus(root) → IndexStatus`; tool `get_index_status`

- [ ] **Step 1: Write the failing test**

```ts
// server/test/statusTools.test.ts
import { describe, expect, it } from "vitest";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createServer } from "../src/server.js";
import { defaultConfig } from "../src/config.js";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "../..");

async function linkedClient() {
  const server = createServer(defaultConfig(ROOT));
  const client = new Client({ name: "test", version: "0.0.1" });
  const [ct, st] = InMemoryTransport.createLinkedPair();
  await Promise.all([server.connect(st), client.connect(ct)]);
  return client;
}

describe("get_index_status", () => {
  it("returns a real pin, never empty after construct", async () => {
    const client = await linkedClient();
    const res = await client.callTool({ name: "get_index_status", arguments: {} });
    const text = (res.content[0] as { type: "text"; text: string }).text;
    const status = JSON.parse(text);
    expect(status.status).toMatch(/ready|stale/);
    expect(status.sha).toMatch(/^[0-9a-f]{8,}$/);
    expect(status.brc_revision).toBeTruthy();
    expect(status.fetched_at).toBeTruthy();
    expect(status.policy_version).toBe("2026-08-14");
    expect(status.counts.brcs).toBeGreaterThanOrEqual(171);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run server/test/statusTools.test.ts`
Expected: FAIL (package / `createServer` missing)

- [ ] **Step 3: Write minimal implementation**

`IndexStatus` must hash the served snapshot set (at least `reference/brc_index.json`, `data/education_index.json`, `substack-articles/contradictions.json`, `reference/testnet-ops.md`, `reference/ordinality-rules.md`, `reference/deny-list.json`). Read `brc_revision` from `reference/brc_index.json`. `status` is `ready` when those files exist; never hard-code `"empty"`.

Register only `get_index_status` in this task. Stdio entry in `src/index.ts` uses `CSW_ROOT` or `process.cwd()`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run server/test/statusTools.test.ts`
Expected: PASS

- [ ] **Step 5: Typecheck**

Run: `npx tsc -p server/tsconfig.json --noEmit`
Expected: exit 0

---

### Task 2: FTS ingest of existing snapshots

**Files:**
- Create: `server/src/store/knowledgeStore.ts`, `server/src/ingest/snapshotIngest.ts`
- Modify: `server/src/store/schema.sql`
- Test: `server/test/knowledgeTools.test.ts` (ingest section first)

**Interfaces:**
- Consumes: `summaries/**/*.md`, `summaries-medium/**/*.md`, `education/**/*.md`, `reference/brc_index.json`, `substack-articles/contradictions.json`, `reference/testnet-ops.md`, `reference/ordinality-rules.md`, `reference/deny-list.json`, `reference/brc-llm-training-guide.txt`
- Produces: `ingestSnapshots(root, store) → { documents: number }`; FTS rows with `kind`, `authority`, `locator`, `revision`

Schema (minimum):

```sql
CREATE TABLE IF NOT EXISTS documents (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL,
  authority INTEGER NOT NULL,
  title TEXT NOT NULL,
  locator TEXT NOT NULL,
  revision TEXT NOT NULL,
  fetched_at TEXT NOT NULL,
  network TEXT NOT NULL DEFAULT 'any',
  language TEXT NOT NULL DEFAULT 'prose',
  era TEXT,
  body TEXT NOT NULL
);
CREATE VIRTUAL TABLE IF NOT EXISTS docs_fts USING fts5(
  id, title, body, kind, tokenize = 'porter unicode61'
);
CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
```

- [ ] **Step 1: Write the failing test** — ingest the real repo root (or a fixture that copies three real files) and assert document counts: BRCs ≥ 171, education ≥ 400, contradictions ≥ 80, plus `ops://testnet` and `ops://ordinality` rows.

- [ ] **Step 2: Run — fails. Implement ingest. Green.**

Map kinds: essay summaries → `essay` authority 4; education → `principle` authority 4; BRC catalogue rows → `brc` authority 1 (opinions 4); contradictions → `contradiction` authority 4; testnet-ops → `doc` authority 3; ordinality → `doc` authority 1; deny-list → `doc` authority 3.

- [ ] **Step 3: Persist ingest stats into `meta` so `get_index_status` can report `counts.essays` / `education` / `brcs`.**

---

### Task 3: `search_knowledge`, `get_resource`, `list_contradictions`

**Files:**
- Create: `server/src/tools/knowledgeTools.ts`
- Modify: `server/src/server.ts`
- Test: `server/test/knowledgeTools.test.ts`

**Interfaces:**
- `search_knowledge({ query, filters? }) → { hits: TypedHit[] }`
- `get_resource({ uri }) → { uri, text, hit }`
- `list_contradictions({ topic? }) → { findings: unknown[] }`

- [ ] **Step 1: Failing tests**
  - `search_knowledge("BEEF")` returns a hit with `id` containing `62` or title containing `BEEF`, authority 1.
  - `search_knowledge("SPV")` returns at least one `principle` or `essay`.
  - `get_resource("ops://ordinality")` body mentions `fail closed`.
  - `list_contradictions({ topic: "SPV" })` includes `IT-01` from `substack-articles/contradictions.json`.

- [ ] **Step 2: Implement. Cap default 20, max 100, include `totalCount`.** URI map is exactly the table in `mcp/SCHEMA.md`.

- [ ] **Step 3: Green + typecheck.**

---

### Task 4: Winner policy helper

**Files:**
- Create: `server/src/compose/winner.ts`
- Test: `server/test/winner.test.ts`

**Interfaces:**
- `pickWinner(hits: TypedHit[]): { winner: TypedHit | null; reason: string }`
- `claimStatus(supportHits, opposingHits): "supports" | "contradicts" | "insufficient"`

- [ ] **Step 1: Failing tests**
  - Authority 1 beats authority 2.
  - Same authority: newer `fetched_at` wins.
  - Live/web (authority 5) cannot beat a BRC (1).
  - No hits → `insufficient`.
  - Spec vs code disagreement → `contradicts`, winner is the spec hit.

- [ ] **Step 2: Implement from `mcp/winner-policy.md` only. Green.**

---

### Task 5: `investigate` orchestrator (knowledge hops only)

**Files:**
- Create: `server/src/compose/investigate.ts`, `server/src/tools/investigateTools.ts`
- Modify: `server/src/server.ts`, `server/src/types.ts`
- Test: `server/test/investigateTools.test.ts`

**Interfaces:**
- `investigate(question: string) → EvidencePackage` matching `mcp/evidence-package.schema.json`
- Tool: `investigate({ question, context? })`

- [ ] **Step 1: Failing tests**
  - Package always includes `index` with the same pin as `get_index_status`.
  - `needs` is an array (empty unless the question is live-ops).
  - Every claim has `status`.
  - Hop count ≤ 4.
  - Question “Which BRC governs the wallet-to-application interface?” cites BRC-100 (`classified_as: spec`).
  - Question about faucet *status right now* sets `needs` to include `faucet_health` and does not perform HTTP.

- [ ] **Step 2: Implement classify → FTS retrieve → inspect (open body) → stop. No actuate. Green.**

Validate the returned object against `mcp/evidence-package.schema.json` in the test (use `node:fs` to load the schema and a small JSON Schema checker, or hand-check required keys if adding a dependency is heavier than the check).

---

### Task 6: Capability graph generator (titles only)

**Files:**
- Create: `server/src/ingest/capabilityGraph.ts`, `scripts/build_capability_graph.py` **or** keep it in TS
- Produce: `reference/capability_graph.json`
- Test: assert BRC-62 row exists, `api` is `[]`, no `PeerPayClient` / `createPayment` strings in the file

**Interfaces:**
- Follow `mcp/capability-graph.md`. Source = `reference/brc_index.json` + education theme tokens only.

- [ ] **Step 1: Failing test that the graph file is missing or contains invented APIs.**
- [ ] **Step 2: Generate. `get_package_for_concept` may wait until Phase B if packages are unknown — then `investigate` still cites the BRC. Green.**

---

### Task 7: Phase A golden runner

**Files:**
- Create: `server/test/golden-phase-a.test.ts`
- Consumes: `mcp/golden-eval.json` cases `G04`, `G05`, `G09`, `G10`

- [ ] **Step 1: Write tests that call `investigate` / `get_index_status` and assert `expect` fields.**
  - G04: must cite BRC-100, authority_lead 1
  - G05: kinds include principle/essay/contradiction; mention SPV and full node; contradiction IT-01 if present
  - G09: cite BRC-150 and ordinality; mention sat ordering / fail closed; must not claim AtomicBEEF suffices
  - G10: `get_index_status` has sha, brc_revision, fetched_at, policy_version; status ready|stale

- [ ] **Step 2: Run `npx vitest run server/test/golden-phase-a.test.ts` — fix retrieve/compose until green.**

- [ ] **Step 3: Full suite + typecheck**

Run: `npx vitest run && npx tsc -p server/tsconfig.json --noEmit`
Expected: exit 0

---

## Out of scope (do not do in Phase A)

- Symbol / ts-morph / SCIP indexing
- `inspect_schema`, `error_taxonomy`, `check_dependency` tools (schema is frozen; implement later)
- Actuate, `network_guard`, faucet claim, broadcast
- Embeddings (FTS only is acceptable for Phase A prose; add embeddings at the end of A only if G05 is weak)
- Forking Zyra, `brc_ask`, `build_context`
- Snapshotting every BRC markdown body (nice-to-have; catalogue + titles are enough for G04/G09 if `get_resource` can fetch via `raw_url` **offline from a local snapshot** — if a body is missing, return `insufficient` + gap, do not live-fetch)

## Self-review

1. Spec coverage: G04/G05/G09/G10 each have a task. Index pin, winner policy, needs, no actuate, no Zyra seed — covered.
2. No placeholders in the interfaces above.
3. Names: `createServer`, `get_index_status`, `search_knowledge`, `get_resource`, `list_contradictions`, `investigate`, `IndexStatus`, `EvidencePackage` match `mcp/SCHEMA.md`.
