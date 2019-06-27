import $ from '@/plugins/mm_sdk'

export default {
	state: {
		content: "",
		description: "",
		title: "",
		icon:"",
		amount: 0,
		price: "",
		cyclex: 0
	},
	mutations: {
		// 取DBD信息
		get_dbd(state, data) {
			$.obj.push(state, data);
		}
	},
	actions: {
		get_dbd(store, data) {
			store.commit('get_dbd', data)
		}
	},
	getters: {

	}
};
