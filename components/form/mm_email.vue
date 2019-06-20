<template>
	<!-- 修改邮箱页面 -->
	<view class="page_info" id="info_email">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>电子邮箱</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input type="text" v-model="form.email" desc="请输入常用邮箱"></mm_input>
								<mm_code v-model="form.code" type="default-x" desc="请输入邮箱验证码"></mm_code>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full">绑定</mm_btn>
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
					email: "",
					code: ""
				}
			}
		}
	}
</script>

<style>
	
</style>
