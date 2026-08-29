export type Network = "any" | "main" | "test" | "ttn" | "tstn";

export type HitKind =
  | "brc"
  | "symbol"
  | "test"
  | "example"
  | "doc"
  | "essay"
  | "principle"
  | "wiki"
  | "web"
  | "live"
  | "contradiction"
  | "capability";

export type Language = "spec" | "ts" | "go" | "py" | "prose";

export type TypedHit = {
  id: string;
  kind: HitKind;
  authority: number;
  title: string;
  locator: string;
  revision: string;
  fetched_at: string;
  stale: boolean;
  network: Network;
  language: Language;
  contradiction_ids: string[];
  successor: string | null;
  excerpt: string;
};

/** Version-carrying formats keep the declared version, e.g. "openapi3.1" from `openapi: 3.1.0`. */
export type SchemaFormat =
  | `openapi${string}`
  | `asyncapi${string}`
  | "jsonschema"
  | "markdown"
  | "unknown";

export type InspectSchemaResult = {
  found: boolean;
  service: string;
  format?: SchemaFormat;
  path?: string;
  text?: string;
  truncated?: boolean;
};

export type ErrorTaxonomyCode = {
  code: string;
  status?: string;
  message?: string;
  interfaces?: string;
};

export type ErrorTaxonomyResult = {
  codes: ErrorTaxonomyCode[];
  sources: string[];
};

export type SymbolKind = "class" | "function" | "const" | "type" | "interface" | "enum" | "method";

export type SymbolRecord = {
  name: string;
  repo: string;
  package: string;
  language: Language;
  kind: SymbolKind | string;
  locator: string;
  exported: true;
  hit: TypedHit;
  id?: string;
  revision?: string;
  signature?: string;
};

export type GetSymbolResult = ({ found: true } & SymbolRecord) | { found: false };

export type ConformanceVectorResult = {
  found: boolean;
  domain: string;
  case: string;
  revision?: string;
  body?: unknown;
  hit?: TypedHit;
};

export type PackageForConceptResult = {
  concept: string;
  brcs: string[];
  packages: string[];
  hits: TypedHit[];
};

export type DependencyStatus = "allowed" | "denied" | "unknown";

export type CheckDependencyResult = {
  name: string;
  status: DependencyStatus;
  reason?: string;
  /** Always present on denied: the successor name, or null when the deny list names none. */
  successor?: string | null;
  /** Where the verdict came from: the deny list, a confirmed package card, or neither. */
  source: string;
  note?: string;
};

export type NetworkGuardAction = "ask_switch" | "allow" | "deny" | "remind_main";

export type NetworkGuardResult = {
  action: NetworkGuardAction;
  network: Network;
  reason: string;
};

export type IndexCounts = {
  brcs: number;
  essays: number;
  education: number;
  packages: number;
};

export type IndexStatus = {
  status: "ready" | "empty" | "stale";
  sha: string;
  brc_revision: string;
  fetched_at: string;
  counts: IndexCounts;
  policy_version: string;
};

export const POLICY_VERSION = "2026-08-14";

export type ClaimStatus = "supports" | "contradicts" | "insufficient";
export type Confidence = "high" | "medium" | "low";
export type ClassifiedAs =
  | "spec"
  | "implementation"
  | "design-why"
  | "live-ops"
  | "historical"
  | "actuate"
  | "mixed";
export type NeedKind = "arcade_status" | "faucet_health" | "woc_status" | "github_release";
export type ContradictionKind = "essay-essay" | "spec-code" | "ts-go" | "stale-rename";

export type EvidenceClaim = {
  text: string;
  support: string[];
  status: ClaimStatus;
  confidence?: Confidence;
};

export type EvidenceContradiction = {
  id?: string;
  kind: ContradictionKind;
  summary: string;
  winner?: string | null;
  reason?: string;
};

export type RecommendedNext = {
  tool?: string;
  reason?: string;
};

export type EvidencePackage = {
  question: string;
  classified_as?: ClassifiedAs;
  network: Network;
  hops_used?: number;
  index: IndexStatus;
  needs: NeedKind[];
  claims: EvidenceClaim[];
  hits: TypedHit[];
  gaps: string[];
  contradictions: EvidenceContradiction[];
  recommended_next: RecommendedNext[];
  answer_sketch?: string;
};
