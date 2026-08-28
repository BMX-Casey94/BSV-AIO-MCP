import type { ClaimStatus, TypedHit } from "../types.js";

export type WinnerPick = {
  winner: TypedHit | null;
  reason: string;
};

const LEGACY_MARKERS = ["bitcoin-sv/", "shoprag", "bitgenius"] as const;

export function pickWinner(hits: TypedHit[]): WinnerPick {
  const eligible = hits.filter((hit) => !neverWins(hit));
  if (eligible.length === 0) {
    return { winner: null, reason: hits.length > 0 ? "6" : "insufficient" };
  }

  const specs = eligible.filter(isSpec);
  const code = eligible.filter(isImplementation);
  const liveWeb = eligible.filter(isLiveWebOrInfra);
  const howSources = eligible.filter(isHowSource);
  const writings = eligible.filter(isWriting);

  if (specs.length > 0 && code.length > 0) {
    return { winner: bestOf(specs), reason: "4" };
  }

  if (specs.length > 0 && liveWeb.length > 0) {
    return { winner: bestOf(specs), reason: "3" };
  }

  if (writings.length > 0 && howSources.length > 0) {
    return { winner: bestOf(howSources), reason: "5" };
  }

  const winner = bestOf(eligible);
  const tied = eligible.filter((hit) => hit.authority === winner.authority);
  return { winner, reason: tied.length > 1 ? "2" : "1" };
}

export function claimStatus(supportHits: TypedHit[], opposingHits: TypedHit[]): ClaimStatus {
  const support = supportHits.filter((hit) => !neverWins(hit));
  const opposing = opposingHits.filter((hit) => !neverWins(hit));

  if (support.length === 0 && opposing.length === 0) {
    return "insufficient";
  }
  if (opposing.length > 0) {
    return "contradicts";
  }
  return "supports";
}

function neverWins(hit: TypedHit): boolean {
  if (hit.successor) {
    return true;
  }
  const haystack = `${hit.id} ${hit.locator} ${hit.title} ${hit.excerpt}`.toLowerCase();
  return LEGACY_MARKERS.some((marker) => haystack.includes(marker));
}

function isSpec(hit: TypedHit): boolean {
  return hit.kind === "brc" || hit.language === "spec";
}

function isImplementation(hit: TypedHit): boolean {
  return hit.kind === "symbol" || hit.kind === "test" || hit.language === "ts" || hit.language === "go" || hit.language === "py";
}

function isLiveWebOrInfra(hit: TypedHit): boolean {
  return hit.kind === "live" || hit.kind === "web" || hit.authority === 5;
}

function isWriting(hit: TypedHit): boolean {
  return hit.kind === "essay" || hit.kind === "principle" || hit.authority === 4;
}

function isHowSource(hit: TypedHit): boolean {
  return isSpec(hit) || isImplementation(hit) || hit.authority <= 2;
}

function bestOf(hits: TypedHit[]): TypedHit {
  const ranked = [...hits].sort(compareHits);
  const first = ranked[0];
  if (!first) {
    throw new Error("pickWinner requires at least one eligible hit");
  }
  return first;
}

function compareHits(a: TypedHit, b: TypedHit): number {
  if (a.authority !== b.authority) {
    return a.authority - b.authority;
  }
  const fetched = compareNewerFirst(a.fetched_at, b.fetched_at);
  if (fetched !== 0) {
    return fetched;
  }
  return compareNewerFirst(a.revision, b.revision);
}

function compareNewerFirst(left: string, right: string): number {
  const leftMs = Date.parse(left);
  const rightMs = Date.parse(right);
  if (!Number.isNaN(leftMs) && !Number.isNaN(rightMs) && leftMs !== rightMs) {
    return rightMs - leftMs;
  }
  return right.localeCompare(left);
}
