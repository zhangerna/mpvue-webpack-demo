
const merge = require('webpack-merge');
const common = require('./webpack.baseH5.conf');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8088,
    hot: true,
    overlay: {
      errors: true
    },
    proxy: {}
  }
});
