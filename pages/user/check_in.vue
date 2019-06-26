<template>
	<!-- 签到页面 -->
	<mm_page class="page_account" id="account_checkin">
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
						<mm_block class="remain">
							<mm_body>
								<mm_div class="center">
									<mm_title>获得（2019-06-08）所有挖矿收益</mm_title>
									<mm_title class="h4"><text class="price">0.00012345</text><text class="unit">BTC</text></mm_title>
								</mm_div>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title class="center"><text class="font_success">签到说明</text></mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>1.</mm_title>
											<mm_desc>算力挖矿有效时间共365天</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>2.</mm_title>
											<mm_desc>签到后获得所有算力的挖矿收益，算力的有效时间将减少1天。</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>3.</mm_title>
											<mm_desc>未签到无法获得挖矿收益，算力有效时间不变。</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>注：</mm_title>
											<mm_desc>已成功购买的算力才可产生收益</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_group>
							<mm_btn type="info-x" class="font_small" url="/pages/calculation/output_day">查看挖矿收益</mm_btn>
						</mm_group>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
			{{ list }}
	</mm_page>
</template>

<script>
import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true,
				user: this.$store.state.user,
				url_get_list: "~/user/sign_select",
				obj: {
					level: 0
				},
				query:{}
			}
		},
		methods:{
		}
	}
</script>

<style>
	.ll .mm_title {
		width: 1.75rem;
	}

	.unit {
		color: #666;
		margin-left: 0.25rem;
		font-size: 75%;
	}

	#account_checkin .remain {
		height: 9rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
