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
const PHASE_A_IDS = ["G04", "G05", "G09", "G10"] as const;

type GoldenExpect = {
  must_cite?: string[];
  authority_lead?: number;
  must_include_kinds?: string[];
  must_cite_contradiction?: string;
  must_mention?: string[];
  must_not?: string[];
  tool?: string;
  index_status?: string[];
  must_include_fields?: string[];
};

type GoldenCase = {
  id: string;
  question: string;
  class: string;
  expect: GoldenExpect;
};

type GoldenFile = {
  phase_a?: string[];
  cases: GoldenCase[];
};

type ToolJson = Record<string, unknown>;

const golden = JSON.parse(readFileSync(GOLDEN_PATH, "utf8")) as GoldenFile;
const phaseACases = golden.cases.filter((row) =>
  (PHASE_A_IDS as readonly string[]).includes(row.id),
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

  if (expected.must_cite_contradiction) {
    expect(pkg.contradictions.some((row) => row.id === expected.must_cite_contradiction)).toBe(true);
  }

  const hay = packageHaystack(pkg);
  for (const phrase of expected.must_mention ?? []) {
    expect(hay.toLowerCase().includes(phrase.toLowerCase()), `must_mention ${phrase}`).toBe(true);
  }
  for (const phrase of expected.must_not ?? []) {
    expect(hay.toLowerCase().includes(phrase.toLowerCase()), `must_not ${phrase}`).toBe(false);
  }
}

describe("Phase A golden runner", () => {
  let store: KnowledgeStore;
  let client: Client;

  beforeAll(async () => {
    const created = createServerWithStore({ ...defaultConfig(ROOT), dbPath: ":memory:" });
    store = created.store;
    client = new Client({ name: "test", version: "0.0.1" });
    const [ct, st] = InMemoryTransport.createLinkedPair();
    await Promise.all([created.server.connect(st), client.connect(ct)]);
  }, 30_000);

  afterAll(() => {
    store.close();
  });

  it("loads only the Phase A golden cases", () => {
    expect(golden.phase_a).toEqual([...PHASE_A_IDS]);
    expect(phaseACases.map((row) => row.id)).toEqual([...PHASE_A_IDS]);
  });

  it.each(phaseACases)("$id — $question", async (row) => {
    const tool = row.expect.tool ?? "investigate";

    if (tool === "get_index_status") {
      const status = await callToolJson(client, "get_index_status", {});
      expect(row.expect.index_status).toContain(status.status);
      for (const field of row.expect.must_include_fields ?? []) {
        expect(status).toHaveProperty(field);
        expect(String(status[field] ?? "").length, field).toBeGreaterThan(0);
      }
      return;
    }

    const pkg = (await callToolJson(client, "investigate", {
      question: row.question,
    })) as ToolJson & EvidencePackage;
    assertInvestigateExpect(pkg, row);
  });
});
