<template>
	<!-- 表单列表 -->
	<view class="mm_list_menu">
		<navigator class="mm_block" url="/pages/home/article_list?title=关于我们">
			<view class="menu_title">{{ obj[vm.title] }}</view>
			<view class="menu_desc">
				<slot>{{ obj[vm.desc] }}</slot>
			</view>
			<view class="menu_tip">{{ obj[vm.tip] }}</view>
		</navigator>
	</view>
</template>

<script>
</script>

<style>
</style>
