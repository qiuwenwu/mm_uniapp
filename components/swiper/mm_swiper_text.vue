<template>
	<!-- 轮播图 -->
	<swiper class="mm_swiper_text" autoplay indicator-active-color="#169bd5" circular :interval="5000"
	 :duration="300" indicator-color="rgba(0,0,0,.3)">
		<swiper-item v-for="(o, idx) in list" :key="idx">
			<navigator class="mm_div" :url="o[vm.url]">
				{{ o[vm.title] }}
			</navigator>
		</swiper-item>
		<slot></slot>
	</swiper>
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
	.mm_swiper_text {
		line-height: 2.5rem;
		height: 2.5rem;
	}
	
	.mm_swiper_text .mm_div { padding: 0 1rem; color: #666; font-size: 0.875rem; }
</style>
