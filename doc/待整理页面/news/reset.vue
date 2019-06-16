<template>
	 <view class="page_new" id="new_setname">
		 <!-- #ifdef APP-PLUS -->
		 
		 <!-- #endif -->
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
									<mm_item class="item-title">
										<mm_main>
											<mm_title class="font_small">
												请输入原始的登陆密码
											</mm_title>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>
												<input type="text" v-model="query.name" placeholder="请输入密码">
											</mm_title>
											<mm_desc @tap="reset">
												<image class="mm_icon" src="/static/newimg/X.png" mode="widthfix"></image>
											</mm_desc>
										</mm_main>
									</mm_item>
										<mm_item class="item-title">
											<mm_main>
												<mm_title class="font_small">
													请输入修改的登陆密码
												</mm_title>
											</mm_main>
										</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>
												<input type="text" v-model="query.name" placeholder="请再次输入新的密码">
											</mm_title>
											<mm_desc @tap="reset">
												<image class="mm_icon" src="/static/newimg/X.png" mode="widthfix"></image>
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>
												<input type="text" v-model="query.name" placeholder="再次确认登录密码">
											</mm_title>
											<mm_desc @tap="reset">
												<image class="mm_icon" src="/static/newimg/X.png" mode="widthfix"></image>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
				<mm_btn class="mm_btn_info_x">确认修改</mm_btn>
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
				query:{
					name:''
				}
			}
		},
		methods: {

		}
	}
</script>

<style>
.mm_btn{width: auto;padding: .425rem 1.5rem;display: block;margin:1rem auto;width: 8rem;}
.mm_icon{width: 1rem;height: 1rem;margin-top: .25rem;}
.mm_main{padding: .825rem 1rem;margin-left: 0;}
.item-title{background: #ededed;}
.item-title .mm_main{padding: .25rem 1rem;}
.font_small{color: #ccc;}
</style>
