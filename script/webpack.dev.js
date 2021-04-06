const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 7000,
    stats: "errors-only",
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3004",
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
