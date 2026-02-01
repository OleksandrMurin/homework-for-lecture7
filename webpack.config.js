const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config();

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    dotenv: true,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProd
        ? "assets/js/[name].[contenthash].js"
        : "assets/js/bundle.js",
      assetModuleFilename: "assets/media/[name].[hash][ext][query]",
      clean: true,
    },
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    module: {
      rules: [
        { test: /\.[jt]sx?$/, exclude: /node_modules/, use: "babel-loader" },
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        { test: /\.(png|jpe?g|gif|svg)$/i, type: "asset/resource" },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new ForkTsCheckerWebpackPlugin(),
      ...(isProd
        ? [
            new MiniCssExtractPlugin({
              filename: "assets/css/[name].[contenthash].css",
            }),
          ]
        : []),
      new webpack.EnvironmentPlugin({
        API_CHARACTERS_URL: "",
      }),
    ],
    optimization: {
      minimize: isProd,
      minimizer: ["...", new CssMinimizerPlugin(), new TerserPlugin()],
    },
    devtool: isProd ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
      static: { directory: path.resolve(__dirname, "public") },
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};
