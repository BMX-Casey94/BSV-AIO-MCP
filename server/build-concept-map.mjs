// Generates reference/patents/concept-map.md from patent_index.json + summaries/*.md and
// backfills concepts[] / by_concept in the manifest. Deterministic: full cards carry
// agent-assigned tags; catalogue-only (thin) cards are tagged by title/IPC rules below.
// Re-run after any summarisation pass. Usage: node build-concept-map.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const PATENTS = join(ROOT, "reference", "patents");
const INDEX_PATH = join(PATENTS, "patent_index.json");
const MAP_PATH = join(PATENTS, "concept-map.md");

const TODAY = new Date().toISOString().slice(0, 10);

// Canonical theme vocabulary, in display order. Descriptions feed the map's theme index.
const THEMES = [
  ["key-management", "Keys, wallets, threshold signing, seed and secret handling"],
  ["digital-signatures", "Signature schemes, signing protocols, verification of signatures"],
  ["cryptography-primitives", "Hashes, elliptic-curve constructions, proof systems, obfuscation"],
  ["privacy", "Confidentiality, anonymity, zero-knowledge and data-hiding techniques"],
  ["payments", "Payments, transfers, micropayments, fee and channel mechanics"],
  ["tokens", "Tokenisation, digital assets, exchanges and asset transfer"],
  ["smart-contracts", "Contract execution, logic gates, compilation to script, automation"],
  ["data-integrity", "Integrity proofs, attestation, tamper evidence, Merkle structures"],
  ["storage", "Registries, records, distributed storage and retrieval"],
  ["networking", "Node communication, propagation, peer and overlay networking"],
  ["messaging", "Messaging and communication protocols over blockchain transactions"],
  ["identity", "Identity, authentication and authorisation of parties"],
  ["certificates-credentials", "Certificates, credentials and attestation chains"],
  ["access-control", "Access control for devices, services and data"],
  ["iot", "Internet-of-things device control and telemetry"],
  ["mining-consensus", "Mining, consensus, proof-of-work, puzzles and rewards"],
  ["oracles", "External data feeds and oracle mechanisms"],
  ["voting", "Voting, ballots and governance mechanisms"],
  ["gaming", "Games, lotteries and chance-based applications"],
  ["genomics", "Genomic and biometric data applications"],
  ["physically-unclonable-functions", "PUFs and hardware-rooted identity"],
];
const THEME_SET = new Set(THEMES.map(([name]) => name));

// Title/IPC keyword rules for families whose cards are catalogue-only. First match wins per
// rule; a family collects at most three derived themes. Conservative by design: a thin card
// with no rule hit lands in "miscellaneous" rather than being force-tagged.
const RULES = [
  [/\b(key|keys|wallet|wallets|seed|threshold|secret shar|key shar|hierarchical determin|shared secret)/i, "key-management"],
  [/\b(signature|signing|signcryption|multi-?sig)/i, "digital-signatures"],
  [/\b(zero[- ]knowledge|homomorphic|oblivious|obfuscat|anonym|privacy|confidential)/i, "privacy"],
  [/\b(encrypt|cryptograph|cipher|elliptic|hash function|commitment scheme|knowledge proof|proving data|set shuffling|hash mask|encoding data)/i, "cryptography-primitives"],
  [/\b(payment|micropayment|transfer of (fund|value)|remitt|invoice|refund|double[- ]spend)/i, "payments"],
  [/\b(token|tokenis|digital asset|asset transfer|exchange|ownership)/i, "tokens"],
  [/\b(smart contract|contract|logic gate|turing|compil|high-level language|script (generat|creat)|automat|in-script|state machine)/i, "smart-contracts"],
  [/\b(integrity|tamper|attest|merkle|proof[- ]of[- ](existence|data|knowledge)|verif(y|ying|ication) of (data|a digital|integrity)|transaction verification|timestamp)/i, "data-integrity"],
  [/\b(registry|register|record(s|ing)?|storage|storing|archive|database|ledger)/i, "storage"],
  [/\b(propagat|routing|peer|overlay|network protocol|node(s)? (for|in) a|communication network|fault[- ]resist|multi-node)/i, "networking"],
  [/\b(messag|e-?mail|communication protocol|recipient of an electronic)/i, "messaging"],
  [/\b(identit|authenticat|authori[sz]ation of a (user|party)|certif(y|ying) (a |the )?(user|party|identity))/i, "identity"],
  [/\b(certificate|credential|attestation chain)/i, "certificates-credentials"],
  [/\b(access control|accessing|control of (a |an )?(device|resource)|permission|transferring (control|access)|secure (computing|environment))/i, "access-control"],
  [/\b(iot|internet of things|device|sensor|telemetry)/i, "iot"],
  [/\b(min(e|ing)|consensus|proof[- ]of[- ]work|puzzle|block reward|difficulty)/i, "mining-consensus"],
  [/\b(oracle|external data|data feed)/i, "oracles"],
  [/\b(vot(e|ing)|ballot|election|governance)/i, "voting"],
  [/\b(game|gaming|lottery|wager|bet)/i, "gaming"],
  [/\b(genom|dna|biometric|biolog)/i, "genomics"],
  [/\b(physically unclonable|\bpuf\b)/i, "physically-unclonable-functions"],
];

// IPC prefix hints, applied only when title rules found nothing. H04L9/ is split by subgroup —
// the bare class covers most of the corpus and would swamp cryptography-primitives.
const IPC_RULES = [
  [/^H04L ?9\/08/, "key-management"],
  [/^H04L ?9\/32/, "digital-signatures"],
  [/^H04L ?9\/(06|14|30)/, "cryptography-primitives"],
  [/^G06Q ?20\//, "payments"],
  [/^G06F ?21\//, "access-control"],
  [/^G06F ?1[67]\//, "storage"],
  [/^H04L ?(12|67|69)\//, "networking"],
  [/^H04W/, "iot"],
  [/^G07[CF]/, "gaming"],
  [/^G16B/, "genomics"],
  [/^G06F ?9\/(455|45)/, "smart-contracts"],
  [/^G06Q ?(30|40)/, "tokens"],
  [/^H04L ?12\/18/, "messaging"],
];

function parseCardConcepts(text) {
  const m = /^- Concepts: (.+)$/m.exec(text);
  if (!m) return [];
  const line = m[1].trim();
  if (line.startsWith("(untagged")) return [];
  return line
    .split(/[;,]/)
    .map((tag) => tag.trim().toLowerCase())
    .filter((tag) => THEME_SET.has(tag));
}

function deriveConcepts(row) {
  const found = [];
  for (const [re, theme] of RULES) {
    if (re.test(row.title) && !found.includes(theme)) found.push(theme);
    if (found.length === 3) return found;
  }
  if (found.length === 0) {
    for (const ipc of row.ipc ?? []) {
      for (const [re, theme] of IPC_RULES) {
        if (re.test(ipc) && !found.includes(theme)) found.push(theme);
        if (found.length === 2) return found;
      }
    }
  }
  return found.length > 0 ? found : ["miscellaneous"];
}

function firstSentence(text, section) {
  const re = new RegExp(`## ${section}\\r?\\n([^#][^\\n]*)`, "m");
  const m = re.exec(text);
  if (!m) return "";
  const para = m[1].trim();
  const dot = para.indexOf(". ");
  const sentence = dot === -1 ? para : para.slice(0, dot + 1);
  if (sentence.length <= 220) return sentence;
  const cut = sentence.slice(0, 220);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

function cardBrcRefs(text) {
  const refs = new Set();
  const relevance = /## BSV relevance\r?\n([\s\S]*?)(?=\r?\n## |$)/.exec(text)?.[1] ?? "";
  for (const m of relevance.matchAll(/\bBRC-(\d+)\b/g)) refs.add(`BRC-${m[1]}`);
  return [...refs].sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)));
}

const index = JSON.parse(readFileSync(INDEX_PATH, "utf8"));
const rows = index.families;

let taggedFromCards = 0;
let taggedByRules = 0;
for (const row of rows) {
  const cardPath = join(PATENTS, "summaries", `${row.family_key}.md`);
  const card = existsSync(cardPath) ? readFileSync(cardPath, "utf8") : "";
  const fromCard = card ? parseCardConcepts(card) : [];
  if (fromCard.length > 0) {
    row.concepts = fromCard;
    taggedFromCards += 1;
  } else {
    row.concepts = deriveConcepts(row);
    taggedByRules += 1;
  }
  row._card = card; // scratch, stripped before write
}

const byConcept = {};
for (const row of rows) {
  for (const concept of row.concepts) {
    byConcept[concept] = (byConcept[concept] ?? 0) + 1;
  }
}
index.by_concept = Object.fromEntries(Object.entries(byConcept).sort((a, b) => b[1] - a[1]));

// Compose the map. Families appear under every theme they carry; the theme index gives counts.
const fullCount = rows.filter((row) => row.text_status === "full").length;
const lines = [];
lines.push("# Patent prior-art concept map");
lines.push("");
lines.push(
  `Navigation layer over the ${rows.length} Wright-as-named-inventor patent families pinned in ` +
    `this corpus (${fullCount} with full specification text, ${rows.length - fullCount} catalogue-only). ` +
    `Priority dates span ${rows[0].priority_date} to ${rows[rows.length - 1].priority_date}. ` +
    `Each family has a summary card at \`patent://family/<KEY>\`; families with pinned full text ` +
    `also resolve \`patent://family/<KEY>/full\`.`,
);
lines.push("");
lines.push(
  "Licensing posture (verified " +
    TODAY +
    "): no verifiable BSV licensing programme covering any family was found; every card carries " +
    "the standing no-coverage-found advisory. This map routes to ideas, not to licence grants. " +
    "This is not legal advice.",
);
lines.push("");
lines.push("## Theme index");
lines.push("");
const themeNames = [...THEMES.map(([name]) => name), "miscellaneous"];
for (const name of themeNames) {
  const count = rows.filter((row) => row.concepts.includes(name)).length;
  if (count === 0) continue;
  const desc = THEMES.find(([n]) => n === name)?.[1] ?? "Families not matched by the theme rules";
  lines.push(`- **${name}** (${count}) — ${desc}`);
}
lines.push("");

for (const name of themeNames) {
  const members = rows.filter((row) => row.concepts.includes(name));
  if (members.length === 0) continue;
  lines.push(`## ${name}`);
  lines.push("");
  for (const row of members) {
    const hook =
      row.text_status === "full" && row._card
        ? firstSentence(row._card, "Core mechanism")
        : "";
    const brcs = row._card ? cardBrcRefs(row._card) : [];
    const textNote = row.text_status === "full" ? "full text pinned" : "catalogue only";
    const brcNote = brcs.length > 0 ? ` Related: ${brcs.join(", ")}.` : "";
    lines.push(
      `- **${row.family_key}** — ${row.title} (${row.priority_date.slice(0, 4)}; ${textNote}).` +
        (hook ? ` ${hook}` : "") +
        brcNote,
    );
  }
  lines.push("");
}

writeFileSync(MAP_PATH, lines.join("\n"), "utf8");

for (const row of rows) delete row._card;
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + "\n", "utf8");

console.log(`concept-map.md written: ${rows.length} families, ${themeNames.length - 1 + 1} themes`);
console.log(`concepts: ${taggedFromCards} from cards, ${taggedByRules} derived from title/IPC rules`);
console.log(`by_concept: ${JSON.stringify(index.by_concept)}`);
