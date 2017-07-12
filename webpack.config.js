/**
 * Created by meathill on 2017/7/12.
 */

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    'injector': './injector.js',
    'receiver': './receiver.js',
    'middle': './middle.js'
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
    ]
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: /node_modules|css|styl/
  }
}