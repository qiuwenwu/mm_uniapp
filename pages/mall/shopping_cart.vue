<template>
	<!-- 购物车页面 -->
	<view class="page_mall" id="mall_shopping_cart">
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
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title class="font_small">购买数量</mm_title>
							</mm_head>
							<mm_body>
								<mm_list col="1" class="mini">
									<mm_input type="number" desc="请输入要购买的数量"></mm_input>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 产品基本信息 -->

		<!-- 产品属性 -->

		<!-- 产品评论 -->

		<!-- 数字键盘 -->
		<mm_modal v-model="show">
			<mm_warp class="pay_warp">
				<mm_grid>
					<mm_col>
						<mm_block>
							<mm_head class="pay_head">
								<mm_title class="center">请输入支付密码</mm_title>
								<text class="close" @click="show = false">X</text>
							</mm_head>
							<mm_body class="pay_body">
								<mm_item class="center">
									<mm_title class="ptb">￥0.01</mm_title>
								</mm_item>
								<mm_item class="pay_type_div" @click.native="showPayType()">
									<mm_div class="balance_div">
										<mm_icon src="/static/img/balance.png" class="balance_icon"></mm_icon>
									</mm_div>
									<mm_div class="balance_select_text">
										<mm_desc>余额</mm_desc>
									</mm_div>
									<mm_div class="balance_div">
										<mm_icon src="/static/img/arrow-right.png" class="arrow-right"></mm_icon>
									</mm_div>
								</mm_item>
								<mm_div class="password_input">
									<mm_item class="password_input_word" @click.native="showNum()">
										<mm_div class="password_dot" v-if="passwordNum > 0"></mm_div>
									</mm_item>
									<mm_item class="password_input_word" @click.native="showNum()">
										<mm_div class="password_dot" v-if="passwordNum > 1"></mm_div>
									</mm_item>
									<mm_item class="password_input_word" @click.native="showNum()">
										<mm_div class="password_dot" v-if="passwordNum > 2"></mm_div>
									</mm_item>
									<mm_item class="password_input_word" @click.native="showNum()">
										<mm_div class="password_dot" v-if="passwordNum > 3"></mm_div>
									</mm_item>
									<mm_item class="password_input_word" @click.native="showNum()">
										<mm_div class="password_dot" v-if="passwordNum > 4"></mm_div>
									</mm_item>
									<mm_item class="password_input_word" @click.native="showNum()">
										<mm_div class="password_dot" v-if="passwordNum > 5"></mm_div>
									</mm_item>
								</mm_div>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
			<mm_warp class="send_sms" v-show="numBlock">
				<mm_grid>
					<mm_col>
						<mm_block class="number_block">
							<mm_body class="center">
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(1)">1</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(2)">2</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(3)">3</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(4)">4</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(5)">5</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(6)">6</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(7)">7</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(8)">8</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(9)">9</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number_gray" @click="inputNumber()"></h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number" @click="inputNumber(0)">0</h5>
								</mm_item>
								<mm_item class="mm_col_33">
									<h5 class="number_gray" @click="inputNumber(-1)">
										<mm_icon class="backspace" src="/static/img/backspace.png"></mm_icon>
									</h5>
								</mm_item>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
			<mm_warp class="send_sms" v-show="show">
				<mm_grid>
					<mm_col>
						<mm_block class="number_block">
							<mm_head class="pay_head">
								<mm_title class="center">选择支付方式</mm_title>
							</mm_head>
							<mm_body class="center">
								<mm_item class="pay_type_div_select">
									<mm_div class="balance_div">
										<mm_icon src="/static/img/balance.png" class="balance_icon"></mm_icon>
									</mm_div>
									<mm_div class="balance_select_text">
										<mm_desc>余额</mm_desc>
									</mm_div>
								</mm_item>
								<mm_item class="pay_type_div_select">
									<mm_div class="balance_div">
										<mm_icon src="/static/img/balance.png" class="balance_icon"></mm_icon>
									</mm_div>
									<mm_div class="balance_select_text">
										<mm_desc>BTC</mm_desc>
									</mm_div>
								</mm_item>
							</mm_body>
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
				passwordNum: 0,
				numBlock: false,
				payTypeBlock: true
			}
		},
		methods: {
			inputNumber(num) {
				if (num > 0) {
					if (this.passwordNum < 6) {
						this.passwordNum++
					}
				} else {
					if (this.passwordNum > 0) {
						this.passwordNum--
					}
				};
			},
			showPayType() {
				this.payTypeBlock = true;
				this.numBlock = false;
			},
			showNum() {
				this.payTypeBlock = false;
				this.numBlock = true;
			}
		}
	}
</script>

<style>
</style>
