<template>
	<!-- 表单列表 -->
	<view class="mm_list_menu">
		<navigator class="mm_block" v-for="(o, k) in list" :key="k" url="/pages/home/article_list?title=关于我们">
			<view class="menu_title">{{ o[vm.title] }}</view>
			<view class="menu_desc">
				<slot>{{ o[vm.desc] }}</slot>
			</view>
			<view class="menu_tip">{{ o[vm.tip] }}</view>
		</navigator>
	</view>
</template>

<script>
	import mixin from '@/mixins/list'

	export default {
		mixins: [mixin],
		data() {}
	}
</script>

<style>
</style>
