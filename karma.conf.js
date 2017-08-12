var webpackConfig = require('./webpack.dev.js');
var variables = require('./variables');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: variables.karma_files,
    preprocessors: {
      './**/*.test.js': variables.karma_preprocessors
    },
    webpack: webpackConfig,
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: variables.karma_coverage_dir
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: variables.karma_browsers,
    singleRun: true,
    concurrency: Infinity,
    webpackMiddleware: {
      noInfo: true
    },
  });
};
