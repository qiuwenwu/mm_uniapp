<template>
	<!-- 二维码 -->
	<view class="mm_qrcode">
		<canvas class="_qrcodeCanvas" id="_myQrCodeCanvas" canvas-id="_myQrCodeCanvas" :style="{width:cpSize+'px',height:cpSize+'px'}" />
		<image v-show="show" :src="result" :style="{width:cpSize+'px',height:cpSize+'px'}" />
		<mm_btn type="default-x" class="full" @click="save_img()">保存到相册</mm_btn>
	</view>
</template>

<script>
	import QRCode from "@/plugins/mm_qrcode.js"

	let qrcode;
	export default {
		props: {
			// 显示方式
			display: {
				type: String,
				default: "1"
			},
			// 显示隐藏
			show: {
				type: Boolean,
				default: true
			},
			size: {
				type: Number,
				default: 7.5
			},
			unit: {
				type: String,
				default: 'rem'
			},
			value: {
				type: String,
				default: ''
			},
			background: {
				type: String,
				default: '#ffffff'
			},
			foreground: {
				type: String,
				default: '#333333'
			},
			pdground: {
				type: String,
				default: '#333333'
			},
			icon: {
				type: String,
				default: ''
			},
			iconSize: {
				type: Number,
				default: 40
			},
			lv: {
				type: Number,
				default: 3
			},
			onval: {
				type: Boolean,
				default: false
			},
			usingComponents: {
				type: Boolean,
				default: true
			},
			showLoading: {
				type: Boolean,
				default: true
			},
			loadingText: {
				type: String,
				default: '二维码生成中'
			},
		},
		data() {
			return {
				result: '',
			}
		},
		computed: {
			cpSize() {
				if (this.unit == "rem") {
					return uni.upx2px(38) * this.size
				}
				else if (this.unit == "upx") {
					return uni.upx2px(this.size)
				} else {
					return this.size
				}
			}
		},
		methods: {
			_makeCode() {
				var _this = this;
				if (this.value) {
					qrcode = new QRCode({
						context: this,
						usingComponents: this.usingComponents,
						showLoading: this.showLoading,
						loadingText: this.loadingText,
						text: this.value, // 生成内容
						size: this.cpSize, // 二维码大小
						background: this.background, // 背景色
						foreground: this.foreground, // 前景色
						pdground: this.pdground, // 定位角点颜色
						correctLevel: this.lv, // 容错级别
						image: this.icon, // 二维码图标
						imageSize: this.iconSize, // 二维码图标大小
						cbResult: function(res) { // 生成二维码的回调
							_this._result(res)
						},
					});
				} else {
					uni.showToast({
						title: '二维码内容不能为空',
						icon: 'none',
						duration: 2000
					});
				}
			},
			_clearCode() {
				this._result('')
				qrcode.clear()
			},
			_saveCode() {
				let that = this;
				if (this.result != "") {
					uni.saveImageToPhotosAlbum({
						filePath: that.result,
						success: function() {
							uni.showToast({
								title: '二维码保存成功',
								icon: 'success',
								duration: 2000
							});
						}
					});
				}
			},
			_result(res) {
				this.result = res;
				this.$emit('result', res)
			}
		},
		mounted() {
			if (this.value) {
				setTimeout(() => {
					this._makeCode()
				}, 0);
			}
		}
	}
</script>

<style>
	.mm_qrcode {
		position: relative;
	}

	._qrcodeCanvas {
		position: fixed;
		top: -99999upx;
		left: -99999upx;
		z-index: -99999;
	}
</style>
