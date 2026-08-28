# Page: API Specifications & Code Generation

# API Specifications & Code Generation

<details>
<summary>Relevant source files</summary>

The following files were used as context for generating this wiki page:

- [.github/workflows/codegen.yml](.github/workflows/codegen.yml)
- [conformance/generated/broadcast/types.rs.TODO](conformance/generated/broadcast/types.rs.TODO)
- [conformance/generated/messaging/types.rs.TODO](conformance/generated/messaging/types.rs.TODO)
- [conformance/generated/overlay/types.rs.TODO](conformance/generated/overlay/types.rs.TODO)
- [specs/EXCEPTIONS.md](specs/EXCEPTIONS.md)
- [specs/README.md](specs/README.md)
- [specs/auth/brc31-handshake.yaml](specs/auth/brc31-handshake.yaml)
- [specs/messaging/authsocket-asyncapi.yaml](specs/messaging/authsocket-asyncapi.yaml)
- [specs/messaging/message-box-http.yaml](specs/messaging/message-box-http.yaml)

</details>



This section documents the machine-readable contracts that define the service boundaries for the BSV Distributed Applications Stack. The `specs/` directory serves as the single source of truth for all Tier-1 interfaces [specs/README.md:1-5](). By using formal specifications (OpenAPI, AsyncAPI, and JSON Schema), the repository enforces cross-language consistency and enables an automated pipeline for code generation and contract testing [specs/README.md:12-18]().

## Service Boundary Specifications

The `specs/` directory contains the definitions for all critical system boundaries. These specifications move the codebase away from "read the source" documentation toward stable, explicit contracts [specs/README.md:14]().

### Core Specification Inventory

| Domain | Spec File | Format | Boundary Description |
|:-------|:----------|:-------|:---------------------|
| **Wallet** | `sdk/brc-100-wallet.json` | JSON Schema | BRC-100 wallet interface methods [specs/README.md:68](). |
| **Overlay** | `overlay/overlay-http.yaml` | OpenAPI 3.1 | Submit, lookup, discovery, and admin [specs/README.md:69](). |
| **Broadcast** | `broadcast/arc.yaml` | OpenAPI 3.1 | ARC submit, status, batch, and callback [specs/README.md:70](). |
| **Messaging** | `messaging/message-box-http.yaml` | OpenAPI 3.1 | REST endpoints for message-box-server [specs/README.md:73](). |
| **Auth** | `auth/brc31-handshake.yaml` | AsyncAPI 3.0 | BRC-31 mutual auth handshake [specs/README.md:75](). |
| **Payments** | `payments/brc121.yaml` | OpenAPI 3.1 | BRC-121 HTTP 402 payment middleware [specs/README.md:77](). |
| **Sync** | `sync/gasp-asyncapi.yaml` | AsyncAPI 3.0 | GASP cross-node sync protocol [specs/README.md:78](). |

For a full list of all 13+ specifications and the error taxonomy, see **[Service Boundary Specifications](#10.1)**.

**Sources:** [specs/README.md:21-60](), [specs/README.md:66-81](), [specs/EXCEPTIONS.md:22-30]()

---

## Automated Code Generation

The repository utilizes a GitHub Actions workflow defined in `.github/workflows/codegen.yml` to ensure that types across TypeScript, Go, and Python remain synchronized with the specifications [codegen.yml:1-5]().

### Codegen Pipeline Architecture

The pipeline follows a strict rule: **hand-rolled types for spec-defined shapes are a CI failure** [specs/README.md:7-8](). When a specification changes, the following tools are invoked:

*   **TypeScript:** `openapi-typescript` generates definition files (`.d.ts`) [codegen.yml:53-54]().
*   **Go:** `oapi-codegen` generates type structures and package-level definitions [codegen.yml:22-24]().
*   **Python:** `datamodel-code-generator` produces Pydantic v2 models [codegen.yml:82-86]().

### Code Entity Mapping

The following diagram illustrates how the natural language specifications are transformed into specific code entities within the `conformance/generated/` directory.

**Specification to Code Entity Mapping**
```mermaid
graph TD
    subgraph "Natural Language Space (Specs)"
        A["overlay-http.yaml"]
        B["arc.yaml"]
        C["message-box-http.yaml"]
    end

    subgraph "Code Entity Space (Generated)"
        TS_O["conformance/generated/overlay/types.gen.d.ts"]
        GO_O["conformance/generated/overlay/types.gen.go"]
        PY_O["conformance/generated/overlay/models.py"]

        TS_B["conformance/generated/broadcast/types.gen.d.ts"]
        GO_B["conformance/generated/broadcast/types.gen.go"]
        
        TS_M["conformance/generated/messaging/types.gen.d.ts"]
        GO_M["conformance/generated/messaging/types.gen.go"]
    end

    A -- "openapi-typescript" --> TS_O
    A -- "oapi-codegen" --> GO_O
    A -- "datamodel-codegen" --> PY_O

    B -- "openapi-typescript" --> TS_B
    B -- "oapi-codegen" --> GO_B

    C -- "openapi-typescript" --> TS_M
    C -- "oapi-codegen" --> GO_M
```
**Sources:** [codegen.yml:19-36](), [codegen.yml:50-64](), [codegen.yml:79-102](), [specs/README.md:137-142]()

---

## Contract Testing

Contract tests verify that a running implementation (regardless of the language it is written in) conforms to the published specification [specs/README.md:160-162](). These tests are written in TypeScript using Vitest and can be pointed at local or remote endpoints [specs/README.md:165-168]().

### Testing Flow

The following diagram shows the relationship between the `specs/` definitions, the generated types used in tests, and the target service implementations.

**Contract Testing Workflow**
```mermaid
graph LR
    subgraph "Spec Definition"
        S["specs/overlay/overlay-http.yaml"]
    end

    subgraph "Test Suite"
        T["specs/overlay/contract-tests/overlay.contract.test.ts"]
        G["conformance/generated/overlay/types.gen.d.ts"]
    end

    subgraph "Implementations"
        TS_S["OverlayExpress (TS)"]
        GO_S["Overlay Service (Go)"]
    end

    S -- "Generates" --> G
    G -- "Types" --> T
    T -- "HTTP POST/GET" --> TS_S
    T -- "HTTP POST/GET" --> GO_S
```

For details on running these suites and the `schemathesis` integration, see **[Automated Code Generation & Contract Tests](#10.2)**.

**Sources:** [specs/README.md:158-183](), [codegen.yml:52-54](), [specs/overlay/overlay-http.yaml:1-10]()

---