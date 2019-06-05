<template>
	<!-- 专题页面 -->
	<view class="page_home" id="home_special" v-html="obj.content"></view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: false,
				url: "~/home/article?"
			}
		}
	}
</script>

<style>

</style>
