const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  mode: "development",
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    hot: true,
    port: 4000,
  },
  devtool: "source-map",
  target: "web",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@types": path.resolve(__dirname, "src/types"),
    },
    extensions: ["index.ts", ".ts", ".js"],
  },
  output: {
    filename: "index.[hash].js",
    path: path.resolve(__dirname, "public", "js"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/index.html")
    }),
    new MiniCssExtractPlugin(),
  ]
};
