export default {
	props: {
		// 回调函数
		func: {
			type: Object,
			default: function(fun, param1, param2) {
				return null
			}
		},
		// 显示方式
		display: {
			type: String,
			default: "1"
		},
		// 加载中
		loading: {
			type: Boolean,
			default: false
		},
		// 标题
		title: {
			type: String,
			default: ""
		},
		// 描述
		desc: {
			type: String,
			default: ""
		},
		// 对象
		obj: {
			type: Object,
			default: function() {
				return {}
			}
		},
	}
}
