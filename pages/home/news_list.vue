<template>
	<!-- 新闻列表页 -->
	<view class="page_home" id="home_news_list">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 文章列表 -->
						<mm_block>
							<mm_body class="rl">
								<mm_list_news :list="list" class="big"></mm_list_news>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 新闻筛选面板 -->

		<!-- 新闻排序条件 -->

		<!-- 新闻列表 -->

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
				list: [{
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner3.jpg",
						createTime: "2019-05-19",
						url: "/pages/home/news_view?aid=3"
					},
					{
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner2.jpg",
						createTime: "2019-04-01",
						url: "/pages/home/news_view?aid=2"
					}, {
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner1.jpg",
						createTime: "2019-03-26",
						url: "/pages/home/news_view?aid=1"
					}
				]
			}
		}
	}
</script>

<style>
</style>
