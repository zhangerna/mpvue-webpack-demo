const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('../configH5');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.PLATFORM = "h5";

module.exports = {
  entry: {
    app: './src/mainH5.js'
  },
  output: {
    path: path.resolve(__dirname, '../distH5'),
    filename: 'js/[name].[hash].js',
    publicPath: process.env.NODE_ENV == 'development' ? config.dev.publicPath : config.build.publicPath
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 5 * 1024,
            outputPath: "images"
          }
        }]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  externals:{
    'AMap': 'AMap'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'mpvue': process.env.PLATFORM,
      'mpvuePlatform': process.env.PLATFORM
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin(),
    new ExtractTextPlugin({filename: 'css/[name].css'}),
  ]
};
