import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { defaultConfig } from "../src/config.js";
import { createServerWithStore } from "../src/server.js";
import type { KnowledgeStore } from "../src/store/knowledgeStore.js";
import type { EvidencePackage, TypedHit } from "../src/types.js";

const ROOT = resolve(import.meta.dirname, "../..");
const GOLDEN_PATH = resolve(ROOT, "mcp/golden-eval.json");
const PHASE_C_IDS = [
  "G01",
  "G03",
  "G07",
  "G08",
  "G14",
  "G15",
  "G16",
  "G17",
  "G18",
  "G19",
  "G20",
  "G21",
  "G22",
  "G23",
  "G24",
  "G25",
  "G26",
  "G27",
  "G28",
  "G29",
] as const;

type GoldenExpect = {
  must_cite?: string[];
  authority_lead?: number;
  must_include_kinds?: string[];
  must_mention?: string[];
  must_not?: string[];
  network?: string;
  packages?: string[];
  example_packages?: string[];
};

type GoldenCase = {
  id: string;
  question: string;
  class: string;
  expect: GoldenExpect;
};

type GoldenFile = {
  phase_c?: string[];
  cases: GoldenCase[];
};

type ToolJson = Record<string, unknown>;

const golden = JSON.parse(readFileSync(GOLDEN_PATH, "utf8")) as GoldenFile;
const phaseCCases = golden.cases.filter((row) =>
  (PHASE_C_IDS as readonly string[]).includes(row.id),
);

async function callToolJson(
  client: Client,
  name: string,
  args: Record<string, unknown>,
): Promise<ToolJson> {
  const res = await client.callTool({ name, arguments: args });
  const text = (res.content[0] as { type: "text"; text: string }).text;
  return JSON.parse(text) as ToolJson;
}

function packageHaystack(pkg: EvidencePackage): string {
  const hitText = pkg.hits
    .map((hit) => [hit.id, hit.title, hit.locator, hit.excerpt].join(" "))
    .join("\n");
  const claimText = pkg.claims.map((claim) => claim.text).join("\n");
  const contradictionText = pkg.contradictions
    .map((row) => [row.id, row.summary, row.winner, row.reason].filter(Boolean).join(" "))
    .join("\n");
  return [pkg.answer_sketch ?? "", claimText, hitText, contradictionText, pkg.gaps.join("\n")].join(
    "\n",
  );
}

function citesToken(pkg: EvidencePackage, cite: string): boolean {
  const brc = /^BRC-(\d+)$/i.exec(cite);
  if (brc) {
    const number = brc[1];
    const id = `brc:${Number(number)}`;
    const labelled = new RegExp(`BRC-${number}\\b`, "i");
    const hit = pkg.hits.some(
      (row) =>
        row.id === id ||
        row.locator === `brc://spec/${Number(number)}` ||
        labelled.test(row.title) ||
        labelled.test(row.excerpt ?? "") ||
        labelled.test(row.locator),
    );
    const claim = pkg.claims.some((row) => labelled.test(row.text));
    const sketch = pkg.answer_sketch ? labelled.test(pkg.answer_sketch) : false;
    return hit && (claim || sketch);
  }

  if (cite.includes("://")) {
    return pkg.hits.some((row) => row.locator === cite || row.id === cite);
  }

  const needle = cite.toLowerCase();
  return packageHaystack(pkg).toLowerCase().includes(needle);
}

function hitMatchesCite(hit: TypedHit, cite: string): boolean {
  const brc = /^BRC-(\d+)$/i.exec(cite);
  if (brc) {
    const number = brc[1];
    const labelled = new RegExp(`BRC-${number}\\b`, "i");
    return (
      hit.id === `brc:${Number(number)}` ||
      hit.locator === `brc://spec/${Number(number)}` ||
      labelled.test(hit.title) ||
      labelled.test(hit.locator)
    );
  }
  if (cite.includes("://")) {
    return hit.locator === cite || hit.id === cite;
  }
  return `${hit.id} ${hit.title} ${hit.locator}`.toLowerCase().includes(cite.toLowerCase());
}

function assertInvestigateExpect(pkg: EvidencePackage, row: GoldenCase): void {
  const expected = row.expect;
  expect(pkg.classified_as, "classified_as matches the golden label").toBe(row.class);
  if (expected.network !== undefined) {
    expect(pkg.network, "network matches the golden label").toBe(expected.network);
  }
  for (const cite of expected.must_cite ?? []) {
    expect(citesToken(pkg, cite), `must_cite ${cite}`).toBe(true);
  }

  if (expected.authority_lead !== undefined) {
    const cited = pkg.hits.filter((hit) =>
      (expected.must_cite ?? []).some((cite) => hitMatchesCite(hit, cite)),
    );
    expect(cited.length, "authority_lead needs a cited hit").toBeGreaterThan(0);
    expect(cited.some((hit) => hit.authority === expected.authority_lead)).toBe(true);
  }

  if (expected.must_include_kinds) {
    const kinds = new Set(pkg.hits.map((hit) => hit.kind));
    for (const kind of expected.must_include_kinds) {
      expect(kinds.has(kind), `must_include_kinds ${kind} from hits`).toBe(true);
    }
  }

  const hay = packageHaystack(pkg);
  for (const phrase of expected.must_mention ?? []) {
    expect(hay.toLowerCase().includes(phrase.toLowerCase()), `must_mention ${phrase}`).toBe(true);
  }
  for (const phrase of expected.must_not ?? []) {
    expect(hay.toLowerCase().includes(phrase.toLowerCase()), `must_not ${phrase}`).toBe(false);
  }

  if (expected.packages) {
    assertPackages(pkg, expected.packages, ["symbol", "capability"]);
  }
  if (expected.example_packages) {
    assertPackages(pkg, expected.example_packages, ["example"]);
  }
}

function assertPackages(pkg: EvidencePackage, packages: string[], kinds: string[]): void {
  const hay = pkg.hits
    .filter((hit) => kinds.includes(hit.kind) || hit.id.startsWith("package:"))
    .map((hit) => [hit.id, hit.title, hit.locator, hit.excerpt].join(" "))
    .join("\n")
    .toLowerCase();
  for (const name of packages) {
    expect(hay.includes(name.toLowerCase()), `package ${name}`).toBe(true);
  }
}

describe("Phase C golden runner", () => {
  let store: KnowledgeStore;
  let client: Client;

  beforeAll(async () => {
    const created = createServerWithStore({ ...defaultConfig(ROOT), dbPath: ":memory:" });
    store = created.store;
    client = new Client({ name: "test", version: "0.0.1" });
    const [ct, st] = InMemoryTransport.createLinkedPair();
    await Promise.all([created.server.connect(st), client.connect(ct)]);
  }, 60_000);

  afterAll(() => {
    store.close();
  });

  it("loads only the Phase C golden cases", () => {
    expect(golden.phase_c).toEqual([...PHASE_C_IDS]);
    expect(phaseCCases.map((row) => row.id)).toEqual([...PHASE_C_IDS]);
  });

  it.each(phaseCCases)("$id — $question", async (row) => {
    const pkg = (await callToolJson(client, "investigate", {
      question: row.question,
    })) as ToolJson & EvidencePackage;
    assertInvestigateExpect(pkg, row);
  });
});
