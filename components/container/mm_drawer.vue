<template>
	<!-- 抽屉、折叠窗 -->
	<view class="mm_drawer">
		<slot></slot>
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
