import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { refreshTier0 } from "../src/ingest/refreshTier0.js";
import { ingestRepoCards } from "../src/ingest/tier0Ingest.js";
import { openDatabase } from "../src/store/db.js";
import { createKnowledgeStore } from "../src/store/knowledgeStore.js";

const TARBALLS = resolve(import.meta.dirname, "fixtures/mini-tier1/tarballs");

const LIB_REPO = {
  repo: "acme/mini-lib",
  sha: "aaa1111",
  package: null,
  language: "ts",
  role: "library",
} as const;

const SVC_REPO = {
  repo: "acme/mini-svc",
  sha: "bbb2222",
  package: null,
  language: "ts",
  role: "service",
} as const;

function freshRoot(): string {
  return mkdtempSync(join(tmpdir(), "bsv-aio-root-"));
}

function freshTier1(): string {
  return mkdtempSync(join(tmpdir(), "bsv-aio-tier1-"));
}

/** Serves the committed fixture tarball for each repository. */
function tarballRouter(byRepo: Record<string, string>): typeof fetch {
  const bytes = new Map(
    Object.entries(byRepo).map(([repo, name]) => [repo, readFileSync(join(TARBALLS, name))]),
  );
  return (async (url: string | URL) => {
    const href = String(url);
    for (const [repo, body] of bytes) {
      if (href.includes(`/${repo}/tar.gz/`)) {
        return new Response(new Uint8Array(body));
      }
    }
    throw new Error(`no fixture tarball for ${href}`);
  }) as typeof fetch;
}

const rejectingFetch = (async () => {
  throw new Error("network must not be called");
}) as typeof fetch;

function readCard<T>(tier1Root: string, rel: string): T {
  return JSON.parse(readFileSync(join(tier1Root, ...rel.split("/")), "utf8")) as T;
}

describe("tier1 refresh", () => {
  it("refuses to run when allowRefresh is false", async () => {
    await expect(
      refreshTier0({
        root: freshRoot(),
        tier0Root: freshTier1(),
        repos: [LIB_REPO],
        allowRefresh: false,
        fetch: rejectingFetch,
        label: "Tier 1",
      }),
    ).rejects.toThrow(/Tier 1 refresh.*BSV_AIO_ALLOW_REFRESH/);
  });

  it("writes package, symbol, docs and brc-mentions cards from the fixture tarballs", async () => {
    const tier1Root = freshTier1();
    const result = await refreshTier0({
      root: freshRoot(),
      tier0Root: tier1Root,
      repos: [LIB_REPO, SVC_REPO],
      allowRefresh: true,
      fetch: tarballRouter({
        "acme/mini-lib": "mini-lib-aaa1111.tar.gz",
        "acme/mini-svc": "mini-svc-bbb2222.tar.gz",
      }),
      label: "Tier 1",
    });

    expect(result.repos).toBe(2);
    expect(result.packages).toEqual(["@acme/mini-lib", "mini-svc"]);
    expect(result.docs).toBe(4); // both READMEs + docs/usage.md + docs/api.md
    expect(result.examples).toBe(1); // examples/use-mini.ts

    const symbols = readCard<{ symbols: Array<{ name: string; package: string }> }>(
      tier1Root,
      "symbols.json",
    );
    // Libraries publish their symbol surface; services are not imported, so they do not.
    expect(symbols.symbols.map((row) => row.name).sort()).toEqual([
      "MINI_VERSION",
      "MiniClient",
      "miniHash",
    ]);
    expect(symbols.symbols.every((row) => row.package === "@acme/mini-lib")).toBe(true);

    const mentions = readCard<{ mentions: Record<string, number[]> }>(
      tier1Root,
      "docs/brc-mentions.json",
    );
    expect(mentions.mentions["@acme/mini-lib"]).toEqual([22]);
    expect(mentions.mentions["mini-svc"]).toEqual([26]);

    const docsManifest = readCard<{ count: number; files: Record<string, { example: boolean }> }>(
      tier1Root,
      "docs/manifest.json",
    );
    expect(docsManifest.count).toBe(5);
    expect(docsManifest.files["mini-lib/examples/use-mini.ts"]?.example).toBe(true);
    expect(docsManifest.files["mini-lib/README.md"]?.example).toBe(false);

    const manifest = readCard<{ repos: Array<{ repo: string; package: string | null }> }>(
      tier1Root,
      "manifest.json",
    );
    expect(manifest.repos.map((row) => row.package)).toEqual(["@acme/mini-lib", "mini-svc"]);
  });

  it("refuses a rerun that collapses the confirmed package set", async () => {
    const tier1Root = freshTier1();
    const root = freshRoot();
    const fetch = tarballRouter({
      "acme/mini-lib": "mini-lib-aaa1111.tar.gz",
      "acme/mini-svc": "mini-svc-bbb2222.tar.gz",
    });
    await refreshTier0({
      root,
      tier0Root: tier1Root,
      repos: [LIB_REPO, SVC_REPO],
      allowRefresh: true,
      fetch,
      label: "Tier 1",
    });
    await expect(
      refreshTier0({
        root,
        tier0Root: tier1Root,
        repos: [LIB_REPO],
        allowRefresh: true,
        fetch,
        label: "Tier 1",
      }),
    ).rejects.toThrow(/below 80% of the previous 2/);
  });
});

describe("tier1 ingest", () => {
  it("ingests package, symbol, doc and example cards with tier provenance", async () => {
    const tier1Root = freshTier1();
    await refreshTier0({
      root: freshRoot(),
      tier0Root: tier1Root,
      repos: [LIB_REPO, SVC_REPO],
      allowRefresh: true,
      fetch: tarballRouter({
        "acme/mini-lib": "mini-lib-aaa1111.tar.gz",
        "acme/mini-svc": "mini-svc-bbb2222.tar.gz",
      }),
      label: "Tier 1",
    });

    const store = createKnowledgeStore(openDatabase(":memory:"));
    const result = ingestRepoCards(tier1Root, store, { revision: "test", fetched_at: "2026-08-29" }, "Tier 1");
    expect(result.packages).toBe(2);
    expect(result.symbols).toBe(3);
    expect(result.documents).toBe(2 + 3 + 5);

    const pkg = store.getById("package:@acme/mini-lib");
    expect(pkg?.kind).toBe("doc");
    expect(pkg?.authority).toBe(2);
    expect(pkg?.title).toBe("Tier 1 package: @acme/mini-lib");
    expect(pkg?.body).toContain("acme/mini-lib (library)");

    const symbol = store.getById("symbol:mini-lib:MiniClient");
    expect(symbol?.kind).toBe("symbol");
    expect(symbol?.authority).toBe(2);

    const readme = store.getById("doc:mini-lib:README.md");
    expect(readme?.kind).toBe("doc");
    expect(readme?.authority).toBe(2);
    expect(readme?.title).toBe("Mini Lib");
    expect(readme?.locator).toBe("repo://mini-lib/README.md");

    const apiDoc = store.getById("doc:mini-svc:docs/api.md");
    expect(apiDoc?.kind).toBe("doc");
    expect(apiDoc?.body).toContain("POST /store");

    const example = store.getById("example:mini-lib:examples/use-mini.ts");
    expect(example?.kind).toBe("example");
    expect(example?.authority).toBe(3);
    expect(example?.language).toBe("ts");

    // The docs manifest and brc-mentions card are metadata, never knowledge cards.
    expect(store.getById("doc:mini-lib:manifest.json")).toBeUndefined();
    store.close();
  });
});
