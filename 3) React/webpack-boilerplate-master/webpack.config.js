const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        loader: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
