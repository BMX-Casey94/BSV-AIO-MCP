import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename, join, relative } from "node:path";
import {
  hashSnapshotSet,
  readBrcIndexMeta,
  snapshotFetchedAt,
} from "./indexManifest.js";
import { ingestRepoCards, ingestTier0Cards } from "./tier0Ingest.js";
import type { KnowledgeStore, StoredDocument } from "../store/knowledgeStore.js";
import type { HitKind, Language } from "../types.js";

export type IngestOptions = {
  tier0Root?: string;
  tier1Root?: string;
};

export type IngestResult = {
  documents: number;
  packages: number;
  symbols: number;
};

type Frontmatter = {
  title?: string;
  slug?: string;
  era?: string;
  date?: string;
};

type BrcIndexFile = {
  brcs?: BrcRow[];
};

type BrcRow = {
  number?: unknown;
  id?: unknown;
  title?: unknown;
  category?: unknown;
  path?: unknown;
  authority?: unknown;
};

type ContradictionFile = {
  generated?: unknown;
  findings?: ContradictionFinding[];
};

type ContradictionFinding = {
  id?: unknown;
  topic?: unknown;
  nature?: unknown;
  severity?: unknown;
  position_a?: ContradictionPosition;
  position_b?: ContradictionPosition;
};

type ContradictionPosition = {
  claim?: unknown;
  sources?: Array<{ title?: unknown; quote?: unknown }>;
};

type DenyListFile = {
  purpose?: unknown;
  entries?: Array<{
    name?: unknown;
    reason?: unknown;
    successor?: unknown;
  }>;
};

export function ingestSnapshots(
  root: string,
  store: KnowledgeStore,
  options?: IngestOptions,
): IngestResult {
  const tier0Root = options?.tier0Root ?? join(root, "reference", "tier0");
  const tier1Root = options?.tier1Root ?? join(root, "reference", "tier1");
  const brc = readBrcIndexMeta(root);
  const fetchedAt = snapshotFetchedAt(root, brc.generated);
  const snapshotRevision = hashSnapshotSet(root);
  const brcRevision = brc.revision || snapshotRevision;

  const documents: StoredDocument[] = [];

  documents.push(...ingestEssays(root, fetchedAt, snapshotRevision));
  documents.push(...ingestEducation(root, fetchedAt, snapshotRevision));
  documents.push(...ingestBrcs(root, fetchedAt, brcRevision));
  documents.push(...ingestContradictions(root, fetchedAt, snapshotRevision));
  documents.push(...ingestCuratedCards(root, fetchedAt, snapshotRevision));
  documents.push(...ingestDenyList(root, fetchedAt, snapshotRevision));
  documents.push(...ingestTrainingGuide(root, fetchedAt, snapshotRevision));
  documents.push(...ingestAcademy(root, fetchedAt, snapshotRevision));

  return store.transaction(() => {
    store.clearDocuments();
    for (const doc of documents) {
      store.insertDocument(doc);
    }
    const tier0 = existsSync(tier0Root)
      ? ingestTier0Cards(tier0Root, store, { revision: snapshotRevision, fetched_at: fetchedAt })
      : { packages: 0, symbols: 0, documents: 0 };
    const tier1 = existsSync(tier1Root)
      ? ingestRepoCards(tier1Root, store, { revision: snapshotRevision, fetched_at: fetchedAt }, "Tier 1")
      : { packages: 0, symbols: 0, documents: 0 };
    const total = documents.length + tier0.documents + tier1.documents;
    store.setMeta("count.brcs", String(countKind(documents, "brc")));
    store.setMeta("count.essays", String(countKind(documents, "essay")));
    store.setMeta("count.education", String(countKind(documents, "principle")));
    store.setMeta("count.contradictions", String(countKind(documents, "contradiction")));
    store.setMeta("count.documents", String(total));
    return {
      documents: total,
      packages: tier0.packages + tier1.packages,
      symbols: tier0.symbols + tier1.symbols,
    };
  });
}

function countKind(documents: StoredDocument[], kind: HitKind): number {
  return documents.filter((doc) => doc.kind === kind).length;
}

function ingestEssays(root: string, fetchedAt: string, revision: string): StoredDocument[] {
  const dirs: Array<{ dir: string; era: string }> = [
    { dir: join(root, "summaries"), era: "substack" },
    { dir: join(root, "summaries-medium"), era: "medium" },
  ];
  const out: StoredDocument[] = [];
  for (const { dir, era } of dirs) {
    for (const abs of listMarkdown(dir)) {
      const text = readFileSync(abs, "utf8");
      const fm = parseFrontmatter(text);
      const slug = fm.slug || basename(abs, ".md");
      const title = fm.title || firstHeading(text) || slug;
      // Frontmatter feeds title/slug; it is not content and must not leak into excerpts.
      const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
      out.push(
        document({
          id: `essay:${era}:${slug}`,
          kind: "essay",
          authority: 4,
          title,
          locator: `csw://essay/${era}/${slug}`,
          revision,
          fetched_at: fetchedAt,
          language: "prose",
          era,
          body,
        }),
      );
    }
  }
  return out;
}

function ingestEducation(root: string, fetchedAt: string, revision: string): StoredDocument[] {
  const dir = join(root, "education");
  const out: StoredDocument[] = [];
  for (const abs of listMarkdown(dir)) {
    const text = readFileSync(abs, "utf8");
    const fm = parseFrontmatter(text);
    const rel = posixRel(root, abs);
    const parsed = parseEducationName(basename(abs));
    const era = fm.era || parsed.era;
    const slug = fm.slug || parsed.slug;
    const title = fm.title || firstHeading(text) || slug;
    out.push(
      document({
        id: `principle:${era}:${slug}`,
        kind: "principle",
        authority: 4,
        title,
        locator: rel,
        revision,
        fetched_at: fetchedAt,
        language: "prose",
        era,
        body: text,
      }),
    );
  }
  return out;
}

function ingestBrcs(root: string, fetchedAt: string, revision: string): StoredDocument[] {
  const raw = JSON.parse(readFileSync(join(root, "reference", "brc_index.json"), "utf8")) as BrcIndexFile;
  const rows = Array.isArray(raw.brcs) ? raw.brcs : [];
  const out: StoredDocument[] = [];
  for (const row of rows) {
    const number = typeof row.number === "number" ? row.number : undefined;
    if (number === undefined) {
      continue;
    }
    const category = typeof row.category === "string" ? row.category : "";
    const title = typeof row.title === "string" ? row.title : `BRC-${number}`;
    const path = typeof row.path === "string" ? row.path : "";
    const catalogueId = typeof row.id === "string" ? row.id : `BRC-${number}`;
    const authority =
      typeof row.authority === "number" ? row.authority : category === "opinions" ? 4 : 1;
    // When the gated refresh has pinned the BRC body, the card quotes the real markdown. The
    // header stays a plain title line — never "Category:/Path:" — so the catalogue-stub
    // detector in investigate only fires when the body genuinely is absent.
    const pinnedBody = readPinnedBrcBody(root, number);
    out.push(
      document({
        id: `brc:${number}`,
        kind: "brc",
        authority,
        title,
        locator: path ? `bsv-blockchain/BRCs/${path}` : `brc://spec/${number}`,
        revision,
        fetched_at: fetchedAt,
        language: "spec",
        era: null,
        body: pinnedBody
          ? `${catalogueId} ${title}\n\n${pinnedBody}`
          : [`${catalogueId} ${title}`, category ? `Category: ${category}` : "", path ? `Path: ${path}` : ""]
              .filter(Boolean)
              .join("\n"),
      }),
    );
  }
  return out;
}

/** The gated refresh pins each BRC body as `reference/brcs/NNNN.md`; absent means catalogue-only. */
function readPinnedBrcBody(root: string, number: number): string {
  if (!Number.isInteger(number) || number < 0 || number > 9999) {
    return "";
  }
  const abs = join(root, "reference", "brcs", `${String(number).padStart(4, "0")}.md`);
  return existsSync(abs) ? readFileSync(abs, "utf8").trim() : "";
}

function ingestContradictions(root: string, fetchedAt: string, revision: string): StoredDocument[] {
  const abs = join(root, "substack-articles", "contradictions.json");
  const raw = JSON.parse(readFileSync(abs, "utf8")) as ContradictionFile;
  const findings = Array.isArray(raw.findings) ? raw.findings : [];
  const out: StoredDocument[] = [];
  for (const finding of findings) {
    const id = typeof finding.id === "string" ? finding.id : undefined;
    if (!id) {
      continue;
    }
    const topic = typeof finding.topic === "string" ? finding.topic : id;
    const nature = typeof finding.nature === "string" ? finding.nature : "";
    const severity = typeof finding.severity === "string" ? finding.severity : "";
    out.push(
      document({
        id: `contradiction:${id}`,
        kind: "contradiction",
        authority: 4,
        title: topic,
        locator: `csw://contradictions/${id}`,
        revision,
        fetched_at: fetchedAt,
        language: "prose",
        era: null,
        body: formatContradiction(finding, topic, nature, severity),
      }),
    );
  }
  return out;
}

function ingestCuratedCards(root: string, fetchedAt: string, revision: string): StoredDocument[] {
  return [
    markdownDoc({
      root,
      rel: "reference/testnet-ops.md",
      id: "ops:testnet",
      locator: "ops://testnet",
      fallbackTitle: "Testnet operations",
      authority: 3,
      language: "prose",
      fetchedAt,
      revision,
    }),
    markdownDoc({
      root,
      rel: "reference/ordinality-rules.md",
      id: "ops:ordinality",
      locator: "ops://ordinality",
      fallbackTitle: "Ordinality and provenance",
      // An operator playbook, not a spec: the card itself defers to brc://spec/150, and the
      // authority model puts ops cards at 3.
      authority: 3,
      language: "prose",
      fetchedAt,
      revision,
    }),
    markdownDoc({
      root,
      rel: "reference/teranode-benchmarks.md",
      id: "fact:teranode-benchmarks",
      locator: "fact://teranode-benchmarks",
      fallbackTitle: "Teranode throughput benchmarks",
      // Curated benchmark facts with conditions and sources inline; not a spec, not an essay.
      authority: 3,
      language: "prose",
      fetchedAt,
      revision,
    }),
    markdownDoc({
      root,
      rel: "reference/bitcoin-scaling-history.md",
      id: "analysis:bitcoin-scaling-history",
      locator: "analysis://bitcoin-scaling-history",
      fallbackTitle: "Bitcoin's 2014–2017 direction change",
      // Attributed third-party analysis (Casey Atkins) with documented/disputed/unproven
      // tiers inline. Essay-tier authority: one analyst's sourced interpretation, never
      // corpus-verified fact.
      authority: 4,
      language: "prose",
      fetchedAt,
      revision,
    }),
  ].filter((doc): doc is StoredDocument => doc !== undefined);
}

function ingestDenyList(root: string, fetchedAt: string, revision: string): StoredDocument[] {
  const abs = join(root, "reference", "deny-list.json");
  if (!existsSync(abs)) {
    throw new Error("Required consume file is missing: reference/deny-list.json");
  }
  const raw = JSON.parse(readFileSync(abs, "utf8")) as DenyListFile;
  const purpose = typeof raw.purpose === "string" ? raw.purpose : "Packages the MCP must never recommend for new work.";
  const entries = Array.isArray(raw.entries) ? raw.entries : [];
  const lines = entries.map((entry) => {
    const name = typeof entry.name === "string" ? entry.name : "unknown";
    const reason = typeof entry.reason === "string" ? entry.reason : "";
    const successor = typeof entry.successor === "string" ? ` Successor: ${entry.successor}.` : "";
    return `- ${name}: ${reason}${successor}`;
  });
  return [
    document({
      id: "repo:deny",
      kind: "doc",
      authority: 3,
      title: "Package deny list",
      locator: "repo://deny",
      revision,
      fetched_at: fetchedAt,
      language: "prose",
      era: null,
      body: [purpose, ...lines].join("\n"),
    }),
  ];
}

function ingestTrainingGuide(root: string, fetchedAt: string, revision: string): StoredDocument[] {
  const abs = join(root, "reference", "brc-llm-training-guide.txt");
  if (!existsSync(abs)) {
    return [];
  }
  const text = readFileSync(abs, "utf8");
  return [
    document({
      id: "brc:guide",
      kind: "doc",
      authority: 3,
      title: firstHeading(text) || "BRC LLM training guide",
      locator: "brc://guide",
      revision,
      fetched_at: fetchedAt,
      language: "spec",
      era: null,
      body: text,
    }),
  ];
}

type AcademyManifest = {
  pages?: Array<{ tree?: unknown; slug?: unknown; source?: unknown }>;
};

/**
 * One card per snapshotted academy/Rúnar docs page. The GitBook "Agent Instructions" footer on
 * every academy page advertises a live `?ask=` endpoint; we serve a committed snapshot and never
 * call it, so that boilerplate is stripped and only the substantive content is kept verbatim.
 */
function ingestAcademy(root: string, fetchedAt: string, revision: string): StoredDocument[] {
  const base = join(root, "reference", "academy");
  if (!existsSync(base)) {
    return [];
  }
  const sources = new Map<string, string>();
  const manifestPath = join(base, "manifest.json");
  if (existsSync(manifestPath)) {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as AcademyManifest;
    for (const page of Array.isArray(manifest.pages) ? manifest.pages : []) {
      if (typeof page.tree === "string" && typeof page.slug === "string") {
        sources.set(`${page.tree}/${page.slug}`, typeof page.source === "string" ? page.source : "");
      }
    }
  }
  const out: StoredDocument[] = [];
  for (const abs of listMarkdown(base)) {
    const rel = relative(base, abs).split("\\").join("/");
    const key = rel.replace(/\.md$/i, "");
    const raw = readFileSync(abs, "utf8");
    // The academy serves markdown mirrors; runar.build serves HTML. Cards store plain text either
    // way so FTS and excerpts never carry markup. The snapshot file itself stays byte-faithful.
    const text = stripAcademyBoilerplate(/^\s*<!DOCTYPE html/i.test(raw) ? htmlToText(raw) : raw);
    const slug = basename(abs, ".md");
    out.push(
      document({
        id: `academy:${key}`,
        kind: "doc",
        authority: 1,
        title: firstHeading(text) || slug,
        locator: sources.get(key) || `academy://${key}`,
        revision,
        fetched_at: fetchedAt,
        language: "spec",
        era: null,
        body: text,
      }),
    );
  }
  return out;
}

/** Remove the GitBook banner blockquote and the trailing "Agent Instructions" section. */
function stripAcademyBoilerplate(text: string): string {
  const withoutFooter = text.split(/\r?\n# Agent Instructions/)[0] ?? "";
  const lines = withoutFooter.split(/\r?\n/);
  const body = lines[0]?.startsWith(">") ? lines.slice(1) : lines;
  return body
    .join("\n")
    .replace(/<figure\b[\s\S]*?<\/figure>/gi, "")
    .replace(/\{%\s*embed[^%]*?%\}/g, "")
    .replace(/\\_/g, "_")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Deterministic HTML→text for the Rúnar docs (Astro site). Cuts to the <article> region so the
 * nav/sidebar chrome never reaches a card, then converts headings/lists and strips the rest.
 * No dependency, no heuristics beyond tag structure.
 */
function htmlToText(html: string): string {
  const article = /<article\b[^>]*>([\s\S]*?)<\/article>/i.exec(html);
  const region = article?.[1] ?? html;
  return region
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<(nav|header|aside|footer|svg|form|button)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<h1\b[^>]*>/gi, "\n\n# ")
    .replace(/<h2\b[^>]*>/gi, "\n\n## ")
    .replace(/<h3\b[^>]*>/gi, "\n\n### ")
    .replace(/<h[4-6]\b[^>]*>/gi, "\n\n#### ")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<li\b[^>]*>/gi, "\n- ")
    .replace(/<\/(?:p|div|section|ul|ol|table|pre|blockquote|tr)>/gi, "\n\n")
    .replace(/<br\b[^>]*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function markdownDoc(args: {
  root: string;
  rel: string;
  id: string;
  locator: string;
  fallbackTitle: string;
  authority: number;
  language: Language;
  fetchedAt: string;
  revision: string;
}): StoredDocument | undefined {
  const abs = join(args.root, ...args.rel.split("/"));
  if (!existsSync(abs)) {
    return undefined;
  }
  const text = readFileSync(abs, "utf8");
  return document({
    id: args.id,
    kind: "doc",
    authority: args.authority,
    title: firstHeading(text) || args.fallbackTitle,
    locator: args.locator,
    revision: args.revision,
    fetched_at: args.fetchedAt,
    language: args.language,
    era: null,
    body: text,
  });
}

function document(
  doc: Omit<StoredDocument, "network"> & { network?: StoredDocument["network"] },
): StoredDocument {
  return {
    network: "any",
    ...doc,
  };
}

function listMarkdown(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }
  return readdirSync(dir, { recursive: true, encoding: "utf8" })
    .filter((name) => name.endsWith(".md") && !/(^|[\\/])README\.md$/i.test(name))
    .map((name) => join(dir, name));
}

function parseEducationName(filename: string): { era: string; slug: string } {
  const base = filename.replace(/\.md$/i, "");
  const sep = base.indexOf("--");
  if (sep === -1) {
    return { era: "", slug: base };
  }
  return { era: base.slice(0, sep), slug: base.slice(sep + 2) };
}

function parseFrontmatter(text: string): Frontmatter {
  if (!text.startsWith("---")) {
    return {};
  }
  const end = text.indexOf("\n---", 3);
  if (end === -1) {
    return {};
  }
  const raw = text.slice(4, end);
  const out: Frontmatter = {};
  for (const line of raw.split(/\r?\n/)) {
    const match = /^(title|slug|era|date):\s*(.*)$/.exec(line);
    if (!match) {
      continue;
    }
    const key = match[1] as keyof Frontmatter;
    out[key] = stripQuotes(match[2] ?? "");
  }
  return out;
}

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function firstHeading(text: string): string | undefined {
  const match = /^#\s+(.+)$/m.exec(text);
  return match?.[1]?.trim();
}

function posixRel(root: string, abs: string): string {
  return relative(root, abs).replaceAll("\\", "/");
}

function formatContradiction(
  finding: ContradictionFinding,
  topic: string,
  nature: string,
  severity: string,
): string {
  const parts = [topic];
  if (nature) {
    parts.push(`Nature: ${nature}`);
  }
  if (severity) {
    parts.push(`Severity: ${severity}`);
  }
  parts.push(positionBlock("A", finding.position_a));
  parts.push(positionBlock("B", finding.position_b));
  return parts.filter(Boolean).join("\n\n");
}

function positionBlock(label: string, position: ContradictionPosition | undefined): string {
  if (!position) {
    return "";
  }
  const claim = typeof position.claim === "string" ? position.claim : "";
  const quotes = (position.sources ?? [])
    .map((source) => {
      const title = typeof source.title === "string" ? source.title : "";
      const quote = typeof source.quote === "string" ? source.quote : "";
      return [title, quote].filter(Boolean).join(" — ");
    })
    .filter(Boolean);
  return [`Position ${label}: ${claim}`, ...quotes].filter(Boolean).join("\n");
}
