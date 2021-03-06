const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
  context: __dirname,
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.scss$/, 
      use: ["style-loader", //3. inject style in to the dom
       "css-loader",// Turn css in common js
        "sass-loader"] // Turns sass in to css
     },
    ],
  },
  plugins: [new HtmlWebpackPlugin( 
{
  template:"./src/template.html"
}
  )],
};
