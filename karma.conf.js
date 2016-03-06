'use strict';
const path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*_spec.jsx'
    ],
    plugins: ['karma-webpack', 'karma-mocha', /*'karma-opera-launcher', 'karma-chrome-launcher', 'karma-firefox-launcher',*/ 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['PhantomJS'/*, 'Firefox', 'Chrome', 'Opera'*/],
    preprocessors: {
      'test/**/*_spec.jsx': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage.json'
      }, {
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'text-summary'
      }]
    },
    webpack: {
      postcss: [require('autoprefixer')],
      module: {
        loaders: [{
          test: /\.jsx?/,
          loaders: ['babel']
        }, {
          test: /\.less/,
          loaders: ['style', 'css', 'postcss', 'less']
        }, {
          test: /\.css$/,
          loaders: ['style', 'css', 'postcss']
        }],
        preLoaders: [{
          test: /\.jsx?$/,
          include: [path.resolve('src/')],
          loader: 'isparta'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
