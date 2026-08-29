import { existsSync, lstatSync, readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";
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

type TierManifest = {
  repos?: unknown;
};

type TierManifestRow = {
  repo?: unknown;
  package?: unknown;
  role?: unknown;
  status?: unknown;
  successor?: unknown;
};

type DocsManifest = {
  files?: unknown;
};

type DocsManifestEntry = {
  sha256?: unknown;
  example?: unknown;
};

const LANGUAGES: readonly Language[] = ["spec", "ts", "go", "py", "prose"];

export function ingestTier0Cards(
  tier0Root: string,
  store: KnowledgeStore,
  pin: Tier0Pin,
): Tier0IngestResult {
  return ingestRepoCards(tier0Root, store, pin, "Tier 0");
}

/**
 * Ingests one tier's committed card set: package labels, scanned symbols, specs/vectors when the
 * tier carries them (Tier 0 only), and the repo-docs snapshot (README/docs as doc cards,
 * examples/templates as example cards). `tierLabel` is the human tier name in card prose.
 */
export function ingestRepoCards(
  tierRoot: string,
  store: KnowledgeStore,
  pin: Tier0Pin,
  tierLabel: string,
): Tier0IngestResult {
  const packages = packageDocuments(tierRoot, pin, tierLabel);
  const symbols = symbolDocuments(tierRoot, pin);
  const specs = specDocuments(tierRoot, pin);
  const vectors = vectorDocuments(tierRoot, pin);
  const repoDocs = repoDocDocuments(tierRoot, pin);

  for (const doc of [...packages, ...symbols, ...specs, ...vectors, ...repoDocs]) {
    store.insertDocument(doc);
  }

  return {
    packages: packages.length,
    symbols: symbols.length,
    documents: packages.length + symbols.length + specs.length + vectors.length + repoDocs.length,
  };
}

function packageDocuments(tierRoot: string, pin: Tier0Pin, tierLabel: string): StoredDocument[] {
  const card = readCard<PackagesCard>(join(tierRoot, "packages.json"));
  if (!card) {
    return [];
  }
  const revision = cardRevision(card.revision, pin);
  const names = Array.isArray(card.packages) ? card.packages : [];
  const provenance = packageProvenance(tierRoot);
  const seen = new Set<string>();
  const out: StoredDocument[] = [];
  for (const raw of names) {
    const name = typeof raw === "string" ? raw.trim() : "";
    if (!name || seen.has(name)) {
      continue;
    }
    seen.add(name);
    const source = provenance.get(name);
    const from = source ? ` from ${source.repo} (${source.role})` : "";
    const archived =
      source?.status === "archived"
        ? ` Archived upstream${source.successor ? `; current development continues at ${source.successor}` : ""}.`
        : "";
    out.push({
      id: `package:${name}`,
      kind: "doc",
      authority: 2,
      title: `${tierLabel} package: ${name}`,
      locator: `reference/${basename(tierRoot)}/packages.json#${name}`,
      revision,
      fetched_at: pin.fetched_at,
      network: "any",
      language: "prose",
      era: null,
      body: `${name} is a confirmed ${tierLabel} package${from}.${archived} The name is read from the repository's own package manifest during refresh, never from prose or a successor map.`,
    });
  }
  return out;
}

/** package name → {repo, role, status, successor} from the tier manifest, so cards carry their provenance. */
function packageProvenance(
  tierRoot: string,
): Map<string, { repo: string; role: string; status: string; successor: string }> {
  const card = readCard<TierManifest>(join(tierRoot, "manifest.json"));
  const out = new Map<string, { repo: string; role: string; status: string; successor: string }>();
  const rows = Array.isArray(card?.repos) ? (card?.repos as TierManifestRow[]) : [];
  for (const row of rows) {
    const name = stringField(row.package);
    const repo = stringField(row.repo);
    if (name && repo) {
      out.set(name, {
        repo,
        role: stringField(row.role),
        status: stringField(row.status),
        successor: stringField(row.successor),
      });
    }
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

/**
 * The repo-docs snapshot: one card per snapshotted file. README/`docs/**` become doc cards
 * (authority 2, the project's own words about itself); `examples/**` and template sources become
 * example cards (authority 3, illustrative rather than normative). The docs manifest carries the
 * per-file example flag written at refresh time; the path heuristic is only a fallback.
 */
function repoDocDocuments(tierRoot: string, pin: Tier0Pin): StoredDocument[] {
  const docsRoot = join(tierRoot, "docs");
  const manifest = readCard<DocsManifest>(join(docsRoot, "manifest.json"));
  const flags = new Map<string, boolean>();
  if (manifest && manifest.files && typeof manifest.files === "object") {
    for (const [rel, entry] of Object.entries(manifest.files as Record<string, DocsManifestEntry>)) {
      flags.set(rel, entry?.example === true);
    }
  }
  const out: StoredDocument[] = [];
  for (const rel of listCardFiles(docsRoot)) {
    const segments = rel.split("/");
    if (segments.length < 2) {
      continue; // docs/manifest.json and docs/brc-mentions.json are metadata, not cards
    }
    const shortRepo = segments[0] ?? "";
    const path = segments.slice(1).join("/");
    const example = flags.get(rel) ?? /^examples?\//i.test(path);
    const text = readFileSync(join(docsRoot, ...segments), "utf8");
    const kind = example ? "example" : "doc";
    out.push({
      id: `${kind}:${shortRepo}:${path}`,
      kind,
      authority: example ? 3 : 2,
      title: firstHeading(text) ?? `${shortRepo}: ${path}`,
      locator: `repo://${shortRepo}/${path}`,
      revision: pin.revision,
      fetched_at: pin.fetched_at,
      network: "any",
      language: example ? exampleLanguage(path) : "prose",
      era: null,
      body: text,
    });
  }
  return out;
}

function exampleLanguage(path: string): Language {
  const ext = path.slice(path.lastIndexOf(".")).toLowerCase();
  if (ext === ".ts" || ext === ".tsx" || ext === ".mts" || ext === ".cts" || ext === ".js" || ext === ".jsx") {
    return "ts";
  }
  if (ext === ".go") {
    return "go";
  }
  if (ext === ".py") {
    return "py";
  }
  return "prose";
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
