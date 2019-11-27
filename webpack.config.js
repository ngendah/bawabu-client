const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: './dist',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  plugins:[new HWP({template: './src/index.html'})]
};
