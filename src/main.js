import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js'
import UUID from 'vue-uuid';

const app = createApp(App)
app.use(router)
app.use(UUID)


app.mount('#app')
