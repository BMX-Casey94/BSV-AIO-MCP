import { afterEach, describe, expect, it } from "vitest";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createServerWithStore } from "../src/server.js";
import { defaultConfig } from "../src/config.js";
import { resolve } from "node:path";
import type { KnowledgeStore } from "../src/store/knowledgeStore.js";

const ROOT = resolve(import.meta.dirname, "../..");

describe("get_index_status", () => {
  let store: KnowledgeStore;

  afterEach(() => {
    store.close();
  });

  it("returns a real pin, never empty after construct", async () => {
    const created = createServerWithStore({ ...defaultConfig(ROOT), dbPath: ":memory:" });
    store = created.store;
    const client = new Client({ name: "test", version: "0.0.1" });
    const [ct, st] = InMemoryTransport.createLinkedPair();
    await Promise.all([created.server.connect(st), client.connect(ct)]);

    const res = await client.callTool({ name: "get_index_status", arguments: {} });
    const text = (res.content[0] as { type: "text"; text: string }).text;
    const status = JSON.parse(text);
    expect(status.status).toMatch(/ready|stale/);
    expect(status.sha).toMatch(/^[0-9a-f]{8,}$/);
    expect(status.brc_revision).toBeTruthy();
    expect(status.fetched_at).toBeTruthy();
    expect(status.policy_version).toBe("2026-08-14");
    expect(status.counts.brcs).toBeGreaterThanOrEqual(171);
    expect(status.counts.essays).toBeGreaterThanOrEqual(400);
    expect(status.counts.education).toBeGreaterThanOrEqual(400);
  });
});
