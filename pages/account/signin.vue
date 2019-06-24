<template>
	<!-- 登录页面 -->
	<view class="page_account" id="account_signin">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_block>
							<mm_head class="sign_in_head">
								<mm_title>登录</mm_title>
							</mm_head>
							<mm_body class="sign_in_body">
								<view class="mm_input">
									<mm_title><text class="actoin" v-bind:class="{ 'hide': form.phone == '' }">请输入手机号码</text></mm_title>
									<mm_input type="text" v-model="form.phone" :max="11" placeholder="请输入手机号码"></mm_input>
									<mm_icon src="/static/img/input_del.png" class="input_del" v-show="form.phone != ''" @click.native="clearPhone()"></mm_icon>
								</view>
								<view class="mm_input">
									<mm_title><text class="actoin" v-bind:class="{ 'hide': form.password == '' }">请输入登录密码</text></mm_title>
									<mm_desc>
										<mm_input type="password" :max="12" v-model="form.password" placeholder="请输入登录密码"></mm_input>
										<mm_icon src="/static/img/input_del.png" class="input_del" v-show="form.password != ''" @click.native="clearPassword()"></mm_icon>
										<mm_div class="mm_tip">
											<mm_icon src="/static/img/icon_warning.png" class="error_icon"></mm_icon>
											<text>密码不正确，请重新输入</text>
										</mm_div>
									</mm_desc>
								</view>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div class="center">
							<mm_div>忘记密码?</mm_div>
						</mm_div>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn class="login_btn" type="default" @click.native="submit()">登录</mm_btn>
						</mm_div>
					</mm_col>
					<mm_col>
						<mm_div class="login_foot">
							还没有账号?
							<mm_div class="font_info" url="./signup">立即注册</mm_div>
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
								<mm_group>
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
				oauth: false,
				url_submit: "~/login",
				form: {
					phone: "",
					code: "",
					password: "",
				},
				msg: "",
				show: false,
				ret: false
			}
		},
		computed: {
			check_phone() {
				var p = this.form.phone;
				if (!p || p.length != 11) {
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
										//_this.$router.push("/pages/user/index");
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
	#account_signin .sign_in_head {
		width: 100%;
		height: 7rem;
		display: flex;
		align-items: center;
		padding-left: 0.88rem;
		font-size: 2.15rem;
		background-color: #FFFFFF;
	}

	#account_signin .sign_in_body {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#account_signin .mm_input {
		width: calc(100% - 4rem);
		margin: auto;
		position: relative;
		padding-top: 1rem;
		margin-bottom: 0.25rem;
	}

	.mm_input .actoin {
		position: absolute;
		left: 0;
		top: 0;
		color: #FF5A6A;
		font-size: 0.625rem;
		transform: translate(0, 0);
		transition: all 0.2s ease-in-out;
		opacity: 1;
	}

	.mm_tip {
		position: absolute;
		left: 0;
		top: 3.25rem;
	}

	.actoin.hide {
		transform: translate(0, 1rem);
		opacity: 0;
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

	#account_signin .input_del {
		width: 1rem;
		height: 1rem;
		position: absolute;
		right: 0;
		top: 1.5rem;
	}

	#account_signin .error_icon {
		width: 1.13rem;
		height: 1.13rem;
		margin-right: .5rem;
		float: left;
	}

	#account_signin .fl {
		display: flex;
		align-items: center;
		color: #FFE06E;
	}

	#account_signin .fr,
	.font_info {
		color: #0B76C4;
	}

	#account_signin .login_btn {
		width: 80%;
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
		display: flex;
		align-items: center;
		color: #999999;
	}
</style>
