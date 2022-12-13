import { createApp } from 'vue'
import App from './App.vue'
import '../mock/index.js'
// import axios from 'axios'    


import './assets/main.css'

const app = createApp(App);


// app.config.globalProperties.$axios = axios;

app.mount('#app');
