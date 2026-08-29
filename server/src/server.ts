import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ServerConfig } from "./config.js";
import { ingestSnapshots } from "./ingest/snapshotIngest.js";
import { openDatabase, openDatabaseReadonly } from "./store/db.js";
import { createKnowledgeStore, type KnowledgeStore } from "./store/knowledgeStore.js";
import { registerCodeTools } from "./tools/codeTools.js";
import { registerInvestigateTools } from "./tools/investigateTools.js";
import { registerKnowledgeTools } from "./tools/knowledgeTools.js";
import { registerPolicyTools } from "./tools/policyTools.js";
import { buildIndexStatus } from "./tools/statusTools.js";

export type CreatedServer = {
  server: McpServer;
  store: KnowledgeStore;
};

export function createServer(config: ServerConfig): McpServer {
  return createServerWithStore(config).server;
}

export function createServerWithStore(config: ServerConfig): CreatedServer {
  const ingestDb = openDatabase(config.dbPath);
  let store = createKnowledgeStore(ingestDb);
  ingestSnapshots(config.root, store, { tier0Root: config.tier0Root, tier1Root: config.tier1Root });

  // Serve queries from a read-only handle: no tool ever writes, so the query path should be
  // physically unable to. In-memory stores (tests) keep their ingest handle.
  if (config.dbPath !== ":memory:") {
    try {
      const readonlyDb = openDatabaseReadonly(config.dbPath);
      ingestDb.close();
      store = createKnowledgeStore(readonlyDb);
    } catch {
      // Defence-in-depth only — fall back to the read-write ingest handle rather than fail startup.
    }
  }

  const server = new McpServer({
    name: "bsv-aio-mcp",
    version: "1.1.0",
  });

  server.tool(
    "get_index_status",
    "Return the pinned snapshot status for this knowledge index. Callers must read this pin before trusting any hit.",
    async () => {
      const status = buildIndexStatus(config.root, store);
      return {
        content: [{ type: "text", text: JSON.stringify(status) }],
      };
    },
  );

  registerKnowledgeTools(server, config, store);
  registerInvestigateTools(server, config.root, store);
  registerCodeTools(server, config, store);
  registerPolicyTools(server, config);

  return { server, store };
}
