# Observability

This document describes how merkle-service exposes logs, metrics, and traces,
and how to search across them in Coralogix. It covers what actually ships on
this branch — no aspirational features.

## Pipeline overview

| Signal  | Transport                                    | Default          |
|---------|-----------------------------------------------|-------------------|
| Logs    | Structured JSON on stdout → cluster filelog   | Always on         |
| Metrics | Prometheus `/metrics` **and** OTLP push       | Prometheus on; OTLP off |
| Traces  | OTLP push (gRPC or HTTP)                      | Off               |

**Logs are never sent via OTLP.** merkle-service writes structured JSON to
stdout using `slog` (see `internal/service.NewLogger`); the cluster's
node-local log agent (filelog receiver) tails container stdout and forwards
to Coralogix. There is no OTLP log exporter in this codebase — adding one is
explicitly out of scope for this change (see `internal/config.TelemetryConfig`
doc comment). This keeps the log path unchanged and low-risk while adding
traces/metrics on a separate, opt-in pipeline.

**Metrics and traces are pushed via OTLP** to a collector, off by default,
gated by `telemetry.enabled` / `TELEMETRY_ENABLED`. When enabled, each pod
pushes directly to a **node-local** collector (typically reached via the
Kubernetes downward API host IP, e.g.
`OTEL_EXPORTER_OTLP_ENDPOINT=http://$(HOST_IP):4317`) rather than being
scraped. See "Deployment / enabling telemetry" below.

**Dual metrics export.** The Prometheus `/metrics` endpoint (`:9090` by
default, `metrics.enabled`) and the OTLP metrics pipeline
(`telemetry.metrics`) are independent and can both run at once. They are not
duplicate instrumentation: the OTLP pipeline bridges the same private
`internal/metrics.Registry` that `/metrics` already serves
(`go.opentelemetry.io/contrib/bridges/prometheus`, via
`prometheusbridge.WithGatherer`), so every existing counter/histogram/gauge
reaches both sinks without any call-site changes. Turning on
`telemetry.metrics` does not turn off `/metrics`, and vice versa — operators
who only want Coralogix dashboards can disable the Prometheus endpoint
independently via `metrics.enabled: false`.

**Traces and logs correlate via `trace_id`.** When a log call is made through
an `slog` `*Context` method (`InfoContext`, `ErrorContext`, ...) under a
context that carries a valid OTEL span, `logfields.NewTraceHandler` (wrapping
every logger built by `service.NewLogger`) stamps the record with `trace_id`
and `span_id` before it's written. The collector then promotes `trace_id` to
Coralogix's first-class OTLP trace ID field, so a trace view and a log search
for the same ID return the same request/pipeline hop. Log calls made via the
non-`Context` methods (`Info`, `Error`, ...) never carry a span (slog passes
`context.Background()` internally) and are unaffected — this is deliberate,
not a gap.

## Distributed trace: arcade → merkle → arcade

This branch closes merkle-service's half of the arcade → merkle → arcade
trace:

- **Inbound HTTP** (`/watch`, `/health`, `/reprocess`, ...): the chi router is
  wrapped with `otelhttp.NewHandler` (see `internal/api/server.go`), which
  starts one span per inbound request named by route pattern (low
  cardinality — never the raw path with an embedded txid/hash).
- **Outbound HTTP**: the DataHub client (`internal/datahub/client.go`) and the
  callback-delivery HTTP client (`internal/callback/delivery.go`) both wrap
  their transport with `otelhttp.NewTransport`, applied *outside* the
  SSRF-guarding transport so the security check still runs on every dial.
- **Kafka (franz-go)**: the producer injects a W3C `traceparent` into record
  headers only when the publishing context carries a valid span
  (`internal/kafka/otel_carrier.go`); the consumer extracts it and, only when
  the extracted context carries a valid span, starts a `SpanKindConsumer`
  span named `"<topic> process"` before invoking the handler
  (`internal/kafka/consumer.go`). A record with no inbound trace context
  (telemetry disabled fleet-wide, or a message produced before this shipped)
  is intentionally **not** spanned — there's nothing to correlate it with, and
  this keeps the disabled/no-context path a single `IsValid` check with zero
  additional allocation on both produce and consume.
- **P2P announcements** (`internal/p2p/otel.go`): each inbound subtree/block
  gossip message starts a **root** span (`"subtree announce"` /
  `"block announce"`) — there is no inbound HTTP request or existing trace to
  attach to, since the P2P network is the origin. This is the span that
  Kafka-produce propagation carries onward through the rest of the pipeline
  to callback delivery, i.e. the p2p-client is where merkle's half of the
  trace begins.
- **Retry / DLQ republish** (subtree processor, block subtree worker,
  callback delivery) use `context.WithoutCancel(ctx)` for the republish
  Kafka produce so a durable hand-off isn't aborted by a canceling consumer
  context, while still carrying forward the same trace context.

Net effect: a single `trace_id` can be searched in Coralogix to see a
request's full path — e.g. arcade's registration call, the merkle `/watch`
span, the eventual SEEN/MINED Kafka hop, and the callback HTTP delivery back
into arcade — wherever telemetry is enabled end-to-end.

## Resource attributes

Every span/metric carries a shared OTEL resource, built in
`internal/telemetry.buildResource`:

| Attribute             | Source                                                             |
|------------------------|--------------------------------------------------------------------|
| `service.name`         | `telemetry.serviceName` (default `merkle-service`); `OTEL_SERVICE_NAME` env wins if set |
| `service.namespace`    | `telemetry.namespace` (omitted from the resource when empty)       |
| `service.version`      | `internal/version.Version` — `"dev"` locally, set via `-ldflags` at container build time (see `Dockerfile`) |
| `service.instance.id`  | `POD_NAME` env (set by the k8s downward API) if present, else `os.Hostname()` |
| `merkle.mode`          | The running binary/service identity: `all-in-one`, `api-server`, `block-processor`, `callback-delivery`, `p2p-client`, `subtree-fetcher`, or `subtree-worker` |

The config-derived resource is then merged with whatever
`OTEL_SERVICE_NAME` / `OTEL_RESOURCE_ATTRIBUTES` detect from the environment,
with the environment values taking priority — so a k8s-deployment-set env var
always wins over the config default without requiring a code change.

`merkle.mode` is the key attribute for slicing Coralogix dashboards/alerts by
service without needing seven separate `service.name` values.

## Config / environment reference

Telemetry is configured under the `telemetry:` block in `config.yaml`, fully
overridable by environment variables. Nothing here is required — with
`telemetry.enabled: false` (the default), `internal/telemetry.Init` installs
no providers and opens no network connections, so runtime behavior is
identical to a build with no OTEL support at all.

| Config key                  | Env var                       | Default          | Notes |
|------------------------------|--------------------------------|-------------------|-------|
| `telemetry.enabled`          | `TELEMETRY_ENABLED`           | `false`           | Master switch. |
| `telemetry.endpoint`         | `TELEMETRY_ENDPOINT`          | `""`              | `host:port`, no scheme. May be left empty — see OTEL_* fallback below. |
| `telemetry.protocol`         | `TELEMETRY_PROTOCOL`          | `grpc`            | `grpc` (4317) or `http` (4318). |
| `telemetry.insecure`         | `TELEMETRY_INSECURE`          | `false`           | Skip TLS when dialing the collector. |
| `telemetry.serviceName`      | `TELEMETRY_SERVICE_NAME`      | `merkle-service`  | `service.name` resource attribute. |
| `telemetry.namespace`        | `TELEMETRY_NAMESPACE`         | `""`              | `service.namespace` resource attribute; omitted when empty. |
| `telemetry.traces`           | `TELEMETRY_TRACES`            | `true`            | Enables the OTLP trace pipeline (only takes effect when `telemetry.enabled`). |
| `telemetry.metrics`          | `TELEMETRY_METRICS`           | `true`            | Enables the OTLP metric pipeline (Prometheus bridge). |
| `telemetry.sampleRatio`      | `TELEMETRY_SAMPLE_RATIO`      | `1.0`             | `ParentBased(TraceIDRatioBased)` sampler ratio, `0.0`-`1.0`. |
| `telemetry.exportTimeoutMs`  | `TELEMETRY_EXPORT_TIMEOUT_MS` | `10000`           | Bounds ForceFlush+Shutdown of every provider at process exit. |

Standard OTEL environment variables are also honored and take priority where
they overlap with the config above:

| Env var                                  | Effect |
|--------------------------------------------|--------|
| `OTEL_EXPORTER_OTLP_ENDPOINT`              | Fallback endpoint for both traces and metrics when `telemetry.endpoint` is empty. Understands a scheme-prefixed URL (unlike `telemetry.endpoint`). |
| `OTEL_EXPORTER_OTLP_TRACES_ENDPOINT`       | Fallback endpoint for traces only. |
| `OTEL_EXPORTER_OTLP_METRICS_ENDPOINT`      | Fallback endpoint for metrics only. |
| `OTEL_SERVICE_NAME`                        | Overrides `telemetry.serviceName` in the resulting resource. |
| `OTEL_RESOURCE_ATTRIBUTES`                 | Merged into the resource, taking priority over config-derived attributes. |

Related, non-telemetry-specific settings:

| Config key    | Env var     | Default | Notes |
|---------------|-------------|---------|-------|
| `logLevel`    | `LOG_LEVEL` | `info`  | Controls the shared stdout JSON logger for every service (see "Log-field canon" below). |
| `metrics.enabled` | `METRICS_ENABLED` | `true` | Prometheus `/metrics` endpoint — independent of `telemetry.metrics` (see "Dual metrics export" above). |
| `metrics.port`    | `METRICS_PORT`    | `9090` | |
| `subtree.seenTxidLogMax` | `SUBTREE_SEEN_TXID_LOG_MAX` | `1000` | Caps how many matched txids are logged per SEEN batch (see "Log-field canon"). `0` = counts only. |

If `telemetry.enabled: true` and neither `telemetry.endpoint` nor the
`OTEL_EXPORTER_OTLP_*_ENDPOINT` env vars are set, `internal/telemetry.Init`
fails fast with an explicit error rather than silently exporting nowhere.

## Log-field canon

Every log call that emits a well-known identifier (a txid, a block hash, a
callback URL, ...) uses a typed constructor from `internal/logfields` rather
than a bare string key, so the same logical field is always spelled the same
way. **This canon is shared with the arcade repo's own log-field canon** —
the two services independently emit logs, but a Coralogix query for e.g.
`block_hash:"000000..."` returns matching lines from both arcade and
merkle-service in one search, because both sides use the same snake_case key
names for the same concepts. See arcade's own `docs/observability.md` for its
side of this canon.

| Field key         | Go constructor                    | Meaning |
|--------------------|-------------------------------------|---------|
| `txid`             | `logfields.TxID`                   | A single transaction id. |
| `txids`            | `logfields.TxIDs`                  | A **list** of transaction ids. Never mixed with a count under the same key — that breaks Coralogix/Elasticsearch field-type mapping. |
| `txid_count`       | `logfields.TxIDCount`              | A **count** of transaction ids. |
| `txids_truncated`  | `logfields.TxIDsTruncated`         | Whether a `txids` list was capped by `subtree.seenTxidLogMax` rather than complete. |
| `block_hash`       | `logfields.BlockHash`              | Block hash — continuous across p2p-client → block-processor → subtree-worker → store → callback delivery. |
| `block_height`     | `logfields.BlockHeight`            | Block height. |
| `subtree_hash`     | `logfields.SubtreeHash`            | Subtree hash. |
| `subtree_index`    | `logfields.SubtreeIndex`           | Subtree's index within its block. |
| `callback_url`     | `logfields.CallbackURL`            | Arcade callback URL. |
| `datahub_url`      | `logfields.DataHubURL`             | Teranode DataHub peer/request URL. |
| `peer_id`          | `logfields.PeerID`                 | P2P peer identifier. |
| `request_id`       | `logfields.RequestID`              | HTTP request id (chi middleware). |
| `trace_id`         | `logfields.TraceID`                | OTEL trace id — stamped automatically by `logfields.NewTraceHandler`; call sites don't set this directly. |
| `span_id`          | `logfields.SpanID`                 | OTEL span id — same auto-stamping as `trace_id`. |

`make lint-logfields` fails the build if a banned pre-canon key literal
(`blockHash`, `subtreeHash`, `subtreeID`, `subtreeIndex`, `callbackUrl`,
`callbackURL`, `blockHeight`, `peerID`, `peerId`, `requestId`,
`dataHubUrl`) shows up in `internal/`, `cmd/`, or `tools/` non-test Go source
outside of struct tags (`json:`/`yaml:`/`mapstructure:`) or `FormValue`
reads — those exemptions are wire formats, not log fields, and must never be
renamed to match the canon.

### Key log lines

- **Registration accepted** (`internal/api/handlers.go`): `/watch` logs
  `"registration accepted"` with `txid` + `callback_url` at Info level.
- **SEEN batch published** (`internal/subtree/processor.go`): once a
  SEEN_ON_NETWORK / SEEN_MULTIPLE_NODES batch is durably published, one Info
  line per `(callback_url, chunk)` logs `"seen callback batch published"`
  with `subtree_hash`, `callback_url`, `txid_count`, and — capped at
  `subtree.seenTxidLogMax` (default 1000, env `SUBTREE_SEEN_TXID_LOG_MAX`,
  `0` disables the list and logs counts only) — the matching `txids` plus
  `txids_truncated`.
- **`block_hash`** is logged at every stage of the block pipeline
  (p2p-client receipt, block-processor dispatch, subtree-worker STUMP
  build, subtree-counter store, callback delivery of `BLOCK_PROCESSED`), so a
  single `block_hash` search traces a block end-to-end.

## Coralogix search recipes

**Trace a single transaction's lifecycle:**

```
txid:"<txid>"
```
Returns, in order: the `/watch` "registration accepted" log (with
`callback_url`), the SEEN batch log(s) once the txid is observed in a subtree
(`txids` includes it, or check `txid_count` on chunks it may have been
truncated out of), and the eventual callback delivery log for that txid's
MINED/STUMP payload. Add `trace_id:"<id>"` from any one of these lines (or a
value copied from a trace view) to pivot straight to the OTEL trace, when
telemetry is enabled end-to-end.

**Trace a block's processing:**

```
block_hash:"<hash>"
```
Returns the p2p-client "block announce" receipt, the block-processor's block
dispatch and coordination logs, each subtree-worker's STUMP-build logs for
that block (add `subtree_index` or `subtree_hash` to narrow to one subtree),
and finally the `BLOCK_PROCESSED` callback delivery log. Combine with
`service:block-processor` / `service:subtree-worker` (the `service` field set
by `BaseService.InitBase`) or `merkle.mode` (the OTEL resource attribute, if
querying spans) to isolate a stage.

**Correlate a trace across services:**

```
trace_id:"<id>"
```
When telemetry is enabled, this returns every log line stamped by
`logfields.NewTraceHandler` across every merkle-service pod the request
touched, and — because the collector promotes `trace_id` to Coralogix's
native OTLP trace ID field — the corresponding spans in one trace view,
including the arcade side of the same trace once arcade's own OTel
instrumentation lands (see arcade issue `bsv-blockchain/arcade#223`).

## Deployment / enabling telemetry

`telemetry.enabled` is `false` by default in every `config.yaml` and every
`deploy/k8s/*.yaml` example manifest in this repo — enabling it is opt-in per
environment.

The manifests under `deploy/k8s/` in this repo are illustrative examples for
running merkle-service standalone; they are **not** the authoritative
production deployment. Production rollout — including the actual OTLP
collector wiring — is owned by the `bsva-infra-flux` GitOps repo. To enable
telemetry in a Kubernetes deployment, three environment variables need to
reach the container, on top of `TELEMETRY_ENABLED=true`:

```yaml
env:
  - name: HOST_IP
    valueFrom:
      fieldRef:
        fieldPath: status.hostIP
  - name: POD_NAME
    valueFrom:
      fieldRef:
        fieldPath: metadata.name
  - name: OTEL_EXPORTER_OTLP_ENDPOINT
    value: "http://$(HOST_IP):4317"
  - name: TELEMETRY_ENABLED
    value: "true"
```

`HOST_IP` and `POD_NAME` come from the Kubernetes downward API and **cannot**
be supplied via a ConfigMap (`envFrom`) — they must be declared as explicit
`env:` entries, in that order, since `OTEL_EXPORTER_OTLP_ENDPOINT`'s value
references `$(HOST_IP)`. `POD_NAME` also becomes the `service.instance.id`
resource attribute (see "Resource attributes" above) even when telemetry
itself is disabled elsewhere, since `internal/telemetry.resolveInstanceID`
reads it directly.

The reference `deploy/k8s/*.yaml` manifests in this repo wire `HOST_IP` /
`POD_NAME` / `OTEL_EXPORTER_OTLP_ENDPOINT` unconditionally (harmless when
`TELEMETRY_ENABLED` stays `"false"`) so they double as a working example of
the pattern above. The flux repo's PR
(`bsv-blockchain/bsva-infra-flux#227`) is what actually flips
`TELEMETRY_ENABLED=true` in production, alongside the Coralogix-side JSON log
parsing rules for the field canon above.
