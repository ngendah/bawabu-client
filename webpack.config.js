const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',
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
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader'},
      { test: /\.s?[ac]ss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
    ]
  },
  resolve:{
    extensions: ['.jsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  plugins:[new HWP({template: './src/index.html'})]
};
