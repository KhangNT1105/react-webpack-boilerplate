const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { DefinePlugin } = require("webpack");

const sharedPath = path.join(__dirname, "shared");
const appPath = path.join(__dirname, "src");
const stylesPath = path.join(__dirname, "src/styles");
const nodePath = "node_modules";
const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";
module.exports = {
  entry: [path.join(appPath, "index.tsx"), path.join(stylesPath, "index.scss")],
  resolve: {
    modules: [appPath, sharedPath, stylesPath, nodePath],
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ESLintPlugin({}),
    // global variables
    new DefinePlugin({
      IS_DEVELOPMENT,
    }),
    // copy folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./shared",
          to: "",
        },
      ],
    }),
    // bundle css
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/buildTemplate/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },

          {
            loader: "css-loader",
          },
          {
            // auto prefix css
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        loader: "file-loader",
        options: {
          name: "[hash].[ext]",
          outputPath: "images",
        },
      },
      {
        test: /\.(woff2?|fnt)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
        },
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "raw-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // performance: {
  //   maxEntrypointSize: 400000,
  //   maxAssetSize: 100000,
  // },
};
