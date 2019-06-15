<template>
	<!-- 用户信息页面 -->
	<view class="page" id="user_info">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
			<mm_warp></mm_warp>
		</mm_header>
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item class="big" url="/">
										<mm_side>
											<image class="mm_icon" src="/static/img/ad.jpg" mode="widthfix"></image>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>昵称</mm_title>
											<mm_desc>账号:15817188815</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>手机</mm_title>
											<mm_desc>19925301011</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main class="arrow">
											<mm_title>邮箱</mm_title>
											<mm_desc>绑定</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="/pages/news/reset">
										<mm_main class="arrow">
											<mm_title>登陆密码</mm_title>
											<mm_desc>修改</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="warning-x" class="full">切换账号</mm_btn>
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
	.form {
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
</style>
