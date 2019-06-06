<template>
	<!-- 图标 -->
	<view class="mm_icon" v-if="src.indexOf('<') !== -1" v-html="src"></view>
	<view class="mm_icon" v-else-if="src">
		<image :src="src"></image>
	</view>
	<view v-else></view>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
</style>
