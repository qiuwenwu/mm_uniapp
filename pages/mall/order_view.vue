<template>
	<!-- 订单详情页面 -->
	<view class="page_mall" id="mall_order_view">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head class='bill_title'>
								<mm_title>{{ dbd.title }}</mm_title>
								<mm_desc>比特中心</mm_desc>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="small">
									<mm_item>
										<mm_main>
											<mm_title>下单时间</mm_title>
											<mm_desc>{{ obj.time }}</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>订单编号</mm_title>
											<mm_desc>{{ obj.id }}</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>购买数量</mm_title>
											<mm_desc><text>{{ obj.amount }}</text><text class="unit">个</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>付款方式</mm_title>
											<mm_desc><text>{{ pay_way(obj.payType) }}</text>
												<!-- <text class="font_info">修改</text> -->
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>支付金额</mm_title>
											<mm_desc><text class="price">{{ $double($num(obj.money)) }}</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>订单状态</mm_title>
											<mm_desc class="font_dark">{{ state_fun(obj.type) }}</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
					<!-- <mm_foot class="bt">
								<mm_div class="arrow" url="/pages/assets/bill_cny">
									<mm_title>扣费记录</mm_title>
								</mm_div>
							</mm_foot> -->
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_group>
							<mm_btn type="warning-x" class="font_small" @click.native="$router.go(-1)">关闭</mm_btn>
						</mm_group>
					</mm_col>
					<!-- <mm_col>
						<mm_div id="gb_btn">
							<view class="agreement">
								查看<view>《扣除授权确认书》</view>
							</view>
						</mm_div>
					</mm_col> -->
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
				state: 0,
				url_get_obj: "~/order/" + this.$route.query.id,
				obj: {
					"id": "", // 订单ID
					"type": 1, // 订单类型
					"amount": 0, // 购买数量
					"money": "0.00", // 付款金额
					"payType": "", // 购买方式
					"payReason": "", // 购买理由
					"time": "", // 时间
					"courierCompany": "", // 物流公司
					"shipmentNumber": "", // 发货方式
					"state": 0 // 订单状态
				},
				dbd: this.$store.state.dbd
			}
		},
		methods: {
			pay_way(type) {
				var pay = "";
				switch (type) {
					case "AliPay":
						pay = "支付宝"
						break;
					case "Transfer":
						pay = "网银"
						break;
					case "CashPay":
						pay = "现金余额"
						break;
					case "BitCoinPay":
						pay = "btc余额"
						break;
					default:
						pay = "微信支付"
						break;
				}
				return pay;
			},
			state_fun(state) {
				var s = "";
				switch (state) {
					case 0:
						s = "已完成"
						break;
					case 2:
						s = "待付款"
						break;
					case 3:
						s = "待确认"
						break;
					default:
						s = "已取消"
						break;
				}
				return s;
			},
			get_obj_after(json, status){
				if(json){
					if(json.data){
						this.$obj.push(this.obj, json.data);
					}
				}
				this.$get_dbd();
			}
		}
	}
</script>

<style>
	.bill_title {
		background: #fff;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		text-align: center;
		padding: 1rem 0;
	}

	.bill_title .mm_title {
		font-weight: 600;
	}

	.bill_title .mm_desc {
		font-size: 0.75rem;
		color: #333;
	}

	#mall_order_view .font_info {
		margin-left: 0.5rem;
	}


	.agreement {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		font-size: .6rem;
		color: #999999;
	}

	.agreement view {
		color: #4c838a;
	}

	;
</style>
