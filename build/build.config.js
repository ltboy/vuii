/**
 * 这里用来打包 ui组件
 */
'use strict'
const baseConfig = require('./base.config')

baseConfig.entry = {
  vuii: './src/index.js'
}

baseConfig.mode = 'production'

baseConfig.output = {
  filename: './lib/[name].js',
  library: 'vuii',
  libraryTarget: 'umd'
}

baseConfig.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}

module.exports = baseConfig
