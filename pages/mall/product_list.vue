<template>
	<!-- 产品列表页面 -->
	<view class="page_mall" id="mall_product_list">
		<!-- 产品筛选面板 -->

		<!-- 产品排序条件 -->

		<!-- 产品列表 -->

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
				url: "~/mall/product_list?"
			}
		}
	}
</script>

<style>
</style>
