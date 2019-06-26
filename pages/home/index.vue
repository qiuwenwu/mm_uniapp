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
					<mm_col class="pn-tb">
						<mm_block>
							<!-- 菜单 -->
							<list_menu />
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<!-- 热点文章 —— 图片轮播 -->
						<mm_block class="lr">
							<mm_side class="hot_icon">
								<mm_div class="font_default" url="./bulletin_list"><text class="fa fa-bullhorn"></text></mm_div>
							</mm_side>
							<mm_main class="pn">
								<mm_swiper_text :list="list_text" v-if="list_text.length > 0" />
							</mm_main>
						</mm_block>
					</mm_col>
					<!-- 横幅广告 -->
					<mm_col>
						<view class="banner">
							<view class="banner_title">务实进取 诚信共赢</view>
							<navigator url="../demo/index" hover-class="navigator-hover">
								<mm_icon src="/static/img/ad.jpg"></mm_icon>
							</navigator>
						</view>
					</mm_col>
					<mm_col id="dbd_list">
						<mm_block class="dbd">
							<mm_head class="lr">
								<mm_item url="/pages/calculation/dbd_view" class="font_small">
									<mm_div class="arrow">
										<mm_title>为您推荐</mm_title>
										<mm_desc>DBD说明</mm_desc>
									</mm_div>
								</mm_item>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item class="big" url="/pages/calculation/dbd_view">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">{{ obj.price }}</text><text class="unit">元/个</text></mm_desc>
											<mm_desc>
												有效天数：365
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div class="footer_info">
							<navigator url="../home/article_view?title=关于我们" class="footer_link">比特中心</navigator>
							<text class="copyright">Copyright © 2019-2022 weui.io</text>
						</mm_div>
					</mm_col>
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
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
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
				url_get_obj: "~/dbd/",
				obj: {
					"amount": 0.5,
					"price": "298",
					"cycle": 7
				},
				url_get_list: "~/paper/grouping/paper",
				query: {
					index: 0,
					size: 4,
					grouping: "公告"
				},
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
						url: "/pages/home/bulletin_view"
					},
					{
						title: "这是一条公告，轮播公告",
						url: "/pages/home/bulletin_view"
					}
				]
			}
		},
		methods: {
			get_list_after(json, status)
			{
				if(json){
					var lt = json.content;
					if(lt){
						this.list_text.clear();
						for(var i = 0; i < lt.length; i++){
							var o = lt[i];
							o.url = '/pages/home/bulletin_view?id=' + o.id;
							this.list_text.push(o);
						}
					}
				}
			}
		}
	}
</script>

<style>
	.banner {
		text-align: center;
	}

	.banner .mm_icon {
		height: 8.75rem;
	}

	.banner_title {
		padding: 0.5rem 0;
		background: #fff;
	}

	.banner_image {
		width: 100%;
		height: 8.75rem;
	}

	.hot_icon {
		padding-top: 0;
		padding-bottom: 0;
		height: 2.5rem;
		line-height: 2.5rem;
		position: relative;
	}

	.hot_icon:after {
		display: block;
		content: "";
		position: absolute;
		height: 60%;
		top: 20%;
		bottom: 0;
		right: 0;
		border-right: 1px solid rgba(0, 0, 0, 0.1);
	}

	.dbd .mm_head .mm_title {
		color: #333;
	}
</style>
