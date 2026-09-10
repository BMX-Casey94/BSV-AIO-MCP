import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

/**
 * Offline snapshot fetch for the patent corpus (reference/patents/, see SCHEMA.md and
 * fetch-recipe.md). EPO-first: the European Publication Server serves canonical EP grant
 * (B-kind) XML with no key and a robot-friendly quota; Google Patents is a later, slow,
 * cooldown-sensitive enrichment pass (CPC, WO-only families) and is NOT used here.
 *
 * Gated offline job (BSV_AIO_ALLOW_REFRESH=1), exactly like fetch:academy. The query path
 * never imports this module and never fetches; it serves the committed snapshot.
 */

export type FetchLike = (url: string) => Promise<{ ok: boolean; status: number; text(): Promise<string> }>;

export type PatentMember = { pub: string; jurisdiction: string; status: string | null };

export type PatentFamilyRow = {
  family_key: string;
  representative_pub: string;
  title: string;
  priority_date: string | null;
  filing_date: string | null;
  publication_date: string | null;
  grant_date: string | null;
  assignee: string | null;
  inventors: string[];
  wright_role: string;
  members: PatentMember[];
  legal_status: { status: string; as_of: string; source: string };
  licence_coverage: { programme: string | null; status: string; verified: string; source: string | null; note?: string };
  cpc: string[];
  ipc: string[];
  concepts: string[];
  text_status: "full" | "biblio-only" | "deferred";
  text_source: string | null;
  path: string;
  summary_path: string;
  url: string;
  authority: number;
};

export type PatentIndex = {
  generated: string;
  source: string;
  policy: string;
  count: number;
  by_status: Record<string, number>;
  by_concept: Record<string, number>;
  families: PatentFamilyRow[];
};

export type EpoRecord = {
  docNumber: string;
  kind: string;
  lang: string;
  title: string | null;
  inventors: string[];
  applicant: string | null;
  filingDate: string | null;
  priorities: Array<{ number: string; date: string; country: string }>;
  grantDate: string | null;
  publicationDate: string | null;
  ipc: string[];
  pctApplication: string | null;
  pctPublication: string | null;
  abstractText: string | null;
  descriptionParagraphs: string[];
  claims: string[];
  biblioOnly: boolean;
};

const EPO_BASE = "https://data.epo.org/publication-server/rest/v1.2/patents";

/** EP members in preference order: granted text (B1/B2/B8/B9) before applications (A1/A2/A3). */
export function pickEpoMember(members: PatentMember[]): { number: string; kind: string; pub: string } | null {
  const ep = members.filter((m) => m.jurisdiction === "EP" || m.pub.startsWith("EP"));
  const parsed = ep
    .map((m) => {
      const match = /^EP(\d+)([AB]\d?)?$/.exec(m.pub.trim());
      return match ? { number: match[1] ?? "", kind: match[2] ?? "", pub: m.pub } : null;
    })
    .filter((m): m is { number: string; kind: string; pub: string } => m !== null && m.number !== "");
  if (parsed.length === 0) {
    return null;
  }
  const rank = (kind: string): number => {
    if (/^B/.test(kind)) return 0;
    if (kind === "A1") return 1;
    if (kind === "A2") return 2;
    if (kind === "A3") return 3;
    return 4;
  };
  parsed.sort((a, b) => rank(a.kind) - rank(b.kind));
  const best = parsed[0];
  return best ? { number: best.number, kind: best.kind || "A1", pub: best.pub } : null;
}

export function epoXmlUrl(number: string, kind: string): string {
  return `${EPO_BASE}/EP${number}NW${kind}/document.xml`;
}

/** `20180620` -> `2018-06-20` */
export function epoDate(raw: string | null): string | null {
  if (!raw || !/^\d{8}$/.test(raw)) {
    return null;
  }
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

/** Flatten EP body markup to prose: keep text, drop tags, mark images, normalise space. */
export function flattenEpMarkup(fragment: string): string {
  return decodeEntities(
    fragment
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<img\b[^>]*>/gi, " [figure] ")
      .replace(/<figref\b[^>]*>/gi, " ")
      .replace(/<\/(p|heading|li|claim|claim-text)>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/[ \t]+/g, " ")
      .replace(/\n\s+/g, "\n")
      .trim(),
  );
}

function allMatches(haystack: string, re: RegExp): RegExpExecArray[] {
  const out: RegExpExecArray[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(haystack)) !== null) {
    out.push(m);
  }
  return out;
}

/** Parse an EPO Publication Server `document.xml` (EP patent DTD v1.5). Pure; no I/O. */
export function parseEpoXml(xml: string): EpoRecord {
  const root = /<ep-patent-document\b([^>]*)>/.exec(xml);
  const rootAttrs = root?.[1] ?? "";
  const attr = (name: string): string | null => {
    const m = new RegExp(`${name}="([^"]*)"`).exec(rootAttrs);
    return m?.[1] ?? null;
  };

  // Title: B540 holds B541(lang)/B542(text) pairs; take the English pair.
  const b540 = /<B540>([\s\S]*?)<\/B540>/.exec(xml)?.[1] ?? "";
  const titlePairs = allMatches(b540, /<B541>([a-z]{2})<\/B541>\s*<B542>([\s\S]*?)<\/B542>/g);
  const enTitle = titlePairs.find((p) => p[1] === "en")?.[2] ?? titlePairs[0]?.[2] ?? null;

  const b720 = /<B720>([\s\S]*?)<\/B720>/.exec(xml)?.[1] ?? "";
  const inventors = allMatches(b720, /<snm>([\s\S]*?)<\/snm>/g).map((m) => flattenEpMarkup(m[1] ?? ""));

  const b730 = /<B730>([\s\S]*?)<\/B730>/.exec(xml)?.[1] ?? "";
  const applicant = flattenEpMarkup(/<snm>([\s\S]*?)<\/snm>/.exec(b730)?.[1] ?? "") || null;

  const filingDate = epoDate(/<B220>\s*<date>(\d{8})<\/date>/.exec(xml)?.[1] ?? null);
  const b300 = /<B300>([\s\S]*?)<\/B300>/.exec(xml)?.[1] ?? "";
  const priorities = allMatches(
    b300,
    /<B310>([\s\S]*?)<\/B310>\s*<B320>\s*<date>(\d{8})<\/date>\s*<\/B320>\s*<B330>\s*<ctry>([A-Z]{2})<\/ctry>/g,
  ).map((m) => ({ number: (m[1] ?? "").trim(), date: epoDate(m[2] ?? "") ?? "", country: m[3] ?? "" }));

  // B405 = B1 (grant) publication; B430 = A1 publication.
  const grantDate = epoDate(/<B405>\s*<date>(\d{8})<\/date>/.exec(xml)?.[1] ?? null);
  const publicationDate = epoDate(/<B430>\s*<date>(\d{8})<\/date>/.exec(xml)?.[1] ?? null);

  const b510 = /<B510EP>([\s\S]*?)<\/B510EP>/.exec(xml)?.[1] ?? "";
  const ipc = allMatches(b510, /<classification-ipcr[^>]*>\s*<text>([\s\S]*?)<\/text>/g)
    .map((m) => (m[1] ?? "").replace(/\s+/g, " ").trim())
    .map((raw) => {
      // "G06Q  20/38        20120101AFI20170901BHEP" -> "G06Q20/38"
      const code = /^([A-HY]\d{2}[A-Z])\s*(\d+\s*\/\s*\d+)?/i.exec(raw);
      if (!code) return null;
      const main = (code[2] ?? "").replace(/\s+/g, "");
      return `${code[1]}${main}`;
    })
    .filter((c): c is string => c !== null);

  const pctApplication = /<B860>[\s\S]*?<anum>([\s\S]*?)<\/anum>[\s\S]*?<\/B860>/.exec(xml)?.[1]?.trim() ?? null;
  const pctPublication = /<B870>[\s\S]*?<pnum>([\s\S]*?)<\/pnum>[\s\S]*?<\/B870>/.exec(xml)?.[1]?.trim() ?? null;

  const abstractMatch = /<abstract\b[^>]*>([\s\S]*?)<\/abstract>/.exec(xml);
  const abstractText = abstractMatch ? flattenEpMarkup(abstractMatch[1] ?? "") || null : null;

  const descMatch = /<description\b[^>]*lang="en"[^>]*>([\s\S]*?)<\/description>/.exec(xml);
  const descriptionParagraphs: string[] = [];
  if (descMatch) {
    const body = descMatch[1] ?? "";
    for (const m of allMatches(body, /<(heading|p)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
      const tag = m[1];
      const text = flattenEpMarkup(m[2] ?? "");
      if (!text) continue;
      descriptionParagraphs.push(tag === "heading" ? `## ${text}` : text);
    }
  }

  const claimsMatch = /<claims\b[^>]*lang="en"[^>]*>([\s\S]*?)<\/claims>/.exec(xml);
  const claims: string[] = [];
  if (claimsMatch) {
    for (const m of allMatches(claimsMatch[1] ?? "", /<claim\b[^>]*num="(\d+)"[^>]*>([\s\S]*?)<\/claim>/g)) {
      const text = flattenEpMarkup(m[2] ?? "").replace(/\n/g, " ").trim();
      if (text) {
        claims.push(`${Number(m[1])}. ${text}`);
      }
    }
  }

  return {
    docNumber: attr("doc-number") ?? "",
    kind: attr("kind") ?? "",
    lang: attr("lang") ?? "en",
    title: enTitle ? decodeEntities(enTitle.trim()) : null,
    inventors,
    applicant,
    filingDate,
    priorities,
    grantDate,
    publicationDate,
    ipc,
    pctApplication,
    pctPublication,
    abstractText,
    descriptionParagraphs,
    claims,
    biblioOnly: descriptionParagraphs.length === 0 && claims.length === 0,
  };
}

/** Identity guard (fetch-recipe.md failure mode 1): the parsed record must plausibly be the
 *  family we asked for — a Wright inventor, or a title match. Enumeration titles are sometimes
 *  truncated ("…steps of" vs "…steps of distributed system"), so a strict-prefix match in
 *  either direction also passes; wholly different titles (the wrong-family case) do not. */
export function identityCheck(row: PatentFamilyRow, rec: EpoRecord): { ok: boolean; reason: string | null } {
  if (rec.inventors.some((name) => /wright,\s*craig/i.test(name))) {
    return { ok: true, reason: null };
  }
  const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (rec.title) {
    const got = normalise(rec.title);
    const want = normalise(row.title);
    if (got === want || (got.length >= 20 && want.startsWith(got)) || (want.length >= 20 && got.startsWith(want))) {
      return { ok: true, reason: null };
    }
  }
  return {
    ok: false,
    reason: `fetched ${rec.docNumber}${rec.kind} titled "${rec.title ?? "?"}" inventors [${rec.inventors.join("; ")}] — expected Wright family "${row.title}"`,
  };
}

/** Compose reference/patents/families/<KEY>.md from the manifest row + parsed EP record. */
export function composeFamilyMarkdown(row: PatentFamilyRow, rec: EpoRecord, fetchedAt: string): string {
  const lines: string[] = [];
  lines.push(`# ${rec.title ?? row.title}`);
  lines.push("");
  lines.push(`- Family: ${row.family_key} (representative: ${row.representative_pub})`);
  lines.push(`- Text source: EPO Publication Server EP${rec.docNumber}${rec.kind} XML, fetched ${fetchedAt}`);
  lines.push(`- Assignee: ${rec.applicant ?? row.assignee ?? "unknown"}`);
  lines.push(`- Inventors: ${rec.inventors.join("; ") || "unknown"}`);
  lines.push(`- Priority: ${row.priority_date ?? "unknown"} — Filing: ${rec.filingDate ?? "unknown"}`);
  lines.push(`- Publication (A1): ${rec.publicationDate ?? "n/a"} — Grant (B1): ${rec.grantDate ?? "n/a"}`);
  lines.push(`- PCT: application ${rec.pctApplication ?? "n/a"}, publication ${rec.pctPublication ?? "n/a"}`);
  lines.push(`- IPC: ${rec.ipc.join("; ") || "none listed"}`);
  lines.push(`- Family members: ${row.members.map((m) => m.pub).join(", ")}`);
  lines.push("");
  if (rec.abstractText) {
    lines.push("## Abstract", "", rec.abstractText, "");
  }
  if (rec.descriptionParagraphs.length > 0) {
    lines.push("## Description", "", ...rec.descriptionParagraphs, "");
  }
  if (rec.claims.length > 0) {
    lines.push("## Claims", "", ...rec.claims, "");
  }
  return lines.join("\n");
}

export type FetchPatentsOptions = {
  sleepMs?: number;
  sleep?: (ms: number) => Promise<void>;
  onProgress?: (message: string) => void;
  force?: boolean;
  limit?: number;
};

const defaultSleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export type FetchPatentsResult = {
  fetched: number;
  skippedExisting: number;
  noEpMember: number;
  biblioOnly: number;
  identityFailures: string[];
  httpFailures: string[];
};

/**
 * Fetch every manifest family that has an EP member, write families/<KEY>.md, and enrich the
 * manifest row in place (caller persists). Resumable: existing family files are skipped
 * unless `force`. Politeness: one request per `sleepMs` (default 2.5 s), per fetch-recipe.md.
 */
export async function fetchPatentCorpus(
  root: string,
  index: PatentIndex,
  fetchImpl: FetchLike,
  opts: FetchPatentsOptions = {},
): Promise<FetchPatentsResult> {
  const sleep = opts.sleep ?? defaultSleep;
  const sleepMs = opts.sleepMs ?? 2500;
  const log = opts.onProgress ?? (() => {});
  const result: FetchPatentsResult = {
    fetched: 0,
    skippedExisting: 0,
    noEpMember: 0,
    biblioOnly: 0,
    identityFailures: [],
    httpFailures: [],
  };
  const fetchedAt = new Date().toISOString().slice(0, 10);
  const rows = opts.limit ? index.families.slice(0, opts.limit) : index.families;

  for (const row of rows) {
    const file = join(root, "reference", "patents", row.path);
    if (!opts.force && existsSync(file)) {
      result.skippedExisting += 1;
      continue;
    }
    const member = pickEpoMember(row.members);
    if (!member) {
      row.text_status = "deferred";
      result.noEpMember += 1;
      continue;
    }
    // B8/B9 are corrected-front-page reissues; the pub server sometimes 500s on them — retry as B1.
    let url = epoXmlUrl(member.number, member.kind);
    let res = await fetchImpl(url);
    if (!res.ok && /^B[89]$/.test(member.kind)) {
      url = epoXmlUrl(member.number, "B1");
      res = await fetchImpl(url);
    }
    if (!res.ok) {
      row.text_status = "deferred";
      result.httpFailures.push(`${row.family_key}: HTTP ${res.status} for ${url}`);
      log(`HTTP ${res.status} ${row.family_key} (${member.pub})`);
      await sleep(sleepMs);
      continue;
    }
    const rec = parseEpoXml(await res.text());
    const check = identityCheck(row, rec);
    if (!check.ok) {
      row.text_status = "deferred";
      result.identityFailures.push(`${row.family_key}: ${check.reason ?? "identity mismatch"}`);
      log(`IDENTITY FAIL ${row.family_key}`);
      await sleep(sleepMs);
      continue;
    }

    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, composeFamilyMarkdown(row, rec, fetchedAt), "utf8");

    row.inventors = rec.inventors;
    row.assignee = rec.applicant ?? row.assignee;
    row.filing_date = rec.filingDate ?? row.filing_date;
    row.publication_date = rec.publicationDate ?? row.publication_date;
    row.grant_date = rec.grantDate ?? row.grant_date;
    if (row.priority_date === null && rec.priorities.length > 0) {
      row.priority_date = rec.priorities.map((p) => p.date).sort()[0] ?? null;
    }
    row.ipc = rec.ipc;
    row.text_source = `EP${rec.docNumber}${rec.kind}`;
    row.text_status = rec.biblioOnly ? "biblio-only" : "full";
    if (rec.biblioOnly) {
      result.biblioOnly += 1;
    }
    result.fetched += 1;
    log(`fetched ${row.family_key} <- EP${rec.docNumber}${rec.kind} (${rec.biblioOnly ? "biblio" : `${rec.descriptionParagraphs.length}p ${rec.claims.length}c`})`);
    await sleep(sleepMs);
  }
  return result;
}

/** Recompute by_status and persist the manifest (retention-guarded like other indexes). */export function writePatentIndex(root: string, index: PatentIndex): void {
  const file = join(root, "reference", "patents", "patent_index.json");
  const previous = existsSync(file)
    ? (JSON.parse(readFileSync(file, "utf8")) as PatentIndex)
    : null;
  if (previous && index.families.length < previous.families.length * 0.8) {
    throw new Error(
      `Refusing to write patent_index.json: ${index.families.length} families vs previous ${previous.families.length} (80% retention guard).`,
    );
  }
  const byStatus: Record<string, number> = {};
  for (const f of index.families) {
    byStatus[f.legal_status.status] = (byStatus[f.legal_status.status] ?? 0) + 1;
  }
  index.by_status = byStatus;
  index.count = index.families.length;
  writeFileSync(file, JSON.stringify(index, null, 2) + "\n", "utf8");
}

/** Standard advisories (SCHEMA.md). `covered` is reserved — no enumerable instrument exists. */
export function advisoryFor(row: PatentFamilyRow): string {
  const status = row.legal_status.status;
  if (status === "expired" || status === "lapsed") {
    return (
      `Legal status: ${status} as of ${row.legal_status.as_of}. Lapsed patents generally impose ` +
      "no licensing constraint, but verify independently — this is not legal advice."
    );
  }
  return (
    "No verifiable BSV licensing programme covering this patent family was found as of " +
    `${row.licence_coverage.verified}. If you intend to implement the claimed subject matter, ` +
    "check its legal status and take professional advice before proceeding. This is not legal advice."
  );
}

/**
 * Thin summary card for families without pinned full text (biblio-only EP applications,
 * deferred non-EP families). Carries catalogue metadata only; the "full" families get rich
 * cards from the summarisation pass. Never overwrites an existing card.
 */
export function renderThinSummaryCard(row: PatentFamilyRow): string {
  const reason =
    row.text_status === "biblio-only"
      ? `the EP publication ${row.text_source ?? ""} is biblio-only (Euro-PCT applications publish as a front page referencing the WO pamphlet)`.trim()
      : "no EP member exists to fetch from the EPO Publication Server";
  return [
    `# ${row.title} (${row.representative_pub})`,
    "",
    `- Family: ${row.family_key} — members: ${row.members.map((m) => m.pub).join(", ")}`,
    `- Assignee: ${row.assignee ?? "unknown"} — Inventors: ${(row.inventors ?? []).join("; ") || "unknown"}`,
    `- Priority: ${row.priority_date ?? "unknown"} — Legal status: ${row.legal_status.status} (as of ${row.legal_status.as_of})`,
    `- Licence: ${row.licence_coverage.status} (verified ${row.licence_coverage.verified})`,
    `- IPC: ${(row.ipc ?? []).join("; ") || "none listed"}`,
    `- Concepts: ${(row.concepts ?? []).join(", ") || "(untagged — pending full-text pass)"}`,
    "",
    "## Status of this card",
    "",
    `Catalogue metadata only: full text is not yet pinned for this family because ${reason}.`,
    "",
    "## Advisory",
    "",
    advisoryFor(row),
    "",
  ].join("\n");
}

/** Write thin cards for every non-`full` family lacking a summary. Returns keys written. */
export function writeThinSummaryCards(root: string, index: PatentIndex): string[] {
  const written: string[] = [];
  for (const row of index.families) {
    if (row.text_status === "full") {
      continue;
    }
    const file = join(root, "reference", "patents", row.summary_path);
    if (existsSync(file)) {
      continue;
    }
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, renderThinSummaryCard(row), "utf8");
    written.push(row.family_key);
  }
  return written;
}
