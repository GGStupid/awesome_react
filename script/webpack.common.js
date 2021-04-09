const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      title: "awesome react",
      favicon: "public/favicon.ico",
      template: "public/index.html",
    }),
  ],
};
