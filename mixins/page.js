export default {
	data() {
		var password_check = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				if (this.form.password !== '') {
					this.$refs.form.validateField('password_check');
				}
				callback();
			}
		};

		var password_confirm_check = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.form.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};

		return {
			// 标签
			label: "",
			// 增加地址
			url_add: "",
			// 删除地址
			url_del: "",
			// 修改地址
			url_set: "",
			// 查询地址
			url_get: "",
			// 链接
			url: "",
			// 显示方式
			display: "",
			// 加载中
			loading: false,
			// 当前索引
			index: 0,
			// 列数
			col: 4,
			// 对象
			obj: {},
			// 列表
			list: [],
			// 视图模型
			vm: {},
			// 页数
			page: 1,
			// 总计
			count: 0,
			// 显示隐藏
			show: 0,
			// 验证模型
			check_model: {},
			// 允许访问用户组
			group: [],
			// 身份验证
			oauth: false,
			// 重定向
			redirect: "/signIn",
			// 状态组
			states: [],
			// 主键字段
			field: "id",
			// 查询
			query: {
				// 				id: "",
				// 				// 页面
				// 				page: 1,
				// 				// 大小
				// 				size: 10,
				// 				// 状态
				// 				state: 0
			},
			config: {
				// 唯一主键
				id: "",
				// 页面
				page: 1,
				// 大小
				size: 10
			},
			// 表单
			form: {},
			rules: {
				account: [{
					min: 6,
					max: 26,
					message: '长度在 6 到 26 个字符',
					trigger: 'blur'
				}],
				email: [{
					min: 6,
					max: 26,
					message: '长度在 6 到 26 个字符',
					trigger: 'blur'
				}],
				phone: [{
					min: 11,
					max: 11,
					message: '长度在 11 个字符',
					trigger: 'blur'
				}],
				name: [{
						required: true,
						message: '请输入名称',
						trigger: 'blur'
					},
					{
						min: 2,
						max: 8,
						message: '长度在 2 到 8 个字符',
						trigger: 'blur'
					}
				],
				coin_address: [{
						required: true,
						message: '请输入收币地址',
						trigger: 'blur'
					},
					{
						min: 30,
						max: 35,
						message: '长度在 30 到 35 个字符',
						trigger: 'blur'
					}
				],
				date_min: [{
					type: 'date',
					required: true,
					message: '请选择日期',
					trigger: 'change'
				}],
				date_max: [{
					type: 'date',
					required: true,
					message: '请选择时间',
					trigger: 'change'
				}],
				password: [{
						min: 6,
						max: 11,
						message: '长度在 6 到 11 个字符',
						trigger: 'blur'
					},
					{
						validator: password_check,
						trigger: 'blur'
					}
				],
				password_confirm: [{
					validator: password_confirm_check,
					trigger: 'blur'
				}]
			}
		}
	},
	methods: {
		// 添加
		add(val) {

		},

		// 添加一条
		add_one(obj) {

		},

		// 添加多条
		add_list(obj) {

		},

		// 删
		del(query) {

		},

		// 删
		del_one(query) {

		},

		// 删
		del_list(query) {

		},

		// 修改
		set(query, val) {

		},

		// 修改一条
		set_one(query, obj) {

		},

		// 修改多条
		set_list(query, arr) {

		},

		// 查
		get(query) {
			this.get_list();
		},

		// 查一条
		get_one(query) {

		},

		// 查列表
		get_list(query) {

		},

		/// 导入
		import(file) {

		},

		/// 导出
		export (file, query) {

		},

		/// 回调函数
		/// fun: 函数名
		/// param1: 参数1
		/// param2: 参数2
		/// param3: 参数3
		/// 返回: 任意类型
		func(fun, param1, param2, param3) {
			return null;
		},

		/// 设置状态
		/// id: 状态ID
		set_state(id) {

		},

		/// 重置
		reset() {
			// 重置查询条件
			this.$obj.clear(this.query);
			this.$obj.push(this.query, this.config);

			// 重置表单
			this.$obj.clear(this.form);
			this.$obj.push(this.form, this.obj);
		},

		/// 搜索
		/// bl: 是否重置再搜索
		search(bl) {

		},

		/// 提交
		submit() {

		},

		/// 上下翻页
		/// n: 加减数
		go(n) {
			this.goTo(this.page + n);
		},

		/// 上下翻页
		/// page: 加减数
		goTo(page) {
			if (page < 1) {
				page = 1;
			} else if (page > this.count) {
				page = this.count;
			}
			this.page = page;
			this.get_list();
		},

		/// 转查询参数
		toUrl(obj, key, value) {

		},

		/* 非通用 */
		getUserInfo(fun) {
			var _this = this;
			var p = _this.$route.path;
			var isLoad = this.$store.state.user.isLoad;
			if (!isLoad) {
				this.$get('~/user/user_info', function(json, state) {
					if (json) {
						if (json.data) {
							json.data.isLoad = true;
							_this.$store.dispatch('user/set', json.data);
							if (p.indexOf('/sign') == 0 || p.indexOf('/forgot') == 0) {
								_this.$router.push('/user/panel');
								return;
							}
						}
					}
					if (fun) {
						fun();
					}
				});
			} else {
				if (fun) {
					fun();
				}
			}
		},

		login() {
			if (this.oauth) {
				var username = this.$store.state.user.username;
				if (!username) {
					this.$store.dispatch('web/set_redirectURL', this.$route.path + location.search);
					this.$router.push(this.redirect);
					return;
				}
			}
			this.get();
		},

		/// 初始化
		init() {
			this.getUserInfo(this.login);
		},
		/// 验证参数
		/// 返回: 验证通过空, 否则返回错误提示
		check(param, dict) {
			return null;
		},
		//	转换	, 将对象，变量名修改，转换成新对象
		convert(obj, dict) {

		},
		// 交换, 将对象或列表根据视图模型转换值，用于服务器通讯时，如加密变成非加密
		exchange(val, mode) {

		},
		/// 事件管理, 用于管理函数
		/// name: 事件名
		/// tense: 状态名
		/// param1: 参数1
		/// param2: 参数2
		/// 返回: 特定值
		events(name, tense, param1, param2) {
			var funObj = this[name + '_' + tense];
			if (funObj) {
				return funObj(param1, param2);
			} else {
				return null;
			}
		},
		/// 回调函数管理器
		/// fun: 函数名
		/// param1: 参数1
		/// param2: 参数2
		/// param3: 参数3
		/// 返回: 回调参数
		func(fun, param1, param2, param3) {
			var funObj = this[fun];
			if (funObj) {
				if (param1 === undefined) {
					return funObj()
				} else if (param2 === undefined) {
					return funObj(param1)
				} else if (param3 === undefined) {
					return funObj(param1, param2)
				} else if (param3 === undefined) {
					return funObj(param1, param2, param3);
				}
			} else {
				return null;
			}
		},
		/// 加载状态设置函数
		/// bl: true加载中, false已完成, undefined取反状态
		load(bl) {
			if (bl == undefined) {
				this.loading = !this.loading;
			} else {
				this.loading = bl;
			}
		}
	},
	compuetd: {
		page_count() {
			return parseInt(this.count / this.size);
		}
	},
	created() {
		this.init();
	},
	watch: {
		'$route.query': function(newVal, oldVal) {
			$(window).scrollTop(0);
			this.init();
		}
	}
};
