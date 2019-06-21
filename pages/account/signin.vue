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
									<mm_desc>
										<input type="text" v-model="form.phone" placeholder="请输入手机号码" />
										<mm_icon src="/static/img/input_del.png" class="input_del" v-show="form.phone != ''" @click.native="clearPhone()"></mm_icon>
									</mm_desc>
								</view>
								<view class="mm_input">
									<mm_title><text class="actoin" v-bind:class="{ 'hide': form.password == '' }">请输入登录密码</text></mm_title>
									<mm_desc>
										<input type="password" v-model="form.password" placeholder="请输入登录密码" />
										<mm_icon src="/static/img/input_del.png" class="input_del" v-show="form.password != ''" @click.native="clearPassword()"></mm_icon>
									</mm_desc>
								</view>
								<view class="form_links">
									<mm_div class="fl">
										<mm_icon src="/static/img/icon_warning.png" class="error_icon"></mm_icon>
										<text>密码不正确，请重新输入</text>
									</mm_div>
									<mm_div class="fr">忘记密码?</mm_div>
								</view>
								<mm_btn class="login_btn" type="default">登录</mm_btn>
								<!-- <mm_btn class="login_btn_disabled" type="default">登录</mm_btn> -->
								<mm_div class="login_foot">
									<mm_desc>还没有账号? </mm_desc>
									<mm_item class="link_text">立即注册</mm_item>
								</mm_div>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_submit: "~/test",
				form: {
					phone: "",
					password: ""
				}
			}
		},
		methods: {
			clearPhone() {
				this.form.phone = '';
			},
			clearPassword() {
				this.form.password = '';
			}
		},
	}
</script>

<style>
	uni-page-body,
	#account_signin {
		height: 100%;
	}

	#account_signin .mm_bodyer,
	#account_signin .mm_warp,
	#account_signin .mm_grid_1 {
		height: 100%;
	}

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
		font-size: 0.75rem;
	}

	#account_signin .mm_input {
		width: calc(100% - 4rem);
		margin: auto;
		position: relative;
		padding-top: 1rem;
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

	.actoin.hide {
		transform: translate(0, 1rem);
		font-size: 0.75rem;
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

	#account_signin .form_links {
		width: 80%;
		margin-top: -1rem;
	}

	#account_signin .error_icon {
		width: 1.13rem;
		height: 1.13rem;
		margin-right: .5rem;
	}

	#account_signin .fl {
		display: flex;
		align-items: center;
		color: #FFE06E;
	}

	#account_signin .fr,
	.link_text {
		color: #0B76C4;
	}

	#account_signin .login_btn {
		width: 80%;
		background-color: #FF5A6A;
		color: #FFFFFF;
		margin-top: 5rem;
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
