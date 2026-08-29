import { buildSync } from "esbuild";

buildSync({
  entryPoints: ["src/refresh-tier1.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "dist/refresh-tier1.mjs",
  target: "node22",
  banner: {
    js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);',
  },
});
console.log("built dist/refresh-tier1.mjs");
