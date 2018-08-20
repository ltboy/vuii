/**
 * 这里用来打包 ui组件
 */
'use strict'
const webpackCleanPlugin = require('clean-webpack-plugin')
const path = require('path')
const baseConfig = require('./base.config')

baseConfig.entry = {
  vuii: './src/index.js'
}

baseConfig.mode = 'production'

baseConfig.output = {
  filename: './lib/[name].js',
  library: 'vuii',
  libraryTarget: 'umd',
  path: path.resolve(__dirname, '../')
}

baseConfig.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}
baseConfig.plugins.push(new webpackCleanPlugin('lib', {
  root: '../lib',
  dry: false
}))
module.exports = baseConfig