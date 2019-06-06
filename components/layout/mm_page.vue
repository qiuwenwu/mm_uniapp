<template>
	<!-- 页面 -->
	<view class="mm_page">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			fun: {
				type: Function,
				default: function(){}
			}
		}
	}
</script>

<style>
</style>
