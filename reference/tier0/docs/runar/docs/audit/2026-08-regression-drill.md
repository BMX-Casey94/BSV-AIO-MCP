# Consolidated regression drill — §10.5 evidence

**Scope:** `docs/audit/2026-08-testing-gap-remediation-plan.md` §10 criterion 5.

**This document now records TWO runs, not one:**
- **Original run** — `.worktrees/testing-gap`, HEAD `4b0f688f` (2026-08-06, morning). Found drills
  (a) and (c) failing. Its own `UPDATE` block *claimed* both were fixed the same day, but that
  claim was written by reading the fix diffs, not by re-running the drill against them — an
  annotation, not a verification.
- **Re-run** — `.worktrees/testing-gap`, HEAD `62ff2dad` (2026-08-06, afternoon). Independently
  reproduces all three drills from scratch against current source, to confirm or refute the
  `UPDATE` block's claims by measurement. **This is the authoritative section — read it first.**
  It lives at the bottom, under "RE-RUN — 2026-08-06, HEAD `62ff2dad`".

---

## RE-RUN VERDICT (2026-08-06, HEAD `62ff2dad`) — READ THIS FIRST

**§10.5 is satisfied at `62ff2dad`. All three drills now fire as designed.** This was measured,
not inferred from the diff:

- **(a)** Both curated PALMER-1 mutants (`anflower-merge-locals-single-only`,
  `stacklower-merge-locals-property-only`) — re-derived against the multi-result branch node in
  the `62ff2dad` fix — were reapplied by hand line-for-line from `conformance/mutation/mutants.json`
  and **CAUGHT** by the exact gates the corpus expects, with the exact failure counts the corpus's
  own `finding` text predicts (5/9 and 8/9 shapes respectively). The project's own automated
  harness (`run-mutation.ts`) independently confirms this: **22/22 caught, 0 survivors, 0 stale**,
  live against `62ff2dad` (not just the checked-in `baseline.json` — the harness was actually run).
- **(b)** Both PALMER-2 mutants (encode + decode, co-applied exactly as `bd7ec284` co-changed
  them) reapplied cleanly and were **CAUGHT** by all four target gates, with the round-trip
  sub-test staying green under the co-mutation exactly as plan §2 P3 predicts — reproduced
  byte-for-byte against the original run's numbers.
- **(c)** `conformance/scripts/wire-format-pr-audit.ts --changed-file`, fed the **literal,
  unmodified** `git show --name-only bd7ec284` output (commit-message header included, exactly as
  instructed), now **exits 1** — where the original run measured exit 0. This is the single
  finding this whole drill exists to either confirm or refute, and it is now refuted: the gate
  fires on the incident that named it.

**Nothing was softened to get here.** Drill (a)'s residual gap from the original run — "the guard
catches 'the patch no longer applies', not 'the patch applies but hits dead code'" — is unchanged
and still open; see "Still open" below. Drill (c)'s measured false-positive cost from the original
`UPDATE` block (8 of the last 60 first-parent commits on `main` now fail the hard gate, 7 of which
are one incident family repeated) was **not re-derived in this pass** — re-running it needs ~60
`git show` + gate invocations per commit, is orthogonal to the yes/no §10.5 question, and the
mechanism producing that number (`ok = problems.length === 0 && (wireHits.length === 0 ||
pinHits.some(isStrongPin))`, confirmed present verbatim in current source) has not changed since
it was measured. Flagged as unverified-in-this-pass rather than silently repeated as fact.

Full per-drill table, verbatim gate output, and clean-revert proof are under "RE-RUN — 2026-08-06,
HEAD `62ff2dad`" at the bottom of this document. Everything above the re-run section is the
**original** run, kept as the evidence the gates were broken in the first place.

---

## ORIGINAL RUN — 2026-08-06, HEAD `4b0f688f`

**Worktree:** `.worktrees/testing-gap`, branch `fix/testing-gap-remediation`, HEAD
`4b0f688f` (multi-result branch node), clean tree throughout — verified with
`git status --porcelain` before and after every mutation below.

Each drill temporarily re-introduced a defect, ran the gates the plan claims
would catch it, recorded the verbatim result, then reverted and re-verified a
clean tree + green gates. No permanent change was made outside this file.

**Verdict up front (as measured, 2026-08-06, HEAD `4b0f688f`):** §10.5 was **not fully
satisfied**. Drills (a) and (b) pass once the pre-existing corpus is
repaired/derived against the current tree, but that repair itself surfaced a
live regression in the mutation corpus (below). Drill (c) **failed outright**
on the literal historical replay the plan text specifies — the single most
important finding of this drill. Details and full reasoning follow; do not
skip to the table without reading the drill (c) section.

> **UPDATE — as originally written, same day (2026-08-06), before the re-run below existed.**
> **Kept verbatim as the historical claim being tested; superseded by "RE-RUN" at the bottom,
> which independently reproduces both fixes rather than trusting this block's prose.**
>
> - **Drill (c) — claimed FIXED.** `weakPinOnly` is now a hard failure:
>   `ok = problems.length === 0 && (wireHits.length === 0 || pinHits.some(isStrongPin))`.
>   Replaying the literal `bd7ec284` changed-set now **exits 1**, pinned by
>   `describe('wire-format-pr-audit — bd7ec284 (the incident this gate exists for)')`.
>   Measured false-positive cost: **8 of the last 60 first-parent commits on
>   `main`** now fail — and **7 of those 8 are the same incident family** (the
>   C9+S1 MINIMALDATA port series, each evidenced only by its own round-trip
>   test), i.e. `bd7ec284` repeated seven times. Nothing was softened.
> - **Drill (a) — claimed FIXED.** Both PALMER-1 mutants were re-derived against the
>   current tree and their `expectCaughtBy` now lists only the gates that
>   *actually* fire — the depth invariant is deliberately absent from the
>   anf-lower mutant, because that defect is depth-preserving and
>   name-corrupting. A **stale-mutant guard** was added: a patch that no longer
>   applies is now a loud `STALE` failure excluded from the denominator, rather
>   than a silent survivor indistinguishable from a real detection gap — which
>   is exactly the ambiguity that let this sit.
>
> **Residual, still open:** the guard catches "the patch no longer applies".
> "The patch applies but hits dead code" is still caught only by the
> `mutation-score` baseline-regression job in `fuzzer-nightly.yml`, which is
> gated `if: github.event_name != 'pull_request'`. Promoting it to run on PRs
> that touch `04-anf-lower.ts` / `05-stack-lower.ts` would have caught this in
> ~40s on the PR that caused it. **Still true at `62ff2dad` — not re-addressed
> by any of the four commits that landed after this block was written.**

---

## Drill (a) — single-local-only ANF merge

### Step 0 — the curated mutants are stale against `4b0f688f`

`conformance/mutation/mutants.json` carries two PALMER-1 mutants:
`anflower-merge-locals-single-only` (04-anf-lower.ts) and
`stacklower-merge-locals-property-only` (05-stack-lower.ts). Both `find`
strings still occur exactly once in the current source (mechanically
"applicable"), but the multi-result branch node (`4b0f688f`, "close the
merged-local defect family") moved the real merge decision to new code both
mutants' target lines no longer gate:

- `anflower-merge-locals-single-only` targets `if (mergedLocals.length >= 2)`
  inside `branchOutputRejectionReason` — a function that only runs when an
  `if` arm contains an output intrinsic. The branch-merged-locals fixtures
  never emit outputs *inside* a branch, so this code path never executes for
  them.
- `stacklower-merge-locals-property-only` targets the `_properties`
  membership check inside `elseMatchesThenNResultLayout` — a **fallback**
  used only when `nDeclared === 0` (no `results` were declared by
  04-anf-lower's new normalisation block). Every branch-merged-locals shape
  with ≥2 merged locals now takes the `nDeclared >= 1` declared-results path
  instead, so this fallback is also dead for them.

Applied each literally (via mutants.json's own find/replace, one at a time,
each reverted before the next) and ran the intended gate:

```
$ npx vitest run packages/runar-testing/src/__tests__/branch-merged-locals-vm.test.ts \
                 packages/runar-compiler/src/__tests__/branch-result-depth-invariant.test.ts
 Test Files  2 passed (2)
      Tests  27 passed (27)          # anflower-merge-locals-single-only mutant applied
```
```
 Test Files  2 passed (2)
      Tests  27 passed (27)          # stacklower-merge-locals-property-only mutant applied
```
```
$ cd conformance && npx vitest run witnesses/real-crypto-execution.test.ts -t "branch-merged-locals"
 Tests  3 passed | 90 skipped (93)   # both mutants — witness unaffected either time
```

**Both SURVIVE.** Confirmed authoritatively with the project's own harness
(not just my manual replication):

```
$ cd conformance && npx tsx mutation/run-mutation.ts --json-out /tmp/mutation-current.json
  caught 20/22 mutants that MUST be caught
  SURVIVED         anflower-merge-locals-single-only  branch-merge regression / anf-lower
  SURVIVED         stacklower-merge-locals-property-only branch-merge regression / stack-lower
  ✗ UNEXPECTED SURVIVORS (real holes in the net — MUST be addressed):
   • anflower-merge-locals-single-only (branch-merge regression / anf-lower) — expected branch-merged-locals-vm
   • stacklower-merge-locals-property-only (branch-merge regression / stack-lower) — expected branch-merged-locals-vm
(33.2s wall, 22 mutants)
```

**This is a live, currently-undetected regression, not a hypothetical one.**
`conformance/mutation/baseline.json` (checked in) records both mutants as
`"caught": true`. `.github/workflows/fuzzer-nightly.yml`'s `mutation-score`
job diffs a fresh run against that baseline and fails on
`b.caught && c.survived` ("MUTATION REGRESSION — the net weakened") — but
that job runs **nightly only** (`if: github.event_name != 'pull_request'`),
not on PRs, and per its own comment it has not run since `4b0f688f` landed.
The corpus has silently lost detection power for the exact defect family the
plan calls its highest-priority regression target (§3 Phase E1), and nothing
has said so yet. Reverted cleanly (`git status --porcelain` empty, re-run
green) after each of the two probes above.

### Step 1 — derive the equivalent defect against current source

Faithful "rewire only a single local" for the current (multi-result-node)
architecture is one line in the function that actually decides how many
locals get normalised, `collectBranchMergedLocals`
(`packages/runar-compiler/src/passes/04-anf-lower.ts`):

```diff
   const merged = lastRebindOrder(thenCtx);
   for (const name of lastRebindOrder(elseCtx)) {
     if (!merged.includes(name)) merged.push(name);
   }
-  return merged;
+  return merged.slice(0, 1);
```

This truncates the canonical merge list to its first entry regardless of how
many locals either arm actually reassigns, so only one local ever gets the
explicit two-pass copy-then-rebind block both arms need; every other
genuinely-reassigned local silently falls through to whatever machinery
handles undeclared results.

**Gates that fired:**

| Gate | Result | Detail |
|---|---|---|
| `branch-merged-locals-vm.test.ts` | **CAUGHT** | 5/9 failed: S3 (k=2 same-set), S6 (k=3), S7 (k=2 mixed types), S8 (k=4 asymmetric, the filed repro), S9 (nested). S1/S2 (k=1, untouched by this code path) and S5 (`if` w/o `else`, separate path) still pass, as expected. |
| real-crypto witness `branch-merged-locals.json` | **PARTIALLY CAUGHT** | 1/3 failed: the `toFirst==0` accept (else-arm reassigns `nb`, `na` must survive) — real `@bsv/sdk` Spend rejected the call as script-invalid. The `toFirst>0` accept and the tamper-reject still passed. |
| `branch-result-depth-invariant.test.ts` | **did NOT fire** | 18/18 pass. The invariant added in `7b888035` to make "the next one LOUD instead of silent" does not see this shape — both arms end at a depth the invariant's `stackMap.depth + postEndifDrops === armDepth` check accepts; the bug is which *name* occupies a slot, not the slot count. |

Gates that stayed green did so honestly (they check depth, not value/name
identity) — this is not a harness flake.

**Timing:** unit gates (`branch-merged-locals-vm` + `branch-result-depth-invariant`)
~1.4s wall; real-crypto witness (`-t` filtered) ~1.35s wall. Both are PR-speed,
not nightly-only.

**Horizontal check (P7):** ran the cross-tier conformance fixture for this
exact construct:

```
$ cd conformance && npx tsx runner/index.ts --multi-format --filter branch-merged-locals
Summary: 0 passed, 9 failed, 0 skipped (9 total)
  IR mismatch between compilers: majority [go, rust, python, zig, ruby, java] vs [ts]
  Script hex mismatch between compilers: ... first differs at byte 809
```

The horizontal gate **also fired** — but for a different, weaker reason than
the plan's P7 claim. My mutation only touched the TypeScript compiler source
(`04-anf-lower.ts`), so TS trivially diverges from the other six unmutated
tiers; that is ordinary cross-tier disagreement, not "all tiers silently
agree on a wrong answer." Demonstrating the plan's actual P7 claim
(*horizontal agreement hides the bug*) would require applying the same
defect identically across all seven `anf_lower` implementations, which this
drill did not attempt (out of scope for a single-session drill covering
three separate defects). The historical record is stronger evidence than a
synthetic single-tier repro could be: `git show 23ef2d2b --stat` — the
original fix commit — states outright **"Branch-merged locals (all 7
compilers)"**: the real PALMER-1 defect was independently present in all
seven `anf_lower` ports before the fix, so seven-way cross-tier agreement
genuinely stayed green for it in production. That is the real P7 proof;
this drill's single-tier variant is a strictly easier catch and should not
be read as equivalent evidence.

Reverted (`return merged.slice(0, 1)` → `return merged;`), confirmed
`git status --porcelain` empty, re-ran all four gates green: 27/27 unit,
3/3 witness, 9/9 conformance PASS.

---

## Drill (b) — OP_N state serialize (encoder + decoder co-changed)

Applied both mutants.json PALMER-2 entries together — the faithful version,
exactly as `bd7ec284` co-changed encode and decode in the same commit:

```diff
 function encodePushDataState(dataHex: string): string {
   const len = dataHex.length / 2;
+  if (len === 1) {
+    const byte = parseInt(dataHex, 16);
+    if (byte >= 0x01 && byte <= 0x10) return (0x50 + byte).toString(16).padStart(2, '0');
+    if (byte === 0x81) return '4f';
+  }
   if (len <= 75) { ... }
@@ decodePushData
-  if (opcode <= 75) {
+  if (opcode >= 0x51 && opcode <= 0x60) {
+    return { data: (opcode - 0x50).toString(16).padStart(2, '0'), bytesRead: 2 };
+  } else if (opcode === 0x4f) {
+    return { data: '81', bytesRead: 2 };
+  } else if (opcode <= 75) { ... }
```

(`packages/runar-sdk/src/state.ts`.) Ran the four target gates:

| Gate | Result | Detail |
|---|---|---|
| `state-push-framing-vm.test.ts` | **CAUGHT** — 9/36 failed | Write-path real deploy→call→Spend failures for handle=01,02,05,10,81 (broadcast rejected — the client-built output no longer matches what the on-chain script recomputes for `hashOutputs`); the PRESET read-path (spendability of a pre-deployed OP_N-range value) failed outright; 2 direct absolute-pin unit assertions (`serializeState(...) toBe('0105')` / `'0181'`) failed; the mixed-carrier value-pin failed. |
| `c28-state-strict.test.ts` | **CAUGHT** — 2/18 failed | `expect(hex).toBe('0105')` failed (got `'55'`); `expect(() => deserializeState(fields,'55')).toThrow(/is not a push opcode/)` failed — with decode also mutated, `'55'` now decodes successfully instead of throwing. |
| `encode-push-data-minimaldata.test.ts` (**C2/C5 divergence test** — construct-ledger.json names this file explicitly: *"Pins the DIVERGENCE deliberately: serializeState keeps `<len><data>`... while encodeArg... keeps MINIMALDATA"*) | **CAUGHT** — 5/15 failed | 3 direct absolute-pin assertions on `serializeState` output, plus both dedicated `C5` tests (`serializeState` and `encodeArg` must produce DIFFERENT bytes for an OP_N value) — those two exist specifically to fail the moment the two encoders are unified, which is exactly what this mutation does. |
| sdk-output golden `stateful-bytestring-op-n-state` | **CAUGHT** | `ERROR: typescript: does not match golden file` + cross-SDK mismatch vs the 6 unmutated tiers. Caveat below. |

**The round-trip stayed green, as the plan predicts.** Inside
`state-push-framing-vm.test.ts`, `'round-trips through deserializeState for
every 1-byte value'` (loops byte 0–0xff through `serializeState` then
`deserializeState` and asserts equality) is **not** in the failure list — it
passed under full co-mutation, because a co-changed encoder/decoder pair
round-trips for *any* self-consistent framing, wrong ones included. This is
an empirical, not asserted, confirmation of plan §2 P3 for this exact file.

**Caveat on the sdk-output golden:** this drill mutated the TypeScript SDK
only, so the golden fails two ways at once (cross-SDK disagreement with the
six untouched tiers, *and* disagreement with the pinned
`expected-locking.hex`). The historical incident was stronger and quieter:
`bd7ec284`'s own commit message reports **"SDK-output conformance
46/46"** — all seven SDKs agreed with each other for weeks, because no
fixture exercising a 1-byte OP_N-range ByteString state field existed yet.
`stateful-bytestring-op-n-state` (added later, by this remediation plan) is
what closes that hole now; a fresh single-tier drill can only show the
weaker "diverges from its unmutated peers" version of the catch.

**Timing:** the three unit-test files together ran in ~1.5–1.8s wall
(vitest startup dominates); the sdk-output golden ran in ~1.6–2.7s wall
across 7 SDK tools (rust 2–9ms, zig 14–37ms, ruby 82–131ms, java 53–133ms,
python 251–403ms, go 126–336ms, typescript 464ms–1.2s). All PR-speed.

Reverted both mutants (`git status --porcelain` empty), re-ran all four
gates green: 69/69 unit tests, sdk-output 7/7 PASS.

---

## Drill (c) — wire serializer change with zero golden diffs

Reproduced the #110 *process* failure by feeding
`conformance/scripts/wire-format-pr-audit.ts --changed-file` the **exact,
literal** changed-file set of the incident commit `bd7ec284` ("port #110
MINIMALDATA encode_push_data to the other 6 SDKs" — the commit whose own
message states "No golden change... SDK-output conformance 46/46"):

```
packages/runar-go/sdk_state.go
packages/runar-go/sdk_test.go
packages/runar-java/src/main/java/runar/lang/sdk/ScriptUtils.java
packages/runar-java/src/test/java/runar/lang/sdk/ScriptUtilsTest.java
packages/runar-py/runar/sdk/state.py
packages/runar-py/tests/test_sdk_state.py
packages/runar-rb/lib/runar/sdk/state.rb
packages/runar-rb/spec/sdk/state_spec.rb
packages/runar-sdk/src/__tests__/encode-push-data-minimaldata.test.ts
packages/runar-sdk/src/contract.ts
packages/runar-sdk/src/state.ts
packages/runar-zig/src/sdk_state.zig
```

```
$ cd conformance && npx tsx scripts/wire-format-pr-audit.ts --changed-file /tmp/bd7ec284-changed.txt
✓ Must-move-a-golden gate: 7 wire-format path(s) changed, 1 pinned byte artifact(s) moved with them.
    pin: packages/runar-sdk/src/__tests__/encode-push-data-minimaldata.test.ts

⚠ Every pin in this PR is a tier-local test file. A tier-local codec test is
often the encoder graded against its own inverse (round-trip class, plan P3 /
reviewer #4) — it holds for ANY self-consistent framing, including a wrong
one. Prefer moving a cross-component byte pin as well: ...
$ echo $?
0
```

### This gate does NOT fail on the literal replay. This is the most important finding in this drill.

`bd7ec284` also **created** (63 new lines, 0 deletions —
`packages/runar-sdk/src/__tests__/encode-push-data-minimaldata.test.ts`) a
brand-new test file in the same commit as the wire change. That path matches
the gate's own `TIER_LOCAL_PIN_NAME_GLOBS` (`*minimaldata*`) under
`TIER_LOCAL_PIN_TEST_ROOT_GLOBS` (`packages/*/src/__tests__/**`), so
`pinKindOf()` classifies it as a **weak** pin. The satisfiability check —
`ok = problems.length === 0 && (wireHits.length === 0 || pinHits.length > 0)`
— treats *any* pin, weak or strong, as sufficient: `weakPinOnly` is computed,
threaded through to the rendered message as a `⚠` warning, and **never once
flips `ok` to `false`**. This is not an oversight I'm inferring — it is
explicitly unit-tested behaviour:
`conformance/scripts/__tests__/wire-format-pr-audit.test.ts:324`,
*"flags a tier-local unit test as a WEAK pin (round-trip class) **without
failing**"*.

At the time it shipped, that new test file asserted the *wrong* (MINIMALDATA)
behaviour for state serialization as correct — it was the "co-changed pair"
test the docstring at the top of `wire-format-pr-audit.ts` itself calls out
("the encoder and the decoder were co-changed and every test was a
round-trip... It was green because... every test was a round-trip"). Feeding
this gate the literal historical changed-set does not fail — it passes with
a warning, on the strength of exactly the kind of test the plan says must
never be sufficient (P3).

**Contrast — the wire-format *detection* half is not broken.** Stripping the
test-file additions and running only the seven non-test implementation paths
`bd7ec284` touched:

```
$ cd conformance && npx tsx scripts/wire-format-pr-audit.ts --changed-file /tmp/bd7ec284-impl-only.txt
✗ MUST-MOVE-A-GOLDEN GATE FAILED
7 wire-format implementation path(s) changed and NOT ONE pinned byte artifact moved with them:
  [sdk-state-serialization] ✗ sdk_state.go ✗ state.py ✗ state.rb ✗ state.ts ✗ sdk_state.zig
  [push-data-encoding]      ✗ ScriptUtils.java
  [constructor-slot-splicing] ✗ contract.ts
$ echo $?
1
```

correctly fires. So the family/glob classification of wire-format
implementation paths is sound; the failure is specifically that a co-added
weak/tier-local test is enough to silence the block for a PR that also
touches implementation paths — which is precisely the shape the real #110
incident had.

**Timing:** both invocations ran in ~0.27–0.28s wall — no compiler/SDK
spawning, pure path-glob classification. This is by far the cheapest gate
in the whole drill and the one place where "nightly-only" cannot be used
as an excuse for not firing.

No file mutation was needed for this drill (`--changed-file` reads an
arbitrary path list; nothing in the tree was touched), so there was nothing
to revert. `git status --porcelain` was empty before, during, and after.

---

## Gate summary table (ORIGINAL RUN, HEAD `4b0f688f`)

| Drill | Gate | Fired? | Time | Notes |
|---|---|---|---|---|
| (a) | `branch-merged-locals-vm.test.ts` (pre-existing mutants, literal) | **NO — SURVIVED** | ~1.4s | Both PALMER-1 mutants stale post-`4b0f688f`; confirmed by live `run-mutation.ts` run, contradicts checked-in `baseline.json` |
| (a) | `branch-merged-locals-vm.test.ts` (derived mutation) | **YES** | ~1.4s | 5/9 shapes (k≥2 same-arm-multi-push); S4/S5/S1/S2 unaffected |
| (a) | real-crypto witness `branch-merged-locals.json` | **partial YES** | ~1.35s | 1/3 spends (toFirst==0 direction) |
| (a) | `branch-result-depth-invariant.test.ts` | **NO** | ~1.4s (combined) | Depth-only invariant; this defect preserves depth, changes name binding |
| (a) | horizontal: `conformance/tests/branch-merged-locals` (7-tier) | YES, but weak evidence | ~3.6s | TS-only mutation trivially diverges from 6 unmutated tiers; real historical bug was 7-tier-identical (git show 23ef2d2b) |
| (a) | nightly mutation baseline-regression check (`fuzzer-nightly.yml`) | **latent — has not run since `4b0f688f`** | ~33s (full corpus), nightly cadence only | Will fire "MUTATION REGRESSION" for both stale mutants on next scheduled run |
| (b) | `state-push-framing-vm.test.ts` | **YES** | ~1.5–1.8s | 9/36; round-trip sub-test stayed green (expected, P3-consistent) |
| (b) | `c28-state-strict.test.ts` | **YES** | ~1.5–1.8s (combined) | 2/18, including the negative `deserializeState('55')` throw |
| (b) | `encode-push-data-minimaldata.test.ts` (C2/C5 divergence) | **YES** | ~1.5–1.8s (combined) | 5/15, incl. both dedicated divergence assertions |
| (b) | sdk-output golden `stateful-bytestring-op-n-state` | **YES** | ~1.6–2.7s | Fails both cross-tier and vs. absolute golden; single-tier mutation caveat noted |
| (c) | `wire-format-pr-audit.ts`, literal `bd7ec284` changed-set | **NO — exit 0** | ~0.28s | Co-added `*minimaldata*` test file satisfies the gate as a weak pin; deliberate, tested behaviour, not a bug |
| (c) | `wire-format-pr-audit.ts`, impl-paths-only subset | YES — exit 1 | ~0.27s | Confirms glob/family classification itself is sound |

---

## Verdict on §10.5 (ORIGINAL RUN, HEAD `4b0f688f` — superseded by the RE-RUN below)

**Not satisfied as written.**

1. **(a)** passes only after deriving a new mutation against the current
   source, because both pre-existing PALMER-1 mutants in
   `conformance/mutation/mutants.json` are now dead relative to `4b0f688f`
   and — more importantly — this is not yet visible anywhere except a
   nightly job that has not run since the refactor landed.
   `conformance/mutation/baseline.json` currently overstates detection power
   for exactly the defect family the plan treats as its flagship regression
   target. **Action needed:** update or replace both mutants (target
   `collectBranchMergedLocals`'s truncation as demonstrated here, or an
   equivalent that also perturbs the declared-results path), regenerate
   `baseline.json`, and consider promoting the mutation-score job's
   regression check to run on PRs touching `04-anf-lower.ts` /
   `05-stack-lower.ts` rather than nightly-only.
2. **(b)** passes cleanly, with the round-trip-stays-green / absolute-pin-
   catches contrast empirically demonstrated exactly as the plan predicts.
3. **(c)** **fails.** Driving `wire-format-pr-audit.ts` with the literal,
   real changed-set of the incident commit it was built to catch produces
   exit 0, not exit 1, because that commit's own test-file addition
   satisfies the gate's weak-pin allowance. The plan's §10.5(c) explicitly
   asks to "confirm exit 1"; the honest result is that it does not, on the
   exact input specified. The gate's core wire-path/pin-family
   classification is sound (proven by the impl-only-subset control run) —
   the gap is specifically that a same-PR, tier-local, round-trip-class test
   addition is accepted as sufficient evidence, which is the identical
   pattern the plan's own P3 principle says must never be sufficient. This
   is a genuine, currently-live hole in the Phase F1 gate, not a flake or a
   scope artifact of this drill.

The P7 (horizontal ≠ vertical) claim is well supported overall, but by a mix
of this drill's absolute/vertical gates (which did fire in (a) and (b)) and
the historical record (`git show 23ef2d2b`, `bd7ec284`'s own "46/46"
message) rather than by a from-scratch 7-tier-synchronized horizontal-stays-
green reproduction, which this single drill session did not attempt.

---

## RE-RUN — 2026-08-06, HEAD `62ff2dad`

**What moved between the two runs.** The full sequence since the plan's remediation
commit is `32b9cb2a` → `2fd901de` → `7b888035` → `4b0f688f` (the original run's HEAD)
→ `62ff2dad` (this run's HEAD). Exactly one commit landed between the two runs:
`62ff2dad`, "close the branch-node boundary defects found by review". Its diff
bundles three things relevant here, none narrated in its own commit message (a
git-hygiene gap, noted but not in scope to fix):
- `conformance/mutation/mutants.json` + `conformance/mutation/baseline.json` —
  both PALMER-1 mutants re-derived against the `4b0f688f` multi-result branch node
  (this is the re-derivation the original run's `UPDATE` block described).
- `conformance/scripts/wire-format-pr-audit.ts` + its test file — `weakPinOnly` made
  load-bearing in the `ok` formula (the drill-(c) fix).

Re-derived each drill against `62ff2dad`'s current source rather than replaying the
original run's patches blind, per instruction. All three mutants.json `find` strings
still match exactly once in current source — **not stale** — confirmed both
mechanically (`content.count(find) == 1`) and by actually running the gates below.

### Drill (a) re-run

**Step 0 — automated harness, live, against `62ff2dad` (not the checked-in baseline):**

```
$ cd conformance && npx tsx mutation/run-mutation.ts --json-out /tmp/mutation-rerun-62ff2dad.json
  caught 22/22 mutants that MUST be caught
  (22 total mutants; 0 documented survivor(s))
  caught           anflower-merge-locals-single-only  branch-merge regression / anf-lower by [branch-merged-locals-vm, real-crypto-branch-merged-locals]
  caught           stacklower-merge-locals-property-only branch-merge regression / stack-lower by [branch-merged-locals-vm, branch-result-depth-invariant, real-crypto-branch-merged-locals]
  ... (20 other mutants, all caught)
$ echo $?
0
```
Wall time: 56.0s for the full 22-mutant corpus (this is the whole net, not just
these two mutants). **0 stale, 0 survivors** — the original run's finding ("both
PALMER-1 mutants SURVIVE, baseline.json overstates detection") is refuted at
`62ff2dad`.

**Step 1 — manual reproduction, hunk-by-hunk, to confirm the harness isn't lying.**
Applied `anflower-merge-locals-single-only` by hand (identical hunk to the original
run's derived defect — mutants.json now encodes the same truncation):

```diff
--- a/packages/runar-compiler/src/passes/04-anf-lower.ts
+++ b/packages/runar-compiler/src/passes/04-anf-lower.ts
@@ -1357,7 +1357,7 @@ function collectBranchMergedLocals(
   for (const name of lastRebindOrder(elseCtx)) {
     if (!merged.includes(name)) merged.push(name);
   }
-  return merged;
+  return merged.slice(0, 1);
 }
```

```
$ npx vitest run packages/runar-testing/src/__tests__/branch-merged-locals-vm.test.ts \
                 packages/runar-compiler/src/__tests__/branch-result-depth-invariant.test.ts
 ✓ branch-result-depth-invariant.test.ts (18 tests)
 ✗ branch-merged-locals-vm.test.ts — FAIL: S3, S6, S7, S8, S9 (5 of 9)
 Test Files  1 failed | 1 passed (2)
      Tests  5 failed | 22 passed (27)
   Duration  1.08s
```
Matches the original run's derived-defect numbers exactly (5/9, same shapes).
Depth invariant stayed green honestly (18/18) — same reason as before: this defect
preserves depth, corrupts name binding.

```
$ cd conformance && npx vitest run witnesses/real-crypto-execution.test.ts -t "branch-merged-locals"
 ✗ bid(["7n","0n"]) → accept [toFirst==0...] — FAIL (real @bsv/sdk Spend rejected the tx)
 Tests  1 failed | 2 passed | 96 skipped (99)
   Duration  1.27s
```
Matches (1/3 spends, the toFirst==0 direction).

```
$ cd conformance && npx tsx runner/index.ts --multi-format --filter branch-merged-locals
Summary: 0 passed, 9 failed, 0 skipped (9 total)
  IR mismatch: majority [go, rust, python, zig, ruby, java] vs [ts], first differs at offset 4668
  Script hex mismatch: majority [go, rust, python, zig, ruby, java] vs [ts], first differs at byte 809
   Wall: 4.06s
```
Horizontal gate fires — same weak-evidence caveat as the original run (single-tier
mutation trivially diverges from 6 unmutated peers; the real P7 proof remains the
historical `git show 23ef2d2b` record, not this drill).

Reverted (`git checkout -- packages/runar-compiler/src/passes/04-anf-lower.ts`).
`git status --porcelain` empty. Re-ran green: 27/27 unit tests.

Applied `stacklower-merge-locals-property-only` by hand next (same hunk mutants.json
now encodes):

```diff
--- a/packages/runar-compiler/src/passes/05-stack-lower.ts
+++ b/packages/runar-compiler/src/passes/05-stack-lower.ts
@@ -2493,7 +2493,7 @@ class LoweringContext {
       for (const name of results) {
-        this.stackMap.push(name);
+        this.stackMap.push(this._properties.some((p) => p.name === name) ? name : bindingName);
       }
```

```
$ npx vitest run packages/runar-testing/src/__tests__/branch-merged-locals-vm.test.ts \
                 packages/runar-compiler/src/__tests__/branch-result-depth-invariant.test.ts
 ✗ branch-result-depth-invariant.test.ts — 12 of 18 FAIL
 ✗ branch-merged-locals-vm.test.ts — 8 of 9 FAIL (all but S2, if-without-else)
 Test Files  2 failed (2)
      Tests  20 failed | 7 passed (27)
   Duration  1.29s
```
Matches mutants.json's own `finding` text exactly (8/9, 12/18). Unlike the
anf-lower mutant, this one DOES move the depth invariant — confirmed live, not
assumed.

```
$ cd conformance && npx vitest run witnesses/real-crypto-execution.test.ts -t "branch-merged-locals"
 ✗ all 3 real-crypto spends FAIL — 1 is a hard compile error ("Value 'na' not found on stack")
 Tests  3 failed | 96 skipped (99)
   Duration  1.28s
```
Matches (3/3, one a compile-time rejection rather than a broadcast rejection).

```
$ cd conformance && npx tsx runner/index.ts --multi-format --filter branch-merged-locals
Summary: 0 passed, 9 failed (9 total) — TypeScript compiler fails outright with
  "Value 'na' not found on stack" on all 9 formats.
   Wall: 3.65s
```

Reverted (`git checkout -- packages/runar-compiler/src/passes/05-stack-lower.ts`).
`git status --porcelain` empty. Re-ran green: 27/27 unit tests.

**Drill (a) verdict: CONFIRMED FIXED.** Both mutants apply cleanly (not stale),
both are caught by the exact gates and exact failure counts the corpus's own
`finding` text now documents, and the live harness independently confirms 22/22,
0 stale, 0 survivors against `62ff2dad`. This is a genuine re-derivation, not a
repeat of the original run's already-fixed patch — mutants.json's hunks moved with
the source (04-anf-lower.ts's function signature and stack-lower.ts's declared-
results path are the current, not the pre-4b0f688f, code).

**Still open** (unchanged from the original run's residual note): the stale-mutant
guard catches "the patch no longer applies"; it does not catch "the patch applies
but hits dead code that no gate exercises" — that is still only caught by the
nightly-only `mutation-score` job in `fuzzer-nightly.yml`. Not re-addressed by any
commit since the original run.

### Drill (b) re-run

Applied both `sdkstate-encode-minimaldata-opn` / `sdkstate-decode-opn-as-length`
mutants together (they are now two separate corpus entries rather than one combined
one, but the historical incident co-changed both in a single commit, so applying
both together remains the faithful replay):

```diff
--- a/packages/runar-sdk/src/state.ts
+++ b/packages/runar-sdk/src/state.ts
@@ function encodePushDataState(dataHex: string): string {
   const len = dataHex.length / 2;
+  if (len === 1) {
+    const byte = parseInt(dataHex, 16);
+    if (byte >= 0x01 && byte <= 0x10) return (0x50 + byte).toString(16).padStart(2, '0');
+    if (byte === 0x81) return '4f';
+  }
   if (len <= 75) {
@@ decodePushData
-  if (opcode <= 75) {
+  if (opcode >= 0x51 && opcode <= 0x60) {
+    return { data: (opcode - 0x50).toString(16).padStart(2, '0'), bytesRead: 2 };
+  } else if (opcode === 0x4f) {
+    return { data: '81', bytesRead: 2 };
+  } else if (opcode <= 75) {
```

```
$ npx vitest run packages/runar-testing/src/__tests__/state-push-framing-vm.test.ts \
                 packages/runar-sdk/src/__tests__/c28-state-strict.test.ts \
                 packages/runar-sdk/src/__tests__/encode-push-data-minimaldata.test.ts
 ✗ state-push-framing-vm.test.ts — 9 of 36 FAIL
 ✗ c28-state-strict.test.ts — 2 of 18 FAIL
 ✗ encode-push-data-minimaldata.test.ts — 5 of 15 FAIL
 Test Files  3 failed (3)
      Tests  16 failed | 53 passed (69)
   Duration  ~1.68s
```
Byte-for-byte identical failure counts to the original run (9/36, 2/18, 5/15).

Isolated round-trip re-check, still under mutation:
```
$ npx vitest run packages/runar-testing/src/__tests__/state-push-framing-vm.test.ts \
    -t "round-trips through deserializeState for every 1-byte value"
 ✓ 1 passed | 35 skipped (36)
```
Confirmed: the round-trip sub-test stays green under the co-mutation — same
P3-consistent result as the original run, reproduced independently.

```
$ cd conformance/sdk-output && npx tsx runner/sdk-runner.ts --filter stateful-bytestring-op-n-state
[x] stateful-bytestring-op-n-state: FAIL
    typescript: OK  go: OK  python: OK  ruby: OK  rust: OK  zig: OK  java: OK
    ERROR: MISMATCH: typescript vs go/python/ruby/rust/zig/java (same hash on all 6, differs from ts)
    ERROR: typescript: does not match golden file
   Wall: 1.57s
```
All 6 unmutated tiers agree byte-for-byte with each other and diverge only from
the mutated TypeScript tier — same shape as the original run.

Reverted (`git checkout -- packages/runar-sdk/src/state.ts`). `git status --porcelain`
empty. Re-ran green: 69/69 unit tests, sdk-output golden PASS (all 7 tiers OK).

**Drill (b) verdict: CONFIRMED, unchanged.** No regression, no drift — this drill
was already passing at the original run's HEAD and remains passing at `62ff2dad`,
independently reproduced with identical numbers.

### Drill (c) re-run

Followed the instructed literal replay exactly:

```
$ git show --name-only bd7ec284 > /tmp/bd.txt
$ cd conformance && npx tsx scripts/wire-format-pr-audit.ts --changed-file /tmp/bd.txt
✗ MUST-MOVE-A-GOLDEN GATE FAILED

7 wire-format implementation path(s) changed, and every pin that moved with them is WEAK — evidence ABOUT bytes, never the bytes themselves:

      ~ packages/runar-sdk/src/__tests__/encode-push-data-minimaldata.test.ts  (WEAK pin)

A tier-local codec test written in the same PR as the encoder it exercises is
the encoder graded against its own inverse (round-trip class, plan §2 P3) — it
holds for ANY self-consistent framing, including a wrong one. [...]

  [sdk-state-serialization ...] ✗ sdk_state.go ✗ state.py ✗ state.rb ✗ state.ts ✗ sdk_state.zig
  [push-data-encoding ...]      ✗ ScriptUtils.java
  [constructor-slot-splicing ...] ✗ contract.ts
  [...full remediation checklist...]
$ echo $?
1
```
Wall time: 0.267s. **This is the reversal of the original run's central finding**:
the literal, unmodified `bd7ec284` changed-set — commit-message header included,
per the instructed `git show --name-only` invocation — now exits **1**, not 0.
`ok = problems.length === 0 && (wireHits.length === 0 || pinHits.some(isStrongPin))`
is confirmed live in `conformance/scripts/wire-format-pr-audit.ts` (read directly
from source, not inferred from the diff): the co-added `*minimaldata*` test still
classifies as a pin, but as a **weak** one, and a weak-only pin set no longer
satisfies `pinHits.some(isStrongPin)`.

Control run — impl-paths-only subset (same seven non-test files as the original
run's control, minus the five co-added test files):
```
$ npx tsx scripts/wire-format-pr-audit.ts --changed-file /tmp/bd7ec284-impl-only.txt
✗ MUST-MOVE-A-GOLDEN GATE FAILED
7 wire-format implementation path(s) changed and NOT ONE pinned byte artifact moved with them:
  [sdk-state-serialization] ✗ sdk_state.go ✗ state.py ✗ state.rb ✗ state.ts ✗ sdk_state.zig
  [push-data-encoding]      ✗ ScriptUtils.java
  [constructor-slot-splicing] ✗ contract.ts
$ echo $?
1
```
Wall time: 0.274s. Unchanged from the original run (this control was never the
finding — it confirms the family/glob classification was always sound; only the
`ok` formula's tolerance for weak-only pins was the defect).

Supporting confirmation — the gate's own pinned regression test:
```
$ cd conformance && npx vitest run scripts/__tests__/wire-format-pr-audit.test.ts
 ✓ scripts/__tests__/wire-format-pr-audit.test.ts (79 tests)
 Test Files  1 passed (1)
      Tests  79 passed (79)
```
Includes `describe('wire-format-pr-audit — bd7ec284 (the incident this gate exists
for)')` → `it('bd7ec284: the literal changed set FAILS (a co-added weak pin is not
evidence)')`, live and green.

No file mutation was needed (`--changed-file` reads an arbitrary path list; the
working tree was never touched for this drill). `git status --porcelain` empty
throughout.

**Not re-derived in this pass:** the original `UPDATE` block's "8 of the last 60
first-parent commits on `main` now fail the hard gate" false-positive-cost figure.
Re-measuring it needs ~60 `git show` + gate invocations, is a cost/precision
measurement rather than a yes/no §10.5 check, and the mechanism that produced it
(the `ok` formula above) is confirmed unchanged since it was measured. Reporting
it as "previously measured, not reproduced here" rather than repeating it as if
freshly verified.

**Drill (c) verdict: CONFIRMED FIXED.** The original run's single most important
finding — literal `bd7ec284` replay exits 0 — is reversed. It now exits 1, on the
same input, driven by the same instructed command.

### Re-run gate summary table (HEAD `62ff2dad`)

| Drill | Gate | Fired? | Time | Verbatim result |
|---|---|---|---|---|
| (a) | `run-mutation.ts` full corpus (live, `62ff2dad`) | **YES — 22/22 caught** | 56.0s | 0 stale, 0 survivors; both PALMER-1 mutants caught by name |
| (a) | `anflower-merge-locals-single-only` (manual, hunk-for-hunk from mutants.json) | **YES** | 1.08s | 5/9 shapes fail (S3,S6,S7,S8,S9); depth-invariant 18/18 green (honest) |
| (a) | real-crypto witness, anflower mutant | **partial YES** | 1.27s | 1/3 spends (toFirst==0) |
| (a) | horizontal 7-tier, anflower mutant | YES, weak evidence | 4.06s | TS-only diverges from 6 unmutated peers |
| (a) | `stacklower-merge-locals-property-only` (manual) | **YES** | 1.29s | 8/9 shapes fail; depth-invariant 12/18 fail (this face DOES move it) |
| (a) | real-crypto witness, stacklower mutant | **YES** | 1.28s | 3/3 spends fail (1 a compile-time rejection) |
| (a) | horizontal 7-tier, stacklower mutant | YES | 3.65s | TS compiler fails outright on all 9 formats |
| (b) | 3 unit gates, both PALMER-2 mutants co-applied | **YES** | ~1.68s | 9/36, 2/18, 5/15 — identical to original run |
| (b) | round-trip sub-test, under mutation | **stayed green** | <0.1s (in-suite) | 1/1 passed — P3 confirmed again |
| (b) | sdk-output golden `stateful-bytestring-op-n-state` | **YES** | 1.57s | 6 unmutated tiers agree; TS diverges from both peers and golden |
| (c) | `wire-format-pr-audit.ts`, literal `bd7ec284` changed-set | **YES — exit 1** | 0.267s | **REVERSED from original run's exit 0** |
| (c) | `wire-format-pr-audit.ts`, impl-only control | YES — exit 1 | 0.274s | Unchanged — classification was always sound |
| (c) | `wire-format-pr-audit.test.ts` (pinned regression test) | YES, green | 1.09s (79 tests) | Live-asserts the `bd7ec284` literal replay fails |

### Clean tree, throughout

```
$ git status --porcelain
(empty, checked after every single mutation and after the full session)
```

### RE-RUN VERDICT: §10.5 satisfied at `62ff2dad`

All three drills now fire correctly, independently reproduced (not annotated) from
the current source:

1. **(a)** — Fixed, confirmed live by both the automated harness (22/22, 0 stale, 0
   survivors) and manual hunk-for-hunk reproduction of both mutants with exact
   failure counts matching the corpus's own documentation. **One residual gap
   remains, unchanged since the original run**: the mutation-score regression job
   that would catch a *dead-code* mutant (as opposed to a *stale/non-applying* one)
   is still nightly-only, not PR-gated.
2. **(b)** — Unchanged, still passing, independently reproduced with identical
   numbers to the original run.
3. **(c)** — Fixed, confirmed live: the literal `git show --name-only bd7ec284`
   replay that previously exited 0 now exits 1, with the exact `ok` formula change
   verified present in source and the gate's own pinned test suite green (79/79).
   One measurement from the original `UPDATE` block (the "8 of 60" false-positive
   rate) was not re-derived this session and should not be treated as re-verified.

**Nothing in this re-run required softening a gate, patching a test, or repairing a
mutant to make it pass** — every mutant applied cleanly against current source on
the first try, and every gate fired or stayed green for the reason the corpus/plan
predicts.
