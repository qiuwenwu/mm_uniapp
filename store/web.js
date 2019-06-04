import $ from '@/plugins/mm_sdk'

export default {
	state: {
		redirect_url: "/",
		rate: 0,
	},
	mutations: {
		// 设置回来
		set_web(state, data)
		{
			$.obj.push(state, data);
		}
	},
	actions: {
		
	},
	getters: {}
};