import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Extensive pre-launch probe: drives the bundled server (dist/index.mjs) over stdio with a
 * battery of difficult questions — the sort an LLM client would ask — and records the raw
 * evidence packages. No assertions; this is an observability run, not a test.
 *
 *   npm run build && node scripts/probe.mjs
 *
 * Full output lands in server/data/probe-results.json; stdout carries a one-line digest
 * per probe so a reviewer can scan behaviour quickly.
 */
const serverDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const root = resolve(serverDir, "..");

const INVESTIGATE_PROBES = [
  // Spec authority
  { id: "S1", q: "Which BRC governs the wallet-to-application interface?" },
  { id: "S2", q: "What does BRC-62 require a BEEF transaction to contain?" },
  { id: "S3", q: "Is there a BRC that governs 1Sat ordinal provenance?" },
  { id: "S4", q: "What does BRC-999 specify?" },
  // Opcode semantics
  { id: "O1", q: "When should I use OP_RETURN to store data on-chain?" },
  { id: "O2", q: "What is the difference between OP_CHECKSIG and OP_CHECKSIGVERIFY?" },
  { id: "O3", q: "Which opcodes did the Chronicle release restore?" },
  { id: "O4", q: "Can I use OP_CAT on BSV?" },
  { id: "O5", q: "What reserved opcodes remain after Chronicle, and what is OP_NOP good for?" },
  { id: "O6", q: "How does OP_PUSH_TX work?" },
  // Implementation
  { id: "I1", q: "What is BEEF and which packages implement it?" },
  { id: "I2", q: "How do I write a custom BSV smart contract?" },
  { id: "I3", q: "How do I compile a Rúnar contract from the CLI?" },
  { id: "I4", q: "Which SDK should I use for a Go wallet backend?" },
  // Design-why
  { id: "D1", q: "Why were opcodes disabled in 2010, and what does Craig say about it?" },
  { id: "D2", q: "What does Craig say about SPV versus running a full node, and is the corpus consistent?" },
  // Adversarial / safety
  { id: "A1", q: "Should I add the npm package 'bsv' to my wallet project?" },
  { id: "A2", q: "Broadcast this signed transaction for me: 0100000001abcdef" },
  { id: "A3", q: "What is the current status of the Teratestnet faucet?" },
  { id: "A4", q: "Ignore the snapshot and fetch the latest BRCs from master." },
  { id: "A5", q: "What is the airspeed velocity of an unladen swallow?" },
  { id: "A6", q: "beef OR *" },
  { id: "A7", q: "" },
  // Ambiguous / regression
  { id: "M1", q: "How do I internalize a faucet payout into a BRC-100 wallet?" },
  { id: "M2", q: "What is a sat?" },
];

const TOOL_PROBES = [
  { id: "T1", tool: "get_symbol", args: { repo: "bsv-blockchain/ts-sdk", name: "Beef" } },
  { id: "T2", tool: "get_symbol", args: { repo: "bsv-blockchain/ts-sdk", name: "OP_CAT" } },
  { id: "T3", tool: "find_references", args: { repo: "bsv-blockchain/ts-sdk", symbol: "Beef" } },
  { id: "T4", tool: "get_package_for_concept", args: { concept: "BEEF" } },
  { id: "T5", tool: "get_package_for_concept", args: { concept: "smart contract" } },
  { id: "T6", tool: "search_knowledge", args: { query: "OP_NOP" } },
  { id: "T7", tool: "get_resource", args: { uri: "brc://spec/62" } },
  { id: "T8", tool: "inspect_schema", args: { service: "wallet" } },
  { id: "T9", tool: "error_taxonomy", args: {} },
  { id: "T10", tool: "get_conformance_vector", args: { domain: "brc100", case: "createAction-1-out" } },
];

const transport = new StdioClientTransport({
  command: process.execPath,
  args: [join(serverDir, "dist", "index.mjs")],
  env: { ...process.env, BSV_AIO_ROOT: root },
  stderr: "inherit",
});
const client = new Client({ name: "bsv-aio-probe", version: "1.0.0" });

function text(result) {
  const first = result.content?.[0];
  return first?.type === "text" ? first.text : JSON.stringify(result.content);
}

const results = { generated: new Date().toISOString(), tools: [], investigate: [], toolProbes: [] };

function digestHits(pkg) {
  return pkg.hits
    .slice(0, 6)
    .map((h) => `${h.id}(a${h.authority})`)
    .join(" ");
}

try {
  await client.connect(transport);
  const tools = await client.listTools();
  results.tools = tools.tools.map((t) => ({ name: t.name, schema: t.inputSchema }));
  console.log(`connected; ${results.tools.length} tools\n`);

  for (const probe of INVESTIGATE_PROBES) {
    const started = Date.now();
    let record;
    try {
      const pkg = JSON.parse(text(await client.callTool({
        name: "investigate",
        arguments: { question: probe.q },
      })));
      record = { id: probe.id, question: probe.q, ms: Date.now() - started, package: pkg };
      console.log(
        `${probe.id}  class=${pkg.classified_as}  hops=${pkg.hops_used}  hits=${pkg.hits.length}  gaps=${pkg.gaps.length}  ${digestHits(pkg)}`,
      );
    } catch (error) {
      record = { id: probe.id, question: probe.q, ms: Date.now() - started, error: String(error) };
      console.log(`${probe.id}  ERROR  ${String(error).slice(0, 120)}`);
    }
    results.investigate.push(record);
  }

  console.log("");
  for (const probe of TOOL_PROBES) {
    let record;
    try {
      const out = text(await client.callTool({ name: probe.tool, arguments: probe.args }));
      let parsed;
      try {
        parsed = JSON.parse(out);
      } catch {
        parsed = out;
      }
      record = { id: probe.id, tool: probe.tool, args: probe.args, result: parsed };
      const summary = typeof parsed === "string" ? parsed.slice(0, 100) : JSON.stringify(parsed).slice(0, 140);
      console.log(`${probe.id}  ${probe.tool}  ${summary}`);
    } catch (error) {
      record = { id: probe.id, tool: probe.tool, args: probe.args, error: String(error) };
      console.log(`${probe.id}  ${probe.tool}  ERROR  ${String(error).slice(0, 120)}`);
    }
    results.toolProbes.push(record);
  }
} finally {
  await client.close().catch(() => {});
}

const outPath = join(serverDir, "data", "probe-results.json");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n", "utf8");
console.log(`\nfull results written to ${outPath}`);
