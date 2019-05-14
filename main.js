import Vue from 'vue'
import App from './App'

import mm_vue from './plugins/mm_vue'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(mm_vue)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
