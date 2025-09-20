import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import loadimage from './plugins/loadimage'

createApp(App)
.use(router)
.use(store)
.use(loadimage)
.mount('#app')