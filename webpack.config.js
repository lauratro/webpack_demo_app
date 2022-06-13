const path = require("path");
module.exports = {
  context: __dirname,
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader","css-loader"] }], 
  },
};
