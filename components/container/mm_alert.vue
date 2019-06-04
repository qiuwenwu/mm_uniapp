<template>
	<!-- 警告框 -->
	<view :class="'mm_alert' + te">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			theme: {
				type: String,
				default: "primary"
			}
		},
		data() {
			return {
				te: this.theme
			}
		},
		created() {
			if (this.te) {
				if (this.te.indexOf("_") == -1) {
					this.te = "_" + this.te;
				}
			}
		}
	}
</script>

<style>
</style>
