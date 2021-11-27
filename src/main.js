import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/UI';

const app = createApp(App)
console.log(components , app);
components.forEach(component => {
    app.component(component.name, component)
})
    app.use(router)
    app.use(store)
app.mount('#app')
