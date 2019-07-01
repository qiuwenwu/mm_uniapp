<template>
	<!-- 支付宝付款页面 -->
	<view class="page" id="pay_ali">
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
		<view id="form_html"></view>
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
				url_get_obj: "~/order/" + this.$route.query.id,
				query: {
					id: "",
				},
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
				
			}
		},
		methods: {
			submit() {
				var _this = this;
				this.$post('~/pay/', {
					order_id: this.obj.id
				}, function(ret, status) {
					var html = document.getElementById('form_html');
					html.innerHTML = ret.responseText;
					document.forms[0].submit();
				});
			}
		}
	}
</script>

<style>
</style>
