// next.config.js

// const withTypescript = require('@zeit/next-typescript')
module.exports = {
  srcDir: 'src/',
  distDir: 'build',
  pageExtensions: ['jsx', 'js','tsx','ts'],
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(j|t)sx?$/,
  //     use: 'ts-loader'
  //   })
  //   return config
  // }
}