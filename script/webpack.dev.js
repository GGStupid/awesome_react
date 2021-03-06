const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3001,
    stats: "errors-only",
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3004",
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
