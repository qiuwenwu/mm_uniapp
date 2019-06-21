<template>
	<mm_page class="page_user" id="user_dbd_list">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col class="pn-b">
						<mm_block>
							<mm_body>
								<mm_list id="tabs" col="4" class="space_big">
									<mm_item :class="{'active': query.state === '0' }" @click.native="query.state = '0'">待付款</mm_item>
									<mm_item :class="{'active': query.state === '1' }" @click.native="query.state = '1'">待确认</mm_item>
									<mm_item :class="{'active': query.state === '2' }" @click.native="query.state = '2'">已完成</mm_item>
									<mm_item :class="{'active': query.state === '3' }" @click.native="query.state = '3'">已取消</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<mm_block>
							<mm_head>
								<mm_title>订单数：88</mm_title>
							</mm_head>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block class="dbd">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item>
										<mm_main class="font_small">
											<mm_title>20190520112121</mm_title>
											<mm_desc>待付款</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="big" url="/pages/mall/order_view">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包<text class="time">2019-06-15</text></mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
											<mm_desc>
												<text class="count">数量：12</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot class="bt">
								<mm_group class="small">
									<mm_btn>取消订单</mm_btn>
									<mm_btn type="default-x">继续支付</mm_btn>
								</mm_group>
							</mm_foot>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block class="dbd">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item>
										<mm_main class="font_small">
											<mm_title>20190520112121</mm_title>
											<mm_desc>已付款</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="big" url="/pages/mall/order_view">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包<text class="time">2019-06-15</text></mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
											<mm_desc>
												<text class="count">数量：10</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot class="bt">
								<mm_group class="small">
									<mm_btn type="info-x" url="./order_view?oid=1">查看详情</mm_btn>
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
				url: "~/api/user/dbd_list",
				query: {
					state: ""
				}
			}
		},
		methods: {}
	}
</script>

<style>
</style>
