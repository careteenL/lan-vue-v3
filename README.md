# Vue3.0组件库

## Usage

NPM
```shell
yarn add @careteen/lan-vue-v3
```

main.ts
```ts
import { createApp } from 'vue'
import App from './App.vue'

import LanVueV3 from '@careteen/lan-vue-v3' // +

const app = createApp(App)
app.use(LanVueV3) // +

app.mount('#app')
```

> [组件使用文档](https://careteenl.github.io/lan-vue-v3/)

## CHANGELOG

## 0.1.0

- 🎸  提供`Button`
- 🎸  提供`Input`

> [移步更多日志](./CHANGELOG.md)

## Example

- [更多示例](./example)
