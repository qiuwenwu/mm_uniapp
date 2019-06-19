<template>
	<mm_page class="page_calculation" id="calculation_dbd_list">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col class="pn-b">
						<mm_block>
							<mm_body>
								<mm_list id="tabs" col="4" class="space">
									<mm_item :class="{'active': query.state === '0' }" url="./dbd_list?state=0">未开启</mm_item>
									<mm_item :class="{'active': query.state === '1' }" url="./dbd_list?state=1">已生效</mm_item>
									<mm_item :class="{'active': query.state === '3' }" url="./dbd_list?state=3">待回购</mm_item>
									<mm_item :class="{'active': query.state === '4' }" url="./dbd_list?state=4">已回购</mm_item>
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
						<mm_block class="dbd">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item>
										<mm_main class="font_small">
											<mm_title>20190520112121</mm_title>
											<mm_desc>未开启</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="big" url="./dbd_view?did=1">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
											<mm_desc>
												<text class="count">数量：10.33</text>
												<text class="days">有效天数：289</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block class="dbd">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item>
										<mm_main class="font_small">
											<mm_title>20190520112121</mm_title>
											<mm_desc>未开启</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item class="big" url="./dbd_view?did=1">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
											<mm_desc>
												<text class="count">数量：10.33</text>
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
