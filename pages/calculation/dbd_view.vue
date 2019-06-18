<template>
	<mm_page class="page_calculation" id="calculation_dbd_view">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<!-- 礼包展示 -->
							<mm_body class="tb">
								<mm_list col="1">
									<mm_item>
										<mm_side class="dbd_view">
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
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full" @click.native="show = true">开启</mm_btn>
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_footer>
			<mm_warp>
				<mm_grid>
					<mm_col>
						<mm_div @click.native="buy()">
							立即购买
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_footer>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {
				state: 0
			}
		},
		methods: {
			send_msg() {
				console.log(0);
			},
			buy() {

			}
		}
	}
</script>

<style>
	.dbd_view {
		float: none;
	}

	.dbd_view .mm_icon {
		width: 100%;
		height: 8rem;
		margin: auto !important;
	}
</style>
