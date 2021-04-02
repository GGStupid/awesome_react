const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
    ],
  },
  stats: {
    assets: true,
    assetsSort: "size",
    builtAt: true,
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "../src"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@common": path.resolve(__dirname, "../src/common"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@middlewares": path.resolve(__dirname, "../src/middlewares"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@router": path.resolve(__dirname, "../src/router"),
      "@services": path.resolve(__dirname, "../src/services"),
      "@store": path.resolve(__dirname, "../src/store"),
    },
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  devServer: {
    port: 8080,
    stats: "errors-only",
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3004",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "awesome react",
      template: "public/index.html",
    }),
  ],
};
