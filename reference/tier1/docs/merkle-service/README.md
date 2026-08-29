<div align="center">

# 🌳&nbsp;&nbsp;merkle-service

**High-throughput delivery of [BSV Blockchain](https://bsvblockchain.org) merkle proofs to subscribers as transactions propagate the network and land in mined blocks.**

<br/>

<a href="https://github.com/bsv-blockchain/merkle-service/releases"><img src="https://img.shields.io/github/release-pre/bsv-blockchain/merkle-service?include_prereleases&style=flat-square&logo=github&color=black" alt="Release"></a>
<a href="https://golang.org/"><img src="https://img.shields.io/github/go-mod/go-version/bsv-blockchain/merkle-service?style=flat-square&logo=go&color=00ADD8" alt="Go Version"></a>
<a href="https://github.com/bsv-blockchain/merkle-service/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-OpenBSV-blue?style=flat-square" alt="License"></a>

<br/>

<table align="center" border="0">
  <tr>
    <td align="right">
       <code>CI / CD</code> &nbsp;&nbsp;
    </td>
    <td align="left">
       <a href="https://github.com/bsv-blockchain/merkle-service/actions"><img src="https://img.shields.io/github/actions/workflow/status/bsv-blockchain/merkle-service/fortress.yml?branch=main&label=build&logo=github&style=flat-square" alt="Build"></a>
       <a href="https://github.com/bsv-blockchain/merkle-service/actions"><img src="https://img.shields.io/github/last-commit/bsv-blockchain/merkle-service?style=flat-square&logo=git&logoColor=white&label=last%20update" alt="Last Commit"></a>
    </td>
    <td align="right">
       &nbsp;&nbsp;&nbsp;&nbsp; <code>Quality</code> &nbsp;&nbsp;
    </td>
    <td align="left">
       <a href="https://codecov.io/gh/bsv-blockchain/merkle-service"><img src="https://codecov.io/gh/bsv-blockchain/merkle-service/branch/main/graph/badge.svg?style=flat-square" alt="Coverage"></a>
    </td>
  </tr>

  <tr>
    <td align="right">
       <code>Security</code> &nbsp;&nbsp;
    </td>
    <td align="left">
       <a href="https://scorecard.dev/viewer/?uri=github.com/bsv-blockchain/merkle-service"><img src="https://api.scorecard.dev/projects/github.com/bsv-blockchain/merkle-service/badge?style=flat-square" alt="Scorecard"></a>
       <a href=".github/SECURITY.md"><img src="https://img.shields.io/badge/policy-active-success?style=flat-square&logo=security&logoColor=white" alt="Security"></a>
    </td>
    <td align="right">
       &nbsp;&nbsp;&nbsp;&nbsp; <code>Community</code> &nbsp;&nbsp;
    </td>
    <td align="left">
       <a href="https://github.com/bsv-blockchain/merkle-service/graphs/contributors"><img src="https://img.shields.io/github/contributors/bsv-blockchain/merkle-service?style=flat-square&color=orange" alt="Contributors"></a>
       <a href="https://deepwiki.com/bsv-blockchain/merkle-service"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
    </td>
  </tr>
</table>

</div>

<br/>
<br/>

<div align="center">

### <code>Project Navigation</code>

</div>

<table align="center">
  <tr>
    <td align="center" width="33%">
       📦&nbsp;<a href="#-installation"><code>Installation</code></a>
    </td>
    <td align="center" width="33%">
       ✨&nbsp;<a href="#-features"><code>Features</code></a>
    </td>
    <td align="center" width="33%">
       📚&nbsp;<a href="#-documentation"><code>Documentation</code></a>
    </td>
  </tr>
  <tr>
    <td align="center">
       🧪&nbsp;<a href="#-examples--tests"><code>Examples&nbsp;&&nbsp;Tests</code></a>
    </td>
    <td align="center">
       ⚡&nbsp;<a href="#-benchmarks"><code>Benchmarks</code></a>
    </td>
    <td align="center">
       🛠️&nbsp;<a href="#-code-standards"><code>Code&nbsp;Standards</code></a>
    </td>
  </tr>
  <tr>
    <td align="center">
       🤖&nbsp;<a href="#-ai-usage--assistant-guidelines"><code>AI&nbsp;Usage</code></a>
    </td>
    <td align="center">
       🤝&nbsp;<a href="#-contributing"><code>Contributing</code></a>
    </td>
    <td align="center">
       👥&nbsp;<a href="#-maintainers"><code>Maintainers</code></a>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="3">
       📝&nbsp;<a href="#-license"><code>License</code></a>
    </td>
  </tr>
</table>
<br/>

## 🌐 Overview

Clients register a `(txid, callbackUrl)` pair. The service watches the BSV network over P2P, and as a transaction is observed in subtrees and then in a block, it `POST`s status updates and a **STUMP** (Subtree Unified Merkle Path) back to the callback URL.

Built to interoperate with [Teranode](https://github.com/bsv-blockchain/teranode) and [Arcade](https://github.com/bsv-blockchain/arcade), the service scales horizontally to handle blocks containing millions of transactions — validated to ~92k txids/sec with two delivery instances.

### Terminology

- **BUMP** — [Bitcoin Unified Merkle Path](https://github.com/bitcoin-sv/BRCs/blob/master/transactions/0074.md) for a transaction within a full block.
- **STUMP** — Subtree Unified Merkle Path. Same wire format as BUMP, but scoped to a single subtree. The service emits one STUMP per subtree (not per transaction), letting downstream consumers reconstruct the BUMP.

<br/>

## ✨ Features

- **Real-Time Merkle Proof Delivery**
  Streams `SEEN_ON_NETWORK`, `MINED`, and `IMMUTABLE` callbacks to subscribers as transactions move through the BSV lifecycle.

- **STUMP-Based Compound Proofs**
  Emits one STUMP per subtree rather than per transaction, allowing downstream consumers to reconstruct full BUMPs efficiently.

- **Horizontally Scalable Pipeline**
  Stages connected by Kafka topics, each independently scalable to subtree- and partition-count limits — validated past 92k txids/sec.

- **Pluggable Storage Backends**
  Aerospike for production workloads, PostgreSQL/SQLite for environments without Aerospike or for testing.

- **Teranode-Compatible P2P Client**
  Connects to the BSV P2P network via libp2p with the same wire format as Teranode for subtree and block announcements.

- **All-In-One or Microservice Topology**
  Run every stage in a single binary for development and small deployments, or deploy each stage independently on Kubernetes.

<br>

### Built-in Components

- **Bulk Registration CLI** — `cmd/watch` registers thousands of txids from a flat file in a single shot.
- **Debug Dashboard** — `tools/debug-dashboard` exposes a local web UI for inspecting in-flight pipeline state.
- **Idempotent Callback Delivery** — Hash-partitioned by callback URL with retry-on-failure and dead-letter queue for poison messages.
- **Negative-Lookup Cache Hardening** — Registration cache rejects negative entries to prevent stale-miss propagation.
- **SSRF Protection** — DataHub client rejects URLs targeting private address space and blocks private dials.
- **Blob Path Hardening** — File blob store rejects keys that escape the configured root directory.
- **Health & Readiness Endpoints** — `GET /health` exposes liveness/readiness suitable for orchestration tools.
- **Schema-Migrated SQL Backend** — PostgreSQL/SQLite migrations embedded in the binary; TTL emulated by a sweeper goroutine.

<br>

## 📦 Installation

**merkle-service** requires a [supported release of Go](https://golang.org/doc/devel/release.html#policy) (the version pinned in [go.mod](go.mod); currently **1.26**).

<br>

### Prerequisites

- Go (version pinned in [go.mod](go.mod))
- Docker / Podman + Compose (for local Aerospike, Zookeeper, and Kafka)

<br>

### Run Locally (All-in-One)

1. **Clone the repository**
   ```shell
   git clone https://github.com/bsv-blockchain/merkle-service.git
   cd merkle-service
   ```

2. **Start dependencies**
   ```shell
   make docker-up    # starts Aerospike, Zookeeper, Kafka
   ```

3. **Run the all-in-one binary**
   ```shell
   make run          # go run ./cmd/merkle-service
   ```

The API listens on `:8080`. Stop dependencies with `make docker-down`.

<br>

### Register a Transaction

```shell
curl -X POST http://localhost:8080/watch \
  -H 'Content-Type: application/json' \
  -d '{
    "txid": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2",
    "callbackUrl": "https://example.com/callback"
  }'
```

Or use the bundled CLI for bulk registration:

```shell
go run ./cmd/watch \
  --url http://localhost:8080 \
  --callback https://example.com/callback \
  --file txids.txt
```

See [docs/api.md](docs/api.md) for the full API reference.

<br>

### Build Binaries

```shell
make build    # builds every binary under cmd/
```

The Dockerfile builds all binaries into a single Alpine runtime image. Choose which one runs by overriding the entrypoint, e.g. `--entrypoint api-server`.

<br>

## 📚 Documentation

### Architecture

The service is a set of stages connected by Kafka topics, designed to scale horizontally for blocks containing millions of transactions.

```
                BSV Network (libp2p)
                       │
                       ▼
                  P2P Client ──► Kafka: subtree, block
                       │
       ┌───────────────┴────────────────┐
       ▼                                ▼
 Subtree Fetcher                  Block Processor
 (fan-out by sub-                 (fan-out subtrees
  scribing to subtree              of a mined block to
  topic, fetches blob,             subtree-work topic)
  emits SEEN callbacks)                  │
       │                                 ▼
       │                          Subtree Worker
       │                          (builds STUMP,
       │                           accumulates in
       │                           Aerospike,
       │                           flushes batched
       │                           callbacks)
       │                                 │
       └─────────► Kafka: callback ◄─────┘
                       │
                       ▼
              Callback Delivery
              (HTTP POST → subscriber URL,
               retries via DLQ)
```

<br>

### Pipeline Stages

| Stage             | Binary                  | Replicas                       | Role                                                                                       |
|-------------------|-------------------------|--------------------------------|--------------------------------------------------------------------------------------------|
| API server        | `cmd/api-server`        | unlimited                      | Accepts `POST /watch` registrations and serves `GET /health`.                              |
| P2P client        | `cmd/p2p-client`        | 1 (singleton)                  | Connects to the BSV P2P network; publishes subtree/block announcements to Kafka.           |
| Subtree fetcher   | `cmd/subtree-fetcher`   | up to `subtree` partitions     | Resolves subtree blobs, persists them, emits `SEEN_ON_NETWORK` callbacks.                  |
| Block processor   | `cmd/block-processor`   | 1 (active)                     | Fans out a mined block's subtrees to `subtree-work` for parallel processing.               |
| Subtree worker    | `cmd/subtree-worker`    | up to `subtree-work` partitions | Builds STUMPs, accumulates per-callback batches in Aerospike, emits batched callbacks.    |
| Callback delivery | `cmd/callback-delivery` | up to `callback` partitions    | Hash-partitions HTTP delivery by callback URL; retries failures and DLQs the dead.         |
| All-in-one        | `cmd/merkle-service`    | 1                              | Runs every stage in a single process for development and small deployments.                |

There is also `cmd/watch`, a small CLI for bulk-registering txids, and `tools/debug-dashboard`, a local web UI for inspecting in-flight state.

<br>

### Supported API Endpoints

| HTTP Method | Endpoint    | Description                                                                            | Protection |
|-------------|-------------|----------------------------------------------------------------------------------------|------------|
| POST        | `/watch`    | Registers a `(txid, callbackUrl)` pair to receive lifecycle callbacks                  | Public     |
| GET         | `/health`   | Liveness/readiness probe suitable for Kubernetes and other orchestrators               | Public     |

See [docs/api.md](docs/api.md) for full request/response schemas and callback payload formats.

<br>

### Configuration

Configuration is loaded from (highest priority first):

1. Environment variables
2. YAML file ([config.yaml](config.yaml) by default; override with `CONFIG_FILE=/path/to/config.yaml`)
3. Built-in defaults

[config.yaml](config.yaml) lists every setting with its default value and corresponding env var. Key knobs:

| Field                       | Description                                                              | Notes                                                  |
|-----------------------------|--------------------------------------------------------------------------|--------------------------------------------------------|
| `mode`                      | Topology selector                                                        | `all-in-one` or `microservice`                         |
| `store.backend`             | Storage backend                                                          | `aerospike` (default, recommended) or `sql`            |
| `kafka.brokers`             | Kafka bootstrap brokers                                                  | Comma-separated host:port list                         |
| `aerospike.host`            | Aerospike connection target                                              | Required when `store.backend=aerospike`                |
| `blobStore.url`             | Subtree blob backing store                                               | File or remote URL                                     |
| `block.workerPoolSize`      | Worker concurrency for subtree fan-out                                   | Tune for block-processor throughput                    |

See [docs/deployment.md](docs/deployment.md) for the full env-var reference and [docs/sql-backend.md](docs/sql-backend.md) for running against PostgreSQL or SQLite instead of Aerospike.

<br>

### Storage Backends

| Backend     | Use for                          | Notes                                                                                  |
|-------------|----------------------------------|----------------------------------------------------------------------------------------|
| Aerospike   | Production                       | Default. Native record TTL, batched ops, scales to teranode-grade workloads.           |
| PostgreSQL  | Environments without Aerospike   | Schema migrations embedded in the binary; TTL emulated by a sweeper goroutine.         |
| SQLite      | Tests, lightweight single-node   | Same SQL backend; not for multi-writer workloads.                                      |

Switch with `store.backend: sql` (and the `store.sql.*` block) in [config.yaml](config.yaml). The CI suite runs every store against a real PostgreSQL container — `make test-e2e-postgres`.

<br>

### Deployment

#### Docker Compose

[docker-compose.yml](docker-compose.yml) brings up Aerospike, Zookeeper, and Kafka for local development. Aerospike data persists in the `aerospike-data` volume.

#### Kubernetes

[deploy/k8s/](deploy/k8s/) contains manifests for running the microservice topology on Kubernetes — one deployment per stage, plus a shared ConfigMap. See [deploy/k8s/README.md](deploy/k8s/README.md) for the deployment order, partition-count guidance, and horizontal-scaling notes.

<br>

### Repository Layout

```
cmd/                  service binaries (one per stage + all-in-one + watch CLI)
internal/
  api/                HTTP handlers for /watch and /health
  block/              block processor (fans subtrees out to workers)
  cache/              in-memory caches (txmetacache, dedup)
  callback/           callback delivery, batching, DLQ handling
  config/             YAML + env loading
  datahub/            Teranode HTTP client (subtree/block fallback)
  e2e/                cross-stage end-to-end tests
  kafka/              producer/consumer wrappers
  p2p/                Teranode-compatible libp2p client
  service/            all-in-one orchestrator
  store/              storage interfaces + aerospike & sql backends
  stump/              STUMP construction and parsing
  subtree/            subtree fetcher and worker logic
deploy/k8s/           Kubernetes manifests
docs/                 design / api / deployment / sql-backend docs
test/scale/           large-input scale-test fixtures and runners
tools/debug-dashboard local web UI for inspecting state
```

<br>

### Documentation Index

- [docs/design.md](docs/design.md) — Arcade integration design and transaction lifecycle (RECEIVED → SEEN → MINED → IMMUTABLE), including the per-subtree STUMP and compound-BUMP design rationale.
- [docs/api.md](docs/api.md) — HTTP API reference.
- [docs/deployment.md](docs/deployment.md) — full configuration and env-var reference.
- [docs/sql-backend.md](docs/sql-backend.md) — running against PostgreSQL / SQLite.
- [deploy/k8s/README.md](deploy/k8s/README.md) — Kubernetes topology and scaling.
- [requirements.md](requirements.md) — original requirements and design intent.

<br>

### Related Projects

- [Teranode](https://github.com/bsv-blockchain/teranode) — high-throughput BSV node this service interoperates with.
- [Arcade](https://github.com/bsv-blockchain/arcade) — transaction broadcast and lifecycle service that consumes merkle-service callbacks.

<br/>

<details>
<summary><strong><code>Repository Features</code></strong></summary>
<br/>

This repository includes 25+ built-in features covering CI/CD, security, code quality, developer experience, and community tooling.

**[View the full Repository Features list →](.github/docs/repository-features.md)**

</details>

<details>
<summary><strong><code>Library Deployment</code></strong></summary>
<br/>

This project uses [goreleaser](https://github.com/goreleaser/goreleaser) for streamlined binary and library deployment to GitHub. To get started, install it via:

```bash
brew install goreleaser
```

The release process is defined in the [.goreleaser.yml](.goreleaser.yml) configuration file. Tags trigger the release workflow which produces signed binaries, container images, and citation metadata.

</details>

<details>
<summary><strong><code>GitHub Workflows</code></strong></summary>
<br/>

All workflows are driven by modular configuration in [`.github/env/`](.github/env/) — no YAML editing required.

**[View all workflows and the control center →](.github/docs/workflows.md)**

</details>

<details>
<summary><strong><code>Updating Dependencies</code></strong></summary>
<br/>

To update Go module dependencies:

```bash
go get -u ./...
go mod tidy
or
magex deps:update
```

Dependabot is configured via [.github/dependabot.yml](.github/dependabot.yml) to keep dependencies and GitHub Actions up to date automatically.

</details>

<br/>

## 🧪 Examples & Tests

All unit tests run via [GitHub Actions](https://github.com/bsv-blockchain/merkle-service/actions) on the Go version pinned in [go.mod](go.mod).

Run unit tests:

```bash
make test
or
magex test
```

Run the PostgreSQL-backed end-to-end suite (requires Docker):

```bash
make test-e2e-postgres
```

Run the synthetic scale-test suites:

```bash
make scale-test          # large-block scale tests
make mega-scale-test     # 100 instances × 10k txids × 250 subtrees × 4k tx/subtree
```

[`make lint-store-imports`](Makefile) enforces that nothing under `cmd/` imports a backend implementation directly — backends are pulled in only via blank imports for side-effect registration.

<br/>

## ⚡ Benchmarks

Run the Go benchmarks:

```bash
go test -bench=. -benchmem ./...
or
magex bench
```

The microservice topology has been validated to ~92k txids/sec with two delivery instances against a real PostgreSQL backend. See [deploy/k8s/README.md](deploy/k8s/README.md) for scaling guidance.

<br/>

## 🛠️ Code Standards

Read more about this Go project's [code standards](.github/CODE_STANDARDS.md) and [linting configuration](.golangci.json). Run linters locally with:

```bash
make lint
or
magex lint
```

<br/>

## 🤖 AI Usage & Assistant Guidelines

Read the [AGENTS.md](.github/AGENTS.md) for details on how AI assistants should interact with this codebase, including coding conventions, workflow expectations, and quality bars.

<br/>

## 👥 Maintainers

| [<img src="https://github.com/icellan.png" height="50" alt="Siggi" />](https://github.com/icellan) | [<img src="https://github.com/galt-tr.png" height="50" alt="Galt" />](https://github.com/galt-tr) | [<img src="https://github.com/mrz1836.png" height="50" alt="MrZ" />](https://github.com/mrz1836) |
|:--------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------:|
|                                [Siggi](https://github.com/icellan)                                 |                                [Dylan](https://github.com/galt-tr)                                |                                [MrZ](https://github.com/mrz1836)                                 |

<br/>

## 🤝 Contributing

View the [contributing guidelines](.github/CONTRIBUTING.md) and please follow the [code of conduct](.github/CODE_OF_CONDUCT.md).

### How can I help?

All kinds of contributions are welcome :raised_hands:!
The most basic way to show your support is to star :star2: the project, or to raise issues :speech_balloon:.

[![Stars](https://img.shields.io/github/stars/bsv-blockchain/merkle-service?label=Please%20like%20us&style=social&v=1)](https://github.com/bsv-blockchain/merkle-service/stargazers)

<br/>

## 📝 License

[![License](https://img.shields.io/badge/license-OpenBSV-blue?style=flat&logo=springsecurity&logoColor=white)](LICENSE)
