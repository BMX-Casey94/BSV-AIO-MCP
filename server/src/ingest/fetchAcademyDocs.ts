import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

/**
 * Offline snapshot fetch for the BSV Academy opcode/Script docs and the Rúnar docs.
 *
 * The academy publishes every page as an agent-friendly `.md` mirror and indexes the whole
 * higher-learning section in `llms.txt`; we parse that index for the two trees we want and
 * skip quiz/assessment noise. The Rúnar docs site serves HTML only, so those pages come from
 * an explicit list and are fetched as markdown.
 *
 * This is a gated offline job (BSV_AIO_ALLOW_REFRESH=1), exactly like the Tier 0 refresh. The query
 * path never imports this module and never fetches; it serves the committed snapshot.
 */

const ACADEMY_LLMS = "https://hub.bsvblockchain.org/llms.txt";
const ACADEMY_ORIGIN = "https://hub.bsvblockchain.org";

const ACADEMY_TREES: ReadonlyArray<{ tree: string; prefix: string }> = [
  { tree: "opcodes", prefix: "/higher-learning/bsv-academy/bsv-opcodes" },
  { tree: "script", prefix: "/higher-learning/bsv-academy/introduction-to-bitcoin-script" },
];

/** Rúnar docs are HTML-only; snapshot the API/CLI/contract pages an agent needs to author a contract. */
const RUNAR_PAGES: ReadonlyArray<{ slug: string; url: string }> = [
  { slug: "sdk-overview", url: "https://runar.build/docs/sdk/overview" },
  { slug: "sdk-api", url: "https://runar.build/docs/api-reference/sdk-api" },
  { slug: "compiler-api", url: "https://runar.build/docs/api-reference/compiler-api" },
  { slug: "cli-reference", url: "https://runar.build/docs/api-reference/cli-reference" },
  { slug: "quick-start", url: "https://runar.build/docs/getting-started/quick-start" },
  { slug: "contract-basics", url: "https://runar.build/docs/writing-contracts/contract-basics" },
  { slug: "contract-decorators-and-types", url: "https://runar.build/docs/api-reference/contract-decorators-and-types" },
];

/** Leaf pages that carry no citable substance (quizzes, assessments, takeaways, knowledge checks). */
const NOISE =
  /(?:^|\/)(?:assessment-\d+|key-takeaways|summary-and-key-takeaways|knowledge-check|course-review|summary)\.md$/i;
const QUIZ =
  /(?:which-|what-happens-|true-false-|match-each-|youre-designing-|you-need-to-|in-the-script-|which-opcode-|which-statements-)/i;

export type FetchLike = (url: string) => Promise<{ ok: boolean; status: number; text(): Promise<string> }>;

export type AcademyPage = {
  tree: string;
  slug: string;
  url: string;
  markdown: string;
};

export type AcademyFetchResult = {
  pages: AcademyPage[];
  fetchedAt: string;
};

/** Parse the academy `llms.txt` for the `.md` URLs under each wanted tree, minus noise. */
export function parseAcademyIndex(llmsTxt: string): Array<{ tree: string; url: string }> {
  const out: Array<{ tree: string; url: string }> = [];
  const seen = new Set<string>();
  const linkRe = /\((https:\/\/hub\.bsvblockchain\.org\/higher-learning\/bsv-academy\/[^)\s]+?\.md)\)/g;
  let match: RegExpExecArray | null;
  while ((match = linkRe.exec(llmsTxt)) !== null) {
    const url = match[1];
    if (!url) {
      continue;
    }
    const path = url.slice(ACADEMY_ORIGIN.length);
    const tree = ACADEMY_TREES.find((t) => path === `${t.prefix}.md` || path.startsWith(`${t.prefix}/`));
    if (!tree) {
      continue;
    }
    if (NOISE.test(path) || QUIZ.test(path)) {
      continue;
    }
    if (seen.has(url)) {
      continue;
    }
    seen.add(url);
    out.push({ tree: tree.tree, url });
  }
  return out;
}

/** Derive a stable slug for a snapshot file from a page URL. */
export function slugFor(tree: string, url: string): string {
  const path = url.startsWith("http") ? new URL(url).pathname : url;
  const trimmed = path.replace(/\.md$/i, "").replace(/\/+$/, "");
  const segments = trimmed.split("/").filter(Boolean);
  const leaf = segments[segments.length - 1] ?? tree;
  return leaf.replace(/[^a-z0-9-_]+/gi, "-").toLowerCase();
}

export async function fetchAcademyDocs(fetchImpl: FetchLike): Promise<AcademyFetchResult> {
  const fetchedAt = new Date().toISOString();
  const pages: AcademyPage[] = [];

  const indexRes = await fetchImpl(ACADEMY_LLMS);
  if (!indexRes.ok) {
    throw new Error(`Failed to fetch academy index ${ACADEMY_LLMS}: HTTP ${indexRes.status}`);
  }
  const index = parseAcademyIndex(await indexRes.text());
  for (const { tree, url } of index) {
    const res = await fetchImpl(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch academy page ${url}: HTTP ${res.status}`);
    }
    pages.push({ tree, slug: slugFor(tree, url), url, markdown: await res.text() });
  }

  for (const { slug, url } of RUNAR_PAGES) {
    const res = await fetchImpl(url);
    if (!res.ok) {
      // A missing Rúnar page must not abort the academy snapshot; the remaining cards stay citable.
      continue;
    }
    pages.push({ tree: "runar", slug, url, markdown: await res.text() });
  }

  return { pages, fetchedAt };
}

/** Write the fetched pages under `<root>/reference/academy/<tree>/<slug>.md` plus a manifest. */
export function writeAcademySnapshot(root: string, result: AcademyFetchResult): { written: number } {
  const base = join(root, "reference", "academy");
  // All-or-nothing: drop the previous trees so quiz leftovers cannot linger after a tighter filter.
  for (const tree of ["opcodes", "script", "runar"]) {
    rmSync(join(base, tree), { recursive: true, force: true });
  }
  for (const page of result.pages) {
    const file = join(base, page.tree, `${page.slug}.md`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page.markdown, "utf8");
  }
  const manifest = {
    generated: result.fetchedAt,
    policy:
      "Query path reads committed academy cards only. This snapshot is refreshed by the gated fetch:academy job (BSV_AIO_ALLOW_REFRESH=1).",
    pages: result.pages.map((p) => ({ tree: p.tree, slug: p.slug, source: p.url })),
  };
  writeFileSync(join(base, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  return { written: result.pages.length };
}
