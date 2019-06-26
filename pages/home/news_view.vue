<template>
	<!-- 新闻详情页面 -->
	<view class="page_home" id="home_news_view">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space_big">
					<!-- 格子 -->
					<mm_col>
						<!-- 新闻详情 -->
						<mm_block>
							<mm_head class="rl">
								<mm_item>
									<mm_main class="center">
										<mm_title class="article_title">{{ obj.title }}</mm_title>
										<mm_desc>{{ $toTime(obj.time, 'yyyy年MM月dd日') }}</mm_desc>
									</mm_main>
								</mm_item>
							</mm_head>
							<mm_body class="pa" v-html="obj.content">
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 新闻详情 -->

		<!-- 上下篇新闻 -->

		<!-- 新闻评论 -->

	</view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true,
				url_get_obj: "~/paper/id",
				query: {
					id: "",
					title: ""
				},
				obj: {
					author: "",
					content: "",
					description: "",
					display: 0,
					grouping: "",
					id: 0,
					keyWords: [],
					state: 0,
					time: "2019-06-14 15:01:16",
					title: "",
					users: []
				},
				comment: []
			}
		}
	}
</script>

<style>
	.collect {
		text-align: center;
	}

	.collect [class*=fa-heart] {
		font-size: 1.3rem;
		margin: 0;
	}

	.article_title {
		font-size: 0.875rem;
		color: #333;
		font-weight: 600;
		text-align: center;
		width: 100%;
	}

	#home_news_view .mm_head {
		background: #fff;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	#home_news_view .mm_desc {
		clear: both;
	}

	#home_news_view .mm_body {
		overflow: hidden;
	}

	#home_news_view image {
		max-width: 100%;
	}
</style>
