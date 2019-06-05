<template>
	<!-- 购物车页面 -->
	<view class="page_mall" id="mall_shopping_cart">
		<!-- 产品基本信息 -->
		
		<!-- 产品属性 -->
		
		<!-- 产品评论 -->
		
	</view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: false,
				url: "~/mall/shopping_cart?"
			}
		}
	}
</script>

<style>
</style>
