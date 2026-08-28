import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { defaultConfig } from "../src/config.js";
import { createServerWithStore } from "../src/server.js";
import { openDatabase } from "../src/store/db.js";
import { createKnowledgeStore, type KnowledgeStore } from "../src/store/knowledgeStore.js";
import { scanExports } from "../src/ingest/exportScan.js";
import { errorTaxonomy, inspectSchema } from "../src/tools/codeTools.js";
import { getResource, type GetResourceResult } from "../src/tools/knowledgeTools.js";
import type {
  ConformanceVectorResult,
  ErrorTaxonomyResult,
  GetSymbolResult,
  InspectSchemaResult,
  PackageForConceptResult,
  TypedHit,
} from "../src/types.js";

const ROOT = resolve(import.meta.dirname, "../..");
const FIXTURE = resolve(import.meta.dirname, "fixtures/mini-tier0");

async function callToolJson<T>(
  client: Client,
  name: string,
  args: Record<string, unknown>,
): Promise<T> {
  const res = await client.callTool({ name, arguments: args });
  const text = (res.content[0] as { type: "text"; text: string }).text;
  return JSON.parse(text) as T;
}

describe("code tools", () => {
  let store: KnowledgeStore;
  let client: Client;

  beforeAll(async () => {
    const created = createServerWithStore({
      ...defaultConfig(ROOT),
      dbPath: ":memory:",
      tier0Root: FIXTURE,
    });
    store = created.store;
    client = new Client({ name: "test", version: "0.0.1" });
    const [ct, st] = InMemoryTransport.createLinkedPair();
    await Promise.all([created.server.connect(st), client.connect(ct)]);
  }, 30_000);

  afterAll(() => {
    store.close();
  });

  it("inspect_schema returns the fixture wallet contract bounded to 20000 chars", async () => {
    const res = await callToolJson<InspectSchemaResult>(client, "inspect_schema", {
      service: "wallet",
    });
    expect(res.found).toBe(true);
    expect(res.format).toMatch(/openapi|jsonschema|asyncapi|markdown/);
    expect(String(res.text).length).toBeGreaterThan(0);
    expect(String(res.text).length).toBeLessThanOrEqual(20_000);
    expect(res.path).toMatch(/wallet/i);
  });

  it("inspect_schema serves the committed file verbatim and names its format", async () => {
    const res = await callToolJson<InspectSchemaResult>(client, "inspect_schema", {
      service: "WALLET",
    });
    expect(res.service).toBe("WALLET");
    expect(res.format).toBe("openapi3.1");
    expect(res.path).toBe("specs/wallet.openapi.yaml");
    expect(res.truncated).toBe(false);
    expect(res.text).toBe(readFileSync(join(FIXTURE, "specs", "wallet.openapi.yaml"), "utf8"));
  });

  it("inspect_schema is insufficient when the service is absent", async () => {
    const res = await callToolJson<InspectSchemaResult>(client, "inspect_schema", {
      service: "no-such-service-xyz",
    });
    expect(res.found).toBe(false);
    expect(res.text).toBeUndefined();
    expect(res.path).toBeUndefined();
  });

  it("get_package_for_concept maps smart contracts to Rúnar via the curated alias", async () => {
    const res = await callToolJson<PackageForConceptResult>(client, "get_package_for_concept", {
      concept: "smart contract",
    });
    expect(res.packages).toContain("runar");
    expect(res.hits.some((hit) => hit.id === "academy:runar/sdk-overview")).toBe(true);
  });

  it("get_package_for_concept stays empty for an unknown concept", async () => {
    const res = await callToolJson<PackageForConceptResult>(client, "get_package_for_concept", {
      concept: "quantum teleportation",
    });
    expect(res.packages).toEqual([]);
    expect(res.brcs).toEqual([]);
  });

  it("inspect_schema truncates an oversized contract and says so", () => {
    const tier0Root = mkdtempSync(join(tmpdir(), "csw-specs-"));
    mkdirSync(join(tier0Root, "specs"), { recursive: true });
    const body = `openapi: 3.1.0\ninfo:\n  title: Oversized fixture\n${"# padding line\n".repeat(2_000)}`;
    writeFileSync(join(tier0Root, "specs", "oversized.openapi.yaml"), body);

    const res = inspectSchema(tier0Root, "oversized");

    expect(body.length).toBeGreaterThan(20_000);
    expect(res.found).toBe(true);
    expect(res.truncated).toBe(true);
    expect(String(res.text).length).toBeLessThanOrEqual(20_000);
    expect(String(res.text)).toContain("openapi: 3.1.0");
    expect(String(res.text)).toMatch(/truncated/i);
  });

  it("inspect_schema prefers the JSON contract over prose that starts with the service name", () => {
    const tier0Root = mkdtempSync(join(tmpdir(), "csw-specs-"));
    mkdirSync(join(tier0Root, "specs", "sdk"), { recursive: true });
    mkdirSync(join(tier0Root, "specs", "reliability"), { recursive: true });
    writeFileSync(
      join(tier0Root, "specs", "sdk", "brc-100-wallet.json"),
      JSON.stringify({
        $schema: "https://json-schema.org/draft/2020-12/schema",
        title: "BRC-100 Wallet Interface",
      }),
    );
    writeFileSync(
      join(tier0Root, "specs", "reliability", "wallet-toolbox.md"),
      "# Wallet toolbox reliability notes\n",
    );

    const res = inspectSchema(tier0Root, "wallet");

    expect(res.found).toBe(true);
    expect(res.path).toBe("specs/sdk/brc-100-wallet.json");
    expect(res.format).toBe("jsonschema");
  });

  it("error_taxonomy returns ERR_WIDGET and filters by prefix", async () => {
    const all = await callToolJson<ErrorTaxonomyResult>(client, "error_taxonomy", {});
    expect(all.codes.some((row) => row.code === "ERR_WIDGET")).toBe(true);
    const none = await callToolJson<ErrorTaxonomyResult>(client, "error_taxonomy", {
      prefix: "ERR_MISSING",
    });
    expect(none.codes).toEqual([]);
  });

  it("error_taxonomy reads the status and message off the pinned table row", async () => {
    const all = await callToolJson<ErrorTaxonomyResult>(client, "error_taxonomy", {});
    const widget = all.codes.find((row) => row.code === "ERR_WIDGET");
    expect(widget?.status).toBe("400");
    expect(widget?.message).toBe("Widget rejected by the fixture taxonomy.");
    expect(all.sources).toContain("specs/errors.md");
    expect(all.codes.some((row) => row.code === "Code")).toBe(false);

    const matching = await callToolJson<ErrorTaxonomyResult>(client, "error_taxonomy", {
      prefix: "err_w",
    });
    expect(matching.codes.map((row) => row.code)).toEqual(["ERR_WIDGET"]);
  });

  it("error_taxonomy maps the production Code|Description|Interfaces table by header name", () => {
    const res = errorTaxonomy(defaultConfig(ROOT).tier0Root, "ERR_AUTH_CERTIFICATE_REQUIRED");

    const row = res.codes.find((entry) => entry.code === "ERR_AUTH_CERTIFICATE_REQUIRED");
    expect(row).toBeDefined();
    // Description is the human-readable message; Interfaces is its own field — neither lands
    // in the other's slot.
    expect(row?.message).toBe("Operation requires a verified identity certificate.");
    expect(row?.interfaces).toBe("protected endpoints");
    expect(row?.status).toBeUndefined();
  });

  it("error_taxonomy surfaces a code that is not in the first column", () => {
    const tier0Root = mkdtempSync(join(tmpdir(), "csw-errors-"));
    mkdirSync(join(tier0Root, "specs"), { recursive: true });
    writeFileSync(
      join(tier0Root, "specs", "errors.md"),
      [
        "| Summary | Code | HTTP |",
        "|---|---|---|",
        "| Bad widget | `ERR_WIDGET` | 400 |",
        "| Prose row mentioning `ERR_PROSE` inline | - | - |",
        "",
      ].join("\n"),
    );

    const res = errorTaxonomy(tier0Root);

    expect(res.codes.map((row) => row.code)).toEqual(["ERR_PROSE", "ERR_WIDGET"]);
    expect(res.codes.find((row) => row.code === "ERR_WIDGET")?.status).toBe("400");
    expect(res.sources).toEqual(["specs/errors.md"]);
  });

  it("the tools skip a dangling link instead of throwing", (ctx) => {
    const tier0Root = mkdtempSync(join(tmpdir(), "csw-dangling-"));
    const specsDir = join(tier0Root, "specs");
    mkdirSync(specsDir, { recursive: true });
    writeFileSync(join(specsDir, "wallet.openapi.yaml"), "openapi: 3.1.0\ninfo:\n  title: Fixture\n");
    writeFileSync(join(specsDir, "errors.md"), "| `ERR_REAL` | 400 | Real row. |\n");
    try {
      // A file symlink needs privilege on Windows; a junction does not, and both
      // report as a link to lstat and as a missing entry to stat.
      symlinkSync(join(tier0Root, "no-such-target"), join(specsDir, "dangling.yaml"), "junction");
    } catch {
      ctx.skip();
      return;
    }
    expect(() => statSync(join(specsDir, "dangling.yaml"))).toThrow();

    expect(inspectSchema(tier0Root, "wallet").path).toBe("specs/wallet.openapi.yaml");
    expect(inspectSchema(tier0Root, "dangling").found).toBe(false);
    expect(errorTaxonomy(tier0Root).codes.map((row) => row.code)).toEqual(["ERR_REAL"]);
  });

  it("get_resource reads the configured card root, so both planes serve one tree", async () => {
    const spec = await callToolJson<InspectSchemaResult>(client, "inspect_schema", {
      service: "wallet",
    });
    const opened = await callToolJson<GetResourceResult>(client, "get_resource", {
      uri: "spec://ts-stack/wallet",
    });

    expect(opened.text).toBe(readFileSync(join(FIXTURE, "specs", "wallet.openapi.yaml"), "utf8"));
    expect(opened.text).toBe(spec.text);
    expect(opened.hit.title).toContain("wallet.openapi.yaml");
  });

  it("returns the fixture BEEF vector and misses unknown cases", async () => {
    const found = await callToolJson<ConformanceVectorResult>(client, "get_conformance_vector", {
      domain: "beef",
      case: "valid-minimal",
    });
    expect(found.found).toBe(true);
    expect(found.hit.kind).toBe("test");
    expect(found.hit.authority).toBe(0);
    const missing = await callToolJson<ConformanceVectorResult>(client, "get_conformance_vector", {
      domain: "beef",
      case: "does-not-exist",
    });
    expect(missing.found).toBe(false);
  });

  it("get_resource serves the same vector body as get_conformance_vector", async () => {
    const found = await callToolJson<ConformanceVectorResult>(client, "get_conformance_vector", {
      domain: "beef",
      case: "valid-minimal",
    });
    const opened = await callToolJson<GetResourceResult>(client, "get_resource", {
      uri: "vector://beef/valid-minimal",
    });
    const bytes = readFileSync(join(FIXTURE, "vectors", "beef", "valid-minimal.json"), "utf8");

    expect(opened.text).toBe(bytes);
    expect(found.body).toEqual(JSON.parse(bytes));
    expect(opened.hit.kind).toBe("test");
    expect(opened.hit.authority).toBe(0);
  });

  it("rejects path traversal, absolute paths, and NUL in domain and case", async () => {
    const attacks = [
      { domain: "..", case: "packages" },
      { domain: "beef", case: "../../packages" },
      { domain: "beef/../beef", case: "valid-minimal" },
      { domain: "beef", case: "../beef/valid-minimal" },
      { domain: "C:\\Windows", case: "valid-minimal" },
      { domain: "beef", case: "valid-minimal\0evil" },
    ];
    for (const args of attacks) {
      const res = await callToolJson<ConformanceVectorResult>(client, "get_conformance_vector", args);
      expect(res.found, JSON.stringify(args)).toBe(false);
    }

    const escaped = await callToolJson<GetResourceResult>(client, "get_resource", {
      uri: "vector://../packages",
    });
    expect(escaped.hit.title).toBe("Resource not present in snapshot");
  });

  it("scanExports only records names re-exported from the public entry", () => {
    const checkout = resolve(FIXTURE, "checkouts/ts-sdk");
    const rows = scanExports(checkout, "bsv-blockchain/ts-sdk", "ts");
    expect(rows.some((row) => row.name === "Beef" && row.exported === true)).toBe(true);
    expect(rows.every((row) => row.exported === true)).toBe(true);
    expect(rows.some((row) => row.name === "PeerPayClient")).toBe(false);
  });

  it("scanExports records exported Go types and skips names that are not in the source", () => {
    const checkout = resolve(FIXTURE, "checkouts/go-sdk");
    const rows = scanExports(checkout, "bsv-blockchain/go-sdk", "go");
    expect(rows.some((row) => row.name === "Beef" && row.exported === true && row.kind === "type")).toBe(
      true,
    );
    expect(rows.every((row) => row.exported === true)).toBe(true);
    expect(rows.some((row) => row.name === "PeerPayClient")).toBe(false);
  });

  it("scanExports stops after 8 hops, skips forbidden directories, and does not loop", () => {
    const checkout = mkdtempSync(join(tmpdir(), "csw-scan-"));
    mkdirSync(join(checkout, "src"), { recursive: true });
    mkdirSync(join(checkout, "node_modules", "evil"), { recursive: true });
    mkdirSync(join(checkout, "dist"), { recursive: true });
    mkdirSync(join(checkout, "test"), { recursive: true });
    writeFileSync(join(checkout, "package.json"), JSON.stringify({ name: "@bsv/sdk", main: "src/index.ts" }));
    writeFileSync(
      join(checkout, "src", "index.ts"),
      [
        'export * from "./h1.ts";',
        'export * from "../node_modules/evil/index.ts";',
        'export * from "../dist/hidden.ts";',
        'export * from "../test/hidden.ts";',
        'export { Beef } from ".\\\\Beef.ts";',
        "",
      ].join("\n"),
    );
    for (let hop = 1; hop <= 7; hop += 1) {
      writeFileSync(join(checkout, "src", `h${hop}.ts`), `export * from "./h${hop + 1}.ts";\n`);
    }
    writeFileSync(join(checkout, "src", "h8.ts"), 'export * from "./h9.ts";\nexport class AtLimit {}\n');
    writeFileSync(join(checkout, "src", "h9.ts"), "export class TooDeep {}\n");
    writeFileSync(join(checkout, "src", "cycle-a.ts"), 'export * from "./cycle-b.ts";\nexport class Cycle {}\n');
    writeFileSync(join(checkout, "src", "cycle-b.ts"), 'export * from "./cycle-a.ts";\n');
    writeFileSync(join(checkout, "src", "index.ts"), `${readFileSync(join(checkout, "src", "index.ts"), "utf8")}export * from "./cycle-a.ts";\n`);
    writeFileSync(join(checkout, "src", "Beef.ts"), "export class Beef {}\n");
    writeFileSync(join(checkout, "node_modules", "evil", "index.ts"), "export class Hidden {}\n");
    writeFileSync(join(checkout, "dist", "hidden.ts"), "export class DistHidden {}\n");
    writeFileSync(join(checkout, "test", "hidden.ts"), "export class TestHidden {}\n");

    const rows = scanExports(checkout, "bsv-blockchain/ts-sdk", "ts");
    const names = rows.map((row) => row.name);
    expect(names).toContain("Beef");
    expect(names).toContain("AtLimit");
    expect(names).toContain("Cycle");
    expect(names).not.toContain("TooDeep");
    expect(names).not.toContain("Hidden");
    expect(names).not.toContain("DistHidden");
    expect(names).not.toContain("TestHidden");
    expect(rows.every((row) => row.exported === true)).toBe(true);
  });

  it("scanExports falls back to src/mod.ts when exports and main point at absent dist/", () => {
    const checkout = mkdtempSync(join(tmpdir(), "csw-scan-mod-"));
    try {
      mkdirSync(join(checkout, "src"), { recursive: true });
      writeFileSync(
        join(checkout, "package.json"),
        JSON.stringify({
          name: "@bsv/sdk",
          main: "dist/cjs/mod.js",
          exports: {
            ".": {
              types: "./dist/types/mod.d.ts",
              import: "./dist/esm/mod.js",
              require: "./dist/cjs/mod.js",
            },
          },
        }),
      );
      writeFileSync(join(checkout, "src", "mod.ts"), "export class Beef {}\n");

      const rows = scanExports(checkout, "bsv-blockchain/ts-sdk", "ts");
      expect(rows.some((row) => row.name === "Beef" && row.exported === true)).toBe(true);
      expect(rows.every((row) => row.exported === true)).toBe(true);
      expect(rows.some((row) => row.locator.replaceAll("\\", "/").startsWith("src/mod.ts:"))).toBe(
        true,
      );
    } finally {
      rmSync(checkout, { recursive: true, force: true });
    }
  });

  it("scanExports resolves ESM .js specifiers to shipped .ts files (ts-sdk root barrel)", () => {
    const checkout = mkdtempSync(join(tmpdir(), "csw-scan-esm-"));
    try {
      // Mirror ts-sdk: public barrel is mod.ts at the repo ROOT re-exporting "./src/*/index.js",
      // while only .ts sources are shipped (no .js build output).
      mkdirSync(join(checkout, "src", "transaction"), { recursive: true });
      writeFileSync(
        join(checkout, "package.json"),
        JSON.stringify({
          name: "@bsv/sdk",
          main: "dist/cjs/mod.js",
          exports: { ".": { types: "./dist/types/mod.d.ts", import: "./dist/esm/mod.js", require: "./dist/cjs/mod.js" } },
        }),
      );
      writeFileSync(join(checkout, "mod.ts"), 'export * from "./src/transaction/index.js";\n');
      writeFileSync(
        join(checkout, "src", "transaction", "index.ts"),
        'export { Beef } from "./Beef.js";\n',
      );
      writeFileSync(join(checkout, "src", "transaction", "Beef.ts"), "export class Beef {}\n");

      const rows = scanExports(checkout, "bsv-blockchain/ts-sdk", "ts");
      expect(rows.some((row) => row.name === "Beef" && row.exported === true)).toBe(true);
    } finally {
      rmSync(checkout, { recursive: true, force: true });
    }
  });

  it("scanExports scans each publishable package in a pnpm monorepo (private root)", () => {
    const checkout = mkdtempSync(join(tmpdir(), "csw-scan-mono-"));
    try {
      // Mirror icellan/runar: private root package.json with no entry; real packages under packages/*.
      writeFileSync(
        join(checkout, "package.json"),
        JSON.stringify({ name: "runar", private: true, workspaces: ["packages/*"] }),
      );
      mkdirSync(join(checkout, "packages", "runar-lang", "src"), { recursive: true });
      writeFileSync(
        join(checkout, "packages", "runar-lang", "package.json"),
        JSON.stringify({ name: "runar-lang", main: "dist/index.js", types: "dist/index.d.ts" }),
      );
      writeFileSync(
        join(checkout, "packages", "runar-lang", "src", "index.ts"),
        "export class SmartContract {}\nexport function assert(cond: boolean): void {}\n",
      );
      mkdirSync(join(checkout, "packages", "runar-sdk", "src"), { recursive: true });
      writeFileSync(
        join(checkout, "packages", "runar-sdk", "package.json"),
        JSON.stringify({ name: "runar-sdk", main: "dist/index.js", types: "dist/index.d.ts" }),
      );
      writeFileSync(
        join(checkout, "packages", "runar-sdk", "src", "index.ts"),
        "export class RunarContract {}\n",
      );

      const rows = scanExports(checkout, "icellan/runar", "ts");
      const byPackage = new Map(rows.map((row) => [`${row.package}:${row.name}`, row]));
      expect(byPackage.has("runar-lang:SmartContract")).toBe(true);
      expect(byPackage.has("runar-lang:assert")).toBe(true);
      expect(byPackage.has("runar-sdk:RunarContract")).toBe(true);
      expect(rows.every((row) => row.exported === true)).toBe(true);
      expect(rows.every((row) => row.repo === "icellan/runar")).toBe(true);
    } finally {
      rmSync(checkout, { recursive: true, force: true });
    }
  });

  it("scanExports maps a nested dist/esm target onto the shipped src/ stem", () => {
    const checkout = mkdtempSync(join(tmpdir(), "csw-scan-stem-"));
    try {
      mkdirSync(join(checkout, "src", "primitives"), { recursive: true });
      writeFileSync(
        join(checkout, "package.json"),
        JSON.stringify({
          name: "@bsv/sdk",
          main: "dist/esm/src/primitives/index.js",
          exports: { ".": "./dist/esm/src/primitives/index.js" },
        }),
      );
      writeFileSync(
        join(checkout, "src", "primitives", "index.ts"),
        "export class Point {}\n",
      );

      const rows = scanExports(checkout, "bsv-blockchain/ts-sdk", "ts");
      expect(rows.some((row) => row.name === "Point" && row.exported === true)).toBe(true);
      expect(rows.some((row) => row.locator.replaceAll("\\", "/").startsWith("src/primitives/index.ts:"))).toBe(
        true,
      );
    } finally {
      rmSync(checkout, { recursive: true, force: true });
    }
  });

  it("scanExports returns no symbols when no public entry exists on disk", () => {
    const checkout = mkdtempSync(join(tmpdir(), "csw-scan-empty-"));
    try {
      writeFileSync(
        join(checkout, "package.json"),
        JSON.stringify({
          name: "@bsv/empty",
          main: "dist/cjs/mod.js",
          exports: { ".": { types: "./dist/types/mod.d.ts", import: "./dist/esm/mod.js" } },
        }),
      );

      expect(scanExports(checkout, "bsv-blockchain/ts-sdk", "ts")).toEqual([]);
    } finally {
      rmSync(checkout, { recursive: true, force: true });
    }
  });

  it("get_symbol returns the ingested Beef row for ts-sdk", async () => {
    const res = await callToolJson<GetSymbolResult>(client, "get_symbol", {
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
    const res = await callToolJson<GetSymbolResult>(client, "get_symbol", {
      repo: "bsv-blockchain/ts-sdk",
      name: "PeerPayClient",
    });
    expect(res.found).toBe(false);
  });

  it("find_references returns store rows for Beef in ts-sdk and never invents names", async () => {
    const hits = await callToolJson<TypedHit[]>(client, "find_references", {
      repo: "bsv-blockchain/ts-sdk",
      symbol: "Beef",
    });
    expect(hits.some((hit) => hit.id === "symbol:ts-sdk:Beef" && hit.kind === "symbol")).toBe(true);
    expect(hits.every((hit) => hit.kind === "symbol" || hit.kind === "test" || hit.kind === "doc")).toBe(
      true,
    );
    expect(hits.every((hit) => hit.locator.includes("bsv-blockchain/ts-sdk") || hit.id.includes("ts-sdk"))).toBe(
      true,
    );

    const missing = await callToolJson<TypedHit[]>(client, "find_references", {
      repo: "bsv-blockchain/ts-sdk",
      symbol: "PeerPayClient",
    });
    expect(missing).toEqual([]);
  });

  it("get_resource serves the Beef symbol card as JSON", async () => {
    const opened = await callToolJson<GetResourceResult>(client, "get_resource", {
      uri: "symbol://ts-sdk/Beef",
    });
    const card = JSON.parse(opened.text) as { name?: string; package?: string };
    expect(card.name).toBe("Beef");
    expect(card.package).toBe("@bsv/sdk");
    expect(opened.hit.kind).toBe("symbol");
    expect(opened.hit.authority).toBe(2);
    expect(opened.hit.id).toBe("symbol:ts-sdk:Beef");
  });

  it("maps BEEF to BRC-62 and confirmed packages", async () => {
    const res = await callToolJson<PackageForConceptResult>(client, "get_package_for_concept", {
      concept: "BEEF",
    });
    expect(res.brcs).toEqual(expect.arrayContaining(["BRC-62"]));
    expect(res.brcs).not.toEqual(expect.arrayContaining(["BRC-30"]));
    expect(res.packages).toEqual(expect.arrayContaining(["@bsv/sdk", "go-sdk"]));
    expect(res.hits.some((hit: { kind: string }) => hit.kind === "brc")).toBe(true);
  });

  it("does not select BRC-30 for a BEEF query", async () => {
    const res = await callToolJson<PackageForConceptResult>(client, "get_package_for_concept", {
      concept: "BEEF",
    });
    expect(res.brcs).toEqual(expect.arrayContaining(["BRC-62"]));
    expect(res.brcs.includes("BRC-30")).toBe(false);
    expect(res.packages).toEqual(expect.arrayContaining(["@bsv/sdk", "go-sdk"]));
    expect(res.hits.some((hit) => hit.kind === "brc")).toBe(true);
  });

  it("get_resource serves the same spec text for the bare service URI", () => {
    const root = mkdtempSync(join(tmpdir(), "csw-spec-root-"));
    mkdirSync(join(root, "reference", "tier0"), { recursive: true });
    writeFileSync(
      join(root, "reference", "brc_index.json"),
      JSON.stringify({ revision: "fixture", count: 0, generated: "2026-08-15", brcs: [] }),
    );
    cpSync(join(FIXTURE, "specs"), join(root, "reference", "tier0", "specs"), { recursive: true });
    const store = createKnowledgeStore(openDatabase(":memory:"));
    try {
      const res = getResource(root, store, "spec://ts-stack/wallet");
      expect(res.uri).toBe("spec://ts-stack/wallet");
      expect(res.text).toBe(readFileSync(join(FIXTURE, "specs", "wallet.openapi.yaml"), "utf8"));
      expect(res.hit.kind).toBe("doc");
      expect(res.hit.authority).toBe(3);
      expect(res.hit.locator).toBe("spec://ts-stack/wallet");

      const missing = getResource(root, store, "spec://ts-stack/no-such-service-xyz");
      expect(missing.hit.title).toBe("Resource not present in snapshot");

      const malformed = getResource(root, store, "spec://ts-stack/%zz");
      expect(malformed.hit.title).toBe("Resource not present in snapshot");
    } finally {
      store.close();
    }
  });
});
