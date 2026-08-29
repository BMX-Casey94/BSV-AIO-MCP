# Page: Overlay Services Engine & GASP Sync

# Overlay Services Engine & GASP Sync

<details>
<summary>Relevant source files</summary>

The following files were used as context for generating this wiki page:

- [packages/overlays/gasp-core/package.json](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/gasp-core/package.json)
- [packages/overlays/overlay-discovery-services/package.json](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/overlay-discovery-services/package.json)
- [packages/overlays/overlay-services/package.json](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/overlay-services/package.json)
- [specs/merkle/merkle-service-http.yaml](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/merkle/merkle-service-http.yaml)
- [specs/payments/brc121.yaml](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/payments/brc121.yaml)
- [specs/payments/brc29-payment-protocol.yaml](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/payments/brc29-payment-protocol.yaml)
- [specs/storage/uhrp-http.yaml](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/storage/uhrp-http.yaml)
- [specs/sync/gasp-asyncapi.yaml](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/sync/gasp-asyncapi.yaml)
- [specs/wallet/storage-adapter.yaml](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/wallet/storage-adapter.yaml)

</details>



The Overlay Services domain provides the infrastructure for building and operating BSV overlay networks. At its core is the `@bsv/overlay` package, which implements a generic **Engine** for processing Bitcoin transactions as state-transition messages. This system utilizes the **Graph Aware Sync Protocol (GASP)** for peer-to-peer UTXO synchronization and provides standardized interfaces for topic management and data lookup.

## Core Architecture & Engine

The `Engine` class is the central orchestrator of an overlay node. It is responsible for receiving transactions, validating them against topic-specific rules, and persisting the resulting state.

### The Processing Pipeline
The Engine manages the lifecycle of a transaction through several stages:
1.  **Ingestion**: Transactions are received via the `submit` method.
2.  **Validation**: The Engine uses a `TopicManager` to determine if the transaction belongs to a specific topic and satisfies its constraints.
3.  **Persistence**: Validated state transitions are stored using a `Storage` abstraction.
4.  **Sync**: New UTXOs are made available to peers via the GASP protocol.

### Key Interfaces
The system is built around three primary abstractions:
*   **TopicManager**: Defines the business logic for a specific overlay topic (e.g., identity, tokens).
*   **LookupService**: Provides query capabilities to retrieve state from the overlay.
*   **Storage**: An abstraction layer over databases (Knex/SQL or MongoDB) for persisting transaction graphs and topic state.

### Entity Mapping: Engine Components
The following diagram maps the logical components of the overlay system to their respective code entities.

| Title: Overlay Engine Entity Map |
| :--- |
| ```mermaid
graph TD
    subgraph "@bsv/overlay"
        Engine["Engine (src/Engine.ts)"]
        ITM["TopicManager (src/interfaces/TopicManager.ts)"]
        ILS["LookupService (src/interfaces/LookupService.ts)"]
        IStore["Storage (src/storage/index.ts)"]
    end

    subgraph "Sync Layer"
        GASP["GASP (packages/overlays/gasp-core/src/GASP.ts)"]
        GASPRemote["OverlayGASPRemote (src/sync/OverlayGASPRemote.ts)"]
    end

    Engine --> ITM
    Engine --> IStore
    Engine --> GASPRemote
    GASPRemote --> GASP
``` |

Sources: [packages/overlays/overlay-services/package.json:1-81](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/overlay-services/package.json#L1-L81), [specs/sync/gasp-asyncapi.yaml:1-36](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/sync/gasp-asyncapi.yaml#L1-L36)

## GASP: Graph Aware Sync Protocol

GASP is a bidirectional gossip and synchronization protocol designed for overlay nodes to exchange UTXO lists and walk transaction graphs. It ensures that a node has all the necessary lineage (ancestor transactions) to validate a specific UTXO.

### Protocol Flow
GASP operates in two phases:
1.  **Initial Exchange**: Nodes exchange `GASPInitialRequest` and `GASPInitialResponse` to identify which UTXOs the counterparty is missing since their last sync.
2.  **Graph Walking**: Nodes use `requestNode` and `submitNode` to transfer the actual transaction data and BUMP proofs.

### GASP Integration in Overlay
The `@bsv/overlay` package integrates GASP through two specialized classes:
*   **OverlayGASPRemote**: Implements the remote side of the GASP protocol, handling incoming sync requests.
*   **OverlayGASPStorage**: Adapts the internal `Storage` interface to meet the requirements of the GASP protocol, allowing the sync engine to query for missing transactions and outputs.

| Title: GASP Sync Flow |
| :--- |
| ```mermaid
sequenceDiagram
    participant I as Initiator (Engine)
    participant R as Responder (Remote Peer)

    I->>R: GASPInitialRequest (since: timestamp)
    Note over R: Check local Storage for UTXOs
    R-->>I: GASPInitialResponse (UTXO list)
    
    loop For each missing UTXO
        I->>R: requestNode(txid, vout)
        R-->>I: GASPNode (Raw Tx + BUMP)
    end
    
    Note over I: Engine.submit(GASPNode)
``` |

Sources: [specs/sync/gasp-asyncapi.yaml:1-110](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/sync/gasp-asyncapi.yaml#L1-L110), [packages/overlays/gasp-core/package.json:1-67](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/gasp-core/package.json#L1-L67)

## Storage & Persistence

The overlay engine supports multiple storage backends through a unified `Storage` interface. This allows deployments to choose between relational and document-oriented databases.

### Supported Adapters
*   **Knex (SQL)**: Uses the `knex` library to support PostgreSQL, MySQL, and SQLite. This is the standard for structured topic data.
*   **MongoDB**: Supported via the `@bsv/overlay-discovery-services` package, often used for high-volume discovery and lookup services.

### Storage Responsibilities
The storage layer must track:
*   **Transactions**: Raw hex and metadata.
*   **Outputs (UTXOs)**: Topic-specific outputs that are currently spendable.
*   **Sync State**: Timestamps of the last successful sync with various peers.

Sources: [packages/overlays/overlay-services/package.json:75-79](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/overlay-services/package.json#L75-L79), [packages/overlays/overlay-discovery-services/package.json:65-69](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/overlay-discovery-services/package.json#L65-L69)

## Discovery & Advertisement (SHIP/SLAP)

Overlay nodes use the **Simple Host Introduction Protocol (SHIP)** and **Simple Location Advertisement Protocol (SLAP)** to discover peers and services.

### Overlay Discovery Services
The `@bsv/overlay-discovery-services` package provides specialized implementations for:
*   **Peer Discovery**: Finding other nodes that support specific topics.
*   **Service Advertisement**: Broadcasting the availability of `LookupService` endpoints for specific topics.

This package extends the base engine to provide a "Discovery Node" capability, which aggregates advertisements from across the network to provide a global view of available overlay resources.

### UHRP Integration
The **Universal Hash Resolution Protocol (UHRP)** (BRC-26) is often used alongside overlays for content-addressed storage. Overlay nodes may host advertisement tokens on the `tm_uhrp` topic, which record file hashes and download URLs.

| Title: UHRP Resolution Flow |
| :--- |
| ```mermaid
graph LR
    Client["Client"]
    LS["LookupService (ls_uhrp)"]
    Storage["UHRP Storage Server"]
    
    Client -- "1. Resolve uhrp://<hash>" --> LS
    LS -- "2. Return Advertisement (URL)" --> Client
    Client -- "3. GET /download" --> Storage
``` |

Sources: [specs/storage/uhrp-http.yaml:1-40](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/storage/uhrp-http.yaml#L1-L40), [packages/overlays/overlay-discovery-services/package.json:1-71](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/overlay-discovery-services/package.json#L1-L71)

## Key Implementation Files

| Component | File Path | Description |
| :--- | :--- | :--- |
| **Engine** | `packages/overlays/overlay-services/src/Engine.ts` | Main entry point for overlay logic. |
| **GASP Protocol** | `packages/overlays/gasp-core/src/GASP.ts` | Core sync protocol implementation. |
| **GASP Remote** | `packages/overlays/overlay-services/src/sync/OverlayGASPRemote.ts` | GASP integration for the Overlay Engine. |
| **Storage Interface** | `packages/overlays/overlay-services/src/storage/index.ts` | Base storage abstraction. |
| **Topic Manager** | `packages/overlays/overlay-services/src/interfaces/TopicManager.ts` | Interface for topic-specific validation logic. |

Sources: [packages/overlays/overlay-services/package.json:23-36](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/overlay-services/package.json#L23-L36), [packages/overlays/gasp-core/package.json:14-34](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/overlays/gasp-core/package.json#L14-L34)

---