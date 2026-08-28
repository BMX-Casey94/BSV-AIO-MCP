import { copyFileSync } from "node:fs";
import { buildSync } from "esbuild";

// The MCP stdio entry point. Node's --experimental-strip-types no longer remaps ".js"
// specifiers to ".ts" files (Node 25), so the server ships as a bundled ESM file.
buildSync({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "dist/index.mjs",
  target: "node22",
  banner: {
    js: '#!/usr/bin/env node\nimport { createRequire } from "module"; const require = createRequire(import.meta.url);',
  },
});
// db.ts locates schema.sql next to its own module, which is dist/ after bundling.
copyFileSync("src/store/schema.sql", "dist/schema.sql");
console.log("built dist/index.mjs");
