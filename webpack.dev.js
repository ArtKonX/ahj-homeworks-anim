const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {

  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    port: 9000,
    historyApiFallback: true,
    open: true,
    compress: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
