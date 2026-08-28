import { existsSync, lstatSync, readFileSync, realpathSync } from "node:fs";
import { isAbsolute, join, relative, resolve } from "node:path";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { type ServerConfig, tier0RootFor } from "../config.js";
import {
  hashSnapshotSet,
  readBrcIndexMeta,
  snapshotFetchedAt,
} from "../ingest/indexManifest.js";
import type { KnowledgeStore, StoredDocument } from "../store/knowledgeStore.js";
import type { HitKind, Language, Network, TypedHit } from "../types.js";
import { resolveSpec, resolveVector } from "./codeTools.js";

export const SEARCH_DEFAULT_LIMIT = 20;
export const SEARCH_MAX_LIMIT = 100;

const HIT_KINDS = [
  "brc",
  "symbol",
  "test",
  "example",
  "doc",
  "essay",
  "principle",
  "wiki",
  "web",
  "live",
  "contradiction",
  "capability",
] as const satisfies readonly HitKind[];

const NETWORKS = ["any", "main", "test", "ttn", "tstn"] as const satisfies readonly Network[];
const LANGUAGES = ["spec", "ts", "go", "py", "prose"] as const satisfies readonly Language[];

export type SearchFilters = {
  kind?: HitKind[] | undefined;
  authority_max?: number | undefined;
  theme?: string | undefined;
  network?: Network | undefined;
  language?: Language | undefined;
  era?: string | undefined;
};

export type SearchKnowledgeResult = {
  hits: TypedHit[];
  totalCount: number;
};

export type GetResourceResult = {
  uri: string;
  text: string;
  hit: TypedHit;
};

export type ListContradictionsResult = {
  findings: unknown[];
};

type EducationEssay = {
  era?: unknown;
  slug?: unknown;
  title?: unknown;
  themes?: unknown;
  verdict?: unknown;
  education_file?: unknown;
  path?: unknown;
};

type EducationThemeIndex = {
  byLocator: Map<string, string[]>;
  byEssayKey: Map<string, string[]>;
  byTheme: Map<string, Array<{ locator: string; era: string; slug: string; title: string }>>;
};

type ContradictionFinding = {
  id?: unknown;
  topic?: unknown;
  nature?: unknown;
  position_a?: { claim?: unknown };
  position_b?: { claim?: unknown };
};

type WikiManifestRow = {
  page?: unknown;
  title?: unknown;
  file?: unknown;
};

const searchFiltersSchema = z
  .object({
    kind: z.array(z.enum(HIT_KINDS)).optional(),
    authority_max: z.number().int().min(0).max(5).optional(),
    theme: z.string().min(1).max(256).optional(),
    network: z.enum(NETWORKS).optional(),
    language: z.enum(LANGUAGES).optional(),
    era: z.string().min(1).max(256).optional(),
  })
  .strict();

export function registerKnowledgeTools(
  server: McpServer,
  config: ServerConfig,
  store: KnowledgeStore,
): void {
  const root = config.root;
  const themes = loadEducationThemes(root);
  const findings = loadContradictionFindings(root);

  server.tool(
    "search_knowledge",
    "Search the pinned knowledge snapshots. Returns ranked hits and a total count. Does not fetch the live web.",
    {
      query: z.string().min(1).max(2048),
      filters: searchFiltersSchema.optional(),
      limit: z.number().int().min(1).max(SEARCH_MAX_LIMIT).optional(),
    },
    async ({ query, filters, limit }) => {
      const result = searchKnowledge(store, query, {
        themes,
        ...(filters !== undefined ? { filters } : {}),
        ...(limit !== undefined ? { limit } : {}),
      });
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );

  server.tool(
    "get_resource",
    "Open a snapshotted resource by SCHEMA URI. Serves local files and catalogue rows only; never live HTTP.",
    {
      uri: z.string().min(1).max(1024),
    },
    async ({ uri }) => {
      // config.tier0Root, so inspect_schema and spec:// always serve the same tree.
      const result = getResource(root, store, uri, themes, config.tier0Root);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );

  server.tool(
    "list_contradictions",
    "List corpus contradiction findings from the pinned snapshot. Optionally filter by topic.",
    {
      topic: z.string().min(1).max(512).optional(),
    },
    async ({ topic }) => {
      const result = listContradictions(findings, topic);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );
}

export function searchKnowledge(
  store: KnowledgeStore,
  query: string,
  options?: {
    filters?: SearchFilters | undefined;
    limit?: number | undefined;
    themes?: EducationThemeIndex | undefined;
  },
): SearchKnowledgeResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return { hits: [], totalCount: 0 };
  }
  const limit = clampLimit(options?.limit);
  const ftsHits = safeSearchFts(store, trimmed);
  const scoreById = new Map<string, number>();
  ftsHits.forEach((hit, index) => {
    scoreById.set(hit.id, hit.score ?? index);
  });
  const matched: StoredDocument[] = [];
  for (const fts of ftsHits) {
    const doc = store.getById(fts.id);
    if (!doc) {
      continue;
    }
    if (!matchesFilters(doc, options?.filters, options?.themes)) {
      continue;
    }
    matched.push(doc);
  }
  matched.sort((a, b) => compareSearchDocs(a, b, trimmed, scoreById));
  return {
    totalCount: matched.length,
    hits: matched.slice(0, limit).map((doc) => toHit(doc)),
  };
}

export function getResource(
  root: string,
  store: KnowledgeStore,
  uri: string,
  themes?: EducationThemeIndex,
  tier0Root?: string,
): GetResourceResult {
  const exact = store.getByLocator(uri);
  if (exact && uri !== "repo://deny") {
    return { uri, text: exact.body, hit: toHit(exact) };
  }

  const pin = snapshotPin(root);

  const principles = /^csw:\/\/principles\/([^/?#]+)$/.exec(uri);
  if (principles) {
    return getPrinciplesResource(root, store, uri, decodeURIComponent(principles[1] ?? ""), themes, pin);
  }

  const essay = /^csw:\/\/essay\/([^/]+)\/([^/?#]+)$/.exec(uri);
  if (essay) {
    const locator = `csw://essay/${decodeURIComponent(essay[1] ?? "")}/${decodeURIComponent(essay[2] ?? "")}`;
    const doc = store.getByLocator(locator);
    if (doc) {
      return { uri, text: doc.body, hit: toHit(doc) };
    }
  }

  if (uri === "csw://contradictions") {
    const text = readSnapshotFile(root, "substack-articles/contradictions.json");
    if (text !== undefined) {
      return {
        uri,
        text,
        hit: fileHit(uri, "Corpus contradictions", "contradiction", 4, text, pin),
      };
    }
  }

  if (uri === "brc://index") {
    const text = readSnapshotFile(root, "reference/brc_index.json");
    if (text !== undefined) {
      return { uri, text, hit: fileHit(uri, "BRC catalogue index", "brc", 1, text, pin) };
    }
  }

  const spec = /^brc:\/\/spec\/(\d+)$/.exec(uri);
  if (spec) {
    const doc = store.getById(`brc:${Number(spec[1])}`);
    if (doc) {
      return { uri, text: doc.body, hit: { ...toHit(doc), locator: uri } };
    }
    return missingResource(
      uri,
      "brc",
      1,
      "This BRC body is not present in the pinned snapshot. Catalogue metadata only; live fetch is refused.",
      pin,
    );
  }

  const guide = /^brc:\/\/guide(?:\/([^/?#]+))?$/.exec(uri);
  if (guide) {
    const doc = store.getByLocator("brc://guide");
    if (doc) {
      const section = guide[1] ? decodeURIComponent(guide[1]) : undefined;
      const text = section ? extractGuideSection(doc.body, section) : doc.body;
      return { uri, text, hit: { ...toHit(doc), locator: uri } };
    }
  }

  const tsStackSpec = /^spec:\/\/ts-stack\/([^?#]+)$/.exec(uri);
  if (tsStackSpec) {
    const service = safeDecode(tsStackSpec[1] ?? "");
    const cardRoot = tier0Root ?? tier0RootFor(root);
    const resolved = service ? resolveSpec(cardRoot, service) : undefined;
    if (resolved) {
      return {
        uri,
        text: resolved.text,
        hit: fileHit(uri, `ts-stack contract: ${resolved.rel}`, "doc", 3, resolved.text, pin),
      };
    }
  }

  const vector = /^vector:\/\/([^/?#]+)\/([^/?#]+)$/.exec(uri);
  if (vector) {
    const domain = safeDecode(vector[1] ?? "");
    const rawCase = safeDecode(vector[2] ?? "");
    const caseName = rawCase ? rawCase.replace(/\.json$/i, "") : undefined;
    const cardRoot = tier0Root ?? tier0RootFor(root);
    const resolved = domain && caseName ? resolveVector(cardRoot, domain, caseName) : undefined;
    if (resolved) {
      return {
        uri,
        text: resolved.text,
        hit: {
          ...fileHit(uri, `Conformance vector: ${resolved.rel}`, "test", 0, resolved.text, pin),
          language: "spec",
        },
      };
    }
  }

  const symbolUri = /^symbol:\/\/([^/?#]+)\/([^/?#]+)$/.exec(uri);
  if (symbolUri) {
    const shortRepo = safeDecode(symbolUri[1] ?? "");
    const name = safeDecode(symbolUri[2] ?? "");
    if (shortRepo && name && !shortRepo.includes("..") && !name.includes("..")) {
      const doc = store.getById(`symbol:${shortRepo}:${name}`);
      if (doc) {
        return { uri, text: doc.body, hit: toHit(doc) };
      }
    }
  }

  const wiki = /^wiki:\/\/ts-stack\/([^/?#]+)$/.exec(uri);
  if (wiki) {
    const page = decodeURIComponent(wiki[1] ?? "");
    const resolved = resolveWikiPage(root, page);
    if (resolved) {
      return {
        uri,
        text: resolved.text,
        hit: fileHit(uri, resolved.title, "wiki", 3, resolved.text, pin),
      };
    }
  }

  if (uri === "repo://registry") {
    const text = readSnapshotFile(root, "reference/repo_registry.json");
    if (text !== undefined) {
      return { uri, text, hit: fileHit(uri, "Repository registry", "doc", 3, text, pin) };
    }
  }

  if (uri === "repo://tier0") {
    const text = readSnapshotFile(root, "reference/tier0/manifest.json");
    if (text !== undefined) {
      return { uri, text, hit: fileHit(uri, "Tier 0 repository manifest", "doc", 2, text, pin) };
    }
  }

  if (uri === "repo://deny") {
    const text = readSnapshotFile(root, "reference/deny-list.json");
    if (text !== undefined) {
      return { uri, text, hit: fileHit(uri, "Package deny list", "doc", 3, text, pin) };
    }
  }

  return missingResource(
    uri,
    "doc",
    5,
    "This resource is not present in the pinned snapshot.",
    pin,
  );
}

export function listContradictions(
  findings: unknown[],
  topic?: string,
): ListContradictionsResult {
  if (!topic) {
    return { findings };
  }
  const needle = topic.trim().toLowerCase();
  if (!needle) {
    return { findings };
  }
  return {
    findings: findings.filter((finding) => findingMatchesTopic(finding, needle)),
  };
}

function safeSearchFts(store: KnowledgeStore, query: string): ReturnType<KnowledgeStore["searchFts"]> {
  const ftsQuery = toFtsQuery(query);
  try {
    return store.searchFts(ftsQuery);
  } catch {
    // No raw-query fallback: an unquotable query degrades to zero hits, never to an
    // attacker-shaped FTS expression.
    return [];
  }
}

const FTS_TOKEN_CAP = 32;

function toFtsQuery(query: string): string {
  const tokens = query
    .trim()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((token) => token.length > 0)
    .slice(0, FTS_TOKEN_CAP);
  if (tokens.length === 0) {
    return '""';
  }
  return tokens.map((token) => `"${token.replaceAll('"', "")}"`).join(" AND ");
}

function matchesFilters(
  doc: StoredDocument,
  filters: SearchFilters | undefined,
  themes: EducationThemeIndex | undefined,
): boolean {
  if (!filters) {
    return true;
  }
  if (filters.kind && filters.kind.length > 0 && !filters.kind.includes(doc.kind)) {
    return false;
  }
  if (filters.authority_max !== undefined && doc.authority > filters.authority_max) {
    return false;
  }
  if (filters.network !== undefined && doc.network !== filters.network && doc.network !== "any") {
    return false;
  }
  if (filters.language !== undefined && doc.language !== filters.language) {
    return false;
  }
  if (filters.era !== undefined && (doc.era ?? "") !== filters.era) {
    return false;
  }
  if (filters.theme !== undefined) {
    const wanted = filters.theme.toLowerCase();
    const docThemes = themesForDocument(doc, themes);
    if (!docThemes.some((theme) => theme.toLowerCase() === wanted)) {
      return false;
    }
  }
  return true;
}

function themesForDocument(doc: StoredDocument, themes: EducationThemeIndex | undefined): string[] {
  if (!themes) {
    return [];
  }
  if (doc.kind === "principle") {
    return themes.byLocator.get(normalizeRel(doc.locator)) ?? [];
  }
  if (doc.kind === "essay") {
    const parsed = parseEssayId(doc.id);
    if (!parsed) {
      return [];
    }
    return themes.byEssayKey.get(`${parsed.era}:${parsed.slug}`) ?? [];
  }
  return [];
}

/**
 * Relevance first (bm25, title-weighted), then the authority model, then id. Authority alone
 * cannot rank search: with full BRC bodies pinned, an incidental mention in a spec would
 * otherwise outrank the essay or standard the query is actually about. A single-token query
 * that appears as a title's parenthetical acronym ("… (BEEF)") names the document that defines
 * the term, and that document outranks every satellite mention.
 */
function compareSearchDocs(
  a: StoredDocument,
  b: StoredDocument,
  query: string,
  scoreById: Map<string, number>,
): number {
  const definition = compareDefinitionTitles(a, b, query);
  if (definition !== 0) {
    return definition;
  }
  const aScore = scoreById.get(a.id) ?? Number.MAX_SAFE_INTEGER;
  const bScore = scoreById.get(b.id) ?? Number.MAX_SAFE_INTEGER;
  if (aScore !== bScore) {
    return aScore - bScore;
  }
  if (a.authority !== b.authority) {
    return a.authority - b.authority;
  }
  return a.id.localeCompare(b.id);
}

function compareDefinitionTitles(a: StoredDocument, b: StoredDocument, query: string): number {
  if (!/^[A-Za-z0-9_]{2,}$/.test(query)) {
    return 0;
  }
  const pattern = new RegExp(`\\(${escapeRegExp(query)}\\)`, "i");
  const aDefines = pattern.test(a.title);
  const bDefines = pattern.test(b.title);
  if (aDefines === bDefines) {
    return 0;
  }
  return aDefines ? -1 : 1;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function clampLimit(limit: number | undefined): number {
  if (limit === undefined) {
    return SEARCH_DEFAULT_LIMIT;
  }
  return Math.min(SEARCH_MAX_LIMIT, Math.max(1, Math.trunc(limit)));
}

function toHit(doc: StoredDocument): TypedHit {
  return {
    id: doc.id,
    kind: doc.kind,
    authority: doc.authority,
    title: doc.title,
    locator: doc.locator,
    revision: doc.revision,
    fetched_at: doc.fetched_at,
    stale: false,
    network: doc.network,
    language: doc.language,
    contradiction_ids: [],
    successor: null,
    excerpt: excerptOf(doc.body),
  };
}

function fileHit(
  uri: string,
  title: string,
  kind: HitKind,
  authority: number,
  text: string,
  pin: SnapshotPin,
): TypedHit {
  return {
    id: uri,
    kind,
    authority,
    title,
    locator: uri,
    revision: pin.revision,
    fetched_at: pin.fetched_at,
    stale: false,
    network: "any",
    language: kind === "brc" ? "spec" : "prose",
    contradiction_ids: [],
    successor: null,
    excerpt: excerptOf(text),
  };
}

function missingResource(
  uri: string,
  kind: HitKind,
  authority: number,
  message: string,
  pin: SnapshotPin,
): GetResourceResult {
  return {
    uri,
    text: message,
    hit: fileHit(uri, "Resource not present in snapshot", kind, authority, message, pin),
  };
}

function excerptOf(body: string): string {
  return body.replace(/\s+/g, " ").trim().slice(0, 280);
}

type SnapshotPin = {
  revision: string;
  fetched_at: string;
};

function snapshotPin(root: string): SnapshotPin {
  const brc = readBrcIndexMeta(root);
  return {
    revision: hashSnapshotSet(root),
    fetched_at: snapshotFetchedAt(root, brc.generated),
  };
}

function getPrinciplesResource(
  root: string,
  store: KnowledgeStore,
  uri: string,
  theme: string,
  themes: EducationThemeIndex | undefined,
  pin: SnapshotPin,
): GetResourceResult {
  const index = themes ?? loadEducationThemes(root);
  const rows = index.byTheme.get(theme.toLowerCase()) ?? [];
  const parts: string[] = [];
  let first: StoredDocument | undefined;
  for (const row of rows) {
    const doc = store.getByLocator(row.locator);
    if (doc) {
      first ??= doc;
      parts.push(`# ${doc.title}\n\n${doc.body}`);
      continue;
    }
    const text = readSnapshotFile(root, row.locator);
    if (text !== undefined) {
      parts.push(`# ${row.title || row.slug}\n\n${text}`);
    }
  }
  if (parts.length === 0) {
    return missingResource(
      uri,
      "principle",
      4,
      `No principle documents match the theme '${theme}' in the pinned snapshot.`,
      pin,
    );
  }
  const text = parts.join("\n\n---\n\n");
  const hit = first
    ? { ...toHit(first), id: `principle:theme:${theme}`, title: `Principles: ${theme}`, locator: uri }
    : fileHit(uri, `Principles: ${theme}`, "principle", 4, text, pin);
  return { uri, text, hit };
}

function extractGuideSection(body: string, section: string): string {
  const numbered = /^(\d+)$/.exec(section.trim());
  if (numbered) {
    const heading = new RegExp(`^SECTION ${numbered[1]}:.*$`, "m");
    const start = body.search(heading);
    if (start === -1) {
      return body;
    }
    const after = body.slice(start + 1);
    const next = after.search(/^SECTION \d+:/m);
    return next === -1 ? body.slice(start).trim() : body.slice(start, start + 1 + next).trim();
  }
  const needle = section.trim().toLowerCase();
  const lines = body.split(/\r?\n/);
  let start = -1;
  for (let i = 0; i < lines.length; i += 1) {
    if ((lines[i] ?? "").toLowerCase().includes(needle) && /^SECTION\s+\d+:/i.test(lines[i] ?? "")) {
      start = i;
      break;
    }
  }
  if (start === -1) {
    return body;
  }
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^SECTION\s+\d+:/i.test(lines[i] ?? "")) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join("\n").trim();
}

function resolveWikiPage(root: string, page: string): { text: string; title: string } | undefined {
  if (!page || page.includes("..") || page.includes("/") || page.includes("\\")) {
    return undefined;
  }
  const dir = join(root, "reference", "deepwiki", "ts-stack");
  const candidates = page.endsWith(".md") ? [page] : [page, `${page}.md`];
  for (const name of candidates) {
    const text = readUnderDir(dir, name);
    if (text !== undefined) {
      return { text, title: name.replace(/\.md$/i, "") };
    }
  }
  const manifestRaw = readUnderDir(dir, "_manifest.json");
  if (!manifestRaw) {
    return undefined;
  }
  let rows: WikiManifestRow[] = [];
  try {
    const parsed = JSON.parse(manifestRaw) as unknown;
    rows = Array.isArray(parsed) ? (parsed as WikiManifestRow[]) : [];
  } catch {
    return undefined;
  }
  const wanted = page.toLowerCase();
  const match = rows.find((row) => {
    const file = typeof row.file === "string" ? row.file : "";
    const title = typeof row.title === "string" ? row.title : "";
    const number = typeof row.page === "number" ? String(row.page) : "";
    return (
      file.toLowerCase() === wanted ||
      file.toLowerCase() === `${wanted}.md` ||
      title.toLowerCase() === wanted ||
      number === wanted
    );
  });
  if (!match || typeof match.file !== "string") {
    return undefined;
  }
  const text = readUnderDir(dir, match.file);
  if (text === undefined) {
    return undefined;
  }
  return { text, title: typeof match.title === "string" ? match.title : match.file };
}

function loadEducationThemes(root: string): EducationThemeIndex {
  const byLocator = new Map<string, string[]>();
  const byEssayKey = new Map<string, string[]>();
  const byTheme = new Map<string, Array<{ locator: string; era: string; slug: string; title: string }>>();
  const abs = join(root, "data", "education_index.json");
  if (!existsSync(abs)) {
    return { byLocator, byEssayKey, byTheme };
  }
  const raw = JSON.parse(readFileSync(abs, "utf8")) as { essays?: EducationEssay[] };
  for (const essay of raw.essays ?? []) {
    if (typeof essay.verdict === "string" && essay.verdict.toUpperCase() !== "KEEP") {
      continue;
    }
    const era = typeof essay.era === "string" ? essay.era : "";
    const slug = typeof essay.slug === "string" ? essay.slug : "";
    const title = typeof essay.title === "string" ? essay.title : slug;
    const locator = normalizeRel(
      (typeof essay.education_file === "string" && essay.education_file) ||
        (typeof essay.path === "string" && essay.path) ||
        "",
    );
    const themes = Array.isArray(essay.themes)
      ? essay.themes.filter((theme): theme is string => typeof theme === "string")
      : [];
    if (locator) {
      byLocator.set(locator, themes);
    }
    if (era && slug) {
      byEssayKey.set(`${era}:${slug}`, themes);
    }
    for (const theme of themes) {
      const key = theme.toLowerCase();
      const list = byTheme.get(key) ?? [];
      list.push({ locator, era, slug, title });
      byTheme.set(key, list);
    }
  }
  return { byLocator, byEssayKey, byTheme };
}

function loadContradictionFindings(root: string): unknown[] {
  const abs = join(root, "substack-articles", "contradictions.json");
  if (!existsSync(abs)) {
    return [];
  }
  const raw = JSON.parse(readFileSync(abs, "utf8")) as { findings?: unknown[] };
  return Array.isArray(raw.findings) ? raw.findings : [];
}

function findingMatchesTopic(finding: unknown, needle: string): boolean {
  if (!finding || typeof finding !== "object") {
    return false;
  }
  const row = finding as ContradictionFinding;
  const fields = [row.id, row.topic, row.nature, row.position_a?.claim, row.position_b?.claim];
  return fields.some((field) => typeof field === "string" && field.toLowerCase().includes(needle));
}

function parseEssayId(id: string): { era: string; slug: string } | undefined {
  const match = /^essay:([^:]+):(.+)$/.exec(id);
  if (!match) {
    return undefined;
  }
  return { era: match[1] ?? "", slug: match[2] ?? "" };
}

/** A malformed escape must miss the snapshot, not throw out of the tool call. */
function safeDecode(value: string): string | undefined {
  try {
    return decodeURIComponent(value);
  } catch {
    return undefined;
  }
}

function normalizeRel(path: string): string {
  return path.replaceAll("\\", "/").replace(/^\.\//, "");
}

function readSnapshotFile(root: string, rel: string): string | undefined {
  if (!rel || rel.includes("\0")) {
    return undefined;
  }
  // Resolve symlinks before the containment check: a link inside the tree must not read out of it.
  const realRoot = realPath(root);
  const abs = realPath(resolve(root, ...normalizeRel(rel).split("/")));
  if (realRoot === undefined || abs === undefined || !isInside(realRoot, abs) || !isPlainFile(abs)) {
    return undefined;
  }
  try {
    return readFileSync(abs, "utf8");
  } catch {
    return undefined;
  }
}

function readUnderDir(dir: string, name: string): string | undefined {
  if (!name || name.includes("..") || name.includes("/") || name.includes("\\") || name.includes("\0")) {
    return undefined;
  }
  const realDir = realPath(dir);
  const abs = realPath(join(dir, name));
  if (realDir === undefined || abs === undefined || !isInside(realDir, abs) || !isPlainFile(abs)) {
    return undefined;
  }
  try {
    return readFileSync(abs, "utf8");
  } catch {
    return undefined;
  }
}

function realPath(abs: string): string | undefined {
  try {
    return realpathSync(abs);
  } catch {
    return undefined;
  }
}

function isPlainFile(abs: string): boolean {
  return lstatSync(abs, { throwIfNoEntry: false })?.isFile() === true;
}

function isInside(root: string, abs: string): boolean {
  const rel = relative(resolve(root), resolve(abs));
  return rel !== "" && !rel.startsWith("..") && !isAbsolute(rel);
}
