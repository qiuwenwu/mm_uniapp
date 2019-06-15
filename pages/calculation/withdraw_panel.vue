<template>
	<!-- 提现面板页面 -->
	<view class="page_calculation" id="calculation_withdraw_panel">
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

						<mm_block>
							<!-- 提示 -->
							<mm_head>
								<mm_title class="font_small"><text class="font_success">请确认提现的微信收款二维码</text></mm_title>
							</mm_head>
							<!-- 二维码展示 -->
							<mm_body class="lr">
								<mm_list col="1">
									<mm_item>
										<mm_side class="qrcode">
											<mm_icon src="/static/img/pay_qrcode_wechat.png"></mm_icon>
										</mm_side>
									</mm_item>
									<mm_item class="mini">
										<mm_main class="bt">
											<mm_title>余额</mm_title>
											<mm_desc class="price"><text class="unit">￥</text>389.65</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 提现表单 -->
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title class="font_small">提现额度</mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.money" desc="请输入提现额度"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<!-- 提交按钮 -->
						<mm_div>
							<mm_btn class="full" type="default" @click.native="show = true">提现</mm_btn>
						</mm_div>
					</mm_col>
					<mm_col class="pn-t">
						<mm_div class="center" url="./withdraw_record"><text class="font_small font_info">提现记录</text></mm_div>
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
	</view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: false,
				form: {
					money: '',
					code: ''
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
	.qrcode {
		padding: 2rem;
		float: none;
	}

	.qrcode .mm_icon {
		width: 8rem;
		height: 8rem;
		margin: auto !important;
	}

	#calculation_withdraw_panel .balance {
		margin-top: .3rem;
		padding: .5rem;
		color: #999;
	}


	#calculation_withdraw_panel .balance_show_symbol {
		float: left;
		height: 100%;
		line-height: 2.5rem;
	}

	#calculation_withdraw_panel .font_big {
		font-size: 1.5rem;
	}


	#calculation_withdraw_panel .submit_btn {
		background: #333;
		color: #fff;
		border-color: #333;
		width: 90%;
	}
</style>
