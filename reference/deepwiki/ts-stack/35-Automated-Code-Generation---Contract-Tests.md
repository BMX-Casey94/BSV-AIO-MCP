# Page: Automated Code Generation & Contract Tests

# Automated Code Generation & Contract Tests

<details>
<summary>Relevant source files</summary>

The following files were used as context for generating this wiki page:

- [.github/workflows/codegen.yml](https://github.com/bsv-blockchain/ts-stack/blob/main/.github/workflows/codegen.yml)
- [conformance/generated/.gitkeep](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/.gitkeep)
- [conformance/generated/README.md](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/README.md)
- [conformance/generated/broadcast/types.rs.TODO](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/broadcast/types.rs.TODO)
- [conformance/generated/messaging/types.rs.TODO](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/messaging/types.rs.TODO)
- [conformance/generated/overlay/types.rs.TODO](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/overlay/types.rs.TODO)
- [specs/broadcast/contract-tests/README.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/broadcast/contract-tests/README.md)
- [specs/broadcast/contract-tests/schemathesis.sh](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/broadcast/contract-tests/schemathesis.sh)
- [specs/messaging/contract-tests/README.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/messaging/contract-tests/README.md)
- [specs/messaging/contract-tests/schemathesis.sh](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/messaging/contract-tests/schemathesis.sh)
- [specs/overlay/contract-tests/README.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/overlay/contract-tests/README.md)
- [specs/overlay/contract-tests/schemathesis.sh](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/overlay/contract-tests/schemathesis.sh)
- [specs/reliability/README.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/reliability/README.md)
- [specs/reliability/arc.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/reliability/arc.md)
- [specs/reliability/go-sdk.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/reliability/go-sdk.md)
- [specs/reliability/message-box-server.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/reliability/message-box-server.md)
- [specs/reliability/overlay-express.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/reliability/overlay-express.md)
- [specs/reliability/ts-sdk.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/reliability/ts-sdk.md)
- [specs/reliability/wallet-toolbox.md](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/reliability/wallet-toolbox.md)

</details>



This page documents the automated pipeline for maintaining consistency between the service boundary specifications and the multi-language implementations within the TS-Stack. The repository utilizes a central source-of-truth in the `specs/` directory to drive type generation for Go, TypeScript, and Python, while ensuring implementation compliance via property-based contract testing.

## Automated Codegen Workflow

The repository employs a GitHub Actions workflow, `codegen.yml`, which monitors changes to OpenAPI specifications and automatically regenerates type definitions across supported languages [.github/workflows/codegen.yml:1-7](https://github.com/bsv-blockchain/ts-stack/blob/main/.github/workflows/codegen.yml#L1-L7). This ensures that the `conformance/generated/` directory always reflects the latest service definitions.

### Multi-Language Implementation
The workflow is divided into jobs for each target language:

| Language | Tooling | Output Format | Target Path |
| :--- | :--- | :--- | :--- |
| **Go** | `oapi-codegen` | Go Structs | `conformance/generated/**/types.gen.go` |
| **TypeScript** | `openapi-typescript` | Ambient Definitions | `conformance/generated/**/types.gen.d.ts` |
| **Python** | `datamodel-codegen` | Pydantic v2 Models | `conformance/generated/**/models.py` |
| **Rust** | `typify` (Manual) | Rust Types | `conformance/generated/**/types.rs.TODO` |

### Data Flow Diagram: Spec to Code
The following diagram illustrates how a change in a specification file propagates through the codegen pipeline to the generated outputs.

**Codegen Propagation Path**
```mermaid
graph TD
    subgraph "Source of Truth"
        SPEC_OVERLAY["specs/overlay/overlay-http.yaml"]
        SPEC_ARC["specs/broadcast/arc.yaml"]
        SPEC_MSG["specs/messaging/message-box-http.yaml"]
    end

    subgraph "GitHub Actions: codegen.yml"
        GO_JOB["generate-go-types"]
        TS_JOB["generate-ts-types"]
        PY_JOB["generate-py-types"]
    end

    subgraph "conformance/generated/"
        GO_OUT["overlay/types.gen.go"]
        TS_OUT["broadcast/types.gen.d.ts"]
        PY_OUT["messaging/models.py"]
    end

    SPEC_OVERLAY --> GO_JOB
    SPEC_ARC --> TS_JOB
    SPEC_MSG --> PY_JOB

    GO_JOB -- "oapi-codegen" --> GO_OUT
    TS_JOB -- "openapi-typescript" --> TS_OUT
    PY_JOB -- "datamodel-code-generator" --> PY_OUT
```
**Sources:** [.github/workflows/codegen.yml:10-106](https://github.com/bsv-blockchain/ts-stack/blob/main/.github/workflows/codegen.yml#L10-L106), [conformance/generated/README.md:1-15](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/README.md#L1-L15)

---

## Output Structure

Generated code is organized by domain within the `conformance/generated/` directory. This directory acts as a shared resource for conformance runners and cross-language validation [.github/workflows/codegen.yml:41](https://github.com/bsv-blockchain/ts-stack/blob/main/.github/workflows/codegen.yml#L41).

### Domain Mappings
The pipeline targets three primary service domains:

1.  **Overlay**: Based on `specs/overlay/overlay-http.yaml` [.github/workflows/codegen.yml:23](https://github.com/bsv-blockchain/ts-stack/blob/main/.github/workflows/codegen.yml#L23).
2.  **Broadcast (ARC)**: Based on `specs/broadcast/arc.yaml` [.github/workflows/codegen.yml:29](https://github.com/bsv-blockchain/ts-stack/blob/main/.github/workflows/codegen.yml#L29).
3.  **Messaging**: Based on `specs/messaging/message-box-http.yaml` [.github/workflows/codegen.yml:35](https://github.com/bsv-blockchain/ts-stack/blob/main/.github/workflows/codegen.yml#L35).

### Rust Generation
Rust support is currently handled via placeholders due to the requirement for a `Cargo` workspace context. The workflow creates `.TODO` files containing the necessary `typify` commands for manual execution within a Rust project [.github/workflows/codegen.yml:112-137](https://github.com/bsv-blockchain/ts-stack/blob/main/.github/workflows/codegen.yml#L112-L137).

**Sources:** [conformance/generated/overlay/types.rs.TODO:1-4](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/overlay/types.rs.TODO#L1-L4), [conformance/generated/broadcast/types.rs.TODO:1-4](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/broadcast/types.rs.TODO#L1-L4), [conformance/generated/messaging/types.rs.TODO:1-4](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/generated/messaging/types.rs.TODO#L1-L4)

---

## Schemathesis Contract Testing

To ensure that running services (Overlay, Messaging, ARC) strictly adhere to their OpenAPI specifications, the repository includes a suite of property-based contract tests powered by **Schemathesis**.

### Testing Strategy
The contract tests perform the following actions:
*   **Spec Validation**: Reads the local `.yaml` specification file [specs/overlay/contract-tests/schemathesis.sh:7](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/overlay/contract-tests/schemathesis.sh#L7).
*   **Property-Based Fuzzing**: Generates a wide range of valid and invalid inputs to test edge cases (`--checks all`) [specs/messaging/contract-tests/schemathesis.sh:9](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/messaging/contract-tests/schemathesis.sh#L9).
*   **Stateful Testing**: Follows OpenAPI response links to verify state transitions across multiple requests (`--stateful=links`) [specs/broadcast/contract-tests/schemathesis.sh:10](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/broadcast/contract-tests/schemathesis.sh#L10).
*   **Reporting**: Outputs JUnit-compatible XML results for CI integration [specs/overlay/contract-tests/schemathesis.sh:11](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/overlay/contract-tests/schemathesis.sh#L11).

### Contract Test Execution
The tests are executed via `schemathesis.sh` scripts located in the `contract-tests` subdirectory of each domain.

**System Entity Association**
```mermaid
graph LR
    subgraph "Test Runner"
        ST_EXE["schemathesis.sh"]
        ST_LIB["Schemathesis Engine"]
    end

    subgraph "Target Environment"
        BASE_URL["BASE_URL (Default: localhost:3000)"]
        SRV["Running Service (e.g., OverlayExpress)"]
    end

    subgraph "Validation Logic"
        OAPI_SPEC["OpenAPI YAML Spec"]
        CHECKS["--checks all"]
        LINKS["--stateful=links"]
    end

    ST_EXE --> ST_LIB
    ST_LIB -- "Reads" --> OAPI_SPEC
    ST_LIB -- "Probes" --> BASE_URL
    BASE_URL --> SRV
    ST_LIB -- "Applies" --> CHECKS
    ST_LIB -- "Applies" --> LINKS
    ST_LIB -- "Generates" --> RESULTS["results.xml (JUnit)"]
```

**Usage Example:**
To run contract tests against a local Messaging server:
```bash
BASE_URL=http://localhost:3001 bash specs/messaging/contract-tests/schemathesis.sh
```

**Sources:** [specs/overlay/contract-tests/README.md:1-27](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/overlay/contract-tests/README.md#L1-L27), [specs/messaging/contract-tests/schemathesis.sh:1-12](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/messaging/contract-tests/schemathesis.sh#L1-L12), [specs/broadcast/contract-tests/schemathesis.sh:1-12](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/broadcast/contract-tests/schemathesis.sh#L1-L12)

---