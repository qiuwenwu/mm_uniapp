export default {
	props: {
		// 回调函数
		func: {
			type: Object,
			default: function(fun, param1, param2) {
				return null
			}
		},
		// 标签
		label: {
			type: String,
			default: ""
		},
		// 链接
		url: {
			type: String,
			default: "/"
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
		// 当前索引
		index: {
			type: Number,
			default: 0
		},
		// 列数
		col: {
			type: Number,
			default: 4
		},
		// 对象
		obj: {
			type: Object,
			default: function() {
				return {}
			}
		},
		// 列表
		list: {
			type: Array,
			default: function() {
				return []
			}
		},
		// 视图模型
		vm: {
			type: Object,
			default: function() {
				return {
					// 当前ID
					id: 'id',
					// 上级ID
					fid: 'fid',
					// 图片
					img: 'img',
					// 图标
					icon: 'icon',
					// 标题
					title: 'title',
					// 描述
					desc: 'desc',
					// 内容
					content: 'content',
					// 时间
					time: 'time',
					// 链接
					url: 'url',
					// 方式
					mode: 'mode',
					// 来源
					source: 'source',
					// 来源地址
					source_url: 'source_url',
					// 标签
					label: 'label',
					// 名称
					name: 'name',
					// 值
					value: 'value',
					// 提示
					tip: 'tip',
					// 热度
					hot: 'hot',
					// 原价
					price_old: 'price_old',
					// 价格
					price: 'price',
					// 总价
					total: 'total',
					// 点赞数
					zan: 'zan',
					// 总量
					count: '',
					// 数量
					num: '',
					// 作者
					author: ''
				}
			}
		},
		// 当前页
		page: {
			type: Number,
			default: 1
		},
		// 大小
		size: {
			type: Number,
			default: 10
		},
		// 总计
		count: {
			type: Number,
			default: 0
		},
		// 显示隐藏
		show: {
			type: Number,
			default: 0
		},
		// 权限
		powers: {
			type: Array,
			default: function() {
				return []
			}
		},
		// 主键
		field: {
			type: String,
			default: "id"
		},
		active: {
			type: String,
			default: ""
		},
		// 提示
		tip: {
			type: String,
			default: ""
		},
		// 值
		value: {
			type: String,
			default: ""
		},
		// 数量
		num: {
			type: Number,
			default: 0
		},
		// 选中项
		selected: {
			type: Array,
			default: function() {
				return []
			}
		},
	},
	data() {
		return {
			// 显示方式
			dy: this.display,
			// 加载中
			load: this.loading,
			// 当前索引
			idx: this.index,
			// 列数
			cl: this.col,
			// 对象
			oj: this.obj,
			// 列表
			lt: this.list,
			// 当前页
			pe: this.page,
			// 大小
			se: this.size,
			// 当前值
			val: this.value,
			// 数量
			nm: this.num,
			// 选中
			sd: this.selected,
			// 显示隐藏
			sw: this.show,
		}
	},
	methods: {
		/// 可更改其他属性，默认绑定回调函数
		/// fun: 函数名
		/// param1: 参数1
		/// param2: 参数2
		/// param3: 参数3
		run(fun, param1, param2, param3) {
			if (this.func) {
				return this.func(param1, param2, param3)
			}
			return null;
		},
		// 添加
		/// obj: 添加的对象
		add(obj) {
			this.run('add', obj);
		},
		// 删除
		/// query: 查询条件
		del(query) {
			this.run('del', query);
		},
		// 修改
		/// query: 查询条件
		/// obj: 修改的对象
		set(query, obj) {
			this.run('set', query, obj);
		},
		// 查询
		/// query: 查询条件
		get(query) {
			this.run('get', query);
		},
		// 上下翻页
		/// n: 加减数
		go(n) {
			this.run('go', n);
		},
		// 上下翻页
		/// page: 加减数
		goTo(page) {
			this.run('goTo', page);
		}
	}
	// 	computed: {
	// 		/// 当前项
	// 		item() {
	// 			if (this.list.length > 0) {
	// 				return this.list[this.index]
	// 			} else {
	// 				return {};
	// 			}
	// 		}
	// 	}
};
