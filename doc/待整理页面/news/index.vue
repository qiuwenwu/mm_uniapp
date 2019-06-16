<template>
	 <view class="page_new" id="new_index">
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
				<mm_grid col="1" class="space_x">
					<!-- 格子 -->
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
									<mm_item url="">
										<mm_main class="arrow">
											<mm_title>头像</mm_title>
											<mm_desc>
												<image class="mm_icon" src="/static/img/ad.jpg" mode="widthfix"></image>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item url="/pages/news/setname">
										<mm_main class="arrow">
											<mm_title>昵称</mm_title>
											<mm_desc>掐指一算，币要涨了</mm_desc>
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
				</mm_grid>
				<mm_btn class="mm_btn_info_x">切换账号</mm_btn>
			</mm_warp>
		</mm_bodyer>
	</view>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		components: {
		
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
#new_index .mm_main{margin-left: 0;padding-left: 1rem;}
.mm_btn{width: auto;padding: .425rem 1.5rem;display: block;margin:1rem auto;width: 8rem;}
</style>
