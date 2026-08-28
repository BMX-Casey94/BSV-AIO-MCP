import { resolve } from "node:path";
import { fetchAcademyDocs, writeAcademySnapshot } from "./ingest/fetchAcademyDocs.js";

/**
 * Offline academy/Rúnar-docs snapshot entry point. Refuses to run unless CSW_ALLOW_REFRESH=1,
 * so the query path (which never imports this module) can never trigger a fetch. Run from `server/`:
 *
 *   CSW_ALLOW_REFRESH=1 npm run fetch:academy
 */
async function main(): Promise<void> {
  if (process.env.CSW_ALLOW_REFRESH !== "1") {
    throw new Error(
      "Academy docs fetch is an explicit offline job. Re-run with CSW_ALLOW_REFRESH=1. The query path serves committed cards and never fetches.",
    );
  }
  const root = resolve(process.cwd(), "..");
  const result = await fetchAcademyDocs(fetch);
  const { written } = writeAcademySnapshot(root, result);
  console.log(`Academy snapshot complete: ${written} pages written under reference/academy/.`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
