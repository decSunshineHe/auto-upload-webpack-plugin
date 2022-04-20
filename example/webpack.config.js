const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoUploadPlugin = require("../dist/index.cjs");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    fallback: {
      process: false,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process",
    }),
    new AutoUploadPlugin({
      host: "xxx.xxx.x.xx",
      username: "root",
      password: "123456",
      remotePath: "/home/",
    }),
    new HtmlWebpackPlugin(),
  ],
  devtool: "source-map",
  devServer: {
    port: 8080,
    open: true,
  },
};
