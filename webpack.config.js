const webpack = require("webpack");
const path = require("path");
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
  module:{
      rules:[
          {test:/.js$/,use:['babel-loader']}
      ]
  }
//   optimization: {
//     minimize: false,
//   },
};
