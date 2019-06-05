<template>
	<!-- 商品类目页 -->
	<view class="page_mall" id="mall_category">
		<!-- 商品大类目列表 -->

		<!-- 商品小类目列表 -->

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
				url: "~/mall/category?"
			}
		}
	}
</script>

<style>
</style>
