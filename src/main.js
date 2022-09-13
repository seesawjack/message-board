import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';
import { createPinia } from 'pinia';
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('base-dialog',BaseDialog)

app.mount('#app')
