<template>
	<mm_list class="list_menu">
		<navigator class="" url="/pages/home/article_list?title=关于我们">
			<>
			<view class="menu_title">{{ obj[vm.title] }}</view>
			<view class="menu_desc">
				<slot>{{ obj[vm.desc] }}</slot>
			</view>
			<view class="menu_tip">{{ obj[vm.tip] }}</view>
		</navigator>
	</mm_list>
</template>

<script>
</script>

<style>
</style>
