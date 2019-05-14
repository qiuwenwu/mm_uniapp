<template>
	<view class="page home_index">
		<swiper_banner>
			<swiper-item v-for="(o, idx) in list_banner" :key="idx">
				<navigator :url="o.url">
					<image :src="o.img" class="banner-image" mode="aspectFill" lazy-load></image>
				</navigator>
			</swiper-item>
		</swiper_banner>
		<view class="menu">
			<navigator class="menu_item" url="/pages/home/article_list?title=关于我们">
				<view class="menu_icon" style="background-image: linear-gradient(135deg, rgb(252, 207, 49) 10%, rgb(245, 85, 85) 100%);">
					<text class="fa fa-user-circle-o"></text>
				</view>
				<text class="menu_title">关于我们</text>
			</navigator>
			<navigator class="menu_item" url="/pages/mall/product_list">
				<view class="menu_icon" style="background-image: linear-gradient(135deg, #FFF720 10%, #3CD500 100%);">
					<text class="fa fa-cloud"></text>
				</view>
				<text class="menu_title">产品介绍</text>
			</navigator>
			<navigator class="menu_item" url="/pages/mall/product_list">
				<view class="menu_icon" style="background-image: linear-gradient(135deg, #5EFCE8 10%, #736EFE 100%);">
					<text class="fa fa-send"></text>
				</view>
				<text class="menu_title">新闻动态</text>
			</navigator>
			<navigator class="menu_item" url="/pages/home/question_list">
				<view class="menu_icon" style="background-image: linear-gradient(135deg, #EE9AE5 10%, #5961F9 100%);">
					<text class="fa fa-question-circle"></text>
				</view>
				<text class="menu_title">常见问题</text>
			</navigator>
		</view>
		<view class="ad row">
			<view class="col-50">
				<view class="ad_1">
					<image src="/static/img/ad_1.png" class="ad-image" style="width: 160upx; height: 160upx;"></image>
					<text class="ad_title" style="color: #f55555; margin-top: 36upx;">物超所值</text>
					<text class="ad_desc">低费率的服务平台</text>
				</view>
			</view>
			<view class="col-50">
				<view class="ad_2">
					<image src="/static/img/ad_2.png" class="ad-image" style="width: 100upx; height: 100upx;"></image>
					<text class="ad_title" style="color: #3cd500;">高效交易流程</text>
					<text class="ad_desc">5-30分钟完成一笔交易</text>
				</view>
				<view class="ad_3">
					<image src="/static/img/ad_3.png" class="ad-image" style="width: 100upx; height: 100upx;"></image>
					<text class="ad_title" style="color: #736efe;">贴心服务支持</text>
					<text class="ad_desc">24小时实时在线交流</text>
				</view>
			</view>
		</view>
		<view class="banner">
			<view class="banner_title">务实进取 诚信共赢</view>
			<image src="/static/img/ad.jpg"></image>
		</view>
		<!-- <view>
			<text class="title">{{title}}</text>
			<text class="fa fa-user-circle-o"></text>
		</view>
		<navigator url="../user/index" hover-class="navigator-hover">
			<button type="success">跳转到新页面</button>
		</navigator>
		<view class="ma">
			<slider></slider>
		</view> -->
		<!-- 		<view>
			<uni-badge text="1" type="error"></uni-badge>
		</view> -->
		<!-- <text class="fa fa-btc"></text> -->
		<!-- 		<view class="calculation">
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
		<view class="footer">
			<navigator url="#" class="footer_link">比特中心</navigator>
			<text class="copyright">Copyright © 2019-2022 weui.io</text>
		</view>
	</view>
</template>

<script>
	import swiper_banner from '@/components/swiper/banner'

	export default {
		components: {
			swiper_banner
		},
		data() {
			return {
				title: 'Hello',
				list_banner: [{
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
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.menu {
		text-align: center;
		margin-top: 25upx;
		padding: 25upx;
		overflow: hidden;
	}

	.menu_item {
		float: left;
		width: 25%;
	}

	.menu_icon {
		font-size: 48upx;
		width: 100upx;
		height: 100upx;
		line-height: 100upx;
		border-radius: 12.5upx;
		color: #fff;
		margin: 0 auto;
	}

	.menu_title {
		color: #333;
		font-size: 24upx;
	}

	.banner {
		margin-top: 25upx;
		padding: 25upx 0;
		text-align: center;
	}

	.banner_title {
		margin-bottom: 14upx;
	}

	.ad {
		margin-top: 25upx;
		border-top: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
	}

	.ad-image {
		float: right;
	}

	.ad_title {
		font-size: 28upx;
		display: block;
		margin-top: 8upx;
	}

	.ad_desc {
		font-size: 20upx;
		color: #999;
	}

	.ad_1 {
		overflow: hidden;
		padding: 50upx 16upx;
	}

	.ad_2,
	.ad_3 {
		overflow: hidden;
		padding: 16upx;
	}

	.ad_2 {
		border-left: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
	}

	.ad_3 {
		border-left: 1px solid #e3e3e3;
	}

	.fa-gift {
		font-size: 150upx;
		float: right;
		background: linear-gradient(330deg, #e05252 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #e05252 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.copyright {
		color: rgba(0, 0, 0, 0.3);
		font-size: 18upx;
	}

	.footer {
		text-align: center;
		margin-top: 25upx;
		padding: 25upx;
	}

	.footer_link {
		color: #576B95;
		font-size: 24upx;
	}

	.calculation_title {
		padding: 16upx 32upx;
		font-size: 28upx;
	}
</style>
