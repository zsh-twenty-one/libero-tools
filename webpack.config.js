const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
/**
 * @type webpack.configuration
 */
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "lib"),
    library: "libero-tools",
    libraryTarget: "umd",
  },
  module: {
    rules: [{ test: /.js$/, use: ["babel-loader"] }],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "index.d.ts"),
        },
      ],
    }),
  ],
};
