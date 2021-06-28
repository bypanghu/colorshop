import Vue from 'vue'
import App from './App'
import ui from './ui'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
