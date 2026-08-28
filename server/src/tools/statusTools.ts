import {
  hashSnapshotSet,
  missingSnapshots,
  readBrcIndexMeta,
  snapshotFetchedAt,
} from "../ingest/indexManifest.js";
import type { KnowledgeStore } from "../store/knowledgeStore.js";
import { POLICY_VERSION, type IndexStatus } from "../types.js";

export function buildIndexStatus(root: string, store?: KnowledgeStore): IndexStatus {
  const missing = missingSnapshots(root);
  const brc = readBrcIndexMeta(root);
  return {
    status: missing.length === 0 ? "ready" : "stale",
    sha: hashSnapshotSet(root),
    brc_revision: brc.revision,
    fetched_at: snapshotFetchedAt(root, brc.generated),
    counts: {
      brcs: metaCount(store, "count.brcs") ?? brc.count,
      essays: metaCount(store, "count.essays") ?? 0,
      education: metaCount(store, "count.education") ?? 0,
      packages: store?.countByIdPrefix("package:") ?? 0,
    },
    policy_version: POLICY_VERSION,
  };
}

function metaCount(store: KnowledgeStore | undefined, key: string): number | undefined {
  const raw = store?.getMeta(key);
  if (raw === undefined) {
    return undefined;
  }
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) ? n : undefined;
}
