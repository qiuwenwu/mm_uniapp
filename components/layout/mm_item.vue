<template>
	<!-- 项目块 -->
	<view class="mm_item" v-if="!url">
		<slot></slot>
		<view class="mm_line"></view>
	</view>
	<view class="mm_item" @click="openBrowser()" v-else-if="url.indexOf('//') !== -1">
		<slot></slot>
		<view class="mm_line"></view>
	</view>
	<navigator class="mm_item" :url="url" hover-class="navigator-hover" v-else>
		<slot></slot>
		<view class="mm_line"></view>
	</navigator>
</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				type: ""
			}
		},
		methods: {
			openBrowser() {
				if (window) {
					window.open(this.url);
				}
			}
		}
	}
</script>

<style>
</style>
