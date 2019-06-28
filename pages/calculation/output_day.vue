<template>
	<!-- 每日产出页面 -->
	<view class="page_calculation" id="calculation_output_day">
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
						<mm_block>
						<!-- 	<mm_head>
								<mm_main>
									<mm_title><text>总产出：{{ user. }}</text><text class="unit">btc</text></mm_title>
								</mm_main>
							</mm_head> -->
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item v-for="(o,k) in list" :key="k">
										<mm_main>
											<mm_title>{{ o.time }}</mm_title>
											<mm_desc>
												<text class="font_success">+{{o.amount}}</text>
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
				oauth: true,
				url_get_list: "~/user/flow",
				query:{
					index: "0",
					size: 10,
					type: 1
				}
			}
		},
		methods: {
			get_list_after(json, status) {
				if(json) {
					
				}
			}
		}
	}
</script>

<style>
	.font_success { font-weight: 600; }
</style>
