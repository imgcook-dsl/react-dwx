const path = require("path");

module.exports = {
  watch: false,
  entry: "./src/core/index.js",
  output: {
    path: path.resolve(__dirname, "./src"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
};
