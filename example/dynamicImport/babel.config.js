module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      {
        "libraryName": "@careteen/lan-vue-v3",
        "customName": (name) => {
          return `@careteen/lan-vue-v3/src/packages/${name}/index.ts`;
        },
      },
    ],
  ],
}