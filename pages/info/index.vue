<template>
	<!-- 用户信息页面 -->
	<view class="page_info" id="info_index">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item url="./headimg">
										<mm_main class="arrow">
											<mm_title>头像</mm_title>
											<mm_desc>
												<mm_icon src="/static/img/headimg.jpg"></mm_icon>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="./verified">
										<mm_main class="arrow">
											<mm_title>昵称</mm_title>
											<mm_desc>A雷帝A</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="./phone">
										<mm_main class="arrow">
											<mm_title>手机</mm_title>
											<mm_desc>15817188815</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="./email">
										<mm_main class="arrow">
											<mm_title>邮箱</mm_title>
											<mm_desc>573242395@qq.com</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="./verified">
										<mm_main class="arrow">
											<mm_title>实名认证</mm_title>
											<mm_desc>
												<mm_desc class="font_danger">未认证</mm_desc>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="./password">
										<mm_main class="arrow">
											<mm_title>登陆密码</mm_title>
											<mm_desc class="font_info">修改</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="warning-x" class="full">退出账号</mm_btn>
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
				oauth: false
			}
		}
	}
</script>

<style>
	.headimg {
		padding: 2rem;
		float: none;
	}

	.headimg .mm_icon {
		width: 8rem;
		height: 8rem;
		border-radius: 1rem;
		margin: auto !important;
	}

	.headimg .mm_desc {
		clear: both;
		text-align: center;
	}

	.form {
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
</style>
