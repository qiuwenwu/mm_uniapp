<template>
	<!-- 轮播图 -->
	<swiper class="mm_swiper_banner" indicator-dots autoplay indicator-active-color="#169bd5" circular :interval="5000"
	 :duration="300" indicator-color="rgba(0,0,0,.3)">
		<swiper-item v-for="(o, idx) in list" :key="idx">
			<navigator :url="o[vm.url]">
				{{ o[vm.title] }}
			</navigator>
		</swiper-item>
		<slot></slot>
	</swiper>
</template>

<script>
</script>

<style>
</style>
