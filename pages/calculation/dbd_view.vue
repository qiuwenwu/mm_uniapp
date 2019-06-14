<template>
	<mm_page class="page_calculation" id="calculation_dbd_view">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" id="dbd_grid" class="space-x">
					<mm_col>
						<mm_block class="dbd" url="./dbd_view?did=1">
							<mm_body class="lr">
								<mm_list col="1" class="dbd_item">
									<mm_item>
										<mm_main class="font_small">
											<mm_title>20190520112121</mm_title>
											<mm_desc>未开启</mm_desc>
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
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_input type="number" style="text-align: right;" title="开启数量" desc="请填写开启DBD数量"></mm_input>
									<mm_item>
										<mm_main>
											<mm_title>开启时间</mm_title>
											<mm_desc>2019-05-21 10:20</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block class="bg_no">
							<mm_btn type="default" class="full" @click.native="show = true">确定</mm_btn>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_modal v-show="show">
			<mm_grid>
				<mm_col>
					<mm_block>
						<mm_head>
							<mm_title>身份验证</mm_title>
							<text @click="show = false">X</text>
						</mm_head>
						<mm_body>
							<mm_list class="ba">
								<mm_code type="success-x" desc="请输入手机验证码" :func="send_msg"></mm_code>
							</mm_list>
						</mm_body>
						<mm_foot style="margin-top: 1.5rem;">
							<mm_btn class="full" @click.native="show = false">确定</mm_btn>
						</mm_foot>
					</mm_block>
				</mm_col>
			</mm_grid>
		</mm_modal>
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
		onLoad() {

		},
		methods: {
			set_state(state) {
				this.state = state;
			},
			send_msg() {
				console.log(0);
			}
		}
	}
</script>

<style>
	.mm_modal .mm_warp { padding: 0; top:initial; height: 12rem; bottom: 0; transform: initial;
		transition: margin 0.5s; }
		
	.mm_modal .mm_block {
		padding: 1rem;
	}

	.avtive {
		margin-bottom: 0 !important;
	}

	.mm_modal .mm_title {
		text-align: center;
		font-size: 1.2rem;
		padding-bottom: .5rem;
		background: #FFFFFF;
	}

	.mm_modal text {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		width: 1.5rem;
		height: 1.5rem;
		line-height: 1.5rem;
		text-align: center;
		background: rgba(0, 0, 0, 0.1);
		color: #fff;
		border-radius: 0.125rem;
		cursor: pointer;
	}

	.mm_modal .mm_tip {
		font-size: .8rem;
		color: #999999;
		padding: .3rem 0;
	}

	.mm_modal .mm_foot>button {
		background: #717171;
		color: #ffffff;
	}
</style>
