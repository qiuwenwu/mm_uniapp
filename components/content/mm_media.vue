<template>
	<!-- 媒体 -->
	<view class="mm_media" v-if="obj[vm.icon]" v-html="obj[vm.icon]"></view>
	<view class="mm_media" v-else-if="obj[vm.img]">
		<image :src="obj[vm.img]"></image>
	</view>
	<view class="mm_media" v-else></view>
</template>

<script>
</script>

<style>
</style>
