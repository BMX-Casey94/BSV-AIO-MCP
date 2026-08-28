import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { investigate } from "../compose/investigate.js";
import type { KnowledgeStore } from "../store/knowledgeStore.js";

export function registerInvestigateTools(
  server: McpServer,
  root: string,
  store: KnowledgeStore,
): void {
  server.tool(
    "investigate",
    "Compose a read-only EvidencePackage from pinned snapshots. Declares live needs; never fetches HTTP or actuates.",
    {
      question: z.string().min(1).max(4096),
      context: z.string().min(1).max(4096).optional(),
    },
    async ({ question, context }) => {
      const result = investigate(root, store, question, context);
      return {
        content: [{ type: "text", text: JSON.stringify(result) }],
      };
    },
  );
}
