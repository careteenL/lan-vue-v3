import { App } from 'vue'

import Button from './packages/button'
import Input from './packages/input'

const plugins = [
  Button,
  Input,
]

function install(app: App) {
  plugins.forEach(app.use)
}

export {
  Button,
  Input,
  install,
}

export default {
  install,
}
