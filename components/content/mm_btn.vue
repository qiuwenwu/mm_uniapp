<template>
	<!-- 按钮 -->
	<button :class="'mm_btn' + te" v-if="!url">
		<slot></slot>
	</button>
	<button :class="'mm_btn' + te" @click="openBrowser()" v-else-if="url.indexOf('//') !== -1">
		<slot></slot>
	</button>
	<navigator :class="'mm_btn' + te" :url="url" hover-class="navigator-hover" v-else>
		<slot></slot>
	</navigator>
</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				default: ""
			},
			type: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				te: ""
			}
		},
		methods: {
			openBrowser() {
				if (window) {
					window.open(this.url);
				}
			}
		},
		created() {
			var t = this.type;
			if (t) {
				if (t.indexOf("_") == -1) {
					this.te = "_" + t;
				}
			}
		}
	}
</script>

<style>
</style>
