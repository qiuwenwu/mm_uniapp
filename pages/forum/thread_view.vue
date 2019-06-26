<template>
	<!-- 主题详情页 -->
	<view class="page_forum" id="forum_thread_view">
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
						<!-- 主题详情 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">简约</mm_title>
							</mm_head>
							<mm_body v-html="obj.content"></mm_body>
							<mm_foot>
								<!-- 上下篇主题 -->
							</mm_foot>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<!-- 主题评论 -->
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
		

	</view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true
			}
		}
	}
</script>

<style>
</style>
