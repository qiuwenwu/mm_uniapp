<template>
	<!-- 找回密码页面 -->
	<mm_page class="page_account" id="account_forgot">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_block v-show="step == 1">
							<mm_head>
								<mm_title>身份验证</mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.phone" desc="请输入手机"></mm_input>
								<mm_code v-model="form.code" desc="请输入验证码"></mm_code>
								<mm_group>
									<mm_btn type="info" :fun="step_last">下一步</mm_btn>
								</mm_group>
							</mm_body>
							<mm_foot></mm_foot>
						</mm_block>
						<mm_block v-show="step == 2">
							<mm_head>
								<mm_title>重置密码</mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.password" type="password" desc="请设置登录密码（6-12位）"></mm_input>
								<mm_input v-model="form.password_confirm" type="password" desc="请再次输入密码"></mm_input>
								<mm_group>
									<mm_btn type="info" :fun="submit">确定</mm_btn>
								</mm_group>
							</mm_body>
							<mm_foot></mm_foot>
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
		components: {},
		data() {
			return {
				url_submit: "~/test",
				form: {
					phone: "",
					code: "",
					password: "",
					password_confirm: ""
				},
				step: 1
			}
		},
		methods: {
			step_last(){
				this.step = 2
			}
		}
	}
</script>

<style>
</style>
