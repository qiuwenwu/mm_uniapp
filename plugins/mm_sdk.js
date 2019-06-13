import jquery from 'jquery'

/// 判断对象是否相似
/// obj: 被判断对象
/// query: 用作判断的对象
/// all: 是否完全相同
/// 返回: 相似返回true，否则返回false
function as(obj, query, all) {
	var bl = true;
	if (all) {
		for (var k in obj) {
			if (obj[k] != query[k]) {
				bl = false;
				break;
			}
		}
	} else {
		for (var k in query) {
			if (obj[k] != query[k]) {
				bl = false;
				break;
			}
		}
	}
	return bl;
}

/// 排序
function newSort(key) {
	var field = key;
	return {
		/// 升序
		/// obj1: 对象1
		/// obj2: 对象2
		/// 返回顺序值
		asc: function asc(obj1, obj2) {
			var val1 = obj1[field];
			var val2 = obj2[field];
			if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
				val1 = Number(val1);
				val2 = Number(val2);
			}
			if (val1 < val2) {
				return -1;
			} else if (val1 > val2) {
				return 1;
			} else {
				return 0;
			}
		},
		asc_cn: function asc_cn(obj1, obj2) {
			return obj1[field].localeCompare(obj2[field], 'zh-CN');
		},
		/// 倒序
		/// obj1: 对象1
		/// obj2: 对象2
		/// 返回顺序值
		desc: function desc(obj1, obj2) {
			var val1 = obj1[field];
			var val2 = obj2[field];
			if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
				val1 = Number(val1);
				val2 = Number(val2);
			}
			if (val1 > val2) {
				return -1;
			} else if (val1 < val2) {
				return 1;
			} else {
				return 0;
			}
		},
		desc_cn: function desc_cn(obj1, obj2) {
			return obj2[field].localeCompare(obj1[field], 'zh-CN');
		}
	};
}

function ascNum(a, b) {
	return a - b;
}

function descNum(a, b) {
	return b - a;
}


/* == 数字拓展函数 == */
/// 去尾法
/// len: 保留长度
/// 返回: 数值
Number.prototype.toFloor = function(len) {
	var n = Math.pow(10, len);
	return Math.floor(this * n) / n;
};

/// 进一法
/// len: 保留长度
/// 返回: 数值
Number.prototype.toCeil = function(len) {
	var n = Math.pow(10, len);
	return Math.ceil(this * n) / n;
};

/// 四舍五入法
/// len: 保留长度
/// 返回: 数值
Number.prototype.toRound = function(len) {
	var n = Math.pow(10, len);
	return Math.round(this * n) / n;
};

/// 数值转字符串, 保留尾数长度
/// num: 保留长度
/// 返回: 截取后字符串
Number.prototype.toStr = function(num) {
	var n = Math.pow(10, num);
	var f = Math.round(this * n) / n;
	var s = f.toString();
	var rs = s.indexOf('.');
	if (rs < 0) {
		rs = s.length;
		s += '.';
	}
	while (s.length <= rs + num) {
		s += '0';
	}
	return s;
}

/// 转为时间类型
/// 返回: 时间对象
Number.prototype.toTime = function() {
	return new Date(this * 1000);
};

/* == 时间拓展函数 == */
/// 时间格式化
/// fmt: 指定格式
/// 返回: 时间字符串
Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(fmt)) {
		var x = RegExp.$1;
		fmt = fmt.replace(x, (this.getFullYear() + "").substr(4 - x.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			var x = RegExp.$1;
			fmt = fmt.replace(x, x.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return fmt;
};

/// 删除首字符
/// str: 要删除的字符, 默认删除空字符
/// 返回: 删除后字符串
String.prototype.startTrim = function(str) {
	if (!str) {
		str = "\\s";
	} else {
		str = str.replace("$", "\\$").replace("^", "\\^").replace("(", "\\(").replace(")", "\\)");
	}
	var rx = new RegExp("(^" + str + "*)", "g");
	return this.replace(rx, "");
};

/// 删除尾字符
/// str: 要删除的字符, 默认删除空字符
/// 返回: 删除后字符串
String.prototype.endTrim = function(str) {
	if (!str) {
		str = "\\s";
	} else {
		str = str.replace("$", "\\$").replace("^", "\\^").replace("(", "\\(").replace(")", "\\)");
	}
	var rx = new RegExp("(" + str + "*$)", "g");
	return this.replace(rx, "");
};

/// 删除首尾字符
/// str: 要删除的字符, 默认删除空字符
/// 返回: 删除后字符串
String.prototype.trim = function(str) {
	if (!str) {
		str = "\\s";
	} else {
		str = str.replace("$", "\\$").replace("^", "\\^").replace("(", "\\(").replace(")", "\\)");
	}
	var rx = new RegExp("(^" + str + "*)|(" + str + "*$)", "g");
	return this.replace(rx, "");
};

/// 获取当前时间戳
/// 返回: 返回时间戳(数字型)
Date.prototype.stamp = function() {
	var timestamp = Date.parse(this);
	return timestamp / 1000;
};

/// 获取本月
/// 返回: 月份
Date.prototype.month = function() {
	return this.format("yyyy-MM");
};

/// 获取当前日期
/// 返回: 当前日期
Date.prototype.date = function() {
	return this.format("yyyy-MM-dd");
};

/// 获取当前日期时间
/// 返回: 日期喝时间
Date.prototype.dateTime = function() {
	return this.format("yyyy-MM-dd hh:mm:ss");
};

/// 获取当前时间
/// 返回: 时间
Date.prototype.time = function() {
	return this.format("hh:mm:ss");
};

/// 计算时间差——时间间隔
/// endTime: 结束时间
/// time_unit: 时间单位（day天、hours小时、minutes分钟）
Date.prototype.interval = function(endTime, time_unit) {
	var startTime = this; // startTime: 开始时间
	var stime = Date.parse(new Date(startTime));
	var etime = Date.parse(new Date(endTime));
	var usedTime = etime - stime; // 两个时间戳相差的毫秒数
	if (time_unit == "day") {
		return Math.floor(usedTime / (24 * 3600 * 1000));
	} else {
		// 计算出小时数
		var leave1 = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
		if (time_unit == "hours") {
			return Math.floor(leave1 / (3600 * 1000));
		} else {
			// 计算相差分钟数
			var leave2 = leave1 % (3600 * 1000); // 计算小时数后剩余的毫秒数  
			return Math.floor(leave2 / (60 * 1000));
		}
	}
	return 0;
};

/// 时间添加天数
/// days: 天数
/// 返回: 时间对象
Date.prototype.addDays = function(days) {
	this.setDate(this.getDate() + days);
	return this;
};

/// 时间添加秒数
/// seconds: 秒数
/// 返回: 时间对象
Date.prototype.addSeconds = function(seconds) {
	this.setSeconds(this.getSeconds() + seconds);
	return this;
};

/* == 字符串拓展函数 == */
/// 验证开头字符串
/// 返回: 验证成功返回true，失败返回false
String.prototype.startWith = function(startStr) {
	var d = this.length - startStr.length;
	if (d >= 0 && this.indexOf(startStr) == 0) {
		return true;
	}
	return false;
};

/// 验证结束字符串
/// endStr: 尾数字符串
/// 返回: 验证成功返回true，失败返回false
String.prototype.endWith = function(endStr) {
	var d = this.length - endStr.length;
	if (d >= 0 && this.lastIndexOf(endStr) == d) {
		return true;
	}
	return false;
};

/// 是否含字符串
/// str: 判断的字符
/// 返回: 验证成功返回true，失败返回false
String.prototype.has = function(str) {
	return this.indexOf(str) != -1;
};

/// 取文本左边
/// str: 索引的字符
/// bl: 当索引字符不存在时是否保留左边
/// 返回: 截取后的字符串
String.prototype.left = function(str, bl) {
	var i = this.indexOf(str);
	if (i == -1) {
		if (bl) {
			return this;
		} else {
			return "";
		}
	} else {
		return this.substring(0, i);
	}
};

/// 取文本右边
/// str: 索引的字符
/// bl: 当索引字符不存在时是否保留右边
/// 返回: 截取后的字符串
String.prototype.right = function(str, bl) {
	var i = this.indexOf(str);
	if (i == -1) {
		if (bl) {
			return this;
		} else {
			return "";
		}
	} else {
		return this.substring(i + str.length + 1);
	}
};

/// 取文本右边
/// str: 索引的字符
/// bl: 当索引字符不存在时是否保留右边
/// 返回: 截取后的字符串
String.prototype.between = function(str_l, str_r, bl) {
	var str = this.right(str_l, bl);
	str = str.left(str_r, bl);
	return str;
};

/// 替换字符串——所有
/// txt: 被替换的文本
/// oldStr: 替换的字符串
/// newStr: 替换为字符串
/// 返回: 替换后的字符串
String.prototype.replaceAll = function(oldStr, newStr) {
	var txt = this;
	if (!newStr) {
		newStr = '';
	}
	while (txt.indexOf(oldStr) != -1) {
		txt = txt.replace(oldStr, newStr);
	}
	return txt;
};

/// 替换字符串——所有
/// txt: 被替换的文本
/// oldStr: 替换的字符串
/// newStr: 替换为字符串
/// 返回: 替换后的字符串
String.prototype.toTime = function() {
	var str = this.replace('T', ' ').replace('Z', '').replaceAll('.', '/').replaceAll('-', '/');
	return new Date(str);
};

/* == 字符串拓展函数 == */
/// 获取值
/// key: 比较键名
/// value: 比较值
/// 返回: 返回对象或属性值
Array.prototype.get = function(key, value) {
	var list = [];
	if (typeof(value) == "function") {
		var fun = value;
		for (var i = 0; i < this.length; i++) {
			var o = this[i];
			if (fun(o[key])) {
				list.push(o)
			}
		}
	} else {
		for (var i = 0; i < this.length; i++) {
			var o = this[i];
			if (o[key] == value) {
				list.push(o)
			}
		}
	}
	return list;
};

/// 获取值
/// key: 比较键名
/// value: 比较值
/// 返回: 返回对象或属性值
Array.prototype.get_obj = function(key, value) {
	var obj;
	var arr = this;
	for (var i = 0; i < arr.length; i++) {
		var o = arr[i];
		if (o[key] === value) {
			obj = o;
			break;
		}
	}
	return obj;
};

/// 获取值
/// key: 比较键名
/// value: 比较值
/// name: 获取指定属性值,为空则返回对象
/// 返回: 返回对象或属性值
Array.prototype.getVal = function(key, value, name) {
	var val;
	var obj = this.get(key, value);
	if (obj != null) {
		val = obj[name];
	}
	return val;
};

/// 遍历添加对象
/// newArr: 被添加的数组（对象型数组）
/// key: 附加属性
/// value: 附加属性值
/// 返回: 添加后的数组
Array.prototype.eachPush = function(arr, key, value) {
	if (arr) {
		if (key) {
			for (var i = 0; i < arr.length; i++) {
				var o = arr[i];
				o[key] = value;
				this.push(o);
			}
		} else {
			for (var i = 0; i < arr.length; i++) {
				this.push(arr[i]);
			}
		}
	}
	return this;
};

/// 数组转字符串
/// arr: 对象数组
/// splitStr: 分隔符
/// key: 对象属性
/// 返回:字符串
Array.prototype.toStr = function(splitStr, key) {
	var arr = this;
	var str = "";
	if (key) {
		for (var i = 0; i < arr.length; i++) {
			var o = arr[i];
			if (o[key]) {
				str += splitStr + o[key];
			}
		}
	} else {
		for (var i = 0; i < arr.length; i++) {
			var o = arr[i];
			str += splitStr + o;
		}
	}
	return str.replace(splitStr, "");
};

/// 清空数组
/// 返回: 清空的数组
Array.prototype.clear = function() {
	this.splice(0, this.length);
	return this;
};

/// 删除数组成员
/// arr: 被删除成员的数组
/// key: 搜索成员键
/// value: 搜索匹配值
/// all: 是否删除所有
/// 返回: 删除后的数组
Array.prototype.del = function(key, value, all) {
	for (var i = this.length - 1; i > -1; i--) {
		var o = this[i];
		if (o[key] == value) {
			this.splice(i, 1);
			if (!all) {
				break;
			}
		}
	}
	return this;
};

/// 判断数组成员是否存在
/// key: 搜索成员键
/// value: 搜索匹配值或函数
/// 返回: 存在返回true,不存在返回false
Array.prototype.has = function(key, value) {
	var bl = false;
	if (typeof(value) == "function") {
		var fun = value;
		for (var i = 0; i < this.length; i++) {
			var o = this[i];
			if (fun(o[key])) {
				bl = true;
				break;
			}
		}
	} else {
		for (var i = 0; i < this.length; i++) {
			var o = this[i];
			if (o[key] == value) {
				bl = true;
				break;
			}
		}
	}
	return bl;
};

/// 修改数组成员
/// key: 搜索成员键
/// value: 搜索匹配值
/// all: 是否删除所有
/// 返回: 删除后的数组
Array.prototype.set = function(query, obj) {
	for (var i = 0; i < this.length; i++) {
		var o = this[i];
		for (var k in query) {
			if (as(o, query)) {
				this[i] = obj;
			};
		}
	}
	return this;
};

/// 对象列表排序
/// key: 用来判断排序的对象属性
/// method: 排序方式, asc升序, desc降序
Array.prototype.sortBy = function(method, key) {
	if (key) {
		var isCN = typeof this[0][key] == "string";
		var fun = newSort(key);
		if (method && method.toLowerCase() == "desc") {
			if (isCN) {
				this.sort(fun.desc_cn);
			} else {
				this.sort(fun.desc);
			}
		} else {
			if (isCN) {
				this.sort(fun.asc_cn);
			} else {
				this.sort(fun.desc);
			}
		}
	} else {
		if (method && method.toLowerCase() == "desc") {
			this.sort(descNum);
		} else {
			this.sort(ascNum);
		}
	}
	return this;
};

/// 数组列表取数组
/// key: 取的属性
/// 返回: 截取的数组
Array.prototype.toArr = function(key) {
	var arr = [];
	var lt = this;
	for (var i = 0; i < lt.length; i++) {
		var o = lt[i];
		arr.push(o[key]);
	}
	return arr;
};

(function($) {
	// 插件类
	$.plugins = {
		// 复制插件
		clipboard: {}
	};
	/* == 对象 == */
	$.obj = {
		/// 是否浮点数
		/// n: 数值
		/// 返回: 是返回true,否返回false
		isFloat: function isFloat(n) {
			return n != parseInt(n);
		},
		/// 遍历赋值到对象
		/// objA: 被赋值对象
		/// objB: 来源对象
		/// bl: 是否完全覆盖值
		/// 返回: 新对象
		push: function push(objA, objB, bl) {
			if (!objA || !objB) {
				return objA;
			}
			if (bl) {
				for (var k in objB) {
					objA[k] = objB[k];
				}
			} else {
				for (var k in objA) {
					var value = objB[k];
					if (value != undefined) {
						var type = typeof(objA[k]);
						if (type == "Number") {
							objA[k] = value;
						} else if (type == "Array" && typeof(value) == "Array") {
							objA[k].clear();
							objA[k].eachPush(value);
						} else if (value == "true") {
							objA[k] = true;
						} else if (value == "false") {
							objA[k] = false;
						} else {
							objA[k] = value;
						}
					}
				}
			}
			return objA;
		},
		/// 清除空值
		/// obj: 对象
		/// 返回: 新对象
		clear: function clear(obj) {
			if (obj) {
				for (var k in obj) {
					var val = obj[k];
					if (val) {
						var name = typeof val === 'undefined' ? 'undefined' : typeof(val);
						switch (name) {
							case "string":
								obj[k] = "";
								break;
							case "number":
								obj[k] = 0;
								break;
							case "array":
								obj[k].clear();
								break;
							case "object":
								$.obj.clear(obj[k]);
								break;
							case "function":
								break;
							case "symbol":
								obj[k] = "";
								break;
						}
					}
				}
			}
			return obj;
		},
		/// json对象转字符串
		/// obj: 被转换的对象
		/// url: 请求地址
		/// 返回: url参数格式字符串
		toUrl: function toUrl(obj, url) {
			var queryStr = "";
			for (var key in obj) {
				var value = obj[key];
				if (typeof value == 'number') {
					if (value > 0) {
						queryStr += "&" + key + "=" + obj[key];
					}
				} else if (value) {
					queryStr += "&" + key + "=" + encodeURI(obj[key]);
				}
			}
			if (url) {
				if (url.endWith('?') || url.endWith('&')) {
					return url + queryStr.replace('&', '');
				} else if (url.indexOf('?') === -1) {
					return url + queryStr.replace('&', '?');
				} else {
					return url + queryStr;
				}
			} else {
				return queryStr.replace('&', '');
			}
		},
		/// 判断对象是否相似
		/// obj: 用作判断的对象
		/// all: 是否判断所有成员
		/// 返回: 相似返回true,否则返回false
		as: as,
		/// 拷贝对象
		/// obj: 被拷贝的对象（对象型）
		/// has: 是否非空拷贝，如果含有数据才拷贝，不含数据不拷贝
		/// 返回: 新对象
		copy: function copy(obj, has) {
			var newObj = {};
			if (has) {
				for (var attr in obj) {
					var o = obj[attr];
					if (o) {
						newObj[attr] = o;
					}
				}
			} else {
				for (var attr in obj) {
					newObj[attr] = obj[attr];
				}
			}
			return newObj;
		},
		toStr: function toStr(obj) {
			return JSON.stringify(obj);
		},
		/// 转换对象属性名
		/// obj: 对象
		/// key: 匹配的属性键
		/// name: 转换后的属性名称
		/// 返回: 转换后的对象
		exchange: function exchange(obj, key, name) {
			var newObj = {};
			for (var attr in obj) {
				if (attr == key) {
					newObj[key] = obj[attr];
				} else {
					newObj[attr] = obj[attr];
				}
			}
			return newObj;
		}
	};

	/* == 数组 == */
	$.arr = {};

	/* == 拷贝数据 == */
	/// 拷贝数据
	/// obj: 拷贝的对象
	/// bl: 是否格式化。格式化后的数据会以 "键: 值（换行）"形式显示
	$.copy = function(obj, bl) {
		var text = "";
		if (bl) {
			if ((typeof obj === 'undefined' ? 'undefined' : typeof(obj)) == "object") {
				for (var k in obj) {
					var name = k;
					var value = obj[k];
					text += "\n" + name + ": " + value;
				}
				text = text.replace("\n", "");
			} else {
				text = obj;
			}
		} else {
			if ((typeof obj === 'undefined' ? 'undefined' : typeof(obj)) == "object") {
				text = JSON.stringify(obj);
			} else {
				text = obj;
			}
		}
		$.plugins.clipboard.copy(text); // 复制Ctrl + C
	};

	/* == 时间 == */
	$.time = {
		/// 倒计时
		/// obj: 计时对象
		/// longTime: 倒计时长
		/// fun: 回调函数,当计时为0时执行
		down: function down(obj, longTime, fun) {
			obj.longTime = longTime;
			var timer = setInterval(function() {
				obj.longTime--;
				if (obj.longTime == 0) {
					clearInterval(timer);
					if (fun) {
						fun();
					}
				}
			}, 1000);
		},
		/// 时间格式化
		/// miniseconds: 毫秒
		/// fmt: 时间格式
		/// 返回: 时间字符串
		format: function format(miniseconds, fmt) {
			var hh = 0;
			var mm = 0;
			var ss = 0;
			var s = miniseconds / 1000;

			if (s > 3600) {
				var hh = parseInt(s / 3600);
				s = s - 3600 * hh;
			}
			if (s > 60) {
				var mm = parseInt(s / 60);
				s = s - 60 * mm;
			}
			var ss = parseInt(s);
			if (hh > 9) {
				fmt = fmt.replace('hh', hh);
			} else {
				fmt = fmt.replace('hh', '0' + hh);
			}

			if (mm > 9) {
				fmt = fmt.replace('mm', mm);
			} else {
				fmt = fmt.replace('mm', '0' + mm);
			}

			if (ss > 9) {
				fmt = fmt.replace('ss', ss);
			} else {
				fmt = fmt.replace('ss', '0' + ss);
			}
			return fmt;
		},
		/// 倒计时
		/// obj: 时间对象
		/// fmt: 显示格式
		/// fun: 结束时回调函数
		countdown: function countdown(obj, fmt, fun) {
			if (!obj.seconds) {
				obj.seconds = 86400000;
			}
			var timer = setInterval(function() {
				obj.seconds -= 1000;
				if (obj.seconds == 0) {
					clearInterval(timer);
					if (fun) {
						fun();
					}
				}
				obj.time = $.time.format(obj.seconds, fmt);
			}, 1000);
		}
	};

	/* == 字符串 == */
	$.str = {};

	/* == 网络请求 == */
	$.http = {
		get: function get(url, fun, headers) {
			var json;
			var hp = {
				type: 'GET',
				url: url,
				async: fun !== null,
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
				success: function success(data, status) {
					if (fun) {
						fun(data, status);
					} else {
						json = {
							data: data,
							status: status
						};
					}
				},
				complete: function complete(XHR, TS) {
					XHR = null;
				}
			};
			if (headers) {
				hp.headers = headers;
			}
			$.ajax(hp);
			return json;
		},
		getText: function getText(url, fun, headers) {
			var text;
			var hp = {
				type: 'GET',
				url: url,
				async: fun !== null,
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
				success: function success(data, status) {
					if (fun) {
						fun(data, status);
					} else {
						json = {
							data: data,
							status: status
						};
					}
				},
				complete: function complete(XHR, TS) {
					XHR = null;
				}
			};
			if (headers) {
				hp.headers = headers;
			}
			$.ajax(hp);
			return json;
		},
		post: function post(url, param, fun, headers) {
			var json;
			var hp = {
				type: 'POST',
				url: url,
				async: fun !== null,
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
				data: param,
				dataType: "json",
				contentType: "application/json; charset=utf-8;",
				success: function success(data, status) {
					if (fun) {
						fun(data, status);
					} else {
						json = {
							data: data,
							status: status
						};
					}
				},
				complete: function complete(XHR, TS) {
					XHR = null;
				}
			};
			if (headers) {
				hp.headers = headers;
			}
			$.ajax(hp);
			return json;
		},
		postForm: function postForm(url, param, fun, headers) {
			var json;
			var hp = {
				type: 'POST',
				url: url,
				async: fun !== null,
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
				data: param,
				dataType: "json",
				contentType: "application/x-www-form-urlencoded; charset=utf-8;",
				success: function success(data, status) {
					if (fun) {
						fun(data, status);
					} else {
						json = {
							data: data,
							status: status
						};
					}
				},
				complete: function complete(XHR, TS) {
					XHR = null;
				}
			};
			if (headers) {
				hp.headers = headers;
			}
			$.ajax(hp);
			return json;
		}
	};

	var _domain = location.host;

	/* 缓存 */
	$.cookies = {
		domain: function domain(url) {
			if (url) {
				_domain = url;
			}
			return ";path=/";
		},
		/// 设置缓存
		/// key: 缓存对象
		/// value: 缓存值
		/// minutes: 缓存时长，单位: 分钟
		set: function set(name, value, minutes, domain) {
			if (!domain) {
				domain = $.cookies.domain();
			}
			var time = new Date();
			if (minutes) {
				time.setTime(time.getTime() + minutes * 60000);
				document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + time.toGMTString();
			} else {
				time.setTime(time.getTime() + 7 * 24 * 3600 * 60000);
				document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + time.toGMTString();
			}
		},

		/// 获取cookie
		/// name: 名称
		get: function get(name) {
			var value = null;
			var str = document.cookie;
			var arr = str.split("; ");
			for (var i = 0; i < arr.length; i++) {
				var ar = arr[i].split("=");
				if (ar[0] == name) {
					value = decodeURIComponent(ar[1]);
					break;
				}
			}
			return value;
		},

		/// 删除cookie
		del: function del(name) {
			this.set(name, "", -1);
		}
	};

	/// 设置缓存
	/// key: 缓存对象
	/// value: 缓存值
	/// minutes: 缓存时长，单位: 分钟
	$.cookie = function(key, value, minutes) {
		if (value != undefined) {
			if (!minutes) {
				if (value == null) {
					minutes = 0;
				} else {
					minutes = 120;
				}
			}
			$.cookies.set(key, value, minutes);
		} else {
			return $.cookies.get(key);
		}
	};

	/* === 多媒体 === */
	/// 上传文件
	/// url: 提交网址
	/// dict: 对象
	/// func: 函数
	$.file = {
		upload: function upload(url, obj, func, headers) {
			var formData = new FormData();
			for (var k in obj) {
				formData.append(k, obj[k]);
			}

			//	formData.append("name", name);
			//	formData.append("file", file);
			var hp = {
				type: 'POST',
				url: url,
				data: formData,
				processData: false,
				contentType: false,
				async: func !== null,
				xhrFields: {
					withCredentials: true
				},
				success: function success(json, status) {
					if (func) {
						if (json) {
							json["obj"] = obj;
						}
						func(json, status);
					}
				},
				complete: function complete(XHR, TS) {
					XHR = null;
				}
			};

			if (headers) {
				hp.headers = headers;
			}

			$.ajax(hp);
		}

		/* 切换语言设置 */
	};
	$.lang = {
		now: "",
		dict: {}
	};
	$.lang.get = function(key) {
		return $.lang.dict[key];
	};
	$.lang.set = function(key, value) {
		$.lang.dict[key] = value;
	};
	$.lang.toggle = function(name) {
		$.lang.now = name;
	};
})(jquery);

/* MD5加密类 */
(function($) {
	/* md5加密（开始） */
	var hexcase = 0;
	/* hex output format. 0 - lowercase; 1 - uppercase  */
	var b64pad = "";
	/* base-64 pad character. "=" for strict RFC compliance */
	var chrsz = 8;
	/* bits per input character. 8 - ASCII; 16 - Unicode  */

	/*
	 * Perform a simple self-test to see if the VM is working
	 */
	function md5_vm_test() {
		return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	}
	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len) {
		/* append padding */
		x[len >> 5] |= 0x80 << len % 32;
		x[(len + 64 >>> 9 << 4) + 14] = len;
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		for (var i = 0; i < x.length; i += 16) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;
			a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
			d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
			c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
			b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
			a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
			d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
			c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
			b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
			a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
			d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
			c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
			b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
			a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
			d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
			c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
			b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
			a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
			d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
			c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
			b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
			a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
			d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
			c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
			b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
			a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
			d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
			c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
			b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
			a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
			d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
			c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
			b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
			a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
			d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
			c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
			b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
			a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
			d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
			c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
			b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
			a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
			d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
			c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
			b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
			a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
			d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
			c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
			b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
			a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
			d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
			c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
			b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
			a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
			d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
			c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
			b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
			a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
			d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
			c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
			b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
			a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
			d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
			c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
			b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
		}
		return Array(a, b, c, d);
	}
	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t) {
		return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}

	function md5_ff(a, b, c, d, x, s, t) {
		return md5_cmn(b & c | ~b & d, a, b, x, s, t);
	}

	function md5_gg(a, b, c, d, x, s, t) {
		return md5_cmn(b & d | c & ~d, a, b, x, s, t);
	}

	function md5_hh(a, b, c, d, x, s, t) {
		return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}

	function md5_ii(a, b, c, d, x, s, t) {
		return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
	}
	/*
	 * Calculate the HMAC-MD5, of a key and some data
	 */
	function core_hmac_md5(key, data) {
		var bkey = str2binl(key);
		if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
		var ipad = Array(16),
			opad = Array(16);
		for (var i = 0; i < 16; i++) {
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		}
		var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
		return core_md5(opad.concat(hash), 512 + 128);
	}
	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return msw << 16 | lsw & 0xFFFF;
	}
	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt) {
		return num << cnt | num >>> 32 - cnt;
	}
	/*
	 * Convert a string to an array of little-endian words
	 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
	 */
	function str2binl(str) {
		var bin = Array();
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < str.length * chrsz; i += chrsz) {
			bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
		}
		return bin;
	}
	/*
	 * Convert an array of little-endian words to a string
	 */
	function binl2str(bin) {
		var str = "";
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < bin.length * 32; i += chrsz) {
			str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
		}
		return str;
	}
	/*
	 * Convert an array of little-endian words to a hex string.
	 */
	function binl2hex(binarray) {
		var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		var str = "";
		for (var i = 0; i < binarray.length * 4; i++) {
			str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
		}
		return str;
	}
	/*
	 * Convert an array of little-endian words to a base-64 string
	 */
	function binl2b64(binarray) {
		var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var str = "";
		for (var i = 0; i < binarray.length * 4; i += 3) {
			var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) <<
				8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;
			for (var j = 0; j < 4; j++) {
				if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
				else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
			}
		}
		return str;
	}

	$.hex_md5 = function hex_md5(s) {
		return binl2hex(core_md5(str2binl(s), s.length * chrsz));
	};
	$.b64_md5 = function b64_md5(s) {
		return binl2b64(core_md5(str2binl(s), s.length * chrsz));
	};
	$.str_md5 = function str_md5(s) {
		return binl2str(core_md5(str2binl(s), s.length * chrsz));
	};
	$.hex_hmac_md5 = function hex_hmac_md5(key, data) {
		return binl2hex(core_hmac_md5(key, data));
	};
	$.b64_hmac_md5 = function b64_hmac_md5(key, data) {
		return binl2b64(core_hmac_md5(key, data));
	};
	$.str_hmac_md5 = function str_hmac_md5(key, data) {
		return binl2str(core_hmac_md5(key, data));
	};

	$.md5 = $.hex_md5;
})(jquery);

export default jquery;
