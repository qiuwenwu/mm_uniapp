<template>
	<!-- 门户搜索页面 -->
	<view class="page_home" id="home_search">
		<!-- 搜索栏-->

		<!-- 热门搜索 -->

		<!-- 搜索记录-->

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
				url: "~/home/article?"
			}
		}
	}
</script>

<style>
</style>
