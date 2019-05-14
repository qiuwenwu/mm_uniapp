<template>
	<view class="menu_item">
		<view class="menu_icon" v-if="obj[vm.icon]" v-html="obj[vm.icon]"></view>
		<view class="menu_icon" v-else-if="obj[vm.img]">
			<image :src="obj[vm.img]"></image>
		</view>
		<view class="menu_title">{{ obj[vm.title] }}</view>
		<view class="menu_desc"><slot>{{ obj[vm.desc] }}</slot></view>
		<view class="menu_tip">{{ obj[vm.tip] }}</view>
	</view>
</template>

<script>
	
</script>

<style>
</style>
