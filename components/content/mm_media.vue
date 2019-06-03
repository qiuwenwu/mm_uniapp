<template>
	<view class="mm_media">
		<slot>
			<view class="menu_icon" v-if="obj[vm.icon]" v-html="obj[vm.icon]"></view>
			<view class="menu_icon" v-else-if="obj[vm.img]">
				<image :src="obj[vm.img]"></image>
			</view>
		</slot>
	</view>
</template>

<script>
	
</script>

<style>
</style>
