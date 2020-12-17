module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@careteen/lan-vue-v3/src/style/global-import.scss";`,
      },
    },
  },
}