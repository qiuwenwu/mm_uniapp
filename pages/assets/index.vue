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
									<mm_item url="http://www.elins.cn">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_title>现金余额</mm_title>
											<mm_desc><text class="val">{{$float(money)}}</text><text class="unit">元</text>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="http://www.elins.cn">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_title>btc余额</mm_title>
											<mm_desc><text class="val">{{$float(btc)}}</text><text class="unit">个</text>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="/pages/calculation/dbd_panel">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main>
											<mm_title>DBD数量</mm_title>
											<mm_desc><text class="val">{{$float(dbd)}}</text><text class="unit">个</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
				<mm_grid col="1" id="dbd_list">
					<mm_col>
						<mm_block class="dbd">
							<mm_head class="lr">
								<mm_item url="/pages/mall/dbd_view" class="font_small">
									<mm_main class="arrow">
										<mm_title>为您推荐</mm_title>
										<mm_desc>DBD说明</mm_desc>
									</mm_main>
								</mm_item>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item class="big">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
											<mm_desc>
												<text>数量：10.33</text>
												<text class="days">有效天数：289</text>
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
		onLoad() {

		},
		methods: {
			copy() {

			}
		}
	}
</script>

<style>
	#dbd_list {
		margin-top: 1rem;
	}

	#assets_index .unit {
		margin-left: 0.5rem;
	}
	
/* 	.val {
		margin-right: 0.5rem;
		padding-right: 0.5rem;
		border-right: 1px solid rgba(0, 0, 0, 0.1);
	} */
</style>
