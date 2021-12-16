import { createApp } from 'vue'
import App from './App.vue'
import AgContainer from "./components/container";
import AgButton from './components/button'
import AgForm from './components/form'

createApp(App)
    .use(AgContainer)
    .use(AgButton)
    .use(AgForm)
    .mount('#app')
