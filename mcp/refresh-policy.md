# Refresh and snapshot policy

**Do not live-fetch the BRC repo (or any hot source) on every query.**

A pinned snapshot is the source of truth at answer time. New BRCs and repo
changes arrive through a refresh job. Every hit carries `revision` + `fetched_at`
+ `stale` so the model can say “this catalogue is SHA 3ae1f25, 14 Aug 2026.”

Live-fetching per question would: break offline use, make answers
non-reproducible, hit GitHub rate limits, and mix “what we audited” with
“whatever master is this second.”

## Cadence

| Class | Examples | Refresh | Query-time |
|---|---|---|---|
| Hot snapshot | education, essays, contradictions, `brc_index.json`, BRC markdown, ts-stack wiki, testnet-ops, Tier 0/1 symbol indexes | Weekly, or on git tag of that repo | Local only |
| Warm | remaining active `bsv-blockchain` repos, CHANGELOGs | Weekly | Local; mark `stale` if registry `pushed_at` > `fetched_at` |
| Cold | full file bodies, issues/PRs, archived `bitcoin-sv/*`, LARS/CARS | On demand, TTL cache | Fetch then cache |
| Live (future) | Arcade / WoC / faucet health and tx status | 30–60 s cache, back-off on 429/503 | Declared as `needs` in 1.1.0 |
| Actuate (future) | faucet claim, broadcast | n/a | Refused in 1.1.0 |

## Operator weekly refresh (manual)

The shipped MCP never fetches. People who install via `npx bsv-aio-mcp` see the
snapshot that was inside the last published npm package. Updating that snapshot
is an operator job — there is no GitHub Action and no in-process timer.

From a clone of this repo, on Windows PowerShell:

```powershell
$env:BSV_AIO_ALLOW_REFRESH = "1"
npm run refresh:tier0 --workspace=server   # SDKs, wallets, BRC bodies, vectors
npm run refresh:tier1 --workspace=server   # arcade, overlays, UHRP, messaging
npm run fetch:academy --workspace=server   # Academy opcode/Script + Rúnar
npm test
```

A successful Tier 0/1 refresh regenerates `reference/capability_graph.json` from
the new mentions and cards. Then:

1. Read the git diff. The 80% retention guards refuse a collapsed corpus, but
   they do not review whether a new mention edge is a mislabel (see the go-sdk
   BRC-43 suppression in `refreshTier0.ts`).
2. Commit the snapshot, bump the patch version (`1.1.0` → `1.1.1`), push, and
   `npm publish` so `npx` users pick up the new pin.
3. Essay / contradiction top-ups are separate (new Substack/Medium posts only).
   DeepWiki pages are a committed export, not part of these three jobs.

On a week when nothing moved, the jobs may rewrite the same bytes — do not
publish an empty bump.

## BRC catalogue specifically

- Indexed at `reference/brc_index.json` (SHA-pinned). Full markdown lives under
  `reference/brcs/` and is rewritten by `refresh:tier0` when the BRCs checkout
  is in the Tier 0 manifest. `refresh:tier0` also **regenerates `brc_index.json`
  from the snapshotted bodies** (titles from each repo's `SUMMARY.md`, falling
  back to the file's first heading), so the index can never drift ahead of or
  behind the bodies again.
- If a user asks “is there a new BRC since our snapshot?”, that is a **cold**
  GitHub compare (`revision` vs `master`), not the default path
- **Integrity:** refuse to write if the new count is below 80% of the previous
  count (when previous ≥ 50). That catches a poisoned or truncated registry
  (171 → 40). Once bodies are snapshotted, also fail on surprising per-page
  hash churn without a matching tree SHA change.
- **Tier 0 cards:** the same 80% guard applies to `reference/tier0/packages.json`
  (refuse if the new package count drops below 80% of the previous, when
  previous ≥ 2). Tier 0 refresh is an explicit offline job gated behind
  `BSV_AIO_ALLOW_REFRESH=1`; the query path never fetches. See
  `server/src/ingest/refreshTier0.ts` and the `refresh:tier0` npm script.
- **Academy / Rúnar docs:** `reference/academy/` is a committed snapshot of the BSV Academy opcode and Script trees plus the Rúnar API pages. Refresh is the gated `fetch:academy` job (`BSV_AIO_ALLOW_REFRESH=1`). The query path never calls GitBook `?ask=`.
- Never live-fetch `bsv.brc.dev ?ask=`. That is an untrusted nested LLM.

## Stale rule

If `kind` is `symbol|doc|brc` and the registry `pushed_at` is newer than
`fetched_at`, set `stale: true` and offer `recommended_next: refresh_source`.
Do not silently substitute live master.

DeepWiki MCP is fallback-only and must never be a hard dependency.
