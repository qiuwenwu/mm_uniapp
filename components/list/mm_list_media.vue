<template>
	<!-- 媒体列表 -->
	<view class="mm_list_media">
		<slot></slot>
	</view>
</template>

<script>
	import mixin from '@/mixins/list'

	export default {
		mixins: [mixin],
		data() {}
	}
</script>

<style>
</style>
