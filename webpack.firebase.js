const webpack = require('webpack');
const path = require('path');
const CommonConfig = require('./webpack.common.js');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const variables = require('./variables');

module.exports = Merge(CommonConfig, {
  entry: {
    app: [variables.entry],
  },
  output: {
    path: path.resolve(__dirname, variables.dist),
    filename: '[name].bundle.js',
    publicPath: variables.devPublicPath,
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Bulls & Cows',
      template: 'index.ejs'
    }),
    new ManifestPlugin({
      fileName: '.manifest.json',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true
      },
      parallel: {
        cache: true,
        workers: 2 // for e.g
      },
      comments: false
    })
  ]
});