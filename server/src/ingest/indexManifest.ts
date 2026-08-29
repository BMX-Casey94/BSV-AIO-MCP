import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

export const SNAPSHOT_RELATIVE_PATHS = [
  "reference/brc_index.json",
  "data/education_index.json",
  "substack-articles/contradictions.json",
  "reference/testnet-ops.md",
  "reference/ordinality-rules.md",
  "reference/deny-list.json",
  "reference/tier0/manifest.json",
  "reference/tier0/packages.json",
  "reference/tier0/symbols.json",
  "reference/tier0/docs/manifest.json",
  "reference/tier0/docs/brc-mentions.json",
  "reference/tier1/manifest.json",
  "reference/tier1/packages.json",
  "reference/tier1/symbols.json",
  "reference/tier1/docs/manifest.json",
  "reference/tier1/docs/brc-mentions.json",
  "reference/academy/manifest.json",
  "reference/brcs/manifest.json",
] as const;

export type BrcIndexMeta = {
  revision: string;
  count: number;
  generated?: string;
};

type BrcIndexFile = {
  revision?: unknown;
  count?: unknown;
  generated?: unknown;
  brcs?: unknown;
};

export function missingSnapshots(root: string): string[] {
  return SNAPSHOT_RELATIVE_PATHS.filter((rel) => !existsSync(join(root, rel)));
}

export function hashSnapshotSet(root: string): string {
  const hash = createHash("sha256");
  for (const rel of SNAPSHOT_RELATIVE_PATHS) {
    hash.update(rel);
    hash.update("\0");
    const abs = join(root, rel);
    if (existsSync(abs)) {
      hash.update(readFileSync(abs));
    } else {
      hash.update("MISSING");
    }
    hash.update("\0");
  }
  return hash.digest("hex");
}

export function readBrcIndexMeta(root: string): BrcIndexMeta {
  const raw = JSON.parse(readFileSync(join(root, "reference", "brc_index.json"), "utf8")) as BrcIndexFile;
  const countFromField = typeof raw.count === "number" ? raw.count : undefined;
  const countFromRows = Array.isArray(raw.brcs) ? raw.brcs.length : 0;
  const generated = typeof raw.generated === "string" ? raw.generated : undefined;
  return {
    revision: typeof raw.revision === "string" ? raw.revision : "",
    count: countFromField ?? countFromRows,
    ...(generated !== undefined ? { generated } : {}),
  };
}

export function snapshotFetchedAt(root: string, generated?: string): string {
  if (generated) {
    return generated;
  }
  return statSync(join(root, "reference", "brc_index.json")).mtime.toISOString();
}
