import { buildSync } from "esbuild";

buildSync({
  entryPoints: ["src/fetchAcademy.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "dist/fetch-academy.mjs",
  target: "node22",
  banner: {
    js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);',
  },
});
console.log("built dist/fetch-academy.mjs");
