<template>
	<!-- 支付宝付款页面 -->
	<view class="page" id="pay_ali">
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
						<!-- 付款明细 -->
						<mm_block>
							<mm_head class="font_small">
								<mm_title>付款明细</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="small">
									<mm_item>
										<mm_main>
											<mm_title>订单编号</mm_title>
											<mm_desc>{{ obj.id }}</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>购买数量</mm_title>
											<mm_desc><text class="num">{{ query.num }}</text><text class="unit">个</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>支付金额</mm_title>
											<mm_desc class="price"><text class="unit">￥</text><text>{{ obj.money }}</text></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<mm_btn type="default" class="full" @click.native="submit()">确认支付</mm_btn>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 支付信息 -->

		<!-- 支付表单 -->

		<!-- 数字键盘 -->
	</view>
</template>

<script>
	document.forms[0].submit();
</script>
<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true,
				text: "",
				url_get_obj: "~/dbd/buy",
				query: {
					num: "",
					// Transfer AliPay CashPay BitCoinPay
					payType: "BitCoinTransfer"
				},
				obj: {
					"id": "",
					"userId": 0,
					"type": 0,
					"commodityId": "0",
					"amount": 0,
					"money": "0",
					"payReason": "0",
					"time": "1970-01-01 00:00:00",
					"state": 0
				}
			}
		},
		methods: {
			submit() {
				var _this = this;
				this.$post('~/pay/', {
					order_id: this.obj.id
				}, function(text, status) {
					
				});
			}
		}
	}
</script>

<style>
</style>
