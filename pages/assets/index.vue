<template>
	<view class="page_assets" id="assets_index">
		<mm_bodyer>
			<mm_warp>
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
											<mm_icon src="/static/img/icon_gift.png"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>DBD数量</mm_title>
											<mm_desc><text class="val">{{$float(dbd)}}</text><text class="unit">个</text>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_side>
											<mm_icon src="/static/img/icon_money.png"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>现金余额</mm_title>
											<mm_desc><text class="val">{{$float(money)}}</text><text class="unit">元</text>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_side>
											<mm_icon src="/static/img/icon_btc.png"></mm_icon>
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
				btc: 0.123123123123,
				dbd: 2.15
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

	/* 	.val {
		margin-right: 0.5rem;
		padding-right: 0.5rem;
		border-right: 1px solid rgba(0, 0, 0, 0.1);
	} */
</style>
