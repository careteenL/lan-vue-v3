import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import LanVueV3 from '@careteen/lan-vue-v3'
import '@careteen/lan-vue-v3/dist/index.css'

createApp(App).use(store).use(LanVueV3).mount('#app')
