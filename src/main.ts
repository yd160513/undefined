import { createApp } from 'vue'
import './style.css'
import './assets/icon/iconfont.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index';

createApp(App).use(router).mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
