import $ from './mm_sdk.js'
import Vue from 'vue'
import ba from 'vue-ba'
import echarts from 'echarts'

/* 加载组件 */
// import { uniBadge, uniListItem, uniList } from '@dcloudio/uni-ui'

let mm = {}

$.server_url = 'http://data.innosillcon.com/'
// $.server_url = 'https://admin.btcjag.com/';

mm.install = function(Vue, options) {
	// 创建全局组件
	// Vue.component('uniBadge', uniBadge);
	// Vue.component('uniListItem', uniListItem);
	// Vue.component('uniList', uniList);
	
	var host = ""
	if (options) {
		host = options.host
	}

	// 百度统计
	// Vue.use(ba, {
	// 	siteId: "4050cfef8875639e9f260ead2340e963"
	// });

	/* 注册全局函数 */
	Vue.prototype.$echarts = echarts;
	Vue.prototype.$obj = $.obj;

	Vue.prototype.$get = function(url, fun) {
		var token = $.cookie("token");
		$.http.get(url.replace('~/', $.server_url), fun, {
			"x-auth-token": token
		});
	}
	
	Vue.prototype.$post = function(url, param, fun) {
		var token = $.cookie("token");
		$.http.postForm(url.replace('~/', $.server_url), param, fun, {
			"x-auth-token": token
		});
	};

	Vue.prototype.$upload = function(url, dict, fun) {
		var token = $.cookie("token");
		$.file.upload(url.replace('~/', $.server_url), dict, fun, {
			"x-auth-token": token
		});
	};
	
	Vue.prototype.$float = function(num) {
		return num.toFloor(8);
	};

	Vue.prototype.$substr = function(str, start, end) {
		return str.substring(start, end);
	};

	Vue.prototype.cookie = $.cookie;

	/* 注册过滤器 */
	// 备注：过滤器在uni-app中无法使用
	Vue.filter('double', function(value) {
		return parseFloat(value).toFloor(2).toStr(2);
	});

	Vue.filter('float', function(value) {
		return parseFloat(value).toFloor(8).toStr(8);
	});

	Vue.filter('toStr', function(value, num) {
		return value.toStr(num);
	});
};

Vue.mixin(Vue.extend({
	/* 添加全局方法 */
	methods: {
		/* 读取语言库 */
		$lang: function(key) {
			return this.$store.state.lang.dict[key];
		},
		$money: function(coin) {
			return parseFloat(coin * this.$store.state.web.rate).toFloor(2)
		},
		$coin: function(money) {
			return parseFloat(money / this.$store.state.web.rate).toFloor(8)
		},
		$toStr: function(value, num){
			return value.toStr(num);
		}
	}
}));
export default mm;
