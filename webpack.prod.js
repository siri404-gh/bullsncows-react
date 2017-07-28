const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const variables = require('./variables');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, variables.prod),
    filename: '[name].bundle.js',
    publicPath: variables.prodPublicPath,
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
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
