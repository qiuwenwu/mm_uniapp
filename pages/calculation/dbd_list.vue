<template>
	<mm_page class="page_calculation" id="calculation_dbd_view">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" id="dbd_grid" class="space-x">
					<mm_col id="dbd_list" class="pn-b">
						<mm_block class="dbd">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item class="big" url="/pages/calculation/dbd_view">
										<mm_side>
											<mm_icon src="http://img.sccnn.com/bimg/334/0957.jpg"></mm_icon>
										</mm_side>
										<mm_main class="introduce">
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">298.00</text><text class="unit">元/个</text></mm_desc>
											<mm_desc>
												有效天数：365
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot class="bt">
								<mm_group class="small">
									<mm_btn>申请回购</mm_btn>
									<mm_btn type="default-x">开启挖矿</mm_btn>
								</mm_group>
							</mm_foot>
						</mm_block>
					</mm_col>
				</mm_grid>
				<mm_grid col="1" class="space-x">
					<mm_col class="pn-b">
						<mm_block>
							<mm_body>
								<mm_list id="tabs" col="3" class="space_big">
									<mm_item :class="{'active': query.state === '1' }" @click.native="query.state = '1'">已生效</mm_item>
									<mm_item :class="{'active': query.state === '2' }" @click.native="query.state = '2'">待回购</mm_item>
									<mm_item :class="{'active': query.state === '3' }" @click.native="query.state = '3'">已回购</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<mm_block>
							<mm_head>
								<mm_title>DBD数量：88</mm_title>
							</mm_head>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item url="./dbd_panel?did=1">
										<mm_main>
											<mm_title>DBD礼包</mm_title>
											<mm_desc><text class="price">298.00</text></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
								<mm_item url="./dbd_panel?did=1">
									<mm_main>
										<mm_title>DBD礼包</mm_title>
										<mm_desc><text class="price">298.00</text></mm_desc>
									</mm_main>
								</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_modal v-model="show">
			<!-- 外套 -->
			<mm_warp class="send_sms">
				<mm_grid>
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title>身份验证</mm_title>
								<text class="close" @click="show = false">X</text>
							</mm_head>
							<mm_body>
								<mm_list class="ba">
									<mm_code type="success-x" desc="请输入手机验证码" :func="send_msg"></mm_code>
								</mm_list>
							</mm_body>
							<mm_foot style="margin-top: 1.5rem;">
								<mm_btn type="default" class="full" @click.native="show = false">确定</mm_btn>
							</mm_foot>
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
				url: "~/api/user/dbd_list",
				query: {
					state: ""
				}
			}
		},
		methods: {
			send_msg() {
				console.log(0);
			}
		}
	}
</script>
<style>
	#dbd_list { margin-bottom: 2rem; }
</style>