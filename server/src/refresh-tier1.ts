import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { defaultConfig } from "./config.js";
import { refreshTier0, type Tier0RepoPin } from "./ingest/refreshTier0.js";

/**
 * Offline Tier 1 refresh entry point. Same gated, all-or-nothing pipeline as Tier 0, pointed at
 * the Tier 1 manifest (critical services and libraries). Refuses to run unless
 * BSV_AIO_ALLOW_REFRESH=1 — the query path never imports this module. Run from `server/`:
 *
 *   BSV_AIO_ALLOW_REFRESH=1 npm run refresh:tier1
 */
async function main(): Promise<void> {
  if (process.env.BSV_AIO_ALLOW_REFRESH !== "1") {
    throw new Error(
      "Tier 1 refresh is an explicit offline job. Re-run with BSV_AIO_ALLOW_REFRESH=1. The query path serves committed cards and never fetches.",
    );
  }
  const config = defaultConfig(resolve(process.cwd(), ".."));
  const manifestPath = join(config.tier1Root, "manifest.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as { repos?: Tier0RepoPin[] };
  const repos = Array.isArray(manifest.repos) ? manifest.repos : [];
  if (repos.length === 0) {
    throw new Error(`Tier 1 manifest ${manifestPath} lists no repositories to refresh.`);
  }
  const result = await refreshTier0({
    root: config.root,
    tier0Root: config.tier1Root,
    repos,
    allowRefresh: true,
    fetch,
    label: "Tier 1",
  });
  console.log(
    `Tier 1 refresh complete: ${result.repos} repos, ${result.packages.length} packages (${result.packages.join(", ")}), ${result.docs} docs, ${result.examples} examples.`,
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
