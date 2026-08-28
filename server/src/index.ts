import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { defaultConfig } from "./config.js";
import { createServer } from "./server.js";

// The bundled entry point lives at server/dist/index.mjs, so the package root is two levels
// up. Defaulting there (not cwd) means an npx-installed copy finds its shipped corpus no
// matter which directory the host client was launched from. CSW_ROOT overrides for development.
const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const root = process.env.CSW_ROOT ?? PACKAGE_ROOT;
const server = createServer(defaultConfig(root));
const transport = new StdioServerTransport();
await server.connect(transport);
