var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  /*
    entry: 'index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    },
  */
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
    filename: 'index.html',
  })],
  devtool: 'inline-source-maps',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  }
};