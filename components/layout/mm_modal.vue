<template>
	<!-- 模态窗 -->
	<view class="mm_modal" v-show="sw">
		<slot></slot>
		<!-- 遮罩 -->
		<mm_mask v-if="display" @click="close()"></mm_mask>
	</view>
</template>

<script>
	export default {
		model: {
			prop: 'show',
			event: 'input'
		},
		props: {
			display: {
				type: String,
				default: "true"
			},
			show: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				sw: this.show
			}
		},
		methods: {
			close() {
				this.sw = false;
				this.$emit('input', this.sw);
			}
		}
	}
</script>

<style>
</style>
