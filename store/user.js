import $ from '@/plugins/mm_sdk';

export default {
	state: {
		// isLoad: false,
		// username: "qiuwenwu",
		// name: "邱文武",
		// nickName: "命天子",
		// group_user: [],
		// group_admin: [],
		token: "",
		// gm: 1,
		// vip: 5
		name: "",
		level: 0,
		isLoad: false,
		userId: 0,
		phone: "",
		loginRecords: [],
		email: "",
		avatar: "",
		nickname: "",
		state: 0,
		assets: {
			"userId": 0,
			"dbd": 0.0,
			"inactivated": 0.0,
			"dbdFreeze": 0.0,
			"dbdFulfill": 0.0,
			"dbdFlows": [],
			"bitBalance": "0E-8",
			"miningFlows": [],
			"bitFreeze": "0E-8",
			"time": "2019-06-22 15:08:37"
		},
		achievement: {
			"userId": 0,
			"oneHuman": 0,
			"twoHuman": 0,
			"oneSales": 0.0,
			"twoSales": 0.0,
			"oneInterest": "0E-8",
			"twoInterest": "0E-8",
			"canExtractMoney": "0E-8",
			"frostMoney": "0E-8",
			"alreadyExtractMoney": "0E-8",
			"achievementFlows": []
		},
		userPapers: [],
		registerTime: "2019-06-22 15:08:37",
		roles: []
	},
	mutations: {
		/// 设置用户信息
		/// state: 状态
		/// data: 传递的参数, 用户信息模型
		set_user(state, data) {
			if (data.userId) {
				data.isLoad = true;
			}
			$.obj.push(state, data);
		},
		logout(state, data) {
			$.obj.clear(state);
			$.db.del("token");
		}
	},
	actions: {
		// 设置用户信息
		set_user(context, user_info) {
			context.commit('set_user', user_info)
		},
		logout(context) {
			context.commit('logout')
		}
	},
	getters: {}
};
