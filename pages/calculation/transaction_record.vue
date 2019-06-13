<template>
	<!-- 交易记录页面 -->
	<view class="page_calculation" id="calculation_transaction_record">
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
						<!-- 筛选面板列表 -->
						<mm_block>
							<mm_body class="lr">
								
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<!-- 算力交易记录列表 -->
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
