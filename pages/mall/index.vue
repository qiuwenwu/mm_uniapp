<template>
	<!-- 商城首页 -->
	<mm_page class="page_mall" id="mall_index">
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
				<mm_grid col="1" class="space_x">
					<!-- 格子 -->
					<mm_col class="pn-b">
						<mm_block>
							<!-- 轮播图 -->
							<mm_swiper_img :list="list_img" />
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col class="pn-tb">
						<!-- 类目菜单 -->
						<mm_block>
							<list_menu />
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col class="pn-t">
						<!-- 特卖公告 -->
						<mm_block class="bt">
							<mm_swiper_text :list="list_text" />
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<!-- 推荐产品 -->
						<mm_list_product />
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<!-- 广告卡 -->
						<mm_block>
							<ad_card></ad_card>
						</mm_block>
					</mm_col>
					<mm_col>
						<!-- 活动横幅广告 -->
						<mm_block class="banner">
							<mm_title>务实进取 诚信共赢</mm_title>
							<mm_div url="../demo/index">
								<mm_icon icon="/static/img/ad.jpg"></mm_icon>
							</mm_div>
						</mm_block>
					</mm_col>
					<!-- 热卖产品 -->
					<mm_col>
						<!-- 推荐产品 -->
						<mm_list_product />
					</mm_col>
					<!-- 页脚 -->
					<mm_col>
						<mm_div url="../home/article_view?title=关于我们" class="footer_link">比特中心</mm_div>
						<text class="copyright">Copyright © 2019-2022 weui.io</text>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'
	import list_menu from '@/components/menu'
	import ad_card from '@/components/ad_card'

	export default {
		mixins: [mixin],
		components: {
			list_menu,
			ad_card
		},
		data() {
			return {
				auto: false,
				title: 'Hello',
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
				list_text: [{
						title: "这是一条公告，轮播公告",
						url: "/pages/mall/product_list"
					},
					{
						title: "这是一条公告，轮播公告",
						url: "/pages/mall/product_list"
					}
				]
			}
		}
	}
</script>

<style>
</style>
