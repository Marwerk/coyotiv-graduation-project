import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAccountStore } from '@/stores/accountStore'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

const accountStore = useAccountStore()
await accountStore.fetchUser()


app.use(router)

app.mount('#app')
