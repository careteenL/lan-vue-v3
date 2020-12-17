import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import { Button } from '@careteen/lan-vue-v3'
// import '@careteen/lan-vue-v3/dist/index.css'

createApp(App).use(store).use(Button).mount('#app')
