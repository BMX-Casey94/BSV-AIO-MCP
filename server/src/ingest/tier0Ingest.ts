import { existsSync, lstatSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { KnowledgeStore, StoredDocument } from "../store/knowledgeStore.js";
import type { Language } from "../types.js";

export type Tier0Pin = {
  revision: string;
  fetched_at: string;
};

export type Tier0IngestResult = {
  packages: number;
  symbols: number;
  documents: number;
};

type PackagesCard = {
  revision?: unknown;
  packages?: unknown;
};

type SymbolsCard = {
  revision?: unknown;
  symbols?: unknown;
};

type SymbolCardRow = {
  name?: unknown;
  repo?: unknown;
  package?: unknown;
  language?: unknown;
  kind?: unknown;
  locator?: unknown;
  exported?: unknown;
};

const LANGUAGES: readonly Language[] = ["spec", "ts", "go", "py", "prose"];

export function ingestTier0Cards(
  tier0Root: string,
  store: KnowledgeStore,
  pin: Tier0Pin,
): Tier0IngestResult {
  const packages = packageDocuments(tier0Root, pin);
  const symbols = symbolDocuments(tier0Root, pin);
  const specs = specDocuments(tier0Root, pin);
  const vectors = vectorDocuments(tier0Root, pin);

  for (const doc of [...packages, ...symbols, ...specs, ...vectors]) {
    store.insertDocument(doc);
  }

  return {
    packages: packages.length,
    symbols: symbols.length,
    documents: packages.length + symbols.length + specs.length + vectors.length,
  };
}

function packageDocuments(tier0Root: string, pin: Tier0Pin): StoredDocument[] {
  const card = readCard<PackagesCard>(join(tier0Root, "packages.json"));
  if (!card) {
    return [];
  }
  const revision = cardRevision(card.revision, pin);
  const names = Array.isArray(card.packages) ? card.packages : [];
  const seen = new Set<string>();
  const out: StoredDocument[] = [];
  for (const raw of names) {
    const name = typeof raw === "string" ? raw.trim() : "";
    if (!name || seen.has(name)) {
      continue;
    }
    seen.add(name);
    out.push({
      id: `package:${name}`,
      kind: "doc",
      authority: 2,
      title: `Tier 0 package: ${name}`,
      locator: `reference/tier0/packages.json#${name}`,
      revision,
      fetched_at: pin.fetched_at,
      network: "any",
      language: "prose",
      era: null,
      body: `${name} is a confirmed Tier 0 package. The name is read from the repository's own package manifest during refresh, never from prose or a successor map.`,
    });
  }
  return out;
}

function symbolDocuments(tier0Root: string, pin: Tier0Pin): StoredDocument[] {
  const card = readCard<SymbolsCard>(join(tier0Root, "symbols.json"));
  if (!card) {
    return [];
  }
  const revision = cardRevision(card.revision, pin);
  const rows = Array.isArray(card.symbols) ? (card.symbols as SymbolCardRow[]) : [];
  const seen = new Set<string>();
  const out: StoredDocument[] = [];
  for (const row of rows) {
    const name = stringField(row.name);
    const repo = stringField(row.repo);
    if (!name || !repo || row.exported === false) {
      continue;
    }
    const shortRepo = repo.split("/").pop() ?? repo;
    const id = `symbol:${shortRepo}:${name}`;
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    const packageName = stringField(row.package);
    const symbolKind = stringField(row.kind) || "symbol";
    const sourceLocator = stringField(row.locator);
    const symbolLanguage = language(row.language);
    const symbolCard = {
      id,
      name,
      repo,
      package: packageName,
      language: symbolLanguage,
      kind: symbolKind,
      exported: true,
      locator: sourceLocator,
      revision,
    };
    out.push({
      id,
      kind: "symbol",
      authority: 2,
      title: `${name} — exported ${symbolKind} in ${packageName || shortRepo}`,
      locator: sourceLocator ? `${repo}/${sourceLocator}` : `symbol://${shortRepo}/${name}`,
      revision,
      fetched_at: pin.fetched_at,
      network: "any",
      language: symbolLanguage,
      era: null,
      body: JSON.stringify(symbolCard, null, 2),
    });
  }
  return out;
}

function specDocuments(tier0Root: string, pin: Tier0Pin): StoredDocument[] {
  const out: StoredDocument[] = [];
  for (const rel of listCardFiles(join(tier0Root, "specs"))) {
    const text = readFileSync(join(tier0Root, "specs", ...rel.split("/")), "utf8");
    out.push({
      id: `spec:ts-stack:${rel}`,
      kind: "doc",
      authority: 3,
      title: firstHeading(text) ?? `ts-stack contract: ${rel}`,
      locator: `spec://ts-stack/${rel}`,
      revision: pin.revision,
      fetched_at: pin.fetched_at,
      network: "any",
      language: "spec",
      era: null,
      body: text,
    });
  }
  return out;
}

function vectorDocuments(tier0Root: string, pin: Tier0Pin): StoredDocument[] {
  const out: StoredDocument[] = [];
  for (const rel of listCardFiles(join(tier0Root, "vectors"))) {
    const text = readFileSync(join(tier0Root, "vectors", ...rel.split("/")), "utf8");
    out.push({
      id: `vector:${rel.replaceAll("/", ":")}`,
      kind: "test",
      authority: 0,
      title: `Conformance vector: ${rel}`,
      locator: `vector://${rel}`,
      revision: pin.revision,
      fetched_at: pin.fetched_at,
      network: "any",
      language: "spec",
      era: null,
      body: text,
    });
  }
  return out;
}

function readCard<T>(abs: string): T | undefined {
  if (!existsSync(abs)) {
    return undefined;
  }
  return JSON.parse(readFileSync(abs, "utf8")) as T;
}

function cardRevision(value: unknown, pin: Tier0Pin): string {
  const revision = stringField(value);
  return revision || pin.revision;
}

function stringField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function language(value: unknown): Language {
  const candidate = stringField(value);
  return LANGUAGES.find((known) => known === candidate) ?? "prose";
}

function listCardFiles(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }
  return readdirSync(dir, { recursive: true, encoding: "utf8" })
    .map((name) => name.replaceAll("\\", "/"))
    .filter((rel) => !rel.split("/").some((segment) => segment.startsWith(".")))
    .filter((rel) => lstatSync(join(dir, ...rel.split("/")), { throwIfNoEntry: false })?.isFile() === true)
    .sort();
}

function firstHeading(text: string): string | undefined {
  const match = /^#\s+(.+)$/m.exec(text);
  return match?.[1]?.trim();
}
