# Page: TypeScript & Go Conformance Runners

# TypeScript & Go Conformance Runners

<details>
<summary>Relevant source files</summary>

The following files were used as context for generating this wiki page:

- [conformance/GO_PLAN.md](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/GO_PLAN.md)
- [conformance/runner/go/go.mod](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/go.mod)
- [conformance/runner/go/go.sum](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/go.sum)
- [conformance/runner/go/main.go](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go)
- [conformance/runner/package.json](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/package.json)
- [conformance/runner/scripts/dashboard.mjs](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/scripts/dashboard.mjs)
- [conformance/runner/src/runner.js](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/src/runner.js)
- [conformance/runner/ts/jest.config.mjs](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/jest.config.mjs)
- [conformance/runner/ts/package.json](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/package.json)
- [conformance/runner/ts/runner.test.ts](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts)
- [conformance/runner/ts/tsconfig.json](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/tsconfig.json)
- [conformance/vectors/sdk/crypto/ecdsa.json](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/vectors/sdk/crypto/ecdsa.json)
- [conformance/vectors/sdk/crypto/ecies.json](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/vectors/sdk/crypto/ecies.json)
- [conformance/vectors/sdk/crypto/hmac.json](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/vectors/sdk/crypto/hmac.json)
- [packages/helpers/ts-paymail/docs/examples/package.json](https://github.com/bsv-blockchain/ts-stack/blob/main/packages/helpers/ts-paymail/docs/examples/package.json)
- [pnpm-lock.yaml](https://github.com/bsv-blockchain/ts-stack/blob/main/pnpm-lock.yaml)
- [specs/observability/conformance-dashboard.json](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/observability/conformance-dashboard.json)

</details>



This page documents the multi-language conformance testing infrastructure used to ensure parity between the TypeScript and Go SDK implementations. The system relies on a shared vector corpus and language-specific runners that execute these vectors against their respective SDKs.

## Overview

The conformance system consists of three main components:
1.  **Vector Corpus**: A collection of JSON files containing test vectors (inputs and expected outputs) for various cryptographic and protocol functions.
2.  **TypeScript Runner**: A Jest-based test suite that executes vectors against the `@bsv/sdk` package.
3.  **Go Runner**: A CLI application that executes vectors against the `go-sdk` package and generates standardized reports.

### Data Flow & Reporting
The runners ingest JSON vectors and produce reports in JUnit XML and JSON formats. These reports are then consumed by a dashboard script to visualize the cross-language parity status.

Title: Conformance System Data Flow
```mermaid
graph TD
  subgraph "Corpus"
    V["conformance/vectors/*.json"]
  end

  subgraph "Runners"
    TSR["TypeScript Runner (Jest)"]
    GOR["Go Runner (main.go)"]
  end

  subgraph "SDKs"
    TSSDK["@bsv/sdk"]
    GOSDK["go-sdk"]
  end

  subgraph "Outputs"
    XML["JUnit XML Reports"]
    JSN["JSON Results"]
    DSH["Grafana Dashboard"]
  end

  V --> TSR
  V --> GOR
  TSR --> TSSDK
  GOR --> GOSDK
  TSR --> XML
  GOR --> XML
  TSR --> JSN
  GOR --> JSN
  JSN --> DSH
```
Sources: [conformance/runner/src/runner.js:1-15](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/src/runner.js#L1-L15), [conformance/runner/ts/runner.test.ts:1-13](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L1-L13), [conformance/runner/go/main.go:31-61](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L31-L61)

---

## TypeScript Runner

The TypeScript runner is implemented as a Jest test suite located in `conformance/runner/ts`. It dynamically generates tests by crawling the vector corpus.

### Implementation Details
The runner uses `readdirSync` to recursively find all JSON files in the `conformance/vectors` directory [conformance/runner/ts/runner.test.ts:94-105](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L94-L105). For each file, it creates a Jest `describe` block, and for each vector within that file, it creates a `test` block [conformance/runner/ts/runner.test.ts:4-7](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L4-L7).

### Dispatch Pattern
The runner uses a dispatch pattern where vectors are routed to specific handler functions based on the filename or category:
*   **SHA256**: `dispatchSHA256` [conformance/runner/ts/runner.test.ts:113-125](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L113-L125)
*   **RIPEMD160**: `dispatchRIPEMD160` [conformance/runner/ts/runner.test.ts:127-136](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L127-L136)
*   **HMAC**: `dispatchHMAC` [conformance/runner/ts/runner.test.ts:155-180](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L155-L180)
*   **ECDSA**: `dispatchECDSA` [conformance/runner/ts/runner.test.ts:182-243](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L182-L243)

### Skip Logic
The runner implements specific logic to handle gaps in implementation or vectors intended for other languages:
*   **Parity Class**: If `parity_class` is set to `"intended"`, the test is skipped as it represents a documented gap rather than a bug [conformance/runner/ts/runner.test.ts:9](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L9).
*   **Explicit Skip**: Vectors with `skip: true` are bypassed [conformance/runner/ts/runner.test.ts:10](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L10).
*   **Unimplemented Features**: If a category or SDK function is not recognized, the test passes vacuously to avoid breaking CI on new vector additions [conformance/runner/ts/runner.test.ts:11-12](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L11-L12).

Sources: [conformance/runner/ts/runner.test.ts:1-243](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/runner.test.ts#L1-L243), [conformance/runner/ts/package.json:1-16](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/package.json#L1-L16)

---

## Go Runner

The Go runner is a standalone CLI tool located in `conformance/runner/go`. Unlike the Jest-based TS runner, it is a custom implementation designed to bridge the `ts-stack` repository with the external `go-sdk`.

### CLI Configuration
The runner supports several flags for execution:
*   `--vectors`: Path to the vector directory.
*   `--report-xml`: Path to output JUnit XML.
*   `--report-json`: Path to output JSON summary.

### Result Types
The Go runner explicitly tracks implementation status using a `Status` type:
*   `StatusPass`: Test succeeded.
*   `StatusFail`: Test failed (mismatch or error).
*   `StatusSkip`: Test was explicitly skipped.
*   `StatusNotImplemented`: The Go SDK lacks the required feature [conformance/runner/go/main.go:48-53](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L48-L53).

### Dispatcher Mapping
The `main.go` file contains a suite of dispatch functions that map JSON vector inputs to `go-sdk` primitives:

| Function | Go SDK Entity |
| :--- | :--- |
| `dispatchSHA256` | `primhash.Sha256`, `primhash.Sha256d` [conformance/runner/go/main.go:200-223](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L200-L223) |
| `dispatchRIPEMD160` | `primhash.Ripemd160` [conformance/runner/go/main.go:226-243](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L226-L243) |
| `dispatchHMAC` | `primhash.Sha256hmac`, `primhash.Sha512hmac` [conformance/runner/go/main.go:271-301](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L271-L301) |
| `dispatchAESGCM` | `primaesgcm.Encrypt`, `primaesgcm.Decrypt` [conformance/runner/go/main.go:304-350](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L304-L350) |
| `dispatchBSM` | `gobsm.VerifyMessage`, `gobsm.SignMessage` [conformance/runner/go/main.go:577-620](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L577-L620) |

Title: Go Runner Entity Mapping
```mermaid
graph LR
  subgraph "Runner Logic"
    M["main.go"]
    VF["VectorFile Struct"]
    DS["Dispatchers"]
  end

  subgraph "Go SDK Imports"
    G1["github.com/bsv-blockchain/go-sdk/primitives/hash"]
    G2["github.com/bsv-blockchain/go-sdk/compat/bsm"]
    G3["github.com/bsv-blockchain/go-sdk/transaction"]
  end

  M -- "unmarshals" --> VF
  VF -- "passed to" --> DS
  DS -- "calls" --> G1
  DS -- "calls" --> G2
  DS -- "calls" --> G3
```
Sources: [conformance/runner/go/main.go:1-620](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L1-L620), [conformance/runner/go/go.mod:1-16](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/go.mod#L1-L16)

---

## Reporting & Dashboard

The conformance system produces standardized outputs to allow for cross-language comparison.

### JUnit XML Schema
Both runners generate JUnit-compatible XML, allowing integration with standard CI tools like GitHub Actions. The Go runner implements this via `JUnitSuites`, `JUnitSuite`, and `JUnitCase` structs [conformance/runner/go/main.go:65-94](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L65-L94).

### JSON Reports
In addition to XML, the runners generate JSON summaries used for the Grafana dashboard. These summaries include:
*   `pass_rate`: Percentage of passing vectors [specs/observability/conformance-dashboard.json:117](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/observability/conformance-dashboard.json#L117).
*   `total`/`passed`/`failed`/`skipped`: Raw counts [specs/observability/conformance-dashboard.json:160-164](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/observability/conformance-dashboard.json#L160-L164).

### Dashboard Script
The `conformance/runner/src/runner.js` script serves as a general-purpose utility for:
1.  **Validation**: Checking that vector files follow the required schema (requiring `id`, `input`, and `expected` fields) [conformance/runner/src/runner.js:80-117](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/src/runner.js#L80-L117).
2.  **Report Aggregation**: Combining results into the final output directory [conformance/runner/src/runner.js:29](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/src/runner.js#L29).

Title: Dashboard Integration
```mermaid
classDiagram
  class ConformanceDashboard {
    +PassRate Go
    +PassRate TS
    +VectorCounts
  }
  class JSON_API_Datasource {
    +ts-results.json
    +go-results.json
  }
  class RunnerScript {
    +validateFile()
    +toJUnit()
  }
  
  RunnerScript ..> JSON_API_Datasource : generates
  JSON_API_Datasource ..> ConformanceDashboard : populates
```
Sources: [conformance/runner/src/runner.js:132-173](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/src/runner.js#L132-L173), [specs/observability/conformance-dashboard.json:1-124](https://github.com/bsv-blockchain/ts-stack/blob/main/specs/observability/conformance-dashboard.json#L1-L124)

---

## CI Integration

The runners are executed as part of the GitHub Actions CI pipeline. 
*   The TypeScript runner is triggered via `pnpm test` in the `conformance/runner/ts` directory [conformance/runner/ts/package.json:6](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/package.json#L6).
*   The Go runner is executed using `go run main.go` with appropriate flags to point at the shared `conformance/vectors` directory [conformance/runner/go/main.go:9-15](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/go/main.go#L9-L15).

Failure in any conformance vector (that is not marked as `skip` or `intended` parity gap) results in a non-zero exit code, blocking the PR [conformance/runner/src/runner.js:12-15](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/src/runner.js#L12-L15).

Sources: [conformance/runner/package.json:7-11](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/package.json#L7-L11), [conformance/runner/ts/package.json:5-7](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/ts/package.json#L5-L7), [conformance/runner/src/runner.js:179-225](https://github.com/bsv-blockchain/ts-stack/blob/main/conformance/runner/src/runner.js#L179-L225)

---