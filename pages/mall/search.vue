<template>
	<!-- 商城搜索页面 -->
	<view class="page_mall" id="mall_search">
		<!-- 搜索栏 -->

		<!-- 热门搜索 -->

		<!-- 搜索记录 -->

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
				url: "~/mall/search?"
			}
		}
	}
</script>

<style>
</style>
