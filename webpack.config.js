const path = require("path");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { ESBuildPlugin, ESBuildMinifyPlugin } = require("esbuild-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

/** @type {webpack.Configuration} */
const config = {
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    path: path.resolve("./public"),
    filename: "static/[name].js",
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({ target: "es2015" }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new ESBuildPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ title: "Astro Sign", filename: "index.html" }),
  ],
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".ts", ".js", ".mjs", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
          },
        },
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
};

module.exports = config;
