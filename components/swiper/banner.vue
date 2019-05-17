<template>
	<swiper class="swiper_banner" indicator-dots autoplay indicator-active-color="#169bd5" circular :interval="5000"
	 :duration="300" indicator-color="rgba(0,0,0,.3)">
		<swiper-item v-for="(o, idx) in list" :key="idx">
			<navigator :url="o[vm.url]">
				<image :src="o[vm.img]" class="swiper_image" mode="aspectFill" lazy-load></image>
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
	.swiper_banner {
		height: 8.75rem;
	}
	
	.swiper_image {
		width: 100%;
	}
	/* 	uni-swiper { height: 25vh; } */
</style>
