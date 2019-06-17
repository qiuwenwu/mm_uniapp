<template>
	<!-- 修改密码页面 -->
	<view class="page_info" id="info_password">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>手机号码</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input type="number" v-model="form.password" desc="由11位数字组成"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full">保存</mm_btn>
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
				oauth: false,
				form: {
					password: ""
				}
			}
		}
	}
</script>

<style>
	
</style>
