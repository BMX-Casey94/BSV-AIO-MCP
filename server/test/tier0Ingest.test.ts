import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { defaultConfig } from "../src/config.js";
import { ingestSnapshots } from "../src/ingest/snapshotIngest.js";
import { refreshTier0 } from "../src/ingest/refreshTier0.js";
import { openDatabase } from "../src/store/db.js";
import { createKnowledgeStore } from "../src/store/knowledgeStore.js";
import { buildIndexStatus } from "../src/tools/statusTools.js";
import { getResource } from "../src/tools/knowledgeTools.js";

const ROOT = resolve(import.meta.dirname, "../..");
const FIXTURE = resolve(import.meta.dirname, "fixtures/mini-tier0");
const TARBALLS = resolve(import.meta.dirname, "fixtures/mini-tier0/tarballs");

describe("tier0 ingest", () => {
  it("counts confirmed packages on the index pin and serves repo://tier0", () => {
    const store = createKnowledgeStore(openDatabase(":memory:"));
    const config = { ...defaultConfig(ROOT), tier0Root: FIXTURE };
    // Hermetic: no tier1Root, so the real Tier 1 snapshot cannot leak into fixture counts.
    ingestSnapshots(config.root, store, { tier0Root: FIXTURE, tier1Root: join(FIXTURE, "absent-tier1") });
    const status = buildIndexStatus(config.root, store);
    expect(status.counts.packages).toBe(2);
    expect(status.status).toMatch(/ready|stale/);
    const manifest = getResource(config.root, store, "repo://tier0");
    expect(manifest.text).toContain("bsv-blockchain/ts-sdk");
    expect(store.countByKind("symbol")).toBeGreaterThanOrEqual(1);
    store.close();
  });

  it("ingests spec and vector cards from the pinned card set", () => {
    const store = createKnowledgeStore(openDatabase(":memory:"));
    const result = ingestSnapshots(ROOT, store, { tier0Root: FIXTURE, tier1Root: join(FIXTURE, "absent-tier1") });

    const pkg = store.getById("package:@bsv/sdk");
    expect(pkg?.kind).toBe("doc");
    expect(pkg?.authority).toBe(2);

    const symbol = store.getById("symbol:ts-sdk:Beef");
    expect(symbol?.kind).toBe("symbol");
    expect(symbol?.authority).toBe(2);
    expect(symbol?.language).toBe("ts");
    expect(symbol?.body).toContain("@bsv/sdk");

    const spec = store.getById("spec:ts-stack:errors.md");
    expect(spec?.kind).toBe("doc");
    expect(spec?.authority).toBe(3);
    expect(spec?.body).toContain("ERR_WIDGET");

    const vector = store.getById("vector:beef:valid-minimal.json");
    expect(vector?.kind).toBe("test");
    expect(vector?.authority).toBe(0);

    expect(store.countByIdPrefix("package:")).toBe(2);
    expect(store.ftsCount()).toBe(result.documents);
    store.close();
  });

  // Full production ingests are heavyweight; allow well over the 5s default under load.
  it("reports the refreshed production cards on the index pin", () => {
    const store = createKnowledgeStore(openDatabase(":memory:"));
    ingestSnapshots(ROOT, store);

    const status = buildIndexStatus(ROOT, store);
    expect(status.status).toBe("ready");
    // 5 Tier 0 packages + 7 Tier 1 packages.
    expect(status.counts.packages).toBe(12);
    expect(store.countByIdPrefix("spec:")).toBeGreaterThan(0);
    expect(store.countByIdPrefix("symbol:")).toBeGreaterThan(0);
    expect(getResource(ROOT, store, "repo://tier0").text).toContain("bsv-blockchain/ts-sdk");
    store.close();
  }, 20_000);

  it("ingests Rúnar HTML docs as plain-text cards with real titles", () => {
    const store = createKnowledgeStore(openDatabase(":memory:"));
    ingestSnapshots(ROOT, store);

    const doc = store.getById("academy:runar/cli-reference");
    expect(doc).toBeDefined();
    expect(doc?.title).toBe("CLI Reference");
    expect(doc?.body).not.toMatch(/<\/?(?:div|article|script|style|span)\b/i);
    expect(doc?.body).toContain("runar-cli");
    store.close();
  }, 20_000);

  it("ingests the pinned BRC-62 body into the brc card, not the catalogue stub", () => {
    const store = createKnowledgeStore(openDatabase(":memory:"));
    ingestSnapshots(ROOT, store);

    const doc = store.getById("brc:62");
    expect(doc).toBeDefined();
    expect(doc?.body).toContain("BEEF");
    expect(doc?.body.length).toBeGreaterThan(1000);
    // The catalogue-stub lines only remain when no body is pinned.
    expect(doc?.body).not.toMatch(/^Path: /m);
    store.close();
  }, 20_000);
});

const SDK_REPO = {
  repo: "bsv-blockchain/ts-sdk",
  sha: "abc1234",
  package: null,
  language: "ts",
  role: "sdk",
} as const;

const TS_STACK_SPECS_REPO = {
  repo: "bsv-blockchain/ts-stack",
  sha: "4b7d9c0",
  package: null,
  language: "ts",
  role: "specs",
} as const;

const BRCS_REPO = {
  repo: "bsv-blockchain/BRCs",
  sha: "1a2b3c4",
  package: null,
  language: "spec",
  role: "standards",
} as const;

const VECTORS_REPO = {
  repo: "bsv-blockchain/universal-test-vectors",
  sha: "5e6f7a8",
  package: null,
  language: "spec",
  role: "vectors",
} as const;

function freshRoot(): string {
  return mkdtempSync(join(tmpdir(), "csw-root-"));
}

function freshTier0(): string {
  return mkdtempSync(join(tmpdir(), "csw-tier0-"));
}

function tarballResponder(name: string, assertUrl?: (url: string) => void): typeof fetch {
  const bytes = readFileSync(join(TARBALLS, name));
  return (async (url: string | URL) => {
    assertUrl?.(String(url));
    return new Response(new Uint8Array(bytes));
  }) as typeof fetch;
}

/** Serves a different committed tarball per repository so one run can mix roles. */
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

type ManifestCard = {
  policy?: unknown;
  repos: Array<{ repo: string; sha: string | null; package: string | null }>;
};

function readCard<T>(tier0Root: string, name: string): T {
  return JSON.parse(readFileSync(join(tier0Root, name), "utf8")) as T;
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
    ).rejects.toThrow(/BSV_AIO_ALLOW_REFRESH/);
  });

  it("writes packages.json from the committed fixture tarball", async () => {
    const tier0Root = freshTier0();
    const fetch = tarballResponder("ts-sdk-abc1234.tar.gz", (url) => {
      expect(url).toMatch(/codeload\.github\.com\/bsv-blockchain\/ts-sdk\/tar\.gz\/abc1234/);
    });

    const result = await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [SDK_REPO],
      allowRefresh: true,
      fetch,
    });

    expect(result.repos).toBe(1);
    expect(result.packages).toContain("@bsv/sdk");
    const written = JSON.parse(readFileSync(join(tier0Root, "packages.json"), "utf8")) as {
      revision: string;
      packages: string[];
    };
    expect(written.packages).toContain("@bsv/sdk");
    expect(written.revision).not.toBe("");
  });

  it("writes symbols.json with the scanned Beef row from the fixture tarball", async () => {
    const tier0Root = freshTier0();
    await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [SDK_REPO],
      allowRefresh: true,
      fetch: tarballResponder("ts-sdk-abc1234.tar.gz"),
    });

    const written = readCard<{
      revision: string;
      symbols: Array<{ name: string; repo: string; package: string; exported: boolean; locator: string }>;
    }>(tier0Root, "symbols.json");
    const beef = written.symbols.find((row) => row.name === "Beef");
    expect(beef).toMatchObject({
      name: "Beef",
      repo: "bsv-blockchain/ts-sdk",
      package: "@bsv/sdk",
      exported: true,
    });
    expect(beef?.locator.replaceAll("\\", "/")).toMatch(/src\/transaction\/Beef\.ts:\d+/);
    expect(written.symbols.every((row) => row.exported === true)).toBe(true);
    expect(written.symbols.some((row) => row.name === "PeerPayClient")).toBe(false);
    expect(written.revision).not.toBe("");
  });

  it("reads package.json from inside the nested codeload directory", async () => {
    const tier0Root = freshTier0();
    const result = await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [SDK_REPO],
      allowRefresh: true,
      fetch: tarballResponder("ts-sdk-abc1234-nested.tar.gz"),
    });

    expect(result.packages).toEqual(["@bsv/sdk"]);
    expect(readCard<{ packages: string[] }>(tier0Root, "packages.json").packages).toEqual([
      "@bsv/sdk",
    ]);
  });

  it("labels only sdk and wallet roles, leaving other roles unlabelled", async () => {
    const tier0Root = freshTier0();
    const result = await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [SDK_REPO, TS_STACK_SPECS_REPO],
      allowRefresh: true,
      fetch: tarballRouter({
        "bsv-blockchain/ts-sdk": "ts-sdk-abc1234.tar.gz",
        "bsv-blockchain/ts-stack": "ts-stack-4b7d9c0.tar.gz",
      }),
    });

    expect(result.repos).toBe(2);
    expect(result.packages).toEqual(["@bsv/sdk"]);
    const written = readCard<{ packages: string[] }>(tier0Root, "packages.json");
    expect(written.packages).not.toContain("@bsv/ts-stack");
    const manifest = readCard<ManifestCard>(tier0Root, "manifest.json");
    expect(manifest.repos.find((row) => row.repo === "bsv-blockchain/ts-stack")?.package).toBeNull();
    expect(manifest.repos.find((row) => row.repo === "bsv-blockchain/ts-sdk")?.package).toBe(
      "@bsv/sdk",
    );
  });

  it("writes both cards from the same run rather than merging older manifest rows", async () => {
    const tier0Root = freshTier0();
    mkdirSync(tier0Root, { recursive: true });
    writeFileSync(
      join(tier0Root, "manifest.json"),
      JSON.stringify({
        generated: "2026-01-01",
        policy: "Committed cards only.",
        repos: [
          { repo: "bsv-blockchain/go-sdk", sha: "def5678", package: "go-sdk", language: "go", role: "sdk" },
        ],
      }),
    );

    await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [SDK_REPO],
      allowRefresh: true,
      fetch: tarballResponder("ts-sdk-abc1234.tar.gz"),
    });

    const manifest = readCard<ManifestCard>(tier0Root, "manifest.json");
    expect(manifest.repos.map((row) => row.repo)).toEqual(["bsv-blockchain/ts-sdk"]);
    expect(manifest.policy).toBe("Committed cards only.");
    expect(readCard<{ packages: string[] }>(tier0Root, "packages.json").packages).toEqual([
      "@bsv/sdk",
    ]);
  });

  it("refuses to write either card when the existing manifest.json is corrupt", async () => {
    const tier0Root = freshTier0();
    mkdirSync(tier0Root, { recursive: true });
    writeFileSync(
      join(tier0Root, "packages.json"),
      JSON.stringify({ revision: "old", packages: ["@bsv/sdk"] }),
    );
    writeFileSync(join(tier0Root, "manifest.json"), JSON.stringify({ repos: "not-an-array" }));

    await expect(
      refreshTier0({
        root: ROOT,
        tier0Root,
        repos: [SDK_REPO],
        allowRefresh: true,
        fetch: tarballResponder("ts-sdk-abc1234.tar.gz"),
      }),
    ).rejects.toThrow(/corrupt/);

    expect(readCard<{ revision: string }>(tier0Root, "packages.json").revision).toBe("old");
  });

  it("refuses to run when the existing packages.json is corrupt", async () => {
    const tier0Root = freshTier0();
    mkdirSync(tier0Root, { recursive: true });
    writeFileSync(
      join(tier0Root, "packages.json"),
      JSON.stringify({ revision: "old", packages: { "@bsv/sdk": true } }),
    );

    await expect(
      refreshTier0({
        root: ROOT,
        tier0Root,
        repos: [SDK_REPO],
        allowRefresh: true,
        fetch: tarballResponder("ts-sdk-abc1234.tar.gz"),
      }),
    ).rejects.toThrow(/corrupt/);

    expect(readCard<{ revision: string }>(tier0Root, "packages.json").revision).toBe("old");
    expect(existsSync(join(tier0Root, "manifest.json"))).toBe(false);
  });

  it("labels a Go module by the last path segment of its module line", async () => {
    const tier0Root = freshTier0();
    const result = await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [
        { repo: "bsv-blockchain/go-sdk", sha: "def5678", package: null, language: "go", role: "sdk" },
      ],
      allowRefresh: true,
      fetch: tarballResponder("go-sdk-def5678.tar.gz"),
    });

    expect(result.packages).toEqual(["go-sdk"]);
    expect(result.packages).not.toContain("github.com/bsv-blockchain/go-sdk");
  });

  it("resolves a null SHA once and pins it into the manifest", async () => {
    const tier0Root = freshTier0();
    const head = "0123456789abcdef0123456789abcdef01234567";
    const tarball = readFileSync(join(TARBALLS, "ts-sdk-abc1234.tar.gz"));
    const seen: string[] = [];
    const fetch = (async (url: string | URL) => {
      const href = String(url);
      seen.push(href);
      if (href.startsWith("https://api.github.com/")) {
        return new Response(JSON.stringify({ sha: head }), {
          headers: { "content-type": "application/json" },
        });
      }
      return new Response(new Uint8Array(tarball));
    }) as typeof fetch;

    await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [{ ...SDK_REPO, sha: null }],
      allowRefresh: true,
      fetch,
    });

    expect(seen[0]).toBe("https://api.github.com/repos/bsv-blockchain/ts-sdk/commits/HEAD");
    expect(seen[1]).toBe(`https://codeload.github.com/bsv-blockchain/ts-sdk/tar.gz/${head}`);
    const manifest = JSON.parse(readFileSync(join(tier0Root, "manifest.json"), "utf8")) as {
      repos: Array<{ repo: string; sha: string | null; package: string | null }>;
    };
    expect(manifest.repos[0]?.sha).toBe(head);
    expect(manifest.repos[0]?.package).toBe("@bsv/sdk");
  });

  it("copies ts-stack specs into the Tier 0 card set", async () => {
    const tier0Root = freshTier0();
    await refreshTier0({
      root: ROOT,
      tier0Root,
      repos: [
        {
          repo: "bsv-blockchain/ts-stack",
          sha: "9f3c1a2",
          package: null,
          language: "ts",
          role: "specs",
        },
      ],
      allowRefresh: true,
      fetch: tarballResponder("ts-stack-9f3c1a2.tar.gz"),
    });

    expect(readFileSync(join(tier0Root, "specs", "errors.md"), "utf8")).toContain("ERR_WIDGET");
    expect(existsSync(join(tier0Root, "specs", "wallet.openapi.yaml"))).toBe(true);
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
    const fetch = tarballResponder("empty.tar.gz");

    await expect(
      refreshTier0({
        root: ROOT,
        tier0Root,
        repos: [SDK_REPO],
        allowRefresh: true,
        fetch,
      }),
    ).rejects.toThrow(/80%/);

    const kept = JSON.parse(readFileSync(join(tier0Root, "packages.json"), "utf8")) as {
      revision: string;
    };
    expect(kept.revision).toBe("old");
  });

  it("pins BRC bodies from the standards checkout, keyed by number", async () => {
    const root = freshRoot();
    const result = await refreshTier0({
      root,
      tier0Root: freshTier0(),
      repos: [BRCS_REPO],
      allowRefresh: true,
      fetch: tarballResponder("brcs-1a2b3c4.tar.gz"),
    });

    expect(result.brcs).toBe(2);
    const brcsDir = join(root, "reference", "brcs");
    expect(readFileSync(join(brcsDir, "0062.md"), "utf8")).toContain(
      "MUST begin with the magic prefix",
    );
    expect(readFileSync(join(brcsDir, "0100.md"), "utf8")).toContain(
      "Wallet-to-Application Interface",
    );
    // The repo README is not a numbered BRC body and must not be pinned as one.
    expect(existsSync(join(brcsDir, "README.md"))).toBe(false);

    const manifest = JSON.parse(readFileSync(join(brcsDir, "manifest.json"), "utf8")) as {
      count: number;
      sources: Array<{ repo: string; sha: string }>;
      files: Record<string, string>;
    };
    expect(manifest.count).toBe(2);
    expect(manifest.sources).toEqual([{ repo: "bsv-blockchain/BRCs", sha: "1a2b3c4" }]);
    expect(Object.keys(manifest.files).sort()).toEqual(["0062.md", "0100.md"]);
    expect(manifest.files["0062.md"]).toMatch(/^[0-9a-f]{64}$/);

    // The catalogue is regenerated from the same checkout, so the index can never lag the
    // pinned bodies (a stale hand-built index once hid every BRC merged after the pin).
    const index = JSON.parse(readFileSync(join(root, "reference", "brc_index.json"), "utf8")) as {
      revision: string;
      count: number;
      by_category: Record<string, number>;
      brcs: Array<{
        number: number;
        id: string;
        title: string;
        category: string;
        path: string;
        authority: number;
      }>;
    };
    expect(index.revision).toBe("1a2b3c4");
    expect(index.count).toBe(2);
    expect(index.by_category).toEqual({ transactions: 1, wallet: 1 });
    expect(index.brcs).toEqual([
      {
        number: 62,
        id: "BRC-62",
        title: "Background Evaluation Extended Format (BEEF)",
        category: "transactions",
        path: "transactions/0062.md",
        raw_url: "https://raw.githubusercontent.com/bsv-blockchain/BRCs/master/transactions/0062.md",
        html_url: "https://github.com/bsv-blockchain/BRCs/blob/master/transactions/0062.md",
        in_tree: true,
        authority: 1,
        implementations: [],
        education_themes: [],
      },
      {
        number: 100,
        id: "BRC-100",
        title: "Wallet-to-Application Interface",
        category: "wallet",
        path: "wallet/0100.md",
        raw_url: "https://raw.githubusercontent.com/bsv-blockchain/BRCs/master/wallet/0100.md",
        html_url: "https://github.com/bsv-blockchain/BRCs/blob/master/wallet/0100.md",
        in_tree: true,
        authority: 1,
        implementations: [],
        education_themes: [],
      },
    ]);
  });

  it("merges vector args/result pairs into one card per case", async () => {
    const root = freshRoot();
    const tier0Root = freshTier0();
    const result = await refreshTier0({
      root,
      tier0Root,
      repos: [VECTORS_REPO],
      allowRefresh: true,
      fetch: tarballResponder("vectors-5e6f7a8.tar.gz"),
    });

    expect(result.vectors).toBe(2);
    const card = JSON.parse(
      readFileSync(join(tier0Root, "vectors", "brc100", "doThing-simple.json"), "utf8"),
    ) as {
      domain: string;
      case: string;
      source: string;
      args: { input: string };
      result: { accepted: boolean };
    };
    expect(card.domain).toBe("brc100");
    expect(card.case).toBe("doThing-simple");
    expect(card.source).toBe("bsv-blockchain/universal-test-vectors@5e6f7a8");
    expect(card.args.input).toBe("hello");
    expect(card.result.accepted).toBe(true);
    // Root-level tooling manifests are not vectors.
    expect(existsSync(join(tier0Root, "vectors", "package.json"))).toBe(false);
  });

  it("refuses to collapse the BRC body set below 80% of the committed corpus", async () => {
    const root = freshRoot();
    const brcsDir = join(root, "reference", "brcs");
    mkdirSync(brcsDir, { recursive: true });
    for (let n = 0; n < 60; n += 1) {
      writeFileSync(join(brcsDir, `${String(n).padStart(4, "0")}.md`), `committed body ${n}`);
    }

    await expect(
      refreshTier0({
        root,
        tier0Root: freshTier0(),
        repos: [BRCS_REPO],
        allowRefresh: true,
        fetch: tarballResponder("brcs-1a2b3c4.tar.gz"),
      }),
    ).rejects.toThrow(/80%/);

    expect(readFileSync(join(brcsDir, "0001.md"), "utf8")).toBe("committed body 1");
  });

  it("refuses to collapse the vector set below 80% of the committed corpus", async () => {
    const root = freshRoot();
    const tier0Root = freshTier0();
    const vectorsDir = join(tier0Root, "vectors", "brc100");
    mkdirSync(vectorsDir, { recursive: true });
    for (let n = 0; n < 12; n += 1) {
      writeFileSync(join(vectorsDir, `case-${n}.json`), "{}");
    }

    await expect(
      refreshTier0({
        root,
        tier0Root,
        repos: [VECTORS_REPO],
        allowRefresh: true,
        fetch: tarballResponder("vectors-5e6f7a8.tar.gz"),
      }),
    ).rejects.toThrow(/80%/);

    expect(existsSync(join(vectorsDir, "case-0.json"))).toBe(true);
  });

  it("leaves the committed BRC bodies untouched when no standards repo is pinned", async () => {
    const root = freshRoot();
    const brcsDir = join(root, "reference", "brcs");
    mkdirSync(brcsDir, { recursive: true });
    writeFileSync(join(brcsDir, "0062.md"), "committed body");

    const result = await refreshTier0({
      root,
      tier0Root: freshTier0(),
      repos: [SDK_REPO],
      allowRefresh: true,
      fetch: tarballResponder("ts-sdk-abc1234.tar.gz"),
    });

    expect(result.brcs).toBe(0);
    expect(result.vectors).toBe(0);
    expect(readFileSync(join(brcsDir, "0062.md"), "utf8")).toBe("committed body");
  });
});
