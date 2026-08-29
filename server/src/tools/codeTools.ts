import { existsSync, lstatSync, readFileSync, readdirSync, realpathSync } from "node:fs";
import { isAbsolute, join, relative, resolve } from "node:path";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { ServerConfig } from "../config.js";
import {
  groupingKeys,
  tokenMatchesName,
  type CapabilityGraphFile,
  type CapabilityRecord,
} from "../ingest/capabilityGraph.js";
import type { KnowledgeStore, StoredDocument } from "../store/knowledgeStore.js";
import type {
  ConformanceVectorResult,
  ErrorTaxonomyCode,
  ErrorTaxonomyResult,
  GetSymbolResult,
  InspectSchemaResult,
  PackageForConceptResult,
  SchemaFormat,
  TypedHit,
} from "../types.js";

export const SCHEMA_TEXT_MAX = 20_000;

const ERROR_CODE = /^ERR_[A-Z0-9_]+$/;
const BACKTICK_TOKEN = /`([^`\n]+)`/g;

export type ResolvedSpec = {
  /** Path relative to `specs/`, which is also the `spec://ts-stack/{rel}` locator tail. */
  rel: string;
  /** Path relative to the Tier 0 card root, for reporting. */
  path: string;
  text: string;
  format: SchemaFormat;
};

export type ResolvedVector = {
  domain: string;
  caseName: string;
  /** Path relative to `vectors/`, which is also the `vector://{rel}` locator tail. */
  rel: string;
  /** Path relative to the Tier 0 card root, for reporting. */
  path: string;
  text: string;
};

const REFERENCE_KINDS = new Set(["symbol", "test", "doc"]);

export function registerCodeTools(
  server: McpServer,
  config: ServerConfig,
  store: KnowledgeStore,
): void {
  server.tool(
    "inspect_schema",
    "Open the pinned ts-stack contract for a service from the committed Tier 0 cards. Reads snapshotted files only; never fetches a repository. Text is bounded, so open spec://ts-stack/{file} for the whole contract.",
    {
      service: z.string().min(1).max(256),
    },
    async ({ service }) => {
      const result = inspectSchema(config.tier0Root, service);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );

  server.tool(
    "error_taxonomy",
    "List the ERR_* codes recorded in the pinned ts-stack error documents, optionally filtered by prefix. Codes absent from the snapshot are reported as absent, never invented.",
    {
      prefix: z.string().min(1).max(128).optional(),
    },
    async ({ prefix }) => {
      const result = errorTaxonomy(config.tier0Root, prefix);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );

  server.tool(
    "get_conformance_vector",
    "Open a pinned conformance vector by domain and case from the committed Tier 0 cards. Reads snapshotted files only; never fetches a repository.",
    {
      domain: z.string().min(1).max(256),
      case: z.string().min(1).max(256),
    },
    async ({ domain, case: caseName }) => {
      const result = getConformanceVector(config.tier0Root, domain, caseName);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );

  server.tool(
    "get_symbol",
    "Return the pinned exported symbol card for a repository. Reads store rows only; never fetches. A name that was not ingested is reported as not found, never invented.",
    {
      repo: z.string().min(1).max(512),
      name: z.string().min(1).max(512),
    },
    async ({ repo, name }) => {
      const result = getSymbol(store, repo, name);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );

  server.tool(
    "find_references",
    "Find snapshotted references to a symbol name among symbol, test, and document rows for a repository. Reads the store only; never fetches.",
    {
      repo: z.string().min(1).max(512),
      symbol: z.string().min(1).max(512),
    },
    async ({ repo, symbol }) => {
      const result = findReferences(store, repo, symbol);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );

  server.tool(
    "get_package_for_concept",
    "Map a protocol concept to confirmed packages from the pinned capability graph. Reads the committed graph and store only; never fetches.",
    {
      concept: z.string().min(1).max(512),
    },
    async ({ concept }) => {
      const result = getPackageForConcept(config.root, store, concept);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );
}

export function getSymbol(store: KnowledgeStore, repo: string, name: string): GetSymbolResult {
  const shortRepo = repo.split(/[/\\]/).pop() ?? repo;
  const doc = store.getById(`symbol:${shortRepo}:${name}`);
  if (!doc) {
    return { found: false };
  }
  const card = parseSymbolCard(doc.body);
  return {
    found: true,
    name: stringField(card.name) || name,
    repo: stringField(card.repo) || repo,
    package: stringField(card.package),
    language: doc.language,
    kind: stringField(card.kind) || "symbol",
    locator: stringField(card.locator) || doc.locator,
    exported: true,
    hit: documentToHit(doc),
    id: doc.id,
    revision: doc.revision,
  };
}

/**
 * Curated concept aliases. The capability graph is BRC-driven, so toolchains that implement no
 * BRC (Rúnar) never match a concept on their own. These entries are curation, not derivation:
 * they point at confirmed Tier 0 packages and committed academy cards only.
 */
const CONCEPT_ALIASES: ReadonlyArray<{ pattern: RegExp; packages: string[]; docs: string[] }> = [
  {
    pattern: /\b(smart[\s-]?contracts?|script[\s-]?contracts?|covenants?|runar|rúnar)\b/i,
    packages: ["runar"],
    docs: ["academy:runar/sdk-overview", "academy:runar/contract-basics"],
  },
];

export function getPackageForConcept(
  root: string,
  store: KnowledgeStore,
  concept: string,
): PackageForConceptResult {
  const trimmed = concept.trim();
  const needle = trimmed.toLowerCase();
  const rows = loadCapabilityRows(root);
  const matched = needle ? rows.filter((row) => capabilityMatchesConcept(row, trimmed)) : [];
  const brcs = uniqueSortedBrcs(matched.map((row) => row.brc));
  const aliased = CONCEPT_ALIASES.filter((alias) => alias.pattern.test(trimmed));
  const packages = uniqueSorted([
    ...matched.flatMap((row) => row.packages),
    ...aliased.flatMap((alias) => alias.packages),
  ]);
  const hits: TypedHit[] = [];
  const seen = new Set<string>();
  for (const brc of brcs) {
    const number = Number(brc.slice(4));
    if (!Number.isFinite(number)) {
      continue;
    }
    const doc = store.getById(`brc:${number}`);
    if (!doc || seen.has(doc.id)) {
      continue;
    }
    seen.add(doc.id);
    hits.push(documentToHit(doc));
  }
  for (const id of aliased.flatMap((alias) => alias.docs)) {
    const doc = store.getById(id);
    if (!doc || seen.has(doc.id)) {
      continue;
    }
    seen.add(doc.id);
    hits.push(documentToHit(doc));
  }
  return { concept, brcs, packages, hits };
}

export function findReferences(store: KnowledgeStore, repo: string, symbol: string): TypedHit[] {
  const needle = symbol.trim();
  if (!needle) {
    return [];
  }
  const shortRepo = repo.split(/[/\\]/).pop() ?? repo;
  const hits: TypedHit[] = [];
  const seen = new Set<string>();
  for (const fts of safeSearchFts(store, needle)) {
    const doc = store.getById(fts.id);
    if (!doc || !REFERENCE_KINDS.has(doc.kind) || seen.has(doc.id)) {
      continue;
    }
    if (!doc.locator.includes(repo) && !doc.id.includes(shortRepo)) {
      continue;
    }
    seen.add(doc.id);
    hits.push(documentToHit(doc));
  }
  hits.sort((a, b) => a.authority - b.authority || a.id.localeCompare(b.id));
  return hits;
}

export function inspectSchema(tier0Root: string, service: string): InspectSchemaResult {
  const resolved = resolveSpec(tier0Root, service);
  if (!resolved) {
    return { found: false, service };
  }
  const bounded = boundText(resolved.text, resolved.rel);
  return {
    found: true,
    service,
    format: resolved.format,
    path: resolved.path,
    text: bounded.text,
    truncated: bounded.truncated,
  };
}

export function errorTaxonomy(tier0Root: string, prefix?: string): ErrorTaxonomyResult {
  const specsDir = join(tier0Root, "specs");
  const wanted = (prefix ?? "").trim().toUpperCase();
  const rows = new Map<string, ErrorTaxonomyCode>();
  const sources: string[] = [];

  for (const rel of listSpecFiles(specsDir).filter(isErrorDocument)) {
    const text = readContainedFile(specsDir, rel);
    if (text === undefined) {
      continue;
    }
    const parsed = parseErrorCodes(text);
    if (parsed.length === 0) {
      continue;
    }
    sources.push(`specs/${rel}`);
    for (const row of parsed) {
      const known = rows.get(row.code);
      if (!known || (known.message === undefined && row.message !== undefined)) {
        rows.set(row.code, row);
      }
    }
  }

  return {
    codes: [...rows.values()]
      .filter((row) => row.code.startsWith(wanted))
      .sort((a, b) => a.code.localeCompare(b.code)),
    sources,
  };
}

export function getConformanceVector(
  tier0Root: string,
  domain: string,
  caseName: string,
): ConformanceVectorResult {
  const resolved = resolveVector(tier0Root, domain, caseName);
  if (!resolved) {
    return { found: false, domain, case: caseName };
  }
  const pin = cardPin(tier0Root);
  return {
    found: true,
    domain,
    case: caseName,
    revision: pin.revision,
    body: parseVectorBody(resolved.text),
    hit: vectorFileHit(resolved, pin),
  };
}

export function resolveVector(
  tier0Root: string,
  domain: string,
  caseName: string,
): ResolvedVector | undefined {
  if (!isSafeSegment(domain) || !isSafeSegment(caseName)) {
    return undefined;
  }
  const rel = `${domain}/${caseName}.json`;
  const text = readContainedFile(join(tier0Root, "vectors"), rel);
  if (text === undefined) {
    return undefined;
  }
  return {
    domain,
    caseName,
    rel,
    path: `vectors/${rel}`,
    text,
  };
}

export function resolveSpec(tier0Root: string, service: string): ResolvedSpec | undefined {
  const wanted = service.trim().toLowerCase();
  if (!wanted) {
    return undefined;
  }
  const specsDir = join(tier0Root, "specs");
  let best: { rel: string; rank: number } | undefined;
  for (const rel of listSpecFiles(specsDir)) {
    const rank = matchRank(rel, wanted);
    if (rank === undefined || (best && rank >= best.rank)) {
      continue;
    }
    best = { rel, rank };
  }
  if (!best) {
    return undefined;
  }
  const text = readContainedFile(specsDir, best.rel);
  if (text === undefined) {
    return undefined;
  }
  return {
    rel: best.rel,
    path: `specs/${best.rel}`,
    text,
    format: detectFormat(best.rel, text),
  };
}

function matchRank(rel: string, wanted: string): number | undefined {
  const lower = rel.toLowerCase();
  const base = lower.split("/").pop() ?? lower;
  const stem = base.split(".")[0] ?? base;
  if (stem === wanted) {
    return 0;
  }
  // A contract file whose stem names the service as a delimited segment — "brc-100-wallet.json"
  // for "wallet" — is the API contract. Prose that merely starts with the word
  // ("reliability/wallet-toolbox.md") is a note about the service, not its schema.
  const isSchema = /\.(json|ya?ml)$/.test(base);
  const segment = new RegExp(`(^|[^a-z0-9])${escapeRegExp(wanted)}([^a-z0-9]|$)`).test(stem);
  if (segment) {
    return isSchema ? 1 : 2;
  }
  if (base.startsWith(wanted)) {
    return isSchema ? 3 : 4;
  }
  return lower.includes(wanted) ? (isSchema ? 5 : 6) : undefined;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function detectFormat(rel: string, text: string): SchemaFormat {
  const base = rel.toLowerCase().split("/").pop() ?? rel.toLowerCase();
  if (/\.mdx?$/.test(base)) {
    return "markdown";
  }
  // Root document keys sit at the head of the file; matching further down would
  // pick up prose or an embedded example instead of the declaration.
  const head = text.slice(0, 2_000);
  const openapi = /^openapi\s*:\s*["']?(\d+(?:\.\d+)?)/m.exec(head);
  if (openapi) {
    return `openapi${openapi[1] ?? ""}`;
  }
  const asyncapi = /^asyncapi\s*:\s*["']?(\d+(?:\.\d+)?)/m.exec(head);
  if (asyncapi) {
    return `asyncapi${asyncapi[1] ?? ""}`;
  }
  return head.includes('"$schema"') ? "jsonschema" : "unknown";
}

function boundText(text: string, rel: string): { text: string; truncated: boolean } {
  if (text.length <= SCHEMA_TEXT_MAX) {
    return { text, truncated: false };
  }
  const notice = `\n\n[Truncated at ${SCHEMA_TEXT_MAX} characters of ${text.length}. Open spec://ts-stack/${rel} with get_resource for the whole contract.]`;
  return {
    text: `${text.slice(0, SCHEMA_TEXT_MAX - notice.length)}${notice}`,
    truncated: true,
  };
}

function isErrorDocument(rel: string): boolean {
  const base = (rel.split("/").pop() ?? rel).toLowerCase();
  return /\.mdx?$/.test(base) && base.includes("error");
}

/** Header names that mark the column carrying the human-readable description. */
const ERROR_MESSAGE_HEADERS = /^(description|message|summary)$/;
/** Header names that mark the column carrying an HTTP/status code. */
const ERROR_STATUS_HEADERS = /^(status|http|http status)$/;

function parseErrorCodes(text: string): ErrorTaxonomyCode[] {
  const out: ErrorTaxonomyCode[] = [];
  let header: string[] | undefined;
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed.startsWith("|")) {
      const cells = splitTableCells(trimmed);
      if (cells.length > 0 && cells.every((cell) => /^:?-{2,}:?$/.test(cell))) {
        continue; // separator row
      }
      // A header row names the columns ("Code | Description | Interfaces"); remember it so the
      // data rows map by name — positional mapping swaps description and interfaces.
      if (
        cells.length > 0 &&
        !cells.some((cell) => ERROR_CODE.test(cleanCell(cell))) &&
        cells.some((cell) => cleanCell(cell).toLowerCase() === "code")
      ) {
        header = cells.map((cell) => cleanCell(cell).toLowerCase());
        continue;
      }
      const row = parseTableRow(trimmed, header);
      if (row) {
        out.push(row);
        continue;
      }
      // No cell is a bare code, so the line may still mention one inside prose;
      // fall through to the token scan rather than dropping the row.
    }
    for (const match of trimmed.matchAll(BACKTICK_TOKEN)) {
      const code = (match[1] ?? "").trim();
      if (ERROR_CODE.test(code)) {
        out.push({ code });
      }
    }
  }
  return out;
}

function splitTableCells(line: string): string[] {
  const cells = line.split("|").map((cell) => cell.trim());
  if (cells[0] === "") {
    cells.shift();
  }
  if (cells.length > 0 && cells[cells.length - 1] === "") {
    cells.pop();
  }
  return cells;
}

function parseTableRow(line: string, header?: string[]): ErrorTaxonomyCode | undefined {
  const cells = splitTableCells(line);
  // A pinned table need not put the code first, so every cell is a candidate.
  const at = cells.findIndex((cell) => ERROR_CODE.test(cleanCell(cell)));
  if (at === -1) {
    return undefined;
  }
  const code = cleanCell(cells[at]);

  if (header && header.length === cells.length) {
    // Header-aware mapping: Description/Message/Summary → message, Status/HTTP → status,
    // Interfaces → interfaces. The code's own cell is never reused as its description.
    const row: ErrorTaxonomyCode = { code };
    for (let i = 0; i < cells.length; i++) {
      if (i === at) {
        continue;
      }
      const name = header[i] ?? "";
      const value = cleanCell(cells[i]);
      if (!value || /^-+$/.test(value)) {
        continue;
      }
      if (ERROR_MESSAGE_HEADERS.test(name) && row.message === undefined) {
        row.message = value;
      } else if (ERROR_STATUS_HEADERS.test(name) && row.status === undefined) {
        row.status = value;
      } else if (name === "interfaces" && row.interfaces === undefined) {
        row.interfaces = value;
      }
    }
    return row;
  }

  // No header seen: fall back to positional — the columns after the code carry status, message.
  const status = cleanCell(cells[at + 1]);
  const message = cleanCell(cells[at + 2]);
  return {
    code,
    ...(status && !/^-+$/.test(status) ? { status } : {}),
    ...(message && !/^-+$/.test(message) ? { message } : {}),
  };
}

function cleanCell(cell: string | undefined): string {
  return (cell ?? "").replaceAll("`", "").replaceAll("*", "").trim();
}

function listSpecFiles(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }
  return readdirSync(dir, { recursive: true, encoding: "utf8" })
    .map((name) => name.replaceAll("\\", "/"))
    .filter((rel) => !rel.split("/").some((segment) => segment.startsWith(".")))
    // lstat, not stat: a committed link could resolve outside the card root, and a
    // dangling entry must be skipped rather than thrown out of the tool call.
    .filter((rel) => isPlainFile(join(dir, ...rel.split("/"))))
    .sort();
}

function isPlainFile(abs: string): boolean {
  return lstatSync(abs, { throwIfNoEntry: false })?.isFile() === true;
}

/** Snapshot reads stay inside the card root: anything resolving out of it is a miss, not a read. */
function readContainedFile(rootDir: string, rel: string): string | undefined {
  if (!rel || rel.includes("\0")) {
    return undefined;
  }
  const root = realPath(rootDir);
  const abs = realPath(join(rootDir, ...rel.split("/")));
  if (root === undefined || abs === undefined || !isInside(root, abs) || !isPlainFile(abs)) {
    return undefined;
  }
  try {
    return readFileSync(abs, "utf8");
  } catch {
    return undefined;
  }
}

function isSafeSegment(value: string): boolean {
  if (!value || value.includes("\0") || value.includes("/") || value.includes("\\") || value.includes("..")) {
    return false;
  }
  return value !== "." && !isAbsolute(value) && !/^[A-Za-z]:/.test(value);
}

function cardPin(tier0Root: string): { revision: string; fetched_at: string } {
  try {
    const raw = JSON.parse(readFileSync(join(tier0Root, "manifest.json"), "utf8")) as {
      generated?: unknown;
    };
    const generated = typeof raw.generated === "string" ? raw.generated : "";
    return { revision: generated, fetched_at: generated };
  } catch {
    return { revision: "", fetched_at: "" };
  }
}

function parseVectorBody(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function vectorFileHit(
  resolved: ResolvedVector,
  pin: { revision: string; fetched_at: string },
): TypedHit {
  return {
    id: `vector:${resolved.rel.replaceAll("/", ":")}`,
    kind: "test",
    authority: 0,
    title: `Conformance vector: ${resolved.rel}`,
    locator: `vector://${resolved.rel}`,
    revision: pin.revision,
    fetched_at: pin.fetched_at,
    stale: false,
    network: "any",
    language: "spec",
    contradiction_ids: [],
    successor: null,
    excerpt: resolved.text.replace(/\s+/g, " ").trim().slice(0, 280),
  };
}

function realPath(abs: string): string | undefined {
  try {
    return realpathSync(abs);
  } catch {
    return undefined;
  }
}

function isInside(root: string, abs: string): boolean {
  const rel = relative(resolve(root), resolve(abs));
  return rel !== "" && !rel.startsWith("..") && !isAbsolute(rel);
}

function documentToHit(doc: StoredDocument): TypedHit {
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
    excerpt: doc.body.replace(/\s+/g, " ").trim().slice(0, 280),
  };
}

function parseSymbolCard(body: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(body) as unknown;
    return parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

function stringField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
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

function loadCapabilityRows(root: string): CapabilityRecord[] {
  try {
    const raw = JSON.parse(readFileSync(join(root, "reference", "capability_graph.json"), "utf8")) as CapabilityGraphFile;
    return Array.isArray(raw.capabilities) ? raw.capabilities : [];
  } catch {
    return [];
  }
}

const CONCEPT_STOP_WORDS = new Set([
  "and",
  "the",
  "for",
  "with",
  "what",
  "which",
  "does",
  "that",
  "this",
  "from",
  "into",
  "use",
  "using",
]);

function capabilityMatchesConcept(row: CapabilityRecord, concept: string): boolean {
  const needle = concept.toLowerCase().trim();
  // A BRC-shaped concept names exactly one row: "brc-22" must not substring-match BRC-220,
  // and must not inherit packages from a row whose title merely mentions BRC-22.
  const brcRef = /^brc[-– ]?0*(\d+)$/i.exec(needle);
  if (brcRef?.[1]) {
    return row.brc === `BRC-${Number(brcRef[1])}`;
  }
  const words = needle
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length >= 3 && !CONCEPT_STOP_WORDS.has(word));
  if (words.length === 0) {
    return false;
  }
  // Word-set containment, not substring: "wallet interface" matches the BRC-100 title
  // ("…Wallet-to-Application Interface") because both words appear, without "interface"
  // substring-matching unrelated titles.
  const nameWords = new Set(row.name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
  if (words.every((word) => nameWords.has(word))) {
    return true;
  }
  const idWords = new Set(row.id.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
  if (words.every((word) => idWords.has(word))) {
    return true;
  }
  return groupingKeys(row.name).some((token) => tokenMatchesName(concept, token));
}

function uniqueSortedBrcs(ids: string[]): string[] {
  return [...new Set(ids)].sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)));
}

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort();
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
