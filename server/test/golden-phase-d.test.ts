import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { defaultConfig } from "../src/config.js";
import { createServerWithStore } from "../src/server.js";
import type { KnowledgeStore } from "../src/store/knowledgeStore.js";

const ROOT = resolve(import.meta.dirname, "../..");
const GOLDEN_PATH = resolve(ROOT, "mcp/golden-eval.json");
const PHASE_D_IDS = ["G06", "G11"] as const;

type GoldenExpect = {
  tool?: string;
  args?: Record<string, unknown>;
  action?: string;
  network?: string;
  status?: string;
  must_cite?: string[];
  must_mention?: string[];
  must_not?: string[];
};

type GoldenCase = {
  id: string;
  question: string;
  class: string;
  expect: GoldenExpect;
};

type GoldenFile = {
  phase_d?: string[];
  cases: GoldenCase[];
};

type ToolJson = Record<string, unknown>;

const golden = JSON.parse(readFileSync(GOLDEN_PATH, "utf8")) as GoldenFile;
const phaseDCases = golden.cases.filter((row) =>
  (PHASE_D_IDS as readonly string[]).includes(row.id),
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

describe("Phase D golden runner (read-only policy tools)", () => {
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

  it("loads only the Phase D golden cases", () => {
    expect(golden.phase_d).toEqual([...PHASE_D_IDS]);
    expect(phaseDCases.map((row) => row.id)).toEqual([...PHASE_D_IDS]);
  });

  it.each(phaseDCases)("$id — $question", async (row) => {
    const tool = row.expect.tool;
    expect(tool, "Phase D cases name their tool").toBeTruthy();
    const result = await callToolJson(client, tool as string, row.expect.args ?? {});

    if (row.expect.action !== undefined) {
      expect(result.action, "action").toBe(row.expect.action);
    }
    if (row.expect.network !== undefined) {
      expect(result.network, "network").toBe(row.expect.network);
    }
    if (row.expect.status !== undefined) {
      expect(result.status, "status").toBe(row.expect.status);
    }

    const hay = JSON.stringify(result).toLowerCase();
    for (const phrase of row.expect.must_mention ?? []) {
      expect(hay.includes(phrase.toLowerCase()), `must_mention ${phrase}`).toBe(true);
    }
    for (const cite of row.expect.must_cite ?? []) {
      expect(hay.includes(cite.toLowerCase()), `must_cite ${cite}`).toBe(true);
    }
    for (const phrase of row.expect.must_not ?? []) {
      expect(hay.includes(phrase.toLowerCase()), `must_not ${phrase}`).toBe(false);
    }
  });
});
