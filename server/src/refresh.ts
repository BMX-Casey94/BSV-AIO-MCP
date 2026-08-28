import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { defaultConfig } from "./config.js";
import { refreshTier0, type Tier0RepoPin } from "./ingest/refreshTier0.js";

/**
 * Offline Tier 0 refresh entry point. Refuses to run unless CSW_ALLOW_REFRESH=1, so the
 * query path (which never imports this module) can never trigger a fetch. Run from `server/`:
 *
 *   CSW_ALLOW_REFRESH=1 npm run refresh:tier0
 */
async function main(): Promise<void> {
  if (process.env.CSW_ALLOW_REFRESH !== "1") {
    throw new Error(
      "Tier 0 refresh is an explicit offline job. Re-run with CSW_ALLOW_REFRESH=1. The query path serves committed cards and never fetches.",
    );
  }
  const config = defaultConfig(resolve(process.cwd(), ".."));
  const manifestPath = join(config.tier0Root, "manifest.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as { repos?: Tier0RepoPin[] };
  const repos = Array.isArray(manifest.repos) ? manifest.repos : [];
  if (repos.length === 0) {
    throw new Error(`Tier 0 manifest ${manifestPath} lists no repositories to refresh.`);
  }
  const result = await refreshTier0({
    root: config.root,
    tier0Root: config.tier0Root,
    repos,
    allowRefresh: true,
    fetch,
  });
  console.log(
    `Tier 0 refresh complete: ${result.repos} repos, ${result.packages.length} packages (${result.packages.join(", ")}).`,
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
