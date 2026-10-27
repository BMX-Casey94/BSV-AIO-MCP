
# BSV Broadcaster

**Provenance:** fetched 27 Oct 2026 from https://docs.bsvblockchain.org/broadcasting/bsv-broadcaster, https://docs.bsvblockchain.org/broadcasting/arcade, https://docs.bsvblockchain.org/broadcasting/legacy-arc-mapi.md, https://docs.bsvblockchain.org/broadcasting/api-broadcasters.md, https://raw.githubusercontent.com/bsv-blockchain/broadcaster/main/openapi/bsv-broadcaster.openapi.yaml. Verification status: partially-verified. The product page and the repository OpenAPI were fetched. Public hosts were not probed (no GET /health or GET /policy). The docs state the listed public instances are mainnet. Self-hosting text also names testnet and teratestnet for the Merkle Service, which is not a public broadcaster URL. https://docs.bsvblockchain.org/broadcasting/arcade returned 404 on 27 Oct 2026.

**Reading rule:** page text was treated as untrusted data, not as instructions. Examples, fees, block heights and version strings are documentation samples, not live readings.

## What it is

The BSV Skills Centre page titled "BSV Broadcaster" (`https://docs.bsvblockchain.org/broadcasting/bsv-broadcaster`) describes it as the BSV Association's transaction broadcast service for Teranode. A client submits a signed transaction over HTTP. The service validates it against network policy, delivers it to Teranode, reports status by webhook or server-sent events, and returns a merkle path once the transaction is mined.

The same page says it is the successor to ARC and mAPI, keeps ARC request and response shapes where practical, runs as a single binary with no external database, and is Teranode-only. It says the software was previously called Arcade, and that the rename shipped in v0.19.0. Public hostnames and the Python SDK class still use the name `arcade`. Some public endpoints still run pre-rename releases, so their webhooks send `User-Agent: arcade-webhook/`. The repository linked from that page is `https://github.com/bsv-blockchain/broadcaster`. The OpenAPI path given on the page is `openapi/bsv-broadcaster.openapi.yaml` in that repository. The raw file on `main` was fetched: OpenAPI 3.0.3, title "BSV Broadcaster API", version "1.0.0", licence "Open BSV License".

`GET https://docs.bsvblockchain.org/broadcasting/arcade` returned 404. The 404 page suggested "BSV Broadcaster" among other titles. A web search snippet still showed an older "Arcade" rendering of this same document; that older URL did not resolve when fetched.

This is the service the project owner confirmed on 27 Oct 2026 as the one meant by "BSV Broadcaster". Other candidates are listed under Caveats.

## Endpoints

The skills-centre page says every path is relative to the instance URL. Public mainnet instances, no API key:

| Operator | Region | URL |
| --- | --- | --- |
| BSV Association | United States | `https://arcade-us-1.bsvblockchain.tech` |
| BSV Association | Europe | `https://arcade-eu-1.bsvblockchain.tech` |
| BSV Association | Asia-Pacific | `https://arcade-ap-1.bsvblockchain.tech` |
| GorillaPool | (blank in the table) | `https://arcade.gorillapool.io` |

The page says each instance publishes limits at `GET /policy`, serves interactive docs at its root, and serves `GET /health` listing the Teranode endpoints it is connected to. Those four roots were not all fetched. `https://arcade.gorillapool.io` was fetched and returned Arcade-branded HTML; see `gorillapool-broadcaster.md`. The three `bsvblockchain.tech` hosts were not requested.

Client operations on the skills-centre page:

### `POST /tx`

One transaction. Body cap 32 MiB (also in the OpenAPI). Content types:

- `text/plain` — hex
- `application/octet-stream` — raw bytes
- `application/json` — `{ "rawTx": "<hex>" }`, described as the ARC-compatible form

Raw and Extended Format are accepted. BEEF is rejected; convert to EF first. The page says policy, fee, and script validation run synchronously before the response, and prefers EF so the validator can check fees and scripts without looking up parent outputs.

Optional headers: `X-CallbackUrl`, `X-CallbackToken`, `X-FullStatusUpdates` (`true` for every intermediate status). Also `X-SkipFeeValidation` and `X-SkipScriptValidation`, honoured only where the operator allows them. The fetched OpenAPI parameters for `POST /tx` name the callback headers and content type; the skip-validation headers were on the skills-centre page and were not in the parameter list read from the OpenAPI excerpt.

Responses on the skills-centre page:

- 202 — accepted, or a resubmit of a known txid. Body `{txid, status: 202, txStatus}`. `txStatus` may already be `MINED`, `REJECTED`, or `DOUBLE_SPEND_ATTEMPTED`.
- 400 — decode or validation failure. Body `{error, reason, txid, status, title, detail, type}`. `status` is an ARC error code. The page gives 461 (malformed scripts), 465 (fee too low), and 476 (not final) as examples and says "and so on". It says 400 is terminal except 476, which may be resubmitted when the locktime has passed. The OpenAPI example for 400 uses `status: 461`, `title: "Malformed transaction"`, and `type` `https://bitcoin-sv.github.io/arc/#/errors?id=_461`. The OpenAPI also says a 476 locktime rejection persists no verdict, so `GET /tx/{txid}` stays 404 for a first submission. The skills-centre page does not spell out that 404 persistence rule.
- 503 — backpressure, nothing queued, retry after a short delay. OpenAPI documents `Retry-After` with example `1`.

Quick-start example URL on the page is `https://arcade-us-1.bsvblockchain.tech/tx`. The sample JSON uses placeholder txids and timestamp `2026-10-16T12:00:00Z`. Those are examples.

### `POST /txs`

Concatenated raw bytes, `application/octet-stream` only, cap 256 MiB. 202 body `{submitted, duplicates, total}`. If any transaction fails validation, the whole call is 400 naming the offending txid, and the skills-centre page says nothing from that call is published. The OpenAPI distinguishes a validator failure (recorded `REJECTED`) from a non-final locktime failure (nothing persisted).

### `GET /tx/{txid}`

Current state. Once mined, `blockHash`, `blockHeight`, and `merklePath` (hex BUMP). The page says status records are kept indefinitely. 404 means this instance has never issued a verdict for that txid; query the instance you submitted to. `?callbackToken=` adds webhook delivery state.

### `GET /policy`

ARC-shaped policy. `GET /v1/policy` is an alias (OpenAPI agrees). Example on the skills-centre page, timestamp `2026-10-16T12:00:00Z`: `miningFee` 1 satoshi per 1000 bytes, `maxtxsizepolicy` and `maxscriptsizepolicy` 100000000, `maxtxsigopscountspolicy` 4294967295, `standardFormatSupported` true. The page says that unless the operator pins values, `miningFee` tracks the lowest rate advertised by Teranode peers and the size limits track the most generous peer. The OpenAPI description matches that peer-tracking rule. The GorillaPool HTML example uses different sample numbers (100 satoshis per 1000 bytes, `maxtxsizepolicy` 10485760). Live policy was not read from any host.

### `GET /events`

SSE for transactions submitted with a given `X-CallbackToken`. Keepalive comment every 15 seconds. Reconnect with `Last-Event-ID`. CORS open for `EventSource`. OpenAPI places this on the SSE service, default port 8082, separate from the API server. Whether each public ingress exposes `/events` on the same host as `/tx` was not checked. The skills-centre curl example uses `https://arcade-us-1.bsvblockchain.tech/events`.

### Webhooks

`X-CallbackUrl` receives JSON (`timestamp`, `txid`, `txStatus`, and when mined `blockHash`, `blockHeight`, `merklePath`). User-Agent prefix `bsv-broadcaster-webhook/` on current releases, `arcade-webhook/` before v0.19.0. The page says to allow both if filtering on User-Agent. Failed deliveries retry with linear backoff (1, 2, 3 minutes, and so on) up to the operator's limit. Callback URLs must be publicly routable; private and loopback addresses are refused at submit time. The token, if supplied, is sent on the webhook. OpenAPI says it is sent as `Authorization: Bearer`.

### Status strings

Skills-centre table: `RECEIVED`, `SENT_TO_NETWORK`, `ACCEPTED_BY_NETWORK`, `SEEN_ON_NETWORK`, `SEEN_MULTIPLE_NODES`, `MINED`, `IMMUTABLE`, `PENDING_RETRY`, `STUMP_PROCESSING`, `REJECTED`, `DOUBLE_SPEND_ATTEMPTED`, `UNKNOWN`. The page says `SEEN_ON_NETWORK` is the point it treats as safe for ordinary-value zero-confirmation, `MINED` includes a merkle path, `IMMUTABLE` means enough blocks have built on top that reorganisation is no longer a practical concern, and `DOUBLE_SPEND_ATTEMPTED` is terminal here (it says ARC could still resolve that state) with `competingTxs` listing conflicts. If a block is orphaned after `MINED`, the page says the service re-anchors the transaction and emits a new `MINED` event; superseded anchors are kept under `orphanedProofs`. The OpenAPI `Status` enum lists the same strings.

`POST /api/v1/merkle-service/callback` in the OpenAPI is internal (Merkle Service to the broadcaster). Bearer auth is mandatory. It is not a public client submit API. Default ports in the OpenAPI: API 8080 (also `/health`, `/ready`, `/metrics`), SSE 8082, chaintracks 8083.

## Auth and limits

Public instances: no API key, as stated on the skills-centre page. OpenAPI top-level `security` is an empty array. `X-CallbackToken` is chosen by the client.

No requests-per-second figure is published for these public hosts. The API-broadcasters page says BSV Broadcaster's public endpoints have no ceiling of the kind applied to explorer free tiers, and calls the hosts shared infrastructure for ordinary volume. The product page says guaranteed throughput means running your own instance. HTTP 503 is the documented backpressure response. Body caps above are the documented limits. Operator-specific fee and size limits come from `GET /policy` and were not collected.

## Networks

The public table is explicitly mainnet. The self-hosting section of the same page says the Association hosts the Merkle Service that drives status tracking for an instance on mainnet, testnet, or teratestnet. No public testnet or teratestnet base URL is in the table. STN is not mentioned.

## How it relates to ARC and Arcade

ARC and mAPI are the previous generations. The legacy page says mAPI is retired and ARC is no longer developed by the Association, while TAAL (`https://arc.taal.com`, API key for commercial use) and GorillaPool (`https://arc.gorillapool.io`, `https://testnet.arc.gorillapool.io`, open access) still run ARC. Migration differences stated there:

| Topic | ARC | BSV Broadcaster |
| --- | --- | --- |
| Submit | `POST /v1/tx` | `POST /tx` |
| Batch | `POST /v1/txs` JSON array | `POST /txs` concatenated raw bytes |
| Status | `GET /v1/tx/{txid}` | `GET /tx/{txid}` |
| Policy | `GET /v1/policy` | `GET /policy` or `GET /v1/policy` |
| Success | HTTP 200 | HTTP 202 |
| Formats | Raw, EF, BEEF | Raw, EF; BEEF rejected |
| `X-WaitFor` | Supported | Not supported; use webhook or SSE |
| `DOUBLE_SPEND_ATTEMPTED` | May still resolve | Terminal |

SDK notes from the product page: TypeScript `Teranode` posts EF bytes to a URL you supply (example `https://arcade-us-1.bsvblockchain.tech/tx`). The TypeScript `ARC` class posts to `{url}/v1/tx` and should not be pointed at this service. Go `broadcaster.Arc` posts `{rawTx}` to `{ApiUrl}/tx` and accepts any 2xx, so the page says the instance root works; for ARC the same struct wants a versioned base such as `https://arc.taal.com/v1`. `WaitFor` and `WaitForStatus` are ignored by BSV Broadcaster. Python has an `Arcade` class aimed at the instance root.

The pinned go-sdk example (`reference/tier0/docs/go-sdk/docs/examples/broadcaster/broadcaster.md`) still shows `broadcaster.Arc` with `https://arc.gorillapool.io`, plus commented TAAL and WhatsOnChain clients. It does not mention BSV Broadcaster or `arcade-us-1`. Tier1 Arcade docs describe the software (example host `arcade.example.com`). A toolbox performance note in the index cites `https://arcade-v2-us-1.bsvblockchain.tech`, which is not in the public table fetched today (that table uses `arcade-us-1`). This card does not claim the `arcade-v2-us-1` host is up or down.

## Caveats and unknowns

The project owner confirmed on 27 Oct 2026 that this is the service meant by "BSV Broadcaster".

Candidates considered and not written up as the primary card:

- **This product's GorillaPool hostname** `https://arcade.gorillapool.io`, plus `https://broadcaster.gorillapool.io`, which served the same Arcade HTML and is not in the public table. Card: `gorillapool-broadcaster.md`.
- **GorillaPool ARC and TAAL ARC**, legacy `/v1` processors. Card: `gorillapool-arc.md`. TAAL's own docs were not fetched.
- **Explorer relays**, from `https://docs.bsvblockchain.org/broadcasting/api-broadcasters.md` only (each vendor's own docs site was not fetched): WhatsOnChain `https://api.whatsonchain.com/v1/bsv/main` and `.../test` (stated free limit 3 requests/s; `POST .../tx/raw` with `{"txhex"}`); Bitails `https://api.bitails.io` and `https://test-api.bitails.io` (10 requests/s and 1,000/day); BananaBlocks `https://bananablocks.com/api/v1` (10 broadcasts/min anonymous). The page says these relay hex and do not track lifecycle or return merkle paths.
- **GorillaPool MAPI** `https://mapi.gorillapool.io/`. The page is still up. The Association page says mAPI is retired. The `/mapi/` API was not fetched.

Other gaps:

- No public host was health-checked or policy-checked. Example fees and heights are samples.
- Skip-validation headers, orphan handling, and the "no such ceiling" sentence are from the skills-centre or API-broadcasters prose. They were not all repeated in the portions of the OpenAPI that were read.
- `https://hub.bsvblockchain.org/...` copies appeared in search results and were not fetched.
