<template>
	<view class="ad_card">
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
</template>

<script>
</script>

<style>
	.ad_card {
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
		font-size: 0.625rem;
		display: block;
		margin-top: 0.25rem;
	}

	.ad_desc {
		font-size: 0.5rem;
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
</style>
