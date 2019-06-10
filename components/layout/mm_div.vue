<template>
	<!-- 块 -->
	<view class="mm_div" v-if="!url">
		<slot></slot>
	</view>
	<view class="mm_div" @click="openBrowser()" v-else-if="url.indexOf('//') !== -1">
		<slot></slot>
	</view>
	<navigator class="mm_div" :url="url" hover-class="navigator-hover" v-else>
		<slot></slot>
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
