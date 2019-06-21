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
										<mm_title class="article_title">这是一篇很牛气的新闻</mm_title>
										<mm_desc>2019-06-20</mm_desc>
									</mm_main>
								</mm_item>
							</mm_head>
							<mm_body class="pa">
							<h4>大标题</h4>
							<h5>章标题</h5>
							<h6>1.1节标题</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.</p>
							<image src="/static/img/banner3.jpg"></image>
							<h6>1.2 节标题<small>试测</small>试测<big>试测</big></h6>
							<p>测如何</p>
							<p>测试测试测试测试测试测试测试测试测试测试测<small>试测</small>试测<big>试测</big>试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测<span class="a-75">试测</span><span
								 class="px-9">试测</span>试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试看看如何</p>
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
				oauth: false,
				url: "~/paper/all",
				obj: {},
				comment: []
			}
		}
	}
</script>

<style>
	.collect {  text-align: center; }
	.collect [class*=fa-heart] { font-size: 1.3rem; margin: 0; }
	.article_title { font-size: 0.875rem; color: #333; font-weight: 600; text-align: center; width: 100%; }
	#home_news_view .mm_head { background: #fff; border-bottom: 1px solid rgba(0,0,0,0.1); }
	#home_news_view .mm_desc { clear: both; }
	#home_news_view .mm_body { overflow: hidden; }
	#home_news_view image { max-width: 100%; }
</style>
