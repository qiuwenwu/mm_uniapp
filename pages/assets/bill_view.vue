<template>
	<view class="page_assets" id="assets_bill_view">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head class='bill_title'>
								<mm_title>爱奇艺VIP自动续费</mm_title>
								<mm_desc>爱奇艺</mm_desc>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="small">
									<mm_item>
										<mm_main>
											<mm_title>当前状态</mm_title>
											<mm_desc>生效中</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>签约时间</mm_title>
											<mm_desc>2018-08-07 19:07</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>签约账号</mm_title>
											<mm_desc>1600438706</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>扣款方式</mm_title>
											<mm_desc>零钱<text class="font_info">修改</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>详情</mm_title>
											<mm_desc>续费15元/月，套餐到期前一天主动为你发起续费，自动延长一个月的有效期
												，如关闭这不再发起续费</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="arrow" url="http://www.baidu.com">
									<mm_title>扣费记录</mm_title>
								</mm_div>
							</mm_foot>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_group>
							<mm_btn type="warning-x" class="font_small">关闭服务</mm_btn>
						</mm_group>
					</mm_col>
					<mm_col>
						<mm_div id="gb_btn">
							<view class="agreement">
								查看<view>《扣除授权确认书》</view>
							</view>
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
		data() {
			return {
				state: 0
			}
		},
		methods: {}
	}
</script>

<style>
	.bill_title {
		background: #fff;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		text-align: center;
		padding: 1rem 0;
	}

	.bill_title .mm_title {
		font-weight: 600;
	}

	.bill_title .mm_desc {
		font-size: 0.75rem;
		color: #333;
	}
	
	#assets_bill_view .font_info { margin-left: 0.5rem; }
	
	
	.agreement{
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		font-size: .6rem;
		color: #999999;
	}
	.agreement view{
		color: #4c838a;
	};
</style>
