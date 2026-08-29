import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ServerConfig } from "../config.js";
import type {
  CheckDependencyResult,
  Network,
  NetworkGuardResult,
} from "../types.js";

type DenyListFile = {
  entries?: unknown;
};

type DenyEntry = {
  name?: unknown;
  reason?: unknown;
  successor?: unknown;
  match?: unknown;
};

type PackagesCard = {
  packages?: unknown;
};

/**
 * The read-only policy plane: `check_dependency` answers "may I use this package?" from the
 * committed deny list and the confirmed tier package cards; `network_guard` advises which network
 * an intent belongs on. Neither tool ever fetches, and neither can actuate — `network_guard`
 * only advises; the server has no actuate plane at all.
 */
export function registerPolicyTools(server: McpServer, config: ServerConfig): void {
  server.tool(
    "check_dependency",
    "Check a package name against the pinned deny list and the confirmed Tier 0/1 package cards. denied always carries the reason and successor; allowed means the package is confirmed in the pinned snapshot; unknown means the snapshot says nothing — absence is not endorsement. Reads committed cards only; never fetches.",
    {
      name: z.string().min(1).max(256),
    },
    async ({ name }) => {
      const result = checkDependency(config.root, name);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );

  server.tool(
    "network_guard",
    "Advise which BSV network an intent belongs on (main vs ttn/tstn test networks). Testing intents on mainnet get ask_switch to ttn; production intents get a real-funds reminder; actuation requests are denied — this server never actuates. Pure policy over the intent text; never fetches, never transacts.",
    {
      intent_text: z.string().min(1).max(2048),
      current_network: z.string().min(1).max(32).optional(),
    },
    async ({ intent_text, current_network }) => {
      const result = networkGuard(intent_text, current_network);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );
}

export function checkDependency(root: string, rawName: string): CheckDependencyResult {
  const spec = normalizePackageSpec(rawName);
  const name = spec.base;
  const denied = denyEntryFor(root, spec);
  if (denied) {
    const reason = stringField(denied.reason);
    // The denied contract always carries successor — null when the list names none.
    const successorRaw = stringField(denied.successor);
    return {
      name,
      status: "denied",
      ...(reason ? { reason } : {}),
      successor: successorRaw || null,
      source: "repo://deny",
    };
  }
  const tier = confirmedTierFor(root, name);
  if (tier) {
    return {
      name,
      status: "allowed",
      source: `reference/${tier}/packages.json#${name}`,
      note: `Confirmed ${tier === "tier0" ? "Tier 0" : "Tier 1"} package in the pinned snapshot.`,
    };
  }
  return {
    name,
    status: "unknown",
    source: "repo://snapshot",
    note: "Not on the deny list and not a confirmed package in the pinned snapshot. Absence from the deny list is not an endorsement; verify the package yourself before relying on it.",
  };
}

type PackageSpec = {
  /** The name matching happens on: prefixes, quotes, shell junk and version specifiers removed. */
  base: string;
  /** Version major when the caller pinned one (`bsv@2.0.0` → 2); undefined when unversioned. */
  major: number | undefined;
};

/**
 * Normalise anything a user might paste into a dependency check down to the name the cards use:
 * wrapping quotes, installer prefixes (`npm:`, `github:`, `git+`, `npx`), GitHub URLs, `.git`
 * suffixes, trailing shell text (`bsv; rm -rf /`), and version specifiers (`bsv@1.9.0` → `bsv`,
 * `@bsv/sdk@2.0.0` → `@bsv/sdk`). A denied package must not hide behind specifier syntax.
 */
function normalizePackageSpec(raw: string): PackageSpec {
  let name = raw.trim().replace(/^["']+|["']+$/g, "");
  name = name.replace(/^(?:npm|github|gitlab|bitbucket):/i, "");
  name = name.replace(/^git\+/i, "");
  name = name.replace(/^https?:\/\/(?:www\.)?github\.com\//i, "");
  name = name.replace(/^npx\s+/i, "");
  name = (name.split(/[\s;|&]+/)[0] ?? name).replace(/\.git$/i, "");
  const at = name.startsWith("@") ? name.indexOf("@", 1) : name.indexOf("@");
  if (at === -1) {
    return { base: name, major: undefined };
  }
  const major = /^(\d+)/.exec(name.slice(at + 1));
  return { base: name.slice(0, at), major: major ? Number(major[1]) : undefined };
}

function denyEntryFor(root: string, spec: PackageSpec): DenyEntry | undefined {
  const abs = join(root, "reference", "deny-list.json");
  if (!existsSync(abs)) {
    return undefined;
  }
  const raw = JSON.parse(readFileSync(abs, "utf8")) as DenyListFile;
  const entries = Array.isArray(raw.entries) ? (raw.entries as DenyEntry[]) : [];
  const needle = spec.base.toLowerCase();
  return entries.find((entry) => {
    if (stringField(entry.name).toLowerCase() !== needle) {
      return false;
    }
    // Honour a published version floor ("major < 2"): a versioned pin at or above the floor is
    // not denied by that entry. Unversioned names always match — the registry's latest is meant.
    const floor = /major\s*<\s*(\d+)/i.exec(stringField(entry.match));
    if (floor && spec.major !== undefined) {
      return spec.major < Number(floor[1]);
    }
    return true;
  });
}

function confirmedTierFor(root: string, name: string): "tier0" | "tier1" | undefined {
  for (const tier of ["tier0", "tier1"] as const) {
    const abs = join(root, "reference", tier, "packages.json");
    if (!existsSync(abs)) {
      continue;
    }
    const card = JSON.parse(readFileSync(abs, "utf8")) as PackagesCard;
    const names = Array.isArray(card.packages) ? card.packages : [];
    if (names.some((entry) => typeof entry === "string" && entry === name)) {
      return tier;
    }
  }
  return undefined;
}

const TEST_INTENT =
  /\b(test|tests|testing|testnet|ttn|teratestnet|tstn|faucet|experiment|experiments|try out|trying|prototype|sandbox|playground|demo|develop|development|staging|practice|learning|learn)\b/i;
const MAINNET_INTENT =
  /\b(mainnet|main net|production|prod|real (?:money|funds|payment|payments|coins?|bsv)|live funds?)\b/i;

// A question ABOUT an act is not a request to perform it: "how do I broadcast…", "should I
// claim…", "send me the documentation". Second-person phrasing ("can you broadcast…") IS a
// request and is deliberately absent from these patterns.
const QUESTION_ABOUT =
  /^(?:how|what|why|when|where|which|should i|can i|could i|is it|is this|is there|does|do i|are there|explain|tell me)\b/i;
const QUESTION_PHRASE = /\b(how (?:do|does|to|can)|what is|when should|should i)\b/i;
const DOCS_REQUEST = /\b(documentation|docs|guide|tutorial|examples?|reference)\b/i;

// Verbs that move value or keys. Strong verbs are actuation wherever they appear in a
// non-question; object-verbs (send/pay/claim/…) are actuation only with a value object present,
// so "send me the docs", "pay attention" and "claim that SPV…" stay benign. A minimal
// Spanish/French/German lexicon covers the common evasions.
const ACTUATE_STRONG =
  /\b(broadcast|broadcasting|relay|relaying|submit|submitting|sign|signs|signing|sweep|sweeping|withdraw|withdrawing|internalizeaction|difunde|difundir|firma|firmar|reclama|reclamar|diffuse|diffuser|signe|signer|signiere)\b/i;
const ACTUATE_WITH_OBJECT =
  /\b(send|sends|sending|pay|pays|paying|claim|claims|claiming|execute|executing|run|enviar|envía|envoie|envoyer|sende|senden)\b/i;
const TRANSFER_OBJECT =
  /\b(tx|transactions?|bsv|sats?|satoshis?|funds?|coins?|payments?|address|hex|beef|faucet|utxo|broadcast|internalizeaction)\b/i;
// Creating a wallet is actuation too — the server never creates keys.
const CREATE_WALLET = /\b(?:create|generate|spin up|set up|setup|make)\b[^.;\n]{0,40}\bwallet/i;

function isActuationRequest(intent: string): boolean {
  if (QUESTION_ABOUT.test(intent) || QUESTION_PHRASE.test(intent) || DOCS_REQUEST.test(intent)) {
    return false;
  }
  return (
    ACTUATE_STRONG.test(intent) ||
    CREATE_WALLET.test(intent) ||
    (ACTUATE_WITH_OBJECT.test(intent) && TRANSFER_OBJECT.test(intent))
  );
}

export function networkGuard(intentText: string, currentNetwork?: string): NetworkGuardResult {
  const intent = intentText.trim();
  const current = normalizeNetwork(currentNetwork);
  const testing = TEST_INTENT.test(intent);
  const mainnet = MAINNET_INTENT.test(intent);

  // An imperative to transact is an actuation request: this server has no actuate plane, so the
  // guard refuses rather than advising a network for something it cannot do. Refusal comes
  // first — "claim from the faucet" must never fall through to the test-intent branch.
  if (isActuationRequest(intent)) {
    return {
      action: "deny",
      network: current ?? "any",
      reason:
        "This is a read-only knowledge server: it never broadcasts, signs, claims, or creates wallets. Run the transaction from your own wallet or service — for anything experimental, use ttn (Teratestnet), not mainnet.",
    };
  }
  if (testing && (mainnet || current === "main")) {
    return {
      action: "ask_switch",
      network: "ttn",
      reason:
        "Testing does not belong on mainnet: switch to ttn (Teratestnet), where the faucet funds throwaway wallets and no real funds are at risk.",
    };
  }
  if (testing) {
    return {
      action: "allow",
      network: current && current !== "main" ? current : "ttn",
      reason:
        "Test intent on a test network is fine. ttn (Teratestnet) is the canonical BSV test network; keep mainnet out of test loops.",
    };
  }
  if (mainnet || current === "main") {
    return {
      action: "remind_main",
      network: "main",
      reason:
        "Mainnet moves real funds: confirm keys, fees, and broadcast configuration before transacting. This server only advises — it never actuates.",
    };
  }
  return {
    action: "allow",
    network: current ?? "any",
    reason: "No network-risk signals in the intent; nothing to switch or confirm.",
  };
}

function normalizeNetwork(value: string | undefined): Network | undefined {
  const raw = value?.trim().toLowerCase();
  if (!raw) {
    return undefined;
  }
  if (raw === "main" || raw === "mainnet") {
    return "main";
  }
  if (raw === "test" || raw === "testnet") {
    return "test";
  }
  if (raw === "ttn" || raw === "teratestnet") {
    return "ttn";
  }
  if (raw === "tstn") {
    return "tstn";
  }
  return undefined;
}

function stringField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}
