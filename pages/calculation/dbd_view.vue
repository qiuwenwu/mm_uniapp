<template>
	<mm_page class="page_calculation" id="calculation_dbd_view">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<!-- 礼包展示 -->
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_side class="dbd_view">
											<mm_icon :src="dbd.icon"></mm_icon>
										</mm_side>
									</mm_item>
									<mm_item>
										<mm_main class="bt">
											<mm_title>价格</mm_title>
											<mm_desc><text class="price">{{ dbd.price }}</text><text class="unit">元/个</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>有效时长</mm_title>
											<mm_desc><text class="days">365</text><text class="unit">天</text></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-b">
						<mm_block>
							<mm_body>
								<mm_list id="tabs" col="2" class="space_big">
									<mm_item :class="{'active': state == '1' }" @click.native="state = '1'">产品描述</mm_item>
									<mm_item :class="{'active': state == '2' }" @click.native="get_dbd_statement()">法律声明</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col class="pn-t">
						<mm_block>
							<mm_div class="pa" v-show="state == '1'" v-html="dbd.content"></mm_div>
							<mm_div class="pa" v-show="state == '2'" v-html="dbd_statement"></mm_div>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_footer>
			<mm_warp>
				<mm_grid>
					<mm_col>
						<mm_group>
							<view class="buy_num"><input type="number" v-model="form.num" placeholder="请输入要购买的数量" placeholder-class="desc_color"></input></view>
							<mm_btn type="default" @click.native="buy()">
								立即购买
							</mm_btn>
						</mm_group>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_footer>
		<mm_modal v-model="show">
			<mm_warp class="pay_warp">
				<mm_grid>
					<mm_col>
						<mm_block class="b-a">
							<mm_head class="font_small">
								<mm_title>支付方式</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item @click.native="pay('ali')">
										<mm_side>
											<mm_icon class="linear_yellow" src="<i class='fa fa-btc'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>支付宝</mm_title>
										</mm_main>
									</mm_item>
									<mm_item @click.native="pay('wechat')">
										<mm_side>
											<mm_icon class="linear_yellow" src="<i class='fa fa-btc'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>微信</mm_title>
										</mm_main>
									</mm_item>
									<mm_item @click.native="pay('bank')">
										<mm_side>
											<mm_icon class="linear_yellow" src="<i class='fa fa-btc'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>银行卡</mm_title>
										</mm_main>
									</mm_item>
									<mm_item @click.native="pay('balance_cny')">
										<mm_side>
											<mm_icon class="linear_success" src="<i class='fa fa-rmb'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>现金余额</mm_title>
										</mm_main>
									</mm_item>
									<mm_item @click.native="pay('balance_btc')">
										<mm_side>
											<mm_icon class="linear_yellow" src="<i class='fa fa-btc'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>btc余额</mm_title>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_modal>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {
				oauth: true,
				state: "1",
				url_get_obj: "~/dbd/",
				url_submit: "~/dbd/buy",
				dbd_statement: "",
				form: {
					num: "",
					payType: ""
				},
				dbd: this.$store.state.dbd,
				way: ""
			}
		},
		methods: {
			pay(way) {
				var payType = "";
				switch (way) {
					case "ali":
						payType = "AliPay"
						break;
					case "bank":
						payType = "Transfer"
						break;
					case "balance_cny":
						payType = "CashPay"
						break;
					case "balance_btc":
						payType = "BitCoinPay"
						break;
					default:
						payType = "Wechat"
						break;
				}
				this.form.payType = payType;
				this.way = way;
			},
			submit_after(json, status) {
				if(json){
					if(!json.state){
						
					}
				}
			},
			buy() {
				var n = this.form.num;
				if (!n) {
					this.alert('购买的数量不能为空');
					return;
				} else if (n > 1000) {
					this.alert('单次购买的数量不能大于1000');
					return;
				}
				this.show = true;
				// uni.navigateTo({
				// 	url: '/pages/mall/shopping_cart?num=' + this.form.num
				// });
			},
			get() {
				this.$get_dbd();
			},
			get_dbd_statement() {
				var _this = this;
				this.state = '2';
				if (this.dbd_statement) {
					return;
				}
				this.$get('~/paper/title?title=DBD法律', function(json, status) {
					if (json) {
						var lt = json.data;
						if (lt.length > 0) {
							_this.dbd_statement = lt[0].content;
						}
					}
				});
			}
		}
	}
</script>

<style>
	.buy_num {
		padding: 0.625rem 0.875rem;
		background: rgba(85, 85, 85, .8);

	}

	input {
		color: #fff !important;
	}

	.days {
		color: #38f;
	}

	.dbd_view {
		float: none;
	}

	.dbd_view .mm_icon {
		width: 100%;
		height: 8rem;
		margin: auto !important;
	}

	.mm_bodyer {
		margin-bottom: 3rem;
	}

	#calculation_dbd_view .send_sms {
		height: unset;
	}

	#calculation_dbd_view .number_block {
		padding: 0;
		height: unset;
	}

	#calculation_dbd_view .number_dialog {
		position: fixed;
		left: 0;
		bottom: 0;
	}

	#calculation_dbd_view .number {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#calculation_dbd_view .number_gray {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ECECEC;
	}

	#calculation_dbd_view .mm_col_33 {
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-right: 1px solid #F3F3F3;
		border-bottom: 1px solid #F3F3F3;
	}

	#calculation_dbd_view .mm_col_33:nth-child(3n) {
		border-right: none;
	}

	#calculation_dbd_view .backspace {
		height: 2rem;
		width: 2rem;
	}

	#calculation_dbd_view .pay_warp {
		width: 80%;
		top: 36%
	}

	#calculation_dbd_view .pay_head {
		position: relative;
	}

	#calculation_dbd_view .close {
		position: absolute;
		top: .4rem;
		left: .5rem;
		width: 1rem;
		height: 1rem;
		line-height: 1.1rem;
	}

	#calculation_dbd_view .pay_body {
		padding: 1rem;
	}

	#calculation_dbd_view .password_input {
		display: flex;
		align-items: center;
		width: 100%;
		height: 2.5rem;
		border: 1px solid #AAAAAA;
		box-sizing: border-box;
	}

	#calculation_dbd_view .password_input_word {
		flex: 1;
		height: 100%;
		border-right: 1px solid #EDEDED;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#calculation_dbd_view .password_input_word:last-child {
		border-right: none
	}

	#calculation_dbd_view .password_dot {
		height: 1rem;
		width: 1rem;
		background-color: #000000;
		border-radius: 1rem;
	}

	#calculation_dbd_view .pay_type_div {
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: .5rem 0;
		border-bottom: 1px solid #EAEAEA;
		border-top: 1px solid #EAEAEA;
	}

	#calculation_dbd_view .pay_type_div_select {
		height: 2.6rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #EAEAEA;
	}

	#calculation_dbd_view .pay_type_div_select:last-child {
		border-bottom: none;
	}

	#calculation_dbd_view .balance_icon {
		width: 1.3rem;
		height: 1.3rem;
	}

	#calculation_dbd_view .arrow-right {
		width: 1rem;
		height: 1rem;
	}

	#calculation_dbd_view .balance_div {
		width: 2rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#calculation_dbd_view .balance_select_text {
		height: 100%;
		flex: 1;
		display: flex;
		align-items: center;
	}
</style>
