<template>
	<!-- 新闻列表页 -->
	<view class="page_home" id="home_news_list">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
			<mm_warp></mm_warp>
		</mm_header>
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
							<mm_head class="font_small">
								<mm_title>课程</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list_article :list="list" class="big"></mm_list_article>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="center">
									<mm_desc>已收藏15篇</mm_desc>
								</mm_div>
							</mm_foot>
						</mm_block>
					</mm_col>

					<!-- 格子 -->
					<mm_col v-if="list_news.length > 0">
						<!-- 文章列表 -->
						<mm_block>
							<mm_head class="font_small">
								<mm_title>新闻</mm_title>
							</mm_head>
							<mm_body class="rl">
								<mm_list_news :list="list_news" class="big"></mm_list_news>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="center">
									<mm_desc>已收藏15篇</mm_desc>
								</mm_div>
							</mm_foot>
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
						createTime: "2019-06-21",
						url: "/pages/home/article_view?aid=3"
					},
					{
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner3.jpg",
						createTime: "2019-06-21",
						url: "/pages/home/article_view?aid=2"
					},
					{
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner3.jpg",
						createTime: "2019-06-21",
						url: "/pages/home/article_view?aid=1"
					}
				],
				list_news: []
			}
		}
	}
</script>

<style>
</style>
