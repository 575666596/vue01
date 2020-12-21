import {
    createApp
} from 'vue'
import App from './App.vue'
// 全局绑定 Axios，Axios||axios 都可以，名字应该是自定义的，建议全局绑定的属性首字母大写？？
import Axios from 'axios'


// 全局绑定storage
import Storage from './modules/storage'
// 全局绑定storage
import fetchJsonp from 'fetch-jsonp'

// 原來的代码
// createApp(App).mount('#app')

// 修改后的代码
const app = createApp(App)
// 全局配置axios，页面中通过this.Axios访问
app.config.globalProperties.Axios = Axios

app.config.globalProperties.Storage = Storage
app.config.globalProperties.fetchJsonp = fetchJsonp

app.mount('#app')