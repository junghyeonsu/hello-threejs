const config = ({ entryPoints = ["./src/index.ts"], server, ...options }) => ({
  ...options,
  entryPoints,
  outdir: "dist",
  target: server ? "node16" : "es2015",
  platform: "node",
  bundle: true,
  minify: false,
  sourcemap: true,
});

module.exports = config;
