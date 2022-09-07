import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js'
import store from './store/index.js'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(createPinia())

app.mount('#app')
