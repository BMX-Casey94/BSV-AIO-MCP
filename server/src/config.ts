import { tmpdir } from "node:os";
import { join } from "node:path";

export type ServerConfig = {
  root: string;
  dbPath: string;
  tier0Root: string;
};

/** The single derivation of the Tier 0 card root, so every plane reads one tree. */
export function tier0RootFor(root: string): string {
  return join(root, "reference", "tier0");
}

export function defaultConfig(root: string): ServerConfig {
  return {
    root,
    // The SQLite index is a rebuildable cache of the shipped snapshot. It defaults to the
    // per-user temp dir rather than the package tree: an npm/npx install must never write
    // into its own node_modules directory.
    dbPath: process.env.BSV_AIO_DB_PATH ?? join(tmpdir(), "bsv-aio-mcp", "knowledge.sqlite"),
    tier0Root: tier0RootFor(root),
  };
}
