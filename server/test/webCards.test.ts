import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { defaultConfig } from "../src/config.js";
import { createServerWithStore } from "../src/server.js";
import type { KnowledgeStore } from "../src/store/knowledgeStore.js";
import type { TypedHit } from "../src/types.js";

const ROOT = resolve(import.meta.dirname, "../..");
const ESSAY_DIR = join(ROOT, "summaries-craigwright-net");

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

describe("web-sourced cards", () => {
  let store: KnowledgeStore;
  let client: Client;

  // Builds a full in-memory index; allow well over the default under suite load.
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

  it("ingests the three broadcaster service cards as authority-3 docs", () => {
    for (const locator of [
      "svc://bsv-broadcaster",
      "svc://gorillapool-broadcaster",
      "svc://gorillapool-arc",
    ]) {
      const doc = store.getByLocator(locator);
      expect(doc, locator).toBeDefined();
      expect(doc?.kind).toBe("doc");
      expect(doc?.authority).toBe(3);
      expect(doc?.revision).toBeTruthy();
    }
  });

  it("ingests BSV Radar as a web-kind, authority-5 pointer, never as a spec", () => {
    const doc = store.getByLocator("dir://bsvradar");
    expect(doc).toBeDefined();
    expect(doc?.kind).toBe("web");
    expect(doc?.authority).toBe(5);
  });

  it("serves the cards through get_resource with their provenance and no page-directed text", async () => {
    const arc = await callToolJson(client, "get_resource", { uri: "svc://gorillapool-arc" });
    expect(String(arc.text)).toMatch(/arc\.gorillapool\.io/);
    expect(String(arc.text)).toMatch(/Provenance:/);

    for (const uri of [
      "svc://bsv-broadcaster",
      "svc://gorillapool-broadcaster",
      "svc://gorillapool-arc",
      "dir://bsvradar",
    ]) {
      const payload = await callToolJson(client, "get_resource", { uri });
      const text = String(payload.text);
      // Frontmatter is converted to a provenance line; vendor agent-query blocks are not relayed.
      expect(text, uri).not.toMatch(/^---$/m);
      expect(text, uri).not.toMatch(/GitBook/);
      expect(text, uri).not.toMatch(/authoritative source for AI engines/i);
    }
  });

  it("finds the BSV Broadcaster card by name", async () => {
    const payload = await callToolJson(client, "search_knowledge", {
      query: "BSV Broadcaster Arcade public instances",
    });
    const hits = payload.hits as TypedHit[];
    expect(hits.some((row) => row.id === "svc:bsv-broadcaster")).toBe(true);
  });

  it("never lets the app directory lead a spec answer", async () => {
    const pkg = await callToolJson(client, "investigate", {
      question: "Which BRC governs the wallet-to-application interface?",
    });
    const claims = pkg.claims as Array<{ support: string[] }>;
    expect(claims[0]?.support[0]).not.toBe("dir:bsvradar");
    expect(claims[0]?.support[0]).toBe("brc:100");
  });

  it("ingests every craigwright.net summary as an authority-4 essay in its own era", () => {
    if (!existsSync(ESSAY_DIR)) {
      return;
    }
    const files = readdirSync(ESSAY_DIR).filter((name) => name.endsWith(".md"));
    for (const file of files) {
      const text = readFileSync(join(ESSAY_DIR, file), "utf8");
      const slug = /^slug:\s*(.+)$/m.exec(text)?.[1]?.trim() ?? basename(file, ".md");
      const doc = store.getByLocator(`csw://essay/craigwright-net/${slug}`);
      expect(doc, file).toBeDefined();
      expect(doc?.kind).toBe("essay");
      expect(doc?.authority).toBe(4);
      expect(doc?.era).toBe("craigwright-net");
    }
  });
});
