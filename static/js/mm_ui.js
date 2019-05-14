"use strict";

!(function(factory) {
	if (typeof require === 'function' && typeof module === 'object') {
		// [1] CommonJS/Node.js
		// [1] 支持在module.exports.abc,或者直接exports.abc
		var target = module['exports']; // module.exports is for Node.js
		factory(require('jQuery'));
	} else if (typeof define === 'function' && define['amd']) {
		// [2] AMD anonymous module
		// [2] AMD 规范 
		define(['jQuery'], factory);
	} else {
		// [3] No module loader (plain <script> tag) - put directly in global namespace
		// var jQuery = window.jQuery ? window.jQuery : { fn: { extend : function () {
		// 	
		// } } };
		// window.jQuery = jQuery;
		factory(window.jQuery);
	}
})(function($) {
	$.fn.extend({
		"roll": function(sleep) {
			var _this = this;
			var ht = -_this.children("li").eq(0).height();

			function action() {
				var lis = _this.children("li");
				if (lis.length > 1) {
					//复制第一个li
					var li = lis.eq(0);
					var li_copy = li.clone();
					//使用animate对li的外边距进行调整从而达到向上滚动的效果
					li.animate({
						marginTop: ht + "px"
					}, "toggle", function() {
						//对已经消失的li进行删除
						li.remove();
						//把复制后的li插入到最后
						$(_this).append(li_copy);
					});
				}
			}

			//每隔两秒进行一次滚动
			var timing = setInterval(action, sleep);

			$(_this).hover(
				// 鼠标经过清除滚动
				function() {
					clearInterval(timing);
				},
				// 鼠标移出重新滚动
				function() {
					timing = setInterval(action, sleep);
				}
			);

		}
	});

	$.autoSize = function(minWidth) {
		function setSize() {
			// 1920 / 16 = 120;
			var win_w = $('html').width();
			if(win_w >= minWidth)
			{
				var fontSize = win_w / 120;
				//获取当前浏览器窗口宽度(这里的实质就是body宽度)
				$('html').css('fontSize', fontSize + 'px');
			}
		}
		setSize();
		$(window).resize(setSize);
	}
});