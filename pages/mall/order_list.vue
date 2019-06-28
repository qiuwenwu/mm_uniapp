<template>
	<mm_page class="page_user" id="user_dbd_list">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col class="pn-b">
						<mm_block>
							<mm_body>
								<mm_list id="tabs" col="4" class="space_big">
									<mm_item :class="{'active': query.state === '2' }" @click.native="get_new_list('2')">待付款</mm_item>
									<mm_item :class="{'active': query.state === '3' }" @click.native="get_new_list('3')">待确认</mm_item>
									<mm_item :class="{'active': query.state === '0' }" @click.native="get_new_list('0')">已完成</mm_item>
									<mm_item :class="{'active': query.state === '10' }" @click.native="get_new_list('10')">已取消</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<mm_block>
							<mm_head>
								<mm_title>订单数：{{ list.length }}</mm_title>
							</mm_head>
						</mm_block>
					</mm_col>
					<mm_col v-for="(o, k) in list" :key="k">
						<mm_block class="dbd">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item>
										<mm_main class="font_small">
											<mm_title>{{ o.id }}</mm_title>
											<mm_desc>{{ state_fun(o.state) }}</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="big">
										<mm_side>
											<mm_icon :src="dbd.icon"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>{{ dbd.title }}<text class="count">{{ o.amount }}</text></mm_title>
											<mm_desc><text class="price"><text class="unit">￥</text>{{ $double($num(o.money)) }}</text></mm_desc>
											<mm_desc>
												<text class="time">{{ o.time }}</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot class="bt">
								<mm_group class="small">
									<mm_btn v-if="o.state == 2" @click.native="pay(o.id)">取消订单</mm_btn>
									<mm_btn type="default-x" v-if="o.state == 2" @click.native="pay_way(o.payType, o.id)">继续支付</mm_btn>
									<navigator class="mm_btn_info-x" :url="'./order_view?id=' + o.id" v-else>查看详情</navigator>
								</mm_group>
							</mm_foot>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {
				oauth: true,
				url: "~/order/sort",
				query: {
					state: "2",
					index: 0,
					size: 10
				},
				dbd: this.$store.state.dbd
			}
		},
		methods: {
			pay_way(type, id) {
				var url = "/pages/pay/";
				switch (type) {
					case "AliPay":
						url += "ali"
						break;
					case "Transfer":
						url += "bank"
						break;
					case "CashPay":
						url += "balance_cny"
						break;
					case "BitCoinPay":
						url += "balance_btc"
						break;
					default:
						url += "wechat"
						break;
				}
				uni.navigateTo({
					url: url + '?id=' + id
				});
			},
			get_new_list(state) {
				this.query.state = state;
				this.get_list();
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
			get_list_after(json, status) {
				this.list.clear();
				if (json) {
					var d = json.data;
					if (d) {
						this.list.eachPush(d.content);
					}
				}
				this.$get_dbd();
			}
		}
	}
</script>

<style>
	.count {
		color: #888;
	}

	.count:before {
		content: " × ";
		color: #999;
	}

	.time:before {
		content: "下单时间 ";
	}
</style>
