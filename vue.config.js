const path = require('path')
const resolve = filePath => path.join(__dirname, './', filePath)

module.exports = {
  outputDir: 'docs',
  publicPath: '/lan-vue-v3/',
  devServer: {
    port: 7777,
  },
  pages: {
    index: {
      entry: resolve('story/main.ts'),
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Lan-Vue-V3',
    },
  },
  chainWebpack: config => {
    config.plugins
      .delete('prefetch-idnex')
      .delete('preload-index')
    config.resolve.alias
      .set('src', resolve('src'))
      .set('story', resolve('story'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "src/style/global-import.scss";`,
      },
    },
  },
}
