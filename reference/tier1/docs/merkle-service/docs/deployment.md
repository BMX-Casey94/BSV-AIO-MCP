# Merkle Service Deployment Guide

## Build and Run

### Prerequisites

- Go 1.21+ (or whichever version `go.mod` specifies)
- Docker and Docker Compose (for local dependencies)

### Build

```bash
# Build all binaries
make build

# Or build only the all-in-one binary
go build ./cmd/merkle-service
```

### Run locally

Start the infrastructure dependencies first, then run the service:

```bash
make docker-up   # starts Aerospike and Kafka
make run          # runs the all-in-one binary (go run ./cmd/merkle-service)
```

Stop infrastructure:

```bash
make docker-down
```

### Run tests

```bash
make test
make lint    # requires golangci-lint
```

---

## Docker Compose (local development)

The provided `docker-compose.yml` starts the backing services required by merkle-service:

| Service     | Image                            | Ports              | Purpose                     |
|-------------|----------------------------------|--------------------|-----------------------------|
| aerospike   | `aerospike:latest`               | 3000, 3001, 3002   | Registration and state store|
| zookeeper   | `confluentinc/cp-zookeeper:latest` | 2181             | Kafka dependency            |
| kafka       | `confluentinc/cp-kafka:latest`   | 9092               | Event streaming             |

Aerospike data is persisted via the `aerospike-data` Docker volume.

```bash
docker-compose up -d      # start all services
docker-compose down       # stop all services
docker-compose down -v    # stop and remove volumes (wipes data)
```

---

## Configuration

Configuration is loaded in this priority order (highest wins):

1. **Environment variables**
2. **YAML config file** (`config.yaml` by default, override path with `CONFIG_FILE`)
3. **Built-in defaults**

If `CONFIG_FILE` is set, the file must exist; a missing explicit path is a startup error. A missing default `config.yaml` is ignored.

---

## All-in-One vs Microservice Mode

Set via `MODE` env var or the `mode` YAML key.

| Mode            | Description |
|-----------------|-------------|
| `all-in-one`    | Single process runs the API server, subtree processor, block processor, callback delivery, and P2P client. Default mode. |
| `microservice`  | Each component runs as a separate binary from `cmd/` (`api-server`, `subtree-processor`, `block-processor`, `callback-delivery`, `p2p-client`). |

---

## Environment Variables Reference

### General

| Variable       | Default        | Description                                       |
|----------------|----------------|---------------------------------------------------|
| `CONFIG_FILE`  | `config.yaml`  | Path to YAML configuration file. Missing explicit paths fail startup. |
| `MODE`         | `all-in-one`   | Operating mode: `all-in-one` or `microservice`.   |

### API

| Variable    | Default | Description        |
|-------------|--------|--------------------|
| `API_PORT`  | `8080` | HTTP listen port.  |

### Aerospike

| Variable                  | Default          | Description                        |
|---------------------------|------------------|------------------------------------|
| `AEROSPIKE_HOST`          | `localhost`      | Aerospike server hostname.         |
| `AEROSPIKE_PORT`          | `3000`           | Aerospike server port.             |
| `AEROSPIKE_NAMESPACE`     | `merkle`         | Aerospike namespace.               |
| `AEROSPIKE_SET`           | `merkle_registrations`  | Aerospike set for registrations.   |
| `AEROSPIKE_SEEN_SET`      | `merkle_seen_counters`  | Aerospike set for seen counters.   |
| `AEROSPIKE_MAX_RETRIES`   | `3`              | Max retries for Aerospike ops.     |
| `AEROSPIKE_RETRY_BASE_MS` | `100`            | Base delay (ms) between retries.   |

### Kafka

| Variable                  | Default          | Description                               |
|---------------------------|------------------|-------------------------------------------|
| `KAFKA_BROKERS`           | `localhost:9092` | Comma-separated list of broker addresses. |
| `KAFKA_SUBTREE_TOPIC`     | `subtree`        | Topic for subtree messages.               |
| `KAFKA_BLOCK_TOPIC`       | `block`          | Topic for block messages.                 |
| `KAFKA_STUMPS_TOPIC`      | `stumps`         | Topic for stumps messages.                |
| `KAFKA_STUMPS_DLQ_TOPIC`  | `stumps-dlq`     | Dead-letter queue topic for stumps.       |
| `KAFKA_CONSUMER_GROUP`    | `merkle-service` | Kafka consumer group ID.                  |

### P2P

Uses [go-p2p-message-bus](https://github.com/bsv-blockchain/go-p2p-message-bus) for Teranode-compatible P2P networking.

| Variable               | Default          | Description                                                    |
|------------------------|------------------|----------------------------------------------------------------|
| `P2P_NETWORK`          | `mainnet`        | Network: `mainnet`, `testnet`, or `teratestnet`. Controls topic prefix and protocol version. |
| `P2P_NAME`             | `merkle-service` | Peer name identifier.                                         |
| `P2P_PRIVATE_KEY`      | *(auto-generated)* | Ed25519 private key (hex-encoded). Auto-generated and persisted to PeerCacheDir if not set. |
| `P2P_PEER_CACHE_DIR`   | *(empty)*        | Directory for peer cache file and auto-generated key.          |
| `P2P_PORT`             | `9906`           | TCP port for libp2p connections.                               |
| `P2P_ANNOUNCE_ADDRS`   | *(empty)*        | Comma-separated list of addresses to advertise to peers.       |
| `P2P_BOOTSTRAP_PEERS`  | *(empty)*        | Comma-separated list of bootstrap peer multiaddrs.             |
| `P2P_SUBTREE_TOPIC`    | `subtree`        | Topic suffix for subtrees (full topic: `{network}-subtree`).   |
| `P2P_BLOCK_TOPIC`      | `block`          | Topic suffix for blocks (full topic: `{network}-block`).       |
| `P2P_DHT_MODE`         | `off`            | DHT mode: `server`, `client`, or `off`. Use `off` for lightweight clients. |
| `P2P_ENABLE_NAT`       | `false`          | Enable UPnP/NAT-PMP port mapping.                             |
| `P2P_ENABLE_MDNS`      | `false`          | Enable multicast DNS discovery.                                |
| `P2P_ALLOW_PRIVATE_IPS` | `false`         | Allow connections to private IP ranges.                        |

### Subtree Processing

| Variable               | Default    | Description                                     |
|------------------------|------------|-------------------------------------------------|
| `SUBTREE_STORAGE_MODE` | `realtime` | Storage mode: `realtime` or `deferred`.         |
| `SUBTREE_DAH_OFFSET`   | `1`        | DAH (Double Authentication Hash) offset.        |

### Block Processing

| Variable                  | Default | Description                                         |
|---------------------------|---------|-----------------------------------------------------|
| `BLOCK_WORKER_POOL_SIZE`  | `16`    | Number of parallel block-processing workers.        |
| `BLOCK_POST_MINE_TTL_SEC` | `1800`  | TTL in seconds for post-mine data (default 30 min). |

### Callback Delivery

| Variable                    | Default | Description                                              |
|-----------------------------|---------|----------------------------------------------------------|
| `CALLBACK_MAX_RETRIES`      | `5`     | Maximum delivery attempts per callback.                  |
| `CALLBACK_BACKOFF_BASE_SEC` | `30`    | Base delay in seconds for exponential backoff.           |
| `CALLBACK_TIMEOUT_SEC`      | `10`    | HTTP timeout in seconds for callback requests.           |
| `CALLBACK_SEEN_THRESHOLD`   | `3`     | Number of times a txid must be seen before dispatching.  |

### Blob Store

| Variable         | Default                       | Description                    |
|------------------|-------------------------------|--------------------------------|
| `BLOB_STORE_URL` | `file:///tmp/merkle-subtrees` | URL for subtree blob storage.  |
