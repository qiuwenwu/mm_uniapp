<template>
	<!-- 文章列表 -->
	<mm_list col="1">
		<mm_item :url="o[vm.url]" class="hover" v-for="(o, k) in list" :key="k">
			<mm_side v-if="o[vm.icon]">
				<mm_icon :src="o[vm.icon]"></mm_icon>
			</mm_side>
			<mm_main>
				<mm_title>{{ o[vm.title] }}</mm_title>
				<mm_desc>{{ o[vm.desc] }}<view class="collect"><text class="fa fa-heart-o" v-if="o[vm.collect] > 0"></text>{{ o[vm.collect] }}</view></mm_desc>
				<text class="time">{{ o.createTime }}</text>
			</mm_main>
		</mm_item>
	</mm_list>
</template>

<script>
	import mixin from '@/mixins/list'

	export default {
		mixins: [mixin]
	}
</script>

<style>
	
</style>
