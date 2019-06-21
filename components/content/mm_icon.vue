<template>
	<!-- 图标 -->
	<view class="mm_icon" v-if="src.indexOf('<') !== -1" v-html="src"></view>
	<image class="mm_icon" v-else-if="src" :src="src" mode="widthfix"></image>
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
