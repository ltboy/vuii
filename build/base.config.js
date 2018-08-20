'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const utils = require('./utils.js')

module.exports = {
  entry: {
    vuii: './examples/src/index.js'
  },
  output: {
    chunkFilename: '[id].[hash].js',
    filename: '[name].min.[hash].js',
    path: utils.resolve('examples/dist'),
    publicPath: '/'
  },
  // 路径相关
  resolve: {
    // 别名
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': utils.resolve('src'),
      packages: utils.resolve('packages'),
      lib: utils.resolve('lib'),
      components: utils.resolve('examples/src/components')
    },
    // 扩展 后缀名 (尽量少)
    extensions: ['.js', '.vue', '.css'],
    modules: ['node_modules'],
    mainFiles: ['index']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [utils.resolve('src'), utils.resolve('examples')],
        exclude: ['node_modules']
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name][hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
