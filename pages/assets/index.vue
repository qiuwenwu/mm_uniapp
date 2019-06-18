<template>
	<view class="page_account" id="account_signin">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="3" id="invitation">
					<mm_col width="100">
						<mm_block>
							<mm_head class="dbd_count">
								<mm_title>我的资产</mm_title>
							</mm_head>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_list col="1">
								<mm_item>
									<mm_div>
										<text>{{value|addZero}}</text>
										<mm_desc>btc余额</mm_desc>
									</mm_div>
									<mm_div>
										<text>9999.99</text>
										<mm_desc>现金余额(元)</mm_desc>
									</mm_div>
									<mm_div>
										<text>888.88</text>
										<mm_desc>DBD(个)</mm_desc>
									</mm_div>
								</mm_item>
								<mm_item>
									<mm_div>
										<text>{{value1|addZero}}</text>
										<mm_desc>昨日挖矿收益</mm_desc>
									</mm_div>
									<mm_div>
										<text>9999.9</text>
										<mm_desc>昨日推荐收益(元)</mm_desc>
									</mm_div>
								</mm_item>
							</mm_list>
						</mm_block>
					</mm_col>
				</mm_grid>
				<mm_grid col="1" id="dbd_list">
					<mm_col>
						<mm_block class="dbd">
							<mm_head class="lr">
								<mm_item class="mini" url="/pages/mall/dbd_view">
									<mm_main class="arrow">
										<mm_title>培训礼包</mm_title>
										<mm_desc class="font_info">DBD说明</mm_desc>
									</mm_main>
								</mm_item>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item class="big" url="./dbd_view?did=1">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
											<mm_desc>
												<text class="num">数量：10.33</text>
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
	#invitation .mm_item {
		display: flex;
		padding: .8rem;
		width: 100%;
		border-bottom: .5rem solid rgb(237, 237, 237);
	}

	#invitation .mm_div {
		flex: 1;
		text-align: center;
		padding: 0 .5rem;
		border-left: 1px solid #999999;
	}
	
	#invitation .mm_div:first-child {
		border: none;
	}
	
	#invitation .mm_desc {
		font-size: 0.75rem;
	}
	
	#dbd_list .mm_head { font-size: 0.75rem; }
</style>
