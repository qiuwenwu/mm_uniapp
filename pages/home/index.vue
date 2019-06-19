<template>
	<!-- 门户页面 -->
	<view class="page_home" id="home_index">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col class="pn-b">
						<!-- 轮播图 -->
						<mm_swiper_img :list="list_img" />
					</mm_col>
					<mm_col class="pn-t">
						<!-- 热点文章 —— 图片轮播 -->
						<mm_block class="lr">
							<mm_side class="hot_icon">
								<mm_div url="./bulletin_list"><i class="fa fa-bullhorn" aria-hidden="true"></i></mm_div>
							</mm_side>
							<mm_main class="pn">
								<mm_swiper_text :list="list_text" />
							</mm_main>
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<mm_block>
							<!-- 菜单 -->
							<list_menu />
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>

		<!-- 广告卡 -->
		<view class="ad row">
			<view class="col_50">
				<view class="ad_1">
					<image src="/static/img/ad_1.png" class="ad_image_lg"></image>
					<text class="ad_title" style="color: #f55555; margin-top: 36upx;">物超所值</text>
					<text class="ad_desc">低费率服务平台</text>
				</view>
			</view>
			<view class="col_50">
				<view class="ad_2">
					<image src="/static/img/ad_2.png" class="ad_image"></image>
					<text class="ad_title" style="color: #3cd500;">高效交易流程</text>
					<text class="ad_desc">30分钟内完成交易</text>
				</view>
				<view class="ad_3">
					<image src="/static/img/ad_3.png" class="ad_image"></image>
					<text class="ad_title" style="color: #736efe;">贴心服务支持</text>
					<text class="ad_desc">24小时在线咨询</text>
				</view>
			</view>
		</view>

		<!-- 横幅广告 -->
		<view class="banner">
			<view class="banner_title">务实进取 诚信共赢</view>
			<navigator url="../demo/index" hover-class="navigator-hover">
				<image class="banner_image" src="/static/img/ad.jpg"></image>
			</navigator>
		</view>

		<!-- 推荐产品列表 -->
		<!-- <view>
			<text class="title">{{title}}</text>
			<text class="fa fa-user-circle-o"></text>
		</view> -->
		<!-- 
		<navigator url="../user/index" hover-class="navigator-hover">
			<button type="success">跳转到新页面</button>
		</navigator>
		<view class="ma">
			<slider></slider>
		</view> -->
		<!-- <view>
			<uni-badge text="1" type="error"></uni-badge>
		</view> -->
		<!-- <text class="fa fa-btc"></text> -->
		<!-- <view class="calculation">
			<view class="calculation_title">云算力套餐</view>
			<uni-list>
				<uni-list-item title="A套餐 (5500元)" note="360天 14T算力 预计收益10%" badge-text="已售 80%" badge-type="error" :show-badge="true"
				 thumb="http://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
				<uni-list-item title="B套餐 (55000元)" note="360天 140T算力 预计收益30%" badge-text="已售 80%" badge-type="error" :show-badge="true"
				 thumb="http://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
				<uni-list-item title="C套餐 (155000元)" note="360天 420T算力 预计收益60%" badge-text="已售 80%" badge-type="error" :show-badge="true"
				 thumb="http://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
			</uni-list>
		</view> -->

		<!-- 页脚 -->
		<view class="footer">
			<navigator url="../home/article_view?title=关于我们" class="footer_link">比特中心</navigator>
			<text class="copyright">Copyright © 2019-2022 weui.io</text>
		</view>
	</view>
</template>

<script>
	import list_menu from '@/components/menu'

	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {
			list_menu
		},
		data() {
			return {
				auto: false,
				title: 'Hello',
				list_img: [{
						img: "/static/img/banner1.jpg",
						url: "/pages/home/article_view"
					},
					{
						img: "/static/img/banner2.jpg",
						url: "/pages/home/article_view"
					},
					{
						img: "/static/img/banner3.jpg",
						url: "/pages/home/article_view"
					},
					{
						img: "/static/img/banner4.jpg",
						url: "/pages/home/article_view"
					}
				],
				list_text: [{
						title: "这是一条公告，轮播公告",
						url: "/pages/home/article_view"
					},
					{
						title: "这是一条公告，轮播公告",
						url: "/pages/home/article_view"
					}
				]
			}
		}
	}
</script>

<style>
	.banner {
		padding: 1rem 0;
		text-align: center;
	}

	.banner_title {
		margin-bottom: 0.5rem;
	}

	.banner_image {
		width: 100%;
		height: 8.75rem;
	}

	.copyright {
		color: rgba(0, 0, 0, 0.3);
		font-size: 18upx;
	}

	.footer {
		text-align: center;
		padding: 1.5rem;
	}

	.footer_link {
		color: #576B95;
		font-size: 24upx;
	}

	.calculation_title {
		padding: 16upx 32upx;
		font-size: 28upx;
	}

	.hot_icon {
		padding-top: 0;
		padding-bottom: 0;
		height: 2.5rem;
		line-height: 2.5rem;
		color: #C60A0A;
	}
</style>
