<template>
	<!-- 轮播图 -->
	<swiper class="mm_swiper_img" indicator-dots autoplay indicator-active-color="#169bd5" circular :interval="5000"
	 :duration="300" indicator-color="rgba(0,0,0,.3)">
		<swiper-item v-for="(o, idx) in list" :key="idx">
			<mm_div :url="o[vm.url]">
				<mm_icon :src="o[vm.img]"></mm_icon>
			</mm_div>
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
	.mm_swiper_img {
		height: 8.75rem;
	}
</style>
