import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const SCHEMA_PATH = join(dirname(fileURLToPath(import.meta.url)), "schema.sql");

export function openDatabase(dbPath: string): DatabaseSync {
  if (dbPath !== ":memory:") {
    mkdirSync(dirname(dbPath), { recursive: true });
  }
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(readFileSync(SCHEMA_PATH, "utf8"));
  return db;
}

/**
 * Query-only handle for the serving path: after ingest the server needs no writes, and a
 * read-only connection makes a write through the tool surface physically impossible.
 */
export function openDatabaseReadonly(dbPath: string): DatabaseSync {
  return new DatabaseSync(dbPath, { readOnly: true });
}
