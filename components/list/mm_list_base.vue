<template>
	<!-- 基础列表 -->
	<view class="mm_list_base">
		<view class="item_icon" v-if="icon" v-html="icon"></view>
		<view class="item_icon" v-else-if="icon">
			<image :src="icon"></image>
		</view>
		<view class="item_title" v-if="item_title"></view>
		<slot></slot>
		<view class="item_tip" v-if="item_tip"></view>
	</view>
</template>

<script>
	import mixin from '@/mixins/list'

	export default {
		mixins: [mixin],
		data() {
		}
	}
</script>

<style>

</style>
