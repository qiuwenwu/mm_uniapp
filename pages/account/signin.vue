<template>
	<!-- 登录页面 -->
	<view class="page_account" id="account_signin">
		<mm_header></mm_header>
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_block>
							<mm_head class="sign_in_head">
								<mm_title>登录</mm_title>
							</mm_head>
							<mm_body class="sign_in_body">
								<view class="sign" v-bind:class="{ 'active': form.phone != '' }">
									<mm_title><text class="actoin" v-bind:class="{ 'hide': form.phone == '' }">请输入手机号码</text></mm_title>
									<input class="mm_input" type="text" v-model="form.phone" maxlength="11" placeholder="请输入手机号码" @blur="phone_fun()"></input>
									<mm_icon src="/static/img/input_del.png" class="input_del" v-show="form.phone != ''" @click.native="form.phone = ''"></mm_icon>
									<mm_div class="mm_tip" v-show="!tip_phone && form.phone">
										<text>手机号码位数不够</text>
									</mm_div>
								</view>
								<view class="sign" v-bind:class="{ 'active': form.password != '' }">
									<mm_title><text class="actoin" v-bind:class="{ 'hide': form.password == '' }">请输入登录密码</text></mm_title>
									<mm_desc>
										<input class="mm_input" type="password" maxlength="12" v-model="form.password" placeholder="请输入登录密码" @blur="password_fun()"></input>
										<mm_icon src="/static/img/input_del.png" class="input_del" v-show="form.password != ''" @click.native="form.password = ''"></mm_icon>
										<mm_div class="mm_tip" v-show="!tip_password && form.password">
											<text>密码不正确，请重新输入</text>
										</mm_div>
									</mm_desc>
								</view>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<navigator class="forgot" url="/pages/account/forgot">忘记密码?</navigator>
						</mm_div>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn class="login_btn" type="default" @click.native="submit()">登录</mm_btn>
						</mm_div>
					</mm_col>
					<mm_col class="login_foot">
						<mm_div>
							<text>还没有账号?</text>
							<navigator class="font_info" url="./signup">立即注册</navigator>
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_modal v-model="show">
			<mm_warp>
				<mm_grid>
					<mm_col>
						<mm_block class="b-a">
							<mm_head>
								<mm_title>注册提示</mm_title>
								<text class="close" @click="show = false">X</text>
							</mm_head>
							<mm_body v-html="msg"></mm_body>
							<mm_foot>
								<mm_group class="font_small">
									<mm_btn type="default-x" @click.native="show = false">确定</mm_btn>
								</mm_group>
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
				oauth: true,
				url_submit: "~/login",
				form: {
					phone: "",
					code: "",
					password: "",
				},
				msg: "",
				show: false,
				ret: false,
				tip_phone: true,
				tip_password: true
			}
		},
		computed: {
			check_phone() {
				var p = this.form.phone;
				if (p.length != 11) {
					return false;
				}
				return true;
			},
			check_password() {
				var p = this.form.password;
				if (!p || p.length < 6 || p.length > 12) {
					return false;
				}
				return true;
			},
			check_invitation_code() {
				var p = this.query.invitation_code;
				if (!p) {
					return false;
				}
				return true;
			}
		},
		methods: {
			phone_fun() {
				var p = this.form.phone;
				if (p.length != 11) {
					this.tip_phone = false;
				} else {
					this.tip_phone = true;
				}
			},
			password_fun() {
				var p = this.form.password;
				if (p.length < 6 || p.length > 12) {
					this.tip_password = false;
				} else {
					this.tip_password = true;
				}
			},
			submit() {
				var _this = this;
				if (this.check_phone && this.check_password) {
					this.$post(this.url_submit, this.form, function(json, status) {
						if (json) {
							if (!json.code) {
								_this.$get_user(function() {
									var url = _this.$store.state.web.redirect_url;
									if (url) {
										location.href = url;
									} else {
										location.href = "/pages/user/index";
									}
								});
							}
						}
					});
				} else {
					this.show = true;
					this.msg = "手机号码或密码错误！";
				}
			}
		},
		onLoad() {}
	}
</script>

<style>
	.mm_modal .mm_head {
		padding: 0.625rem 0.875rem;
	}

	.mm_modal .mm_body {
		padding: 0.625rem 0.875rem;
	}

	.mm_modal .mm_foot {
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	.mm_bodyer {
		height: calc(100vh - 44px);
		background: #fff;
	}

	.mm_grid_1 {
		padding: 0 1.75rem;
	}

	.forgot {
		text-align: right;
		margin: 0 auto;
		width: 100%;
		font-size: 0.75rem;
		margin-top: 0.325rem;
		margin-bottom: 2rem;
		color: #0B76C4;
	}

	#account_signin .mm_header {
		background: #fff;
		height: 44px;
		z-index: 9999;
		top: 0;
	}

	#account_signin .sign_in_head {
		width: 100%;
		height: 7rem;
		display: flex;
		align-items: center;
		font-size: 2.15rem;
		background-color: #FFFFFF;
		color: #333;
	}

	#account_signin .mm_title {
		padding: 0;
	}

	#account_signin .sign_in_body {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}


	#account_signin input {
		height: 2rem;
		padding-right: 1rem;
		width: 100%;
		position: relative;
	}

	#account_signin input:before {
		content: "";
		display: block;
		position: absolute;
		bottom: 0;
		width: 100%;
		border-bottom: 1px solid #E7E7E7;
	}

	#account_signin input:focus:before {
		border-bottom: 2px solid #FF5A6A;
	}

	#account_signin .fl {
		display: flex;
		align-items: center;
		color: #FFE06E;
	}

	#account_signin .fr,
	.font_info {
		color: #0B76C4 !important;
	}

	#account_signin .login_btn {
		width: 100%;
		background-color: #FF5A6A;
		color: #FFFFFF;
		margin-top: 5rem;
		margin: auto;
	}

	#account_signin .login_btn_disabled {
		width: 80%;
		background-color: #FFDCD9;
		color: #FFFFFF;
		margin-top: 5rem;
	}

	#account_signin .login_foot {
		height: 6rem;
		text-align: center;
		color: #999999;
		font-size: 0.75rem;
		padding-top: 1rem;
	}

	.login_foot .font_info {
		display: inline-block;
	}
</style>
