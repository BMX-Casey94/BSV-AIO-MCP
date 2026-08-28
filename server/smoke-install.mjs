// Post-install smoke check: spawns the built server with NO BSV_AIO_ROOT and NO BSV_AIO_DB_PATH
// from a foreign cwd, proving the package-root corpus default and temp-dir DB path work the
// way an npx-installed copy would see them. Run from the repo root: node server/smoke-install.mjs
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = join(dirname(fileURLToPath(import.meta.url)), "dist", "index.mjs");

const server = spawn("node", [ENTRY], {
  stdio: ["pipe", "pipe", "inherit"],
  env: process.env, // deliberately without BSV_AIO_ROOT / BSV_AIO_DB_PATH
  cwd: process.env.TEMP ?? "C:/", // foreign cwd: the server must not depend on it
});

// MCP stdio framing is newline-delimited JSON-RPC (no Content-Length headers).
let buffer = "";
const pending = new Map();
let nextId = 1;

server.stdout.on("data", (chunk) => {
  buffer += chunk.toString("utf8");
  let idx;
  while ((idx = buffer.indexOf("\n")) >= 0) {
    const line = buffer.slice(0, idx).trim();
    buffer = buffer.slice(idx + 1);
    if (!line) continue;
    try {
      const msg = JSON.parse(line);
      if (msg.id !== undefined && pending.has(msg.id)) {
        pending.get(msg.id)(msg);
        pending.delete(msg.id);
      }
    } catch { /* ignore non-JSON lines */ }
  }
});

function call(method, params) {
  const id = nextId++;
  server.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
  return new Promise((resolve) => pending.set(id, resolve));
}

const timeout = setTimeout(() => {
  console.log("SMOKE FAIL: timed out waiting for the server");
  server.kill();
  process.exit(1);
}, 90000);

await call("initialize", {
  protocolVersion: "2024-11-05",
  capabilities: {},
  clientInfo: { name: "smoke-install", version: "0.0.0" },
});
server.stdin.write(JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }) + "\n");

const status = await call("tools/call", { name: "get_index_status", arguments: {} });
const statusText = status.result?.content?.[0]?.text ?? JSON.stringify(status);
const counts = JSON.parse(statusText);

const probe = await call("tools/call", {
  name: "investigate",
  arguments: { question: "Which BRC governs BEEF?" },
});
const probeText = probe.result?.content?.[0]?.text ?? JSON.stringify(probe);
const pkg = JSON.parse(probeText);

clearTimeout(timeout);
server.kill();

const lead = pkg.claims?.[0]?.support?.[0];
const ok =
  counts.counts?.brcs > 0 &&
  pkg.claims?.[0]?.status === "supports" &&
  pkg.claims?.[0]?.support?.includes("brc:62");

console.log(`index status: ${statusText.slice(0, 200)}`);
console.log(`investigate: claim=${pkg.claims?.[0]?.status} lead=${lead} confidence=${pkg.claims?.[0]?.confidence}`);
if (!ok) console.log(`raw investigate: ${probeText.slice(0, 400)}`);
console.log(ok ? "SMOKE PASS" : "SMOKE FAIL");
process.exit(ok ? 0 : 1);
