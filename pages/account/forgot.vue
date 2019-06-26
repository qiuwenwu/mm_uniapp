<template>
	<!-- 找回密码页面 -->
	<mm_page class="page_account" id="account_forgot">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block v-show="step == 1">
							<mm_head class="font_small">
								<mm_title>手机号码</mm_title>
							</mm_head>
							<mm_body>
								<mm_input type="number" v-model="form1.phone" desc="请输入账户绑定的手机号码"></mm_input>
								<mm_code type="success-x" v-model="form1.code" desc="请输入验证码" :func="send_msg" :btn="btn_msg"></mm_code>
							</mm_body>
						</mm_block>
						<mm_block v-show="step == 2">
							<mm_head class="font_small">
								<mm_title>重置密码</mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.password" type="password" desc="请设置登录密码（6-12位）"></mm_input>
								<mm_input v-model="password_confirm" type="password" desc="请再次输入密码"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn class="full" v-show="step == 1" type="default" @click.native="step_last()">下一步</mm_btn>
							<mm_btn class="full" v-show="step == 2" type="default" @click.native="submit()">确定</mm_btn>
						</mm_div>
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
		components: {},
		data() {
			return {
				url_submit: "~/user/forget_password",
				form1: {
					phone: "",
					code: "",
				},
				form: {
					phone: "",
					password: "",
				},
				password_confirm: "",
				step: 1,
				btn_msg: "发送验证码"
			}
		},
		methods: {
			// 622813
			send_msg() {
				var _this = this;
				this.$post('~/user/send_sms', {
					phone: this.form1.phone
				}, function(json, status) {
					if (json) {
						if (json.code == 0) {
							var t = 60;
							var sl = setInterval(function() {
								t -= 1;
								if (t < 1) {
									_this.btn_msg = '发送验证码'
									t = 60;
									clearInterval(sl);
								}
								else {
									_this.btn_msg = t + 's';
								}
							}, 1000);
							return;
						}
					}
					_this.alert(json.msg);
				});
			},
			step_last() {
				var _this = this;
				this.$post('~/user/verification', this.form1, function(json, status) {
					if (json) {
						if (json.code === 0) {
							_this.step = 2;
							return;
						}
					}
					_this.alert(json.msg);
				});
			},
			submit_check(param){
				if(param.password == this.password_confirm){
					return true;
				}
				return false;
			},
			submit_before(param){
				param.phone = this.form1.phone;
				return param;
			},
			submit_after(json, status){
				var _this = this;
				if(json){
					if(json.code == 0){
						_this.alert('修改成功');
						setTimeout(function(){
								uni.navigateTo({
								url: './signin'
							});
						}, 2000);
						return;
					}
				}
				_this.alert(json.msg);
			}
		}
	}
</script>

<style>
</style>
