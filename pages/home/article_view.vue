<template>
	<!-- 文章详情页面 -->
	<view class="page_home" id="home_article_view">
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
				<mm_grid col="1" class="space">
					<!-- 格子 -->
					<mm_col>
						<!-- 文章详情 -->
						<mm_block>
							<mm_head class="rl">
								<mm_item>
									<mm_side class="collect">
										<mm_icon class="font_red" src="<i class='fa fa-heart'></i>"></mm_icon>
										<text>999</text>
									</mm_side>
									<mm_main>
										<mm_title class="article_title">这是一篇很牛气的文章</mm_title>
										<mm_desc>2019年06月20</mm_desc>
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
	.collect {  text-align: center; }
	.collect .mm_icon { font-size: 1.2rem; }
	.article_title { font-size: 1rem; color: #333; font-weight: 600; }
	#home_article_view .mm_desc { clear: both; }
	#home_article_view .mm_body { overflow: hidden; }
	#home_article_view image { max-width: 100%; }
</style>
