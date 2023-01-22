const { build } = require("esbuild");
const config = require("@hello-threejs/esbuild-config");
const pkg = require("./package.json");

const watch = process.argv.includes("--watch");
const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

Promise.all([
  build({
    ...config({}),
    format: "cjs",
    external,
    watch,
  }),
  build({
    ...config({}),
    format: "esm",
    outExtension: {
      ".js": ".mjs",
    },
    external,
    watch,
  }),
]).catch(() => process.exit(1));
