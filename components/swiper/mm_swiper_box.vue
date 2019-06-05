<template>
	<!-- 滑动盒子 -->
	<view class="mm_swiper_box">
		<slot></slot>
	</view>
</template>

<script>
	import mixin from '@/mixins/list';

	export default {
		mixins: [
			mixin
		]
	}
</script>

<style>
</style>
