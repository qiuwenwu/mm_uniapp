<template>
	<view class="mm_modal">
		<!-- 外套 -->
		<mm_warp>
			<slot></slot>
		</mm_warp>
		<!-- 遮罩 -->
		<mm_mask v-if="display != ''"></mm_mask>
	</view>
</template>

<script>
	export default {
		props: {
			display: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
</style>
