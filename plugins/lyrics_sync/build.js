const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["deps_entry.js"],
  bundle: true,
  outfile: "lyrics_sync/bundled_deps.js",
  platform: "node",
  minify: true,
  target: "node16",
}).catch(() => process.exit(1));