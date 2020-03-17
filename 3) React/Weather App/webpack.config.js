const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.jsx?$/, use: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
