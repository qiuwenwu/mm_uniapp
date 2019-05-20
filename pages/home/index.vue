<template>
	<view class="page home_index">
		<swiper_banner :list="list_banner">
			<!-- <swiper-item v-for="(o, idx) in list_banner" :key="idx">
				<navigator :url="o.url">
					<image :src="o.img" class="banner-image" mode="aspectFill" lazy-load></image>
				</navigator>
			</swiper-item> -->
		</swiper_banner>
		<list_menu/>
		<view class="ad row">
			<view class="col-50">
				<view class="ad_1">
					<image src="/static/img/ad_1.png" class="ad_image_lg"></image>
					<text class="ad_title" style="color: #f55555; margin-top: 36upx;">物超所值</text>
					<text class="ad_desc">低费率服务平台</text>
				</view>
			</view>
			<view class="col-50">
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
		<view class="banner">
			<view class="banner_title">务实进取 诚信共赢</view>
			<navigator url="../demo/index" hover-class="navigator-hover">
				<image class="banner_image" src="/static/img/ad.jpg"></image>
			</navigator>
		</view>
		
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
		<view class="footer">
			<navigator url="../home/article_view?title=关于我们" class="footer_link">比特中心</navigator>
			<text class="copyright">Copyright © 2019-2022 weui.io</text>
		</view>
	</view>
</template>

<script>
	import swiper_banner from '@/components/swiper/banner'
	import list_menu from '@/components/menu'

	export default {
		components: {
			swiper_banner,
			list_menu
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
	
	.ad {
		border-top: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
	}

	.ad_image {
		float: right;
		width: 2.5rem;
		height: 2.5rem;
	}

	.ad_image_lg {
		float: right;
		width: 4.25rem;
		height: 4.25rem;
	}

	.ad_title {
		font-size: 0.75rem;
		display: block;
		margin-top: 0.25rem;
	}

	.ad_desc {
		font-size: 0.625rem;
		color: #999;
	}

	.ad_1 {
		overflow: hidden;
		padding: 1.25rem 0.5rem;
	}

	.ad_2,
	.ad_3 {
		overflow: hidden;
		padding: 0.5rem;
	}

	.ad_2 {
		border-left: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
	}

	.ad_3 {
		border-left: 1px solid #e3e3e3;
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
</style>
