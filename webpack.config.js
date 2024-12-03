const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js",
  },
  resolve: {
    fallback: {
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      crypto: false,
      os: false,
      path: false,
    },
  },
};
