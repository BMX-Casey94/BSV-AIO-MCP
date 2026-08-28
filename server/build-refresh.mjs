import { buildSync } from "esbuild";

buildSync({
  entryPoints: ["src/refresh.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "dist/refresh.mjs",
  target: "node22",
  banner: {
    js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);',
  },
});
console.log("built dist/refresh.mjs");
