import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  fetchPatentCorpus,
  writePatentIndex,
  writeThinSummaryCards,
  type PatentIndex,
} from "./ingest/fetchPatents.js";

/**
 * Offline patent-corpus snapshot entry point (EPO-first; see reference/patents/fetch-recipe.md).
 * Refuses to run unless BSV_AIO_ALLOW_REFRESH=1, so the query path (which never imports this
 * module) can never trigger a fetch. Resumable: existing family files are skipped. Run from
 * `server/`:
 *
 *   BSV_AIO_ALLOW_REFRESH=1 npm run fetch:patents
 */
async function main(): Promise<void> {
  if (process.env.BSV_AIO_ALLOW_REFRESH !== "1") {
    throw new Error(
      "Patent corpus fetch is an explicit offline job. Re-run with BSV_AIO_ALLOW_REFRESH=1. The query path serves committed cards and never fetches.",
    );
  }
  const root = resolve(process.cwd(), "..");
  const indexPath = resolve(root, "reference/patents/patent_index.json");
  const index = JSON.parse(readFileSync(indexPath, "utf8")) as PatentIndex;
  const result = await fetchPatentCorpus(root, index, fetch, {
    onProgress: (message) => console.log(message),
  });
  writePatentIndex(root, index);
  const thin = writeThinSummaryCards(root, index);
  console.log(
    `Patent snapshot complete: ${result.fetched} fetched, ${result.skippedExisting} already present, ` +
      `${result.noEpMember} without EP member (deferred), ${result.biblioOnly} biblio-only, ` +
      `${result.identityFailures.length} identity failures, ${result.httpFailures.length} HTTP failures. ` +
      `${thin.length} thin summary cards written.`,
  );
  if (result.identityFailures.length > 0) {
    console.log("Identity failures (investigate before trusting the snapshot):");
    for (const failure of result.identityFailures) {
      console.log(`  ${failure}`);
    }
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
