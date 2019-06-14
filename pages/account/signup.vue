<template>
	<!-- 注册页面 -->
	<mm_page class="page_account" id="account_signup">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<!-- 注册表单 -->
						<mm_block>
							<mm_head>
								<mm_title>注册</mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.phone" desc="请输入手机"></mm_input>
								<mm_input v-model="form.code" desc="请输入验证码"></mm_input>
								<mm_input v-model="form.password" type="password" desc="请设置登录密码（6-12位）"></mm_input>
								<mm_input v-model="form.invitation_code" desc="请输入邀请码"></mm_input>
								<mm_group>
									<mm_btn type="info">确定</mm_btn>
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
					invitation_code: ""
				}
			}
		}
	}
</script>

<style>
</style>
