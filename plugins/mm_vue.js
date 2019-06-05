import $ from './mm_sdk.js'
import Vue from 'vue'
import ba from 'vue-ba'
import echarts from 'echarts'

/* 加载组件 */
// import { uniBadge, uniListItem, uniList } from '@dcloudio/uni-ui'

let mm = {
	/// 安装
	/// Vue: 框架
	/// options: 配置参数
	install(Vue, options) {
		// 请求服务器地址
		var host = 'http://192.168.18.100/';
		// var host = 'https://admin.btcjag.com/';

		// 判断配置是否存在
		if (options) {
			// 配置主机地址
			if (options.host) {
				host = options.host
			}
		}

		// 百度统计
		// Vue.use(ba, {
		// 	siteId: "4050cfef8875639e9f260ead2340e963"
		// });

		/* === 注册全局函数 === */
		// 引入echarts
		Vue.prototype.$echarts = echarts;

		// 引入mm_sdk的对象处理类
		Vue.prototype.$obj = $.obj;
		
		/// 引入get请求函数
		/// url: 请求地址
		/// fun: 回调函数
		Vue.prototype.$get = function(url, fun) {
			var token = $.cookie("token");
			$.http.get(url.replace('~/', host), fun, {
				"x-auth-token": token
			});
		}

		/// 引入post请求
		/// url: 请求地址
		/// param: 请求参数
		/// fun: 回调函数
		Vue.prototype.$post = function(url, param, fun) {
			var token = $.cookie("token");
			$.http.postForm(url.replace('~/', host), param, fun, {
				"x-auth-token": token
			});
		};

		/// 引入上传请求
		/// url: 上传地址
		/// dict: 上传参数集合
		/// fun: 回调函数
		Vue.prototype.$upload = function(url, dict, fun) {
			var token = $.cookie("token");
			$.file.upload(url.replace('~/', host), dict, fun, {
				"x-auth-token": token
			});
		};

		/// 引入浮点数
		/// num: 被转换的数值
		/// 返回: 浮点数数值
		Vue.prototype.$float = function(num) {
			return num.toFloor(8);
		};

		/// 引入截取字符串函数
		/// str: 被截取的字符串
		/// start: 起始字符串
		/// end: 结束字符串
		Vue.prototype.$substr = function(str, start, end) {
			return str.substring(start, end);
		};

		/// 转字符串并截取长度
		/// value: 被转换的数值
		/// num: 保留长度
		/// 返回: 截取后字符串
		Vue.prototype.$toStr = function(value, num) {
			return value.toStr(num);
		};

		// 引入cookie函数
		Vue.prototype.$cookie = $.cookie;


		/* === 注册过滤器, 备注：过滤器在uni-app中无法使用 === */

		/// 转双精度小数字符串
		/// value: 被转换的数值
		/// 返回: 返回双精度数字符串
		Vue.filter('double', function(value) {
			return parseFloat(value).toFloor(2).toStr(2);
		});

		/// 转浮点数字符串
		/// value: 被转换的数值
		/// 返回: 返回浮点数字符串
		Vue.filter('float', function(value) {
			return parseFloat(value).toFloor(8).toStr(8);
		});
	}
};

// 注册全局组件基类
Vue.mixin(Vue.extend({
	/* === 添加调用缓存的全局方法 === */
	methods: {
		// 读取语言库
		// index: 匹配索引
		// 返回: 匹配词句
		$lang: function(index) {
			return this.$store.state.lang.dict[index];
		},
		// 数字货币转法币
		// coin: 货币数值
		// 返回: 法币数值
		$money: function(coin) {
			return parseFloat(coin * this.$store.state.web.rate).toFloor(2)
		},
		// 法币转数字货币
		// coin: 法币数值
		// 返回: 货币数值
		$coin: function(money) {
			return parseFloat(money / this.$store.state.web.rate).toFloor(8)
		}
	}
}));

export default mm;
