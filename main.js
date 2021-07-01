import Vue from 'vue'
import App from './App'
import ui from './ui'
import advertisement from './components/advertisement.vue'
Vue.component('advertisement',advertisement)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
