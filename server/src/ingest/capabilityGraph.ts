import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export type CapabilityRecord = {
  id: string;
  name: string;
  brc: string;
  also: string[];
  packages: string[];
  api: string[];
  education_themes: string[];
  authority_hint: number;
};

export type CapabilityGraphFile = {
  generated: string;
  source: string[];
  policy: string;
  count: number;
  capabilities: CapabilityRecord[];
};

type BrcRow = {
  number?: unknown;
  id?: unknown;
  title?: unknown;
  category?: unknown;
  authority?: unknown;
};

type BrcIndexFile = {
  generated?: unknown;
  brcs?: BrcRow[];
};

type EducationIndexFile = {
  essays?: Array<{
    verdict?: unknown;
    themes?: unknown;
  }>;
};

type PackagesCard = {
  packages?: unknown;
};

type SymbolCardRow = {
  name?: unknown;
  package?: unknown;
  exported?: unknown;
};

type SymbolsCard = {
  symbols?: unknown;
};

type ConfirmedSymbol = {
  name: string;
  package: string;
};

const GENERIC_ACRONYMS = new Set([
  "HTTP",
  "HTTPS",
  "HTML",
  "JSON",
  "URL",
  "URI",
  "URN",
  "BSV",
  "BRC",
  "UTXO",
  "UTXOS",
  "P2PKH",
  "IPV6",
  "ASM",
  "TXO",
  "TSC",
  "BIP",
  "BIP32",
  "DNS",
  "API",
  "P2P",
  "MLD",
  "SHA",
  "TXID",
  "XML",
  "PCW",
  "SHIP",
  "SLAP",
  "OP",
]);

const GENERIC_THEME_PARTS = new Set([
  "light",
  "clients",
  "technical",
  "economics",
  "critique",
  "history",
  "rights",
  "accounting",
  "regulation",
  "decentralisation",
  "throughput",
  "immutability",
  "scepticism",
  "protocol",
  "blockchain",
  "ai",
  "l2",
]);

const DISTINCTIVE_TITLE_PHRASES = ["beef", "dpp", "mandala", "paymail", "peerserv", "1sat"] as const;

export function buildCapabilityGraph(root: string): CapabilityRecord[] {
  const brcIndex = JSON.parse(readFileSync(join(root, "reference", "brc_index.json"), "utf8")) as BrcIndexFile;
  const education = JSON.parse(readFileSync(join(root, "data", "education_index.json"), "utf8")) as EducationIndexFile;
  readSuccessorMap(root);
  const cards = loadConfirmedCards(root);

  const rows = (Array.isArray(brcIndex.brcs) ? brcIndex.brcs : [])
    .map(normaliseBrc)
    .filter((row): row is NormalisedBrc => row !== null);

  const themes = collectEducationThemes(education);
  const groups = buildTitleGroups(rows);
  const mentions = buildMentionLinks(rows);

  return rows.map((row) => {
    const grouped = groups.get(row.brc) ?? [];
    const mentioned = mentions.get(row.brc) ?? [];
    const also = uniqueSortedBrcs([...grouped, ...mentioned].filter((id) => id !== row.brc));
    const tokens = groupingKeys(row.title);
    return {
      id: capabilityId(row),
      name: row.title,
      brc: row.brc,
      also,
      packages: packagesForTokens(tokens, cards),
      api: apiForTokens(tokens, cards.symbols),
      education_themes: matchEducationThemes(row.title, themes),
      authority_hint: row.authority,
    };
  });
}

export function writeCapabilityGraph(root: string): string {
  const brcIndex = JSON.parse(readFileSync(join(root, "reference", "brc_index.json"), "utf8")) as BrcIndexFile;
  const capabilities = buildCapabilityGraph(root);
  const generated = typeof brcIndex.generated === "string" ? brcIndex.generated : new Date().toISOString().slice(0, 10);
  const graph: CapabilityGraphFile = {
    generated,
    source: [
      "reference/brc_index.json",
      "data/education_index.json",
      "reference/shoprag-successor-map.json",
      "reference/tier0/packages.json",
      "reference/tier0/symbols.json",
    ],
    policy:
      "Titles plus confirmed Tier 0 cards. packages come from a word-boundary match of grouping tokens of length ≥ 3 against exported symbols. api lists only exported names that exact-match a title token. Do not copy Zyra capability seeds.",
    count: capabilities.length,
    capabilities,
  };
  const dest = join(root, "reference", "capability_graph.json");
  writeFileSync(dest, `${JSON.stringify(graph, null, 2)}\n`, "utf8");
  return dest;
}

type NormalisedBrc = {
  number: number;
  brc: string;
  title: string;
  authority: number;
};

function normaliseBrc(row: BrcRow): NormalisedBrc | null {
  const number = typeof row.number === "number" ? row.number : undefined;
  if (number === undefined) {
    return null;
  }
  const title = typeof row.title === "string" ? row.title : `BRC-${number}`;
  const category = typeof row.category === "string" ? row.category : "";
  const authority =
    typeof row.authority === "number" ? row.authority : category === "opinions" ? 4 : 1;
  return {
    number,
    brc: typeof row.id === "string" ? row.id : `BRC-${number}`,
    title,
    authority,
  };
}

function collectEducationThemes(education: EducationIndexFile): string[] {
  const themes = new Set<string>();
  for (const essay of Array.isArray(education.essays) ? education.essays : []) {
    if (essay.verdict !== "KEEP" || !Array.isArray(essay.themes)) {
      continue;
    }
    for (const theme of essay.themes) {
      if (typeof theme === "string" && theme.trim()) {
        themes.add(theme);
      }
    }
  }
  return [...themes].sort();
}

function themeTokens(theme: string): string[] {
  if (theme === "wallets-keys") {
    return ["wallet", "wallets"];
  }
  if (theme === "tokenisation") {
    return ["token", "tokens", "tokenisation"];
  }
  if (theme === "script-technical") {
    return ["script"];
  }
  if (theme === "micropayments") {
    return ["micropayment", "micropayments"];
  }
  if (theme === "spv-light-clients") {
    return ["spv"];
  }
  return theme.split("-").filter((part) => part.length >= 3 && !GENERIC_THEME_PARTS.has(part));
}

function matchEducationThemes(title: string, themes: string[]): string[] {
  const titleLower = title.toLowerCase();
  const titleTokens = new Set(titleLower.split(/[^a-z0-9]+/).filter(Boolean));
  if (/simplified payment verification/i.test(title)) {
    titleTokens.add("spv");
  }
  const matched: string[] = [];
  for (const theme of themes) {
    const tokens = themeTokens(theme);
    if (tokens.some((token) => titleTokens.has(token))) {
      matched.push(theme);
    }
  }
  return matched;
}

function loadConfirmedCards(root: string): { packages: string[]; symbols: ConfirmedSymbol[] } {
  const packagesCard = JSON.parse(
    readFileSync(join(root, "reference", "tier0", "packages.json"), "utf8"),
  ) as PackagesCard;
  const symbolsCard = JSON.parse(
    readFileSync(join(root, "reference", "tier0", "symbols.json"), "utf8"),
  ) as SymbolsCard;
  const packages = (Array.isArray(packagesCard.packages) ? packagesCard.packages : []).filter(
    (name): name is string => typeof name === "string" && name.length > 0,
  );
  const confirmed = new Set(packages);
  const symbols: ConfirmedSymbol[] = [];
  for (const row of Array.isArray(symbolsCard.symbols) ? symbolsCard.symbols : []) {
    if (!row || typeof row !== "object") {
      continue;
    }
    const rec = row as SymbolCardRow;
    if (rec.exported !== true || typeof rec.name !== "string" || typeof rec.package !== "string") {
      continue;
    }
    if (!confirmed.has(rec.package)) {
      continue;
    }
    symbols.push({ name: rec.name, package: rec.package });
  }
  return { packages, symbols };
}

function packagesForTokens(
  tokens: string[],
  cards: { packages: string[]; symbols: ConfirmedSymbol[] },
): string[] {
  if (tokens.length === 0) {
    return [];
  }
  const matched = new Set<string>();
  for (const pkg of cards.packages) {
    const hit = cards.symbols.some(
      (row) =>
        row.package === pkg &&
        tokens.some((token) => token.length >= 3 && tokenMatchesName(row.name, token)),
    );
    if (hit) {
      matched.add(pkg);
    }
  }
  return [...matched].sort();
}

/**
 * True when `token` occurs in `name` at a word boundary. Compare case-insensitively,
 * but detect boundaries on the original-case name: start of the name, a preceding
 * non-alphanumeric, or a camelCase lower→upper transition.
 */
export function tokenMatchesName(name: string, token: string): boolean {
  if (!name || !token) {
    return false;
  }
  const lowerName = name.toLowerCase();
  const lowerToken = token.toLowerCase();
  let from = 0;
  while (from <= lowerName.length - lowerToken.length) {
    const index = lowerName.indexOf(lowerToken, from);
    if (index === -1) {
      return false;
    }
    if (isNameBoundary(name, index)) {
      return true;
    }
    from = index + 1;
  }
  return false;
}

function isNameBoundary(name: string, index: number): boolean {
  if (index <= 0) {
    return index === 0;
  }
  const prev = name[index - 1];
  const curr = name[index];
  if (prev === undefined || curr === undefined) {
    return false;
  }
  if (!isAlphaNumeric(prev)) {
    return true;
  }
  return isAsciiLower(prev) && isAsciiUpper(curr);
}

function isAlphaNumeric(ch: string): boolean {
  return /[A-Za-z0-9]/.test(ch);
}

function isAsciiLower(ch: string): boolean {
  return ch >= "a" && ch <= "z";
}

function isAsciiUpper(ch: string): boolean {
  return ch >= "A" && ch <= "Z";
}

function apiForTokens(tokens: string[], symbols: ConfirmedSymbol[]): string[] {
  if (tokens.length === 0) {
    return [];
  }
  const names = new Set<string>();
  for (const row of symbols) {
    if (tokens.some((token) => row.name.toLowerCase() === token)) {
      names.add(row.name);
    }
  }
  return [...names].sort();
}

export function groupingKeys(title: string): string[] {
  const keys = new Set<string>();
  for (const match of title.matchAll(/\(([A-Za-z][A-Za-z0-9-]{1,})\)/g)) {
    const token = match[1];
    if (token) {
      keys.add(token.toLowerCase());
    }
  }
  for (const match of title.matchAll(/\b([A-Z]{3,})\b/g)) {
    const token = match[1];
    if (token && !GENERIC_ACRONYMS.has(token)) {
      keys.add(token.toLowerCase());
    }
  }
  for (const phrase of DISTINCTIVE_TITLE_PHRASES) {
    if (new RegExp(`\\b${phrase}\\b`, "i").test(title)) {
      keys.add(phrase);
    }
  }
  return [...keys];
}

function buildTitleGroups(rows: NormalisedBrc[]): Map<string, string[]> {
  const byKey = new Map<string, string[]>();
  for (const row of rows) {
    const keys = [`title:${row.title.toLowerCase()}`, ...groupingKeys(row.title)];
    for (const key of keys) {
      const list = byKey.get(key) ?? [];
      list.push(row.brc);
      byKey.set(key, list);
    }
  }
  const byBrc = new Map<string, Set<string>>();
  for (const members of byKey.values()) {
    if (members.length < 2) {
      continue;
    }
    for (const brc of members) {
      const related = byBrc.get(brc) ?? new Set<string>();
      for (const other of members) {
        if (other !== brc) {
          related.add(other);
        }
      }
      byBrc.set(brc, related);
    }
  }
  return new Map([...byBrc.entries()].map(([brc, related]) => [brc, uniqueSortedBrcs([...related])]));
}

function brcMentions(title: string): string[] {
  const found = new Set<string>();
  for (const match of title.matchAll(/\bBRC-(\d+)\b/gi)) {
    if (match[1]) {
      found.add(`BRC-${Number(match[1])}`);
    }
  }
  return [...found];
}

function buildMentionLinks(rows: NormalisedBrc[]): Map<string, string[]> {
  const known = new Set(rows.map((row) => row.brc));
  const links = new Map<string, Set<string>>();
  for (const row of rows) {
    for (const mentioned of brcMentions(row.title)) {
      if (mentioned === row.brc || !known.has(mentioned)) {
        continue;
      }
      const forward = links.get(row.brc) ?? new Set<string>();
      forward.add(mentioned);
      links.set(row.brc, forward);
      const reverse = links.get(mentioned) ?? new Set<string>();
      reverse.add(row.brc);
      links.set(mentioned, reverse);
    }
  }
  return new Map([...links.entries()].map(([brc, related]) => [brc, uniqueSortedBrcs([...related])]));
}

function uniqueSortedBrcs(ids: string[]): string[] {
  return [...new Set(ids)].sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)));
}

function capabilityId(row: NormalisedBrc): string {
  const paren = row.title.match(/\(([A-Za-z][A-Za-z0-9-]{1,})\)/);
  if (paren?.[1]) {
    return `brc-${row.number}-${paren[1].toLowerCase()}`;
  }
  for (const match of row.title.matchAll(/\b([A-Z]{3,})\b/g)) {
    const token = match[1];
    if (token && !GENERIC_ACRONYMS.has(token)) {
      return `brc-${row.number}-${token.toLowerCase()}`;
    }
  }
  for (const phrase of DISTINCTIVE_TITLE_PHRASES) {
    if (new RegExp(`\\b${phrase}\\b`, "i").test(row.title)) {
      return `brc-${row.number}-${phrase}`;
    }
  }
  const kebab = row.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .split("-")
    .filter(Boolean)
    .slice(0, 4)
    .join("-");
  return kebab ? `brc-${row.number}-${kebab}` : `brc-${row.number}`;
}

function readSuccessorMap(root: string): void {
  readFileSync(join(root, "reference", "shoprag-successor-map.json"), "utf8");
}
