<template>
	<!-- 提现记录页面 -->
	<view class="page_calculation" id="calculation_withdraw_record">
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
						<!-- 提现记录筛选面板 -->
						<mm_block>
							<mm_body class="lr"></mm_body>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<!-- 格子 -->
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_main>
									<mm_title><text>总提现：40</text><text class="unit">元</text></mm_title>
								</mm_main>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>2019年5月20日 10:50</mm_title>
											<mm_desc class="font_warning">
												<text>-20.00</text><text class="unit">元</text>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>2019年5月20日 10:50</mm_title>
											<mm_desc class="font_warning">
												<text>-20.00</text><text class="unit">元</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
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
	.font_warning {
		font-weight: 600;
	}
</style>
