<template>
	<!-- 文章列表页面 -->
	<mm_page class="page_home" id="home_article_list">
		<!-- 外套 -->
		<mm_warp>
			<!-- 栅格 -->
			<mm_grid col="1" class="space-x">
				<!-- 格子 -->
				<mm_col class="pn-tb">
					<!-- 热点文章 —— 图片轮播 -->
					<mm_block>
						<mm_body>
							<mm_swiper_img :list="list_img" />
						</mm_body>
					</mm_block>
				</mm_col>
				<!-- 格子 -->
				<mm_col class="pn-t">
					<!-- 热点文章 —— 图片轮播 -->
					<mm_block class="lr">
						<mm_side class="hot_icon">
							<i class="fa fa-bullhorn" aria-hidden="true"></i>
						</mm_side>
						<mm_main class="pn">
							<mm_swiper_text :list="list_text" />
						</mm_main>
					</mm_block>
				</mm_col>
				<mm_col>
					<!-- 文章筛选面板 -->
					<mm_block>
						<mm_col>
							<mm_block>
								<mm_body>

								</mm_body>
							</mm_block>
						</mm_col>
					</mm_block>
				</mm_col>
				<!-- 格子 -->
				<mm_col>
					<!-- 文章排序条件 -->
					<mm_block></mm_block>
				</mm_col>
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
	</mm_page>
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
				query: {
					cid: ""
				},
				list_img: [{
						img: "/static/img/banner1.jpg",
						url: "/pages/mall/product_list"
					},
					{
						img: "/static/img/banner2.jpg",
						url: "/pages/mall/product_list"
					},
					{
						img: "/static/img/banner3.jpg",
						url: "/pages/mall/product_list"
					},
					{
						img: "/static/img/banner4.jpg",
						url: "/pages/mall/product_list"
					}
				],
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
		},
		methods: {
			get_list_before(param) {
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
