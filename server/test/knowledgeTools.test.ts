import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { resolve } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { defaultConfig } from "../src/config.js";
import { createServerWithStore } from "../src/server.js";
import { openDatabase } from "../src/store/db.js";
import { createKnowledgeStore, type KnowledgeStore } from "../src/store/knowledgeStore.js";
import { ingestSnapshots } from "../src/ingest/snapshotIngest.js";
import { buildIndexStatus } from "../src/tools/statusTools.js";
import type { TypedHit } from "../src/types.js";

const ROOT = resolve(import.meta.dirname, "../..");

type ToolJson = Record<string, unknown>;

async function callToolJson(
  client: Client,
  name: string,
  args: Record<string, unknown>,
): Promise<ToolJson> {
  const res = await client.callTool({ name, arguments: args });
  const text = (res.content[0] as { type: "text"; text: string }).text;
  return JSON.parse(text) as ToolJson;
}

describe("ingestSnapshots", () => {
  let store: KnowledgeStore;

  afterEach(() => {
    store.close();
  });

  // Full production ingests are heavyweight; allow well over the 5s default under load.
  it("ingests existing snapshots into FTS with required document counts", () => {
    store = createKnowledgeStore(openDatabase(":memory:"));

    const result = ingestSnapshots(ROOT, store);

    expect(result.documents).toBeGreaterThan(600);
    expect(store.countByKind("brc")).toBeGreaterThanOrEqual(171);
    expect(store.countByKind("principle")).toBeGreaterThanOrEqual(400);
    expect(store.countByKind("contradiction")).toBeGreaterThanOrEqual(80);

    const testnet = store.getByLocator("ops://testnet");
    expect(testnet).toBeDefined();
    expect(testnet?.kind).toBe("doc");
    expect(testnet?.authority).toBe(3);
    expect(testnet?.revision).toBeTruthy();

    const ordinality = store.getByLocator("ops://ordinality");
    expect(ordinality).toBeDefined();
    expect(ordinality?.kind).toBe("doc");
    // An operator playbook, not a spec: the card itself defers to brc://spec/150.
    expect(ordinality?.authority).toBe(3);
    expect(ordinality?.revision).toBeTruthy();

    const deny = store.getByLocator("repo://deny");
    expect(deny).toBeDefined();
    expect(deny?.kind).toBe("doc");
    expect(deny?.authority).toBe(3);
    expect(deny?.revision).toBeTruthy();

    expect(store.ftsCount()).toBe(result.documents);
    const ftsHits = store.searchFts("testnet");
    expect(ftsHits.length).toBeGreaterThan(0);
    expect(ftsHits.some((hit) => hit.id === "ops:testnet" || /testnet/i.test(hit.title))).toBe(true);
  }, 20_000);

  it("persists ingest counts so get_index_status can report them", () => {
    store = createKnowledgeStore(openDatabase(":memory:"));
    ingestSnapshots(ROOT, store);

    const status = buildIndexStatus(ROOT, store);
    expect(status.counts.brcs).toBeGreaterThanOrEqual(171);
    expect(status.counts.essays).toBeGreaterThanOrEqual(400);
    expect(status.counts.education).toBeGreaterThanOrEqual(400);
  }, 20_000);
});

describe("knowledge tools", () => {
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

  it("search_knowledge for BEEF returns BRC-62 at authority 1", async () => {
    const payload = await callToolJson(client, "search_knowledge", { query: "BEEF" });
    const hits = payload.hits as TypedHit[];
    expect(typeof payload.totalCount).toBe("number");
    expect(payload.totalCount).toBeGreaterThan(0);
    expect(hits.length).toBeGreaterThan(0);
    expect(hits.length).toBeLessThanOrEqual(20);
    const hit = hits.find((row) => row.id === "brc:62");
    expect(hit).toBeDefined();
    expect(hit?.authority).toBe(1);
  });

  it("search_knowledge for SPV returns at least one principle or essay", async () => {
    const payload = await callToolJson(client, "search_knowledge", { query: "SPV" });
    const hits = payload.hits as TypedHit[];
    expect(hits.some((row) => row.kind === "principle" || row.kind === "essay")).toBe(true);
  });

  it("get_resource for ops://ordinality mentions fail closed", async () => {
    const payload = await callToolJson(client, "get_resource", { uri: "ops://ordinality" });
    expect(payload.uri).toBe("ops://ordinality");
    expect(String(payload.text)).toMatch(/fail closed/i);
    expect(payload.hit).toEqual(expect.objectContaining({ locator: "ops://ordinality" }));
  });

  it("get_resource for repo://deny serves deny-list.json", async () => {
    const payload = await callToolJson(client, "get_resource", { uri: "repo://deny" });
    expect(payload.uri).toBe("repo://deny");
    const parsed = JSON.parse(String(payload.text)) as {
      entries?: Array<{ name?: string }>;
    };
    const names = (parsed.entries ?? []).map((entry) => entry.name);
    expect(names.some((name) => name === "bsv" || name === "js-1sat-ord")).toBe(true);
  });

  it("list_contradictions for SPV includes IT-01", async () => {
    const payload = await callToolJson(client, "list_contradictions", { topic: "SPV" });
    const findings = payload.findings as Array<{ id?: string }>;
    expect(findings.some((finding) => finding.id === "IT-01")).toBe(true);
  });
});
