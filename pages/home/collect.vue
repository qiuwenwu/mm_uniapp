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
							<mm_body class="lr">
								<mm_list_article :list="list" class="big" id="mm_list_article"></mm_list_article>
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
						url: "/pages/mall/product_list"
					},
					{
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner3.jpg",
						url: "/pages/mall/product_list"
					}, {
						title: "这是一文章",
						desc: "测试",
						icon: "/static/img/banner3.jpg",
						url: "/pages/mall/product_list"
					}
				]
			}
		}
	}
</script>

<style>
</style>
