# Winner policy and claim status

Frozen 2026-08-14. Every `investigate` package must apply these rules. The model
must not invent a winner.

## Claim status

Each claim is one of:

| Status | Meaning |
|---|---|
| `supports` | At least one hit of authority ≤ the class required for the question |
| `contradicts` | Two or more hits disagree; see the contradiction row |
| `insufficient` | We cannot verify. Prefer this to a guessed BRC number or package name |

`insufficient` is a first-class result. A partial package with `gaps` is correct.

## Who wins

1. **Highest authority wins** (0 beats 5). See `SCHEMA.md`.
2. **Ties** go to the newer `revision` / `fetched_at` **within the same authority class**.
3. **Live / web / infrastructure cannot override a spec** unless the spec page itself
   changed (new `revision` on the BRC snapshot).
4. **Implementation ≠ spec** is a `spec-code` contradiction, not a silent win for the
   code. That is how Arcade-is-not-byte-for-byte-ARC and cargo-cult
   `Transaction.fromBEEF().toHexEF()` chains are caught.
5. **Writings never outrank BRC or current code for *how*.** They still appear for
   *when / why* (authority 4).
6. **Legacy `bitcoin-sv/*` and ShopRAG/BitGenius text never win.** Label `successor`
   or drop. BitGenius answers are eval-only (`mcp/golden-eval.json` canary notes),
   never index rows.

When a contradiction has a resolvable winner, set `winner` to that hit id and
`reason` to the rule number above. If it does not, leave `winner` null and add a gap.

## `investigate` must not actuate

`investigate` is read-only. If a live fact is required, **declare** it:

```json
"needs": ["arcade_status", "faucet_health"]
```

Allowed need tokens: `arcade_status` · `faucet_health` · `woc_status` · `github_release`.

The host (or a later live-query tool) fulfils the need. `investigate` itself must
not call `faucet_claim`, `broadcast_tx`, or `create_test_wallet`.

## Cache key

```
sha256(question + "\n" + index.sha + "\n" + index.brc_revision + "\n" + policy_version)
```

`policy_version` is the date in this file's header (`2026-08-14`). Same key → same
package. Tests must be hermetic against this key.
