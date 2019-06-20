<template>
	<view class="page_assets" id="assets_index">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="2" class="income">
					<mm_col>
						<mm_div>
							<mm_title>{{$float(last_output)}}</mm_title>
							<mm_desc>昨日挖矿收益(btc)</mm_desc>
						</mm_div>
					</mm_col>
					<mm_col>
						<mm_div class="bl">
							<mm_title>{{$double(last_invite)}}</mm_title>
							<mm_desc>昨日推荐收益(元)</mm_desc>
						</mm_div>
					</mm_col>
				</mm_grid>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title>我的资产</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item url="/pages/calculation/dbd_list">
										<mm_side>
											<mm_icon class="linear_purple" src="<i class='fa fa-gift'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>DBD数量</mm_title>
											<mm_desc><text class="val">{{$float(dbd)}}</text><text class="unit">个</text>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_side>
											<mm_icon class="linear_success" src="<i class='fa fa-rmb'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>现金余额</mm_title>
											<mm_desc><text class="val">{{$float(money)}}</text><text class="unit">元</text>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_side>
											<mm_icon class="linear_yellow" src="<i class='fa fa-btc'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>btc余额</mm_title>
											<mm_desc><text class="val">{{$float(btc)}}</text>
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
		data() {
			return {
				money: 8.88,
				btc: 0.12312312,
				dbd: 2.15,
				last_output: 0.123123,
				last_invite: 120.00,
			}
		},
		methods: {
			copy() {

			}
		}
	}
</script>

<style>
	#assets_index .unit {
		margin-left: 0.25rem;
		font-size: 1rem;
	}

	.income {
		margin: 0.5rem;
		text-align: center;
		color: #fff !important;
		background-image: linear-gradient(0deg, #B3315F 0%, #FF5A6A 100%);
		border-radius: 0.5rem;
		padding: 2.5rem 0;
	}
	
	.income .mm_title { font-weight: 600; }
	.income .mm_desc { font-size: 0.875rem; }

	/* 	.val {
		margin-right: 0.5rem;
		padding-right: 0.5rem;
		border-right: 1px solid rgba(0, 0, 0, 0.1);
	} */
</style>
