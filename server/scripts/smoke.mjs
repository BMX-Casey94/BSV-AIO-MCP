import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * End-to-end smoke test: spawns the bundled server (dist/index.mjs) over stdio and
 * exercises the main tools against the real committed snapshots. Run from `server/`:
 *
 *   npm run build && npm run smoke
 *
 * Set CSW_SMOKE_QUESTION to override the default investigate question.
 */
const serverDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const root = resolve(serverDir, "..");
const question =
  process.env.CSW_SMOKE_QUESTION ?? "What is BEEF and which packages implement it?";

const transport = new StdioClientTransport({
  command: process.execPath,
  args: [join(serverDir, "dist", "index.mjs")],
  env: { ...process.env, CSW_ROOT: root },
  stderr: "inherit",
});
const client = new Client({ name: "csw-smoke", version: "0.1.0" });

function text(result) {
  const first = result.content?.[0];
  return first?.type === "text" ? first.text : JSON.stringify(result.content);
}
function json(result) {
  return JSON.parse(text(result));
}

let failures = 0;
function check(label, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

try {
  await client.connect(transport);

  const tools = await client.listTools();
  const names = tools.tools.map((t) => t.name).sort();
  console.log(`tools registered (${names.length}): ${names.join(", ")}`);
  for (const expected of [
    "investigate",
    "search_knowledge",
    "get_index_status",
    "inspect_schema",
    "error_taxonomy",
    "get_conformance_vector",
    "get_symbol",
    "find_references",
    "get_package_for_concept",
  ]) {
    check(`tool ${expected}`, names.includes(expected));
  }

  const status = json(await client.callTool({ name: "get_index_status", arguments: {} }));
  check("index status ready", status.status === "ready", `status=${status.status} sha=${status.sha}`);
  check("packages counted", status.counts?.packages === 5, `packages=${status.counts?.packages}`);

  const pkg = json(await client.callTool({ name: "investigate", arguments: { question } }));
  const hitIds = pkg.hits.map((h) => h.id);
  console.log(`investigate classified_as=${pkg.classified_as} hops=${pkg.hops_used} hits=${pkg.hits.length}`);
  check("G02 cites BRC-62", hitIds.includes("brc:62") || pkg.hits.some((h) => /BRC-62/i.test(h.title)));
  check("G02 cites a symbol hit", pkg.hits.some((h) => h.kind === "symbol"));
  check("G02 lead claim is authority 1", pkg.hits.some((h) => h.authority === 1));
  const hay = pkg.hits
    .filter((h) => h.kind === "symbol" || h.kind === "capability" || h.id.startsWith("package:"))
    .map((h) => [h.id, h.title, h.locator, h.excerpt].join(" "))
    .join("\n")
    .toLowerCase();
  check("G02 names @bsv/sdk", hay.includes("@bsv/sdk"));
  check("G02 names go-sdk", hay.includes("go-sdk"));

  const sym = json(
    await client.callTool({ name: "get_symbol", arguments: { repo: "bsv-blockchain/ts-sdk", name: "Beef" } }),
  );
  check("get_symbol Beef", sym.found === true && sym.package === "@bsv/sdk");

  const concept = json(await client.callTool({ name: "get_package_for_concept", arguments: { concept: "BEEF" } }));
  check(
    "get_package_for_concept BEEF",
    concept.brcs.includes("BRC-62") && concept.packages.includes("@bsv/sdk") && concept.packages.includes("go-sdk"),
    `brcs=${concept.brcs.join(",")}`,
  );
} catch (error) {
  console.error("smoke test errored:", error instanceof Error ? error.message : String(error));
  failures += 1;
} finally {
  await client.close().catch(() => {});
}

console.log(failures === 0 ? "\nSMOKE OK" : `\nSMOKE FAILED (${failures} checks)`);
process.exit(failures === 0 ? 0 : 1);
