import { createApp } from 'vue'
import App from './App.vue'

import LanVueV3 from 'src'

const app = createApp(App)
app.use(LanVueV3)

app.mount('#app')
