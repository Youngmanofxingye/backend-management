// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);  // 在 Vue 3 中使用路由
app.mount('#app');
