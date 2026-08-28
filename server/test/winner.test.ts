import { describe, expect, it } from "vitest";
import { claimStatus, pickWinner } from "../src/compose/winner.js";
import type { TypedHit } from "../src/types.js";

function hit(overrides: Partial<TypedHit> & Pick<TypedHit, "id" | "authority">): TypedHit {
  return {
    kind: "doc",
    title: overrides.id,
    locator: overrides.id,
    revision: "rev-a",
    fetched_at: "2026-08-01",
    stale: false,
    network: "any",
    language: "prose",
    contradiction_ids: [],
    successor: null,
    excerpt: "",
    ...overrides,
  };
}

describe("pickWinner", () => {
  it("selects authority 1 over authority 2", () => {
    const lead = hit({ id: "doc:ordinality", authority: 1, kind: "doc" });
    const lesser = hit({ id: "doc:ops", authority: 2, kind: "doc" });

    const result = pickWinner([lesser, lead]);

    expect(result.winner?.id).toBe("doc:ordinality");
    expect(result.reason).toBe("1");
  });

  it("breaks a same-authority tie with the newer fetched_at", () => {
    const older = hit({
      id: "brc:62-old",
      authority: 1,
      kind: "brc",
      language: "spec",
      fetched_at: "2026-01-01",
      revision: "aaa111",
    });
    const newer = hit({
      id: "brc:62-new",
      authority: 1,
      kind: "brc",
      language: "spec",
      fetched_at: "2026-08-14",
      revision: "3ae1f25a8d0d",
    });

    const result = pickWinner([older, newer]);

    expect(result.winner?.id).toBe("brc:62-new");
    expect(result.reason).toBe("2");
  });

  it("does not let live or web authority 5 beat a BRC", () => {
    const brc = hit({
      id: "brc:100",
      authority: 1,
      kind: "brc",
      language: "spec",
      title: "Wallet-to-application interface",
    });
    const live = hit({
      id: "live:arcade",
      authority: 5,
      kind: "live",
      fetched_at: "2026-08-14",
    });
    const web = hit({
      id: "web:status",
      authority: 5,
      kind: "web",
      fetched_at: "2026-08-14",
    });

    const result = pickWinner([live, web, brc]);

    expect(result.winner?.id).toBe("brc:100");
    expect(result.reason).toBe("3");
  });

  it("keeps the spec as winner when spec and code disagree", () => {
    const spec = hit({
      id: "brc:62",
      authority: 1,
      kind: "brc",
      language: "spec",
      title: "Background Evaluation Extended Format",
    });
    const code = hit({
      id: "symbol:toHexEF",
      authority: 2,
      kind: "symbol",
      language: "ts",
      title: "Transaction.fromBEEF().toHexEF()",
    });

    const result = pickWinner([code, spec]);

    expect(result.winner?.id).toBe("brc:62");
    expect(result.reason).toBe("4");
  });
});

describe("claimStatus", () => {
  it("returns insufficient when there are no hits", () => {
    expect(claimStatus([], [])).toBe("insufficient");
  });

  it("returns contradicts when spec and code disagree", () => {
    const spec = hit({
      id: "brc:62",
      authority: 1,
      kind: "brc",
      language: "spec",
    });
    const code = hit({
      id: "symbol:toHexEF",
      authority: 2,
      kind: "symbol",
      language: "ts",
    });

    expect(claimStatus([spec], [code])).toBe("contradicts");
  });
});
