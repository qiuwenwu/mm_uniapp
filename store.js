import Vue from 'vue'
import Vuex from 'vuex'

import cart from './store/cart.js'
import user from './store/user.js'
import web from './store/web.js'
import lang from './store/lang.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		cart: cart,
		user: user,
		 web: web,
		lang: lang
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {}
});

export default store