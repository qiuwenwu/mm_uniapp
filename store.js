import Vue from 'vue'
import Vuex from 'vuex'

import shop from './store/shop.js'
import user from './store/user.js'
import web from './store/web.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		shop, user, web
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {}
})
export default store