<template>
	<!-- 代理首页 -->
	<view class="page_account" id="agent_index">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col clas="pn_b">
						<mm_block>
							<mm_head class="dbd_count">
								<mm_title>我</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main class="bb">
											<mm_title>持有DBD数量</mm_title>
											<mm_desc>198/200</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
								<mm_progress :num="23">等级2</mm_progress>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="center">
									<mm_title class="font_info">等级评估周期 <text class="ml strong">2019.05.01 ~ 2019.05.31</text></mm_title>
								</mm_div>
							</mm_foot>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title>我的下级</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>推荐人数</mm_title>
											<mm_desc>201/200</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>DBD总数</mm_title>
											<mm_desc>201/200</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title>我下级的下级</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="small">
									<mm_item>
										<mm_main>
											<mm_title>推荐人数</mm_title>
											<mm_desc>201/200</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>DBD总数</mm_title>
											<mm_desc>201/200</mm_desc>
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
		data() {
			return {
				value: 8.888888888888,
				value1: 0.123123123123,
			}
		},
		filters: {
			addZero: function(data) {
				return data.toFixed(8)
			}
		},
		onLoad() {

		},
		methods: {
			copy() {

			}
		}
	}
</script>

<style>
	.mm_progress {
		padding: 2rem 1rem;
	}
</style>
