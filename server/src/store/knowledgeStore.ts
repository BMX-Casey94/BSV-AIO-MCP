import type { DatabaseSync, StatementSync } from "node:sqlite";
import type { HitKind, Language, Network } from "../types.js";

export type StoredDocument = {
  id: string;
  kind: HitKind;
  authority: number;
  title: string;
  locator: string;
  revision: string;
  fetched_at: string;
  network: Network;
  language: Language;
  era: string | null;
  body: string;
};

export type FtsHit = {
  id: string;
  title: string;
  /** bm25 score with the title column weighted 10×; lower is a better match. */
  score?: number;
};

export type KnowledgeStore = {
  insertDocument(doc: StoredDocument): void;
  countByKind(kind: string): number;
  countByIdPrefix(prefix: string): number;
  getById(id: string): StoredDocument | undefined;
  getByLocator(locator: string): StoredDocument | undefined;
  ftsCount(): number;
  searchFts(query: string): FtsHit[];
  setMeta(key: string, value: string): void;
  getMeta(key: string): string | undefined;
  clearDocuments(): void;
  transaction<T>(fn: () => T): T;
  close(): void;
};

type DocumentRow = {
  id: string;
  kind: string;
  authority: number;
  title: string;
  locator: string;
  revision: string;
  fetched_at: string;
  network: string;
  language: string;
  era: string | null;
  body: string;
};

export function createKnowledgeStore(db: DatabaseSync): KnowledgeStore {
  const insertDoc: StatementSync = db.prepare(`
    INSERT INTO documents (
      id, kind, authority, title, locator, revision, fetched_at, network, language, era, body
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const insertFts: StatementSync = db.prepare(
    "INSERT INTO docs_fts (id, title, body, kind) VALUES (?, ?, ?, ?)",
  );
  const countKind: StatementSync = db.prepare(
    "SELECT COUNT(*) AS n FROM documents WHERE kind = ?",
  );
  const countIdPrefix: StatementSync = db.prepare(
    "SELECT COUNT(*) AS n FROM documents WHERE id LIKE ? || '%' ESCAPE '\\'",
  );
  const selectId: StatementSync = db.prepare(
    "SELECT id, kind, authority, title, locator, revision, fetched_at, network, language, era, body FROM documents WHERE id = ?",
  );
  const selectLocator: StatementSync = db.prepare(
    "SELECT id, kind, authority, title, locator, revision, fetched_at, network, language, era, body FROM documents WHERE locator = ?",
  );
  const countFts: StatementSync = db.prepare("SELECT COUNT(*) AS n FROM docs_fts");
  const matchFts: StatementSync = db.prepare(
    "SELECT id, title, bm25(docs_fts, 0.0, 10.0, 1.0, 0.0) AS score FROM docs_fts WHERE docs_fts MATCH ? ORDER BY score",
  );
  const upsertMeta: StatementSync = db.prepare(`
    INSERT INTO meta (key, value) VALUES (?, ?)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value
  `);
  const selectMeta: StatementSync = db.prepare("SELECT value FROM meta WHERE key = ?");

  let closed = false;

  return {
    insertDocument(doc) {
      insertDoc.run(
        doc.id,
        doc.kind,
        doc.authority,
        doc.title,
        doc.locator,
        doc.revision,
        doc.fetched_at,
        doc.network,
        doc.language,
        doc.era,
        doc.body,
      );
      insertFts.run(doc.id, doc.title, doc.body, doc.kind);
    },

    countByKind(kind) {
      const row = countKind.get(kind) as { n: number } | undefined;
      return row?.n ?? 0;
    },

    countByIdPrefix(prefix) {
      const row = countIdPrefix.get(escapeLikePrefix(prefix)) as { n: number } | undefined;
      return row?.n ?? 0;
    },

    getById(id) {
      return rowToDocument(selectId.get(id) as DocumentRow | undefined);
    },

    getByLocator(locator) {
      return rowToDocument(selectLocator.get(locator) as DocumentRow | undefined);
    },

    ftsCount() {
      const row = countFts.get() as { n: number } | undefined;
      return row?.n ?? 0;
    },

    searchFts(query) {
      return matchFts.all(query) as FtsHit[];
    },

    setMeta(key, value) {
      upsertMeta.run(key, value);
    },

    getMeta(key) {
      const row = selectMeta.get(key) as { value: string } | undefined;
      return row?.value;
    },

    clearDocuments() {
      db.exec("DELETE FROM documents;");
      db.exec("DELETE FROM docs_fts;");
    },

    transaction(fn) {
      db.exec("BEGIN");
      try {
        const result = fn();
        db.exec("COMMIT");
        return result;
      } catch (err) {
        db.exec("ROLLBACK");
        throw err;
      }
    },

    close() {
      if (closed) {
        return;
      }
      closed = true;
      db.close();
    },
  };
}

function escapeLikePrefix(prefix: string): string {
  return prefix.replaceAll("\\", "\\\\").replaceAll("%", "\\%").replaceAll("_", "\\_");
}

function rowToDocument(row: DocumentRow | undefined): StoredDocument | undefined {
  if (!row) {
    return undefined;
  }
  return {
    id: row.id,
    kind: row.kind as HitKind,
    authority: row.authority,
    title: row.title,
    locator: row.locator,
    revision: row.revision,
    fetched_at: row.fetched_at,
    network: row.network as Network,
    language: row.language as Language,
    era: row.era,
    body: row.body,
  };
}
