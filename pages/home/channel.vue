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
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>培训课程</mm_title>
										</mm_main>
									</mm_item>
									<mm_item url="./question_list">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>常见问题</mm_title>
										</mm_main>
									</mm_item>
									<mm_item url="./bulletin_list">
										<mm_side>
											<mm_icon class="font_warning" src="<i class='fa fa-bullhorn'></i>"></mm_icon>
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
								<mm_title class="font_small">热门课程</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="big">
									<mm_item v-for="(o, k) in list" :key="k">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_title>菜单项</mm_title>
											<mm_desc><text class="fa fa-heart-o"></text>&nbsp;<text class="collect"> {{ o.collect }}</text></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot></mm_foot>
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
				oauth: false,
				channel: [],
				channel_sub: [],
				list: [{
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner3.jpg",
						url: "/pages/mall/product_list",
						collect: 680
					},
					{
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner3.jpg",
						url: "/pages/mall/product_list",
						collect: 936
					}, {
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner3.jpg",
						url: "/pages/mall/product_list",
						collect: 50
					}
				]
			}
		}
	}
</script>

<style>
	.fa-heart { color: #F12F04; }
	.fa-heart-o { color: #F12F04; }
	.fa-bullhorn { color: #f12f04; }
	.collect { margin-left: 0.5rem; }
</style>
