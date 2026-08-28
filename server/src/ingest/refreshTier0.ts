import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  copyFileSync,
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { scanExports, type ScannedSymbol } from "./exportScan.js";

/** A row of `reference/tier0/manifest.json`. `sha` and `package` stay null until refresh confirms them. */
export type Tier0RepoPin = {
  repo: string;
  sha: string | null;
  package: string | null;
  language: string;
  role: string;
};

export type RefreshTier0Options = {
  root: string;
  tier0Root: string;
  repos: Tier0RepoPin[];
  allowRefresh: boolean;
  fetch: typeof fetch;
};

export type RefreshTier0Result = {
  repos: number;
  packages: string[];
  brcs: number;
  vectors: number;
};

type ManifestFile = {
  generated?: unknown;
  policy?: unknown;
  repos?: unknown;
};

type PackagesFile = {
  revision?: unknown;
  packages?: unknown;
};

const CODELOAD_ORIGIN = "https://codeload.github.com";
const GITHUB_API_ORIGIN = "https://api.github.com";
const DEFAULT_POLICY =
  "Query path reads committed cards only. Refresh fetches the GitHub tarball at the pinned SHA when BSV_AIO_ALLOW_REFRESH=1.";
const RETENTION_FLOOR = 0.8;
const RETENTION_APPLIES_FROM = 2;
/** Only these manifest roles publish a package label; every other role keeps `package: null`. */
const PACKAGE_ROLES = new Set(["sdk", "wallet"]);
const REPO_PATTERN = /^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/;
const SHA_PATTERN = /^[0-9a-f]{7,40}$/;
/** The BRC body set only guards against collapse once a real corpus exists. */
const BRC_RETENTION_APPLIES_FROM = 50;
const VECTOR_RETENTION_APPLIES_FROM = 10;
/** A conformance vector is a small args/result pair; anything larger is reviewed by a human. */
const VECTOR_MAX_BYTES = 1024 * 1024;

/**
 * Offline Tier 0 refresh: downloads each pinned GitHub tree, reads the package label out of the
 * checkout's own manifest, scans public exports into `symbols.json`, copies the spec repo's
 * `specs/`, and rewrites the Tier 0 cards from the one `repos` run — all-or-nothing across the
 * cards. Never reachable from the query path — the server serves committed cards only.
 */
export async function refreshTier0(options: RefreshTier0Options): Promise<RefreshTier0Result> {
  if (options.allowRefresh !== true) {
    throw new Error(
      "Tier 0 refresh is an explicit offline job: run it with BSV_AIO_ALLOW_REFRESH=1. The query path serves committed cards and never fetches.",
    );
  }

  const pinned: Tier0RepoPin[] = [];
  const specSources: string[] = [];
  const brcSources: Array<{ checkout: string; sha: string; repo: string }> = [];
  const vectorSources: Array<{ checkout: string; sha: string; repo: string }> = [];
  const packages = new Set<string>();
  const symbols: ScannedSymbol[] = [];

  for (const row of options.repos) {
    const repo = assertRepo(row.repo);
    const sha = row.sha ? assertSha(repo, row.sha) : await resolveHeadSha(repo, options.fetch);
    const checkout = await downloadCheckout(options.root, repo, sha, options.fetch);
    const role = row.role.trim().toLowerCase();
    const publishes = PACKAGE_ROLES.has(role);
    const label = publishes ? packageLabel(checkout, row.language) : undefined;
    if (label) {
      packages.add(label);
    }
    // Scan symbols only for package repos; specs/templates/standards/vectors are not packages and
    // must not contribute symbols (keeps symbols.json aligned with the role gate on labels).
    if (publishes && (row.language === "ts" || row.language === "go")) {
      symbols.push(...scanExports(checkout, repo, row.language));
    }
    const specs = join(checkout, "specs");
    if (role === "specs" && existsSync(specs)) {
      specSources.push(specs);
    }
    if (role === "standards") {
      brcSources.push({ checkout, sha, repo });
    }
    if (role === "vectors") {
      vectorSources.push({ checkout, sha, repo });
    }
    pinned.push({ ...row, repo, sha, package: publishes ? (label ?? row.package ?? null) : null });
  }

  const names = [...packages].sort((a, b) => a.localeCompare(b, "en-GB"));
  // Existing cards are read and validated before any card is written, so a corrupt card set fails
  // the run with nothing half-rewritten.
  const policy = readManifestPolicy(options.tier0Root);
  assertPackageIntegrity(options.tier0Root, names);
  // Plan the BRC-body and vector snapshots up front: a retention breach or unreadable checkout
  // throws here, while every committed card is still untouched.
  const brcDest = join(options.root, "reference", "brcs");
  const vectorDest = join(options.tier0Root, "vectors");
  const brcPlan = planBrcBodies(brcDest, brcSources);
  const vectorPlan = planVectors(vectorDest, vectorSources);

  mkdirSync(options.tier0Root, { recursive: true });
  writeJsonFile(join(options.tier0Root, "packages.json"), {
    revision: pinRevision(pinned),
    packages: names,
  });
  writeJsonFile(join(options.tier0Root, "symbols.json"), {
    revision: pinRevision(pinned),
    symbols: uniqueSymbols(symbols),
  });
  writeJsonFile(join(options.tier0Root, "manifest.json"), {
    generated: new Date().toISOString().slice(0, 10),
    policy,
    repos: pinned,
  });
  for (const source of specSources) {
    replaceDirectory(source, join(options.tier0Root, "specs"));
  }
  const brcs = brcPlan ? writeBrcBodies(brcDest, brcPlan) : 0;
  const vectors = vectorPlan ? writeVectors(vectorDest, vectorPlan) : 0;

  return { repos: pinned.length, packages: names, brcs, vectors };
}

/** A planned BRC-body snapshot: which `NNNN.md` files to pin, plus provenance for the manifest. */
type BrcBodyPlan = {
  files: Array<{ name: string; abs: string }>;
  sources: Array<{ repo: string; sha: string }>;
};

/** A planned vector snapshot: merged `{domain}/{case}.json` cards with their source parts. */
type VectorPlan = {
  files: Array<{ rel: string; card: string }>;
};

/**
 * Plans the BRC body snapshot from the standards checkout(s): every `NNNN.md` in the repo is a
 * BRC body, keyed flat by number so ingest can find `0062.md` for BRC-62. Returns undefined when
 * no standards repo is pinned, in which case the committed bodies are left exactly as they are.
 */
function planBrcBodies(
  dest: string,
  sources: Array<{ checkout: string; sha: string; repo: string }>,
): BrcBodyPlan | undefined {
  if (sources.length === 0) {
    return undefined;
  }
  const byName = new Map<string, string>();
  for (const source of sources) {
    for (const rel of walkFiles(source.checkout)) {
      const name = rel.split("/").pop() ?? "";
      if (!/^\d{4}\.md$/.test(name) || byName.has(name)) {
        continue;
      }
      byName.set(name, join(source.checkout, ...rel.split("/")));
    }
  }
  const files = [...byName.entries()]
    .sort(([a], [b]) => a.localeCompare(b, "en-GB"))
    .map(([name, abs]) => ({ name, abs }));
  assertRetention(
    "BRC bodies",
    walkFiles(dest).filter((rel) => /^\d{4}\.md$/.test(rel)).length,
    files.length,
    BRC_RETENTION_APPLIES_FROM,
  );
  return { files, sources: sources.map(({ repo, sha }) => ({ repo, sha })) };
}

/** Rewrites `reference/brcs/` from the plan and records per-file hashes for the snapshot audit. */
function writeBrcBodies(dest: string, plan: BrcBodyPlan): number {
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  const hashes: Record<string, string> = {};
  for (const file of plan.files) {
    const bytes = readFileSync(file.abs);
    writeFileSync(join(dest, file.name), bytes);
    hashes[file.name] = createHash("sha256").update(bytes).digest("hex");
  }
  writeJsonFile(join(dest, "manifest.json"), {
    generated: new Date().toISOString().slice(0, 10),
    sources: plan.sources,
    count: plan.files.length,
    files: hashes,
  });
  return plan.files.length;
}

/** Matches the universal-test-vectors layout: `{case}-args.json` / `{case}-result.json` pairs. */
const VECTOR_PART = /^(.+)-(args|result)\.json$/i;
/** Root-level JSON is repo tooling (package.json, tsconfig.json), never a conformance vector. */
const TOOLING_JSON = new Set(["package.json", "package-lock.json", "tsconfig.json"]);

/**
 * Plans the vector snapshot from the vectors checkout(s). Each `{domain}/{case}-args/result`
 * pair becomes one `{domain}/{case}.json` card so `vector://{domain}/{case}` resolves to a
 * single document; unpaired JSON files under a domain directory are pinned as-is.
 */
function planVectors(
  dest: string,
  sources: Array<{ checkout: string; sha: string; repo: string }>,
): VectorPlan | undefined {
  if (sources.length === 0) {
    return undefined;
  }
  const files: Array<{ rel: string; card: string }> = [];
  for (const source of sources) {
    const provenance = `${source.repo}@${source.sha}`;
    // The generator writes its vectors to `generated/`; the domain is the directory under it.
    const base = existsSync(join(source.checkout, "generated"))
      ? join(source.checkout, "generated")
      : source.checkout;
    const groups = new Map<string, { args?: string; result?: string; raw: string[] }>();
    for (const rel of walkFiles(base)) {
      if (!rel.toLowerCase().endsWith(".json") || !rel.includes("/")) {
        continue;
      }
      const name = rel.split("/").pop() ?? "";
      if (TOOLING_JSON.has(name.toLowerCase())) {
        continue;
      }
      const abs = join(base, ...rel.split("/"));
      if (statSync(abs).size > VECTOR_MAX_BYTES) {
        continue;
      }
      const domain = rel.split("/").slice(0, -1).join("/");
      const part = VECTOR_PART.exec(name);
      const partName = part?.[2]?.toLowerCase();
      const key = part ? `${domain}/${part[1]}` : rel.replace(/\.json$/i, "");
      const group = groups.get(key) ?? { raw: [] };
      if (partName === "args" || partName === "result") {
        group[partName] = abs;
      } else {
        group.raw.push(abs);
      }
      groups.set(key, group);
    }
    for (const [key, group] of [...groups.entries()].sort(([a], [b]) => a.localeCompare(b, "en-GB"))) {
      const card: Record<string, unknown> = {
        domain: key.split("/").slice(0, -1).join("/"),
        case: key.split("/").pop(),
        source: provenance,
      };
      for (const [field, abs] of [
        ["args", group.args],
        ["result", group.result],
        ...group.raw.map((abs): [string, string] => ["body", abs]),
      ] as Array<[string, string | undefined]>) {
        if (abs === undefined) {
          continue;
        }
        try {
          card[field] = JSON.parse(readFileSync(abs, "utf8")) as unknown;
        } catch (cause) {
          throw new Error(`Tier 0 refresh could not parse the vector part ${abs}.`, { cause });
        }
      }
      files.push({ rel: `${key}.json`, card: `${JSON.stringify(card, null, 2)}\n` });
    }
  }
  assertRetention(
    "conformance vectors",
    walkFiles(dest).filter((rel) => rel.toLowerCase().endsWith(".json")).length,
    files.length,
    VECTOR_RETENTION_APPLIES_FROM,
  );
  return { files };
}

/** Rewrites `reference/tier0/vectors/` from the plan. */
function writeVectors(dest: string, plan: VectorPlan): number {
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  for (const file of plan.files) {
    const target = join(dest, ...file.rel.split("/"));
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, file.card, "utf8");
  }
  return plan.files.length;
}

/** Fails the run when a snapshot would collapse below 80% of the committed corpus. */
function assertRetention(label: string, previous: number, next: number, appliesFrom: number): void {
  if (previous < appliesFrom) {
    return;
  }
  const minimum = Math.ceil(previous * RETENTION_FLOOR);
  if (next < minimum) {
    throw new Error(
      `Tier 0 refresh refused: ${next} ${label} is below 80% of the previous ${previous} (at least ${minimum} required). No cards were written.`,
    );
  }
}

/** Repository-relative file paths ("/" separated), skipping dot-directories and node_modules. */
function walkFiles(root: string): string[] {
  if (!existsSync(root)) {
    return [];
  }
  return readdirSync(root, { recursive: true, encoding: "utf8" })
    .map((name) => name.replaceAll("\\", "/"))
    .filter(
      (rel) =>
        !rel.split("/").some((segment) => segment.startsWith(".") || segment === "node_modules"),
    )
    .filter(
      (rel) =>
        lstatSync(join(root, ...rel.split("/")), { throwIfNoEntry: false })?.isFile() === true,
    )
    .sort();
}

async function resolveHeadSha(repo: string, fetchImpl: typeof fetch): Promise<string> {
  const response = await fetchImpl(`${GITHUB_API_ORIGIN}/repos/${repo}/commits/HEAD`, {
    headers: {
      accept: "application/vnd.github+json",
      "user-agent": "bsv-aio-mcp-refresh",
    },
  });
  if (!response.ok) {
    throw new Error(`Tier 0 refresh could not resolve HEAD for ${repo}: HTTP ${response.status}.`);
  }
  const body = (await response.json()) as { sha?: unknown };
  return assertSha(repo, typeof body.sha === "string" ? body.sha : "");
}

async function downloadCheckout(
  root: string,
  repo: string,
  sha: string,
  fetchImpl: typeof fetch,
): Promise<string> {
  const response = await fetchImpl(`${CODELOAD_ORIGIN}/${repo}/tar.gz/${sha}`);
  if (!response.ok) {
    throw new Error(
      `Tier 0 refresh could not download ${repo} at ${sha}: HTTP ${response.status}.`,
    );
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  const destination = join(root, "server", "data", "checkouts", ...repo.split("/"), sha);
  rmSync(destination, { recursive: true, force: true });
  mkdirSync(destination, { recursive: true });

  const archive = join(dirname(destination), `${sha}.tar.gz`);
  writeFileSync(archive, bytes);
  try {
    execFileSync("tar.exe", ["-xzf", archive, "-C", destination], { stdio: "pipe" });
  } catch (cause) {
    throw new Error(`Tier 0 refresh could not extract the ${repo} tarball at ${sha}.`, { cause });
  } finally {
    rmSync(archive, { force: true });
  }
  return checkoutRoot(destination, repo.split("/").pop() ?? repo);
}

/** A codeload tarball nests everything under `{reponame}-{sha}`; a plain archive does not. */
function checkoutRoot(destination: string, repoName: string): string {
  const entries = readdirSync(destination, { withFileTypes: true });
  const only = entries.length === 1 ? entries[0] : undefined;
  if (only?.isDirectory() && only.name.startsWith(`${repoName}-`)) {
    return join(destination, only.name);
  }
  return destination;
}

/**
 * A TypeScript package label is its `package.json` name verbatim (`@bsv/sdk`). A Go package label
 * is the last path segment of the `go.mod` module line, not the full module path (`go-sdk`).
 */
function packageLabel(checkout: string, language: string): string | undefined {
  const readers = language === "go" ? [goModuleLabel, nodePackageLabel] : [nodePackageLabel, goModuleLabel];
  for (const read of readers) {
    const label = read(checkout);
    if (label) {
      return label;
    }
  }
  return undefined;
}

function nodePackageLabel(checkout: string): string | undefined {
  const abs = join(checkout, "package.json");
  if (!existsSync(abs)) {
    return undefined;
  }
  let parsed: { name?: unknown };
  try {
    parsed = JSON.parse(readFileSync(abs, "utf8")) as { name?: unknown };
  } catch (cause) {
    throw new Error(`Tier 0 refresh could not parse ${abs}.`, { cause });
  }
  const name = typeof parsed.name === "string" ? parsed.name.trim() : "";
  return name || undefined;
}

function goModuleLabel(checkout: string): string | undefined {
  const abs = join(checkout, "go.mod");
  if (!existsSync(abs)) {
    return undefined;
  }
  const match = /^module\s+(\S+)\s*$/m.exec(readFileSync(abs, "utf8"));
  const modulePath = match?.[1]?.trim() ?? "";
  const segment = modulePath.split("/").pop() ?? "";
  return segment || undefined;
}

function assertPackageIntegrity(tier0Root: string, names: string[]): void {
  const previous = previousPackages(tier0Root);
  if (previous.length < RETENTION_APPLIES_FROM) {
    return;
  }
  const minimum = Math.ceil(previous.length * RETENTION_FLOOR);
  if (names.length < minimum) {
    throw new Error(
      `Tier 0 refresh refused: ${names.length} confirmed package(s) is below 80% of the previous ${previous.length} (at least ${minimum} required). No cards were written.`,
    );
  }
}

/** A malformed `packages.json` throws rather than silently disabling the 80% guard. */
function previousPackages(tier0Root: string): string[] {
  const abs = join(tier0Root, "packages.json");
  const card = readJsonFile<PackagesFile>(abs);
  if (!card) {
    return [];
  }
  if (!Array.isArray(card.packages)) {
    throw corruptCard(abs, '"packages" must be an array of package names');
  }
  for (const name of card.packages) {
    if (typeof name !== "string" || name.trim() === "") {
      throw corruptCard(abs, "every entry of \"packages\" must be a non-empty string");
    }
  }
  return card.packages as string[];
}

/**
 * Reads the committed `manifest.json` before anything is written, both to carry its policy note
 * forward and so a corrupt manifest fails the run while `packages.json` is still untouched.
 */
function readManifestPolicy(tier0Root: string): string {
  const abs = join(tier0Root, "manifest.json");
  const card = readJsonFile<ManifestFile>(abs);
  if (!card) {
    return DEFAULT_POLICY;
  }
  if (card.repos !== undefined) {
    if (!Array.isArray(card.repos)) {
      throw corruptCard(abs, '"repos" must be an array of pinned rows');
    }
    for (const row of card.repos) {
      if (typeof (row as Tier0RepoPin | null)?.repo !== "string") {
        throw corruptCard(abs, 'every entry of "repos" must carry a string "repo"');
      }
    }
  }
  if (card.policy !== undefined && typeof card.policy !== "string") {
    throw corruptCard(abs, '"policy" must be a string');
  }
  return typeof card.policy === "string" ? card.policy : DEFAULT_POLICY;
}

function corruptCard(abs: string, reason: string): Error {
  return new Error(
    `Tier 0 refresh refused: the existing card ${abs} is corrupt — ${reason}. No cards were written.`,
  );
}

function uniqueSymbols(rows: ScannedSymbol[]): ScannedSymbol[] {
  const seen = new Set<string>();
  const out: ScannedSymbol[] = [];
  for (const row of rows) {
    const key = `${row.repo}:${row.name}`;
    if (seen.has(key) || row.exported !== true) {
      continue;
    }
    seen.add(key);
    out.push(row);
  }
  return out.sort(
    (a, b) => a.repo.localeCompare(b.repo, "en-GB") || a.name.localeCompare(b.name, "en-GB"),
  );
}

function pinRevision(pinned: Tier0RepoPin[]): string {
  const lines = pinned
    .map((row) => `${row.repo}@${row.sha ?? ""}`)
    .sort()
    .join("\n");
  return createHash("sha256").update(lines).digest("hex").slice(0, 12);
}

function replaceDirectory(source: string, destination: string): void {
  rmSync(destination, { recursive: true, force: true });
  mkdirSync(destination, { recursive: true });
  cpSync(source, destination, { recursive: true });
}

function readJsonFile<T>(abs: string): T | undefined {
  if (!existsSync(abs)) {
    return undefined;
  }
  try {
    return JSON.parse(readFileSync(abs, "utf8")) as T;
  } catch (cause) {
    throw new Error(`Tier 0 refresh could not parse ${abs}.`, { cause });
  }
}

function writeJsonFile(abs: string, value: unknown): void {
  writeFileSync(abs, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function assertRepo(repo: string): string {
  const trimmed = repo.trim();
  if (!REPO_PATTERN.test(trimmed)) {
    throw new Error(`Tier 0 refresh rejected the repository name ${JSON.stringify(repo)}.`);
  }
  return trimmed;
}

function assertSha(repo: string, sha: string): string {
  const trimmed = sha.trim().toLowerCase();
  if (!SHA_PATTERN.test(trimmed)) {
    throw new Error(`Tier 0 refresh rejected the pinned SHA ${JSON.stringify(sha)} for ${repo}.`);
  }
  return trimmed;
}
