import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//导入pinia
import {createPinia} from 'pinia'
//执行方法得到实例
const pinia = createPinia()

//把pinia实例加入到app应用中
createApp(App).use(pinia).mount('#app')
