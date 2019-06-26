<template>
	<!-- 修改密码页面 -->
	<view class="page_info" id="info_password">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col class="pn-b">
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>原始密码</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input type="password" v-model="form.oldPassword" desc="当前登录的密码"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-tb">
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>新的密码</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input type="password" v-model="form.password" desc="由6-12位英文或数字组成"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>确认密码</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input type="password" v-model="password_confirm" desc="请再输入一次新密码"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full" @click.native="submit()">保存</mm_btn>
						</mm_div>
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
				oauth: true,
				url_submit: "~/user/change_password",
				form: {
					oldPassword: "",
					password: ""
				},
				password_confirm: ""
			}
		},
		methods:{
			submit_check(json) {
				if(!json.password || !json.password)
				{
					this.alert('密码不能为空！');
				}
				else if(json.password != this.password_confirm)
				{
					this.alert('新密码和确认密码不一致！');
				}
				else {
					return true;
				}
			}
		}
	}
</script>

<style>

</style>
