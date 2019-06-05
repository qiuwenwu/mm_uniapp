<template>
	<!-- 滑动卡 -->
	<view class="mm_swiper_card">
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
