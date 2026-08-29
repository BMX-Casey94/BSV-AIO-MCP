# Merkle Service API Reference

Base URL: `http://localhost:8080` (default; configurable via `API_PORT`)

## POST /watch

Register a transaction for merkle proof callbacks. When the merkle proof becomes available, the service delivers it to the specified callback URL.

### Request

| Field         | Type   | Required | Description                                      |
|---------------|--------|----------|--------------------------------------------------|
| `txid`        | string | Yes      | Transaction ID; 64-character hexadecimal string. |
| `callbackUrl` | string | Yes      | HTTP or HTTPS URL to receive the proof callback. |

### Responses

**200 OK** -- registration accepted:

```json
{
  "status": "ok",
  "message": "registration successful"
}
```

**400 Bad Request** -- validation failure (examples):

```json
{ "error": "txid is required" }
{ "error": "invalid txid format: must be a 64-character hex string" }
{ "error": "callbackUrl is required" }
{ "error": "invalid callbackUrl: must be a valid HTTP/HTTPS URL" }
{ "error": "invalid request body" }
```

**500 Internal Server Error** -- storage failure:

```json
{ "error": "internal server error" }
```

### curl examples

Register a transaction:

```bash
curl -X POST http://localhost:8080/watch \
  -H 'Content-Type: application/json' \
  -d '{
    "txid": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2",
    "callbackUrl": "https://example.com/callback"
  }'
```

Expected output:

```json
{"status":"ok","message":"registration successful"}
```

Invalid txid (too short):

```bash
curl -X POST http://localhost:8080/watch \
  -H 'Content-Type: application/json' \
  -d '{"txid": "abc123", "callbackUrl": "https://example.com/callback"}'
```

Expected output:

```json
{"error":"invalid txid format: must be a 64-character hex string"}
```

---

## POST /reprocess

Trigger on-demand reprocessing of a past block. The merkle service fetches the named block from a known DataHub, rebuilds STUMPs for transactions the requester has registered via `/watch`, and delivers them — along with a single `BLOCK_PROCESSED` callback — exclusively to the supplied callback URL. Other arcades' watched txids are not exposed.

The caller does **not** supply a DataHub URL. The service probes its operator-configured fallbacks (`datahub.fallbackUrls`) followed by every DataHub it has observed serving a live block (the discovered set), in order, and uses the first one that returns metadata for the requested hash.

### Request

| Field           | Type    | Required | Description                                                                |
|-----------------|---------|----------|----------------------------------------------------------------------------|
| `blockHash`     | string  | Yes      | Block hash; 64-character hexadecimal string.                               |
| `callbackUrl`   | string  | Yes      | HTTP(S) URL to receive the STUMP and BLOCK_PROCESSED callbacks.            |
| `callbackToken` | string  | No       | Optional bearer token sent as `Authorization: Bearer <token>` on delivery. |

### Responses

**202 Accepted** — block found on a DataHub; reprocess enqueued. Delivery is asynchronous through the same callback pipeline as live block processing.

```json
{
  "status": "queued",
  "blockHash": "deadbeef...",
  "dataHubUrl": "https://datahub.example/"
}
```

**400 Bad Request** — validation failure (bad hash, missing/invalid `callbackUrl`, oversized `callbackToken`, malformed body, SSRF-blocked callback URL).

**404 Not Found** — every probed DataHub returned 404 for this block hash.

```json
{ "error": "block not found on any known DataHub" }
```

**502 Bad Gateway** — every probed DataHub failed for transport / 5xx reasons. The block may exist; retry later.

**503 Service Unavailable** — the API server has no DataHubs (no operator-configured fallbacks and an empty discovered set), or the reprocess endpoint was started without its required dependencies.

### Scoping and ordering

- **STUMPs**: only built for txids the caller has previously registered against **this same `callbackUrl`** via `/watch`. The supplied `callbackToken` overrides whatever token was last stored for that URL — the request token is the source of truth for this delivery.
- **BLOCK_PROCESSED**: emitted exactly once per reprocess, addressed to the request's `callbackUrl`/`callbackToken`. The global broadcast registry is **not** consulted; other arcades never see this past block via the reprocess flow.
- **Counter scoping**: the per-block subtree counter is keyed by `(blockHash | callbackUrl)` so a `/reprocess` for a block already being processed live, or a second `/reprocess` for the same block by a different arcade, does not collide.
- **Idempotency**: a duplicate request for the same `(blockHash, callbackUrl)` re-runs the pipeline; receiver-side dedup at the callback delivery service collapses any duplicate STUMP / BLOCK_PROCESSED into a single delivery.

### curl example

```bash
curl -X POST http://localhost:8080/reprocess \
  -H 'Content-Type: application/json' \
  -d '{
    "blockHash": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    "callbackUrl": "https://arcade.example/merkle-callbacks",
    "callbackToken": "rotating-shared-secret"
  }'
```

Expected output (truncated):

```json
{"status":"queued","blockHash":"deadbeef...","dataHubUrl":"https://datahub.example/"}
```

---

## GET /health

Returns service health status including Aerospike connectivity.

### Responses

**200 OK** -- all dependencies healthy:

```json
{
  "status": "healthy",
  "details": {
    "aerospike": "connected"
  }
}
```

**503 Service Unavailable** -- one or more dependencies unhealthy:

```json
{
  "status": "unhealthy",
  "details": {
    "aerospike": "connection refused"
  }
}
```

### curl example

```bash
curl http://localhost:8080/health
```
