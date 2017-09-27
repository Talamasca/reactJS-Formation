var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {test: /\.js$/, use: /node_modules/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
  ]
};
