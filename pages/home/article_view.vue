<template>
	<!-- 文章详情页面 -->
	<view class="page_home" id="home_article_view">
		<!-- 文章详情 -->

		<!-- 上下篇文章 -->

		<!-- 文章评论 -->
		
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
				url: "~/paper/all",
				obj: {},
				comment: []
			}
		}
	}
</script>

<style>
</style>
