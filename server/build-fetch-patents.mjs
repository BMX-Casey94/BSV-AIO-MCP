import { buildSync } from "esbuild";

buildSync({
  entryPoints: ["src/fetchPatents.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "dist/fetch-patents.mjs",
  target: "node22",
  banner: {
    js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);',
  },
});
console.log("built dist/fetch-patents.mjs");
