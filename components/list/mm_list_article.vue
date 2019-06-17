<template>
	<!-- 文章列表 -->
	<mm_list col="1">
		<mm_item url="http://www.elins.cn" class="hover" v-for="(o, k) in list" :key="k">
			<mm_side v-if="o[vm.icon]">
				<mm_icon :src="o[vm.icon]"></mm_icon>
			</mm_side>
			<mm_main>
				<mm_title>{{ o[vm.title] }}</mm_title>
				<mm_desc>{{ o[vm.desc] }}</mm_desc>
			</mm_main>
		</mm_item>
	</mm_list>
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
