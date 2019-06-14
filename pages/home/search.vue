<template>
	<!-- 门户搜索页面 -->
	<view class="page_home" id="home_search">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
			<mm_warp></mm_warp>
		</mm_header>
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 搜索栏 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">简约</mm_title>
							</mm_head>
							<mm_body class="lr"></mm_body>
							<mm_foot></mm_foot>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<!-- 热门关键词 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">简约</mm_title>
							</mm_head>
							<mm_body class="lr"></mm_body>
							<mm_foot></mm_foot>
						</mm_block>
					</mm_col>

					<!-- 格子 -->
					<mm_col>
						<!-- 历史搜索关键词 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">简约</mm_title>
							</mm_head>
							<mm_body class="lr"></mm_body>
							<mm_foot></mm_foot>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 搜索栏-->

		<!-- 热门搜索 -->

		<!-- 搜索记录-->

	</view>
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
