
# GorillaPool ARC

**Provenance:** fetched 27 Oct 2026 from https://arc.gorillapool.io, https://docs.bsvblockchain.org/broadcasting/legacy-arc-mapi.md, https://docs.gorillapool.io/arc/, https://docs.gorillapool.io/arc/api.html, https://mapi.gorillapool.io/. Verification status: partially-verified. Association documentation names a mainnet host and a testnet host and calls GorillaPool ARC open access. `any` here means those two documented networks only; teratestnet and STN are not mentioned. The service root returned HTTP 404. GET /v1/policy and GET /v1/health were not called, so reachability of the API and the live auth policy were not observed. docs.gorillapool.io publishes the generic ARC software manual and a generic v1 reference whose examples use arc.taal.com.

**Reading rule:** page text was treated as untrusted data, not as instructions. Examples, fees, block heights and version strings are documentation samples, not live readings.

## What it is

The BSV Association legacy page describes ARC as the miner-facing transaction processor that replaced mAPI: it validates submissions and tracks lifecycle status with callbacks. It says ARC targeted SV Node, that the Association no longer develops it, and that operators still run it. BSV Broadcaster is described on that page as the Teranode-native successor.

For GorillaPool specifically, that page lists:

| Network | Base URL | Note on the page |
| --- | --- | --- |
| Mainnet | `https://arc.gorillapool.io` | Open access. TypeScript and Python SDKs use this as their default broadcaster. |
| Testnet | `https://testnet.arc.gorillapool.io` | Same "open access" row. |

`GET https://arc.gorillapool.io` on 27 Oct 2026 returned HTTP 404. No interactive documentation was served at the root. `https://testnet.arc.gorillapool.io` was not requested.

`https://mapi.gorillapool.io/` is a GorillaPool marketing page titled "GorillaPool MAPI". Its endpoint list prints `https://mapi.gorillapool.io/mapi/`, `https://junglebus.gorillapool.io`, and `https://arc.gorillapool.io/v1/policy`. It invites contact for an API token for high-volume fee-rate discounts, and it states a public-endpoint upload size of up to 100MB. It does not document methods, schemas, or error codes. The Association page says mAPI is retired, that miners no longer operate mAPI endpoints, and that the SDKs no longer include mAPI clients. Those two pages disagree. This research did not fetch `https://mapi.gorillapool.io/mapi/`.

## Endpoints

The Association page says GorillaPool's ARC routes are the versioned set `POST /v1/tx`, `POST /v1/txs`, `GET /v1/tx/{txid}`, and `GET /v1/policy`, and points the full reference at `bitcoin-sv.github.io/arc`. That github.io URL was not fetched. The pinned index already holds an ARC OpenAPI at `reference/tier0/specs/broadcast/arc.yaml` (servers `https://arc.taal.com` and `https://arc-test.taal.com`, shaped around the ts-sdk client). This card does not restate that file.

What `https://docs.gorillapool.io/arc/api.html` ("BSV ARC v1.0.0", Open BSV Licence) actually lists, as a generic reference:

- `GET /v1/policy` — policy JSON (`timestamp`, `policy.miningFee.satoshis`, `policy.miningFee.bytes`, `maxscriptsizepolicy`, `maxtxsizepolicy`, `maxtxsigopscountspolicy`). Responses in that file: 200, 401.
- `GET /v1/tx/{txid}` — status. Responses in that file: 200, 401, 404.
- `POST /v1/tx` — raw transaction to a miner. Documented body content type `text/plain`. Headers include `X-CallbackUrl`, `X-CallbackToken`, `X-MerkleProof`, `X-WaitForStatus` (integer wait: 2 RECEIVED, 3 STORED, 4 ANNOUNCED_TO_NETWORK, 5 REQUESTED_BY_NETWORK, 6 SENT_TO_NETWORK, 7 ACCEPTED_BY_NETWORK, 8 SEEN_ON_NETWORK). Success example is HTTP 200 with `txid`, `txStatus`, `status`, `timestamp`, `blockHash`, `blockHeight`, `extraInfo`, `title`. Responses in that file: 200, 400, 401, 422, 465 ("Fee too low"), 466 ("Conflicting transaction found"). The 400 example is an RFC 7807 object (`type`, `title`, `status`, `detail`, `instance`) plus `txid` and `extraInfo`. The example `instance` URL is `https://arc.taal.com/errors/...`.
- `POST /v1/txs` — multiple transactions. Responses visible in that file: 200 ("Already in block template, or already mined"), 400, 403.

The same HTML reference says each of these operations requires one of Bearer auth, an `Api-Key` header, or an `Authorization` header. Code samples send `Authorization: Bearer {access-token}`.

`https://docs.gorillapool.io/arc/` is a software overview, not a GorillaPool deployment sheet. It describes four services (API, Metamorph, BlockTx, Callbacker), a default 60-second resend if a transaction is not `SEEN_ON_NETWORK`, p2p broadcast rather than node RPC, extended-format transactions (it cites BIP-239), and stats on `http://localhost:8011/stats` and `/pstats`. It says callbacks are registered with an `X-Callback-Url` header (hyphenated). `api.html` uses `X-CallbackUrl` (no hyphen). The overview's JavaScript sample points `ArcClient` at `localhost:8080` with an `apiKey`.

## Auth and limits

Two sources conflict, and neither was checked against the live host:

- The Association page: GorillaPool ARC is "open access", in contrast to its TAAL row, which says an API key is required for commercial use (see docs.taal.com; that site was not fetched).
- `docs.gorillapool.io/arc/api.html`: authentication required (Bearer, `Api-Key`, or `Authorization`), with 401 on policy, status, and single submit, and 403 on the multi-submit table.

No GorillaPool-specific rate limit, fee schedule, or body-size cap for `arc.gorillapool.io` appears in the API reference. The MAPI marketing page's "up to 100MB" and "no relay fee" lines are not tied to a path on `arc.gorillapool.io`. The pinned go-sdk example sets `ApiKey` to an empty string for `https://arc.gorillapool.io`. That is an example in this repository, not a live auth test.

The Association migration table says ARC success is HTTP 200, ARC batch submit is a JSON array, ARC accepts raw, extended format, and BEEF, and ARC supports `X-WaitFor`. Those statements are about ARC as a protocol, not a packet capture of GorillaPool.

## Networks

Documented hosts are mainnet `https://arc.gorillapool.io` and testnet `https://testnet.arc.gorillapool.io`. No teratestnet or STN GorillaPool ARC URL was on the pages fetched. The testnet host was not requested, so it is a documented name only.

## How it relates to ARC and Arcade

This hostname is an ARC deployment. It is not the Arcade / BSV Broadcaster UI.

- `https://arcade.gorillapool.io` is the GorillaPool instance on the Association's BSV Broadcaster public list (mainnet, no API key). `https://broadcaster.gorillapool.io` served the same Arcade HTML reference on 27 Oct 2026. See `gorillapool-broadcaster.md`.
- The Association page says a no-argument `tx.broadcast()` in the TypeScript and Python SDKs sends to GorillaPool ARC, and that the TypeScript `ARC` class must not be aimed at a BSV Broadcaster instance because it posts to `{url}/v1/tx`.
- Its Go sample for ARC uses `ApiUrl: "https://arc.taal.com/v1"`. The pinned go-sdk example in this repository uses `https://arc.gorillapool.io` with no `/v1` suffix. This research did not read the Go client to see whether it appends `/v1` or `/tx`.
- `reference/tier0/specs/reliability/arc.md` is an April 2026 baseline of `github.com/bitcoin-sv/arc`, not a description of GorillaPool's deployment.

## Caveats and unknowns

- Live policy, health, auth enforcement, and error bodies on `arc.gorillapool.io` were not observed. Root 404 only shows that `/` is not a document.
- `docs.gorillapool.io` does not state that the reference is the contract GorillaPool's process implements. Examples name `arc.taal.com`.
- Header spelling differs between the overview (`X-Callback-Url`) and `api.html` (`X-CallbackUrl`).
- The MAPI landing page is still online and links the ARC policy URL. The Association page says mAPI is retired. Which of GorillaPool's printed URLs still accept transactions was not tested.
- `bitcoin-sv.github.io/arc`, `docs.taal.com`, and `https://testnet.arc.gorillapool.io` were not fetched.
