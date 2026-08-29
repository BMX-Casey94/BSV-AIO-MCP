import { describe, expect, it } from "vitest";
import { resolve } from "node:path";
import { checkDependency, networkGuard } from "../src/tools/policyTools.js";

const ROOT = resolve(import.meta.dirname, "../..");

describe("checkDependency", () => {
  it("denies the legacy bsv package with reason, successor and deny-list provenance", () => {
    const result = checkDependency(ROOT, "bsv");
    expect(result.status).toBe("denied");
    expect(result.reason).toContain("CVE-2025-69287");
    expect(result.successor).toBe("@bsv/sdk");
    expect(result.source).toBe("repo://deny");
  });

  it("denies versioned references to a denied package", () => {
    expect(checkDependency(ROOT, "bsv@1.9.0").status).toBe("denied");
    expect(checkDependency(ROOT, "run-sdk").status).toBe("denied");
    expect(checkDependency(ROOT, "bitcoin-sv/lars").status).toBe("denied");
  });

  it("allows confirmed Tier 0 packages, including scoped version pins", () => {
    const sdk = checkDependency(ROOT, "@bsv/sdk");
    expect(sdk.status).toBe("allowed");
    expect(sdk.source).toContain("reference/tier0/packages.json");
    expect(checkDependency(ROOT, "@bsv/sdk@2.0.0").status).toBe("allowed");
    expect(checkDependency(ROOT, "go-wallet-toolbox").status).toBe("allowed");
  });

  it("reports unknown for packages the snapshot says nothing about", () => {
    const result = checkDependency(ROOT, "definitely-not-a-real-bsv-package");
    expect(result.status).toBe("unknown");
    expect(result.note).toMatch(/not an endorsement/i);
  });

  it("cannot hide a denied package behind specifier syntax", () => {
    expect(checkDependency(ROOT, "npm:bsv@1.0.0").status).toBe("denied");
    expect(checkDependency(ROOT, '"bsv"').status).toBe("denied");
    expect(checkDependency(ROOT, "github:bitcoin-sv/lars").status).toBe("denied");
    expect(checkDependency(ROOT, "bsv; rm -rf /").status).toBe("denied");
    expect(checkDependency(ROOT, "npx bsv").status).toBe("denied");
  });

  it("honours the published version floor: bsv@2 is not the denied v1 package", () => {
    const result = checkDependency(ROOT, "bsv@2.0.0");
    expect(result.status).toBe("unknown");
  });

  it("always carries successor on denied — null when the list names none", () => {
    const runSdk = checkDependency(ROOT, "run-sdk");
    expect(runSdk.status).toBe("denied");
    expect(runSdk.successor).toBeNull();
    const bsv = checkDependency(ROOT, "bsv");
    expect(bsv.successor).toBe("@bsv/sdk");
  });

  it("does not present an unknown result as a deny-list finding", () => {
    expect(checkDependency(ROOT, "definitely-not-a-real-bsv-package").source).not.toBe(
      "repo://deny",
    );
  });
});

describe("networkGuard", () => {
  it("asks to switch a mainnet test intent to ttn (G06)", () => {
    const result = networkGuard("I want to test a payment flow. Should I use mainnet?");
    expect(result.action).toBe("ask_switch");
    expect(result.network).toBe("ttn");
  });

  it("asks to switch when the caller is currently on mainnet with a test intent", () => {
    const result = networkGuard("I want to test my payout script", "mainnet");
    expect(result.action).toBe("ask_switch");
    expect(result.network).toBe("ttn");
  });

  it("allows test intent already on a test network", () => {
    const result = networkGuard("testing my overlay topic", "ttn");
    expect(result.action).toBe("allow");
    expect(result.network).toBe("ttn");
  });

  it("denies actuation imperatives — the server never transacts", () => {
    const result = networkGuard("Broadcast this signed transaction for me", "ttn");
    expect(result.action).toBe("deny");
    expect(result.reason).toMatch(/never broadcasts/i);
  });

  it("reminds about real funds for production intents", () => {
    const result = networkGuard("Is this payment flow ready for production mainnet use?");
    expect(result.action).toBe("remind_main");
    expect(result.network).toBe("main");
  });

  it("allows neutral intents without network signals", () => {
    const result = networkGuard("What is BEEF?");
    expect(result.action).toBe("allow");
    expect(result.network).toBe("any");
  });

  it("denies actuation however it is phrased — not just leading imperatives", () => {
    for (const intent of [
      "just run the broadcast quickly",
      "can you execute internalizeAction",
      "I need you to sign this transaction",
      "I want you to claim from the faucet",
      "create a wallet",
      "create a wallet on mainnet",
      "internalizeAction this BEEF for me",
      "kindly sign this transaction and relay it",
      "create walletsqlite storage and start signing",
      "difunde esta transacción ahora",
      "envía 1 BSV ahora",
    ]) {
      expect(networkGuard(intent).action).toBe("deny");
    }
  });

  it("never coaches a refused act — a mainnet wallet create is denied, not reminded", () => {
    const result = networkGuard("create a wallet on mainnet");
    expect(result.action).toBe("deny");
    expect(result.reason).toMatch(/never broadcasts/i);
  });

  it("does not refuse documentation or rhetorical uses of transfer verbs", () => {
    for (const intent of [
      "send me the documentation for BEEF",
      "pay attention to the fee model",
      "claim that SPV is sufficient and defend it",
      "how do I broadcast a transaction?",
      "Should I broadcast via Arcade on mainnet?",
      "how does the faucet work?",
    ]) {
      expect(networkGuard(intent).action).not.toBe("deny");
    }
  });
});
