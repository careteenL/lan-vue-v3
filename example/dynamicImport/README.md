# dynamicImport

## Usage
```shell
yarn install
yarn start
```

## Important

为了支持按需引入，需要做如下配置

`babel.config.js`
```js
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
```

`vue.config.js`
```js
css: {
  loaderOptions: {
    sass: {
      prependData: `@import "@careteen/lan-vue-v3/src/style/global-import.scss";`,
    },
  },
},
```

使用时`main.ts`

```ts
import { Button } from '@careteen/lan-vue-v3'
app.use(Button)
```
