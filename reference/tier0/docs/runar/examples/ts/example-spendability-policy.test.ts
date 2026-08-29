/**
 * Example spendability policy — testing-gap remediation plan Phase A6 / H2
 * (`docs/audit/2026-08-testing-gap-remediation-plan.md`, TG-010).
 *
 * WHY. `TestContract` is an AST interpreter with mocked ECDSA: `checkSig`,
 * `checkMultiSig` and `checkPreimage` always return `true`, and the compiled
 * Bitcoin Script is never executed. A green interpreter suite is therefore
 * silent about whether the contract can be spent at all — and, for a stateful
 * contract, about whether an accepted spend commits the RIGHT continuation
 * state. That is exactly the PALMER-1 Face B shape: script validates,
 * post-state silently wrong.
 *
 * The examples tree is where contributors learn what "tested" looks like, so
 * an interpreter-only stateful example teaches the wrong lesson silently.
 *
 * THE POLICY. Every STATEFUL example under `examples/ts/` that ships a vitest
 * must satisfy one of:
 *
 *   (a) SPENDABILITY — at least one of its test files drives a real script
 *       engine: `ScriptVM`, a default-validating `MockProvider` deploy/call,
 *       or one of the `runar-testing` oracles (`runStatefulSpend`,
 *       `runDifferentialExecution`, `runTriModalExecution`,
 *       `ScriptExecutionContract`).
 *
 *   (b) BANNER — a test file carries
 *          // INTERPRETER-ONLY: spendability covered by <repo-relative path>
 *       naming the real covering witness/pin. The path is checked to exist AND
 *       to actually cover THIS contract (see `verifyCovers` below) — a banner
 *       pointed at somebody else's witness converts a visible hole into a
 *       false claim, which is strictly worse than no banner.
 *
 *   (c) UNCOVERED — a test file carries
 *          // INTERPRETER-ONLY: UNCOVERED — <what was checked, when, what would close it>
 *       This is an HONEST HOLE, not a pass. It is counted and ratcheted
 *       against a committed ceiling so it can shrink and never grow — the same
 *       discipline as `always-ack-allowlist.json` and
 *       `wire-format-exceptions.json`.
 *
 * SCOPE. A stateful example with NO test file at all is out of scope: there is
 * no test making a claim, so there is no false confidence to correct. Those
 * directories are covered (or not) by the conformance fixtures that reference
 * their sources; `conformance/construct-ledger.json` is where their coverage
 * is tracked, not here. They are listed by the informational test at the
 * bottom of this file so the set stays visible.
 *
 * CI WIRING. This file runs under the root `npx vitest run` and under
 * `pnpm run examples:ts`. No separate workflow step is required.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const EXAMPLES_TS = __dirname;
const REPO_ROOT = resolve(__dirname, '..', '..');

/**
 * Ratchet for form (c). LOWER this when an example gains real coverage; never
 * raise it to admit a new interpreter-only stateful example — write the
 * witness instead.
 */
const MAX_UNCOVERED = 1;

/** Signals that a test file drives a real Bitcoin Script engine (form (a)). */
const SPENDABILITY_PATTERNS: Array<{ re: RegExp; what: string }> = [
  { re: /\bnew ScriptVM\b/, what: 'ScriptVM' },
  { re: /\bnew MockProvider\b/, what: 'MockProvider (default-validating) deploy/call' },
  { re: /\brunStatefulSpend\b/, what: 'runStatefulSpend' },
  { re: /\brunStatelessSigned\b/, what: 'runStatelessSigned' },
  { re: /\brunDifferentialExecution\b/, what: 'runDifferentialExecution' },
  { re: /\brunTriModalExecution\b/, what: 'runTriModalExecution' },
  { re: /\bScriptExecutionContract\b/, what: 'ScriptExecutionContract' },
];

/**
 * A `MockProvider` whose validation is switched off is NOT a spendability
 * path — it is the pre-remediation always-ack behaviour. Form (a) is
 * disqualified if the file opts out.
 */
const ALWAYS_ACK_PATTERN =
  /disableBroadcastValidation|newAlwaysAckMockProvider|validateBroadcasts\s*[:=]\s*false|enableBroadcastValidation\(\s*false\s*\)/;

const BANNER_COVERED = /^\s*\/\/\s*INTERPRETER-ONLY:\s*spendability covered by\s+(\S+)/m;
const BANNER_UNCOVERED = /^\s*\/\/\s*INTERPRETER-ONLY:\s*UNCOVERED\s*[—-]\s*(.+)$/m;

interface Example {
  name: string;
  dir: string;
  contractFiles: string[];
  contractNames: string[];
  testFiles: string[];
}

function listStatefulExamples(): Example[] {
  const out: Example[] = [];
  for (const name of readdirSync(EXAMPLES_TS).sort()) {
    const dir = join(EXAMPLES_TS, name);
    if (!statSync(dir).isDirectory()) continue;
    const entries = readdirSync(dir);
    const contractFiles = entries.filter((f) => f.endsWith('.runar.ts'));
    if (contractFiles.length === 0) continue;
    const stateful = contractFiles.filter((f) =>
      readFileSync(join(dir, f), 'utf8').includes('extends StatefulSmartContract'),
    );
    if (stateful.length === 0) continue;
    const contractNames: string[] = [];
    for (const f of stateful) {
      const src = readFileSync(join(dir, f), 'utf8');
      for (const m of src.matchAll(/class\s+([A-Za-z_$][\w$]*)\s+extends\s+StatefulSmartContract/g)) {
        contractNames.push(m[1]!);
      }
    }
    out.push({
      name,
      dir,
      contractFiles: stateful,
      contractNames,
      testFiles: entries.filter((f) => f.endsWith('.test.ts')).sort(),
    });
  }
  return out;
}

/**
 * Does `bannerPath` genuinely cover `ex`? Two mechanical checks, chosen so the
 * gate cannot be satisfied by naming a plausible-looking file:
 *
 *  - `conformance/witnesses/real-crypto/<fixture>.json` — resolve
 *    `conformance/tests/<fixture>/source.json`'s `.runar.ts` entry and require
 *    that it lands inside THIS example's directory. That is a hard identity
 *    check: the witness executes the very source this example ships.
 *  - anything else (a Go script-execution test, a regtest integration suite) —
 *    require the file to mention this example's directory name or one of its
 *    stateful contract class names. Weaker, but it still catches a banner
 *    pointed at an unrelated file.
 */
function verifyCovers(ex: Example, bannerPath: string): string | null {
  const abs = join(REPO_ROOT, bannerPath);
  if (!existsSync(abs)) {
    return `banner path does not exist: ${bannerPath}`;
  }

  const witness = bannerPath.match(/^conformance\/witnesses\/real-crypto\/([^/]+)\.json$/);
  if (witness) {
    const fixture = witness[1]!;
    const sourceJson = join(REPO_ROOT, 'conformance', 'tests', fixture, 'source.json');
    if (!existsSync(sourceJson)) {
      return `witness names fixture "${fixture}" but conformance/tests/${fixture}/source.json does not exist`;
    }
    const sources = JSON.parse(readFileSync(sourceJson, 'utf8')).sources as Record<string, string>;
    const tsRel = sources?.['.runar.ts'];
    if (!tsRel) {
      return `conformance/tests/${fixture}/source.json declares no ".runar.ts" source`;
    }
    const tsAbs = resolve(dirname(sourceJson), tsRel);
    if (!tsAbs.startsWith(ex.dir + '/')) {
      return (
        `witness fixture "${fixture}" compiles ${relative(REPO_ROOT, tsAbs)}, which is NOT in ` +
        `examples/ts/${ex.name}/ — this banner names a witness for a different contract`
      );
    }
    return null;
  }

  const body = readFileSync(abs, 'utf8');
  const needles = [ex.name, ...ex.contractNames, ...ex.contractFiles];
  if (!needles.some((n) => body.includes(n))) {
    return (
      `${bannerPath} never mentions "${ex.name}" or any of its stateful contract ` +
      `classes (${ex.contractNames.join(', ') || 'none found'}) — cannot be its covering path`
    );
  }
  return null;
}

const STATEFUL = listStatefulExamples();
const WITH_TESTS = STATEFUL.filter((e) => e.testFiles.length > 0);
const WITHOUT_TESTS = STATEFUL.filter((e) => e.testFiles.length === 0);

describe('examples/ts stateful example policy (plan Phase A6 / H2)', () => {
  it('finds stateful examples to check (the gate is not vacuous)', () => {
    expect(STATEFUL.length).toBeGreaterThan(10);
    expect(WITH_TESTS.length).toBeGreaterThan(10);
  });

  it.each(WITH_TESTS.map((e) => [e.name, e] as const))(
    '%s — has a spendability test (a), a verified banner (b), or an honest UNCOVERED banner (c)',
    (_name, ex) => {
      const problems: string[] = [];
      let satisfied: string | null = null;

      for (const tf of ex.testFiles) {
        const body = readFileSync(join(ex.dir, tf), 'utf8');

        // (a) real engine
        if (!ALWAYS_ACK_PATTERN.test(body)) {
          const hit = SPENDABILITY_PATTERNS.find((p) => p.re.test(body));
          if (hit) {
            satisfied = `(a) ${tf} drives ${hit.what}`;
            break;
          }
        }

        // (b) banner naming a covering path
        const covered = body.match(BANNER_COVERED);
        if (covered) {
          const problem = verifyCovers(ex, covered[1]!);
          if (problem) {
            problems.push(`${tf}: ${problem}`);
          } else {
            satisfied = `(b) ${tf} → ${covered[1]}`;
            break;
          }
        }

        // (c) honest hole
        const uncovered = body.match(BANNER_UNCOVERED);
        if (uncovered) {
          if (uncovered[1]!.trim().length < 20) {
            problems.push(
              `${tf}: UNCOVERED banner needs a real close plan (what was checked, when, ` +
                `what would close it) — got "${uncovered[1]!.trim()}"`,
            );
          } else {
            satisfied = `(c) ${tf} UNCOVERED`;
            break;
          }
        }
      }

      expect(
        satisfied,
        `examples/ts/${ex.name} is a STATEFUL example whose tests run the interpreter only.\n` +
          `Interpreter tests prove business logic, never spendability.\n` +
          (problems.length ? `Rejected candidates:\n  - ${problems.join('\n  - ')}\n` : '') +
          `Fix it in ONE of three ways (docs/testing-guide.md -> "The example policy for examples/ts/"):\n` +
          `  (a) add a spendability test (ScriptVM / default-validating MockProvider deploy+call /\n` +
          `      runStatefulSpend);\n` +
          `  (b) add, at the top of a test file:\n` +
          `        // INTERPRETER-ONLY: spendability covered by conformance/witnesses/real-crypto/<fixture>.json\n` +
          `      naming a witness that really compiles THIS example's source;\n` +
          `  (c) if there genuinely is none, be honest and take the ratchet:\n` +
          `        // INTERPRETER-ONLY: UNCOVERED — <what was checked, when, what would close it>`,
      ).not.toBeNull();
    },
  );

  it(`"UNCOVERED" banners must not grow (ceiling ${MAX_UNCOVERED})`, () => {
    const uncovered: string[] = [];
    for (const ex of WITH_TESTS) {
      for (const tf of ex.testFiles) {
        const body = readFileSync(join(ex.dir, tf), 'utf8');
        if (BANNER_UNCOVERED.test(body)) {
          uncovered.push(`examples/ts/${ex.name}/${tf}`);
          break;
        }
      }
    }
    // eslint-disable-next-line no-console
    console.log(
      `[example-spendability-policy] ${STATEFUL.length} stateful example(s); ` +
        `${WITH_TESTS.length} with tests; ${uncovered.length} UNCOVERED: ${uncovered.join(', ') || '(none)'}`,
    );
    expect(
      uncovered.length,
      `UNCOVERED example banners grew to ${uncovered.length}, above the committed ceiling of ` +
        `${MAX_UNCOVERED}. An UNCOVERED banner is an honest hole, not a budget — write the ` +
        `covering witness instead of spending the ratchet.\n  ${uncovered.join('\n  ')}`,
    ).toBeLessThanOrEqual(MAX_UNCOVERED);
  });

  it('stateful examples with no test file at all are listed (informational)', () => {
    // Deliberately NOT a failure: no test means no claim, so there is no false
    // confidence to correct here. Their coverage is tracked per-construct in
    // conformance/construct-ledger.json and per-fixture in
    // conformance/witnesses/coverage-ledger.json.
    // eslint-disable-next-line no-console
    console.log(
      `[example-spendability-policy] stateful examples with NO vitest (out of scope, tracked in ` +
        `conformance/construct-ledger.json): ${WITHOUT_TESTS.map((e) => e.name).join(', ') || '(none)'}`,
    );
    expect(Array.isArray(WITHOUT_TESTS)).toBe(true);
  });
});
