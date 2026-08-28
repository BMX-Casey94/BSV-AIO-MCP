import { existsSync, lstatSync, readFileSync, readdirSync, realpathSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import type { SymbolKind, SymbolRecord } from "../types.js";

const MAX_HOPS = 8;
const FORBIDDEN_SEGMENTS = new Set(["node_modules", "dist", "test"]);
const GO_FORBIDDEN_SEGMENTS = new Set(["node_modules", "dist", "test", "internal"]);

export type ScannedSymbol = Omit<SymbolRecord, "hit">;

/**
 * Record names that a checkout actually exports from its public entry (TypeScript)
 * or as exported identifiers (Go). Never invents identifiers; `exported` is always true.
 */
export function scanExports(checkoutDir: string, repo: string, language: string): ScannedSymbol[] {
  const checkout = resolve(checkoutDir);
  if (!existsSync(checkout)) {
    return [];
  }
  const pkg = packageName(checkout, language);
  const lang = language === "go" ? "go" : "ts";
  if (lang === "go") {
    return scanGo(checkout, repo, pkg);
  }
  const root = scanTypeScript(checkout, repo, pkg);
  if (root.length > 0) {
    return root;
  }
  // A pnpm/npm monorepo has a private root package.json with no public entry; the publishable
  // packages live under `packages/*` (e.g. icellan/runar ships runar-sdk, runar-compiler, …).
  // Scan each so the symbol plane records the real API surface instead of nothing.
  const out: ScannedSymbol[] = [];
  for (const sub of workspacePackages(checkout)) {
    const subPkg = packageName(sub, language) || posixRel(checkout, sub).split("/").pop() || pkg;
    out.push(...scanTypeScript(sub, repo, subPkg));
  }
  return out;
}

/** Directories under `packages/` that look like publishable packages (have a package.json). */
function workspacePackages(checkout: string): string[] {
  const dir = join(checkout, "packages");
  if (!existsSync(dir)) {
    return [];
  }
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(dir, entry.name))
    .filter((abs) => existsSync(join(abs, "package.json")))
    .sort();
}

function scanTypeScript(checkout: string, repo: string, pkg: string): ScannedSymbol[] {
  const entry = publicEntry(checkout);
  if (!entry) {
    return [];
  }
  const out: ScannedSymbol[] = [];
  const seen = new Set<string>();
  const visited = new Set<string>();

  const record = (name: string, kind: string, file: string, line: number): void => {
    if (!name || seen.has(name)) {
      return;
    }
    seen.add(name);
    out.push({
      name,
      repo,
      package: pkg,
      language: "ts",
      kind,
      locator: `${posixRel(checkout, file)}:${line}`,
      exported: true,
    });
  };

  const visit = (abs: string, hop: number, wanted: Set<string> | "all"): void => {
    if (hop > MAX_HOPS) {
      return;
    }
    const key = normalizeAbs(abs);
    if (!key || visited.has(key)) {
      return;
    }
    visited.add(key);
    const source = readText(abs);
    if (source === undefined) {
      return;
    }
    const parsed = parseTsExports(source);
    for (const decl of parsed.declarations) {
      if (wanted === "all" || wanted.has(decl.name)) {
        record(decl.name, decl.kind, abs, decl.line);
      }
    }
    for (const name of parsed.localNames) {
      if (wanted === "all" || wanted.has(name)) {
        const decl = parsed.declarations.find((row) => row.name === name);
        record(name, decl?.kind ?? "symbol", abs, decl?.line ?? 1);
      }
    }
    for (const ns of parsed.namespaces) {
      if (wanted === "all" || wanted.has(ns.name)) {
        record(ns.name, "const", abs, ns.line);
      }
    }
    if (hop >= MAX_HOPS) {
      return;
    }
    for (const spec of parsed.starFrom) {
      const target = resolveFollow(checkout, abs, spec);
      if (target) {
        visit(target, hop + 1, wanted);
      }
    }
    for (const named of parsed.namedFrom) {
      const names =
        wanted === "all" ? named.names : named.names.filter((name) => wanted.has(name));
      if (names.length === 0) {
        continue;
      }
      const target = resolveFollow(checkout, abs, named.spec);
      if (!target) {
        for (const name of names) {
          record(name, "symbol", abs, named.line);
        }
        continue;
      }
      visit(target, hop + 1, new Set(names));
    }
  };

  visit(entry, 0, "all");
  return out;
}

function scanGo(checkout: string, repo: string, pkg: string): ScannedSymbol[] {
  const out: ScannedSymbol[] = [];
  const seen = new Set<string>();
  for (const abs of listGoFiles(checkout)) {
    const source = readText(abs);
    if (source === undefined) {
      continue;
    }
    for (const decl of parseGoExports(source)) {
      if (seen.has(decl.name)) {
        continue;
      }
      seen.add(decl.name);
      out.push({
        name: decl.name,
        repo,
        package: pkg,
        language: "go",
        kind: decl.kind,
        locator: `${posixRel(checkout, abs)}:${decl.line}`,
        exported: true,
      });
    }
  }
  return out;
}

type TsDecl = { name: string; kind: string; line: number };

type TsParse = {
  declarations: TsDecl[];
  localNames: string[];
  namespaces: Array<{ name: string; line: number }>;
  starFrom: string[];
  namedFrom: Array<{ names: string[]; spec: string; line: number }>;
};

function parseTsExports(source: string): TsParse {
  const text = stripCommentsPreserveLines(source);
  const declarations: TsDecl[] = [];
  const localNames: string[] = [];
  const namespaces: Array<{ name: string; line: number }> = [];
  const starFrom: string[] = [];
  const namedFrom: Array<{ names: string[]; spec: string; line: number }> = [];

  for (const match of text.matchAll(/export\s+\*\s+as\s+(\w+)\s+from\s+["'][^"']+["']/g)) {
    namespaces.push({ name: match[1] ?? "", line: lineAt(text, match.index ?? 0) });
  }
  for (const match of text.matchAll(/export\s+\*\s+from\s+["']([^"']+)["']/g)) {
    const spec = match[1] ?? "";
    if (spec) {
      starFrom.push(spec);
    }
  }
  for (const match of text.matchAll(
    /export\s+(?:type\s+)?\{([^}]+)\}\s+from\s+["']([^"']+)["']/g,
  )) {
    namedFrom.push({
      names: parseExportedNames(match[1] ?? ""),
      spec: match[2] ?? "",
      line: lineAt(text, match.index ?? 0),
    });
  }
  for (const match of text.matchAll(/export\s+(?:type\s+)?\{([^}]+)\}(?!\s*from)/g)) {
    localNames.push(...parseExportedNames(match[1] ?? ""));
  }
  for (const match of text.matchAll(
    /export\s+(?:async\s+)?(?:abstract\s+)?(?:declare\s+)?(class|function|const|let|var|type|interface|enum)\s+(\w+)/g,
  )) {
    const keyword = match[1] ?? "symbol";
    const name = match[2] ?? "";
    declarations.push({
      name,
      kind: keyword === "let" || keyword === "var" ? "const" : keyword,
      line: lineAt(text, match.index ?? 0),
    });
  }
  return { declarations, localNames, namespaces, starFrom, namedFrom };
}

function parseGoExports(source: string): Array<{ name: string; kind: SymbolKind; line: number }> {
  const out: Array<{ name: string; kind: SymbolKind; line: number }> = [];
  const lines = source.split(/\r?\n/);
  let inTypeBlock = false;
  for (let i = 0; i < lines.length; i += 1) {
    const line = stripGoLineComment(lines[i] ?? "").trim();
    if (inTypeBlock) {
      if (line.startsWith(")")) {
        inTypeBlock = false;
        continue;
      }
      const named = /^([A-Z]\w*)\b/.exec(line);
      if (named?.[1]) {
        out.push({ name: named[1], kind: "type", line: i + 1 });
      }
      continue;
    }
    if (/^type\s*\(\s*$/.test(line)) {
      inTypeBlock = true;
      continue;
    }
    const typeMatch = /^type\s+([A-Z]\w*)\b/.exec(line);
    if (typeMatch?.[1]) {
      out.push({ name: typeMatch[1], kind: "type", line: i + 1 });
      continue;
    }
    const funcMatch = /^func\s+(?:\([^)]*\)\s+)?([A-Z]\w*)\b/.exec(line);
    if (funcMatch?.[1]) {
      out.push({
        name: funcMatch[1],
        kind: line.startsWith("func (") ? "method" : "function",
        line: i + 1,
      });
    }
  }
  return out;
}

function publicEntry(checkout: string): string | undefined {
  const pkg = readJson(join(checkout, "package.json"));
  const declared: string[] = [];
  if (pkg) {
    const fromExports = exportsTarget(pkg.exports);
    if (fromExports) {
      declared.push(fromExports);
    }
    const fromTypes = exportsTypesTarget(pkg.exports);
    if (fromTypes) {
      declared.push(fromTypes);
    }
    if (typeof pkg.main === "string" && pkg.main.trim()) {
      declared.push(pkg.main.trim());
    }
  }
  const firstPass = [...declared, "src/index.ts", "src/index.js"];
  for (const rel of firstPass) {
    const resolved = resolveExisting(checkout, checkout, rel, false);
    if (resolved) {
      return resolved;
    }
  }
  const fallbacks = ["src/mod.ts", "src/mod.js", "src/index.ts", "src/index.js"];
  for (const rel of declared) {
    fallbacks.push(...sourceCandidatesFromDist(rel));
  }
  const seen = new Set<string>();
  for (const rel of fallbacks) {
    const key = rel.replaceAll("\\", "/");
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    const resolved = resolveExisting(checkout, checkout, rel, false);
    if (resolved) {
      return resolved;
    }
  }
  return undefined;
}

/** Prefer the `types` condition so a `.d.ts` build target can map back to source. */
function exportsTypesTarget(value: unknown): string | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }
  const rec = value as Record<string, unknown>;
  if ("." in rec) {
    return exportsTypesTarget(rec["."]);
  }
  if (typeof rec.types === "string" && rec.types.trim()) {
    return rec.types.trim();
  }
  return undefined;
}

/**
 * Map a missing `dist/` build target onto the matching shipped source path.
 * `dist/cjs/mod.js` → `mod.ts` / `src/mod.ts`; `dist/esm/src/primitives/index.js` →
 * `src/primitives/index.ts`. Deno-style repos (ts-sdk) ship the public barrel as `mod.ts` at the
 * repo ROOT and re-export `./src/…` from it, so both the root and `src/` candidates are tried.
 */
function sourceCandidatesFromDist(target: string): string[] {
  const cleaned = target.replaceAll("\\", "/").replace(/^\.\//, "");
  const stripped = cleaned.replace(/^(?:dist\/(?:cjs|esm|types|umd)\/|dist\/)/, "");
  if (!stripped || stripped === cleaned) {
    return [];
  }
  const withoutExt = stripped.replace(/\.d\.ts$/i, "").replace(/\.(?:js|ts|mjs|cjs)$/i, "");
  const underSrc = withoutExt.replace(/^src\//, "");
  if (!underSrc || underSrc.split("/").some((segment) => segment === "" || segment === "." || segment === "..")) {
    return [];
  }
  return [`${underSrc}.ts`, `${underSrc}.js`, `src/${underSrc}.ts`, `src/${underSrc}.js`];
}

function exportsTarget(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }
  if (!value || typeof value !== "object") {
    return undefined;
  }
  const rec = value as Record<string, unknown>;
  if ("." in rec) {
    return exportsTarget(rec["."]);
  }
  for (const key of ["import", "default", "require", "module", "node"]) {
    const found = exportsTarget(rec[key]);
    if (found) {
      return found;
    }
  }
  return undefined;
}

function resolveFollow(checkout: string, fromFile: string, spec: string): string | undefined {
  const normalized = spec.replaceAll("\\", "/");
  if (!normalized.startsWith("./") && !normalized.startsWith("../")) {
    return undefined;
  }
  return resolveExisting(checkout, dirname(fromFile), normalized, true);
}

function resolveExisting(
  checkout: string,
  fromDir: string,
  spec: string,
  enforceForbidden: boolean,
): string | undefined {
  if (!spec || spec.includes("\0")) {
    return undefined;
  }
  const cleaned = spec.replaceAll("\\", "/");
  if (isAbsolute(cleaned) || /^[A-Za-z]:/.test(cleaned)) {
    return undefined;
  }
  const abs = resolve(fromDir, ...cleaned.split("/"));
  if (!isInside(checkout, abs)) {
    return undefined;
  }
  // ESM-style source repos import "./x.js" while shipping "./x.ts"; map the specifier back.
  const swapped = cleaned.endsWith(".js")
    ? resolve(fromDir, ...cleaned.replace(/\.js$/i, ".ts").split("/"))
    : undefined;
  const candidates = [
    abs,
    ...(swapped ? [swapped] : []),
    `${abs}.ts`,
    `${abs}.js`,
    join(abs, "index.ts"),
    join(abs, "index.js"),
  ];
  for (const candidate of candidates) {
    if (!isInside(checkout, candidate) || !isPlainFile(candidate)) {
      continue;
    }
    if (enforceForbidden && hasForbidden(posixRel(checkout, candidate), FORBIDDEN_SEGMENTS)) {
      continue;
    }
    return candidate;
  }
  return undefined;
}

function listGoFiles(checkout: string): string[] {
  if (!existsSync(checkout)) {
    return [];
  }
  return readdirSync(checkout, { recursive: true, encoding: "utf8" })
    .map((name) => name.replaceAll("\\", "/"))
    .filter((rel) => rel.endsWith(".go") && !rel.endsWith("_test.go"))
    .filter((rel) => !rel.split("/").some((segment) => segment.startsWith(".") || GO_FORBIDDEN_SEGMENTS.has(segment)))
    .map((rel) => join(checkout, ...rel.split("/")))
    .filter((abs) => isInside(checkout, abs) && isPlainFile(abs))
    .sort();
}

function packageName(checkout: string, language: string): string {
  if (language === "go") {
    const abs = join(checkout, "go.mod");
    if (existsSync(abs)) {
      const match = /^module\s+(\S+)\s*$/m.exec(readFileSync(abs, "utf8"));
      const segment = (match?.[1] ?? "").trim().split("/").pop() ?? "";
      if (segment) {
        return segment;
      }
    }
  }
  const abs = join(checkout, "package.json");
  if (!existsSync(abs)) {
    return "";
  }
  try {
    const parsed = JSON.parse(readFileSync(abs, "utf8")) as { name?: unknown };
    return typeof parsed.name === "string" ? parsed.name.trim() : "";
  } catch {
    return "";
  }
}

function parseExportedNames(inner: string): string[] {
  const names: string[] = [];
  for (const part of inner.split(",")) {
    const tokens = part
      .trim()
      .split(/\s+/)
      .filter((token) => token && token !== "type");
    if (tokens.length === 0) {
      continue;
    }
    const asAt = tokens.indexOf("as");
    const name = asAt >= 0 ? tokens[asAt + 1] : tokens[0];
    if (name && /^\w+$/.test(name)) {
      names.push(name);
    }
  }
  return names;
}

function stripCommentsPreserveLines(source: string): string {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, (block) => block.replace(/[^\n]/g, " "))
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
}

function stripGoLineComment(line: string): string {
  const at = line.indexOf("//");
  return at === -1 ? line : line.slice(0, at);
}

function lineAt(text: string, index: number): number {
  return text.slice(0, index).split(/\r?\n/).length;
}

function readJson(abs: string): { exports?: unknown; main?: unknown } | undefined {
  if (!existsSync(abs)) {
    return undefined;
  }
  try {
    return JSON.parse(readFileSync(abs, "utf8")) as { exports?: unknown; main?: unknown };
  } catch {
    return undefined;
  }
}

function readText(abs: string): string | undefined {
  try {
    return readFileSync(abs, "utf8");
  } catch {
    return undefined;
  }
}

function isPlainFile(abs: string): boolean {
  return lstatSync(abs, { throwIfNoEntry: false })?.isFile() === true;
}

function normalizeAbs(abs: string): string | undefined {
  try {
    return realpathSync(abs);
  } catch {
    return resolve(abs);
  }
}

function posixRel(root: string, abs: string): string {
  return relative(root, abs).replaceAll("\\", "/");
}

function hasForbidden(rel: string, forbidden: Set<string>): boolean {
  return rel.split("/").some((segment) => forbidden.has(segment));
}

function isInside(root: string, abs: string): boolean {
  const rel = relative(resolve(root), resolve(abs));
  return rel === "" || (!rel.startsWith("..") && !isAbsolute(rel));
}
