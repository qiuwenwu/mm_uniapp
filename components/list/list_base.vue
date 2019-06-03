<template>
	<mm_list class="list_base">
		<view class="item_icon" v-if="icon" v-html="icon"></view>
		<view class="item_icon" v-else-if="icon">
			<image :src="icon"></image>
		</view>
		<view class="item_title" v-if="item_title"></view>
		<slot></slot>
		<view class="item_tip" v-if="item_tip"></view>
	</mm_list>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>

</style>
