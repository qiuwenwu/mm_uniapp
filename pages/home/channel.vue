<template>
	<!-- 文章频道页面 -->
	<view class="page_home" id="home_channel">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 资讯频道 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">频道</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item url="./article_list">
										<mm_side>
											<mm_icon class="linear_red" src="<i class='fa fa-window-maximize'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>培训课程</mm_title>
										</mm_main>
									</mm_item>
									<mm_item url="./news_list">
										<mm_side>
											<mm_icon class="linear_info" src="<i class='fa fa-send'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>新闻动态</mm_title>
										</mm_main>
									</mm_item>
									<mm_item url="./bulletin_list">
										<mm_side>
											<mm_icon class="linear_yellow" src="<i class='fa fa-bullhorn'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>站内公告</mm_title>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<!-- 	<mm_col v-if="channel_sub.length > 0">
						<mm_block>
							<mm_head>
								<mm_title class="font_small">子频道</mm_title>
							</mm_head>
							<mm_body class="lr"></mm_body>
							<mm_foot></mm_foot>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title class="font_small">最新课程</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list_article class="big" :list="list"></mm_list_article>
							</mm_body>
							<mm_foot></mm_foot>
						</mm_block>
					</mm_col> -->
					<!-- 格子 -->
					<mm_col>
						<!-- 频道相关热门文章 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">最新课程</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list_article :list="list" class="big"></mm_list_article>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
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
				channel: [],
				channel_sub: [],
				url_get_list: "~/paper/grouping/paper",
				query: {
					index: 0,
					size: 10,
					grouping: "培训"
				},
				vm: {
					title: "title",
					desc: "description",
					createTime: "time",
					icon: "icon",
					url: "url"
				}
				// list: [{
				// 		aid: 3,
				// 		title: "这是一文章",
				// 		icon: "/static/img/banner3.jpg",
				// 		url: "/pages/home/article_view?aid=3",
				// 		createTime: "今天 11:15",
				// 		collect: 680
				// 	},
				// 	{
				// 		aid: 2,
				// 		title: "这是一文章",
				// 		icon: "/static/img/banner2.jpg",
				// 		url: "/pages/home/article_view?aid=2",
				// 		createTime: "2019-06-19",
				// 		collect: 936
				// 	}, {
				// 		aid: 1,
				// 		title: "这是一文章",
				// 		icon: "/static/img/banner1.jpg",
				// 		url: "/pages/home/article_view?aid=1",
				// 		createTime: "2019-06-18",
				// 		collect: 50
				// 	}
				// ]
			}
		},
		methods: {
			get_list_after(json, status) {
				if (json) {
					var lt = json.content;
					if (lt) {
						this.list.clear();
						for (var i = 0; i < lt.length; i++) {
							var o = lt[i];
							o.url = '/pages/home/article_view?id=' + o.id;
							this.list.push(o);
						}
					}
				}
			}
		}
	}
</script>

<style>
	.fa-bullhorn {
		color: #f12f04;
	}
</style>
