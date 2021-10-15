const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: ["./src"],
      alias: {
        "@utils": "./src/utils",
        "@enums": "./src/enums",
        "@hooks": "./src/hooks",
      },
    },
  ],
];

module.exports = {
  presets: [
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins,
};
