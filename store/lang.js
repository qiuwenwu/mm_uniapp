import $ from '@/plugins/mm_sdk'

export default {
	// 状态
	state: {
		now: "chinese",
		dict: {
			"submit": "提交"
		}
	},
	// commit 设置本地参数
	mutations: {
		/// 设置语言字典
		/// state: 状态
		/// data: 传递的参数, 语言字典模型
		set(state, data) {
			$.obj.push(state, data);
			$.cookie('lang', data.now, 7200);
		}
	},
	// dispatch 从远程获取参数
	actions: {
		set_lang(store, lang) {
			var _this = this;
			$.http.get('/static/lang/' + lang + '.json', function(data, status) {
				if (data) {
					store.commit('set', {
						now: lang,
						dict: data
					});
				}
			});
		}
	}
}
