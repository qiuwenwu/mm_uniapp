<template>
	<!-- 警告框 -->
	<view class="mm_alert">
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
		created(){
			
		}
	}
</script>

<style>
</style>
