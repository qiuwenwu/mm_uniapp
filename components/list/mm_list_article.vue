<template>
	<!-- 文章列表 -->
	<view class="mm_list_article">
		<!-- 列表项 -->
		<mm_item class="hover" v-for="(o, k) in list" :key="k">
			<mm_div>
				<mm_side>
					<mm_icon :icon="o[vm.icon]"></mm_icon>
				</mm_side>
				<mm_main>
					<mm_title>标题</mm_title>
					<mm_desc>描述</mm_desc>
					<mm_keyword>关键词</mm_keyword>
				</mm_main>
			</mm_div>
		</mm_item>
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
