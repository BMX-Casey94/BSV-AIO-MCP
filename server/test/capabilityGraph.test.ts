import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { tokenMatchesName, writeCapabilityGraph } from "../src/ingest/capabilityGraph.js";

const ROOT = resolve(import.meta.dirname, "../..");
const GRAPH_PATH = resolve(ROOT, "reference", "capability_graph.json");
const FOUR_TIER0_PACKAGES = ["@bsv/sdk", "@bsv/wallet-toolbox", "go-sdk", "go-wallet-toolbox"];

type CapabilityRow = {
  id?: unknown;
  name?: unknown;
  brc?: unknown;
  also?: unknown;
  packages?: unknown;
  api?: unknown;
  education_themes?: unknown;
  authority_hint?: unknown;
};

function loadRows(): { text: string; rows: CapabilityRow[] } {
  expect(existsSync(GRAPH_PATH), "reference/capability_graph.json must exist").toBe(true);
  const text = readFileSync(GRAPH_PATH, "utf8");
  const parsed = JSON.parse(text) as unknown;
  const rows = Array.isArray(parsed)
    ? parsed
    : parsed && typeof parsed === "object" && Array.isArray((parsed as { capabilities?: unknown }).capabilities)
      ? (parsed as { capabilities: CapabilityRow[] }).capabilities
      : [];
  expect(rows.length).toBeGreaterThan(0);
  return { text, rows };
}

describe("capability_graph.json", () => {
  it("fills BRC-62 packages from confirmed cards and still forbids invented APIs", () => {
    writeCapabilityGraph(ROOT);
    const { text, rows } = loadRows();
    expect(text).not.toContain("PeerPayClient");
    expect(text).not.toContain("createPayment");
    expect(text).not.toContain("serialiseEnvelope");
    const beef = rows.find((row) => row.brc === "BRC-62");
    expect(beef).toBeDefined();
    expect(beef?.id).toBe("brc-62-beef");
    expect(String(beef?.name)).toMatch(/Background Evaluation Extended Format/i);
    expect(beef?.also).toEqual(expect.arrayContaining(["BRC-95", "BRC-96"]));
    expect(beef?.packages).toEqual(expect.arrayContaining(["@bsv/sdk", "go-sdk"]));
    expect(Array.isArray(beef?.education_themes)).toBe(true);
    expect(beef?.authority_hint).toBe(1);
    const api = Array.isArray(beef?.api) ? beef.api : [];
    for (const name of api) {
      expect(typeof name).toBe("string");
      expect(name).not.toMatch(/PeerPay|createPayment|serialiseEnvelope/);
    }
  });

  it("does not attach all four packages to BRC-30 from the short ef token", () => {
    const { rows } = loadRows();
    const ef = rows.find((row) => row.brc === "BRC-30");
    expect(ef).toBeDefined();
    const pkgs = Array.isArray(ef?.packages) ? [...ef.packages].sort() : [];
    expect(pkgs).not.toEqual([...FOUR_TIER0_PACKAGES].sort());
    // @bsv/sdk may appear: its own snapshotted docs cite BRC-30, an evidenced edge. The
    // toolboxes cite no BRC-30, so the spurious short "ef" token must still not attach them.
    expect(pkgs.includes("@bsv/wallet-toolbox")).toBe(false);
    expect(pkgs.includes("go-wallet-toolbox")).toBe(false);
  });

  it("still confirms BRC-62 packages from Beef at a name boundary", () => {
    const { rows } = loadRows();
    const beef = rows.find((row) => row.brc === "BRC-62");
    expect(beef?.packages).toEqual(expect.arrayContaining(["@bsv/sdk", "go-sdk"]));
  });

  it("never lists an api name that is absent from symbols.json", () => {
    const confirmed = new Set<string>();
    for (const tier of ["tier0", "tier1"]) {
      const path = resolve(ROOT, "reference", tier, "symbols.json");
      if (!existsSync(path)) {
        continue;
      }
      const symbols = JSON.parse(readFileSync(path, "utf8"));
      for (const row of symbols.symbols ?? []) {
        confirmed.add(row.name);
      }
    }
    const { rows } = loadRows();
    for (const row of rows) {
      for (const name of Array.isArray(row.api) ? row.api : []) {
        expect(confirmed.has(name), `${row.brc} api ${name}`).toBe(true);
      }
    }
  });

  it("never lists a package that is absent from every tier's packages.json", () => {
    const confirmed = new Set<string>();
    for (const tier of ["tier0", "tier1"]) {
      const path = resolve(ROOT, "reference", tier, "packages.json");
      if (!existsSync(path)) {
        continue;
      }
      const card = JSON.parse(readFileSync(path, "utf8"));
      for (const name of card.packages ?? []) {
        confirmed.add(name);
      }
    }
    const { rows } = loadRows();
    for (const row of rows) {
      for (const name of Array.isArray(row.packages) ? row.packages : []) {
        expect(confirmed.has(name), `${row.brc} package ${name}`).toBe(true);
      }
    }
  });
});

describe("tokenMatchesName", () => {
  it("matches beef at the start and at a camelCase boundary, not ef inside Beef", () => {
    expect(tokenMatchesName("Beef", "beef")).toBe(true);
    expect(tokenMatchesName("NewBeef", "beef")).toBe(true);
    expect(tokenMatchesName("MergeBeefTx", "beef")).toBe(true);
    expect(tokenMatchesName("Beef", "ef")).toBe(false);
    expect(tokenMatchesName("EF", "ef")).toBe(true);
  });
});
