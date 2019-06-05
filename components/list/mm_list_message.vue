<template>
	<!-- 消息列表 -->
	<view class="mm_list_message">
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
