const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] }
    ]
  },
  plugins:[new HWP({template: './src/index.html'})]
};
