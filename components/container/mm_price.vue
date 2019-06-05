<template>
	<!-- 价格 -->
	<view class="mm_price">
		<text class="unit"></text>
		<slot></slot><text class="unit"></text>
	</view>
</template>

<script>
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
				default: false
			}
		},
		data() {

		},
		created() {

		}
	}
</script>

<style>
</style>
