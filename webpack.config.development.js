const path = require("path");

const config = require("./webpack.config");

const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const webpack = require("webpack");
module.exports = merge(config, {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
  ],
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [],
  },
});
