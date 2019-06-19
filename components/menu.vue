<template>
	<mm_list class="menu">
		<navigator class="menu_item" url="/pages/home/article_view?title=关于我们">
			<view class="menu_icon" style="background-image: linear-gradient(135deg, rgb(252, 207, 49) 10%, rgb(245, 85, 85) 100%);">
				<text class="fa fa-user-circle-o"></text>
			</view>
			<text class="menu_title">关于我们</text>
		</navigator>
		<navigator class="menu_item" url="/pages/mall/dbd_view">
			<view class="menu_icon" style="background-image: linear-gradient(135deg, #FFF720 10%, #3CD500 100%);">
				<text class="fa fa-cloud"></text>
			</view>
			<text class="menu_title">DBD介绍</text>
		</navigator>
		<navigator class="menu_item" url="/pages/home/news_list">
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
	</mm_list>
</template>

<script>
	
</script>

<style>
	.menu {
		text-align: center;
		padding: 1rem 0.75rem .75rem 0.75rem;
		overflow: hidden;
	}
	
	.menu_item {
		float: left;
		width: 25%;
	}
	
	.menu_icon {
		font-size: 1.4rem;
		width: 3rem;
		height: 3rem;
		line-height: 3rem;
		border-radius: 0.5rem;
		color: #fff;
		margin: 0 auto;
	}
	
	.menu_title {
		color: #333;
		font-size: 0.625rem;
	}
</style>
