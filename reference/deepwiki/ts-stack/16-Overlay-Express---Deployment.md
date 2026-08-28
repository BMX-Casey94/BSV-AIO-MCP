# Page: Overlay Express & Deployment

# Overlay Express & Deployment

<details>
<summary>Relevant source files</summary>

The following files were used as context for generating this wiki page:

- [packages/network/chaintracks-server/package.json](packages/network/chaintracks-server/package.json)
- [packages/overlays/lite-storage-server/package.json](packages/overlays/lite-storage-server/package.json)
- [packages/overlays/overlay-express-examples/package.json](packages/overlays/overlay-express-examples/package.json)
- [packages/overlays/overlay-express/package.json](packages/overlays/overlay-express/package.json)
- [packages/overlays/storage-server/package.json](packages/overlays/storage-server/package.json)
- [packages/wallet/wab/package.json](packages/wallet/wab/package.json)
- [packages/wallet/wallet-infra/package.json](packages/wallet/wallet-infra/package.json)
- [packages/wallet/wallet-toolbox/package.json](packages/wallet/wallet-toolbox/package.json)

</details>



The `@bsv/overlay-express` package provides the production-ready server implementation for BSV Overlay Services. It wraps the core `@bsv/overlay` engine in an Express.js framework, providing standardized HTTP endpoints, database configuration helpers, and authentication middleware. This package is designed to facilitate the deployment of overlay nodes that can handle topic-specific validation, storage, and discovery.

### Server Implementation

The core of the deployment is the `OverlayExpress` server class. It integrates several components from the TS-stack to provide a complete overlay node environment.

#### Data Flow and Component Architecture

The `OverlayExpress` server manages the lifecycle of the overlay engine and exposes it via a RESTful API. It utilizes `knex` or `mongodb` for persistence and integrates with `@bsv/auth-express-middleware` to ensure that only authorized users can submit or query data.

Title: Overlay Express Server Architecture
```mermaid
graph TD
  subgraph "OverlayExpress Server"
    "Express_App[Express App]" -- "uses" --> "Auth_MW[auth-express-middleware]"
    "Express_App" -- "routes to" --> "Overlay_Engine[Engine (@bsv/overlay)]"
    "Overlay_Engine" -- "manages" --> "Topic_Mgr[TopicManager]"
    "Overlay_Engine" -- "persists via" --> "Storage_Adapters[Storage Adapters]"
  end

  "Client" -- "HTTP/REST" --> "Express_App"
  "Storage_Adapters" -- "SQL Queries" --> "Knex_DB[(Knex / MySQL / SQLite)]"
  "Storage_Adapters" -- "NoSQL" --> "Mongo_DB[(MongoDB)]"
  "Topic_Mgr" -- "validates" --> "Topic_Logic[Topic Logic (@bsv/overlay-topics)]"
```
Sources: [packages/overlays/overlay-express/package.json:68-80](), [packages/overlays/overlay-express/package.json:2-3]()

### Configuration Helpers

To simplify deployment across different environments, `@bsv/overlay-express` provides several helper functions to configure database connections and topic management.

| Helper Function | Purpose | Supported Drivers/Types |
| :--- | :--- | :--- |
| `configureKnex` | Initializes a Knex.js instance for SQL-based storage. | MySQL2, SQLite3 [packages/overlays/overlay-express/package.json:77-77](), [packages/wallet/wallet-toolbox/package.json:49-50]() |
| `configureMongo` | Initializes a MongoDB client for NoSQL-based storage. | MongoDB Driver [packages/overlays/overlay-express/package.json:78-78]() |
| `configureTopicManager` | Sets up the `TopicManager` with specific validation and lookup logic. | Topic-specific implementations [packages/overlays/overlay-express-examples/package.json:31-31]() |

Sources: [packages/overlays/overlay-express/package.json:77-78](), [packages/overlays/overlay-express-examples/package.json:27-36]()

### Deployment Reference: overlay-express-examples

The `@bsv/overlay-express-examples` package serves as the reference implementation for deploying a production overlay node. It demonstrates how to combine the express server with the canonical topic library.

*   **Entrypoint**: The main server logic is typically found in `src/index.ts` [packages/overlays/overlay-express-examples/package.json:21-21]().
*   **Environment Integration**: Uses `dotenv` for managing database credentials and network settings [packages/overlays/overlay-express-examples/package.json:33-33]().
*   **Topic Integration**: Imports `@bsv/overlay-topics` to provide validation for standard protocols like `identity`, `kvstore`, and `uhrp` [packages/overlays/overlay-express-examples/package.json:31-31]().

Title: Code Entity Mapping for Deployment
```mermaid
sequenceDiagram
  participant "index.ts (@bsv/overlay-express-examples)" as Entry
  participant "OverlayExpress (@bsv/overlay-express)" as Server
  participant "Engine (@bsv/overlay)" as Engine
  participant "Knex/Mongo" as DB

  Entry->>Server: "new OverlayExpress(config)"
  Server->>Engine: "initialize Engine"
  Entry->>Server: "configureKnex() / configureMongo()"
  Server->>DB: "establish connection"
  Entry->>Server: "listen(port)"
  Note over Server: "Exposes POST /submit, GET /lookup, etc."
```
Sources: [packages/overlays/overlay-express-examples/package.json:16-22](), [packages/overlays/overlay-express/package.json:2-8]()

### Build and Distribution

The package supports a dual-module system to ensure compatibility across various Node.js environments:
*   **CJS Build**: Located at `dist/cjs/mod.js` for legacy CommonJS support [packages/overlays/overlay-express/package.json:6-6]().
*   **ESM Build**: Located at `dist/esm/mod.js` for modern ECMAScript Module support [packages/overlays/overlay-express/package.json:7-7]().
*   **Types**: Type definitions are exported from `dist/types/mod.d.ts` [packages/overlays/overlay-express/package.json:8-8]().

The build process uses `tsconfig-to-dual-package` to automate the generation of these two formats [packages/overlays/overlay-express/package.json:65-65]().

### Supporting Infrastructure

Deployment of an overlay often requires auxiliary services provided within the ts-stack:

1.  **UHRP Storage Server**: `@bsv/uhrp-storage-server` or `@bsv/uhrp-lite` provides the content-addressable storage layer for large data blobs referenced in overlay transactions [packages/overlays/storage-server/package.json:2-2](), [packages/overlays/lite-storage-server/package.json:2-2]().
2.  **Chaintracks**: `@bsv/chaintracks-server` provides the blockchain header synchronization required for verifying transaction inclusion and Merkle paths [packages/network/chaintracks-server/package.json:2-5]().
3.  **Wallet Infra**: `@bsv/wallet-infra` provides UTXO management for the server's own funding and signing requirements [packages/wallet/wallet-infra/package.json:2-6]().

Sources: [packages/overlays/storage-server/package.json:1-5](), [packages/network/chaintracks-server/package.json:1-5](), [packages/wallet/wallet-infra/package.json:1-6]()

---