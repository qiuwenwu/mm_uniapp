<template>
	<!-- 代理首页 -->
	<view class="page_account" id="agent_index">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col width="100" class="pn-b">
						<mm_block>
							<mm_head class="font_small">
								<mm_title>我</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>持有DBD数量</mm_title>
											<mm_desc>198/200</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-tb">
						<mm_block>
							<mm_head class="font_small">
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
					<mm_col class="pn-t">
						<mm_block>
							<mm_head class="font_small">
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
				oauth: true,
				user: this.$store.state.user,
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

</style>
