const user = {
	state: {
		isLoad: false,
		username: "qiuwenwu",
		name: "邱文武",
		nickName: "命天子",
		group_user: [],
		group_admin: [],
		token: "",
		gm: 1,
		vip: 5
	},
	mutations: {
		/// 设置用户信息
		/// state: 状态
		/// data: 传递的参数, 用户信息模型
		set(state, data) {
			$.obj.push(state, data);
			if (data.token) {
				$.cookie("token", data.token);
			} else {
				$.cookie("token", "");
				$.cookie("token", "", "; domain=localhost");
			}
		}
	},
	actions: {},
	getters: {}
};

export default user;
