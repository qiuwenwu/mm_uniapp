import Vue from 'vue'
import App from './App'

import store from './store'
import mm_vue from './plugins/mm_vue'
import mm_ui from './plugins/mm_ui'
import mm_component from './plugins/mm_component'

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.use(mm_vue)
Vue.use(mm_ui)
Vue.use(mm_component)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
