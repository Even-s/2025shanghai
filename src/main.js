import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from '../i18n' // 匯入 i18n 設定

const app = createApp(App)

app.use(i18n) // 掛載 i18n
app.mount('#app')
