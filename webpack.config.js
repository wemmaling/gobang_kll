const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  entry: "./app/App.jsx",

  output: {
    path: path.resolve(__dirname, "build"), // string
    filename: "bundle.js", // string
    publicPath: "/", // string
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.styl$/,
        loader: "style!css!stylus"
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/node_modules")
        ],
        loader: "babel-loader",

        options: {
          plugins: ["transform-react-jsx"]
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },

  devtool: "source-map", // enum
  context: __dirname, // string (absolute path!)
  target: "web", // enum

  devServer: {
    contentBase: 'static',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/template.html',
    }),
  ],
}
