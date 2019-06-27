<template>
	<!-- 用户中心首页 -->
	<view class="page" id="user_index">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<mm_block class="account">
							<mm_body class="lr">
								<mm_list col="1" class="big">
									<mm_item url="/pages/info/index">
										<mm_side class="headimg">
											<mm_icon :src="user.avatar"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title><text>{{ user.nickname }}</text><text class="vip">VIP{{user.level}}</text></mm_title>
											<mm_desc>账号:{{user.phone}}</mm_desc>
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
									<mm_item url="/pages/assets/index">
										<mm_side>
											<mm_icon class="linear_green" src="<i class='fa fa-credit-card'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>资产</mm_title>
										</mm_main>
									</mm_item>
									<mm_item url="/pages/mall/order_list">
										<mm_side>
											<mm_icon class="linear_yellow" src="<i class='fa fa-file-text-o'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>订单</mm_title>
										</mm_main>
									</mm_item>
									<mm_item url="/pages/home/collect">
										<mm_side>
											<mm_icon class="linear_red" src="<i class='fa fa-heart'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>收藏</mm_title>
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
									<mm_item url="/pages/home/question_list">
										<mm_side>
											<mm_icon class="linear_purple" src="<i class='fa fa-question-circle'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>帮助</mm_title>
										</mm_main>
									</mm_item>
									<mm_item url="/pages/home/special?title=联系客服">
										<mm_side>
											<mm_icon class="linear_blue" src="<i class='fa fa-phone'></i>"></mm_icon>
										</mm_side>
										<mm_main class="arrow">
											<mm_title>客服</mm_title>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default-x" class="full" @click.native="sign()"><mm_icon src="/static/img/check_in_b.png"></mm_icon><text class="check_in">签到</text></mm_btn>
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
				user: this.$store.state.user
			}
		},
		methods:{
			sign() {
				var _this = this;
				this.$get("~/user/sign", function(json, status) {
					if(json.code == 0){
						// _this.alert(json.msg);
						uni.navigateTo({
							url: './check_in'
						})
					}
					else{
						_this.alert(json.msg);
					}
				});
			},
			get(){
				this.$get_agent();
			}
		}
	}
</script>

<style>
	.check_in { margin-left: 0.5rem; }
	.account .mm_item {
		padding: 1rem 0;
	}

	#user_index .headimg .mm_icon {
		border-radius: 0.5rem;
	}
	#user_index .vip {
		margin-left: 0.5rem;
	}

</style>
