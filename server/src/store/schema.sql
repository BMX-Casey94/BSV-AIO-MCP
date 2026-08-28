CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS documents (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL,
  authority INTEGER NOT NULL,
  title TEXT NOT NULL,
  locator TEXT NOT NULL,
  revision TEXT NOT NULL,
  fetched_at TEXT NOT NULL,
  network TEXT NOT NULL DEFAULT 'any',
  language TEXT NOT NULL DEFAULT 'prose',
  era TEXT,
  body TEXT NOT NULL
);

CREATE VIRTUAL TABLE IF NOT EXISTS docs_fts USING fts5(
  id, title, body, kind, tokenize = 'porter unicode61'
);
