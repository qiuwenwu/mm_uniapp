<template>
	<!-- 问题详情页 -->
	<view class="page_home" id="home_question_view">
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
				<mm_grid col="1" class="space_x">
					<!-- 格子 -->
					<mm_col>
						<!-- 问题详情 -->
						<mm_block>
							<mm_head>
								<mm_title class="font_small">简约</mm_title>
							</mm_head>
							<mm_body>
								<mm_div v-html="obj.content"></mm_div>
							</mm_body>
							<mm_foot>
								<!-- 上下篇问题 -->
							</mm_foot>
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
				oauth: false
			}
		}
	}
</script>

<style>
</style>
