# BSV Knowledge MCP — Phase B Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Tier 0 code intelligence so `investigate` can cite a confirmed symbol and the current packages for BEEF, and so golden **G02** passes without inventing APIs.

**Architecture:** Query path stays snapshot-only. A refresh job pins eight Tier 0 GitHub trees by SHA, extracts cards (ts-stack `specs/`, exported symbol table, selected conformance vectors), and commits those cards under `reference/tier0/`. The server ingests the cards into the existing SQLite FTS store as `kind: symbol | test | doc`. Tools read the store / card files. No live GitHub, DeepWiki, or `bsv.brc.dev` on the query path. No Zyra fork; steal the SHA-tarball and `specs/` ideas only.

**Tech Stack:** Existing server (Node ≥22.13, TypeScript 5.6, `@modelcontextprotocol/sdk`, zod, Vitest, `node:sqlite`). Refresh uses `fetch` + Windows `tar.exe`. Export scan is a conservative public-entry walk (not ts-morph, not a native tree-sitter binding). SCIP / `web-tree-sitter` may replace the scanner later without changing the card schema.

## Global Constraints

- UK English in every generated string. Currency £; distances in miles if copy needs them.
- Contract law: `mcp/SCHEMA.md`, `mcp/evidence-package.schema.json`, `mcp/winner-policy.md`, `mcp/investigation-loop.md`, `mcp/capability-graph.md`, `mcp/refresh-policy.md`, `mcp/repo-tiers.json`.
- Serve snapshots only. Refresh is an explicit job (`CSW_ALLOW_REFRESH=1`), never a query hop.
- Do not copy `from-zyra-bsv-app-studio/packages/bsv-knowledge` or its fixtures. Write our own `server/test/fixtures/mini-tier0/`.
- Do not invent BRC numbers, package APIs, or symbol names. `api: []` until the extractor sees the export on a pinned checkout.
- Do not implement `brc_ask`, `build_context`, `check_dependency`, `network_guard`, or actuate.
- Do not hot-index all 149 repos. Tier 0 only. Never hot-index `bitcoin-sv/*`.
- Do not recommend SVNode as the application broadcaster. Do not teach `SEEN_MULTIPLE_NODES`.
- Cards-first: if Go or Arcade trees are late, serve package names and spec cards; leave `api` empty rather than guessing.
- DeepWiki may canary (`Beef` is mentioned for ts-sdk) but must never be written into `symbols.json`.
- Tests may use tiny fixtures. Production cards must come from refresh, not hand-typed SDK APIs.
- Stay on `feature/mcp-phase-a`. Commit after each task. Do not push.
- Run tests from `server/`: `npx vitest run` and `npx tsc -p tsconfig.json --noEmit`.

## File structure

```
mcp/SCHEMA.md                         # add Phase B resource URIs
mcp/golden-eval.json                  # add phase_b: ["G02"]
reference/tier0/manifest.json         # pinned SHAs + package names
reference/tier0/packages.json         # confirmed package list for IndexStatus
reference/tier0/symbols.json          # exported symbols only
reference/tier0/specs/                # snapshotted ts-stack specs/
reference/tier0/vectors/              # selected universal-test-vectors
server/src/config.ts                  # tier0Root
server/src/types.ts                   # SymbolRecord + tool result types
server/src/ingest/indexManifest.ts    # hash tier0 cards
server/src/ingest/tier0Ingest.ts      # ingest cards into documents/FTS
server/src/ingest/refreshTier0.ts     # SHA tarball + extract + 80% guard
server/src/ingest/exportScan.ts       # public exports from a checkout
server/src/ingest/capabilityGraph.ts  # fill packages; api only from symbols
server/src/tools/codeTools.ts         # new MCP tools
server/src/tools/knowledgeTools.ts    # get_resource for new URIs
server/src/compose/investigate.ts     # retrieve symbols on how-questions
server/src/server.ts                  # register code tools
server/test/fixtures/mini-tier0/
server/test/codeTools.test.ts
server/test/tier0Ingest.test.ts
server/test/golden-phase-b.test.ts
```

## Interfaces (locked)

```ts
// server/src/types.ts — add

export type SchemaFormat = "openapi3.1" | "asyncapi3.0" | "jsonschema" | "markdown" | "unknown";

// Shipped shape (server/src/types.ts). As-implemented differences from the first draft:
// InspectSchemaResult has no revision/hit; error codes use status/message (the sources
// table gives status as text, not a numeric httpStatus); ErrorTaxonomyResult carries
// sources (not a single revision); SymbolRecord.kind widened to SymbolKind | string and
// id/revision are optional.
export type InspectSchemaResult = {
  found: boolean;
  service: string;
  format?: SchemaFormat;
  path?: string;
  text?: string;          // bounded to 20_000 chars
  truncated?: boolean;
};

export type ErrorTaxonomyCode = {
  code: string;
  status?: string;
  message?: string;
};

export type ErrorTaxonomyResult = {
  codes: ErrorTaxonomyCode[];
  sources: string[];
};

export type SymbolKind = "class" | "function" | "const" | "type" | "interface" | "enum" | "method";

export type SymbolRecord = {
  name: string;
  repo: string;           // bsv-blockchain/ts-sdk
  package: string;        // @bsv/sdk
  language: Language;
  kind: SymbolKind | string;
  locator: string;        // repo-relative file:line
  exported: true;
  hit: TypedHit;
  id?: string;            // symbol:ts-sdk:Beef
  revision?: string;
  signature?: string;
};

// get_symbol returns a discriminated union so callers never read .name off a miss.
export type GetSymbolResult = ({ found: true } & SymbolRecord) | { found: false };

export type ConformanceVectorResult = {
  found: boolean;
  domain: string;
  case: string;
  revision?: string;
  body?: unknown;
  hit?: TypedHit;
};

export type PackageForConceptResult = {
  concept: string;
  packages: string[];
  brcs: string[];
  hits: TypedHit[];
};
```

Card files:

```json
// reference/tier0/manifest.json
{
  "generated": "2026-08-14",
  "policy": "Query path reads committed cards only. Refresh fetches the GitHub tarball at the pinned SHA when CSW_ALLOW_REFRESH=1.",
  "repos": [
    {
      "repo": "bsv-blockchain/ts-sdk",
      "sha": null,
      "package": "@bsv/sdk",
      "language": "ts",
      "role": "sdk"
    },
    {
      "repo": "bsv-blockchain/go-sdk",
      "sha": null,
      "package": "go-sdk",
      "language": "go",
      "role": "sdk"
    },
    {
      "repo": "bsv-blockchain/ts-stack",
      "sha": null,
      "package": null,
      "language": "ts",
      "role": "specs"
    },
    {
      "repo": "bsv-blockchain/ts-templates",
      "sha": null,
      "package": null,
      "language": "ts",
      "role": "templates"
    },
    {
      "repo": "bsv-blockchain/wallet-toolbox",
      "sha": null,
      "package": "@bsv/wallet-toolbox",
      "language": "ts",
      "role": "wallet"
    },
    {
      "repo": "bsv-blockchain/go-wallet-toolbox",
      "sha": null,
      "package": "go-wallet-toolbox",
      "language": "go",
      "role": "wallet"
    },
    {
      "repo": "bsv-blockchain/BRCs",
      "sha": null,
      "package": null,
      "language": "spec",
      "role": "standards"
    },
    {
      "repo": "bsv-blockchain/universal-test-vectors",
      "sha": null,
      "package": null,
      "language": "spec",
      "role": "vectors"
    }
  ]
}
```

`package` values that are not yet read from a checkout `package.json` / `go.mod` must stay `null` in the committed production manifest until refresh confirms them. The fixture may set them because the fixture files exist. Successor-map notes may *hint* `@bsv/sdk` for tests after confirmation only.

**Package label rule (applies to refresh and the fixture alike):** a TypeScript package label is its `package.json` `name` verbatim (`@bsv/sdk`). A Go package label is the **last path segment** of the `go.mod` `module` line, not the full module path — `module github.com/bsv-blockchain/go-sdk` labels as `go-sdk`. This keeps the Task 1 fixture (`packages.json` lists `"go-sdk"`) and the Task 2 refresh output in agreement, and matches the names G02 expects (`@bsv/sdk`, `go-sdk`).

**Role gate (resolves the review finding):** only repos whose manifest `role` is `sdk` or `wallet` may contribute a package label. Repos with `role` `specs` / `templates` / `standards` / `vectors` are *not* packages — do not read their `package.json`/`go.mod` for a label and leave their manifest `package` as `null`. This is what keeps `packages.json` to exactly the dependency set (`@bsv/sdk`, `go-sdk`, `@bsv/wallet-toolbox`, `go-wallet-toolbox`) and stops `ts-templates`, `ts-stack`, `BRCs`, and `universal-test-vectors` from being labelled.

```json
// reference/tier0/packages.json
{ "revision": "", "packages": [] }

// reference/tier0/symbols.json
{ "revision": "", "symbols": [] }
```

---

### Task 1: Tier 0 card ingest and pin

**Files:**
- Create: `reference/tier0/manifest.json`, `reference/tier0/packages.json`, `reference/tier0/symbols.json`, `reference/tier0/specs/.gitkeep`, `reference/tier0/vectors/.gitkeep`
- Create: `server/src/ingest/tier0Ingest.ts`
- Create: `server/test/fixtures/mini-tier0/` (own fixture, not Zyra)
- Create: `server/test/tier0Ingest.test.ts`
- Modify: `mcp/SCHEMA.md` (resource table), `server/src/config.ts`, `server/src/ingest/indexManifest.ts`, `server/src/ingest/snapshotIngest.ts`, `server/src/tools/statusTools.ts`, `server/src/tools/knowledgeTools.ts`, `server/src/store/knowledgeStore.ts`
- Test: `server/test/tier0Ingest.test.ts`, existing `server/test/statusTools.test.ts` must still pass

**Interfaces:**
- Consumes: `config.tier0Root` (default `join(root, "reference/tier0")`)
- Produces: `ingestTier0Cards(tier0Root, store, pin) → { packages: number; symbols: number }`; `IndexStatus.counts.packages` from ingested package rows; `get_resource("repo://tier0")` serves the manifest
- Store gains `countByIdPrefix(prefix: string): number` (add to `KnowledgeStore` in `server/src/store/knowledgeStore.ts`). `counts.packages` is **defined as** `store.countByIdPrefix("package:")`. Do not use `countByKind("doc")` (it would count deny-list/registry docs too) and do not read `packages.json` length (that bypasses the store and drifts from what is actually served).

- [ ] **Step 1: Write the failing test**

```ts
// server/test/tier0Ingest.test.ts
import { mkdtempSync, cpSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { defaultConfig } from "../src/config.js";
import { ingestSnapshots } from "../src/ingest/snapshotIngest.js";
import { openDatabase } from "../src/store/db.js";
import { createKnowledgeStore } from "../src/store/knowledgeStore.js";
import { buildIndexStatus } from "../src/tools/statusTools.js";
import { getResource } from "../src/tools/knowledgeTools.js";

const ROOT = resolve(import.meta.dirname, "../..");
const FIXTURE = resolve(import.meta.dirname, "fixtures/mini-tier0");
const temps: string[] = [];

afterEach(() => {
  // do not reset databases; only close stores in each test
});

describe("tier0 ingest", () => {
  it("counts confirmed packages on the index pin and serves repo://tier0", () => {
    const store = createKnowledgeStore(openDatabase(":memory:"));
    const config = { ...defaultConfig(ROOT), tier0Root: FIXTURE };
    ingestSnapshots(config.root, store, { tier0Root: FIXTURE });
    const status = buildIndexStatus(config.root, store);
    expect(status.counts.packages).toBe(2);
    expect(status.status).toMatch(/ready|stale/);
    const manifest = getResource(config.root, store, "repo://tier0");
    expect(manifest.text).toContain("bsv-blockchain/ts-sdk");
    expect(store.countByKind("symbol")).toBeGreaterThanOrEqual(1);
    store.close();
  });
});
```

Fixture layout (write real tiny files, not empty stubs):

```
server/test/fixtures/mini-tier0/
  manifest.json          # sha: "fixture", packages set because files exist
  packages.json          # ["@bsv/sdk", "go-sdk"]
  symbols.json           # one exported class Beef from the fixture ts-sdk file
  specs/errors.md        # one ERR_WIDGET row
  specs/wallet.openapi.yaml
  vectors/beef/valid-minimal.json
  checkouts/ts-sdk/src/transaction/Beef.ts   # export class Beef
  checkouts/ts-sdk/src/index.ts              # export { Beef } from "./transaction/Beef.ts"
  checkouts/ts-sdk/package.json              # { "name": "@bsv/sdk" }
  checkouts/go-sdk/beef.go                   # package beef; type Beef struct{}
  checkouts/go-sdk/go.mod                    # module github.com/bsv-blockchain/go-sdk
```

`specs/errors.md` fixture row:

```md
| ERR_WIDGET | 400 | Widget rejected by the fixture taxonomy. |
```

`symbols.json` fixture row must match the fixture source (do not invent a production API):

```json
{
  "revision": "fixture",
  "symbols": [
    {
      "name": "Beef",
      "repo": "bsv-blockchain/ts-sdk",
      "package": "@bsv/sdk",
      "language": "ts",
      "kind": "class",
      "locator": "src/transaction/Beef.ts:1",
      "exported": true
    }
  ]
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run test/tier0Ingest.test.ts`  
Working directory: `server/`  
Expected: FAIL (`tier0Root` / `ingestTier0Cards` / `repo://tier0` missing)

- [ ] **Step 3: Write minimal implementation**

1. Add to `mcp/SCHEMA.md` resources:

| URI | Source |
|---|---|
| `repo://tier0` | `reference/tier0/manifest.json` |
| `spec://ts-stack/{service}` | `reference/tier0/specs/` |
| `symbol://{repo}/{name}` | `reference/tier0/symbols.json` row — `{repo}` is the **short** name (e.g. `ts-sdk`, not `bsv-blockchain/ts-sdk`); `{name}` is the exact exported identifier |
| `vector://{domain}/{case}` | `reference/tier0/vectors/` |

2. `ServerConfig.tier0Root` defaults to `join(root, "reference/tier0")`.
3. `SNAPSHOT_RELATIVE_PATHS` also hashes `reference/tier0/manifest.json`, `reference/tier0/packages.json`, `reference/tier0/symbols.json`. Missing files hash as `MISSING` (existing behaviour).
4. `ingestTier0Cards` inserts:
   - one `kind: doc` row per confirmed package (`id: package:@bsv/sdk`, authority 2)
   - one `kind: symbol` row per symbols.json entry (`id: symbol:ts-sdk:Beef`, authority 2, language from the row)
   - one `kind: doc` row per file in `specs/` (authority 3)
   - one `kind: test` row per file in `vectors/` (authority 0)
5. `ingestSnapshots` calls `ingestTier0Cards` when the directory exists. Production `reference/tier0/packages.json` starts as `{ "revision": "", "packages": [] }` so the real pin stays `ready` with `counts.packages === 0` until Task 2 refresh.
6. `get_resource("repo://tier0")` returns the manifest. `spec://`, `symbol://`, `vector://` may 404 with the existing missing-resource hit until Tasks 3–5.
7. `buildIndexStatus` sets `counts.packages = store.countByIdPrefix("package:")`. Add that method to `KnowledgeStore` (`SELECT COUNT(*) AS n FROM documents WHERE id LIKE ? || '%'` with parameter `package:`), wire it in `statusTools.ts` replacing the hard-coded `packages: 0`.

Do not fetch GitHub. Do not copy Zyra.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run test/tier0Ingest.test.ts test/statusTools.test.ts`  
Expected: PASS

- [ ] **Step 5: Typecheck**

Run: `npx tsc -p tsconfig.json --noEmit`  
Expected: exit 0

- [ ] **Step 6: Commit**

```powershell
git add mcp/SCHEMA.md reference/tier0 server/src server/test/tier0Ingest.test.ts server/test/fixtures/mini-tier0
git commit -m "Ingest pinned Tier 0 cards so the index can report real package counts without a live checkout."
```

---

### Task 2: SHA-pinned refresh job

**Files:**
- Create: `server/src/ingest/refreshTier0.ts`
- Modify: `server/src/ingest/exportScan.ts` may wait until Task 5 — this task only fetches, extracts, copies `specs/` and `package.json`/`go.mod` names, writes `packages.json`, pins SHAs
- Test: `server/test/tier0Ingest.test.ts` (refresh section)

**Interfaces:**
- Consumes: `CSW_ALLOW_REFRESH=1`; injectable `fetch` (do not call the real network in tests)
- Produces: `refreshTier0({ root, tier0Root, repos, fetch, allowRefresh }) → { repos: number; packages: string[] }`
- `repos` is the manifest's `repos` array (already typed in the Interfaces block above); the refresh reads each row's `repo` / `sha` / `package`.
- Integrity: if previous `packages.json` had ≥ 2 packages and the new list is below 80% of that count, throw and do not write. Refresh is **all-or-nothing across both cards**: validate/read the existing `manifest.json` *before* any write, write `packages.json` and `manifest.json` from the same full `repos` run, and do not merge partial results into either file (drop any one-off merge helper). A corrupt `manifest.json` or `packages.json` must throw, not silently degrade.

**Fixture tarball (build once, commit it):**

The refresh fetches a codeload tarball. To test offline on Windows without native tar bindings, commit a tiny prebuilt archive and have the fake `fetch` return its bytes:

```powershell
# one-time, from repo root — creates the fixture you commit
$src = "server/test/fixtures/mini-tier0/checkouts/ts-sdk"
tar.exe -czf server/test/fixtures/mini-tier0/tarballs/ts-sdk-abc1234.tar.gz -C $src .
```

`server/test/fixtures/mini-tier0/tarballs/empty.tar.gz` is the same command run against an empty temp directory. Commit both under `server/test/fixtures/mini-tier0/tarballs/`.

- [ ] **Step 1: Write the failing test**

```ts
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { refreshTier0 } from "../src/ingest/refreshTier0.js";

const ROOT = resolve(import.meta.dirname, "../..");
const TARBALLS = resolve(import.meta.dirname, "fixtures/mini-tier0/tarballs");

const SDK_REPO = {
  repo: "bsv-blockchain/ts-sdk",
  sha: "abc1234",
  package: null,
  language: "ts",
  role: "sdk",
} as const;

function freshTier0(): string {
  return mkdtempSync(join(tmpdir(), "csw-tier0-"));
}

const rejectingFetch = (async () => {
  throw new Error("network must not be called");
}) as typeof fetch;

describe("refreshTier0", () => {
  it("refuses to run when allowRefresh is false", async () => {
    await expect(
      refreshTier0({
        root: ROOT,
        tier0Root: freshTier0(),
        repos: [SDK_REPO],
        allowRefresh: false,
        fetch: rejectingFetch,
      }),
    ).rejects.toThrow(/CSW_ALLOW_REFRESH/);
  });

  it("writes packages.json from the committed fixture tarball", async () => {
    const tier0Root = freshTier0();
    const tarball = readFileSync(join(TARBALLS, "ts-sdk-abc1234.tar.gz"));
    const fetch = (async (url: string | URL) => {
      expect(String(url)).toMatch(
        /codeload\.github\.com\/bsv-blockchain\/ts-sdk\/tar\.gz\/abc1234/,
      );
      return new Response(new Uint8Array(tarball));
    }) as typeof fetch;

    const result = await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [SDK_REPO],
      allowRefresh: true,
      fetch,
    });

    expect(result.packages).toContain("@bsv/sdk");
    const written = JSON.parse(
      readFileSync(join(tier0Root, "packages.json"), "utf8"),
    ) as { packages: string[] };
    expect(written.packages).toContain("@bsv/sdk");
  });

  it("refuses to write when the new package count drops below 80% of the previous count", async () => {
    const tier0Root = freshTier0();
    mkdirSync(tier0Root, { recursive: true });
    writeFileSync(
      join(tier0Root, "packages.json"),
      JSON.stringify({
        revision: "old",
        packages: ["@bsv/sdk", "go-sdk", "a", "b", "c"],
      }),
    );
    // 5 previous -> need >= 4; the empty tarball yields 0 -> below 80% -> throw.
    const emptyTar = readFileSync(join(TARBALLS, "empty.tar.gz"));
    const fetch = (async () => new Response(new Uint8Array(emptyTar))) as typeof fetch;

    await expect(
      refreshTier0({
        root: ROOT,
        tier0Root,
        repos: [SDK_REPO],
        allowRefresh: true,
        fetch,
      }),
    ).rejects.toThrow(/80%/);
  });
});
```

- [ ] **Step 2: Run — fails. Implement refresh. Green.**

Rules:
- URL form: `https://codeload.github.com/{repo}/tar.gz/{sha}`
- If `sha` is `null` and refresh is allowed, resolve once via `https://api.github.com/repos/{repo}/commits/HEAD` and then pin that SHA in `manifest.json`. Tests pass an explicit sha and must not hit that API.
- Extract under `server/data/checkouts/{repo}/{sha}/` (already gitignored). Query tools must not read this directory; they read cards.
- Copy ts-stack `specs/**` into `reference/tier0/specs/` when that repo is refreshed.
- Read `package.json` `name` or `go.mod` `module` last path segment, **only for repos whose `role` is `sdk` or `wallet`**. Repos with any other `role` contribute no label and keep `package: null` in the manifest. `@bsv/sdk` comes from ts-sdk `package.json`, not from the successor-map note.
- Do not write `symbols.json` in this task (Task 5).
- No query-path import of `refreshTier0`.
- Build one extra fixture tarball in the **nested codeload layout** (`tar -czf … ts-sdk-abc1234/` — a top-level `{reponame}-{sha}` directory wrapping the tree) so the `checkoutRoot` descend branch is exercised; the flat fixtures cover the fallback.

- [ ] **Step 3: Typecheck + existing suite still green**

Run: `npx vitest run && npx tsc -p tsconfig.json --noEmit`  
Expected: exit 0

- [ ] **Step 4: Commit**

```powershell
git commit -m "Add a SHA-pinned Tier 0 refresh so package cards are extracted offline, not on the query path."
```

---

### Task 3: `inspect_schema` and `error_taxonomy`

**Files:**
- Create: `server/src/tools/codeTools.ts`
- Modify: `server/src/server.ts`, `server/src/types.ts`, `server/src/tools/knowledgeTools.ts` (`spec://ts-stack/{service}`)
- Test: `server/test/codeTools.test.ts`

**Interfaces:**
- `inspectSchema(tier0Root, service) → InspectSchemaResult`
- `errorTaxonomy(tier0Root, prefix?) → ErrorTaxonomyResult`
- Tools: `inspect_schema({ service })`, `error_taxonomy({ prefix? })`

- [ ] **Step 1: Write the failing tests**

```ts
// server/test/codeTools.test.ts — MCP in-memory client, config.tier0Root = mini-tier0

it("inspect_schema returns the fixture wallet contract bounded to 20000 chars", async () => {
  const res = await callToolJson(client, "inspect_schema", { service: "wallet" });
  expect(res.found).toBe(true);
  expect(res.format).toMatch(/openapi|jsonschema|asyncapi|markdown/);
  expect(String(res.text).length).toBeGreaterThan(0);
  expect(String(res.text).length).toBeLessThanOrEqual(20_000);
  expect(res.path).toMatch(/wallet/i);
});

it("inspect_schema is insufficient when the service is absent", async () => {
  const res = await callToolJson(client, "inspect_schema", { service: "no-such-service-xyz" });
  expect(res.found).toBe(false);
});

it("error_taxonomy returns ERR_WIDGET and filters by prefix", async () => {
  const all = await callToolJson(client, "error_taxonomy", {});
  expect(all.codes.some((row: { code: string }) => row.code === "ERR_WIDGET")).toBe(true);
  const none = await callToolJson(client, "error_taxonomy", { prefix: "ERR_MISSING" });
  expect(none.codes).toEqual([]);
});
```

- [ ] **Step 2: Run — fails. Implement. Green.**

Match `service` as a case-insensitive substring of filenames under `tier0Root/specs/`. Detect format from content (`openapi:`, `asyncapi:`, `"$schema"`) or suffix. Parse `errors.md` tables / backtick codes matching `^ERR_[A-Z0-9_]+$`. Do not import Zyra `specsIngest.ts`.

`get_resource("spec://ts-stack/wallet")` returns the same file text.

- [ ] **Step 3: Typecheck**

Run: `npx vitest run test/codeTools.test.ts && npx tsc -p tsconfig.json --noEmit`  
Expected: exit 0

- [ ] **Step 4: Commit**

```powershell
git commit -m "Add inspect_schema and error_taxonomy so agents read pinned ts-stack contracts instead of guessing error codes."
```

---

### Task 4: `get_conformance_vector`

**Files:**
- Modify: `server/src/tools/codeTools.ts`, `server/src/tools/knowledgeTools.ts`
- Test: `server/test/codeTools.test.ts`

**Interfaces:**
- `getConformanceVector(tier0Root, domain, caseName) → ConformanceVectorResult`
- Tool: `get_conformance_vector({ domain, case })`

- [ ] **Step 1: Failing test**

```ts
it("returns the fixture BEEF vector and misses unknown cases", async () => {
  const found = await callToolJson(client, "get_conformance_vector", {
    domain: "beef",
    case: "valid-minimal",
  });
  expect(found.found).toBe(true);
  expect(found.hit.kind).toBe("test");
  expect(found.hit.authority).toBe(0);
  const missing = await callToolJson(client, "get_conformance_vector", {
    domain: "beef",
    case: "does-not-exist",
  });
  expect(missing.found).toBe(false);
});
```

- [ ] **Step 2: Implement. Resolve `vectors/{domain}/{case}.json` only. Reject `..` and absolute paths. Green.**

`get_resource("vector://beef/valid-minimal")` serves the same body.

- [ ] **Step 3: Commit**

```powershell
git commit -m "Add get_conformance_vector so BEEF answers can cite authority-0 fixtures instead of prose."
```

---

### Task 5: Export scan, `get_symbol`, `find_references`

**Files:**
- Create: `server/src/ingest/exportScan.ts`
- Modify: `server/src/ingest/refreshTier0.ts` (write `symbols.json` after extract), `server/src/tools/codeTools.ts`, `server/src/types.ts`
- Test: `server/test/codeTools.test.ts`, `server/test/tier0Ingest.test.ts`

**Interfaces:**
- `scanExports(checkoutDir, repo, language) → Array<Omit<SymbolRecord, "hit">>`
- `getSymbol(store, repo, name) → SymbolRecord | { found: false }`
- `findReferences(store, repo, symbol) → TypedHit[]`
- Tools: `get_symbol({ repo, name })`, `find_references({ repo, symbol })`

- [ ] **Step 1: Failing tests**

```ts
it("scanExports only records names re-exported from the public entry", () => {
  const checkout = resolve(FIXTURE, "checkouts/ts-sdk");
  const rows = scanExports(checkout, "bsv-blockchain/ts-sdk", "ts");
  expect(rows.some((row) => row.name === "Beef" && row.exported === true)).toBe(true);
  expect(rows.every((row) => row.exported === true)).toBe(true);
  expect(rows.some((row) => row.name === "PeerPayClient")).toBe(false);
});

it("get_symbol returns the ingested Beef row for ts-sdk", async () => {
  const res = await callToolJson(client, "get_symbol", {
    repo: "bsv-blockchain/ts-sdk",
    name: "Beef",
  });
  expect(res.found).toBe(true);
  expect(res.name).toBe("Beef");
  expect(res.package).toBe("@bsv/sdk");
  expect(res.hit.kind).toBe("symbol");
  expect(res.hit.authority).toBe(2);
});

it("get_symbol is insufficient for an unknown name", async () => {
  const res = await callToolJson(client, "get_symbol", {
    repo: "bsv-blockchain/ts-sdk",
    name: "PeerPayClient",
  });
  expect(res.found).toBe(false);
});
```

- [ ] **Step 2: Implement the scanner. Green.**

TypeScript algorithm (Windows-safe, no native addon):
1. Read `package.json`. If `exports` or `main` points at a file, start there; else `src/index.ts` / `src/index.js`.
   **Source-layout fallback (Task 6 blocker):** a source checkout (e.g. ts-sdk) points `exports`/`main` at build output under `dist/` that is NOT shipped in the codeload tarball, while the real public entry is source — ts-sdk's is `src/mod.ts` (its `exports` types map `./dist/types/mod.d.ts` ↔ source `src/mod.ts`). When the `exports`/`main` target resolves to nothing on disk (commonly a `dist/` path that was skipped or absent), ALSO try the source-layout candidates `src/mod.ts`, `src/mod.js`, `src/index.ts`, `src/index.js`, and the dist→source stem mapping (strip a leading `dist/{cjs,esm,types,umd}/` and swap the extension to `.ts`/`.js`). Never skip the repo silently while such a source entry exists — otherwise ts-sdk yields 0 symbols and BRC-62 cannot confirm `@bsv/sdk`. Still do not *enter* `dist/`/`node_modules`/`test` when following re-exports.
2. Collect `export { Name } from` and `export class|function|const|type|interface|enum Name`.
3. Follow relative `export * from` / `export { } from` at most 8 hops. Do not enter `node_modules`, `dist`, or `test`.
4. Record `exported: true` only.

Go algorithm:
1. Skip `internal/` and `_test.go`.
2. Record `type Name` and `func Name` / methods where `Name` starts with an uppercase letter.

Refresh writes `symbols.json` from the scan. Query path only reads the card / SQLite rows.

`find_references` is FTS for the symbol name among `kind in (symbol, test, doc)` with the same repo prefix in `locator` or `id`. No SCIP graph in this phase.

`get_resource("symbol://ts-sdk/Beef")` returns the symbol card as JSON.

- [ ] **Step 3: Typecheck + full suite**

Run: `npx vitest run && npx tsc -p tsconfig.json --noEmit`  
Expected: exit 0

- [ ] **Step 4: Commit**

```powershell
git commit -m "Index exported Tier 0 symbols from public entry files so get_symbol cannot invent identifiers."
```

---

### Task 6: Capability packages and `get_package_for_concept`

**Files:**
- Modify: `server/src/ingest/capabilityGraph.ts` (`api: string[]` not `api: []`), `reference/capability_graph.json` (regenerate), `server/test/capabilityGraph.test.ts`, `server/src/tools/codeTools.ts`
- Test: `server/test/capabilityGraph.test.ts`, `server/test/codeTools.test.ts`

**Interfaces:**
- `buildCapabilityGraph(root)` fills `packages` from `reference/tier0/packages.json` when a BRC title / grouping key matches a confirmed symbol or package card (BEEF → packages that exported a name matching `/beef/i`). Match a BRC grouping token `t` to a package P when P is confirmed AND `symbols.json` holds an exported row with `package === P` whose `name` lowercased **contains** `t` (`beef` matches `Beef`, `NewBeef`, `MergeBeefTx`, …).
  **Precision floor (Task 6 review):** ignore grouping tokens shorter than 3 characters for the *packages* contains-match, and word-bound the match (token must appear at a name boundary — start of the name or a camelCase/underscore boundary — not embedded inside another word). Without this, BRC-30's `(EF)` → token `ef` would contains-match `Beef` and attach all four packages to an unrelated BRC; only `go-sdk` actually exports an `EF` symbol. With word-boundaries, `beef` still matches `Beef`/`NewBeef` (boundary before `Beef`) but `ef` does not match `Beef`.
- `get_package_for_concept` must apply the same word-boundary token match: a concept matches a BRC only when the concept (lowercased) contains the token at a word boundary, not merely as a substring — so concept `BEEF` must not select BRC-30 via token `ef`.
- `api` stays `[]` unless `symbols.json` contains an exported name whose lowercase form is a title token of that BRC (`beef` → `Beef`)
- `get_package_for_concept(concept) → PackageForConceptResult`

- [ ] **Step 1: Rewrite the failing graph test first**

Replace `expect(beef?.packages).toEqual([])` with:

```ts
it("fills BRC-62 packages from confirmed cards and still forbids invented APIs", () => {
  const { text, rows } = loadRows();
  expect(text).not.toContain("PeerPayClient");
  expect(text).not.toContain("createPayment");
  expect(text).not.toContain("serialiseEnvelope");
  const beef = rows.find((row) => row.brc === "BRC-62");
  expect(beef?.packages).toEqual(expect.arrayContaining(["@bsv/sdk", "go-sdk"]));
  const api = Array.isArray(beef?.api) ? beef.api : [];
  for (const name of api) {
    expect(typeof name).toBe("string");
    expect(name).not.toMatch(/PeerPay|createPayment|serialiseEnvelope/);
  }
});

it("never lists an api name that is absent from symbols.json", () => {
  const symbols = JSON.parse(readFileSync(resolve(ROOT, "reference/tier0/symbols.json"), "utf8"));
  const confirmed = new Set((symbols.symbols ?? []).map((row: { name: string }) => row.name));
  const { rows } = loadRows();
  for (const row of rows) {
    for (const name of Array.isArray(row.api) ? row.api : []) {
      expect(confirmed.has(name), `${row.brc} api ${name}`).toBe(true);
    }
  }
});
```

Until a real refresh has written production `symbols.json` / `packages.json`, this test will fail — that is the point. If production cards are still empty when you reach this task, **run refresh once on the machine** (`CSW_ALLOW_REFRESH=1`) and commit the generated `reference/tier0/` cards. Do not hand-type `Beef` into the production file. If refresh cannot run, stop and say so; do not invent the row.

`get_package_for_concept` test (may use the real graph after regenerate, or the fixture graph):

```ts
it("maps BEEF to BRC-62 and confirmed packages", async () => {
  const res = await callToolJson(client, "get_package_for_concept", { concept: "BEEF" });
  expect(res.brcs).toEqual(expect.arrayContaining(["BRC-62"]));
  expect(res.packages).toEqual(expect.arrayContaining(["@bsv/sdk", "go-sdk"]));
  expect(res.hits.some((hit: { kind: string }) => hit.kind === "brc")).toBe(true);
});
```

- [ ] **Step 2: Implement. Regenerate `reference/capability_graph.json`. Green.**

Update `CapabilityRecord.api` to `string[]`. Keep the Zyra-seed ban. Writings still do not invent packages.

- [ ] **Step 3: Commit**

```powershell
git commit -m "Fill capability-graph packages from confirmed Tier 0 cards so BEEF resolves to @bsv/sdk and go-sdk."
```

---

### Task 7: Wire `investigate` and pass G02

**Files:**
- Modify: `server/src/compose/investigate.ts`, `mcp/golden-eval.json` (`phase_b: ["G02"]`), `server/test/golden-phase-a.test.ts` (keep Phase A only)
- Create: `server/test/golden-phase-b.test.ts`
- Test: `server/test/golden-phase-b.test.ts`, `server/test/investigateTools.test.ts`

**Interfaces:**
- `investigate` on `implementation` / `mixed` / BEEF-like spec questions also retrieves `kind: symbol` (authority ≤ 2) and capability packages
- Golden runner asserts `must_include_kinds` from **hits only** (already true after the honesty commit)
- Golden runner asserts `expect.packages` by scanning symbol / capability / package hit ids, titles, locators, and excerpts — not a new EvidencePackage field
- Golden runner asserts `pkg.classified_as === row.class` for every case (added in the honesty pass; keep it on the Phase B runner). G02's `class` must match what `classifyQuestion` actually returns for "What is BEEF and which packages implement it?" — if that is not `spec`, correct the label in `mcp/golden-eval.json` rather than gaming the classifier.

- [ ] **Step 1: Write the failing golden**

```ts
// server/test/golden-phase-b.test.ts
const PHASE_B_IDS = ["G02"] as const;
// same InMemoryTransport harness as golden-phase-a.test.ts
// assertInvestigateExpect plus:

function assertPackages(pkg: EvidencePackage, packages: string[]): void {
  const hay = pkg.hits
    .filter((hit) => hit.kind === "symbol" || hit.kind === "capability" || hit.id.startsWith("package:"))
    .map((hit) => [hit.id, hit.title, hit.locator, hit.excerpt].join(" "))
    .join("\n")
    .toLowerCase();
  for (const name of packages) {
    expect(hay.includes(name.toLowerCase()), `package ${name}`).toBe(true);
  }
}
```

Add a focused investigate test:

```ts
it("cites a symbol hit for a BEEF how-question without dropping BRC-62", async () => {
  const pkg = await callToolJson(client, "investigate", {
    question: "What is BEEF and which packages implement it?",
  });
  expect(pkg.hits.some((hit) => hit.id === "brc:62" || /BRC-62/i.test(hit.title))).toBe(true);
  expect(pkg.hits.some((hit) => hit.kind === "symbol")).toBe(true);
  expect(pkg.hits.some((hit) => hit.authority === 1)).toBe(true);
});
```

- [ ] **Step 2: Implement retrieve/compose. Do not teach a canned “BEEF is Beef in @bsv/sdk” sentence. Quote opened hit excerpts. Hop budget still ≤ 4.**

**Lead-selection rule (winner-policy rule 1).** `composeClaims` ranks eligible hits **authority first, then score** (`a.authority - b.authority || scoreHit(b,tokens) - scoreHit(a,tokens)`). With Phase B, symbol hits are authority 2 and BRCs authority 1, so BRC-62 stays the lead claim on G02; symbols appear as supporting `kind: symbol` hits and on the capability graph, never outranking the spec. Do not let a high-scoring `Beef` symbol outrank the BRC as the lead. (This is the same ranking the honesty pass already introduced; Task 7 must preserve it.)

Classification: G02 may land as `spec` or `mixed`. If `spec`, still allow one hop to a matching symbol / package card after the BRC, the same way ordinality hops to `ops://ordinality` — but only when `tokens` include `beef` and a symbol row exists. Do not hop on bare `sat`.

- [ ] **Step 3: Run goldens + full suite + typecheck**

Run: `npx vitest run && npx tsc -p tsconfig.json --noEmit`  
Expected: exit 0. Phase A goldens G04/G05/G09/G10 still pass. G02 passes.

- [ ] **Step 4: Commit**

```powershell
git commit -m "Wire investigate to confirmed Tier 0 symbols so G02 cites BEEF packages without inventing APIs."
```

---

## Out of scope (do not do in Phase B)

- Tier 1 repos (arcade, overlays, merkle-service, x402) — Phase C
- `follow_edge`, `trace_dependency`, `repo_lookup` beyond `repo://tier0` / `repo://registry` / `repo://deny`
- `design_review`, `scaffold_flow`, `concept_map`, `network_guard`, actuate, `check_dependency` — Phase D
- Embeddings
- ts-morph-only indexer, Zyra seed, `brc_ask`, `build_context`
- Hand-writing production `Beef` / `createAction` into `symbols.json`
- Hot-indexing 149 repos or any `bitcoin-sv/*` tree

## Self-review

1. **Spec coverage:** G02 has Task 7. `inspect_schema` / `error_taxonomy` have Task 3. Vectors have Task 4. Symbols have Task 5. Capability packages have Task 6. Refresh policy / SHA pin / 80% guard have Task 2. Snapshot pin / `counts.packages` have Task 1.
2. **Placeholder scan:** no TBD. Task 2's refresh test is fully written against committed `.tar.gz` fixtures (`tarballs/ts-sdk-abc1234.tar.gz`, `tarballs/empty.tar.gz`) with a named `SDK_REPO`, `freshTier0()`, and `rejectingFetch`; the `refreshTier0` interface includes `repos`. Production cards come from refresh, not invented names.
3. **Type consistency:** `InspectSchemaResult`, `ErrorTaxonomyResult`, `SymbolRecord`, `ConformanceVectorResult`, `PackageForConceptResult` are defined once above and reused.
4. **Honesty carry-over:** kinds from hits only; no canned compose; no bare-`sat` ordinality hop.
5. **Capability test conflict:** Task 6 replaces the Phase A `packages: []` assertion; `api` may gain confirmed names only.
