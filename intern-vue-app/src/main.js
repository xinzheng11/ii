import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import hellovueVue from "./components/hellovue.vue";
import xxVue from "./components/xx.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
createApp(App).mount('#app')
app.use(ElementPlus)