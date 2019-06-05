<template>
	<!-- 图标 -->
	<view class="mm_icon" v-if="icon" v-html="icon"></view>
	<view class="mm_icon" v-else-if="icon">
		<image :src="icon"></image>
	</view>
	<view v-else></view>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
</style>
