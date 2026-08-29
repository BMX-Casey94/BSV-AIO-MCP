# Testing-gap remediation plan — fund-safety blind spots (2026-08)

**Status:** **executed 2026-08-05/06** on branch `fix/testing-gap-remediation` —
all seven milestones landed; see §9 for the tracker and §9.1 for the eight
defects the new machinery found while it was being built (three of them
fund-safety miscompilations of the same family as PALMER-1).  
**Origin:** private fund-safety reports (Ben Palmer, 2026-08-03) fixed in
`23ef2d2b` / merge `e7221a7b`, plus structural analysis of why both bugs
survived a green CI net.  
**Companion status doc (prior wave):**
`docs/audit/2026-07-oracle-remediation-status.md`  
**Reviewer alignment (2026-08):** six ranked testing-architecture comments
incorporated at full strength — see §0.1.  
**Do not “close” items by relabelling coverage claims** without adding real
execution or an independent byte pin (same rule as deep-review C24 /
`conformance/witnesses/README.md`).

---

## 0. Problem statement

Two independent bugs produced **unspendable or silently wrong** contracts while
large parts of the suite stayed green:

| ID (this plan) | Bug | Surface | Why tests lied |
|---|---|---|---|
| **PALMER-1** | Branch-merged locals (≥2 locals / asymmetric rebind through `if`) | All 7 compilers (ANF + stack lower) | No fixture of that shape; `TestContract` / interpreter-primary examples; accept/reject oracles miss quiet stale state |
| **PALMER-2** | State section framed with MINIMALDATA (`OP_N`) instead of `<len><data>` | All 7 SDKs (post-#110) | Round-trip co-changed encoder+decoder; no 1-byte OP_N-range ByteString state fixture; sdk-output only compares SDKs to each other |

Both are **fund-safety**. The suite is strong at multi-tier **parity** and at
oracles for **already-named** bug classes. It is weak at:

1. **Absolute** correctness vs agreement (horizontal parity only)  
2. **Spendability + post-state values** vs interpreter success  
3. **Cross-component (vertical) framing** vs in-package round-trips  
4. **Construct coverage** vs fixture-count coverage  
5. **Default-on** real validation vs opt-in dry-run / always-ack MockProvider  
6. **Spend-oracle fuzz** vs tier-vs-tier horizontal fuzz alone  

This plan closes those structural gaps so the next idiomatic-user bug cannot
ship the same way.

### 0.1 Reviewer ranking → plan (must remain true)

These six points are **requirements**, not optional flavour. Every milestone
must preserve them.

| Rank | Reviewer point | Plan IDs | Stance (this revision) |
|---|---|---|---|
| **1** | Broadcast validation is opt-in; ~600 SDK tests ack anything. **Flip the default; allowlist the few that need permissiveness.** Highest value per unit of work — the switch that found both. | **TG-001**, Phase **A** | **Flip default to validate.** `disableBroadcastValidation()` / allowlist for the few structure-only tests. Not a named helper with always-ack left as default. |
| **2** | Coverage is counted in **fixtures**, not **constructs**. Nothing tracks which language constructs are exercised. A **construct ledger** (merges-N-locals, 1-byte ByteString state, …) would show both holes as empty cells. | **TG-003**, **TG-015**, Phase **D** (ledger first) | Machine-checked `construct-ledger.json` (or equivalent). Empty cell = CI fail unless explicitly `UNCOVERED` with issue. |
| **3** | No **“must move a golden”** rule for wire-format changes. A serializer change that moves **zero** goldens is untested; that should **block**, not reassure. | **TG-011**, Phase **F** | Path-filter gate: wire-format path change ∧ no golden/matrix diff ⇒ fail. |
| **4** | Round-trip tests are mislabelled. Every wire primitive needs ≥1 assertion against the **other** implementation of the format, not its own inverse. | **TG-004**, **P3**, Phase **C** | Round-trip alone is never sufficient for a listed wire primitive. |
| **5** | Parity is **horizontal** only (7 compilers; 7 SDKs). Nothing crosses **compiler↔SDK**. `stateful-bytestring-op-n-state` is the first of that family — **state layout, `constructorSlots` / constructor-arg splicing, and codeSeparator offsets** deserve the same. | **TG-012**, **TG-016**, Phase **C** | Three vertical families, not state alone. |
| **6** | Fuzzers are horizontal too (`anf-differential` tier-vs-tier). A fuzzer with **Spend as oracle** would reach construct space the fixture suite doesn’t. | **TG-006**, Phase **E** | Shape injection **and** a Spend-oracle fuzz job; horizontal fuzz is necessary but not sufficient for fund-safety. |

### Non-goals

- Replacing `TestContract` for pure business-logic unit tests.  
- Adding ScriptVM to Zig/Ruby/Java (documented platform limits; integration +
  vertical pins remain the gate).  
- Exhaustive enumeration of every possible contract shape (the construct ledger
  is finite and fund-critical; empty cells are allowed only as honest
  `UNCOVERED`).  
- Relabelling the remaining 6 `codegen-golden` / go-only fixtures as “covered”
  without new execution or external KATs.  
- Treating tier-vs-tier (horizontal) parity as a substitute for Spend or
  compiler↔SDK (vertical) pins.

### Success criteria (plan-level)

When this plan is fully executed:

1. **`MockProvider` validates broadcasts by default** in the TS SDK (and
   equivalents where a provider exists). Tests that need always-ack are on a
   machine-checked allowlist with reasons. ~600 tests either pass under
   validation or are explicitly allowlisted — no silent always-ack majority.  
2. Every **stateful** real-crypto accept witness pins `expectedState`
   (machine-checked).  
3. A **construct ledger** lists fund-critical language/wire constructs; each
   row has a non-empty coverage cell or an honest `UNCOVERED` + issue. Palmer
   constructs are non-empty.  
4. **Vertical compiler↔SDK** pins exist for at least: **state layout**,
   **`constructorSlots` / constructor-arg splicing**, **codeSeparator offsets**
   — each with absolute goldens, not only 7-way SDK agreement.  
5. Every listed **wire primitive** has ≥1 pin against the other side of the
   format (compiler or peer codec), not only `deserialize(serialize(x))`.  
6. Wire-format PRs that **move zero goldens** (and no matrix/Spend pin files)
   **fail CI**.  
7. A **Spend-oracle fuzzer** (random or construct-biased contracts → real
   `@bsv/sdk` Spend / full deploy-call path) runs in CI/nightly; horizontal
   anf/IR differential remains but is documented as parity-only.  
8. Mutation scores ANF multi-merge + state-framing regressions.  
9. Example/docs policy: stateful examples either have a spendability path or
   an explicit interpreter-only banner.  
10. Remaining C24 unexecuted goldens have an explicit per-fixture **close plan**
    (KAT, real-crypto, or integration **spend**), not stronger-sounding labels.

---

## 1. Finding register

Each finding maps to work items in §3. Severity is fund-safety impact if the
gap hides another Palmer-class bug.

| ID | Sev | Gap | Archetype | Reviewer # |
|---|---|---|---|---|
| **TG-001** | P0 | `MockProvider` always-acks by default; ~600 SDK tests never hit real Spend | Default-off real validation | **1** |
| **TG-002** | P0 | Stateful accepts without mandatory `expectedState` | Quiet wrong state | — |
| **TG-003** | P0 | Coverage counted in fixtures, not constructs; thin shape inventory | Shape not in inventory | **2** |
| **TG-004** | P0 | Round-trip-only codec tests mislabelled as sufficient for wire primitives | Co-changed pair | **4** |
| **TG-005** | P1 | 6 fixtures still unexecuted (was 8; 2 closed 2026-08-06) (`codegen-golden` / `go-only-nocodegen`) | Parity ≠ correctness | — |
| **TG-006** | P1 | Fuzzers horizontal (tier-vs-tier); no construct-biased Spend-oracle fuzzer | Absolute oracle missing | **6** |
| **TG-007** | P1 | Mutation corpus misses ANF-lower multi-merge and SDK framing | Detection power unmeasured | — |
| **TG-008** | P1 | Differential oracle is accept/reject only; docstring overclaims independence for quiet state bugs | Quiet wrong state | — |
| **TG-009** | P1 | Zig/Ruby/Java have no ScriptVM; SDK framing bugs can hide if only round-trips exist | Tier asymmetry | — |
| **TG-010** | P2 | Examples/docs centre `TestContract` as the contract test path | Culture / false green | — |
| **TG-011** | P0 | No must-move-golden rule; serializer Δ with zero golden Δ treated as safe | Process | **3** |
| **TG-012** | P0 | Horizontal-only parity; compiler↔SDK vertical family incomplete beyond OP_N state | Vertical gap | **5** |
| **TG-013** | P1 | Negative compile-time error for if+outputs+≥2 merged locals not guaranteed in all tiers | Regression of hard error → silent emit | — |
| **TG-014** | P2 | `go-family-exec` / deploy-only integration over-claim risk for composed fixture bytes | Coverage theatre | — |
| **TG-015** | P0 | No machine-checked construct ledger (empty cells invisible) | Construct coverage | **2** |
| **TG-016** | P0 | Missing vertical pins: `constructorSlots` / constructor-arg splicing, codeSeparator offsets (and state matrix incomplete) | Vertical family | **5** |

---

## 2. Design principles (how every work item must behave)

### P1 — Fail closed on fund paths (default on)

Broadcast validation is **on by default**. Always-ack is the exception, named
and allowlisted. Any test that claims “deploy + call succeeds” for a
**stateful** or **signed-stateless** contract hits real script evaluation
unless allowlisted with a reason.

### P2 — Pin values, not only verdicts

Stateful success is `(accepted, expectedState[, expectedOutputs])`. Accept
alone is insufficient (PALMER-1 Face B).

### P3 — Cross-component absolute pins beat round-trips

For any encoding shared across a boundary (SDK↔compiler, SDK↔SDK wire,
unlocking vs state section), the gate is:

```text
bytes_from_A(value) === bytes_from_B(value)
```

or

```text
spend(A_bytes) accepts and yields expectedState
```

Never only:

```text
deserialize(serialize(x)) === x
```

Round-trip tests may remain as **smoke** tests but must be labelled
`// round-trip only — absolute pin: <path>` and never be the sole coverage
claim for a wire primitive in the construct ledger or wire-primitive register.

### P4 — Constructs, not only fixtures

Coverage is tracked by **fund-critical constructs** (language shapes + wire
value classes). Fixtures are evidence cells in a construct ledger. An empty
cell is a hole (TG-015). Absence of a fixture is never “safe” (TG-011).

### P5 — Machine-check claims

Every coverage claim remains greppable the way `coverage-claims.test.ts`
already enforces. Construct ledger, allowlists, and must-move-golden gates
extend that style; no prose-only “we covered it.”

### P6 — Honest residuals

If something cannot be closed yet, keep `UNCOVERED` / `codegen-golden` and a
dated close plan. Do not invent a stronger `coveredBy.kind`.

### P7 — Vertical before more horizontal

7-way compiler agreement and 7-way SDK agreement do **not** substitute for a
compiler↔SDK pin. New parity work that only extends horizontal matrices
without a vertical pin for the same family is incomplete for fund-safety.

### P8 — Absolute oracles for fuzz

Tier-vs-tier differential fuzz (anf/IR) is **horizontal**. Fund-safety fuzz
must include an **absolute** oracle: `@bsv/sdk` Spend (and/or full
deploy→call→Spend with expected state where applicable).

### P9 — Must move a golden (wire format)

A change to a wire-format implementation path that does not change any pinned
golden / matrix / vertical fixture files is **untested by definition** and
must fail CI (unless the path is on an explicit exception list for pure
refactors that cannot change bytes — rare; prefer still updating a comment
hash or provenance stamp).

---

## 3. Work packages

Phases are ordered by leverage. Later phases may start earlier if staffed in
parallel, but **Phase A (default flip) and B (expectedState)** are
prerequisites for claiming the Palmer class is closed as a *class*. **Phase D0
(construct ledger skeleton)** should land early so empty cells are visible
while CF/vertical work fills them.

---

### Phase A — Broadcast validation default ON (TG-001, reviewer #1)

**Goal:** The switch that would have failed both Palmer bugs on the main SDK
test path is **default-on**. Permissiveness is rare and allowlisted.

#### A1. Flip `MockProvider` default (TS)

| Field | Detail |
|---|---|
| **Deliverable** | `MockProvider` validates broadcasts by default (`validateBroadcasts = true` on construct, or constructor option defaulting to `true`). API for opt-out: `disableBroadcastValidation()` / `new MockProvider({ validateBroadcasts: false })`. |
| **Files** | `packages/runar-sdk/src/providers/mock.ts`, `c8-mockprovider-broadcast-validation.test.ts` (invert: default rejects invalid; opt-out acks). |
| **Tests first** | (1) Default provider rejects script-invalid and underfunded txs. (2) Explicit disable still acks. (3) Existing green path still accepts valid deploy/call. |
| **Success** | New `new MockProvider()` without flags runs Spend validation. |

**Removed from plan:** “non-goal: do not flip default” and “prefer named
validating helper while leaving always-ack as default.” A convenience
`newAlwaysAckMockProvider()` may exist **only** for allowlisted tests.

#### A2. Allowlist the few tests that need always-ack

| Field | Detail |
|---|---|
| **Scope** | After the flip, every failing SDK test either (a) is fixed to produce script-valid txs, or (b) is allowlisted. |
| **Allowlist** | Machine-checked file, e.g. `packages/runar-sdk/src/__tests__/always-ack-allowlist.json` (or comment marker `// mock-provider: always-ack — <reason>` scanned by a vitest). Each entry: test file + reason (structure-only, intentional invalid tx for negative API test, etc.). |
| **Policy** | Allowlist does not grow without reason review. Prefer fixing tests over allowlisting. Fund-path deploy/call tests **must not** be allowlisted for always-ack. |
| **Success** | CI fails if a test calls `disableBroadcastValidation` / always-ack constructor without an allowlist entry. Count of allowlisted tests is printed and tracked downward. |

#### A3. Mass fix under default validation (not optional migration)

| Field | Detail |
|---|---|
| **Scope** | All `packages/runar-sdk` tests broken by A1. Typical fixes: correct funding, scripts, signatures; use real artifacts; assert rejection where the test was accidentally accepting garbage. |
| **Success** | Full `runar-sdk` vitest suite green with validation default on. Zero fund-path tests on the always-ack allowlist. |

#### A4. `dryRun` policy for call path

| Field | Detail |
|---|---|
| **Preference** | With MockProvider validating on broadcast, `dryRun` is secondary but still useful pre-broadcast. Prefer test helper `callStrict` with `{ dryRun: true }` for explicitness, or document that provider validation is the primary gate. |
| **Production default** | Leave product `CallOptions.dryRun` opt-in unless product decides otherwise (C8 false-rejection concern). **Provider default** is the main lever for tests. |
| **Success** | Invalid primary contract input cannot “successfully broadcast” through default `MockProvider`. |

#### A5. Cross-tier equivalent (Go / Rust / Python / Zig / Ruby / Java)

| Field | Detail |
|---|---|
| **Deliverable** | Per-tier: mock provider / test harness validates when possible; same allowlist philosophy. |
| **TS / Go / Python** | In-process script validation (ScriptVM or go-sdk interpreter) default-on in test doubles. |
| **Rust** | Execute-only ScriptVM where available. |
| **Zig / Ruby / Java** | No ScriptVM: vertical absolute hex pins (Phase C) + integration spends; do not claim Spend default-on. |
| **Success** | Each tier documents how fund-path tests fail closed. |

#### A6. Documentation banner for examples (TG-010)

| Field | Detail |
|---|---|
| **Deliverable** | `packages/runar-testing/README.md` + `docs/testing-guide.md`: **interpreter tests ≠ spendability**; MockProvider now validates by default in SDK tests. |
| **Example policy** | Every **stateful** example under `examples/ts/` either (a) gains one spendability test, or (b) carries `// INTERPRETER-ONLY: spendability covered by conformance/witnesses/real-crypto/<fixture>.json`. |
| **Success** | CI lint (warn→fail): stateful example tests without (a) or (b) fail. |

**Phase A exit criteria**

- [ ] `MockProvider` validates by default; C8 tests inverted accordingly.  
- [ ] Always-ack allowlist exists, machine-checked, and contains only justified entries.  
- [ ] Full TS SDK suite green under default validation.  
- [ ] Docs state interpreter/spendability split and the default-on rule.  
- [ ] At least one stateful example demonstrates spendability or banner + witness.

---

### Phase B — Value pins on stateful success (TG-002, TG-008)

**Goal:** Quiet wrong-state bugs cannot pass real-crypto or differential gates.

#### B1. Mandatory `expectedState` for stateful real-crypto accepts

| Field | Detail |
|---|---|
| **Deliverable** | Extend `conformance/witnesses/coverage-claims.test.ts` so every `kind: "stateful"` witness with `expect: "accept"` requires `expectedState` (non-empty object). |
| **Exceptions** | AS IMPLEMENTED: the repo reuses its pre-existing `noStateCheck: true` convention (plus a non-empty `note` AND `issue`), not the `"terminal": true` / `"expectedState": null` pair this plan originally specified — one mechanism beats two. Machine-checked, and the opt-out count is pinned at zero so the first use is a deliberate diff. |
| **Success** | CI fails if a stateful accept lacks the pin. |

#### B2. Enforce `expectedState` in the harness

| Field | Detail |
|---|---|
| **Deliverable** | `runStatefulSpend` / real-crypto runner: absence of `expectedState` on stateful accept is an error. |
| **Success** | Deleting `expectedState` from `stateful-counter.json` fails claims test and execution harness. |

#### B3. Differential docstring honesty

| Field | Detail |
|---|---|
| **Deliverable** | Update `differential-execution.ts` header: accept/reject agreement does **not** prove correct state; quiet corruptions need `expectedState` / KATs; ANF-level bugs can poison agreement. |
| **Success** | Doc no longer claims “shared compiler bug always caught.” |

#### B4. Integration value asserts

| Field | Detail |
|---|---|
| **Deliverable** | Primary happy-path stateful integration spends assert post-state fields (count, message, …), not only accept/reject. |
| **Success** | Counter / MessageBoard / similar on ≥ TS + Go + one other tier. |

**Phase B exit criteria**

- [ ] Stateful accept ⇒ `expectedState` or explicit terminal marker.  
- [ ] Differential docstring no longer overclaims.  
- [ ] Core integration stateful paths pin values.

---

### Phase C — Vertical compiler↔SDK pins (TG-004, TG-012, TG-016, reviewer #4–#5)

**Goal:** Horizontal 7-compiler and 7-SDK agreement is not enough. Each wire
family has a **vertical** pin: compiler artifact bytes ≟ SDK interpretation /
emission. `stateful-bytestring-op-n-state` is the **first** of the family, not
the only one.

#### C0. Wire-primitive register (reviewer #4)

| Field | Detail |
|---|---|
| **Deliverable** | Short register (JSON or table in this doc + CI) listing every fund-critical wire primitive and its **absolute** pin test path. Round-trip-only tests are forbidden as the sole entry. |
| **Initial rows** | state section framing; unlocking `encodeArg` / MINIMALDATA; `constructorSlots` / constructor-arg splicing into locking script; `codeSeparatorIndex` / `codeSeparatorIndices`; (optional later) preimage field layout, envelope bytes, canonicalJson. |
| **Success** | CI fails if a register row’s sole evidence is a round-trip test file. |

#### C1. Shared state value-class matrix

| Class | Examples |
|---|---|
| ByteString empty | `""` |
| ByteString 1-byte OP_N range | `0x01`…`0x10`, `0x81` |
| ByteString 1-byte 0x00 | `0x00` (must be `0100`, never OP_0) |
| ByteString 1-byte outside range | `0x11`, `0xff` |
| ByteString multi-byte | `0x0011`, `0xdeadbeef` |
| bigint edges | `0`, `1`, `-1`, `127`, `128`, large |
| bool | `true` / `false` |
| Mixed multi-field | Carrier shape: bigint + ByteString + bigint |

#### C2. Vertical family: **state layout** (exists partially)

| Field | Detail |
|---|---|
| **Method** | Matrix row → compile minimal stateful contract → extract state section from **deployed locking script** / compiler encode → compare to each SDK `serializeState`. Pin shared goldens. |
| **E2E** | Expand `state-push-framing-vm.test.ts` to full OP_N range + preset deploy read path + `expectedState`. |
| **sdk-output** | Keep `stateful-bytestring-op-n-state`; extend matrix rows. 7-SDK hex agreement **and** match vertical golden. |
| **Success** | SDK-only or compiler-only framing change breaks CI; co-breaking both still breaks if golden unchanged (must-move-golden, Phase F). |

#### C3. Vertical family: **`constructorSlots` / constructor-arg splicing** (TG-016, new)

| Field | Detail |
|---|---|
| **What** | Contract **constructor arguments** (property values passed to `super(...)` / the deploy-time locking-script template) are spliced into the script at artifact **`constructorSlots`** offsets. The compiler emits the template + slots; each SDK performs the splice. Horizontal sdk-output compares 7 SDKs to each other; the **vertical** pin compares spliced locking hex to a compiler-produced reference (or slot offsets + payload bytes against the artifact). This is a Rúnar deploy-time wire surface — not a BCH-specific construct; “ctor” is avoided in this plan for that reason. |
| **Value classes** | bigint edges, bool, ByteString empty / OP_N-range / multi-byte, multi-slot combinations. |
| **Deliverable** | `conformance/sdk-vertical/constructor-slots/` (or extend sdk-output with compiler-side expected locking hex generated from the same artifact the SDKs consume). |
| **Success** | Off-by-one slot, wrong MINIMALDATA on a constructor-arg ByteString, or tier-local splice bug fails vertical gate even if all SDKs agree with each other. |

#### C4. Vertical family: **codeSeparator offsets** (TG-016, new)

| Field | Detail |
|---|---|
| **What** | Artifact fields `codeSeparatorIndex` / `codeSeparatorIndices` must match the OP_CODESEPARATOR positions the compiler emitted; SDKs use them for sighash / signing. Wrong offsets ⇒ green compile, wrong signatures, unspendable or forgeable spends. |
| **Deliverable** | Fixture set of stateful (and multi-method if needed) contracts; pin expected indices against compiled script byte positions; each SDK asserts it reads/uses the same indices when signing. |
| **Success** | Mutating artifact indices without changing script (or vice versa) fails; SDK that ignores indices fails Spend or vertical pin. |

#### C5. Unlock path keeps MINIMALDATA (distinct from state)

| Field | Detail |
|---|---|
| **Deliverable** | `encodeArg` / push-data tests **require** OP_N for OP_N-range unlocking pushes. |
| **Success** | Unifying unlock and state encode paths fails either C2 or C5. |

#### C6. Label round-trip tests (reviewer #4)

| Field | Detail |
|---|---|
| **Deliverable** | Audit `serializeState`/`deserializeState` and peer-tier round-trips: rename describes or add comments that absolute pins live at C2–C5. Optionally fail a lint if a file under `state.ts` tests only round-trips and is listed as sole evidence in C0. |
| **Success** | No wire primitive’s ledger/register row points only at a round-trip test. |

**Phase C exit criteria**

- [ ] Wire-primitive register exists; no round-trip-only sole rows.  
- [ ] State layout matrix vertical + Spend for dangerous 1-byte classes.  
- [ ] `constructorSlots` / constructor-arg splicing vertical pin landed.  
- [ ] codeSeparator offset vertical pin landed.  
- [ ] Unlock vs state encode cannot be silently unified.

---

### Phase D — Construct ledger + control-flow corpus (TG-003, TG-013, TG-015, reviewer #2)

**Goal:** Coverage is visible by **construct**. Empty cells are the signal that
would have flagged both Palmer holes before the bugs shipped.

#### D0. Construct ledger (machine-checked) — land early

| Field | Detail |
|---|---|
| **Deliverable** | `conformance/construct-ledger.json` (name TBD) + `construct-ledger.test.ts`. |
| **Schema (per row)** | `id`, `category` (`language` \| `wire` \| `control-flow` \| …), `description`, `coveredBy` (paths to fixtures / tests / witnesses), or `status: "UNCOVERED"` + `issue`. |
| **Initial mandatory rows (non-exhaustive)** | `merge-locals-k1`, `merge-locals-k2-asymmetric` (Palmer), `merge-locals-k2-both-arms`, `merge-locals-k3+`, `merge-locals-nested-if`, `loop-carried-locals-k2+`, `cond-write-multi-property` (#99), `if-outputs-and-merge-locals` (negative compile), `state-bytestring-1byte-op-n`, `state-bytestring-empty`, `state-bytestring-0x00`, `constructor-slots-bytestring-op-n`, `codeseparator-indices-stateful`, … |
| **Enforcement** | CI fails if (1) a row has empty `coveredBy` without `UNCOVERED`, (2) a `coveredBy` path does not exist, (3) a new fund-critical construct is added to the required set without a row. |
| **Success** | Deleting `branch-merged-locals` evidence makes `merge-locals-k2-asymmetric` red. Pre-Palmer, those cells would have been empty. |

#### D1. Fill language / control-flow cells (corpus)

Each filled cell is: source + conformance fixture + real-crypto or negative
compile + goldens as appropriate.

| Construct ID | Description | Gate type |
|---|---|---|
| **merge-locals-k2-asymmetric** | ≥2 locals, asymmetric rebind (Palmer) | real-crypto + expectedState (**exists**) |
| **merge-locals-k2-both-arms** | ≥2 locals, both arms rebind both | real-crypto |
| **merge-locals-k3** | ≥3 locals merged | real-crypto |
| **merge-locals-nested-if** | Nested if, merge at outer level | real-crypto |
| **loop-carried-locals-k2** | Loop-carried ≥2 locals then `addOutput` | real-crypto or VM unit |
| **merge-locals-with-prop-updates** | Property updates + local merges | real-crypto |
| **if-outputs-and-merge-locals** | if + outputs + ≥2 merged locals | **negative compile** all 7 tiers |
| **merge-locals-k1** | Single local both arms | keep `if-else` |
| **cond-write-multi-property** | Multi property if-without-else (#99) | keep `cond-write-multi-field` |

#### D2. Negative compile tests for if-outputs-and-merge-locals (all 7 tiers)

| Field | Detail |
|---|---|
| **Deliverable** | Same source expected to fail with the Palmer-fix diagnostic. All 7 compiler unit suites. |
| **Success** | Reverting hard error to silent emit fails all seven. |

#### D3. Wire remaining constructs into witnesses

| Field | Detail |
|---|---|
| **Deliverable** | Prefer sibling fixtures over one mega-contract; update construct ledger `coveredBy` in the same PR as the fixture. |
| **Success** | Ledger cells non-empty; provenance for golden moves. |

#### D4. Mutation hooks

Each past-bug construct gets a mutant that re-breaks it (Phase E1).

**Phase D exit criteria**

- [ ] Construct ledger in CI; Palmer and OP_N-state cells non-empty.  
- [ ] if-outputs-and-merge-locals fails closed on all 7 compilers.  
- [ ] At least k2-both-arms, k3, and negative compile landed in first D
      milestone; nested/loop in a second.  
- [ ] No fund-critical row silently empty.

---

### Phase E — Mutation + Spend-oracle fuzz (TG-006, TG-007, reviewer #6)

**Goal:** Detection power includes Palmer-class mutants **and** a fuzzer whose
oracle is absolute (Spend), not only horizontal tier agreement.

#### E1. New mutation corpus entries (TS)

| Mutant theme | Target area | `expectCaughtBy` (intended) |
|---|---|---|
| Drop multi-local merge / only rewire single local | `04-anf-lower.ts` | real-crypto branch-merged / CF VM |
| Restore property-only N≥2 reconcile | `05-stack-lower.ts` | same |
| Apply OP_N to state serialize | `packages/runar-sdk/src/state.ts` | state-framing VM + C2 golden |
| Decode OP_N as state length again | `state.ts` deserialize | same |
| Optional: wrong constructorSlots length | artifact / splice | C3 vertical |
| Optional: off-by-one codeSeparator index | emit / artifact | C4 vertical |

| Field | Detail |
|---|---|
| **Files** | `conformance/mutation/mutants.json`, `baseline.json`, README, `_gates` map for SDK/vertical gates. |
| **Success** | New mutants with non-empty `expectCaughtBy` are caught; nightly red if they start surviving. |

#### E2. Shape injection into generators (feeds both oracles)

| Field | Detail |
|---|---|
| **Deliverable** | Generators produce with non-zero probability: (a) multi-local branch merges; (b) 1-byte OP_N-range ByteString state; (c) multi-slot constructor-arg / `constructorSlots` shapes. Unit test: seeded run hits each shape. |
| **Success** | Construct space is reachable without hand-written fixtures alone. |

#### E3. Spend-oracle fuzzer (reviewer #6) — first-class job

| Field | Detail |
|---|---|
| **Problem** | `anf-differential` / IR differential compare **tier vs tier** (horizontal). Agreement can be universally wrong. |
| **Deliverable** | New (or extended) fuzz mode, e.g. `conformance/fuzzer/spend-oracle.ts` or `--spend-oracle` flag: generate contract (+ optional stateful path) → compile (TS fold-ON) → build deploy/call or unlocking+locking → run **`@bsv/sdk` Spend** (and ANF interpreter for accept/reject + state where applicable). Fail on script reject when generator intended accept, or on interpreter/Spend disagreement, or on `expectedState` mismatch when state is modeled. |
| **Relation to existing `--execute`** | `--execute` is ANF ≟ ScriptVM on generated scripts — keep it; document as absolute for **stateless** fragments. Spend-oracle extends to **full tx context** / stateful continuation where MockProvider+LocalSigner or harness can drive it. Prefer construct-biased generation (E2) so Palmer space is hit. |
| **CI** | Fixed-seed PR job + longer nightly. Findings promote like existing fuzz-regressions. |
| **Success** | (1) Docs state horizontal vs Spend-oracle. (2) Re-introducing Palmer ANF bug or OP_N state serialize in a worktree is hit by Spend-oracle or mutation within seed budget (document seed). (3) anf-differential alone is not claimed to be fund-safety complete. |

#### E4. Optional metamorphic transforms

| Field | Detail |
|---|---|
| **Deliverable** | Rename locals / swap pure merge arms; must preserve accept/reject **and** `expectedState`. |
| **Success** | Arm-swap preserves state pins. |

**Phase E exit criteria**

- [ ] ≥3 Palmer-class mutants caught.  
- [ ] Generator unit tests prove multi-local + OP_N state shapes.  
- [ ] Spend-oracle fuzz job exists and is gated (PR seed + nightly).  
- [ ] Horizontal-only fuzz documented as insufficient alone for fund-safety.

---

### Phase F — Must-move-golden + process (TG-011, TG-014, reviewer #3)

**Goal:** A wire-format change that moves **zero** goldens is treated as
**untested and blocked**, not as low-risk.

#### F1. Must-move-golden gate (primary rule)

| Field | Detail |
|---|---|
| **Rule** | If a PR diffs any **wire-format implementation path** (see list) and does **not** diff any **pin path**, CI **fails**. |
| **Wire-format implementation paths (initial)** | `**/state.ts`, `**/state.rs`, `**/state.go`, `**/state.py`, …; `encodeArg` / `encode_push_data` / push-encoding; constructor slot splice; codeSeparator emit / artifact fields; OP_RETURN / state framing in stack-lower; per-tier equivalents under `packages/runar-*` and `compilers/*`. Exact globs in the audit script. |
| **Pin paths (initial)** | `conformance/tests/**/expected-*.json`, `expected-script.hex`, `conformance/sdk-output/**`, `conformance/sdk-vertical/**` (new), state-framing / constructorSlots / codesep goldens, `packages/*/src/__tests__/*minimaldata*`, `*state-push-framing*`, construct-ledger evidence files. |
| **Exceptions** | (1) Pure comment/docs. (2) Explicit `wire-format-refactor: no-byte-change` provenance stamp + hash of encoder output over the matrix unchanged (optional advanced). Default: no exception. |
| **Success** | Reproducing #110’s “change all 7 SDK serializers, zero golden moves” fails the gate. |

#### F2. Encoding-change checklist (docs)

Same path list as F1; human checklist in `conformance/README.md` /
`WORKFLOWS.md` / `REVIEW.md`: must-move-golden **or** new Spend pin **or**
temporary `UNCOVERED` with issue (discouraged for wire format).

#### F3. Provenance discipline

| Field | Detail |
|---|---|
| **Rule** | Regenerating goldens requires `verified-against` + witness/oracle co-change when execution exists. |
| **Success** | No silent golden-only PRs for CF or wire fixtures. |

#### F4. Coverage-claim hygiene for weak kinds (TG-014)

| Field | Detail |
|---|---|
| **Deliverable** | `go-family-exec` and deploy-only integration are not substitutes for fixture-byte execution. |
| **Success** | No new weak kind without written why-not-fixture-exec. |

**Phase F exit criteria**

- [ ] Must-move-golden CI gate on (fail mode; start as warn for one PR if needed, then fail).  
- [ ] Checklist published.  
- [ ] Weak-kind policy written down.

---

### Phase G — Residual unexecuted goldens (TG-005, C24)

**Goal:** Honest close plan per remaining fixture; execute where cheap.

Current residual set (6 as of 2026-08-06; post-quantum-wallet and sphincs-wallet closed to real Go integration spends with verified fixture byte-identity):

| Fixture | `coveredBy` | Preferred close |
|---|---|---|
| `ec-unit` | codegen-golden | KAT / real-crypto / confirm primitives vs composed |
| `p256-primitives` / `p256-wallet` | codegen-golden | integration **spend** or real-crypto |
| `p384-primitives` / `p384-wallet` | codegen-golden | same |
| `post-quantum-wallet` / `sphincs-wallet` | codegen-golden | KAT or integration spend |
| `babybear-ext4` | go-only-nocodegen | Go exec or integration spend |

#### G1–G3

As before: machine-visible residual count; close cheapest first; never
relabel without byte-matched spend proof.

**Phase G exit criteria**

- [ ] Each residual has a close plan.  
- [ ] Residual count does not grow silently.

---

### Phase H — Culture, docs, and example alignment (TG-010 remainder)

#### H1. Testing guide rewrite

Sections:

1. Layers of assurance (horizontal vs vertical vs Spend).  
2. MockProvider validates by default; allowlist policy.  
3. Construct ledger: how to add a row and evidence.  
4. When `TestContract` is enough vs when Spend is mandatory.  
5. Wire primitives: never round-trip alone; must-move-golden.  
6. How to add vertical pins (state / `constructorSlots` / codeSeparator) and real-crypto witnesses.  
7. Horizontal fuzz vs Spend-oracle fuzz.

#### H2. Example migration wave

| Priority | Example | Action |
|---|---|---|
| High | `message-board` | Spendability test or banner + witness |
| High | `branch-merged-locals` | Not interpreter-only only |
| Medium | auction, token-*, stateful counter | Banner or validating call |
| Low | pure arithmetic | Interpreter OK if plain-differential witnessed |

#### H3. Record reviewer ranking in CHANGELOG / internal note

Point at §0.1 so future reviewers load the six requirements.

**Phase H exit criteria**

- [ ] Testing guide updated with all six reviewer points.  
- [ ] Top stateful examples classified.

---

## 4. Implementation order and milestones

| Milestone | Phases | Approx. scope | Primary risk closed |
|---|---|---|---|
| **M1** | A1–A2 (flip + allowlist start), B1–B3, D0 (ledger skeleton), F1–F2 (must-move-golden warn→fail + checklist) | Default validation + expectedState + empty construct cells visible + wire PR rule | Reviewer #1, #2 skeleton, #3 |
| **M2** | A3 (full suite green under default), A6, B4 | Mass-fix SDK tests under validation | Reviewer #1 complete for TS |
| **M3** | C0–C2, C5–C6 | Wire register + state vertical matrix + round-trip labelling | Reviewer #4, #5 (state) |
| **M4** | C3–C4 | `constructorSlots` splicing + codeSeparator vertical pins | Reviewer #5 (rest of family) |
| **M5** | D1–D3 (k2-both, k3, negative), E1 | Construct fills + mutants | Palmer-1 class + ledger fills |
| **M6** | D (nested/loop), E2–E3, A4–A5 | Spend-oracle fuzz + shape injection + other tiers | Reviewer #6 |
| **M7** | F3–F4, G, H | Provenance, residuals, docs/examples | Process + C24 + culture |

**Parallelism:** D0 and F1 should land in M1 even if A3 is incomplete (allowlist
may be temporarily large, then shrink in M2). C3/C4 can parallel C2 after C0.
E3 needs E2 shapes for efficiency but can stub with fixed seed corpus first.

---

## 5. CI map (target)

| Gate | When | Command / job (indicative) |
|---|---|---|
| MockProvider default validation + allowlist | every PR | SDK vitest + allowlist audit |
| Stateful `expectedState` claims | every PR | `witnesses/coverage-claims.test.ts` |
| Real-crypto + state pins | every PR | `witnesses/real-crypto-execution.test.ts` |
| Construct ledger | every PR | `construct-ledger.test.ts` |
| **Must-move-golden** | every PR | encoding/wire path audit script |
| State / `constructorSlots` / codeSeparator vertical pins | every PR | sdk-vertical + sdk-output |
| CF negative compile (7 tiers) | every PR | compiler unit tests |
| Mutation score + new mutants | nightly | existing mutation job |
| Horizontal fuzz (`--execute` / anf-diff) | PR + nightly | existing (documented parity-only) |
| **Spend-oracle fuzz** | PR fixed seed + nightly longer | new job |
| Residual unexecuted count | every PR | coverage-claims / completeness |

Do **not** add a CI job that only regenerates goldens.

---

## 6. File touch map (expected)

| Area | Paths |
|---|---|
| Default validation | `packages/runar-sdk/src/providers/mock.ts`, SDK `__tests__/*`, `always-ack-allowlist.json` |
| expectedState gate | `conformance/witnesses/coverage-claims.test.ts`, `real-crypto/*.json` |
| Construct ledger | `conformance/construct-ledger.json`, `construct-ledger.test.ts` |
| Vertical pins | `conformance/sdk-vertical/**` (state, constructor-slots, codesep), sdk-output extensions |
| Wire register | ledger or `conformance/wire-primitives.json` |
| Must-move-golden | `conformance/scripts/wire-format-pr-audit.ts` (or similar) |
| CF corpus | `examples/ts/…`, `conformance/tests/…`, `witnesses/real-crypto/…` |
| Negative compile | `packages/runar-compiler/src/__tests__/`, `compilers/*/…` |
| Mutation | `conformance/mutation/mutants.json`, `baseline.json` |
| Spend-oracle fuzz | `conformance/fuzzer/spend-oracle.ts` (or flag on index) |
| Docs | `docs/testing-guide.md`, `packages/runar-testing/README.md`, this plan |

---

## 7. Test strategy for the remediation itself

Follow project rules: non-trivial work in `.worktrees/`, TDD where the task
produces a commit/PR.

For each milestone:

1. **Write the failing gate first** (default validation rejects invalid tx;
   empty construct cell; must-move-golden; vertical golden mismatch; mutant
   expectCaughtBy; Spend-oracle seed).  
2. **Implement** the minimal change.  
3. **Prove detection** in a throwaway worktree: (a) single-local-only ANF merge,
   (b) OP_N state serialize, (c) serializer change with zero golden diffs —
   every gate that claims to catch them does.  
4. **No golden regeneration** without provenance + witness/oracle co-change
   when execution exists.

---

## 8. Risks and trade-offs

| Risk | Mitigation |
|---|---|
| Flipping MockProvider default breaks ~600 tests at once | M1: flip + allowlist temporary large set; M2: burn down allowlist. Track count in CI. Highest leverage per reviewer #1 — accept the pain. |
| False rejections under validation | Align validation projection with `runStatefulSpend` / C8; fix harness bugs rather than re-disable default. |
| Must-move-golden noisy on pure refactors | Start with clear path globs; optional no-byte-change stamp later; prefer real golden touch. |
| Construct ledger becomes bureaucracy | Keep rows fund-critical and finite; empty = UNCOVERED with issue, not essay. |
| Spend-oracle fuzz slow / flaky | Fixed seed on PR; longer nightly; promote reductions to fuzz-regressions. |
| Vertical constructorSlots / codeSeparator matrix explosion | Small value-class grids + shared goldens; one driver per tier. |
| Plan bit-rot | Update §9 as milestones merge. |

---

## 9. Status tracker (update as work lands)

All milestones landed on branch `fix/testing-gap-remediation` (2026-08-06).

| Milestone | Status | PR / commit | Notes |
|---|---|---|---|
| M1 | **landed** | `fix/testing-gap-remediation` | `MockProvider` validates by default; ratcheted always-ack allowlist; `expectedState` gate; construct ledger; must-move-golden gate |
| M2 | **landed** | same | Full SDK suite green under default validation; allowlist 29 → 9 |
| M3 | **landed** | same | Wire-primitive register (7 rows, 40 absolute pins); state value-class matrix incl. bool + raw-fixed |
| M4 | **landed** | same | `conformance/sdk-vertical/` — 39 cases × 7 tiers, constructorSlots + codeSeparator |
| M5 | **landed** | same | Construct fills, 7-tier negative compile, 22/22 mutants |
| M6 | **landed** | same | Spend-oracle fuzz job + shape injection; all 6 non-TS tiers fail closed |
| M7 | **landed** | same | Residuals 8 → 6 with dated close plans; testing guide; example policy lint |

| Finding | Status |
|---|---|
| TG-001 | **closed** — default flipped; allowlist ratcheted at 9, fund-path rule machine-checked; 7 vacuously-passing tests found and fixed |
| TG-002 | **closed** — `expectedState` required on every stateful real-crypto accept, enforced statically and at run time |
| TG-003 | **closed** — `conformance/construct-ledger.json`, 19 required constructs |
| TG-004 | **closed** — `conformance/wire-primitives.json`; round-trip-only evidence rejected by gate |
| TG-005 | **partial** — 8 → 6 residuals; the remaining 6 are honestly `UNCOVERED` with dated close plans. `ec-unit` / `p256-primitives` / `p384-primitives` are blocked on **confirmed open EC codegen bugs**, not on harness limits |
| TG-006 | **closed** — `conformance/fuzzer/spend-oracle.ts`, PR seed + nightly; horizontal fuzz documented as parity-only |
| TG-007 | **closed** — 22/22 mutants, incl. 4 Palmer-class; one measured partial-gate-miss recorded, not hidden |
| TG-008 | **closed** — differential docstring corrected (it compares **verdicts only**; its interpreter reads the **AST**, so ANF lowering is *not* shared) |
| TG-009 | **closed** — Go/Rust/Python validate by default; Zig/Ruby/Java fail closed on structure + non-vacuity + value, and say plainly they do not run script |
| TG-010 | **closed** — testing guide rewritten; example spendability lint in fail mode |
| TG-011 | **closed** — must-move-golden gate; 4 P0 bypasses found by an adversarial pass and fixed; runs on `push`, `pull_request` and `merge_group` |
| TG-012 | **closed** — vertical family complete (state, constructorSlots, codeSeparator) |
| TG-013 | **closed** — negative compile in all 7 tiers, non-vacuity verified per tier |
| TG-014 | **closed** — weak-kind policy written; `integration/README.md` "Deploy + Spend" overclaim corrected to Go-only |
| TG-015 | **closed** — ledger gated in CI with kind↔path shape validation, denylist liveness, and a required-set floor |
| TG-016 | **closed** — `conformance/sdk-vertical/`, independent reference implementation, 39 cases × 7 tiers |

### 9.1 Defects the new machinery found (2026-08-05/06)

The plan was written to *prevent* the next Palmer-class bug. Executing it surfaced
several that were already live. All were found by gates this plan added — none by
the pre-existing suite.

| # | Defect | Status |
|---|---|---|
| 1 | **Branch-output terminal value** (INV-A/INV-B). An arm's last binding *becomes* the branch's serialized output in the continuation hash; `drainBranchPrivateResidue` then drops the real output bytes. Needs **zero** merged locals — a trailing property write suffices. | **fixed**, 7 tiers, byte-neutral (69/69) |
| 2 | **Loop-carried local reassigned then read** in the same iteration. `OP_ADD` consumes the update; the next iteration re-reads the dead pre-loop binding. Source `step·N(N+1)/2`, script `step·N`. | **fixed**, 7 tiers, byte-neutral |
| 3 | **Ruby `encode_script_int(-1)`** emitted `0181` instead of `4f` (OP_1NEGATE) — one byte longer, shifting codesep offsets; funds locked. Its own spec **asserted the bug as correct**. | **fixed** |
| 4 | **~40 fund-path SDK tests** (Go/Rust/Python) funded from a P2PKH coin locked to 20 zero bytes — the deploys and calls were unspendable and always-ack reported success. Plus tests broadcasting literal `'deadbeef'`/`'rawhexdata'` and asserting success. | **fixed** |
| 5 | **EC codegen: 4 of 5 defects open.** Only secp256k1 `ecAdd` doubling was ever fixed. `ecMul/ecMulGen(k=2)` → all-zero point; `p256Add/p384Add` doubling → wrong point (**untracked entirely** until now); `p256Mul/p384Mul(k=2)` → all-zero. | **open** — `fix/ec-complete-formulas` |
| 6 | **Nested loops** miscompile silently (`wacc` 24 vs 30), all 7 tiers. | **open** |
| 7 | **bigint state magnitude ≥ 2⁶³** overflows the field: deploys fine, never spendable, no diagnostic. | **open** — guard needed |
| 8 | **Upstream `bsv-sdk` 0.1.72**: `hashPrevouts` built current-input-first, so only `input_index == 0` gets a correct BIP-143 preimage. | **open** — pinned, needs upstream report |

Defects 1, 2 and the original PALMER-1 are the **same family**: one stack carrier
asked to hold N live values. The durable fix is a multi-result `if`/loop IR node;
the landed guards are the safe interim.

Palmer fixes themselves: **landed** (`23ef2d2b`). This plan was about
**preventing the next ones** — and in executing it, three more of the same family
were found and two were fixed.

---

## 10. Definition of done (whole plan)

The plan is complete when:

1. All six reviewer requirements in §0.1 are implemented and CI-gated.  
2. Phase A–F exit criteria are checked.  
3. Phase G residuals are executed or honestly labelled.  
4. Phase H docs and top examples are aligned.  
5. Regression drill (worktree): (a) single-local-only ANF merge, (b) OP_N state
   serialize, (c) wire serializer change with zero golden diffs — all fail the
   appropriate new gates.  
6. §9 shows milestones merged and findings closed or deferred with issue.

---

## 11. Appendix — mapping analysis + reviewer points → plan IDs

| Theme | Plan IDs |
|---|---|
| Reviewer #1 flip default validation | TG-001, Phase A |
| Reviewer #2 construct ledger | TG-003, TG-015, Phase D0 |
| Reviewer #3 must-move-golden | TG-011, Phase F1 |
| Reviewer #4 round-trip mislabelled | TG-004, P3, Phase C0/C6 |
| Reviewer #5 vertical compiler↔SDK family | TG-012, TG-016, Phase C2–C4 |
| Reviewer #6 Spend-oracle fuzz | TG-006, Phase E3 |
| Interpreter-primary examples | TG-010, Phase A6, H |
| Accept/reject without state | TG-002, TG-008, Phase B |
| Parity ≠ correctness / C24 | TG-005, TG-014, Phase G |
| Non-TS ScriptVM absence | TG-009, Phase A5, C vertical pins |

---

## 12. Appendix — first concrete PR slice (M1)

Highest leverage first PR (reviewer #1 + #2 skeleton + #3 + quiet state):

1. **Test (failing):** default `MockProvider` rejects C8 script-invalid tx
   (invert c8 expectations).  
2. **Code:** flip default to `validateBroadcasts = true`; add
   `disableBroadcastValidation` / always-ack constructor.  
3. **Allowlist file** + audit test; temporarily allowlist broken tests **or**
   fix the easy ones in the same PR if small. Prefer a follow-up M2 for mass
   fix if the allowlist would be huge — but default must already be ON so new
   tests are safe.  
4. **Test (failing):** coverage-claims requires `expectedState` on stateful
   accepts; fix fixtures.  
5. **Construct ledger skeleton** with Palmer + OP_N-state rows pointing at
   existing evidence; one intentional empty `UNCOVERED` example optional.  
6. **Must-move-golden script** (warn or fail) on wire paths.  
7. **Docs:** §0.1 summary in testing-guide; differential docstring caveat.  

That PR makes the **default** path the one that found both bugs, makes empty
construct cells visible, and blocks silent wire-format PRs — without waiting
for the full vertical family or Spend-oracle fuzz.
