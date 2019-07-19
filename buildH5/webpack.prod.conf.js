const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.baseH5.conf');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minSize: 20000,
      cacheGroups: {
        vendor : {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor'
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minmize: true
    })
  ]
});
