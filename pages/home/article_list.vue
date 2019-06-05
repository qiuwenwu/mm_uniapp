<template>
	<!-- 文章列表页面 -->
	<view class="page_home" id="home_article_list">
		<!-- 文章筛选面板 -->

		<!-- 文章排序条件 -->

		<!-- 文章列表 -->
		<!-- <mm_list_article :list="list"></mm_list_article> -->
		{{ list }}
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
				url: "~/paper/all"
			}
		},
		methods: {
			input(param) {
				var pm = this.$obj.copy(param);
				pm.index = (param.page - 1) + "";
				delete pm.page;
				return pm;
			}
		}
	}
</script>

<style>

</style>
