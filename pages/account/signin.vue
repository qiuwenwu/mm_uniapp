<template>
	<!-- 登录页面 -->
	<view class="page_account" id="account_signin">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title>注册</mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.phone" desc="请输入手机"></mm_input>
								<mm_input v-model="form.password" desc="请设置登录密码（6-12位）"></mm_input>
								<mm_group>
									<mm_btn type="info">登录</mm_btn>
								</mm_group>
							</mm_body>
							<mm_foot>
								<mm_div url="/pages/account/signup">注册账号</mm_div>
								<mm_div url="/pages/account/forgot">找回密码</mm_div>
							</mm_foot>
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
					phone: ""
				}
			}
		}
	}
</script>

<style>
</style>
