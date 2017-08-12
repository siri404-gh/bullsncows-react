module.exports = {
  entry: './index.js',
  dist: './.dist',
  prod: './.prod',
  bundle: 'bundle.js',
  port: process.env.PORT || 5000,
  devPort: 4000,
  devPublicPath: '/',
  prodPublicPath: '/',
  karma_files:['./src/**/*.test.js'],
  karma_preprocessors: ['webpack'],
  karma_browsers: ['PhantomJS'],
  karma_coverage_dir: '.coverage/'
};
