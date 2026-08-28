# Investigation loop

Default path for non-trivial questions. A single semantic pass is not enough.

```
classify → retrieve(hot) → inspect → follow_edge (≤4 hops) → verify → EvidencePackage
```

Stop when any of: no new authority ≤ 2 hits; hop budget exhausted; user budget
exhausted. Return a **partial** package with `gaps` rather than looping.

Cache key: `sha256(question + index.sha + index.brc_revision + policy_version)`.
See `winner-policy.md`.

## Classify

| Class | Hot sources first | Then |
|---|---|---|
| spec | `brc_index`, BRC markdown | training guide |
| implementation | symbols, examples, tests, capability graph | BRC that specifies them |
| design-why | education principles + essays | contradictions overlay |
| live-ops | `ops://testnet` | declare `needs` (do not fetch inside investigate) |
| actuate | `network_guard` only — investigate stops here | host may call actuate |
| mixed | all of the above, ranked | — |

## Retrieve

- **Prose (essays, education, wiki):** FTS5 + local embeddings.
- **Code / symbols (Phase B):** FTS + structural tools. Embeddings are a later
  ranker, not the index of record.
- Always attach education hits for *when/why* even on implementation questions —
  they compose, they do not outrank BRC/code for *how*.
- Conceptual queries (“pay a merchant”) start at the **generated** capability
  graph, then hop to BRC / package. Empty `api` arrays are allowed.

## Inspect

Open the actual BRC section, symbol, or vector. Do not stop at the chunk title.

## Follow edges

`implements` · `specified_by` · `tested_by` · `explained_by` · `superseded_by`

Example: BEEF → BRC-62 → `@bsv/sdk` `Beef` → go-sdk equivalent → conformance
vector → Craig SPV essays → Arcade `GET /tx` merklePath.

## Verify

Apply `winner-policy.md` in full.

- Spec vs code vs conformance vector
- TS vs Go if both exist
- Rename table (`teratest`→`ttn`, `bitcoin-sv/*`→successor)
- Deny list (`repo://deny`) — never recommend `bsv` v1 / `js-1sat-ord` / LARS
- Ordinality (`ops://ordinality`) on 1Sat / BRC-150 questions
- Live network claims → `needs`, not an in-process HTTP call

## Compose

`answer_sketch` leads with how (authority ≤ 2), then when/why (writings). Every
claim has `status` and supporting hit ids. Embed `index` on the package.
