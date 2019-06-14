<template>
	<mm_page class="page_user" id="user_dbd_list">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col class="pn-b">
						<mm_block>
							<mm_body>
								<mm_list id="tabs" col="4" class="space">
									<mm_item :class="{'active': query.state === '0' }" url="./order_list?state=0">待付款</mm_item>
									<mm_item :class="{'active': query.state === '1' }" url="./order_list?state=1">待确认</mm_item>
									<mm_item :class="{'active': query.state === '2' }" url="./order_list?state=2">已完成</mm_item>
									<mm_item :class="{'active': query.state === '3' }" url="./order_list?state=3">已取消</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<mm_block>
							<mm_head style="border-top: 1px solid rgba(0,0,0,0.1);">
								<mm_title>DBD数量：88</mm_title>
							</mm_head>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block class="dbd" url="./dbd_view?did=1">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item>
										<mm_main class="font_small">
											<mm_title>20190520112121</mm_title>
											<mm_desc>待付款</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="big">
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
					<mm_col>
						<mm_block class="dbd" url="./dbd_view?did=1">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item>
										<mm_main class="font_small">
											<mm_title>20190520112121</mm_title>
											<mm_desc>已付款</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="big">
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
