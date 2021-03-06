const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { DefinePlugin } = require('webpack')

const sharedPath = path.join(__dirname, 'shared')
const appPath = path.join(__dirname, 'src')
const stylesPath = path.join(__dirname, 'src/styles')
const nodePath = 'node_modules'
const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'
const dotenv = require('dotenv')
const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = {
  entry: [path.join(appPath, 'index.tsx'), path.join(stylesPath, 'index.scss')],
  resolve: {
    modules: [appPath, sharedPath, stylesPath, nodePath],
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ESLintPlugin({}),
    // global variables
    new DefinePlugin(envKeys),
    // copy folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './shared',
          to: '',
        },
      ],
    }),
    // bundle css
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/buildTemplate/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },

          {
            loader: 'css-loader',
            // options: { url: false, sourceMap: true },
          },
          {
            // auto prefix css
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'images',
        },
      },
      {
        test: /\.(woff2?|fnt|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: (url) => '../fonts/' + url,
        },
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: 'raw-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: 'glslify-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // performance: {
  //   maxEntrypointSize: 400000,
  //   maxAssetSize: 100000,
  // },
}
