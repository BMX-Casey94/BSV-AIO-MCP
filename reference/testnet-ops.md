# Testnet / Teratestnet operations (research, 14 Aug 2026)

Standing reference for the MCP. Sources: go-wallet-toolbox README + `pkg/defs/network_endpoints.go`,
arcade `docs/getting-started.md`, wallet-toolbox `Setup.createWalletSQLite`, ttn-faucet README,
live probes of WoC-TTN and Arcade TTN.

## 1. Can we generate and switch testnet wallets easily?

**Yes — at construction time, not as a hot-swap on a live wallet.**

Both toolboxes take a network identifier when the wallet (and its storage) is created.
`ttn` / `test` share testnet address and WIF encoding, but **UTXOs, proofs and storage files
are network-specific**. Switching means: new (or separate) storage file + the matching
network flag. Do not reuse a mainnet SQLite against `ttn`.

### TypeScript (`@bsv/wallet-toolbox`)

```ts
import { PrivateKey } from '@bsv/sdk'
import { Setup } from '@bsv/wallet-toolbox'

const rootKeyHex = PrivateKey.fromRandom().toString()
const { wallet } = await Setup.createWalletSQLite({
  filePath: './myTtnWallet.sqlite',
  databaseName: 'myTtnWallet',
  chain: 'ttn',          // 'main' | 'test' | 'ttn'  (older docs still say 'teratest')
  rootKeyHex
})
```

Fund via `POST /api/claim/wallet` (BRC-100) then `wallet.internalizeAction(...)`,
or via `POST /api/claim` to a derived address then internalize the returned EF/BEEF.

### Go (`go-wallet-toolbox`)

Set **one** of:

| Mechanism | Values |
|---|---|
| `bsv_network` in `infra-config.yaml` / `examples-config.yaml` | `main` · `test` · `ttn` · `tstn` |
| env `BSV_NETWORK` (or `_BSV_NETWORK`) | same |

Then `go run ./cmd/infra` (storage server on `:8100`) or the examples under
`examples/wallet_examples/`. Address generation for faucet funding:

```go
address, err := brc29.Address(wallet.PrivateKey, keyID, wallet.IdentityKey, brc29.WithTestNet())
```

`ttn` and `tstn` are testnet-based (same address/key encoding as `test`).

### Arcade (broadcaster)

`network:` in `config.yaml`, or `ARCADE_NETWORK=…`:

| Arcade config | Toolbox equivalent |
|---|---|
| `mainnet` | `main` |
| `testnet` | `test` |
| `teratestnet` | `ttn` |
| `regtest` | (local only) |

The MCP **must normalise these aliases**. Preferred canonical id for Teratestnet: **`ttn`**.

### MCP `network_guard` behaviour (confirmed feasible)

1. Detect testing intent ("test", "testing", "dry run", "try out").
2. Ask to switch to `ttn` if the current context is `main`.
3. Remind to switch back to `main` when the test session ends.
4. Every TX-building response states its network.
5. Refuse to point a mainnet storage file at `ttn` endpoints (and vice versa).

## 2. Per-network service map (defaults)

| Network | Broadcast | Headers / proofs | Explorer |
|---|---|---|---|
| `main` | Arcade `https://arcade-v2-us-1.bsvblockchain.tech` + ARC (TAAL) + GorillaPool failover | WhatsOnChain (Arcade ChainTracks available) | api.whatsonchain.com |
| `test` | ARC `https://arc-test.taal.com` (Arcade **off** by default) | WhatsOnChain | api.whatsonchain.com/test |
| `ttn` | **Arcade** `https://arcade-v2-ttn-us-1.bsvblockchain.tech` | Arcade `/chaintracks` + WoC-TTN | `https://woc-ttn.bsvblockchain.tech` / `https://api.woc-ttn.bsvblockchain.tech/v1/bsv/test` |
| `tstn` | Arcade `$TSTN_ARCADE_URL` (required) | `$TSTN_CHAINTRACKS_URL` or `${ARCADE}/chaintracks` | none |

Policy for applications: **prefer Arcade on `main` and `ttn`**. Do not recommend SVNode/Arc
as the primary broadcaster. Public `test` still defaults to TAAL ARC because Arcade is
disabled there in toolbox defaults.

### Arcade HTTP (Arc-compatible)

- `POST /tx` — body = raw hex tx; headers `X-CallbackUrl`, `X-CallbackToken`, `X-FullStatusUpdates`
- `GET /tx/{txid}` — status + optional `merklePath` / `blockHeight`
- `GET /health`
- SSE `/events?callbackToken=…`
- Go client: `github.com/bsv-blockchain/arcade/client`

Status flow: `RECEIVED` → `SENT_TO_NETWORK` → `ACCEPTED_BY_NETWORK` → `SEEN_ON_NETWORK` → `MINED`.
Without Merkle Service configured, a **self-hosted** Arcade stays at `RECEIVED`. The public
hosted Arcade instances already have Merkle Service wired.

Merkle Service (if self-hosting Arcade):

| Network | URL |
|---|---|
| mainnet | `https://merkle-service-us-1.bsvb.tech` |
| testnet | `https://merkle-service-testnet-us-1.bsvb.tech` |
| teratestnet | `https://merkle-service-ttn-us-1.bsvb.tech` |

Live probe 14 Aug 2026: `arcade-v2-ttn-us-1.bsvblockchain.tech/health` returned **503**.
Treat hosted Arcade as preferred-but-degraded-aware; surface the 503 rather than inventing
a fallback to SVNode.

## 3. Faucet (Teratestnet funding)

Canonical app: [bsv-blockchain-demos/ttn-faucet](https://github.com/bsv-blockchain-demos/ttn-faucet)
Live: `https://faucet-ttn.bsvblockchain.tech/` (= `https://faucet.teratestnet.org/`)
Broadcasts through Arcade; built on `@bsv/wallet-toolbox`.

| Method | Path | Body | Returns |
|---|---|---|---|
| POST | `/api/claim` | `{ "address": "n…", "amount"?: sats, "captchaToken"?: "…" }` | `{ txid, ef, outputs, network: "teratestnet" }` |
| POST | `/api/claim/wallet` | `{ "identityKey": "02…", "amount"?: sats, "captchaToken"?: "…" }` | Atomic BEEF + BRC-29 remittance for `internalizeAction` |
| GET | `/api/status/:txid` | — | `{ txid, status, blockHeight }` (proxies Arcade) |
| GET | `/api/health` | — | `{ ok, network, arcadeReachable, chaintracksReachable }` |

Optional `Authorization: Bearer <key>` skips captcha and raises limits.
Optional `Idempotency-Key` replays a prior result (do not reuse a key after a failed claim).

Errors: 400 / 401 / 403 captcha / 429 (+ `Retry-After`) / 503.

**Preferred MCP path for agents:** `POST /api/claim/wallet` when a BRC-100 wallet is in
session (no address typing, spendable immediately via Atomic BEEF). Fall back to
`POST /api/claim` when only an address is available.

Do **not** use the older public-testnet faucets (scrypt.io, witnessonchain) for `ttn` —
those fund classic testnet, not Teratestnet.

## 4. WoC Teratestnet explorer / API

- UI: `https://woc-ttn.bsvblockchain.tech/`
- API base: `https://api.woc-ttn.bsvblockchain.tech/v1/bsv/test`
  (reuses the `test` path segment; the chain field is `"teratestnet"`)

Confirmed live 14 Aug 2026:

```
GET /v1/bsv/test/chain/info
→ { "chain": "teratestnet", "blocks": 29592, "headers": 29592, ... }
```

Same shape as mainnet WoC. Rate-limit: assume 429s; cache; back off. Prefer Arcade
`GET /tx/{txid}` for txs the MCP itself broadcast; use WoC-TTN for arbitrary lookups
and explorer links.

Useful lookups (same paths as WoC mainnet, under the `test` segment):

- `/v1/bsv/test/tx/{txid}`
- `/v1/bsv/test/tx/{txid}/hex`
- `/v1/bsv/test/address/{addr}/balance`
- `/v1/bsv/test/address/{addr}/history`
- `/v1/bsv/test/block/hash/{hash}`
- `/v1/bsv/test/chain/info`

## 5. Recommended agent runbook (ttn)

1. Confirm or offer switch: `chain = ttn` (separate storage file).
2. Create wallet (`Setup.createWalletSQLite` or go-wallet-toolbox + `BSV_NETWORK=ttn`).
3. Fund: `POST https://faucet-ttn.bsvblockchain.tech/api/claim/wallet` (or `/api/claim`).
4. Internalize BEEF / EF into the wallet.
5. Broadcast application txs via Arcade `https://arcade-v2-ttn-us-1.bsvblockchain.tech/tx`.
6. Confirm via Arcade `GET /tx/{txid}` first; WoC-TTN as the human explorer link.
7. Remind: switch storage + `BSV_NETWORK` back to `main` before any production work.

## 6. go-wallet-toolbox notes (ingestion / Merkle / BEEF)

- Throughput stack documented in `docs/throughput-docker.md` and `docs/throughput-dashboard.md`
  (the 1,000 TPS / 90 s demo).
- `Get BEEF` / `Get Merkle Path For Tx` / `Is Valid Root For Block Height` examples cover
  building BEEFs from blockheight via merkle paths.
- Proof preference when Arcade is enabled: SSE `/events` first, then poll
  Arcade → ARC → WhatsOnChain → Bitails.
- Discussion exists to fold this repo into `go-stack` (roadmap #70); treat the
  import path as stable until that lands.
