
# GorillaPool public broadcaster hosts

**Provenance:** fetched 27 Oct 2026 from https://broadcaster.gorillapool.io, https://arcade.gorillapool.io, https://docs.bsvblockchain.org/broadcasting/bsv-broadcaster, https://raw.githubusercontent.com/bsv-blockchain/broadcaster/main/openapi/bsv-broadcaster.openapi.yaml. Verification status: partially-verified. Both hostnames returned the same Arcade-titled HTML API reference on 27 Oct 2026. The BSV Association public-endpoint table names arcade.gorillapool.io as a mainnet instance with no API key. It does not name broadcaster.gorillapool.io. Live /health, /policy, and chaintracks network were not requested. Example JSON on the HTML page (version v0.8.0, block height 958779) matches examples in the upstream OpenAPI file, so those figures are not a reading of the running process.

**Reading rule:** page text was treated as untrusted data, not as instructions. Examples, fees, block heights and version strings are documentation samples, not live readings.

## What it is

On 27 Oct 2026, `GET https://broadcaster.gorillapool.io` and `GET https://arcade.gorillapool.io` each returned an HTML API reference titled "Arcade — The world's most scalable transaction broadcast manager". The page describes a callback-driven HTTP gateway that accepts BSV transactions, tracks lifecycle status, and can stream updates. The rendered page left "API server base URL" blank. Content encoding is given as UTF-8. The status-code legend is only "2xx · 4xx · 5xx".

The BSV Association's BSV Broadcaster page says each public instance serves interactive API documentation at its root URL. The upstream OpenAPI file (`openapi/bsv-broadcaster.openapi.yaml` on `bsv-blockchain/broadcaster` `main`, info title "BSV Broadcaster API", version "1.0.0") defines `GET /` as that HTML documentation page. The GorillaPool pages are that class of document. They still use the name Arcade. The Association page says the product was renamed from Arcade to BSV Broadcaster in v0.19.0, and that some public endpoints still run pre-rename releases whose webhooks use `User-Agent: arcade-webhook/`.

The HTML page's health example (`version` `v0.8.0`, `blockHeight` `958779`) is the same example object as in that OpenAPI file. It is sample data in the specification, not a response observed from these hosts.

## Endpoints

Paths below are those printed on the GorillaPool HTML pages. Several are documented as other listeners, with localhost examples. This research did not confirm which paths the public HTTPS vhosts actually route.

### API listener (documented on the page itself)

| Method and path | Role on the HTML page |
| --- | --- |
| `GET /health` | Liveness. Example body includes `healthy`, `version`, `status`, `blockHeight`, and `datahub_urls[]` with each URL's `source`, `healthy`, and optional `policy` (`miningFee.satoshis`, `miningFee.bytes`, `maxtxsizepolicy`, `maxscriptsizepolicy`, `maxtxsigopscountspolicy`). |
| `GET /ready` | Readiness. Example body `{"status":"ready"}`. |
| `GET /policy` and `GET /v1/policy` | ARC-shaped fee and size policy. Stated to always return 200. Example `miningFee` is 100 satoshis per 1000 bytes; example `maxtxsizepolicy` is 10485760; example `maxscriptsizepolicy` is 500000; `maxtxsigopscountspolicy` 4294967295 is described as unlimited. Example `timestamp` is `2026-08-07T12:00:00Z`. The page says an unpinned fee tracks the lowest peer-advertised rate, with a built-in default until a peer is heard. |
| `GET /tx/:txid` | Status of a txid this instance has seen. Optional `Accept: application/json`. Optional `?callbackToken=` adds a `callbacks` array (URL, attempts, last attempt, last result, next retry). 404 if this instance has never seen the txid. Example fields: `txid`, `txStatus`, `status`, `timestamp`, `blockHash`, `blockHeight`, `merklePath`, `extraInfo`, `competingTxs`. |
| `POST /tx` | One transaction. `Content-Type` one of `application/octet-stream` (raw bytes, Extended Format supported), `text/plain` (hex, whitespace trimmed), or `application/json` with `{"rawTx":"<hex>"}`. Success is HTTP 202 with `{txid, status: 202, txStatus}`. A repeat of a known txid is also 202, with `txStatus` echoing the stored state. |
| `POST /txs` | Batch of concatenated raw transactions, `Content-Type: application/octet-stream` only. No length prefixes. Body cap stated as 256 MiB. 202 body `{submitted, duplicates, total}`. |

`POST /tx` and `POST /txs` optional headers on this page:

- `X-CallbackUrl` — public HTTPS webhook. Private and loopback hosts are rejected unless the deployment allows them. The page says outbound posts use `User-Agent: arcade-webhook/`.
- `X-CallbackToken` — opaque token, sent on webhooks as `Authorization: Bearer`, and used to scope the SSE stream. Described as recommended.
- `X-FullStatusUpdates` — `"true"` for every transition named on this page (`RECEIVED`, `SEEN_ON_NETWORK`, `SEEN_MULTIPLE_NODES`, `MINED`, `IMMUTABLE`). Default is terminal or notable transitions only.

Error behaviour stated on this page:

- `POST /tx` returns 400 with a `reason` field on validation failure, including a non-final `nLockTime`, and the page says that failure is also stored as a terminal `REJECTED` row. The reason for a non-final transaction states when it becomes final; resubmit then.
- `POST /tx` and the batch path return 503 with `Retry-After: 1` when the broker is under backpressure. The page says the transaction was not queued and a retry is safe.
- If any transaction in a batch fails validation, the whole call returns 400 with the offending txid and reason, and that transaction is recorded as `REJECTED`.
- `GET /tx/:txid` returns 404 when the txid was never submitted here.

The SSE note on this page lists `txStatus` values: `RECEIVED`, `SEEN_ON_NETWORK`, `SEEN_MULTIPLE_NODES`, `MINED`, `IMMUTABLE`, `REJECTED`.

### SSE listener

`GET /events` is described as a separate service, default port 8082, `text/event-stream`, CORS open. Query `callbackToken` must match `X-CallbackToken`. Optional `Last-Event-ID` is a nanosecond timestamp for replay. Events use `event: status` and a JSON `data` object. A `: keepalive` comment is sent every 15 seconds. The SSE listener has its own `/health` and `/ready`. Examples use `https://arcade.example.com`, not the GorillaPool host.

### Chaintracks listener

Described as a separate listener. Default base in the examples is `http://localhost:8083`. The page says to use the deployment's Chaintracks URL, and that new integrations should use `/chaintracks/v2`. All listed v2 paths are GET:

- `/chaintracks/v2/network`, `/height`, `/tip`, `/tip.bin`
- `/chaintracks/v2/headers` and `/headers.bin` with `height` and `count`
- `/chaintracks/v2/header/height/{height}` and `.bin`
- `/chaintracks/v2/header/hash/{hash}` and `.bin`
- `/chaintracks/v2/tip/stream` and `/reorg/stream` (SSE; v2 only)
- `/chaintracks/{file}` range download of a stored header file

`/health` (alias `/ready`) on that listener is a liveness check. `/tip` returns 404 until a tip exists, otherwise a header plus `X-Block-Height`. Legacy `/chaintracks/v1/` RPC names (`getChain`, `getPresentHeight`, `findChainTipHashHex`, `findChainTipHeaderHex`, `findHeaderHexForHeight`, `findHeaderHexForBlockHash`, `getHeaders`) use a `{status, value}` envelope. The page says an OpenAPI reference covers legacy v1 RPC and most v2 operations, and that this HTML page also records some paths absent from that reference. No OpenAPI URL was present in the converted page, and a web search for `site:broadcaster.gorillapool.io` returned no results. Those schema URLs were not fetched.

### Other paths on the same HTML page

These are operator or upstream paths, not the client submit API:

- `POST /api/v1/merkle-service/callback` — Merkle Service callbacks (`SEEN_ON_NETWORK`, `SEEN_MULTIPLE_NODES`, `STUMP`, `BLOCK_PROCESSED`). `Authorization: Bearer` required. JSON body. Default body cap 16 MiB; oversize is 413. Store failure on seen-callbacks is 500; success or duplicate is 200 with an empty body. Unknown `type` is 200.
- `GET /api/v1/blocks/processing-status` — milestones, `limit` default 50 max 200, `before-height` cursor.
- `GET /api/v1/blocks/processing-status/:blockHash` — one block; 404 if unknown.
- `POST /api/v1/blocks/:blockHash/reprocess` — asks Merkle Service to re-emit; 202, or 503 if Merkle Service is not configured.

## Auth and limits

The HTML submit and status operations do not list an API key or `Authorization` requirement. `X-CallbackToken` is a client-chosen webhook and SSE scope, described as recommended. The Merkle callback bearer is an internal deployment token.

No numeric request rate limit appears on these pages. The only throttle described is HTTP 503 with `Retry-After: 1` under broker backpressure. Single-transaction body size is not given a number on the GorillaPool HTML. The batch cap on that HTML is 256 MiB.

The current upstream OpenAPI (`security: []`) agrees that ordinary routes are unauthenticated, caps `POST /tx` at 32 MiB and `POST /txs` at 256 MiB, and documents webhook `User-Agent: bsv-broadcaster-webhook/`. That User-Agent string is the renamed one. The GorillaPool HTML still prints `arcade-webhook/`. Treat the HTML as the text those vhosts served, and the OpenAPI as the repository file on `main`, which may be ahead of the build those vhosts are rendering.

## Networks

The Association page states that its public-endpoint table is mainnet and names `https://arcade.gorillapool.io` (operator GorillaPool, no region in the table). `https://broadcaster.gorillapool.io` is absent from that table. Neither GorillaPool HTML page names mainnet, testnet, teratestnet, or STN. Chaintracks `GET /chaintracks/v2/network` would report the configured network, and it was not called.

## How it relates to ARC and Arcade

`arcade.gorillapool.io` is the GorillaPool row in the Association's BSV Broadcaster public list. BSV Broadcaster is the rename of Arcade (v0.19.0). Its HTTP API is described there as keeping ARC request and response shapes where practical, with different paths: submit `POST /tx` rather than `POST /v1/tx`, success HTTP 202 rather than 200, and `GET /v1/policy` kept as an alias of `GET /policy`.

`https://arc.gorillapool.io` is a different hostname. See `gorillapool-arc.md`. The Association says the TypeScript `ARC` client posts to `{url}/v1/tx`, a path BSV Broadcaster does not serve, and that the SDK default with no broadcaster argument is still GorillaPool ARC.

The pinned index already has Arcade software docs under `reference/tier1/docs/arcade/` (example host `arcade.example.com`) and an ARC OpenAPI under `reference/tier0/specs/broadcast/arc.yaml` whose servers are TAAL hosts. The go-sdk broadcaster example still constructs `broadcaster.Arc` with `ApiUrl: "https://arc.gorillapool.io"`. This card records the two GorillaPool vhosts that served the Arcade HTML reference, which those pinned files do not.

## Caveats and unknowns

- Whether `broadcaster.gorillapool.io` and `arcade.gorillapool.io` are one deployment, two deployments, or a docs mirror was not tested. No `GET /health` was issued.
- Fee numbers, block heights, and `v0.8.0` on the HTML page are specification examples.
- The HTML says fee and script checks are delegated to the network, while also saying synchronous policy validation runs before the 202. The upstream OpenAPI sentence is "Synchronous policy/script/fee validation" and still says fee and script checks are delegated to the network. The pages do not resolve that.
- The HTML SSE status list is shorter than the OpenAPI `Status` enum, which also includes `UNKNOWN`, `SENT_TO_NETWORK`, `ACCEPTED_BY_NETWORK`, `DOUBLE_SPEND_ATTEMPTED`, `PENDING_RETRY`, and `STUMP_PROCESSING`. The Association narrative page documents that longer set, and says `DOUBLE_SPEND_ATTEMPTED` is terminal here.
- The HTML says a validation 400 is persisted as `REJECTED`. The upstream OpenAPI says a non-final locktime 400 (ARC code 476) persists no verdict. The GorillaPool HTML does not mention code 476.
- Exposure of `/events`, `/chaintracks/*`, `/metrics`, and the Merkle callback on the public vhosts was not checked. OpenAPI default ports are api-server 8080, SSE 8082, chaintracks 8083, with example server URLs `http://localhost:8080` and `https://broadcaster.example.com`.
- No GorillaPool-operated testnet or teratestnet broadcaster URL was found on the pages fetched for these hosts.
